"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative py-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p
            className="text-white/60 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © {new Date().getFullYear()} Portfolio. Built with Next.js & Framer
            Motion.
          </motion.p>

          <div className="flex gap-6">
            {["GitHub", "LinkedIn", "Twitter", "Email"].map((link, index) => (
              <motion.a
                key={link}
                href={
                  link.toLowerCase() === "github"
                    ? "https://github.com/kendoriddy"
                    : link.toLowerCase() === "linkedin"
                    ? "https://www.linkedin.com/in/kehindeonifade/"
                    : link.toLowerCase() === "twitter"
                    ? "https://x.com/RideOnOne09"
                    : "mailto:onifkay@gmail.com"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-accent-blue transition-colors text-sm"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {link}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
