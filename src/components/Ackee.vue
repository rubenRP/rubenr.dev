<template></template>
<script setup lang="ts">
import * as ackeeTracker from "ackee-tracker";

const props = defineProps<{
  config: {
    domain: string;
    id: string;
    options: object;
  };
}>();

const { domain, id, options } = props.config;

if (!domain || !id) {
  console.error("Ackee configuration not found");
} else {
  ackeeTracker.create(domain, options).record(id);
}
</script>
