import { defineComponent as Y, openBlock as P, createElementBlock as tt, createElementVNode as $t, warn as oe, watch as ie, unref as A, getCurrentInstance as wt, inject as z, ref as it, computed as O, mergeProps as zt, renderSlot as ot, useSlots as se, Text as ue, createBlock as at, resolveDynamicComponent as vt, withCtx as F, Fragment as ce, normalizeClass as St, createCommentVNode as Ot, provide as fe, reactive as le, toRef as Bt, toDisplayString as de, createVNode as Q, createTextVNode as X } from "vue";
const he = () => {
}, ge = Object.prototype.hasOwnProperty, Tt = (t, r) => ge.call(t, r), xt = (t) => typeof t == "string", jt = (t) => t !== null && typeof t == "object";
function ve(t) {
  for (var r = -1, e = t == null ? 0 : t.length, n = {}; ++r < e; ) {
    var a = t[r];
    n[a[0]] = a[1];
  }
  return n;
}
const pe = (t) => t === void 0, be = (t) => typeof t == "number", me = (t) => xt(t) ? !Number.isNaN(Number(t)) : !1;
class ye extends Error {
  constructor(r) {
    super(r), this.name = "ElementPlusError";
  }
}
function Lt(t, r) {
  {
    const e = xt(t) ? new ye(`[${t}] ${r}`) : t;
    console.warn(e);
  }
}
const $e = "utils/dom/style";
function Se(t, r = "px") {
  if (!t)
    return "";
  if (be(t) || me(t))
    return `${t}${r}`;
  if (xt(t))
    return t;
  Lt($e, "binding value must be a string or number");
}
/*! Element Plus Icons Vue v2.3.1 */
var Me = /* @__PURE__ */ Y({
  name: "Loading",
  __name: "loading",
  setup(t) {
    return (r, e) => (P(), tt("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      $t("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
      })
    ]));
  }
}), _e = Me;
const Wt = "__epPropKey", kt = (t) => t, we = (t) => jt(t) && !!t[Wt], Yt = (t, r) => {
  if (!jt(t) || we(t))
    return t;
  const { values: e, required: n, default: a, type: o, validator: i } = t, p = {
    type: o,
    required: !!n,
    validator: e || i ? (M) => {
      let _ = !1, S = [];
      if (e && (S = Array.from(e), Tt(t, "default") && S.push(a), _ || (_ = S.includes(M))), i && (_ || (_ = i(M))), !_ && S.length > 0) {
        const R = [...new Set(S)].map((B) => JSON.stringify(B)).join(", ");
        oe(`Invalid prop: validation failed${r ? ` for prop "${r}"` : ""}. Expected one of [${R}], got value ${JSON.stringify(M)}.`);
      }
      return _;
    } : void 0,
    [Wt]: !0
  };
  return Tt(t, "default") && (p.default = a), p;
}, Gt = (t) => ve(Object.entries(t).map(([r, e]) => [
  r,
  Yt(e, r)
])), Ct = kt([
  String,
  Object,
  Function
]), Ut = (t, r) => {
  if (t.install = (e) => {
    for (const n of [t, ...Object.values(r ?? {})])
      e.component(n.name, n);
  }, r)
    for (const [e, n] of Object.entries(r))
      t[e] = n;
  return t;
}, xe = (t) => (t.install = he, t), ke = ["", "default", "small", "large"], Ae = ({ from: t, replacement: r, scope: e, version: n, ref: a, type: o = "API" }, i) => {
  ie(() => A(i), (l) => {
    l && Lt(e, `[${o}] ${t} is about to be deprecated in version ${n}, please use ${r} instead.
For more detail, please visit: ${a}
`);
  }, {
    immediate: !0
  });
}, pt = "el", He = "is-", q = (t, r, e, n, a) => {
  let o = `${t}-${r}`;
  return e && (o += `-${e}`), n && (o += `__${n}`), a && (o += `--${a}`), o;
}, De = Symbol("namespaceContextKey"), Ne = (t) => {
  const r = wt() ? z(De, it(pt)) : it(pt);
  return O(() => A(r) || pt);
}, dt = (t, r) => {
  const e = Ne();
  return {
    namespace: e,
    b: (d = "") => q(e.value, t, d, "", ""),
    e: (d) => d ? q(e.value, t, "", d, "") : "",
    m: (d) => d ? q(e.value, t, "", "", d) : "",
    be: (d, b) => d && b ? q(e.value, t, d, b, "") : "",
    em: (d, b) => d && b ? q(e.value, t, "", d, b) : "",
    bm: (d, b) => d && b ? q(e.value, t, d, "", b) : "",
    bem: (d, b, D) => d && b && D ? q(e.value, t, d, b, D) : "",
    is: (d, ...b) => {
      const D = b.length >= 1 ? b[0] : !0;
      return d && D ? `${He}${d}` : "";
    },
    cssVar: (d) => {
      const b = {};
      for (const D in d)
        d[D] && (b[`--${e.value}-${D}`] = d[D]);
      return b;
    },
    cssVarName: (d) => `--${e.value}-${d}`,
    cssVarBlock: (d) => {
      const b = {};
      for (const D in d)
        d[D] && (b[`--${e.value}-${t}-${D}`] = d[D]);
      return b;
    },
    cssVarBlockName: (d) => `--${e.value}-${t}-${d}`
  };
}, Kt = (t) => {
  const r = wt();
  return O(() => {
    var e, n;
    return (n = (e = r == null ? void 0 : r.proxy) == null ? void 0 : e.$props) == null ? void 0 : n[t];
  });
}, Oe = Yt({
  type: String,
  values: ke,
  required: !1
}), Be = Symbol("size"), Te = () => {
  const t = z(Be, {});
  return O(() => A(t.size) || "");
}, Ce = Symbol(), It = it();
function Ie(t, r = void 0) {
  const e = wt() ? z(Ce, It) : It;
  return O(() => {
    var n, a;
    return (a = (n = e.value) == null ? void 0 : n[t]) != null ? a : r;
  });
}
var At = (t, r) => {
  const e = t.__vccOpts || t;
  for (const [n, a] of r)
    e[n] = a;
  return e;
};
const Ee = Gt({
  size: {
    type: kt([Number, String])
  },
  color: {
    type: String
  }
}), Pe = Y({
  name: "ElIcon",
  inheritAttrs: !1
}), Re = /* @__PURE__ */ Y({
  ...Pe,
  props: Ee,
  setup(t) {
    const r = t, e = dt("icon"), n = O(() => {
      const { size: a, color: o } = r;
      return !a && !o ? {} : {
        fontSize: pe(a) ? void 0 : Se(a),
        "--color": o
      };
    });
    return (a, o) => (P(), tt("i", zt({
      class: A(e).b(),
      style: A(n)
    }, a.$attrs), [
      ot(a.$slots, "default")
    ], 16));
  }
});
var Ve = /* @__PURE__ */ At(Re, [["__file", "icon.vue"]]);
const Et = Ut(Ve), Ht = Symbol("formContextKey"), qt = Symbol("formItemContextKey"), Fe = (t, r = {}) => {
  const e = it(void 0), n = r.prop ? e : Kt("size"), a = r.global ? e : Te(), o = r.form ? { size: void 0 } : z(Ht, void 0), i = r.formItem ? { size: void 0 } : z(qt, void 0);
  return O(() => n.value || A(t) || (i == null ? void 0 : i.size) || (o == null ? void 0 : o.size) || a.value || "");
}, Jt = (t) => {
  const r = Kt("disabled"), e = z(Ht, void 0);
  return O(() => r.value || A(t) || (e == null ? void 0 : e.disabled) || !1);
}, ze = () => {
  const t = z(Ht, void 0), r = z(qt, void 0);
  return {
    form: t,
    formItem: r
  };
}, Zt = Symbol("buttonGroupContextKey"), je = (t, r) => {
  Ae({
    from: "type.text",
    replacement: "link",
    version: "3.0.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
  }, O(() => t.type === "text"));
  const e = z(Zt, void 0), n = Ie("button"), { form: a } = ze(), o = Fe(O(() => e == null ? void 0 : e.size)), i = Jt(), l = it(), p = se(), M = O(() => t.type || (e == null ? void 0 : e.type) || ""), _ = O(() => {
    var m, d, b;
    return (b = (d = t.autoInsertSpace) != null ? d : (m = n.value) == null ? void 0 : m.autoInsertSpace) != null ? b : !1;
  }), S = O(() => t.tag === "button" ? {
    ariaDisabled: i.value || t.loading,
    disabled: i.value || t.loading,
    autofocus: t.autofocus,
    type: t.nativeType
  } : {}), R = O(() => {
    var m;
    const d = (m = p.default) == null ? void 0 : m.call(p);
    if (_.value && (d == null ? void 0 : d.length) === 1) {
      const b = d[0];
      if ((b == null ? void 0 : b.type) === ue) {
        const D = b.children;
        return new RegExp("^\\p{Unified_Ideograph}{2}$", "u").test(D.trim());
      }
    }
    return !1;
  });
  return {
    _disabled: i,
    _size: o,
    _type: M,
    _ref: l,
    _props: S,
    shouldAddSpace: R,
    handleClick: (m) => {
      t.nativeType === "reset" && (a == null || a.resetFields()), r("click", m);
    }
  };
}, Le = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  ""
], We = ["button", "submit", "reset"], Mt = Gt({
  size: Oe,
  disabled: Boolean,
  type: {
    type: String,
    values: Le,
    default: ""
  },
  icon: {
    type: Ct
  },
  nativeType: {
    type: String,
    values: We,
    default: "button"
  },
  loading: Boolean,
  loadingIcon: {
    type: Ct,
    default: () => _e
  },
  plain: Boolean,
  text: Boolean,
  link: Boolean,
  bg: Boolean,
  autofocus: Boolean,
  round: Boolean,
  circle: Boolean,
  color: String,
  dark: Boolean,
  autoInsertSpace: {
    type: Boolean,
    default: void 0
  },
  tag: {
    type: kt([String, Object]),
    default: "button"
  }
}), Ye = {
  click: (t) => t instanceof MouseEvent
};
function H(t, r) {
  Ge(t) && (t = "100%");
  var e = Ue(t);
  return t = r === 360 ? t : Math.min(r, Math.max(0, parseFloat(t))), e && (t = parseInt(String(t * r), 10) / 100), Math.abs(t - r) < 1e-6 ? 1 : (r === 360 ? t = (t < 0 ? t % r + r : t % r) / parseFloat(String(r)) : t = t % r / parseFloat(String(r)), t);
}
function ft(t) {
  return Math.min(1, Math.max(0, t));
}
function Ge(t) {
  return typeof t == "string" && t.indexOf(".") !== -1 && parseFloat(t) === 1;
}
function Ue(t) {
  return typeof t == "string" && t.indexOf("%") !== -1;
}
function Qt(t) {
  return t = parseFloat(t), (isNaN(t) || t < 0 || t > 1) && (t = 1), t;
}
function lt(t) {
  return t <= 1 ? "".concat(Number(t) * 100, "%") : t;
}
function J(t) {
  return t.length === 1 ? "0" + t : String(t);
}
function Ke(t, r, e) {
  return {
    r: H(t, 255) * 255,
    g: H(r, 255) * 255,
    b: H(e, 255) * 255
  };
}
function Pt(t, r, e) {
  t = H(t, 255), r = H(r, 255), e = H(e, 255);
  var n = Math.max(t, r, e), a = Math.min(t, r, e), o = 0, i = 0, l = (n + a) / 2;
  if (n === a)
    i = 0, o = 0;
  else {
    var p = n - a;
    switch (i = l > 0.5 ? p / (2 - n - a) : p / (n + a), n) {
      case t:
        o = (r - e) / p + (r < e ? 6 : 0);
        break;
      case r:
        o = (e - t) / p + 2;
        break;
      case e:
        o = (t - r) / p + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s: i, l };
}
function bt(t, r, e) {
  return e < 0 && (e += 1), e > 1 && (e -= 1), e < 1 / 6 ? t + (r - t) * (6 * e) : e < 1 / 2 ? r : e < 2 / 3 ? t + (r - t) * (2 / 3 - e) * 6 : t;
}
function qe(t, r, e) {
  var n, a, o;
  if (t = H(t, 360), r = H(r, 100), e = H(e, 100), r === 0)
    a = e, o = e, n = e;
  else {
    var i = e < 0.5 ? e * (1 + r) : e + r - e * r, l = 2 * e - i;
    n = bt(l, i, t + 1 / 3), a = bt(l, i, t), o = bt(l, i, t - 1 / 3);
  }
  return { r: n * 255, g: a * 255, b: o * 255 };
}
function Rt(t, r, e) {
  t = H(t, 255), r = H(r, 255), e = H(e, 255);
  var n = Math.max(t, r, e), a = Math.min(t, r, e), o = 0, i = n, l = n - a, p = n === 0 ? 0 : l / n;
  if (n === a)
    o = 0;
  else {
    switch (n) {
      case t:
        o = (r - e) / l + (r < e ? 6 : 0);
        break;
      case r:
        o = (e - t) / l + 2;
        break;
      case e:
        o = (t - r) / l + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s: p, v: i };
}
function Je(t, r, e) {
  t = H(t, 360) * 6, r = H(r, 100), e = H(e, 100);
  var n = Math.floor(t), a = t - n, o = e * (1 - r), i = e * (1 - a * r), l = e * (1 - (1 - a) * r), p = n % 6, M = [e, i, o, o, l, e][p], _ = [l, e, e, i, o, o][p], S = [o, o, l, e, e, i][p];
  return { r: M * 255, g: _ * 255, b: S * 255 };
}
function Vt(t, r, e, n) {
  var a = [
    J(Math.round(t).toString(16)),
    J(Math.round(r).toString(16)),
    J(Math.round(e).toString(16))
  ];
  return n && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) : a.join("");
}
function Ze(t, r, e, n, a) {
  var o = [
    J(Math.round(t).toString(16)),
    J(Math.round(r).toString(16)),
    J(Math.round(e).toString(16)),
    J(Qe(n))
  ];
  return a && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) && o[3].startsWith(o[3].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0) : o.join("");
}
function Qe(t) {
  return Math.round(parseFloat(t) * 255).toString(16);
}
function Ft(t) {
  return C(t) / 255;
}
function C(t) {
  return parseInt(t, 16);
}
function Xe(t) {
  return {
    r: t >> 16,
    g: (t & 65280) >> 8,
    b: t & 255
  };
}
var _t = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function tr(t) {
  var r = { r: 0, g: 0, b: 0 }, e = 1, n = null, a = null, o = null, i = !1, l = !1;
  return typeof t == "string" && (t = nr(t)), typeof t == "object" && (V(t.r) && V(t.g) && V(t.b) ? (r = Ke(t.r, t.g, t.b), i = !0, l = String(t.r).substr(-1) === "%" ? "prgb" : "rgb") : V(t.h) && V(t.s) && V(t.v) ? (n = lt(t.s), a = lt(t.v), r = Je(t.h, n, a), i = !0, l = "hsv") : V(t.h) && V(t.s) && V(t.l) && (n = lt(t.s), o = lt(t.l), r = qe(t.h, n, o), i = !0, l = "hsl"), Object.prototype.hasOwnProperty.call(t, "a") && (e = t.a)), e = Qt(e), {
    ok: i,
    format: t.format || l,
    r: Math.min(255, Math.max(r.r, 0)),
    g: Math.min(255, Math.max(r.g, 0)),
    b: Math.min(255, Math.max(r.b, 0)),
    a: e
  };
}
var er = "[-\\+]?\\d+%?", rr = "[-\\+]?\\d*\\.\\d+%?", W = "(?:".concat(rr, ")|(?:").concat(er, ")"), mt = "[\\s|\\(]+(".concat(W, ")[,|\\s]+(").concat(W, ")[,|\\s]+(").concat(W, ")\\s*\\)?"), yt = "[\\s|\\(]+(".concat(W, ")[,|\\s]+(").concat(W, ")[,|\\s]+(").concat(W, ")[,|\\s]+(").concat(W, ")\\s*\\)?"), E = {
  CSS_UNIT: new RegExp(W),
  rgb: new RegExp("rgb" + mt),
  rgba: new RegExp("rgba" + yt),
  hsl: new RegExp("hsl" + mt),
  hsla: new RegExp("hsla" + yt),
  hsv: new RegExp("hsv" + mt),
  hsva: new RegExp("hsva" + yt),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function nr(t) {
  if (t = t.trim().toLowerCase(), t.length === 0)
    return !1;
  var r = !1;
  if (_t[t])
    t = _t[t], r = !0;
  else if (t === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var e = E.rgb.exec(t);
  return e ? { r: e[1], g: e[2], b: e[3] } : (e = E.rgba.exec(t), e ? { r: e[1], g: e[2], b: e[3], a: e[4] } : (e = E.hsl.exec(t), e ? { h: e[1], s: e[2], l: e[3] } : (e = E.hsla.exec(t), e ? { h: e[1], s: e[2], l: e[3], a: e[4] } : (e = E.hsv.exec(t), e ? { h: e[1], s: e[2], v: e[3] } : (e = E.hsva.exec(t), e ? { h: e[1], s: e[2], v: e[3], a: e[4] } : (e = E.hex8.exec(t), e ? {
    r: C(e[1]),
    g: C(e[2]),
    b: C(e[3]),
    a: Ft(e[4]),
    format: r ? "name" : "hex8"
  } : (e = E.hex6.exec(t), e ? {
    r: C(e[1]),
    g: C(e[2]),
    b: C(e[3]),
    format: r ? "name" : "hex"
  } : (e = E.hex4.exec(t), e ? {
    r: C(e[1] + e[1]),
    g: C(e[2] + e[2]),
    b: C(e[3] + e[3]),
    a: Ft(e[4] + e[4]),
    format: r ? "name" : "hex8"
  } : (e = E.hex3.exec(t), e ? {
    r: C(e[1] + e[1]),
    g: C(e[2] + e[2]),
    b: C(e[3] + e[3]),
    format: r ? "name" : "hex"
  } : !1)))))))));
}
function V(t) {
  return !!E.CSS_UNIT.exec(String(t));
}
var ar = (
  /** @class */
  function() {
    function t(r, e) {
      r === void 0 && (r = ""), e === void 0 && (e = {});
      var n;
      if (r instanceof t)
        return r;
      typeof r == "number" && (r = Xe(r)), this.originalInput = r;
      var a = tr(r);
      this.originalInput = r, this.r = a.r, this.g = a.g, this.b = a.b, this.a = a.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (n = e.format) !== null && n !== void 0 ? n : a.format, this.gradientType = e.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = a.ok;
    }
    return t.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, t.prototype.isLight = function() {
      return !this.isDark();
    }, t.prototype.getBrightness = function() {
      var r = this.toRgb();
      return (r.r * 299 + r.g * 587 + r.b * 114) / 1e3;
    }, t.prototype.getLuminance = function() {
      var r = this.toRgb(), e, n, a, o = r.r / 255, i = r.g / 255, l = r.b / 255;
      return o <= 0.03928 ? e = o / 12.92 : e = Math.pow((o + 0.055) / 1.055, 2.4), i <= 0.03928 ? n = i / 12.92 : n = Math.pow((i + 0.055) / 1.055, 2.4), l <= 0.03928 ? a = l / 12.92 : a = Math.pow((l + 0.055) / 1.055, 2.4), 0.2126 * e + 0.7152 * n + 0.0722 * a;
    }, t.prototype.getAlpha = function() {
      return this.a;
    }, t.prototype.setAlpha = function(r) {
      return this.a = Qt(r), this.roundA = Math.round(100 * this.a) / 100, this;
    }, t.prototype.isMonochrome = function() {
      var r = this.toHsl().s;
      return r === 0;
    }, t.prototype.toHsv = function() {
      var r = Rt(this.r, this.g, this.b);
      return { h: r.h * 360, s: r.s, v: r.v, a: this.a };
    }, t.prototype.toHsvString = function() {
      var r = Rt(this.r, this.g, this.b), e = Math.round(r.h * 360), n = Math.round(r.s * 100), a = Math.round(r.v * 100);
      return this.a === 1 ? "hsv(".concat(e, ", ").concat(n, "%, ").concat(a, "%)") : "hsva(".concat(e, ", ").concat(n, "%, ").concat(a, "%, ").concat(this.roundA, ")");
    }, t.prototype.toHsl = function() {
      var r = Pt(this.r, this.g, this.b);
      return { h: r.h * 360, s: r.s, l: r.l, a: this.a };
    }, t.prototype.toHslString = function() {
      var r = Pt(this.r, this.g, this.b), e = Math.round(r.h * 360), n = Math.round(r.s * 100), a = Math.round(r.l * 100);
      return this.a === 1 ? "hsl(".concat(e, ", ").concat(n, "%, ").concat(a, "%)") : "hsla(".concat(e, ", ").concat(n, "%, ").concat(a, "%, ").concat(this.roundA, ")");
    }, t.prototype.toHex = function(r) {
      return r === void 0 && (r = !1), Vt(this.r, this.g, this.b, r);
    }, t.prototype.toHexString = function(r) {
      return r === void 0 && (r = !1), "#" + this.toHex(r);
    }, t.prototype.toHex8 = function(r) {
      return r === void 0 && (r = !1), Ze(this.r, this.g, this.b, this.a, r);
    }, t.prototype.toHex8String = function(r) {
      return r === void 0 && (r = !1), "#" + this.toHex8(r);
    }, t.prototype.toHexShortString = function(r) {
      return r === void 0 && (r = !1), this.a === 1 ? this.toHexString(r) : this.toHex8String(r);
    }, t.prototype.toRgb = function() {
      return {
        r: Math.round(this.r),
        g: Math.round(this.g),
        b: Math.round(this.b),
        a: this.a
      };
    }, t.prototype.toRgbString = function() {
      var r = Math.round(this.r), e = Math.round(this.g), n = Math.round(this.b);
      return this.a === 1 ? "rgb(".concat(r, ", ").concat(e, ", ").concat(n, ")") : "rgba(".concat(r, ", ").concat(e, ", ").concat(n, ", ").concat(this.roundA, ")");
    }, t.prototype.toPercentageRgb = function() {
      var r = function(e) {
        return "".concat(Math.round(H(e, 255) * 100), "%");
      };
      return {
        r: r(this.r),
        g: r(this.g),
        b: r(this.b),
        a: this.a
      };
    }, t.prototype.toPercentageRgbString = function() {
      var r = function(e) {
        return Math.round(H(e, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(r(this.r), "%, ").concat(r(this.g), "%, ").concat(r(this.b), "%)") : "rgba(".concat(r(this.r), "%, ").concat(r(this.g), "%, ").concat(r(this.b), "%, ").concat(this.roundA, ")");
    }, t.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var r = "#" + Vt(this.r, this.g, this.b, !1), e = 0, n = Object.entries(_t); e < n.length; e++) {
        var a = n[e], o = a[0], i = a[1];
        if (r === i)
          return o;
      }
      return !1;
    }, t.prototype.toString = function(r) {
      var e = !!r;
      r = r ?? this.format;
      var n = !1, a = this.a < 1 && this.a >= 0, o = !e && a && (r.startsWith("hex") || r === "name");
      return o ? r === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (r === "rgb" && (n = this.toRgbString()), r === "prgb" && (n = this.toPercentageRgbString()), (r === "hex" || r === "hex6") && (n = this.toHexString()), r === "hex3" && (n = this.toHexString(!0)), r === "hex4" && (n = this.toHex8String(!0)), r === "hex8" && (n = this.toHex8String()), r === "name" && (n = this.toName()), r === "hsl" && (n = this.toHslString()), r === "hsv" && (n = this.toHsvString()), n || this.toHexString());
    }, t.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, t.prototype.clone = function() {
      return new t(this.toString());
    }, t.prototype.lighten = function(r) {
      r === void 0 && (r = 10);
      var e = this.toHsl();
      return e.l += r / 100, e.l = ft(e.l), new t(e);
    }, t.prototype.brighten = function(r) {
      r === void 0 && (r = 10);
      var e = this.toRgb();
      return e.r = Math.max(0, Math.min(255, e.r - Math.round(255 * -(r / 100)))), e.g = Math.max(0, Math.min(255, e.g - Math.round(255 * -(r / 100)))), e.b = Math.max(0, Math.min(255, e.b - Math.round(255 * -(r / 100)))), new t(e);
    }, t.prototype.darken = function(r) {
      r === void 0 && (r = 10);
      var e = this.toHsl();
      return e.l -= r / 100, e.l = ft(e.l), new t(e);
    }, t.prototype.tint = function(r) {
      return r === void 0 && (r = 10), this.mix("white", r);
    }, t.prototype.shade = function(r) {
      return r === void 0 && (r = 10), this.mix("black", r);
    }, t.prototype.desaturate = function(r) {
      r === void 0 && (r = 10);
      var e = this.toHsl();
      return e.s -= r / 100, e.s = ft(e.s), new t(e);
    }, t.prototype.saturate = function(r) {
      r === void 0 && (r = 10);
      var e = this.toHsl();
      return e.s += r / 100, e.s = ft(e.s), new t(e);
    }, t.prototype.greyscale = function() {
      return this.desaturate(100);
    }, t.prototype.spin = function(r) {
      var e = this.toHsl(), n = (e.h + r) % 360;
      return e.h = n < 0 ? 360 + n : n, new t(e);
    }, t.prototype.mix = function(r, e) {
      e === void 0 && (e = 50);
      var n = this.toRgb(), a = new t(r).toRgb(), o = e / 100, i = {
        r: (a.r - n.r) * o + n.r,
        g: (a.g - n.g) * o + n.g,
        b: (a.b - n.b) * o + n.b,
        a: (a.a - n.a) * o + n.a
      };
      return new t(i);
    }, t.prototype.analogous = function(r, e) {
      r === void 0 && (r = 6), e === void 0 && (e = 30);
      var n = this.toHsl(), a = 360 / e, o = [this];
      for (n.h = (n.h - (a * r >> 1) + 720) % 360; --r; )
        n.h = (n.h + a) % 360, o.push(new t(n));
      return o;
    }, t.prototype.complement = function() {
      var r = this.toHsl();
      return r.h = (r.h + 180) % 360, new t(r);
    }, t.prototype.monochromatic = function(r) {
      r === void 0 && (r = 6);
      for (var e = this.toHsv(), n = e.h, a = e.s, o = e.v, i = [], l = 1 / r; r--; )
        i.push(new t({ h: n, s: a, v: o })), o = (o + l) % 1;
      return i;
    }, t.prototype.splitcomplement = function() {
      var r = this.toHsl(), e = r.h;
      return [
        this,
        new t({ h: (e + 72) % 360, s: r.s, l: r.l }),
        new t({ h: (e + 216) % 360, s: r.s, l: r.l })
      ];
    }, t.prototype.onBackground = function(r) {
      var e = this.toRgb(), n = new t(r).toRgb(), a = e.a + n.a * (1 - e.a);
      return new t({
        r: (e.r * e.a + n.r * n.a * (1 - e.a)) / a,
        g: (e.g * e.a + n.g * n.a * (1 - e.a)) / a,
        b: (e.b * e.a + n.b * n.a * (1 - e.a)) / a,
        a
      });
    }, t.prototype.triad = function() {
      return this.polyad(3);
    }, t.prototype.tetrad = function() {
      return this.polyad(4);
    }, t.prototype.polyad = function(r) {
      for (var e = this.toHsl(), n = e.h, a = [this], o = 360 / r, i = 1; i < r; i++)
        a.push(new t({ h: (n + i * o) % 360, s: e.s, l: e.l }));
      return a;
    }, t.prototype.equals = function(r) {
      return this.toRgbString() === new t(r).toRgbString();
    }, t;
  }()
);
function L(t, r = 20) {
  return t.mix("#141414", r).toString();
}
function or(t) {
  const r = Jt(), e = dt("button");
  return O(() => {
    let n = {}, a = t.color;
    if (a) {
      const o = a.match(/var\((.*?)\)/);
      o && (a = window.getComputedStyle(window.document.documentElement).getPropertyValue(o[1]));
      const i = new ar(a), l = t.dark ? i.tint(20).toString() : L(i, 20);
      if (t.plain)
        n = e.cssVarBlock({
          "bg-color": t.dark ? L(i, 90) : i.tint(90).toString(),
          "text-color": a,
          "border-color": t.dark ? L(i, 50) : i.tint(50).toString(),
          "hover-text-color": `var(${e.cssVarName("color-white")})`,
          "hover-bg-color": a,
          "hover-border-color": a,
          "active-bg-color": l,
          "active-text-color": `var(${e.cssVarName("color-white")})`,
          "active-border-color": l
        }), r.value && (n[e.cssVarBlockName("disabled-bg-color")] = t.dark ? L(i, 90) : i.tint(90).toString(), n[e.cssVarBlockName("disabled-text-color")] = t.dark ? L(i, 50) : i.tint(50).toString(), n[e.cssVarBlockName("disabled-border-color")] = t.dark ? L(i, 80) : i.tint(80).toString());
      else {
        const p = t.dark ? L(i, 30) : i.tint(30).toString(), M = i.isDark() ? `var(${e.cssVarName("color-white")})` : `var(${e.cssVarName("color-black")})`;
        if (n = e.cssVarBlock({
          "bg-color": a,
          "text-color": M,
          "border-color": a,
          "hover-bg-color": p,
          "hover-text-color": M,
          "hover-border-color": p,
          "active-bg-color": l,
          "active-border-color": l
        }), r.value) {
          const _ = t.dark ? L(i, 50) : i.tint(50).toString();
          n[e.cssVarBlockName("disabled-bg-color")] = _, n[e.cssVarBlockName("disabled-text-color")] = t.dark ? "rgba(255, 255, 255, 0.5)" : `var(${e.cssVarName("color-white")})`, n[e.cssVarBlockName("disabled-border-color")] = _;
        }
      }
    }
    return n;
  });
}
const ir = Y({
  name: "ElButton"
}), sr = /* @__PURE__ */ Y({
  ...ir,
  props: Mt,
  emits: Ye,
  setup(t, { expose: r, emit: e }) {
    const n = t, a = or(n), o = dt("button"), { _ref: i, _size: l, _type: p, _disabled: M, _props: _, shouldAddSpace: S, handleClick: R } = je(n, e), B = O(() => [
      o.b(),
      o.m(p.value),
      o.m(l.value),
      o.is("disabled", M.value),
      o.is("loading", n.loading),
      o.is("plain", n.plain),
      o.is("round", n.round),
      o.is("circle", n.circle),
      o.is("text", n.text),
      o.is("link", n.link),
      o.is("has-bg", n.bg)
    ]);
    return r({
      ref: i,
      size: l,
      type: p,
      disabled: M,
      shouldAddSpace: S
    }), (m, d) => (P(), at(vt(m.tag), zt({
      ref_key: "_ref",
      ref: i
    }, A(_), {
      class: A(B),
      style: A(a),
      onClick: A(R)
    }), {
      default: F(() => [
        m.loading ? (P(), tt(ce, { key: 0 }, [
          m.$slots.loading ? ot(m.$slots, "loading", { key: 0 }) : (P(), at(A(Et), {
            key: 1,
            class: St(A(o).is("loading"))
          }, {
            default: F(() => [
              (P(), at(vt(m.loadingIcon)))
            ]),
            _: 1
          }, 8, ["class"]))
        ], 64)) : m.icon || m.$slots.icon ? (P(), at(A(Et), { key: 1 }, {
          default: F(() => [
            m.icon ? (P(), at(vt(m.icon), { key: 0 })) : ot(m.$slots, "icon", { key: 1 })
          ]),
          _: 3
        })) : Ot("v-if", !0),
        m.$slots.default ? (P(), tt("span", {
          key: 2,
          class: St({ [A(o).em("text", "expand")]: A(S) })
        }, [
          ot(m.$slots, "default")
        ], 2)) : Ot("v-if", !0)
      ]),
      _: 3
    }, 16, ["class", "style", "onClick"]));
  }
});
var ur = /* @__PURE__ */ At(sr, [["__file", "button.vue"]]);
const cr = {
  size: Mt.size,
  type: Mt.type
}, fr = Y({
  name: "ElButtonGroup"
}), lr = /* @__PURE__ */ Y({
  ...fr,
  props: cr,
  setup(t) {
    const r = t;
    fe(Zt, le({
      size: Bt(r, "size"),
      type: Bt(r, "type")
    }));
    const e = dt("button");
    return (n, a) => (P(), tt("div", {
      class: St(A(e).b("group"))
    }, [
      ot(n.$slots, "default")
    ], 2));
  }
});
var Xt = /* @__PURE__ */ At(lr, [["__file", "button-group.vue"]]);
const dr = Ut(ur, {
  ButtonGroup: Xt
});
xe(Xt);
var hr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function gr(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var te = { exports: {} };
(function(t, r) {
  (function(e, n) {
    t.exports = n();
  })(hr, function() {
    var e = 1e3, n = 6e4, a = 36e5, o = "millisecond", i = "second", l = "minute", p = "hour", M = "day", _ = "week", S = "month", R = "quarter", B = "year", m = "date", d = "Invalid Date", b = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, D = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, ne = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(h) {
      var c = ["th", "st", "nd", "rd"], s = h % 100;
      return "[" + h + (c[(s - 20) % 10] || c[s] || c[0]) + "]";
    } }, ht = function(h, c, s) {
      var f = String(h);
      return !f || f.length >= c ? h : "" + Array(c + 1 - f.length).join(s) + h;
    }, ae = { s: ht, z: function(h) {
      var c = -h.utcOffset(), s = Math.abs(c), f = Math.floor(s / 60), u = s % 60;
      return (c <= 0 ? "+" : "-") + ht(f, 2, "0") + ":" + ht(u, 2, "0");
    }, m: function h(c, s) {
      if (c.date() < s.date()) return -h(s, c);
      var f = 12 * (s.year() - c.year()) + (s.month() - c.month()), u = c.clone().add(f, S), g = s - u < 0, v = c.clone().add(f + (g ? -1 : 1), S);
      return +(-(f + (s - u) / (g ? u - v : v - u)) || 0);
    }, a: function(h) {
      return h < 0 ? Math.ceil(h) || 0 : Math.floor(h);
    }, p: function(h) {
      return { M: S, y: B, w: _, d: M, D: m, h: p, m: l, s: i, ms: o, Q: R }[h] || String(h || "").toLowerCase().replace(/s$/, "");
    }, u: function(h) {
      return h === void 0;
    } }, et = "en", G = {};
    G[et] = ne;
    var Dt = "$isDayjsObject", gt = function(h) {
      return h instanceof ut || !(!h || !h[Dt]);
    }, st = function h(c, s, f) {
      var u;
      if (!c) return et;
      if (typeof c == "string") {
        var g = c.toLowerCase();
        G[g] && (u = g), s && (G[g] = s, u = g);
        var v = c.split("-");
        if (!u && v.length > 1) return h(v[0]);
      } else {
        var $ = c.name;
        G[$] = c, u = $;
      }
      return !f && u && (et = u), u || !f && et;
    }, x = function(h, c) {
      if (gt(h)) return h.clone();
      var s = typeof c == "object" ? c : {};
      return s.date = h, s.args = arguments, new ut(s);
    }, y = ae;
    y.l = st, y.i = gt, y.w = function(h, c) {
      return x(h, { locale: c.$L, utc: c.$u, x: c.$x, $offset: c.$offset });
    };
    var ut = function() {
      function h(s) {
        this.$L = st(s.locale, null, !0), this.parse(s), this.$x = this.$x || s.x || {}, this[Dt] = !0;
      }
      var c = h.prototype;
      return c.parse = function(s) {
        this.$d = function(f) {
          var u = f.date, g = f.utc;
          if (u === null) return /* @__PURE__ */ new Date(NaN);
          if (y.u(u)) return /* @__PURE__ */ new Date();
          if (u instanceof Date) return new Date(u);
          if (typeof u == "string" && !/Z$/i.test(u)) {
            var v = u.match(b);
            if (v) {
              var $ = v[2] - 1 || 0, w = (v[7] || "0").substring(0, 3);
              return g ? new Date(Date.UTC(v[1], $, v[3] || 1, v[4] || 0, v[5] || 0, v[6] || 0, w)) : new Date(v[1], $, v[3] || 1, v[4] || 0, v[5] || 0, v[6] || 0, w);
            }
          }
          return new Date(u);
        }(s), this.init();
      }, c.init = function() {
        var s = this.$d;
        this.$y = s.getFullYear(), this.$M = s.getMonth(), this.$D = s.getDate(), this.$W = s.getDay(), this.$H = s.getHours(), this.$m = s.getMinutes(), this.$s = s.getSeconds(), this.$ms = s.getMilliseconds();
      }, c.$utils = function() {
        return y;
      }, c.isValid = function() {
        return this.$d.toString() !== d;
      }, c.isSame = function(s, f) {
        var u = x(s);
        return this.startOf(f) <= u && u <= this.endOf(f);
      }, c.isAfter = function(s, f) {
        return x(s) < this.startOf(f);
      }, c.isBefore = function(s, f) {
        return this.endOf(f) < x(s);
      }, c.$g = function(s, f, u) {
        return y.u(s) ? this[f] : this.set(u, s);
      }, c.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, c.valueOf = function() {
        return this.$d.getTime();
      }, c.startOf = function(s, f) {
        var u = this, g = !!y.u(f) || f, v = y.p(s), $ = function(K, T) {
          var j = y.w(u.$u ? Date.UTC(u.$y, T, K) : new Date(u.$y, T, K), u);
          return g ? j : j.endOf(M);
        }, w = function(K, T) {
          return y.w(u.toDate()[K].apply(u.toDate("s"), (g ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(T)), u);
        }, k = this.$W, N = this.$M, I = this.$D, Z = "set" + (this.$u ? "UTC" : "");
        switch (v) {
          case B:
            return g ? $(1, 0) : $(31, 11);
          case S:
            return g ? $(1, N) : $(0, N + 1);
          case _:
            var U = this.$locale().weekStart || 0, rt = (k < U ? k + 7 : k) - U;
            return $(g ? I - rt : I + (6 - rt), N);
          case M:
          case m:
            return w(Z + "Hours", 0);
          case p:
            return w(Z + "Minutes", 1);
          case l:
            return w(Z + "Seconds", 2);
          case i:
            return w(Z + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, c.endOf = function(s) {
        return this.startOf(s, !1);
      }, c.$set = function(s, f) {
        var u, g = y.p(s), v = "set" + (this.$u ? "UTC" : ""), $ = (u = {}, u[M] = v + "Date", u[m] = v + "Date", u[S] = v + "Month", u[B] = v + "FullYear", u[p] = v + "Hours", u[l] = v + "Minutes", u[i] = v + "Seconds", u[o] = v + "Milliseconds", u)[g], w = g === M ? this.$D + (f - this.$W) : f;
        if (g === S || g === B) {
          var k = this.clone().set(m, 1);
          k.$d[$](w), k.init(), this.$d = k.set(m, Math.min(this.$D, k.daysInMonth())).$d;
        } else $ && this.$d[$](w);
        return this.init(), this;
      }, c.set = function(s, f) {
        return this.clone().$set(s, f);
      }, c.get = function(s) {
        return this[y.p(s)]();
      }, c.add = function(s, f) {
        var u, g = this;
        s = Number(s);
        var v = y.p(f), $ = function(N) {
          var I = x(g);
          return y.w(I.date(I.date() + Math.round(N * s)), g);
        };
        if (v === S) return this.set(S, this.$M + s);
        if (v === B) return this.set(B, this.$y + s);
        if (v === M) return $(1);
        if (v === _) return $(7);
        var w = (u = {}, u[l] = n, u[p] = a, u[i] = e, u)[v] || 1, k = this.$d.getTime() + s * w;
        return y.w(k, this);
      }, c.subtract = function(s, f) {
        return this.add(-1 * s, f);
      }, c.format = function(s) {
        var f = this, u = this.$locale();
        if (!this.isValid()) return u.invalidDate || d;
        var g = s || "YYYY-MM-DDTHH:mm:ssZ", v = y.z(this), $ = this.$H, w = this.$m, k = this.$M, N = u.weekdays, I = u.months, Z = u.meridiem, U = function(T, j, nt, ct) {
          return T && (T[j] || T(f, g)) || nt[j].slice(0, ct);
        }, rt = function(T) {
          return y.s($ % 12 || 12, T, "0");
        }, K = Z || function(T, j, nt) {
          var ct = T < 12 ? "AM" : "PM";
          return nt ? ct.toLowerCase() : ct;
        };
        return g.replace(D, function(T, j) {
          return j || function(nt) {
            switch (nt) {
              case "YY":
                return String(f.$y).slice(-2);
              case "YYYY":
                return y.s(f.$y, 4, "0");
              case "M":
                return k + 1;
              case "MM":
                return y.s(k + 1, 2, "0");
              case "MMM":
                return U(u.monthsShort, k, I, 3);
              case "MMMM":
                return U(I, k);
              case "D":
                return f.$D;
              case "DD":
                return y.s(f.$D, 2, "0");
              case "d":
                return String(f.$W);
              case "dd":
                return U(u.weekdaysMin, f.$W, N, 2);
              case "ddd":
                return U(u.weekdaysShort, f.$W, N, 3);
              case "dddd":
                return N[f.$W];
              case "H":
                return String($);
              case "HH":
                return y.s($, 2, "0");
              case "h":
                return rt(1);
              case "hh":
                return rt(2);
              case "a":
                return K($, w, !0);
              case "A":
                return K($, w, !1);
              case "m":
                return String(w);
              case "mm":
                return y.s(w, 2, "0");
              case "s":
                return String(f.$s);
              case "ss":
                return y.s(f.$s, 2, "0");
              case "SSS":
                return y.s(f.$ms, 3, "0");
              case "Z":
                return v;
            }
            return null;
          }(T) || v.replace(":", "");
        });
      }, c.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, c.diff = function(s, f, u) {
        var g, v = this, $ = y.p(f), w = x(s), k = (w.utcOffset() - this.utcOffset()) * n, N = this - w, I = function() {
          return y.m(v, w);
        };
        switch ($) {
          case B:
            g = I() / 12;
            break;
          case S:
            g = I();
            break;
          case R:
            g = I() / 3;
            break;
          case _:
            g = (N - k) / 6048e5;
            break;
          case M:
            g = (N - k) / 864e5;
            break;
          case p:
            g = N / a;
            break;
          case l:
            g = N / n;
            break;
          case i:
            g = N / e;
            break;
          default:
            g = N;
        }
        return u ? g : y.a(g);
      }, c.daysInMonth = function() {
        return this.endOf(S).$D;
      }, c.$locale = function() {
        return G[this.$L];
      }, c.locale = function(s, f) {
        if (!s) return this.$L;
        var u = this.clone(), g = st(s, f, !0);
        return g && (u.$L = g), u;
      }, c.clone = function() {
        return y.w(this.$d, this);
      }, c.toDate = function() {
        return new Date(this.valueOf());
      }, c.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, c.toISOString = function() {
        return this.$d.toISOString();
      }, c.toString = function() {
        return this.$d.toUTCString();
      }, h;
    }(), Nt = ut.prototype;
    return x.prototype = Nt, [["$ms", o], ["$s", i], ["$m", l], ["$H", p], ["$W", M], ["$M", S], ["$y", B], ["$D", m]].forEach(function(h) {
      Nt[h[1]] = function(c) {
        return this.$g(c, h[0], h[1]);
      };
    }), x.extend = function(h, c) {
      return h.$i || (h(c, ut, x), h.$i = !0), x;
    }, x.locale = st, x.isDayjs = gt, x.unix = function(h) {
      return x(1e3 * h);
    }, x.en = G[et], x.Ls = G, x.p = {}, x;
  });
})(te);
var vr = te.exports;
const pr = /* @__PURE__ */ gr(vr), br = { class: "mb-4" }, ee = /* @__PURE__ */ Y({
  name: "ComponentA",
  __name: "index",
  props: {
    msg: { default: "ComponentA组件" }
  },
  setup(t) {
    return (r, e) => {
      const n = dr;
      return P(), tt("div", null, [
        $t("p", null, de(r.msg), 1),
        $t("div", br, [
          Q(n, null, {
            default: F(() => [
              X("Default")
            ]),
            _: 1
          }),
          Q(n, { type: "primary" }, {
            default: F(() => [
              X("Primary")
            ]),
            _: 1
          }),
          Q(n, { type: "success" }, {
            default: F(() => [
              X("Success")
            ]),
            _: 1
          }),
          Q(n, { type: "info" }, {
            default: F(() => [
              X("Info")
            ]),
            _: 1
          }),
          Q(n, { type: "warning" }, {
            default: F(() => [
              X("Warning")
            ]),
            _: 1
          }),
          Q(n, { type: "danger" }, {
            default: F(() => [
              X("Danger")
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
});
function mr(t = "YYYY-MM-DD HH:mm:ss") {
  return pr().format(t);
}
const re = ee.name || "ComponentA", yr = (t) => {
  t.component(re, ee);
}, Sr = {
  name: re,
  version: "1.0.0",
  publishTime: mr(),
  description: "测试组件",
  install: yr
};
export {
  ee as ComponentA,
  Sr as default
};
