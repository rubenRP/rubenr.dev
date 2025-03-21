---
title: "Basics to start a project in React"
subtitle: "VS Code + ESLint + Prettier"
published: true
date: "2020-02-16T18:46:00.000Z"
popular: true
taxonomy:
  category:
    - Articles
  tag:
    - JavaScript
    - React
image: /img/content/vs-code-eslint-prettier-post-big.jpg
description: "With the explosion of JavaScript as a web development language, new tools have emerged to improve the code quality of our projects."
hreflang:
  es: /es/vs-code-eslint-prettier
---

> You can read this article also in [Spanish](/es/vs-code-eslint-prettier).

With the explosion of JavaScript as a web development language, new tools have emerged to improve the code quality of our projects using the principles of the first C linters and taking over from mess detectors and code sniffers. I'm talking about JS linters, programming tools to detect suspicious code in real-time.

These tools are a great help in creating more solid and reusable code. Higher quality code translates into less time debugging code, which is always a plus.

In this article, I will describe how to configure a React project to use Visual Studio Code, ESLint as a linter, and Prettier as a code formatter.

### What is VS Code, ESLint, and Prettier?

I'll be brief with [Visual Studio Code](https://code.visualstudio.com/) since it's one of the most widely used code editors with JS, free, fully configurable, and with a large number of extensions and plugins to make our development more comfortable.

[ESLint](https://eslint.org/) is a static code analysis tool that helps find problematic code patterns or inconsistencies in code formatting. Personally, it has helped me a lot to fix programming concepts in ES6 (from differences between let and const to arrow functions), as it shows you all the errors in your old school code.

On the other hand, [Prettier](https://prettier.io/) is a tool for formatting code consistently. This plugin has multiple configurations and a set of preconfigured rules so that when the plugin is activated or the file is saved (one of its possible configurations), the code is properly formatted. It is possible to link the fixed rules with ESLint in Prettier so that development is faster and thus take advantage of the benefits and power of ESLint.

By default, ESLint comes with some basic settings with rules for formatting code. These rules can be added to the _eslintrc_ configuration file, but they are focused on JavaScript and not on React. An easy way to ensure that the code complies with strict standards is to use an already developed style guide. One of the most used is [AirBnb's](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb). It has a lot of documentation, clear examples, and is constantly reviewed.

### Installation

If your project still does not have ESLint installed, it will be necessary to install it

```bash
npm install --save-dev eslint babel-eslint
```

It is also necessary to install both the AirBnb configuration package and the ESLint configuration package with Prettier

```bash
npx install-peerdeps --dev eslint-config-airbnb
npm install --save-dev --save-exact prettier-eslint eslint-config-prettier
```

In this case, we use npx instead of npm. Npx allows you to run an Npm package without having to install it locally as a global package beforehand. A good way not to load the local environment with modules and at the same time keep them updated.

### Configuration

Once the necessary modules are installed, the configurations must be added to the .eslintrc.js file

```javascript
module.exports = {
  parser: "babel-eslint",
  extends: ["airbnb", "prettier"],
  plugins: ["react", "jsx-a11y", "import"],
};
```

Finally, it will be necessary to modify the VS Code configuration so that it works correctly with ESLint and Prettier configurations. To do this, we open the preferences panel (⌘ + ,) and either in the tabs or through the searcher, we make the following changes:

```json
   "editor.formatOnSave": true,
    "javascript.format.enable": false,
    "prettier.eslintIntegration": true
```

Finally, all that's left is to try it out by saving the file (⌘ + s) and enjoy better quality and more readable code :)

---

Photo by Paul Esch-Laurent on [Unsplash](https://unsplash.com/)
