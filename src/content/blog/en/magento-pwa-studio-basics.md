---
title: "PWA Studio basics"
date: 2020-05-14T08:30:00.000Z
published: true
subtitle: "Structure, technologies, installation, and main elements"
image: /img/content/pwa-basics-hero.jpg
thumbnail: /img/content/pwa-basics-thumb.jpg
taxonomy:
  category:
    - Articles
  tag:
    - Magento
    - PWA Studio
    - JavaScript
    - React
hreflang:
  es: /es/basicos-en-pwa-studio-estructura-tecnologias-instalacion-y-elementos-principales
---

> You can read this article also in [Spanish](/es/basicos-en-pwa-studio-estructura-tecnologias-instalacion-y-elementos-principales).

It has been 533 days since Magento launched Magento 2.3 [PWA Studio](https://magento.com/products/magento-commerce/pwa), although this new development platform for Magento 2 had been making noise long before its development began.

Apart from my opinion on the development of events and the decisions made in PWA Studio, I would like to write a series of articles on the procedures and basic things that one should know to develop in PWA Studio from the front-end point of view. I may write a post giving my opinion on it and analyzing the state of the platform, but today we will start with the basics: installation, structure, technologies, and main elements.

When PWA Studio is first introduced, an overwhelming description of all the technologies involved is usually given, including the new ones developed by Magento. This poses a problem, as the description of technologies and their relationship is overwhelming. So when you get to the end of the technology description, which is the most interesting part from the front-end perspective, you have either become bored or lost among so many packages, libraries, and components. Therefore, for now, I will skip information about [Peregrine](https://magento.github.io/pwa-studio/peregrine/), [Buildpack](https://magento.github.io/pwa-studio/pwa-buildpack/), and [Upward](https://magento.github.io/pwa-studio/technologies/upward/). I will only make comments on them throughout the development of these articles, so I think it will be easier to understand the relationship between components.

## Technologies

For most Magento or Magento 2 developers, the switch to PWA Studio represents a small challenge, as the way of operating, the architecture, and the technologies are completely different. And although the first time you take a look at a PWA Studio project, the feeling of dizziness is great, when you start working, you realize one very important thing: **In the end, it is developing with JavaScript**, so after the adaptation period, development is more agile, much more robust, and personally, I find it much more fun.

That said, basic development with PWA Studio is based on the use of 3 technologies:

- **[React](https://es.reactjs.org/)**, a library for building interfaces using the VirtualDOM.
- **[GraphQL](https://graphql.org/)**, a language for obtaining data in an API by executing queries.
- **[CSS Modules](https://github.com/css-modules/css-modules)**, a new approach to css development in which styles are confined to modules, using a library.

## Main Elements

Considering the technologies described above, in PWA Studio there is a type of file, component, or module that is responsible for implementing this type of technology. In many cases, Magento creates an abstraction layer to unify the platform, but in reality, most of the time, basic packages are used in JavaScript development. In any case, and to start with the simplest things, development in PWA Studio is based on the use of GraphQL queries, React components, and Root Components.

### GraphQL Query

A GraphQL query is used to read or retrieve values from an API. In turn, saving or publishing values is done through a mutation. In both cases, the operation is a simple string that a GraphQL server can parse and respond to with data in a specific format (usually JSON). The great advantage of this system is that these queries help to reduce data overload. These queries can be saved at the component level, or isolated in specific files and imported from a component.

### React Component

React components are the blocks of code that make up an application in React. Typically, they make up the representation of a functionality in an isolated way, whether it is a button, a header, or a form. Simply put, a component is a JavaScript function or class that, given some parameters, returns a React element with said representation. A component can be made up of one or several components, and the granularity of these depends on the quality of the code and the complexity of the project. One of the most important things to keep in mind is that **everything revolves around React components**, so it is important to have solid knowledge about React.

### Root Component

Root Components are a peculiarity of PWA Studio and are a way to divide and simplify the logic of large components, such as the product page or a search result. Typically, this type of component is called views and has a specific route associated with it, but the implementation in this case is slightly different. They are components that load the information of a GraphQL query, manage their states, and pass that information as parameters to a smaller component. As a note, this is one of the least consistent aspects of PWA Studio at present.

## Installation

To install PWA Studio, you have to keep in mind what your goal is, as it is not installed in the same way if you want to contribute to the project as if you want to create a new project that starts from Venia. This is one of the main misunderstandings when working with PWA Studio. As our case will be the development of a new project that starts from Venia, you only have to run the scaffolding tool and answer the questions that will be asked through the terminal:

```sh
yarn create @magento/pwa
```

The installer allows you to configure the name, location, Braintree credentials, or the Magento instance against which PWA Studio requests will be launched. It can be a custom instance of Magento or the Magento Cloud demo instance. For this case, we will use the Magento Cloud demo, as the content is quite complete and saves a lot of setup time.

![PWA Studio installation](/img/content/pwa-basics-installation.png)

<div class="text-center" style="margin: -15px 0 20px;">
  <small>PWA Studio installation process</small>
</div>

Once the installation is done, you can proceed to launch the local development environment using the following yarn command.

```sh
yarn start
```

The terminal will tell us from which URL we can access the PWA Studio local development environment, in this case [http://0.0.0.0:54455/](http://0.0.0.0:54455/)

![PWA Studio demo](/img/content/pwa-basics-demo.png)

<div class="text-center" style="margin: -15px 0 20px;">
  <small>Basic PWA Studio category with Venia theme</small>
</div>

## Basic Structure

Once PWA Studio is installed, we find a folder structure like the following:

<div class="columns" style="justify-content: center">
<div class="column col-4 col-sm-8">

![PWA Studio file structure](/img/content/pwa-basics-test.png)

</div>
</div>

<div class="text-center" style="margin: -15px 0 20px;">
  <small>PWA Studio file structure.</small>
</div>

To be honest, the files created after installation do not tell us much about how to start working in PWA Studio, since almost everything is configuration files and there are no components or examples to help. A good way to get an idea is to review the structure of the lib folder of the **_@magento/venia-ui_** module. This module contains everything needed to create a front with PWA Studio and reflects the typical front with Venia that you see in the typical PWA Studio demo. It is the reference point from which to start developing, the project you are "inheriting" from.

<div class="columns" style="justify-content: center">
<div class="column col-3 col-sm-6">

![Venia UI file structure](/img/content/pwa-basics-venia.png)

</div>
</div>

<div class="text-center" style="margin: -15px 0 20px;">
  <small>File structure of the @magento/venia-ui package</small>
</div>

Here you can already see something that may be related to the main elements described above: components, queries, and Root Components.

Currently, the Root Component includes the 404 views, product listing, and product detail. They basically obtain the necessary content through _talons_ (we will talk about them in another post) or GraphQL _queries_ and pass it as _props_ to the product view, product list, etc. components.

Within the folder of each Root Component, all of them have the same structure in common: an index.js file where the module in question is exported, whose code is found in the product.js, search.js or the name corresponding to the Root Component.

```js
/**
 * @RootComponent
 * description = 'Basic Product Page'
 * pageTypes = PRODUCT
 */

export { default } from "./product";
```

Although this module exposure pattern is not very common in React applications, it is used in PWA Studio. The good part is that it is consistent throughout the project.

```js
import React, { Fragment, useEffect } from "react";
import { useProduct } from "@magento/peregrine/lib/talons/RootComponents/Product/useProduct";

import { Title, Meta } from "../../components/Head";
import { fullPageLoadingIndicator } from "../../components/LoadingIndicator";
import ProductFullDetail from "../../components/ProductFullDetail";
import { MagentoGraphQLTypes } from "../../util/apolloCache";
import getUrlKey from "../../util/getUrlKey";
import mapProduct from "../../util/mapProduct";

/*
 * As of this writing, there is no single Product query type in the M2.3 schema.
 * The recommended solution is to use filter criteria on a Products query.
 * However, the `id` argument is not supported. See
 * https://github.com/magento/graphql-ce/issues/86
 * TODO: Replace with a single product query when possible.
 */
import GET_PRODUCT_DETAIL from "../../queries/getProductDetail.graphql";
import PRODUCT_DETAILS_FRAGMENT from "../../fragments/productDetails.graphql";

const Product = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const talonProps = useProduct({
    cachePrefix: MagentoGraphQLTypes.ProductInterface,
    fragment: PRODUCT_DETAILS_FRAGMENT,
    mapProduct,
    query: GET_PRODUCT_DETAIL,
    urlKey: getUrlKey(),
  });

  const { error, loading, product } = talonProps;

  if (loading && !product) return fullPageLoadingIndicator;
  if (error) return <div>Data Fetch Error</div>;

  if (!product) {
    return (
      <h1>This Product is currently out of stock. Please try again later.</h1>
    );
  }

  // Note: STORE_NAME is injected by Webpack at build time.
  return (
    <Fragment>
      <Title>{`${product.name} - ${STORE_NAME}`}</Title>
      <Meta name="description" content={product.meta_description} />
      <ProductFullDetail product={product} />
    </Fragment>
  );
};

export default Product;
```

Under the _components_ folder, you can find all the components that are part of Venia, and the structure is similar to that of the Root Components, but in most cases, the complexity is lower. As an example, we will see the content of the Gallery component:

```js
import React, { useMemo } from "react";
import { string, shape, array } from "prop-types";

import { mergeClasses } from "../../classify";
import GalleryItem from "./item";
import defaultClasses from "./gallery.css";

// map Magento 2.3.1 schema changes to Venia 2.0.0 proptype shape to maintain backwards compatibility
const mapGalleryItem = (item) => {
  const { small_image } = item;
  return {
    ...item,
    small_image:
      typeof small_image === "object" ? small_image.url : small_image,
  };
};

/**
 * Renders a Gallery of items. If items is an array of nulls Gallery will render
 * a placeholder item for each.
 *
 * @params {Array} props.items an array of items to render
 */
const Gallery = (props) => {
  const classes = mergeClasses(defaultClasses, props.classes);

  const { items } = props;

  const galleryItems = useMemo(
    () =>
      items.map((item, index) => {
        if (item === null) {
          return <GalleryItem key={index} />;
        }
        return <GalleryItem key={index} item={mapGalleryItem(item)} />;
      }),
    [items],
  );

  return (
    <div className={classes.root}>
      <div className={classes.items}>{galleryItems}</div>
    </div>
  );
};

Gallery.propTypes = {
  classes: shape({
    filters: string,
    items: string,
    pagination: string,
    root: string,
  }),
  items: array.isRequired,
};

export default Gallery;
```

In the next articles, we will go into detail about the structure of this data, how to modify it, and what each thing is, especially for developers more accustomed to working with Magento and less with JavaScript, but in the meantime, I'll leave a clue on how to extend a component.

> The strategy to follow to extend or modify a component is simple: You only need to copy the file or files that you want to modify under the src/components/component_name path and change the import references to be made to the files located in the node modules folder or to those located in the src folder. In some cases, it will be necessary to relaunch the yarn start command to update the references.

Finally, the _queries_ folder contains all the complex queries and mutations to obtain information from Magento 2. This article will not go into the structure of these, but in this simple example of the filters of each category, you can get an idea of how data is obtained from the API with GraphQL:

```js
query getProductFiltersByCategory($categoryIdFilter: FilterEqualTypeInput!) {
   products(filter: { category_id: $categoryIdFilter }) {
       aggregations {
           label
           count
           attribute_code
           options {
               label
               value
           }
       }
   }
}
```

We are now ready to develop! With this, we have a small overview of the platform from a front-end perspective, eliminating the noise of the overall architecture of the project. In future articles, we will delve into creating and modifying components and extracting data through queries.

## References

[https://magento.github.io/pwa-studio/](https://magento.github.io/pwa-studio/)

[https://es.reactjs.org](https://es.reactjs.org/)

[https://graphql.org](https://graphql.org/)

[https://github.com/css-modules/css-modules](https://github.com/css-modules/css-modules)

Photo by [Émile Perron](https://unsplash.com/@emilep?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash]([https://unsplash.com/s/photos/coding?utm](https://unsplash.com/s/photos/coding?utm)
