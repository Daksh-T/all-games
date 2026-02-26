import { NextRequest, NextResponse } from "next/server";
import { chapterPatchSchema } from "@/lib/validators";
import { patchChapter } from "@/lib/store";
import { ensureAdmin } from "@/lib/http";

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const authError = ensureAdmin(request);
  if (authError) {
    return authError;
  }

  const body = await request.json().catch(() => null);
  const parsed = chapterPatchSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid chapter payload", details: parsed.error.flatten() }, { status: 400 });
  }

  const { id } = await params;
  const updated = await patchChapter(id, parsed.data);

  if (!updated) {
    return NextResponse.json({ error: "Chapter not found" }, { status: 404 });
  }

  return NextResponse.json({ chapter: updated });
}
