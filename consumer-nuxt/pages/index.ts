import { defineComponent, h } from "vue";

export default defineComponent(async () => {
  const index = await import("../test/index");
  return () => h("div", index);
});
