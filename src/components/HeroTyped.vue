<template>
  <section
    class="section modular-hero hero hero-typed"
    :class="
      heroClasses +
      (subtitle ? ' title-h1h2' : '') +
      (smallHeadings ? ' small-headings' : '') +
      (isParallax ? ' parallax' : '')
    "
  >
    <div class="image-overlay" />
    <div class="container grid-sm" :class="textAlign">
      <h1><span id="typed"></span></h1>
      <h2 v-if="props.subtitle">{{ props.subtitle }}</h2>
      <p v-if="props.text">
        <span v-html="props.text" />
      </p>
    </div>
    <!-- <SocialLinks v-if="social" /> -->
    <i
      v-if="arrow"
      id="to-start"
      class="pulse fa fa-angle-down"
      @click="toStart"
      @keydown.enter.prevent="toStart"
      @keydown.space.prevent="toStart"
      role="button"
      tabindex="0"
      aria-label="Go to content"
    >
      <span class="d-none">Go to content</span>
    </i>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

const props = defineProps<{
  typedTitle?: string[];
  subtitle?: string;
  image?: string;
  text?: string;
  social?: boolean;
  isParallax?: boolean;
  arrow?: boolean;
  heroClasses?: string;
  textAlign?: string;
  smallHeadings?: boolean;
}>();

// Default props
const image = ref(props.image || "");
const social = ref(props.social || false);
const isParallax = ref(props.isParallax || true);
const arrow = ref(props.arrow || true);
const heroClasses = ref(
  props.heroClasses || "text-light hero-tiny overlay-dark-gradient",
);
const textAlign = ref(props.textAlign || "text-center");
const smallHeadings = ref(props.smallHeadings || false);
let typedInstance: { start: () => void; destroy: () => void } | null = null;

const toStart = () => {
  const start = document.getElementById("start")!.offsetTop;
  const offset = 45;
  window.scroll({ top: start - offset, left: 0, behavior: "smooth" });
};

onMounted(async () => {
  if (!props.typedTitle?.length) {
    return;
  }

  const { default: Typed } = await import("typed.js");
  typedInstance = new Typed("#typed", {
    strings: props.typedTitle,
    typeSpeed: 50,
    backSpeed: 10,
    backDelay: 7000,
    cursorChar: "_",
    loop: true,
  });
  typedInstance.start();
});

onUnmounted(() => {
  typedInstance?.destroy();
});
</script>
