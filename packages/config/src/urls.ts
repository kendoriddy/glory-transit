import { SITE_URLS } from "./index";

/** Local dev ports when running `npm run dev` */
export const LOCAL_URLS = {
  hub: "http://localhost:3000",
  build: "http://localhost:3001",
} as const;

/** Cybersecurity portfolio — always production (separate repo). */
export const DEFEND_SITE_URL = SITE_URLS.defend;

export function getHubSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_HUB_URL) return process.env.NEXT_PUBLIC_HUB_URL;
  if (process.env.NODE_ENV === "development") return LOCAL_URLS.hub;
  return SITE_URLS.hub;
}

export function getBuildSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_BUILD_URL)
    return process.env.NEXT_PUBLIC_BUILD_URL;
  if (process.env.NODE_ENV === "development") return LOCAL_URLS.build;
  return SITE_URLS.build;
}
