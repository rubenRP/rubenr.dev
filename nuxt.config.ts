// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxt/image-edge"],
  css: [
    "~/assets/scss/theme.scss",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  content: {
    documentDriven: true,
    markdown: {
      anchorLinks: false,
    },
    locales: ["en", "es"],
    defaultLocale: "en",
    highlight: {
      theme: {
        default: "dark-plus",
      },
      preload: [
        "json",
        "js",
        "ts",
        "jsx",
        "html",
        "css",
        "vue",
        "shell",
        "markdown",
        "yaml",
        "bash",
      ],
    },
  },
});
