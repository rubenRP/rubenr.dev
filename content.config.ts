import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";

const blog = defineCollection(
  {
    loader: glob({
      pattern: "**/*.{md,mdx}",
      base: "./content/blog"
    }),
  }
)