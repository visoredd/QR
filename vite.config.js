import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { esbuildCommonjs } from "@originjs/vite-plugin-commonjs";
import commonjs from "vite-plugin-commonjs";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/QR/",
  plugins: [
    react(),
    commonjs({
      filter(id) {
        if (id.includes("node_modules/qrcode-with-logos")) {
          return true;
        }
      },
    }),
  ],
  optimizeDeps: {
    esbuildOptions: {
      plugins: [esbuildCommonjs(["qrcode-with-logos", "qrcode"])],
    },
  },
});
