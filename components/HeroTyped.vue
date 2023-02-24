<template>
  <section
    class="section modular-hero hero"
    :class="
      heroClasses +
      (subtitle ? ' title-h1h2' : '') +
      (smallHeadings ? ' small-headings' : '') +
      (isParallax ? ' parallax' : '')
    "
    :style="{
      backgroundImage: bagroundImageUrl,
      backgroundPositionY: position + 'px',
    }"
  >
    <div class="image-overlay" />
    <div class="container grid-md" :class="textAlign">
      <h1><span id="typed"></span></h1>
      <h2 v-if="props.subtitle">{{ props.subtitle }}</h2>
      <p v-if="props.text">
        <span v-html="props.text" />
      </p>
    </div>
    <SocialLinks v-if="social" />
    <i
      v-if="arrow"
      id="to-start"
      class="pulse fa fa-angle-down"
      :on-click="toStart"
      :on-keydown="handleKeyDown"
      role="button"
      tabIndex="{0}"
      aria-label="Go to content"
    >
      <span class="d-none">Go to content</span>
    </i>
  </section>
</template>

<script setup lang="ts">
import Typed from "typed.js";
const position = ref(0);

const props = defineProps<{
  title?: string[];
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
const title = ref(props.title || [""]);
const image = ref(props.image || "/img/hero-default.jpg");
const social = ref(props.social || false);
const isParallax = ref(props.isParallax || true);
const arrow = ref(props.arrow || true);
const heroClasses = ref(
  props.heroClasses || "text-light hero-tiny overlay-dark-gradient"
);
const textAlign = ref(props.textAlign || "text-center");
const smallHeadings = ref(props.smallHeadings || false);
let typed: any;

const $img = useImage();
const bagroundImageUrl = computed(() => {
  const imgUrl = $img(image.value, { width: 1600 });
  return `url('${imgUrl}')`;
});

const parallax = () => {
  position.value = window.scrollY * 0.3;
};

const toStart = () => {
  const start = document.getElementById("start")!.offsetTop;
  const offset = 45;
  window.scroll({ top: start - offset, left: 0, behavior: "smooth" });
};

const handleKeyDown = (ev: any) => {
  // M key
  if (ev.keyCode === 67) {
    toStart();
  }
};

onMounted(() => {
  window.addEventListener("scroll", parallax);
  typed = new Typed("#typed", {
    strings: props.title,
    typeSpeed: 50,
    backSpeed: 10,
    backDelay: 7000,
    cursorChar: "_",
    loop: true,
  });
  typed.start();
});

onUnmounted(() => {
  window.removeEventListener("scroll", parallax);
  typed.destroy();
});
</script>
