import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slide: {
          "0%": { transform: "translateX(40%)" },
          "100%": { transform: "translateX(-60%)" },
          },
        slide2: {
          "0%": { transform: "translateX(75%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        slide: "slide 20s linear infinite",
        slide2: "slide 20s linear infinite",
      },

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".animation-paused": {
          animationPlayState: "paused",
        },
        ".animation-running": {
          animationPlayState: "running",
        },
      });
    }),
  ],
} satisfies Config;
