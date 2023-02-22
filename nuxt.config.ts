// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxt/image-edge"],
  css: [
    "~/assets/scss/theme.scss",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  app: {
    head: {
      title: "Rubén Rodríguez - Front-End Developer",
      meta: [
        {
          name: "description",
          content: "Front-End developer. Javascript & Open Source enthusiast.",
        },
        {
          "http-equiv": "x-ua-compatible",
          content: "ie=edge",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, shrink-to-fit=no",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/icons/favicon-32x32.png",
        },
        {
          rel: "apple-touch-icon",
          href: "/icons/icon-48x48.png",
          sizes: "48x48",
        },
        {
          rel: "apple-touch-icon",
          href: "/icons/icon-72x72.png",
          sizes: "72x72",
        },
        {
          rel: "apple-touch-icon",
          href: "/icons/icon-96x96.png",
          sizes: "96x96",
        },
        {
          rel: "apple-touch-icon",
          href: "/icons/icon-144x144.png",
          sizes: "144x144",
        },
        {
          rel: "apple-touch-icon",
          href: "/icons/icon-192x192.png",
          sizes: "192x192",
        },
        {
          rel: "apple-touch-icon",
          href: "/icons/icon-256x256.png",
          sizes: "256x256",
        },
        {
          rel: "apple-touch-icon",
          href: "/icons/icon-384x384.png",
          sizes: "384x384",
        },
        {
          rel: "apple-touch-icon",
          href: "/icons/icon-512x512.png",
          sizes: "512x512",
        },
      ],
    },
  },
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
