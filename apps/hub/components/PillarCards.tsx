"use client";

import { motion } from "framer-motion";
import { PILLARS } from "@portfolio/config";

const pillars = [PILLARS.build, PILLARS.defend, PILLARS.writing] as const;

const icons = ["⚡", "🛡️", "✍️"];

export default function PillarCards() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {pillars.map((pillar, index) => (
          <motion.a
            key={pillar.title}
            href={pillar.href}
            target={pillar.title === "Writing" ? "_blank" : undefined}
            rel={pillar.title === "Writing" ? "noopener noreferrer" : undefined}
            className="glass rounded-xl p-8 block group hover:border-accent-blue/50 border border-white/10 transition-colors"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -6, scale: 1.02 }}
          >
            <span className="text-3xl mb-4 block" aria-hidden>
              {icons[index]}
            </span>
            <h2 className="font-display text-2xl font-bold text-white mb-2 group-hover:text-accent-blue transition-colors">
              {pillar.title}
            </h2>
            <p className="text-white/60 text-sm leading-relaxed">
              {pillar.subtitle}
            </p>
            <span className="inline-flex items-center gap-2 mt-6 text-accent-blue text-sm font-medium">
              Explore
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
