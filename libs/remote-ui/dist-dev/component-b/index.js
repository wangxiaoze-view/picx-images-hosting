import { d as s, _ as n, c as o, a as t, t as a, o as c } from "../chunk/_plugin-vue_export-helper.chunk.js";
const r = s({
  name: "ComponentB",
  props: {
    message: String
  },
  setup(e) {
    return {
      message: e.message
    };
  }
});
const d = { class: "component-b" };
function p(e, i, m, _, f, u) {
  return c(), o("div", d, [
    t("h1", null, a(e.message), 1)
  ]);
}
const g = /* @__PURE__ */ n(r, [["render", p], ["__scopeId", "data-v-25f25220"]]);
export {
  g as default
};
