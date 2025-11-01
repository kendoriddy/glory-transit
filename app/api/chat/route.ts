import { NextRequest, NextResponse } from "next/server";
import { portfolioKnowledge } from "@/lib/portfolio-knowledge";

/**
 * Chat API Route
 * Handles chat requests and integrates with AI providers
 *
 * Supported providers:
 * - OpenAI (GPT-3.5-turbo) - Recommended, very cheap
 * - Google Gemini - Free tier available
 * - Hugging Face Inference - Free for smaller models
 */

// Configure which AI provider to use (default: openai)
const AI_PROVIDER = (process.env.AI_PROVIDER || "openai").toLowerCase();

async function getOpenAIResponse(
  message: string,
  conversationHistory: Array<{ role: string; content: string }>
) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error("OPENAI_API_KEY is not set");
  }

  // Build conversation messages
  const messages = [
    {
      role: "system",
      content: `You are a helpful AI assistant for a developer portfolio website. Use the following information to answer questions about the portfolio owner and their work:

${portfolioKnowledge}

Answer questions in a friendly, professional manner. If asked about something not in the knowledge base, politely say you don&apos;t have that information. Keep responses concise but informative.`,
    },
    ...conversationHistory.slice(-10), // Keep last 10 messages for context
    { role: "user", content: message },
  ];

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages,
      temperature: 0.7,
      max_tokens: 500,
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error?.message || "OpenAI API error");
  }

  const data = await response.json();
  return data.choices[0].message.content;
}

async function getGeminiResponse(
  message: string,
  conversationHistory: Array<{ role: string; content: string }>
) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not set");
  }

  // List of models to try in order of preference
  const modelsToTry = process.env.GEMINI_MODEL
    ? [process.env.GEMINI_MODEL]
    : [
        "gemini-1.5-flash-latest",
        "gemini-1.5-pro-latest",
        "gemini-1.5-flash",
        "gemini-1.5-pro",
        "gemini-pro",
      ];

  // Use stable v1 API (not v1beta)
  const apiVersion = process.env.GEMINI_API_VERSION || "v1";

  // Build system instruction
  const systemInstruction = `You are a helpful AI assistant for a developer portfolio website. Use the following information to answer questions:

${portfolioKnowledge}

Answer questions in a friendly, professional manner. If asked about something not in the knowledge base, politely say you don&apos;t have that information. Keep responses concise but informative.`;

  // Build conversation history in Gemini format
  const contents: Array<{ role: string; parts: Array<{ text: string }> }> = [];

  // Add conversation history (last 10 messages for context)
  conversationHistory.slice(-10).forEach((msg) => {
    contents.push({
      role: msg.role === "user" ? "user" : "model",
      parts: [{ text: msg.content }],
    });
  });

  // Add current user message
  contents.push({
    role: "user",
    parts: [{ text: message }],
  });

  let lastError: Error | null = null;

  // Try each model until one works
  for (const modelName of modelsToTry) {
    // Reset contents for each attempt
    const attemptContents = [...contents];

    // Build request body for this model
    const attemptRequestBody: {
      contents: Array<{ role: string; parts: Array<{ text: string }> }>;
      systemInstruction?: { parts: Array<{ text: string }> };
    } = {
      contents: attemptContents,
    };

    // Add systemInstruction if using a model that supports it (1.5+ models)
    if (
      modelName.includes("1.5") ||
      modelName.includes("2.0") ||
      modelName.includes("latest")
    ) {
      attemptRequestBody.systemInstruction = {
        parts: [{ text: systemInstruction }],
      };
    } else {
      // For older models, prepend system instruction to first message
      if (attemptContents.length > 0) {
        attemptContents[0].parts[0].text = `${systemInstruction}\n\n${attemptContents[0].parts[0].text}`;
      }
    }

    try {
      // Try v1 API (stable) first
      let response = await fetch(
        `https://generativelanguage.googleapis.com/${apiVersion}/models/${modelName}:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(attemptRequestBody),
        }
      );

      // If v1 fails, try v1beta as fallback
      if (!response.ok && apiVersion === "v1") {
        response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(attemptRequestBody),
          }
        );
      }

      if (response.ok) {
        const data = await response.json();

        // Handle response format
        if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
          return data.candidates[0].content.parts[0].text;
        }

        throw new Error("Unexpected response format from Gemini API");
      } else {
        // Store error and try next model
        const errorData = await response
          .json()
          .catch(() => ({ error: { message: "Unknown error" } }));
        lastError = new Error(
          errorData.error?.message || `HTTP ${response.status}`
        );
        continue;
      }
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));
      continue;
    }
  }

  // If all models failed, throw helpful error
  throw new Error(
    `All Gemini models failed. Last error: ${lastError?.message}. ` +
      `Try visiting /api/chat/list-models to see available models, or set GEMINI_MODEL in your .env.local. ` +
      `Common working models: gemini-1.5-flash-latest, gemini-1.5-pro-latest`
  );
}

async function getHuggingFaceResponse(
  message: string,
  conversationHistory: Array<{ role: string; content: string }>
) {
  const apiKey = process.env.HUGGING_FACE_API_KEY;
  const model = process.env.HUGGING_FACE_MODEL || "microsoft/DialoGPT-medium";

  // Build conversation context
  const context = `Portfolio Information:\n${portfolioKnowledge}\n\n`;
  const conversationText = conversationHistory
    .slice(-5)
    .map(
      (msg) => `${msg.role === "user" ? "User" : "Assistant"}: ${msg.content}`
    )
    .join("\n");

  const prompt = `${context}${conversationText}\nUser: ${message}\nAssistant:`;

  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (apiKey) {
    headers.Authorization = `Bearer ${apiKey}`;
  }

  const response = await fetch(
    `https://api-inference.huggingface.co/models/${model}`,
    {
      method: "POST",
      headers,
      body: JSON.stringify({
        inputs: prompt,
        parameters: {
          max_new_tokens: 250,
          temperature: 0.7,
        },
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Hugging Face API error");
  }

  const data = await response.json();
  // Hugging Face returns different formats depending on the model
  if (Array.isArray(data) && data[0]?.generated_text) {
    return data[0].generated_text.replace(prompt, "").trim();
  }
  if (data[0]?.summary_text) {
    return data[0].summary_text;
  }
  throw new Error("Unexpected response format from Hugging Face");
}

export async function POST(request: NextRequest) {
  try {
    const { message, conversationHistory = [] } = await request.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    let response: string;

    switch (AI_PROVIDER) {
      case "openai":
        response = await getOpenAIResponse(message, conversationHistory);
        break;
      case "gemini":
        response = await getGeminiResponse(message, conversationHistory);
        break;
      case "huggingface":
        response = await getHuggingFaceResponse(message, conversationHistory);
        break;
      default:
        return NextResponse.json(
          {
            error: `Unsupported AI provider: ${AI_PROVIDER}. Set AI_PROVIDER to 'openai', 'gemini', or 'huggingface'`,
          },
          { status: 400 }
        );
    }

    return NextResponse.json({ response });
  } catch (error: unknown) {
    console.error("Chat API error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Failed to get AI response";
    const errorStack = error instanceof Error ? error.stack : undefined;

    return NextResponse.json(
      {
        error: errorMessage,
        details:
          process.env.NODE_ENV === "development" ? errorStack : undefined,
      },
      { status: 500 }
    );
  }
}
