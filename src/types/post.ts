import type { DataEntry } from "astro:content";

export interface Post extends DataEntry {
  data: {
    title: string;
    subtitle?: string;
    date: string;
    published?: boolean;
    popular?: boolean;
    description?: string;
    image?: string;
    taxonomy?: {
      category: string;
      tags: string[];
    }[];
    hreflang?: {
      lang: string;
      url: string;
    }[];
  };
  slug: string;
  lang?: string;
}
