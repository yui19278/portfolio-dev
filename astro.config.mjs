import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import icon from "astro-icon";
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    server: {
      host: '0.0.0.0',
      port: 4321,
      strictPort: true,
      allowedHosts: [
        'yui19278.com',
        'localhost',
        '127.0.0.1',
      ],
      // ? ??? proxy ???
      proxy: {
        '/api': {
          target: 'http://localhost:9000',
          changeOrigin: true,
        },
      },
    },
    plugins: [
      tailwindcss(),
    ],
  },
  site: "https://yui19278.github.io/",
  base: "/",
  integrations: [
    react(),
    tailwindcss({ config: { path: './tailwind.config.js' } }),
    mdx(),
    sitemap(),
    icon(),
  ],
});
