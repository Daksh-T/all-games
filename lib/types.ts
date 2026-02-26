export const MECHANIC_TYPES = [
  "TAP_CORRECT",
  "SWIPE_TRUE_FALSE",
  "CARD_FLIP_MATCH",
  "SENTENCE_SORT",
  "SPEED_MULTIPLE_CHOICE",
  "LETTER_TILE_SPELL",
  "DRAG_WORD_BANK",
  "DIALOG_GAP",
  "CATEGORY_SORT",
  "IMAGE_WORD_MATCH",
  "ODDBALL_OUT",
  "MEMORY_PATH",
] as const;

export type MechanicType = (typeof MECHANIC_TYPES)[number];

export type PublishStatus = "DRAFT" | "READY" | "PUBLISHED";
export type BookStatus = "ACTIVE" | "UPCOMING";

export type Book = {
  id: string;
  code: string;
  title: string;
  status: BookStatus;
  sortOrder: number;
};

export type Chapter = {
  id: string;
  bookId: string;
  number: number;
  title: string;
  theme: string;
  summary: string;
  publishStatus: PublishStatus;
};

export type GameRound = Record<string, unknown>;

export type GamePayload = {
  title: string;
  instructions: string;
  rounds: GameRound[];
  successMessage: string;
  failureMessage: string;
};

export type GameConfig = {
  id: string;
  chapterId: string;
  mechanicType: MechanicType;
  roundTimeSec: number;
  winRules: string;
  isPublished: boolean;
  contentPayload: GamePayload;
};

export type ChapterWithGame = Chapter & {
  gameConfig: GameConfig | null;
};

export type BookWithChapters = Book & {
  chapters: ChapterWithGame[];
};

export type ProgressRecord = {
  chapterId: string;
  bestScore: number;
  stars: 1 | 2 | 3;
  completedAt: string;
};
