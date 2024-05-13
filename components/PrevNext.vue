<template>
  <section class="container grid-md">
    <div class="prev-next text-center">
      <div class="btn-group">
        <NuxtLink
          v-if="prev"
          @click="goTo(formatUrl(prev!._locale, prev!._dir, prev!.slug))"
          rel="prev"
          class="btn btn-lg btn-detailed btn-detailed--left text-dark"
        >
          <div class="text-grey light">Previous</div>
          {{
            prev.hero_title ? prev.hero_title : `${prev.title.slice(0, 30)}...`
          }}
        </NuxtLink>

        <NuxtLink
          v-if="next"
          @click="goTo(formatUrl(next!._locale, next!._dir, next!.slug))"
          rel="next"
          class="btn btn-lg btn-detailed btn-detailed--right text-dark"
        >
          <div class="text-grey light">Next</div>
          {{
            next.hero_title ? next.hero_title : `${next.title.slice(0, 30)}...`
          }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Post } from "~/types/post";

defineProps<{
  post: any;
  prev?: Post;
  next?: Post;
}>();

const goTo = (url: string) => {
  navigateTo(url);
};
</script>
