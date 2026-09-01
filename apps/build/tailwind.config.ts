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
        display: ["var(--font-inter-tight)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": [
          "clamp(2.75rem, 6vw, 4.5rem)",
          { lineHeight: "1.05", letterSpacing: "-0.04em" },
        ],
        "display-lg": [
          "clamp(2rem, 4vw, 3rem)",
          { lineHeight: "1.1", letterSpacing: "-0.035em" },
        ],
      },
      maxWidth: {
        content: "76rem",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
