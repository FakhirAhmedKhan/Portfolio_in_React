/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  // Safelisting dynamic or runtime classes
  safelist: [
    "backdrop-blur",
    "bg-gradient-to-b",
    "from-slate-900/90",
    "to-slate-900/60",
    "from-slate-800",
    "to-slate-900",
    "bg-black/70",
  ],

  darkMode: "class", // Optional: supports dark mode with class

  theme: {
    extend: {
      // Custom screen sizes (breakpoints)
      screens: {
        xxs: "360px",
        xs: "480px",
        sm: "600px",
        md: "768px",
        lg: "900px",
        xl: "1200px",
      },

      // Container padding
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "3rem",
          xl: "4rem",
        },
      },

      // Border radius scale
      borderRadius: {
        DEFAULT: "var(--radius)",
        md: "12px",
        lg: "16px",
      },

      // CSS variable-based colors
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        highlight: "var(--highlight-color)",
        card: "var(--card-bg)",
        cardhover: "var(--card-hover-bg)",
        text: "var(--text-color)",
      },

      // Custom fonts
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },

      // Custom animations
      animation: {
        "slide-down": "slideDown 0.3s ease-out",
      },

      // Keyframes for animations
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },

  plugins: [],
};
