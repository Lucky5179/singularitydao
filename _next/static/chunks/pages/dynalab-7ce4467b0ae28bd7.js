(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8370],
  {
    33473: function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/dynalab",
        function () {
          return t(26370);
        },
      ]);
    },
    26370: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          __N_SSP: function () {
            return N;
          },
        });
      var s = t(52322),
        a = t(2784),
        c = t(6687),
        l = t(68299),
        i = t(26050),
        o = t(32244),
        r = t(7571),
        d = t(90955),
        u = t(53839),
        f = t(14013),
        _ = t(98614),
        m = t(6194);
      function x() {
        let e = (0, f.d)(),
          { t: n } = (0, _.$G)("common"),
          { account: t } = (0, c.aF)(),
          [d, u] = (0, a.useState)([]),
          { data: x } = (0, i.$S)(),
          N = (0, o.f)();
        return (
          (0, a.useEffect)(() => {
            if (x) {
              let e = x.dynaset.filter((e) => r.Y.includes(e.symbol));
              e && u(e);
            }
          }, [x]),
          (0, s.jsx)(m.D, {
            children: (0, s.jsxs)("section", {
              className: "my-5 flex flex-wrap",
              children: [
                (0, s.jsxs)("div", {
                  children: [
                    (0, s.jsx)("div", {
                      className: "pb-3 text-3xl font-bold text-white",
                      children: n("DYNALAB_BETA_DYNASETS"),
                    }),
                    (0, s.jsx)("div", {
                      className: "text-md mb-3 pb-2 text-white",
                      children: n("DYNALAB_BETA_DYNASETS_DESCRIPTION"),
                    }),
                  ],
                }),
                d.map((n, a) =>
                  (0, s.jsx)(
                    "div",
                    {
                      className: "".concat(e ? "w-full" : "mr-3", " mb-5"),
                      children: (0, s.jsx)(l.j, {
                        isMobile: e,
                        dynaset: n,
                        account: t,
                        route: "dynalab",
                        performance: N ? N[null == n ? void 0 : n.symbol] : [],
                      }),
                    },
                    "".concat(n.name, "-").concat(a)
                  )
                ),
              ],
            }),
          })
        );
      }
      x.SeoLayout = (0, s.jsx)(d.Z, { properties: u.Z.dynlab });
      var N = !0;
      n.default = x;
    },
  },
  function (e) {
    e.O(
      0,
      [
        7642, 8777, 171, 9188, 4936, 8701, 5527, 9722, 2143, 9593, 5059, 6190,
        4693, 9628, 3454, 700, 9774, 2888, 179,
      ],
      function () {
        return e((e.s = 33473));
      }
    ),
      (_N_E = e.O());
  },
]);
