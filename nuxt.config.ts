// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxtjs/i18n"],
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
  },
  css: [
    "~/assets/styles/theme.scss",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  content: {
    documentDriven: true,
    markdown: {
      anchorLinks: false,
    },
    locales: ["en", "es"],
    defaultLocale: "en",
  },
});
