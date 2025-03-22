<template>
  <section id="start" />
  <section id="body-wrapper" class="section blog-listing">
    <div class="container grid-sm">
      <div class="columns">
        <div id="item" class="column col-12" v-if="post">
          <div class="content-item h-entry">
            <div class="content-title">
              <div>
                <h1 class="p-name h3 mt-1 mb-1">
                  {{ post.data.title }}
                </h1>
                <div v-if="post.data.subtitle" class="text-grey">
                  <h2 class="p-name h5 mt-1 light">
                    {{ post.data.subtitle }}
                  </h2>
                </div>
              </div>
            </div>

            <div class="content-tags">
              <span class="blog-date">
                <Icon icon="fa6-solid:calendar-days" />
                {{ formatDate(post.data.date) }}

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
              <!--<div class="mb-2" v-if="post.data.image">
                <img
                  :src="post.data.image"
                  :alt="post.data.title"
                  class="mb-2"
                />
              </div>-->
              <div v-html="post.rendered.html" />
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
import { formatDate } from "../composables/date.ts";
import type { Post } from "../types/post.ts";
import Tags from "./Tags.vue";

defineProps<{
  post: Post;
}>();
</script>
