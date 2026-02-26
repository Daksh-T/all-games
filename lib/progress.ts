import { ProgressRecord } from "@/lib/types";

const STORAGE_KEY = "esl_game_progress_v1";

type ProgressMap = Record<string, ProgressRecord>;

export function readProgress(): ProgressMap {
  if (typeof window === "undefined") {
    return {};
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return {};
    }

    return JSON.parse(raw) as ProgressMap;
  } catch {
    return {};
  }
}

export function writeProgress(record: ProgressRecord): void {
  if (typeof window === "undefined") {
    return;
  }

  const current = readProgress();
  const existing = current[record.chapterId];

  current[record.chapterId] =
    existing && existing.bestScore > record.bestScore
      ? {
          ...existing,
          stars: existing.stars >= record.stars ? existing.stars : record.stars,
          completedAt: record.completedAt,
        }
      : record;

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
}
