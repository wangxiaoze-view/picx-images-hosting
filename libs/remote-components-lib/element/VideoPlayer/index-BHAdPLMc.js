import { defineComponent as p, ref as d, watch as u, onMounted as f, openBlock as l, createElementBlock as b } from "vue";
import m from "xgplayer";
/* empty css                   */
const o = t;
function t(x, r) {
  const e = s();
  return t = function(n, c) {
    return n = n - 417, e[n];
  }, t(x, r);
}
(function(x, r) {
  const e = t, n = x();
  for (; ; )
    try {
      if (parseInt(e(426)) / 1 * (parseInt(e(423)) / 2) + parseInt(e(421)) / 3 * (-parseInt(e(417)) / 4) + -parseInt(e(428)) / 5 + -parseInt(e(418)) / 6 + parseInt(e(424)) / 7 + parseInt(e(429)) / 8 + parseInt(e(420)) / 9 === r) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(s, 639573);
const h = ["id"], X = p({ name: o(430), __name: o(431), props: { config: { default: { id: o(432), url: "" } } }, emits: [o(422)], setup(x, { emit: r }) {
  const { config: e } = x, n = r, c = d(null), i = () => {
    const a = t;
    e[a(427)] && e[a(427)] !== "" && (c[a(425)] = new m(e), n(a(422), c[a(425)]));
  };
  return u(e, () => {
    i();
  }, { deep: !0 }), f(i), (a, I) => {
    const _ = t;
    return l(), b(_(419), { id: e.id }, null, 8, h);
  };
} });
function s() {
  const x = ["VideoPlayer", "index", "video-player", "20trnhiZ", "1465224BRPmsK", "div", "8919873VNLXjc", "612615VSkbON", "player", "14FZihXe", "1091027dUUDBo", "value", "79018ncncWq", "url", "3081360XjLgFl", "6567920NXAoTr"];
  return s = function() {
    return x;
  }, s();
}
export {
  X as _
};
