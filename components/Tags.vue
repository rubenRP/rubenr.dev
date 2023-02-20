<template>
  <span class="tags">
    <NuxtLink
      v-for="tag in items"
      to="`/blog/tag:${tag.toLowerCase()}`"
      :key="tag"
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
