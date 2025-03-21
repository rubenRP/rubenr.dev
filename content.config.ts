import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./content/blog",
  }),
  schema: {
    title: z.string(),
    subtitle: z.string().optional(),
    date: z.string(),
    published: z.boolean().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    taxonomy: z
      .array(
        z.object({
          category: z.string(),
          tags: z.array(z.string()),
        }),
      )
      .optional(),
    hreflang: z.array(
      z
        .object({
          lang: z.string(),
          url: z.string(),
        })
        .optional(),
    ),
  },
});

const pages = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./content/pages",
  }),
  schema: {
    title: z.string(),
    subtitle: z.string().optional(),
    date: z.string().optional(),
    description: z.string().optional(),
  },
});

export const collections = {
  blog,
  pages,
};
