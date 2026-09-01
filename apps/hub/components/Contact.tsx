"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SOCIAL } from "@portfolio/config";
import ContactForm from "@/components/ContactForm";
import Button from "@/components/ui/Button";

const CONTACT_LINKS = [
  {
    label: "Email",
    value: SOCIAL.email,
    href: `mailto:${SOCIAL.email}`,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/kehindeonifade",
    href: SOCIAL.linkedin,
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/kendoriddy",
    href: SOCIAL.github,
    external: true,
  },
  {
    label: "X / Twitter",
    value: "@RideOnOne09",
    href: SOCIAL.twitter,
    external: true,
  },
] as const;

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 md:py-32 px-6 border-t border-line"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-content mx-auto">
        <div className="grid lg:grid-cols-2 gap-0 border border-line overflow-hidden">
          <motion.div
            className="p-10 md:p-14 bg-surface flex flex-col justify-center"
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.5 }}
          >
            <p className="section-label mb-5">Contact</p>
            <h2
              id="contact-heading"
              className="font-display text-display-lg text-ink text-balance"
            >
              Ready to build something serious?
            </h2>
            <p className="mt-5 text-lg text-muted leading-relaxed">
              Open to engineering roles, security opportunities, collaborations,
              and conversations with founders.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href={`mailto:${SOCIAL.email}`} variant="primary" external>
                Email {SOCIAL.email}
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="p-10 md:p-14 border-t lg:border-t-0 lg:border-l border-line"
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ul className="space-y-0 divide-y divide-line border-y border-line">
              {CONTACT_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={"external" in link && link.external ? "_blank" : undefined}
                    rel={"external" in link && link.external ? "noopener noreferrer" : undefined}
                    className="group flex items-center justify-between gap-4 py-5 hover:bg-accent-soft/40 transition-colors px-1 -mx-1"
                  >
                    <div>
                      <p className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-accent">
                        {link.label}
                      </p>
                      <p className="mt-1 text-ink group-hover:text-accent transition-colors">
                        {link.value}
                      </p>
                    </div>
                    <span
                      className="text-accent opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                      aria-hidden
                    >
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-muted mb-4">
                Or send a message
              </p>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
