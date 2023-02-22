<template>
  <Hero :title="heroTitle" :text="heroText" />
  <div id="start" />
  <About />
  <Resume />
</template>

<script setup>
const heroTitle = "About";
const heroText = "Who I am? What I did? What I know?";
</script>
