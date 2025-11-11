import { NextResponse } from "next/server";
import { createClient } from "@libsql/client";

export const runtime = "nodejs";

export async function GET() {
  try {
    const db = createClient({
      url: process.env.DATABASE_URL!,
    });
    const result = await db.execute("SELECT 'DB CONNECTED' as message;");
    return NextResponse.json({ ok: true, result });
  } catch (e: any) {
    console.error("❌ Error connecting to Turso:", e);
    return NextResponse.json({ ok: false, error: e.message }, { status: 500 });
  }
}
