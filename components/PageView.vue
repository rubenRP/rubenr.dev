<template>
  <section id="start" />
  <section id="body-wrapper" class="section blog-listing">
    <div class="container grid-sm">
      <div class="columns">
        <div id="item" class="column col-12">
          <div class="content-item h-entry">
            <div v-if="!page.hero_image" class="content-title">
              <div v-if="page.hero_text">
                <h1 class="p-name h2 mt-1">
                  {{ page.hero_title }}
                </h1>
                <div class="text-grey">
                  <h2 class="p-name h3 mt-1 light">
                    {{ page.hero_text }}
                  </h2>
                </div>
              </div>

              <h2 v-else class="p-name mt-1">{{ page.title }}</h2>
            </div>

            <div class="e-content">
              <ContentRenderer v-if="page" :value="page" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const siteConfig = useAppConfig().siteConfig;
const props = defineProps<{
  page: any;
}>();

useHead({
  htmlAttrs: {
    lang: props.page._locale,
  },

  title: props.page.title,
  meta: [
    {
      name: "description",
      content: props.page.description,
    },
    {
      property: "og:title",
      content: props.page.title,
    },
    {
      property: "og:description",
      content: props.page.hero_text,
    },
    {
      property: "og:url",
      content: siteConfig.siteUrl + useRoute().fullPath,
    },
    {
      name: "twitter:title",
      content: props.page.title,
    },
    {
      name: "twitter:description",
      content: props.page.hero_text,
    },
  ],
});
</script>
