import { NextRequest, NextResponse } from "next/server";
import { getBookByCode, getChaptersByBookCode } from "@/lib/store";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ bookId: string }> }
) {
  const { bookId } = await params;
  const publishedOnly = request.nextUrl.searchParams.get("admin") !== "1";
  const book = await getBookByCode(bookId);

  if (!book) {
    return NextResponse.json({ error: "Book not found" }, { status: 404 });
  }

  const chapters = await getChaptersByBookCode(bookId, { publishedOnly });

  return NextResponse.json({
    book,
    chapters,
  });
}
