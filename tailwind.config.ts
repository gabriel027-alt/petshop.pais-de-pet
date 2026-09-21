import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pet: {
          lime: "#84CC16",
          "lime-light": "#ECFCCB",
          "lime-dark": "#4D7C0F",
          pink: "#FF2E93",
          "pink-light": "#FDF2F8",
          "pink-dark": "#BE185D",
          orange: "#FF6B00",
          "orange-light": "#FFF7ED",
          "orange-dark": "#C2410C",
          teal: "#06B6D4",
          "teal-light": "#ECFEFF",
          "teal-dark": "#0E7490",
          dark: "#18181B",
          slate: "#27272A",
          muted: "#71717A",
          bg: "#FAFAF9",
          card: "#FFFFFF",
        },
      },
      fontFamily: {
        serif: ["'Playfair Display'", "Georgia", "Cambria", "'Times New Roman'", "serif"],
        sans: ["'Plus Jakarta Sans'", "system-ui", "-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "Roboto", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(24, 24, 27, 0.04), 0 1px 2px -1px rgba(24, 24, 27, 0.03)",
        card: "0 4px 6px -1px rgba(24, 24, 27, 0.05), 0 2px 4px -2px rgba(24, 24, 27, 0.03)",
        hover: "0 20px 30px -10px rgba(24, 24, 27, 0.12)",
        pop: "0 10px 25px -5px rgba(255, 46, 147, 0.2)",
        teal: "0 10px 25px -5px rgba(6, 182, 212, 0.2)",
        lime: "0 10px 25px -5px rgba(132, 204, 22, 0.25)",
        orange: "0 10px 25px -5px rgba(255, 107, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
export default config;