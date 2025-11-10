import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/watermelonfrogy.github.io/", // Must match your repo name
});
