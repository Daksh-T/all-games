import { NextRequest, NextResponse } from "next/server";
import { gamePatchSchema } from "@/lib/validators";
import { patchGame } from "@/lib/store";
import { ensureAdmin } from "@/lib/http";

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ chapterId: string }> }
) {
  const authError = ensureAdmin(request);
  if (authError) {
    return authError;
  }

  const body = await request.json().catch(() => null);
  const parsed = gamePatchSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid game payload", details: parsed.error.flatten() }, { status: 400 });
  }

  const { chapterId } = await params;
  const updated = await patchGame(chapterId, parsed.data);

  if (!updated) {
    return NextResponse.json({ error: "Chapter not found" }, { status: 404 });
  }

  return NextResponse.json({ chapter: updated });
}
