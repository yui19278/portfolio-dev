import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import icon from "astro-icon";
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
      plugins: [
          tailwindcss(),
      ],
  },
  site: "https://yui19278.github.io/",
  base: "/",
  integrations: [
      react(),
      tailwindcss({
        config: { path: './tailwind.config.js' },
      }),
      mdx(),
      sitemap(),
      icon()],

  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:9000',
        changeOrigin: true,
      }
    }
  }
});
