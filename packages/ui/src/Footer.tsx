"use client";

import { motion } from "framer-motion";
import { SITE_URLS, SOCIAL } from "@portfolio/config";

export type FooterSite = "hub" | "build" | "defend";

const siteLabels: Record<FooterSite, string> = {
  hub: "Kenny Onifade",
  build: "Build",
  defend: "Defend",
};

export default function Footer({ site = "hub" }: { site?: FooterSite }) {
  const pillarLinks = [
    { label: "Hub", href: SITE_URLS.hub },
    { label: "Build", href: SITE_URLS.build },
    { label: "Defend", href: SITE_URLS.defend },
  ].filter((link) => link.label.toLowerCase() !== site);

  return (
    <footer className="relative py-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <p className="text-white/50 text-xs text-center mb-6">
          Part of{" "}
          <a href={SITE_URLS.hub} className="text-accent-blue hover:underline">
            kennyonifade.com
          </a>
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {pillarLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-white/60 hover:text-accent-blue transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p
            className="text-white/60 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © {new Date().getFullYear()} {siteLabels[site]}. Built with Next.js
            &amp; Framer Motion.
          </motion.p>

          <div className="flex gap-6">
            {[
              { label: "GitHub", href: SOCIAL.github },
              { label: "LinkedIn", href: SOCIAL.linkedin },
              { label: "X", href: SOCIAL.twitter },
              { label: "Email", href: `mailto:${SOCIAL.email}` },
            ].map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.label === "Email" ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="text-white/60 hover:text-accent-blue transition-colors text-sm"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
