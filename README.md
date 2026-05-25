# Kenny Onifade — Portfolio Monorepo

Three Next.js apps and shared packages, deployed to separate subdomains:

| App        | Path          | Domain                                                     |
| ---------- | ------------- | ---------------------------------------------------------- |
| **hub**    | `apps/hub`    | [kennyonifade.com](https://kennyonifade.com)               |
| **build**  | `apps/build`  | [build.kennyonifade.com](https://build.kennyonifade.com)   |
| **defend** | `apps/defend` | [defend.kennyonifade.com](https://defend.kennyonifade.com) |

## Local development

```bash
npm install
npm run dev          # all apps (ports 3000, 3001, 3002)
npm run dev:hub      # hub only
npm run dev:build    # build only
npm run dev:defend   # defend only
```

Copy `.env.example` to `apps/hub/.env.local` and `apps/build/.env.local`.

## Build

```bash
npm run build
```

## Shared packages

- `@portfolio/config` — URLs, social links, pillar copy
- `@portfolio/knowledge` — `hub.ts`, `build.ts`, `defend.ts` + chat API helpers
- `@portfolio/ui` — Footer, Chatbot, CTAButton, Tailwind preset

## Vercel deployment

Create **three projects** from this repo:

1. **portfolio-hub** — Root Directory: `apps/hub` — Domain: `kennyonifade.com`
2. **portfolio-build** — Root Directory: `apps/build` — Domain: `build.kennyonifade.com`
3. **portfolio-defend** — Root Directory: `apps/defend` — Domain: `defend.kennyonifade.com`

For each project:

- **Framework Preset:** Next.js
- **Install Command:** `npm install` (run from repository root; Vercel detects the monorepo)
- **Build Command:** leave default or `cd ../.. && npx turbo run build --filter=<app-name>`

Add environment variables from `.env.example` to hub and build projects.

## Migrating defend content

1. Port pages from your cyber portfolio repo into `apps/defend`
2. Update `packages/knowledge/src/defend.ts` with real certs, labs, and projects
3. Point DNS `defend.kennyonifade.com` and redirect `cyber.kennyonifade.com` if desired
4. Set `ENABLE_DEFEND_CHAT=true` on defend and add the Chatbot UI when ready

## Case studies

Edit `apps/build/lib/case-studies.ts` — set `status: "live"` and fill links when each project is documented.
