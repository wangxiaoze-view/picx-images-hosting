/**
* @vue/shared v3.4.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function rn(e, t) {
  const n = new Set(e.split(","));
  return (r) => n.has(r);
}
const D = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, sn = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], Q = () => {
}, on = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), V = Object.assign, cn = Object.prototype.hasOwnProperty, E = (e, t) => cn.call(e, t), h = Array.isArray, U = (e) => be(e) === "[object Map]", wt = (e) => be(e) === "[object Set]", w = (e) => typeof e == "function", v = (e) => typeof e == "string", Y = (e) => typeof e == "symbol", O = (e) => e !== null && typeof e == "object", ln = (e) => (O(e) || w(e)) && w(e.then) && w(e.catch), Nt = Object.prototype.toString, be = (e) => Nt.call(e), Ot = (e) => be(e).slice(8, -1), bt = (e) => be(e) === "[object Object]", Ue = (e) => v(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, un = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, an = un((e) => e.charAt(0).toUpperCase() + e.slice(1)), k = (e, t) => !Object.is(e, t), fn = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
};
let st;
const St = () => st || (st = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function We(e) {
  if (h(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], s = v(r) ? _n(r) : We(r);
      if (s)
        for (const o in s)
          t[o] = s[o];
    }
    return t;
  } else if (v(e) || O(e))
    return e;
}
const pn = /;(?![^(]*\))/g, dn = /:([^]+)/, hn = /\/\*[^]*?\*\//g;
function _n(e) {
  const t = {};
  return e.replace(hn, "").split(pn).forEach((n) => {
    if (n) {
      const r = n.split(dn);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function Be(e) {
  let t = "";
  if (v(e))
    t = e;
  else if (h(e))
    for (let n = 0; n < e.length; n++) {
      const r = Be(e[n]);
      r && (t += r + " ");
    }
  else if (O(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const yt = (e) => !!(e && e.__v_isRef === !0), gn = (e) => v(e) ? e : e == null ? "" : h(e) || O(e) && (e.toString === Nt || !w(e.toString)) ? yt(e) ? gn(e.value) : JSON.stringify(e, vt, 2) : String(e), vt = (e, t) => yt(t) ? vt(e, t.value) : U(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, s], o) => (n[Ie(r, o) + " =>"] = s, n),
    {}
  )
} : wt(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Ie(n))
} : Y(t) ? Ie(t) : O(t) && !h(t) && !bt(t) ? String(t) : t, Ie = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Y(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.4.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function re(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let mn;
function En(e, t = mn) {
  t && t.active && t.effects.push(e);
}
let te;
class wn {
  constructor(t, n, r, s) {
    this.fn = t, this.trigger = n, this.scheduler = r, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, En(this, s);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, Se();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (Nn(n.computed), this._dirtyLevel >= 4))
          break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), ye();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let t = W, n = te;
    try {
      return W = !0, te = this, this._runnings++, ot(this), this.fn();
    } finally {
      it(this), this._runnings--, te = n, W = t;
    }
  }
  stop() {
    this.active && (ot(this), it(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Nn(e) {
  return e.value;
}
function ot(e) {
  e._trackId++, e._depsLength = 0;
}
function it(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      xt(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function xt(e, t) {
  const n = e.get(t);
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup());
}
let W = !0, Me = 0;
const Vt = [];
function Se() {
  Vt.push(W), W = !1;
}
function ye() {
  const e = Vt.pop();
  W = e === void 0 ? !0 : e;
}
function Je() {
  Me++;
}
function qe() {
  for (Me--; !Me && Ae.length; )
    Ae.shift()();
}
function On(e, t, n) {
  var r;
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const s = e.deps[e._depsLength];
    s !== t ? (s && xt(s, e), e.deps[e._depsLength++] = t) : e._depsLength++, process.env.NODE_ENV !== "production" && ((r = e.onTrack) == null || r.call(e, V({ effect: e }, n)));
  }
}
const Ae = [];
function bn(e, t, n) {
  var r;
  Je();
  for (const s of e.keys()) {
    let o;
    s._dirtyLevel < t && (o ?? (o = e.get(s) === s._trackId)) && (s._shouldSchedule || (s._shouldSchedule = s._dirtyLevel === 0), s._dirtyLevel = t), s._shouldSchedule && (o ?? (o = e.get(s) === s._trackId)) && (process.env.NODE_ENV !== "production" && ((r = s.onTrigger) == null || r.call(s, V({ effect: s }, n))), s.trigger(), (!s._runnings || s.allowRecurse) && s._dirtyLevel !== 2 && (s._shouldSchedule = !1, s.scheduler && Ae.push(s.scheduler)));
  }
  qe();
}
const Sn = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = e, n.computed = t, n;
}, Fe = /* @__PURE__ */ new WeakMap(), B = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), je = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
function b(e, t, n) {
  if (W && te) {
    let r = Fe.get(e);
    r || Fe.set(e, r = /* @__PURE__ */ new Map());
    let s = r.get(n);
    s || r.set(n, s = Sn(() => r.delete(n))), On(
      te,
      s,
      process.env.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n
      } : void 0
    );
  }
}
function A(e, t, n, r, s, o) {
  const i = Fe.get(e);
  if (!i)
    return;
  let c = [];
  if (t === "clear")
    c = [...i.values()];
  else if (n === "length" && h(e)) {
    const u = Number(r);
    i.forEach((a, _) => {
      (_ === "length" || !Y(_) && _ >= u) && c.push(a);
    });
  } else
    switch (n !== void 0 && c.push(i.get(n)), t) {
      case "add":
        h(e) ? Ue(n) && c.push(i.get("length")) : (c.push(i.get(B)), U(e) && c.push(i.get(je)));
        break;
      case "delete":
        h(e) || (c.push(i.get(B)), U(e) && c.push(i.get(je)));
        break;
      case "set":
        U(e) && c.push(i.get(B));
        break;
    }
  Je();
  for (const u of c)
    u && bn(
      u,
      4,
      process.env.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n,
        newValue: r,
        oldValue: s,
        oldTarget: o
      } : void 0
    );
  qe();
}
const yn = /* @__PURE__ */ rn("__proto__,__v_isRef,__isVue"), Rt = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Y)
), ct = /* @__PURE__ */ vn();
function vn() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const r = p(this);
      for (let o = 0, i = this.length; o < i; o++)
        b(r, "get", o + "");
      const s = r[t](...n);
      return s === -1 || s === !1 ? r[t](...n.map(p)) : s;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      Se(), Je();
      const r = p(this)[t].apply(this, n);
      return qe(), ye(), r;
    };
  }), e;
}
function xn(e) {
  Y(e) || (e = String(e));
  const t = p(this);
  return b(t, "has", e), t.hasOwnProperty(e);
}
class Ct {
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
      return r === (s ? o ? Tt : $t : o ? Ln : Pt).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const i = h(t);
    if (!s) {
      if (i && E(ct, n))
        return Reflect.get(ct, n, r);
      if (n === "hasOwnProperty")
        return xn;
    }
    const c = Reflect.get(t, n, r);
    return (Y(n) ? Rt.has(n) : yn(n)) || (s || b(t, "get", n), o) ? c : x(c) ? i && Ue(n) ? c : c.value : O(c) ? s ? At(c) : Mt(c) : c;
  }
}
class Vn extends Ct {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, s) {
    let o = t[n];
    if (!this._isShallow) {
      const u = j(o);
      if (!F(r) && !j(r) && (o = p(o), r = p(r)), !h(t) && x(o) && !x(r))
        return u ? !1 : (o.value = r, !0);
    }
    const i = h(t) && Ue(n) ? Number(n) < t.length : E(t, n), c = Reflect.set(t, n, r, s);
    return t === p(s) && (i ? k(r, o) && A(t, "set", n, r, o) : A(t, "add", n, r)), c;
  }
  deleteProperty(t, n) {
    const r = E(t, n), s = t[n], o = Reflect.deleteProperty(t, n);
    return o && r && A(t, "delete", n, void 0, s), o;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Y(n) || !Rt.has(n)) && b(t, "has", n), r;
  }
  ownKeys(t) {
    return b(
      t,
      "iterate",
      h(t) ? "length" : B
    ), Reflect.ownKeys(t);
  }
}
class It extends Ct {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return process.env.NODE_ENV !== "production" && re(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return process.env.NODE_ENV !== "production" && re(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const Rn = /* @__PURE__ */ new Vn(), Cn = /* @__PURE__ */ new It(), In = /* @__PURE__ */ new It(!0), Ye = (e) => e, ve = (e) => Reflect.getPrototypeOf(e);
function ie(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const s = p(e), o = p(t);
  n || (k(t, o) && b(s, "get", t), b(s, "get", o));
  const { has: i } = ve(s), c = r ? Ye : n ? Ze : Xe;
  if (i.call(s, t))
    return c(e.get(t));
  if (i.call(s, o))
    return c(e.get(o));
  e !== s && e.get(t);
}
function ce(e, t = !1) {
  const n = this.__v_raw, r = p(n), s = p(e);
  return t || (k(e, s) && b(r, "has", e), b(r, "has", s)), e === s ? n.has(e) : n.has(e) || n.has(s);
}
function le(e, t = !1) {
  return e = e.__v_raw, !t && b(p(e), "iterate", B), Reflect.get(e, "size", e);
}
function lt(e, t = !1) {
  !t && !F(e) && !j(e) && (e = p(e));
  const n = p(this);
  return ve(n).has.call(n, e) || (n.add(e), A(n, "add", e, e)), this;
}
function ut(e, t, n = !1) {
  !n && !F(t) && !j(t) && (t = p(t));
  const r = p(this), { has: s, get: o } = ve(r);
  let i = s.call(r, e);
  i ? process.env.NODE_ENV !== "production" && Dt(r, s, e) : (e = p(e), i = s.call(r, e));
  const c = o.call(r, e);
  return r.set(e, t), i ? k(t, c) && A(r, "set", e, t, c) : A(r, "add", e, t), this;
}
function at(e) {
  const t = p(this), { has: n, get: r } = ve(t);
  let s = n.call(t, e);
  s ? process.env.NODE_ENV !== "production" && Dt(t, n, e) : (e = p(e), s = n.call(t, e));
  const o = r ? r.call(t, e) : void 0, i = t.delete(e);
  return s && A(t, "delete", e, void 0, o), i;
}
function ft() {
  const e = p(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? U(e) ? new Map(e) : new Set(e) : void 0, r = e.clear();
  return t && A(e, "clear", void 0, void 0, n), r;
}
function ue(e, t) {
  return function(r, s) {
    const o = this, i = o.__v_raw, c = p(i), u = t ? Ye : e ? Ze : Xe;
    return !e && b(c, "iterate", B), i.forEach((a, _) => r.call(s, u(a), u(_), o));
  };
}
function ae(e, t, n) {
  return function(...r) {
    const s = this.__v_raw, o = p(s), i = U(o), c = e === "entries" || e === Symbol.iterator && i, u = e === "keys" && i, a = s[e](...r), _ = n ? Ye : t ? Ze : Xe;
    return !t && b(
      o,
      "iterate",
      u ? je : B
    ), {
      // iterator protocol
      next() {
        const { value: l, done: f } = a.next();
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
function $(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      re(
        `${an(e)} operation ${n}failed: target is readonly.`,
        p(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Dn() {
  const e = {
    get(o) {
      return ie(this, o);
    },
    get size() {
      return le(this);
    },
    has: ce,
    add: lt,
    set: ut,
    delete: at,
    clear: ft,
    forEach: ue(!1, !1)
  }, t = {
    get(o) {
      return ie(this, o, !1, !0);
    },
    get size() {
      return le(this);
    },
    has: ce,
    add(o) {
      return lt.call(this, o, !0);
    },
    set(o, i) {
      return ut.call(this, o, i, !0);
    },
    delete: at,
    clear: ft,
    forEach: ue(!1, !0)
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
    add: $("add"),
    set: $("set"),
    delete: $("delete"),
    clear: $("clear"),
    forEach: ue(!0, !1)
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
    add: $("add"),
    set: $("set"),
    delete: $("delete"),
    clear: $("clear"),
    forEach: ue(!0, !0)
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
  Pn,
  $n,
  Tn,
  Mn
] = /* @__PURE__ */ Dn();
function Ge(e, t) {
  const n = t ? e ? Mn : Tn : e ? $n : Pn;
  return (r, s, o) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(
    E(n, s) && s in r ? n : r,
    s,
    o
  );
}
const An = {
  get: /* @__PURE__ */ Ge(!1, !1)
}, Fn = {
  get: /* @__PURE__ */ Ge(!0, !1)
}, jn = {
  get: /* @__PURE__ */ Ge(!0, !0)
};
function Dt(e, t, n) {
  const r = p(n);
  if (r !== n && t.call(e, r)) {
    const s = Ot(e);
    re(
      `Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Pt = /* @__PURE__ */ new WeakMap(), Ln = /* @__PURE__ */ new WeakMap(), $t = /* @__PURE__ */ new WeakMap(), Tt = /* @__PURE__ */ new WeakMap();
function Hn(e) {
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
function Kn(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Hn(Ot(e));
}
function Mt(e) {
  return j(e) ? e : Qe(
    e,
    !1,
    Rn,
    An,
    Pt
  );
}
function At(e) {
  return Qe(
    e,
    !0,
    Cn,
    Fn,
    $t
  );
}
function fe(e) {
  return Qe(
    e,
    !0,
    In,
    jn,
    Tt
  );
}
function Qe(e, t, n, r, s) {
  if (!O(e))
    return process.env.NODE_ENV !== "production" && re(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = s.get(e);
  if (o)
    return o;
  const i = Kn(e);
  if (i === 0)
    return e;
  const c = new Proxy(
    e,
    i === 2 ? r : n
  );
  return s.set(e, c), c;
}
function X(e) {
  return j(e) ? X(e.__v_raw) : !!(e && e.__v_isReactive);
}
function j(e) {
  return !!(e && e.__v_isReadonly);
}
function F(e) {
  return !!(e && e.__v_isShallow);
}
function Le(e) {
  return e ? !!e.__v_raw : !1;
}
function p(e) {
  const t = e && e.__v_raw;
  return t ? p(t) : e;
}
function zn(e) {
  return Object.isExtensible(e) && fn(e, "__v_skip", !0), e;
}
const Xe = (e) => O(e) ? Mt(e) : e, Ze = (e) => O(e) ? At(e) : e;
function x(e) {
  return !!(e && e.__v_isRef === !0);
}
function Un(e) {
  return x(e) ? e.value : e;
}
const Wn = {
  get: (e, t, n) => Un(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t];
    return x(s) && !x(n) ? (s.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Bn(e) {
  return X(e) ? e : new Proxy(e, Wn);
}
/**
* @vue/runtime-core v3.4.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const J = [];
function Jn(e) {
  J.push(e);
}
function qn() {
  J.pop();
}
let De = !1;
function g(e, ...t) {
  if (De) return;
  De = !0, Se();
  const n = J.length ? J[J.length - 1].component : null, r = n && n.appContext.config.warnHandler, s = Yn();
  if (r)
    q(
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
          ({ vnode: o }) => `at <${en(n, o.type)}>`
        ).join(`
`),
        s
      ]
    );
  else {
    const o = [`[Vue warn]: ${e}`, ...t];
    s.length && o.push(`
`, ...Gn(s)), console.warn(...o);
  }
  ye(), De = !1;
}
function Yn() {
  let e = J[J.length - 1];
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
function Gn(e) {
  const t = [];
  return e.forEach((n, r) => {
    t.push(...r === 0 ? [] : [`
`], ...Qn(n));
  }), t;
}
function Qn({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", r = e.component ? e.component.parent == null : !1, s = ` at <${en(
    e.component,
    e.type,
    r
  )}`, o = ">" + n;
  return e.props ? [s, ...Xn(e.props), o] : [s + o];
}
function Xn(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((r) => {
    t.push(...Ft(r, e[r]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Ft(e, t, n) {
  return v(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : x(t) ? (t = Ft(e, p(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : w(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = p(t), n ? t : [`${e}=`, t]);
}
const jt = {
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
function q(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (s) {
    ke(s, t, n);
  }
}
function he(e, t, n, r) {
  if (w(e)) {
    const s = q(e, t, n, r);
    return s && ln(s) && s.catch((o) => {
      ke(o, t, n);
    }), s;
  }
  if (h(e)) {
    const s = [];
    for (let o = 0; o < e.length; o++)
      s.push(he(e[o], t, n, r));
    return s;
  } else process.env.NODE_ENV !== "production" && g(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function ke(e, t, n, r = !0) {
  const s = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const i = t.proxy, c = process.env.NODE_ENV !== "production" ? jt[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; o; ) {
      const a = o.ec;
      if (a) {
        for (let _ = 0; _ < a.length; _++)
          if (a[_](e, i, c) === !1)
            return;
      }
      o = o.parent;
    }
    const u = t.appContext.config.errorHandler;
    if (u) {
      Se(), q(
        u,
        null,
        10,
        [e, i, c]
      ), ye();
      return;
    }
  }
  Zn(e, n, s, r);
}
function Zn(e, t, n, r = !0) {
  if (process.env.NODE_ENV !== "production") {
    const s = jt[t];
    if (n && Jn(n), g(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && qn(), r)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let me = !1, He = !1;
const R = [];
let M = 0;
const Z = [];
let T = null, K = 0;
const Lt = /* @__PURE__ */ Promise.resolve();
let et = null;
const kn = 100;
function er(e) {
  const t = et || Lt;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function tr(e) {
  let t = M + 1, n = R.length;
  for (; t < n; ) {
    const r = t + n >>> 1, s = R[r], o = se(s);
    o < e || o === e && s.pre ? t = r + 1 : n = r;
  }
  return t;
}
function tt(e) {
  (!R.length || !R.includes(
    e,
    me && e.allowRecurse ? M + 1 : M
  )) && (e.id == null ? R.push(e) : R.splice(tr(e.id), 0, e), Ht());
}
function Ht() {
  !me && !He && (He = !0, et = Lt.then(zt));
}
function Kt(e) {
  h(e) ? Z.push(...e) : (!T || !T.includes(
    e,
    e.allowRecurse ? K + 1 : K
  )) && Z.push(e), Ht();
}
function nr(e) {
  if (Z.length) {
    const t = [...new Set(Z)].sort(
      (n, r) => se(n) - se(r)
    );
    if (Z.length = 0, T) {
      T.push(...t);
      return;
    }
    for (T = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), K = 0; K < T.length; K++) {
      const n = T[K];
      process.env.NODE_ENV !== "production" && Ut(e, n) || n.active !== !1 && n();
    }
    T = null, K = 0;
  }
}
const se = (e) => e.id == null ? 1 / 0 : e.id, rr = (e, t) => {
  const n = se(e) - se(t);
  if (n === 0) {
    if (e.pre && !t.pre) return -1;
    if (t.pre && !e.pre) return 1;
  }
  return n;
};
function zt(e) {
  He = !1, me = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), R.sort(rr);
  const t = process.env.NODE_ENV !== "production" ? (n) => Ut(e, n) : Q;
  try {
    for (M = 0; M < R.length; M++) {
      const n = R[M];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        q(
          n,
          n.i,
          n.i ? 15 : 14
        );
      }
    }
  } finally {
    M = 0, R.length = 0, nr(e), me = !1, et = null, (R.length || Z.length) && zt(e);
  }
}
function Ut(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > kn) {
      const r = t.i, s = r && kt(r.type);
      return ke(
        `Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
const Pe = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (St().__VUE_HMR_RUNTIME__ = {
  createRecord: $e(sr),
  rerender: $e(or),
  reload: $e(ir)
});
const Ee = /* @__PURE__ */ new Map();
function sr(e, t) {
  return Ee.has(e) ? !1 : (Ee.set(e, {
    initialDef: we(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function we(e) {
  return tn(e) ? e.__vccOpts : e;
}
function or(e, t) {
  const n = Ee.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((r) => {
    t && (r.render = t, we(r.type).render = t), r.renderCache = [], r.effect.dirty = !0, r.update();
  }));
}
function ir(e, t) {
  const n = Ee.get(e);
  if (!n) return;
  t = we(t), pt(n.initialDef, t);
  const r = [...n.instances];
  for (let s = 0; s < r.length; s++) {
    const o = r[s], i = we(o.type);
    let c = Pe.get(i);
    c || (i !== n.initialDef && pt(i, t), Pe.set(i, c = /* @__PURE__ */ new Set())), c.add(o), o.appContext.propsCache.delete(o.type), o.appContext.emitsCache.delete(o.type), o.appContext.optionsCache.delete(o.type), o.ceReload ? (c.add(o), o.ceReload(t.styles), c.delete(o)) : o.parent ? (o.parent.effect.dirty = !0, tt(() => {
      o.parent.update(), c.delete(o);
    })) : o.appContext.reload ? o.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  Kt(() => {
    Pe.clear();
  });
}
function pt(e, t) {
  V(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function $e(e) {
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
let G, pe = [];
function Wt(e, t) {
  var n, r;
  G = e, G ? (G.enabled = !0, pe.forEach(({ event: s, args: o }) => G.emit(s, ...o)), pe = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((r = (n = window.navigator) == null ? void 0 : n.userAgent) != null && r.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((o) => {
    Wt(o, t);
  }), setTimeout(() => {
    G || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, pe = []);
  }, 3e3)) : pe = [];
}
let P = null, nt = null;
function Kr(e) {
  nt = e;
}
function zr() {
  nt = null;
}
function Bt(e, t) {
  e.shapeFlag & 6 && e.component ? Bt(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ur(e, t) {
  return w(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    V({ name: e.name }, t, { setup: e })
  ) : e;
}
const cr = Symbol.for("v-ndc"), Ke = (e) => e ? Mr(e) ? Ar(e) : Ke(e.parent) : null, ne = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ V(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? fe(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? fe(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? fe(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? fe(e.refs) : e.refs,
    $parent: (e) => Ke(e.parent),
    $root: (e) => Ke(e.root),
    $emit: (e) => e.emit,
    $options: (e) => ar(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, tt(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = er.bind(e.proxy)),
    $watch: (e) => Nr.bind(e)
  })
), lr = (e) => e === "_" || e === "$", Te = (e, t) => e !== D && !e.__isScriptSetup && E(e, t), ur = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: s, props: o, accessCache: i, type: c, appContext: u } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let a;
    if (t[0] !== "$") {
      const m = i[t];
      if (m !== void 0)
        switch (m) {
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
        if (Te(r, t))
          return i[t] = 1, r[t];
        if (s !== D && E(s, t))
          return i[t] = 2, s[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (a = e.propsOptions[0]) && E(a, t)
        )
          return i[t] = 3, o[t];
        if (n !== D && E(n, t))
          return i[t] = 4, n[t];
        i[t] = 0;
      }
    }
    const _ = ne[t];
    let l, f;
    if (_)
      return t === "$attrs" ? (b(e.attrs, "get", ""), process.env.NODE_ENV !== "production" && void 0) : process.env.NODE_ENV !== "production" && t === "$slots" && b(e, "get", t), _(e);
    if (
      // css module (injected by vue-loader)
      (l = c.__cssModules) && (l = l[t])
    )
      return l;
    if (n !== D && E(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      f = u.config.globalProperties, E(f, t)
    )
      return f[t];
    process.env.NODE_ENV !== "production" && P && (!v(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (s !== D && lr(t[0]) && E(s, t) ? g(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === P && g(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: s, ctx: o } = e;
    return Te(s, t) ? (s[t] = n, !0) : process.env.NODE_ENV !== "production" && s.__isScriptSetup && E(s, t) ? (g(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : r !== D && E(r, t) ? (r[t] = n, !0) : E(e.props, t) ? (process.env.NODE_ENV !== "production" && g(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && g(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(o, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: s, propsOptions: o }
  }, i) {
    let c;
    return !!n[i] || e !== D && E(e, i) || Te(t, i) || (c = o[0]) && E(c, i) || E(r, i) || E(ne, i) || E(s.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : E(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (ur.ownKeys = (e) => (g(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function dt(e) {
  return h(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function ar(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: s,
    optionsCache: o,
    config: { optionMergeStrategies: i }
  } = e.appContext, c = o.get(t);
  let u;
  return c ? u = c : !s.length && !n && !r ? u = t : (u = {}, s.length && s.forEach(
    (a) => Ne(u, a, i, !0)
  ), Ne(u, t, i)), O(t) && o.set(t, u), u;
}
function Ne(e, t, n, r = !1) {
  const { mixins: s, extends: o } = t;
  o && Ne(e, o, n, !0), s && s.forEach(
    (i) => Ne(e, i, n, !0)
  );
  for (const i in t)
    if (r && i === "expose")
      process.env.NODE_ENV !== "production" && g(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const c = fr[i] || n && n[i];
      e[i] = c ? c(e[i], t[i]) : t[i];
    }
  return e;
}
const fr = {
  data: ht,
  props: gt,
  emits: gt,
  // objects
  methods: ee,
  computed: ee,
  // lifecycle
  beforeCreate: S,
  created: S,
  beforeMount: S,
  mounted: S,
  beforeUpdate: S,
  updated: S,
  beforeDestroy: S,
  beforeUnmount: S,
  destroyed: S,
  unmounted: S,
  activated: S,
  deactivated: S,
  errorCaptured: S,
  serverPrefetch: S,
  // assets
  components: ee,
  directives: ee,
  // watch
  watch: dr,
  // provide / inject
  provide: ht,
  inject: pr
};
function ht(e, t) {
  return t ? e ? function() {
    return V(
      w(e) ? e.call(this, this) : e,
      w(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function pr(e, t) {
  return ee(_t(e), _t(t));
}
function _t(e) {
  if (h(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function S(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ee(e, t) {
  return e ? V(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function gt(e, t) {
  return e ? h(e) && h(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : V(
    /* @__PURE__ */ Object.create(null),
    dt(e),
    dt(t ?? {})
  ) : t;
}
function dr(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = V(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = S(e[r], t[r]);
  return n;
}
let mt = null;
function hr(e, t, n = !1) {
  const r = xe || P;
  if (r || mt) {
    const s = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : mt._context.provides;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && w(t) ? t.call(r && r.proxy) : t;
    process.env.NODE_ENV !== "production" && g(`injection "${String(e)}" not found.`);
  } else process.env.NODE_ENV !== "production" && g("inject() can only be used inside setup() or functional components.");
}
const _r = {}, Jt = (e) => Object.getPrototypeOf(e) === _r, gr = (e) => e.__isTeleport, Et = Sr, mr = Symbol.for("v-scx"), Er = () => {
  {
    const e = hr(mr);
    return e || process.env.NODE_ENV !== "production" && g(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
}, de = {};
function wr(e, t, {
  immediate: n,
  deep: r,
  flush: s,
  once: o,
  onTrack: i,
  onTrigger: c
} = D) {
  if (t && o) {
    const d = t;
    t = (...Ce) => {
      d(...Ce), Re();
    };
  }
  process.env.NODE_ENV !== "production" && r !== void 0 && typeof r == "number" && g(
    'watch() "deep" option with number value will be used as watch depth in future versions. Please use a boolean instead to avoid potential breakage.'
  ), process.env.NODE_ENV !== "production" && !t && (n !== void 0 && g(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && g(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && g(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const u = (d) => {
    g(
      "Invalid watch source: ",
      d,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, a = xe, _ = (d) => r === !0 ? d : (
    // for deep: false, only traverse root-level properties
    z(d, r === !1 ? 1 : void 0)
  );
  let l, f = !1, m = !1;
  if (x(e) ? (l = () => e.value, f = F(e)) : X(e) ? (l = () => _(e), f = !0) : h(e) ? (m = !0, f = e.some((d) => X(d) || F(d)), l = () => e.map((d) => {
    if (x(d))
      return d.value;
    if (X(d))
      return _(d);
    if (w(d))
      return q(d, a, 2);
    process.env.NODE_ENV !== "production" && u(d);
  })) : w(e) ? t ? l = () => q(e, a, 2) : l = () => (N && N(), he(
    e,
    a,
    3,
    [I]
  )) : (l = Q, process.env.NODE_ENV !== "production" && u(e)), t && r) {
    const d = l;
    l = () => z(d());
  }
  let N, I = (d) => {
    N = y.onStop = () => {
      q(d, a, 4), N = y.onStop = void 0;
    };
  }, Ve;
  if (Zt)
    if (I = Q, t ? n && he(t, a, 3, [
      l(),
      m ? [] : void 0,
      I
    ]) : l(), s === "sync") {
      const d = Er();
      Ve = d.__watcherHandles || (d.__watcherHandles = []);
    } else
      return Q;
  let L = m ? new Array(e.length).fill(de) : de;
  const H = () => {
    if (!(!y.active || !y.dirty))
      if (t) {
        const d = y.run();
        (r || f || (m ? d.some((Ce, nn) => k(Ce, L[nn])) : k(d, L))) && (N && N(), he(t, a, 3, [
          d,
          // pass undefined as the old value when it's changed for the first time
          L === de ? void 0 : m && L[0] === de ? [] : L,
          I
        ]), L = d);
      } else
        y.run();
  };
  H.allowRecurse = !!t;
  let oe;
  s === "sync" ? oe = H : s === "post" ? oe = () => Et(H, a && a.suspense) : (H.pre = !0, a && (H.id = a.uid), oe = () => tt(H));
  const y = new wn(l, Q, oe), Re = () => {
    y.stop();
  };
  return process.env.NODE_ENV !== "production" && (y.onTrack = i, y.onTrigger = c), t ? n ? H() : L = y.run() : s === "post" ? Et(
    y.run.bind(y),
    a && a.suspense
  ) : y.run(), Ve && Ve.push(Re), Re;
}
function Nr(e, t, n) {
  const r = this.proxy, s = v(e) ? e.includes(".") ? Or(r, e) : () => r[e] : e.bind(r, r);
  let o;
  w(t) ? o = t : (o = t.handler, n = t);
  const i = Tr(this), c = wr(s, o.bind(r), n);
  return i(), c;
}
function Or(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let s = 0; s < n.length && r; s++)
      r = r[n[s]];
    return r;
  };
}
function z(e, t = 1 / 0, n) {
  if (t <= 0 || !O(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, x(e))
    z(e.value, t, n);
  else if (h(e))
    for (let r = 0; r < e.length; r++)
      z(e[r], t, n);
  else if (wt(e) || U(e))
    e.forEach((r) => {
      z(r, t, n);
    });
  else if (bt(e)) {
    for (const r in e)
      z(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && z(e[r], t, n);
  }
  return e;
}
const br = (e) => e.__isSuspense;
function Sr(e, t) {
  t && t.pendingBranch ? h(e) ? t.effects.push(...e) : t.effects.push(e) : Kt(e);
}
const qt = Symbol.for("v-fgt"), yr = Symbol.for("v-txt"), vr = Symbol.for("v-cmt"), _e = [];
let C = null;
function Wr(e = !1) {
  _e.push(C = e ? null : []);
}
function xr() {
  _e.pop(), C = _e[_e.length - 1] || null;
}
function Vr(e) {
  return e.dynamicChildren = C || sn, xr(), C && C.push(e), e;
}
function Br(e, t, n, r, s, o) {
  return Vr(
    Gt(
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
function Rr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const Cr = (...e) => Qt(
  ...e
), Yt = ({ key: e }) => e ?? null, ge = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? v(e) || x(e) || w(e) ? { i: P, r: e, k: t, f: !!n } : e : null);
function Gt(e, t = null, n = null, r = 0, s = null, o = e === qt ? 0 : 1, i = !1, c = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Yt(t),
    ref: t && ge(t),
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
    ctx: P
  };
  return c ? (rt(u, n), o & 128 && e.normalize(u)) : n && (u.shapeFlag |= v(n) ? 8 : 16), process.env.NODE_ENV !== "production" && u.key !== u.key && g("VNode created with invalid key (NaN). VNode type:", u.type), // avoid a block node from tracking itself
  !i && // has current parent block
  C && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && C.push(u), u;
}
const Ir = process.env.NODE_ENV !== "production" ? Cr : Qt;
function Qt(e, t = null, n = null, r = 0, s = null, o = !1) {
  if ((!e || e === cr) && (process.env.NODE_ENV !== "production" && !e && g(`Invalid vnode type when creating vnode: ${e}.`), e = vr), Rr(e)) {
    const c = Oe(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && rt(c, n), !o && C && (c.shapeFlag & 6 ? C[C.indexOf(e)] = c : C.push(c)), c.patchFlag = -2, c;
  }
  if (tn(e) && (e = e.__vccOpts), t) {
    t = Dr(t);
    let { class: c, style: u } = t;
    c && !v(c) && (t.class = Be(c)), O(u) && (Le(u) && !h(u) && (u = V({}, u)), t.style = We(u));
  }
  const i = v(e) ? 1 : br(e) ? 128 : gr(e) ? 64 : O(e) ? 4 : w(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && Le(e) && (e = p(e), g(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), Gt(
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
function Dr(e) {
  return e ? Le(e) || Jt(e) ? V({}, e) : e : null;
}
function Oe(e, t, n = !1, r = !1) {
  const { props: s, ref: o, patchFlag: i, children: c, transition: u } = e, a = t ? $r(s || {}, t) : s, _ = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && Yt(a),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? h(o) ? o.concat(ge(t)) : [o, ge(t)] : ge(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && i === -1 && h(c) ? c.map(Xt) : c,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== qt ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: u,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Oe(e.ssContent),
    ssFallback: e.ssFallback && Oe(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return u && r && Bt(
    _,
    u.clone(_)
  ), _;
}
function Xt(e) {
  const t = Oe(e);
  return h(e.children) && (t.children = e.children.map(Xt)), t;
}
function Pr(e = " ", t = 0) {
  return Ir(yr, null, e, t);
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
      !s && !Jt(t) ? t._ctx = P : s === 3 && P && (P.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else w(t) ? (t = { default: t, _ctx: P }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [Pr(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function $r(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r)
      if (s === "class")
        t.class !== r.class && (t.class = Be([t.class, r.class]));
      else if (s === "style")
        t.style = We([t.style, r.style]);
      else if (on(s)) {
        const o = t[s], i = r[s];
        i && o !== i && !(h(o) && o.includes(i)) && (t[s] = o ? [].concat(o, i) : i);
      } else s !== "" && (t[s] = r[s]);
  }
  return t;
}
let xe = null, ze;
{
  const e = St(), t = (n, r) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(r), (o) => {
      s.length > 1 ? s.forEach((i) => i(o)) : s[0](o);
    };
  };
  ze = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => xe = n
  ), t(
    "__VUE_SSR_SETTERS__",
    (n) => Zt = n
  );
}
const Tr = (e) => {
  const t = xe;
  return ze(e), e.scope.on(), () => {
    e.scope.off(), ze(t);
  };
};
function Mr(e) {
  return e.vnode.shapeFlag & 4;
}
let Zt = !1;
process.env.NODE_ENV;
function Ar(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Bn(zn(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in ne)
        return ne[n](e);
    },
    has(t, n) {
      return n in t || n in ne;
    }
  })) : e.proxy;
}
const Fr = /(?:^|[-_])(\w)/g, jr = (e) => e.replace(Fr, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function kt(e, t = !0) {
  return w(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function en(e, t, n = !1) {
  let r = kt(t);
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
  return r ? jr(r) : n ? "App" : "Anonymous";
}
function tn(e) {
  return w(e) && "__vccOpts" in e;
}
function Lr() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, r = { style: "color:#eb2f96" }, s = {
    __vue_custom_formatter: !0,
    header(l) {
      return O(l) ? l.__isVue ? ["div", e, "VueInstance"] : x(l) ? [
        "div",
        {},
        ["span", e, _(l)],
        "<",
        c(l.value),
        ">"
      ] : X(l) ? [
        "div",
        {},
        ["span", e, F(l) ? "ShallowReactive" : "Reactive"],
        "<",
        c(l),
        `>${j(l) ? " (readonly)" : ""}`
      ] : j(l) ? [
        "div",
        {},
        ["span", e, F(l) ? "ShallowReadonly" : "Readonly"],
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
    l.type.props && l.props && f.push(i("props", p(l.props))), l.setupState !== D && f.push(i("setup", l.setupState)), l.data !== D && f.push(i("data", p(l.data)));
    const m = u(l, "computed");
    m && f.push(i("computed", m));
    const N = u(l, "inject");
    return N && f.push(i("injected", N)), f.push([
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
    return f = V({}, f), Object.keys(f).length ? [
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
        ...Object.keys(f).map((m) => [
          "div",
          {},
          ["span", r, m + ": "],
          c(f[m], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function c(l, f = !0) {
    return typeof l == "number" ? ["span", t, l] : typeof l == "string" ? ["span", n, JSON.stringify(l)] : typeof l == "boolean" ? ["span", r, l] : O(l) ? ["object", { object: f ? p(l) : l }] : ["span", n, String(l)];
  }
  function u(l, f) {
    const m = l.type;
    if (w(m))
      return;
    const N = {};
    for (const I in l.ctx)
      a(m, I, f) && (N[I] = l.ctx[I]);
    return N;
  }
  function a(l, f, m) {
    const N = l[m];
    if (h(N) && N.includes(f) || O(N) && f in N || l.extends && a(l.extends, f, m) || l.mixins && l.mixins.some((I) => a(I, f, m)))
      return !0;
  }
  function _(l) {
    return F(l) ? "ShallowRef" : l.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(s) : window.devtoolsFormatters = [s];
}
process.env.NODE_ENV;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* vue v3.4.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Hr() {
  Lr();
}
process.env.NODE_ENV !== "production" && Hr();
const Jr = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of t)
    n[r] = s;
  return n;
};
export {
  Jr as _,
  Gt as a,
  zr as b,
  Br as c,
  Ur as d,
  Wr as o,
  Kr as p,
  gn as t
};
