import { NextRequest, NextResponse } from "next/server";
import { ensureAdmin } from "@/lib/http";
import { evaluatePublishReadiness } from "@/lib/quality";
import { getChapterWithGame, publishChapter } from "@/lib/store";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ chapterId: string }> }
) {
  const authError = ensureAdmin(request);
  if (authError) {
    return authError;
  }

  const { chapterId } = await params;
  const chapter = await getChapterWithGame(chapterId, { publishedOnly: false });
  const quality = evaluatePublishReadiness(chapter);

  if (!quality.ok) {
    return NextResponse.json(
      {
        error: "Chapter failed quality checks",
        reasons: quality.reasons,
      },
      { status: 400 }
    );
  }

  const published = await publishChapter(chapterId);
  if (!published) {
    return NextResponse.json({ error: "Chapter not found" }, { status: 404 });
  }

  return NextResponse.json({ chapter: published });
}
