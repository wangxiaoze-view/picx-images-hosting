import { defineComponent as m, ref as b, openBlock as l, createBlock as p, unref as d, withCtx as I, createCommentVNode as h } from "vue";
/* empty css               */
import { ElDialog as g } from "element-plus";
import { _ as V } from "../VideoPlayer/index-BHAdPLMc.js";
const f = r;
(function(n, a) {
  const e = r, x = n();
  for (; ; )
    try {
      if (-parseInt(e(451)) / 1 * (-parseInt(e(438)) / 2) + -parseInt(e(450)) / 3 * (-parseInt(e(444)) / 4) + -parseInt(e(435)) / 5 + parseInt(e(443)) / 6 * (parseInt(e(445)) / 7) + -parseInt(e(448)) / 8 * (-parseInt(e(440)) / 9) + parseInt(e(452)) / 10 * (parseInt(e(453)) / 11) + parseInt(e(439)) / 12 * (-parseInt(e(441)) / 13) === a) break;
      x.push(x.shift());
    } catch {
      x.push(x.shift());
    }
})(s, 559001);
function r(n, a) {
  const e = s();
  return r = function(x, c) {
    return x = x - 434, e[x];
  }, r(n, a);
}
const L = m({ name: "PreviewVideo", __name: f(436), setup(n, { expose: a }) {
  const e = f, x = b(!1), c = b({ id: Date[e(447)]()[e(437)](), lang: "zh", volume: 1, autoplay: !0, screenShot: !0, playbackRate: [0.5, 0.75, 1, 1.5, 2], fluid: !0 });
  return a({ setVisible: (i, o) => {
    const t = e;
    x[t(454)] = i, c[t(454)] = Object[t(434)](c[t(454)], o || {});
  } }), (i, o) => {
    const t = e;
    return l(), p(d(g), { modelValue: x[t(454)], "onUpdate:modelValue": o[0] || (o[0] = (_) => x[t(454)] = _), title: t(442), width: t(455) }, { default: I(() => [x[t(454)] ? (l(), p(V, { key: 0, config: c.value, style: { "background-color": t(446) } }, null, 8, [t(449)])) : h("", !0)]), _: 1 }, 8, ["modelValue"]);
  };
} });
function s() {
  const n = ["4994538MYBFuL", "3893140aimXTJ", "7ywLVaL", "rgba(0, 0, 0, 0.87)", "now", "320680IRvUle", "config", "3QmsJee", "37558Dlpuct", "1154870QLQIbL", "44FRixvR", "value", "800", "assign", "1858360vmImhH", "index", "toString", "8etsNbz", "3480PUYaYQ", "27UVOZNa", "72059IpBrIZ", "视频预览"];
  return s = function() {
    return n;
  }, s();
}
export {
  L as _
};
