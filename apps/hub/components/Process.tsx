"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import { PROCESS_STEPS } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

const STACK = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Laravel",
  "Flutter",
  "PostgreSQL",
  "AI / LLMs",
] as const;

export default function Process() {
  return (
    <Section
      id="process"
      label="Execution system"
      title="Modern stack. Practical execution."
      description="Frontend, backend, AI, and security foundations — structured into a clear build process."
      className="border-t border-line bg-surface/40"
    >
      <div className="flex flex-wrap gap-2 mb-12">
        {STACK.map((tool) => (
          <span
            key={tool}
            className="px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.08em] text-muted border border-line"
          >
            {tool}
          </span>
        ))}
      </div>

      <div className="grid md:grid-cols-5 gap-4 md:gap-3">
        {PROCESS_STEPS.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: index * 0.06, ease }}
            className="glass-card p-6 md:p-5 flex flex-col"
          >
            <span className="font-display text-2xl font-extrabold text-accent">
              {step.number}
            </span>
            <h3 className="mt-4 font-display text-lg font-extrabold text-ink">
              {step.title}
            </h3>
            <p className="mt-2 text-sm text-muted leading-relaxed">
              {step.summary}
            </p>
            <ol className="mt-5 space-y-2 text-sm text-muted">
              {step.items.map((item, i) => (
                <li key={item} className="flex gap-2">
                  <span className="text-accent font-extrabold tabular-nums">
                    {i + 1}.
                  </span>
                  {item}
                </li>
              ))}
            </ol>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
