import { _ as n } from "../chunk/_plugin-vue_export-helper.chunk.js";
const s = Vue.defineComponent({
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
const t = { class: "component-b" };
function o(e, a, r, c, p, d) {
  return Vue.openBlock(), Vue.createElementBlock("div", t, [
    Vue.createElementVNode("h1", null, Vue.toDisplayString(e.message), 1)
  ]);
}
const i = /* @__PURE__ */ n(s, [["render", o], ["__scopeId", "data-v-25f25220"]]);
export {
  i as default
};
