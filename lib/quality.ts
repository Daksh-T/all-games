import { ChapterWithGame } from "@/lib/types";

type QualityResult = {
  ok: boolean;
  reasons: string[];
};

export function evaluatePublishReadiness(chapter: ChapterWithGame | null): QualityResult {
  if (!chapter) {
    return { ok: false, reasons: ["Chapter not found."] };
  }

  const reasons: string[] = [];

  if (chapter.title.trim().length < 6) {
    reasons.push("Chapter title is too short.");
  }

  if (chapter.theme.trim().length < 6) {
    reasons.push("Chapter theme is too short.");
  }

  if (chapter.summary.trim().length < 30) {
    reasons.push("Chapter summary must be at least 30 characters.");
  }

  if (!chapter.gameConfig) {
    reasons.push("Chapter does not have a game config.");
  } else {
    if (!chapter.gameConfig.contentPayload?.title) {
      reasons.push("Game title is missing.");
    }

    if (!chapter.gameConfig.contentPayload?.instructions) {
      reasons.push("Game instructions are missing.");
    }

    const rounds = chapter.gameConfig.contentPayload?.rounds;
    if (!Array.isArray(rounds) || rounds.length < 3) {
      reasons.push("Game needs at least 3 rounds.");
    }

    if (chapter.gameConfig.roundTimeSec < 30 || chapter.gameConfig.roundTimeSec > 180) {
      reasons.push("Round time must be between 30 and 180 seconds.");
    }

    if (chapter.gameConfig.winRules.trim().length < 8) {
      reasons.push("Win rules are too short.");
    }
  }

  return {
    ok: reasons.length === 0,
    reasons,
  };
}
