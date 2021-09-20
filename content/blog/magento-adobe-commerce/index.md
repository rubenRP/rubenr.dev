---
title: "De Magento Commerce a Adobe Commerce: ¿Qué ha pasado? Crónica y opinión"
date: 2021-04-28T08:30:00.000Z
published: true
hero_title: De Magento Commerce a Adobe Commerce
hero_subtitle: ¿Qué ha pasado? Crónica y opinión.
description: Ya se ha escrito y opinado largo y tendido sobre el tema. En este post ofrezco mi punto de vista sobre la evolución de Magento estos años.
thumbnail: thumb.jpg
taxonomy:
  category:
    - Articles
  tag:
    - Magento
    - Open Source
---

<div class="columns" style="justify-content: center">
<div class="column col-6 col-sm-10">

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">We are now officially consolidating the branding of the licensed commerce product from Magento Commerce and Adobe Commerce Cloud to the single brand of Adobe Commerce. Read more: <a href="https://t.co/LWzx7g0ANT">https://t.co/LWzx7g0ANT</a><a href="https://twitter.com/hashtag/AdobeCommerce?src=hash&amp;ref_src=twsrc%5Etfw">#AdobeCommerce</a> <a href="https://t.co/ingpC10N0M">pic.twitter.com/ingpC10N0M</a></p>&mdash; Adobe Commerce (@AdobeCommerce) <a href="https://twitter.com/AdobeCommerce/status/1384907699272421377?ref_src=twsrc%5Etfw">April 21, 2021</a></blockquote>

</div>
</div>

> You can read this article also in [English](https://rubenr.dev/en/blog/magento-adobe-commerce).

> **Disclaimer**: Esto es un artículo de opinión

Todo comenzó con este tuit de Adobe en el que informaba del rebranding de Magento Commerce como Adobe Commerce y con ello me percaté de que el handle [@magento](https://twitter.com/magento) había sido bloqueado y abandonado por Adobe en favor de [@AdobeCommerce](https://twitter.com/AdobeCommerce). Ya se ha escrito y opinado largo y tendido sobre el tema, pero también me gustaría ofrecer mi punto de vista sobre el asunto.

Aunque el movimiento tiene todo el sentido del mundo no pude evitar pensar como se estaba diluyendo una historia de la que he podido formar parte y en la que pensé que la comunidad era la porción de la ecuación que aportaba valor a la plataforma. El hecho es que los propietarios tienen otro punto de vista al respecto.

En los últimos años se ha visto como Magento se ha ido abandonando a una serie de decisiones que poco tiene que ver con software y desarrolladores, si no más bien a qué encaje tiene la tecnología dentro de la compañia y sus competidores.

Mis inicios como desarrollador Magento se remontan 2015, cuando era propiedad de eBay. No tenía gran experiencia como desarrollador y no conocía mucho de eCommerce, pero Magento 1 era una plataforma sólida con una gran comunidad de desarrolladores y un ecosistema de colaboración y eventos que era la envidia del resto de proyectos Open Source.

A finales de ese año se [presentó Magento 2](https://magento.com/blog/technical/magento-2-merchant-beta-release) y poco después se oficializó la [compra de Magento por parte de Permira](https://web.archive.org/web/20151109034401/http://magento.com/letter-from-our-ceo), un fondo de inversión que durante esos años empujó la colaboración mediante iniciativas de participación tanto a nivel analítico como de desarrollo. Magento 2.0 contaba con múltiples problemas y carencias, pero su punto fuerte era una comunidad comprometida que empujaba el desarrollo, y en cierta manera, lideraba la toma de decisiones de la empresa. Entiendo que eso a nivel empresarial podía ser un problema, pero el hecho es que las soluciones propuestas por parte de Magento no siempre eran del agrado de la comunidad y no se hacían a la velocidad que esta requería. A su vez, la curva de aprendizaje de Magento 2 y el alto coste de transición de Magento 1 a Magento 2 dejó atrás a múltiples desarrolladores y empresas.

Uno de los problemas que han lastrado durante todos estos años a Magento 2 ha sido el Front-End, ya que su arquitectura y tecnologías utilizadas hacía que el desarrollo fuera laborioso, complejo y estaba muy lejos de la nueva ola de desarrollo en la que JavaScript era el lenguaje nativo y React y Angular eran los frameworks a seguir. En 2017 se presentó PWA Studio como solución, pero eso no hizo más que ahondar los problemas: el desarrollo todavía continúa, no hay un plan específico de migración, el cambio requiere formación y por el camino han ido apareciendo diferentes soluciones. Si bien no son todas mejores que la propuesta de Magento, han sido más rápidas en el desarrollo y han ayudado a la fragmentación de la propia plataforma. Ahora los desarrolladores ya no siguen todos el mismo discurso, ya que hay múltiples opciones para trabajar con Magento. Aunque es algo enriquecedor, Magento no ha sabido absorber esa información y hacerla suya construyendo un software más sólido.

![De Magento Commerce a Adobe Commerce: ¿Qué ha pasado? Crónica y opiniones](hero.jpg)

Hace un momento mencioné que Magento aleccionó a la comunidad para mejorar la plataforma mediante múltiples iniciativas, ¿verdad? Bien, pues no puedo dejar de pensar en que eso fué una estrategia para elevar el valor de la empresa y venderla en el año 2018 a [Adobe por 1680 millones de dólares](https://news.adobe.com/news/news-details/2018/Adobe-to-Acquire-Magento-Commerce/default.aspx). En esos años la plataforma ganó en estabilidad y se corrigieron miles de errores por parte de la comunidad, por lo que es justo pensar (por lo menos en mi opinión) que se utilizó a la comunidad con fines mercantiles. Esta noticia sacudió el ecosistema como nunca, ya que Adobe era una compañia de un tamaño equiparable al de eBay en sus días (de hecho, mucho mayor), y aquellos años fueron conocidos como los años oscuros de eBay. Las reaciones se multiplicarion por las redes sociales, y aunque había todo tipo de opiniones, todos tenían claro que había cosas que iban a cambiar. En estos dos años se han desencadenado múltiples eventos que han hecho perder muchísima fuerza a la comunidad. La salida de muchos líderes y puestos ejecutivos de Magento sólo hicieron patente que algo estaba ocurriendo, pero la comunidad también se estaba moviendo (el equipo de _contributors_ y _mantainers_ también se ha visto mermado): [Shopware](https://www.shopware.com/en/) apareció como una solución más sólida, la transición desde Magento era sencilla por la arquitectura utilizada y el proyecto contaba con una idea de comunidad de desarrolladores que Magento aparentemente ya no compartía, por lo que han sido muchos desarrolladores los que han adoptado esta tecnología y comunidad con gran interés. Por otra parte, Adobe ha acelerado la integración en su ecosistema y sus servicios pero ha seguido sin resolver los problemas que lastran la plataforma desde hace años (PWA Studio entre ellos).

Estos cambios han acelerado el proceso de degradación que ya existía previamente, y ha dejado el proyecto en un punto, que si bien no tengo claro que sea de no-retorno, requiere de mucho trabajo para volver a encauzar, por lo menos en cuanto a compromiso y comunidad se refiere.

**¿Es el fin de una era?** Desde mi punto de vista sí (sobre todo para mi, teniendo en cuenta mis circunstancias personales y a lo que me dedico actualmente). El coronavirus no ha ayudado nada, ya que los eventos era el pegamento que unía a la comunidad en cierta forma y le daba velocidad y ahora la realización de los mismos está gestionada por Adobe y ha dejado MageTitans, MeetMagento y la futura realización de los mismos en un lugar que desconozco.

**¿Magento (Ahora Adobe Commerce) sigue teniendo recorrido?** Desde mi punto de vista creo que sí. Hace años que hemos entrado en un mercado con múltiples competidores y múltiples propósitos, por lo que es muy dificil que ninguna plataforma pueda tener una posición monopolística, por lo menos durante unos años. Sin embargo creo que Adobe puede encontrar un nicho en el que pueda crecer, y no tiene sentido dejar morir un software que no era competencia suya después de una inversión tan grande.

Como algún lector sabe, hace algunos meses que no me dedico al desarrollo con Magento, pero eso no significa que me guste ver como algo que se construyó durante tantos años, a lo que debo tantas cosas y que generó un ecosistema tan importante tanto tecnológicamente como socialmente se vaya por el sumidero por una cuestión de números y gráficos. Me quedo con los días buenos en la que pude formar parte de esta historia.

Larga vida a Magento 🙂

<div class="columns" style="justify-content: center">
<div class="column col-3 col-sm-5">

![Magento](magento-logo.svg)

</div>
</div>

<span>Photo by <a href="https://unsplash.com/@thebrownspy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Spencer Watson</a> on <a href="https://unsplash.com/s/photos/sunset?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
</span>
