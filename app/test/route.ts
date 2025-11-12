import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export const runtime = "edge"; // Render necesita este runtime

export async function GET() {
  try {
    const { data, error } = await supabase.from("test_table").select("*");
    if (error) throw error;
    return NextResponse.json({ ok: true, data });
  } catch (error: any) {
    console.error("Supabase fetch error:", error);
    return NextResponse.json({ ok: false, error: error.message });
  }
}
