import { NextRequest, NextResponse } from "next/server";
import { getChapterWithGame } from "@/lib/store";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ chapterId: string }> }
) {
  const { chapterId } = await params;
  const includeDraft = request.nextUrl.searchParams.get("admin") === "1";

  const chapter = await getChapterWithGame(chapterId, { publishedOnly: !includeDraft });

  if (!chapter || !chapter.gameConfig) {
    return NextResponse.json({ error: "Chapter game not found" }, { status: 404 });
  }

  return NextResponse.json({ chapter });
}
