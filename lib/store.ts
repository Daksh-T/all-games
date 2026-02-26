import { Chapter as PrismaChapter, GameConfig as PrismaGameConfig, Prisma } from "@prisma/client";
import { hasDatabase, prisma } from "@/lib/prisma";
import { BOOKS, CHAPTERS, GAME_CONFIGS } from "@/lib/seed-content";
import {
  Book,
  Chapter,
  ChapterWithGame,
  GameConfig,
  MechanicType,
  PublishStatus,
} from "@/lib/types";

type ChapterPatchInput = Partial<Pick<Chapter, "title" | "theme" | "summary" | "publishStatus">>;
type GamePatchInput = Partial<Pick<GameConfig, "mechanicType" | "roundTimeSec" | "winRules" | "contentPayload">>;

export type BookSummary = Book & {
  chapterCount: number;
  publishedCount: number;
};

function clone<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}

const memory = {
  books: clone(BOOKS),
  chapters: clone(CHAPTERS),
  games: clone(GAME_CONFIGS),
};

function toPrismaJson(value: unknown): Prisma.InputJsonValue {
  return value as Prisma.InputJsonValue;
}

function attachGame(chapter: Chapter): ChapterWithGame {
  const game = memory.games.find((item) => item.chapterId === chapter.id) ?? null;
  return {
    ...chapter,
    gameConfig: game,
  };
}

function mapPrismaChapter(chapter: PrismaChapter, game: PrismaGameConfig | null): ChapterWithGame {
  const mappedGame: GameConfig | null = game
    ? {
        id: game.id,
        chapterId: game.chapterId,
        mechanicType: game.mechanicType as MechanicType,
        roundTimeSec: game.roundTimeSec,
        winRules: game.winRules,
        isPublished: game.isPublished,
        contentPayload: game.contentPayload as GameConfig["contentPayload"],
      }
    : null;

  return {
    id: chapter.id,
    bookId: chapter.bookId,
    number: chapter.number,
    title: chapter.title,
    theme: chapter.theme,
    summary: chapter.summary,
    publishStatus: chapter.publishStatus as PublishStatus,
    gameConfig: mappedGame,
  };
}

export async function getBooksSummary(): Promise<BookSummary[]> {
  if (!hasDatabase || !prisma) {
    return memory.books
      .map((book) => {
        const chapters = memory.chapters.filter((chapter) => chapter.bookId === book.id);
        const publishedCount = chapters.filter((chapter) => chapter.publishStatus === "PUBLISHED").length;
        return {
          ...book,
          chapterCount: chapters.length,
          publishedCount,
        };
      })
      .sort((a, b) => a.sortOrder - b.sortOrder);
  }

  const books = await prisma.book.findMany({
    include: {
      chapters: {
        select: {
          id: true,
          publishStatus: true,
        },
      },
    },
    orderBy: {
      sortOrder: "asc",
    },
  });

  return books.map((book) => ({
    id: book.id,
    code: book.code,
    title: book.title,
    status: book.status,
    sortOrder: book.sortOrder,
    chapterCount: book.chapters.length,
    publishedCount: book.chapters.filter((chapter) => chapter.publishStatus === "PUBLISHED").length,
  }));
}

export async function getBookByCode(code: string): Promise<Book | null> {
  if (!hasDatabase || !prisma) {
    return memory.books.find((book) => book.code.toLowerCase() === code.toLowerCase()) ?? null;
  }

  const book = await prisma.book.findUnique({
    where: {
      code: code.toUpperCase(),
    },
  });

  if (!book) {
    return null;
  }

  return {
    id: book.id,
    code: book.code,
    title: book.title,
    status: book.status,
    sortOrder: book.sortOrder,
  };
}

export async function getChaptersByBookCode(
  code: string,
  options?: { publishedOnly?: boolean }
): Promise<ChapterWithGame[]> {
  const publishedOnly = options?.publishedOnly ?? false;

  if (!hasDatabase || !prisma) {
    const book = memory.books.find((item) => item.code.toLowerCase() === code.toLowerCase());
    if (!book) {
      return [];
    }

    return memory.chapters
      .filter((chapter) => chapter.bookId === book.id)
      .filter((chapter) => (publishedOnly ? chapter.publishStatus === "PUBLISHED" : true))
      .sort((a, b) => a.number - b.number)
      .map(attachGame);
  }

  const book = await prisma.book.findUnique({ where: { code: code.toUpperCase() } });
  if (!book) {
    return [];
  }

  const chapters = await prisma.chapter.findMany({
    where: {
      bookId: book.id,
      ...(publishedOnly ? { publishStatus: "PUBLISHED" } : {}),
    },
    include: {
      gameConfig: true,
    },
    orderBy: {
      number: "asc",
    },
  });

  return chapters.map((chapter) => mapPrismaChapter(chapter, chapter.gameConfig));
}

export async function getChapterWithGame(chapterId: string, options?: { publishedOnly?: boolean }): Promise<ChapterWithGame | null> {
  const publishedOnly = options?.publishedOnly ?? false;

  if (!hasDatabase || !prisma) {
    const chapter = memory.chapters.find((item) => item.id === chapterId) ?? null;
    if (!chapter) {
      return null;
    }

    if (publishedOnly && chapter.publishStatus !== "PUBLISHED") {
      return null;
    }

    return attachGame(chapter);
  }

  const chapter = await prisma.chapter.findFirst({
    where: {
      id: chapterId,
      ...(publishedOnly ? { publishStatus: "PUBLISHED" } : {}),
    },
    include: {
      gameConfig: true,
    },
  });

  if (!chapter) {
    return null;
  }

  return mapPrismaChapter(chapter, chapter.gameConfig);
}

export async function getAdminChapters(bookCode?: string): Promise<ChapterWithGame[]> {
  if (!bookCode) {
    if (!hasDatabase || !prisma) {
      return memory.chapters
        .slice()
        .sort((a, b) => a.number - b.number)
        .map(attachGame);
    }

    const chapters = await prisma.chapter.findMany({
      include: { gameConfig: true },
      orderBy: [{ bookId: "asc" }, { number: "asc" }],
    });

    return chapters.map((chapter) => mapPrismaChapter(chapter, chapter.gameConfig));
  }

  return getChaptersByBookCode(bookCode, { publishedOnly: false });
}

export async function patchChapter(id: string, input: ChapterPatchInput): Promise<ChapterWithGame | null> {
  if (!hasDatabase || !prisma) {
    const chapter = memory.chapters.find((item) => item.id === id);
    if (!chapter) {
      return null;
    }

    Object.assign(chapter, input);
    return attachGame(chapter);
  }

  const chapter = await prisma.chapter.update({
    where: { id },
    data: input,
    include: { gameConfig: true },
  });

  return mapPrismaChapter(chapter, chapter.gameConfig);
}

export async function patchGame(chapterId: string, input: GamePatchInput): Promise<ChapterWithGame | null> {
  if (!hasDatabase || !prisma) {
    const chapter = memory.chapters.find((item) => item.id === chapterId);
    if (!chapter) {
      return null;
    }

    const existingGame = memory.games.find((item) => item.chapterId === chapterId);
    if (existingGame) {
      Object.assign(existingGame, input);
    } else {
      memory.games.push({
        id: `game-${chapterId}`,
        chapterId,
        mechanicType: input.mechanicType ?? "TAP_CORRECT",
        roundTimeSec: input.roundTimeSec ?? 60,
        winRules: input.winRules ?? "Reach the target score.",
        isPublished: false,
        contentPayload: input.contentPayload ?? {
          title: "Untitled",
          instructions: "Add instructions",
          rounds: [],
          successMessage: "Nice job",
          failureMessage: "Try again",
        },
      });
    }

    return attachGame(chapter);
  }

  const existing = await prisma.gameConfig.findUnique({ where: { chapterId } });
  if (!existing) {
    await prisma.gameConfig.create({
      data: {
        id: `game-${chapterId}`,
        chapterId,
        mechanicType: input.mechanicType ?? "TAP_CORRECT",
        roundTimeSec: input.roundTimeSec ?? 60,
        winRules: input.winRules ?? "Reach the target score.",
        isPublished: false,
        contentPayload: toPrismaJson(
          input.contentPayload ?? {
            title: "Untitled",
            instructions: "Add instructions",
            rounds: [],
            successMessage: "Nice job",
            failureMessage: "Try again",
          }
        ),
      },
    });
  } else {
    const { contentPayload, ...rest } = input;
    await prisma.gameConfig.update({
      where: { chapterId },
      data: {
        ...rest,
        ...(contentPayload ? { contentPayload: toPrismaJson(contentPayload) } : {}),
      },
    });
  }

  const chapter = await prisma.chapter.findUnique({
    where: { id: chapterId },
    include: { gameConfig: true },
  });

  if (!chapter) {
    return null;
  }

  return mapPrismaChapter(chapter, chapter.gameConfig);
}

export async function publishChapter(chapterId: string): Promise<ChapterWithGame | null> {
  if (!hasDatabase || !prisma) {
    const chapter = memory.chapters.find((item) => item.id === chapterId);
    const game = memory.games.find((item) => item.chapterId === chapterId);
    if (!chapter || !game) {
      return null;
    }

    chapter.publishStatus = "PUBLISHED";
    game.isPublished = true;

    return attachGame(chapter);
  }

  await prisma.$transaction(async (tx) => {
    await tx.chapter.update({
      where: { id: chapterId },
      data: { publishStatus: "PUBLISHED" },
    });

    await tx.gameConfig.update({
      where: { chapterId },
      data: { isPublished: true },
    });
  });

  const chapter = await prisma.chapter.findUnique({
    where: { id: chapterId },
    include: { gameConfig: true },
  });

  if (!chapter) {
    return null;
  }

  return mapPrismaChapter(chapter, chapter.gameConfig);
}

export async function seedStore(): Promise<void> {
  if (!hasDatabase || !prisma) {
    return;
  }

  for (const book of BOOKS) {
    await prisma.book.upsert({
      where: { id: book.id },
      update: {
        code: book.code,
        title: book.title,
        status: book.status,
        sortOrder: book.sortOrder,
      },
      create: {
        id: book.id,
        code: book.code,
        title: book.title,
        status: book.status,
        sortOrder: book.sortOrder,
      },
    });
  }

  for (const chapter of CHAPTERS) {
    await prisma.chapter.upsert({
      where: { id: chapter.id },
      update: {
        title: chapter.title,
        number: chapter.number,
        theme: chapter.theme,
        summary: chapter.summary,
        publishStatus: chapter.publishStatus,
        bookId: chapter.bookId,
      },
      create: {
        ...chapter,
      },
    });
  }

  for (const game of GAME_CONFIGS) {
    await prisma.gameConfig.upsert({
      where: { chapterId: game.chapterId },
      update: {
        mechanicType: game.mechanicType,
        roundTimeSec: game.roundTimeSec,
        winRules: game.winRules,
        isPublished: game.isPublished,
        contentPayload: toPrismaJson(game.contentPayload),
      },
      create: {
        id: game.id,
        chapterId: game.chapterId,
        mechanicType: game.mechanicType,
        roundTimeSec: game.roundTimeSec,
        winRules: game.winRules,
        isPublished: game.isPublished,
        contentPayload: toPrismaJson(game.contentPayload),
      },
    });
  }
}
