<template>
  <span class="tags">
    <a
      v-for="tag in items"
      :href="`/blog/tag/${tag.replace(/\s/g, '-').toLowerCase()}`"
      :key="tag"
      class="label label-rounded"
    >
      {{ tag }}
    </a>
  </span>
</template>

<script setup lang="ts">
defineProps<{
  items: string[];
}>();
</script>
