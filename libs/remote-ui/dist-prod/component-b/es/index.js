import { defineComponent as o, openBlock as t, createElementBlock as s, createElementVNode as p, toDisplayString as r } from "vue";
import { _ as a } from "../../chunk/es/_plugin-vue_export-helper.chunk.js";
const c = o({
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
function i(e, _, l, d, f, u) {
  return t(), s("div", m, [
    p("h1", null, r(e.message), 1)
  ]);
}
const n = /* @__PURE__ */ a(c, [["render", i], ["__scopeId", "data-v-25f25220"]]);
n.install = function(e) {
  e.component("ComponentB", n);
};
export {
  n as default
};
