# Human QA — portfolio chatbot

Checklist for the restored AI chatbot on **hub**, **build**, and **defend**.

**Corner:** bottom-**right** (explicit follow-up; an earlier brief said bottom-left).  
**Mount:** one FAB per app, from the root layout (`SiteChatbot` → `<Chatbot site="…" />`).  
**FAB delay:** the button animates in after ~1s. Hub also shows a ~1.5s first-visit loader — wait for both.

---

## Setup

```bash
npm install
cp .env.example apps/hub/.env.local
cp .env.example apps/build/.env.local
cp .env.example apps/defend/.env.local
```

In each `.env.local`, set a real key (never commit these files):

```bash
AI_PROVIDER=openai
OPENAI_API_KEY=sk-...          # required for a real reply (or GEMINI_API_KEY + AI_PROVIDER=gemini)
```

**Defend extra:** `ENABLE_DEFEND_CHAT=true` (already in `.env.example`).  
If this is `false`, the FAB still shows but `/api/chat` returns 503.  
If the flag is unset, the API is on whenever an AI key is present.

```bash
npm run dev          # hub :3000, build :3001, defend :3002
# or one app: npm run dev:hub | npm run dev:build | npm run dev:defend
```

Without an API key, Send still **passes** if the panel shows the fallback:  
“Sorry, I'm having trouble connecting right now. Please try again later.”  
That means the client posted to `/api/chat`. A real answer is the pass when a key is set.

---

## Pass / fail at a glance

| # | Pass | Fail |
|---|------|------|
| 1 | Exactly **one** circular chat button, **bottom-right**, on hub, build, and defend. Desktop and a phone-width window. Panel does not overflow the viewport. | Missing FAB, **bottom-left**, two FABs, or panel clipped off-screen. |
| 2 | Click opens; click again closes. After going to another route in the same app, still **one** FAB (layout does not stack a second bot). | Stuck open, cannot close, or a second FAB after navigation. |
| 3 | Greeting matches the site (below). Send hits `POST /api/chat` and returns either a real answer or the fallback above. | Wrong greeting, request goes somewhere other than `/api/chat`, or a JS crash. |
| 4 | No chatbot on anything that is not hub / build / defend. This repo has no other Next apps. | A fourth surface showing the bot. |
| 5 | You can complete this doc and (optionally) a short screen recording from the paths below. | Cannot reproduce on a clean `npm run dev`. |

---

## Greetings (must match)

| App | Greeting |
|-----|----------|
| Hub | Hello! Ask me about Kenny's work across software engineering, AI engineering, and cybersecurity. |
| Build | Hello! Ask me about engineering projects, case studies, and how Kenny builds production systems. |
| Defend | Hello! Ask me about Kenny's cybersecurity work and the Defend portfolio. |

---

## Click paths

Use a desktop width (~1280px) first, then repeat **1a + open/close** at ~390px wide (mobile-safe).

### Hub — http://localhost:3000

1. Open `/`. Wait for the loader and FAB.
2. Confirm **one** FAB, **bottom-right**.
3. Click FAB → panel “AI Assistant” + hub greeting.
4. Type `What skills do you have?` → **Send**.
5. Click FAB again → panel closes; still one FAB.
6. Go to **Work** in the header (or open `/work`) → still **one** FAB, bottom-right. Open/close once.

### Build — http://localhost:3001

1. Open `/`. Wait ~1s for the FAB.
2. Confirm **one** FAB, **bottom-right**.
3. Click FAB → build greeting. Send `What skills do you have?`. Close.
4. Click **Work** → `/work` → still one FAB. Open/close.
5. Open any case study (`/work/<slug>`, e.g. from a card) → still one FAB.

### Defend — http://localhost:3002

1. Open `/`. Wait ~1s for the FAB.
2. Confirm **one** FAB, **bottom-right**.
3. Click FAB → defend greeting. Send `What skills do you have?`. Close.
4. Scroll the placeholder sections; FAB stays one instance, bottom-right.

### Outside these apps

This monorepo only ships hub, build, and defend. There is no fourth app to open. Fail if you find `Chatbot` / `SiteChatbot` mounted anywhere other than those three root layouts.

---

## Optional API checks (no browser)

```bash
curl -sS -X POST http://localhost:3000/api/chat -H 'Content-Type: application/json' -d '{"message":"hi"}'
curl -sS -X POST http://localhost:3001/api/chat -H 'Content-Type: application/json' -d '{"message":"hi"}'
curl -sS -X POST http://localhost:3002/api/chat -H 'Content-Type: application/json' -d '{"message":"hi"}'
```

- **With a key:** JSON `{ "response": "..." }`.
- **Without a key:** 500 mentioning `OPENAI_API_KEY` / `GEMINI_API_KEY` — the route ran (not a missing UI).
- **Defend with `ENABLE_DEFEND_CHAT=false`:** 503. FAB may still be visible; replies should not succeed.
