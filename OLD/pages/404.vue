<template>
  <main>
    <section id="start" />
    <section id="body-wrapper" class="section blog-listing">
      <div class="container grid-md">
        <div class="columns">
          <div id="item" class="column col-12">
            <div class="content-item h-entry">
              <div class="content-title text-center">
                <h2 class="p-name mt-1">Not Found</h2>
              </div>

              <div class="e-content text-center">
                <p class="mb-5">
                  You just hit a route that doesn&#39;t exist... the sadness.
                </p>
                <nuxt-img src="/img/404.gif" alt="404" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const bodyClasses = "header-fixed header-animated";

useHead({
  bodyAttrs: {
    class: bodyClasses,
  },
});
</script>
