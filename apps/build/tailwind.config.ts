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
    },
  },
  plugins: [],
};

export default config;
