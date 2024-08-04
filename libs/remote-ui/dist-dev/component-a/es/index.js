import { _ as l } from "../../chunk/es/_plugin-vue_export-helper.chunk.js";
const o = (e) => (Vue.pushScopeId("data-v-f8b39509"), e = e(), Vue.popScopeId(), e), p = /* @__PURE__ */ o(() => /* @__PURE__ */ Vue.createElementVNode("i", null, "1", -1)), a = /* @__PURE__ */ o(() => /* @__PURE__ */ Vue.createElementVNode("i", null, "2", -1)), s = /* @__PURE__ */ Vue.defineComponent({
  name: "ComponentA",
  __name: "index",
  props: {
    text: { default: "Click me" }
  },
  setup(e) {
    const n = () => {
      console.log("Button clicked");
    };
    return (c, u) => (Vue.openBlock(), Vue.createElementBlock("button", { onClick: n }, [
      p,
      Vue.createElementVNode("span", null, Vue.toDisplayString(c.text) + "123", 1),
      a
    ]));
  }
}), t = /* @__PURE__ */ l(s, [["__scopeId", "data-v-f8b39509"]]);
t.install = function(e) {
  e.component(t.name || "ComponentA", t);
};
export {
  t as default
};
