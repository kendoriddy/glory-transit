"use client";

import { useState, useMemo } from "react";
import { Footer, Chatbot } from "@portfolio/ui";
import { caseStudies, type CaseStudyTag } from "@/lib/case-studies";
import CaseStudyCard from "@/components/CaseStudyCard";
import WorkFilter from "@/components/WorkFilter";

type FilterValue = "all" | CaseStudyTag;

export default function WorkPage() {
  const [filter, setFilter] = useState<FilterValue>("all");

  const filtered = useMemo(() => {
    if (filter === "all") return caseStudies;
    return caseStudies.filter((s) => s.tags.includes(filter));
  }, [filter]);

  return (
    <main className="relative min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 gradient-text text-center">
          Case studies
        </h1>
        <p className="text-white/60 text-center max-w-2xl mx-auto mb-10">
          Eight projects spanning software engineering and AI engineering.
          Documentation is in progress — check back as each case study goes
          live.
        </p>

        <WorkFilter active={filter} onChange={setFilter} />

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filtered.map((study, i) => (
            <CaseStudyCard key={study.slug} study={study} index={i} />
          ))}
        </div>
      </div>
      <Footer site="build" />
      <Chatbot site="build" />
    </main>
  );
}
