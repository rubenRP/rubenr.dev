<template>
  <ul class="social-links d-inline-flex list-unstyled">
    <li v-for="item in socialLinks" :key="item.url">
      <a
        :href="item.url"
        class="external"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="{link.label}"
      >
        <font-awesome-icon :icon="item.iconClass" />
      </a>
    </li>
    <li>
      <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
    </li>
  </ul>
</template>

<script setup lang="ts">
const socialLinks = useAppConfig().socialLinks;
</script>
