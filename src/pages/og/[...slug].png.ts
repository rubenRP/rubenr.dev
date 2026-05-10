import { Resvg } from "@resvg/resvg-js";
import { getCollection } from "astro:content";

const WIDTH = 1200;
const HEIGHT = 630;
/** Left gutter (logo + text align here) */
const PADDING_X = 96;
/** Extra right inset so long lines never touch the card edge */
const PADDING_RIGHT = 128;
const TEXT_WIDTH = WIDTH - PADDING_X - PADDING_RIGHT;
const LOGO_TOP = 52;
const LOGO_SCALE = 0.195;
const HEADER_RULE_GAP = 16;
const DOMAIN_BELOW_RULE = 45;
const TITLE_BELOW_DOMAIN = 38;
const LOGO_VIEWBOX_H = 345;
/**
 * Character wrap limit for ~58px serif in TEXT_WIDTH — conservative vs Resvg metrics
 * so glyphs do not clip on the right.
 */
const TITLE_CHARS_PER_LINE = 34;
const SUBTITLE_CHARS_PER_LINE = 48;
const TITLE_LINE_HEIGHT = 66;
const SUBTITLE_LINE_HEIGHT = 40;
const TITLE_SUBTITLE_GAP = 30;
const MAX_TITLE_LINES = 6;
const MAX_TITLE_LINES_WITH_SUBTITLE = 4;
const MAX_SUBTITLE_LINES = 3;
const DATE_GAP_BELOW_COPY = 36;

const FONT = {
  title: "ui-serif, Georgia, Times New Roman, Liberation Serif, serif",
  mono: "ui-monospace, Cascadia Code, Segoe UI Mono, monospace",
  sans: "ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif",
} as const;

function normalizeIdToSlug(id: string) {
  return id.replace(/\.mdx?$/, "");
}

/** Split tokens longer than maxLength so wrapping cannot overflow horizontally */
function explodeLongTokens(text: string, maxLength: number): string[] {
  const words = text.split(/\s+/).filter(Boolean);
  const out: string[] = [];
  for (const word of words) {
    if (word.length <= maxLength) {
      out.push(word);
      continue;
    }
    for (let i = 0; i < word.length; i += maxLength) {
      out.push(word.slice(i, i + maxLength));
    }
  }
  return out;
}

function wrapText(text: string, maxLength: number) {
  const words = explodeLongTokens(text, maxLength);
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

function sliceWithEllipsis(
  lines: string[],
  maxLines: number,
  wasTruncated: boolean,
): string[] {
  const slice = lines.slice(0, maxLines);
  if (wasTruncated && slice.length > 0) {
    const last = slice[slice.length - 1].replace(/\s*$/, "");
    slice[slice.length - 1] = last.endsWith("…") ? last : `${last}…`;
  }
  return slice;
}

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function renderTextBlock(
  lines: string[],
  x: number,
  y: number,
  lineHeight: number,
  className: string,
) {
  return `
    <text x="${x}" y="${y}" class="${className}">
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
  const mainTitle = post.data.title as string;
  const subtitleRaw = post.data.subtitle as string | undefined;

  const date = new Date(post.data.date).toLocaleDateString(
    post.lang === "es" ? "es" : "en",
    {
      month: "long",
      day: "numeric",
      year: "numeric",
    },
  );

  const titleMaxLines = subtitleRaw
    ? MAX_TITLE_LINES_WITH_SUBTITLE
    : MAX_TITLE_LINES;

  const titleWrapped = wrapText(mainTitle, TITLE_CHARS_PER_LINE);
  const titleTruncated = titleWrapped.length > titleMaxLines;
  const titleLines = sliceWithEllipsis(
    titleWrapped,
    titleMaxLines,
    titleTruncated,
  );

  let subtitleLines: string[] = [];
  if (subtitleRaw) {
    const subWrapped = wrapText(subtitleRaw, SUBTITLE_CHARS_PER_LINE);
    const subTruncated = subWrapped.length > MAX_SUBTITLE_LINES;
    subtitleLines = sliceWithEllipsis(
      subWrapped,
      MAX_SUBTITLE_LINES,
      subTruncated,
    );
  }

  const logoHeight = LOGO_VIEWBOX_H * LOGO_SCALE;
  const lineY = LOGO_TOP + logoHeight + HEADER_RULE_GAP;
  const domainY = lineY + DOMAIN_BELOW_RULE;
  const titleStartY = domainY + TITLE_BELOW_DOMAIN;

  const titleLineCount = Math.max(1, titleLines.length);
  const lastTitleBaseline =
    titleStartY + (titleLineCount - 1) * TITLE_LINE_HEIGHT;

  const subtitleFirstBaseline =
    subtitleLines.length > 0
      ? lastTitleBaseline + TITLE_SUBTITLE_GAP
      : lastTitleBaseline;

  const lastCopyBaseline =
    subtitleLines.length > 0
      ? subtitleFirstBaseline +
        (subtitleLines.length - 1) * SUBTITLE_LINE_HEIGHT
      : lastTitleBaseline;

  const dateY = lastCopyBaseline + DATE_GAP_BELOW_COPY;

  const subtitleSvg =
    subtitleLines.length > 0
      ? renderTextBlock(
          subtitleLines,
          PADDING_X,
          subtitleFirstBaseline,
          SUBTITLE_LINE_HEIGHT,
          "subtitle-text",
        )
      : "";

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
      <g transform="translate(${PADDING_X}, ${LOGO_TOP}) scale(${LOGO_SCALE})" fill="#0f172a">
        <path d="M653.3,252.55a102.77,102.77,0,0,1-7.73,40.16,98.49,98.49,0,0,1-21.35,32A103.87,103.87,0,0,1,592,346.49,116.66,116.66,0,0,1,552,356l95.8,126.68H605.62L490.29,328.81c5.14,0,10.9.06,17.26.22s12.79.06,19.29-.22,12.87-.86,19.06-1.59a106,106,0,0,0,17-3.43q25.44-7.69,40.87-26.77t15.42-45.42a77.27,77.27,0,0,0-10-37.67A68.81,68.81,0,0,0,582,186.22a91.82,91.82,0,0,0-32-10.66,270.29,270.29,0,0,0-34.27-2H422.19V142.17h86.72a398.9,398.9,0,0,1,42.45,2.51q22.91,2.51,41.1,11.14,29,13.6,44.95,39.24T653.3,252.55Z" transform="translate(-172.19 -137.72)" />
        <path d="M302,351.56l96.23,126.68H354.72L239.82,324.31h17.27q9.55,0,19.29-.43t19.3-1.59a105.61,105.61,0,0,0,17.27-3.4q24.94-7.73,40.4-26.58t15.44-45.18A79.89,79.89,0,0,0,359,209.23q-9.76-18.38-27-27.47-16.35-9.11-32.44-10.9a313.86,313.86,0,0,0-34.3-1.83H205.79V478.24h-33.6V137.72h86.74c6.34,0,13.17.14,20.4.43s14.63.92,22,1.83a199.61,199.61,0,0,1,21.59,3.83A98.13,98.13,0,0,1,342,150.43q29.06,14,45.17,39.48t16.14,57.67a100.27,100.27,0,0,1-7.93,40.18A105.85,105.85,0,0,1,373.78,320a103.19,103.19,0,0,1-32,22A115.22,115.22,0,0,1,302,351.56Z" transform="translate(-172.19 -137.72)" />
      </g>
      <rect x="${PADDING_X}" y="${lineY}" width="${TEXT_WIDTH}" height="6" rx="3" fill="#0f172a" fill-opacity="0.15" />
      <text x="${PADDING_X}" y="${domainY}" fill="#0f172a" font-size="26" font-family="${FONT.mono}" letter-spacing="0.04em">rubenr.dev</text>
      ${renderTextBlock(titleLines, PADDING_X, titleStartY, TITLE_LINE_HEIGHT, "title-text")}
      ${subtitleSvg}
      <text x="${PADDING_X}" y="${dateY}" fill="#0f172a" font-size="22" font-family="${FONT.sans}" opacity="0.78">${escapeXml(date)}</text>
      <style>
        .title-text {
          fill: #0f172a;
          font-family: ${FONT.title};
          font-size: 58px;
          font-weight: 700;
          letter-spacing: -0.02em;
        }
        .subtitle-text {
          fill: #334155;
          font-family: ${FONT.sans};
          font-size: 32px;
          font-weight: 500;
          letter-spacing: -0.01em;
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
