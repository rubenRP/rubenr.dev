<template>
  <NuxtLayout>
    <ClientOnly>
      <Ackee />
    </ClientOnly>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: "en",
    "data-theme": "light",
  },
  titleTemplate: "%s | " + useAppConfig().siteConfig.siteTitle,

  meta: [
    {
      name: "description",
      content: useAppConfig().siteConfig.siteDescription,
    },
    {
      property: "og:title",
      content: useAppConfig().siteConfig.siteTitle,
    },
    {
      property: "og:description",
      content: useAppConfig().siteConfig.siteDescription,
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:image",
      content: useAppConfig().siteConfig.siteLogo,
    },
    {
      property: "og:site_name",
      content: useAppConfig().siteConfig.shortSiteUrl,
    },
    {
      name: "twitter:card",
      content: "summary",
    },
    {
      name: "twitter:creator",
      content: useAppConfig().siteConfig.userTwitter,
    },
    {
      name: "twitter:title",
      content: useAppConfig().siteConfig.siteTitle,
    },
    {
      name: "twitter:description",
      content: useAppConfig().siteConfig.siteDescription,
    },
    {
      name: "twitter:image",
      content: useAppConfig().siteConfig.siteLogo,
    },
  ],
});
</script>
