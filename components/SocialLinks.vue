<template>
  <ul class="social-links d-inline-flex list-unstyled">
    <li v-for="item in socialLinks" :key="item.url">
      <a
        :href="item.url"
        class="external"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="{{link.label}}"
      >
        <ClientOnly>
          <font-awesome-icon :icon="['fab', item.iconClass]" />
        </ClientOnly>
      </a>
    </li>
  </ul>
</template>

<script setup lang="ts">
const socialLinks = useAppConfig().socialLinks;
</script>
