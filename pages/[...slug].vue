<template>
  <section id="start" />
  <section id="body-wrapper" class="section blog-listing">
    <div class="container grid-md">
      <div class="columns">
        <div id="item" class="column col-12" v-if="post">
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
                <nuxt-img
                  v-if="post?.hero_image"
                  :src="post?.hero_image"
                  :alt="post?.hero_title"
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
const route = useRoute();
let post: any = null;
let [prev, next]: any = [];

// TODO - this is a mess, clean it up
if (route.params.slug.length > 1) {
  // Spanish post
  const { data } = await useAsyncData("post", () =>
    queryContent("/blog/" + route.params.slug[1] + "/" + route.params.slug[0])
      .where({ _locale: route.params.slug[0] })
      .findOne()
  );
  post = data;
  if (!data.value) {
    const { data } = await useAsyncData("post", () =>
      queryContent("blog")
        .where({ slug: route.params.slug[2], _locale: route.params.slug[0] })
        .findOne()
    );
    post = data;
  }
  [prev, next] = await queryContent("blog")
    .only(["_path", "_dir", "_locale", "title", "hero_title", "slug"])
    .sort({ date: 1 })
    .where({ _locale: post.value._locale })
    .findSurround(post.value._path);
} else {
  // English post
  const { data } = await useAsyncData("post", () =>
    queryContent("/blog/" + route.params.slug[0] + "/en").findOne()
  );
  post = data;
  if (!data.value) {
    const { data } = await useAsyncData("post", () =>
      queryContent("blog")
        .where({ slug: route.params.slug[0], _locale: "en" })
        .findOne()
    );
    post = data;
  }
  [prev, next] = await queryContent("blog")
    .only(["_path", "_dir", "_locale", "title", "hero_title", "slug"])
    .sort({ date: 1 })
    .where({ _locale: post.value._locale })
    .findSurround(post.value._path);
}

const bodyClasses = "header-fixed header-animated";

// Clear body classes first
useHead({
  bodyAttrs: {
    class: "",
  },
});

useHead({
  htmlAttrs: {
    lang: post.value?._locale,
  },
  bodyAttrs: {
    class: bodyClasses,
  },
  title: post.value?.title,
  link: [
    {
      rel: "alternate",
      hreflang: "en",
      href: formatUrl("en", post.value?._dir, post.value?.slug),
    },
    {
      rel: "alternate",
      hreflang: "es",
      href: formatUrl("es", post.value?._dir, post.value?.slug),
    },
  ],
  meta: [
    {
      name: "description",
      content: post.value?.description,
    },
    {
      property: "og:title",
      content: post.value?.title,
    },
    {
      property: "og:description",
      content: post.value?.description,
    },
    {
      property: "og:image",
      content: post.value?.thumbnail,
    },
    {
      property: "og:url",
      content: route.fullPath,
    },
    {
      name: "twitter:title",
      content: post.value?.title,
    },
    {
      name: "twitter:description",
      content: post.value?.description,
    },
    {
      name: "twitter:image",
      content: post.value?.thumbnail,
    },
  ],
});
</script>
