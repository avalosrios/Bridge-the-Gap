import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  // https://medium.com/@amolakapadi/connecting-react-vite-frontend-to-express-backend-using-proxy-step-by-step-guide-7eea23608727
  server: {
    proxy: {
      "/api": "http://localhost:3000", // proxy /api calls to backend
    },
  },
  plugins: [react()],
});
