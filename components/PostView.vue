<template>
  <section id="start" />
  <section id="body-wrapper" class="section blog-listing">
    <div class="container grid-md">
      <div class="columns">
        <div id="item" class="column col-12" v-if="post">
          <div class="content-item h-entry">
            <div class="content-title">
              <div v-if="post.hero_subtitle">
                <h1 class="p-name h2 mt-1">
                  {{ post.hero_title }}
                </h1>
                <div class="text-grey">
                  <h2 class="p-name h3 mt-1 light">
                    {{ post.hero_subtitle }}
                  </h2>
                </div>
              </div>
              <h2 v-else class="p-name mt-1">{{ post.title }}</h2>
            </div>

            <div class="content-tags">
              <span class="blog-date">
                <i class="fa fa-calendar" />
                {{ formatDate(post.date) }}
                <ReadingTime
                  v-if="post.readingTime"
                  :readingTime="post.readingTime"
                />
              </span>

              <span class="blog-tags">
                <Tags v-if="post.taxonomy?.tag" :items="post.taxonomy?.tag" />
              </span>
            </div>

            <div class="e-content">
              <div class="mb-2" v-if="post?.hero_image">
                <nuxt-img
                  v-if="post.hero_image"
                  :src="post.hero_image"
                  :alt="post.hero_title"
                  class="mb-2"
                />
              </div>
              <ContentRenderer v-if="post" :value="post" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="container grid-md">
    <div class="prev-next text-center">
      <div class="btn-group">
        <NuxtLink
          v-if="prev"
          :to="formatUrl(prev._locale, prev._dir, prev.slug)"
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
          :to="formatUrl(next._locale, next._dir, next.slug)"
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
import { Post } from "~~/types/post";
const siteConfig = useAppConfig().siteConfig;

const props = defineProps<{
  post: any;
  prev?: Post;
  next?: Post;
}>();

useHead({
  htmlAttrs: {
    lang: props.post._locale,
  },

  title: props.post.title,
  link: [
    {
      rel: "alternate",
      hreflang: "en",
      href:
        siteConfig.siteUrl + formatUrl("en", props.post._dir, props.post.slug),
    },
    {
      rel: "alternate",
      hreflang: "es",
      href:
        siteConfig.siteUrl + formatUrl("es", props.post._dir, props.post.slug),
    },
  ],
  meta: [
    {
      name: "description",
      content: props.post.description,
    },
    {
      property: "og:title",
      content: props.post.title,
    },
    {
      property: "og:description",
      content: props.post.description,
    },
    {
      property: "og:image",
      content: siteConfig.siteUrl + props.post.thumbnail,
    },
    {
      property: "og:url",
      content: siteConfig.siteUrl + useRoute().fullPath,
    },
    {
      name: "twitter:title",
      content: props.post.title,
    },
    {
      name: "twitter:description",
      content: props.post.description,
    },
    {
      name: "twitter:image",
      content: siteConfig.siteUrl + props.post.thumbnail,
    },
  ],
});
</script>
