"use client";

import { motion } from "framer-motion";
import { BRAND } from "@portfolio/config";

export default function PortalHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center px-6 pt-24 pb-12">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.p
          className="text-accent-blue font-mono text-sm mb-4 tracking-widest uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Portfolio Hub
        </motion.p>
        <motion.h1
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {BRAND.fullName}
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-white/80 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {BRAND.tagline}
        </motion.p>
        <motion.p
          className="text-white/60 max-w-2xl mx-auto text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          Explore my work across software development, cybersecurity, and
          digital innovation.
        </motion.p>
      </div>
    </section>
  );
}
