import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0A0A0F",
          card: "#111118",
          elevated: "#1A1A2E",
        },
        violet: {
          primary: "#6C63FF",
          soft: "#A78BFA",
          glow: "rgba(108, 99, 255, 0.15)",
        },
        text: {
          primary: "#E2E8F0",
          muted: "#64748B",
          subtle: "#94A3B8",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "glow-violet": "radial-gradient(ellipse at center, rgba(108,99,255,0.15) 0%, transparent 70%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      boxShadow: {
        "glow-sm": "0 0 20px rgba(108, 99, 255, 0.15)",
        "glow-md": "0 0 40px rgba(108, 99, 255, 0.2)",
        "glow-lg": "0 0 80px rgba(108, 99, 255, 0.25)",
        "glass": "0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
      },
    },
  },
  plugins: [],
};
export default config;
