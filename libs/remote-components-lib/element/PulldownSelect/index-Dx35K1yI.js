import { defineComponent as xe, ref as y, reactive as te, computed as A, watch as F, resolveComponent as E, openBlock as C, createElementBlock as V, createVNode as O, withCtx as G, createElementVNode as m, normalizeStyle as P, Fragment as T, renderList as Z, toDisplayString as w, withKeys as I, normalizeClass as ce, nextTick as q } from "vue";
import { cloneDeep as j } from "lodash-es";
const l = o;
(function(h, v) {
  const d = o, n = h();
  for (; ; )
    try {
      if (parseInt(d(221)) / 1 + parseInt(d(197)) / 2 + -parseInt(d(224)) / 3 + -parseInt(d(226)) / 4 * (-parseInt(d(227)) / 5) + -parseInt(d(211)) / 6 + parseInt(d(218)) / 7 + parseInt(d(210)) / 8 === v) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(S, 228408);
const ne = { class: l(190) }, se = { class: l(188) }, ae = { class: l(219) }, re = { class: l(214) }, oe = { class: l(216) }, de = [l(223)], le = { class: l(212) }, ie = [l(223)];
function o(h, v) {
  const d = S();
  return o = function(n, i) {
    return n = n - 184, d[n];
  }, o(h, v);
}
function S() {
  const h = ["emit-search", "_remote-search-select-container", "searchLabel", "splice", "无可查询项", "inputEl", "fromEntries", "style", "545484lHmHrC", "keyCode", "el-input", "placeholder", "preventDefault", "findIndex", "span", "searchKey", "focus", "join", "from", "forEach", "value", "1812312HNjZOL", "1668876LqViVL", "search-list-container", "map", "tag-label", "delete", "tag-title", "tag-container", "583485OUOMnZ", "search-tag", "vab-icon", "287733zixFSa", "vxe-pulldown", "onClick", "1324638GaYsGb", "search-input", "4kycCAi", "388655MtPxbK", "modelValue", "index", "searchList", "down", "searchValue", "div", "enter", "push", "length", "search-icon"];
  return S = function() {
    return h;
  }, S();
}
const fe = xe({ name: "PulldownSelect", __name: l(229), props: { searchList: {} }, emits: [l(189)], setup(h, { expose: v, emit: d }) {
  const n = l, i = h, K = d, k = y(!1), f = y(""), z = y(), _ = y([]), B = (x) => {
    const e = o, t = j(i[e(230)]), r = [];
    t[e(208)]((s) => {
      const c = e;
      _[c(209)][c(208)]((p) => {
        const a = c;
        s.searchKey == p[a(204)] && (s[a(232)] = p.searchValue);
      }), r[c(186)]([s[c(204)], s[c(232)]]);
    });
    const b = Object[e(195)](Array[e(207)](r)[e(213)](([s, c]) => [s, c]));
    x && x(b), q(() => {
      var c;
      const s = e;
      f[s(209)] = "", (c = z[s(209)]) == null || c[s(205)](), g(!1);
    });
  }, D = (x, e, t = "") => {
    const r = o, b = j(x);
    if (b[r(232)] = j(f.value) || t, !b.searchValue) return;
    const s = _[r(209)][r(202)]((c) => c && c.searchKey == b[r(204)]);
    s > -1 ? _[r(209)][r(192)](s, 1, b) : _[r(209)][r(186)](b), B(e);
  }, Y = (x, e) => {
    const t = o;
    _.value[t(192)](x, 1), B(e);
  }, H = (x) => {
    D(x, (e) => {
      K("emit-search", e);
    });
  }, M = (x) => {
    Y(x, (e) => {
      K(o(189), e);
    });
  }, J = () => {
    const x = o;
    _[x(209)] = [];
  }, u = y(-1), N = y(!1), g = (x) => {
    const e = o;
    N[e(209)] = x;
  }, Q = (x) => {
    const e = o;
    if (x == e(231)) {
      let t = u[e(209)] < i.searchList[e(187)] - 1 ? u[e(209)] : -1;
      t++, u[e(209)] = t;
      return;
    }
    if (x == "up") {
      let t = u.value;
      t <= 0 ? t = i[e(230)].length - 1 : t--, u.value = t;
      return;
    }
    if (x == e(185)) {
      if (u[e(209)] > -1) {
        const t = i.searchList[u.value];
        H(t);
      }
      return;
    }
    if (x == e(215)) {
      if (N.value) return;
      const t = _[e(209)][e(187)] - 1;
      t > -1 && !f[e(209)] && (g(!0), M(t));
      return;
    }
  }, R = te({ keyupSelect: (x) => x == u[o(209)] ? "hover-li" : "" }), W = { 38: "up", 40: n(231), 13: n(185), 8: n(215) }, L = (x) => {
    const e = n;
    x && (x[e(198)] != 8 && x[e(201)](), Q(W[x[e(198)]]));
  }, X = A(() => {
    const x = n;
    return i[x(230)][x(187)] === 0 ? x(193) : i[x(230)][x(213)]((e) => e.searchLabel)[x(206)](",");
  }), U = A(() => _[n(209)].length === 0 ? "#dcdfe6" : "#1890ff"), $ = () => {
    q(() => {
      const x = o;
      f[x(209)] = "", u[x(209)] = -1, _[x(209)] = [], k[x(209)] = !1, g(!1);
    });
  };
  return F(() => f[n(209)], (x) => {
    k.value = !!x;
  }), F(() => k[n(209)], (x) => {
    const e = n;
    !x && (f[e(209)] = "", u[e(209)] = -1);
  }), v({ setLimit: g, pushChange: D, resetSearch: J, clearText: $ }), (x, e) => {
    const t = n, r = E(t(220)), b = E(t(199)), s = E(t(222));
    return C(), V(t(184), ne, [O(s, { modelValue: k[t(209)], "onUpdate:modelValue": e[1] || (e[1] = (c) => k[t(209)] = c) }, { default: G(() => [m("div", { class: t(225), style: P({ borderColor: U.value }) }, [m(t(184), se, [O(r, { icon: "search-line", style: P({ color: U[t(209)] }) }, null, 8, [t(196)])]), m(t(184), ae, [(C(!0), V(T, null, Z(_[t(209)], (c, p) => {
      const a = t;
      return C(), V(a(184), { key: p, class: a(217) }, [m(a(203), re, w(c[a(191)]), 1), m(a(203), oe, w(c[a(232)]), 1), m(a(203), { class: "tag-close", onClick: (ee) => M(p) }, "×", 8, de)]);
    }), 128))]), O(b, { ref_key: t(194), ref: z, modelValue: f[t(209)], "onUpdate:modelValue": e[0] || (e[0] = (c) => f[t(209)] = c), modelModifiers: { trim: !0 }, placeholder: X[t(209)], onKeydown: [I(L, ["delete"]), I(L, ["down"]), I(L, ["enter"]), I(L, ["up"])] }, null, 8, [t(228), t(200)])], 4)]), dropdown: G(() => [m("ul", le, [(C(!0), V(T, null, Z(i[t(230)], (c, p) => {
      const a = t;
      return C(), V("li", { key: c[a(204)], class: ce(R.keyupSelect(p)), onClick: (ee) => H(c) }, w(c[a(191)]) + ": " + w(f[a(209)]), 11, ie);
    }), 128))])]), _: 1 }, 8, [t(228)])]);
  };
} });
export {
  fe as _
};
