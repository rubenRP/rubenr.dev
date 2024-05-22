import { fileURLToPath } from "node:url";
import { defineConfig, devices } from "@playwright/test";
import type { ConfigOptions } from "@nuxt/test-utils/playwright";

export default defineConfig<ConfigOptions>({
  use: {
    nuxt: {
      rootDir: fileURLToPath(new URL(".", import.meta.url)),
      configFile: "nuxt.config.e2e.ts",
    },
    headless: false,
    ignoreHTTPSErrors: true,
    browserName: "chromium",
    screenshot: "on",
  },
  testMatch: "**/*.test.mts",
});
