import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

function getArg(name: string): string | undefined {
  const index = process.argv.indexOf(name);
  if (index === -1) {
    return undefined;
  }
  return process.argv[index + 1];
}

type OcrInput = {
  pages: Array<{ file: string; text: string }>;
};

async function main() {
  const input = getArg("--ocr");
  const out = getArg("--out") ?? "./tmp/ocr/chapters.json";

  if (!input) {
    throw new Error("Usage: tsx scripts/ocr/detect-chapters.ts --ocr ./tmp/ocr/1L-text.json --out ./tmp/ocr/1L-chapters.json");
  }

  const raw = await readFile(resolve(input), "utf8");
  const data = JSON.parse(raw) as OcrInput;

  const chapters: Array<{ pageFile: string; chapterNumber: number; heading: string; confidence: number }> = [];
  const regex = /(chapter|unit)\s+(\d{1,2})[:\-\s]+([^\n]+)/i;

  for (const page of data.pages) {
    const match = page.text.match(regex);
    if (!match) {
      continue;
    }

    chapters.push({
      pageFile: page.file,
      chapterNumber: Number(match[2]),
      heading: match[3].trim(),
      confidence: Math.min(0.95, 0.55 + page.text.length / 5000),
    });
  }

  await writeFile(resolve(out), JSON.stringify({ chapters }, null, 2), "utf8");
  console.log(`Detected ${chapters.length} chapter markers.`);
}

main().catch((error) => {
  console.error("detect-chapters failed:", error.message);
  process.exit(1);
});
