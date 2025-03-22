<template>
  <section class="section blog-listing modular-postlist">
    <div class="container grid-sm">
      <div class="columns">
        <div id="item" class="column col-12">
          <div class="language-filter">
            <button
              class="chip"
              :class="filteredLanguage == 'en' && 'active'"
              @click="setFilteredLanguage('en')"
            >
              <figure class="avatar avatar-sm" data-initial="EN"></figure>
              English
            </button>
            <button
              class="chip"
              :class="filteredLanguage == 'es' && 'active'"
              @click="setFilteredLanguage('es')"
            >
              <figure class="avatar avatar-sm" data-initial="ES"></figure>
              Spanish
            </button>
          </div>
          <div class="columns" v-for="post in filteredPosts">
            <div class="column col-3 col-md-12 header-col">
              <h4
                v-if="
                  date != new Date(post.data.date).getFullYear()
                    ? (date = new Date(post.data.date).getFullYear())
                    : null
                "
              >
                <span>{{ date }}</span>
              </h4>
            </div>
            <div class="column col-9 col-md-12 main-col">
              <div class="columns item">
                <div class="column col-12">
                  <a
                    :href="post.slug"
                    v-if="post.data.subtitle"
                    class="u-url text-dark"
                  >
                    <h4 class="p-name mb-1">
                      {{ post.data.title }}
                    </h4>
                    <div class="text-grey">
                      <h5 class="p-name mt-1 light text-justify">
                        {{ post.data.subtitle }}
                      </h5>
                    </div>
                  </a>
                  <h4 v-else class="p-name mb-1">
                    <a :href="post.slug" class="u-url text-dark">
                      {{ post.data.title }}
                    </a>
                  </h4>
                  <div class="body">
                    <p
                      class="text-small text-justify"
                      v-html="post.data.description"
                    />
                  </div>
                  <div class="footer">
                    <div class="text-grey mb-2">
                      <small class="blog-date">
                        <Icon icon="fa6-solid:calendar-days" />{{ " " }}
                        {{ formatDate(post.data.date) }}
                      </small>
                    </div>

                    <Tags
                      v-if="post.data.taxonomy?.tag"
                      :items="post.data.taxonomy?.tag"
                    />
                  </div>
                </div>
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
import { type PropType, ref } from "vue";
import { formatDate } from "../composables/date";
import type { Post } from "../types/post.ts";
import Tags from "./Tags.vue";

const props = defineProps({
  enPosts: {
    type: Array as PropType<Post[]>,
    required: true,
  },
  esPosts: {
    type: Array as PropType<Post[]>,
    required: true,
  },
});

let filteredPosts = props.enPosts || [];

const filteredLanguage = ref("en");
let date = 2000;

const setFilteredLanguage = (language: string) => {
  filteredLanguage.value = language;
  filteredPosts = language == "en" ? props.enPosts : props.esPosts;
};
</script>
