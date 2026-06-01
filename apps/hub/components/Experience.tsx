"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Section from "@/components/Section";
import { EXPERIENCE } from "@/lib/content";

export default function Experience() {
  const listRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(listRef, { once: true, margin: "-60px" });

  return (
    <Section
      id="experience"
      label="Experience"
      title="Work that compounds."
      description="A timeline of building products, leading delivery, and growing into security practice."
      className="border-t border-line"
    >
      <div ref={listRef} className="relative">
        <div
          className="absolute left-0 md:left-[7.5rem] top-2 bottom-2 w-px bg-line-strong hidden md:block"
          aria-hidden
        />

        <ol className="space-y-16 md:space-y-20">
          {EXPERIENCE.map((entry, index) => (
            <motion.li
              key={`${entry.company}-${entry.role}`}
              className="md:grid md:grid-cols-[7.5rem_1fr] md:gap-12"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="mb-4 md:mb-0">
                <time className="text-sm font-medium text-muted tabular-nums">
                  {entry.period}
                </time>
              </div>

              <div>
                <h3 className="font-display text-xl md:text-2xl font-semibold text-ink">
                  {entry.role}
                </h3>
                <p className="mt-1 text-ink/80">
                  {entry.company}
                  {entry.location && (
                    <span className="text-muted"> · {entry.location}</span>
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
