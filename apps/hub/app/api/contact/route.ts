import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 },
      );
    }

    const scriptUrl =
      process.env.GOOGLE_APPS_SCRIPT_URL ||
      process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL;

    if (!scriptUrl) {
      console.error("Google Apps Script URL not configured");
      return NextResponse.json(
        {
          success: false,
          error:
            "Server configuration error. Please contact the administrator.",
        },
        { status: 500 },
      );
    }

    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      return NextResponse.json(
        { success: false, error: result.error || "Failed to submit form" },
        { status: response.status },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Form submitted successfully",
    });
  } catch (error) {
    console.error("Contact form API error:", error);
    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Failed to send message. Please try again later.",
      },
      { status: 500 },
    );
  }
}
