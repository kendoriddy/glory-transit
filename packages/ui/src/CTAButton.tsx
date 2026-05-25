"use client";

import { motion } from "framer-motion";

interface CTAButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

export default function CTAButton({
  href,
  onClick,
  children,
  className = "",
}: CTAButtonProps) {
  const classes = `relative px-8 py-4 text-lg font-medium text-white overflow-hidden rounded-full border-2 border-accent-blue/50 bg-transparent group ${className}`;

  const inner = (
    <>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-green opacity-0 group-hover:opacity-100"
        initial={{ x: "-100%" }}
        whileHover={{ x: "0%" }}
        transition={{ duration: 0.3 }}
      />
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {inner}
    </motion.button>
  );
}
