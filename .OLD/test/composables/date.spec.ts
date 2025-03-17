import { describe, expect, it } from "vitest";

describe("date", () => {
  it("should return a formatted date", () => {
    // Test the formatDate function
    const date = "2020-08-10T08:30:00.000Z";
    const date2 = "2020-08-10";
    const formattedDate = formatDate(date);
    expect(formattedDate).toBe("August 10, 2020");
    const formattedDate2 = formatDate(date2);
    expect(formattedDate2).toBe("August 10, 2020");
  });
});
