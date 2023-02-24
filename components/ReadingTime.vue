<template>
  <span class="reading-time">
    <span>{{ readingTime?.text }} </span>
  </span>
</template>

<script setup lang="ts">
defineProps<{
  readingTime: {
    text: string;
    minutes: number;
    time: number;
    words: number;
  };
}>();
</script>
