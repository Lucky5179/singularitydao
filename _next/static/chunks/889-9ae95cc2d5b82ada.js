"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [889],
  {
    53206: function (e, n, t) {
      t.d(n, {
        _Q: function () {
          return c;
        },
        o$: function () {
          return l;
        },
        p: function () {
          return u;
        },
        zs: function () {
          return o;
        },
      });
      var r = t(45125),
        a = t(1953),
        i = t(3316);
      let l = (0, r.Yh)(a.K, (e) => e.launchpad.interestList),
        s = (0, r.Yh)(a.K, (e) => e.launchpad.accountTotalStake),
        o = (0, r.Yh)(s, (e) => (0, i.ts)(e)),
        c = (0, r.Yh)(a.K, (e) => e.launchpad.accountKYCStatus),
        u = (0, r.Yh)(a.K, (e) => e.launchpad.roundsCacheKey);
    },
    22813: function (e, n, t) {
      t.d(n, {
        l: function () {
          return g;
        },
      });
      var r = t(52322);
      t(2784);
      var a = t(14013),
        i = t(1232),
        l = t(12522),
        s = t(39097),
        o = t.n(s),
        c = t(78246),
        u = t(36854),
        d = t(98614),
        m = t(82857),
        f = t(77466),
        x = t(93370);
      let h = () => {
        let { t: e } = (0, d.$G)("common");
        return (0, r.jsxs)(f._, {
          children: [
            (0, r.jsx)(c.z, {
              component: o(),
              style: "outline",
              href: u.e.urlBuySDAO,
              target: "_blank",
              children: e("HEADER.BUY_SDAO"),
            }),

            (0, r.jsxs)(c.z, {
              component: o(),
              href: "/staking/projects",
              style: "ghost",
              className: "gap-2",
              children: [
                "Launch dApp",
                (0, r.jsx)(m.J, {
                  width: 24,
                  height: 24,
                  color: "#B4BCD0",
                  icon: "arrow_top_right_outline",
                }),
              ],
            }),
            (0, r.jsx)(x.m, {}),
          ],
        });
      };
      var p = t(91494);
      let b = () => (0, r.jsx)(p.v, {}),
        g = (e) => {
          let { children: n } = e,
            t = (0, a.d)();
          return t
            ? (0, r.jsx)(l.n, { menu: (0, r.jsx)(b, {}), children: n })
            : (0, r.jsx)(i.S, {
                header: (0, r.jsx)(h, {}),
                sidebar: !1,
                breadcrumbs: !0,
                children: n,
              });
        };
    },
    91494: function (e, n, t) {
      t.d(n, {
        v: function () {
          return f;
        },
      });
      var r = t(52322);
      t(2784);
      var a = t(12849),
        i = t(82876),
        l = t(41707),
        s = t(95180),
        o = t(39097),
        c = t.n(o),
        u = t(36854),
        d = t(78246),
        m = t(98614);
      let f = () => {
        let e = (0, i.usePathname)(),
          { t: n } = (0, m.$G)("common");
        return (0, r.jsxs)("nav", {
          className: "flex h-screen flex-grow flex-col gap-4 px-14 py-14",
          children: [
            [
              { label: "Home", icon: "dashboard_light", href: "/" },
              {
                label: "Launch dApp",
                icon: "dynasets",
                href: "/staking/projects",
                endIcon: "open_in_new",
              },
            ].map((n) =>
              (0, r.jsx)(
                l.s,
                {
                  label: n.label,
                  href: n.href,
                  target: n.target,
                  active: (0, a.zh)(n, e) && "/" !== n.href,
                  icon: (0, r.jsx)(s.Z, {
                    active: n.href && (0, a.zh)(n, e),
                    icon: n.icon,
                  }),
                  endEnhancer:
                    n.endIcon && !(0, a.zh)(n, e)
                      ? (0, r.jsx)(s.Z, {
                          className: "ml-auto",
                          icon: n.endIcon,
                        })
                      : null,
                },
                n.label + "_" + n.icon
              )
            ),
            (0, r.jsx)("div", {
              className: "mt-auto flex justify-center",
              children: (0, r.jsx)(d.z, {
                component: c(),
                style: "outline",
                href: u.e.urlBuySDAO,
                target: "_blank",
                children: n("HEADER.BUY_SDAO"),
              }),
            }),
          ],
        });
      };
    },
    18091: function (e, n, t) {
      t.d(n, {
        n: function () {
          return D;
        },
      });
      var r = t(52322),
        a = t(14013),
        i = t(57143),
        l = t(2784),
        s = t(98614),
        o = t(9258),
        c = t(6687),
        u = t(38531),
        d = t(78183),
        m = t(68783),
        f = t(17129),
        x = t(53206),
        h = function (e) {
          let { className: n, clientId: t, Component: a, label: i } = e,
            { account: s } = (0, c.aF)(),
            o = (0, f.C)(x._Q),
            h = "blockpass-kyc-connect_".concat(t),
            p = (e, n, t) => {
              try {
                let t = new BlockpassKYCConnect(n, {
                  refId: e,
                  elementId: "blockpass-kyc-connect_" + n,
                  mainColor: "800080",
                });
                t.startKYCConnect();
              } catch (e) {
                d.Tb(e);
              }
            };
          (0, l.useEffect)(() => {
            if ("undefined" == typeof BlockpassKYCConnect) {
              d.uT("BlockpassKYCConnect is undefined");
              return;
            }
            s && o === m.c5.UNINITIATED && t && p(s, t, h);
          }, [s, o, t]);
          let b = a || u.z;
          return (0, r.jsx)(b, { id: h, className: n, children: i });
        },
        p = t(30616),
        b = t(58667),
        g = t(91786),
        j = t(61335),
        v = t(15354),
        N = t(20324);
      let y = l.createContext(null),
        T = (0, j.j)(["flex flex-col !gap-4 p-3 text-xs font-normal"], {
          variants: {},
        }),
        C = (0, j.j)(["inline-flex gap-2 items-center leading-4"], {
          variants: { isDisabled: { true: "text-grey-300" } },
          defaultVariants: { isDisabled: !1 },
        }),
        I = (0, j.j)(["relative w-4 h-4 border rounded-full shrink-0"], {
          variants: {
            isDisabled: {
              true: "border-grey-500",
              false: "border-light-input-checkboxRadioPrimary",
            },
          },
          defaultVariants: { isDisabled: !1 },
        }),
        R = (0, j.j)(
          [
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full",
          ],
          {
            variants: { isSelected: { true: "" }, isDisabled: { true: "" } },
            compoundVariants: [
              {
                isSelected: !0,
                isDisabled: !1,
                className:
                  "bg-light-input-checkboxRadioPrimary dark:bg-light-input-checkboxRadioPrimary",
              },
              { isSelected: !0, isDisabled: !0, className: "bg-grey-150" },
            ],
            defaultVariants: { isDisabled: !1 },
          }
        ),
        E = {
          Group: function (e) {
            let {
                children: n,
                wrapperClassName: t,
                label: a,
                labelClassName: i,
                description: l,
                descriptionClassName: s,
                errorMessage: o,
              } = e,
              c = (0, p.w)(e),
              {
                radioGroupProps: u,
                errorMessageProps: d,
                labelProps: m,
                descriptionProps: f,
              } = (0, b.a)(e, c);
            return (0, r.jsxs)(v.I.Wrapper, {
              ...u,
              className: (0, j.cx)(T(), t),
              children: [
                a && (0, r.jsx)(v.I.Label, { ...m, className: i, children: a }),
                l &&
                  (0, r.jsx)(v.I.Description, {
                    ...f,
                    className: s,
                    children: l,
                  }),
                (0, r.jsx)(y.Provider, { value: c, children: n }),
                o && (0, r.jsx)(v.I.ErrorMessage, { ...d, children: o }),
              ],
            });
          },
          Radio: function (e) {
            let { children: n, className: t } = e,
              a = l.useContext(y);
            if (null === a)
              return (
                console.error(
                  "RadioGroup.Radio must be used as a child of RadioGroup.Group"
                ),
                (0, r.jsx)("p", {
                  children:
                    "RadioGroup.Radio must be used as a child on RadioGroup.Group",
                })
              );
            let i = l.useRef(null),
              {
                inputProps: s,
                isDisabled: o,
                isSelected: c,
              } = (0, b.x)(e, a, i);
            return (0, r.jsxs)("label", {
              className: (0, N.m6)((0, j.cx)(C({ isDisabled: o }), t)),
              children: [
                (0, r.jsx)(g.T, {
                  children: (0, r.jsx)("input", { ...s, ref: i }),
                }),
                (0, r.jsx)("div", {
                  className: I({ isDisabled: o }),
                  children: (0, r.jsx)("div", {
                    className: R({ isDisabled: o, isSelected: c }),
                  }),
                }),
                n,
              ],
            });
          },
        };
      var _ = t(53972);
      function D(e) {
        let { children: n } = e,
          { t } = (0, s.$G)("common"),
          [c, u] = (0, l.useState)("B"),
          d = (0, a.d)(834);
        return (0, r.jsxs)(i.k.Root, {
          modal: !1,
          children: [
            (0, r.jsx)(i.k.Trigger, { asChild: !0, children: n }),
            (0, r.jsxs)(i.k.Content, {
              variant: "unstyled",
              className: "w-full bg-blue-700",
              fullscreen: d,
              children: [
                (0, r.jsx)(i.k.Title, {
                  className: "px-4 pb-2 pt-4 text-white",
                  children: t("KYC_PROCESS"),
                }),
                (0, r.jsxs)(i.k.Body, {
                  className: "mx-0 my-0 px-4 py-3",
                  children: [
                    (0, r.jsx)(o.Z, {
                      label: "Select the country you are from below:",
                      overrides: {
                        Label: {
                          style: (e) => {
                            let { $theme: n } = e;
                            return {
                              fontSize: n.sizing.scale500,
                              color: n.colors.white,
                              marginBottom: "0",
                            };
                          },
                        },
                      },
                      children: (0, r.jsxs)(E.Group, {
                        defaultValue: "B",
                        wrapperClassName: "px-0",
                        onChange: (e) => {
                          u(e);
                        },
                        children: [
                          (0, r.jsx)(E.Radio, {
                            value: "B",
                            className: "items-start",
                            children: (0, r.jsx)(_.ZP, {
                              className: "text-sm",
                              children:
                                "Afghanistan, Barbados, Belarus, Bosnia and Herzegovina, Bulgaria, Burkina Faso, Burundi, Cameroon, Central African Republic (the), China, Congo (the Democratic Republic of the), Gibraltar, Guatemala, Guinea, Guinea-Bissau, Haiti, Iraq, Jamaica, Lebanon, Libya, Mali, Moldova (the Republic of), Montenegro, Mozambique, Nicaragua, Nigeria, Russian Federation (the), Senegal, Serbia, Somalia, South Sudan, Sudan (the), Syrian Arab Republic, Tanzania, United Republic of, Tunisia, Uganda, Ukraine, Venezuela (Bolivarian Republic of), Vietnam, Yemen, Zimbabwe.",
                            }),
                          }),
                          (0, r.jsx)(E.Radio, {
                            value: "A",
                            children: (0, r.jsx)(_.ZP, {
                              className: "text-sm",
                              children: "My country is NOT from the list above",
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, r.jsx)(h, {
                      clientId:
                        "A" === c
                          ? "sdao_launchpad_b4d45"
                          : "due_diligence_658bf",
                      className: "w-full rounded-[20px] px-4 py-2 text-sm",
                      label: t("START_PROCESS"),
                    }),
                  ],
                }),
                (0, r.jsx)(i.k.Close, {}),
              ],
            }),
          ],
        });
      }
    },
    5182: function (e, n, t) {
      var r = t(52322);
      t(2784);
      var a = t(20324);
      n.Z = function (e) {
        let { children: n, style: t = "main", className: i, hover: l = !1 } = e,
          s = (0, a.m6)(
            l
              ? "hover:border-[#2E5BFF] hover:border-y transition-all delay-100 duration-300"
              : "",
            "main" === t
              ? "border-white border-x-0 border-y rounded-[20px] px-3 py-7"
              : "",
            "secondary" === t ? "px-1 rounded-[10px] bg-[#231D32]" : "",
            i
          );
        return (0, r.jsx)("div", { className: s, children: n });
      };
    },
    69603: function (e, n, t) {
      t.d(n, {
        R: function () {
          return s;
        },
      });
      var r = t(52322),
        a = t(2784),
        i = t(20324),
        l = t(3316);
      let s = (e) => {
        let n = (0, a.useMemo)(
            () =>
              (0, l.Ld)(
                ""
                  .concat("https://public.singularitydao.ai", "/")
                  .concat(e.icon)
              ),
            [e.icon]
          ),
          t = (0, i.m6)(
            "flex items-center justify-center border-[0.5px] rounded-lg border-#FFFFFF bg-[#020002]",
            e.className
          );
        return (0, r.jsx)("div", {
          className: t,
          children: (0, r.jsx)("img", {
            src: n,
            className: "h-[100%] min-h-6 w-[100%] min-w-6",
            alt: e.alt,
          }),
        });
      };
    },
    72258: function (e, n, t) {
      var r = t(52322);
      t(2784);
      var a = t(53972),
        i = t(98614),
        l = t(20324),
        s = t(28726),
        o = t(78695);
      n.Z = function (e) {
        let { status: n, large: t } = e,
          c = {
            [o.U.UPCOMING]: "#F6911E",
            [o.U.COMPLETED]: "#C1CAD6",
            [o.U.ACTIVE]: "#54FAAA",
          },
          { t: u } = (0, i.$G)("common"),
          d = (0, s.h5)(n),
          m = c[n] || "#C1CAD6";
        return (0, r.jsxs)("div", {
          className: (0, l.m6)(
            "flex flex-row items-center space-x-1",
            t ? "bg-[".concat(m, "]/20 rounded-[10px] px-3 py-1") : ""
          ),
          children: [
            (0, r.jsx)("div", {
              className: (0, l.m6)(
                "flex items-center justify-center border-[".concat(
                  m,
                  "] rounded-full"
                ),
                t
                  ? "h-[14px] min-h-[14px] w-[14px] min-w-[14px] border-[0.5px]"
                  : "h-[5px] min-h-[5px] w-[5px] min-w-[5px] border-[0.5px]"
              ),
              children: (0, r.jsx)("div", {
                className: (0, l.m6)(
                  "bg-[".concat(m, "] rounded-full"),
                  t
                    ? "h-[8px] min-h-[8px] w-[8px] min-w-[8px]"
                    : "h-[3px] min-h-[3px] w-[3px] min-w-[3px]"
                ),
              }),
            }),
            (0, r.jsx)(a.nv, {
              className: "text-[0.625rem] text-[".concat(m, "]"),
              children: d,
            }),
          ],
        });
      };
    },
    68991: function (e, n, t) {
      t.d(n, {
        J: function () {
          return s;
        },
        P: function () {
          return o;
        },
      });
      var r = t(52322);
      t(2784);
      var a = t(84328),
        i = t(59567),
        l = t(53972);
      function s(e) {
        let { start: n, end: t, timestamp: s } = e,
          [o, c, u] = (0, a.a)(n, s);
        return s > t
          ? (0, r.jsx)(l.ZP, {
              className: "text-sm text-[#54FAAA]",
              children: "Completed",
            })
          : s > n && s < t
          ? (0, r.jsx)(l.ZP, {
              className: "text-sm text-[#54FAAA]",
              children: "Live",
            })
          : (0, r.jsxs)(l.ZP, {
              className: "text-sm text-[#54FAAA]",
              children: [
                (0, i.B)(Math.max(o, 0), 2),
                "d:",
                (0, i.B)(Math.max(c, 0), 2),
                "h:",
                (0, i.B)(Math.max(u, 0), 2),
                "m",
              ],
            });
      }
      function o(e) {
        let { date: n, timestamp: t } = e,
          [s, o, c] = (0, a.J)(n - t);
        return (0, r.jsxs)(l.ZP, {
          className: "text-sm text-[#54FAAA]",
          children: [
            (0, i.B)(Math.max(s, 0), 2),
            "d:",
            (0, i.B)(Math.max(o, 0), 2),
            "h:",
            (0, i.B)(Math.max(c, 0), 2),
            "m",
          ],
        });
      }
    },
    26879: function (e, n, t) {
      var r = t(52322);
      t(2784),
        (n.Z = function (e) {
          let { path: n, alt: t } = e;
          return (0, r.jsx)("div", {
            className:
              "flex items-center justify-center w-11 h-11 rounded-full bg-[#231D32] hover:bg-[#2E5BFF]",
            children: (0, r.jsx)("img", { src: n, alt: t }),
          });
        });
    },
    78695: function (e, n, t) {
      t.d(n, {
        U: function () {
          return r;
        },
      });
      let r = {
        UPCOMING: "UPCOMING",
        ACTIVE: "ACTIVE",
        COMPLETED: "COMPLETED",
      };
    },
    37379: function (e, n, t) {
      t.d(n, {
        F8: function () {
          return a;
        },
        Iy: function () {
          return r;
        },
        xv: function () {
          return i;
        },
      });
      let r = {
          NO_TIER: "NO_TIER",
          IRON: "IRON",
          BRONZE: "BRONZE",
          SILVER: "SILVER",
          GOLD: "GOLD",
          DIAMOND: "DIAMOND",
        },
        a = [
          {
            id: r.NO_TIER,
            icon: "/staking/tier_zero.png",
            name: "Zero",
            srep: 0,
          },
          {
            id: r.IRON,
            icon: "/staking/tier_iron.png",
            name: "Iron",
            srep: 5e5,
          },
          {
            id: r.BRONZE,
            icon: "/staking/tier_bronze.png",
            name: "Bronze",
            srep: 1e6,
          },
          {
            id: r.SILVER,
            icon: "/staking/tier_silver.png",
            name: "Silver",
            srep: 25e5,
          },
          {
            id: r.GOLD,
            icon: "/staking/tier_gold.png",
            name: "Gold",
            srep: 5e6,
          },
          {
            id: r.DIAMOND,
            icon: "/staking/tier_diamond.png",
            name: "Diamond",
            srep: 1e7,
          },
        ],
        i = a.reduce((e, n) => ({ ...e, [n.id]: n }), {});
    },
    70625: function (e, n, t) {
      t.d(n, {
        h: function () {
          return x;
        },
      });
      var r = t(52322),
        a = t(99485),
        i = t(2784),
        l = t(6687),
        s = t(17129),
        o = t(53206),
        c = t(4188),
        u = t(68783),
        d = t(18091),
        m = t(37379),
        f = t(31754);
      function x() {
        let { account: e } = (0, l.aF)(),
          n = (0, s.C)(o._Q),
          t = (0, s.C)(o.zs),
          [x, h] = (0, i.useState)(!1),
          p = () => {
            h(!0);
          },
          b = (0, f.Z)();
        return !b || x
          ? null
          : e
          ? n === u.c5.UNINITIATED
            ? (0, r.jsx)(a.v, {
                label: "You have to complete KYC to participate in Launchpad",
                bgColor: "#F6911E",
                button: (0, r.jsx)(d.n, {
                  children: (0, r.jsx)(a.X, { label: "Proceed" }),
                }),
                onClose: p,
              })
            : t !== m.Iy.NO_TIER && t !== m.Iy.DIAMOND
            ? (0, r.jsx)(a.v, {
                bgColor: "#3C8F0A",
                label:
                  "You are very close to the next Tier, pay attention to the benefits",
                button: (0, r.jsx)(a.X, {
                  label: "Check this out",
                  onClick: () => {
                    window.open("/vaults/unbondedvaults", "_blank");
                  },
                }),
                onClose: p,
              })
            : null
          : (0, r.jsx)(a.v, {
              label: "You have to connect wallet to participate in Launchpad",
              bgColor: "#2E5BFF",
              button: (0, r.jsx)(c.Z, {
                connectButton: (0, r.jsx)(a.X, {
                  label: "Connect your wallet",
                }),
              }),
              onClose: p,
            });
      }
    },
    42250: function (e, n, t) {
      t.d(n, {
        k: function () {
          return c;
        },
      });
      var r = t(7040),
        a = t(45114),
        i = t(68783),
        l = t(21286),
        s = t(17129);
      let o = (e, n) => {
          let t = i.NL[e],
            r = i.NL[n];
          return t >= r ? e : n;
        },
        c = (e) => {
          let n = (0, s.T)();
          (0, r.a)({
            queryKey: [a.S.KYC_STATUS, e],
            queryFn: async () => {
              if (e) {
                let [n, t] = await Promise.all([
                  i.N0.getCandidateStatus("sdao_launchpad_b4d45", e),
                  i.N0.getCandidateStatus("due_diligence_658bf", e),
                ]);
                return o(n, t);
              }
              return i.c5.UNINITIATED;
            },
            onSuccess: (e) => {
              n((0, l.Bf)({ status: e }));
            },
          });
        };
    },
    88567: function (e, n, t) {
      t.d(n, {
        Ht: function () {
          return u;
        },
        LZ: function () {
          return c;
        },
        UT: function () {
          return d;
        },
      });
      var r = t(7040),
        a = t(68783),
        i = t(45114),
        l = t(28726),
        s = t(2784);
      let o = (e) => (n) => n ? n.sort((0, l.gv)(e)) : [],
        c = (e) => {
          let n = (null == e ? void 0 : e.queryKey) ? e.queryKey : [];
          return (0, r.a)({
            queryKey: [i.S.PROJECT_LIST, ...n],
            queryFn: () => a.N0.loadProjectList(),
            select: (null == e ? void 0 : e.select) ? e.select : void 0,
          });
        },
        u = (e) =>
          c({
            select: (n) =>
              n.filter((e) => e.addToBanner && !!e.banner).sort((0, l.gv)(e)),
          }),
        d = (e) => c({ select: (0, s.useCallback)(o(e), [e]) });
    },
    28726: function (e, n, t) {
      t.d(n, {
        CE: function () {
          return b;
        },
        Cy: function () {
          return c;
        },
        FE: function () {
          return u;
        },
        Gl: function () {
          return x;
        },
        Go: function () {
          return R;
        },
        JR: function () {
          return T;
        },
        N1: function () {
          return N;
        },
        Uc: function () {
          return s;
        },
        Yw: function () {
          return d;
        },
        _E: function () {
          return y;
        },
        gv: function () {
          return I;
        },
        h5: function () {
          return j;
        },
        if: function () {
          return o;
        },
        l4: function () {
          return l;
        },
        nn: function () {
          return v;
        },
        xt: function () {
          return p;
        },
        yM: function () {
          return h;
        },
        zT: function () {
          return E;
        },
      });
      var r = t(27481),
        a = t(78695);
      function i(e, n) {
        return (0, r.DK)(e.startR1Timestamp).getTime() > n;
      }
      function l(e, n) {
        let t = n > (0, r.DK)(e.startR1Timestamp).getTime(),
          a = n > (0, r.DK)(e.endR1Timestamp).getTime();
        return t && !a;
      }
      function s(e, n) {
        return n > (0, r.DK)(e.endR1Timestamp).getTime();
      }
      function o(e, n) {
        return l(e, n) || i(e, n);
      }
      function c(e, n) {
        return !o(e, n) && (0, r.DK)(e.startR2Timestamp).getTime() > n;
      }
      function u(e, n) {
        let t = n > (0, r.DK)(e.startR2Timestamp).getTime(),
          a = n > (0, r.DK)(e.endR2Timestamp).getTime();
        return t && !a;
      }
      function d(e, n) {
        return n > (0, r.DK)(e.endR2Timestamp).getTime();
      }
      function m(e, n) {
        return l(e, n) || u(e, n);
      }
      function f(e, n) {
        return i(e, n) || c(e, n);
      }
      function x(e) {
        return h(e) && p(e);
      }
      function h(e) {
        return !!e.startR1Timestamp && !!e.endR1Timestamp;
      }
      function p(e) {
        return !!e.startR2Timestamp && !!e.endR2Timestamp;
      }
      function b(e, n) {
        return (
          !!e.tokenAvailableTimestamp &&
          n > (0, r.DK)(e.tokenAvailableTimestamp).getTime()
        );
      }
      let g = {
        [a.U.UPCOMING]: "Upcoming",
        [a.U.COMPLETED]: "Completed",
        [a.U.ACTIVE]: "Active",
      };
      function j(e) {
        return g[e];
      }
      function v(e, n) {
        return m(e, n)
          ? a.U.ACTIVE
          : f(e, n) || !x(e)
          ? a.U.UPCOMING
          : a.U.COMPLETED;
      }
      function N(e) {
        var n;
        return (
          (null == e
            ? void 0
            : null === (n = e.smartContractDetails) || void 0 === n
            ? void 0
            : n[0]) || { chainId: 1, address: "" }
        );
      }
      function y(e) {
        return (
          (0, r.A8)((0, r.DK)(e.startSnapshotTimestamp)) +
          "/" +
          (0, r.Kc)((0, r.DK)(e.endSnapshotTimestamp))
        );
      }
      function T(e) {
        return !!e.startSnapshotTimestamp && !!e.endSnapshotTimestamp;
      }
      let C = (e, n) =>
          0 +
          (m(e, n) ? 10 : 0) +
          (x(e) && f(e, n) ? 8 : 0) +
          (x(e) ? 0 : 6) +
          ((null == e ? void 0 : e.orderPriority) || 0),
        I = (e) => (n, t) => {
          let r = C(n, e),
            a = C(t, e);
          return r > a
            ? -1
            : a > r
            ? 1
            : t.startR1Timestamp - n.startR1Timestamp ||
              t.title.localeCompare(n.title);
        };
      function R(e) {
        return !!(null == e ? void 0 : e.refundText);
      }
      function E(e, n) {
        if (T(e)) return !(n > (0, r.DK)(e.startSnapshotTimestamp).getTime());
        let t = x(e) && (l(e, n) || s(e, n));
        return !t;
      }
    },
    3316: function (e, n, t) {
      t.d(n, {
        Gi: function () {
          return i;
        },
        Kw: function () {
          return s;
        },
        Ld: function () {
          return c;
        },
        nx: function () {
          return l;
        },
        sJ: function () {
          return o;
        },
        ts: function () {
          return a;
        },
      });
      var r = t(37379);
      function a(e) {
        return e < 1e3
          ? r.Iy.NO_TIER
          : e >= 1e3 && e < 2500
          ? r.Iy.IRON
          : e >= 2500 && e < 5e3
          ? r.Iy.BRONZE
          : e >= 5e3 && e < 1e4
          ? r.Iy.SILVER
          : e >= 1e4 && e < 2e4
          ? r.Iy.GOLD
          : e >= 2e4
          ? r.Iy.DIAMOND
          : r.Iy.NO_TIER;
      }
      function i(e) {
        for (let n = 0; n <= r.F8.length - 1; n++) {
          let t = r.F8[n],
            a = n === r.F8.length - 1;
          if (a) return t;
          let i = r.F8[n + 1],
            l = e >= t.srep && e < i.srep;
          if (l) return t;
        }
        return s(r.Iy.NO_TIER);
      }
      function l(e) {
        let n = i(e),
          t = r.F8.findIndex((e) => e.id === n.id);
        return t === r.F8.length - 1 ? n : r.F8[t + 1];
      }
      function s(e) {
        return r.xv[e];
      }
      let o = (e) => {
        let n = e.map((e) => r.xv[e]);
        return n.reduce((e, n) => (n.srep > e.srep ? n : e), s(r.Iy.NO_TIER));
      };
      function c(e) {
        let n = e.match(/^(https?:\/\/)/),
          t = n ? n[0] : "",
          r = e.replace(/^(https?:\/\/)/, ""),
          a = r.replace(/\/{2,}/g, "/");
        return t + a;
      }
    },
    4188: function (e, n, t) {
      var r = t(52322),
        a = t(2784),
        i = t(5632),
        l = t(41704),
        s = t(6687),
        o = t(28589),
        c = t(57143),
        u = t(50274),
        d = t(9871),
        m = t(98614),
        f = t(64749),
        x = t(31754),
        h = t(88540);
      n.Z = (e) => {
        let { connectButton: n, showSwitchNetwork: t } = e,
          { t: p } = (0, m.$G)("common"),
          { account: b, chainId: g, disconnect: j } = (0, s.aF)(),
          v = (0, f.xW)(g),
          [, N] = (0, a.useState)(),
          y = (0, x.Z)(),
          T = (0, i.useRouter)();
        (0, a.useEffect)(() => {
          N(g);
        }, [b, g]),
          (0, a.useEffect)(() => {
            T.pathname && "/migrate-asi" !== T.pathname && C();
          }, [T.pathname]);
        let C = (0, a.useCallback)(async () => {
            let e = localStorage.getItem(h.NV);
            b && "true" === e && (await I());
          }, [T.pathname]),
          I = async () => {
            await j();
          };
        return b && y
          ? (0, r.jsx)(r.Fragment, {
              children: b
                ? (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsxs)(c.k.Root, {
                      children: [
                        (0, r.jsx)(c.k.Trigger, {
                          asChild: !0,
                          children: t
                            ? (0, r.jsxs)("div", {
                                className:
                                  "mb-4 flex content-center justify-start gap-2 text-sm",
                                children: [
                                  (0, r.jsx)("h3", { children: "Network:" }),
                                  (0, r.jsx)(u.JO, {
                                    icon: null == v ? void 0 : v.icon,
                                    width: "16",
                                    height: "16",
                                  }),
                                  null == v ? void 0 : v.name,
                                  (0, r.jsx)("h3", {
                                    className:
                                      "cursor-pointer text-blue-500 underline",
                                    children: "Switch network",
                                  }),
                                ],
                              })
                            : (0, r.jsxs)(o.x, {
                                id: "accounts",
                                variant: "default",
                                variantStyle: "accent",
                                size: "small",
                                className:
                                  "flex grid-cols-2  items-center gap-1 font-bold",
                                children: [
                                  (0, r.jsx)(u.JO, {
                                    icon: null == v ? void 0 : v.icon,
                                    width: "16",
                                    height: "16",
                                  }),
                                  ""
                                    .concat(b.slice(0, 5), "...")
                                    .concat(b.slice(b.length - 5)),
                                ],
                              }),
                        }),
                        (0, r.jsxs)(c.k.Content, {
                          variant: "unstyled",
                          className: "mx-6 bg-blue-700",
                          children: [
                            (0, r.jsx)(c.k.Title, {
                              className: "px-6 pb-2 pt-3 text-white",
                              children: p("MANAGE_WALLET"),
                            }),
                            (0, r.jsx)(c.k.Body, {
                              className: "my-0",
                              children: (0, r.jsx)(d.C, {
                                address: b,
                                disconnect: I,
                              }),
                            }),
                            (0, r.jsx)(c.k.Close, {}),
                          ],
                        }),
                      ],
                    }),
                  })
                : (0, r.jsx)(l.Z, { button: n }),
            })
          : (0, r.jsx)(l.Z, { button: n });
      };
    },
    15354: function (e, n, t) {
      t.d(n, {
        I: function () {
          return c;
        },
      });
      var r = t(52322),
        a = t(2784),
        i = t(17973),
        l = t(61335),
        s = t(20324);
      let o = a.forwardRef(function (e, n) {
          let { className: t, ...a } = e;
          return (0,
          r.jsx)("input", { ref: n, ...a, className: (0, l.cx)((0, s.m6)("ac-field min-w-[64px] text-xs leading-4 py-[9px] placeholder-grey-400 border-grey-150 outline-none rounded bg-white border px-2", t)) });
        }),
        c = {
          Wrapper: function (e) {
            let { asChild: n, className: t } = e,
              a = n ? i.g7 : "div";
            return (0, r.jsx)(a, {
              ...e,
              className: (0, l.cx)((0, s.m6)("flex flex-col gap-1", t)),
            });
          },
          Label: function (e) {
            let { asChild: n, className: t } = e,
              a = n ? i.g7 : "label";
            return (0, r.jsx)(a, {
              ...e,
              className: (0, l.cx)("text-sm font-normal", t),
            });
          },
          Description: function (e) {
            let { asChild: n, className: t } = e,
              a = n ? i.g7 : "div";
            return (0, r.jsx)(a, {
              ...e,
              className: (0, l.cx)("text-xs text-grey-600", t),
            });
          },
          ErrorMessage: function (e) {
            let { asChild: n, className: t } = e,
              a = n ? i.g7 : "div";
            return (0, r.jsx)(a, {
              ...e,
              className: (0, l.cx)("text-sm text-danger", t),
            });
          },
          FieldGroup: function (e) {
            let { className: n, ...t } = e;
            return (0, r.jsx)("div", {
              className: (0, l.cx)(
                (0, s.m6)(
                  "flex bg-white border border-grey-150 rounded w-full items-center px-1 [&_.ac-field]:border-none [&_.ac-field]:px-1 [&_.ac-field]:flex-1",
                  n
                )
              ),
              ...t,
            });
          },
          Field: o,
        };
    },
    85737: function (e, n, t) {
      t.d(n, {
        a: function () {
          return l;
        },
      });
      var r = t(52322),
        a = t(61335);
      let i = (0, a.j)(
        "relative inline-block animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]",
        {
          variants: {
            size: {
              small: ["h-4", "w-4"],
              medium: ["h-12", "w-12"],
              large: ["h-16", "w-16"],
            },
          },
          defaultVariants: { size: "medium" },
        }
      );
      function l(e) {
        let { size: n } = e;
        return (0, r.jsx)("div", {
          className: "flex w-full items-center justify-center",
          children: (0, r.jsx)("div", {
            className: i({ size: n }),
            role: "status",
          }),
        });
      }
    },
  },
]);
