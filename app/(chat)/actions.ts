"use server";

export const runtime = "nodejs";

import { generateText, type UIMessage } from "ai";
import { cookies } from "next/headers";
import type { VisibilityType } from "@/components/visibility-selector";
import { myProvider } from "@/lib/ai/providers";
import { titlePrompt } from "@/lib/ai/prompts";
