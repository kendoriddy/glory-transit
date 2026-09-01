"use client";

import { motion } from "framer-motion";
import { SOCIAL } from "@portfolio/config";
import Section from "@/components/Section";
import { SERVICE_OFFERINGS } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Services() {
  return (
    <Section
      id="services"
      label="Services"
      title="What I build."
      description="Software engineering, AI systems, and cybersecurity — mapped to real production work."
      className="border-t border-line"
    >
      <ul className="space-y-4">
        {SERVICE_OFFERINGS.map((service, index) => (
          <motion.li
            key={service.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: index * 0.08, ease }}
          >
            <a
              href={service.href}
              className="group glass-card flex flex-col md:flex-row md:items-center gap-6 p-8 md:p-10 hover:border-accent-border transition-colors"
            >
              <span className="font-display text-3xl font-extrabold text-accent/70 group-hover:text-accent transition-colors shrink-0">
                {service.number}
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="font-display text-display-md text-ink group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="mt-3 text-muted leading-relaxed max-w-2xl">
                  {service.description}
                </p>
                <p className="mt-5 text-[11px] font-extrabold uppercase tracking-[0.08em] text-accent">
                  {service.cta} ({SOCIAL.email})
                </p>
              </div>
              <span
                className="hidden md:flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent-border text-accent group-hover:bg-accent group-hover:text-canvas transition-colors"
                aria-hidden
              >
                →
              </span>
            </a>
          </motion.li>
        ))}
      </ul>
    </Section>
  );
}
