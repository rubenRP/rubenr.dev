<template>
  <div id="resume" />
  <section class="section modular-resume bg-gray">
    <section class="container grid-md">
      <div
        v-for="section in resume"
        :key="section.id"
        :class="`columns ${section.cssClass}`"
      >
        <div class="column col-3 col-md-12 header-col">
          <h4>
            <span>{{ section.title }}</span>
          </h4>
        </div>
        <div class="column col-9 col-md-12 main-col">
          <div
            v-for="item in section.items"
            :key="item.id"
            class="columns item"
          >
            <div class="column col-12">
              <h4 v-if="item.title">{{ item.title }}</h4>
              <p v-if="item.info" class="info">
                {{ item.info }} <span>•</span>{{ " " }}
                <em class="date">{{ item.date }}</em>
              </p>
              <p v-if="item.description" v-html="item.description" />
              <ul v-if="item.skillList" class="skill-list">
                <li v-for="skill in item.skillList" :key="skill">
                  <span class="skill">
                    <Icon :name="skill.icon" size="20px" />
                    <span>{{ skill.name }}</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
const resume = useAppConfig().resume;
</script>
