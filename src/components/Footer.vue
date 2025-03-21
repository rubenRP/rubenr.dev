<template>
  <section id="footer" class="section">
    <section class="container grid-md">
      <SocialLinks />
    </section>
    <section class="container grid-md">
      <ul class="copyright d-inline-flex list-unstyled">
        <li>© {{ new Date().getFullYear() }} Rubén Rodríguez</li>
        <li>
          <ul class="d-inline-flex list-unstyled">
            <li v-for="item in footerLinks" :key="item.url">
              <a
                v-if="item.external"
                :href="item.url"
                class="external"
                target="_blank"
              >
                {{ item.title }}
              </a>
              <a v-else :href="item.url">
                {{ item.title }}
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  </section>
</template>

<script setup lang="ts">
import SocialLinks from "./SocialLinks.vue";
import { FOOTER_LINKS } from "../const.ts";
const footerLinks = FOOTER_LINKS;
</script>
