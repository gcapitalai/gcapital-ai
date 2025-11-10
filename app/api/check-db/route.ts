import { NextResponse } from "next/server";
import db from "../../../lib/db";

export const runtime = "nodejs";

export async function GET() {
  try {
    await db.execute("SELECT 1;");
    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message }, { status: 500 });
  }
}
