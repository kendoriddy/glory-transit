"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { getFeaturedCaseStudies } from "@/lib/case-studies";
import CaseStudyCard from "@/components/CaseStudyCard";
import SiteFooter from "@/components/SiteFooter";

export default function BuildHome() {
  const featured = getFeaturedCaseStudies(4);

  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6">
        <div className="max-w-content mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted mb-6">
              Software &amp; AI Engineering
            </p>
            <h1 className="font-display text-display-xl font-semibold text-ink text-balance max-w-3xl">
              Build
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
              Production software and intelligent systems — full-stack
              engineering, LLM applications, agents, RAG, and shipping reliable
              AI-powered products.
            </p>
            <Link
              href="/work"
              className="inline-block mt-10 px-6 py-3 text-sm font-medium bg-ink text-canvas border border-ink hover:bg-ink/90 transition-colors"
            >
              View all work
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="px-6 pb-24 md:pb-32 border-t border-line">
        <div className="max-w-content mx-auto">
          <h2 className="font-display text-display-lg font-semibold text-ink mb-4">
            Featured work
          </h2>
          <p className="text-muted max-w-xl mb-12 leading-relaxed">
            Case studies and project write-ups. Documentation is added as each
            project is ready to share in depth.
          </p>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {featured.map((study, i) => (
              <CaseStudyCard key={study.slug} study={study} index={i} />
            ))}
          </div>
          <p className="mt-12">
            <Link
              href="/work"
              className="text-sm font-medium text-accent hover:text-ink transition-colors"
            >
              See all case studies →
            </Link>
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
