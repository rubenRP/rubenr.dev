// Test for Tags component
import { mountSuspended } from "@nuxt/test-utils/runtime";
import { describe, expect, it } from "vitest";
import Tags from "../../components/Tags.vue";

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
  it("Shows tags with links", async () => {
    const component = await mountSuspended(Tags, {
      props: {
        items: tags,
      },
    });
    tags.forEach((tag) => {
      expect(component.text()).toContain(tag);
      expect(component.html()).toContain(
        `href="/blog/tag/${tag.replace(/\s/g, "-").toLowerCase()}"`,
      );
    });
  });
});
