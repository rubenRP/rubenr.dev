<template>
  <section id="start" />
  <section id="body-wrapper" class="section blog-listing">
    <div class="container grid-md">
      <div class="columns">
        <div id="item" class="column col-12">
          <div class="content-item h-entry">
            <div class="content-title">
              <div v-if="post?.hero_subtitle">
                <h1 class="p-name h2 mt-1">
                  {{ post.hero_title }}
                </h1>
                <div class="text-grey">
                  <h2 class="p-name h3 mt-1 light">
                    {{ post.hero_subtitle }}
                  </h2>
                </div>
              </div>
              <h2 v-else class="p-name mt-1">{{ post?.title }}</h2>
            </div>

            <div class="content-tags">
              <span class="blog-date">
                <i class="fa fa-calendar" />
                {{ formatDate(post?.date) }}
                <!-- <ReadingTime minutes={post.timeToRead} /> -->
              </span>

              <span class="blog-tags">
                <Tags v-if="post?.taxonomy?.tag" :items="post?.taxonomy?.tag" />
              </span>
            </div>

            <div class="e-content">
              <div class="mb-2" v-if="post?.hero_image">
                <img
                  v-if="post?.hero_image"
                  :src="post?.hero_image"
                  :alt="post?.hero_title"
                  class="mb-2"
                />
              </div>
              <ContentRenderer v-if="data" :value="data" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { data } = await useAsyncData("post", () =>
  queryContent(useRoute().path).findOne()
);
const post = data || {};
const bodyClasses = "header-fixed header-animated";

// Clear body classes first
useHead({
  bodyAttrs: {
    class: "",
  },
});

useHead({
  bodyAttrs: {
    class: bodyClasses,
  },
});
</script>
