"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function WorkHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6">
      <div className="max-w-content mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted mb-8">
            Full-Stack / Product Engineer
          </p>

          <h1 className="font-display text-display-xl font-semibold text-ink text-balance max-w-4xl">
            I help growing companies build internal tools &amp; product features
            without hiring another full-time engineer.
          </h1>

          <p className="mt-8 text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
            I turn messy workflows, product ideas, and operational problems into
            production-ready software.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <Button href="#contact" variant="primary">
              Work with me
            </Button>
            <Button href="#selected-work" variant="secondary">
              See my work
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
