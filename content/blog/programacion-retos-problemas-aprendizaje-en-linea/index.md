---
title: "Enseñar a programar: Retos, problemas y estrategias de la docencia y
  aprendizaje en línea"
date: 2020-11-11T11:48:36.959Z
published: true
hero_title: Enseñar a programar
hero_subtitle: Retos, problemas y estrategias de la docencia y aprendizaje en línea
hero_image: docencia-hero.jpg
thumbnail: docencia-thumb.jpg
taxonomy:
  category:
    - Articles
  tag:
    - Teaching
    - JavaScript
---
La enseñanza de un lenguaje de programación puede suponer un reto tanto para los alumnos como para los docentes, si se prueba por primera vez como si se es un desarrollador experimentado que quiere aprender un nuevo lenguaje o paradigma. Se parte de un mundo relativamente ajeno a lo cotidiano, todo el mundo utiliza la tecnología, pero no todos entienden cómo funciona. Hay una gran cantidad de conceptos que son necesarios compartir, una serie de ideas que deben estar claras incluso antes de sentarse delante de un ordenador y ponerse a practicar. 

Aunque es cierto que en el aprendizaje más o menos todos los que pueden leer este blog tienen experiencia, en la enseñanza no es algo tan habitual. Este año tengo el gusto de participar como profesor colaborador en la [UOC](https://www.uoc.edu). En la asignatura en la que participo, los alumnos tienen como objetivo aprender los conceptos básicos de programación en JavaScript. En estas semanas estoy aprendiendo tanto como los alumnos y a la vez poniendo en cuestión varias ideas que tenía en cuanto a cómo abordar el aprendizaje de un lenguaje de programación.

Sin entrar en muchos detalles se trata de una asignatura englobada dentro de un título de Máster. El modelo de docencia es 100% online. Para esta asignatura los alumnos tienen una serie de recursos a su disposición y una calendarización de los contenidos que deben preparar a lo largo del semestre. Para poner a prueba los conocimiento existen una serie de prácticas que el alumno debe hacer para evaluar sus conocimientos. Para ayudar a la resolución de problemas cuentan tanto con un foro como con un buzón de correo.

Mediante la lectura de los mensajes que he recibido, como de el código que he tenido que corregir, me he encontrado con muchas preguntas con las que no contaba que recibiría, una aproximación a los problemas totalmente sorprendente para mi y mucho código que hace lo que se pide pero de un modo sorprendente. Si bien tenía claro que iba a tener cierta disparidad en el modo de hacer las cosas (ES5, ES6, etc...) no me esperaba algo así...

<div style="margin: 0 auto; max-width: 400px;">

![Expectativa vs realidad](teaching-idea.jpg)

</div>

<div class="text-center" style="margin: -15px 0 20px;">
  <small>Expectativa vs realidad</small>
</div>

Una vez asimilada la sorpresa he tratado de analizar por qué ocurre esto, he leído un poco sobre el tema y me ha dado ideas para agrupar y relacionar esos conceptos con mi experiencia personal. Por una parte hay que tener en cuenta los retos que supone la docencia en este tipo de campos, pero también los que están relacionados con el modelo de aprendizaje y el tipo de alumno al que se dirige.

## Retos de la docencia online

Los siguientes retos pueden aplicarse a todos los tipos de docencia, pero es cierto que el modelo online tiene ciertas particularidades que la hacen un poco diferente a la docencia convencional presencial.

### Background del alumnado

El alumno tiene como punto de partida su conocimiento actual de programación. El ejercicio mental que puede hacer devops con 15 años de carrera puede ser muy diferente a un estudiante recién salido de la carrera o un frontend con experiencia básica en programación en JavaScript. Esto se ve reflejado en cosas tan sencillas como si el código entregado está formateado o no, si el código utiliza patrones de diseño o se centra en lo que muestra en pantalla con console.log().

### Falta de herramientas para resolución de problemas y errores

Esto es una de las cosas más importantes y siempre se suele tener como punto débil lo mismo. Los programas de formación se suelen centrar en cómo aprender a programar, teoría, patrones, etc…pero la formación que se da sobre cómo resolver problemas de ejecución, usar el debugger, acotar el área de un error, etc…es mínima y no se suele poner en práctica. Y esto es algo que se pone de manifiesto cuando te enfrentas a un error resolviendo un problema que no dominas del todo: Es mucho más sencillo trazar los errores, los valores de tus variables, el contexto en el que está sabiendo depurar correctamente que mediante printf, console.log, echo…

### Objetivo personal del alumnado

También es importante tener en cuenta qué pretende conseguir el alumno con ese aprendizaje. No es lo mismo un chico recién salido de la carrera que quiere ampliar sus estudios para iniciar su carrera laboral, que un adulto de más de 40 años que quiere ampliar conocimientos, o un jubilado que quiere seguir aprendiendo. Esto se ve reflejado en el tiempo que le dedican al estudio y práctica, y al final en la mejor o peor calidad de los ejercicio entregados.

### Sesgos en el profesorado

Por supuesto todos estos factores que afectan al alumnado también afectan al profesorado. El profesor tiene sus propios sesgos, ya que parte de un punto en el que conoce tanto el tema que quiere tratar como las respuestas, pero por el camino puede olvidar todo el aprendizaje necesario para llegar a ese punto. En ese camino intermedio es donde pueden surgir los problemas, ya que el profesor da por obvio cierta información con la que no necesariamente cuenta el alumno. O por otra parte se puede pasar por alto tanto el background, formación y objetivo de los alumnos, ofreciendo unos contenidos demasiado complejos (o demasiado sencillos), deteniendo el proceso de aprendizaje e invitando a que los alumnos "tiren la toalla".

### Limitaciones del modelo de aprendizaje

Para terminar, y dado que el modelo es el de una universidad a distancia existen varios problemas relacionados este tipo de enseñanza. Los alumnos tienen diferentes husos horarios y trabajan en las asignaturas a diferentes horas y días a la semana. Esto afecta a cómo los alumnos pueden poner en común sus problemas y el tiempo de espera hasta que se hace realidad, ya que no es posible resolver las dudas en el mejor momento (cuando surgen) y tienen que esperar o bien a que se responda en el foro o vía email o hasta que se concrete una tutoría online.

Teniendo todos estos factores en cuenta se pueden seguir varias estrategias para aliviar el mayor número de problemas y darle solución. No creo que sea una receta infalible, pero sí puede mitigar el problema y ayudar a los alumnos a avanzar.

## Estrategias para compartir el conocimiento

Existen infinidad de estrategias y técnicas para fomentar el aprendizaje. Se suelen dividir por tipología o por campos o áreas de conocimiento ya que el proceso mental a realizar es diferente en función del trabajo que hay que hacer: no es igual aprender o memorizar un dato histórico que aprender a sumar. En este caso las siguientes técnicas, aunque aplicables a otros tipos de aprendizaje se centran en el aprendizaje mediante resolución de problemas.

### Divide y vencerás

Al igual que para resolver el problema una de las mejores estrategias es **dividirlo** en problemas más pequeños, de cara a compartir conocimiento una buena estrategia es dividir el problema que se pretende resolver en varios problemas más pequeños y hacer que el proceso sea incremental. Tiene por contra que el alumno debe seguir un proceso lineal y si se "atasca" en una parte no puede avanzar, pero permite fijar conceptos de un modo más sencillo.

### Extracción de información de las preguntas

Al enunciar un problema es importante que quede muy claro y diferenciado **qué hay que hacer** de **cómo se debería hacer**. El alumno debe comprender primero el problema de un modo abstracto para luego tratar de implementarlo y resolverlo utilizando las herramientas de las que disponga o haciendo la aproximación desde los conocimientos que ya posea. Esto permite al alumno no perder el foco del objetivo final, ya sea con un ejemplo de respuesta, un listado de especificaciones o un test.

### Aislar primero los conceptos nuevos, integrarlos posteriormente con los previos

En ese proceso de división de problemas y extracción de información es importante definir los nuevos conceptos y relacionarlos continuamente con otros que ya conozcan o se de por hecho que conocen, ya que les va a permitir enlazar la nueva información y facilitar aplicar estos nuevos conocimientos tanto a los problemas propuestos como a otros problemas.

Estos son solo unos pequeños consejos basados en mi breve experiencia, pero que pueden dar pistas de un modo bastante general y abstracto sobre cómo enfocar tanto el aprendizaje como la enseñanza de un nuevo lenguaje de programación. A su vez hay varias técnicas de aprendizaje como el aprendizaje cooperativo y el aprendizaje mediante descubrimiento, pero quería centrarme en lo relacionado con el aprendizaje mediante resolución de problemas, ya que es el modelo de aprendizaje de la asignatura que imparto.

## Referencias

Derek Sleeman. 1986. The challenges of teaching computer programming. Commun. ACM 29, 9 (Sept. 1986), 840–841. DOI:[https://doi.org/10.1145/6592.214913](https://doi.org/10.1145/6592.214913)

O. Oroma, Josephat & Wanga, Herbert & Ngumbuke, Fredrick. (2012). CHALLENGES OF TEACHING AND LEARNING COMPUTER PROGRAMMING IN DEVELOPING COUNTRIES: LESSONS FROM TUMAINI UNIVERSITY. 10.13140/2.1.3836.6407.

Cole, Robert W.. Educating Everybody's Children : Diverse Teaching Strategies for Diverse Learners, Revised and Expanded, Association for Supervision & Curriculum Development, 2008. ProQuest Ebook Central, [https://ebookcentral.proquest.com/lib/bibliouocsp-ebooks/detail.action?docID=350251](https://ebookcentral.proquest.com/lib/bibliouocsp-ebooks/detail.action?docID=350251).

Powers, K. D., & Powers, D. T. (1999). Making sense of teaching methods in computing education. FIE’99 Frontiers in Education. 29th Annual Frontiers in Education Conference. Designing the Future of Science and Engineering Education. Conference Proceedings (IEEE Cat. No.99CH37011, Frontiers in Education Conference, 1999. FIE ’99. 29th Annual, 1. [https://doi-org.biblioteca-uoc.idm.oclc.org/10.1109/FIE.1999.839224](https://doi-org.biblioteca-uoc.idm.oclc.org/10.1109/FIE.1999.839224)

Photo by [Kimberly Farmer](https://unsplash.com/@kimberlyfarmer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/school?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)