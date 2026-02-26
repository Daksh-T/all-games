import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

function getArg(name: string): string | undefined {
  const index = process.argv.indexOf(name);
  if (index === -1) {
    return undefined;
  }
  return process.argv[index + 1];
}

type ChapterDetection = {
  chapters: Array<{ chapterNumber: number; heading: string; confidence: number }>;
};

async function main() {
  const chaptersPath = getArg("--chapters");
  const bookCode = (getArg("--book") ?? "1L").toUpperCase();
  const out = getArg("--out") ?? `./tmp/ocr/${bookCode}-drafts.json`;

  if (!chaptersPath) {
    throw new Error("Usage: tsx scripts/ocr/build-drafts.ts --chapters ./tmp/ocr/1L-chapters.json --book 1L --out ./tmp/ocr/1L-drafts.json");
  }

  const raw = await readFile(resolve(chaptersPath), "utf8");
  const parsed = JSON.parse(raw) as ChapterDetection;

  const drafts = parsed.chapters.map((chapter) => ({
    id: `${bookCode.toLowerCase()}-ch${chapter.chapterNumber}`,
    chapterNumber: chapter.chapterNumber,
    title: chapter.heading,
    theme: "Needs manual review",
    summary: "Auto-generated draft. Confirm wording before publishing.",
    confidence: chapter.confidence,
    qualityChecklist: {
      headingConfirmed: chapter.confidence >= 0.7,
      themeConfirmed: false,
      gameConfigured: false,
      approvedByHuman: false,
    },
  }));

  await writeFile(resolve(out), JSON.stringify({ bookCode, drafts }, null, 2), "utf8");
  console.log(`Wrote ${drafts.length} chapter drafts for ${bookCode}.`);
}

main().catch((error) => {
  console.error("build-drafts failed:", error.message);
  process.exit(1);
});
