import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";
import { definePWA } from "./src/pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(definePWA)],
});
