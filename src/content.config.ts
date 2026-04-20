import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const taxonomySchema = z.object({
  category: z.union([z.string(), z.array(z.string())]).optional(),
  tag: z.union([z.string(), z.array(z.string())]).optional(),
  tags: z.array(z.string()).optional(),
});

const hreflangSchema = z.object({
  lang: z.string(),
  url: z.string(),
});

const blog = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/blog",
  }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    date: z.union([z.string(), z.date()]),
    published: z.boolean().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    taxonomy: taxonomySchema.optional(),
    hreflang: z
      .union([z.record(z.string(), z.string()), z.array(hreflangSchema)])
      .optional(),
  }),
});

const pages = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/pages",
  }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    date: z.union([z.string(), z.date()]).optional(),
    description: z.string().optional(),
  }),
});

export const collections = {
  blog,
  pages,
};
