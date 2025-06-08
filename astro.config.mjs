import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

export default defineConfig({
  site: "https://yui19278.github.io/",
  base: "/",
  integrations: [react(), mdx(), sitemap()],
});
