<template>
  <Hero :title="heroTitle" :text="heroText" :image="heroImage" />
  <div id="start" />
  <About />
  <Resume />
</template>

<script setup lang="ts">
const heroTitle = "About";
const heroText = "Who I am? What I did? What I know?";
const heroImage = "/img/hero-category.jpg";
useHead({
  title: "About",
  meta: [
    {
      name: "description",
      content: heroText,
    },
    {
      property: "og:title",
      content: "About",
    },
    {
      property: "og:description",
      content: heroText,
    },
    {
      name: "twitter:title",
      content: "About",
    },
    {
      name: "twitter:description",
      content: heroText,
    },
  ],
});
</script>
