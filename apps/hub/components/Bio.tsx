"use client";

import { motion } from "framer-motion";
import { SITE_URLS } from "@portfolio/config";

export default function Bio() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="font-display text-3xl font-bold mb-8 gradient-text text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          About
        </motion.h2>
        <motion.div
          className="space-y-4 text-white/70 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p>
            I&apos;m Onifade Kehinde Ridwan (Kenny),a Software Engineer with
            over five years of experience building and deploying
            production-grade applications across web, backend, and product
            systems. My work spans full-stack development, APIs, automation, and
            intelligent applications designed to solve real-world problems.
          </p>
          <p>
            {" "}
            I&apos;ve worked on products ranging from edtech platforms to
            AI-powered systems, with experience in technologies such as
            JavaScript/TypeScript, React, Next.js, backend systems, databases,
            and modern API-driven architectures. I’m also expanding my expertise
            in AI engineering and cybersecurity, with growing experience in
            automation, LLM-powered applications, and secure systems thinking.
          </p>
          <p>
            As the CEO of SchoolTech, I&apos;m building technology that helps
            schools automate administrative operations so educators can focus
            more on teaching and student outcomes.
          </p>
          <p>
            Beyond building products, I enjoy writing about engineering,
            learning in public, and contributing to Africa&apos;s growing
            technology ecosystem.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
