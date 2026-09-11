import { NextRequest, NextResponse } from "next/server";
import { getChatResponse } from "@portfolio/knowledge";

/**
 * Defend chat API.
 * Enabled when ENABLE_DEFEND_CHAT=true, or when an AI key is configured
 * (unless ENABLE_DEFEND_CHAT is explicitly "false"). Production can turn
 * it on with ENABLE_DEFEND_CHAT=true + OPENAI_API_KEY / GEMINI_API_KEY.
 */
function isDefendChatEnabled() {
  const flag = process.env.ENABLE_DEFEND_CHAT;
  if (flag === "false") return false;
  if (flag === "true") return true;
  return Boolean(process.env.OPENAI_API_KEY || process.env.GEMINI_API_KEY);
}

export async function POST(request: NextRequest) {
  if (!isDefendChatEnabled()) {
    return NextResponse.json(
      {
        error:
          "Defend chatbot is disabled. Set ENABLE_DEFEND_CHAT=true and an AI API key, or visit kennyonifade.com.",
      },
      { status: 503 },
    );
  }

  try {
    const { message, conversationHistory = [] } = await request.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 },
      );
    }

    const response = await getChatResponse(
      "defend",
      message,
      conversationHistory,
    );

    return NextResponse.json({ response });
  } catch (error: unknown) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Failed to get AI response",
      },
      { status: 500 },
    );
  }
}
