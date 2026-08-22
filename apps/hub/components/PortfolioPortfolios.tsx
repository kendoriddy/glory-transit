"use client";

import { motion } from "framer-motion";
import {
  DEFEND_SITE_URL,
  PILLARS,
  getBuildSiteUrl,
  SITE_URLS,
} from "@portfolio/config";
import Section from "@/components/Section";

const ease = [0.22, 1, 0.36, 1] as const;

export default function PortfolioPortfolios() {
  const buildUrl = getBuildSiteUrl();

  const portfolios = [
    {
      id: "build",
      title: PILLARS.build.title,
      subtitle: PILLARS.build.subtitle,
      href: buildUrl,
      domain: buildUrl.includes("localhost")
        ? "localhost:3001"
        : "build.kennyonifade.com",
      cta: "View software portfolio",
      accent: "from-accent/15 via-accent/5 to-transparent",
    },
    {
      id: "defend",
      title: PILLARS.defend.title,
      subtitle: PILLARS.defend.subtitle,
      href: DEFEND_SITE_URL,
      domain: "defend.kennyonifade.com",
      cta: "View security portfolio",
      accent: "from-ink/10 via-ink/[0.03] to-transparent",
    },
  ] as const;

  return (
    <Section
      id="portfolios"
      label="Portfolios"
      title="Explore by discipline"
      description="This site is the overview. Software and AI engineering work lives on Build; cybersecurity work lives on Defend."
      className="border-t border-line"
    >
      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {portfolios.map((item, index) => (
          <motion.a
            key={item.id}
            href={item.href}
            className="group relative block border border-line p-8 md:p-10 bg-canvas/70 overflow-hidden hover:border-accent/35 hover:shadow-lift transition-all duration-500 ease-smooth focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: index * 0.1, ease }}
            whileHover={{ y: -4 }}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              aria-hidden
            />
            <div className="relative z-10">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted mb-6">
                {item.domain}
              </p>
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-ink group-hover:text-accent transition-colors duration-300">
                {item.title}
              </h3>
              <p className="mt-4 text-muted leading-relaxed">{item.subtitle}</p>
              <p className="mt-8 text-sm font-medium text-accent group-hover:text-ink transition-colors duration-300">
                {item.cta} →
              </p>
            </div>
          </motion.a>
        ))}
      </div>

      <p className="mt-10 text-sm text-muted">
        Technical writing on{" "}
        <a
          href={SITE_URLS.medium}
          target="_blank"
          rel="noopener noreferrer"
          className="text-ink underline-offset-4 hover:underline"
        >
          Medium
        </a>
        .
      </p>
    </Section>
  );
}
