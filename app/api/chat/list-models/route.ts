import { NextResponse } from "next/server";

/**
 * Helper endpoint to list available Gemini models
 * This helps debug which models your API key has access to
 */
export async function GET() {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "GEMINI_API_KEY is not set" },
      { status: 400 }
    );
  }

  try {
    // Try v1 API first
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models?key=${apiKey}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      // Try v1beta as fallback
      const betaResponse = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!betaResponse.ok) {
        const error = await betaResponse
          .json()
          .catch(() => ({ error: { message: "Unknown error" } }));
        return NextResponse.json(
          { error: error.error?.message || "Failed to fetch models" },
          { status: betaResponse.status }
        );
      }

      const data = await betaResponse.json();
      return NextResponse.json({
        apiVersion: "v1beta",
        models: data.models || [],
        supportedModels: (data.models || [])
          .filter(
            (m: any) =>
              m.supportedGenerationMethods?.includes("generateContent") &&
              m.name?.includes("gemini")
          )
          .map((m: any) => ({
            name: m.name,
            displayName: m.displayName,
            description: m.description,
          })),
      });
    }

    const data = await response.json();
    return NextResponse.json({
      apiVersion: "v1",
      models: data.models || [],
      supportedModels: (data.models || [])
        .filter(
          (m: any) =>
            m.supportedGenerationMethods?.includes("generateContent") &&
            m.name?.includes("gemini")
        )
        .map((m: any) => ({
          name: m.name,
          displayName: m.displayName,
          description: m.description,
        })),
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Failed to list models" },
      { status: 500 }
    );
  }
}
