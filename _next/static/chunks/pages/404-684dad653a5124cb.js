(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2197],
  {
    99133: function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/404",
        function () {
          return t(46829);
        },
      ]);
    },
    94213: function (e, n, t) {
      "use strict";
      var r = t(52322),
        l = t(5632);
      n.Z = () => {
        let e = (0, l.useRouter)();
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsxs)("div", {
            children: [
              (0, r.jsx)("h1", {
                className: "text-2xl font-bold text-white",
                children: "404",
              }),
              (0, r.jsx)("h4", {
                className: "mb-6 mt-3 text-sm font-normal text-[#B4BCD0]",
                children: "Oops, page not found.",
              }),
              (0, r.jsx)("button", {
                onClick: () => e.push("/"),
                className:
                  "rounded-3xl bg-blue-500 px-4 py-2 text-sm text-white",
                children: "Back to homepage",
              }),
            ],
          }),
        });
      };
    },
    46829: function (e, n, t) {
      "use strict";
      t.r(n);
      var r = t(52322);
      t(2784);
      var l = t(94213),
        c = t(21857);
      n.default = () => (0, r.jsx)(c.B, { children: (0, r.jsx)(l.Z, {}) });
    },
    21857: function (e, n, t) {
      "use strict";
      t.d(n, {
        B: function () {
          return m;
        },
      });
      var r = t(52322);
      t(2784);
      var l = t(14013),
        c = t(1232),
        s = t(12522),
        a = t(39097),
        o = t.n(a),
        i = t(78246),
        u = t(36854),
        h = t(98614),
        d = t(82857),
        x = t(77466);
      let f = () => {
        let { t: e } = (0, h.$G)("common");
        return (0, r.jsxs)(x._, {
          children: [
            (0, r.jsx)(i.z, {
              component: o(),
              style: "outline",
              href: u.e.urlBuySDAO,
              target: "_blank",
              children: e("HEADER.BUY_SDAO"),
            }),
           
            (0, r.jsxs)(i.z, {
              component: o(),
              href: "/staking/projects",
              className: "gap-2",
              children: [
                "Launch dApp",
                (0, r.jsx)(d.J, {
                  width: 24,
                  height: 24,
                  color: "#F7F8F8",
                  className: "rounded-full",
                  style: { backgroundColor: "#0D0C0D" },
                  icon: "arrow_top_right_outline",
                }),
              ],
            }),
          ],
        });
      };
      var p = t(91494);
      let m = (e) => {
        let { children: n } = e,
          t = (0, l.d)();
        return t
          ? (0, r.jsx)(s.n, { menu: (0, r.jsx)(p.v, {}), children: n })
          : (0, r.jsx)(c.S, {
              header: (0, r.jsx)(f, {}),
              sidebar: !1,
              breadcrumbs: !1,
              children: n,
            });
      };
    },
    91494: function (e, n, t) {
      "use strict";
      t.d(n, {
        v: function () {
          return x;
        },
      });
      var r = t(52322);
      t(2784);
      var l = t(12849),
        c = t(82876),
        s = t(41707),
        a = t(95180),
        o = t(39097),
        i = t.n(o),
        u = t(36854),
        h = t(78246),
        d = t(98614);
      let x = () => {
        let e = (0, c.usePathname)(),
          { t: n } = (0, d.$G)("common");
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
                s.s,
                {
                  label: n.label,
                  href: n.href,
                  target: n.target,
                  active: (0, l.zh)(n, e) && "/" !== n.href,
                  icon: (0, r.jsx)(a.Z, {
                    active: n.href && (0, l.zh)(n, e),
                    icon: n.icon,
                  }),
                  endEnhancer:
                    n.endIcon && !(0, l.zh)(n, e)
                      ? (0, r.jsx)(a.Z, {
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
              children: (0, r.jsx)(h.z, {
                component: i(),
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
  },
  function (e) {
    e.O(0, [7642, 8777, 6190, 9774, 2888, 179], function () {
      return e((e.s = 99133));
    }),
      (_N_E = e.O());
  },
]);
