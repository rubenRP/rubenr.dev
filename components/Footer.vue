<template>
  <section id="footer" class="section">
    <section class="container grid-lg">
      <SocialLinks />
    </section>
    <section class="container grid-lg">
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
              <NuxtLink v-else :to="item.url" class="external">
                {{ item.title }}
              </NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  </section>
</template>

<script setup lang="ts">
const footerLinks = useAppConfig().footerLinks;
</script>
