"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SOCIAL } from "@portfolio/config";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <Section
      id="contact"
      label="Contact"
      title="Let's build something meaningful."
      description="Open to engineering roles, security opportunities, collaborations, and conversations with founders."
      className="border-t border-line bg-gradient-to-t from-accent/[0.05] to-transparent"
    >
      <div ref={ref} className="grid lg:grid-cols-2 gap-16 lg:gap-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.5 }}
        >
          <ul className="space-y-6">
            <li>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted mb-2">
                Email
              </p>
              <a
                href={`mailto:${SOCIAL.email}`}
                className="text-lg text-ink hover:text-accent transition-colors"
              >
                {SOCIAL.email}
              </a>
            </li>
            <li>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted mb-2">
                LinkedIn
              </p>
              <a
                href={SOCIAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-ink hover:text-accent transition-colors"
              >
                linkedin.com/in/kehindeonifade
              </a>
            </li>
            <li>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted mb-2">
                GitHub
              </p>
              <a
                href={SOCIAL.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-ink hover:text-accent transition-colors"
              >
                github.com/kendoriddy
              </a>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </Section>
  );
}
