import Link from "next/link";
import { notFound } from "next/navigation";
import { GameHost } from "@/components/game/GameHost";
import { getChapterWithGame } from "@/lib/store";

export default async function ChapterGamePage({
  params,
}: {
  params: Promise<{ bookId: string; chapterId: string }>;
}) {
  const { bookId, chapterId } = await params;
  const chapter = await getChapterWithGame(chapterId, { publishedOnly: true });

  if (!chapter || !chapter.gameConfig) {
    notFound();
  }

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-xl flex-col gap-4 px-4 pb-10 pt-5">
      <header className="rounded-3xl bg-white p-4 shadow-sm">
        <Link href={`/books/${bookId}`} className="text-xs font-black uppercase tracking-wide text-slate-500">
          Back to chapters
        </Link>
        <p className="mt-2 text-xs font-black uppercase tracking-wide text-sky-600">Chapter {chapter.number}</p>
        <h1 className="font-title text-2xl font-black text-slate-900">{chapter.title}</h1>
        <p className="mt-1 text-sm text-slate-600">{chapter.theme}</p>
      </header>

      <GameHost chapter={chapter} />
    </main>
  );
}
