import { _ as c } from "../chunk/_plugin-vue_export-helper.chunk.js";
const t = (e) => (Vue.pushScopeId("data-v-639e018f"), e = e(), Vue.popScopeId(), e), d = /* @__PURE__ */ t(() => /* @__PURE__ */ Vue.createElementVNode("i", null, "1", -1)), l = /* @__PURE__ */ t(() => /* @__PURE__ */ Vue.createElementVNode("i", null, "2", -1)), u = /* @__PURE__ */ Vue.defineComponent({
  name: "ComponentA",
  __name: "index",
  props: {
    text: { default: "Click me" }
  },
  setup(e) {
    const o = () => {
      console.log("Button clicked");
    };
    return (n, s) => (Vue.openBlock(), Vue.createElementBlock("button", { onClick: o }, [
      d,
      Vue.createElementVNode("span", null, Vue.toDisplayString(n.text) + "123", 1),
      l
    ]));
  }
});
const a = /* @__PURE__ */ c(u, [["__scopeId", "data-v-639e018f"]]);
export {
  a as default
};
