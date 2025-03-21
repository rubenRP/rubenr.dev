<template>
  <div id="resume" />
  <section class="section modular-resume bg-gray">
    <section class="container grid-sm">
      <div
        :class="`columns ${section.cssClass}`"
        v-for="section in resume"
        :key="section.id"
      >
        <div class="column col-3 col-md-12 header-col">
          <h4>
            <span>{{ section.title }}</span>
          </h4>
        </div>
        <div class="column col-9 col-md-12 main-col">
          <div
            class="columns item"
            v-for="item in section.items"
            :key="item.id"
          >
            <div class="column col-12">
              <h4 v-if="item.title">{{ item.title }}</h4>
              <p class="info" v-if="item.info">
                {{ item.info }} <span>•</span>{{ " " }}
                <em class="date">{{ item.date }}</em>
              </p>
              <p
                v-if="item.description"
                v-html="item.description"
                class="text-justify"
              />
              <ul class="skill-list" v-if="item.skillList">
                <li v-for="skill in item.skillList" :key="skill">
                  <span class="skill">
                    <Icon :icon="skill.icon" />
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
import { RESUME } from "../const.ts";
import { Icon } from "@iconify/vue";

const resume = RESUME;
</script>
