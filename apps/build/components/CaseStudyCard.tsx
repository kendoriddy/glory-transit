"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { type CaseStudy, TAG_LABELS } from "@/lib/case-studies";

export default function CaseStudyCard({
  study,
  index = 0,
}: {
  study: CaseStudy;
  index?: number;
}) {
  return (
    <motion.article
      className="border border-line bg-canvas hover:border-line-strong transition-colors flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.45,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="p-8 md:p-10 flex flex-col flex-1">
        <div className="flex flex-wrap gap-2 mb-4">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 text-xs text-ink/80 border border-line"
            >
              {TAG_LABELS[tag]}
            </span>
          ))}
          {study.status === "coming-soon" && (
            <span className="px-2.5 py-0.5 text-xs text-muted border border-line">
              In progress
            </span>
          )}
        </div>
        <h3 className="font-display text-xl font-semibold text-ink">
          {study.title}
        </h3>
        <p className="mt-3 text-sm text-muted leading-relaxed line-clamp-2 flex-1">
          {study.tagline}
        </p>
        <Link
          href={`/work/${study.slug}`}
          className="mt-6 text-sm font-medium text-accent hover:text-ink transition-colors"
        >
          View case study →
        </Link>
      </div>
    </motion.article>
  );
}
