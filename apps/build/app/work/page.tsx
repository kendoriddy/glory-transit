"use client";

import { useState, useMemo } from "react";
import { caseStudies, type CaseStudyTag } from "@/lib/case-studies";
import CaseStudyCard from "@/components/CaseStudyCard";
import WorkFilter from "@/components/WorkFilter";
import SiteFooter from "@/components/SiteFooter";

type FilterValue = "all" | CaseStudyTag;

export default function WorkPage() {
  const [filter, setFilter] = useState<FilterValue>("all");

  const filtered = useMemo(() => {
    if (filter === "all") return caseStudies;
    return caseStudies.filter((s) => s.tags.includes(filter));
  }, [filter]);

  return (
    <main className="min-h-screen pt-28 pb-16 px-6">
      <div className="max-w-content mx-auto">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted mb-4">
          Work
        </p>
        <h1 className="font-display text-display-lg font-semibold text-ink text-balance">
          Case studies
        </h1>
        <p className="mt-4 text-muted max-w-2xl leading-relaxed">
          Software engineering and AI engineering projects. Each case study
          covers problem, approach, and outcomes as documentation goes live.
        </p>

        <div className="mt-12">
          <WorkFilter active={filter} onChange={setFilter} />
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {filtered.map((study, i) => (
            <CaseStudyCard key={study.slug} study={study} index={i} />
          ))}
        </div>
      </div>
      <SiteFooter />
    </main>
  );
}
