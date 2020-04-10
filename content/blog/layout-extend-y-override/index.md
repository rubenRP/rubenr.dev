---
title: "Layout: Extend y override"
published: true
date: "2017-08-03T20:37:00.000Z"
taxonomy:
  category:
    - Articles
  tag:
    - Magento
hero_classes: "text-light title-h1h2 parallax overlay-dark"
hero_image: 1_0-Gbhb5fuXWxZ_j9YAOxrg.jpg
thumbnail: 1_0-Gbhb5fuXWxZ_j9YAOxrg.jpg
---

**Básicos en Magento 2**

En Magento 2 la gestión de layout toma gran importancia en el stack de tecnologías incorporadas en el front-end. Entre las novedades que trae Magento 2 destaca el nuevo método para sobreescribir y extender xml cuando se está desarrollando un tema. Desde mi punto de vista es un paso hacia adelante, sobre todo en lo que a extender se refiere; ya que si se extendían muchos handles en Magento 1 te podías ver en la situación de tener un local.xml enorme e inmanejable.

### Extender

Este es el caso más habitual de layout, en el que se hace una pequeña modificación sobre un layout ya existente.

El procedimiento para extender un layout genérico es tan sencillo como crear un fichero con el mismo nombre en una ruta similar a la de vendor, pero en tu tema.

Por ejemplo, si deseamos extender el fichero:

    <Magento_Catalog_module_dir>/view/frontend/layout/catalog_product_view.xml

Simplemente hay que crear un fichero XML en:

    <theme_dir>/Magento_Catalog/layout/catalog_product_view.xml

**Nota:** Si hemos hecho una instalación usando Composer (cosa recomendable), el módulo de catálogo se encontrará en vendor/magento/module-catalog y no se llamará Magento_Catalog.

Mi recomendación es que si se trata de un fichero que afecta al diseño general del sitio se sobreescriba, ya que si no se tiene que estar navegando continuamente entre el fichero que has extendido y el existente en vendor, y al final te acabarás confundiendo.

### Sobreescribir

Este es el caso para cuando el número de modificaciones sobre un layout es tan grande que no compensa, por lo que es mejor sobreescribir todo el layout y que Magento lea directamente nuestro fichero en vez que el de vendor.

Utilizando el ejemplo anterior

    <Magento_Catalog_module_dir>/view/frontend/layout/catalog_product_view.xml

Para realizar una sobreescritura se copiaría el fichero catalog_product_view.xml en :

    <theme_dir>/Magento_Catalog/layout/override/base/catalog_product_view.xml

Para sobreescribir ficheros de tema, el fichero se copiaría en:

    <theme_dir>/Magento_Catalog/layout/override/theme/catalog_product_view.xml

Como podéis ver el método es bastante similar al de Magento 1, pero bastante mejor ordenado. Con un vistazo rápido se puede ver qué extiende o sobreescribe qué, y el tiempo es oro ;)

_Este post ha sido publicado originalmente para el [blog de Interactiv4](http://www.interactiv4.com/blog-es/basicos-en-magento-2-layout-extend-y-override/)_
