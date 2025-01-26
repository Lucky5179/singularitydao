"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [700],
  {
    42668: function (e, n, t) {
      var l, r;
      t.d(n, {
        y: function () {
          return l;
        },
      }),
        ((r = l || (l = {}))[(r.OPEN = 1)] = "OPEN"),
        (r[(r.LIVE = 2)] = "LIVE"),
        (r[(r.CLOSED = 3)] = "CLOSED"),
        (r[(r.FINISHED = 4)] = "FINISHED");
    },
    6194: function (e, n, t) {
      t.d(n, {
        D: function () {
          return D;
        },
      });
      var l = t(52322);
      t(2784);
      var r = t(14013),
        s = t(1232),
        a = t(12522),
        i = t(39097),
        o = t.n(i),
        c = t(78246),
        u = t(36854),
        d = t(98614),
        h = t(82857),
        m = t(77466),
        x = t(93370);
      let f = () => {
        let { t: e } = (0, d.$G)("common");
        return (0, l.jsxs)(m._, {
          children: [
            (0, l.jsx)(c.z, {
              component: o(),
              style: "outline",
              href: u.e.urlBuySDAO,
              target: "_blank",
              children: e("HEADER.BUY_SDAO"),
            }),

            
            (0, l.jsx)(x.m, {}),
          ],
        });
      };
      var y = t(12849),
        v = t(82876),
        p = t(61135);
      let b = (e) => {
          let { children: n } = e;
          return (0, l.jsx)("div", {
            className: "pt-4",
            children: (0, l.jsx)("div", {
              className: "gap flex flex-col items-start",
              children: n,
            }),
          });
        },
        w = (e) => {
          let { children: n } = e;
          return (0, l.jsx)(p.Z, {
            className: "pb-1 text-xs text-[#A0ABBE]",
            children: n,
          });
        };
      var N = t(41707),
        g = t(95180),
        j = t(61335),
        I = t(20324);
      let S = (e) => {
        let { active: n, label: t, href: r, target: s } = e;
        return (0, l.jsx)("div", {
          className: "py-2 pl-9",
          children: (0, l.jsx)(o(), {
            href: r,
            target: s,
            children: (0, l.jsx)(p.Z, {
              className: (0, I.m6)(
                (0, j.cx)(
                  "inline-block text-sm text-[#B4BCD0]",
                  n && "text-[#CCA4FF]"
                )
              ),
              children: t,
            }),
          }),
        });
      };
      var E = t(3866);
      let _ = () => {
          let e = (0, v.usePathname)(),
            { t: n } = (0, d.$G)("common"),
            t = (0, E.K)(n);
          return (0, l.jsx)("nav", {
            className: "flex flex-grow flex-col px-14 py-14",
            children: t.map((n, t) =>
              (0, l.jsxs)(
                b,
                {
                  children: [
                    n.label && (0, l.jsx)(w, { children: n.label }),
                    n.items.map((n) => {
                      var t;
                      return (0, l.jsx)(
                        N.s,
                        {
                          label: n.label,
                          href: n.href,
                          target: n.target,
                          active:
                            "/" !== n.href &&
                            ((n.href && (0, y.zh)(n, e)) ||
                              (n.items && (0, y.$M)(n.items, e))),
                          icon: (0, l.jsx)(g.Z, {
                            active:
                              (n.href && (0, y.zh)(n, e)) ||
                              (n.items && (0, y.$M)(n.items, e)),
                            icon: n.icon,
                          }),
                          endEnhancer: n.endIcon
                            ? (0, l.jsx)(g.Z, {
                                className: "ml-auto",
                                icon: n.endIcon,
                              })
                            : null,
                          children:
                            null === (t = n.items) || void 0 === t
                              ? void 0
                              : t.map((n) =>
                                  (0, l.jsx)(
                                    S,
                                    {
                                      active: (0, y.zh)(n, e),
                                      label: n.label,
                                      href: n.href,
                                    },
                                    n.label
                                  )
                                ),
                        },
                        n.label + "_" + n.icon
                      );
                    }),
                  ],
                },
                n.label + t
              )
            ),
          });
        },
        D = (e) => {
          let { children: n, sidebar: t = !0, breadcrumbs: i = !0 } = e,
            o = (0, r.d)();
          return o
            ? (0, l.jsx)(a.n, { menu: (0, l.jsx)(_, {}), children: n })
            : (0, l.jsx)(s.S, {
                header: (0, l.jsx)(f, {}),
                sidebar: t,
                breadcrumbs: i,
                children: n,
              });
        };
    },
    93370: function (e, n, t) {
      t.d(n, {
        m: function () {
          return d;
        },
      });
      var l = t(52322),
        r = t(78246),
        s = t(67438);
      t(2784);
      var a = t(98614),
        i = t(17129),
        o = t(50068),
        c = t(16270),
        u = t(31754);
      let d = () => {
        let { t: e } = (0, a.$G)("common"),
          n = (0, i.T)(),
          t = (0, o.mA)(),
          d = (0, u.Z)();
        return t.isConnected && d
          ? (0, l.jsx)(s.w, { button: { className: "bg-[#191A1E]" } })
          : (0, l.jsx)(r.z, {
              onClick: () => {
                n((0, c.ad)(!0));
              },
              children: e("HEADER.CONNECT_WALLET"),
            });
      };
    },
    68299: function (e, n, t) {
      t.d(n, {
        j: function () {
          return L;
        },
      });
      var l = t(52322),
        r = t(2784),
        s = t(5632),
        a = t(72558),
        i = t(50592),
        o = t(89644),
        c = t.n(o),
        u = t(11769),
        d = t(20909),
        h = t(88445),
        m = t(72149),
        x = t(33649),
        f = t(96567),
        y = t(12275),
        v = t(24136),
        p = t(30282),
        b = t(77761),
        w = t(98614),
        N = (e) => {
          let { t: n } = (0, w.$G)("common"),
            {
              title: t,
              description: r,
              image: s,
              price: a,
              tvl: i,
              contribution: o,
            } = e;
          return (0, l.jsxs)("div", {
            className: "flex w-full",
            children: [
              (0, l.jsx)("img", {
                alt: t,
                className: "mr-2",
                src: s,
                height: "44px",
                width: "44px",
                loading: "lazy",
              }),
              (0, l.jsxs)("div", {
                className: "w-full flex justify-between box-border pl-1 ",
                children: [
                  (0, l.jsxs)("div", {
                    children: [
                      (0, l.jsx)("div", {
                        className: "text-white",
                        children: t,
                      }),
                      (0, l.jsx)("div", {
                        className: "text-white mb-0 text-xs",
                        children: r,
                      }),
                    ],
                  }),
                  (0, l.jsxs)("div", {
                    className: "text-right text-white",
                    children: [
                      a &&
                        (0, l.jsx)("div", {
                          className: "text-white",
                          children: a,
                        }),
                      i &&
                        (0, l.jsxs)("div", {
                          className: "text-white text-xs",
                          children: [n("TVL"), ": ", i],
                        }),
                      o &&
                        (0, l.jsxs)("div", {
                          className: "text-white text-xs",
                          children: [n("CONTRIBS"), ": $", o],
                        }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        g = t(30171),
        j = t(6687),
        I = t(76542),
        S = t(31642),
        E = t(38380),
        _ = t(76558),
        D = t(45455),
        F = t.n(D);
      let k = (e) => {
          let { library: n, account: t, chainId: l } = (0, j.aF)(),
            [s, a] = (0, r.useState)(null),
            [i, o] = (0, r.useState)(null),
            [c, u] = (0, r.useState)(!1),
            d = (0, r.useMemo)(() => {
              if (!t || e === y.fI.dynSING) return [];
              let n = I.eG[y.ax[e]];
              if (n && n.dynasets) {
                var l, r;
                return [
                  null === (l = n.dynasets[e]) || void 0 === l
                    ? void 0
                    : l.forgeV1,
                  null === (r = n.dynasets[e]) || void 0 === r
                    ? void 0
                    : r.forgeV2,
                ];
              }
              return [];
            }, [e, l]),
            h = async () => {
              if (n && !F()(d)) {
                u(!0);
                let r =
                    l === y.ax[e]
                      ? await n.getSigner()
                      : await (0, S.VH)(y.ax[e], t),
                  s = await (0, S.y5)(r.address, y.ax[e]);
                try {
                  let [r, i] = d,
                    c = new g.CH(r, E, s),
                    h = new g.CH(i, E, s);
                  if (c) {
                    let r = await H(c, t, e, n, l);
                    a(r);
                  }
                  if (h) {
                    let r = await H(h, t, e, n, l);
                    o(r);
                  }
                  u(!1);
                } catch (e) {
                  a(null), u(!1);
                }
              }
            };
          return (
            (0, r.useEffect)(() => {
              F()(d) || h();
            }, [d, n, t]),
            { forgeV1: s, forgeV2: i, loading: c }
          );
        },
        H = async (e, n, t, l, r) => {
          let s, i;
          let o = {},
            c =
              r === y.ax[t] ? await l.getSigner() : await (0, S.VH)(y.ax[t], n);
          try {
            let [n, t] = await Promise.all([e.dynaset(), e.totalForges()]);
            (i = n), (s = Number(t.toString()));
          } catch (e) {
            (s = "0"),
              console.error(
                "ERROR: ForgeV1: Could not get totalForge from forge contract. \n "
                  .concat(t, " \n")
                  .concat(e)
              );
          }
          for (let t = 0; t < s; t++) {
            let [l] = await Promise.all([e.userInfo(t, n)]),
              r = new a.Z(l.dynasetsOwed.toString());
            o[t] = {
              userInfo: {
                dynasetsOwed: await r
                  .dividedBy(new a.Z(10).exponentiatedBy(18))
                  .toFixed(2),
              },
            };
          }
          let u = new g.CH(i, _, c),
            d = new a.Z((await new g.CH(i, _, c).balanceOf(n)).toString())
              .div(new a.Z(10).exponentiatedBy(18))
              .toFixed(6);
          return {
            totalSupply: new a.Z((await u.totalSupply()).toString()).toFixed(6),
            tokens: o,
            userLps: d,
          };
        };
      var T = t(28589),
        B = t(88748),
        C = t(20220),
        O = t(42668);
      let L = (e) => {
        let { dynaset: n, account: t, route: o, performance: g } = e,
          { t: j } = (0, w.$G)("common"),
          I = null == n ? void 0 : n.symbol,
          [S, E] = (0, i.hQ)(),
          _ = (0, s.useRouter)(),
          [D, F] = (0, r.useState)(),
          [H, L] = (0, r.useState)(""),
          { forgeV1: P, forgeV2: A, loading: V } = k(I),
          M = (0, r.useMemo)(() => {
            if (!(null == g ? void 0 : g.length)) return [];
            let e = g
              .slice(-99)
              .map((e) => (null == e ? void 0 : e.tokenPrice));
            return e;
          }, [g]),
          Z = (0, r.useMemo)(
            () => (0, d.Y)(null == D ? void 0 : D.lpTokens),
            [D]
          ),
          $ = (0, r.useMemo)(
            () =>
              (0, u._B)(
                Number(null == D ? void 0 : D.lpTokens) *
                  Number(null == D ? void 0 : D.currentPrice)
              ),
            [D]
          ),
          G = (0, r.useMemo)(() => {
            var e;
            if (!(null == A ? void 0 : A.totalSupply) || !D) return "0.00";
            let n =
              null !==
                (e = new a.Z((null == A ? void 0 : A.totalSupply) || 0)
                  .dividedBy(new a.Z(10).exponentiatedBy(18))
                  .toFixed()) && void 0 !== e
                ? e
                : "0";
            return Number(
              (Number(null == D ? void 0 : D.lpTokens) / Number(n)) * 100
            ).toFixed(2);
          }, [D, A]);
        return (
          (0, r.useEffect)(() => {
            if (P && A) {
              let e = (null == n ? void 0 : n.totalValueLockedUSD) || "0",
                t = (null == n ? void 0 : n.total_supply) || "0",
                l = Number(e) / Number(t),
                r = (0, h.I)(P, A);
              F({
                totalValue: e,
                totalSupply: t,
                currentPrice: l.toFixed(2),
                lpTokens: r,
              });
            }
          }, [P, A, I]),
          (0, r.useEffect)(() => {
            (async () => {
              try {
                let { data: e } = await c().get(m.cG);
                L(
                  "".concat(
                    (0, x.dq)(Number(null == e ? void 0 : e[n.symbol]), 0, !0)
                  )
                );
              } catch (e) {
                L("0");
              }
            })();
          }, []),
          (0, l.jsxs)(v.H, {
            className: "w-[326px]",
            children: [
              (0, l.jsx)(N, {
                title: null == n ? void 0 : n.symbol,
                price: "".concat(
                  (null == D ? void 0 : D.currentPrice) &&
                    f.n[I] !== O.y.FINISHED
                    ? "$".concat(D.currentPrice)
                    : ""
                ),
                description:
                  y.ax[null == n ? void 0 : n.symbol] === B.e.id
                    ? "BNB Chain"
                    : "Ethereum",
                image: "image/icons/dynasets/".concat(
                  null == n ? void 0 : n.symbol,
                  ".png"
                ),
                tvl:
                  f.n[I] !== O.y.FINISHED &&
                  2 === f.n[null == n ? void 0 : n.symbol] &&
                  (0, u._B)(null == n ? void 0 : n.totalValueLockedUSD),
                contribution:
                  f.n[I] !== O.y.FINISHED &&
                  1 === f.n[null == n ? void 0 : n.symbol] &&
                  H,
              }),
              (0, l.jsx)("div", {
                style: { height: "210px" },
                children:
                  f.n[I] !== O.y.FINISHED
                    ? (0, l.jsxs)(l.Fragment, {
                        children: [
                          (0, l.jsx)("div", {
                            children: (0, l.jsxs)(p.aM, {
                              color: "white",
                              children: [
                                j("LP_TOKEN_HOLDINGS"),
                                ":",
                                " ",
                                (0, l.jsx)("span", {
                                  className: S({
                                    color: "".concat(
                                      "0" === Z
                                        ? E.colors.negative
                                        : E.colors.positive
                                    ),
                                  }),
                                  children: t ? "".concat(V ? "..." : Z) : "-",
                                }),
                                (0, l.jsx)("br", {}),
                                (0, l.jsxs)("span", {
                                  children: [
                                    j("VALUE_OF_YOUR_TOKENS"),
                                    ":",
                                    " ",
                                    (0, l.jsx)("span", {
                                      className: S({
                                        color: "".concat(
                                          "$0.00" === $
                                            ? E.colors.negative
                                            : E.colors.positive
                                        ),
                                      }),
                                      children: t
                                        ? "".concat(V ? "..." : $)
                                        : "-",
                                    }),
                                  ],
                                }),
                                (0, l.jsx)("br", {}),
                                "0.00" !== G &&
                                  (0, l.jsxs)("span", {
                                    children: [
                                      j("YOUR_SHARE_OF_THE_DYNASET"),
                                      ":",
                                      " ",
                                      (0, l.jsx)("span", {
                                        className: S({
                                          color: E.colors.positive,
                                        }),
                                        children: "".concat(G, " %"),
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                          }),
                          (null == M ? void 0 : M.length) > 0
                            ? (0, l.jsx)(b.x, { label: "Price", data: M })
                            : (0, l.jsx)("div", {
                                className: "m-auto pt-6 text-center",
                                style: { color: E.colors.positive },
                                children: (0, l.jsx)(C.Z, { height: 60 }),
                              }),
                        ],
                      })
                    : (0, l.jsx)("div", {
                        className:
                          "flex h-full w-full flex-col justify-items-center",
                        children: (0, l.jsx)("div", {
                          className: "m-auto text-center",
                          style: { color: E.colors.negative },
                          children: j("DYNASET_IS_CLOSED"),
                        }),
                      }),
              }),
              (0, l.jsx)("div", {
                className: "mx-auto mt-5 block",
                children: (0, l.jsx)(T.x, {
                  variant: "default",
                  variantStyle: "primary",
                  size: "medium",
                  disabled: !1,
                  onClick: () =>
                    _.push({ pathname: "".concat(o, "/").concat(I) }),
                  className: "font-bold'}",
                  children: j("VIEW_DETAILS"),
                }),
              }),
            ],
          })
        );
      };
    },
    7571: function (e, n, t) {
      t.d(n, {
        Y: function () {
          return r;
        },
      });
      var l = t(12275);
      let r = [l.fI.dynDYDX, l.fI.dynL1BNB, l.fI.dynETHc];
    },
    96567: function (e, n, t) {
      t.d(n, {
        n: function () {
          return s;
        },
      });
      var l = t(42668),
        r = t(12275);
      let s = {
        [r.fI.dynSING]: l.y.FINISHED,
        [r.fI.dynBTC]: l.y.FINISHED,
        [r.fI.dynETH]: l.y.FINISHED,
        [r.fI.dynDYDX]: l.y.FINISHED,
        [r.fI.dynL1BNB]: l.y.FINISHED,
        [r.fI.dynETHc]: l.y.FINISHED,
      };
    },
    20909: function (e, n, t) {
      t.d(n, {
        Y: function () {
          return l;
        },
      });
      let l = (e) =>
        e ? Number(e).toLocaleString("en", { maximumFractionDigits: 2 }) : "0";
    },
    88445: function (e, n, t) {
      t.d(n, {
        I: function () {
          return r;
        },
        q: function () {
          return s;
        },
      });
      var l = t(72558);
      let r = (e, n) => {
          let t = "0",
            l = "0";
          if (e) {
            let { userLps: n } = e;
            t = n;
          }
          if (n) {
            let { userLps: e } = n;
            l = e;
          }
          let r = s(e),
            a = s(n),
            i = t || l;
          return r.plus(a).plus(i).toFixed(0);
        },
        s = (e) =>
          e
            ? Object.keys(null == e ? void 0 : e.tokens).reduce((n, t) => {
                var l, r;
                let s =
                  (null === (l = e.tokens[t]) || void 0 === l
                    ? void 0
                    : null === (r = l.userInfo) || void 0 === r
                    ? void 0
                    : r.dynasetsOwed) || "0";
                return n.plus(s);
              }, new l.Z(0))
            : new l.Z(0);
    },
    31642: function (e, n, t) {
      t.d(n, {
        U5: function () {
          return h;
        },
        VH: function () {
          return u;
        },
        y5: function () {
          return d;
        },
      });
      var l = t(58194),
        r = t(1005),
        s = t(42143),
        a = t(89496),
        i = t(64749);
      let o = (e) => {
          try {
            return l.isAddress(e);
          } catch (e) {
            throw Error(e);
          }
        },
        c = {},
        u = async (e, n) => {
          let t = (0, i.xW)(e);
          try {
            c[e] || (c[e] = new r.r(t.rpcUrls.default.http[0]));
            let l = c[e];
            if (o(n)) return await l.getSigner(n);
            return l;
          } catch (e) {
            return null;
          }
        },
        d = async (e, n) => {
          let t = await u(n, e);
          return s.MulticallWrapper.wrap(t);
        },
        h = async (e, n, t, l) => {
          try {
            if (e === a.g3 && l) return await u(l, n);
            return n ? await t.getSigner() : t;
          } catch (e) {
            return null;
          }
        };
    },
    32244: function (e, n, t) {
      t.d(n, {
        f: function () {
          return d;
        },
      });
      var l = t(67862),
        r = t(89130),
        s = t(23917),
        a = t(83205);
      function i() {
        let e = (0, l._)([
          "\n  {\n    dynaset {\n      symbol\n      snapshots {\n        tokenPrice\n      }\n    }\n  }\n",
        ]);
        return (
          (i = function () {
            return e;
          }),
          e
        );
      }
      let o = (0, r.Ps)(i()),
        c = () => (0, s.a)(o, { client: a.D });
      var u = t(2784);
      let d = () => {
        let { data: e } = c(),
          [n, t] = (0, u.useState)();
        return (
          (0, u.useEffect)(() => {
            if (null == e ? void 0 : e.dynaset) {
              let { dynaset: n } = e,
                l = n.reduce((e, n) => ((e[n.symbol] = n.snapshots), e), {});
              t(l);
            }
          }, [e]),
          n
        );
      };
    },
    26050: function (e, n, t) {
      t.d(n, {
        $S: function () {
          return y;
        },
        m: function () {
          return f;
        },
        xf: function () {
          return v;
        },
      });
      var l = t(67862),
        r = t(89130),
        s = t(23917),
        a = t(3842),
        i = t(83205),
        o = t(72149);
      function c() {
        let e = (0, l._)([
          "\n  {\n    token {\n      name\n      usdPrice\n      decimals\n      symbol\n    }\n  }\n",
        ]);
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }
      function u() {
        let e = (0, l._)([
          "\n  {\n    dynaset {\n      symbol\n      name\n      description\n      address\n      image\n      forges {\n        addresses {\n          chainId\n          value\n        }\n        token {\n          symbol\n        }\n      }\n      chainId\n      totalValueLockedUSD\n      total_supply\n      tokens {\n        symbol\n        decimals\n        name\n        stablecoin\n        address\n        usdPrice\n        color\n        chainId\n        cgTokenId\n      }\n      balances {\n        balance\n        denorm\n        usdValue\n        updatedAt\n        token {\n          symbol\n          usdPrice\n          decimals\n        }\n      }\n    }\n  }\n",
        ]);
        return (
          (u = function () {
            return e;
          }),
          e
        );
      }
      function d() {
        let e = (0, l._)([
          "\n  query DynasetTradesQuery($symbol: String!, $olderThan: String!) {\n    trades(dynaset: $symbol, older_than: $olderThan) {\n      token_sell {\n        symbol\n        decimals\n      }\n      token_buy {\n        symbol\n      }\n      amount_in\n      amount_out\n      price\n      price_USD\n      transaction_id\n      order_type\n      execution_slippage\n      executed_at\n      exchange\n    }\n  }\n",
        ]);
        return (
          (d = function () {
            return e;
          }),
          e
        );
      }
      let h = (0, r.Ps)(c()),
        m = (0, r.Ps)(u()),
        x = (0, r.Ps)(d()),
        f = () => (0, s.a)(h, { client: i.D }),
        y = function () {
          return (
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : o.FK.NO_POLLING,
            (0, s.a)(m, { client: i.D })
          );
        },
        v = function (e) {
          let n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
          return (0, a.t)(x, {
            pollInterval: o.FK.NO_POLLING,
            client: i.D,
            variables: { symbol: e, olderThan: n },
          });
        };
    },
    77761: function (e, n, t) {
      t.d(n, {
        x: function () {
          return c;
        },
        v: function () {
          return u;
        },
      });
      var l = t(52322),
        r = t(2784),
        s = t(25237),
        a = t.n(s),
        i = t(50592);
      let o = a()(
          () => Promise.all([t.e(7736), t.e(5302)]).then(t.bind(t, 65302)),
          { loadableGenerated: { webpack: () => [65302] }, ssr: !1 }
        ),
        c = (e) => {
          let { data: n, label: t } = e,
            [, s] = (0, i.hQ)(),
            a = (0, r.useMemo)(() => {
              let e = Math.max(...n),
                t = Math.min(...n);
              return {
                chart: {
                  height: 350,
                  toolbar: { show: !1 },
                  sparkline: { enabled: !0 },
                },
                grid: { show: !1 },
                legend: { show: !1 },
                yaxis: {
                  min: t - (20 * t) / 100,
                  max: e + (20 * e) / 100,
                  labels: { show: !1 },
                },
                xaxis: {
                  categories: [],
                  labels: { show: !0 },
                  axisBorder: { show: !0 },
                  axisTicks: { show: !1 },
                },
                tooltip: { enabled: !1 },
                fill: {
                  type: "gradient",
                  colors: ["#CCA4FF"],
                  gradient: {
                    shade: "light",
                    type: "vertical",
                    shadeIntensity: 0,
                    opacityFrom: 0,
                    opacityTo: 0,
                  },
                },
                stroke: { width: 2, curve: "smooth", colors: ["#CCA4FF"] },
              };
            }, [s, n]),
            c = (0, r.useMemo)(
              () => [{ name: t, type: "area", data: [...n] }],
              [n, t]
            );
          return (0, l.jsx)("div", {
            children: (0, l.jsx)(o, { options: a, series: c, type: "line" }),
          });
        },
        u = (e) => {
          let { data: n, color: t, dataFilter: s } = e,
            [, a] = (0, i.hQ)(),
            c = (e, n) => e.filter((e, t) => t % n == n - 1),
            u = (0, r.useMemo)(
              () => ({
                chart: {
                  toolbar: { show: !1 },
                  sparkline: { enabled: !0 },
                  dropShadow: {
                    enabled: !0,
                    top: 0,
                    left: 0,
                    blur: 2,
                    color: t,
                    opacity: 0.95,
                  },
                },
                grid: { show: !1 },
                legend: { show: !1 },
                yaxis: { labels: { show: !1 } },
                xaxis: {
                  categories: [],
                  labels: { show: !0 },
                  axisBorder: { show: !1 },
                  axisTicks: { show: !1 },
                },
                tooltip: { enabled: !1 },
                fill: { type: "solid", colors: ["transparent"] },
                stroke: { width: 2, curve: "smooth", colors: [t] },
              }),
              [a]
            ),
            d = (0, r.useMemo)(() => [{ type: "line", data: c(n, s) }], [n]);
          return (0, l.jsx)("div", {
            children: (0, l.jsx)(o, {
              options: u,
              series: d,
              type: "line",
              height: 100,
              width: 90,
            }),
          });
        };
    },
  },
]);
