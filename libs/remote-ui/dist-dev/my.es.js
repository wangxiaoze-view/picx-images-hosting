var st = { window: "global", process: "process", vue: "Vue", Vue: "Vue" };
/**
* @vue/shared v3.4.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function cn(e, t) {
  const n = new Set(e.split(","));
  return (r) => n.has(r);
}
const M = Object.freeze({}), ln = Object.freeze([]), oe = () => {
}, an = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), O = Object.assign, un = Object.prototype.hasOwnProperty, m = (e, t) => un.call(e, t), h = Array.isArray, W = (e) => ye(e) === "[object Map]", St = (e) => ye(e) === "[object Set]", w = (e) => typeof e == "function", P = (e) => typeof e == "string", G = (e) => typeof e == "symbol", y = (e) => e !== null && typeof e == "object", fn = (e) => (y(e) || w(e)) && w(e.then) && w(e.catch), yt = Object.prototype.toString, ye = (e) => yt.call(e), xt = (e) => ye(e).slice(8, -1), Ct = (e) => ye(e) === "[object Object]", De = (e) => P(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, dn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, pn = dn((e) => e.charAt(0).toUpperCase() + e.slice(1)), X = (e, t) => !Object.is(e, t), hn = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
};
let ot;
const Rt = () => ot || (ot = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof st < "u" ? st : {});
function We(e) {
  if (h(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], s = P(r) ? wn(r) : We(r);
      if (s)
        for (const o in s)
          t[o] = s[o];
    }
    return t;
  } else if (P(e) || y(e))
    return e;
}
const _n = /;(?![^(]*\))/g, gn = /:([^]+)/, mn = /\/\*[^]*?\*\//g;
function wn(e) {
  const t = {};
  return e.replace(mn, "").split(_n).forEach((n) => {
    if (n) {
      const r = n.split(gn);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function Ue(e) {
  let t = "";
  if (P(e))
    t = e;
  else if (h(e))
    for (let n = 0; n < e.length; n++) {
      const r = Ue(e[n]);
      r && (t += r + " ");
    }
  else if (y(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const It = (e) => !!(e && e.__v_isRef === !0), Be = (e) => P(e) ? e : e == null ? "" : h(e) || y(e) && (e.toString === yt || !w(e.toString)) ? It(e) ? Be(e.value) : JSON.stringify(e, Ot, 2) : String(e), Ot = (e, t) => It(t) ? Ot(e, t.value) : W(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, s], o) => (n[Pe(r, o) + " =>"] = s, n),
    {}
  )
} : St(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Pe(n))
} : G(t) ? Pe(t) : y(t) && !h(t) && !Ct(t) ? String(t) : t, Pe = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    G(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
function ne(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let bn;
function Sn(e, t = bn) {
  t && t.active && t.effects.push(e);
}
let ee;
class yn {
  constructor(t, n, r, s) {
    this.fn = t, this.trigger = n, this.scheduler = r, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, Sn(this, s);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, xe();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (xn(n.computed), this._dirtyLevel >= 4))
          break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), Ce();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let t = U, n = ee;
    try {
      return U = !0, ee = this, this._runnings++, it(this), this.fn();
    } finally {
      ct(this), this._runnings--, ee = n, U = t;
    }
  }
  stop() {
    this.active && (it(this), ct(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function xn(e) {
  return e.value;
}
function it(e) {
  e._trackId++, e._depsLength = 0;
}
function ct(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      Et(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function Et(e, t) {
  const n = e.get(t);
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup());
}
let U = !0, Ae = 0;
const $t = [];
function xe() {
  $t.push(U), U = !1;
}
function Ce() {
  const e = $t.pop();
  U = e === void 0 ? !0 : e;
}
function qe() {
  Ae++;
}
function Je() {
  for (Ae--; !Ae && je.length; )
    je.shift()();
}
function Cn(e, t, n) {
  var r;
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const s = e.deps[e._depsLength];
    s !== t ? (s && Et(s, e), e.deps[e._depsLength++] = t) : e._depsLength++, (r = e.onTrack) == null || r.call(e, O({ effect: e }, n));
  }
}
const je = [];
function Rn(e, t, n) {
  var r;
  qe();
  for (const s of e.keys()) {
    let o;
    s._dirtyLevel < t && (o ?? (o = e.get(s) === s._trackId)) && (s._shouldSchedule || (s._shouldSchedule = s._dirtyLevel === 0), s._dirtyLevel = t), s._shouldSchedule && (o ?? (o = e.get(s) === s._trackId)) && ((r = s.onTrigger) == null || r.call(s, O({ effect: s }, n)), s.trigger(), (!s._runnings || s.allowRecurse) && s._dirtyLevel !== 2 && (s._shouldSchedule = !1, s.scheduler && je.push(s.scheduler)));
  }
  Je();
}
const In = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = e, n.computed = t, n;
}, Ve = /* @__PURE__ */ new WeakMap(), B = Symbol("iterate"), ve = Symbol("Map key iterate");
function C(e, t, n) {
  if (U && ee) {
    let r = Ve.get(e);
    r || Ve.set(e, r = /* @__PURE__ */ new Map());
    let s = r.get(n);
    s || r.set(n, s = In(() => r.delete(n))), Cn(
      ee,
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
  const i = Ve.get(e);
  if (!i)
    return;
  let c = [];
  if (t === "clear")
    c = [...i.values()];
  else if (n === "length" && h(e)) {
    const a = Number(r);
    i.forEach((u, _) => {
      (_ === "length" || !G(_) && _ >= a) && c.push(u);
    });
  } else
    switch (n !== void 0 && c.push(i.get(n)), t) {
      case "add":
        h(e) ? De(n) && c.push(i.get("length")) : (c.push(i.get(B)), W(e) && c.push(i.get(ve)));
        break;
      case "delete":
        h(e) || (c.push(i.get(B)), W(e) && c.push(i.get(ve)));
        break;
      case "set":
        W(e) && c.push(i.get(B));
        break;
    }
  qe();
  for (const a of c)
    a && Rn(
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
  Je();
}
const On = /* @__PURE__ */ cn("__proto__,__v_isRef,__isVue"), Pt = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(G)
), lt = /* @__PURE__ */ En();
function En() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const r = d(this);
      for (let o = 0, i = this.length; o < i; o++)
        C(r, "get", o + "");
      const s = r[t](...n);
      return s === -1 || s === !1 ? r[t](...n.map(d)) : s;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      xe(), qe();
      const r = d(this)[t].apply(this, n);
      return Je(), Ce(), r;
    };
  }), e;
}
function $n(e) {
  G(e) || (e = String(e));
  const t = d(this);
  return C(t, "has", e), t.hasOwnProperty(e);
}
class Tt {
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
      return r === (s ? o ? jt : At : o ? Kn : Nt).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const i = h(t);
    if (!s) {
      if (i && m(lt, n))
        return Reflect.get(lt, n, r);
      if (n === "hasOwnProperty")
        return $n;
    }
    const c = Reflect.get(t, n, r);
    return (G(n) ? Pt.has(n) : On(n)) || (s || C(t, "get", n), o) ? c : I(c) ? i && De(n) ? c : c.value : y(c) ? s ? vt(c) : Vt(c) : c;
  }
}
class Pn extends Tt {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, s) {
    let o = t[n];
    if (!this._isShallow) {
      const a = v(o);
      if (!V(r) && !v(r) && (o = d(o), r = d(r)), !h(t) && I(o) && !I(r))
        return a ? !1 : (o.value = r, !0);
    }
    const i = h(t) && De(n) ? Number(n) < t.length : m(t, n), c = Reflect.set(t, n, r, s);
    return t === d(s) && (i ? X(r, o) && j(t, "set", n, r, o) : j(t, "add", n, r)), c;
  }
  deleteProperty(t, n) {
    const r = m(t, n), s = t[n], o = Reflect.deleteProperty(t, n);
    return o && r && j(t, "delete", n, void 0, s), o;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!G(n) || !Pt.has(n)) && C(t, "has", n), r;
  }
  ownKeys(t) {
    return C(
      t,
      "iterate",
      h(t) ? "length" : B
    ), Reflect.ownKeys(t);
  }
}
class Mt extends Tt {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return ne(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return ne(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const Tn = /* @__PURE__ */ new Pn(), Mn = /* @__PURE__ */ new Mt(), Fn = /* @__PURE__ */ new Mt(!0), Ge = (e) => e, Re = (e) => Reflect.getPrototypeOf(e);
function ie(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const s = d(e), o = d(t);
  n || (X(t, o) && C(s, "get", t), C(s, "get", o));
  const { has: i } = Re(s), c = r ? Ge : n ? Ze : Xe;
  if (i.call(s, t))
    return c(e.get(t));
  if (i.call(s, o))
    return c(e.get(o));
  e !== s && e.get(t);
}
function ce(e, t = !1) {
  const n = this.__v_raw, r = d(n), s = d(e);
  return t || (X(e, s) && C(r, "has", e), C(r, "has", s)), e === s ? n.has(e) : n.has(e) || n.has(s);
}
function le(e, t = !1) {
  return e = e.__v_raw, !t && C(d(e), "iterate", B), Reflect.get(e, "size", e);
}
function at(e, t = !1) {
  !t && !V(e) && !v(e) && (e = d(e));
  const n = d(this);
  return Re(n).has.call(n, e) || (n.add(e), j(n, "add", e, e)), this;
}
function ut(e, t, n = !1) {
  !n && !V(t) && !v(t) && (t = d(t));
  const r = d(this), { has: s, get: o } = Re(r);
  let i = s.call(r, e);
  i ? Ft(r, s, e) : (e = d(e), i = s.call(r, e));
  const c = o.call(r, e);
  return r.set(e, t), i ? X(t, c) && j(r, "set", e, t, c) : j(r, "add", e, t), this;
}
function ft(e) {
  const t = d(this), { has: n, get: r } = Re(t);
  let s = n.call(t, e);
  s ? Ft(t, n, e) : (e = d(e), s = n.call(t, e));
  const o = r ? r.call(t, e) : void 0, i = t.delete(e);
  return s && j(t, "delete", e, void 0, o), i;
}
function dt() {
  const e = d(this), t = e.size !== 0, n = W(e) ? new Map(e) : new Set(e), r = e.clear();
  return t && j(e, "clear", void 0, void 0, n), r;
}
function ae(e, t) {
  return function(r, s) {
    const o = this, i = o.__v_raw, c = d(i), a = t ? Ge : e ? Ze : Xe;
    return !e && C(c, "iterate", B), i.forEach((u, _) => r.call(s, a(u), a(_), o));
  };
}
function ue(e, t, n) {
  return function(...r) {
    const s = this.__v_raw, o = d(s), i = W(o), c = e === "entries" || e === Symbol.iterator && i, a = e === "keys" && i, u = s[e](...r), _ = n ? Ge : t ? Ze : Xe;
    return !t && C(
      o,
      "iterate",
      a ? ve : B
    ), {
      // iterator protocol
      next() {
        const { value: l, done: f } = u.next();
        return f ? { value: l, done: f } : {
          value: c ? [_(l[0]), _(l[1])] : _(l),
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
      ne(
        `${pn(e)} operation ${n}failed: target is readonly.`,
        d(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Nn() {
  const e = {
    get(o) {
      return ie(this, o);
    },
    get size() {
      return le(this);
    },
    has: ce,
    add: at,
    set: ut,
    delete: ft,
    clear: dt,
    forEach: ae(!1, !1)
  }, t = {
    get(o) {
      return ie(this, o, !1, !0);
    },
    get size() {
      return le(this);
    },
    has: ce,
    add(o) {
      return at.call(this, o, !0);
    },
    set(o, i) {
      return ut.call(this, o, i, !0);
    },
    delete: ft,
    clear: dt,
    forEach: ae(!1, !0)
  }, n = {
    get(o) {
      return ie(this, o, !0);
    },
    get size() {
      return le(this, !0);
    },
    has(o) {
      return ce.call(this, o, !0);
    },
    add: F("add"),
    set: F("set"),
    delete: F("delete"),
    clear: F("clear"),
    forEach: ae(!0, !1)
  }, r = {
    get(o) {
      return ie(this, o, !0, !0);
    },
    get size() {
      return le(this, !0);
    },
    has(o) {
      return ce.call(this, o, !0);
    },
    add: F("add"),
    set: F("set"),
    delete: F("delete"),
    clear: F("clear"),
    forEach: ae(!0, !0)
  };
  return [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((o) => {
    e[o] = ue(o, !1, !1), n[o] = ue(o, !0, !1), t[o] = ue(o, !1, !0), r[o] = ue(
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
  An,
  jn,
  Vn,
  vn
] = /* @__PURE__ */ Nn();
function Ye(e, t) {
  const n = t ? e ? vn : Vn : e ? jn : An;
  return (r, s, o) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(
    m(n, s) && s in r ? n : r,
    s,
    o
  );
}
const Ln = {
  get: /* @__PURE__ */ Ye(!1, !1)
}, Hn = {
  get: /* @__PURE__ */ Ye(!0, !1)
}, zn = {
  get: /* @__PURE__ */ Ye(!0, !0)
};
function Ft(e, t, n) {
  const r = d(n);
  if (r !== n && t.call(e, r)) {
    const s = xt(e);
    ne(
      `Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Nt = /* @__PURE__ */ new WeakMap(), Kn = /* @__PURE__ */ new WeakMap(), At = /* @__PURE__ */ new WeakMap(), jt = /* @__PURE__ */ new WeakMap();
function Dn(e) {
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
function Wn(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Dn(xt(e));
}
function Vt(e) {
  return v(e) ? e : Qe(
    e,
    !1,
    Tn,
    Ln,
    Nt
  );
}
function vt(e) {
  return Qe(
    e,
    !0,
    Mn,
    Hn,
    At
  );
}
function fe(e) {
  return Qe(
    e,
    !0,
    Fn,
    zn,
    jt
  );
}
function Qe(e, t, n, r, s) {
  if (!y(e))
    return ne(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = s.get(e);
  if (o)
    return o;
  const i = Wn(e);
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
function Le(e) {
  return e ? !!e.__v_raw : !1;
}
function d(e) {
  const t = e && e.__v_raw;
  return t ? d(t) : e;
}
function Un(e) {
  return Object.isExtensible(e) && hn(e, "__v_skip", !0), e;
}
const Xe = (e) => y(e) ? Vt(e) : e, Ze = (e) => y(e) ? vt(e) : e;
function I(e) {
  return !!(e && e.__v_isRef === !0);
}
function Bn(e) {
  return I(e) ? e.value : e;
}
const qn = {
  get: (e, t, n) => Bn(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t];
    return I(s) && !I(n) ? (s.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Jn(e) {
  return Y(e) ? e : new Proxy(e, qn);
}
var Gn = { env: { NODE_ENV: "development" } };
const q = [];
function Yn(e) {
  q.push(e);
}
function Qn() {
  q.pop();
}
let Te = !1;
function b(e, ...t) {
  if (Te) return;
  Te = !0, xe();
  const n = q.length ? q[q.length - 1].component : null, r = n && n.appContext.config.warnHandler, s = Xn();
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
          ({ vnode: o }) => `at <${tn(n, o.type)}>`
        ).join(`
`),
        s
      ]
    );
  else {
    const o = [`[Vue warn]: ${e}`, ...t];
    s.length && o.push(`
`, ...Zn(s)), console.warn(...o);
  }
  Ce(), Te = !1;
}
function Xn() {
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
function Zn(e) {
  const t = [];
  return e.forEach((n, r) => {
    t.push(...r === 0 ? [] : [`
`], ...kn(n));
  }), t;
}
function kn({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", r = e.component ? e.component.parent == null : !1, s = ` at <${tn(
    e.component,
    e.type,
    r
  )}`, o = ">" + n;
  return e.props ? [s, ...er(e.props), o] : [s + o];
}
function er(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((r) => {
    t.push(...Lt(r, e[r]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Lt(e, t, n) {
  return P(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : I(t) ? (t = Lt(e, d(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : w(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = d(t), n ? t : [`${e}=`, t]);
}
const Ht = {
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
    ke(s, t, n);
  }
}
function pe(e, t, n, r) {
  if (w(e)) {
    const s = J(e, t, n, r);
    return s && fn(s) && s.catch((o) => {
      ke(o, t, n);
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
function ke(e, t, n, r = !0) {
  const s = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const i = t.proxy, c = Ht[n];
    for (; o; ) {
      const u = o.ec;
      if (u) {
        for (let _ = 0; _ < u.length; _++)
          if (u[_](e, i, c) === !1)
            return;
      }
      o = o.parent;
    }
    const a = t.appContext.config.errorHandler;
    if (a) {
      xe(), J(
        a,
        null,
        10,
        [e, i, c]
      ), Ce();
      return;
    }
  }
  tr(e, n, s, r);
}
function tr(e, t, n, r = !0) {
  {
    const s = Ht[t];
    if (n && Yn(n), b(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && Qn(), r)
      throw e;
    console.error(e);
  }
}
let ge = !1, He = !1;
const E = [];
let A = 0;
const Q = [];
let N = null, z = 0;
const zt = /* @__PURE__ */ Promise.resolve();
let et = null;
const nr = 100;
function rr(e) {
  const t = et || zt;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function sr(e) {
  let t = A + 1, n = E.length;
  for (; t < n; ) {
    const r = t + n >>> 1, s = E[r], o = re(s);
    o < e || o === e && s.pre ? t = r + 1 : n = r;
  }
  return t;
}
function tt(e) {
  (!E.length || !E.includes(
    e,
    ge && e.allowRecurse ? A + 1 : A
  )) && (e.id == null ? E.push(e) : E.splice(sr(e.id), 0, e), Kt());
}
function Kt() {
  !ge && !He && (He = !0, et = zt.then(Wt));
}
function Dt(e) {
  h(e) ? Q.push(...e) : (!N || !N.includes(
    e,
    e.allowRecurse ? z + 1 : z
  )) && Q.push(e), Kt();
}
function or(e) {
  if (Q.length) {
    const t = [...new Set(Q)].sort(
      (n, r) => re(n) - re(r)
    );
    if (Q.length = 0, N) {
      N.push(...t);
      return;
    }
    for (N = t, e = e || /* @__PURE__ */ new Map(), z = 0; z < N.length; z++) {
      const n = N[z];
      Ut(e, n) || n.active !== !1 && n();
    }
    N = null, z = 0;
  }
}
const re = (e) => e.id == null ? 1 / 0 : e.id, ir = (e, t) => {
  const n = re(e) - re(t);
  if (n === 0) {
    if (e.pre && !t.pre) return -1;
    if (t.pre && !e.pre) return 1;
  }
  return n;
};
function Wt(e) {
  He = !1, ge = !0, e = e || /* @__PURE__ */ new Map(), E.sort(ir);
  const t = (n) => Ut(e, n);
  try {
    for (A = 0; A < E.length; A++) {
      const n = E[A];
      if (n && n.active !== !1) {
        if (Gn.env.NODE_ENV !== "production" && t(n))
          continue;
        J(
          n,
          n.i,
          n.i ? 15 : 14
        );
      }
    }
  } finally {
    A = 0, E.length = 0, or(e), ge = !1, et = null, (E.length || Q.length) && Wt(e);
  }
}
function Ut(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > nr) {
      const r = t.i, s = r && en(r.type);
      return ke(
        `Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
const Me = /* @__PURE__ */ new Map();
Rt().__VUE_HMR_RUNTIME__ = {
  createRecord: Fe(cr),
  rerender: Fe(lr),
  reload: Fe(ar)
};
const me = /* @__PURE__ */ new Map();
function cr(e, t) {
  return me.has(e) ? !1 : (me.set(e, {
    initialDef: we(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function we(e) {
  return nn(e) ? e.__vccOpts : e;
}
function lr(e, t) {
  const n = me.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((r) => {
    t && (r.render = t, we(r.type).render = t), r.renderCache = [], r.effect.dirty = !0, r.update();
  }));
}
function ar(e, t) {
  const n = me.get(e);
  if (!n) return;
  t = we(t), pt(n.initialDef, t);
  const r = [...n.instances];
  for (let s = 0; s < r.length; s++) {
    const o = r[s], i = we(o.type);
    let c = Me.get(i);
    c || (i !== n.initialDef && pt(i, t), Me.set(i, c = /* @__PURE__ */ new Set())), c.add(o), o.appContext.propsCache.delete(o.type), o.appContext.emitsCache.delete(o.type), o.appContext.optionsCache.delete(o.type), o.ceReload ? (c.add(o), o.ceReload(t.styles), c.delete(o)) : o.parent ? (o.parent.effect.dirty = !0, tt(() => {
      o.parent.update(), c.delete(o);
    })) : o.appContext.reload ? o.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  Dt(() => {
    Me.clear();
  });
}
function pt(e, t) {
  O(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Fe(e) {
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
let D = null, nt = null;
function ur(e) {
  nt = e;
}
function fr() {
  nt = null;
}
function Bt(e, t) {
  e.shapeFlag & 6 && e.component ? Bt(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function qt(e, t) {
  return w(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    O({ name: e.name }, t, { setup: e })
  ) : e;
}
const dr = Symbol.for("v-ndc"), ze = (e) => e ? zr(e) ? Kr(e) : ze(e.parent) : null, te = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ O(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => fe(e.props),
    $attrs: (e) => fe(e.attrs),
    $slots: (e) => fe(e.slots),
    $refs: (e) => fe(e.refs),
    $parent: (e) => ze(e.parent),
    $root: (e) => ze(e.root),
    $emit: (e) => e.emit,
    $options: (e) => hr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, tt(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = rr.bind(e.proxy)),
    $watch: (e) => Rr.bind(e)
  })
), Ne = (e, t) => e !== M && !e.__isScriptSetup && m(e, t), pr = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: s, props: o, accessCache: i, type: c, appContext: a } = e;
    if (t === "__isVue")
      return !0;
    let u;
    if (t[0] !== "$") {
      const g = i[t];
      if (g !== void 0)
        switch (g) {
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
        if (Ne(r, t))
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
    const _ = te[t];
    let l, f;
    if (_)
      return t === "$attrs" ? C(e.attrs, "get", "") : t === "$slots" && C(e, "get", t), _(e);
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
    return Ne(s, t) ? (s[t] = n, !0) : s.__isScriptSetup && m(s, t) ? (b(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : r !== M && m(r, t) ? (r[t] = n, !0) : m(e.props, t) ? (b(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (b(
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
    return !!n[i] || e !== M && m(e, i) || Ne(t, i) || (c = o[0]) && m(c, i) || m(r, i) || m(te, i) || m(s.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : m(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
pr.ownKeys = (e) => (b(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e));
function ht(e) {
  return h(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function hr(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: s,
    optionsCache: o,
    config: { optionMergeStrategies: i }
  } = e.appContext, c = o.get(t);
  let a;
  return c ? a = c : !s.length && !n && !r ? a = t : (a = {}, s.length && s.forEach(
    (u) => be(a, u, i, !0)
  ), be(a, t, i)), y(t) && o.set(t, a), a;
}
function be(e, t, n, r = !1) {
  const { mixins: s, extends: o } = t;
  o && be(e, o, n, !0), s && s.forEach(
    (i) => be(e, i, n, !0)
  );
  for (const i in t)
    if (r && i === "expose")
      b(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const c = _r[i] || n && n[i];
      e[i] = c ? c(e[i], t[i]) : t[i];
    }
  return e;
}
const _r = {
  data: _t,
  props: mt,
  emits: mt,
  // objects
  methods: k,
  computed: k,
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
  components: k,
  directives: k,
  // watch
  watch: mr,
  // provide / inject
  provide: _t,
  inject: gr
};
function _t(e, t) {
  return t ? e ? function() {
    return O(
      w(e) ? e.call(this, this) : e,
      w(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function gr(e, t) {
  return k(gt(e), gt(t));
}
function gt(e) {
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
function k(e, t) {
  return e ? O(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function mt(e, t) {
  return e ? h(e) && h(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : O(
    /* @__PURE__ */ Object.create(null),
    ht(e),
    ht(t ?? {})
  ) : t;
}
function mr(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = O(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = x(e[r], t[r]);
  return n;
}
let wt = null;
function wr(e, t, n = !1) {
  const r = Ie || D;
  if (r || wt) {
    const s = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : wt._context.provides;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && w(t) ? t.call(r && r.proxy) : t;
    b(`injection "${String(e)}" not found.`);
  } else
    b("inject() can only be used inside setup() or functional components.");
}
const br = {}, Jt = (e) => Object.getPrototypeOf(e) === br, Sr = (e) => e.__isTeleport, bt = Er, yr = Symbol.for("v-scx"), xr = () => {
  {
    const e = wr(yr);
    return e || b(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
}, de = {};
function Cr(e, t, {
  immediate: n,
  deep: r,
  flush: s,
  once: o,
  onTrack: i,
  onTrigger: c
} = M) {
  if (t && o) {
    const p = t;
    t = (...$e) => {
      p(...$e), Ee();
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
  const a = (p) => {
    b(
      "Invalid watch source: ",
      p,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, u = Ie, _ = (p) => r === !0 ? p : (
    // for deep: false, only traverse root-level properties
    K(p, r === !1 ? 1 : void 0)
  );
  let l, f = !1, g = !1;
  if (I(e) ? (l = () => e.value, f = V(e)) : Y(e) ? (l = () => _(e), f = !0) : h(e) ? (g = !0, f = e.some((p) => Y(p) || V(p)), l = () => e.map((p) => {
    if (I(p))
      return p.value;
    if (Y(p))
      return _(p);
    if (w(p))
      return J(p, u, 2);
    a(p);
  })) : w(e) ? t ? l = () => J(e, u, 2) : l = () => (S && S(), pe(
    e,
    u,
    3,
    [T]
  )) : (l = oe, a(e)), t && r) {
    const p = l;
    l = () => K(p());
  }
  let S, T = (p) => {
    S = R.onStop = () => {
      J(p, u, 4), S = R.onStop = void 0;
    };
  }, Oe;
  if (kt)
    if (T = oe, t ? n && pe(t, u, 3, [
      l(),
      g ? [] : void 0,
      T
    ]) : l(), s === "sync") {
      const p = xr();
      Oe = p.__watcherHandles || (p.__watcherHandles = []);
    } else
      return oe;
  let L = g ? new Array(e.length).fill(de) : de;
  const H = () => {
    if (!(!R.active || !R.dirty))
      if (t) {
        const p = R.run();
        (r || f || (g ? p.some(($e, on) => X($e, L[on])) : X(p, L))) && (S && S(), pe(t, u, 3, [
          p,
          // pass undefined as the old value when it's changed for the first time
          L === de ? void 0 : g && L[0] === de ? [] : L,
          T
        ]), L = p);
      } else
        R.run();
  };
  H.allowRecurse = !!t;
  let se;
  s === "sync" ? se = H : s === "post" ? se = () => bt(H, u && u.suspense) : (H.pre = !0, u && (H.id = u.uid), se = () => tt(H));
  const R = new yn(l, oe, se), Ee = () => {
    R.stop();
  };
  return R.onTrack = i, R.onTrigger = c, t ? n ? H() : L = R.run() : s === "post" ? bt(
    R.run.bind(R),
    u && u.suspense
  ) : R.run(), Oe && Oe.push(Ee), Ee;
}
function Rr(e, t, n) {
  const r = this.proxy, s = P(e) ? e.includes(".") ? Ir(r, e) : () => r[e] : e.bind(r, r);
  let o;
  w(t) ? o = t : (o = t.handler, n = t);
  const i = Hr(this), c = Cr(s, o.bind(r), n);
  return i(), c;
}
function Ir(e, t) {
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
  if (n.add(e), t--, I(e))
    K(e.value, t, n);
  else if (h(e))
    for (let r = 0; r < e.length; r++)
      K(e[r], t, n);
  else if (St(e) || W(e))
    e.forEach((r) => {
      K(r, t, n);
    });
  else if (Ct(e)) {
    for (const r in e)
      K(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && K(e[r], t, n);
  }
  return e;
}
const Or = (e) => e.__isSuspense;
function Er(e, t) {
  t && t.pendingBranch ? h(e) ? t.effects.push(...e) : t.effects.push(e) : Dt(e);
}
const Gt = Symbol.for("v-fgt"), $r = Symbol.for("v-txt"), Pr = Symbol.for("v-cmt"), he = [];
let $ = null;
function Yt(e = !1) {
  he.push($ = e ? null : []);
}
function Tr() {
  he.pop(), $ = he[he.length - 1] || null;
}
function Mr(e) {
  return e.dynamicChildren = $ || ln, Tr(), $ && $.push(e), e;
}
function Qt(e, t, n, r, s, o) {
  return Mr(
    Z(
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
function Fr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const Nr = (...e) => jr(
  ...e
), Xt = ({ key: e }) => e ?? null, _e = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? P(e) || I(e) || w(e) ? { i: D, r: e, k: t, f: !!n } : e : null);
function Z(e, t = null, n = null, r = 0, s = null, o = e === Gt ? 0 : 1, i = !1, c = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Xt(t),
    ref: t && _e(t),
    scopeId: nt,
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
  return c ? (rt(a, n), o & 128 && e.normalize(a)) : n && (a.shapeFlag |= P(n) ? 8 : 16), a.key !== a.key && b("VNode created with invalid key (NaN). VNode type:", a.type), // avoid a block node from tracking itself
  !i && // has current parent block
  $ && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && $.push(a), a;
}
const Ar = Nr;
function jr(e, t = null, n = null, r = 0, s = null, o = !1) {
  if ((!e || e === dr) && (e || b(`Invalid vnode type when creating vnode: ${e}.`), e = Pr), Fr(e)) {
    const c = Se(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && rt(c, n), !o && $ && (c.shapeFlag & 6 ? $[$.indexOf(e)] = c : $.push(c)), c.patchFlag = -2, c;
  }
  if (nn(e) && (e = e.__vccOpts), t) {
    t = Vr(t);
    let { class: c, style: a } = t;
    c && !P(c) && (t.class = Ue(c)), y(a) && (Le(a) && !h(a) && (a = O({}, a)), t.style = We(a));
  }
  const i = P(e) ? 1 : Or(e) ? 128 : Sr(e) ? 64 : y(e) ? 4 : w(e) ? 2 : 0;
  return i & 4 && Le(e) && (e = d(e), b(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), Z(
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
function Vr(e) {
  return e ? Le(e) || Jt(e) ? O({}, e) : e : null;
}
function Se(e, t, n = !1, r = !1) {
  const { props: s, ref: o, patchFlag: i, children: c, transition: a } = e, u = t ? Lr(s || {}, t) : s, _ = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && Xt(u),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? h(o) ? o.concat(_e(t)) : [o, _e(t)] : _e(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: i === -1 && h(c) ? c.map(Zt) : c,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Gt ? i === -1 ? 16 : i | 16 : i,
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
    ssContent: e.ssContent && Se(e.ssContent),
    ssFallback: e.ssFallback && Se(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && r && Bt(
    _,
    a.clone(_)
  ), _;
}
function Zt(e) {
  const t = Se(e);
  return h(e.children) && (t.children = e.children.map(Zt)), t;
}
function vr(e = " ", t = 0) {
  return Ar($r, null, e, t);
}
function rt(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (h(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), rt(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !Jt(t) ? t._ctx = D : s === 3 && D && (D.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else w(t) ? (t = { default: t, _ctx: D }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [vr(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Lr(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r)
      if (s === "class")
        t.class !== r.class && (t.class = Ue([t.class, r.class]));
      else if (s === "style")
        t.style = We([t.style, r.style]);
      else if (an(s)) {
        const o = t[s], i = r[s];
        i && o !== i && !(h(o) && o.includes(i)) && (t[s] = o ? [].concat(o, i) : i);
      } else s !== "" && (t[s] = r[s]);
  }
  return t;
}
let Ie = null, Ke;
{
  const e = Rt(), t = (n, r) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(r), (o) => {
      s.length > 1 ? s.forEach((i) => i(o)) : s[0](o);
    };
  };
  Ke = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Ie = n
  ), t(
    "__VUE_SSR_SETTERS__",
    (n) => kt = n
  );
}
const Hr = (e) => {
  const t = Ie;
  return Ke(e), e.scope.on(), () => {
    e.scope.off(), Ke(t);
  };
};
function zr(e) {
  return e.vnode.shapeFlag & 4;
}
let kt = !1;
function Kr(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Jn(Un(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in te)
        return te[n](e);
    },
    has(t, n) {
      return n in t || n in te;
    }
  })) : e.proxy;
}
const Dr = /(?:^|[-_])(\w)/g, Wr = (e) => e.replace(Dr, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function en(e, t = !0) {
  return w(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function tn(e, t, n = !1) {
  let r = en(t);
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
  return r ? Wr(r) : n ? "App" : "Anonymous";
}
function nn(e) {
  return w(e) && "__vccOpts" in e;
}
function Ur() {
  if (typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, r = { style: "color:#eb2f96" }, s = {
    __vue_custom_formatter: !0,
    header(l) {
      return y(l) ? l.__isVue ? ["div", e, "VueInstance"] : I(l) ? [
        "div",
        {},
        ["span", e, _(l)],
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
    l.type.props && l.props && f.push(i("props", d(l.props))), l.setupState !== M && f.push(i("setup", l.setupState)), l.data !== M && f.push(i("data", d(l.data)));
    const g = a(l, "computed");
    g && f.push(i("computed", g));
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
        ...Object.keys(f).map((g) => [
          "div",
          {},
          ["span", r, g + ": "],
          c(f[g], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function c(l, f = !0) {
    return typeof l == "number" ? ["span", t, l] : typeof l == "string" ? ["span", n, JSON.stringify(l)] : typeof l == "boolean" ? ["span", r, l] : y(l) ? ["object", { object: f ? d(l) : l }] : ["span", n, String(l)];
  }
  function a(l, f) {
    const g = l.type;
    if (w(g))
      return;
    const S = {};
    for (const T in l.ctx)
      u(g, T, f) && (S[T] = l.ctx[T]);
    return S;
  }
  function u(l, f, g) {
    const S = l[g];
    if (h(S) && S.includes(f) || y(S) && f in S || l.extends && u(l.extends, f, g) || l.mixins && l.mixins.some((T) => u(T, f, g)))
      return !0;
  }
  function _(l) {
    return V(l) ? "ShallowRef" : l.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(s) : window.devtoolsFormatters = [s];
}
function Br() {
  Ur();
}
Br();
const rn = (e) => (ur("data-v-639e018f"), e = e(), fr(), e), qr = /* @__PURE__ */ rn(() => /* @__PURE__ */ Z("i", null, "1", -1)), Jr = /* @__PURE__ */ rn(() => /* @__PURE__ */ Z("i", null, "2", -1)), Gr = /* @__PURE__ */ qt({
  name: "ComponentA",
  __name: "index",
  props: {
    text: { default: "Click me" }
  },
  setup(e) {
    const t = () => {
      console.log("Button clicked");
    };
    return (n, r) => (Yt(), Qt("button", { onClick: t }, [
      qr,
      Z("span", null, Be(n.text) + "123", 1),
      Jr
    ]));
  }
});
const sn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of t)
    n[r] = s;
  return n;
}, Yr = /* @__PURE__ */ sn(Gr, [["__scopeId", "data-v-639e018f"]]), Qr = /* @__PURE__ */ qt({
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
const Xr = { class: "component-b" };
function Zr(e, t, n, r, s, o) {
  return Yt(), Qt("div", Xr, [
    Z("h1", null, Be(e.message), 1)
  ]);
}
const kr = /* @__PURE__ */ sn(Qr, [["render", Zr], ["__scopeId", "data-v-25f25220"]]), es = {
  ComponentA: Yr,
  ComponentB: kr
};
export {
  es as default
};
