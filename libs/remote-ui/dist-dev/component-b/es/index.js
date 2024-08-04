import { d as o, _ as s, o as t, c as a, a as c, t as p } from "../../chunk/es/_plugin-vue_export-helper.chunk.js";
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
  return t(), a("div", m, [
    c("h1", null, p(e.message), 1)
  ]);
}
const n = /* @__PURE__ */ s(r, [["render", i], ["__scopeId", "data-v-25f25220"]]);
n.install = function(e) {
  e.component("ComponentB", n);
};
export {
  n as default
};
