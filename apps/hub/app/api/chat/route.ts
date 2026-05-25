import { NextRequest, NextResponse } from "next/server";
import { getChatResponse, type PortfolioSite } from "@portfolio/knowledge";

const SITE: PortfolioSite = "hub";

export async function POST(request: NextRequest) {
  try {
    const { message, conversationHistory = [] } = await request.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 },
      );
    }

    const response = await getChatResponse(SITE, message, conversationHistory);

    return NextResponse.json({ response });
  } catch (error: unknown) {
    console.error("Chat API error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Failed to get AI response";

    return NextResponse.json(
      {
        error: errorMessage,
        details:
          process.env.NODE_ENV === "development" && error instanceof Error
            ? error.stack
            : undefined,
      },
      { status: 500 },
    );
  }
}
