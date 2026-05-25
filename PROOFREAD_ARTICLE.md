# 🧠 How I Integrated AI into My Next.js Portfolio

## Turning my portfolio into something that actually talks back.

Have you ever wished your portfolio could do more than just show off projects — like actually hold a conversation, explain your journey, and answer questions about your skills?

That was the thought that kept bugging me.

As a frontend engineer diving deep into AI, I didn't just want another sleek website. I wanted an intelligent portfolio — one that could represent me 24/7, like a personal assistant that knows me inside out.

In this article, I'll walk you through how I built an AI-powered portfolio using Next.js, TypeScript, and the OpenAI API, and how you can make yours do the same.

## 🚀 Why I Decided to Add AI to My Portfolio

For years, developer portfolios have followed the same pattern — an "About Me," a "Projects" section, and a "Contact" form. Clean, functional… but lifeless.

I wanted something different — an experience that feels alive.
When people land on my site, I want them to interact with my work, ask questions like:

"What projects show your backend skills?"

"How did you build SchoolOrbit?"

"What are your AI learning goals?"

…and get meaningful, accurate answers in real time.

That's what led to the creation of my AI Chat Assistant, trained on my personal developer data.

## 🧩 Step 1: Building the Foundation with Next.js

The portfolio runs on Next.js 14 (App Router), written entirely in TypeScript.

I started by setting up a clean, minimal base using:

- Tailwind CSS for design
- Framer Motion for smooth animations
- Three.js / React Three Fiber for a futuristic visual feel
- React Context to manage the chatbot's conversation state

```bash
npx create-next-app@latest my-portfolio --typescript
cd my-portfolio
npm install tailwindcss framer-motion three @react-three/fiber @react-three/drei
```

I structured the project like this:

```
my-portfolio/
 ├─ app/
 │   ├─ page.tsx
 │   ├─ layout.tsx
 │   ├─ api/
 │   │   └─ chat/
 │   │       └─ route.ts
 ├─ components/
 │   └─ ui/
 │       └─ Chatbot.tsx
 └─ lib/
     └─ portfolio-knowledge.ts
```

## 🧠 Step 2: Creating the Knowledge Base

The knowledge base is what makes the chatbot sound like me.

I wrote it as a structured TypeScript file with a template literal — containing my bio, skills, projects, and design philosophy.

Here's a simplified version:

```typescript
// lib/portfolio-knowledge.ts
export const portfolioKnowledge = `
# About Me
I'm a frontend engineer passionate about merging elegant design with intelligent systems.
Skilled in React, Next.js, and currently exploring AI/ML concepts.

# Skills
React (90%), Next.js (90%), TypeScript (85%), Framer Motion, Tailwind CSS, TensorFlow.js

# Projects
- AI Dashboard (Next.js + TensorFlow.js)
- Neural Network Visualizer (Three.js)
- SchoolOrbit (Admin automation for schools)
`;
```

This gives the AI context — so when users ask "What's your strongest skill?" it doesn't hallucinate; it answers accurately.

## 🧩 Step 3: Connecting the OpenAI API

Next, I connected the OpenAI API via a backend route in Next.js.
This route acts as the brain of the chatbot.

The implementation supports multiple AI providers (OpenAI, Google Gemini, and Hugging Face) with OpenAI as the default. Here's a simplified version focusing on OpenAI:

```typescript
// app/api/chat/route.ts
import { NextRequest, NextResponse } from "next/server";
import { portfolioKnowledge } from "@/lib/portfolio-knowledge";

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

Answer questions in a friendly, professional manner. If asked about something not in the knowledge base, politely say you don't have that information. Keep responses concise but informative.`,
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

export async function POST(request: NextRequest) {
  try {
    const { message, conversationHistory = [] } = await request.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const response = await getOpenAIResponse(message, conversationHistory);
    return NextResponse.json({ response });
  } catch (error: unknown) {
    console.error("Chat API error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Failed to get AI response";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
```

This endpoint listens for user input and responds intelligently — without exposing your API key. Note that I'm using the native `fetch` API directly rather than the OpenAI SDK, which keeps the bundle size smaller and gives more control over the implementation.

## 💬 Step 4: Building the Chat UI

For the chat interface, I used a minimalist floating widget — similar to what you'd see on a modern SaaS site. The component includes smooth animations powered by Framer Motion, proper loading states, and conversation history management.

Here's a simplified version of the key parts:

```typescript
// components/ui/Chatbot.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hello! I'm Kehinde Onifade's AI assistant. Ask me anything about this portfolio or the developer behind it!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
          conversationHistory: messages,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.response },
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, I'm having trouble connecting right now. Please try again later or check your API configuration.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        className="fixed bottom-4 right-4 z-50 w-14 h-14 rounded-full glass border border-accent-blue/30 flex items-center justify-center"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Chat icon */}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-20 right-4 w-96 h-[600px] glass rounded-lg border border-white/10 flex flex-col"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
          >
            {/* Messages area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={
                    message.role === "user" ? "text-right" : "text-left"
                  }
                >
                  <div
                    className={`inline-block rounded-lg p-3 ${
                      message.role === "user"
                        ? "bg-gradient-to-br from-accent-blue to-accent-purple"
                        : "glass border border-white/10"
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-dark-secondary border border-white/10 rounded-lg px-4 py-2 text-white"
                />
                <button
                  onClick={sendMessage}
                  disabled={isLoading || !input.trim()}
                  className="px-4 py-2 bg-gradient-to-r from-accent-blue to-accent-purple rounded-lg text-white"
                >
                  Send
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
```

Now anyone visiting your site can chat with your "AI twin" — and it feels natural, personal, and accurate.

## ⚙️ Step 5: Hosting and Deployment

I deployed my site using Vercel, connected to my custom domain — kennyonifade.com.

Vercel made it seamless:

- Connect GitHub repo → auto builds on push
- Add environment variables (`.env.local`) for OpenAI API key
- Instant global deployment

## 🌍 The Result

My portfolio now feels alive.

It doesn't just show who I am — it tells it.

Visitors can ask questions, explore my skills, and get accurate, AI-powered answers — all without me lifting a finger.

This is more than just a showcase.

It's an AI conversation about me, running on my own tech stack.
