export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  location?: string;
  highlights: string[];
}

/** Hub overview — links to full case study on Build */
export interface HighlightProject {
  name: string;
  context: string;
  /** Build app case study slug */
  slug: string;
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export const NAV_LINKS = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/#about" },
  { label: "Portfolios", href: "/#portfolios" },
  { label: "Highlights", href: "/#highlights" },
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#skills" },
  { label: "Writing", href: "/#writing" },
  { label: "Contact", href: "/#contact" },
] as const;

export const HIGHLIGHT_PROJECTS: HighlightProject[] = [
  {
    name: "SchoolOrbit",
    context: "SaaS · EdTech · Founder",
    slug: "schoolorbit",
  },
  {
    name: "Plug by Descasio",
    context: "Enterprise SaaS",
    slug: "plug-by-descasio",
  },
  {
    name: "TailorFlow",
    context: "Vertical SaaS · Mobile · 2026",
    slug: "tailorflow",
  },
];

export const EXPERIENCE: ExperienceEntry[] = [
  {
    company: "SchoolOrbit",
    role: "Founder & Lead Engineer",
    period: "2022 — Present",
    location: "Nigeria",
    highlights: [
      "Founded and built a school management platform used to streamline attendance, academics, fees, and staff operations for schools.",
      "Led product direction, architecture, and delivery across web and mobile surfaces.",
      "Designed role-based workflows so administrators spend less time on paperwork and more on education outcomes.",
    ],
  },
  {
    company: "Enterprise & Product Engineering",
    role: "Software Engineer",
    period: "2019 — Present",
    location: "Remote · Nigeria",
    highlights: [
      "Shipped production systems with React, Next.js, TypeScript, Laravel, Flutter, and Node.js across SaaS and internal platforms.",
      "Delivered approval workflows, APIs, and integrations for teams that need reliability at scale.",
      "Partnered with stakeholders to turn ambiguous requirements into maintainable software with clear ownership.",
    ],
  },
  {
    company: "Cybersecurity Practice",
    role: "Security Practitioner (Transition)",
    period: "2024 — Present",
    highlights: [
      "Building depth in SOC operations, SIEM, incident response, GRC, and threat analysis alongside engineering work.",
      "Applying secure-by-design principles to products I build and operate.",
      "Documenting labs, assessments, and defensive workflows with the same rigor as production engineering.",
    ],
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Engineering",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Laravel",
      "Flutter",
      "Node.js",
      "PostgreSQL",
      "MySQL",
    ],
  },
  {
    title: "AI",
    skills: [
      "LLMs",
      "Prompt Engineering",
      "AI Automation",
      "Workflow Design",
      "RAG Systems",
      "Agent Orchestration",
    ],
  },
  {
    title: "Cybersecurity",
    skills: [
      "SOC Operations",
      "SIEM",
      "Incident Response",
      "GRC",
      "Threat Analysis",
      "Secure Architecture",
    ],
  },
  {
    title: "Platform",
    skills: [
      "Cloud Technologies",
      "API Design",
      "DevOps",
      "Observability",
      "Access Control",
    ],
  },
];
