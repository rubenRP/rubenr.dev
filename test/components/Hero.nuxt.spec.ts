import { mountSuspended } from "@nuxt/test-utils/runtime";
import { describe, expect, it } from "vitest";

import Hero from "../../components/Hero.vue";

describe("Hero component", () => {
  it("Mounts the component", async () => {
    const component = await mountSuspended(Hero);
    expect(component).toBeTruthy();
  });
});
