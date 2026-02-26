import Link from "next/link";
import { notFound } from "next/navigation";
import { ChapterList } from "@/components/ChapterList";
import { getBookByCode, getChaptersByBookCode } from "@/lib/store";

export default async function BookPage({
  params,
}: {
  params: Promise<{ bookId: string }>;
}) {
  const { bookId } = await params;
  const book = await getBookByCode(bookId);

  if (!book) {
    notFound();
  }

  const chapters = await getChaptersByBookCode(bookId, { publishedOnly: true });

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-xl flex-col gap-5 px-4 pb-10 pt-5">
      <header className="rounded-3xl bg-white p-4 shadow-sm">
        <Link href="/" className="text-xs font-black uppercase tracking-wide text-slate-500">
          Back
        </Link>
        <p className="mt-2 text-xs font-black uppercase tracking-wide text-sky-600">{book.code}</p>
        <h1 className="font-title text-2xl font-black text-slate-900">{book.title}</h1>
        <p className="mt-1 text-sm text-slate-600">{chapters.length} chapter games ready</p>
      </header>

      {chapters.length === 0 ? (
        <p className="rounded-2xl bg-amber-50 p-4 text-sm font-semibold text-amber-900">
          This book is not playable yet. More chapters are coming soon.
        </p>
      ) : (
        <ChapterList bookCode={book.code} chapters={chapters} />
      )}
    </main>
  );
}
