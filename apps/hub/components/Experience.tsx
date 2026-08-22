"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
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
      className="border-t border-line"
    >
      <div ref={listRef} className="relative">
        <motion.div
          className="absolute left-0 md:left-[7.5rem] top-2 bottom-2 w-px bg-gradient-to-b from-accent/50 via-line-strong to-transparent hidden md:block origin-top"
          aria-hidden
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 1.1, ease }}
        />

        <ol className="space-y-16 md:space-y-20">
          {EXPERIENCE.map((entry, index) => (
            <motion.li
              key={`${entry.company}-${entry.role}`}
              className="md:grid md:grid-cols-[7.5rem_1fr] md:gap-12 relative"
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{
                duration: 0.55,
                delay: index * 0.12,
                ease,
              }}
            >
              <span
                className="hidden md:block absolute left-[7.5rem] -translate-x-1/2 top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-canvas shadow-[0_0_0_4px_rgba(31,77,58,0.12)] z-10"
                aria-hidden
              />
              <div className="mb-4 md:mb-0">
                <time className="text-sm font-medium text-muted tabular-nums">
                  {entry.period}
                </time>
              </div>

              <div className="group">
                <h3 className="font-display text-xl md:text-2xl font-semibold text-ink group-hover:text-accent transition-colors duration-300">
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
