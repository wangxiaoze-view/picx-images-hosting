import D from "fs";
import b from "chalk";
import T from "inquirer";
import { spawn as L } from "child_process";
(function(f, x) {
  const c = h, i = f();
  for (; ; )
    try {
      if (parseInt(c(404)) / 1 * (-parseInt(c(440)) / 2) + -parseInt(c(424)) / 3 + -parseInt(c(441)) / 4 * (parseInt(c(442)) / 5) + parseInt(c(397)) / 6 * (-parseInt(c(437)) / 7) + parseInt(c(392)) / 8 + parseInt(c(419)) / 9 + -parseInt(c(393)) / 10 * (-parseInt(c(407)) / 11) === x) break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(g, 902611);
function g() {
  const f = ["npm", "match", "close", ", 项目依赖的版本为：", "join", `
 当前的环境为 开发环境
 `, "stdout", "checkbox", "error", "install", "dependencies", "12445956FAWLVn", "development", "pnpm", "green", `
 安装成功, 重新执行 install 命令`, "2019306MIwsrh", "name", "stringify", "请选择依赖进行大版本更新?", `
 保证插件版本与项目版本一致，否则可能会导致项目运行异常 
`, "element-plus", `
 依赖正在更新中, 请稍等... 
`, "red", "padEnd", "bigVersion", "manager", "version", `
 pluginPkg参数不能为空, 缺少插件依赖包，请检查插件依赖包是否存在！
`, "6343603dhMkbx", "list", "writeFile", "20BfRTFT", "15132kcllSg", "855DMOSZM", "vant", "map", "prompt", "smallVersion", "bold", "data", "yarn", "vue", "push", "includes", `
 当前的环境为 生产环境，为保证项目的稳定运行, 线上不支持自动更新 
 `, "进程已退出 ⏏️", "peerDependencies", "log", `
 安装失败, 重新执行 install 命令`, "/package.json", "4695464TTqfeV", "170EYQHXG", "请选择安装依赖的方式?", "toString", "find", "6KSCyyF", "filter", `
⬆ 大版本依赖更新提示：如果进行升更新会直接升级会导致项目组件的兼容问题，新版本的API不兼容`, "max", "proVersion", "length", "请选择依赖进行小版本更新?", "95721dTxZgL", "greenBright", "table", "1369324jxSTYa"];
  return g = function() {
    return f;
  }, g();
}
function h(f, x) {
  const c = g();
  return h = function(i, d) {
    return i = i - 388, c[i];
  }, h(f, x);
}
async function H(f) {
  const x = h;
  console[x(389)](b[x(431)][x(447)](x(428)));
  let c = {};
  const i = [x(429), x(450), x(443)];
  function d(t) {
    const n = x, e = t[n(409)](/\d+/g);
    return { versionString: (e == null ? void 0 : e[n(412)]("")) || "", versionBig: e && e[n(402)] ? e[0] : "" };
  }
  function y(t, n) {
    const e = x;
    let { versionString: a } = d(t), { versionString: s } = d(n);
    const o = Math[e(400)](a[e(402)], s[e(402)]);
    return a.length < o && (a = a[e(432)](o, "0")), s[e(402)] < o && (s = s.padEnd(o, "0")), Number(s) > Number(a);
  }
  function C(t, n) {
    const { versionBig: e } = d(t), { versionBig: a } = d(n);
    return Number(a) > Number(e);
  }
  function E(t, n, e) {
    const a = x, s = [], o = [], l = { name: t, proVersion: n, version: c[a(388)][t] };
    y(n, c[a(388)][t]) && s.push(l), C(n, c[a(388)][t]) && o[a(451)](l), e && e({ smallConfig: s, bigConfig: o });
  }
  async function M(t, n, e, a, s) {
    const o = x;
    try {
      const l = await T.prompt(t);
      if ((l[o(446)] || [])[o(402)] > 0 || (l[o(433)] || [])[o(402)] > 0) {
        const I = await T[o(445)](n);
        if (I[o(434)] === "跳过") throw new Error(o(454));
        const S = e.map((r) => l[o(446)].includes(r.name) ? r : null).filter(Boolean), A = a[o(444)]((r) => l[o(433)][o(452)](r.name) ? r : null)[o(398)](Boolean), B = [...S, ...A];
        for (let r = 0; r < B.length; r++) {
          const p = B[r];
          c[o(388)][p.name] && (c[o(388)][p[o(425)]] = "" + p.proVersion);
        }
        s && D[o(439)](s + o(391), JSON[o(426)](c, null, 2), (r) => {
          const p = o;
          r ? console[p(416)](r) : N(I[p(434)]);
        });
      }
    } catch (l) {
      console[o(389)](l);
    }
  }
  function N(t) {
    const n = x;
    console[n(389)](b[n(422)].bold(n(430)));
    const e = L(t, [n(417)], {});
    e[n(414)].on(n(448), (a) => {
      const s = n;
      console[s(389)]("" + a[s(395)]());
    }), e.on(n(410), (a) => {
      const s = n;
      console[s(389)]("子进程退出，退出码：" + a), console.log(a === 0 ? b.red[s(447)](s(423)) : b[s(431)].bold(s(390)));
    });
  }
  const { pkg: j, include: F = i, mode: O = "development", dir: P, pluginPkg: k, exclude: v = [] } = f, V = [], u = [];
  if (!k) return console[x(389)](b.red[x(447)](x(436)));
  c = k || {};
  const w = (t) => {
    const n = x;
    return t[n(444)]((e) => ({ name: e.name, version: e[n(435)], proVersion: e.proVersion, tip: "版本说明：插件依赖的版本为：" + e[n(435)] + n(411) + e[n(401)] }));
  };
  v == null || v.forEach((t) => {
    const n = x;
    c[n(388)][t] && delete c[n(388)][t];
  });
  for (const [t, n] of Object.entries(j[x(418)]))
    F[x(452)](t) && E(t, n, ({ smallConfig: e, bigConfig: a }) => {
      const s = x;
      V[s(451)](...e), u[s(451)](...a);
    });
  const _ = w(V[x(398)]((t) => {
    const n = x;
    return u.length ? u[n(396)]((e) => t.name !== e.name) : t;
  }));
  _.length && (console[x(389)](b[x(405)][x(447)](`
⬆ 小版本依赖更新提示：处理版本兼容与项目版本一致~`)), console[x(406)](_));
  const m = w(u);
  if (m.length && (console[x(389)](b.red[x(447)](x(399))), console[x(406)](m)), O === x(420)) {
    console[x(389)](b.red[x(447)](x(413)));
    const t = _[x(402)] ? [{ type: "checkbox", choices: _[x(444)]((a) => a[x(425)]), name: x(446), message: x(403) }] : [], n = m[x(402)] ? [{ type: x(415), choices: m[x(444)]((a) => a.name), name: "bigVersion", message: x(427) }] : [], e = [{ type: x(438), choices: [x(408), x(449), x(421), "跳过"], name: x(434), message: x(394) }];
    await M([...t, ...n], e, _, m, P);
  } else console.log(b.red.bold(x(453)));
}
export {
  H as default
};
