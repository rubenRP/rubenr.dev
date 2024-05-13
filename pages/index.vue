<template>
  <HeroTyped
    :title="hero.title"
    :subtitle="hero.subtitle"
    :text="hero.text"
    social
    :small-headings="false"
  />
  <div id="start" />
  <Recent />
  <Popular />
  <Bio />
</template>

<script setup lang="ts">
const bodyClasses =
  "header-dark header-transparent header-fixed header-animated";

useHead({
  title: "Home",
  meta: [
    {
      name: "keywords",
      content: useAppConfig().siteConfig.seoKeywords,
    },
  ],
  bodyAttrs: {
    class: bodyClasses,
  },
});
const hero = useAppConfig().home.hero;
</script>
