export function computeStars(score: number, total: number): 1 | 2 | 3 {
  if (total <= 0) {
    return 1;
  }

  const pct = (score / total) * 100;
  if (pct >= 90) {
    return 3;
  }

  if (pct >= 70) {
    return 2;
  }

  return 1;
}

export function formatScore(score: number, total: number): string {
  return `${score}/${total}`;
}
