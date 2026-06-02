import { SITE_URLS } from "@portfolio/config";

/** Optional screenshots — add files under public/projects/{slug}/ */
export interface CaseStudyImages {
  /** e.g. /projects/schoolorbit/hero.png */
  hero?: string;
  heroAlt?: string;
  gallery?: { src: string; alt: string; caption?: string }[];
}

export interface CaseStudyLinks {
  /** Live product or marketing site */
  site?: string;
  siteLabel?: string;
  /** Optional — omit if not public */
  repo?: string;
}

export interface ArchitectureGroup {
  title: string;
  items: string[];
}

export interface CaseStudyChallenge {
  title: string;
  description: string;
}

export interface CaseStudyProblemArea {
  title: string;
  description: string;
  bullets?: string[];
}

export interface CaseStudySolutionSection {
  title: string;
  description?: string;
  bullets?: string[];
}

export interface CaseStudyOutcomeGroup {
  title: string;
  items: string[];
}

export interface CaseStudy {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  timeline?: string;
  flagship?: boolean;
  role: string;
  links?: CaseStudyLinks;
  images?: CaseStudyImages;
  /** Extended summary shown after the header */
  overview?: string;
  problem: {
    intro: string;
    bullets?: string[];
    outro?: string;
  };
  problemAreas?: CaseStudyProblemArea[];
  goal: string;
  goalBullets?: string[];
  responsibilities: string[];
  solution: {
    intro: string;
    bullets?: string[];
  };
  solutionSections?: CaseStudySolutionSection[];
  features?: string[];
  architecture: ArchitectureGroup[];
  architectureDecisions?: CaseStudyChallenge[];
  challenges: CaseStudyChallenge[];
  outcome: string[];
  outcomeGroups?: CaseStudyOutcomeGroup[];
  lessons: string[];
  impactStatement?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "schoolorbit",
    title: "SchoolOrbit",
    tagline:
      "An all-in-one school operating system — product, engineering, and long-term execution for educators.",
    category: "SaaS · EdTech · Founder Project",
    flagship: true,
    role: "Founder & Lead Engineer",
    links: {
      site: SITE_URLS.schoolorbit,
      siteLabel: "schoolorbit.ng",
    },
    images: {
      hero: "/projects/schoolorbit/hero.png",
      heroAlt: "SchoolOrbit school management dashboard",
      gallery: [
        {
          src: "/projects/schoolorbit/gallery-2.png",
          alt: "SchoolOrbit school management dashboard",
        },
        {
          src: "/projects/schoolorbit/gallery-3.png",
          alt: "SchoolOrbit school management dashboard",
        },
        {
          src: "/projects/schoolorbit/gallery-4.png",
          alt: "SchoolOrbit school management dashboard",
        },
        {
          src: "/projects/schoolorbit/gallery-5.png",
          alt: "SchoolOrbit school management dashboard",
        },
      ],
    },
    problem: {
      intro:
        "Growing up in a family of educators, I repeatedly observed teachers and school administrators spending more time on administrative work than on teaching.",
      bullets: [
        "Attendance tracking",
        "Timetable management",
        "Exam administration",
        "Fee management",
        "Staff management",
        "Lesson planning",
      ],
      outro:
        "This led to inefficiencies, errors, and increased workload for educators.",
    },
    goal: "Build a comprehensive school operating system that enables schools to centralize administrative operations and allow educators to focus on teaching.",
    responsibilities: [
      "Product strategy",
      "UX planning",
      "Database design",
      "Backend architecture",
      "API development",
      "Frontend development",
      "Mobile application architecture",
      "Infrastructure planning",
    ],
    solution: {
      intro:
        "SchoolOrbit was designed as an all-in-one school management platform, accessible via both web and mobile applications:",
      bullets: [
        "Student management",
        "Teacher management",
        "Attendance management",
        "Timetable management",
        "Assignment management",
        "Lesson management",
        "Fee management",
        "Leave management",
        "Announcement management",
        "Exam management",
      ],
    },
    architecture: [
      {
        title: "Frontend",
        items: ["Flutter", "React", "TypeScript"],
      },
      {
        title: "Backend",
        items: ["Laravel"],
      },
      {
        title: "Database",
        items: ["MySQL"],
      },
      {
        title: "Infrastructure",
        items: ["Cloud deployment", "REST APIs"],
      },
    ],
    challenges: [
      {
        title: "Designing for multiple stakeholders",
        description:
          "The system serves administrators, teachers, students, and parents — each with different workflows and expectations.",
      },
      {
        title: "Permission management",
        description:
          "Role-based access needed to remain flexible while maintaining security across school hierarchies.",
      },
      {
        title: "Scalability",
        description:
          "The architecture was designed to support multiple schools with isolated datasets on a shared platform.",
      },
    ],
    outcome: [
      "Successfully developed a near-production-ready platform.",
      "Created a foundation capable of serving schools across Nigeria and Africa.",
      "Established SchoolOrbit as the flagship product of SchoolTech.",
    ],
    lessons: [
      "Product-market fit matters more than code.",
      "Educational workflows are highly nuanced.",
      "Building software is easier than selling software.",
    ],
  },
  {
    slug: "plug-by-descasio",
    title: "Plug by Descasio",
    tagline:
      "Enterprise no-code workflow automation — visual process design, approvals, and AI-assisted authoring at scale.",
    category: "Enterprise SaaS",
    role: "Full-Stack Software Engineer",
    links: {
      site: SITE_URLS.plugiq,
      siteLabel: "plugiq.io",
    },
    images: {
      hero: "/projects/plug-by-descasio/hero.png",
      heroAlt: "Plug workflow builder interface",
    },
    problem: {
      intro:
        "Organizations often rely on emails, spreadsheets, and disconnected tools to manage critical business processes. This creates:",
      bullets: [
        "Delays",
        "Poor visibility",
        "Manual follow-ups",
        "Compliance risks",
      ],
    },
    goal: "Create a no-code workflow platform that enables organizations to automate operational processes without engineering involvement.",
    responsibilities: [
      "Frontend development",
      "Backend APIs",
      "Workflow automation",
      "Process Builder experiences",
    ],
    solution: {
      intro:
        "Plug enables organizations to create workflows visually — without writing code. Examples include:",
      bullets: [
        "Leave requests",
        "Procurement approvals",
        "Employee onboarding",
        "Compliance reviews",
      ],
    },
    features: [
      "Visual Process Builder",
      "Dynamic Form Builder",
      "Approval Chains",
      "Conditional Routing",
      "Workflow Automation",
      "Portals",
      "AI Copilot (Luna)",
      "Enterprise SSO",
    ],
    architecture: [
      {
        title: "Frontend",
        items: [
          "React",
          "TypeScript",
          "Redux Toolkit",
          "React Query",
          "Material UI",
        ],
      },
      {
        title: "Backend",
        items: ["Node.js", "TypeScript", "MongoDB"],
      },
      {
        title: "Infrastructure",
        items: [
          "Event-driven processing",
          "Background workers",
          "SSO integrations",
        ],
      },
    ],
    challenges: [
      {
        title: "Complex workflow modeling",
        description:
          "Representing real-world approval and operational processes as executable graphs that stay understandable to non-technical users.",
      },
      {
        title: "Long-running processes",
        description:
          "Some workflows span days or weeks — the system must track state reliably across handoffs and escalations.",
      },
      {
        title: "AI-assisted authoring",
        description:
          "Helping users generate and refine workflows using natural language (Luna) while keeping humans in control of governance.",
      },
    ],
    outcome: [
      "Enabled organizations to digitize operational processes.",
      "Reduced dependency on engineering teams for routine approvals.",
      "Delivered enterprise-grade workflow automation.",
    ],
    lessons: [
      "Enterprise software is mostly workflow design.",
      "Domain modeling is often harder than coding.",
      "Reliability is a feature.",
    ],
  },
  {
    slug: "tailorflow",
    title: "TailorFlow",
    tagline:
      "Offline-first business management for tailoring shops — measurements, orders, payments, and WhatsApp-native communication.",
    category: "Vertical SaaS · Mobile Product",
    timeline: "2026",
    role: "Founder & Lead Engineer",
    links: {
      site: SITE_URLS.tailorflow,
      siteLabel: "tailorflow.ng",
    },
    images: {
      hero: "/projects/tailorflow/hero.png",
      heroAlt: "TailorFlow screenshot",
    },
    overview:
      "TailorFlow is an offline-first business management platform designed specifically for small tailoring businesses. The product helps tailors manage customer measurements, orders, payments, and communication from a single mobile application, while continuing to work even when internet connectivity is unavailable. Unlike traditional CRM or POS systems, TailorFlow was designed around the realities of small businesses in emerging markets, where connectivity is inconsistent and WhatsApp remains the primary customer communication channel.",
    problem: {
      intro:
        "Many tailoring businesses still rely on a combination of physical notebooks, memory, WhatsApp conversations, and loose paper records to manage critical customer information.",
    },
    problemAreas: [
      {
        title: "Lost measurements",
        description:
          "Customer measurements are often stored manually and can be misplaced or become difficult to retrieve.",
      },
      {
        title: "Poor order visibility",
        description: "Tailors struggle to track across dozens of customers:",
        bullets: ["Due dates", "Order status", "Outstanding balances"],
      },
      {
        title: "Inefficient communication",
        description:
          "Most customer updates happen manually through WhatsApp, requiring repetitive messages and increasing the likelihood of forgotten follow-ups.",
      },
      {
        title: "Connectivity constraints",
        description:
          "Many existing business tools assume constant internet access, making them impractical for day-to-day use in environments with unreliable connectivity.",
      },
    ],
    goal: "Build a mobile-first business operating system that enables tailoring shops to operate efficiently — while remaining simple enough for non-technical business owners.",
    goalBullets: [
      "Manage customers efficiently",
      "Store measurement records securely",
      "Track orders and payments",
      "Communicate with customers easily",
      "Continue operating without internet access",
    ],
    responsibilities: [
      "Product strategy, user research, workflow design, and feature prioritization",
      "Mobile development — application architecture, state management, database design, UI implementation",
      "Backend design — sync architecture, cloud backup strategy, multi-tenant planning",
      "Business strategy — freemium model, pilot planning, privacy compliance considerations",
    ],
    solution: {
      intro:
        "TailorFlow centralizes a tailor's day-to-day operations into a single mobile application.",
    },
    solutionSections: [
      {
        title: "Customer management",
        description: "Maintain customer records including:",
        bullets: ["Names", "Phone numbers", "Notes", "Historical interactions"],
      },
      {
        title: "Measurement profiles",
        description:
          "Store structured body measurements with historical tracking — eliminating dependency on paper measurement books.",
      },
      {
        title: "Order management",
        description: "Track throughout the lifecycle of an order:",
        bullets: [
          "Style requests",
          "Fabric notes",
          "Delivery dates",
          "Production status",
        ],
      },
      {
        title: "Payment tracking",
        description: "Monitor revenue and reduce leakage:",
        bullets: ["Deposits", "Outstanding balances", "Payment history"],
      },
      {
        title: "WhatsApp integration",
        description:
          "Generate prefilled customer messages for pickup notifications, payment reminders, and follow-up requests — using the customer's existing WhatsApp workflow.",
      },
      {
        title: "Optional cloud backup",
        description:
          "When internet connectivity becomes available, data synchronizes to the cloud for backup and recovery.",
      },
    ],
    architecture: [
      {
        title: "Frontend",
        items: ["Flutter", "Dart", "Riverpod"],
      },
      {
        title: "Local data layer",
        items: [
          "SQLite",
          "sqflite — source of truth; all critical operations work offline",
        ],
      },
      {
        title: "Sync layer",
        items: [
          "Connectivity Plus",
          "Outbox pattern — queue locally, sync when online",
        ],
      },
      {
        title: "Cloud infrastructure",
        items: ["Supabase", "Row-level security", "Tenant-aware data model"],
      },
      {
        title: "Monitoring",
        items: ["Sentry — optional crash reporting and observability"],
      },
      {
        title: "Platform reach",
        items: ["Android", "iOS", "Web", "Desktop — shared Flutter codebase"],
      },
    ],
    architectureDecisions: [
      {
        title: "Offline-first by default",
        description:
          "Most applications treat offline mode as an afterthought. TailorFlow was designed with offline functionality as a core requirement, significantly improving reliability in real-world usage.",
      },
      {
        title: "Outbox synchronization pattern",
        description:
          "Instead of coupling business workflows to network availability, user actions are persisted locally and synchronized later — improving reliability, reducing frustration, and building resilience to connectivity interruptions.",
      },
      {
        title: "Multi-tenant foundation",
        description:
          "Although initially targeted at individual shops, the architecture supports multiple businesses, membership management, and shared ownership models without requiring major redesign.",
      },
      {
        title: "Privacy-by-design",
        description:
          "Customer information is sensitive. The product was designed with privacy from the beginning, including documentation aligned with NDPR requirements.",
      },
    ],
    challenges: [
      {
        title: "Designing for non-technical users",
        description:
          "The application needed to be simple enough for users with little or no technical experience. Balancing simplicity and functionality required significant UX iteration.",
      },
      {
        title: "Maintaining data integrity offline",
        description:
          "Offline-first workflows introduce challenges around synchronization, conflict resolution, and data consistency. The outbox architecture helped address these concerns.",
      },
      {
        title: "Product-market alignment",
        description:
          "Tailors do not think in terms of CRM systems. The product had to be designed around their actual workflow rather than forcing them into a generic business-management model.",
      },
    ],
    outcome: [],
    outcomeGroups: [
      {
        title: "Product validation",
        items: [
          "Successfully developed a pilot-ready MVP capable of supporting real tailoring businesses.",
        ],
      },
      {
        title: "Offline reliability",
        items: [
          "Core workflows remain fully functional without internet connectivity.",
        ],
      },
      {
        title: "Platform reach",
        items: [
          "Built to support Android, iOS, Web, and Desktop from a shared Flutter codebase.",
        ],
      },
      {
        title: "Business foundation",
        items: [
          "Established a scalable architecture for future features including authentication, subscription billing, advanced reporting, and multi-shop collaboration.",
        ],
      },
    ],
    lessons: [
      "Build around reality, not assumptions — designing around real-world constraints often creates greater value than adding more features.",
      "Offline-first is a product decision — for many users, it determines whether a product is usable at all.",
      "Vertical SaaS creates strong differentiation — specialized solutions tailored to a specific industry's workflow can create significantly more value than general-purpose software.",
    ],
    impactStatement:
      "TailorFlow demonstrates my ability to identify underserved markets, design products around real-world operational constraints, and build scalable mobile systems that balance user experience, technical architecture, and business viability.",
  },
  {
    slug: "loveapp",
    title: "LoveApp",
    tagline: "Private Relationship & Family Operating System",
    category: "Relationship Tech · Social Platform · Founder Project",
    role: "Founder & Full-Stack Engineer",
    links: {
      site: SITE_URLS.loveapp,
      siteLabel: "loveapp.com",
    },
    images: {
      hero: "/projects/loveapp/hero.png",
      heroAlt: "LoveApp screenshot",
      gallery: [
        {
          src: "/projects/loveapp/gallery-1.png",
          alt: "LoveApp screenshot",
        },
        {
          src: "/projects/loveapp/gallery-2.png",
          alt: "LoveApp screenshot",
        },
        {
          src: "/projects/loveapp/gallery-3.png",
          alt: "LoveApp screenshot",
        },
      ],
    },
    overview:
      "LoveApp is a secure platform designed to help families, couples, and close-knit communities preserve memories, coordinate activities, and strengthen relationships inside private digital spaces. Instead of broadcasting to public audiences, users participate in trusted family circles with their own content, events, tasks, and long-term communication — protected by strict access controls.",
    problem: {
      intro:
        "Families and relationships increasingly rely on fragmented tools for day-to-day connection and coordination.",
      bullets: [
        "WhatsApp for communication",
        "Google Photos for memories",
        "Notes apps for letters",
        "Calendars for events",
        "Task apps for coordination",
      ],
      outro:
        "As information gets scattered, memories get lost, coordination becomes difficult, and sensitive content ends up on platforms not designed for intimacy or privacy.",
    },
    problemAreas: [
      {
        title: "Scattered information",
        description:
          "Critical relationship context lives across multiple apps, making it hard to maintain a shared family history and routine.",
      },
      {
        title: "Weak privacy boundaries",
        description:
          "Sensitive content is often shared through tools designed for broad communication rather than strict, group-scoped access control.",
      },
      {
        title: "Unstructured relationship interaction",
        description:
          "Most products optimize for engagement. Families need tools that support long-term communication, coordination, and connection.",
      },
    ],
    goal: "Build a digital home for families and relationships.",
    goalBullets: [
      "Create private family spaces",
      "Share memories securely",
      "Organize events and anniversaries",
      "Coordinate responsibilities",
      "Preserve meaningful communication",
      "Maintain strict access controls",
    ],
    responsibilities: [
      "Product ideation",
      "User experience design",
      "Database architecture",
      "API design",
      "Authentication system",
      "Frontend implementation",
      "Backend implementation",
      "Access control architecture",
      "Media management system",
    ],
    solution: {
      intro:
        "LoveApp was designed around isolated, private family spaces. Each family acts as its own environment for communication, memories, and coordination.",
      bullets: [
        "Timeline — a private feed for family updates",
        "Albums — organized collections for preserving memories",
        "Letters — rich-text, long-form communication",
        "The Box — sealed messages revealed by recipients",
        "Calendar — shared events and anniversaries",
        "Tasks — collaborative household coordination",
        "Reminders — personal and shared prompts",
        "Relationship Hub — tools for healthier communication",
      ],
    },
    solutionSections: [
      {
        title: "Active Family Context (multi-family architecture)",
        description:
          "Users can belong to multiple relationship groups and switch their active family at any time. Content, events, and tasks automatically re-scope to the currently selected family — keeping the experience clean while maintaining strict data isolation.",
      },
      {
        title: "Privacy-first product design",
        description:
          "Every interaction is group-scoped. Requests validate authentication, membership, membership status, and permissions before allowing access to family content.",
      },
      {
        title: "Media-rich experiences",
        description:
          "The platform supports images, video, and audio with cloud storage and performance-conscious retrieval to preserve meaningful moments without compromising reliability.",
      },
    ],
    features: [
      "Private family spaces",
      "Timeline posts (text, images, video, audio, categories)",
      "Albums for structured memory collections",
      "Rich-text letters for long-form communication",
      "The Box (sealed messages)",
      "Shared calendar (events, anniversaries)",
      "Collaborative task management",
      "Personal and shared reminders",
      "Relationship Hub (goals, rules, Q&A activities)",
      "Invitation-based onboarding and growth",
      "Role-based access control (RBAC) with membership statuses",
      "Multi-family context switching",
    ],
    architecture: [
      {
        title: "Frontend",
        items: [
          "Next.js 14 (App Router)",
          "TypeScript",
          "Tailwind CSS",
          "Server-first rendering",
        ],
      },
      {
        title: "Backend",
        items: ["Next.js API Routes", "TypeScript", "Authorization-first APIs"],
      },
      {
        title: "Database",
        items: ["PostgreSQL", "Prisma ORM", "Multi-tenant group data model"],
      },
      {
        title: "Authentication",
        items: [
          "NextAuth.js",
          "Credentials authentication",
          "Session management",
        ],
      },
      {
        title: "Media infrastructure",
        items: [
          "Vercel Blob Storage",
          "Secure uploads for images, video, and audio",
        ],
      },
      {
        title: "Security architecture",
        items: [
          "Group-level authorization",
          "Membership status enforcement (active/suspended/dismissed)",
          "Permission checks per request",
        ],
      },
    ],
    architectureDecisions: [
      {
        title: "Multi-family membership model",
        description:
          "The data model treats users as members of multiple relationship groups simultaneously (family, friends, communities). The Active Family Context acts as the primary scope for queries and UI state, preventing cross-family leakage while keeping context switching effortless.",
      },
      {
        title: "Relationship-aware memberships",
        description:
          "Memberships carry role (owner/admin/member), status (active/suspended/dismissed), and relationship labels (e.g., husband, wife, sister, cousin). This models real-world structures and enables granular access control without forcing generic group semantics.",
      },
      {
        title: "Authorization as a first-class API constraint",
        description:
          "Every request validates authentication, membership, membership status, and permissions before data access. Privacy is enforced consistently at the API boundary rather than relying on UI-only constraints.",
      },
    ],
    challenges: [
      {
        title: "Multi-tenant family isolation",
        description:
          "Ensuring complete separation between family spaces while allowing the same user to participate in multiple groups, with all reads/writes correctly scoped to the active family.",
      },
      {
        title: "Invitation-based growth",
        description:
          "Designing a frictionless onboarding flow where users can receive an invite, create an account, and join a family in a single experience — including invite token management and relationship assignment.",
      },
      {
        title: "Rich media handling",
        description:
          "Supporting image, video, and audio uploads required reliable upload flows, storage strategy, and performant retrieval without weakening privacy guarantees.",
      },
      {
        title: "Relationship-oriented UX",
        description:
          "Designing interaction patterns that optimize for connection (letters, sealed messages, shared goals) rather than typical engagement-driven social mechanics.",
      },
    ],
    outcome: [
      "Demonstrated a robust multi-tenant architecture with strict family-level data isolation.",
      "Implemented role-based access control and membership status enforcement as core product constraints.",
      "Designed a relational data model capable of representing real-world family structures and relationship labels.",
      "Delivered a full-stack Next.js platform with secure media handling and invitation-driven onboarding.",
      "Validated product thinking beyond conventional CRUD systems — optimizing for trust, privacy, and long-term connection.",
    ],
    lessons: [
      "Relationships have different product needs — assumptions from public social networks do not apply to families.",
      "Access control is a product feature — privacy directly influences trust and adoption.",
      "Context switching is powerful — active-family scoping enabled a clean UX while supporting complex membership realities.",
      "Software can strengthen human connection — technology can support emotional connection, not only efficiency.",
    ],
    impactStatement:
      "LoveApp highlights my ability to design privacy-first products, build multi-tenant systems with robust authorization, and translate nuanced human workflows into secure, scalable full-stack software.",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return caseStudies;
}
