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
} as const;

export const PILLARS = {
  build: {
    title: "Build",
    subtitle: "Scalable software, products, and automation solutions",
    href: SITE_URLS.build,
  },
  defend: {
    title: "Defend",
    subtitle: "Cybersecurity, threat analysis, and secure systems",
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
