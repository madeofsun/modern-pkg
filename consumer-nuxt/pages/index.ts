import { defineComponent, h } from "vue";

import * as index from "../test/index";

export default defineComponent(() => {
  return () => h("div", index);
});
