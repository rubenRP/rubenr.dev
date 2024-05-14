import { describe, expect, it } from "vitest";

describe("url", () => {
  it("should return a formatted URL", () => {
    // Test the formatUrl function
    const language = "en";
    const path = "article-path";
    const slug = "article-slug";
    const formattedUrl = formatUrl(language, path);
    expect(formattedUrl).toBe("/article-path");
    const formattedUrl2 = formatUrl(language, path, slug);
    expect(formattedUrl2).toBe("/article-slug");
    const language2 = "es";
    const formattedUrl3 = formatUrl(language2, path);
    expect(formattedUrl3).toBe("/es/article-path");
    const formattedUrl4 = formatUrl(language2, path, slug);
    expect(formattedUrl4).toBe("/es/article-slug");
  });
});
