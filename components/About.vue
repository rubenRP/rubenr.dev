<template>
  <div id="about" />
  <section class="section modular-about">
    <div class="container grid-md">
      <div class="columns left">
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
            <StaticImage
              src="../images/profile-pic.jpg"
              alt="Rubén Rodríguez"
              placeholder="blurred"
              layout="fixed"
              width="{170}"
              height="{170}"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const about = useAppConfig().about;
</script>
