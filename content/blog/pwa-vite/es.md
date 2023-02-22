---
title: "PWA y Vite: Desarrollo de una Progressive Web App con Vue 3"
date: 2021-08-10T08:30:00.000Z
published: true
hero_title: PWA y Vite
hero_subtitle: Desarrollo de una Progressive Web App con Vue 3.
description: En este post vamos a desarrollar un boilerplate para desarrollar
  PWA utilizando Vite como herramienta de building y Vue.js 3 como framework
  JavaScript.
thumbnail: /img/content/pwa-vite-thumb.jpg
taxonomy:
  category:
    - Articles
  tag:
    - JavaScript
    - Vue.js
    - PWA
    - Vite
_locale: es
---

![PWA y Vite: Desarrollo de una Progressive Web App con Vue 3](/img/content/pwa-vite-hero.jpg)

> You can read this article also in [English](/pwa-vite).

Desde la llegada del concepto de PWA en el año 2015 hasta su implementación en la mayoría de los navegadores en 2019, el concepto ha ido apareciendo y desapareciendo entre las tecnologías a tener en cuenta o tecnologías que aprender ese año. A día de hoy la implementación y uso sigue sin ser masiva. Sin embargo la idea y las ventajas que ofrece a una aplicación web son muy a tener en cuenta. Con una implementación de PWA en una aplicación web se permite la ejecución "nativa" e integración en SO móviles, permite el envío de actualizaciones a los dispositivos que la tienen instalada y la implementación de la misma para una aplicación sencilla no supone un gran problema.

<div class="columns" style="justify-content: center">
<div class="column col-4 col-sm-6">

![Ejemplo de aplicación web en navegador vs PWA guardada en un dispositivo móvil.](/img/content/pwa-vite-bodega-before.jpeg)

</div>
<div class="column col-4 col-sm-6">

![Ejemplo de aplicación web en navegador vs PWA guardada en un dispositivo móvil.](/img/content/pwa-vite-bodega-after.jpeg)

</div>
</div>

<div class="text-center" style="margin: -15px 0 20px;">
  <small>Ejemplo de aplicación web en navegador vs PWA guardada en un dispositivo móvil.
</small>
</div>

En este post vamos a desarrollar un boilerplate para desarrollar PWA utilizando Vite como herramienta de _building_ y Vue.js 3 como framework JavaScript, pero antes vamos a explicar brevemente qué es una PWA.

## ¿Qué es una PWA?

Las [PWA](https://web.dev/progressive-web-apps/) (Progressive Web App) se definen comúnmente como aplicaciones que se entregan a través de la web utilizando tecnologías web como HTML, CSS y JavaScript y destinado a funcionar en cualquier navegador compatible con los estándares básicos. A su vez, permite trabajar sin conexión, realizar notificaciones push y trabajar con el hardware del dispositivo. Para hacer posible esto, se han desarrollado varias tecnologías como Manifiesto y WebWorker con las que trabajaremos y describiremos en este pequeño tutorial.

## Instalación

Primero es necesario crear el proyecto con Vite. Vite permite crear una gran variedad de proyectos mediante su instalador, aunque en este caso utilizaremos el template de Vue.js.

```bash
yarn create vite pwa-vue --template vue
cd pwa-vue
yarn
yarn dev
```

Con esto ya tenemos la aplicación Vue.js en marcha con Vite como podremos ver en <http://localhost:3000/>

![Página de Hello World de Vite + Vue.js](/img/content/pwa-vite-vite-vue-startup.png)

<div class="text-center" style="margin: -15px 0 20px;">
  <small>Página de Hello World de Vite + Vue.js</small>
</div>

Para la gestión de la PWA vamos utilizar el [plugin de PWA de Vite](https://github.com/antfu/vite-plugin-pwa), que permite mediante incluir PWA en la build de un modo sencillo mediante el fichero de configuración de Vite. A su vez vamos a añadir un paquete para gestionar el [precaching](https://developers.google.com/web/tools/workbox/modules/workbox-precaching) de la aplicación una vez esté instalada en un dispositivo.

```bash
yarn add vite-plugin-pwa workbox-precaching -D
```

## Configuración

La configuración tanto de Vite como de sus plugins se realiza en el fichero _vite.config.js_, que se encuentra en la raíz del proyecto. Una instalación sencilla del plugin de PWA sería la siguiente:

```jsx
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VitePWA()],
});
```

Sin embargo esta configuración habilita PWA pero no funcionará correctamente en los dispositivos, ya que no cumple los mínimos necesarios de configuración. En el siguiente código se detalla la información mínima y necesaria para que el plugin funcione correctamente.

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

Toda PWA debe contar con un manifiesto. Un **Manifesto** es un fichero en el que se define (en formato JSON) el nombre de la aplicación, el color de fondo que tendrá en el dispositivo una vez instalada, la ubicación, formatos de los iconos utilizados y la url raíz para la PWA (la aplicación web puede tener url distintas para web y PWA). Es decir, los requisitos mínimos de comportamiento de esa aplicación web en un dispositivo.

A su vez, es necesario definir la ubicación de la raíz del código (en este caso _src_) y la ubicación del Service Worker. Un **Service Worker** es un conjunto de código que se ejecuta en segundo plano y que permite realizar acciones secundarias con la aplicación que se está ejecutando. En nuestro caso vamos a gestionar el cacheo de la aplicación y su actualización mediante un Service Worker ubicado en _src/sw.ts._

```jsx
import { precacheAndRoute } from 'workbox-precaching'

declare let self: ServiceWorkerGlobalScope

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting()
})
// self.__WB_MANIFEST is default injection point
precacheAndRoute(self.__WB_MANIFEST)
```

Llegado este punto, si tu editor es Visual Studio Code aparecerán múltiples errores de formato. Esto es debido a que no se ha añadido la librería de tipos que gestiona workers. Para ello es necesario extender la definición de TypeScript creando un fichero de configuración tsconfig.json, añadiendo WebWorker como librería y excluyendo del análisis los ficheros .worker.ts que puedan existir en la carpeta _node_modules_.

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

> Webworker es incompatible con [vue-tsc](https://www.npmjs.com/package/vue-tsc), por lo que si no se quiere optar por el build con vite se deberá utilizar [cross-env](https://www.npmjs.com/package/cross-env) como paquete de build y compilación.

## Registro de PWA

Para registrar la PWA y hacerla funcional es necesario crear un componente que se encargue de crear la instancia de PWA y gestione las actualizaciones de contenido, el modo online o el refresco de contenido. Este componente (ReloadPWA.vue) mostrará un botón para actualizar el contenido de la aplicación si el Service Worker encuentra cambios.

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

Para terminar solo es necesario añadir el componente a App.vue y desplegar la aplicación:

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

Al realizar modificaciones en el contenido y al ejecutar la app desde el dispositivo móvil aparecerá el mensaje del componente ReloadPWA para actualizar el contenido.

El código de este proyecto puede verse en el siguiente repo:

<https://github.com/rubenRP/vite-pwa-boilerplate>

## Referencias

<https://web.dev/progressive-web-apps/>

[https://es.wikipedia.org/wiki/Aplicación_web_progresiva](https://es.wikipedia.org/wiki/Aplicaci%C3%B3n_web_progresiva)

<https://github.com/antfu/vite-plugin-pwa>

<https://vitejs.dev/guide/#community-templates>

<https://developers.google.com/web/tools/workbox/modules/workbox-precaching>

<span>Photo by <a href="https://unsplash.com/@anniespratt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Annie Spratt</a> on <a href="https://unsplash.com/s/photos/phone?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
</span>
