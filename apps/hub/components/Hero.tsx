"use client";

import { motion } from "framer-motion";
import { BRAND, RESUME_PATH } from "@portfolio/config";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 px-6 min-h-[90vh] flex items-center">
      <div className="max-w-content mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted mb-8">
            {BRAND.fullName}
          </p>

          <h1 className="font-display text-display-xl font-semibold text-ink text-balance max-w-4xl">
            Building software that solves real-world problems.
          </h1>

          <p className="mt-8 text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
            I&apos;m Kenny — a software engineer, AI engineer, and cybersecurity
            practitioner with over five years shipping production systems. I
            build products, automate workflows, and design systems people can
            trust.
          </p>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink/80">
            <span>Software Engineer</span>
            <span className="text-line-strong" aria-hidden>
              ·
            </span>
            <span>Cybersecurity Practitioner</span>
            <span className="text-line-strong" aria-hidden>
              ·
            </span>
            <span>Founder</span>
          </div>

          <p className="mt-8 text-sm text-muted max-w-xl leading-relaxed">
            <span className="text-ink font-medium">Current focus:</span> Growing{" "}
            <a
              href="https://schoolorbit.ng"
              className="text-accent underline-offset-4 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              SchoolOrbit
            </a>{" "}
            while deepening expertise in cybersecurity — SOC operations, GRC,
            and secure architecture.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <Button href="#portfolios" variant="primary">
              Explore portfolios
            </Button>
            <Button href={RESUME_PATH} variant="secondary" download>
              Download Resume
            </Button>
            <Button href="#contact" variant="secondary">
              Contact Me
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
