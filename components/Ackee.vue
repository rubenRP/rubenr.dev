<template></template>
<script setup lang="ts">
import * as ackeeTracker from "ackee-tracker";

const rConfig = useRuntimeConfig();

ackeeTracker
  .create(rConfig.ackee.domain, rConfig.ackee.options)
  .record(rConfig.ackee.id);
</script>
