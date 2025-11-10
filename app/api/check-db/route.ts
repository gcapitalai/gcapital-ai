import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

export const runtime = "nodejs"; // 👈 Importante: fuerza el uso de Node.js en Vercel

export async function GET() {
  try {
    // Consulta simple para comprobar conexión con la base de datos
    await prisma.$queryRawUnsafe("SELECT 1;");
    return NextResponse.json({ ok: true });
  } catch (e: any) {
    console.error("❌ Error en conexión DB:", e.message);
    return NextResponse.json({ ok: false, error: e.message }, { status: 500 });
  }
}
