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

        {/* Visual Element - Technology Focus Areas */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative w-full glass rounded-lg p-8">
            <h3 className="font-display text-2xl font-bold mb-6 text-white">
              Core Focus Areas
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <TechFocusCard
                title="Frontend Development"
                technologies={["React", "Next.js", "TypeScript"]}
                delay={0.4}
              />
              <TechFocusCard
                title="3D & Graphics"
                technologies={["Three.js", "WebGL", "React Three Fiber"]}
                delay={0.5}
              />
              <TechFocusCard
                title="AI/ML Exploration"
                technologies={["TensorFlow.js", "Neural Networks", "Python"]}
                delay={0.6}
              />
              <TechFocusCard
                title="Modern Tooling"
                technologies={["Tailwind CSS", "Framer Motion", "Vite"]}
                delay={0.7}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TechFocusCard({
  title,
  technologies,
  delay,
}: {
  title: string;
  technologies: string[];
  delay: number;
}) {
  return (
    <motion.div
      className="glass rounded-lg p-4 border border-white/10 hover:border-accent-blue/50 transition-all duration-300"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05, y: -5 }}
    >
      <h4 className="font-display text-lg font-semibold mb-3 text-white">
        {title}
      </h4>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <motion.span
            key={tech}
            className="px-3 py-1 text-xs font-medium bg-accent-blue/20 text-accent-blue rounded-full border border-accent-blue/30"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: delay + index * 0.1 }}
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
