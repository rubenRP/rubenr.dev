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
        <Icon :icon="item.iconClass" />
      </a>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { SOCIAL_LINKS } from "../const/site";

const socialLinks = SOCIAL_LINKS;
</script>
