---
title: "Pinia: The friendlier alternative to Vuex in Vue 3"
date: 2022-02-23T0:00:00.000Z
published: true
hero_title: Pinia
hero_subtitle: The friendlier alternative to Vuex in Vue 3
description: Small overview on this new library and the implications this has on the development of applications in Vue 3.
hero_image: hero.jpg
thumbnail: thumb.jpg
slug: /en/pinia-vuex/
language: en
taxonomy:
  category:
    - Articles
  tag:
    - JavaScript
    - Vue.js
    - Pinia
    - Vuex
    - Libraries
---

> You can read this article also in [Spanish](/pinia-vuex).

On February 8, 2022 [Vue 3](https://vuejs.org/) became the [default version](https://blog.vuejs.org/posts/vue-3-as-the-new-default.html) of Vue. This is an important step, as it not only considers Vue 3 _totally_ stable for production applications; it also assumes that the proposed application ecosystem around Vue 3 is stable. One of the suggested changes revolves around state management in Vue 3, as Evan You mentioned in his [talk at VueConf Toronto](https://www.youtube.com/watch?v=2KBHvaAWJOA&t=1183s) held last November.

<div style="margin: 50px auto 0; max-width: 600px;">

![Screenshot of the talk with the new recommendations for Vue3. Source: YouTube](vue-default-recs.png)

</div>
<div class="text-center" style="margin: -15px 0 70px;">
  <small>Screenshot of the talk with the new recommendations for Vue3. Source: YouTube</small>
</div>

As you can see in the image, there are changes in the _tooling_, in the VSCode extension and in the state management, which is what we are going to focus on today. From now on [Pinia](https://pinia.vuejs.org/) will be the recommended default option for state management on Vuex, so we will do a little _overview_ about this new library, what it is and the implications this has on application development in Vue 3.

<div style="margin: 50px auto; max-width: 100px;">

![Pinia logo](pinia-logo.png)

</div>

## What is Pinia?

**[Pinia](https://pinia.vuejs.org/)** is a JavaScript library for state management under a _store_. It allows sharing a state across multiple pages and components. This library emerged in 2019 as a result of the first Composition API experiments done for Vue 3 and was conceived with it in mind, although it also supports Vue 2 and Vue 3 with _Options API._ As main features it highlights the **type management**, support for _Devtools_ and its lightweight.

## Vuex vs Pinia

When thinking about Vue and state management it is an automatic exercise to think of Vuex instead of Pinia; first because it is a relatively new library and second because Vuex is a strongly established library in the community. For this reason we will use the comparison with Vuex to establish the differences and advantages with Pinia.

### Diseño by design

Pinia's approach is slightly different from Vuex, since Pinia **generates a Store per module**, which can be imported or not in the components as needed. On the one hand, it simplifies development, since only the methods of the Store (or module) need to be operated on each time, rather than the "_complete_" Store of Vuex. This in turn makes it easier to _code splitting_ and load only what is needed in each component. Yes, Pinia allows _code splitting_ in Webpack.
in Webpack.

### Eliminación de Mutaciones

Debido al diseño de Pinia, las mutaciones ya no son neceserarias. Uno de los objetivos iniciales de las mutaciones en Vuex (y otras librerías) era poder mostrar los cambios de estado en las Devtools. A su vez se establecía como parte necesaria en el workflow de Vuex considerado “buena práctica”: Componente llama acción, acción a mutación y mutación cambia el estado. La eliminación de las mutaciones tiene ciertas implicaciones en la práctica que describiremos posteriormente.

<div style="margin: 0 auto; max-width: 700px;">

![Descripción gráfica de las diferencias de arquitectura de Vuex y Pinia.](vuex-pinia-comp.png)

</div>
<div class="text-center" style="margin: -70px 0 20px;">
  <small>Descripción gráfica de las diferencias de arquitectura de Vuex y Pinia.</small>
</div>

A su vez hay que destacar las siguientes características de Pinia:

- **Completa integración con TypeScript**
- **Muy ligero**, pesa sobre 1kb
- **Soporte para _Vue devtools_**
- **Soporte para SSR**

## Pinia en la práctica

En los siguientes fragmentos de código se muestra la definición de un módulo de Vuex y su traducción en un store de Pinia:

```jsx
// Vuex
const CounterModule: Module<State, RootState> = {
  namespaced: true,
  state: {
    count: 0,
  },
  getters: {
    double: (state) => state.count * 2,
  },
  actions: {
    increaseCount({ state, commit }) {
      commit("increment")
    },
  },
  mutations: {
    increment(state, payload) {
      state.count++
    },
  },
}

export default storeModule
```

```jsx
// Pinia
const useCounterStore = defineStore("counter", {
  state: () => ({ count: 0 }),
  getters: {
    double: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
  },
})
```

Como se puede ver, no hay excesivas diferencias en la sintaxis de definición de un Store de Pinia vs un módulo de Vuex: Ni las acciones ni las mutaciones necesitan como parámetro el estado o el payload, pero poco más. Si bien hay que mencionar que a la definición del módulo de Vuex le debería seguir su importación en la store para que pueda ser utilizada. En Pinia esa definición es **suficiente** y ya puede ser usada en los componentes. En cualquier caso, más allá de la definición de una Store en Pinia y las ligeras diferencias respecto a Vuex, los cambios importantes vienen en el uso de las Stores.

Por una parte, la invocación del store se realiza directamente en los componentes. Debido a esto, no es necesario llamar a todos los stores en la invocación a _**createApp**_ en `main.ts`. La llamada a _**createPinia**_ lo único que hace es crear una instancia de Pinia, nada más.

```jsx
import { useCounterStore } from "../stores/counterStore"
```

Por otra parte, el acceso a estado, getters y acciones se realiza de modo diferente, ya que hay helpers específicos para mapearlos en options API).

Las llamadas con **Options API** son más o menos similares a las ejecutadas en Vuex si se usaran los helpers.

```jsx
import { mapState, mapActions } from "pinia"
import { useCounterStore } from "../stores/counterStore"

export default {
  computed: {
    // First is state, second a getter
    ...mapState(useCounterStore, ["counter", "doubleCount"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["increment"]),
  },
}
```

También se pueden renombrar los métodos o estado en el componente:

```jsx
import { mapState, mapActions } from "pinia"
import { useCounterStore } from "../stores/counterStore"

export default {
  computed: {
    // First is state, second a getter
    ...mapState(useCounterStore, {
      myOwnName: "doubleCounter",
      // you can also write a function that gets access to the store
      double: (store) => store.doubleCount,
    }),
  },
  methods: {
    ...mapActions(useCounterStore, { myOwnName: "increment" }),
  },
}
```

La ventaja de Pinia, es que a su vez se puede hacer uso de los estados de manera muy sencilla en componentes con **Composition API**:

```jsx
export default {
  setup() {
    const store = useCounterStore()

    const double = store.doubleCounter()

    const incremented = store.increment()

    return { store }
  },
}
```

### Migración de Vuex a Pinia

En la documentación de Pinia una [extensa guía](https://pinia.vuejs.org/cookbook/migration-vuex.html) detallando los pasos para migrar una store de Vuex a Pinia. En cualquier caso, y una vez teniendo claros los conceptos la migración es relativamente sencilla siempre y cuando se sea un poco ordenado:

- **Reestructuración de carpetas**: De módulos a Stores y eliminación del store principal.
- **Conversión de módulos**: modificar sintaxis para convertirlos en Stores.
- **Eliminación de mutaciones y conversión a acciones.**
- **Modificación de llamadas en componentes añadiendo helpers** (si aplica). Si tras la refactorización de las stores se ha modificado el nombre de los métodos se pueden hacer uso de los alias para evitar tocar más código del necesario.

En mi caso he realizado la migración de un proyecto bastante sencillo y ha funcionado a la primera. Por mi experiencia lo importante del proceso de migración es ser metódico en todos los pasos. Es posible que temporalmente aparezcan errores en el editor, pero hay que esperar hasta el final para revisar y comprobar que todo está correcto.

## Conclusiones

Desde mi punto de vista, Pinia supone un avance en la simplificación de la gestión de estados en proyectos con Vue (u otro framework JS). Es más fácil de entender, ya que no tiene conceptos que se solapen como mutación y acción. A su vez la sintaxis de uso es muy sencilla y clara: ya queda lejos las definiciones de stores y mutaciones en Redux de hace 5 años. No obstante, para proyectos que ya tienen implementado Vuex o incluso proyectos en Vue 3 con Vuex, no supone un gran avance, aunque la migración en aplicaciones pequeñas es bastante sencilla y agradecida.

## Referencias

[https://blog.vuejs.org/posts/vue-3-as-the-new-default.html](https://blog.vuejs.org/posts/vue-3-as-the-new-default.html)

[https://vuejs.org/](https://vuejs.org/)

[https://pinia.vuejs.org/](https://pinia.vuejs.org/)

[https://pinia.vuejs.org/cookbook/migration-vuex.html](https://pinia.vuejs.org/cookbook/migration-vuex.html)

[https://www.youtube.com/watch?v=2KBHvaAWJOA&t=1183s](https://www.youtube.com/watch?v=2KBHvaAWJOA&t=1183s)

Photo by [Asso Myron](https://unsplash.com/@assomyron?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/pineapple?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
