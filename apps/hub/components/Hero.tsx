"use client";

import { motion } from "framer-motion";
import { BRAND } from "@portfolio/config";
import Button from "@/components/ui/Button";
import { HERO_STATS } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease },
  },
};

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 px-6 min-h-[92vh] flex items-center overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 hero-glow"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-border to-transparent"
        aria-hidden
      />

      <div className="max-w-content mx-auto w-full relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.div variants={item} className="flex items-center gap-4 mb-8">
            <span className="h-px w-10 bg-accent-border" aria-hidden />
            <p className="eyebrow">
              Software Engineer · AI · Cybersecurity · Founder
            </p>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-display-xl text-ink text-balance"
          >
            Building software that solves real-world problems.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-8 text-lg md:text-xl text-muted max-w-2xl leading-relaxed"
          >
            I&apos;m {BRAND.shortName} — a software engineer, AI engineer, and
            cybersecurity practitioner with over five years shipping production
            systems. I build products, automate workflows, and design systems
            people can trust.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            <Button href="#contact" variant="primary">
              Start a project
            </Button>
            <Button href="/work" variant="secondary">
              View projects →
            </Button>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-line pt-10"
          >
            {HERO_STATS.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl md:text-4xl font-extrabold text-accent tracking-tight">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-muted leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Project image showcase — restore when ready
        <motion.div
          className="relative hidden lg:block"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.2, ease }}
        >
          <div
            className="absolute -inset-8 -z-10 rounded-full bg-accent/10 blur-3xl"
            aria-hidden
          />
          <HeroShowcase />
        </motion.div>
        */}
      </div>
    </section>
  );
}
