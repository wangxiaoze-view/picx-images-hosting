import { defineComponent as d, openBlock as _, createBlock as u, unref as h, mergeProps as m, createSlots as g, withCtx as i, renderSlot as p } from "vue";
import { NavBar as k } from "vant";
/* empty css               */
const f = x;
(function(n, r) {
  const e = x, t = n();
  for (; ; )
    try {
      if (parseInt(e(483)) / 1 + -parseInt(e(490)) / 2 * (-parseInt(e(494)) / 3) + -parseInt(e(485)) / 4 + parseInt(e(491)) / 5 + parseInt(e(488)) / 6 + parseInt(e(495)) / 7 * (parseInt(e(498)) / 8) + -parseInt(e(493)) / 9 === r) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(s, 846124);
function s() {
  const n = ["right", "1536824vOawXp", "click-right", "paddingTop", "index", "1118913VqOZhM", "style", "674612TMZJbW", "left", "$slots", "5864844qLcLIJ", "#fff", "170308oBraXC", "4892690QZccHE", "bgColor", "21036645ASokVB", "3XSxZyq", "7XkTQVY", "click-left"];
  return s = function() {
    return n;
  }, s();
}
function x(n, r) {
  const e = s();
  return x = function(t, c) {
    return t = t - 481, e[t];
  }, x(n, r);
}
const T = d({ name: "VantNavBar", __name: f(482), props: { title: {}, fixed: { type: Boolean }, zIndex: {}, border: { type: Boolean }, leftText: {}, rightText: {}, leftDisabled: { type: Boolean }, rightDisabled: { type: Boolean }, leftArrow: { type: Boolean }, placeholder: { type: Boolean }, safeAreaInsetTop: { type: Boolean }, clickable: { type: Boolean }, bgColor: { default: f(489) }, paddingTop: { default: "0px" } }, emits: ["click-left", f(499)], setup(n, { emit: r }) {
  const e = n, t = r, c = () => {
    t(x(496));
  }, l = () => {
    t(x(499));
  };
  return (a, y) => {
    const o = x;
    return _(), u(h(k), m(e, { class: "_remote-nav-bar", style: { backgroundColor: e[o(492)], paddingTop: e[o(481)] }, onClickRight: l, onClickLeft: c }), g({ _: 2 }, [a.$slots[o(486)] ? { name: o(486), fn: i(() => [p(a[o(487)], o(486))]), key: "0" } : void 0, a[o(487)].right ? { name: o(497), fn: i(() => [p(a.$slots, "right")]), key: "1" } : void 0]), 1040, [o(484)]);
  };
} });
export {
  T as _
};
