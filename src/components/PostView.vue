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
                <span class="blog-date-primary">
                  <Icon icon="fa6-solid:calendar-days" />
                  {{ formatDate(post.data.date) }}
                </span>
                <div
                  v-if="languagePills"
                  class="blog-lang-pills"
                  role="group"
                  aria-label="Article available languages"
                >
                  <a
                    v-if="languagePills.enHref"
                    :href="languagePills.enHref"
                    class="label label-rounded blog-lang-pills__link"
                    aria-label="Read this article in English"
                  >
                    EN
                  </a>
                  <span
                    v-else
                    class="label label-rounded blog-lang-pills__current"
                    aria-current="true"
                  >
                    EN
                  </span>
                  <a
                    v-if="languagePills.esHref"
                    :href="languagePills.esHref"
                    class="label label-rounded blog-lang-pills__link"
                    aria-label="Leer este artículo en español"
                  >
                    ES
                  </a>
                  <span
                    v-else
                    class="label label-rounded blog-lang-pills__current"
                    aria-current="true"
                  >
                    ES
                  </span>
                </div>

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
              <div class="mb-2" v-if="post.data.image">
                <img
                  :src="post.data.image"
                  :alt="post.data.title"
                  loading="lazy"
                  decoding="async"
                  class="mb-2"
                />
              </div>
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
import { computed } from "vue";
import { formatDate } from "../composables/date.ts";
import type { Post } from "../types/post.ts";
import Tags from "./Tags.vue";

// Adjust the Post type to include the correct structure for taxonomy
type Taxonomy = {
  category: string;
  tags: string[];
};

declare module "../types/post.ts" {
  interface PostData {
    taxonomy?: Taxonomy;
  }
}

const props = defineProps<{
  post: Post;
  alternateTranslation?: { lang: string; url: string };
}>();

/** EN/ES pill switcher; only when frontmatter defines an alternate via hreflang. */
const languagePills = computed(() => {
  const alt = props.alternateTranslation;
  const lang = props.post.lang;
  if (!alt || (lang !== "en" && lang !== "es")) return null;
  return {
    enHref: alt.lang === "en" ? alt.url : null,
    esHref: alt.lang === "es" ? alt.url : null,
  };
});
</script>
