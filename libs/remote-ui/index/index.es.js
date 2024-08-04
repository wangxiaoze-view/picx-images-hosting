import { defineComponent as a, openBlock as p, createElementBlock as r, createElementVNode as n, toDisplayString as _, pushScopeId as d, popScopeId as m } from "vue";
const l = (e) => (d("data-v-f8b39509"), e = e(), m(), e), u = /* @__PURE__ */ l(() => /* @__PURE__ */ n("i", null, "1", -1)), f = /* @__PURE__ */ l(() => /* @__PURE__ */ n("i", null, "2", -1)), h = /* @__PURE__ */ a({
  name: "ComponentA",
  __name: "index",
  props: {
    text: { default: "Click me" }
  },
  setup(e) {
    const t = () => {
      console.log("Button clicked");
    };
    return (o, s) => (p(), r("button", { onClick: t }, [
      u,
      n("span", null, _(o.text) + "123", 1),
      f
    ]));
  }
}), i = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [s, c] of t)
    o[s] = c;
  return o;
}, g = /* @__PURE__ */ i(h, [["__scopeId", "data-v-f8b39509"]]), C = a({
  name: "ComponentB",
  props: {
    message: String
  },
  setup(e) {
    return {
      message: e.message
    };
  }
}), k = { class: "component-b" };
function v(e, t, o, s, c, B) {
  return p(), r("div", k, [
    n("h1", null, _(e.message), 1)
  ]);
}
const $ = /* @__PURE__ */ i(C, [["render", v], ["__scopeId", "data-v-25f25220"]]), x = [g, $];
x.forEach((e) => {
  e.install = function(t) {
    t.component(e.name || e.displayName, e);
  };
});
export {
  g as ComponentA,
  $ as ComponentB
};
