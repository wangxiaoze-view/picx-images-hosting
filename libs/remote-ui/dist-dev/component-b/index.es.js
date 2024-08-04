import { d as o, _ as s, c as t, a, t as c, o as p } from "../_plugin-vue_export-helper-29AvVHJO.js";
const r = o({
  name: "ComponentB",
  props: {
    message: String
  },
  setup(e) {
    return {
      message: e.message
    };
  }
}), m = { class: "component-b" };
function i(e, _, d, l, f, u) {
  return p(), t("div", m, [
    a("h1", null, c(e.message), 1)
  ]);
}
const n = /* @__PURE__ */ s(r, [["render", i], ["__scopeId", "data-v-25f25220"]]);
n.install = function(e) {
  e.component("ComponentB", n);
};
export {
  n as default
};
