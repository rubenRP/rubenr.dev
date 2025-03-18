<template>
  <section id="start" />
  <section id="body-wrapper" class="section blog-listing">
    <div class="container grid-sm">
      <div class="columns">
        <div id="item" class="column col-12">
          <div class="content-item h-entry">
            <div v-if="!page.data.image" class="content-title">
              <div v-if="page.data.title">
                <h1 class="p-name h2 mt-1">
                  {{ page.data.title }}
                </h1>
                <div class="text-grey">
                  <h2 class="p-name h3 mt-1 light">
                    {{ page.data.description }}
                  </h2>
                </div>
              </div>

              <h2 v-else class="p-name mt-1">{{ page.data.title }}</h2>
            </div>

            <div class="e-content">
              <div v-html="page.rendered.html" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  page: any;
}>();
</script>
