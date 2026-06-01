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
    <div
      className="flex flex-wrap gap-2 mb-12"
      role="tablist"
      aria-label="Filter case studies"
    >
      {filters.map((filter) => (
        <button
          key={filter.value}
          type="button"
          role="tab"
          aria-selected={active === filter.value}
          onClick={() => onChange(filter.value)}
          className={`px-4 py-2 text-sm font-medium border transition-colors ${
            active === filter.value
              ? "bg-ink text-canvas border-ink"
              : "bg-canvas text-muted border-line hover:border-line-strong hover:text-ink"
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
