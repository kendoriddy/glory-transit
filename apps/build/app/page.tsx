"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { getFeaturedCaseStudies } from "@/lib/case-studies";
import CaseStudyCard from "@/components/CaseStudyCard";
import SiteFooter from "@/components/SiteFooter";

export default function BuildHome() {
  const featured = getFeaturedCaseStudies();

  return (
    <main className="min-h-screen">
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 overflow-hidden">
        <div className="mesh-grid absolute inset-0 opacity-60" aria-hidden />
        <div
          className="pointer-events-none absolute -top-20 -left-10 h-72 w-72 rounded-full bg-accent/[0.08] blur-3xl"
          aria-hidden
        />
        <div className="max-w-content mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted mb-6 flex items-center gap-3">
              <span className="inline-block h-px w-6 bg-accent/50" aria-hidden />
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
              className="inline-block mt-10 px-6 py-3 text-sm font-medium bg-ink text-canvas border border-ink hover:bg-accent hover:border-accent shadow-soft hover:shadow-lift hover:-translate-y-0.5 transition-all duration-300"
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
            Deep dives on flagship products — problem, architecture, challenges,
            and lessons from shipping real software.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featured.map((study, i) => (
              <CaseStudyCard key={study.slug} study={study} index={i} />
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
