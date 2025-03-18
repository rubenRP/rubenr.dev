<template>
  <section id="start" />
  <section id="body-wrapper" class="section blog-listing">
    <div class="container grid-md">
      <div class="columns">
        <div id="item" class="column col-12" v-if="post">
          <div class="content-item h-entry">
            <div class="content-title">
              <div v-if="post.data.subtitle">
                <h1 class="p-name h2 mt-1">
                  {{ post.data.title }}
                </h1>
                <div class="text-grey">
                  <h2 class="p-name h3 mt-1 light">
                    {{ post.data.subtitle }}
                  </h2>
                </div>
              </div>
              <h2 v-else class="p-name mt-1">{{ post.data.title }}</h2>
            </div>

            <div class="content-tags">
              <span class="blog-date">
                <Icon icon="fa6-solid:calendar-days" />
                {{ " " }}
                <!--<ReadingTime
                  v-if="post.readingTime"
                  :readingTime="post.readingTime"
                />-->
              </span>

              <span class="blog-tags">
                <Tags
                  v-if="post.data.taxonomy?.tag"
                  :items="post.data.taxonomy?.tag"
                />
              </span>
            </div>

            <div class="e-content">
              <!--<div class="mb-2" v-if="post?.hero_image">
                <nuxt-img
                  v-if="post.hero_image"
                  :src="post.hero_image"
                  :alt="post.hero_title"
                  class="mb-2"
                />
              </div>-->
              <!--<ContentRenderer v-if="post" :value="post" />-->

              <slot name="content" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--<PrevNext :post="post" :prev="prev" :next="next" />-->
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import type { Post } from "../types/post.ts";
import Tags from "./Tags.vue";

//const siteConfig = useAppConfig().siteConfig;

const props = defineProps<{
  post: Post;
  prev?: Post;
  next?: Post;
  Content?: any;
}>();

console.log(props.post);
</script>
