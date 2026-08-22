"use client";

import { motion } from "framer-motion";

/** Soft floating orbs for atmospheric depth — decorative only */
export default function AmbientOrbs({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      <motion.div
        className="absolute -top-16 -left-10 h-[22rem] w-[22rem] rounded-full bg-accent/[0.14] blur-3xl"
        animate={{
          x: [0, 24, 0],
          y: [0, 16, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/3 -right-16 h-96 w-96 rounded-full bg-accent/[0.1] blur-3xl"
        animate={{
          x: [0, -20, 0],
          y: [0, 28, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-ink/[0.03] blur-3xl"
        animate={{
          x: [0, 16, 0],
          y: [0, -12, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8,
        }}
      />
    </div>
  );
}
