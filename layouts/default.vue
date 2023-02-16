<template>
  <div id="page-wrapper">
    <Header />
    <main><slot /></main>
  </div>
  <Footer />
</template>

<script setup lang="ts">
const bodyClasses = ref(
  "header-dark header-transparent header-fixed header-animated"
);
useHead({
  bodyAttrs: {
    class: bodyClasses,
  },
});
</script>
