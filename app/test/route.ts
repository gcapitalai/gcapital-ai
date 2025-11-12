import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export const runtime = "edge"; // 👈 Esto es lo que Render necesita

export async function GET() {
  try {
    const { data, error } = await supabase.from("test_table").select("*");
    if (error) throw error;
    return NextResponse.json({ ok: true, data });
  } catch (error: any) {
    return NextResponse.json({ ok: false, error: error.message });
  }
}
