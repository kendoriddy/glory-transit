"use client";

import { motion } from "framer-motion";
import { Footer } from "@portfolio/ui";
import { SITE_URLS } from "@portfolio/config";
import PlaceholderSection from "@/components/PlaceholderSection";

const sections = [
  {
    id: "about",
    title: "About",
    description:
      "Cybersecurity practitioner profile and background. Content is migrating from cyber.kennyonifade.com — certifications, experience, and focus areas will appear here.",
  },
  {
    id: "skills",
    title: "Skills & Certifications",
    description:
      "Technical skills, security domains, and professional certifications. Add your CompTIA, OSCP, or other credentials during migration.",
  },
  {
    id: "labs",
    title: "Labs & CTFs",
    description:
      "Hands-on lab writeups, CTF challenges, and learning exercises. Paste walkthroughs from your cyber portfolio when ready.",
  },
  {
    id: "projects",
    title: "Security Projects",
    description:
      "Application security assessments, tooling, automation scripts, and research projects.",
  },
  {
    id: "contact",
    title: "Contact",
    description:
      "For inquiries, use the contact form on kennyonifade.com or reach out via LinkedIn and email listed in the footer.",
  },
];

export default function DefendHome() {
  return (
    <main className="relative min-h-screen">
      <section className="min-h-[60vh] flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            className="text-accent-green font-mono text-sm mb-4 tracking-widest uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Cybersecurity
          </motion.p>
          <motion.h1
            className="font-display text-4xl md:text-6xl font-bold mb-6 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Defend
          </motion.h1>
          <motion.p
            className="text-xl text-white/80 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            Defense, assurance, and offensive security
          </motion.p>
          <motion.div
            className="glass rounded-lg p-6 max-w-xl mx-auto text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-white/70 text-sm leading-relaxed">
              This site is a scaffold for{" "}
              <strong className="text-white">defend.kennyonifade.com</strong>.
              Full content is migrating from{" "}
              <a
                href={SITE_URLS.cyberLegacy}
                className="text-accent-blue hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                cyber.kennyonifade.com
              </a>
              . Chatbot support will be enabled after migration (
              <code className="text-accent-green text-xs">
                ENABLE_DEFEND_CHAT=true
              </code>
              ).
            </p>
          </motion.div>
        </div>
      </section>

      {sections.map((section) => (
        <PlaceholderSection key={section.id} {...section} />
      ))}

      <Footer site="defend" />
    </main>
  );
}
