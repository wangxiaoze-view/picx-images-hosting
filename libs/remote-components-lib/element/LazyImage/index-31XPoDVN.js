import { defineComponent as j, ref as b, computed as A, onMounted as F, openBlock as l, createElementBlock as d, Fragment as v, renderList as H, createBlock as M, unref as w, withCtx as K, createElementVNode as P, createVNode as y, createCommentVNode as g, renderSlot as Z, toDisplayString as L } from "vue";
/* empty css               */
import { ElImage as $, ElIcon as q, ElMessage as D } from "element-plus";
import { Picture as S } from "@element-plus/icons-vue";
import { g as U, i as z, a as G, b as E, c as J } from "../AmountText/index-BGZt47l8.js";
import { _ as O } from "../PreviewImage/index-hyW3wsSU.js";
import { _ as W } from "../PreviewVideo/index-X3hfBE6t.js";
function h() {
  const i = ["_remote-lazy--image", "$slots", "setVisible", "cover", "number", "_remote-lazy--image-slot", "285574AEHbkc", "8dYAEQl", "2NZHOru", "map", "length", "previewVideoRef", "6331488nksDwj", "271245xbjzjU", "243582KdNQgK", "value", "error", "reviewImages", "10gdFTIJ", "RemoteLazyImage", "forEach", "filter", "60px", "_remote-lazy", "377824faWvQZ", "exceedType", "42zBMkrQ", "src", " + ", "_remote-lazy--exceed-default", "then", "100%", "div", "9KIRlVp", "url", "99+", "2195567FKUKAb", "221409qGqZoQ"];
  return h = function() {
    return i;
  }, h();
}
const _ = I;
function I(i, s) {
  const t = h();
  return I = function(n, p) {
    return n = n - 336, t[n];
  }, I(i, s);
}
(function(i, s) {
  const t = I, n = i();
  for (; ; )
    try {
      if (parseInt(t(345)) / 1 * (parseInt(t(343)) / 2) + parseInt(t(370)) / 3 * (parseInt(t(361)) / 4) + parseInt(t(350)) / 5 + -parseInt(t(351)) / 6 * (-parseInt(t(363)) / 7) + -parseInt(t(344)) / 8 * (-parseInt(t(336)) / 9) + -parseInt(t(355)) / 10 * (parseInt(t(373)) / 11) + -parseInt(t(349)) / 12 === s) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(h, 164153);
const Y = { class: _(360) }, X = ["onClick"], ee = { class: _(342) }, xe = { key: 0, class: _(366) }, te = { key: 1, class: "_remote-lazy--exceed-number" }, ce = j({ name: _(356), __name: "index", props: { image: {}, isLazy: { type: Boolean, default: !1 }, style: { default: { width: _(359), height: _(359) } }, limit: { default: 9 }, exceedType: { default: "default" }, isPreview: { type: Boolean, default: !0 } }, setup(i) {
  const s = _, { image: t, style: n, isLazy: p, exceedType: k, limit: f, isPreview: N } = i, V = b(null), B = b(null), u = b(U(t)[s(346)]((r) => ({ url: r, cover: r }))), Q = () => {
    const r = s;
    N && u[r(352)][r(357)]((a) => {
      const e = r;
      z(a[e(371)]) && (a[e(340)] = p ? G(a[e(371)]) : a[e(371)]), E(a[e(371)]) && J(a[e(371)])[e(367)]((c) => {
        const o = e;
        a[o(340)] = c;
      });
    });
  }, C = A(() => {
    const r = s, a = u.value[r(347)] - f;
    return a > 99 ? r(372) : a;
  }), T = (r, a) => {
    var c, o;
    const e = s;
    if (z(r.url)) {
      let x = a;
      u[e(352)][e(358)]((m) => E(m[e(371)])) && x--, (c = V[e(352)]) == null || c[e(354)](!0, { urlList: u.value[e(358)]((m) => z(m[e(371)])).map((m) => m[e(371)]), initIndex: x });
    } else E(r[e(371)]) ? (o = B.value) == null || o[e(339)](!0, { url: r[e(371)] }) : D[e(353)]("目前只支持图片和视频预览");
  };
  return F(Q), (r, a) => {
    const e = s;
    return l(), d("div", Y, [(l(!0), d(v, null, H(u[e(352)], (c, o) => {
      const x = e;
      return l(), d(x(369), { key: o, class: x(337), style: n, onClick: (R) => T(c, o) }, [o <= f ? (l(), M(w($), { key: 0, fit: "cover", src: c[x(340)], style: { width: x(368), height: "100%" } }, { error: K(() => [P(x(369), ee, [y(w(q), null, { default: K(() => [y(w(S))]), _: 1 })])]), _: 2 }, 1032, [x(364)])) : g("", !0), f !== 0 && o == f && t[x(347)] !== f ? (l(), d(v, { key: 1 }, [r[x(338)][x(362)] ? Z(r[x(338)], x(362), { key: 0 }) : (l(), d(v, { key: 1 }, [k === "default" ? (l(), d(x(369), xe, x(365) + L(C[x(352)]), 1)) : g("", !0), k === x(341) ? (l(), d(x(369), te, L(C[x(352)]), 1)) : g("", !0)], 64))], 64)) : g("", !0)], 8, X);
    }), 128)), y(O, { ref_key: "previewImageRef", ref: V }, null, 512), y(W, { ref_key: e(348), ref: B }, null, 512)]);
  };
} });
export {
  ce as _
};
