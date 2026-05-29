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
        background: "var(--background)",
        foreground: "var(--foreground)",
        cream: "#F0F4FF",
        pink: "#6B8FD4",
        lavender: "#A8C5F0",
        mint: "#D4E4FF",
        yellow: "#F9E2AE",
        charcoal: "#2D2D2D",
      },
    },
  },
  plugins: [],
};
export default config;
