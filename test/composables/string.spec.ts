import { describe, expect, it } from "vitest";

describe("string", () => {
  it("should replace spaces with dashes", () => {
    // Test the replaceSpaces function
    const str = "Hello World";
    const replacedStr = replaceSpaces(str);
    expect(replacedStr).toBe("Hello-World");
  });
});
