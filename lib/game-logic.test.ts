import { describe, expect, it } from "vitest";
import { computeStars, formatScore } from "@/lib/game-logic";

describe("computeStars", () => {
  it("returns 3 stars for >=90%", () => {
    expect(computeStars(9, 10)).toBe(3);
  });

  it("returns 2 stars for >=70%", () => {
    expect(computeStars(7, 10)).toBe(2);
  });

  it("returns 1 star for low score", () => {
    expect(computeStars(2, 10)).toBe(1);
  });
});

describe("formatScore", () => {
  it("formats score string", () => {
    expect(formatScore(5, 8)).toBe("5/8");
  });
});
