"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { type CaseStudy } from "@/lib/case-studies";

export default function CaseStudyCard({
  study,
  index = 0,
}: {
  study: CaseStudy;
  index?: number;
}) {
  const heroSrc = study.images?.hero;

  return (
    <motion.article
      className="border border-line bg-canvas hover:border-line-strong transition-colors flex flex-col overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.45,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {heroSrc ? (
        <div className="relative aspect-[16/9] border-b border-line bg-ink/[0.03]">
          <Image
            src={heroSrc}
            alt={study.images?.heroAlt ?? study.title}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 36rem"
          />
        </div>
      ) : (
        <div className="aspect-[16/9] border-b border-line bg-ink/[0.03] flex items-end p-6">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
            {study.category}
          </span>
        </div>
      )}

      <div className="p-8 md:p-10 flex flex-col flex-1">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          {!heroSrc && (
            <span className="text-xs text-muted">{study.category}</span>
          )}
          {heroSrc && (
            <span className="text-xs text-muted">{study.category}</span>
          )}
          {study.flagship && (
            <span className="px-2 py-0.5 text-xs text-accent border border-accent/30">
              Flagship
            </span>
          )}
        </div>

        <h3 className="font-display text-xl font-semibold text-ink">
          {study.title}
        </h3>
        <p className="mt-3 text-sm text-muted leading-relaxed line-clamp-3 flex-1">
          {study.tagline}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm font-medium">
          <Link
            href={`/work/${study.slug}`}
            className="text-accent hover:text-ink transition-colors"
          >
            Read case study →
          </Link>
          {study.links?.site && (
            <a
              href={study.links.site}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-ink transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              Visit site ↗
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
