export const BRAND = {
  fullName: "Onifade Kehinde Ridwan",
  shortName: "Kenny",
  aliases: ["RideOnOne"],
  tagline: "Software Engineer · Cybersecurity Practitioner · Builder",
} as const;

export const SITE_URLS = {
  hub: "https://kennyonifade.com",
  build: "https://build.kennyonifade.com",
  defend: "https://defend.kennyonifade.com",
  cyberLegacy: "https://cyber.kennyonifade.com",
  medium: "https://medium.com/@onifkay",
  schoolorbit: "https://schoolorbit.ng",
  plugiq: "https://plugiq.io",
  tailorflow: "https://tailorflow.kennyonifade.com/",
  loveapp: "https://loveapp.com",
} as const;

/** Place resume PDF at apps/hub/public/resume.pdf */
export const RESUME_PATH = "/resume.pdf" as const;

export const PILLARS = {
  build: {
    title: "Build",
    subtitle: "Software engineering, AI systems, and product case studies",
    href: SITE_URLS.build,
    localPath: "/",
  },
  defend: {
    title: "Defend",
    subtitle: "Cybersecurity, labs, GRC, and defensive security work",
    href: SITE_URLS.defend,
  },
  writing: {
    title: "Writing",
    subtitle: "Articles and technical writing",
    href: SITE_URLS.medium,
  },
} as const;

export const SOCIAL = {
  email: "onifkay@gmail.com",
  github: "https://github.com/kendoriddy",
  linkedin: "https://www.linkedin.com/in/kehindeonifade/",
  twitter: "https://x.com/RideOnOne09",
} as const;

/** Local dev ports when running `npm run dev` */
export const LOCAL_URLS = {
  hub: "http://localhost:3000",
  build: "http://localhost:3001",
} as const;

/** Cybersecurity portfolio — production site (separate repo). */
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
