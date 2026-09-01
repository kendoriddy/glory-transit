"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  DEFEND_SITE_URL,
  getBuildSiteUrl,
} from "@portfolio/config";
import Section from "@/components/Section";
import { BUILD_PILLARS } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

export default function BuildDirection() {
  const [active, setActive] = useState(BUILD_PILLARS[0].id);
  const buildUrl = getBuildSiteUrl();
  const pillar = BUILD_PILLARS.find((p) => p.id === active) ?? BUILD_PILLARS[0];

  const hrefs: Record<string, string> = {
    hub: "/",
    build: buildUrl,
    defend: DEFEND_SITE_URL,
  };

  return (
    <Section
      id="direction"
      label="Build direction"
      title="Choose the focus. See the depth."
      description="Quick view of how I approach software engineering, AI systems, and cybersecurity — across Hub, Build, and Defend."
      className="border-t border-line"
    >
      <div className="glass-card overflow-hidden">
        <div
          className="flex overflow-x-auto border-b border-line"
          role="tablist"
          aria-label="Portfolio pillars"
        >
          {BUILD_PILLARS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={active === tab.id}
              aria-controls={`panel-${tab.id}`}
              id={`tab-${tab.id}`}
              onClick={() => setActive(tab.id)}
              className={`shrink-0 px-6 md:px-8 py-4 text-[11px] font-extrabold uppercase tracking-[0.12em] transition-colors border-b-2 -mb-px ${
                active === tab.id
                  ? "text-accent border-accent bg-accent-soft"
                  : "text-muted border-transparent hover:text-ink"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={pillar.id}
            id={`panel-${pillar.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${pillar.id}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease }}
            className="p-8 md:p-10"
          >
            <h3 className="font-display text-display-md text-ink">{pillar.title}</h3>
            <p className="mt-4 text-muted leading-relaxed max-w-2xl">
              {pillar.description}
            </p>
            <ul className="mt-8 grid sm:grid-cols-3 gap-4">
              {pillar.points.map((point) => (
                <li
                  key={point}
                  className="glass-surface px-4 py-4 text-sm text-muted leading-relaxed"
                >
                  {point}
                </li>
              ))}
            </ul>
            {pillar.id !== "hub" && (
              <a
                href={hrefs[pillar.id]}
                target={pillar.id === "defend" ? "_blank" : undefined}
                rel={pillar.id === "defend" ? "noopener noreferrer" : undefined}
                className="link-arrow mt-8 inline-flex"
              >
                Explore {pillar.label} portfolio →
              </a>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  );
}
