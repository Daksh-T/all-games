import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { hasDatabase, prisma } from "@/lib/prisma";

function getArg(name: string): string | undefined {
  const index = process.argv.indexOf(name);
  if (index === -1) {
    return undefined;
  }
  return process.argv[index + 1];
}

type DraftFile = {
  bookCode: string;
  drafts: Array<{
    id: string;
    chapterNumber: number;
    title: string;
    theme: string;
    summary: string;
  }>;
};

async function main() {
  const filePath = getArg("--file");
  if (!filePath) {
    throw new Error("Usage: tsx scripts/content/import-drafts.ts --file ./tmp/ocr/1L-drafts.json");
  }

  const raw = await readFile(resolve(filePath), "utf8");
  const data = JSON.parse(raw) as DraftFile;

  if (!hasDatabase || !prisma) {
    console.log("DATABASE_URL missing. Dry run only.");
    console.log(JSON.stringify(data, null, 2));
    return;
  }

  const book = await prisma.book.findUnique({ where: { code: data.bookCode.toUpperCase() } });
  if (!book) {
    throw new Error(`Book ${data.bookCode} not found in database.`);
  }

  for (const draft of data.drafts) {
    await prisma.chapter.upsert({
      where: { id: draft.id },
      update: {
        title: draft.title,
        number: draft.chapterNumber,
        theme: draft.theme,
        summary: draft.summary,
      },
      create: {
        id: draft.id,
        number: draft.chapterNumber,
        title: draft.title,
        theme: draft.theme,
        summary: draft.summary,
        publishStatus: "DRAFT",
        bookId: book.id,
      },
    });
  }

  console.log(`Imported ${data.drafts.length} drafts into ${data.bookCode}.`);
}

main().catch((error) => {
  console.error("import-drafts failed:", error.message);
  process.exit(1);
});
