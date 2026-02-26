import { readdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { execFile } from "node:child_process";
import { promisify } from "node:util";

const exec = promisify(execFile);

function getArg(name: string): string | undefined {
  const index = process.argv.indexOf(name);
  if (index === -1) {
    return undefined;
  }
  return process.argv[index + 1];
}

async function ocrImage(path: string): Promise<string> {
  const { stdout } = await exec("tesseract", [path, "stdout", "-l", "eng"]);
  return stdout;
}

async function main() {
  const imagesDir = getArg("--images");
  const out = getArg("--out") ?? "./tmp/ocr/text.json";

  if (!imagesDir) {
    throw new Error("Usage: tsx scripts/ocr/run-tesseract.ts --images ./tmp/ocr/1L/images --out ./tmp/ocr/1L-text.json");
  }

  const files = (await readdir(resolve(imagesDir)))
    .filter((item) => item.endsWith(".png"))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  const pages: Array<{ file: string; text: string }> = [];

  for (const file of files) {
    const fullPath = resolve(imagesDir, file);
    const text = await ocrImage(fullPath);
    pages.push({ file, text });
    console.log(`OCR complete: ${file}`);
  }

  await writeFile(resolve(out), JSON.stringify({ pages }, null, 2), "utf8");
  console.log(`Saved OCR output to ${resolve(out)}`);
}

main().catch((error) => {
  console.error("run-tesseract failed:", error.message);
  console.error("Tip: install tesseract first (brew install tesseract).");
  process.exit(1);
});
