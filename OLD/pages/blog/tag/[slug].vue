<template>
  <Hero :title="heroTitle" :hero-classes="heroClasses" />
  <section id="start" />
  <section id="body-wrapper" class="section blog-listing modular-postlist">
    <div class="container grid-md">
      <div class="columns">
        <div id="item" class="column col-12">
          <div class="language-filter">
            <a
              class="chip"
              :class="filteredLanguage == 'en' && 'active'"
              @click="setFilteredLanguage('en')"
            >
              <figure class="avatar avatar-sm" data-initial="EN"/>
              English
            </a>
            <a
              class="chip"
              :class="filteredLanguage == 'es' && 'active'"
              @click="setFilteredLanguage('es')"
            >
              <figure class="avatar avatar-sm" data-initial="ES"/>
              Spanish
            </a>
          </div>
          <div v-for="post in filteredPosts" class="columns">
            <div class="column col-3 col-md-12 header-col">
              <h4
                v-if="
                  date != new Date(post.date).getFullYear()
                    ? (date = new Date(post.date).getFullYear())
                    : null
                "
              >
                <span>{{ date }}</span>
              </h4>
            </div>
            <div class="column col-9 col-md-12 main-col">
              <div class="columns item">
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
                  <h4 v-else class="p-name mb-1">
                    <NuxtLink
                      :to="formatUrl(post._locale, post._dir, post.slug)"
                      class="u-url text-dark"
                    >
                      {{ post.title }}
                    </NuxtLink>
                  </h4>
                  <div class="body">
                    <p class="text-small" v-html="post.description" />
                  </div>
                  <div class="footer">
                    <div class="text-gray mb-2">
                      <small class="blog-date">
                        <ClientOnly>
                          <font-awesome-icon
                            :icon="['fas', 'calendar-days']" /></ClientOnly
                        >{{ " " }}
                        {{ formatDate(post.date) }}
                      </small>
                    </div>

                    <Tags
                      v-if="post.taxonomy?.tag"
                      :items="post.taxonomy?.tag"
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
const route = useRoute();
let tag = route.params.slug;
tag = tag.toString().replace(/-/g, " ");
const heroTitle = "Tag: " + tag;
const bodyClasses =
  "header-dark header-transparent header-fixed header-animated";
const heroClasses = "text-light hero-tiny gradient-animation";

useHead({
  bodyAttrs: {
    class: bodyClasses,
  },
});

const enPosts = await useAsyncData(() =>
  queryContent()
    .where({ _locale: "en", _source: "blog" })
    .sort({ date: -1 })
    .find(),
);
const esPosts = await useAsyncData(() =>
  queryContent()
    .where({ _locale: "es", _source: "blog" })
    .sort({ date: -1 })
    .find(),
);

const enPostFiltered = enPosts.data.value!.filter((post: any) => {
  return post.taxonomy?.tag
    ?.map((tag: string) => {
      return tag.toLowerCase();
    })
    .includes(tag);
});
const esPostFiltered = esPosts.data.value!.filter((post: any) => {
  return post.taxonomy?.tag
    ?.map((tag: string) => {
      return tag.toLowerCase();
    })
    .includes(tag);
});

let filteredPosts = enPostFiltered || [];
const filteredLanguage = ref("en");
const date = 2000;

const setFilteredLanguage = (language: string) => {
  filteredLanguage.value = language;
  filteredPosts = language == "en" ? enPostFiltered : esPostFiltered;
};
</script>
