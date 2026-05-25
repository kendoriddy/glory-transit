"use client";

import { type CaseStudyTag } from "@/lib/case-studies";

type FilterValue = "all" | CaseStudyTag;

const filters: { value: FilterValue; label: string }[] = [
  { value: "all", label: "All" },
  { value: "swe", label: "Software" },
  { value: "ai-engineering", label: "AI Engineering" },
];

export default function WorkFilter({
  active,
  onChange,
}: {
  active: FilterValue;
  onChange: (value: FilterValue) => void;
}) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {filters.map((filter) => (
        <button
          key={filter.value}
          type="button"
          onClick={() => onChange(filter.value)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            active === filter.value
              ? "bg-accent-blue/20 text-accent-blue border border-accent-blue/50"
              : "bg-white/5 text-white/60 border border-white/10 hover:border-white/30"
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
