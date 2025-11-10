import { NextResponse } from "next/server";
export const runtime = "nodejs";

export async function GET() {
  try {
    // Simula autenticación invitado
    const guestSession = {
      user: { name: "Guest User", email: "guest@example.com" },
      createdAt: new Date().toISOString(),
    };

    return NextResponse.json({ ok: true, session: guestSession });
  } catch (e: any) {
    console.error("❌ Error en /api/auth/guest:", e);
    return NextResponse.json({ ok: false, error: e.message }, { status: 500 });
  }
}
