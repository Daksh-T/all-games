"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { readProgress } from "@/lib/progress";

type BookSummary = {
  id: string;
  code: string;
  title: string;
  status: "ACTIVE" | "UPCOMING";
  chapterCount: number;
  publishedCount: number;
};

export function BookBrowser() {
  const [books, setBooks] = useState<BookSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState<Record<string, number>>({});

  useEffect(() => {
    async function load() {
      try {
        const response = await fetch("/api/books");
        const data = (await response.json()) as { books: BookSummary[] };
        setBooks(data.books);
      } catch {
        setBooks([]);
      } finally {
        setLoading(false);
      }
    }

    load();
    const stored = readProgress();
    const chapterIds = Object.keys(stored);
    const grouped = chapterIds.reduce<Record<string, number>>((acc, chapterId) => {
      const code = chapterId.split("-")[0].toUpperCase();
      acc[code] = (acc[code] ?? 0) + 1;
      return acc;
    }, {});
    setProgress(grouped);
  }, []);

  const active = useMemo(() => books.filter((book) => book.status === "ACTIVE"), [books]);
  const upcoming = useMemo(() => books.filter((book) => book.status !== "ACTIVE"), [books]);

  if (loading) {
    return <p className="text-sm font-semibold text-slate-500">Loading books...</p>;
  }

  return (
    <div className="space-y-6">
      <section className="space-y-3">
        <h2 className="text-lg font-black text-slate-900">Playable Books</h2>
        <div className="grid gap-3">
          {active.map((book) => (
            <Link
              key={book.id}
              href={`/books/${book.code.toLowerCase()}`}
              className="lift-card rounded-3xl border border-sky-200 bg-white p-4 shadow-sm transition hover:border-sky-400"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-bold text-sky-600">{book.code}</p>
                  <h3 className="text-lg font-black text-slate-900">{book.title}</h3>
                </div>
                <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-bold text-sky-900">
                  {book.publishedCount} chapters
                </span>
              </div>
              <p className="mt-3 text-xs text-slate-600">
                Completed on this device: {progress[book.code] ?? 0}/{book.publishedCount}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-2">
        <h2 className="text-sm font-black uppercase tracking-wide text-slate-600">Coming Next</h2>
        <div className="grid grid-cols-3 gap-2">
          {upcoming.map((book) => (
            <div key={book.id} className="rounded-2xl border border-slate-200 bg-slate-100 px-3 py-2 text-center">
              <p className="text-sm font-black text-slate-700">{book.code}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
