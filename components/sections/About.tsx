"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center py-20 px-6"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2
            className="font-display text-4xl md:text-5xl font-bold mb-6 gradient-text"
            variants={itemVariants}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-lg text-white/70 leading-relaxed mb-4"
            variants={itemVariants}
          >
            I&apos;m a passionate frontend engineer with expertise in React and
            Next.js, currently exploring the fascinating intersection of web
            development and artificial intelligence.
          </motion.p>
          <motion.p
            className="text-lg text-white/70 leading-relaxed mb-4"
            variants={itemVariants}
          >
            My journey involves crafting beautiful, performant user interfaces
            while simultaneously diving deep into machine learning concepts,
            always seeking to merge elegant design with intelligent systems.
          </motion.p>
          <motion.p
            className="text-lg text-white/70 leading-relaxed"
            variants={itemVariants}
          >
            When I&apos;m not coding, you&apos;ll find me experimenting with AI
            models, contributing to open-source projects, or sharing knowledge
            with the developer community.
          </motion.p>
        </motion.div>

        {/* Visual Element - Animated Skill Graph */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative w-full h-96 glass rounded-lg p-8 flex flex-col justify-center gap-6">
            <SkillBar label="React/Next.js" progress={90} delay={0.5} />
            <SkillBar label="TypeScript" progress={85} delay={0.6} />
            <SkillBar label="AI/ML Learning" progress={45} delay={0.7} />
            <SkillBar label="Three.js/WebGL" progress={70} delay={0.8} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SkillBar({
  label,
  progress,
  delay,
}: {
  label: string;
  progress: number;
  delay: number;
}) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-white/90 font-medium">{label}</span>
        <span className="text-accent-blue">{progress}%</span>
      </div>
      <div className="h-2 bg-dark-secondary rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-accent-purple via-accent-blue to-accent-green rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${progress}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
        >
          <motion.div
            className="h-full w-full bg-white/20"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}
