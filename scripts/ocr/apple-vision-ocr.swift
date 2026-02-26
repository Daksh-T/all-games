import CoreGraphics
import Foundation
import Vision

struct PageOCR: Codable {
    let page: Int
    let text: String
    let confidence: Float
}

struct OCRResult: Codable {
    let pdf: String
    let startPage: Int
    let endPage: Int
    let pages: [PageOCR]
}

func argValue(_ name: String, default defaultValue: String? = nil) -> String? {
    guard let index = CommandLine.arguments.firstIndex(of: name), index + 1 < CommandLine.arguments.count else {
        return defaultValue
    }
    return CommandLine.arguments[index + 1]
}

func parseInt(_ value: String?, fallback: Int) -> Int {
    guard let value, let intValue = Int(value) else {
        return fallback
    }
    return intValue
}

func renderPageImage(_ page: CGPDFPage, scale: CGFloat) -> CGImage? {
    let mediaBox = page.getBoxRect(.mediaBox)
    let width = max(1, Int(mediaBox.width * scale))
    let height = max(1, Int(mediaBox.height * scale))

    guard let context = CGContext(
        data: nil,
        width: width,
        height: height,
        bitsPerComponent: 8,
        bytesPerRow: 0,
        space: CGColorSpaceCreateDeviceRGB(),
        bitmapInfo: CGImageAlphaInfo.premultipliedLast.rawValue
    ) else {
        return nil
    }

    context.setFillColor(CGColor(red: 1, green: 1, blue: 1, alpha: 1))
    context.fill(CGRect(x: 0, y: 0, width: width, height: height))

    context.saveGState()
    context.translateBy(x: 0, y: CGFloat(height))
    context.scaleBy(x: scale, y: -scale)
    context.drawPDFPage(page)
    context.restoreGState()

    return context.makeImage()
}

func recognizeText(from cgImage: CGImage) throws -> (String, Float) {
    let request = VNRecognizeTextRequest()
    request.recognitionLevel = .accurate
    request.usesLanguageCorrection = true
    request.minimumTextHeight = 0.01

    let handler = VNImageRequestHandler(cgImage: cgImage, options: [:])
    try handler.perform([request])

    guard let observations = request.results else {
        return ("", 0)
    }

    var lines: [String] = []
    var confidence: Float = 0

    for observation in observations {
        guard let candidate = observation.topCandidates(1).first else {
            continue
        }
        lines.append(candidate.string)
        confidence += candidate.confidence
    }

    let average = observations.isEmpty ? 0 : confidence / Float(observations.count)
    return (lines.joined(separator: "\n"), average)
}

guard let pdfPath = argValue("--pdf") else {
    fputs("Usage: swift scripts/ocr/apple-vision-ocr.swift --pdf <path> [--start 1] [--end N] [--scale 2.0] --out <file>\n", stderr)
    exit(1)
}

guard let outputPath = argValue("--out") else {
    fputs("Missing --out path\n", stderr)
    exit(1)
}

guard let document = CGPDFDocument(URL(fileURLWithPath: pdfPath) as CFURL) else {
    fputs("Could not open PDF at \(pdfPath)\n", stderr)
    exit(1)
}

let startPage = max(1, parseInt(argValue("--start"), fallback: 1))
let endPage = min(document.numberOfPages, parseInt(argValue("--end"), fallback: document.numberOfPages))
let scale = CGFloat(Double(argValue("--scale", default: "1.6")!) ?? 1.6)

if startPage > endPage {
    fputs("Invalid page range: start > end\n", stderr)
    exit(1)
}

var rows: [PageOCR] = []
rows.reserveCapacity(endPage - startPage + 1)

for pageNumber in startPage...endPage {
    autoreleasepool {
        guard let page = document.page(at: pageNumber),
              let image = renderPageImage(page, scale: scale)
        else {
            rows.append(PageOCR(page: pageNumber, text: "", confidence: 0))
            print("OCR page \(pageNumber)/\(endPage) skipped")
            return
        }

        do {
            let (text, confidence) = try recognizeText(from: image)
            rows.append(PageOCR(page: pageNumber, text: text, confidence: confidence))
            print("OCR page \(pageNumber)/\(endPage) confidence=\(String(format: "%.2f", confidence))")
        } catch {
            rows.append(PageOCR(page: pageNumber, text: "", confidence: 0))
            print("OCR page \(pageNumber)/\(endPage) failed: \(error.localizedDescription)")
        }
    }
}

let payload = OCRResult(pdf: pdfPath, startPage: startPage, endPage: endPage, pages: rows)
let data = try JSONEncoder().encode(payload)
let jsonString = String(data: data, encoding: .utf8) ?? "{}"
try jsonString.write(toFile: outputPath, atomically: true, encoding: .utf8)
print("Saved OCR JSON to \(outputPath)")
