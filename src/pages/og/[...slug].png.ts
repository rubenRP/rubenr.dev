import { Resvg } from "@resvg/resvg-js";
import { getCollection } from "astro:content";

const WIDTH = 1200;
const HEIGHT = 630;
const PADDING_X = 90;
const TEXT_WIDTH = 1020;
const TITLE_START_Y = 235;
/** ~1020px column at ~56px effective cap width */
const TITLE_CHARS_PER_LINE = 50;
const TITLE_LINE_HEIGHT = 68;
const MAX_TITLE_LINES = 5;

const FONT = {
  title: "ui-serif, Georgia, Times New Roman, Liberation Serif, serif",
  mono: "ui-monospace, Cascadia Code, Segoe UI Mono, monospace",
  sans: "ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif",
} as const;

function normalizeIdToSlug(id: string) {
  return id.replace(/\.mdx?$/, "");
}

function wrapText(text: string, maxLength: number) {
  const words = text.split(/\s+/).filter(Boolean);
  const lines: string[] = [];
  let currentLine = "";

  for (const word of words) {
    const candidate = currentLine ? `${currentLine} ${word}` : word;

    if (candidate.length <= maxLength) {
      currentLine = candidate;
      continue;
    }

    if (currentLine) {
      lines.push(currentLine);
    }

    currentLine = word;
  }

  if (currentLine) {
    lines.push(currentLine);
  }

  return lines;
}

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function renderTitleLines(
  lines: string[],
  x: number,
  y: number,
  lineHeight: number,
) {
  return `
    <text x="${x}" y="${y}" class="title-text">
      ${lines
        .map(
          (line, index) =>
            `<tspan x="${x}" dy="${index === 0 ? 0 : lineHeight}">${escapeXml(line)}</tspan>`,
        )
        .join("")}
    </text>
  `;
}

export async function getStaticPaths() {
  const posts = (await getCollection("blog"))
    .filter((post) => post.data.published)
    .sort(
      (a, b) =>
        new Date(b.data.date).getTime() - new Date(a.data.date).getTime(),
    );

  return posts.map((post) => {
    const normalizedId = normalizeIdToSlug(post.id);

    return {
      params: {
        slug: normalizedId.startsWith("en/")
          ? normalizedId.slice(3)
          : normalizedId,
      },
      props: {
        post: {
          ...post,
          slug: normalizedId.startsWith("en/")
            ? normalizedId.slice(3)
            : normalizedId,
          lang: normalizedId.startsWith("en/") ? "en" : "es",
        },
      },
    };
  });
}

export async function GET({ props }: { props: { post: any } }) {
  const { post } = props;
  const title = post.data.subtitle
    ? `${post.data.title}: ${post.data.subtitle}`
    : post.data.title;
  const date = new Date(post.data.date).toLocaleDateString("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const tags: string[] = Array.isArray(post.data.taxonomy?.tag)
    ? post.data.taxonomy.tag.slice(0, 3)
    : [];

  const wrapped = wrapText(title, TITLE_CHARS_PER_LINE);
  const truncated = wrapped.length > MAX_TITLE_LINES;
  let lines = wrapped.slice(0, MAX_TITLE_LINES);
  if (truncated && lines.length > 0) {
    const last = lines[lines.length - 1].replace(/\s*$/, "");
    lines[lines.length - 1] = last.endsWith("…") ? last : `${last}…`;
  }

  const titleLineCount = Math.max(1, lines.length);
  const lastTitleBaseline =
    TITLE_START_Y + (titleLineCount - 1) * TITLE_LINE_HEIGHT;
  const dateY = lastTitleBaseline + 46;
  const tagGroupY = dateY + (tags.length ? 32 : 0);

  const svg = `
    <svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1200" y2="630" gradientUnits="userSpaceOnUse">
          <stop stop-color="#f6f1e8" />
          <stop offset="1" stop-color="#eadfd0" />
        </linearGradient>
        <pattern id="dots" width="28" height="28" patternUnits="userSpaceOnUse">
          <circle cx="3" cy="3" r="1.2" fill="#0f172a" fill-opacity="0.08" />
        </pattern>
      </defs>
      <rect width="1200" height="630" rx="36" fill="url(#bg)" />
      <rect x="0" y="0" width="1200" height="630" rx="36" fill="url(#dots)" />
      <circle cx="1040" cy="120" r="150" fill="#d9c7af" fill-opacity="0.35" />
      <circle cx="1030" cy="120" r="96" fill="#f4ede1" fill-opacity="0.9" />
      <rect x="70" y="70" width="220" height="54" rx="27" fill="#0f172a" fill-opacity="0.9" />
      <text x="102" y="105" fill="#f8fafc" font-size="24" font-family="${FONT.mono}" letter-spacing="0.08em">BLOG POST</text>
      <rect x="${PADDING_X}" y="155" width="${TEXT_WIDTH}" height="6" rx="3" fill="#0f172a" fill-opacity="0.15" />
      <text x="${PADDING_X}" y="200" fill="#0f172a" font-size="26" font-family="${FONT.mono}" letter-spacing="0.04em">rubenr.dev</text>
      ${renderTitleLines(lines, PADDING_X, TITLE_START_Y, TITLE_LINE_HEIGHT)}
      <text x="${PADDING_X}" y="${dateY}" fill="#0f172a" font-size="22" font-family="${FONT.sans}" opacity="0.78">${escapeXml(date)}</text>
      ${
        tags.length
          ? `
            <g transform="translate(${PADDING_X}, ${tagGroupY})">
              ${tags
                .map(
                  (tag: string, index: number) => `
                    <g transform="translate(${index * 132}, 0)">
                      <rect x="0" y="0" width="120" height="34" rx="17" fill="#fff" fill-opacity="0.72" stroke="#0f172a" stroke-opacity="0.08" />
                      <text x="60" y="23" text-anchor="middle" fill="#0f172a" font-size="18" font-family="${FONT.mono}">${escapeXml(tag)}</text>
                    </g>
                  `,
                )
                .join("")}
            </g>
          `
          : ""
      }
      <style>
        .title-text {
          fill: #0f172a;
          font-family: ${FONT.title};
          font-size: 56px;
          font-weight: 700;
          letter-spacing: -0.02em;
        }
      </style>
    </svg>
  `;

  const png = new Resvg(svg, {
    fitTo: {
      mode: "width",
      value: WIDTH,
    },
  })
    .render()
    .asPng();

  return new Response(new Uint8Array(png), {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=0, s-maxage=31536000, immutable",
    },
  });
}
