import { NextResponse } from "next/server";
import { getBooksSummary } from "@/lib/store";

export async function GET() {
  const books = await getBooksSummary();
  return NextResponse.json({ books });
}
