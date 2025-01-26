"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8355],
  {
    93370: function (t, e, n) {
      n.d(e, {
        m: function () {
          return d;
        },
      });
      var a = n(52322),
        r = n(78246),
        o = n(67438);
      n(2784);
      var c = n(98614),
        u = n(17129),
        i = n(50068),
        l = n(16270),
        s = n(31754);
      let d = () => {
        let { t } = (0, c.$G)("common"),
          e = (0, u.T)(),
          n = (0, i.mA)(),
          d = (0, s.Z)();
        return n.isConnected && d
          ? (0, a.jsx)(o.w, { button: { className: "bg-[#191A1E]" } })
          : (0, a.jsx)(r.z, {
              onClick: () => {
                e((0, l.ad)(!0));
              },
              children: t("HEADER.CONNECT_WALLET"),
            });
      };
    },
    62794: function (t, e, n) {
      n.d(e, {
        AG: function () {
          return h;
        },
        PR: function () {
          return N;
        },
        yj: function () {
          return S;
        },
        hQ: function () {
          return _;
        },
        v2: function () {
          return y;
        },
        ni: function () {
          return I;
        },
        f6: function () {
          return C;
        },
        c6: function () {
          return A;
        },
        Ut: function () {
          return m;
        },
      });
      var a = n(7040),
        r = n(62350),
        o = n(45114),
        c = n(89644),
        u = n.n(c),
        i = n(72149),
        l = n(78183);
      let s = new (class {
        async loadPoolList(t) {
          try {
            let e = await this.axiosInstance.get("/staking/v1/pools", {
              params: { depositTokenSymbol: t },
            });
            return e.data;
          } catch (t) {
            return l.Tb(t), [];
          }
        }
        async loadUserPoolInfo(t) {
          let { poolContractAddress: e, walletAddress: n, chainId: a } = t;
          try {
            let t = await this.axiosInstance.get(
              "/staking/v1/pools/deposit/"
                .concat(a, "/")
                .concat(e, "/")
                .concat(n)
            );
            return t.data;
          } catch (t) {
            throw (l.Tb(t), t);
          }
        }
        async loadDepositCalcInfo(t) {
          let {
            poolContractAddress: e,
            walletAddress: n,
            chainId: a,
            tokenAmount: r,
            lockedPeriod: o,
          } = t;
          try {
            let t = await this.axiosInstance.post(
              "/staking/v1/pools/deposit/"
                .concat(a, "/")
                .concat(e, "/")
                .concat(n),
              { sdao_input: r, seconds_locked: o }
            );
            return t.data;
          } catch (t) {
            throw (l.Tb(t), t);
          }
        }
        async loadFirstDepositCalcInfo(t) {
          let {
            poolContractAddress: e,
            walletAddress: n,
            chainId: a,
            tokenAmount: r,
            lockedPeriod: o,
          } = t;
          try {
            let t = await this.axiosInstance.post(
              "/staking/v1/pools/stake/"
                .concat(a, "/")
                .concat(e, "/")
                .concat(n),
              { sdao_input: r, seconds_locked: o }
            );
            return t.data;
          } catch (t) {
            throw (l.Tb(t), t);
          }
        }
        async loadExtendCalcInfo(t) {
          let {
            poolContractAddress: e,
            walletAddress: n,
            chainId: a,
            lockedPeriod: r,
          } = t;
          try {
            let t = await this.axiosInstance.post(
              "/staking/v1/pools/extend/"
                .concat(a, "/")
                .concat(e, "/")
                .concat(n),
              { seconds_locked: r }
            );
            return t.data;
          } catch (t) {
            throw (l.Tb(t), t);
          }
        }
        async loadStakingProjectDetails(t) {
          let { tokenSymbol: e } = t;
          try {
            let t = await this.axiosInstance.get(
              "/staking/v1/project/".concat(e)
            );
            return t.data;
          } catch (t) {
            throw (l.Tb(t), t);
          }
        }
        async loadWithdrawCalcInfo(t) {
          let {
            poolContractAddress: e,
            walletAddress: n,
            chainId: a,
            tokenAmount: r,
          } = t;
          try {
            let t = await this.axiosInstance.post(
              "/staking/v1/pools/withdraw/"
                .concat(a, "/")
                .concat(e, "/")
                .concat(n),
              { withdraw_sdao_amount: r }
            );
            return t.data;
          } catch (t) {
            throw (l.Tb(t), t);
          }
        }
        async updatePoolMetadata() {
          try {
            let t = await this.axiosInstance.post(
              "/staking/v1/pools/update-pool-metadata"
            );
            return t.data;
          } catch (t) {
            throw (l.Tb(t), t);
          }
        }
        async loadWalletSREP(t) {
          let { walletAddress: e } = t;
          try {
            let t = await this.axiosInstance.get(
              "/staking/v1/pools/rewards/".concat(e)
            );
            return t.data;
          } catch (t) {
            throw (l.Tb(t), t);
          }
        }
        constructor({ baseURL: t }) {
          this.axiosInstance = u().create({ baseURL: t });
        }
      })({ baseURL: i.uv });
      var d = n(94225),
        T = n(13966);
      function f(t, e) {
        return { ...(e || {}), ...(t || {}) };
      }
      let _ = (t, e) => {
          let { query: n } = t || {},
            r = f(n, { queryKey: [o.S.STAKING_POOL_LIST] });
          return (0, a.a)({
            ...r,
            queryFn: () => s.loadPoolList(e),
            cacheTime: 0,
            staleTime: 0,
          });
        },
        I = (t) => {
          let {
              poolContractAddress: e,
              walletAddress: n,
              chainId: r,
              query: c,
            } = t,
            u = f(c, {
              enabled: !0,
              keepPreviousData: !1,
              queryKey: [o.S.STAKING_POOL_USER_INFO, r, e, n],
              staleTime: T.b,
            });
          return (0, a.a)({
            ...u,
            queryFn: () =>
              s.loadUserPoolInfo({
                chainId: r,
                poolContractAddress: e,
                walletAddress: n,
              }),
          });
        },
        h = (t) => {
          let {
              poolContractAddress: e,
              walletAddress: n,
              chainId: r,
              lockedPeriod: c,
              tokenAmount: u,
              query: i,
            } = t,
            [l] = (0, d.Nr)(
              [o.S.STAKING_DEPOSIT_CALC_INFO, r, e, n, c, u].join("-"),
              500
            ),
            T = f(i, { keepPreviousData: !1, queryKey: [l] });
          return (0, a.a)({
            ...T,
            queryFn: () =>
              s.loadDepositCalcInfo({
                chainId: r,
                poolContractAddress: e,
                walletAddress: n,
                lockedPeriod: c,
                tokenAmount: u,
              }),
          });
        },
        S = (t) => {
          let {
              poolContractAddress: e,
              walletAddress: n,
              chainId: r,
              lockedPeriod: c,
              tokenAmount: u,
              query: i,
            } = t,
            [l] = (0, d.Nr)(
              [o.S.STAKING_DEPOSIT_CALC_INFO, r, e, n, c, u].join("-"),
              1e3
            ),
            T = f(i, { keepPreviousData: !1, queryKey: [l] });
          return (0, a.a)({
            ...T,
            queryFn: () =>
              s.loadFirstDepositCalcInfo({
                chainId: r,
                poolContractAddress: e,
                walletAddress: n,
                lockedPeriod: c,
                tokenAmount: u,
              }),
          });
        },
        N = (t) => {
          let {
              poolContractAddress: e,
              walletAddress: n,
              chainId: r,
              lockedPeriod: c,
              query: u,
            } = t,
            [i] = (0, d.Nr)(
              [o.S.STAKING_EXTEND_CALC_INFO, r, e, n, c].join("-"),
              500
            ),
            l = f(u, { queryKey: [i] });
          return (0, a.a)({
            ...l,
            queryFn: () =>
              s.loadExtendCalcInfo({
                chainId: r,
                poolContractAddress: e,
                walletAddress: n,
                lockedPeriod: c,
              }),
          });
        },
        C = (t) => {
          let {
              poolContractAddress: e,
              walletAddress: n,
              chainId: r,
              tokenAmount: c,
              query: u,
            } = t,
            [i] = (0, d.Nr)(
              [o.S.STAKING_WITHDRAW_CALC_INFO, r, e, n, c].join("-"),
              500
            ),
            l = f(u, { queryKey: [i], enabled: !0, keepPreviousData: !1 });
          return (0, a.a)({
            ...l,
            queryFn: () =>
              s.loadWithdrawCalcInfo({
                chainId: r,
                poolContractAddress: e,
                walletAddress: n,
                tokenAmount: c,
              }),
          });
        },
        y = (t) => {
          let { tokenSymbol: e, query: n } = t,
            r = f(n, { queryKey: [o.S.STAKING_PROJECT, e] });
          return (0, a.a)({
            ...r,
            queryFn: () =>
              s.loadStakingProjectDetails({
                tokenSymbol: e.toLocaleUpperCase(),
              }),
          });
        },
        m = (t) => {
          let { walletAddress: e, query: n } = t,
            r = f(n, {
              enabled: !0,
              queryKey: [o.S.WALLET_SREP, e],
              keepPreviousData: !1,
              staleTime: T.b,
            });
          return (0, a.a)({
            ...r,
            queryFn: () => s.loadWalletSREP({ walletAddress: e }),
          });
        },
        A = () => (0, r.D)({ mutationFn: () => s.updatePoolMetadata() });
    },
    28487: function (t, e, n) {
      n.d(e, {
        Q: function () {
          return r;
        },
      });
      var a = n(10528);
      function r(t) {
        let e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18;
        return a.O$.from(t).div(a.O$.from(10).pow(e)).div(86400);
      }
    },
    41704: function (t, e, n) {
      var a = n(52322);
      n(2784);
      var r = n(98614),
        o = n(57143),
        c = n(77926),
        u = n(28589),
        i = n(94862),
        l = n(6687),
        s = n(14013);
      e.Z = (t) => {
        let { button: e } = t,
          n = (0, s.d)(),
          { t: d } = (0, r.$G)("common"),
          { connect: T, account: f } = (0, l.aF)();
        return (0, a.jsx)(a.Fragment, {
          children: f
            ? null
            : (0, a.jsx)(a.Fragment, {
                children: (0, a.jsxs)(o.k.Root, {
                  children: [
                    (0, a.jsx)(o.k.Trigger, {
                      asChild: !0,
                      children:
                        e ||
                        (0, a.jsx)(u.x, {
                          id: "connectButton",
                          variant: "default",
                          variantStyle: "primary",
                          disabled: !1,
                          size: "small",
                          className: "font-bold",
                          children: d("CONNECT"),
                        }),
                    }),
                    (0, a.jsxs)(o.k.Content, {
                      variant: "unstyled",
                      className: "max-h-full bg-blue-700 text-white",
                      fullscreen: n,
                      children: [
                        (0, a.jsx)(o.k.Title, {
                          children: (0, a.jsx)(c.Uo.WalletHeader, { t: d }),
                        }),
                        (0, a.jsx)(o.k.Body, {
                          className: "my-0",
                          children: (0, a.jsx)(i.b, { connectWallet: T }),
                        }),
                        (0, a.jsx)(o.k.Close, {}),
                      ],
                    }),
                  ],
                }),
              }),
        });
      };
    },
    13966: function (t, e, n) {
      n.d(e, {
        W: function () {
          return a;
        },
        b: function () {
          return r;
        },
      });
      let a = "0x0000000000000000000000000000000000000000",
        r = 12e3;
    },
    45114: function (t, e, n) {
      var a, r;
      n.d(e, {
        S: function () {
          return a;
        },
      }),
        ((r = a || (a = {})).TOKEN_SUPPLY = "tokenSupply"),
        (r.TVL_PRICE = "tvlPrice"),
        (r.TOKEN_LOCKED = "tokenLocked"),
        (r.WHITELIST = "whitelist"),
        (r.WHITELIST_CLAIM = "whitelist_claim"),
        (r.TOTAL_SDAO_LOCKED = "totalSdaoLocked"),
        (r.LAUNCHPAD_INTEREST = "load_launchpad_interest"),
        (r.KYC_STATUS = "kyc_status"),
        (r.PROJECT_LIST = "PROJECT_LIST"),
        (r.TIER_POOL_LIST = "TIER_POOL_LIST"),
        (r.CHAIN_BLOCK = "CHAIN_BLOCK"),
        (r.PROJECT_DEPOSIT_DETAILS = "PROJECT_DEPOSIT_DETAILS"),
        (r.STAKING_POOL_LIST = "STAKING_POOL_LIST"),
        (r.STAKING_POOL_USER_INFO = "STAKING_POOL_USER_INFO"),
        (r.STAKING_DEPOSIT_CALC_INFO = "STAKING_DEPOSIT_CALC_INFO"),
        (r.STAKING_PROJECT_DETAILS = "STAKING_PROJECT_DETAILS"),
        (r.STAKING_EXTEND_CALC_INFO = "STAKING_EXTEND_CALC_INFO"),
        (r.STAKING_WITHDRAW_CALC_INFO = "STAKING_WITHDRAW_CALC_INFO"),
        (r.WALLET_SREP = "WALLET_SREP"),
        (r.STAKING_PROJECT = "STAKING_PROJECT");
    },
    65368: function (t, e, n) {
      function a(t) {
        return t > 1 ? "s" : "";
      }
      function r(t) {
        var e = Math.floor(Math.abs(t) / 1e3),
          n = Math.floor(e / 31536e3);
        if (n) return n + " year" + a(n);
        let r = (e %= 31536e3) / 86400;
        var o = Math.floor(r);
        let c = Math.floor((r - o) * 24);
        if (o)
          return (
            o +
            " day" +
            a(o) +
            (o > 0 ? " ".concat(c, " hour").concat(a(c)) : "")
          );
        c = Math.floor((r = (e %= 86400) / 3600));
        let u = Math.floor((r - c) * 60);
        if (c)
          return (
            c +
            " hour" +
            a(c) +
            (u > 0 ? " ".concat(u, " minute").concat(a(u)) : "")
          );
        if ((u = Math.floor((e %= 3600) / 60))) return u + " minute" + a(u);
        var i = e % 60;
        return i ? i + " second" + a(i) : "less than a second";
      }
      n.d(e, {
        BT: function () {
          return c;
        },
        G3: function () {
          return l;
        },
        Mm: function () {
          return u;
        },
        PS: function () {
          return d;
        },
        _v: function () {
          return o;
        },
        i8: function () {
          return s;
        },
        o6: function () {
          return i;
        },
        wW: function () {
          return r;
        },
      });
      let o = (t, e) => {
          let n = new Date(Number(t)),
            a = new Date(Number(e)),
            r = new Date();
          return r - n > 0 && r - a < 0;
        },
        c = (t) => {
          let e = new Date(Number(t)),
            n = new Date();
          return n - e > 0;
        },
        u = (t, e, n) => {
          let a = new Date(),
            c = t - a.getTime(),
            u = n - a.getTime();
          return 0 === Number(t + e + n)
            ? "Soon"
            : o(t, e)
            ? "".concat(r(e - a.getTime()))
            : c > 0
            ? "".concat(r(c))
            : u > 0
            ? "".concat(r(u))
            : "-";
        },
        i = (t, e) => {
          let n = new Date(Number(e)) - new Date(Number(t));
          return r(n);
        };
      function l(t) {
        return 86400 * t;
      }
      function s(t) {
        return t / 60 / 60 / 24;
      }
      function d(t) {
        return new Date(1e3 * t);
      }
    },
    27481: function (t, e, n) {
      n.d(e, {
        A8: function () {
          return l;
        },
        DK: function () {
          return T;
        },
        Kc: function () {
          return s;
        },
        NH: function () {
          return i;
        },
        NZ: function () {
          return f;
        },
        VQ: function () {
          return d;
        },
        VR: function () {
          return c;
        },
        gV: function () {
          return u;
        },
        l$: function () {
          return _;
        },
      });
      var a = n(59567);
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
        o = (t) => {
          if (t > 3 && t < 21) return "th";
          switch (t % 10) {
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
        c = function (t) {
          let e =
              !(arguments.length > 1) ||
              void 0 === arguments[1] ||
              arguments[1],
            n = navigator.language || navigator.languages[0],
            a = t.toLocaleDateString(n, {
              day: "numeric",
              month: "short",
              year: "numeric",
            }),
            r = t.toLocaleTimeString(n);
          return "".concat(a).concat(e ? " ".concat(r) : "");
        },
        u = (t) =>
          ""
            .concat(t.getDate())
            .concat(o(t.getDate()), " ")
            .concat(r[t.getMonth()], " ")
            .concat(t.getFullYear()),
        i = (t) =>
          ""
            .concat(t.getDate(), " ")
            .concat(r[t.getMonth()].slice(0, 3), " ")
            .concat(t.getFullYear()),
        l = (t) =>
          "".concat(r[t.getMonth()].slice(0, 3), " ").concat(t.getDate()),
        s = (t) =>
          ""
            .concat(r[t.getMonth()].slice(0, 3), " ")
            .concat(t.getDate(), " ")
            .concat(t.getFullYear()),
        d = (t) =>
          ""
            .concat(r[t.getUTCMonth()].slice(0, 3), " ")
            .concat(t.getUTCDate(), " ")
            .concat(t.getUTCFullYear(), " ")
            .concat(t.getUTCHours(), ":")
            .concat((0, a.B)(t.getUTCMinutes(), 2), " UTC");
      function T(t) {
        return new Date(f(t));
      }
      function f(t) {
        return 1e3 * t;
      }
      function _(t) {
        return Math.round(t / 1e3);
      }
    },
    96501: function (t, e, n) {
      n.d(e, {
        N: function () {
          return u;
        },
      });
      var a = n(7040),
        r = n(45114),
        o = n(50068),
        c = n(13966);
      let u = (t) => {
        let e = (0, o.mA)(),
          n = (0, o.xx)(),
          {
            queryKey: u = [r.S.CHAIN_BLOCK, e.address || "", n],
            watch: i = !0,
          } = t || {},
          l = (0, o.t_)({ chainId: n });
        return (0, a.a)({
          queryKey: u,
          queryFn: async () => {
            let t = await l.getBlock();
            return {
              timestamp: 1e3 * Number(t.timestamp),
              number: Number(t.number),
            };
          },
          initialData: { number: 0, timestamp: Date.now() },
          refetchInterval: !!i && c.b,
        });
      };
    },
    84328: function (t, e, n) {
      n.d(e, {
        J: function () {
          return o;
        },
        a: function () {
          return r;
        },
      });
      var a = n(2784);
      let r = (t, e) => {
          let n = new Date(t).getTime(),
            r = e || new Date().getTime(),
            [c, u] = (0, a.useState)(n - r);
          return (
            (0, a.useEffect)(() => {
              u(n - r);
            }, [t, e]),
            (0, a.useEffect)(() => {
              let t = setInterval(() => {
                u((t) => t - 1e3);
              }, 1e3);
              return () => clearInterval(t);
            }, [t, r]),
            o(c)
          );
        },
        o = (t) => [
          Math.floor(t / 864e5),
          Math.floor((t % 864e5) / 36e5),
          Math.floor((t % 36e5) / 6e4),
          Math.floor((t % 6e4) / 1e3),
        ];
    },
    59567: function (t, e, n) {
      n.d(e, {
        B: function () {
          return a;
        },
      });
      function a(t, e) {
        return String(t).padStart(e, "0");
      }
    },
  },
]);
