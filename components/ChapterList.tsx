"use client";

import Link from "next/link";
import { useMemo } from "react";
import { readProgress } from "@/lib/progress";
import { ChapterWithGame } from "@/lib/types";

type ChapterListProps = {
  bookCode: string;
  chapters: ChapterWithGame[];
};

export function ChapterList({ bookCode, chapters }: ChapterListProps) {
  const progress = useMemo(() => readProgress(), []);

  return (
    <div className="grid gap-3">
      {chapters.map((chapter) => {
        const progressItem = progress[chapter.id];
        return (
          <Link
            key={chapter.id}
            href={`/books/${bookCode.toLowerCase()}/chapters/${chapter.id}`}
            className="lift-card rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-sky-400"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Chapter {chapter.number}</p>
                <h3 className="text-base font-black text-slate-900">{chapter.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{chapter.theme}</p>
              </div>
              {progressItem ? (
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-900">
                  {progressItem.stars} star
                </span>
              ) : (
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">new</span>
              )}
            </div>
          </Link>
        );
      })}
    </div>
  );
}
