<template>
  <PostView v-if="post" :post="post" :prev="prev" :next="next" />
  <PageView v-else-if="page" :page="page" />
</template>

<script setup lang="ts">
const route: any = useRoute();
let post: any = null;
let page: any = null;
let [prev, next]: any = [];
let res: any;

// Clean up slug
const slug = route.params.slug.filter((s: string) => s !== "");

// Spanish Post
if (slug.length > 1) {
  res = await useAsyncData(`es-post-dir-${slug[1]}`, () =>
    queryContent()
      .where({
        _locale: slug[0] || "en",
        _source: "blog",
        _dir: { $contains: [slug[1]] },
      })
      .findOne()
  );
  if (!res.data.value) {
    res = await useAsyncData(`es-post-slug-${slug[1]}`, () =>
      queryContent()
        .where({
          slug: slug[1],
          _locale: slug[0] || "en",
          _source: "blog",
        })
        .findOne()
    );
  }
  post = res.data;
}
// English post or page
else {
  res = await useAsyncData(`en-post-dir-${slug[0]}`, () =>
    queryContent()
      .where({
        _locale: "en",
        _dir: {
          $contains: [slug[0]],
        },
        _source: { $in: ["blog", "pages"] },
      })
      .find()
  );
  if (!res.data.value?.length) {
    res = await useAsyncData(`en-post-slug-${slug[0]}`, () =>
      queryContent()
        .where({
          slug: slug[0],
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
    .where({ _locale: post.value._locale || "en", _source: "blog" })
    .findSurround(post.value._path);
}

// Redirect to 404 if no post or page found
if (!post?.value && !page?.value) {
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
