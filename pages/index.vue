<template>
  <Hero :title="heroTitle" :text="heroText" />
  <div id="start" />
  <Resume />
  <Bio />
</template>

<script setup lang="ts">
const heroTitle = "Home";
const heroText = "Who I am? What I did? What I know?";
</script>
