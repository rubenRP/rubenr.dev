<template>
  <span class="tags">
    <NuxtLink
      v-for="tag in items"
      :key="tag"
      :to="`/blog/tag/${tag.replace(/\s/g, '-').toLowerCase()}`"
      class="label label-rounded"
    >
      {{ tag }}
    </NuxtLink>
  </span>
</template>

<script setup lang="ts">
defineProps<{
  items: string[];
}>();
</script>
