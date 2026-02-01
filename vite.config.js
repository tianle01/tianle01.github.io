import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/",            // user site
  plugins: [tailwindcss()],
  build: {
    outDir: "docs",
  },
});
