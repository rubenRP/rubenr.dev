<template>
  <HeroTyped
    :title="hero.title"
    :subtitle="hero.subtitle"
    :text="hero.text"
    :social="false"
    :small-headings="true"
    :text-align="textAlign"
  />
  <div id="start" />
  <Recent />
  <Popular />
</template>

<script setup lang="ts">
const bodyClasses =
  "header-dark header-transparent header-fixed header-animated";

const textAlign = "text-left";

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
