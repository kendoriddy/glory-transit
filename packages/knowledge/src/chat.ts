import { getKnowledgeForSite, type PortfolioSite } from "./compose";

const AI_PROVIDER = (process.env.AI_PROVIDER || "openai").toLowerCase();

function buildSystemPrompt(site: PortfolioSite): string {
  const knowledge = getKnowledgeForSite(site);
  return `You are a helpful AI assistant for Kenny Onifade's portfolio. Use the following information to answer questions:

${knowledge}

Answer questions in a friendly, professional manner. If asked about something not in the knowledge base, politely say you don't have that information. Keep responses concise but informative.`;
}

async function getOpenAIResponse(
  message: string,
  conversationHistory: Array<{ role: string; content: string }>,
  systemPrompt: string,
) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error("OPENAI_API_KEY is not set");
  }

  const messages = [
    { role: "system", content: systemPrompt },
    ...conversationHistory.slice(-10),
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
  return data.choices[0].message.content as string;
}

async function getGeminiResponse(
  message: string,
  conversationHistory: Array<{ role: string; content: string }>,
  systemInstruction: string,
) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not set");
  }

  const modelsToTry = process.env.GEMINI_MODEL
    ? [process.env.GEMINI_MODEL]
    : [
        "gemini-1.5-flash-latest",
        "gemini-1.5-pro-latest",
        "gemini-1.5-flash",
        "gemini-1.5-pro",
        "gemini-pro",
      ];

  const apiVersion = process.env.GEMINI_API_VERSION || "v1";
  const contents: Array<{ role: string; parts: Array<{ text: string }> }> = [];

  conversationHistory.slice(-10).forEach((msg) => {
    contents.push({
      role: msg.role === "user" ? "user" : "model",
      parts: [{ text: msg.content }],
    });
  });

  contents.push({
    role: "user",
    parts: [{ text: message }],
  });

  let lastError: Error | null = null;

  for (const modelName of modelsToTry) {
    const attemptContents = [...contents];
    const attemptRequestBody: {
      contents: Array<{ role: string; parts: Array<{ text: string }> }>;
      systemInstruction?: { parts: Array<{ text: string }> };
    } = { contents: attemptContents };

    if (
      modelName.includes("1.5") ||
      modelName.includes("2.0") ||
      modelName.includes("latest")
    ) {
      attemptRequestBody.systemInstruction = {
        parts: [{ text: systemInstruction }],
      };
    } else if (attemptContents.length > 0) {
      attemptContents[0].parts[0].text = `${systemInstruction}\n\n${attemptContents[0].parts[0].text}`;
    }

    try {
      let response = await fetch(
        `https://generativelanguage.googleapis.com/${apiVersion}/models/${modelName}:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(attemptRequestBody),
        },
      );

      if (!response.ok && apiVersion === "v1") {
        response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(attemptRequestBody),
          },
        );
      }

      if (response.ok) {
        const data = await response.json();
        if (data.candidates?.[0]?.content?.parts?.[0]?.text) {
          return data.candidates[0].content.parts[0].text as string;
        }
        throw new Error("Unexpected response format from Gemini API");
      }

      const errorData = await response
        .json()
        .catch(() => ({ error: { message: "Unknown error" } }));
      lastError = new Error(
        errorData.error?.message || `HTTP ${response.status}`,
      );
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));
    }
  }

  throw new Error(
    `All Gemini models failed. Last error: ${lastError?.message}`,
  );
}

async function getHuggingFaceResponse(
  message: string,
  conversationHistory: Array<{ role: string; content: string }>,
  systemPrompt: string,
) {
  const apiKey = process.env.HUGGING_FACE_API_KEY;
  const model = process.env.HUGGING_FACE_MODEL || "microsoft/DialoGPT-medium";

  const context = `Portfolio Information:\n${systemPrompt}\n\n`;
  const conversationText = conversationHistory
    .slice(-5)
    .map(
      (msg) => `${msg.role === "user" ? "User" : "Assistant"}: ${msg.content}`,
    )
    .join("\n");

  const prompt = `${context}${conversationText}\nUser: ${message}\nAssistant:`;

  const headers: HeadersInit = { "Content-Type": "application/json" };
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
        parameters: { max_new_tokens: 250, temperature: 0.7 },
      }),
    },
  );

  if (!response.ok) {
    throw new Error("Hugging Face API error");
  }

  const data = await response.json();
  if (Array.isArray(data) && data[0]?.generated_text) {
    return data[0].generated_text.replace(prompt, "").trim();
  }
  if (data[0]?.summary_text) {
    return data[0].summary_text;
  }
  throw new Error("Unexpected response format from Hugging Face");
}

export async function getChatResponse(
  site: PortfolioSite,
  message: string,
  conversationHistory: Array<{ role: string; content: string }> = [],
): Promise<string> {
  const systemPrompt = buildSystemPrompt(site);

  switch (AI_PROVIDER) {
    case "openai":
      return getOpenAIResponse(message, conversationHistory, systemPrompt);
    case "gemini":
      return getGeminiResponse(message, conversationHistory, systemPrompt);
    case "huggingface":
      return getHuggingFaceResponse(message, conversationHistory, systemPrompt);
    default:
      throw new Error(
        `Unsupported AI provider: ${AI_PROVIDER}. Set AI_PROVIDER to 'openai', 'gemini', or 'huggingface'`,
      );
  }
}
