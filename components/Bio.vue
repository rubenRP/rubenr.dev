<template>
  <div id="about" />
  <section class="section modular-recent">
    <div class="container grid-md">
      <div class="columns">
        <div class="column col-3 col-md-12 header-col">
          <h4>
            <span>{{ about.title }}</span>
          </h4>
        </div>
        <div class="column col-9 col-md-12 main-col">
          <div class="columns item">
            <p class="column col-12 padded" v-html="about.shortInfo" />
            <div class="column col-4 col-md-12">
              <NuxtLink to="/about" class="btn btn-lg">
                More things about me...
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const about = useAppConfig().about;
</script>
