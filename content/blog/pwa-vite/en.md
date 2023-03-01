---
title: "PWA & Vite: Development of a Progressive Web App with Vue 3"
date: 2021-08-10T08:30:00.000Z
published: true
hero_title: PWA & Vite
hero_subtitle: Development of a Progressive Web App with Vue 3.
description: In this post we are going to develop a boilerplate to develop PWA
  using Vite as a building tool and Vue.js 3 as a JavaScript framework.
thumbnail: /img/content/pwa-vite-thumb.jpg
popular: true
taxonomy:
  category:
    - Articles
  tag:
    - JavaScript
    - Vuejs
    - PWA
    - Vite
---

![PWA & Vite: Development of a Progressive Web App with Vue 3](/img/content/pwa-vite-hero.jpg)

> You can read this article also in [Spanish](/es/pwa-vite).

Since the arrival of the PWA concept in 2015 until its implementation in most browsers in 2019, the concept has appeared and disappeared among the technologies to consider or technologies to learn that year. To this day the implementation and use is still not massive. However, the idea and the advantages it offers to a web application are very important to take into account. With an implementation of PWA in a web application, "native" execution and integration in mobile OS are allowed, it allows the sending of updates to the devices that have it installed and the implementation of the same for a simple application is not a big problem.

<div class="columns" style="justify-content: center">
<div class="column col-4 col-sm-6">

![Example of web application in browser vs PWA saved on a mobile device.](/img/content/pwa-vite-bodega-before.jpeg)

</div>
<div class="column col-4 col-sm-6">

![Example of web application in browser vs PWA saved on a mobile device.](/img/content/pwa-vite-bodega-after.jpeg)

</div>
</div>

<div class="text-center" style="margin: -15px 0 20px;">
  <small>Example of web application in browser vs PWA saved on a mobile device.
</small>
</div>

In this post we are going to develop a boilerplate to develop PWA using Vite as _building_ tool and Vue.js 3 as JavaScript framework, but first we are going to briefly explain what a PWA is.

## What is a PWA?

[PWA](https://web.dev/progressive-web-apps/) (Progressive Web App) are commonly defined as applications that are delivered over the web using web technologies such as HTML, CSS, and JavaScript and intended for work in any browser that supports basic standards. At the same time, it allows you to work offline, make push notifications and work with the device's hardware. To make this possible, several technologies such as Manifest and WebWorker have been developed that we will work with and describe in this short tutorial.

## Installation

First you need to create the project with Vite. Vite allows you to create a wide variety of projects through its installer, although in this case we will use the Vue.js template.

```bash
yarn create vite pwa-vue --template vue
cd pwa-vue
yarn
yarn dev
```

With this we already have the Vue.js application running with Vite as we can see in <http://localhost:3000/>

<div class="text-center">

![Vite + Vue.js Hello World page](/img/content/pwa-vite-vite-vue-startup.png)

</div>
<div class="text-center" style="margin: -15px 0 20px;">
  <small>Vite + Vue.js Hello World page</small>
</div>

For the management of the PWA we are going to use the [Vite PWA plugin](https://github.com/antfu/vite-plugin-pwa), which allows by including PWA in the build in a simple way through the file of Vite configuration. Also, we are going to add a package to manage the [precaching](https://developers.google.com/web/tools/workbox/modules/workbox-precaching) of the application once it is installed on a device.

```bash
yarn add vite-plugin-pwa workbox-precaching -D
```

## Config

The configuration of both Vite and its plugins is done in the _vite.config.js_ file, which is located in the root of the project. A simple installation of the PWA plugin would be the following:

```jsx
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VitePWA()],
});
```

However, this configuration enables PWA but it will not work correctly on the devices, since it does not meet the minimum necessary configuration. The following code details the minimum and necessary information for the plugin to work correctly.

```jsx
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      mode: "development",
      base: "/",
      srcDir: "src",
      filename: "sw.ts",
      includeAssets: ["/favicon.png"],
      strategies: "injectManifest",
      manifest: {
        name: "Test Project",
        short_name: "Test",
        theme_color: "#ffffff",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        icons: [
          {
            src: "icon-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icon-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "icon-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
});
```

Every PWA must have a manifest. A **Manifest** is a file that defines (in JSON format) the name of the application, the background color that it will have on the device once installed, the location, formats of the icons used and the root url for PWA (web application can have different url for web and PWA). That is, the minimum behavioral requirements of that web application on a device.

In turn, it is necessary to define the location of the root of the code (in this case _src_) and the location of the Service Worker. A **Service Worker** is a set of code that runs in the background and allows secondary actions to be performed with the running application. In our case we are going to manage the caching of the application and its update through a Service Worker located in _src / sw.ts._

```jsx
import { precacheAndRoute } from 'workbox-precaching'

declare let self: ServiceWorkerGlobalScope

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting()
})
// self.__WB_MANIFEST is default injection point
precacheAndRoute(self.__WB_MANIFEST)
```

At this point, if your editor is Visual Studio Code, multiple formatting errors will appear. This is because the type library that manages workers has not been added. To do this, it is necessary to extend the TypeScript definition by creating a tsconfig.json configuration file, adding WebWorker as a library and excluding from the analysis the .worker.ts files that may exist in the _node-modules_ folder.

```jsx
{
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    "moduleResolution": "node",
    "strict": true,
    "jsx": "preserve",
    "sourceMap": true,
    "resolveJsonModule": true,
    "esModuleInterop": true,
    "baseUrl": ".",
    "paths": {
      "/@/*": ["src/*"]
    },
    "lib": ["ESNext", "DOM", "WebWorker"]
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"],
  "exclude": [
    "dist",
    "node_modules",
    "test",
    "test.ts",
    "**/*.spec.ts",
    "**/*.worker.ts"
  ]
}
```

> Webworker is incompatible with [vue-tsc](https://www.npmjs.com/package/vue-tsc), so if you don't want to opt for the build with vite you should use [cross-env](https://www.npmjs.com/package/cross-env) as a build and build package.

## PWA registration

To register the PWA and make it functional, it is necessary to create a component that is responsible for creating the PWA instance and managing content updates, online mode or content refresh. This component (ReloadPWA.vue) will show a button to update the application content if the Service Worker finds changes.

```jsx
<template>
  <div v-if="offlineReady || needRefresh" class="flex flex-wrap" role="alert">
    <div class="message mt-1">
      <span v-if="offlineReady"> App ready to work offline </span>
      <span v-else>New content available, click on reload button to update.</span>
    </div>
    <div class="buttons flex align-middle mt-2 md:mt-0">
      <button v-if="needRefresh" @click="updateServiceWorker()" class="button">
        Reload
      </button>
      <button @click="close" class="button">
        Close
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRegisterSW } from "virtual:pwa-register/vue";
const { updateServiceWorker } = useRegisterSW();

export default defineComponent({
  name: "ReloadPWA",
  setup() {
    const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW();
    const close = async () => {
      offlineReady.value = false;
      needRefresh.value = false;
    };
    return { offlineReady, needRefresh, updateServiceWorker, close };
  },
  methods: {
    async close() {
      this.offlineReady.value = false;
      this.needRefresh.value = false;
    },
    async updateServiceWorker() {
      await updateServiceWorker();
    },
  },
});
</script>
```

To finish it is only necessary to add the component to App.vue and deploy the application:

```jsx
<template>
  <ReloadPWA />
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import ReloadPWA from "./components/ReloadPWA.vue";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
    ReloadPWA,
  },
});
</script>
```

When making changes to the content and running the app from the mobile device, the ReloadPWA component message will appear to update the content.

The code for this project can be seen in the following repo:

<https://github.com/rubenRP/vite-pwa-boilerplate>

## References

<https://web.dev/progressive-web-apps/>

[https://es.wikipedia.org/wiki/Aplicación_web_progresiva](https://es.wikipedia.org/wiki/Aplicaci%C3%B3n_web_progresiva)

<https://github.com/antfu/vite-plugin-pwa>

<https://vitejs.dev/guide/#community-templates>

<https://developers.google.com/web/tools/workbox/modules/workbox-precaching>

<span>Photo by <a href="https://unsplash.com/@anniespratt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Annie Spratt</a> on <a href="https://unsplash.com/s/photos/phone?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
</span>
