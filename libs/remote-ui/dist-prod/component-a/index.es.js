import { d as c, o as p, c as l, a as t, t as i, p as _, b as d, _ as m } from "../_plugin-vue_export-helper-ThTUmaB5.js";
const n = (o) => (_("data-v-f8b39509"), o = o(), d(), o), r = /* @__PURE__ */ n(() => /* @__PURE__ */ t("i", null, "1", -1)), u = /* @__PURE__ */ n(() => /* @__PURE__ */ t("i", null, "2", -1)), f = /* @__PURE__ */ c({
  name: "ComponentA",
  __name: "index",
  props: {
    text: { default: "Click me" }
  },
  setup(o) {
    const s = () => {
      console.log("Button clicked");
    };
    return (a, C) => (p(), l("button", { onClick: s }, [
      r,
      t("span", null, i(a.text) + "123", 1),
      u
    ]));
  }
}), e = /* @__PURE__ */ m(f, [["__scopeId", "data-v-f8b39509"]]);
e.install = function(o) {
  o.component(e.name || "ComponentA", e);
};
export {
  e as default
};
