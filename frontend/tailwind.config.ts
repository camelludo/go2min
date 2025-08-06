import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: [
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Mineral-specific colors
        mineral: {
          boron: "hsl(var(--boron-blue))",
          feldspar: "hsl(var(--feldspar-rose))",
          pumice: "hsl(var(--pumice-gray))",
          bentonite: "hsl(var(--bentonite-amber))",
          magnesite: "hsl(var(--magnesite-emerald))",
        },
        // Geological accent colors
        copper: {
          50: "hsl(16 95% 95%)",
          100: "hsl(16 85% 88%)",
          200: "hsl(16 80% 75%)",
          300: "hsl(16 78% 65%)",
          400: "hsl(16 82% 55%)",
          500: "hsl(16 85% 45%)",
          600: "hsl(16 88% 38%)",
          700: "hsl(16 85% 32%)",
          800: "hsl(16 82% 26%)",
          900: "hsl(16 78% 20%)",
          950: "hsl(16 75% 15%)",
        },
        stone: {
          50: "hsl(32 15% 96%)",
          100: "hsl(32 12% 92%)",
          200: "hsl(32 10% 85%)",
          300: "hsl(32 8% 75%)",
          400: "hsl(32 6% 65%)",
          500: "hsl(32 5% 55%)",
          600: "hsl(32 6% 45%)",
          700: "hsl(32 8% 35%)",
          800: "hsl(32 10% 25%)",
          900: "hsl(32 12% 15%)",
          950: "hsl(32 15% 8%)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        // Geological animations
        "crystallize": {
          "0%": { 
            transform: "scale(0.95) rotate(-1deg)",
            boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)"
          },
          "100%": { 
            transform: "scale(1) rotate(0deg)",
            boxShadow: "0 10px 15px -3px rgb(16 85% 45% / 0.1), 0 4px 6px -4px rgb(16 85% 45% / 0.1)"
          }
        },
        "mineral-shine": {
          "0%, 100%": { backgroundPosition: "-200% center" },
          "50%": { backgroundPosition: "200% center" }
        },
        "geological-float": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-4px) rotate(0.5deg)" }
        },
        "copper-glow": {
          "0%, 100%": {
            boxShadow: "0 0 20px hsl(16 85% 45% / 0.2), 0 10px 15px -3px rgb(16 85% 45% / 0.1)"
          },
          "50%": {
            boxShadow: "0 0 30px hsl(16 85% 45% / 0.4), 0 10px 15px -3px rgb(16 85% 45% / 0.1)"
          }
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "scale-in": {
          "0%": {
            opacity: "0",
            transform: "scale(0.9)"
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)"
          }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "crystallize": "crystallize 0.3s ease-out forwards",
        "mineral-shine": "mineral-shine 1.5s ease infinite",
        "geological-float": "geological-float 2s ease-in-out infinite",
        "copper-glow": "copper-glow 2s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.5s ease-out",
        "scale-in": "scale-in 0.3s ease-out",
      },
      fontFamily: {
        'geological': ['Inter', 'system-ui', 'sans-serif'],
        'mineral': ['Geist', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'crystal-gradient': 'var(--crystal-gradient)',
        'mineral-gradient': 'var(--mineral-gradient)',
        'stone-texture': 'var(--stone-texture)',
      },
      boxShadow: {
        'mineral': 'var(--shadow-mineral)',
        'crystal': 'var(--shadow-crystal)',
        'depth': 'var(--shadow-depth)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config