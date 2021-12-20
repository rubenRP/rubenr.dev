---
title: "CORS y Vite : Solución a los problemas de CORS en local y desplegando con Netlify"
date: 2021-11-30T00:00:00+00:00
published: true
hero_title: CORS y Vite
hero_subtitle: Solución a los problemas de CORS en local y desplegando con Netlify.
description: En el artículo de hoy hablaremos de CORS, configuración de proxies con Vite y redirecciones con Netlify.
hero_image: hero.jpg
thumbnail: thumb.jpg
popular: true
taxonomy:
  category:
    - Articles
  tag:
    - Vue.js
    - JavaScript
    - Netlify
    - Vite
---

> You can read this article also in [English](https://rubenr.dev/en/cors-vite-vue).

Últimamente he estado trabajando en un proyecto personal que entre otras cosas utiliza un servicio de SERP mediante una API. En principio creé este proyecto con Vite y Vue 3 para probar las novedades que trae respecto a la versión anterior. Sin embargo, por el camino me estoy encontrando con una serie de diferencias que me parece interesante comentar. En el artículo de hoy hablaremos de CORS, Proxies con Vite y redirecciones con Netlify.

## Introducción

Antes de meternos en profundidad, dejo un pequeño resumen de las características del proyecto:

- Vue 3
- Vite como servidor de desarrollo/bundler
- Axios como cliente HTTP
- Netlify como hosting/sistema de despliegue

Para crear un proyecto de prueba (no voy a entrar en detalle) es necesario ejecutar los siguientes comandos:

```bash
yarn create vite
// framework: vue
// variant: vue-ts
cd vite-project
yarn
yarn add axios
yarn dev
```

Como siempre, al llamar a la _URL_ de dev (en nuestro caso localhost:3000) aparece la típica landing de _Hello World._ Ya en el propio fichero app.vue podemos añadir un método de ejemplo para realizar una petición de tipo Get con Axios a nuestra API de ejemplo:

```jsx
const searchFromApi = async (query: string) => {
  return axios.get("[https://apiservice.com](https://apiservice.com)/search", {
    params: query,
  })
}

// Calls with this.searchFromApi(query)
```

Sin embargo, al probarlo en nuestro entorno de desarrollo aparece el siguiente error en la consola del navegador y la petición no se realiza:

![Ejemplo de error CORS](cors-error.png)

<div class="text-center" style="margin: -15px 0 20px;">
  <small>Ejemplo de error CORS</small>
</div>

Esto es debido a que nuestro servidor trata de realizar la petición a la API, pero dentro de nuestro dominio, ya que para realizar una petición a un dominio diferente, es necesario fijar unas reglas especiales para que la petición pueda _"salir"_ de nuestro entorno de desarrollo. Bien, esto es debido al CORS.

Los problemas de CORS son fáciles de identificar; pero no son tan fáciles de analizar, ya que no son posibles de trazar con el inspector del navegador. A su vez, no se suele conocer muy bien el funcionamiento de CORS, por lo que buscar soluciones en los diferentes frameworks y sistemas de hosting JAMstack se vuelve muy complicado.

## ¿Qué es un error de CORS?

Las siglas CORS provienen de _Intercambio de Recursos de Origen Cruzado_ y por el nombre te harás una idea de por dónde van los tiros cuando aparece un error de este tipo, dado que estamos intentando obtener información de una API. Un error CORS es cualquier error generado por el navegador que esté relacionada con la carga de recursos de un origen desconocido (hipotéticamente).

Para ser un poco más específicos, todas las invocaciones a API que utilizan _XMLHttpRequest_ o _Fetch_ y fuentes web que utilizan _@font-face_ utilizan CORS (entre otros), y son susceptibles de generar errores CORS

<div style="margin: 0 auto; max-width: 600px;">

![Fuente: [https://developer.mozilla.org/es/docs/Web/HTTP/CORS](https://developer.mozilla.org/es/docs/Web/HTTP/CORS)](CORS_principle.png)

</div>

<div class="text-center" style="margin: -15px 0 20px;">
  <small>Fuente: https://developer.mozilla.org</small>
</div>

Por razones de seguridad, los navegadores restringen las solicitudes de origen cruzado que se inician en un _script_, como es nuestro caso. Para solucionar esto, hay una serie de reglas que se pueden añadir tanto la cabecera de la petición como en el servidor para dar legitimidad a la petición. En nuestro caso, necesitamos dar legitimidad a la URL [https://apiservice.com](https://apiservice.com) mediante una regla de tipo **_Access-Control-Allow-Origin_**:

```bash
Access-Control-Allow-Origin: https://apiservice.com //Allows only this URL
Access-Control-Allow-Origin: * //Allows all URLs
```

### Bonus: Llamadas con Preflight

Si el navegador estima que la petición realizada puede no ser segura, automáticamente realizará el proceso de **_preflight_**, en la que evaluará si la petición CORS es segura. Un ejemplo de llamada con _preflight_ es cualquier petición simple de tipo _application/json_, algo muy utilizado en las llamadas a API. En la mayoría de casos se solucionará definiendo el _content-type_ de la petición en las opciones de Axios.

```jsx
const res = await axios.get('[https://apiservice.com](https://apiservice.com)/search', {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*' // Could work and fix the previous problem, but not in all APIs
  },
```

Otras peticiones en las que se realizará automáticamente el proceso de _preflight_ son las llamadas con credenciales, cookies, cabeceras no permitidas, o peticiones de tipo PUT, PATCH y DELETE.

## ¿Cómo solucionarlo?

Para solucionar este problema tanto Vue-cli como Vite es necesario fijar un **_Proxy_** en los ficheros de configuración de Vue-cli o Vite para dar legitimidad a las peticiones y _"decir"_ al navegador que esa petición tiene que realizarla fuera del servidor dev y que es una petición correcta y auténtica.

Para una aplicación creada con vue-cli es necesario añadir una configuración similar a la que sigue en el fichero vue.config.js

```jsx
devServer: {
    proxy: {
      "/api": {
        ws: true,
        changeOrigin: true,
        target: "https://apiservice.com"
      }
    }
  }
```

<div class="text-center" style="margin: -15px 0 20px;">
  <small>Configuración de Proxy con vue-cli. Fichero vue.config.js</small>
</div>

Para nuestro caso, en el que utilizamos Vite, la configuración del proxy sería similar al siguiente código:

```jsx
import vue from "@vitejs/plugin-vue"
import { defineConfig } from "vite"

export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://apiservice.com",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  plugins: [vue()],
})
```

<div class="text-center" style="margin: -15px 0 20px;">
  <small>Configuración de Proxy con Vite. Fichero vite.config.ts</small>
</div>

Tras añadir nuestro proxy en el fichero de configuración ya podemos ejecutar nuestro servidor de desarrollo y llamar a nuestra API con Axios:

```jsx
const searchFromApi = async (query: string) => {
  return axios.get("/api/search", {
    params: query,
  })
}
```

> Como se puede ver, la llamada a la API se realiza utilizando como url la referencia hecha en el fichero _vite.config.ts_ y no la url de la API.

Con estas modificaciones en las llamadas y la configuración del proxy, ya estamos listos para desarrollar nuestra aplicación llamando a cualquier API usando Axios sin problemas de CORS.

## Configuración de Netlify

Esto no acaba aquí. Hemos solucionado nuestros problemas de CORS para desarrollar en nuestro servidor local, pero ¿Qué pasa al desplegar nuestra aplicación en Netlify?

El despliegue es correcto y parece funcionar correctamente, pero no se realiza la petición a la API. Tampoco aparecen errores de consola, por lo que no queda claro qué está pasando. Esto es debido a que hay que realizar un proceso similar a la ejecución en local y permitir la ejecución de la URL mediante una regla de redirección. De lo contrario se llamará desde la URL desde la que se está ejecutando la aplicación.

En Netlify este tipo de modificaciones se realiza mediante un fichero **_\_redirects_**. En el caso de una aplicación de Vue 3 debe estar en la raíz del proyecto, mientras que en un proyecto de Vite debe ubicarse dentro de la carpeta **_public_**.

```markdown
/api/_ https://apiservice.com/:splat 200
/_ /index.html 200
/\* /index.html 404
```

> El orden de las redirecciones es importante, primero deben ir las reglas de redirección a las diferentes APIs o servicios y después el resto de redirecciones a index.html

Con esto ya podemos hacer commit y push del fichero, desplegarlo en Netlify y disfrutar de nuestra aplicación :)

Es cierto que otra opción sería haciendo uso de Netlify functions, pero complicaría bastante el desarrollo para lo que estamos haciendo, ya que habría que modificar el proxy para que ejecutara la función en local también y llamar a netlify en nuestro comando de Yarn o NPM previamente a Vite. En este caso no me parece necesario, pero seguro que hay otros casos en los que sí es una buena solución.

## Recursos

[https://stackoverflow.com/questions/67986822/api-from-proxy-not-working-after-deploying-on-netlify](https://stackoverflow.com/questions/67986822/api-from-proxy-not-working-after-deploying-on-netlify)

[https://medium.com/@kamry.bowman/circumventing-cors-with-netlify-functions-nodejs-65aa6ec69a65](https://medium.com/@kamry.bowman/circumventing-cors-with-netlify-functions-nodejs-65aa6ec69a65)

[https://developer.mozilla.org/es/docs/Web/HTTP/CORS](https://developer.mozilla.org/es/docs/Web/HTTP/CORS)

[https://vitejs.dev/config/#server-proxy](https://vitejs.dev/config/#server-proxy)

[https://cli.vuejs.org/config/#devserver-proxy](https://cli.vuejs.org/config/#devserver-proxy)

Photo by [Anders Jildén](https://unsplash.com/@andersjilden?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/bridge?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
