<template>
  <HeroTyped
    :title="hero.title"
    :subtitle="hero.subtitle"
    :text="hero.text"
    social
  />
  <div id="start" />
  <Recent />
  <Popular />
  <Bio />
</template>

<script setup lang="ts">
useHead({
  title: "Home",
  meta: [
    {
      name: "keywords",
      content: useAppConfig().siteConfig.seoKeywords,
    },
  ],
});
const hero = useAppConfig().home.hero;
</script>
