"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
  source?: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
    });
  };

  return (
    <motion.div
      className="group relative h-[400px] glass rounded-lg overflow-hidden cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      whileHover={{ scale: 1.03 }}
      style={{
        rotateX: mousePosition.y,
        rotateY: mousePosition.x,
        transformStyle: "preserve-3d",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {/* Project Image/Placeholder */}
      <div
        className="absolute inset-0"
        style={{
          background: project.image.includes(",")
            ? `linear-gradient(135deg, ${project.image.split(",")[0]}, ${
                project.image.split(",")[1]
              })`
            : `linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(0, 217, 255, 0.2))`,
        }}
      >
        <div className="w-full h-full flex items-center justify-center text-center text-white/30 text-2xl font-display backdrop-blur-sm">
          {project.title}
        </div>
      </div>

      {/* Hover Overlay */}
      <motion.div
        className="absolute inset-0 bg-dark-primary/95 backdrop-blur-sm p-6 flex flex-col justify-between"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div>
          <h3 className="font-display text-2xl font-bold mb-3 text-white">
            {project.title}
          </h3>
          <p className="text-white/70 mb-4">{project.description}</p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, index) => (
            <motion.span
              key={tech}
              className="px-3 py-1 text-xs font-medium bg-accent-blue/20 text-accent-blue rounded-full border border-accent-blue/30"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                scale: isHovered ? 1 : 0.8,
              }}
              transition={{ delay: index * 0.05 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex flex-col gap-3">
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-accent-blue font-medium hover:text-accent-green transition-colors"
            initial={{ x: -20, opacity: 0 }}
            animate={{
              x: isHovered ? 0 : -20,
              opacity: isHovered ? 1 : 0,
            }}
            whileHover={{ x: 5 }}
            onClick={(e) => e.stopPropagation()}
          >
            <span>View Live</span>
            <motion.svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </motion.svg>
          </motion.a>
          {project.source && (
            <motion.a
              href={project.source}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/70 font-medium hover:text-accent-purple transition-colors text-sm"
              initial={{ x: -20, opacity: 0 }}
              animate={{
                x: isHovered ? 0 : -20,
                opacity: isHovered ? 1 : 0,
              }}
              transition={{ delay: 0.1 }}
              whileHover={{ x: 5 }}
              onClick={(e) => e.stopPropagation()}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span>Source Code</span>
            </motion.a>
          )}
        </div>
      </motion.div>

      {/* Glow Border Effect */}
      <motion.div
        className="absolute inset-0 rounded-lg pointer-events-none"
        style={{
          boxShadow: isHovered
            ? "0 0 30px rgba(0, 217, 255, 0.5), inset 0 0 30px rgba(0, 217, 255, 0.1)"
            : "none",
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}
