// pages/api/ping.ts hoặc app/api/ping/route.ts (Next.js 13+)
import { NextResponse } from "next/server";

export async function GET() {
  // Chỉ trả status 200, không query DB
  return NextResponse.json({ ok: true });
}