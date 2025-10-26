import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}"
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px"
      }
    },
    extend: {
      colors: {
        primary: "#4F46E5",
        secondary: "#06B6D4",
        accent: "#22C55E",
        neutral: {
          900: "#0B1020",
          800: "#0F172A",
          700: "#1E293B",
          600: "#334155",
          500: "#475569",
          400: "#64748B",
          300: "#94A3B8",
          200: "#CBD5F5",
          100: "#E2E8F0"
        },
        surface: {
          DEFAULT: "#0B1020",
          foreground: "#F8FAFC"
        }
      },
      fontFamily: {
        sans: ["Inter", "Manrope", ...fontFamily.sans]
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        pill: "9999px"
      },
      boxShadow: {
        soft: "0 20px 45px -20px rgba(79, 70, 229, 0.4)",
        card: "0 24px 60px -30px rgba(15, 23, 42, 0.45)"
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        fadeUp: "fadeUp 0.8s ease forwards"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};

export default config;
