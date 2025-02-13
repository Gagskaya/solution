import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
  server: {
    port: 5173,
    host: "192.168.0.215",
    hmr: {
      host: "192.168.0.215",
    },
  },
});
