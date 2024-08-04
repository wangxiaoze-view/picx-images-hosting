const s = (e) => (Vue.pushScopeId("data-v-639e018f"), e = e(), Vue.popScopeId(), e), u = /* @__PURE__ */ s(() => /* @__PURE__ */ Vue.createElementVNode("i", null, "1", -1)), a = /* @__PURE__ */ s(() => /* @__PURE__ */ Vue.createElementVNode("i", null, "2", -1)), d = /* @__PURE__ */ Vue.defineComponent({
  name: "ComponentA",
  __name: "index",
  props: {
    text: { default: "Click me" }
  },
  setup(e) {
    const t = () => {
      console.log("Button clicked");
    };
    return (n, o) => (Vue.openBlock(), Vue.createElementBlock("button", { onClick: t }, [
      u,
      Vue.createElementVNode("span", null, Vue.toDisplayString(n.text) + "123", 1),
      a
    ]));
  }
});
const p = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, c] of t)
    n[o] = c;
  return n;
}, l = /* @__PURE__ */ p(d, [["__scopeId", "data-v-639e018f"]]), r = Vue.defineComponent({
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
const i = { class: "component-b" };
function _(e, t, n, o, c, V) {
  return Vue.openBlock(), Vue.createElementBlock("div", i, [
    Vue.createElementVNode("h1", null, Vue.toDisplayString(e.message), 1)
  ]);
}
const m = /* @__PURE__ */ p(r, [["render", _], ["__scopeId", "data-v-25f25220"]]), f = {
  ComponentA: l,
  ComponentB: m
};
export {
  f as default
};
