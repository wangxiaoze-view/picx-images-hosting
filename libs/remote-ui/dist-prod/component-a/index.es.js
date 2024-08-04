import { defineComponent as l, openBlock as s, createElementBlock as a, createElementVNode as t, toDisplayString as i, pushScopeId as _, popScopeId as m } from "vue";
import { _ as d } from "../_plugin-vue_export-helper-CHgC5LLL.js";
const n = (o) => (_("data-v-f8b39509"), o = o(), m(), o), r = /* @__PURE__ */ n(() => /* @__PURE__ */ t("i", null, "1", -1)), u = /* @__PURE__ */ n(() => /* @__PURE__ */ t("i", null, "2", -1)), f = /* @__PURE__ */ l({
  name: "ComponentA",
  __name: "index",
  props: {
    text: { default: "Click me" }
  },
  setup(o) {
    const c = () => {
      console.log("Button clicked");
    };
    return (p, C) => (s(), a("button", { onClick: c }, [
      r,
      t("span", null, i(p.text) + "123", 1),
      u
    ]));
  }
}), e = /* @__PURE__ */ d(f, [["__scopeId", "data-v-f8b39509"]]);
e.install = function(o) {
  o.component(e.name || "ComponentA", e);
};
export {
  e as default
};
