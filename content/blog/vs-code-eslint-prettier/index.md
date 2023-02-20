---
title: "Básicos para comenzar un proyecto en React - VS Code + ESLint + Prettier"
hero_title: "Básicos para comenzar un proyecto en React"
hero_subtitle: "VS Code + ESLint + Prettier"
published: true
date: "2020-02-16T18:46:00.000Z"
popular: true
taxonomy:
  category:
    - Articles
  tag:
    - JavaScript
    - React
hero_classes: "hero-tiny text-light title-h1h2 parallax overlay-dark-gradient"
hero_image: post-big.jpg
thumbnail: "post-small.jpg"
description: "Con la explosión de JavaScript como lenguaje han surgido nuevas herramientas para mejorar la calidad del código de nuestros proyectos."
---

Con la explosión de JavaScript como lenguaje de desarrollo web han surgido nuevas herramientas para mejorar la calidad del código de nuestros proyectos utilizando los principios de los primeros linters de C y tomando el relevo de los _mess detectors_ y los _code sniffers_. Estoy hablando de los _linters_ de JS, herramientas de programación para detectar código sospechoso en tiempo real.

Estas herramientas son una gran ayuda para crear un código más sólido y reusable. Un código con más calidad se traduce en menos tiempo depurando código y eso siempre es un plus.

En este artículo voy a describir cómo **configurar un proyecto de React** para usar en **Visual Studio Code**, **ESLint** como _linter_ y **Prettier** como formateador de código.

### ¿Qué es VS Code, ESLint y Prettier?

Con [Visual Studio Code](https://code.visualstudio.com/) voy a ser breve, ya que es uno de los editores de código más utilizados con JS, gratuito, totalmente configurable y con una gran cantidad de extensiones y plugins para hacer nuestro desarrollo más cómodo.

[ESLint](https://eslint.org/) es una herramienta de análisis de código estático que ayuda a encontrar patrones de código problemáticos o inconsistencias en el formato del código. Personalmente, me ha ayudado muchísimo para fijar conceptos de programación en ES6 (desde diferencias entre _let_ y _const_ hasta _arrow functions_), ya que te chiva todos los errores que tiene tu código _old skool_.

Por otra parte, [Prettier](https://prettier.io/) es una herramienta para formatear el código de modo consistente. Este plugin contiene múltiples configuraciones y una serie de reglas prefijadas para que al activar el plugin o al guardar el fichero (es una de sus posibles configuraciones) el código quede con un formato correcto. Es posible enlazar las reglas fijadas con ESLint en Prettier de modo que el desarrollo sea más rápido y así contar con las ventajas y la potencia de ESLint.

Por defecto ESLint trae unas configuraciones básicas con reglas para formatear el código. Estas reglas se pueden añadir en el fichero de configuración _eslintrc_, pero están centradas en JavaScript y no en React. Una forma muy fácil de que el código cumpla con unos estándares estrictos es usar una guía de estilos ya desarrollada. Entre las más utilizadas se encuentra la de [AirBnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb). Tiene mucha documentación, ejemplos claros y está en constante revisión.

### Instalación

Si tu proyecto todavía no tiene instalado ESLint será necesario instalarlo

```bash
npm install --save-dev eslint babel-eslint
```

También es necesario instalar tanto el paquete de configuraciones de AirBnb como el de configuraciones de ESLint con Prettier

```bash
npx install-peerdeps --dev eslint-config-airbnb
npm install --save-dev --save-exact prettier-eslint eslint-config-prettier
```

Para este caso utilizamos npx en lugar de npm. Npx permite ejecutar un paquete de Npm sin tener que instalarlo previamente en local como paquete global. Una buena forma de no cargar el entorno local con módulos y a la vez tenerlos actualizados.

### Configuración

Una vez instalados los módulos necesarios hay que añadir las configuraciones en el fichero .eslintrc.js

```javascript
module.exports = {
  parser: "babel-eslint",
  extends: ["airbnb", "prettier"],
  plugins: ["react", "jsx-a11y", "import"],
}
```

Para finalizar será necesario modificar la configuración de VS Code para que funcione correctamente con las configuraciones de ESLint y Prettier. Para eso abrimos el panel de preferencias (⌘ + ,) y o bién en las pestañas o mediante el buscador realizamos los siguientes cambios:

```json
   "editor.formatOnSave": true,
    "javascript.format.enable": false,
    "prettier.eslintIntegration": true
```

Finalmente solo toca probarlo guardando el fichero (⌘ + s) y a disfrutar de un código de mejor calidad y más legible :)

<hr/>

Photo by Paul Esch-Laurent on [Unsplash](https://unsplash.com/)
