var nt = { window: "global", process: "process", vue: "Vue", Vue: "Vue" };
/**
* @vue/shared v3.4.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function en(e, t) {
  const n = new Set(e.split(","));
  return (r) => n.has(r);
}
const M = Object.freeze({}), tn = Object.freeze([]), se = () => {
}, nn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), O = Object.assign, rn = Object.prototype.hasOwnProperty, m = (e, t) => rn.call(e, t), h = Array.isArray, W = (e) => Se(e) === "[object Map]", wt = (e) => Se(e) === "[object Set]", w = (e) => typeof e == "function", $ = (e) => typeof e == "string", G = (e) => typeof e == "symbol", y = (e) => e !== null && typeof e == "object", sn = (e) => (y(e) || w(e)) && w(e.then) && w(e.catch), bt = Object.prototype.toString, Se = (e) => bt.call(e), St = (e) => Se(e).slice(8, -1), yt = (e) => Se(e) === "[object Object]", Ke = (e) => $(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, on = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, cn = on((e) => e.charAt(0).toUpperCase() + e.slice(1)), X = (e, t) => !Object.is(e, t), ln = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
};
let rt;
const xt = () => rt || (rt = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof nt < "u" ? nt : {});
function De(e) {
  if (h(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], s = $(r) ? pn(r) : De(r);
      if (s)
        for (const o in s)
          t[o] = s[o];
    }
    return t;
  } else if ($(e) || y(e))
    return e;
}
const an = /;(?![^(]*\))/g, un = /:([^]+)/, fn = /\/\*[^]*?\*\//g;
function pn(e) {
  const t = {};
  return e.replace(fn, "").split(an).forEach((n) => {
    if (n) {
      const r = n.split(un);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function We(e) {
  let t = "";
  if ($(e))
    t = e;
  else if (h(e))
    for (let n = 0; n < e.length; n++) {
      const r = We(e[n]);
      r && (t += r + " ");
    }
  else if (y(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Rt = (e) => !!(e && e.__v_isRef === !0), dn = (e) => $(e) ? e : e == null ? "" : h(e) || y(e) && (e.toString === bt || !w(e.toString)) ? Rt(e) ? dn(e.value) : JSON.stringify(e, It, 2) : String(e), It = (e, t) => Rt(t) ? It(e, t.value) : W(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, s], o) => (n[Pe(r, o) + " =>"] = s, n),
    {}
  )
} : wt(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Pe(n))
} : G(t) ? Pe(t) : y(t) && !h(t) && !yt(t) ? String(t) : t, Pe = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    G(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
function te(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let hn;
function gn(e, t = hn) {
  t && t.active && t.effects.push(e);
}
let k;
class _n {
  constructor(t, n, r, s) {
    this.fn = t, this.trigger = n, this.scheduler = r, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, gn(this, s);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, ye();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (mn(n.computed), this._dirtyLevel >= 4))
          break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), xe();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let t = U, n = k;
    try {
      return U = !0, k = this, this._runnings++, st(this), this.fn();
    } finally {
      ot(this), this._runnings--, k = n, U = t;
    }
  }
  stop() {
    this.active && (st(this), ot(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function mn(e) {
  return e.value;
}
function st(e) {
  e._trackId++, e._depsLength = 0;
}
function ot(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      Ct(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function Ct(e, t) {
  const n = e.get(t);
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup());
}
let U = !0, Ne = 0;
const Ot = [];
function ye() {
  Ot.push(U), U = !1;
}
function xe() {
  const e = Ot.pop();
  U = e === void 0 ? !0 : e;
}
function Ue() {
  Ne++;
}
function Be() {
  for (Ne--; !Ne && Ae.length; )
    Ae.shift()();
}
function wn(e, t, n) {
  var r;
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const s = e.deps[e._depsLength];
    s !== t ? (s && Ct(s, e), e.deps[e._depsLength++] = t) : e._depsLength++, (r = e.onTrack) == null || r.call(e, O({ effect: e }, n));
  }
}
const Ae = [];
function bn(e, t, n) {
  var r;
  Ue();
  for (const s of e.keys()) {
    let o;
    s._dirtyLevel < t && (o ?? (o = e.get(s) === s._trackId)) && (s._shouldSchedule || (s._shouldSchedule = s._dirtyLevel === 0), s._dirtyLevel = t), s._shouldSchedule && (o ?? (o = e.get(s) === s._trackId)) && ((r = s.onTrigger) == null || r.call(s, O({ effect: s }, n)), s.trigger(), (!s._runnings || s.allowRecurse) && s._dirtyLevel !== 2 && (s._shouldSchedule = !1, s.scheduler && Ae.push(s.scheduler)));
  }
  Be();
}
const Sn = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = e, n.computed = t, n;
}, je = /* @__PURE__ */ new WeakMap(), B = Symbol("iterate"), Ve = Symbol("Map key iterate");
function R(e, t, n) {
  if (U && k) {
    let r = je.get(e);
    r || je.set(e, r = /* @__PURE__ */ new Map());
    let s = r.get(n);
    s || r.set(n, s = Sn(() => r.delete(n))), wn(
      k,
      s,
      {
        target: e,
        type: t,
        key: n
      }
    );
  }
}
function j(e, t, n, r, s, o) {
  const i = je.get(e);
  if (!i)
    return;
  let c = [];
  if (t === "clear")
    c = [...i.values()];
  else if (n === "length" && h(e)) {
    const a = Number(r);
    i.forEach((u, g) => {
      (g === "length" || !G(g) && g >= a) && c.push(u);
    });
  } else
    switch (n !== void 0 && c.push(i.get(n)), t) {
      case "add":
        h(e) ? Ke(n) && c.push(i.get("length")) : (c.push(i.get(B)), W(e) && c.push(i.get(Ve)));
        break;
      case "delete":
        h(e) || (c.push(i.get(B)), W(e) && c.push(i.get(Ve)));
        break;
      case "set":
        W(e) && c.push(i.get(B));
        break;
    }
  Ue();
  for (const a of c)
    a && bn(
      a,
      4,
      {
        target: e,
        type: t,
        key: n,
        newValue: r,
        oldValue: s,
        oldTarget: o
      }
    );
  Be();
}
const yn = /* @__PURE__ */ en("__proto__,__v_isRef,__isVue"), Et = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(G)
), it = /* @__PURE__ */ xn();
function xn() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const r = p(this);
      for (let o = 0, i = this.length; o < i; o++)
        R(r, "get", o + "");
      const s = r[t](...n);
      return s === -1 || s === !1 ? r[t](...n.map(p)) : s;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      ye(), Ue();
      const r = p(this)[t].apply(this, n);
      return Be(), xe(), r;
    };
  }), e;
}
function Rn(e) {
  G(e) || (e = String(e));
  const t = p(this);
  return R(t, "has", e), t.hasOwnProperty(e);
}
class Pt {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, r) {
    const s = this._isReadonly, o = this._isShallow;
    if (n === "__v_isReactive")
      return !s;
    if (n === "__v_isReadonly")
      return s;
    if (n === "__v_isShallow")
      return o;
    if (n === "__v_raw")
      return r === (s ? o ? Nt : Ft : o ? Vn : Mt).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const i = h(t);
    if (!s) {
      if (i && m(it, n))
        return Reflect.get(it, n, r);
      if (n === "hasOwnProperty")
        return Rn;
    }
    const c = Reflect.get(t, n, r);
    return (G(n) ? Et.has(n) : yn(n)) || (s || R(t, "get", n), o) ? c : C(c) ? i && Ke(n) ? c : c.value : y(c) ? s ? jt(c) : At(c) : c;
  }
}
class In extends Pt {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, s) {
    let o = t[n];
    if (!this._isShallow) {
      const a = v(o);
      if (!V(r) && !v(r) && (o = p(o), r = p(r)), !h(t) && C(o) && !C(r))
        return a ? !1 : (o.value = r, !0);
    }
    const i = h(t) && Ke(n) ? Number(n) < t.length : m(t, n), c = Reflect.set(t, n, r, s);
    return t === p(s) && (i ? X(r, o) && j(t, "set", n, r, o) : j(t, "add", n, r)), c;
  }
  deleteProperty(t, n) {
    const r = m(t, n), s = t[n], o = Reflect.deleteProperty(t, n);
    return o && r && j(t, "delete", n, void 0, s), o;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!G(n) || !Et.has(n)) && R(t, "has", n), r;
  }
  ownKeys(t) {
    return R(
      t,
      "iterate",
      h(t) ? "length" : B
    ), Reflect.ownKeys(t);
  }
}
class $t extends Pt {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return te(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return te(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const Cn = /* @__PURE__ */ new In(), On = /* @__PURE__ */ new $t(), En = /* @__PURE__ */ new $t(!0), qe = (e) => e, Re = (e) => Reflect.getPrototypeOf(e);
function oe(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const s = p(e), o = p(t);
  n || (X(t, o) && R(s, "get", t), R(s, "get", o));
  const { has: i } = Re(s), c = r ? qe : n ? Qe : Ye;
  if (i.call(s, t))
    return c(e.get(t));
  if (i.call(s, o))
    return c(e.get(o));
  e !== s && e.get(t);
}
function ie(e, t = !1) {
  const n = this.__v_raw, r = p(n), s = p(e);
  return t || (X(e, s) && R(r, "has", e), R(r, "has", s)), e === s ? n.has(e) : n.has(e) || n.has(s);
}
function ce(e, t = !1) {
  return e = e.__v_raw, !t && R(p(e), "iterate", B), Reflect.get(e, "size", e);
}
function ct(e, t = !1) {
  !t && !V(e) && !v(e) && (e = p(e));
  const n = p(this);
  return Re(n).has.call(n, e) || (n.add(e), j(n, "add", e, e)), this;
}
function lt(e, t, n = !1) {
  !n && !V(t) && !v(t) && (t = p(t));
  const r = p(this), { has: s, get: o } = Re(r);
  let i = s.call(r, e);
  i ? Tt(r, s, e) : (e = p(e), i = s.call(r, e));
  const c = o.call(r, e);
  return r.set(e, t), i ? X(t, c) && j(r, "set", e, t, c) : j(r, "add", e, t), this;
}
function at(e) {
  const t = p(this), { has: n, get: r } = Re(t);
  let s = n.call(t, e);
  s ? Tt(t, n, e) : (e = p(e), s = n.call(t, e));
  const o = r ? r.call(t, e) : void 0, i = t.delete(e);
  return s && j(t, "delete", e, void 0, o), i;
}
function ut() {
  const e = p(this), t = e.size !== 0, n = W(e) ? new Map(e) : new Set(e), r = e.clear();
  return t && j(e, "clear", void 0, void 0, n), r;
}
function le(e, t) {
  return function(r, s) {
    const o = this, i = o.__v_raw, c = p(i), a = t ? qe : e ? Qe : Ye;
    return !e && R(c, "iterate", B), i.forEach((u, g) => r.call(s, a(u), a(g), o));
  };
}
function ae(e, t, n) {
  return function(...r) {
    const s = this.__v_raw, o = p(s), i = W(o), c = e === "entries" || e === Symbol.iterator && i, a = e === "keys" && i, u = s[e](...r), g = n ? qe : t ? Qe : Ye;
    return !t && R(
      o,
      "iterate",
      a ? Ve : B
    ), {
      // iterator protocol
      next() {
        const { value: l, done: f } = u.next();
        return f ? { value: l, done: f } : {
          value: c ? [g(l[0]), g(l[1])] : g(l),
          done: f
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function F(e) {
  return function(...t) {
    {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      te(
        `${cn(e)} operation ${n}failed: target is readonly.`,
        p(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Pn() {
  const e = {
    get(o) {
      return oe(this, o);
    },
    get size() {
      return ce(this);
    },
    has: ie,
    add: ct,
    set: lt,
    delete: at,
    clear: ut,
    forEach: le(!1, !1)
  }, t = {
    get(o) {
      return oe(this, o, !1, !0);
    },
    get size() {
      return ce(this);
    },
    has: ie,
    add(o) {
      return ct.call(this, o, !0);
    },
    set(o, i) {
      return lt.call(this, o, i, !0);
    },
    delete: at,
    clear: ut,
    forEach: le(!1, !0)
  }, n = {
    get(o) {
      return oe(this, o, !0);
    },
    get size() {
      return ce(this, !0);
    },
    has(o) {
      return ie.call(this, o, !0);
    },
    add: F("add"),
    set: F("set"),
    delete: F("delete"),
    clear: F("clear"),
    forEach: le(!0, !1)
  }, r = {
    get(o) {
      return oe(this, o, !0, !0);
    },
    get size() {
      return ce(this, !0);
    },
    has(o) {
      return ie.call(this, o, !0);
    },
    add: F("add"),
    set: F("set"),
    delete: F("delete"),
    clear: F("clear"),
    forEach: le(!0, !0)
  };
  return [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((o) => {
    e[o] = ae(o, !1, !1), n[o] = ae(o, !0, !1), t[o] = ae(o, !1, !0), r[o] = ae(
      o,
      !0,
      !0
    );
  }), [
    e,
    n,
    t,
    r
  ];
}
const [
  $n,
  Tn,
  Mn,
  Fn
] = /* @__PURE__ */ Pn();
function Je(e, t) {
  const n = t ? e ? Fn : Mn : e ? Tn : $n;
  return (r, s, o) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(
    m(n, s) && s in r ? n : r,
    s,
    o
  );
}
const Nn = {
  get: /* @__PURE__ */ Je(!1, !1)
}, An = {
  get: /* @__PURE__ */ Je(!0, !1)
}, jn = {
  get: /* @__PURE__ */ Je(!0, !0)
};
function Tt(e, t, n) {
  const r = p(n);
  if (r !== n && t.call(e, r)) {
    const s = St(e);
    te(
      `Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Mt = /* @__PURE__ */ new WeakMap(), Vn = /* @__PURE__ */ new WeakMap(), Ft = /* @__PURE__ */ new WeakMap(), Nt = /* @__PURE__ */ new WeakMap();
function vn(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Ln(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : vn(St(e));
}
function At(e) {
  return v(e) ? e : Ge(
    e,
    !1,
    Cn,
    Nn,
    Mt
  );
}
function jt(e) {
  return Ge(
    e,
    !0,
    On,
    An,
    Ft
  );
}
function ue(e) {
  return Ge(
    e,
    !0,
    En,
    jn,
    Nt
  );
}
function Ge(e, t, n, r, s) {
  if (!y(e))
    return te(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = s.get(e);
  if (o)
    return o;
  const i = Ln(e);
  if (i === 0)
    return e;
  const c = new Proxy(
    e,
    i === 2 ? r : n
  );
  return s.set(e, c), c;
}
function Y(e) {
  return v(e) ? Y(e.__v_raw) : !!(e && e.__v_isReactive);
}
function v(e) {
  return !!(e && e.__v_isReadonly);
}
function V(e) {
  return !!(e && e.__v_isShallow);
}
function ve(e) {
  return e ? !!e.__v_raw : !1;
}
function p(e) {
  const t = e && e.__v_raw;
  return t ? p(t) : e;
}
function Hn(e) {
  return Object.isExtensible(e) && ln(e, "__v_skip", !0), e;
}
const Ye = (e) => y(e) ? At(e) : e, Qe = (e) => y(e) ? jt(e) : e;
function C(e) {
  return !!(e && e.__v_isRef === !0);
}
function zn(e) {
  return C(e) ? e.value : e;
}
const Kn = {
  get: (e, t, n) => zn(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t];
    return C(s) && !C(n) ? (s.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Dn(e) {
  return Y(e) ? e : new Proxy(e, Kn);
}
var Wn = { env: { NODE_ENV: "development" } };
const q = [];
function Un(e) {
  q.push(e);
}
function Bn() {
  q.pop();
}
let $e = !1;
function b(e, ...t) {
  if ($e) return;
  $e = !0, ye();
  const n = q.length ? q[q.length - 1].component : null, r = n && n.appContext.config.warnHandler, s = qn();
  if (r)
    J(
      r,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((o) => {
          var i, c;
          return (c = (i = o.toString) == null ? void 0 : i.call(o)) != null ? c : JSON.stringify(o);
        }).join(""),
        n && n.proxy,
        s.map(
          ({ vnode: o }) => `at <${Xt(n, o.type)}>`
        ).join(`
`),
        s
      ]
    );
  else {
    const o = [`[Vue warn]: ${e}`, ...t];
    s.length && o.push(`
`, ...Jn(s)), console.warn(...o);
  }
  xe(), $e = !1;
}
function qn() {
  let e = q[q.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const r = e.component && e.component.parent;
    e = r && r.vnode;
  }
  return t;
}
function Jn(e) {
  const t = [];
  return e.forEach((n, r) => {
    t.push(...r === 0 ? [] : [`
`], ...Gn(n));
  }), t;
}
function Gn({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", r = e.component ? e.component.parent == null : !1, s = ` at <${Xt(
    e.component,
    e.type,
    r
  )}`, o = ">" + n;
  return e.props ? [s, ...Yn(e.props), o] : [s + o];
}
function Yn(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((r) => {
    t.push(...Vt(r, e[r]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Vt(e, t, n) {
  return $(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : C(t) ? (t = Vt(e, p(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : w(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = p(t), n ? t : [`${e}=`, t]);
}
const vt = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update"
};
function J(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (s) {
    Xe(s, t, n);
  }
}
function pe(e, t, n, r) {
  if (w(e)) {
    const s = J(e, t, n, r);
    return s && sn(s) && s.catch((o) => {
      Xe(o, t, n);
    }), s;
  }
  if (h(e)) {
    const s = [];
    for (let o = 0; o < e.length; o++)
      s.push(pe(e[o], t, n, r));
    return s;
  } else
    b(
      `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
    );
}
function Xe(e, t, n, r = !0) {
  const s = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const i = t.proxy, c = vt[n];
    for (; o; ) {
      const u = o.ec;
      if (u) {
        for (let g = 0; g < u.length; g++)
          if (u[g](e, i, c) === !1)
            return;
      }
      o = o.parent;
    }
    const a = t.appContext.config.errorHandler;
    if (a) {
      ye(), J(
        a,
        null,
        10,
        [e, i, c]
      ), xe();
      return;
    }
  }
  Qn(e, n, s, r);
}
function Qn(e, t, n, r = !0) {
  {
    const s = vt[t];
    if (n && Un(n), b(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && Bn(), r)
      throw e;
    console.error(e);
  }
}
let ge = !1, Le = !1;
const E = [];
let A = 0;
const Q = [];
let N = null, z = 0;
const Lt = /* @__PURE__ */ Promise.resolve();
let Ze = null;
const Xn = 100;
function Zn(e) {
  const t = Ze || Lt;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function kn(e) {
  let t = A + 1, n = E.length;
  for (; t < n; ) {
    const r = t + n >>> 1, s = E[r], o = ne(s);
    o < e || o === e && s.pre ? t = r + 1 : n = r;
  }
  return t;
}
function ke(e) {
  (!E.length || !E.includes(
    e,
    ge && e.allowRecurse ? A + 1 : A
  )) && (e.id == null ? E.push(e) : E.splice(kn(e.id), 0, e), Ht());
}
function Ht() {
  !ge && !Le && (Le = !0, Ze = Lt.then(Kt));
}
function zt(e) {
  h(e) ? Q.push(...e) : (!N || !N.includes(
    e,
    e.allowRecurse ? z + 1 : z
  )) && Q.push(e), Ht();
}
function er(e) {
  if (Q.length) {
    const t = [...new Set(Q)].sort(
      (n, r) => ne(n) - ne(r)
    );
    if (Q.length = 0, N) {
      N.push(...t);
      return;
    }
    for (N = t, e = e || /* @__PURE__ */ new Map(), z = 0; z < N.length; z++) {
      const n = N[z];
      Dt(e, n) || n.active !== !1 && n();
    }
    N = null, z = 0;
  }
}
const ne = (e) => e.id == null ? 1 / 0 : e.id, tr = (e, t) => {
  const n = ne(e) - ne(t);
  if (n === 0) {
    if (e.pre && !t.pre) return -1;
    if (t.pre && !e.pre) return 1;
  }
  return n;
};
function Kt(e) {
  Le = !1, ge = !0, e = e || /* @__PURE__ */ new Map(), E.sort(tr);
  const t = (n) => Dt(e, n);
  try {
    for (A = 0; A < E.length; A++) {
      const n = E[A];
      if (n && n.active !== !1) {
        if (Wn.env.NODE_ENV !== "production" && t(n))
          continue;
        J(
          n,
          n.i,
          n.i ? 15 : 14
        );
      }
    }
  } finally {
    A = 0, E.length = 0, er(e), ge = !1, Ze = null, (E.length || Q.length) && Kt(e);
  }
}
function Dt(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > Xn) {
      const r = t.i, s = r && Qt(r.type);
      return Xe(
        `Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
const Te = /* @__PURE__ */ new Map();
xt().__VUE_HMR_RUNTIME__ = {
  createRecord: Me(nr),
  rerender: Me(rr),
  reload: Me(sr)
};
const _e = /* @__PURE__ */ new Map();
function nr(e, t) {
  return _e.has(e) ? !1 : (_e.set(e, {
    initialDef: me(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function me(e) {
  return Zt(e) ? e.__vccOpts : e;
}
function rr(e, t) {
  const n = _e.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((r) => {
    t && (r.render = t, me(r.type).render = t), r.renderCache = [], r.effect.dirty = !0, r.update();
  }));
}
function sr(e, t) {
  const n = _e.get(e);
  if (!n) return;
  t = me(t), ft(n.initialDef, t);
  const r = [...n.instances];
  for (let s = 0; s < r.length; s++) {
    const o = r[s], i = me(o.type);
    let c = Te.get(i);
    c || (i !== n.initialDef && ft(i, t), Te.set(i, c = /* @__PURE__ */ new Set())), c.add(o), o.appContext.propsCache.delete(o.type), o.appContext.emitsCache.delete(o.type), o.appContext.optionsCache.delete(o.type), o.ceReload ? (c.add(o), o.ceReload(t.styles), c.delete(o)) : o.parent ? (o.parent.effect.dirty = !0, ke(() => {
      o.parent.update(), c.delete(o);
    })) : o.appContext.reload ? o.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  zt(() => {
    Te.clear();
  });
}
function ft(e, t) {
  O(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Me(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (r) {
      console.error(r), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let D = null, et = null;
function Hr(e) {
  et = e;
}
function zr() {
  et = null;
}
function Wt(e, t) {
  e.shapeFlag & 6 && e.component ? Wt(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Kr(e, t) {
  return w(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    O({ name: e.name }, t, { setup: e })
  ) : e;
}
const or = Symbol.for("v-ndc"), He = (e) => e ? Nr(e) ? Ar(e) : He(e.parent) : null, ee = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ O(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => ue(e.props),
    $attrs: (e) => ue(e.attrs),
    $slots: (e) => ue(e.slots),
    $refs: (e) => ue(e.refs),
    $parent: (e) => He(e.parent),
    $root: (e) => He(e.root),
    $emit: (e) => e.emit,
    $options: (e) => cr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, ke(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Zn.bind(e.proxy)),
    $watch: (e) => mr.bind(e)
  })
), Fe = (e, t) => e !== M && !e.__isScriptSetup && m(e, t), ir = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: s, props: o, accessCache: i, type: c, appContext: a } = e;
    if (t === "__isVue")
      return !0;
    let u;
    if (t[0] !== "$") {
      const _ = i[t];
      if (_ !== void 0)
        switch (_) {
          case 1:
            return r[t];
          case 2:
            return s[t];
          case 4:
            return n[t];
          case 3:
            return o[t];
        }
      else {
        if (Fe(r, t))
          return i[t] = 1, r[t];
        if (s !== M && m(s, t))
          return i[t] = 2, s[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (u = e.propsOptions[0]) && m(u, t)
        )
          return i[t] = 3, o[t];
        if (n !== M && m(n, t))
          return i[t] = 4, n[t];
        i[t] = 0;
      }
    }
    const g = ee[t];
    let l, f;
    if (g)
      return t === "$attrs" ? R(e.attrs, "get", "") : t === "$slots" && R(e, "get", t), g(e);
    if (
      // css module (injected by vue-loader)
      (l = c.__cssModules) && (l = l[t])
    )
      return l;
    if (n !== M && m(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      f = a.config.globalProperties, m(f, t)
    )
      return f[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: s, ctx: o } = e;
    return Fe(s, t) ? (s[t] = n, !0) : s.__isScriptSetup && m(s, t) ? (b(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : r !== M && m(r, t) ? (r[t] = n, !0) : m(e.props, t) ? (b(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (b(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (t in e.appContext.config.globalProperties ? Object.defineProperty(o, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: s, propsOptions: o }
  }, i) {
    let c;
    return !!n[i] || e !== M && m(e, i) || Fe(t, i) || (c = o[0]) && m(c, i) || m(r, i) || m(ee, i) || m(s.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : m(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
ir.ownKeys = (e) => (b(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e));
function pt(e) {
  return h(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function cr(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: s,
    optionsCache: o,
    config: { optionMergeStrategies: i }
  } = e.appContext, c = o.get(t);
  let a;
  return c ? a = c : !s.length && !n && !r ? a = t : (a = {}, s.length && s.forEach(
    (u) => we(a, u, i, !0)
  ), we(a, t, i)), y(t) && o.set(t, a), a;
}
function we(e, t, n, r = !1) {
  const { mixins: s, extends: o } = t;
  o && we(e, o, n, !0), s && s.forEach(
    (i) => we(e, i, n, !0)
  );
  for (const i in t)
    if (r && i === "expose")
      b(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const c = lr[i] || n && n[i];
      e[i] = c ? c(e[i], t[i]) : t[i];
    }
  return e;
}
const lr = {
  data: dt,
  props: gt,
  emits: gt,
  // objects
  methods: Z,
  computed: Z,
  // lifecycle
  beforeCreate: x,
  created: x,
  beforeMount: x,
  mounted: x,
  beforeUpdate: x,
  updated: x,
  beforeDestroy: x,
  beforeUnmount: x,
  destroyed: x,
  unmounted: x,
  activated: x,
  deactivated: x,
  errorCaptured: x,
  serverPrefetch: x,
  // assets
  components: Z,
  directives: Z,
  // watch
  watch: ur,
  // provide / inject
  provide: dt,
  inject: ar
};
function dt(e, t) {
  return t ? e ? function() {
    return O(
      w(e) ? e.call(this, this) : e,
      w(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function ar(e, t) {
  return Z(ht(e), ht(t));
}
function ht(e) {
  if (h(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function x(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Z(e, t) {
  return e ? O(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function gt(e, t) {
  return e ? h(e) && h(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : O(
    /* @__PURE__ */ Object.create(null),
    pt(e),
    pt(t ?? {})
  ) : t;
}
function ur(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = O(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = x(e[r], t[r]);
  return n;
}
let _t = null;
function fr(e, t, n = !1) {
  const r = Ie || D;
  if (r || _t) {
    const s = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : _t._context.provides;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && w(t) ? t.call(r && r.proxy) : t;
    b(`injection "${String(e)}" not found.`);
  } else
    b("inject() can only be used inside setup() or functional components.");
}
const pr = {}, Ut = (e) => Object.getPrototypeOf(e) === pr, dr = (e) => e.__isTeleport, mt = Sr, hr = Symbol.for("v-scx"), gr = () => {
  {
    const e = fr(hr);
    return e || b(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
}, fe = {};
function _r(e, t, {
  immediate: n,
  deep: r,
  flush: s,
  once: o,
  onTrack: i,
  onTrigger: c
} = M) {
  if (t && o) {
    const d = t;
    t = (...Ee) => {
      d(...Ee), Oe();
    };
  }
  r !== void 0 && typeof r == "number" && b(
    'watch() "deep" option with number value will be used as watch depth in future versions. Please use a boolean instead to avoid potential breakage.'
  ), t || (n !== void 0 && b(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && b(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && b(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const a = (d) => {
    b(
      "Invalid watch source: ",
      d,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, u = Ie, g = (d) => r === !0 ? d : (
    // for deep: false, only traverse root-level properties
    K(d, r === !1 ? 1 : void 0)
  );
  let l, f = !1, _ = !1;
  if (C(e) ? (l = () => e.value, f = V(e)) : Y(e) ? (l = () => g(e), f = !0) : h(e) ? (_ = !0, f = e.some((d) => Y(d) || V(d)), l = () => e.map((d) => {
    if (C(d))
      return d.value;
    if (Y(d))
      return g(d);
    if (w(d))
      return J(d, u, 2);
    a(d);
  })) : w(e) ? t ? l = () => J(e, u, 2) : l = () => (S && S(), pe(
    e,
    u,
    3,
    [T]
  )) : (l = se, a(e)), t && r) {
    const d = l;
    l = () => K(d());
  }
  let S, T = (d) => {
    S = I.onStop = () => {
      J(d, u, 4), S = I.onStop = void 0;
    };
  }, Ce;
  if (Yt)
    if (T = se, t ? n && pe(t, u, 3, [
      l(),
      _ ? [] : void 0,
      T
    ]) : l(), s === "sync") {
      const d = gr();
      Ce = d.__watcherHandles || (d.__watcherHandles = []);
    } else
      return se;
  let L = _ ? new Array(e.length).fill(fe) : fe;
  const H = () => {
    if (!(!I.active || !I.dirty))
      if (t) {
        const d = I.run();
        (r || f || (_ ? d.some((Ee, kt) => X(Ee, L[kt])) : X(d, L))) && (S && S(), pe(t, u, 3, [
          d,
          // pass undefined as the old value when it's changed for the first time
          L === fe ? void 0 : _ && L[0] === fe ? [] : L,
          T
        ]), L = d);
      } else
        I.run();
  };
  H.allowRecurse = !!t;
  let re;
  s === "sync" ? re = H : s === "post" ? re = () => mt(H, u && u.suspense) : (H.pre = !0, u && (H.id = u.uid), re = () => ke(H));
  const I = new _n(l, se, re), Oe = () => {
    I.stop();
  };
  return I.onTrack = i, I.onTrigger = c, t ? n ? H() : L = I.run() : s === "post" ? mt(
    I.run.bind(I),
    u && u.suspense
  ) : I.run(), Ce && Ce.push(Oe), Oe;
}
function mr(e, t, n) {
  const r = this.proxy, s = $(e) ? e.includes(".") ? wr(r, e) : () => r[e] : e.bind(r, r);
  let o;
  w(t) ? o = t : (o = t.handler, n = t);
  const i = Fr(this), c = _r(s, o.bind(r), n);
  return i(), c;
}
function wr(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let s = 0; s < n.length && r; s++)
      r = r[n[s]];
    return r;
  };
}
function K(e, t = 1 / 0, n) {
  if (t <= 0 || !y(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, C(e))
    K(e.value, t, n);
  else if (h(e))
    for (let r = 0; r < e.length; r++)
      K(e[r], t, n);
  else if (wt(e) || W(e))
    e.forEach((r) => {
      K(r, t, n);
    });
  else if (yt(e)) {
    for (const r in e)
      K(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && K(e[r], t, n);
  }
  return e;
}
const br = (e) => e.__isSuspense;
function Sr(e, t) {
  t && t.pendingBranch ? h(e) ? t.effects.push(...e) : t.effects.push(e) : zt(e);
}
const Bt = Symbol.for("v-fgt"), yr = Symbol.for("v-txt"), xr = Symbol.for("v-cmt"), de = [];
let P = null;
function Dr(e = !1) {
  de.push(P = e ? null : []);
}
function Rr() {
  de.pop(), P = de[de.length - 1] || null;
}
function Ir(e) {
  return e.dynamicChildren = P || tn, Rr(), P && P.push(e), e;
}
function Wr(e, t, n, r, s, o) {
  return Ir(
    Jt(
      e,
      t,
      n,
      r,
      s,
      o,
      !0
    )
  );
}
function Cr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const Or = (...e) => Pr(
  ...e
), qt = ({ key: e }) => e ?? null, he = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? $(e) || C(e) || w(e) ? { i: D, r: e, k: t, f: !!n } : e : null);
function Jt(e, t = null, n = null, r = 0, s = null, o = e === Bt ? 0 : 1, i = !1, c = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && qt(t),
    ref: t && he(t),
    scopeId: et,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: r,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: D
  };
  return c ? (tt(a, n), o & 128 && e.normalize(a)) : n && (a.shapeFlag |= $(n) ? 8 : 16), a.key !== a.key && b("VNode created with invalid key (NaN). VNode type:", a.type), // avoid a block node from tracking itself
  !i && // has current parent block
  P && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && P.push(a), a;
}
const Er = Or;
function Pr(e, t = null, n = null, r = 0, s = null, o = !1) {
  if ((!e || e === or) && (e || b(`Invalid vnode type when creating vnode: ${e}.`), e = xr), Cr(e)) {
    const c = be(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && tt(c, n), !o && P && (c.shapeFlag & 6 ? P[P.indexOf(e)] = c : P.push(c)), c.patchFlag = -2, c;
  }
  if (Zt(e) && (e = e.__vccOpts), t) {
    t = $r(t);
    let { class: c, style: a } = t;
    c && !$(c) && (t.class = We(c)), y(a) && (ve(a) && !h(a) && (a = O({}, a)), t.style = De(a));
  }
  const i = $(e) ? 1 : br(e) ? 128 : dr(e) ? 64 : y(e) ? 4 : w(e) ? 2 : 0;
  return i & 4 && ve(e) && (e = p(e), b(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), Jt(
    e,
    t,
    n,
    r,
    s,
    i,
    o,
    !0
  );
}
function $r(e) {
  return e ? ve(e) || Ut(e) ? O({}, e) : e : null;
}
function be(e, t, n = !1, r = !1) {
  const { props: s, ref: o, patchFlag: i, children: c, transition: a } = e, u = t ? Mr(s || {}, t) : s, g = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && qt(u),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? h(o) ? o.concat(he(t)) : [o, he(t)] : he(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: i === -1 && h(c) ? c.map(Gt) : c,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Bt ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: a,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && be(e.ssContent),
    ssFallback: e.ssFallback && be(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && r && Wt(
    g,
    a.clone(g)
  ), g;
}
function Gt(e) {
  const t = be(e);
  return h(e.children) && (t.children = e.children.map(Gt)), t;
}
function Tr(e = " ", t = 0) {
  return Er(yr, null, e, t);
}
function tt(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (h(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), tt(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !Ut(t) ? t._ctx = D : s === 3 && D && (D.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else w(t) ? (t = { default: t, _ctx: D }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [Tr(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Mr(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r)
      if (s === "class")
        t.class !== r.class && (t.class = We([t.class, r.class]));
      else if (s === "style")
        t.style = De([t.style, r.style]);
      else if (nn(s)) {
        const o = t[s], i = r[s];
        i && o !== i && !(h(o) && o.includes(i)) && (t[s] = o ? [].concat(o, i) : i);
      } else s !== "" && (t[s] = r[s]);
  }
  return t;
}
let Ie = null, ze;
{
  const e = xt(), t = (n, r) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(r), (o) => {
      s.length > 1 ? s.forEach((i) => i(o)) : s[0](o);
    };
  };
  ze = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Ie = n
  ), t(
    "__VUE_SSR_SETTERS__",
    (n) => Yt = n
  );
}
const Fr = (e) => {
  const t = Ie;
  return ze(e), e.scope.on(), () => {
    e.scope.off(), ze(t);
  };
};
function Nr(e) {
  return e.vnode.shapeFlag & 4;
}
let Yt = !1;
function Ar(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Dn(Hn(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in ee)
        return ee[n](e);
    },
    has(t, n) {
      return n in t || n in ee;
    }
  })) : e.proxy;
}
const jr = /(?:^|[-_])(\w)/g, Vr = (e) => e.replace(jr, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Qt(e, t = !0) {
  return w(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Xt(e, t, n = !1) {
  let r = Qt(t);
  if (!r && t.__file) {
    const s = t.__file.match(/([^/\\]+)\.\w+$/);
    s && (r = s[1]);
  }
  if (!r && e && e.parent) {
    const s = (o) => {
      for (const i in o)
        if (o[i] === t)
          return i;
    };
    r = s(
      e.components || e.parent.type.components
    ) || s(e.appContext.components);
  }
  return r ? Vr(r) : n ? "App" : "Anonymous";
}
function Zt(e) {
  return w(e) && "__vccOpts" in e;
}
function vr() {
  if (typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, r = { style: "color:#eb2f96" }, s = {
    __vue_custom_formatter: !0,
    header(l) {
      return y(l) ? l.__isVue ? ["div", e, "VueInstance"] : C(l) ? [
        "div",
        {},
        ["span", e, g(l)],
        "<",
        c(l.value),
        ">"
      ] : Y(l) ? [
        "div",
        {},
        ["span", e, V(l) ? "ShallowReactive" : "Reactive"],
        "<",
        c(l),
        `>${v(l) ? " (readonly)" : ""}`
      ] : v(l) ? [
        "div",
        {},
        ["span", e, V(l) ? "ShallowReadonly" : "Readonly"],
        "<",
        c(l),
        ">"
      ] : null : null;
    },
    hasBody(l) {
      return l && l.__isVue;
    },
    body(l) {
      if (l && l.__isVue)
        return [
          "div",
          {},
          ...o(l.$)
        ];
    }
  };
  function o(l) {
    const f = [];
    l.type.props && l.props && f.push(i("props", p(l.props))), l.setupState !== M && f.push(i("setup", l.setupState)), l.data !== M && f.push(i("data", p(l.data)));
    const _ = a(l, "computed");
    _ && f.push(i("computed", _));
    const S = a(l, "inject");
    return S && f.push(i("injected", S)), f.push([
      "div",
      {},
      [
        "span",
        {
          style: r.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: l }]
    ]), f;
  }
  function i(l, f) {
    return f = O({}, f), Object.keys(f).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        l
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(f).map((_) => [
          "div",
          {},
          ["span", r, _ + ": "],
          c(f[_], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function c(l, f = !0) {
    return typeof l == "number" ? ["span", t, l] : typeof l == "string" ? ["span", n, JSON.stringify(l)] : typeof l == "boolean" ? ["span", r, l] : y(l) ? ["object", { object: f ? p(l) : l }] : ["span", n, String(l)];
  }
  function a(l, f) {
    const _ = l.type;
    if (w(_))
      return;
    const S = {};
    for (const T in l.ctx)
      u(_, T, f) && (S[T] = l.ctx[T]);
    return S;
  }
  function u(l, f, _) {
    const S = l[_];
    if (h(S) && S.includes(f) || y(S) && f in S || l.extends && u(l.extends, f, _) || l.mixins && l.mixins.some((T) => u(T, f, _)))
      return !0;
  }
  function g(l) {
    return V(l) ? "ShallowRef" : l.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(s) : window.devtoolsFormatters = [s];
}
function Lr() {
  vr();
}
Lr();
const Ur = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of t)
    n[r] = s;
  return n;
};
export {
  Ur as _,
  Jt as a,
  zr as b,
  Wr as c,
  Kr as d,
  Dr as o,
  Hr as p,
  dn as t
};
