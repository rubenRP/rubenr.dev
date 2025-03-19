<template>
  <div id="about" />
  <section class="section modular-about">
    <div class="container grid-sm">
      <div class="columns">
        <div class="column col-12">
          <p class="text-justify" v-html="about.text" />
          <h4>Contact</h4>
          <div class="columns">
            <div class="column col-8 col-md-12">
              <div>{{ about.contactEmail }}</div>
            </div>
            <div class="column col-4 col-md-12" v-html="about.contactLink" />
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
import { ABOUT } from "../const.ts";
import SocialLinks from "./SocialLinks.vue";
const about = ABOUT;
</script>
