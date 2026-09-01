import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "var(--color-bg)",
        "canvas-alt": "var(--color-bg-alt)",
        surface: "var(--color-surface)",
        "surface-elevated": "var(--color-surface-elevated)",
        ink: "var(--color-text)",
        muted: "var(--color-text-muted)",
        accent: "var(--color-accent)",
        "accent-soft": "var(--color-accent-soft)",
        "accent-border": "var(--color-accent-border)",
        line: "var(--color-border)",
        "line-strong": "var(--color-border-strong)",
      },
      fontFamily: {
        display: ["var(--font-manrope)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": [
          "clamp(2.875rem, 7vw, 5.125rem)",
          { lineHeight: "1.02", letterSpacing: "-0.05em", fontWeight: "800" },
        ],
        "display-lg": [
          "clamp(2rem, 4.5vw, 3.25rem)",
          { lineHeight: "1.08", letterSpacing: "-0.04em", fontWeight: "800" },
        ],
        "display-md": [
          "clamp(1.5rem, 3vw, 2rem)",
          { lineHeight: "1.15", letterSpacing: "-0.03em", fontWeight: "800" },
        ],
      },
      maxWidth: {
        content: "76rem",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "gold-sweep": {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(120%)" },
        },
        "loader-fade": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0", visibility: "hidden" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.65s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "gold-sweep": "gold-sweep 1.4s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "loader-fade": "loader-fade 0.5s ease forwards",
      },
      boxShadow: {
        soft: "0 1px 0 rgba(255,255,255,0.04), 0 16px 48px -20px rgba(0,0,0,0.5)",
        lift: "0 2px 0 rgba(255,255,255,0.04), 0 24px 56px -24px rgba(0,0,0,0.6)",
        gold: "0 0 40px rgba(176, 141, 87, 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
