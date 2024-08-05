const X = { class: "mb-4" }, B = /* @__PURE__ */ Vue.defineComponent({
  name: "ComponentA",
  __name: "index",
  props: {
    msg: { default: "ComponentA组件" }
  },
  setup($) {
    return (E, k) => {
      const m = Vue.resolveComponent("el-button");
      return Vue.openBlock(), Vue.createElementBlock("div", null, [
        Vue.createElementVNode("p", null, Vue.toDisplayString(E.msg), 1),
        Vue.createElementVNode("div", X, [
          Vue.createVNode(m, null, {
            default: Vue.withCtx(() => [
              Vue.createTextVNode("Default")
            ]),
            _: 1
          }),
          Vue.createVNode(m, { type: "primary" }, {
            default: Vue.withCtx(() => [
              Vue.createTextVNode("Primary")
            ]),
            _: 1
          }),
          Vue.createVNode(m, { type: "success" }, {
            default: Vue.withCtx(() => [
              Vue.createTextVNode("Success")
            ]),
            _: 1
          }),
          Vue.createVNode(m, { type: "info" }, {
            default: Vue.withCtx(() => [
              Vue.createTextVNode("Info")
            ]),
            _: 1
          }),
          Vue.createVNode(m, { type: "warning" }, {
            default: Vue.withCtx(() => [
              Vue.createTextVNode("Warning")
            ]),
            _: 1
          }),
          Vue.createVNode(m, { type: "danger" }, {
            default: Vue.withCtx(() => [
              Vue.createTextVNode("Danger")
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
});
var ee = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function te($) {
  return $ && $.__esModule && Object.prototype.hasOwnProperty.call($, "default") ? $.default : $;
}
var P = { exports: {} };
(function($, E) {
  (function(k, m) {
    $.exports = m();
  })(ee, function() {
    var k = 1e3, m = 6e4, F = 36e5, W = "millisecond", w = "second", S = "minute", b = "hour", g = "day", Y = "week", y = "month", U = "quarter", M = "year", O = "date", J = "Invalid Date", G = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, Q = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, K = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(s) {
      var n = ["th", "st", "nd", "rd"], e = s % 100;
      return "[" + s + (n[(e - 20) % 10] || n[e] || n[0]) + "]";
    } }, L = function(s, n, e) {
      var r = String(s);
      return !r || r.length >= n ? s : "" + Array(n + 1 - r.length).join(e) + s;
    }, R = { s: L, z: function(s) {
      var n = -s.utcOffset(), e = Math.abs(n), r = Math.floor(e / 60), t = e % 60;
      return (n <= 0 ? "+" : "-") + L(r, 2, "0") + ":" + L(t, 2, "0");
    }, m: function s(n, e) {
      if (n.date() < e.date()) return -s(e, n);
      var r = 12 * (e.year() - n.year()) + (e.month() - n.month()), t = n.clone().add(r, y), i = e - t < 0, u = n.clone().add(r + (i ? -1 : 1), y);
      return +(-(r + (e - t) / (i ? t - u : u - t)) || 0);
    }, a: function(s) {
      return s < 0 ? Math.ceil(s) || 0 : Math.floor(s);
    }, p: function(s) {
      return { M: y, y: M, w: Y, d: g, D: O, h: b, m: S, s: w, ms: W, Q: U }[s] || String(s || "").toLowerCase().replace(/s$/, "");
    }, u: function(s) {
      return s === void 0;
    } }, T = "en", D = {};
    D[T] = K;
    var Z = "$isDayjsObject", I = function(s) {
      return s instanceof j || !(!s || !s[Z]);
    }, H = function s(n, e, r) {
      var t;
      if (!n) return T;
      if (typeof n == "string") {
        var i = n.toLowerCase();
        D[i] && (t = i), e && (D[i] = e, t = i);
        var u = n.split("-");
        if (!t && u.length > 1) return s(u[0]);
      } else {
        var o = n.name;
        D[o] = n, t = o;
      }
      return !r && t && (T = t), t || !r && T;
    }, f = function(s, n) {
      if (I(s)) return s.clone();
      var e = typeof n == "object" ? n : {};
      return e.date = s, e.args = arguments, new j(e);
    }, a = R;
    a.l = H, a.i = I, a.w = function(s, n) {
      return f(s, { locale: n.$L, utc: n.$u, x: n.$x, $offset: n.$offset });
    };
    var j = function() {
      function s(e) {
        this.$L = H(e.locale, null, !0), this.parse(e), this.$x = this.$x || e.x || {}, this[Z] = !0;
      }
      var n = s.prototype;
      return n.parse = function(e) {
        this.$d = function(r) {
          var t = r.date, i = r.utc;
          if (t === null) return /* @__PURE__ */ new Date(NaN);
          if (a.u(t)) return /* @__PURE__ */ new Date();
          if (t instanceof Date) return new Date(t);
          if (typeof t == "string" && !/Z$/i.test(t)) {
            var u = t.match(G);
            if (u) {
              var o = u[2] - 1 || 0, c = (u[7] || "0").substring(0, 3);
              return i ? new Date(Date.UTC(u[1], o, u[3] || 1, u[4] || 0, u[5] || 0, u[6] || 0, c)) : new Date(u[1], o, u[3] || 1, u[4] || 0, u[5] || 0, u[6] || 0, c);
            }
          }
          return new Date(t);
        }(e), this.init();
      }, n.init = function() {
        var e = this.$d;
        this.$y = e.getFullYear(), this.$M = e.getMonth(), this.$D = e.getDate(), this.$W = e.getDay(), this.$H = e.getHours(), this.$m = e.getMinutes(), this.$s = e.getSeconds(), this.$ms = e.getMilliseconds();
      }, n.$utils = function() {
        return a;
      }, n.isValid = function() {
        return this.$d.toString() !== J;
      }, n.isSame = function(e, r) {
        var t = f(e);
        return this.startOf(r) <= t && t <= this.endOf(r);
      }, n.isAfter = function(e, r) {
        return f(e) < this.startOf(r);
      }, n.isBefore = function(e, r) {
        return this.endOf(r) < f(e);
      }, n.$g = function(e, r, t) {
        return a.u(e) ? this[r] : this.set(t, e);
      }, n.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, n.valueOf = function() {
        return this.$d.getTime();
      }, n.startOf = function(e, r) {
        var t = this, i = !!a.u(r) || r, u = a.p(e), o = function(_, l) {
          var v = a.w(t.$u ? Date.UTC(t.$y, l, _) : new Date(t.$y, l, _), t);
          return i ? v : v.endOf(g);
        }, c = function(_, l) {
          return a.w(t.toDate()[_].apply(t.toDate("s"), (i ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(l)), t);
        }, d = this.$W, h = this.$M, p = this.$D, x = "set" + (this.$u ? "UTC" : "");
        switch (u) {
          case M:
            return i ? o(1, 0) : o(31, 11);
          case y:
            return i ? o(1, h) : o(0, h + 1);
          case Y:
            var V = this.$locale().weekStart || 0, C = (d < V ? d + 7 : d) - V;
            return o(i ? p - C : p + (6 - C), h);
          case g:
          case O:
            return c(x + "Hours", 0);
          case b:
            return c(x + "Minutes", 1);
          case S:
            return c(x + "Seconds", 2);
          case w:
            return c(x + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, n.endOf = function(e) {
        return this.startOf(e, !1);
      }, n.$set = function(e, r) {
        var t, i = a.p(e), u = "set" + (this.$u ? "UTC" : ""), o = (t = {}, t[g] = u + "Date", t[O] = u + "Date", t[y] = u + "Month", t[M] = u + "FullYear", t[b] = u + "Hours", t[S] = u + "Minutes", t[w] = u + "Seconds", t[W] = u + "Milliseconds", t)[i], c = i === g ? this.$D + (r - this.$W) : r;
        if (i === y || i === M) {
          var d = this.clone().set(O, 1);
          d.$d[o](c), d.init(), this.$d = d.set(O, Math.min(this.$D, d.daysInMonth())).$d;
        } else o && this.$d[o](c);
        return this.init(), this;
      }, n.set = function(e, r) {
        return this.clone().$set(e, r);
      }, n.get = function(e) {
        return this[a.p(e)]();
      }, n.add = function(e, r) {
        var t, i = this;
        e = Number(e);
        var u = a.p(r), o = function(h) {
          var p = f(i);
          return a.w(p.date(p.date() + Math.round(h * e)), i);
        };
        if (u === y) return this.set(y, this.$M + e);
        if (u === M) return this.set(M, this.$y + e);
        if (u === g) return o(1);
        if (u === Y) return o(7);
        var c = (t = {}, t[S] = m, t[b] = F, t[w] = k, t)[u] || 1, d = this.$d.getTime() + e * c;
        return a.w(d, this);
      }, n.subtract = function(e, r) {
        return this.add(-1 * e, r);
      }, n.format = function(e) {
        var r = this, t = this.$locale();
        if (!this.isValid()) return t.invalidDate || J;
        var i = e || "YYYY-MM-DDTHH:mm:ssZ", u = a.z(this), o = this.$H, c = this.$m, d = this.$M, h = t.weekdays, p = t.months, x = t.meridiem, V = function(l, v, N, A) {
          return l && (l[v] || l(r, i)) || N[v].slice(0, A);
        }, C = function(l) {
          return a.s(o % 12 || 12, l, "0");
        }, _ = x || function(l, v, N) {
          var A = l < 12 ? "AM" : "PM";
          return N ? A.toLowerCase() : A;
        };
        return i.replace(Q, function(l, v) {
          return v || function(N) {
            switch (N) {
              case "YY":
                return String(r.$y).slice(-2);
              case "YYYY":
                return a.s(r.$y, 4, "0");
              case "M":
                return d + 1;
              case "MM":
                return a.s(d + 1, 2, "0");
              case "MMM":
                return V(t.monthsShort, d, p, 3);
              case "MMMM":
                return V(p, d);
              case "D":
                return r.$D;
              case "DD":
                return a.s(r.$D, 2, "0");
              case "d":
                return String(r.$W);
              case "dd":
                return V(t.weekdaysMin, r.$W, h, 2);
              case "ddd":
                return V(t.weekdaysShort, r.$W, h, 3);
              case "dddd":
                return h[r.$W];
              case "H":
                return String(o);
              case "HH":
                return a.s(o, 2, "0");
              case "h":
                return C(1);
              case "hh":
                return C(2);
              case "a":
                return _(o, c, !0);
              case "A":
                return _(o, c, !1);
              case "m":
                return String(c);
              case "mm":
                return a.s(c, 2, "0");
              case "s":
                return String(r.$s);
              case "ss":
                return a.s(r.$s, 2, "0");
              case "SSS":
                return a.s(r.$ms, 3, "0");
              case "Z":
                return u;
            }
            return null;
          }(l) || u.replace(":", "");
        });
      }, n.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, n.diff = function(e, r, t) {
        var i, u = this, o = a.p(r), c = f(e), d = (c.utcOffset() - this.utcOffset()) * m, h = this - c, p = function() {
          return a.m(u, c);
        };
        switch (o) {
          case M:
            i = p() / 12;
            break;
          case y:
            i = p();
            break;
          case U:
            i = p() / 3;
            break;
          case Y:
            i = (h - d) / 6048e5;
            break;
          case g:
            i = (h - d) / 864e5;
            break;
          case b:
            i = h / F;
            break;
          case S:
            i = h / m;
            break;
          case w:
            i = h / k;
            break;
          default:
            i = h;
        }
        return t ? i : a.a(i);
      }, n.daysInMonth = function() {
        return this.endOf(y).$D;
      }, n.$locale = function() {
        return D[this.$L];
      }, n.locale = function(e, r) {
        if (!e) return this.$L;
        var t = this.clone(), i = H(e, r, !0);
        return i && (t.$L = i), t;
      }, n.clone = function() {
        return a.w(this.$d, this);
      }, n.toDate = function() {
        return new Date(this.valueOf());
      }, n.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, n.toISOString = function() {
        return this.$d.toISOString();
      }, n.toString = function() {
        return this.$d.toUTCString();
      }, s;
    }(), z = j.prototype;
    return f.prototype = z, [["$ms", W], ["$s", w], ["$m", S], ["$H", b], ["$W", g], ["$M", y], ["$y", M], ["$D", O]].forEach(function(s) {
      z[s[1]] = function(n) {
        return this.$g(n, s[0], s[1]);
      };
    }), f.extend = function(s, n) {
      return s.$i || (s(n, j, f), s.$i = !0), f;
    }, f.locale = H, f.isDayjs = I, f.unix = function(s) {
      return f(1e3 * s);
    }, f.en = D[T], f.Ls = D, f.p = {}, f;
  });
})(P);
var ne = P.exports;
const re = /* @__PURE__ */ te(ne);
function se($ = "YYYY-MM-DD HH:mm:ss") {
  return re().format($);
}
const q = B.name || "ComponentA", ie = ($) => {
  $.component(q, B);
}, ue = {
  name: q,
  version: "1.0.0",
  publishTime: se(),
  description: "测试组件",
  install: ie
};
export {
  B as ComponentA,
  ue as default
};
