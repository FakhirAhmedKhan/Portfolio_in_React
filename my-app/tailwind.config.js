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
        xl: "1200px",
        lg: "900px",
        md: "768px",
        sm: "600px",
        xs: "480px",
        xxs: "360px",
      },
    },
  },
  plugins: [],
};
