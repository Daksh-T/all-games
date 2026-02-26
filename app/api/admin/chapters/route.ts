import { NextRequest, NextResponse } from "next/server";
import { getAdminChapters } from "@/lib/store";
import { ensureAdmin } from "@/lib/http";

export async function GET(request: NextRequest) {
  const authError = ensureAdmin(request);
  if (authError) {
    return authError;
  }

  const bookCode = request.nextUrl.searchParams.get("book");
  const chapters = await getAdminChapters(bookCode ?? undefined);

  return NextResponse.json({ chapters });
}
