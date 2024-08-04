import { _ as o } from "../../chunk/es/_plugin-vue_export-helper.chunk.js";
const t = Vue.defineComponent({
  name: "ComponentB",
  props: {
    message: String
  },
  setup(e) {
    return {
      message: e.message
    };
  }
}), s = { class: "component-b" };
function a(e, p, c, r, m, u) {
  return Vue.openBlock(), Vue.createElementBlock("div", s, [
    Vue.createElementVNode("h1", null, Vue.toDisplayString(e.message), 1)
  ]);
}
const n = /* @__PURE__ */ o(t, [["render", a], ["__scopeId", "data-v-25f25220"]]);
n.install = function(e) {
  e.component("ComponentB", n);
};
export {
  n as default
};
