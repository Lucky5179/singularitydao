"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1798],
  {
    6194: function (e, t, n) {
      n.d(t, {
        D: function () {
          return C;
        },
      });
      var r = n(52322);
      n(2784);
      var s = n(14013),
        l = n(1232),
        a = n(12522),
        i = n(39097),
        o = n.n(i),
        c = n(78246),
        d = n(36854),
        u = n(98614),
        x = n(82857),
        m = n(77466),
        h = n(93370);
      let f = () => {
        let { t: e } = (0, u.$G)("common");
        return (0, r.jsxs)(m._, {
          children: [
            (0, r.jsx)(c.z, {
              component: o(),
              style: "outline",
              href: d.e.urlBuySDAO,
              target: "_blank",
              children: e("HEADER.BUY_SDAO"),
            }),

            (0, r.jsx)(h.m, {}),
          ],
        });
      };
      var p = n(12849),
        j = n(82876),
        A = n(61135);
      let v = (e) => {
          let { children: t } = e;
          return (0, r.jsx)("div", {
            className: "pt-4",
            children: (0, r.jsx)("div", {
              className: "gap flex flex-col items-start",
              children: t,
            }),
          });
        },
        N = (e) => {
          let { children: t } = e;
          return (0, r.jsx)(A.Z, {
            className: "pb-1 text-xs text-[#A0ABBE]",
            children: t,
          });
        };
      var b = n(41707),
        k = n(95180),
        g = n(61335),
        E = n(20324);
      let T = (e) => {
        let { active: t, label: n, href: s, target: l } = e;
        return (0, r.jsx)("div", {
          className: "py-2 pl-9",
          children: (0, r.jsx)(o(), {
            href: s,
            target: l,
            children: (0, r.jsx)(A.Z, {
              className: (0, E.m6)(
                (0, g.cx)(
                  "inline-block text-sm text-[#B4BCD0]",
                  t && "text-[#CCA4FF]"
                )
              ),
              children: n,
            }),
          }),
        });
      };
      var S = n(3866);
      let y = () => {
          let e = (0, j.usePathname)(),
            { t } = (0, u.$G)("common"),
            n = (0, S.K)(t);
          return (0, r.jsx)("nav", {
            className: "flex flex-grow flex-col px-14 py-14",
            children: n.map((t, n) =>
              (0, r.jsxs)(
                v,
                {
                  children: [
                    t.label && (0, r.jsx)(N, { children: t.label }),
                    t.items.map((t) => {
                      var n;
                      return (0, r.jsx)(
                        b.s,
                        {
                          label: t.label,
                          href: t.href,
                          target: t.target,
                          active:
                            "/" !== t.href &&
                            ((t.href && (0, p.zh)(t, e)) ||
                              (t.items && (0, p.$M)(t.items, e))),
                          icon: (0, r.jsx)(k.Z, {
                            active:
                              (t.href && (0, p.zh)(t, e)) ||
                              (t.items && (0, p.$M)(t.items, e)),
                            icon: t.icon,
                          }),
                          endEnhancer: t.endIcon
                            ? (0, r.jsx)(k.Z, {
                                className: "ml-auto",
                                icon: t.endIcon,
                              })
                            : null,
                          children:
                            null === (n = t.items) || void 0 === n
                              ? void 0
                              : n.map((t) =>
                                  (0, r.jsx)(
                                    T,
                                    {
                                      active: (0, p.zh)(t, e),
                                      label: t.label,
                                      href: t.href,
                                    },
                                    t.label
                                  )
                                ),
                        },
                        t.label + "_" + t.icon
                      );
                    }),
                  ],
                },
                t.label + n
              )
            ),
          });
        },
        C = (e) => {
          let { children: t, sidebar: n = !0, breadcrumbs: i = !0 } = e,
            o = (0, s.d)();
          return o
            ? (0, r.jsx)(a.n, { menu: (0, r.jsx)(y, {}), children: t })
            : (0, r.jsx)(l.S, {
                header: (0, r.jsx)(f, {}),
                sidebar: n,
                breadcrumbs: i,
                children: t,
              });
        };
    },
    32273: function (e, t, n) {
      n.d(t, {
        k: function () {
          return x;
        },
      });
      var r = n(52322);
      n(2784);
      var s = n(84328),
        l = n(59567),
        a = n(20324),
        i = n(61335),
        o = n(98614),
        c = n(47413),
        d = n(61135),
        u = n(82857);
      function x(e) {
        let { id: t, inline: n = !1, date: x, timestamp: m } = e,
          [h, f, p] = (0, s.a)(x, m),
          j = m < x,
          A = j ? "lock_locked" : "lock_unlocked",
          { t: v } = (0, o.$G)("common"),
          N = "tt-unlock-date_" + t;
        return n
          ? (0, r.jsx)("div", {
              "data-tooltip-id": N,
              children: (0, r.jsxs)(d.Z, {
                as: "div",
                className: (0, a.m6)(
                  (0, i.cx)(
                    "flex flex-row items-center gap-1 text-nowrap text-base",
                    { "text-[#54FAAA]": j, "text-[#FB5656]": !j }
                  )
                ),
                children: [
                  (0, r.jsxs)("span", {
                    children: [(0, l.B)(Math.max(h, 0), 2), " d"],
                  }),
                  (0, r.jsx)("span", { children: ":" }),
                  (0, r.jsxs)("span", {
                    children: [(0, l.B)(Math.max(f, 0), 2), " h"],
                  }),
                  (0, r.jsx)("span", { children: ":" }),
                  (0, r.jsxs)("span", {
                    children: [(0, l.B)(Math.max(p, 0), 2), " m"],
                  }),
                  (0, r.jsx)(u.J, {
                    icon: A,
                    height: 16,
                    width: 16,
                    color: j ? "#54FAAA" : "#FB5656",
                  }),
                  0 !== x &&
                    (0, r.jsx)(c.u, { id: N, content: new Date(x).toString() }),
                ],
              }),
            })
          : (0, r.jsxs)("div", {
              className: "flex flex-col gap-1",
              "data-tooltip-id": N,
              children: [
                (0, r.jsxs)(d.Z, {
                  as: "div",
                  className: (0, a.m6)(
                    (0, i.cx)("flex flex-row items-center gap-2 text-base", {
                      "text-[#54FAAA]": j,
                      "text-[#FB5656]": !j,
                    })
                  ),
                  children: [
                    (0, r.jsx)("span", {
                      children: (0, l.B)(Math.max(h, 0), 2),
                    }),
                    (0, r.jsx)("span", { children: ":" }),
                    (0, r.jsx)("span", {
                      children: (0, l.B)(Math.max(f, 0), 2),
                    }),
                    (0, r.jsx)("span", { children: ":" }),
                    (0, r.jsx)("span", {
                      children: (0, l.B)(Math.max(p, 0), 2),
                    }),
                    (0, r.jsx)(u.J, {
                      icon: A,
                      height: 16,
                      width: 16,
                      color: j ? "#54FAAA" : "#FB5656",
                    }),
                  ],
                }),
                (0, r.jsxs)(d.Z, {
                  as: "div",
                  className: "flex flex-row items-center gap-2 text-[0.625rem]",
                  children: [
                    (0, r.jsx)("span", {
                      className: "capitalize",
                      children: v("day", { count: h }),
                    }),
                    (0, r.jsx)("span", {
                      className: "capitalize",
                      children: v("hour", { count: f }),
                    }),
                    (0, r.jsx)("span", {
                      className: "capitalize",
                      children: v("minute", { count: p }),
                    }),
                  ],
                }),
                0 !== x &&
                  (0, r.jsx)(c.u, { id: N, content: new Date(x).toString() }),
              ],
            });
      }
    },
    19819: function (e, t, n) {
      n.d(t, {
        R: function () {
          return m;
        },
      });
      var r = n(52322),
        s = n(38995);
      n(2784);
      var l = n(10528),
        a = n(98614),
        i = n(6687),
        o = n(17129),
        c = n(50068),
        d = n(61657),
        u = n(41704),
        x = n(78246);
      function m(e) {
        let { pool: t, userPoolInfo: n, onOpenModal: m } = e,
          { t: h } = (0, a.$G)("common"),
          f = (0, c.mA)(),
          p = (0, c.xx)(),
          { connector: j } = (0, i.aF)(),
          A = (0, o.T)(),
          v = t.chainId === p,
          { switchNetworkAsync: N } = (0, c.g0)(),
          b = async () => {
            await (null == N ? void 0 : N(t.chainId)),
              A(
                (0, d.I)({
                  newChainId: t.chainId,
                  connector: j,
                  currentChainId: p,
                })
              );
          },
          k = l.O$.from((null == n ? void 0 : n.totalStaked) || 0),
          g = l.O$.from((null == n ? void 0 : n.claimable) || 0),
          E = (e) => async () => {
            if (v) e();
            else
              try {
                await b(), e();
              } catch (e) {
                console.log("### error", e);
              }
          };
        if (!f.isConnected)
          return (0, r.jsx)("div", {
            className: "flex w-full flex-row justify-end",
            children: (0, r.jsx)(u.Z, {
              button: (0, r.jsx)(x.z, { children: h("CONNECT") }),
            }),
          });
        let T = "SDAO" === t.depositTokenSymbol;
        return (0, r.jsx)("div", {
          className: "flex w-full flex-row items-center justify-end gap-2",
          children: v
            ? (0, r.jsxs)(r.Fragment, {
                children: [
                  g.isZero()
                    ? null
                    : (0, r.jsx)(x.z, {
                        size: "small",
                        style: "outline",
                        onClick: E(() => m(s.sR.CLAIM, t.id)),
                        children: h("STAKING.CLAIM"),
                      }),
                  k.isZero()
                    ? (0, r.jsx)(x.z, {
                        disabled: T,
                        onClick: E(() => m(s.sR.STAKE, t.id)),
                        children: h("STAKING.STAKE"),
                      })
                    : (0, r.jsxs)(r.Fragment, {
                        children: [
                          (0, r.jsx)(x.z, {
                            size: "small",
                            style: "outline",
                            onClick: E(() => m(s.sR.WITHDRAW, t.id)),
                            children: h("STAKING.WITHDRAW"),
                          }),
                          (0, r.jsx)(x.z, {
                            disabled: T,
                            onClick: E(() => m(s.sR.STAKE_MORE, t.id)),
                            children: h("STAKING.MANAGE"),
                          }),
                        ],
                      }),
                ],
              })
            : (0, r.jsx)(x.z, { onClick: b, children: h("SWITCH_NETWORK") }),
        });
      }
    },
    31721: function (e, t, n) {
      n.d(t, {
        u: function () {
          return c;
        },
      });
      var r = n(52322),
        s = n(96577),
        l = n.n(s),
        a = n(53972),
        i = n(2784),
        o = n(64749);
      function c(e) {
        let { pool: t } = e,
          n = (0, o.xW)(t.chainId),
          s = (0, i.useMemo)(
            () =>
              "E20M" === t.depositTokenSymbol
                ? "/image/token/ASI.svg"
                : "/image/token/".concat(t.depositTokenSymbol, ".svg"),
            [t]
          );
        return (0, r.jsxs)("div", {
          className: "flex flex-row items-center gap-4",
          children: [
            (0, r.jsxs)("div", {
              className: "relative h-8 min-h-8 w-8 min-w-8",
              children: [
                (0, r.jsx)(l(), {
                  height: 32,
                  width: 32,
                  src: s,
                  alt: t.depositTokenSymbol,
                }),
                (0, r.jsx)("div", {
                  className:
                    "absolute -bottom-2 -right-2 h-6 w-6 rounded-full bg-black p-1.5",
                  children: (0, r.jsx)(l(), {
                    alt: n.nativeCurrency.symbol,
                    src: "/image/token/".concat(
                      n.nativeCurrency.symbol,
                      ".svg"
                    ),
                    height: 20,
                    width: 20,
                  }),
                }),
              ],
            }),
            (0, r.jsx)("div", {
              className: "flex flex-col gap-1",
              children: (0, r.jsx)(a.ZP, {
                className: "text-xs text-[#B4BCD0]",
                children: t.depositTokenSymbol,
              }),
            }),
          ],
        });
      }
    },
    1582: function (e, t, n) {
      n.d(t, {
        Q: function () {
          return c;
        },
      });
      var r = n(52322),
        s = n(96577),
        l = n.n(s),
        a = n(2784),
        i = n(98614),
        o = n(61135);
      let c = (e) => {
        let { pool: t } = e,
          { t: n } = (0, i.$G)("common"),
          s = Number(t.totalValueLockedUSD) > 1e3 ? 0 : 2,
          c = (0, a.useMemo)(
            () =>
              "E20M" === t.depositTokenSymbol
                ? "/image/token/ASI.svg"
                : "/image/token/".concat(t.rewardsTokenSymbol, ".svg"),
            [t]
          );
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsxs)("div", {
            className: "flex flex-col items-center justify-center",
            children: [
              (0, r.jsxs)("div", {
                className: "flex items-center gap-1",
                children: [
                  (0, r.jsx)(l(), {
                    height: 14,
                    width: 14,
                    src: c,
                    alt: t.rewardsTokenSymbol,
                  }),
                  (0, r.jsx)(o.Z, {
                    className:
                      "text-center text-base font-semibold text-[#F7F8F8]",
                    children: n("tokenAmount", {
                      value: t.tokensStaked,
                      minimumFractionDigits: 0,
                      maximumFractionDigits: s,
                    }),
                  }),
                ],
              }),
              (0, r.jsxs)(o.Z, {
                className: "text-xs text-[#B4BCD0]",
                children: [
                  "$",
                  n("currency", {
                    value: t.totalValueLockedUSD,
                    minimumFractionDigits: 0,
                    maximumFractionDigits: s,
                  }),
                ],
              }),
            ],
          }),
        });
      };
    },
    77555: function (e, t, n) {
      n.d(t, {
        T: function () {
          return d;
        },
      });
      var r = n(52322),
        s = n(30408),
        l = n(2784),
        a = n(76635),
        i = n(98614),
        o = n(61135),
        c = n(66003);
      function d(e) {
        let { pool: t, userPoolInfo: n } = e,
          { t: d } = (0, i.$G)("common"),
          u = (0, l.useMemo)(() => {
            if ((0, a.isNil)(n)) return 0;
            let e = (0, c.wg)(
              n.claimable || "0",
              (null == t ? void 0 : t.rewardsCommissionPercentage) || 0
            );
            return parseFloat((0, s.b)(e, t.rewardsTokenDecimals).toString());
          }, [t, n]),
          x = Number(u) > 1e3 ? 0 : 2;
        return (0, r.jsx)(o.Z, {
          className: "text-xs text-[#B4BCD0]",
          children: d("tokenAmount", { value: u, maximumFractionDigits: x }),
        });
      }
    },
    71871: function (e, t, n) {
      n.d(t, {
        y: function () {
          return i;
        },
      });
      var r = n(52322);
      n(2784);
      var s = n(98614),
        l = n(61135),
        a = n(28487);
      function i(e) {
        let { pool: t, userPoolInfo: n } = e,
          { t: i } = (0, s.$G)("common"),
          o = (0, a.Q)(
            (null == n ? void 0 : n.reputationScore) || "0",
            t.depositTokenDecimals || 0
          ).toNumber();
        return (0, r.jsx)(l.Z, {
          className: "pt-px text-xs text-[#B4BCD0]",
          children: i("srep", { value: o }),
        });
      }
    },
    22919: function (e, t, n) {
      n.d(t, {
        U: function () {
          return i;
        },
      });
      var r = n(52322),
        s = n(30408);
      n(2784);
      var l = n(98614),
        a = n(61135);
      function i(e) {
        let { pool: t, userPoolInfo: n } = e,
          { t: i } = (0, l.$G)("common"),
          o = (0, s.b)(
            (null == n ? void 0 : n.totalStaked) || "0",
            t.depositTokenDecimals
          ),
          c = Number(o) > 1e3 ? 0 : 2;
        return (0, r.jsx)(a.Z, {
          className: "pt-px text-xs text-[#B4BCD0]",
          children: i("tokenAmount", { value: o, maximumFractionDigits: c }),
        });
      }
    },
    75010: function (e, t, n) {
      n.d(t, {
        z: function () {
          return y;
        },
      });
      var r = n(52322),
        s = n(2784),
        l = n(98614),
        a = n(78246),
        i = n(61135),
        o = n(5632),
        c = n(88702),
        d = n(62403),
        u = n(32273),
        x = n(19819),
        m = n(31721),
        h = n(1582),
        f = n(77555),
        p = n(71871),
        j = n(22919),
        A = n(62794),
        v = n(29440),
        N = n(27481),
        b = n(96501),
        k = n(50068),
        g = n(28487),
        E = n(20324);
      let T = (e) => {
        let { children: t, className: n } = e;
        return (0, r.jsx)("td", {
          className: (0, E.m6)(
            "bg-[#191A1E] px-4 py-2 text-sm first:rounded-l-[10px] last:rounded-r-[10px]",
            n
          ),
          children: t,
        });
      };
      function S(e) {
        var t;
        let { pool: n, onOpenModal: S, enableExplore: y } = e,
          { t: C } = (0, l.$G)("common"),
          D = (0, k.mA)(),
          { data: w } = (0, b.N)(),
          F = (0, o.useRouter)(),
          I = (0, c.I0)(),
          B = (0, A.ni)({
            poolContractAddress: n.stakingContractAddress,
            walletAddress: D.address,
            chainId: n.chainId,
            query: { enabled: D.isConnected, keepPreviousData: !0 },
          });
        (0, s.useEffect)(() => {
          if (B.isFetched) {
            let e = (0, g.Q)(
              (null == B ? void 0 : B.data.reputationScore) || "0"
            ).toNumber();
            I((0, d.Vz)(e));
          }
        }, [B]);
        let R = (0, v.Px)(B.data),
          _ = R
            ? "border border-[#191A1E] first:border-l-[#54FAAA] last:border-r-[#54FAAA] border-t-[#54FAAA] border-b-[#54FAAA]"
            : "",
          P = (0, s.useMemo)(
            () =>
              Number.isFinite(Number(n.averageAPR))
                ? "".concat(null == n ? void 0 : n.averageAPR, "%")
                : "-",
            [n]
          ),
          M = (0, s.useMemo)(() => {
            if (B.isFetched && Number.isFinite(Number(B.data.apr))) {
              var e;
              return "".concat(
                parseFloat(
                  (null === (e = B.data) || void 0 === e ? void 0 : e.apr) ||
                    "0"
                ).toFixed(1),
                "%"
              );
            }
            return "-";
          }, [B]);
        return (0, r.jsxs)(
          "tr",
          {
            children: [
              (0, r.jsx)(T, {
                className: (0, E.m6)(_),
                children: (0, r.jsx)(m.u, { pool: n }),
              }),
              (0, r.jsx)(T, {
                className: (0, E.m6)(_),
                children: (0, r.jsx)(h.Q, { pool: n }),
              }),
              (0, r.jsx)(T, {
                className: (0, E.m6)(_, "text-center"),
                children: (0, r.jsx)(i.Z, {
                  className: "pt-px text-xs text-[#B4BCD0]",
                  children: P,
                }),
              }),
              (0, r.jsx)(T, {
                className: (0, E.m6)(_, "text-center"),
                children: (0, r.jsx)(j.U, { pool: n, userPoolInfo: B.data }),
              }),
              (0, r.jsx)(T, {
                className: (0, E.m6)(_, "text-center"),
                children: (0, r.jsx)(f.T, { pool: n, userPoolInfo: B.data }),
              }),
              (0, r.jsx)(T, {
                className: (0, E.m6)(_, "text-center"),
                children: (0, r.jsx)(i.Z, {
                  className: "pt-px text-xs text-[#B4BCD0]",
                  children: M,
                }),
              }),
              (0, r.jsx)(T, {
                className: (0, E.m6)(_, "text-center"),
                children: (0, r.jsx)(p.y, { pool: n, userPoolInfo: B.data }),
              }),
              (0, r.jsx)(T, {
                className: (0, E.m6)(_, "flex items-center justify-center"),
                children: (0, r.jsx)(u.k, {
                  id: n.stakingContractAddress,
                  date: (0, N.NZ)(
                    parseInt(
                      (null === (t = B.data) || void 0 === t
                        ? void 0
                        : t.unlockDate) || "0"
                    )
                  ),
                  timestamp: w.timestamp,
                }),
              }),
              (0, r.jsx)(T, {
                className: (0, E.m6)(_),
                children: y
                  ? (0, r.jsx)("div", {
                      className: "flex w-full flex-row justify-end",
                      children: (0, r.jsx)(a.z, {
                        onClick: () =>
                          F.push(
                            "/staking/projects/".concat(n.depositTokenSymbol)
                          ),
                        children: C("DYNAVAULT.EXPLORE"),
                      }),
                    })
                  : (0, r.jsx)(x.R, {
                      pool: n,
                      userPoolInfo: B.data,
                      onOpenModal: (e, t) => {
                        S(e, t), B.refetch();
                      },
                    }),
              }),
            ],
          },
          n.id
        );
      }
      function y(e) {
        let { pools: t, onOpenModal: n, enableExplore: s } = e,
          { t: a } = (0, l.$G)("common");
        return (0, r.jsx)("div", {
          className: "mx-auto w-full overflow-x-scroll !font-[Montserrat]",
          children: (0, r.jsxs)("table", {
            className:
              "min-w-full table-auto border-separate border-spacing-x-0 border-spacing-y-3 rounded-xl",
            children: [
              (0, r.jsx)("thead", {
                children: (0, r.jsx)("tr", {
                  children: [
                    "TABLE_HEADER_POOL",
                    "STAKING.TABLE_TOKENS_TVL",
                    "STAKING.TABLE_CELL_AVG_APR",
                    "STAKING.STAKED",
                    "CLAIMABLE",
                    "STAKING.TABLE_CELL_MY_APR",
                    "STAKING.REP_SCORE",
                    "STAKING.NEXT_UNLOCK",
                    "",
                  ].map((e, t) =>
                    (0, r.jsx)(
                      "th",
                      {
                        className:
                          "px-4 py-2 text-center text-xs font-normal text-[#C1CAD6]",
                        children: a(e),
                      },
                      t
                    )
                  ),
                }),
              }),
              (0, r.jsx)("tbody", {
                children: t.map((e) =>
                  (0, r.jsx)(
                    S,
                    { pool: e, onOpenModal: n, enableExplore: s },
                    e.id
                  )
                ),
              }),
            ],
          }),
        });
      }
    },
    38995: function (e, t, n) {
      var r, s, l, a;
      n.d(t, {
        P1: function () {
          return r;
        },
        nW: function () {
          return s;
        },
        sR: function () {
          return i;
        },
      });
      let i = {
        STAKE: "STAKE",
        STAKE_MORE: "STAKE_MORE",
        WITHDRAW: "WITHDRAW",
        EXTEND: "EXTEND",
        CLAIM: "CLAIM",
      };
      ((l = r || (r = {})).STAKE_MORE = "stake_more"),
        (l.KEEP_CURRENT = "keep_current"),
        ((a = s || (s = {})).EXTEND = "extend"),
        (a.KEEP_CURRENT = "keep_current");
    },
    66003: function (e, t, n) {
      n.d(t, {
        Tx: function () {
          return d;
        },
        jh: function () {
          return o;
        },
        wg: function () {
          return c;
        },
      });
      var r = n(10528),
        s = n(30408),
        l = n(27481),
        a = n(65368),
        i = n(28487);
      let o = (e, t) => {
          let n = {
            tokenSymbol: e.depositTokenSymbol,
            staked: "0",
            unlockDate: "0",
            tentativeREP: "0",
            existingREPAcrossPools: "0",
            apr: "0",
          };
          if (!t) return n;
          let r = (0, i.Q)(t.tentativeREP),
            a = (0, i.Q)(t.existingREPAcrossPools);
          try {
            return {
              tokenSymbol: e.depositTokenSymbol,
              staked: parseFloat(
                (0, s.b)(t.totalStaked || 0, e.depositTokenDecimals)
              ).toFixed(2),
              unlockDate: (0, l.NH)(
                (0, l.DK)(parseInt(null == t ? void 0 : t.unlockDate, 10))
              ),
              tentativeREP: r.toString(),
              existingREPAcrossPools: a.toString(),
              apr: parseFloat(t.apr).toFixed(2),
            };
          } catch (e) {
            return n;
          }
        },
        c = (e, t) => {
          let n = r.O$.from(10 * Number(t)),
            s = r.O$.from("1000"),
            l = r.O$.from(e),
            a = l.mul(n).div(s);
          return l.sub(a);
        },
        d = (e, t) => {
          let n = {
            ...o(e, t),
            penalty: "0",
            daysLeft: "0",
            withdrawFeePercentage: "0",
            netReceivable: "0",
          };
          if (!t) return n;
          try {
            let n = r.O$.from(t.netReceivable || "0"),
              l = c(n, e.rewardsCommissionPercentage);
            return {
              ...o(e, t),
              penalty: (0, s.b)(
                (null == t ? void 0 : t.penalty) || "0",
                e.depositTokenDecimals
              ),
              daysLeft: (0, a.i8)(t.daysLeft).toFixed(0),
              withdrawFeePercentage: parseFloat(
                (null == t ? void 0 : t.withdrawFeePercentage) || "0"
              ).toFixed(2),
              netReceivable: (0, s.b)(l, e.depositTokenDecimals),
            };
          } catch (e) {
            return n;
          }
        };
    },
    29440: function (e, t, n) {
      n.d(t, {
        Px: function () {
          return o;
        },
        SE: function () {
          return i;
        },
        _j: function () {
          return a;
        },
      });
      var r = n(27481),
        s = n(10528);
      function l(e, t) {
        let n = parseInt((null == e ? void 0 : e.unlockDate) || "0", 10),
          s = (0, r.l$)(t);
        return n - s;
      }
      function a(e, t) {
        let n = l(e, t);
        return Math.max(n, 0);
      }
      function i(e, t, n) {
        let r = l(e, n),
          s = Math.max(r, 0);
        return t > 0 ? t + s : s + 1;
      }
      function o(e) {
        let t = s.O$.from((null == e ? void 0 : e.totalStaked) || 0),
          n = s.O$.from((null == e ? void 0 : e.claimable) || 0);
        return t.gt(0) || n.gt(0);
      }
    },
    30408: function (e, t, n) {
      n.d(t, {
        b: function () {
          return a;
        },
        v: function () {
          return l;
        },
      });
      var r = n(59656),
        s = n(90711);
      let l = (e, t) => {
          try {
            return r.parseUnits(e.toString(), t);s
          } catch (e) {
            return s._Y;
          }
        },
        a = (e, t) => r.formatUnits(e, t);
    },
  },
]);
