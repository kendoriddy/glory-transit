import type { Config } from "tailwindcss";

/** Shared dark editorial luxury tokens for build/defend apps */
const preset: Partial<Config> = {
  theme: {
    extend: {
      colors: {
        canvas: "var(--color-bg, #000000)",
        "canvas-alt": "var(--color-bg-alt, #080808)",
        surface: "var(--color-surface, #0d0d0d)",
        "surface-elevated": "var(--color-surface-elevated, #1a1a1a)",
        ink: "var(--color-text, #f5f0e8)",
        muted: "var(--color-text-muted, #a8a8a8)",
        accent: "var(--color-accent, #b08d57)",
        "accent-soft": "var(--color-accent-soft, rgba(176,141,87,0.13))",
        "accent-border": "var(--color-accent-border, rgba(176,141,87,0.38))",
        line: "var(--color-border, rgba(255,255,255,0.08))",
        "line-strong": "var(--color-border-strong, rgba(255,255,255,0.14))",
        dark: {
          primary: "#000000",
          secondary: "#0d0d0d",
          tertiary: "#1a1a1a",
          black: "#000000",
        },
        border: "var(--color-border, rgba(255,255,255,0.08))",
        foreground: "var(--color-text, #f5f0e8)",
        background: "var(--color-bg, #000000)",
      },
      fontFamily: {
        display: ["var(--font-manrope, var(--font-space-grotesk))", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      animation: {
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        "glow-pulse": {
          "0%, 100%": { opacity: "0.8" },
          "50%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
};

export default preset;
