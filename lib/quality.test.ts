import { describe, expect, it } from "vitest";
import { evaluatePublishReadiness } from "@/lib/quality";
import { CHAPTERS, GAME_CONFIGS } from "@/lib/seed-content";

describe("evaluatePublishReadiness", () => {
  it("accepts valid seeded chapter", () => {
    const chapter = CHAPTERS[0];
    const gameConfig = GAME_CONFIGS.find((game) => game.chapterId === chapter.id) ?? null;
    const result = evaluatePublishReadiness({ ...chapter, gameConfig });
    expect(result.ok).toBe(true);
  });

  it("rejects missing game config", () => {
    const chapter = CHAPTERS[0];
    const result = evaluatePublishReadiness({ ...chapter, gameConfig: null });
    expect(result.ok).toBe(false);
    expect(result.reasons.length).toBeGreaterThan(0);
  });
});
