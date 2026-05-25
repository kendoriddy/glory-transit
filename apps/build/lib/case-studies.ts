export type CaseStudyTag = "swe" | "ai-engineering";
export type CaseStudyStatus = "coming-soon" | "live";

export interface CaseStudy {
  slug: string;
  title: string;
  tagline: string;
  tags: CaseStudyTag[];
  status: CaseStudyStatus;
  tech: string[];
  problem: string;
  approach: string;
  outcome: string;
  links?: { demo?: string; repo?: string };
}

export const TAG_LABELS: Record<CaseStudyTag, string> = {
  swe: "Software",
  "ai-engineering": "AI Engineering",
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "agent-orchestration-platform",
    title: "Agent Orchestration Platform",
    tagline: "Multi-agent workflows with tool use and orchestration",
    tags: ["ai-engineering"],
    status: "coming-soon",
    tech: ["TypeScript", "Next.js", "OpenAI", "PostgreSQL"],
    problem:
      "Teams need reliable ways to coordinate multiple AI agents across tools, APIs, and human checkpoints without losing traceability.",
    approach:
      "Design an orchestration layer with explicit agent roles, tool schemas, retry policies, and structured logging for every step in a workflow.",
    outcome:
      "Documentation in progress — this case study will cover architecture decisions, failure modes, and production lessons learned.",
  },
  {
    slug: "rag-knowledge-system",
    title: "RAG Knowledge System",
    tagline: "Retrieval-augmented generation with evaluation pipelines",
    tags: ["ai-engineering"],
    status: "coming-soon",
    tech: ["Python", "Vector DB", "LangChain", "Next.js"],
    problem:
      "Internal knowledge is scattered across docs and chats; generic LLM answers are unreliable without grounded retrieval and evals.",
    approach:
      "Build ingestion, chunking, embedding, and retrieval pipelines with golden-set evals and human-in-the-loop review for answer quality.",
    outcome:
      "Documentation in progress — will detail retrieval tuning, eval metrics, and cost/latency tradeoffs.",
  },
  {
    slug: "schoolorbit-platform",
    title: "SchoolOrbit Platform",
    tagline: "Edtech product engineering for school administration",
    tags: ["swe"],
    status: "coming-soon",
    tech: ["React", "Next.js", "Node.js", "PostgreSQL"],
    problem:
      "Schools lose teaching time to manual admin work — scheduling, records, and communication are fragmented across spreadsheets and paper.",
    approach:
      "Ship a unified platform for school owners and teachers with role-based access, automated workflows, and a focus on mobile-friendly UX.",
    outcome:
      "Documentation in progress — live product at schoolorbit.ng; case study will cover scale, onboarding, and technical architecture.",
    links: { demo: "https://schoolorbit.ng" },
  },
  {
    slug: "developer-platform-tooling",
    title: "Developer Platform Tooling",
    tagline: "Internal tools and developer experience improvements",
    tags: ["swe"],
    status: "coming-soon",
    tech: ["TypeScript", "Node.js", "CLI", "Docker"],
    problem:
      "Engineering teams repeat manual setup steps and lack consistent templates for services, env config, and deployment.",
    approach:
      "Create CLI scaffolding, shared libraries, and CI templates that encode team conventions and reduce time-to-first-deploy.",
    outcome:
      "Documentation in progress — will share DX metrics and adoption patterns.",
  },
  {
    slug: "llm-observability-pipeline",
    title: "LLM Observability Pipeline",
    tagline: "Logging, evals, and guardrails for LLM applications",
    tags: ["ai-engineering"],
    status: "coming-soon",
    tech: ["TypeScript", "OpenTelemetry", "PostgreSQL", "Python"],
    problem:
      "LLM apps fail silently — bad prompts, hallucinations, and latency spikes are hard to detect without structured traces and evals.",
    approach:
      "Instrument prompts, completions, and tool calls; run offline eval suites; add guardrails for PII and policy violations.",
    outcome:
      "Documentation in progress — will cover dashboards, alert thresholds, and regression testing for prompts.",
  },
  {
    slug: "distributed-api-service",
    title: "Distributed API Service",
    tagline: "Backend architecture and API design at scale",
    tags: ["swe"],
    status: "coming-soon",
    tech: ["Node.js", "PostgreSQL", "Redis", "REST"],
    problem:
      "A growing product needs APIs that stay fast under load while remaining easy to version and document for client teams.",
    approach:
      "Design resource-oriented REST APIs with caching, idempotency keys, rate limiting, and clear error contracts.",
    outcome:
      "Documentation in progress — will include schema design, load patterns, and operational runbooks.",
  },
  {
    slug: "mcp-developer-integration",
    title: "MCP Developer Integration",
    tagline: "Model Context Protocol servers and IDE integrations",
    tags: ["ai-engineering"],
    status: "coming-soon",
    tech: ["TypeScript", "MCP", "Node.js"],
    problem:
      "Developers want AI assistants that can safely access project context, run tools, and respect repo boundaries inside the IDE.",
    approach:
      "Build MCP servers that expose curated tools and resources with auth, auditing, and least-privilege access to codebases.",
    outcome:
      "Documentation in progress — will walk through server design, security review, and IDE UX.",
  },
  {
    slug: "fullstack-social-product",
    title: "Full-Stack Social Product",
    tagline: "End-to-end product with payments and real-time features",
    tags: ["swe"],
    status: "coming-soon",
    tech: ["Next.js", "Firebase", "Stripe", "Node.js"],
    problem:
      "Social event products need invites, pooled payments, and engaging UX without sacrificing reliability or trust.",
    approach:
      "Deliver a full-stack architecture with real-time updates, payment flows, and clear separation between client state and server truth.",
    outcome:
      "Documentation in progress — will cover payments integration, game mechanics, and deployment strategy.",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export function getFeaturedCaseStudies(count = 4): CaseStudy[] {
  return caseStudies.slice(0, count);
}
