import { d as s, _ as o, c as t, a, t as n, o as r } from "../chunk/_plugin-vue_export-helper.chunk.js";
const c = s({
  name: "ComponentB",
  props: {
    message: String
  },
  setup(e) {
    return {
      message: e.message
    };
  }
}), p = { class: "component-b" };
function d(e, m, _, i, f, l) {
  return r(), t("div", p, [
    a("h1", null, n(e.message), 1)
  ]);
}
const g = /* @__PURE__ */ o(c, [["render", d], ["__scopeId", "data-v-25f25220"]]);
export {
  g as default
};
