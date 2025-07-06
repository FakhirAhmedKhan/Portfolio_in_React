export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "backdrop-blur",
    "bg-gradient-to-b",
    "from-slate-900/90",
    "to-slate-900/60",
    "from-slate-800",
    "to-slate-900",
    "bg-black/70",
  ],
  theme: {
    extend: {
      screens: {
        xxs: "360px",
        xs: "480px",
        sm: "600px",
        md: "768px",
        lg: "900px",
        xl: "1200px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "3rem",
          xl: "4rem",
        },
      },
      borderRadius: {
        DEFAULT: "var(--radius)",
        md: "12px",
        lg: "16px",
      },
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        highlight: "var(--highlight-color)",
        card: "var(--card-bg)",
        cardhover: "var(--card-hover-bg)",
        text: "var(--text-color)",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
