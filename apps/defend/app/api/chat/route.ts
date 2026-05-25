import { NextRequest, NextResponse } from "next/server";
import { getChatResponse } from "@portfolio/knowledge";

/**
 * Defend chat API — ready for when chatbot UI is enabled post-migration.
 * Set ENABLE_DEFEND_CHAT=true to allow requests (disabled by default in v1).
 */
export async function POST(request: NextRequest) {
  if (process.env.ENABLE_DEFEND_CHAT !== "true") {
    return NextResponse.json(
      {
        error:
          "Defend chatbot is not enabled yet. Visit kennyonifade.com to ask general questions.",
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
