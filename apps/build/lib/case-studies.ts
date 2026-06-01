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
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return caseStudies;
}
