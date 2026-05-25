"use client";

import { Suspense } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Footer, Chatbot, CTAButton } from "@portfolio/ui";
import { getFeaturedCaseStudies } from "@/lib/case-studies";
import CaseStudyCard from "@/components/CaseStudyCard";

export default function BuildHome() {
  const featured = getFeaturedCaseStudies(4);

  return (
    <main className="relative min-h-screen pt-24">
      <Suspense fallback={null}>
        <section className="px-6 py-16 text-center max-w-4xl mx-auto">
          <motion.p
            className="text-accent-blue font-mono text-sm mb-4 tracking-widest uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Software &amp; AI Engineering
          </motion.p>
          <motion.h1
            className="font-display text-4xl md:text-6xl font-bold mb-6 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Build
          </motion.h1>
          <motion.p
            className="text-xl text-white/80 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            Production software and intelligent systems
          </motion.p>
          <motion.p
            className="text-white/60 text-lg mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Case studies in full-stack engineering, LLM applications, agents,
            RAG, and shipping reliable AI-powered products — not ML research.
          </motion.p>
          <CTAButton href="/work">View all work</CTAButton>
        </section>

        <section className="px-6 py-16 max-w-7xl mx-auto">
          <h2 className="font-display text-3xl font-bold mb-10 text-center gradient-text">
            Featured work
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featured.map((study, i) => (
              <CaseStudyCard key={study.slug} study={study} index={i} />
            ))}
          </div>
          <p className="text-center mt-10">
            <Link
              href="/work"
              className="text-accent-blue hover:underline font-medium"
            >
              See all 8 case studies →
            </Link>
          </p>
        </section>

        <Footer site="build" />
        <Chatbot site="build" />
      </Suspense>
    </main>
  );
}
