import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/portfolio_in_React/",
  plugins: [react()],
  server: {
    open: true,
    port: 5173,
  },
  build: {
    outDir: "dist",
    sourcemap: true,
    chunkSizeWarningLimit: 800,
  },
  preview: {
    port: 4173,
    open: true,
  },
});
