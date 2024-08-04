import { d as a, c, a as o, t as p, o as l, p as d, b as _, _ as i } from "../chunk/_plugin-vue_export-helper.chunk.js";
const t = (e) => (d("data-v-f8b39509"), e = e(), _(), e), r = /* @__PURE__ */ t(() => /* @__PURE__ */ o("i", null, "1", -1)), u = /* @__PURE__ */ t(() => /* @__PURE__ */ o("i", null, "2", -1)), m = /* @__PURE__ */ a({
  name: "ComponentA",
  __name: "index",
  props: {
    text: { default: "Click me" }
  },
  setup(e) {
    const n = () => {
      console.log("Button clicked");
    };
    return (s, f) => (l(), c("button", { onClick: n }, [
      r,
      o("span", null, p(s.text) + "123", 1),
      u
    ]));
  }
}), k = /* @__PURE__ */ i(m, [["__scopeId", "data-v-f8b39509"]]);
export {
  k as default
};
