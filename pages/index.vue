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
const hero = useAppConfig().home.hero;
</script>
