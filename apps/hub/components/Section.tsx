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
  headerExtra?: ReactNode;
}

export default function Section({
  id,
  label,
  title,
  description,
  children,
  className = "",
  headerExtra,
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
          className="mb-14 md:mb-20 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          {label && <p className="section-label mb-5">{label}</p>}
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2
                id={id ? `${id}-heading` : undefined}
                className="font-display text-display-lg text-ink text-balance"
              >
                {title}
              </h2>
              {description && (
                <p className="mt-5 text-lg text-muted leading-relaxed max-w-2xl">
                  {description}
                </p>
              )}
            </div>
            {headerExtra}
          </div>
        </motion.header>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{
            duration: 0.55,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
