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
  description: string;
  tags: string[];
  /** Build app case study slug */
  slug: string;
  /** Optional local thumbnail under /public */
  image?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  summary: string;
  items: string[];
}

export interface ServiceOffering {
  number: string;
  title: string;
  description: string;
  cta: string;
  href: string;
}

export interface BuildPillar {
  id: string;
  label: string;
  title: string;
  description: string;
  points: string[];
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export const NAV_LINKS = [
  { label: "Work", href: "/#work" },
  { label: "Process", href: "/#process" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Writing", href: "/#writing" },
  { label: "Contact", href: "/#contact" },
] as const;

export const HERO_STATS = [
  { value: "5+", label: "Years shipping production systems" },
  { value: "3", label: "Disciplines — Hub, Build, Defend" },
  { value: "Founder", label: "SchoolOrbit · EdTech SaaS" },
] as const;

export const BUILD_PILLARS: BuildPillar[] = [
  {
    id: "hub",
    label: "Hub",
    title: "Overview across engineering, AI, and security",
    description:
      "This site is the central hub — identity, selected work, and pathways into specialized portfolios.",
    points: [
      "Unified narrative across software and security practice",
      "Selected case studies and proof of delivery",
      "Contact and collaboration entry point",
    ],
  },
  {
    id: "build",
    label: "Build",
    title: "Software engineering, AI systems, and product case studies",
    description:
      "Full-stack development, agent workflows, RAG pipelines, and production SaaS — with depth on architecture and outcomes.",
    points: [
      "React, Next.js, TypeScript, Laravel, Flutter",
      "AI automation, LLM integration, workflow design",
      "Case studies with real constraints and tradeoffs",
    ],
  },
  {
    id: "defend",
    label: "Defend",
    title: "Cybersecurity, labs, GRC, and defensive security",
    description:
      "SOC operations, incident response, threat analysis, and secure architecture — documented with the same rigor as engineering.",
    points: [
      "SIEM, incident response, and threat analysis",
      "GRC and secure-by-design principles",
      "Labs, assessments, and defensive workflows",
    ],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Scope",
    summary: "Define goals, users, scope, and stack.",
    items: ["Define goals", "Identify users", "Set scope", "Choose stack"],
  },
  {
    number: "02",
    title: "Design",
    summary: "Map pages, components, states, and mobile flow.",
    items: ["Map pages", "Design components", "Plan states", "Mobile flow"],
  },
  {
    number: "03",
    title: "Build",
    summary: "Develop frontend, logic, APIs, and clean code.",
    items: [
      "Develop frontend",
      "Connect logic",
      "Integrate APIs",
      "Clean code",
    ],
  },
  {
    number: "04",
    title: "Test",
    summary: "Test screens, speed, security, and friction points.",
    items: ["Test screens", "Review speed", "Check security", "Fix friction"],
  },
  {
    number: "05",
    title: "Ship",
    summary: "Deploy, handoff, track issues, and improve next.",
    items: ["Deploy", "Handoff", "Track issues", "Improve next"],
  },
];

export const SERVICE_OFFERINGS: ServiceOffering[] = [
  {
    number: "01",
    title: "Software Engineering",
    description:
      "Full-stack web and mobile systems — React, Next.js, TypeScript, Laravel, Flutter — built for production reliability and clear ownership.",
    cta: "Discuss a software project",
    href: "#contact",
  },
  {
    number: "02",
    title: "AI & Automation",
    description:
      "LLM integration, agent orchestration, RAG pipelines, and workflow automation that reduce manual work without sacrificing control.",
    cta: "Discuss an AI project",
    href: "#contact",
  },
  {
    number: "03",
    title: "Cybersecurity",
    description:
      "SOC operations, incident response, GRC, threat analysis, and secure architecture — applied alongside the products I build.",
    cta: "Discuss security work",
    href: "#contact",
  },
];

export const ABOUT_STATS = [
  { value: "5+", label: "Years engineering" },
  { value: "3", label: "Core disciplines" },
  { value: "1", label: "Founder-led SaaS" },
] as const;

export const HIGHLIGHT_PROJECTS: HighlightProject[] = [
  {
    name: "Plug by Descasio",
    context: "Enterprise SaaS",
    description:
      "Enterprise workflow and approval platform with role-based access, integrations, and production-grade delivery for teams that need reliability at scale.",
    tags: ["React", "Enterprise", "Workflows", "SaaS"],
    slug: "plug-by-descasio",
    image: "/projects/plug-by-descasio/hero.png",
  },
  {
    name: "TailorFlow",
    context: "Vertical SaaS · Mobile · 2026",
    description:
      "Vertical SaaS for tailoring businesses — mobile-first workflows, client management, and operational tooling built for a specific industry context.",
    tags: ["Flutter", "Mobile", "Vertical SaaS"],
    slug: "tailorflow",
    image: "/projects/tailorflow/hero.png",
  },
  {
    name: "SchoolOrbit",
    context: "SaaS · EdTech · Founder",
    description:
      "School management platform for attendance, academics, fees, and staff operations — founded and built to give teachers time back and administrators one place to run their school.",
    tags: ["Next.js", "SaaS", "EdTech", "Founder"],
    slug: "schoolorbit",
    image: "/projects/schoolorbit/hero.png",
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
