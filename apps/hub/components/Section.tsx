"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface SectionProps {
  id?: string;
  label?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({
  id,
  label,
  title,
  description,
  children,
  className = "",
}: SectionProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id={id}
      ref={ref}
      className={`py-24 md:py-32 px-6 ${className}`}
      aria-labelledby={id ? `${id}-heading` : undefined}
    >
      <div className="max-w-content mx-auto">
        <motion.header
          className="mb-14 md:mb-20 max-w-2xl"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {label && (
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted mb-4">
              {label}
            </p>
          )}
          <h2
            id={id ? `${id}-heading` : undefined}
            className="font-display text-display-lg font-semibold text-ink text-balance"
          >
            {title}
          </h2>
          {description && (
            <p className="mt-5 text-lg text-muted leading-relaxed">
              {description}
            </p>
          )}
        </motion.header>
        {children}
      </div>
    </section>
  );
}
