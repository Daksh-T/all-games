import { NextRequest, NextResponse } from "next/server";
import { ADMIN_COOKIE_NAME, verifyAdminSession } from "@/lib/admin-auth";

export function jsonError(message: string, status = 400) {
  return NextResponse.json({ error: message }, { status });
}

export function ensureAdmin(request: NextRequest): NextResponse | null {
  const value = request.cookies.get(ADMIN_COOKIE_NAME)?.value;
  const ok = verifyAdminSession(value);
  if (!ok) {
    return jsonError("Unauthorized", 401);
  }

  return null;
}
