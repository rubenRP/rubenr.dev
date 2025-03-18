// @ts-check
import { defineConfig } from "astro/config";

import vue from "@astrojs/vue";

import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), mdx(), sitemap()],

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