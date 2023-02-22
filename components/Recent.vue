<template>
  <div id="recent" />
  <section class="section modular-recent">
    <div class="container grid-md">
      <div class="columns">
        <div class="column col-3 col-md-12 header-col">
          <h4>
            <span>Latest posts</span>
          </h4>
        </div>
        <div class="column col-9 col-md-12 main-col">
          <div class="columns item" v-for="post in data">
            <div class="column col-12">
              <NuxtLink
                v-if="post.hero_subtitle"
                :to="formatUrl(post._locale, post._dir, post.slug)"
                class="u-url text-dark"
              >
                <h4 class="p-name mb-1">
                  {{ post.hero_title }}
                </h4>
                <div class="text-grey">
                  <h5 class="p-name mt-1 light">
                    {{ post.hero_subtitle }}
                  </h5>
                </div>
              </NuxtLink>
              <h4 v-else class="p-name mt-1">
                <NuxtLink
                  :to="formatUrl(post._locale, post._dir, post.slug)"
                  class="u-url text-dark"
                >
                  {{ post.title }}
                </NuxtLink>
              </h4>
              <div class="text-gray">
                <small class="blog-date">
                  <ClientOnly>
                    <font-awesome-icon
                      :icon="['fas', 'calendar-days']" /></ClientOnly
                  >{{ " " }}
                  {{ formatDate(post.date) }}
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
const { data } = await useAsyncData("popular", () =>
  queryContent("blog")
    .where({ _locale: "en" })
    .sort({ date: -1 })
    .limit(4)
    .find()
);
</script>
