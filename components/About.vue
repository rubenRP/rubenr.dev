<template>
  <div id="about" />
  <section class="section modular-about">
    <div class="container grid-md">
      <div class="columns">
        <div class="column col-9 col-md-12">
          <p v-html="about.text" />
          <h4>Contact</h4>
          <div class="columns">
            <div class="column col-8 col-md-12">
              <div>{{ about.contactEmail }}</div>
            </div>
            <div class="column col-4 col-md-12" v-html="about.contactLink" />
          </div>
        </div>
        <div class="column col-3 col-md-12">
          <div class="image">
            <nuxt-img src="/img/profile-pic.jpg" alt="Rubén Rodríguez" />
          </div>
        </div>
      </div>
      <div class="mt-2">
        <SocialLinks />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const about = useAppConfig().about;
</script>
