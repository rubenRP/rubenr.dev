// Test for Tags component
import { mountSuspended } from "@nuxt/test-utils/runtime";
import Tags from "@/components/Tags.vue";
import { describe, expect, it } from "vitest";

const tags = ["Vue.js", "Nuxt.js", "Tailwind CSS"];

describe("Tags component", () => {
  it("Mounts the component", async () => {
    const component = await mountSuspended(Tags, {
      props: {
        items: tags,
      },
    });
    expect(component).toBeTruthy();
  });
  it("Shows tags", async () => {
    const component = await mountSuspended(Tags, {
      props: {
        items: tags,
      },
    });
    expect(component.text()).toContain(tags.join(""));
  });
});
