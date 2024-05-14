import { mountSuspended } from "@nuxt/test-utils/runtime";
import { describe, expect, it } from "vitest";
import Bio from "../../components/Bio.vue";

describe("Bio component", () => {
  it("Mounts the component", async () => {
    const component = await mountSuspended(Bio);
    expect(component).toBeTruthy();
  });
  it("Shows bio", async () => {
    const component = await mountSuspended(Bio);
    const about = useAppConfig().about;
    expect(component.text()).toContain(about.title);
    expect(component.text()).toContain(about.shortInfo);
  });
});
