import { mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
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

async function main() {
  const pdf = getArg("--pdf");
  const pages = getArg("--pages");
  const out = getArg("--out") ?? "./tmp/ocr/images";

  if (!pdf || !pages) {
    throw new Error("Usage: tsx scripts/ocr/extract-pages.ts --pdf ../StudentBook_1L.pdf --pages 1-20 --out ./tmp/ocr/1L/images");
  }

  const [startRaw, endRaw] = pages.split("-");
  const start = Number(startRaw);
  const end = Number(endRaw);

  if (!Number.isInteger(start) || !Number.isInteger(end) || start < 1 || end < start) {
    throw new Error("Pages must use start-end format, e.g. 1-20.");
  }

  const outputPrefix = resolve(out, "page");
  await mkdir(dirname(outputPrefix), { recursive: true });

  await exec("pdftoppm", ["-f", String(start), "-l", String(end), "-png", resolve(pdf), outputPrefix]);

  console.log(`Extracted pages ${start}-${end} to ${resolve(out)}`);
}

main().catch((error) => {
  console.error("extract-pages failed:", error.message);
  console.error("Tip: install poppler tools so pdftoppm is available.");
  process.exit(1);
});
