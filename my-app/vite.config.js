// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Portfolio_in_React/", // <== VERY IMPORTANT
  plugins: [react()],
});
