import { d as a, c, a as o, t as d, o as p, p as l, b as i, _ } from "../chunk/_plugin-vue_export-helper.chunk.js";
const t = (e) => (l("data-v-639e018f"), e = e(), i(), e), r = /* @__PURE__ */ t(() => /* @__PURE__ */ o("i", null, "1", -1)), u = /* @__PURE__ */ t(() => /* @__PURE__ */ o("i", null, "2", -1)), f = /* @__PURE__ */ a({
  name: "ComponentA",
  __name: "index",
  props: {
    text: { default: "Click me" }
  },
  setup(e) {
    const n = () => {
      console.log("Button clicked");
    };
    return (s, m) => (p(), c("button", { onClick: n }, [
      r,
      o("span", null, d(s.text) + "123", 1),
      u
    ]));
  }
});
const k = /* @__PURE__ */ _(f, [["__scopeId", "data-v-639e018f"]]);
export {
  k as default
};
