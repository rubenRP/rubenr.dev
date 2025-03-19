// @ts-check
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vue from "@astrojs/vue";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: 'https://rubenr.dev',
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
});
