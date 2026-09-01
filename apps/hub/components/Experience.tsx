"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Section from "@/components/Section";
import { EXPERIENCE } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Experience() {
  const listRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(listRef, { once: true, margin: "-60px" });

  return (
    <Section
      id="experience"
      label="Experience"
      title="Work that compounds."
      description="A timeline of building products, leading delivery, and growing into security practice."
      className="border-t border-line bg-surface/20"
    >
      <div ref={listRef} className="relative">
        <ol className="space-y-0 divide-y divide-line border-y border-line">
          {EXPERIENCE.map((entry, index) => (
            <motion.li
              key={`${entry.company}-${entry.role}`}
              className="py-10 md:py-12 grid md:grid-cols-[10rem_1fr] gap-6 md:gap-12"
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{
                duration: 0.55,
                delay: index * 0.1,
                ease,
              }}
            >
              <div>
                <time className="text-[11px] font-extrabold uppercase tracking-[0.1em] text-accent tabular-nums">
                  {entry.period}
                </time>
              </div>

              <div className="group">
                <h3 className="font-display text-xl md:text-2xl font-extrabold text-ink group-hover:text-accent transition-colors">
                  {entry.role}
                </h3>
                <p className="mt-1 text-muted">
                  {entry.company}
                  {entry.location && (
                    <span className="text-muted/70"> · {entry.location}</span>
                  )}
                </p>
                <ul className="mt-6 space-y-3 text-muted leading-relaxed">
                  {entry.highlights.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span
                        className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent"
                        aria-hidden
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
