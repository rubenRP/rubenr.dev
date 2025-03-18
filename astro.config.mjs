// @ts-check
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

import vue from "@astrojs/vue";

import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    vue(),
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: { theme: "dark-plus" },
    }),
    sitemap(),
  ],
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: false,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
