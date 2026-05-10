import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { getCollection } from "astro:content";
import { OGImageRoute } from "astro-og-canvas";

const projectRoot = fileURLToPath(new URL("../../../", import.meta.url));

const collectionEntries = (await getCollection("blog")).filter(
  (post) => post.data.published,
);

const pages = Object.fromEntries(
  collectionEntries.map((entry) => {
    const id = entry.id.replace(/\.mdx?$/i, "");
    const slug = id.startsWith("en/") ? id.slice(3) : id;
    return [slug, entry.data];
  }),
);

export const { getStaticPaths, GET } = await OGImageRoute({
  param: "slug",
  pages,
  /** Match existing URLs: `/og/{slug}.png` without duplicating `.png` in the param */
  getSlug: (path) => path,
  getImageOptions: (_path, page) => {
    const description = [page.subtitle, page.description]
      .filter((s): s is string => Boolean(s))
      .join("\n\n");

    return {
      title: page.title,
      ...(description ? { description } : {}),
      logo: {
        path: resolve(projectRoot, "public/og-rr-logo.png"),
        size: [112],
      },
      bgGradient: [
        [32, 33, 36],
        [15, 23, 42],
      ],
      padding: 68,
      fonts: [
        "https://api.fontsource.org/v1/fonts/noto-sans/latin-400-normal.ttf",
        "https://api.fontsource.org/v1/fonts/noto-sans/latin-700-normal.ttf",
      ],
      font: {
        title: {
          families: ["Noto Sans"],
          weight: "Bold",
          color: [255, 255, 255],
          size: 56,
          lineHeight: 1.15,
        },
        description: {
          families: ["Noto Sans"],
          weight: "Normal",
          color: [196, 200, 208],
          size: 30,
          lineHeight: 1.35,
        },
      },
    };
  },
});
