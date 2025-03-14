import { expect, test } from "@nuxt/test-utils/playwright";

test.describe("Home", () => {
  test("Home loads", async ({ page, goto }) => {
    await goto("/", { waitUntil: "hydration" });
    await expect(page).toBeTruthy();
    await expect(page).toHaveTitle("Home | Rubén Rodríguez");
    await expect("a[href='/about']").toBeTruthy();
    await expect("a[href='/blog']").toBeTruthy();
    await expect(".hero").toBeTruthy();
    await expect(".section.modular-recent").toBeTruthy();
    await expect(".section.modular-popular").toBeTruthy();
    await expect("#footer").toBeTruthy();
  });
});
