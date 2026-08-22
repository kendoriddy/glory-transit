export interface ProofStat {
  value: string;
  label: string;
}

export interface CaseStudy {
  name: string;
  title: string;
  /** Outcome metrics — only include verified numbers */
  results?: string[];
  /** Focus areas when metrics are not available */
  focus?: string[];
}

export interface ProcessStep {
  step: string;
  description: string;
}

export const WORK_PROOF: ProofStat[] = [
  {
    value: "50%",
    label: "Reduction in theft",
  },
  {
    value: "10 → 3 days",
    label: "Request resolution",
  },
  {
    value: "30%",
    label: "Increase in ecommerce visitors",
  },
];

export const WORK_CASE_STUDIES: CaseStudy[] = [
  {
    name: "FoodCo",
    title: "Turning manual business operations into faster digital workflows.",
    results: [
      "50% reduction in theft",
      "30% reduction in help/support tickets",
      "Finance/service request resolution reduced from 10 days to 3 days",
      "Ecommerce visitors increased by 30%",
    ],
  },
  {
    name: "Descasio / PlugIQ",
    title: "Turning business processes into real applications.",
    focus: [
      "Complex workflows",
      "RBAC",
      "Data relationships",
      "API integration",
      "Frontend application architecture",
    ],
  },
  {
    name: "ShipLocal",
    title:
      "Building a developer infrastructure product from idea to deployment.",
    focus: [
      "Next.js",
      "Docker",
      "VPS infrastructure",
      "Caddy",
      "Deployment workflows",
    ],
  },
];

export const WORK_PROCESS: ProcessStep[] = [
  {
    step: "Understand",
    description:
      "Clarify the problem, constraints, and what success looks like.",
  },
  {
    step: "Design",
    description: "Map workflows, data, and interfaces before writing code.",
  },
  {
    step: "Build",
    description: "Ship production-ready software with clean architecture.",
  },
  {
    step: "Deploy",
    description: "Get it live, monitored, and usable by the team.",
  },
  {
    step: "Improve",
    description: "Iterate from real usage until the outcome sticks.",
  },
];

export const WORK_AUDIENCES = [
  "Growing SaaS companies",
  "Startups",
  "Companies with manual internal workflows",
  "Teams that need additional engineering capacity",
] as const;
