(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [53],
  {
    6851: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return x;
        },
      });
      var i,
        r,
        a = n(2784),
        o = n(58511),
        s = n(50592);
      function l(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                var i;
                (i = n[t]),
                  t in e
                    ? Object.defineProperty(e, t, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[t] = i);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function c(e) {
        var t = e.$theme;
        return "linear-gradient(135deg,\n    "
          .concat(t.colors.backgroundTertiary, ",\n    ")
          .concat(t.colors.backgroundTertiary, ",\n    ")
          .concat(t.colors.backgroundTertiary, ",\n    ")
          .concat(t.colors.backgroundTertiary, ",\n    ")
          .concat(t.colors.backgroundTertiary, ",\n    ")
          .concat(t.colors.backgroundTertiary, ",\n    ")
          .concat(t.colors.backgroundSecondary, ",\n    ")
          .concat(t.colors.backgroundTertiary, ",\n    ")
          .concat(t.colors.backgroundTertiary, ",\n    ")
          .concat(t.colors.backgroundTertiary, ",\n    ")
          .concat(t.colors.backgroundTertiary, ",\n    ")
          .concat(t.colors.backgroundTertiary, ",\n    ")
          .concat(t.colors.backgroundTertiary, ")");
      }
      var d = {
          animationTimingFunction: "ease-out",
          animationDuration: "1.5s",
          animationIterationCount: "infinite",
          backgroundSize: "400% 100%",
          animationName: {
            "0%": { backgroundPosition: "100% 50%" },
            "100%": { backgroundPosition: "0% 50%" },
          },
        },
        p = (0, s.zo)("div", function (e) {
          return "number" == typeof e.$rows && 0 !== e.$rows
            ? {
                display: "flex",
                flexDirection: "column",
                height: e.$height,
                width: e.$width,
              }
            : u(
                u(
                  {},
                  e.$animation
                    ? u(u({}, d), {}, { backgroundImage: c(e) })
                    : { backgroundColor: e.$theme.colors.backgroundTertiary }
                ),
                {},
                { height: e.$height, width: e.$width }
              );
        });
      p.displayName = "StyledRoot";
      var m = (0, s.zo)("div", function (e) {
        return u(
          u(
            {},
            e.$animation
              ? u(u({}, d), {}, { backgroundImage: c(e) })
              : { backgroundColor: e.$theme.colors.backgroundTertiary }
          ),
          {},
          {
            width: "100%",
            height: "15px",
            marginBottom: e.$isLastRow ? "0px" : "10px",
          }
        );
      });
      function f(e) {
        return (f =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function y() {
        return (y =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
          }).apply(this, arguments);
      }
      function h(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
              var n = [],
                i = !0,
                r = !1,
                a = void 0;
              try {
                for (
                  var o, s = e[Symbol.iterator]();
                  !(i = (o = s.next()).done) &&
                  (n.push(o.value), !t || n.length !== t);
                  i = !0
                );
              } catch (e) {
                (r = !0), (a = e);
              } finally {
                try {
                  i || null == s.return || s.return();
                } finally {
                  if (r) throw a;
                }
              }
              return n;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return g(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              if (
                ("Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n)
              )
                return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return g(e, t);
            }
          })(e, t) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function g(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
        return i;
      }
      function v(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function T(e, t) {
        return (T =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function w(e) {
        return (w = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      m.displayName = "StyledRow";
      var b = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && T(e, t);
        })(s, e);
        var t,
          n,
          i,
          r =
            ((t = (function () {
              if (
                "undefined" == typeof Reflect ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                n,
                i = w(s);
              if (t) {
                var r = w(this).constructor;
                n = Reflect.construct(i, arguments, r);
              } else n = i.apply(this, arguments);
              return (e = n) && ("object" === f(e) || "function" == typeof e)
                ? e
                : (function (e) {
                    if (void 0 === e)
                      throw ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return e;
                  })(this);
            });
        function s() {
          return (
            !(function (e, t) {
              if (!(e instanceof t))
                throw TypeError("Cannot call a class as a function");
            })(this, s),
            r.apply(this, arguments)
          );
        }
        return (
          (n = [
            {
              key: "render",
              value: function () {
                var e = this,
                  t = this.props.overrides,
                  n = void 0 === t ? {} : t,
                  i = h((0, o.jb)(n.Root, p), 2),
                  r = i[0],
                  s = i[1],
                  l = h((0, o.jb)(n.Row, m), 2),
                  u = l[0],
                  c = l[1];
                return "number" == typeof this.props.rows
                  ? a.createElement(
                      r,
                      y(
                        {
                          $height: this.props.height,
                          $width: this.props.width,
                          $animation: this.props.animation,
                          $rows: this.props.rows,
                          testid: "loader",
                        },
                        s
                      ),
                      Array(this.props.rows)
                        .fill()
                        .map(function (t, n) {
                          return a.createElement(
                            u,
                            y(
                              {
                                $animation: e.props.animation,
                                key: n,
                                $isLastRow: n === e.props.rows - 1,
                              },
                              c
                            )
                          );
                        })
                    )
                  : a.createElement(
                      r,
                      y(
                        {
                          $height: this.props.height,
                          $width: this.props.width,
                          $animation: this.props.animation,
                          testid: "loader",
                        },
                        s
                      )
                    );
              },
            },
          ]),
          v(s.prototype, n),
          i && v(s, i),
          s
        );
      })(a.Component);
      (r = { rows: 0, animation: !1 }),
        (i = "defaultProps") in b
          ? Object.defineProperty(b, i, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (b[i] = r);
      var x = b;
    },
    94984: function (e, t, n) {
      "use strict";
      var i = n(52322),
        r = n(82857),
        a = n(61335),
        o = n(47897),
        s = n(5632),
        l = n.n(s),
        u = n(2784),
        c = n(98614),
        d = n(20324),
        p = n(67131),
        m = n.n(p),
        f = n(36854);
      let y = {
        SFI_BANNER: "SFI_BANNER",
        ASI_TOKEN_MIGRATION_BANNER: "ASI_TOKEN_MIGRATION_BANNER",
        ASI_TERMINAL_BANNER: "ASI_TERMINAL_BANNER",
      };
      t.Z = (e) => {
        let [t, n] = (0, u.useState)(
            f.e.featureFlags.SINGULARITY_FINANCE
              ? y.SFI_BANNER
              : y.ASI_TOKEN_MIGRATION_BANNER
          ),
          s = (0, u.useMemo)(
            () =>
              f.e.featureFlags.SINGULARITY_FINANCE
                ? [y.SFI_BANNER, y.ASI_TOKEN_MIGRATION_BANNER]
                : [y.ASI_TOKEN_MIGRATION_BANNER],
            []
          ),
          { t: p } = (0, c.$G)("common"),
          h = () => {
            n((e) => {
              let t = s.indexOf(e),
                n = (t + 1) % s.length;
              return s[n];
            });
          };
        return (
          (0, u.useEffect)(() => {
            let e = setInterval(h, 4e3);
            return () => clearInterval(e);
          }, []),
          (0, i.jsx)(i.Fragment, {
            children: (0, i.jsx)("div", {
              className: (0, d.m6)(e.className),
              children: (0, i.jsx)(o.E.div, {
                initial: { opacity: 0, x: -10 },
                animate: { opacity: 1, x: 0 },
                transition: { duration: 1, ease: "easeIn" },
                children: (0, i.jsxs)("div", {
                  className: (0, a.cx)(
                    (0, d.m6)(m().sectionCardBackground, m().carouselInner),
                    "flex min-w-72 max-w-[283px] flex-col gap-4 rounded-2xl px-7 py-4"
                  ),
                  children: [
                    (0, i.jsx)("div", {
                      className:
                        "flex w-full items-center justify-center border-b-2 border-[#616F8B66] pb-4",
                      children:
                        t === y.SFI_BANNER
                          ? (0, i.jsx)("h2", {
                              className: "text-base font-semibold text-white ",
                              children: p("SINGULARITY_FINANCE"),
                            })
                          : t === y.ASI_TERMINAL_BANNER
                          ? (0, i.jsx)("h2", {
                              className: "text-base font-semibold text-white",
                              children: p("ASI_TOKEN_MIGRATION"),
                            })
                          : (0, i.jsxs)("h2", {
                              className: "text-base font-semibold text-white",
                              children: [
                                p("ASI_TOKEN_MIGRATION_IS_LIVE"),
                                (0, i.jsx)("span", {
                                  className: "ml-1 text-green-50",
                                  children: p("LIVE"),
                                }),
                              ],
                            }),
                    }),
                    (0, i.jsx)("div", {
                      className: "flex items-center justify-center",
                      children:
                        t === y.SFI_BANNER
                          ? (0, i.jsx)("div", {
                              className:
                                "flex items-center -space-x-3 overflow-hidden",
                              children: (0, i.jsx)("img", {
                                className: "h-8",
                                alt: "Singularity_Finance",
                                src: "".concat(
                                  "https://public.singularitydao.ai",
                                  "/migration/singularityFinance.svg"
                                ),
                              }),
                            })
                          : t === y.ASI_TERMINAL_BANNER
                          ? (0, i.jsx)("div", {
                              className:
                                "flex items-center -space-x-3 overflow-hidden",
                              children: (0, i.jsx)("img", {
                                alt: "ASI",
                                className: "h-8 w-8 rounded-full",
                                src: "".concat(
                                  "https://public.singularitydao.ai",
                                  "/migration/asi.svg"
                                ),
                              }),
                            })
                          : (0, i.jsxs)("div", {
                              className:
                                "flex items-center -space-x-3 overflow-hidden",
                              children: [
                                (0, i.jsx)("img", {
                                  alt: "AGIX",
                                  className: "h-8 w-8 rounded-full",
                                  src: "".concat(
                                    "https://public.singularitydao.ai",
                                    "/migration/agix.png"
                                  ),
                                }),
                                (0, i.jsx)("img", {
                                  alt: "FET",
                                  className: "h-8 w-8 rounded-full",
                                  src: "".concat(
                                    "https://public.singularitydao.ai",
                                    "/migration/fet.png"
                                  ),
                                }),
                                (0, i.jsx)("img", {
                                  alt: "OCEAN",
                                  className: "h-8 w-8 rounded-full bg-black",
                                  src: "".concat(
                                    "https://public.singularitydao.ai",
                                    "/migration/ocean.png"
                                  ),
                                }),
                                (0, i.jsx)("img", {
                                  alt: "CUDOS",
                                  className: "h-8 w-8 rounded-full",
                                  src: "".concat(
                                    "https://public.singularitydao.ai",
                                    "/migration/cudos.png"
                                  ),
                                }),
                              ],
                            }),
                    }),
                    (0, i.jsx)("div", {
                      className: "min-h-16",
                      children:
                        t === y.SFI_BANNER
                          ? (0, i.jsx)(i.Fragment, {
                              children: (0, i.jsx)("h4", {
                                className: (0, a.cx)(
                                  (0, d.m6)(m().fontFamily),
                                  "text-center text-xs text-white"
                                ),
                                children: p("SINGULARITY_FINANCE_DESCRIPTION"),
                              }),
                            })
                          : t === y.ASI_TERMINAL_BANNER
                          ? (0, i.jsx)("h4", {
                              className: (0, a.cx)(
                                (0, d.m6)(m().fontFamily),
                                "text-center text-xs text-white"
                              ),
                              children: p("ASI_ALLIANCE_DESCRIPTION"),
                            })
                          : (0, i.jsxs)(i.Fragment, {
                              children: [
                                (0, i.jsx)("h4", {
                                  className: (0, a.cx)(
                                    (0, d.m6)(m().fontFamily),
                                    "text-center text-xs text-white"
                                  ),
                                  children: p("ASI"),
                                }),
                                (0, i.jsx)("div", {
                                  className: "mt-2 flex justify-end",
                                  children: (0, i.jsx)(r.J, {
                                    onClick: () => {
                                      l().push("/migrate-asi");
                                    },
                                    className: "cursor-pointer text-white",
                                    icon: "arrow_top_right_outline",
                                  }),
                                }),
                              ],
                            }),
                    }),
                    (0, i.jsxs)("div", {
                      className: "flex items-end justify-center gap-3",
                      children: [
                        (0, i.jsx)("div", {
                          onClick: () => n(y.SFI_BANNER),
                          className: (0, d.m6)(
                            "h-3 w-3 cursor-pointer rounded-full",
                            t === y.SFI_BANNER ? "bg-[#96ADFF]" : "bg-[#D9D9D9]"
                          ),
                        }),
                        (0, i.jsx)("div", {
                          onClick: () => n(y.ASI_TOKEN_MIGRATION_BANNER),
                          className: (0, d.m6)(
                            "h-3 w-3 cursor-pointer rounded-full",
                            t === y.ASI_TOKEN_MIGRATION_BANNER
                              ? "bg-[#96ADFF]"
                              : "bg-[#D9D9D9]"
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          })
        );
      };
    },
    70053: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return $;
          },
        });
      var i = n(52322),
        r = n(2784),
        a = n(7040),
        o = n(24136),
        s = n(14013),
        l = n(9906),
        u = n(78183),
        c = n(20220),
        d = n(98614),
        p = n(30171),
        m = n(6687),
        f = n(9997),
        y = JSON.parse(
          '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":true,"internalType":"address","name":"token","type":"address"}],"name":"Allocated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Claimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":true,"internalType":"address","name":"token","type":"address"}],"name":"Deallocated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"startOfEmissions","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"endOfEmissions","type":"uint256"}],"name":"PoolAdded","type":"event"},{"inputs":[],"name":"MAX_BASIS_POINTS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_POOLS_ALLOWED","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_to","type":"address"}],"name":"allocateFor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"pid","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"user","type":"address"}],"internalType":"struct SDAOClaimpad.Allocation[]","name":"allocations","type":"tuple[]"}],"name":"bulkAllocate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_to","type":"address"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"claimableTokens","outputs":[{"internalType":"uint256","name":"claimableAmount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"_startOfEmissions","type":"uint256"},{"internalType":"uint256","name":"_endOfVestingCliff","type":"uint256"},{"internalType":"uint256","name":"_endOfEmissions","type":"uint256"},{"internalType":"bool","name":"_vestingCliffAccrues","type":"bool"},{"internalType":"uint256","name":"_instantUnlockRatio","type":"uint256"}],"name":"createPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"getPoolClaimToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nrOfPools","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"address","name":"claimToken","type":"address"},{"internalType":"uint256","name":"allocatedAmount","type":"uint256"},{"components":[{"internalType":"uint256","name":"startOfEmissions","type":"uint256"},{"internalType":"uint256","name":"endOfVestingCliff","type":"uint256"},{"internalType":"uint256","name":"endOfEmissions","type":"uint256"},{"internalType":"bool","name":"vestingCliffAccrues","type":"bool"}],"internalType":"struct SDAOClaimpad.EmissionPeriod","name":"emissionPeriod","type":"tuple"},{"internalType":"uint256","name":"instantUnlockRatio","type":"uint256"},{"internalType":"uint256","name":"totalClaimed","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"recoverAnyTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"remove","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"removeAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"reservedAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"allocated","type":"uint256"},{"internalType":"uint256","name":"claimed","type":"uint256"}],"stateMutability":"view","type":"function"}]'
        ),
        h = n(41148),
        g = n(82578),
        v = n(27481),
        T = n(33649),
        w = n(3316),
        b = n(88869),
        x = n(72149),
        A = function (e) {
          var t, n, a, A, S, N, E, I, R, O, _;
          let { claimDetails: C } = e,
            {
              data: j,
              loading: k,
              refetch: D,
            } = (function (e, t) {
              let [n, i] = (0, r.useState)({
                  loading: !1,
                  data: void 0,
                  error: void 0,
                }),
                { account: a, library: o } = (0, m.aF)();
              (0, r.useEffect)(() => {
                s();
              }, [e, o, a]);
              let s = async () => {
                let r;
                i({ ...n, loading: !0, error: void 0 });
                try {
                  r = await o.getSigner();
                } catch (e) {
                  i({
                    ...n,
                    loading: !1,
                    error: null == e ? void 0 : e.message,
                  });
                }
                try {
                  var s, l;
                  if (!e || !r) return i({ ...n, loading: !1, error: void 0 });
                  let o = new p.CH(e, y, r),
                    u = await o.userInfo(t, a),
                    c = await o.poolInfo(t),
                    d = await o.claimableTokens(t, a),
                    m = new p.CH(c[0].toString(), h.Mt, r),
                    w = await m.decimals(),
                    b = {
                      launchPadClaimcontract: o,
                      userInfo: {
                        allocated: (0, T.UL)(
                          null == u ? void 0 : u.allocated.toString(),
                          w,
                          1 / 0
                        ),
                        claimed: (0, T.UL)(
                          null == u ? void 0 : u.claimed.toString(),
                          w,
                          1 / 0
                        ),
                      },
                      poolInfo: {
                        allocatedAmount: (0, T.UL)(
                          null == c ? void 0 : c.allocatedAmount.toString(),
                          w,
                          1 / 0
                        ),
                        emissionPeriod: {
                          start: (0, v.gV)(
                            new Date(
                              1e3 *
                                Number(
                                  null == c
                                    ? void 0
                                    : null === (s = c.emissionPeriod) ||
                                      void 0 === s
                                    ? void 0
                                    : s.startOfEmissions.toString()
                                )
                            )
                          ),
                          end: (0, v.gV)(
                            new Date(
                              1e3 *
                                Number(
                                  null == c
                                    ? void 0
                                    : null === (l = c.emissionPeriod) ||
                                      void 0 === l
                                    ? void 0
                                    : l.endOfEmissions.toString()
                                )
                            )
                          ),
                        },
                      },
                      claimableAmount: (0, T.UL)(d.toString(), w, 1 / 0),
                      claim: async () => {
                        if (d.isZero())
                          throw new g.B9("There is no amount to claim");
                        let e = await r.getGasPrice();
                        return (0, f.F4)(o, "claim", e, t.toString(), a);
                      },
                    };
                  i({ loading: !1, data: { ...n.data, ...b }, error: void 0 });
                } catch (e) {
                  i({
                    ...n,
                    loading: !1,
                    error: null == e ? void 0 : e.message,
                  });
                }
              };
              return { ...n, refetch: s };
            })(null == C ? void 0 : C.projectClaimContractAddress, C.poolId),
            [M, F] = (0, r.useState)(!1),
            L = (0, l.pm)(),
            { t: P } = (0, d.$G)("common"),
            B = (0, s.d)(),
            { account: U } = (0, m.aF)(),
            G = 0 === Number(null == j ? void 0 : j.claimableAmount),
            H = async () => {
              try {
                if (!j.launchPadClaimcontract || !U) return null;
                if (G) {
                  L({
                    title: P("ERROR_MESSAGES.ERROR"),
                    description: P(
                      "ERROR_MESSAGES.FAILED_DUE_TO_INSUFFICIENT_TOKEN"
                    ),
                    type: "error",
                  });
                  return;
                }
                F(!0);
                let e = await j.claim();
                await e.wait(),
                  await D(),
                  F(!1),
                  L({
                    title: P("ERROR_MESSAGES.SUCCESS"),
                    description: P("ERROR_MESSAGES.CLAIM_SUCCESSFUL"),
                    type: "success",
                  });
              } catch (e) {
                u.Tb(e),
                  F(!1),
                  L({
                    title: P("ERROR_MESSAGES.ERROR"),
                    description: P("ERROR_MESSAGES.CLAIM_ERROR"),
                    type: "error",
                  });
              }
            },
            K = {
              Start: {
                value:
                  null !==
                    (E =
                      null == j
                        ? void 0
                        : null === (t = j.poolInfo) || void 0 === t
                        ? void 0
                        : null === (n = t.emissionPeriod) || void 0 === n
                        ? void 0
                        : n.start) && void 0 !== E
                    ? E
                    : "---",
                className: "text-white",
              },
              End: {
                value:
                  null !==
                    (I =
                      null == j
                        ? void 0
                        : null === (a = j.poolInfo) || void 0 === a
                        ? void 0
                        : null === (A = a.emissionPeriod) || void 0 === A
                        ? void 0
                        : A.end) && void 0 !== I
                    ? I
                    : "---",
                className: "text-white",
              },
              Allocation: {
                value:
                  null !==
                    (R = (0, T.dq)(
                      null == j
                        ? void 0
                        : null === (S = j.userInfo) || void 0 === S
                        ? void 0
                        : S.allocated,
                      2,
                      !0
                    )) && void 0 !== R
                    ? R
                    : "---",
                className: "text-green-600 mt-8",
                ticker: null == C ? void 0 : C.icon,
              },
              "Total Claimed": {
                value:
                  null !==
                    (O = (0, T.dq)(
                      null == j
                        ? void 0
                        : null === (N = j.userInfo) || void 0 === N
                        ? void 0
                        : N.claimed,
                      2,
                      !0
                    )) && void 0 !== O
                    ? O
                    : "---",
                className: "text-green-600",
                ticker: null == C ? void 0 : C.icon,
              },
              Claimable: {
                value:
                  null !==
                    (_ = (0, T.dq)(
                      null == j ? void 0 : j.claimableAmount,
                      2,
                      !0
                    )) && void 0 !== _
                    ? _
                    : "---",
                className:
                  Number(null == j ? void 0 : j.claimableAmount) > 0
                    ? "text-green-600 mb-8"
                    : "text-red-600 mb-8",
                ticker: null == C ? void 0 : C.icon,
              },
            },
            V = (e) =>
              (0, w.Ld)(
                "".concat("https://public.singularitydao.ai", "/").concat(e)
              );
          return (0, i.jsx)("div", {
            className: "mx-6",
            children: (0, i.jsx)(o.H, {
              className: B ? "w-full" : x.vQ,
              children: k
                ? (0, i.jsx)("div", {
                    className: "flex h-[330px] items-center justify-center",
                    children: (0, i.jsx)(c.Z, { height: 60 }),
                  })
                : (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)("img", {
                        alt: C.imgName,
                        src: V(C.imgName),
                        height: 150,
                        width: 290,
                      }),
                      Object.entries(K).map((e) => {
                        let [t, n] = e;
                        return (0, i.jsxs)(
                          "div",
                          {
                            className: "flex justify-between p-1 ".concat(
                              n.className
                            ),
                            children: [
                              (0, i.jsxs)("div", {
                                className: "whitespace-nowrap text-blue-150",
                                children: [t, ": "],
                              }),
                              (0, i.jsxs)("div", {
                                className: "flex",
                                children: [
                                  (0, i.jsx)("div", {
                                    className: "mr-1",
                                    children: null == n ? void 0 : n.value,
                                  }),
                                  n.ticker &&
                                    (0, i.jsx)("img", {
                                      alt: n.ticker,
                                      src: V(n.ticker),
                                      height: 18,
                                      width: 18,
                                    }),
                                ],
                              }),
                            ],
                          },
                          t
                        );
                      }),
                      (0, i.jsx)(b.Z, {
                        buttonTitle: "Claim",
                        handleOnClick: H,
                        poolChainId: C.poolChainId,
                        disabled: G || M,
                      }),
                    ],
                  }),
            }),
          });
        },
        S = n(45114),
        N = n(68783),
        E = n(85844),
        I = n(17129),
        R = n(86804),
        O = n(27805),
        _ = n(23793),
        C = function (e) {
          var t, n, o;
          let { tokenList: l } = e,
            { t: u } = (0, d.$G)("common"),
            c = (0, s.d)(),
            p = (0, I.C)(R.q),
            m =
              (null ===
                (t =
                  null === (n = u("VAULTS")) || void 0 === n
                    ? void 0
                    : n.charAt(0)) || void 0 === t
                ? void 0
                : t.toUpperCase()) +
              (null === (o = u("VAULTS")) || void 0 === o
                ? void 0
                : o.slice(1)),
            { data: f } = (0, a.a)(["vaultData", "UNBONDED", p], {
              queryFn: () =>
                _.N.getVaultData({ type: "UNBONDED", chainId: "All" }),
            }),
            y = (0, r.useMemo)(() => f || [], [f]);
          return (0, i.jsx)(i.Fragment, {
            children: (null == y ? void 0 : y.length)
              ? (0, i.jsxs)("section", {
                  className: "mx-6 my-4",
                  children: [
                    (0, i.jsx)("div", {
                      className: "text-xl font-bold text-white",
                      children: m,
                    }),
                    (0, i.jsx)("div", {
                      className: "flex flex-wrap py-4",
                      children: y.map((e) =>
                        (0, i.jsx)(
                          "div",
                          {
                            className: "".concat(
                              c ? "w-full" : "mr-8",
                              " mb-12"
                            ),
                            children: (0, i.jsx)(O.Z, {
                              poolConfig: e,
                              address: e.poolAddress,
                              poolId: e.poolId,
                              token: e.tokens[0],
                              active: e.active,
                              stakeChecked: !1,
                              isMobile: c,
                              currentNetwork: p,
                            }),
                          },
                          "".concat(e.poolId, "-").concat(e.poolAddress)
                        )
                      ),
                    }),
                  ],
                })
              : null,
          });
        },
        j = n(88567),
        k = {
          src: "/_next/static/media/default_claim_tokens.969e45a3.png",
          height: 438,
          width: 438,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAARVBMVEVMaXH////////u7vC5sa/09PXRyMTx8fHs6uf09Pbq6uzOyMPCvbu6tLHUzcrKwb718/PDvLre3uC1r6vLx8bj4uTv7/BvwRKYAAAAFHRSTlMAHR/U59s+ChXtvC76/MTonMHwwPOcsBYAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA8SURBVHicNYtHDsAwDIDItDO63fz/qZUPPYGQAEBUHMhuRRlXPw9rkTpXydYCdXvTL14iI9/9mUn9BRU+R+QCEBeGjzoAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        D = n(61335),
        M = n(96577),
        F = n.n(M),
        L = n(5632),
        P = n(20324),
        B = (e) => {
          var t;
          return (0, i.jsx)("div", {
            className: "ml-2",
            children: (0, i.jsx)("button", {
              onClick: e.onClick,
              className: (0, D.cx)(
                (0, P.m6)(
                  "rounded-3xl px-4 py-2 text-sm text-white",
                  e.outline ? "border border-white" : "bg-blue-500",
                  (null === (t = e.className) || void 0 === t
                    ? void 0
                    : t.length) > 0 && e.className
                )
              ),
              children: e.name,
            }),
          });
        },
        U = n(94984),
        G = () => (0, i.jsx)(U.Z, { className: "w-full" }),
        H = n(79595),
        K = n.n(H),
        V = () => {
          let e = (0, L.useRouter)(),
            { t } = (0, d.$G)("common"),
            n = () => e.push("/staking");
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsxs)("div", {
                children: [
                  (0, i.jsx)("h1", {
                    className: (0, D.cx)(
                      (0, P.m6)(
                        K().fontFamily,
                        "text-2xl font-black text-white"
                      )
                    ),
                    children: t("PORTFOLIO"),
                  }),
                  (0, i.jsx)("h3", {
                    className: (0, D.cx)(
                      (0, P.m6)(K().fontFamily, "mt-1 text-xs text-gray-700")
                    ),
                    children: t("CLAIMABLE_TOKENS"),
                  }),
                ],
              }),
              (0, i.jsxs)("div", {
                className: "mt-4 flex flex-col-reverse gap-2 md:flex-row",
                children: [
                  (0, i.jsxs)("div", {
                    className: (0, D.cx)(
                      (0, P.m6)(
                        K().card,
                        "flex min-h-40 w-full items-center border border-dashed border-white/10 p-6 md:w-3/4"
                      )
                    ),
                    children: [
                      (0, i.jsx)(F(), {
                        className: "max-w-40",
                        src: k,
                        alt: "DefaultClaimTokenIcon",
                      }),
                      (0, i.jsxs)("div", {
                        className:
                          "ml-10 flex flex-col justify-start text-white",
                        children: [
                          (0, i.jsxs)("h4", {
                            className: "ml-2",
                            children: [t("NOTHING_TO_CLAIM"), ".."],
                          }),
                          (0, i.jsxs)("h5", {
                            className:
                              "ml-2 w-3/4 text-xs font-thin text-[#B4BCD0]",
                            children: [t("EXPLORE_LAUNCHPAD"), "."],
                          }),
                          (0, i.jsx)("div", {
                            className: "xs:hidden md:block",
                            children: (0, i.jsx)(B, {
                              outline: !1,
                              name: "Stake SDAO",
                              className: "mt-4",
                              onClick: n,
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, i.jsx)("div", {
                    className: "w-full md:w-1/4",
                    children: (0, i.jsx)(G, {}),
                  }),
                ],
              }),
              (0, i.jsx)("div", {
                className: "mt-4 w-full xs:block md:hidden",
                children: (0, i.jsx)(B, {
                  outline: !1,
                  name: "Stake SDAO",
                  className: "w-full",
                  onClick: n,
                }),
              }),
            ],
          });
        },
        Z = n(28726),
        $ = function () {
          let { data: e = [], isLoading: t } = (0, j.LZ)(),
            { account: n } = (0, m.aF)(),
            { data: o, isLoading: s } = (0, a.a)({
              queryKey: [S.S.WHITELIST_CLAIM, n],
              queryFn: () => N.N0.getUserClaimableList(n),
              enabled: !!n,
            }),
            l = (0, r.useMemo)(() => {
              let t = [];
              return (
                o &&
                  (null == o ? void 0 : o.length) > 0 &&
                  o.filter((i) => {
                    if (i.allowedAddress.toLowerCase() === n.toLowerCase()) {
                      let n = e.find((e) => i.projectId === e.id);
                      if (n) {
                        var r, a;
                        t.push({
                          projectClaimContractAddress: i.claimAddress,
                          imgName: n.claimPadImg,
                          ticker: n.ticker,
                          poolId: i.pool,
                          icon: n.icon,
                          poolChainId:
                            null !== (a = i.chainId) && void 0 !== a
                              ? a
                              : (null === (r = (0, Z.N1)(n)) || void 0 === r
                                  ? void 0
                                  : r.chainId) || 1,
                        });
                      }
                    }
                  }),
                t
              );
            }, [o, s, t]),
            u = (0, r.useMemo)(() => {
              let e = [];
              return (
                (null == l ? void 0 : l.length) &&
                  l.map((t) => {
                    e.push(null == t ? void 0 : t.ticker);
                  }),
                e
              );
            }, [l]),
            c = (0, r.useMemo)(
              () => !s && !((null == l ? void 0 : l.length) > 0),
              [l, s, t]
            );
          return c
            ? (0, i.jsx)(V, {})
            : (0, i.jsx)(i.Fragment, {
                children: s
                  ? (0, i.jsx)("div", {
                      className: "flex h-[85vh] items-center justify-center",
                      children: (0, i.jsx)("div", {
                        children: (0, i.jsx)(E.AX, { height: 200, width: 200 }),
                      }),
                    })
                  : (null == l ? void 0 : l.length) > 0
                  ? (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)("div", {
                          className: "flex flex-wrap",
                          children: l.map((e) =>
                            (0, i.jsx)(
                              A,
                              { claimDetails: e },
                              (null == e ? void 0 : e.poolChainId) +
                                "_" +
                                (null == e
                                  ? void 0
                                  : e.projectClaimContractAddress)
                            )
                          ),
                        }),
                        (0, i.jsx)("div", {
                          className: "mt-6 flex flex-wrap",
                          children: (0, i.jsx)(C, { tokenList: u }),
                        }),
                      ],
                    })
                  : null,
              });
        };
    },
    78695: function (e, t, n) {
      "use strict";
      n.d(t, {
        U: function () {
          return i;
        },
      });
      let i = {
        UPCOMING: "UPCOMING",
        ACTIVE: "ACTIVE",
        COMPLETED: "COMPLETED",
      };
    },
    37379: function (e, t, n) {
      "use strict";
      n.d(t, {
        F8: function () {
          return r;
        },
        Iy: function () {
          return i;
        },
        xv: function () {
          return a;
        },
      });
      let i = {
          NO_TIER: "NO_TIER",
          IRON: "IRON",
          BRONZE: "BRONZE",
          SILVER: "SILVER",
          GOLD: "GOLD",
          DIAMOND: "DIAMOND",
        },
        r = [
          {
            id: i.NO_TIER,
            icon: "/staking/tier_zero.png",
            name: "Zero",
            srep: 0,
          },
          {
            id: i.IRON,
            icon: "/staking/tier_iron.png",
            name: "Iron",
            srep: 5e5,
          },
          {
            id: i.BRONZE,
            icon: "/staking/tier_bronze.png",
            name: "Bronze",
            srep: 1e6,
          },
          {
            id: i.SILVER,
            icon: "/staking/tier_silver.png",
            name: "Silver",
            srep: 25e5,
          },
          {
            id: i.GOLD,
            icon: "/staking/tier_gold.png",
            name: "Gold",
            srep: 5e6,
          },
          {
            id: i.DIAMOND,
            icon: "/staking/tier_diamond.png",
            name: "Diamond",
            srep: 1e7,
          },
        ],
        a = r.reduce((e, t) => ({ ...e, [t.id]: t }), {});
    },
    88567: function (e, t, n) {
      "use strict";
      n.d(t, {
        Ht: function () {
          return c;
        },
        LZ: function () {
          return u;
        },
        UT: function () {
          return d;
        },
      });
      var i = n(7040),
        r = n(68783),
        a = n(45114),
        o = n(28726),
        s = n(2784);
      let l = (e) => (t) => t ? t.sort((0, o.gv)(e)) : [],
        u = (e) => {
          let t = (null == e ? void 0 : e.queryKey) ? e.queryKey : [];
          return (0, i.a)({
            queryKey: [a.S.PROJECT_LIST, ...t],
            queryFn: () => r.N0.loadProjectList(),
            select: (null == e ? void 0 : e.select) ? e.select : void 0,
          });
        },
        c = (e) =>
          u({
            select: (t) =>
              t.filter((e) => e.addToBanner && !!e.banner).sort((0, o.gv)(e)),
          }),
        d = (e) => u({ select: (0, s.useCallback)(l(e), [e]) });
    },
    28726: function (e, t, n) {
      "use strict";
      n.d(t, {
        CE: function () {
          return g;
        },
        Cy: function () {
          return u;
        },
        FE: function () {
          return c;
        },
        Gl: function () {
          return f;
        },
        Go: function () {
          return E;
        },
        JR: function () {
          return A;
        },
        N1: function () {
          return b;
        },
        Uc: function () {
          return s;
        },
        Yw: function () {
          return d;
        },
        _E: function () {
          return x;
        },
        gv: function () {
          return N;
        },
        h5: function () {
          return T;
        },
        if: function () {
          return l;
        },
        l4: function () {
          return o;
        },
        nn: function () {
          return w;
        },
        xt: function () {
          return h;
        },
        yM: function () {
          return y;
        },
        zT: function () {
          return I;
        },
      });
      var i = n(27481),
        r = n(78695);
      function a(e, t) {
        return (0, i.DK)(e.startR1Timestamp).getTime() > t;
      }
      function o(e, t) {
        let n = t > (0, i.DK)(e.startR1Timestamp).getTime(),
          r = t > (0, i.DK)(e.endR1Timestamp).getTime();
        return n && !r;
      }
      function s(e, t) {
        return t > (0, i.DK)(e.endR1Timestamp).getTime();
      }
      function l(e, t) {
        return o(e, t) || a(e, t);
      }
      function u(e, t) {
        return !l(e, t) && (0, i.DK)(e.startR2Timestamp).getTime() > t;
      }
      function c(e, t) {
        let n = t > (0, i.DK)(e.startR2Timestamp).getTime(),
          r = t > (0, i.DK)(e.endR2Timestamp).getTime();
        return n && !r;
      }
      function d(e, t) {
        return t > (0, i.DK)(e.endR2Timestamp).getTime();
      }
      function p(e, t) {
        return o(e, t) || c(e, t);
      }
      function m(e, t) {
        return a(e, t) || u(e, t);
      }
      function f(e) {
        return y(e) && h(e);
      }
      function y(e) {
        return !!e.startR1Timestamp && !!e.endR1Timestamp;
      }
      function h(e) {
        return !!e.startR2Timestamp && !!e.endR2Timestamp;
      }
      function g(e, t) {
        return (
          !!e.tokenAvailableTimestamp &&
          t > (0, i.DK)(e.tokenAvailableTimestamp).getTime()
        );
      }
      let v = {
        [r.U.UPCOMING]: "Upcoming",
        [r.U.COMPLETED]: "Completed",
        [r.U.ACTIVE]: "Active",
      };
      function T(e) {
        return v[e];
      }
      function w(e, t) {
        return p(e, t)
          ? r.U.ACTIVE
          : m(e, t) || !f(e)
          ? r.U.UPCOMING
          : r.U.COMPLETED;
      }
      function b(e) {
        var t;
        return (
          (null == e
            ? void 0
            : null === (t = e.smartContractDetails) || void 0 === t
            ? void 0
            : t[0]) || { chainId: 1, address: "" }
        );
      }
      function x(e) {
        return (
          (0, i.A8)((0, i.DK)(e.startSnapshotTimestamp)) +
          "/" +
          (0, i.Kc)((0, i.DK)(e.endSnapshotTimestamp))
        );
      }
      function A(e) {
        return !!e.startSnapshotTimestamp && !!e.endSnapshotTimestamp;
      }
      let S = (e, t) =>
          0 +
          (p(e, t) ? 10 : 0) +
          (f(e) && m(e, t) ? 8 : 0) +
          (f(e) ? 0 : 6) +
          ((null == e ? void 0 : e.orderPriority) || 0),
        N = (e) => (t, n) => {
          let i = S(t, e),
            r = S(n, e);
          return i > r
            ? -1
            : r > i
            ? 1
            : n.startR1Timestamp - t.startR1Timestamp ||
              n.title.localeCompare(t.title);
        };
      function E(e) {
        return !!(null == e ? void 0 : e.refundText);
      }
      function I(e, t) {
        if (A(e)) return !(t > (0, i.DK)(e.startSnapshotTimestamp).getTime());
        let n = f(e) && (o(e, t) || s(e, t));
        return !n;
      }
    },
    3316: function (e, t, n) {
      "use strict";
      n.d(t, {
        Gi: function () {
          return a;
        },
        Kw: function () {
          return s;
        },
        Ld: function () {
          return u;
        },
        nx: function () {
          return o;
        },
        sJ: function () {
          return l;
        },
        ts: function () {
          return r;
        },
      });
      var i = n(37379);
      function r(e) {
        return e < 1e3
          ? i.Iy.NO_TIER
          : e >= 1e3 && e < 2500
          ? i.Iy.IRON
          : e >= 2500 && e < 5e3
          ? i.Iy.BRONZE
          : e >= 5e3 && e < 1e4
          ? i.Iy.SILVER
          : e >= 1e4 && e < 2e4
          ? i.Iy.GOLD
          : e >= 2e4
          ? i.Iy.DIAMOND
          : i.Iy.NO_TIER;
      }
      function a(e) {
        for (let t = 0; t <= i.F8.length - 1; t++) {
          let n = i.F8[t],
            r = t === i.F8.length - 1;
          if (r) return n;
          let a = i.F8[t + 1],
            o = e >= n.srep && e < a.srep;
          if (o) return n;
        }
        return s(i.Iy.NO_TIER);
      }
      function o(e) {
        let t = a(e),
          n = i.F8.findIndex((e) => e.id === t.id);
        return n === i.F8.length - 1 ? t : i.F8[n + 1];
      }
      function s(e) {
        return i.xv[e];
      }
      let l = (e) => {
        let t = e.map((e) => i.xv[e]);
        return t.reduce((e, t) => (t.srep > e.srep ? t : e), s(i.Iy.NO_TIER));
      };
      function u(e) {
        let t = e.match(/^(https?:\/\/)/),
          n = t ? t[0] : "",
          i = e.replace(/^(https?:\/\/)/, ""),
          r = i.replace(/\/{2,}/g, "/");
        return n + r;
      }
    },
    27805: function (e, t, n) {
      "use strict";
      var i = n(52322),
        r = n(2784),
        a = n(72558),
        o = n(50592),
        s = n(58094),
        l = n(25237),
        u = n.n(l),
        c = n(6851),
        d = n(98614),
        p = n(67205),
        m = n(24136),
        f = n(9906),
        y = n(99351),
        h = n(82578),
        g = n(33649),
        v = n(72149),
        T = n(67187),
        w = n(77151),
        b = n(47004),
        x = n(6687),
        A = n(75402),
        S = n(88869);
      let N = u()(() => n.e(8251).then(n.bind(n, 8251)), {
        loadableGenerated: { webpack: () => [8251] },
        ssr: !1,
      });
      t.Z = (e) => {
        var t, n, l, u, E, I;
        let {
            address: R,
            poolId: O,
            token: _,
            active: C,
            poolConfig: j,
            stakeChecked: k,
            isMobile: D,
            currentNetwork: M,
          } = e,
          F = (0, f.pm)(),
          { t: L } = (0, d.$G)("common"),
          [, P] = (0, o.hQ)(),
          [B, U] = (0, r.useState)(!1),
          [G, H] = (0, r.useState)(""),
          [K, V] = (0, r.useState)(!1),
          { account: Z, chainId: $ } = (0, x.aF)(),
          q = j.chainId,
          Y = q !== $,
          { data: z, loading: W, error: X } = (0, y.n)(R, O, !0, q, M);
        if (X) return null;
        let J = !1;
        if (null == z ? void 0 : z.userInfo) {
          let { amount: e } = z.userInfo,
            t = null == z ? void 0 : z.pendingRewards;
          e && t && (J = new a.Z(e).plus(new a.Z(t)).isGreaterThan(0));
        }
        let Q =
            null !==
              (l = (0, g.dq)(
                null == z
                  ? void 0
                  : null === (t = z.userInfo) || void 0 === t
                  ? void 0
                  : t.amount,
                v.$j,
                !0
              )) && void 0 !== l
              ? l
              : 0,
          ee =
            null !==
              (u = (0, g.dq)(
                null == z ? void 0 : z.pendingRewards,
                v.$j,
                !0
              )) && void 0 !== u
              ? u
              : 0,
          et =
            C &&
            null !== (E = (0, g.dq)(null == z ? void 0 : z.apy, v.EP, !0)) &&
            void 0 !== E
              ? E
              : 0,
          en = {
            type: {
              key: "Type",
              label: L("TYPE"),
              value: v._B.UNBONDED,
              css: { ...P.typography.font250, color: P.colors.white },
              tooltip: p.s.vaults.typeUnbonded,
            },
            contract: {
              key: "Contract",
              label: L("CONTRACT"),
              value: (0, i.jsx)(A.Z, {
                address: R,
                sliceAddress: !0,
                poolChainId: q,
              }),
            },
            APR: {
              key: "APR",
              label: L("APR"),
              value: et ? "".concat(et, "%") : "...",
              tooltip: p.s.vaults.apr,
            },
            totalstake: {
              key: "Total Staked",
              label: L("TOTAL_STAKED"),
              value: (0, g.dq)(null == z ? void 0 : z.lpSupply, 2, !0),
            },
            stake: {
              key: "Staked",
              label: L("STAKED"),
              value: Q,
              css: {
                color: 0 !== Number(Q) ? P.colors.positive : P.colors.negative,
              },
            },
            earned: {
              key: "Earned",
              label: L("REWARDS"),
              value: ee,
              css: {
                color: 0 !== Number(ee) ? P.colors.positive : P.colors.negative,
              },
            },
          },
          ei = C ? v.ts.STAKE : J ? v.ts.CLAIM : v.ts.STAKE_CLOSED,
          er = async (e) => {
            try {
              if (!z) return;
              U(!0);
              let t = e ? await z.withdrawAndHarvest() : await z.harvest(),
                n = await t.wait();
              F({
                title: L("ERROR_MESSAGES.HARVEST_SUCCESSFUL"),
                description: "".concat(n.transactionHash),
                hash: n.transactionHash,
                type: "success",
              });
            } catch (t) {
              if (t instanceof h.B9) {
                F({
                  title: L("ERROR_MESSAGES.HARVEST_FAILED"),
                  description: "".concat(t.message),
                  type: "error",
                });
                return;
              }
              let e = (0, s.serializeError)(t);
              F({
                title: L("ERROR_MESSAGES.HARVEST_FAILED"),
                description: "Code: "
                  .concat(e.code, ", message: ")
                  .concat(e.message),
                type: "error",
              });
            } finally {
              U(!1);
            }
          },
          ea = async () => {
            try {
              let e = await z.closeAccount(),
                t = await e.wait();
              F({
                title: L("ERROR_MESSAGES.HARVEST_SUCCESSFUL"),
                description: "".concat(t.transactionHash),
                hash: t.transactionHash,
                type: "success",
              });
            } catch (t) {
              if (t instanceof h.B9) {
                F({
                  title: L("ERROR_MESSAGES.HARVEST_FAILED"),
                  description: "Insufficient Balance",
                  type: "error",
                });
                return;
              }
              let e = (0, s.serializeError)(t);
              F({
                title: L("ERROR_MESSAGES.HARVEST_FAILED"),
                description: "Code: "
                  .concat(e.code, " message: ")
                  .concat(e.message),
                type: "error",
              });
            }
          },
          eo = (e) => {
            var t;
            e.stopPropagation();
            let n =
              null == e
                ? void 0
                : null === (t = e.target) || void 0 === t
                ? void 0
                : t.innerText;
            n === v.ts.WITHDRAW
              ? (V(!0), H(v.ts.WITHDRAW))
              : n === v.ts.HARVEST
              ? er(!1)
              : n === v.ts.WITHDRAWHARVEST
              ? er(!0)
              : n === v.ts.STAKE
              ? (V(!0), H(v.ts.STAKE))
              : J && ea();
          };
        if (!(k && 0 >= Number(Q)))
          return (0, i.jsxs)(
            "div",
            {
              children: [
                W
                  ? (0, i.jsx)(c.Z, {
                      height: "450px",
                      width: "".concat(v.Zq, "px"),
                      animation: !0,
                    })
                  : (0, i.jsxs)(m.H, {
                      className: D ? "w-full" : v.vQ,
                      children: [
                        (0, i.jsx)(T.Z, {
                          tokens: _,
                          subtitle: "",
                          active: C,
                          poolChainId: q,
                        }),
                        (0, i.jsx)(w.Z, { listOptions: en }),
                        (0, i.jsx)(S.Z, {
                          buttonTitle: ei,
                          handleOnClick: eo,
                          poolChainId: q,
                          disabled: !Y && ((!C && !J) || B),
                        }),
                        Z && !Y
                          ? (0, i.jsx)(b.Z, {
                              handleOnClick: eo,
                              rewardToken: ee,
                              disabled: !1,
                              disableHarvest: !1,
                              harvesting: B,
                            })
                          : null,
                      ],
                    }),
                j &&
                  G &&
                  K &&
                  (0, i.jsx)(N, {
                    panelType: G,
                    poolConfig: j,
                    currentAPY: et,
                    rewardToken:
                      null !==
                        (I =
                          null == z
                            ? void 0
                            : null === (n = z.token) || void 0 === n
                            ? void 0
                            : n.rewardsTokenSymbol) && void 0 !== I
                        ? I
                        : "...",
                    stakeBalance: Q,
                    pendingRewards: ee,
                    toogleModal: () => {
                      V(!K);
                    },
                    isOpen: K,
                  }),
              ],
            },
            ""
              .concat(null == j ? void 0 : j.poolId, "-")
              .concat(null == j ? void 0 : j.poolAddress)
          );
      };
    },
    13966: function (e, t, n) {
      "use strict";
      n.d(t, {
        W: function () {
          return i;
        },
        b: function () {
          return r;
        },
      });
      let i = "0x0000000000000000000000000000000000000000",
        r = 12e3;
    },
    82578: function (e, t, n) {
      "use strict";
      n.d(t, {
        B9: function () {
          return i;
        },
        N2: function () {
          return r;
        },
        g7: function () {
          return a;
        },
      });
      class i extends Error {
        constructor(e = "Insufficient Balance") {
          super(e),
            (this.message = e),
            (this.name = "InsufficientBalanceError");
        }
      }
      class r extends Error {
        constructor(e = "Staking Pool Expired") {
          super(e), (this.message = e), (this.name = "StakingPoolExpiredError");
        }
      }
      class a extends Error {
        constructor(e = "Exceeding Max Limits") {
          super(e), (this.message = e), (this.name = "ExceedingMaxLimitsError");
        }
      }
    },
    27481: function (e, t, n) {
      "use strict";
      n.d(t, {
        A8: function () {
          return u;
        },
        DK: function () {
          return p;
        },
        Kc: function () {
          return c;
        },
        NH: function () {
          return l;
        },
        NZ: function () {
          return m;
        },
        VQ: function () {
          return d;
        },
        VR: function () {
          return o;
        },
        gV: function () {
          return s;
        },
        l$: function () {
          return f;
        },
      });
      var i = n(59567);
      let r = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        a = (e) => {
          if (e > 3 && e < 21) return "th";
          switch (e % 10) {
            case 1:
              return "st";
            case 2:
              return "nd";
            case 3:
              return "rd";
            default:
              return "th";
          }
        },
        o = function (e) {
          let t =
              !(arguments.length > 1) ||
              void 0 === arguments[1] ||
              arguments[1],
            n = navigator.language || navigator.languages[0],
            i = e.toLocaleDateString(n, {
              day: "numeric",
              month: "short",
              year: "numeric",
            }),
            r = e.toLocaleTimeString(n);
          return "".concat(i).concat(t ? " ".concat(r) : "");
        },
        s = (e) =>
          ""
            .concat(e.getDate())
            .concat(a(e.getDate()), " ")
            .concat(r[e.getMonth()], " ")
            .concat(e.getFullYear()),
        l = (e) =>
          ""
            .concat(e.getDate(), " ")
            .concat(r[e.getMonth()].slice(0, 3), " ")
            .concat(e.getFullYear()),
        u = (e) =>
          "".concat(r[e.getMonth()].slice(0, 3), " ").concat(e.getDate()),
        c = (e) =>
          ""
            .concat(r[e.getMonth()].slice(0, 3), " ")
            .concat(e.getDate(), " ")
            .concat(e.getFullYear()),
        d = (e) =>
          ""
            .concat(r[e.getUTCMonth()].slice(0, 3), " ")
            .concat(e.getUTCDate(), " ")
            .concat(e.getUTCFullYear(), " ")
            .concat(e.getUTCHours(), ":")
            .concat((0, i.B)(e.getUTCMinutes(), 2), " UTC");
      function p(e) {
        return new Date(m(e));
      }
      function m(e) {
        return 1e3 * e;
      }
      function f(e) {
        return Math.round(e / 1e3);
      }
    },
    96501: function (e, t, n) {
      "use strict";
      n.d(t, {
        N: function () {
          return s;
        },
      });
      var i = n(7040),
        r = n(45114),
        a = n(50068),
        o = n(13966);
      let s = (e) => {
        let t = (0, a.mA)(),
          n = (0, a.xx)(),
          {
            queryKey: s = [r.S.CHAIN_BLOCK, t.address || "", n],
            watch: l = !0,
          } = e || {},
          u = (0, a.t_)({ chainId: n });
        return (0, i.a)({
          queryKey: s,
          queryFn: async () => {
            let e = await u.getBlock();
            return {
              timestamp: 1e3 * Number(e.timestamp),
              number: Number(e.number),
            };
          },
          initialData: { number: 0, timestamp: Date.now() },
          refetchInterval: !!l && o.b,
        });
      };
    },
    30097: function (e, t, n) {
      "use strict";
      n.d(t, {
        R: function () {
          return r;
        },
      });
      var i = n(96501);
      function r() {
        let e = (0, i.N)({ watch: !0 });
        return { blockNumber: e.data.number };
      }
    },
    99351: function (e, t, n) {
      "use strict";
      n.d(t, {
        n: function () {
          return f;
        },
      });
      var i = n(2784),
        r = n(30171),
        a = n(72558),
        o = n(41148),
        s = n(39389),
        l = n(6687),
        u = n(33649),
        c = n(82578),
        d = n(9997),
        p = n(30097),
        m = n(31642);
      function f(e, t) {
        let n =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
          f = arguments.length > 3 ? arguments[3] : void 0,
          y = arguments.length > 4 ? arguments[4] : void 0,
          [h, g] = (0, i.useState)({
            loading: !1,
            data: void 0,
            error: void 0,
          }),
          { account: v, library: T, chainId: w } = (0, l.aF)(),
          { blockNumber: b } = (0, p.R)(),
          x = async () => {
            let i;
            try {
              i = await (0, m.U5)(y, v, T, f);
            } catch (e) {
              g({ ...h, loading: !1, error: e });
            }
            if (!e || !i || void 0 === t)
              return g({ ...h, loading: !1, error: void 0 });
            try {
              let l, p, y;
              let x = "",
                A = await (0, m.y5)(i.address, null != f ? f : w),
                S = new r.CH(e, s, A),
                [N, E, I] = await Promise.all([
                  S.poolInfo(t.toString()),
                  S.rewardsToken(),
                  S.lpToken(t.toString()),
                ]),
                R = new r.CH(I, o.Mt, A),
                O = new r.CH(E, o.Mt, A),
                [_, C, j, k] = await Promise.all([
                  R.symbol(),
                  R.decimals(),
                  O.symbol(),
                  O.decimals(),
                ]);
              if (v) {
                let n = await Promise.all([
                  S.userInfo(t.toString(), v),
                  S.pendingRewards(t.toString(), v),
                  R.allowance(v, e),
                  R.balanceOf(v),
                ]);
                (l = n[0]), (p = n[1]), (x = n[2]), (y = n[3]);
              }
              let D = n ? await (0, d.IS)(e, null != f ? f : w, t) : null,
                M = {
                  apy: D || "",
                  userInfo: l
                    ? {
                        amount: (0, u.UL)(l.amount.toString(), C, 1 / 0),
                        rewardDebt: (0, u.UL)(
                          l.rewardDebt.toString(),
                          k,
                          1 / 0
                        ),
                      }
                    : { amount: 0, rewardDebt: 0 },
                  pendingRewards: p ? (0, u.UL)(p.toString(), k, 1 / 0) : "0",
                  tokenPerBlock: (0, u.UL)(
                    N.tokenPerBlock.toString(),
                    k,
                    1 / 0
                  ),
                  lpSupply: (0, u.UL)(N.lpSupply.toString(), C, 1 / 0),
                  accRewardsPerShare: (0, u.UL)(
                    N.accRewardsPerShare.toString(),
                    k,
                    1 / 0
                  ),
                  lastRewardBlock: N.lastRewardBlock.toString(),
                  endOfEpochBlock: N.endOfEpochBlock.toString(),
                  token: {
                    lpTokenSymbol: _,
                    lpTokenDecimal: C,
                    rewardsTokenSymbol: j,
                    rewardsTokenDecimal: k,
                    allowance: (0, u.UL)(x.toString(), C, 1 / 0),
                  },
                  deposit: async (n) => {
                    if (b >= Number(N.endOfEpochBlock.toString()))
                      throw Error(
                        "The staking deadline has been expired. Can't deposit now!"
                      );
                    if (
                      ((n = (0, u.jE)(n.toString(), C, 0)),
                      (0, a.Z)(y.toString()).comparedTo(
                        (0, a.Z)(n.toString())
                      ) === u.Ym.LESSER)
                    )
                      throw new c.B9("Insufficient Balance for staking!");
                    let i = await T.getSigner(),
                      o = new r.CH(e, s, i);
                    return (0, d.F4)(
                      o,
                      "deposit",
                      await i.getGasPrice(),
                      t.toString(),
                      n,
                      v
                    );
                  },
                  withdraw: async (n) => {
                    var i, o;
                    if (
                      ((n = (0, u.jE)(n, C, 0)),
                      (!l &&
                        (0, u.Fr)(
                          null == l
                            ? void 0
                            : null === (i = l.amount) || void 0 === i
                            ? void 0
                            : i.toString()
                        )) ||
                        (0, a.Z)(
                          null == l
                            ? void 0
                            : null === (o = l.amount) || void 0 === o
                            ? void 0
                            : o.toString()
                        ).comparedTo(n) === u.Ym.LESSER)
                    )
                      throw new c.B9(
                        "There is no pending amount to withdraw or harvest"
                      );
                    let p = await T.getSigner(),
                      m = new r.CH(e, s, p);
                    return (0, d.F4)(
                      m,
                      "withdraw",
                      await p.getGasPrice(),
                      t.toString(),
                      n.toString(),
                      v
                    );
                  },
                  harvest: async () => {
                    if (!l || !p)
                      throw new c.B9("There is no pending rewards to harvest");
                    let n = new a.Z(p.toString()).plus(l.amount.toString());
                    if ((0, u.Fr)(n))
                      throw new c.B9("There is no pending rewards to harvest");
                    let i = v ? await T.getSigner() : T,
                      o = new r.CH(e, s, i);
                    return (0, d.F4)(
                      o,
                      "harvest",
                      await i.getGasPrice(),
                      t.toString(),
                      v
                    );
                  },
                  withdrawAndHarvest: async () => {
                    if (!l || !p)
                      throw new c.B9("There is no pending rewards to harvest");
                    let n = new a.Z(p.toString()).plus(l.amount.toString());
                    if ((0, u.Fr)(n))
                      throw new c.B9("There is no pending rewards to harvest");
                    let i = v ? await T.getSigner() : T,
                      o = new r.CH(e, s, i);
                    return (0, d.F4)(
                      o,
                      "withdrawAndHarvest",
                      await i.getGasPrice(),
                      t.toString(),
                      l.amount.toString(),
                      v
                    );
                  },
                  closeAccount: async () => {
                    if (!l || !p)
                      throw new c.B9(
                        "There is no pending amount to withdraw or harvest"
                      );
                    let n = v ? await T.getSigner() : T,
                      i = new r.CH(e, s, n);
                    if ((0, u.Fr)(l.amount.toString())) {
                      if ((0, u.Fr)(p.toString()))
                        throw new c.B9(
                          "There is no pending amount to withdraw or harvest"
                        );
                      return (0, d.F4)(
                        i,
                        "harvest",
                        await n.getGasPrice(),
                        t.toString(),
                        v
                      );
                    }
                    return (0, d.F4)(
                      i,
                      "withdrawAndHarvest",
                      await n.getGasPrice(),
                      t.toString(),
                      l.amount.toString(),
                      v
                    );
                  },
                };
              g({
                ...h,
                loading: !1,
                data: h.data ? { ...h.data, ...M } : M,
                error: void 0,
              });
            } catch (e) {
              g({ ...h, loading: !1, error: e });
            }
          };
        return (
          (0, i.useEffect)(() => {
            x();
          }, [e, v, T, y]),
          { ...h, refetch: x }
        );
      }
    },
    59567: function (e, t, n) {
      "use strict";
      function i(e, t) {
        return String(e).padStart(t, "0");
      }
      n.d(t, {
        B: function () {
          return i;
        },
      });
    },
    67131: function (e) {
      e.exports = {
        sectionCardBackground: "banner_sectionCardBackground__T20kb",
        fontFamily: "banner_fontFamily__bTkZK",
      };
    },
    79595: function (e) {
      e.exports = {
        card: "defaultCard_card__EhQOx",
        asiBanner: "defaultCard_asiBanner__cH4gC",
        fontFamily: "defaultCard_fontFamily__TzvEh",
      };
    },
  },
]);
