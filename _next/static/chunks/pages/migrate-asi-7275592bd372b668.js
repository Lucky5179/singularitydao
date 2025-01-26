(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [108],
  {
    29252: function (e, t, l) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/migrate-asi",
        function () {
          return l(52e3);
        },
      ]);
    },
    52e3: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          __N_SSP: function () {
            return f;
          },
        });
      var r = l(52322),
        n = l(90955),
        a = l(53839),
        s = l(25237),
        o = l.n(s);
      l(2784);
      var i = l(98614),
        u = l(6194);
      let d = o()(
        () =>
          Promise.all([
            l.e(2182),
            l.e(3661),
            l.e(171),
            l.e(9384),
            l.e(4936),
            l.e(5527),
            l.e(2143),
            l.e(1014),
            l.e(9999),
            l.e(2879),
          ]).then(l.bind(l, 62879)),
        { loadableGenerated: { webpack: () => [62879] }, ssr: !1 }
      );
      function c() {
        let { t: e } = (0, i.$G)("common");
        return (0, r.jsx)(u.D, {
          children: (0, r.jsx)(d, {
            title: e("ASI_ALLIANCE"),
            description: e("MIGRATION_PHASE_1"),
            supportedTokens: "FET",
          }),
        });
      }
      c.SeoLayout = (0, r.jsx)(n.Z, { properties: a.Z.migrate });
      var f = !0;
      t.default = c;
    },
    6194: function (e, t, l) {
      "use strict";
      l.d(t, {
        D: function () {
          return k;
        },
      });
      var r = l(52322);
      l(2784);
      var n = l(14013),
        a = l(1232),
        s = l(12522),
        o = l(39097),
        i = l.n(o),
        u = l(78246),
        d = l(36854),
        c = l(98614),
        f = l(82857),
        h = l(77466),
        m = l(93370);
      let p = () => {
        let { t: e } = (0, c.$G)("common");
        return (0, r.jsxs)(h._, {
          children: [
            (0, r.jsx)(u.z, {
              component: i(),
              style: "outline",
              href: d.e.urlBuySDAO,
              target: "_blank",
              children: e("HEADER.BUY_SDAO"),
            }),
            (0, r.jsx)(m.m, {}),
          ],
        });
      };
      var _ = l(12849),
        b = l(82876),
        y = l(61135);
      let x = (e) => {
          let { children: t } = e;
          return (0, r.jsx)("div", {
            className: "pt-4",
            children: (0, r.jsx)("div", {
              className: "gap flex flex-col items-start",
              children: t,
            }),
          });
        },
        j = (e) => {
          let { children: t } = e;
          return (0, r.jsx)(y.Z, {
            className: "pb-1 text-xs text-[#A0ABBE]",
            children: t,
          });
        };
      var g = l(41707),
        v = l(95180),
        E = l(61335),
        w = l(20324);
      let A = (e) => {
        let { active: t, label: l, href: n, target: a } = e;
        return (0, r.jsx)("div", {
          className: "py-2 pl-9",
          children: (0, r.jsx)(i(), {
            href: n,
            target: a,
            children: (0, r.jsx)(y.Z, {
              className: (0, w.m6)(
                (0, E.cx)(
                  "inline-block text-sm text-[#B4BCD0]",
                  t && "text-[#CCA4FF]"
                )
              ),
              children: l,
            }),
          }),
        });
      };
      var C = l(3866);
      let N = () => {
          let e = (0, b.usePathname)(),
            { t } = (0, c.$G)("common"),
            l = (0, C.K)(t);
          return (0, r.jsx)("nav", {
            className: "flex flex-grow flex-col px-14 py-14",
            children: l.map((t, l) =>
              (0, r.jsxs)(
                x,
                {
                  children: [
                    t.label && (0, r.jsx)(j, { children: t.label }),
                    t.items.map((t) => {
                      var l;
                      return (0, r.jsx)(
                        g.s,
                        {
                          label: t.label,
                          href: t.href,
                          target: t.target,
                          active:
                            "/" !== t.href &&
                            ((t.href && (0, _.zh)(t, e)) ||
                              (t.items && (0, _.$M)(t.items, e))),
                          icon: (0, r.jsx)(v.Z, {
                            active:
                              (t.href && (0, _.zh)(t, e)) ||
                              (t.items && (0, _.$M)(t.items, e)),
                            icon: t.icon,
                          }),
                          endEnhancer: t.endIcon
                            ? (0, r.jsx)(v.Z, {
                                className: "ml-auto",
                                icon: t.endIcon,
                              })
                            : null,
                          children:
                            null === (l = t.items) || void 0 === l
                              ? void 0
                              : l.map((t) =>
                                  (0, r.jsx)(
                                    A,
                                    {
                                      active: (0, _.zh)(t, e),
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
                t.label + l
              )
            ),
          });
        },
        k = (e) => {
          let { children: t, sidebar: l = !0, breadcrumbs: o = !0 } = e,
            i = (0, n.d)();
          return i
            ? (0, r.jsx)(s.n, { menu: (0, r.jsx)(N, {}), children: t })
            : (0, r.jsx)(a.S, {
                header: (0, r.jsx)(p, {}),
                sidebar: l,
                breadcrumbs: o,
                children: t,
              });
        };
    },
    93370: function (e, t, l) {
      "use strict";
      l.d(t, {
        m: function () {
          return c;
        },
      });
      var r = l(52322),
        n = l(78246),
        a = l(67438);
      l(2784);
      var s = l(98614),
        o = l(17129),
        i = l(50068),
        u = l(16270),
        d = l(31754);
      let c = () => {
        let { t: e } = (0, s.$G)("common"),
          t = (0, o.T)(),
          l = (0, i.mA)(),
          c = (0, d.Z)();
        return l.isConnected && c
          ? (0, r.jsx)(a.w, { button: { className: "bg-[#191A1E]" } })
          : (0, r.jsx)(n.z, {
              onClick: () => {
                t((0, u.ad)(!0));
              },
              children: e("HEADER.CONNECT_WALLET"),
            });
      };
    },
    56164: function (e, t, l) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var l in t)
            Object.defineProperty(e, l, { enumerable: !0, get: t[l] });
        })(t, {
          noSSR: function () {
            return s;
          },
          default: function () {
            return o;
          },
        });
      let r = l(17653),
        n = (l(2784), r._(l(56890)));
      function a(e) {
        return { default: (null == e ? void 0 : e.default) || e };
      }
      function s(e, t) {
        return delete t.webpack, delete t.modules, e(t);
      }
      function o(e, t) {
        let l = n.default,
          r = {
            loading: (e) => {
              let { error: t, isLoading: l, pastDelay: r } = e;
              return null;
            },
          };
        e instanceof Promise
          ? (r.loader = () => e)
          : "function" == typeof e
          ? (r.loader = e)
          : "object" == typeof e && (r = { ...r, ...e }),
          (r = { ...r, ...t });
        let o = r.loader;
        return (r.loadableGenerated &&
          ((r = { ...r, ...r.loadableGenerated }), delete r.loadableGenerated),
        "boolean" != typeof r.ssr || r.ssr)
          ? l({
              ...r,
              loader: () =>
                null != o ? o().then(a) : Promise.resolve(a(() => null)),
            })
          : (delete r.webpack, delete r.modules, s(l, r));
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    73254: function (e, t, l) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "LoadableContext", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let r = l(17653),
        n = r._(l(2784)),
        a = n.default.createContext(null);
    },
    56890: function (e, t, l) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return h;
          },
        });
      let r = l(17653),
        n = r._(l(2784)),
        a = l(73254),
        s = [],
        o = [],
        i = !1;
      function u(e) {
        let t = e(),
          l = { loading: !0, loaded: null, error: null };
        return (
          (l.promise = t
            .then((e) => ((l.loading = !1), (l.loaded = e), e))
            .catch((e) => {
              throw ((l.loading = !1), (l.error = e), e);
            })),
          l
        );
      }
      class d {
        promise() {
          return this._res.promise;
        }
        retry() {
          this._clearTimeouts(),
            (this._res = this._loadFn(this._opts.loader)),
            (this._state = { pastDelay: !1, timedOut: !1 });
          let { _res: e, _opts: t } = this;
          e.loading &&
            ("number" == typeof t.delay &&
              (0 === t.delay
                ? (this._state.pastDelay = !0)
                : (this._delay = setTimeout(() => {
                    this._update({ pastDelay: !0 });
                  }, t.delay))),
            "number" == typeof t.timeout &&
              (this._timeout = setTimeout(() => {
                this._update({ timedOut: !0 });
              }, t.timeout))),
            this._res.promise
              .then(() => {
                this._update({}), this._clearTimeouts();
              })
              .catch((e) => {
                this._update({}), this._clearTimeouts();
              }),
            this._update({});
        }
        _update(e) {
          (this._state = {
            ...this._state,
            error: this._res.error,
            loaded: this._res.loaded,
            loading: this._res.loading,
            ...e,
          }),
            this._callbacks.forEach((e) => e());
        }
        _clearTimeouts() {
          clearTimeout(this._delay), clearTimeout(this._timeout);
        }
        getCurrentValue() {
          return this._state;
        }
        subscribe(e) {
          return (
            this._callbacks.add(e),
            () => {
              this._callbacks.delete(e);
            }
          );
        }
        constructor(e, t) {
          (this._loadFn = e),
            (this._opts = t),
            (this._callbacks = new Set()),
            (this._delay = null),
            (this._timeout = null),
            this.retry();
        }
      }
      function c(e) {
        return (function (e, t) {
          let l = Object.assign(
              {
                loader: null,
                loading: null,
                delay: 200,
                timeout: null,
                webpack: null,
                modules: null,
              },
              t
            ),
            r = null;
          function s() {
            if (!r) {
              let t = new d(e, l);
              r = {
                getCurrentValue: t.getCurrentValue.bind(t),
                subscribe: t.subscribe.bind(t),
                retry: t.retry.bind(t),
                promise: t.promise.bind(t),
              };
            }
            return r.promise();
          }
          if (!i) {
            let e = l.webpack ? l.webpack() : l.modules;
            e &&
              o.push((t) => {
                for (let l of e) if (t.includes(l)) return s();
              });
          }
          function u(e, t) {
            !(function () {
              s();
              let e = n.default.useContext(a.LoadableContext);
              e &&
                Array.isArray(l.modules) &&
                l.modules.forEach((t) => {
                  e(t);
                });
            })();
            let o = n.default.useSyncExternalStore(
              r.subscribe,
              r.getCurrentValue,
              r.getCurrentValue
            );
            return (
              n.default.useImperativeHandle(t, () => ({ retry: r.retry }), []),
              n.default.useMemo(() => {
                var t;
                return o.loading || o.error
                  ? n.default.createElement(l.loading, {
                      isLoading: o.loading,
                      pastDelay: o.pastDelay,
                      timedOut: o.timedOut,
                      error: o.error,
                      retry: r.retry,
                    })
                  : o.loaded
                  ? n.default.createElement(
                      (t = o.loaded) && t.default ? t.default : t,
                      e
                    )
                  : null;
              }, [e, o])
            );
          }
          return (
            (u.preload = () => s()),
            (u.displayName = "LoadableComponent"),
            n.default.forwardRef(u)
          );
        })(u, e);
      }
      function f(e, t) {
        let l = [];
        for (; e.length; ) {
          let r = e.pop();
          l.push(r(t));
        }
        return Promise.all(l).then(() => {
          if (e.length) return f(e, t);
        });
      }
      (c.preloadAll = () =>
        new Promise((e, t) => {
          f(s).then(e, t);
        })),
        (c.preloadReady = (e) => (
          void 0 === e && (e = []),
          new Promise((t) => {
            let l = () => ((i = !0), t());
            f(o, e).then(l, l);
          })
        )),
        (window.__NEXT_PRELOADREADY = c.preloadReady);
      let h = c;
    },
    25237: function (e, t, l) {
      e.exports = l(56164);
    },
  },
  function (e) {
    e.O(0, [7642, 8777, 6190, 9774, 2888, 179], function () {
      return e((e.s = 29252));
    }),
      (_N_E = e.O());
  },
]);
