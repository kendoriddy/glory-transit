"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import { SKILL_GROUPS } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Skills() {
  return (
    <Section
      id="skills"
      label="Capabilities"
      title="Skills across engineering, AI, and security"
      description="Grouped by practice area — no ratings, no progress bars, just the tools and disciplines I work with daily."
      className="border-t border-line"
    >
      <div className="grid sm:grid-cols-2 gap-12 md:gap-16">
        {SKILL_GROUPS.map((group, gi) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: gi * 0.06, ease }}
          >
            <h3 className="font-display text-lg font-semibold text-ink mb-5">
              {group.title}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.skills.map((skill, si) => (
                <motion.li
                  key={skill}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.35,
                    delay: gi * 0.05 + si * 0.03,
                    ease,
                  }}
                  className="px-3 py-1.5 text-sm text-ink/85 border border-line bg-canvas/60 hover:border-accent/40 hover:text-accent hover:bg-accent/[0.04] hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
