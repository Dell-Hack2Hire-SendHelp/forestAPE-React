import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "ForestAPE",
        short_name: "ForestAPE",
        description: "ForestAPE - APE forestration project",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/images/APELogo.png",
            sizes: "192x192",
            type: "image/png",
          },
        ]
      }
    }),
  ],
});
