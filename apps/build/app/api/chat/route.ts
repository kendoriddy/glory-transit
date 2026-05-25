import { NextRequest, NextResponse } from "next/server";
import { getChatResponse } from "@portfolio/knowledge";

export async function POST(request: NextRequest) {
  try {
    const { message, conversationHistory = [] } = await request.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 },
      );
    }

    const response = await getChatResponse(
      "build",
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
