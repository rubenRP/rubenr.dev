<template>
  <PostView v-if="post" :post="post" :prev="prev" :next="next" />
  <PageView v-else-if="page" :page="page" />
</template>

<script setup lang="ts">
const route = useRoute();
let post: any = null;
let page: any = null;
let [prev, next]: any = [];
let res;

// Spanish Post
if (route.params.slug.length > 1) {
  res = await useAsyncData(() =>
    queryContent()
      .where({
        _locale: route.params.slug[0],
        _source: "blog",
        _dir: { $contains: [route.params.slug[1]] },
      })
      .findOne()
  );
  if (!res.data.value) {
    res = await useAsyncData(() =>
      queryContent()
        .where({
          slug: route.params.slug[2],
          _locale: route.params.slug[0],
          _source: "blog",
        })
        .findOne()
    );
  }
  post = res.data;
}
// English post or page
else {
  res = await useAsyncData(() =>
    queryContent()
      .where({
        _locale: "en",
        _dir: {
          $contains: [route.params.slug[0]],
        },
        _source: { $in: ["blog", "pages"] },
      })
      .findOne()
  );
  if (!res.data.value) {
    res = await useAsyncData(() =>
      queryContent()
        .where({
          slug: route.params.slug[0],
          _locale: "en",
          _source: { $in: ["blog", "pages"] },
        })
        .findOne()
    );
  }
  if (res.data.value && res.data.value?._source === "blog") {
    post = res.data;
  } else {
    page = res.data;
  }
}

if (post) {
  [prev, next] = await queryContent()
    .only(["_path", "_dir", "_locale", "title", "hero_title", "slug"])
    .sort({ date: 1 })
    .where({ _locale: post.value._locale, _source: "blog" })
    .findSurround(post.value._path);
}

// Redirect to 404 if no post or page found
if (!post && !page) {
  navigateTo("/404");
}

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
