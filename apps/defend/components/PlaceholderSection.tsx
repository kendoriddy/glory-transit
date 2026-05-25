"use client";

import { motion } from "framer-motion";

export default function PlaceholderSection({
  id,
  title,
  description,
}: {
  id: string;
  title: string;
  description: string;
}) {
  return (
    <section id={id} className="py-16 px-6 border-t border-white/10">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="font-display text-2xl font-bold mb-4 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="text-white/60 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
}
