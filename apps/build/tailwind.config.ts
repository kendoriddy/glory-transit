import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#F7F5F2",
        ink: "#111111",
        muted: "#5F5F5F",
        accent: "#1F4D3A",
        line: "rgba(17, 17, 17, 0.08)",
        "line-strong": "rgba(17, 17, 17, 0.14)",
      },
      fontFamily: {
        display: ["var(--font-inter-tight)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": [
          "clamp(2.75rem, 6vw, 4.5rem)",
          { lineHeight: "1.05", letterSpacing: "-0.03em" },
        ],
        "display-lg": [
          "clamp(2rem, 4vw, 3rem)",
          { lineHeight: "1.1", letterSpacing: "-0.025em" },
        ],
      },
      maxWidth: {
        content: "72rem",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      boxShadow: {
        soft: "0 1px 0 rgba(17,17,17,0.04), 0 16px 48px -20px rgba(17,17,17,0.14)",
        lift: "0 2px 0 rgba(17,17,17,0.04), 0 24px 56px -24px rgba(17,17,17,0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
