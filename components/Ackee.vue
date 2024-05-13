<template></template>
<script setup lang="ts">
import * as ackeeTracker from "ackee-tracker";

const rConfig: any = useRuntimeConfig();

if (!rConfig.public.ackee.domain || !rConfig.public.ackee.id) {
  console.error("Ackee configuration not found");
} else {
  ackeeTracker
    .create(rConfig.public.ackee.domain, rConfig.public.ackee.options)
    .record(rConfig.public.ackee.id);
}
</script>
