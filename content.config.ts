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
        title: z.string().nonempty(),
        date: z.string().nonempty(),
        published: z.boolean(),
        hero_title: z.string(),
        hero_subtitle: z.string(),
        description: z.string(),
        hero_image: z.string(),
        taxonomy: z.array(z.string()),
        slug: z.string(),
        popular: z.boolean(),
        _locale: z.string(),
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
  locales: ["en", "es"],
  defaultLocale: "en",
});
