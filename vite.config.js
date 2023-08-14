// DO NOT EDIT

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
 // vite.config.js
  build: {
    outDir: 'public'
  },
  plugins: [react()],
});
