import { _ as c } from "../chunk/_plugin-vue_export-helper.chunk.js";
const t = (e) => (Vue.pushScopeId("data-v-f8b39509"), e = e(), Vue.popScopeId(), e), l = /* @__PURE__ */ t(() => /* @__PURE__ */ Vue.createElementVNode("i", null, "1", -1)), p = /* @__PURE__ */ t(() => /* @__PURE__ */ Vue.createElementVNode("i", null, "2", -1)), s = /* @__PURE__ */ Vue.defineComponent({
  name: "ComponentA",
  __name: "index",
  props: {
    text: { default: "Click me" }
  },
  setup(e) {
    const o = () => {
      console.log("Button clicked");
    };
    return (n, u) => (Vue.openBlock(), Vue.createElementBlock("button", { onClick: o }, [
      l,
      Vue.createElementVNode("span", null, Vue.toDisplayString(n.text) + "123", 1),
      p
    ]));
  }
}), d = /* @__PURE__ */ c(s, [["__scopeId", "data-v-f8b39509"]]);
export {
  d as default
};
