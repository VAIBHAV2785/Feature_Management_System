import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),

    VitePWA({
      registerType: "autoUpdate",

      includeAssets: [
        "favicon.ico",
        "apple-touch-icon.png",
        "favicon.svg",
      ],

      manifest: {
        name: "Feature Management System",
        short_name: "Feature Management",
        description:
          "Application Feature Management and Release Control System",

        theme_color: "#2563eb",
        background_color: "#ffffff",

        display: "standalone",

        start_url: "/",
        scope: "/",

        orientation: "any",

        icons: [
          {
            src: "/icons/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icons/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/icons/maskable-icon-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },

      workbox: {
        globPatterns: [
          "**/*.{js,css,html,ico,png,svg,json,woff,woff2}",
        ],
      },

      devOptions: {
        enabled: true,
      },
    }),
  ],
});