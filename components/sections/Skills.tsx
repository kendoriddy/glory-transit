"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const skillCategories = {
  frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  backend: ["Node.js", "Python", "PostgreSQL", "REST APIs"],
  aiMl: ["TensorFlow.js", "Python", "Machine Learning", "Neural Networks"],
  tools: ["Git", "Docker", "Webpack", "Vite", "Jest"],
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" ref={ref} className="relative min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Skills & Technologies
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            A continuously evolving toolkit for building modern, intelligent
            applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <motion.div
              key={category}
              className="glass rounded-lg p-6"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="font-display text-2xl font-bold mb-6 capitalize text-white">
                {category === "aiMl" ? "AI/ML" : category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <SkillTag
                    key={skill}
                    skill={skill}
                    isHovered={hoveredSkill === skill}
                    onHover={() => setHoveredSkill(skill)}
                    onLeave={() => setHoveredSkill(null)}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI/ML Learning Areas */}
        <motion.div
          className="glass rounded-lg p-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="font-display text-2xl font-bold mb-6 text-white">
            Currently Exploring
          </h3>
          <p className="text-white/70 mb-6">
            Areas I&apos;m actively learning and experimenting with in AI/ML:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Neural Networks",
              "Deep Learning",
              "Natural Language Processing",
              "Computer Vision",
            ].map((topic, index) => (
              <motion.div
                key={topic}
                className="flex items-center gap-3 p-4 rounded-lg bg-dark-secondary/50 border border-white/10 hover:border-accent-purple/50 transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <div className="w-2 h-2 rounded-full bg-accent-purple" />
                <span className="text-white/90 font-medium">{topic}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SkillTag({
  skill,
  isHovered,
  onHover,
  onLeave,
}: {
  skill: string;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  return (
    <motion.button
      className="relative px-4 py-2 rounded-full border border-white/20 bg-dark-secondary/50 text-white/80 text-sm font-medium overflow-hidden group"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        borderColor: isHovered ? "#00D9FF" : "rgba(255, 255, 255, 0.2)",
        color: isHovered ? "#00D9FF" : "rgba(255, 255, 255, 0.8)",
      }}
      transition={{ duration: 0.2 }}
    >
      {/* Gradient border on hover */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-purple via-accent-blue to-accent-green opacity-0"
        animate={{ opacity: isHovered ? 0.3 : 0 }}
        transition={{ duration: 0.2 }}
      />

      {/* Particle effect on hover */}
      {isHovered && (
        <>
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-accent-blue rounded-full"
              initial={{
                x: "50%",
                y: "50%",
                scale: 0,
              }}
              animate={{
                x: `${50 + (Math.random() - 0.5) * 100}%`,
                y: `${50 + (Math.random() - 0.5) * 100}%`,
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: "easeOut",
              }}
            />
          ))}
        </>
      )}

      <span className="relative z-10">{skill}</span>
    </motion.button>
  );
}
