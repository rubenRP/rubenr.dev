---
title: "Escribir cosas no es suficiente"
subtitle: "Sobre la importancia de una documentación organizada y de calidad"
date: 2023-03-06T00:00:00+00:00
published: true
description: En este post hablaremos sobre la importancia de tener una buena documentación y por qué mantener la documentación técnica de un modo estructurado es crucial.
image: /img/content/documentation-tips-hero.jpg
taxonomy:
  category:
    - Articles
  tag:
    - Development
    - Documentation
hreflang:
  en: /documentation-tips
---

> You can read this article also in [English](/documentation-tips).

En la actualidad, las grandes (y no tan grandes) empresas de tecnología representan la punta de lanza de la innovación y los avances tecnológicos. Sin embargo, este rápido ritmo de desarrollo tiene un reto no fácil de resolver y del que muchas empresas no se percatan a tiempo: la documentación. En este post hablaremos sobre la importancia de tener una buena documentación y por qué mantener la documentación técnica de un modo estructurado es crucial.

Quien más y quien menos está acostumbrado tanto a leer como a escribir documentación. Las ventajas de que un proyecto esté documentado son bien conocidas:

- Da autonomía a los desarrolladores y aumenta su _performance_.
- Sirve de punto de entrada para el software o proyectos a los nuevos integrantes, suavizando la curva de aprendizaje.
- Facilita la transferencia de conocimiento entre miembros del equipo.
- Sirve de referencia a usuarios finales para comprender el funcionamiento del software, su configuración, su estado actual y sus posibles mejoras.

Sin embargo, también es habitual ver ejemplos en los que la documentación existe pero es difícil de encontrar; una vez encontrada (tras un rato de búsqueda y preguntar a varias personas de de diferentes equipos) está desactualizada o refiere a documentos que ya no existen o se encuentran en otro lugar (o plataforma, posiblemente con un acceso diferenciado).

Efectivamente, si es un caso puntual se puede modificar la documentación o enlazarla correctamente, pero, ¿y si es el funcionamiento habitual?

Por supuesto esto tiene un fuerte impacto tanto para el equipo como para el funcionamiento de la compañía, se aumenta el tiempo invertido para navegar por las estructuras de la compañía, se genera frustración y como consecuencia, el desconocimiento de la información se puede ver reflejado en la calidad del código. A su vez, esto no es un caso exclusivo del ámbito profesional, también se puede dar en un [proyecto Open Source](https://ieeexplore.ieee.org/document/9978174).

## Documentar por si mismo no sirve de nada

Por supuesto que es vital documentar lo que hace un proyecto o organización y cómo lo hace. Pero tan importante es eso como mantenerla organizada para que el equipo pueda realizar su trabajo. Por tanto, para que documentar sea útil es necesario que esta documentación sea:

- **Centralizada**: Toda la documentación debe encontrarse en un único lugar. También se puede dar la situación en la que se utilicen varias herramientas de documentación dependiendo del tipo de perfil de la empresa que lo utilice. En ese caso, el punto de partida debe ser igualmente único y que en función de cada caso derive en la herramienta que se necesite.
- **Accesible**: La documentación debe estar pensada para ser buscada, por lo que debe responder a las preguntas que los usuarios realicen, tanto en una búsqueda como como en su contenido.
- **Actualizada**: La información debe estar actualizada. A su vez, se deben implementar en el proyecto mecanismos para que la actualización de la documentación sea parte del flujo de trabajo habitual.

## Existen diferentes formas de documentación

Habitualmente la documentación se divide entre documentación de **producto** y documentación de **proceso**. No todo es un RFC o un manual de uso, no todos son blancos o negros. También puede existir snippets de código, o pequeños paso a paso para procedimientos concretos. Quizá una pequeña tabla con información que puede ser muy relevante si se encuentra **organizada y contextualizada**. Incluso diagramas o menús de navegación que puedan dirigir hacia un lugar o otro dentro de la propia documentación, también forma parte de la documentación. Por suerte las herramientas de documentación permiten crear múltiples formatos de documentos.

### No todo es software, la documentación sobre el funcionamiento de la compañía es importante

Aunque se utilicen herramientas específicas para ello, la información sobre los procesos que se llevan a diario en la compañía, o relacionados con los recursos humanos también son una forma de documentación. Por tanto, merecen ser tratados del mismo modo y deben cumplir también los principios de centralización accesibilidad y actualización.

## Estrategias de organización y gestión

A continuación, resumo unos consejos claros y sencillos para implementar como práctica habitual de cara a gestionar documentación técnica. Como siempre, no son leyes fijas y es importante que se ajusten al funcionamiento del proyecto o compañía, pero es bueno tenerlo en cuenta.

### Uso de landing pages y diagramas de procesos

Un buen punto de partida para el portal de documentación o la herramienta que se use es el uso de _landing pages_ donde se explique claramente qué contiene esa base de conocimiento y cómo usarla. Parece una tontería, pero cuando se lleva mucho tiempo trabajando con esa herramienta se llega a olvidar que los que aterrizan por primera vez en ella pueden no entenderla.

### Explicar con ejemplos tipos de documentación y cómo se debe crear

A su vez, también es importante contar con un documento donde se defina los tipos de documentos que te puedes encontrar en el sistema de documentación, para qué casos se deben usar, ejemplos de los mismos y qué tener en cuenta para redactarlos.

### Granularidad de la información

Una idea para la gestión de la información es establecer niveles de granularidad, y que el usuario vaya navegando entre documentos, profundizando más y más hasta llegar al nivel de conocimiento que necesita (de menos técnico a más técnico, de más estratégico a menos estratégico), como si de un árbol de conocimiento se tratara.

Para conectar información entre niveles “horizontales”, dentro del árbol de conocimiento se puede hacer uso de tags en el que se relacionen, proyectos, tecnologías implicadas, clientes o equipos de trabajo relevantes.

Si, dentro de la navegación de un usuario se llega a las “hojas” dentro del árbol de información puede ser interesante conectarlo con otro tipo de herramientas de documentación. Por ejemplo, si has llegado al final del conocimiento de descripción de una API, se puede enlazar al link donde se encuentre el Swagger de dicha API.

### Consistencia

Independientemente de las reglas o estándares que se utilicen para la generación de documentación es muy importante la consistencia entre documentos, ya que eso dará solidez a la plataforma de información y facilitará el uso de la misma a los usuarios mediante el hábito, ya que saben qué pueden esperar de un documento antes de verlo. Una práctica muy útil para mantener la consistencia es el uso de plantillas. De este modo, cualquier desarrollador que se enfrente a la creación de un nuevo documento tiene un punto de partida con referencias claras a qué tiene que contar y cómo hacerlo.

### ¿Documentation manager?

Quizá suene exagerado, pero en compañías muy grandes es interesante valorar la existencia de un rol (no se si existe algo similar, no he visto referencias) que se encargue de controlar el uso y forma de la documentación, de si se cumplen las reglas y normas establecidas, y la mantenga actualizada para que sea útil para todo el mundo.

## Herramientas

Llegados a este punto puede que exista la pregunta sobre qué herramienta específica utilizar o cuál es mejor para mantener una documentación utilizando los consejos previamente descritos. La respuesta es sencilla: Cualquiera puede servir. Es más importante la organización y gestión de la documentación en sí que la herramienta. Existen herramientas específicas como Confluence, Read the Docs, Scribe o wikis de Gitlab y Github, y aplicaciones genéricas como Notion. Cualquiera puede servir si se gestiona correctamente. Incluso se puede crear una herramienta interna y específica de documentación con Gatsby o Nuxt.

## Referencias

[How 5 Companies Use Internal Documentation To Scale More Efficiently - Tettra](https://tettra.com/article/internal-documentation/)

[Approaches for Documentation in Continuous Software Development](https://csimq-journals.rtu.lv/article/view/csimq.2022-32.01/3016)

[What Is Software Documentation? Types, Benefits & Best Practices](https://www.proprofskb.com/blog/software-documentation-types-and-best-practices/)

[Why Software Documentation Matters: The Tools You Need | Iterators](https://www.iteratorshq.com/blog/why-software-documentation-matters-the-tools-you-need/)

[The importance of software documentation tools](https://www.linkedin.com/pulse/importance-software-documentation-tools-ekaterina-novoseltseva/)

[Agility and system documentation in large-scale enterprise system projects: a knowledge management perspective](https://www.sciencedirect.com/science/article/pii/S1877050921002234?via=ihub)

[How to facilitate inter-organizational knowledge sharing: The impact of trust](https://www.sciencedirect.com/science/article/pii/S0378720614000408)

Photo by [Annie Spratt](https://unsplash.com/@anniespratt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/photos/5cFwQ-WMcJU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
