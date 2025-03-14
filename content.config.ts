import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      // Load every file inside the `content/blog` directory
      source: "blog/**/*.md",
      // Specify the type of content in this collection
      type: "post",
      // Set the route for the generated pages
      // route: '/blog/:slug'
      schema: z.object({
        published: z.boolean(),
      })
    }),
    pages: defineCollection({
      // Load every file inside the `content/pages` directory
      source: "pages/**/*.md",
      // Specify the type of content in this collection
      type: "page",
      // Set the route for the generated pages
      // route: '/:slug'
    }),
  },
});
