---
title: "GitHub Copilot"
date: 2021-09-20T00:00:00+00:00
published: true
subtitle: Análisis y reflexiones tras 1 mes de uso
description: Reflexiones acerca de esta nueva herramienta y las conclusiones que he sacado.
image: /img/content/github-copilot-hero.jpg
thumbnail: /img/content/github-copilot-thumb.jpg
taxonomy:
  category:
    - Articles
  tag:
    - GitHub
    - Open Source
    - Tools
    - JavaScript
hreflang:
  en: /github-copilot
---

> You can read this article also in [English](/github-copilot).

A principios de julio, [GitHub presentó](https://www.fastcompany.com/90653878/github-copilot-microsoft-openai-coding-tool-backlash) en beta privada la que a mi parecer es una de las tecnologías más interesantes del año: GitHub Copilot, una herramienta de autocompletado asistido por IA que ha generado titulares y opiniones en todos los ámbitos.

Si bien todavía está en Beta Pública y ni el desarrollo ni el entrenamiento de la IA está completado, he tenido acceso tanto a la herramienta como al repositorio y he estado utilizándolo desde hace más de un mes con Angular, Vue.js y GatsbyJS (React). Estás son mis reflexiones acerca de esta nueva herramienta y las conclusiones que he sacado. Pero antes de exponer mi opinión, aquí va un breve resumen sobre qué es GitHub Copilot.

## ¿Qué es GitHub Copilot?

GitHub Copilot es un sistema basado en Inteligencia Artificial, que ayuda, mediante sugerencias a completar el código que se desarrolla normalmente en un editor de código. El uso de IA es uno de los factores diferenciadores respecto otras tecnologías de autocompletado clásicas como Emmet o el propio autocomplete de VS Code o WebStorm, ya que no solo te ayuda a completar la palabra. Se nutre del contexto para resolver líneas completas o incluso funciones. Para ello GitHub hace uso de Codex, el nuevo sistema de IA de OpenAI específico para nutrir el servicio Copilot.

![Arquitectura de GitHub Copilot](/img/content/github-copilot-github-arch.png)

Esta idea no es la primera ni única para el autocompletado en editores de código. Existen otras alternativas similares como Tabnine que no he podido probar, pero sí que creo que es la primera que parte desde el Open Source, está bajo el paraguas de una megaempresa como es GitHub + Microsoft y no tiene (aparentemente) un objetivo económico por sí mismo.

## ¿Cómo es trabajar con GitHub Copilot?

Una vez recibida la invitación sólo es necesario instalar la extensión de GitHub Copilot y loguearse. Tras esto, la extensión se conecta al sistema de Copilot y empiezan a aparecer las sugerencias de código.

- Comienzas a escribir código
- El código que escribes proporciona un contexto a Copilot. Los comentarios mejoran el contexto, por lo que escribir un comentario explicando lo que se pretende ayuda.
- Copilot y su IA nos proporciona sugerencias basadas en el código existente en GitHub, aunque no es el código "exacto" de GitHub. Es código "basado" en el código existente en GitHub (es un detalle importante)
- Aparece una sugerencia ideal, aunque también se proporcionan alternatvas. Haciendo click en _tab_ se fija el código con la sugerencia.

![Copilot example](/img/content/github-copilot-copilot-example.gif)

Trabajar con Copilot no es muy diferente a hacerlo con IntelliSense, ya que ya tengo la dinámica de esperar a que aparezca la recomendación en muchos casos, pero Copilot es infinítamente más completo.

Los procesos en los que me ha parecido más util son los siguientes:

- **Secuencias de código repetitivas**, como la declaración de los elementos de un objeto, llamadas a interfaces, inicialización de ficheros con template, inicialización de funciones, etc...
- **Expresiones regulares**, ya que no soy muy bueno memorizando el formato de este tipo de expresiones regulares. Con GItHub Copilot se resuelve fácilmente con un comentario declarando qué quieres que haga la expresión regular.
- **Funciones Map/Reduce**. Como con las expresiones regulares, me cuesta un poco y con Copilot es facilísimo darle forma. Con funciones sencillas sorprende la precisión que tiene, con funciones complejas necesitas manipular el contenido de la función pero el código que arroja ya es útil y me facilita mucho el trabajo.
- **Llamadas a APIS y creación de servicios**. Se acelera bastante la escritura ya que te crea el template y tu solo tienes que rellenar lo que necesites "a golpe de TAB"

En cualquier caso, e independientemente tus capacidades o de las cosas que recuerdas agiliza mucho el desarrollo, ya que completa código con funciones rápidas de las que se olvida el formato. También es útil con los métodos JS de nueva incorporación, evitando salir del editor y buscando en Stack Overflow, por ejemplo.

En el tipo de ficheros donde es más inutil pero sí más sorprendente es en ficheros MD. Copilot es capáz de obtener el contexto del documento, sobre todo si se trata de documentación, atendiendo a los titulares. Los párrafos que ofrece como sugerencia suelen ser disparatados en algún caso ya que no tiene nada que ver con lo que se pretende contar, pero en algún caso dónde se pretende explicar algo genérico o con preámbulos ofrece sugerencias con bastante sentido, lo cual asusta un poco.

## No para todos los ambitos

Como he comentado, Copilot ha sido y está siendo entrenado utilizando repositorios Open Source, pero parte del proceso de recomendación consiste en enviar el contexto a Copilot para que las recomendaciones generadas sean óptimas. A su vez, las correcciones que se hagan sobre las recomendaciones también se envían a Copilot para mejorar el sistema. Esto puede tener ciertas limitaciones para usos en ámbito empresarial o para proyectos en los que la seguridad sea un pilar. En un futuro se puede dar la situación en la que empresas puedan verse obligadas a limitar su uso ya que no quieran nutrir a la IA con código propietario.

## Una nueva era de lenguajes de programación

Desde mi punto de vista este tipo de tecnologías abre la puerta a una nueva era de lenguajes de programación de más alto nivel, más verbosos, más usables por perfiles menos técnicos y que acercarán la programación a todo tipo de públicos, ya que mediante el uso de IA se puede convertir el lenguaje natural en un código más formal

## Conclusiones finales

GitHub Copilot es una herramienta estupenda de ayuda al desarrollo, es rápida, su porcentaje de acierto es muy alto y es mucho más que un sistema de autocompletado. A mi me ayuda sobre todo a centrarme en el editor de código y no buscar en internet esos métodos que no soy capaz de memorizar o a completar líneas repetitivas como seteo de atributos y ese tipo de cosas. En ese tipo de ámbitos se comporta fenomenal. A su vez es una buena herramienta de aprendizaje, ya que las sugerencias abren la puerta a métodos, estructuras o formatos en los que uno no tiene experiencia, por lo que doble beneficio.

## Referencias

<https://copilot.github.com>

<https://www.fastcompany.com/90653878/github-copilot-microsoft-openai-coding-tool-backlash>

<https://www.theregister.com/2021/09/02/github_copilot_banned_words_cracked/>

<span>Photo by <a href="https://unsplash.com/@synkevych?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Roman Synkevych</a> on <a href="https://unsplash.com/s/photos/github?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
</span>
