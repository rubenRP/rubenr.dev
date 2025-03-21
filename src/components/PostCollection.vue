<template>
  <div id="recent" />
  <section class="section modular-recent">
    <div class="container grid-sm">
      <div class="columns">
        <div class="column col-3 col-md-12 header-col">
          <h4>
            <span>{{ title }}</span>
          </h4>
        </div>
        <div class="column col-9 col-md-12 main-col">
          <div class="columns item" v-for="post in posts">
            <div class="column col-12">
              <a
                v-if="post.data.subtitle"
                :href="post.slug"
                class="u-url text-dark"
              >
                <h4 class="p-name mb-1">
                  {{ post.data.title }}
                </h4>
                <div class="text-grey">
                  <h5 class="p-name mt-1 light">
                    {{ post.data.subtitle }}
                  </h5>
                </div>
              </a>
              <h4 v-else class="p-name mt-1">
                <a :href="post.slug" class="u-url text-dark">
                  {{ post.data.title }}
                </a>
              </h4>
              <div class="text-gray">
                <small class="blog-date">
                  <Icon icon="fa6-solid:calendar-days" />
                  {{ " " }}
                  {{ formatDate(post.data.date) }}
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import type { PropType } from "vue";
import { formatDate } from "../composables/date";
import type { Post } from "../types/post.ts";

defineProps({
  title: {
    type: String,
    default: "Latest posts",
    required: false,
  },
  posts: {
    type: Array as PropType<Post[]>,
    required: true,
  },
});
</script>
