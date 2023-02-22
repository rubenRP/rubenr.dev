---
title: "Pinia: The friendlier alternative to Vuex in Vue 3"
date: 2022-03-14T0:00:00.000Z
published: true
hero_title: Pinia
hero_subtitle: The friendlier alternative to Vuex in Vue 3
description: Small overview on this new library and the implications this has on the development of applications in Vue 3.
hero_image: /img/content/pinia-vuex-hero.jpg
thumbnail: /img/content/pinia-vuex-thumb.jpg
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

> You can read this article also in [Spanish](/es/pinia-vuex).

On February 8, 2022 [Vue 3](https://vuejs.org/) became the [default version](https://blog.vuejs.org/posts/vue-3-as-the-new-default.html) of Vue. This is an important step, as it not only considers Vue 3 _totally_ stable for production applications; it also assumes that the proposed application ecosystem around Vue 3 is stable. One of the suggested changes revolves around state management in Vue 3, as Evan You mentioned in his [talk at VueConf Toronto](https://www.youtube.com/watch?v=2KBHvaAWJOA&t=1183s) held last November.

<div style="margin: 50px auto 0; max-width: 600px;">

![Screenshot of the talk with the new recommendations for Vue3. Source: YouTube](/img/content/pinia-vuex-vue-default-recs.png)

</div>
<div class="text-center" style="margin: -15px 0 70px;">
  <small>Screenshot of the talk with the new recommendations for Vue3. Source: YouTube</small>
</div>

As you can see in the image, there are changes in the _tooling_, in the VSCode extension and in the state management, which is what we are going to focus on today. From now on [Pinia](https://pinia.vuejs.org/) will be the recommended default option for state management on Vuex, so we will do a little _overview_ about this new library, what it is and the implications this has on application development in Vue 3.

<div style="margin: 50px auto; max-width: 100px;">

![Pinia logo](/img/content/pinia-vuex-pinia-logo.png)

</div>

## What is Pinia?

**[Pinia](https://pinia.vuejs.org/)** is a JavaScript library for state management under a _store_. It allows sharing a state across multiple pages and components. This library emerged in 2019 as a result of the first Composition API experiments done for Vue 3 and was conceived with it in mind, although it also supports Vue 2 and Vue 3 with _Options API._ As main features it highlights the **type management**, support for _Devtools_ and its lightweight.

## Vuex vs Pinia

When thinking about Vue and state management it is an automatic exercise to think of Vuex instead of Pinia; first because it is a relatively new library and second because Vuex is a strongly established library in the community. For this reason we will use the comparison with Vuex to establish the differences and advantages with Pinia.

### Modular by design

Pinia's approach is slightly different from Vuex, since Pinia **generates a Store per module**, which can be imported or not in the components as needed. On the one hand, it simplifies development, since only the methods of the Store (or module) need to be operated on each time, rather than the "_complete_" Store of Vuex. This in turn makes it easier to _code splitting_ and load only what is needed in each component. Yes, Pinia allows _code splitting_ in Webpack.
in Webpack.

### Mutations Removal

Due to the design of Pinia, mutations are no longer necessary. One of the initial goals of mutations in Vuex (and other libraries) was to be able to show state changes in Devtools. At the same time it was established as a necessary part of the Vuex workflow considered "good practice": Component calls action, action to mutation and mutation changes the state. The elimination of mutations has some implications in practice that we will describe later.

<div style="margin: 0 auto; max-width: 700px;">

![Graphical description of the architectural differences between Vuex and Pinia.](/img/content/pinia-vuex-vuex-pinia-comp.png)

</div>
<div class="text-center" style="margin: -70px 0 20px;">
  <small>Graphical description of the architectural differences between Vuex and Pinia.</small>
</div>

In addition, the following characteristics of Pinia should be noted:

- **Full TypeScript integration**
- **Very lightweight**, weighs about 1kb
- **Support for _Vue devtools_**
- **Support for SSR**

## Pinia in action

The following code snippets show the definition of a Vuex module and its translation into a Pinia store:

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
      commit("increment");
    },
  },
  mutations: {
    increment(state, payload) {
      state.count++;
    },
  },
};

export default storeModule;
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
      this.count++;
    },
  },
});
```

As you can see, there are no excessive differences in the definition syntax of a Pinia Store vs. a Vuex module: Neither the actions nor the mutations need as parameter the state or the payload, but little else. It is worth mentioning that the definition of the Vuex module should be followed by its import into the store so that it can be used. In Pinia this definition is **sufficient** and can already be used in the components. In any case, beyond the definition of a Store in Pinia and the slight differences with respect to Vuex, the important changes come in the use of the Stores.

On the one hand, the invocation of the store is performed directly on the components. Because of this, it is not necessary to call all the stores in the invocation to _**createApp**_ in `main.ts`. The call to _**createPinia**_ just creates an instance of Pinia, nothing else.

```jsx
import { useCounterStore } from "../stores/counterStore";
```

On the other hand, access to state, getters and actions is done differently, since there are specific helpers to map them to options API).

The calls with **Options API** are more or less similar to those executed in Vuex if the helpers were used.

```jsx
import { mapState, mapActions } from "pinia";
import { useCounterStore } from "../stores/counterStore";

export default {
  computed: {
    // First is state, second a getter
    ...mapState(useCounterStore, ["counter", "doubleCount"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["increment"]),
  },
};
```

You can also rename the methods or state in the component:

```jsx
import { mapState, mapActions } from "pinia";
import { useCounterStore } from "../stores/counterStore";

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
};
```

The advantage of Pinia is that the states can be used in a very simple way in components with **Composition API**:

```jsx
export default {
  setup() {
    const store = useCounterStore();

    const double = store.doubleCounter();

    const incremented = store.increment();

    return { store };
  },
};
```

### Migrating from Vuex to Pinia

In the Pinia documentation there is an [extensive guide](https://pinia.vuejs.org/cookbook/migration-vuex.html) detailing the steps to migrate a store from Vuex to Pinia. In any case, and once the concepts are clear, the migration is relatively simple as long as you are a bit tidy:

- **Folder restructuring**: From modules to Stores and removal of the main store.
- **Module conversion**: Modify syntax to convert them into Stores.
- **Mutations removal and conversion to actions.**
- **Modification of calls in components by adding helpers** (if applicable). If after the refactoring of the stores the name of the methods has been modified, aliases can be used to avoid touching more code than necessary.

In my case I have done the migration of a very simple project and it worked the first time. In my experience, the important thing in the migration process is to be systematic in all the steps. It is possible that temporarily errors may appear in the editor, but you have to wait until the end to check and verify that everything is correct.

## Conclusions

In my opinion, Pinia is a step forward in simplifying state management in projects with Vue (or another JS framework). It is easier to understand, since it does not have overlapping concepts such as mutation and action. At the same time the syntax of use is very simple and clear: the definitions of stores and mutations in Redux of 5 years ago are already far away. However, for projects that already have Vuex implemented or even projects in Vue 3 with Vuex, it is not a big step forward, although the migration in small applications is quite simple and pleasant.

## References

[https://blog.vuejs.org/posts/vue-3-as-the-new-default.html](https://blog.vuejs.org/posts/vue-3-as-the-new-default.html)

[https://vuejs.org/](https://vuejs.org/)

[https://pinia.vuejs.org/](https://pinia.vuejs.org/)

[https://pinia.vuejs.org/cookbook/migration-vuex.html](https://pinia.vuejs.org/cookbook/migration-vuex.html)

[https://www.youtube.com/watch?v=2KBHvaAWJOA&t=1183s](https://www.youtube.com/watch?v=2KBHvaAWJOA&t=1183s)

Photo by <a href="https://unsplash.com/@phienix_han?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Phoenix Han</a> on <a href="https://unsplash.com/s/photos/pineapple?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
