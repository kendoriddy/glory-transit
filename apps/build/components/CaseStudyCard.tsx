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
  const gradientIndex = index % 3;
  const gradients = [
    "from-accent-purple/30 to-accent-blue/30",
    "from-accent-blue/30 to-accent-green/30",
    "from-accent-green/30 to-accent-purple/30",
  ];

  return (
    <motion.article
      className="glass rounded-lg overflow-hidden border border-white/10 hover:border-accent-blue/40 transition-colors"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -4 }}
    >
      <div
        className={`h-32 bg-gradient-to-br ${gradients[gradientIndex]} flex items-center justify-center px-4`}
      >
        <span className="font-display text-lg font-bold text-white/90 text-center">
          {study.title}
        </span>
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-xs font-medium rounded-full bg-accent-blue/20 text-accent-blue border border-accent-blue/30"
            >
              {TAG_LABELS[tag]}
            </span>
          ))}
          {study.status === "coming-soon" && (
            <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-white/10 text-white/60 border border-white/20">
              In progress
            </span>
          )}
        </div>
        <p className="text-white/70 text-sm mb-4 line-clamp-2">
          {study.tagline}
        </p>
        <Link
          href={`/work/${study.slug}`}
          className="text-accent-blue text-sm font-medium hover:text-accent-green transition-colors inline-flex items-center gap-1"
        >
          View case study →
        </Link>
      </div>
    </motion.article>
  );
}
