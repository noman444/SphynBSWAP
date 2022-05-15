(this["webpackJsonpsphynx-frontend"] = this["webpackJsonpsphynx-frontend"] || []).push([
    [33], {
        1492: function(e, t, n) {
            "use strict";
            var r, c = n(44),
                a = n(8),
                o = n(7),
                i = (n(1), n(5)),
                s = n(25),
                l = n(524),
                u = n(83),
                d = { title: "Sphynx", description: "", image: "" },
                b = n(1497),
                j = n(0),
                p = ["children", "symbol"],
                f = Object(i.default)(b.a)(r || (r = Object(o.a)(["\n  width: 100%;\n  max-width: none;\n  min-height: calc(100vh - 117px);\n  padding: 0px 0px 16px 0px;\n\n  ", " {\n    padding: 10px 10px 24px 10px;\n  }\n\n  ", " {\n    padding: 15px 15px 32px 15px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm }), (function(e) { return e.theme.mediaQueries.lg })),
                x = function(e) {
                    e.symbol;
                    var t = Object(s.b)().t,
                        n = function(e, t) {
                            switch (e) {
                                case "/":
                                    return { title: "".concat(t("Home"), " | ").concat(t("Sphynx Token")) };
                                case "/competition":
                                    return { title: "".concat(t("Trading Battle"), " | ").concat(t("Sphynx Token")) };
                                case "/prediction":
                                    return { title: "".concat(t("Prediction"), " | ").concat(t("Sphynx Token")) };
                                case "/farms":
                                    return { title: "".concat(t("Farms"), " | ").concat(t("Sphynx Token")) };
                                case "/pools":
                                    return { title: "".concat(t("Pools"), " | ").concat(t("Sphynx Token")) };
                                case "/lottery":
                                    return { title: "".concat(t("Lottery"), " | ").concat(t("PancakeSwap")) };
                                case "/collectibles":
                                    return { title: "".concat(t("Collectibles"), " | ").concat(t("PancakeSwap")) };
                                case "/ifo":
                                    return { title: "".concat(t("Initial Farm Offering"), " | ").concat(t("PancakeSwap")) };
                                case "/teams":
                                    return { title: "".concat(t("Leaderboard"), " | ").concat(t("PancakeSwap")) };
                                case "/profile/tasks":
                                    return { title: "".concat(t("Task Center"), " | ").concat(t("PancakeSwap")) };
                                case "/profile":
                                    return { title: "".concat(t("Your Profile"), " | ").concat(t("PancakeSwap")) };
                                default:
                                    return null
                            }
                        }(Object(u.h)().pathname, t) || {},
                        r = Object(a.a)(Object(a.a)({}, d), n),
                        c = r.title,
                        o = r.description,
                        i = r.image;
                    return Object(j.jsxs)(l.a, { children: [Object(j.jsx)("meta", { property: "og:title", content: c }), Object(j.jsx)("meta", { property: "og:description", content: o }), Object(j.jsx)("meta", { property: "og:image", content: i })] })
                };
            t.a = function(e) {
                var t = e.children,
                    n = e.symbol,
                    r = Object(c.a)(e, p);
                return Object(j.jsxs)(j.Fragment, { children: [Object(j.jsx)(x, { symbol: n }), Object(j.jsx)(f, Object(a.a)(Object(a.a)({}, r), {}, { children: t }))] })
            }
        },
        1497: function(e, t, n) {
            "use strict";
            var r = n(8),
                c = n(44),
                a = (n(1), n(2)),
                o = n(0),
                i = ["children"];
            t.a = function(e) {
                var t = e.children,
                    n = Object(c.a)(e, i);
                return Object(o.jsx)(a.k, Object(r.a)(Object(r.a)({ px: ["16px", "24px"], mx: "auto", maxWidth: "1200px" }, n), {}, { children: t }))
            }
        },
        1830: function(e, t, n) {
            "use strict";
            n.r(t);
            var r, c, a, o = n(1),
                i = n.n(o),
                s = n(83),
                l = n(11),
                u = n(10),
                d = n(3),
                b = n.n(d),
                j = n(7),
                p = n(1482),
                f = n(110),
                x = n(325),
                m = function(e, t) { return e && t ? e - t : e || 0 },
                O = function(e, t) { return e && t ? (e - t) / t * 100 : 0 },
                h = function(e, t, n) {
                    var r = m(e, t),
                        c = m(t, n);
                    return [r, O(r, c)]
                },
                v = function(e, t, n) {
                    var r = e * x.i,
                        c = t * x.i,
                        a = e * x.b,
                        o = t * x.b,
                        i = n > 0 ? t * x.b * x.k * 100 / n : 0;
                    return { totalFees24h: r, totalFees7d: c, lpFees24h: a, lpFees7d: o, lpApr7d: i !== 1 / 0 ? i : 0 }
                },
                y = n(8),
                k = n(1817),
                g = n(1818),
                S = n(803),
                D = n(1348),
                w = n(14);
            ! function(e) { e[e.DAY = 0] = "DAY", e[e.WEEK = 1] = "WEEK", e[e.MONTH = 2] = "MONTH", e[e.YEAR = 3] = "YEAR" }(r || (r = {}));
            c = {}, Object(w.a)(c, r.DAY, 24), Object(w.a)(c, r.WEEK, 28), Object(w.a)(c, r.MONTH, 30), Object(w.a)(c, r.YEAR, 24), a = {}, Object(w.a)(a, r.DAY, null), Object(w.a)(a, r.WEEK, 6), Object(w.a)(a, r.MONTH, 1), Object(w.a)(a, r.YEAR, 15);
            var C, T, U, F = function(e) { if (e === f.e) return { "X-Sf": Object({ NODE_ENV: "production", PUBLIC_URL: "", WDS_SOCKET_HOST: void 0, WDS_SOCKET_PATH: void 0, WDS_SOCKET_PORT: void 0, FAST_REFRESH: !0, REACT_APP_NODES: '{"1":["https://speedy-nodes-nyc.moralis.io/fbb4b2b82993bf507eaaab13/eth/mainnet"],"4":["https://speedy-nodes-nyc.moralis.io/fbb4b2b82993bf507eaaab13/eth/rinkeby"], "56":["https://api.thesphynx.co/rpc","https://api.thesphynx.co/rpc","https://api.thesphynx.co/rpc"],"97":["https://speedy-nodes-nyc.moralis.io/480f9fd047ed15e4229e4547/bsc/testnet/archive","https://speedy-nodes-nyc.moralis.io/480f9fd047ed15e4229e4547/bsc/testnet/archive","https://speedy-nodes-nyc.moralis.io/480f9fd047ed15e4229e4547/bsc/testnet/archive"], "137":["https://speedy-nodes-nyc.moralis.io/fbb4b2b82993bf507eaaab13/polygon/mainnet/archive"], "80001":["https://speedy-nodes-nyc.moralis.io/fbb4b2b82993bf507eaaab13/polygon/mumbai"], "32520":["https://node.thesphynx.co/mainnet"], "64668":["https://node.thesphynx.co/testnet"], "25":["https://crnode.thesphynx.co"], "338": ["https://evm-t3.cronos.org/"]}', REACT_APP_BACKEND_API_URL2: "https://thesphynx.co/api2", REACT_APP_API_PROFILE: "https://profile.sphynxswap.com" }).REACT_APP_SF_HEADER } },
                A = function(e, t, n) { var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3e4; return Promise.race([n ? e.request(t, n) : e.request(t), new Promise((function(e, t) { setTimeout((function() { t(new Error("Request timed out after ".concat(r, " milliseconds"))) }), r) }))]) },
                I = function() {
                    var e = Object(l.a)(b.a.mark((function e(t, n, r) {
                        var c, a, o, i, s, l, u, d, j = arguments;
                        return b.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    c = j.length > 3 && void 0 !== j[3] ? j[3] : 1e3, a = {}, o = !1, i = 0, s = new p.GraphQLClient(r, { headers: F(r) }), e.prev = 5;
                                case 6:
                                    if (o) { e.next = 18; break }
                                    return l = n.length, i + c < n.length && (l = i + c), u = n.slice(i, l), e.next = 12, A(s, t(u));
                                case 12:
                                    d = e.sent, a = Object(y.a)(Object(y.a)({}, a), d), o = Object.keys(d).length < c || i + c > n.length, i += c, e.next = 6;
                                    break;
                                case 18:
                                    return e.abrupt("return", a);
                                case 21:
                                    return e.prev = 21, e.t0 = e.catch(5), console.error("Failed to fetch info data", e.t0), e.abrupt("return", null);
                                case 25:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [5, 21]
                        ])
                    })));
                    return function(t, n, r) { return e.apply(this, arguments) }
                }(),
                L = function() { var e = 1e3 * Object(k.a)(new Date); return [Object(k.a)(Object(g.a)(Object(S.default)(e, 1))), Object(k.a)(Object(g.a)(Object(S.default)(e, 2))), Object(k.a)(Object(g.a)(Object(D.default)(e, 1))), Object(k.a)(Object(g.a)(Object(D.default)(e, 2)))] },
                q = function(e) { return e.map((function(e) { return "t".concat(e, ":blocks(first: 1, orderBy: timestamp, orderDirection: desc, where: { timestamp_gt: ").concat(e, ", timestamp_lt: ").concat(e + 600, " }) {\n      number\n    }") })) },
                z = function(e) { return Object(p.gql)(C || (C = Object(j.a)(["query blocks {\n    ", "\n  }"])), e) },
                E = function() {
                    var e = Object(l.a)(b.a.mark((function e(t) {
                        var n, r, c, a, o, i, s, l, u = arguments;
                        return b.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (n = u.length > 1 && void 0 !== u[1] ? u[1] : "desc", r = u.length > 2 && void 0 !== u[2] ? u[2] : 500, 0 !== (null === t || void 0 === t ? void 0 : t.length)) { e.next = 4; break }
                                    return e.abrupt("return", []);
                                case 4:
                                    return e.next = 6, I(z, q(t), f.d, r);
                                case 6:
                                    if (c = e.sent, a = "desc" === n ? function(e, t) { return t.number - e.number } : function(e, t) { return e.number - t.number }, o = [], c) {
                                        for (i = 0, s = Object.keys(c); i < s.length; i++) l = s[i], c[l].length > 0 && o.push({ timestamp: l.split("t")[1], number: parseInt(c[l][0].number, 10) });
                                        o.sort(a)
                                    }
                                    return e.abrupt("return", o);
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }(),
                N = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "desc",
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3,
                        r = Object(o.useState)(),
                        c = Object(u.a)(r, 2),
                        a = c[0],
                        i = c[1],
                        s = Object(o.useState)(!1),
                        d = Object(u.a)(s, 2),
                        j = d[0],
                        p = d[1],
                        f = JSON.stringify(e),
                        x = a ? JSON.stringify(a) : void 0;
                    return Object(o.useEffect)((function() {
                        var e = function() {
                            var e = Object(l.a)(b.a.mark((function e() {
                                var r, c;
                                return b.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return r = JSON.parse(f), e.next = 3, E(r, t, n);
                                        case 3:
                                            0 === (c = e.sent).length ? p(!0) : i(c);
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() { return e.apply(this, arguments) }
                        }();
                        (x ? JSON.parse(x) : void 0) || j || e()
                    }), [x, j, n, t, f]), { blocks: a, error: j }
                },
                P = function() {
                    var e = Object(l.a)(b.a.mark((function e(t) {
                        var n, r;
                        return b.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, n = Object(p.gql)(T || (T = Object(j.a)(["query overview {\n      sphynxFactories(\n        ", " \n        first: 1) {\n        totalTransactions\n        totalVolumeUSD\n        totalLiquidityUSD\n      }\n    }"])), t ? "block: { number: ".concat(t, "}") : ""), e.next = 4, Object(p.request)(f.e, n);
                                case 4:
                                    return r = e.sent, e.abrupt("return", { data: r, error: !1 });
                                case 8:
                                    return e.prev = 8, e.t0 = e.catch(0), console.error("Failed to fetch info overview", e.t0), e.abrupt("return", { data: null, error: !0 });
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 8]
                        ])
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }(),
                B = function(e) { return e ? { totalTransactions: parseFloat(e.totalTransactions), totalVolumeUSD: parseFloat(e.totalVolumeUSD), totalLiquidityUSD: parseFloat(e.totalLiquidityUSD) } : null },
                $ = function() {
                    var e = Object(o.useState)({ error: !1 }),
                        t = Object(u.a)(e, 2),
                        n = t[0],
                        r = t[1],
                        c = L(),
                        a = Object(u.a)(c, 2),
                        i = a[0],
                        s = a[1],
                        d = N([i, s]),
                        j = d.blocks,
                        p = d.error,
                        f = null !== j && void 0 !== j ? j : [],
                        x = Object(u.a)(f, 2),
                        m = x[0],
                        v = x[1];
                    return Object(o.useEffect)((function() {
                        var e = function() {
                            var e = Object(l.a)(b.a.mark((function e() {
                                var t, n, c, a, o, i, s, l, d, j, p, f, x, y, k, g, S, D, w, C, T, U, F, A, I, L, q, z, E;
                                return b.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, P();
                                        case 2:
                                            return i = e.sent, s = i.error, l = i.data, e.next = 7, P(null !== (t = null === m || void 0 === m ? void 0 : m.number) && void 0 !== t ? t : void 0);
                                        case 7:
                                            return d = e.sent, j = d.error, p = d.data, e.next = 12, P(null !== (n = null === v || void 0 === v ? void 0 : v.number) && void 0 !== n ? n : void 0);
                                        case 12:
                                            f = e.sent, x = f.error, y = f.data, k = s || j || x, g = B(null === l || void 0 === l || null === (c = l.sphynxFactories) || void 0 === c ? void 0 : c[0]), S = B(null === p || void 0 === p || null === (a = p.sphynxFactories) || void 0 === a ? void 0 : a[0]), D = B(null === y || void 0 === y || null === (o = y.sphynxFactories) || void 0 === o ? void 0 : o[0]), w = g && S && D, k || !w ? r({ error: !0 }) : (C = h(g.totalVolumeUSD, S.totalVolumeUSD, D.totalVolumeUSD), T = Object(u.a)(C, 2), U = T[0], F = T[1], A = O(g.totalLiquidityUSD, S.totalLiquidityUSD), I = h(g.totalTransactions, S.totalTransactions, D.totalTransactions), L = Object(u.a)(I, 2), q = L[0], z = L[1], E = { volumeUSD: U, volumeUSDChange: "number" === typeof F ? F : 0, liquidityUSD: g.totalLiquidityUSD, liquidityUSDChange: A, txCount: q, txCountChange: z }, r({ error: !1, data: E }));
                                        case 21:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() { return e.apply(this, arguments) }
                        }();
                        !((null === m || void 0 === m ? void 0 : m.number) && (null === v || void 0 === v ? void 0 : v.number)) || p || n.data || e()
                    }), [m, v, p, n]), n
                };
            ! function(e) { e[e.SWAP = 0] = "SWAP", e[e.MINT = 1] = "MINT", e[e.BURN = 2] = "BURN" }(U || (U = {}));
            var V, M, W, H, R, _, Y, Q, K, G, J, X, Z, ee, te, ne, re, ce, ae, oe, ie, se, le, ue, de, be, je, pe, fe, xe, me, Oe, he, ve, ye, ke, ge, Se, De, we, Ce, Te, Ue, Fe, Ae, Ie, Le, qe, ze, Ee, Ne, Pe = function(e) { return { type: U.MINT, hash: e.id.split("-")[0], timestamp: e.timestamp, sender: e.to, token0Symbol: e.pair.token0.symbol, token1Symbol: e.pair.token1.symbol, token0Address: e.pair.token0.id, token1Address: e.pair.token1.id, amountUSD: parseFloat(e.amountUSD), amountToken0: parseFloat(e.amount0), amountToken1: parseFloat(e.amount1) } },
                Be = function(e) { return { type: U.BURN, hash: e.id.split("-")[0], timestamp: e.timestamp, sender: e.sender, token0Symbol: e.pair.token0.symbol, token1Symbol: e.pair.token1.symbol, token0Address: e.pair.token0.id, token1Address: e.pair.token1.id, amountUSD: parseFloat(e.amountUSD), amountToken0: parseFloat(e.amount0), amountToken1: parseFloat(e.amount1) } },
                $e = function(e) { return { type: U.SWAP, hash: e.id.split("-")[0], timestamp: e.timestamp, sender: e.from, token0Symbol: e.pair.token0.symbol, token1Symbol: e.pair.token1.symbol, token0Address: e.pair.token0.id, token1Address: e.pair.token1.id, amountUSD: parseFloat(e.amountUSD), amountToken0: parseFloat(e.amount0In) - parseFloat(e.amount0Out), amountToken1: parseFloat(e.amount1In) - parseFloat(e.amount1Out) } },
                Ve = function(e) { return { date: e.date, volumeUSD: parseFloat(e.dailyVolumeUSD), liquidityUSD: parseFloat(e.totalLiquidityUSD) } },
                Me = function(e) { return { date: e.date, volumeUSD: parseFloat(e.dailyVolumeUSD), liquidityUSD: parseFloat(e.reserveUSD) } },
                We = function() {
                    var e = Object(l.a)(b.a.mark((function e(t, n) {
                        var r, c, a, o, i, s, l, u, d, j, p, f, m, O, h, v;
                        return b.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    a = [], o = !1, i = 0, s = !1;
                                case 4:
                                    if (s) { e.next = 16; break }
                                    return e.next = 7, t(i, n);
                                case 7:
                                    l = e.sent, u = l.data, d = l.error, i += 1e3, s = u.length < 1e3, o = d, u && (a = a.concat(u)), e.next = 4;
                                    break;
                                case 16:
                                    if (!o && 0 !== a.length) { e.next = 18; break }
                                    return e.abrupt("return", { error: !0 });
                                case 18:
                                    for (j = a.reduce((function(e, t) { var n = parseInt((t.date / x.d).toFixed(0)); return Object(y.a)(Object(w.a)({}, n, t), e) }), {}), p = Object.keys(j).map((function(e) { return parseInt(e, 10) })), f = j[p[0]], m = null !== (r = null === f || void 0 === f ? void 0 : f.date) && void 0 !== r ? r : x.f, O = null !== (c = null === f || void 0 === f ? void 0 : f.liquidityUSD) && void 0 !== c ? c : 0, h = Object(k.a)(new Date); m < h - x.d;) m += x.d, v = parseInt((m / x.d).toFixed(0), 10), Object.keys(j).includes(v.toString()) ? O = j[v].liquidityUSD : j[v] = { date: m, volumeUSD: 0, liquidityUSD: O };
                                    return e.abrupt("return", { data: Object.values(j), error: !1 });
                                case 26:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) { return e.apply(this, arguments) }
                }(),
                He = Object(p.gql)(V || (V = Object(j.a)(["\n  query overviewCharts($startTime: Int!, $skip: Int!) {\n    sphynxDayDatas(first: 1000, skip: $skip, where: { date_gt: $startTime }, orderBy: date, orderDirection: asc) {\n      date\n      dailyVolumeUSD\n      totalLiquidityUSD\n    }\n  }\n"]))),
                Re = function() {
                    var e = Object(l.a)(b.a.mark((function e(t) {
                        var n, r, c;
                        return b.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, Object(p.request)(f.e, He, { startTime: x.f, skip: t });
                                case 3:
                                    return n = e.sent, r = n.sphynxDayDatas, c = r.map(Ve), e.abrupt("return", { data: c, error: !1 });
                                case 9:
                                    return e.prev = 9, e.t0 = e.catch(0), console.error("Failed to fetch overview chart data", e.t0), e.abrupt("return", { error: !0 });
                                case 13:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 9]
                        ])
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }(),
                _e = function() {
                    var e = Object(o.useState)(),
                        t = Object(u.a)(e, 2),
                        n = t[0],
                        r = t[1],
                        c = Object(o.useState)(!1),
                        a = Object(u.a)(c, 2),
                        i = a[0],
                        s = a[1];
                    return Object(o.useEffect)((function() {
                        var e = function() {
                            var e = Object(l.a)(b.a.mark((function e() {
                                var t, n;
                                return b.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, We(Re);
                                        case 2:
                                            t = e.sent, (n = t.data) ? r(n) : s(!0);
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() { return e.apply(this, arguments) }
                        }();
                        n || i || e()
                    }), [n, i]), { error: i, data: n }
                },
                Ye = n(33),
                Qe = Object(p.gql)(M || (M = Object(j.a)(["\n  query overviewTransactions {\n    mints: mints(first: 33, orderBy: timestamp, orderDirection: desc) {\n      id\n      timestamp\n      pair {\n        token0 {\n          id\n          symbol\n        }\n        token1 {\n          id\n          symbol\n        }\n      }\n      to\n      amount0\n      amount1\n      amountUSD\n    }\n    swaps: swaps(first: 33, orderBy: timestamp, orderDirection: desc) {\n      id\n      timestamp\n      pair {\n        token0 {\n          id\n          symbol\n        }\n        token1 {\n          id\n          symbol\n        }\n      }\n      from\n      amount0In\n      amount1In\n      amount0Out\n      amount1Out\n      amountUSD\n    }\n    burns: burns(first: 33, orderBy: timestamp, orderDirection: desc) {\n      id\n      timestamp\n      pair {\n        token0 {\n          id\n          symbol\n        }\n        token1 {\n          id\n          symbol\n        }\n      }\n      sender\n      amount0\n      amount1\n      amountUSD\n    }\n  }\n"]))),
                Ke = function() {
                    var e = Object(l.a)(b.a.mark((function e() {
                        var t, n, r, c;
                        return b.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, Object(p.request)(f.e, Qe);
                                case 3:
                                    if (t = e.sent) { e.next = 6; break }
                                    return e.abrupt("return", void 0);
                                case 6:
                                    return n = t.mints.map(Pe), r = t.burns.map(Be), c = t.swaps.map($e), e.abrupt("return", [].concat(Object(Ye.a)(n), Object(Ye.a)(r), Object(Ye.a)(c)).sort((function(e, t) { return parseInt(t.timestamp, 10) - parseInt(e.timestamp, 10) })));
                                case 12:
                                    return e.prev = 12, e.t0 = e.catch(0), e.abrupt("return", void 0);
                                case 15:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 12]
                        ])
                    })));
                    return function() { return e.apply(this, arguments) }
                }(),
                Ge = Ke,
                Je = function() {
                    var e = Object(l.a)(b.a.mark((function e(t) {
                        var n, r;
                        return b.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, n = Object(p.gql)(W || (W = Object(j.a)(["\n      query topPools($blacklist: [String!], $timestamp24hAgo: Int) {\n        pairDayDatas(\n          first: 30\n          where: { dailyTxns_gt: 10, token0_not_in: $blacklist, token1_not_in: $blacklist }\n          orderBy: dailyVolumeUSD\n          orderDirection: desc\n        ) {\n          id\n        }\n      }\n    "]))), e.next = 4, Object(p.request)(f.e, n, { blacklist: x.g, timestamp24hAgo: t });
                                case 4:
                                    return r = e.sent, e.abrupt("return", r.pairDayDatas.map((function(e) { return e.id.split("-")[0] })));
                                case 8:
                                    return e.prev = 8, e.t0 = e.catch(0), console.error("Failed to fetch top pools", e.t0), e.abrupt("return", []);
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 8]
                        ])
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }(),
                Xe = function() {
                    var e = Object(o.useState)([]),
                        t = Object(u.a)(e, 2),
                        n = t[0],
                        r = t[1],
                        c = L(),
                        a = Object(u.a)(c, 1)[0];
                    return Object(o.useEffect)((function() {
                        var e = function() {
                            var e = Object(l.a)(b.a.mark((function e() {
                                var t;
                                return b.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Je(a);
                                        case 2:
                                            t = e.sent, r(t);
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() { return e.apply(this, arguments) }
                        }();
                        0 === n.length && e()
                    }), [n, a]), n
                },
                Ze = function(e, t) {
                    var n = e ? "block: {number: ".concat(e, "}") : "",
                        r = '["'.concat(t.join('","'), '"]');
                    return "pairs(\n    where: { id_in: ".concat(r, " }\n    ").concat(n, "\n    orderBy: trackedReserveBNB\n    orderDirection: desc\n  ) {\n    id\n    reserve0\n    reserve1\n    reserveUSD\n    volumeUSD\n    token0Price\n    token1Price\n    token0 {\n      id\n      symbol\n      name\n    }\n    token1 {\n      id\n      symbol\n      name\n    }\n  }")
                },
                et = function() {
                    var e = Object(l.a)(b.a.mark((function e(t, n, r, c, a) {
                        var o, i;
                        return b.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, o = Object(p.gql)(H || (H = Object(j.a)(["\n      query pools {\n        now: ", "\n        oneDayAgo: ", "\n        twoDaysAgo: ", "\n        oneWeekAgo: ", "\n        twoWeeksAgo: ", "\n      }\n    "])), Ze(null, a), Ze(t, a), Ze(n, a), Ze(r, a), Ze(c, a)), e.next = 4, Object(p.request)(f.e, o);
                                case 4:
                                    return i = e.sent, e.abrupt("return", { data: i, error: !1 });
                                case 8:
                                    return e.prev = 8, e.t0 = e.catch(0), console.error("Failed to fetch pool data", e.t0), e.abrupt("return", { error: !0 });
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 8]
                        ])
                    })));
                    return function(t, n, r, c, a) { return e.apply(this, arguments) }
                }(),
                tt = function(e) {
                    return e ? e.reduce((function(e, t) {
                        var n = t.volumeUSD,
                            r = t.reserveUSD,
                            c = t.reserve0,
                            a = t.reserve1,
                            o = t.token0Price,
                            i = t.token1Price;
                        return e[t.id] = Object(y.a)(Object(y.a)({}, t), {}, { volumeUSD: parseFloat(n), reserveUSD: parseFloat(r), reserve0: parseFloat(c), reserve1: parseFloat(a), token0Price: parseFloat(o), token1Price: parseFloat(i) }), e
                    }), {}) : {}
                },
                nt = function(e) {
                    var t = Object(o.useState)({ error: !1 }),
                        n = Object(u.a)(t, 2),
                        r = n[0],
                        c = n[1],
                        a = L(),
                        i = Object(u.a)(a, 4),
                        s = i[0],
                        d = i[1],
                        j = i[2],
                        p = i[3],
                        f = N([s, d, j, p]),
                        x = f.blocks,
                        m = f.error,
                        y = null !== x && void 0 !== x ? x : [],
                        k = Object(u.a)(y, 4),
                        g = k[0],
                        S = k[1],
                        D = k[2],
                        w = k[3];
                    return Object(o.useEffect)((function() {
                        var t = function() {
                                var t = Object(l.a)(b.a.mark((function t() {
                                    var n, r, a, o, i, s, l, d, j;
                                    return b.a.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return t.next = 2, et(g.number, S.number, D.number, w.number, e);
                                            case 2:
                                                n = t.sent, r = n.error, a = n.data, r ? c({ error: !0 }) : (o = tt(null === a || void 0 === a ? void 0 : a.now), i = tt(null === a || void 0 === a ? void 0 : a.oneDayAgo), s = tt(null === a || void 0 === a ? void 0 : a.twoDaysAgo), l = tt(null === a || void 0 === a ? void 0 : a.oneWeekAgo), d = tt(null === a || void 0 === a ? void 0 : a.twoWeeksAgo), j = e.reduce((function(e, t) {
                                                    var n = o[t],
                                                        r = i[t],
                                                        c = s[t],
                                                        a = l[t],
                                                        b = d[t],
                                                        j = h(null === n || void 0 === n ? void 0 : n.volumeUSD, null === r || void 0 === r ? void 0 : r.volumeUSD, null === c || void 0 === c ? void 0 : c.volumeUSD),
                                                        p = Object(u.a)(j, 2),
                                                        f = p[0],
                                                        x = p[1],
                                                        m = h(null === n || void 0 === n ? void 0 : n.volumeUSD, null === a || void 0 === a ? void 0 : a.volumeUSD, null === b || void 0 === b ? void 0 : b.volumeUSD),
                                                        y = Object(u.a)(m, 2),
                                                        k = y[0],
                                                        g = y[1],
                                                        S = n ? n.reserveUSD : 0,
                                                        D = O(null === n || void 0 === n ? void 0 : n.reserveUSD, null === r || void 0 === r ? void 0 : r.reserveUSD),
                                                        w = n ? n.reserve0 : 0,
                                                        C = n ? n.reserve1 : 0,
                                                        T = v(f, k, S),
                                                        U = T.totalFees24h,
                                                        F = T.totalFees7d,
                                                        A = T.lpFees24h,
                                                        I = T.lpFees7d,
                                                        L = T.lpApr7d;
                                                    return n && (e[t] = { address: t, token0: { address: n.token0.id, name: n.token0.name, symbol: n.token0.symbol }, token1: { address: n.token1.id, name: n.token1.name, symbol: n.token1.symbol }, token0Price: n.token0Price, token1Price: n.token1Price, volumeUSD: f, volumeUSDChange: x, volumeUSDWeek: k, volumeUSDChangeWeek: g, totalFees24h: U, totalFees7d: F, lpFees24h: A, lpFees7d: I, lpApr7d: L, liquidityUSD: S, liquidityUSDChange: D, liquidityToken0: w, liquidityToken1: C }), e
                                                }), {}), c({ data: j, error: !1 }));
                                            case 6:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })));
                                return function() { return t.apply(this, arguments) }
                            }(),
                            n = (null === g || void 0 === g ? void 0 : g.number) && (null === S || void 0 === S ? void 0 : S.number) && (null === D || void 0 === D ? void 0 : D.number) && (null === w || void 0 === w ? void 0 : w.number);
                        e.length > 0 && n && !m && t()
                    }), [e, g, S, D, w, m]), r
                },
                rt = Object(p.gql)(R || (R = Object(j.a)(['\n  query prices($block24: Int!, $block48: Int!, $blockWeek: Int!) {\n    current: bundle(id: "1") {\n      bnbPrice\n    }\n    oneDay: bundle(id: "1", block: { number: $block24 }) {\n      bnbPrice\n    }\n    twoDay: bundle(id: "1", block: { number: $block48 }) {\n      bnbPrice\n    }\n    oneWeek: bundle(id: "1", block: { number: $blockWeek }) {\n      bnbPrice\n    }\n  }\n']))),
                ct = function() {
                    var e = Object(l.a)(b.a.mark((function e(t, n, r) {
                        var c, a, o, i, s, l, u, d, j;
                        return b.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, Object(p.request)(f.e, rt, { block24: t, block48: n, blockWeek: r });
                                case 3:
                                    return j = e.sent, e.abrupt("return", { error: !1, bnbPrices: { current: parseFloat(null !== (c = null === (a = j.current) || void 0 === a ? void 0 : a.bnbPrice) && void 0 !== c ? c : "0"), oneDay: parseFloat(null !== (o = null === (i = j.oneDay) || void 0 === i ? void 0 : i.bnbPrice) && void 0 !== o ? o : "0"), twoDay: parseFloat(null !== (s = null === (l = j.twoDay) || void 0 === l ? void 0 : l.bnbPrice) && void 0 !== s ? s : "0"), week: parseFloat(null !== (u = null === (d = j.oneWeek) || void 0 === d ? void 0 : d.bnbPrice) && void 0 !== u ? u : "0") } });
                                case 7:
                                    return e.prev = 7, e.t0 = e.catch(0), console.error("Failed to fetch BNB prices", e.t0), e.abrupt("return", { error: !0, bnbPrices: void 0 });
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 7]
                        ])
                    })));
                    return function(t, n, r) { return e.apply(this, arguments) }
                }(),
                at = function(e, t) {
                    var n = '["'.concat(t.join('","'), '"]'),
                        r = e ? "block: {number: ".concat(e, "}") : "";
                    return "tokens(\n      where: {id_in: ".concat(n, "}\n      ").concat(r, "\n      orderBy: tradeVolumeUSD\n      orderDirection: desc\n    ) {\n      id\n      symbol\n      name\n      derivedBNB\n      derivedUSD\n      tradeVolumeUSD\n      totalTransactions\n      totalLiquidity\n    }\n  ")
                },
                ot = function() {
                    var e = Object(l.a)(b.a.mark((function e(t, n, r, c, a) {
                        var o, i;
                        return b.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, o = Object(p.gql)(_ || (_ = Object(j.a)(["\n      query tokens {\n        now: ", "\n        oneDayAgo: ", "\n        twoDaysAgo: ", "\n        oneWeekAgo: ", "\n        twoWeeksAgo: ", "\n      }\n    "])), at(null, a), at(t, a), at(n, a), at(r, a), at(c, a)), e.next = 4, Object(p.request)(f.e, o);
                                case 4:
                                    return i = e.sent, e.abrupt("return", { data: i, error: !1 });
                                case 8:
                                    return e.prev = 8, e.t0 = e.catch(0), console.error("Failed to fetch token data", e.t0), e.abrupt("return", { error: !0 });
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 8]
                        ])
                    })));
                    return function(t, n, r, c, a) { return e.apply(this, arguments) }
                }(),
                it = function(e) {
                    return e ? e.reduce((function(e, t) {
                        var n = t.derivedBNB,
                            r = t.derivedUSD,
                            c = t.tradeVolumeUSD,
                            a = t.totalTransactions,
                            o = t.totalLiquidity;
                        return e[t.id] = Object(y.a)(Object(y.a)({}, t), {}, { derivedBNB: parseFloat(n), derivedUSD: parseFloat(r), tradeVolumeUSD: parseFloat(c), totalTransactions: parseFloat(a), totalLiquidity: parseFloat(o) }), e
                    }), {}) : {}
                },
                st = function(e) {
                    var t = Object(o.useState)({ error: !1 }),
                        n = Object(u.a)(t, 2),
                        r = n[0],
                        c = n[1],
                        a = L(),
                        i = Object(u.a)(a, 4),
                        s = i[0],
                        d = i[1],
                        j = i[2],
                        p = i[3],
                        f = N([s, d, j, p]),
                        x = f.blocks,
                        v = f.error,
                        y = null !== x && void 0 !== x ? x : [],
                        k = Object(u.a)(y, 4),
                        g = k[0],
                        S = k[1],
                        D = k[2],
                        w = k[3],
                        C = function() {
                            var e = Object(o.useState)(),
                                t = Object(u.a)(e, 2),
                                n = t[0],
                                r = t[1],
                                c = Object(o.useState)(!1),
                                a = Object(u.a)(c, 2),
                                i = a[0],
                                s = a[1],
                                d = L(),
                                j = Object(u.a)(d, 3),
                                p = j[0],
                                f = j[1],
                                x = j[2],
                                m = N([p, f, x]),
                                O = m.blocks,
                                h = m.error;
                            return Object(o.useEffect)((function() {
                                var e = function() {
                                    var e = Object(l.a)(b.a.mark((function e() {
                                        var t, n, c, a, o, i;
                                        return b.a.wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return t = Object(u.a)(O, 3), n = t[0], c = t[1], a = t[2], e.next = 3, ct(n.number, c.number, a.number);
                                                case 3:
                                                    o = e.sent, i = o.bnbPrices, o.error ? s(!0) : r(i);
                                                case 7:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })));
                                    return function() { return e.apply(this, arguments) }
                                }();
                                n || i || !O || h || e()
                            }), [i, n, O, h]), n
                        }();
                    return Object(o.useEffect)((function() {
                        var t = function() {
                                var t = Object(l.a)(b.a.mark((function t() {
                                    var n, r, a, o, i, s, l, d, j;
                                    return b.a.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return t.next = 2, ot(g.number, S.number, D.number, w.number, e);
                                            case 2:
                                                n = t.sent, r = n.error, a = n.data, r ? c({ error: !0 }) : (o = it(null === a || void 0 === a ? void 0 : a.now), i = it(null === a || void 0 === a ? void 0 : a.oneDayAgo), s = it(null === a || void 0 === a ? void 0 : a.twoDaysAgo), l = it(null === a || void 0 === a ? void 0 : a.oneWeekAgo), d = it(null === a || void 0 === a ? void 0 : a.twoWeeksAgo), j = e.reduce((function(e, t) {
                                                    var n = o[t],
                                                        r = i[t],
                                                        c = s[t],
                                                        a = l[t],
                                                        b = d[t],
                                                        j = h(null === n || void 0 === n ? void 0 : n.tradeVolumeUSD, null === r || void 0 === r ? void 0 : r.tradeVolumeUSD, null === c || void 0 === c ? void 0 : c.tradeVolumeUSD),
                                                        p = Object(u.a)(j, 2),
                                                        f = p[0],
                                                        x = p[1],
                                                        v = h(null === n || void 0 === n ? void 0 : n.tradeVolumeUSD, null === a || void 0 === a ? void 0 : a.tradeVolumeUSD, null === b || void 0 === b ? void 0 : b.tradeVolumeUSD),
                                                        y = Object(u.a)(v, 1)[0],
                                                        k = n ? n.totalLiquidity * n.derivedUSD : 0,
                                                        g = r ? r.totalLiquidity * r.derivedUSD : 0,
                                                        S = O(k, g),
                                                        D = n ? n.totalLiquidity : 0,
                                                        w = n ? n.derivedBNB * C.current : 0,
                                                        T = r ? r.derivedBNB * C.oneDay : 0,
                                                        U = a ? a.derivedBNB * C.week : 0,
                                                        F = O(w, T),
                                                        A = O(w, U),
                                                        I = m(null === n || void 0 === n ? void 0 : n.totalTransactions, null === r || void 0 === r ? void 0 : r.totalTransactions);
                                                    return e[t] = { exists: !!n, address: t, name: n ? n.name : "", symbol: n ? n.symbol : "", volumeUSD: f, volumeUSDChange: x, volumeUSDWeek: y, txCount: I, liquidityUSD: k, liquidityUSDChange: S, liquidityToken: D, priceUSD: w, priceUSDChange: F, priceUSDChangeWeek: A }, e
                                                }), {}), c({ data: j, error: !1 }));
                                            case 6:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })));
                                return function() { return t.apply(this, arguments) }
                            }(),
                            n = (null === g || void 0 === g ? void 0 : g.number) && (null === S || void 0 === S ? void 0 : S.number) && (null === D || void 0 === D ? void 0 : D.number) && (null === w || void 0 === w ? void 0 : w.number);
                        e.length > 0 && n && !v && C && t()
                    }), [e, g, S, D, w, v, C]), r
                },
                lt = function() {
                    var e = Object(l.a)(b.a.mark((function e(t) {
                        var n, r;
                        return b.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, n = Object(p.gql)(Y || (Y = Object(j.a)(["\n      query topTokens($blacklist: [String!], $timestamp24hAgo: Int) {\n        tokenDayDatas(\n          first: 30\n          where: { dailyTxns_gt: 5, id_not_in: $blacklist, date_gt: $timestamp24hAgo }\n          orderBy: dailyVolumeUSD\n          orderDirection: desc\n        ) {\n          id\n        }\n      }\n    "]))), e.next = 4, Object(p.request)(f.e, n, { blacklist: x.g, timestamp24hAgo: t });
                                case 4:
                                    return r = e.sent, e.abrupt("return", r.tokenDayDatas.map((function(e) { return e.id.split("-")[0] })));
                                case 8:
                                    return e.prev = 8, e.t0 = e.catch(0), console.error("Failed to fetch top tokens", e.t0), e.abrupt("return", []);
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 8]
                        ])
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }(),
                ut = function() {
                    var e = Object(o.useState)([]),
                        t = Object(u.a)(e, 2),
                        n = t[0],
                        r = t[1],
                        c = L(),
                        a = Object(u.a)(c, 4)[3];
                    return Object(o.useEffect)((function() {
                        var e = function() {
                            var e = Object(l.a)(b.a.mark((function e() {
                                var t;
                                return b.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, lt(a);
                                        case 2:
                                            t = e.sent, r(t);
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() { return e.apply(this, arguments) }
                        }();
                        0 === n.length && e()
                    }), [n, a]), n
                },
                dt = n(22),
                bt = n(1488),
                jt = n(1819),
                pt = n(41),
                ft = function() {
                    var e = Object(l.a)(b.a.mark((function e(t, n) {
                        var r, c, a, o;
                        return b.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, r = Object(p.gql)(Q || (Q = Object(j.a)(["\n      query pairDayDatas($startTime: Int!, $skip: Int!, $address: Bytes!) {\n        pairDayDatas(\n          first: 1000\n          skip: $skip\n          where: { pairAddress: $address, date_gt: $startTime }\n          orderBy: date\n          orderDirection: asc\n        ) {\n          date\n          dailyVolumeUSD\n          reserveUSD\n        }\n      }\n    "]))), e.next = 4, Object(p.request)(f.e, r, { startTime: x.f, skip: t, address: n });
                                case 4:
                                    return c = e.sent, a = c.pairDayDatas, o = a.map(Me), e.abrupt("return", { data: o, error: !1 });
                                case 10:
                                    return e.prev = 10, e.t0 = e.catch(0), console.error("Failed to fetch pool chart data", e.t0), e.abrupt("return", { error: !0 });
                                case 14:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 10]
                        ])
                    })));
                    return function(t, n) { return e.apply(this, arguments) }
                }(),
                xt = function() {
                    var e = Object(l.a)(b.a.mark((function e(t) {
                        return b.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", We(ft, t));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }(),
                mt = xt,
                Ot = Object(p.gql)(K || (K = Object(j.a)(["\n  query poolTransactions($address: Bytes!) {\n    mints(first: 35, orderBy: timestamp, orderDirection: desc, where: { pair: $address }) {\n      id\n      timestamp\n      pair {\n        token0 {\n          id\n          symbol\n        }\n        token1 {\n          id\n          symbol\n        }\n      }\n      to\n      amount0\n      amount1\n      amountUSD\n    }\n    swaps(first: 35, orderBy: timestamp, orderDirection: desc, where: { pair: $address }) {\n      id\n      timestamp\n      pair {\n        token0 {\n          id\n          symbol\n        }\n        token1 {\n          id\n          symbol\n        }\n      }\n      from\n      amount0In\n      amount1In\n      amount0Out\n      amount1Out\n      amountUSD\n    }\n    burns(first: 35, orderBy: timestamp, orderDirection: desc, where: { pair: $address }) {\n      id\n      timestamp\n      pair {\n        token0 {\n          id\n          symbol\n        }\n        token1 {\n          id\n          symbol\n        }\n      }\n      sender\n      amount0\n      amount1\n      amountUSD\n    }\n  }\n"]))),
                ht = function() {
                    var e = Object(l.a)(b.a.mark((function e(t) {
                        var n, r, c, a;
                        return b.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, Object(p.request)(f.e, Ot, { address: t });
                                case 3:
                                    return n = e.sent, r = n.mints.map(Pe), c = n.burns.map(Be), a = n.swaps.map($e), e.abrupt("return", { data: [].concat(Object(Ye.a)(r), Object(Ye.a)(c), Object(Ye.a)(a)), error: !1 });
                                case 10:
                                    return e.prev = 10, e.t0 = e.catch(0), console.error("Failed to fetch transactions for pool ".concat(t), e.t0), e.abrupt("return", { error: !0 });
                                case 14:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 10]
                        ])
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }(),
                vt = ht,
                yt = function() {
                    var e = Object(l.a)(b.a.mark((function e(t, n) {
                        var r, c, a, o;
                        return b.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, r = Object(p.gql)(G || (G = Object(j.a)(["\n      query tokenDayDatas($startTime: Int!, $skip: Int!, $address: Bytes!) {\n        tokenDayDatas(\n          first: 1000\n          skip: $skip\n          where: { token: $address, date_gt: $startTime }\n          orderBy: date\n          orderDirection: asc\n        ) {\n          date\n          dailyVolumeUSD\n          totalLiquidityUSD\n        }\n      }\n    "]))), e.next = 4, Object(p.request)(f.e, r, { startTime: x.f, skip: t, address: n });
                                case 4:
                                    return c = e.sent, a = c.tokenDayDatas, o = a.map(Ve), e.abrupt("return", { data: o, error: !1 });
                                case 10:
                                    return e.prev = 10, e.t0 = e.catch(0), console.error("Failed to fetch token chart data", e.t0), e.abrupt("return", { error: !0 });
                                case 14:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 10]
                        ])
                    })));
                    return function(t, n) { return e.apply(this, arguments) }
                }(),
                kt = function() {
                    var e = Object(l.a)(b.a.mark((function e(t) {
                        return b.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", We(yt, t));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }(),
                gt = kt,
                St = Object(p.gql)(J || (J = Object(j.a)(["\n  query tokenTransactions {\n    mintsAs0: mints(first: 30, orderBy: timestamp, orderDirection: desc) {\n      id\n      timestamp\n      pair {\n        token0 {\n          id\n          symbol\n        }\n        token1 {\n          id\n          symbol\n        }\n      }\n      to\n      amount0\n      amount1\n      amountUSD\n    }\n    mintsAs1: mints(first: 30, orderBy: timestamp, orderDirection: desc) {\n      id\n      timestamp\n      pair {\n        token0 {\n          id\n          symbol\n        }\n        token1 {\n          id\n          symbol\n        }\n      }\n      to\n      amount0\n      amount1\n      amountUSD\n    }\n    swapsAs0: swaps(first: 30, orderBy: timestamp, orderDirection: desc) {\n      id\n      timestamp\n      pair {\n        token0 {\n          id\n          symbol\n        }\n        token1 {\n          id\n          symbol\n        }\n      }\n      from\n      amount0In\n      amount1In\n      amount0Out\n      amount1Out\n      amountUSD\n    }\n    swapsAs1: swaps(first: 30, orderBy: timestamp, orderDirection: desc) {\n      id\n      timestamp\n      pair {\n        token0 {\n          id\n          symbol\n        }\n        token1 {\n          id\n          symbol\n        }\n      }\n      from\n      amount0In\n      amount1In\n      amount0Out\n      amount1Out\n      amountUSD\n    }\n    burnsAs0: burns(first: 30, orderBy: timestamp, orderDirection: desc) {\n      id\n      timestamp\n      pair {\n        token0 {\n          id\n          symbol\n        }\n        token1 {\n          id\n          symbol\n        }\n      }\n      sender\n      amount0\n      amount1\n      amountUSD\n    }\n    burnsAs1: burns(first: 30, orderBy: timestamp, orderDirection: desc) {\n      id\n      timestamp\n      pair {\n        token0 {\n          id\n          symbol\n        }\n        token1 {\n          id\n          symbol\n        }\n      }\n      sender\n      amount0\n      amount1\n      amountUSD\n    }\n  }\n"]))),
                Dt = function() {
                    var e = Object(l.a)(b.a.mark((function e(t) {
                        var n, r, c, a, o, i, s;
                        return b.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, Object(p.request)(f.e, St);
                                case 3:
                                    return n = e.sent, r = n.mintsAs0.map(Pe).filter((function(e) { return e.token0Address === t })), c = n.mintsAs1.map(Pe).filter((function(e) { return e.token0Address === t })), a = n.burnsAs0.map(Be).filter((function(e) { return e.token0Address === t })), o = n.burnsAs1.map(Be).filter((function(e) { return e.token0Address === t })), i = n.swapsAs0.map($e).filter((function(e) { return e.token0Address === t })), s = n.swapsAs1.map($e).filter((function(e) { return e.token0Address === t })), e.abrupt("return", { data: [].concat(Object(Ye.a)(r), Object(Ye.a)(c), Object(Ye.a)(a), Object(Ye.a)(o), Object(Ye.a)(i), Object(Ye.a)(s)), error: !1 });
                                case 13:
                                    return e.prev = 13, e.t0 = e.catch(0), console.error("Failed to fetch transactions for token ".concat(t), e.t0), e.abrupt("return", { error: !0 });
                                case 17:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 13]
                        ])
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }(),
                wt = Dt,
                Ct = function(e, t) { return t.map((function(t) { return "\n      t".concat(t.timestamp, ':token(id:"').concat(e, '", block: { number: ').concat(t.number, " }) { \n        derivedBNB\n      }\n      b").concat(t.timestamp, ': bundle(id:"1", block: { number: ').concat(t.number, " }) { \n        bnbPrice\n      }\n    ") })) },
                Tt = function(e) { return Object(p.gql)(X || (X = Object(j.a)(["\n    query tokenPriceData {\n      ", "\n    }\n  "])), e) },
                Ut = function() {
                    var e = Object(l.a)(b.a.mark((function e(t, n, r) {
                        var c, a, o, i, s, l, u, d;
                        return b.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    for (c = Object(k.a)(new Date), a = [], o = r; o <= c;) a.push(o), o += n;
                                    return e.prev = 4, e.next = 7, E(a, "asc", 500);
                                case 7:
                                    if ((i = e.sent) && 0 !== i.length) { e.next = 11; break }
                                    return console.error("Error fetching blocks for timestamps", a), e.abrupt("return", { error: !1 });
                                case 11:
                                    return e.next = 13, I(Tt, Ct(t, i), f.e, 200);
                                case 13:
                                    if (s = e.sent) { e.next = 17; break }
                                    return console.error("Price data failed to load"), e.abrupt("return", { error: !1 });
                                case 17:
                                    for (l = [], Object.keys(s).forEach((function(e) {
                                            var t, n = e.split("t")[1];
                                            n && l.push({ timestamp: n, derivedBNB: null !== (t = s[e]) && void 0 !== t && t.derivedBNB ? parseFloat(s[e].derivedBNB) : 0, priceUSD: 0 })
                                        })), Object.keys(s).forEach((function(e) {
                                            var t = e.split("b")[1];
                                            if (t) {
                                                var n = l.findIndex((function(e) { return e.timestamp === t }));
                                                if (n >= 0) {
                                                    var r, c, a = l[n].derivedBNB;
                                                    l[n].priceUSD = parseFloat(null !== (r = null === (c = s[e]) || void 0 === c ? void 0 : c.bnbPrice) && void 0 !== r ? r : 0) * a
                                                }
                                            }
                                        })), l.sort((function(e, t) { return parseInt(e.timestamp, 10) - parseInt(t.timestamp, 10) })), u = [], d = 0; d < l.length - 1; d++) u.push({ time: parseFloat(l[d].timestamp), open: l[d].priceUSD, close: l[d + 1].priceUSD, high: l[d + 1].priceUSD, low: l[d].priceUSD });
                                    return e.abrupt("return", { data: u, error: !1 });
                                case 26:
                                    return e.prev = 26, e.t0 = e.catch(4), console.error("Failed to fetch price data for token ".concat(t), e.t0), e.abrupt("return", { error: !0 });
                                case 30:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [4, 26]
                        ])
                    })));
                    return function(t, n, r) { return e.apply(this, arguments) }
                }(),
                Ft = Ut,
                At = Object(p.gql)(Z || (Z = Object(j.a)(["\n  query poolsForToken($address: Bytes!, $blacklist: [String!]) {\n    asToken0: pairs(\n      first: 15\n      orderBy: trackedReserveBNB\n      orderDirection: desc\n      where: { totalTransactions_gt: 100, token0: $address, token1_not_in: $blacklist }\n    ) {\n      id\n    }\n    asToken1: pairs(\n      first: 15\n      orderBy: trackedReserveBNB\n      orderDirection: desc\n      where: { totalTransactions_gt: 100, token1: $address, token0_not_in: $blacklist }\n    ) {\n      id\n    }\n  }\n"]))),
                It = function() {
                    var e = Object(l.a)(b.a.mark((function e(t) {
                        var n;
                        return b.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, Object(p.request)(f.e, At, { address: t, blacklist: x.g });
                                case 3:
                                    return n = e.sent, e.abrupt("return", { error: !1, addresses: n.asToken0.concat(n.asToken1).map((function(e) { return e.id })) });
                                case 7:
                                    return e.prev = 7, e.t0 = e.catch(0), console.error("Failed to fetch pools for token ".concat(t), e.t0), e.abrupt("return", { error: !0 });
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 7]
                        ])
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }(),
                Lt = It,
                qt = n(144),
                zt = function() {
                    var e = Object(dt.c)((function(e) { return e.info.protocol.overview })),
                        t = Object(dt.b)();
                    return [e, Object(o.useCallback)((function(e) { return t(Object(qt.h)({ protocolData: e })) }), [t])]
                },
                Et = function() {
                    var e = Object(dt.c)((function(e) { return e.info.protocol.chartData })),
                        t = Object(dt.b)();
                    return [e, Object(o.useCallback)((function(e) { return t(Object(qt.g)({ chartData: e })) }), [t])]
                },
                Nt = function() {
                    var e = Object(dt.c)((function(e) { return e.info.protocol.transactions })),
                        t = Object(dt.b)();
                    return [e, Object(o.useCallback)((function(e) { return t(Object(qt.i)({ transactions: e })) }), [t])]
                },
                Pt = function() { return Object(dt.c)((function(e) { return e.info.pools.byAddress })) },
                Bt = function() { var e = Object(dt.b)(); return Object(o.useCallback)((function(t) { return e(Object(qt.a)({ poolAddresses: t })) }), [e]) },
                $t = function(e) {
                    var t = Pt(),
                        n = Bt(),
                        r = e.reduce((function(e, n) { return Object.keys(t).includes(n) || e.push(n), e }), []);
                    return Object(o.useEffect)((function() { r && n(r) }), [n, r]), e.map((function(e) { var n; return null === (n = t[e]) || void 0 === n ? void 0 : n.data })).filter((function(e) { return e }))
                },
                Vt = function() { return Object(dt.c)((function(e) { return e.info.tokens.byAddress })) },
                Mt = function() { var e = Object(dt.b)(); return Object(o.useCallback)((function(t) { return e(Object(qt.b)({ tokenAddresses: t })) }), [e]) },
                Wt = function(e) {
                    var t = Vt(),
                        n = Mt();
                    return null === e || void 0 === e || e.forEach((function(e) { t[e] || n([e]) })), Object(o.useMemo)((function() { if (e) return e.map((function(e) { var n; return null === (n = t[e]) || void 0 === n ? void 0 : n.data })).filter((function(e) { return e })) }), [e, t])
                },
                Ht = function() {
                    var e = zt(),
                        t = Object(u.a)(e, 2),
                        n = t[0],
                        r = t[1],
                        c = $(),
                        a = c.data,
                        i = c.error,
                        s = Et(),
                        d = Object(u.a)(s, 2),
                        j = d[0],
                        p = d[1],
                        f = _e(),
                        x = f.data,
                        m = f.error,
                        O = Nt(),
                        h = Object(u.a)(O, 2),
                        v = h[0],
                        y = h[1];
                    return Object(o.useEffect)((function() { void 0 === n && a && !i && r(a) }), [i, a, n, r]), Object(o.useEffect)((function() { void 0 === j && x && !m && p(x) }), [j, m, x, p]), Object(o.useEffect)((function() {
                        var e = function() {
                            var e = Object(l.a)(b.a.mark((function e() {
                                var t;
                                return b.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Ge();
                                        case 2:
                                            (t = e.sent) && y(t);
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() { return e.apply(this, arguments) }
                        }();
                        v || e()
                    }), [v, y]), null
                },
                Rt = function() {
                    var e = function() { var e = Object(dt.b)(); return Object(o.useCallback)((function(t) { return e(Object(qt.e)({ pools: t })) }), [e]) }(),
                        t = Bt(),
                        n = Pt(),
                        r = Xe();
                    Object(o.useEffect)((function() { r.length > 0 && t(r) }), [t, r]);
                    var c = Object(o.useMemo)((function() { return Object.keys(n).reduce((function(e, t) { return n[t].data || e.push(t), e }), []) }), [n]),
                        a = nt(c),
                        i = a.error,
                        s = a.data;
                    return Object(o.useEffect)((function() { s && !i && e(Object.values(s)) }), [i, s, e]), null
                },
                _t = function() {
                    var e = function() { var e = Object(dt.b)(); return Object(o.useCallback)((function(t) { e(Object(qt.k)({ tokens: t })) }), [e]) }(),
                        t = Mt(),
                        n = Vt(),
                        r = ut();
                    Object(o.useEffect)((function() { r.length > 0 && t(r) }), [t, r]);
                    var c = Object(o.useMemo)((function() { return Object.keys(n).reduce((function(e, t) { return n[t].data || e.push(t), e }), []) }), [n]),
                        a = st(c),
                        i = a.error,
                        s = a.data;
                    return Object(o.useEffect)((function() { s && !i && e(Object.values(s)) }), [i, s, e]), null
                },
                Yt = n(5),
                Qt = n(80),
                Kt = n(2),
                Gt = n(25),
                Jt = Object(p.gql)(ee || (ee = Object(j.a)(["\n  query tokens($symbol: String, $name: String, $id: String) {\n    asSymbol: tokens(first: 10, where: { symbol_contains: $symbol }, orderBy: tradeVolumeUSD, orderDirection: desc) {\n      id\n    }\n    asName: tokens(first: 10, where: { name_contains: $name }, orderBy: tradeVolumeUSD, orderDirection: desc) {\n      id\n    }\n    asAddress: tokens(first: 1, where: { id: $id }, orderBy: tradeVolumeUSD, orderDirection: desc) {\n      id\n    }\n  }\n"]))),
                Xt = Object(p.gql)(te || (te = Object(j.a)(["\n  query pools($tokens: [Bytes]!, $id: String) {\n    as0: pairs(first: 10, where: { token0_in: $tokens }) {\n      id\n    }\n    as1: pairs(first: 10, where: { token1_in: $tokens }) {\n      id\n    }\n    asAddress: pairs(first: 1, where: { id: $id }) {\n      id\n    }\n  }\n"]))),
                Zt = function(e) { var t = e.reduce((function(e, t) { return [].concat(Object(Ye.a)(e), Object(Ye.a)(t)) }), []).map((function(e) { return e.id })); return Array.from(new Set(t)) },
                en = function(e) {
                    var t = Object(o.useState)({ tokens: [], pools: [], loading: !1, error: !1 }),
                        n = Object(u.a)(t, 2),
                        r = n[0],
                        c = n[1],
                        a = e.length < x.c;
                    Object(o.useEffect)((function() { c({ tokens: [], pools: [], loading: !a, error: !1 }) }), [e, a]), Object(o.useEffect)((function() {
                        var t = function() {
                            var t = Object(l.a)(b.a.mark((function t() {
                                var n, r, a;
                                return b.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, t.next = 3, Object(p.request)(f.e, Jt, { symbol: e.toUpperCase(), name: e.charAt(0).toUpperCase() + e.slice(1), id: e.toLowerCase() });
                                        case 3:
                                            return n = t.sent, r = Zt([n.asAddress, n.asSymbol, n.asName]), t.next = 7, Object(p.request)(f.e, Xt, { tokens: r, id: e.toLowerCase() });
                                        case 7:
                                            a = t.sent, c({ tokens: r, pools: Zt([a.asAddress, a.as0, a.as1]), loading: !1, error: !1 }), t.next = 15;
                                            break;
                                        case 11:
                                            t.prev = 11, t.t0 = t.catch(0), console.error("Search failed for ".concat(e), t.t0), c({ tokens: [], pools: [], loading: !1, error: !0 });
                                        case 15:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, null, [
                                    [0, 11]
                                ])
                            })));
                            return function() { return t.apply(this, arguments) }
                        }();
                        a || t()
                    }), [e, a]);
                    var i = Wt(r.tokens),
                        s = $t(r.pools);
                    return { tokens: i, pools: s, tokensLoading: i.length !== r.tokens.length || r.loading, poolsLoading: s.length !== r.pools.length || r.loading, error: r.error }
                },
                tn = n(44),
                nn = n(0),
                rn = ["src", "alt"],
                cn = [],
                an = function(e) {
                    var t = e.src,
                        n = e.alt,
                        r = Object(tn.a)(e, rn),
                        c = Object(o.useState)(0),
                        a = Object(u.a)(c, 2)[1],
                        i = cn.includes(t);
                    return t && !i ? Object(nn.jsx)("img", Object(y.a)(Object(y.a)({}, r), {}, { alt: n, src: t, onError: function() { t && cn.push(t), a((function(e) { return e + 1 })) } })) : Object(nn.jsx)(Kt.I, Object(y.a)({}, r))
                },
                on = ["address", "size"],
                sn = Object(Yt.default)(an)(ne || (ne = Object(j.a)(["\n  width: ", ";\n  height: ", ";\n  border-radius: ", ";\n  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);\n  background-color: ", ";\n  color: ", ";\n"])), (function(e) { return e.size }), (function(e) { return e.size }), (function(e) { return e.size }), (function(e) { return e.theme.colors.background }), (function(e) { return e.theme.colors.text })),
                ln = function(e) {
                    var t = e.address,
                        n = e.size,
                        r = void 0 === n ? "24px" : n,
                        c = Object(tn.a)(e, on),
                        a = Object(dt.c)((function(e) { return e.inputReducer.connectedNetworkID })),
                        i = Object(o.useMemo)((function() { return "https://thesphynx.co/images/tokens/".concat(a, "/").concat(t.toLowerCase(), ".png") }), [t, a]);
                    return Object(nn.jsx)(sn, Object(y.a)({ size: r, src: i, alt: "token logo" }, c))
                },
                un = Yt.default.div(re || (re = Object(j.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  width: 32px;\n"]))),
                dn = function(e) {
                    var t = e.address0,
                        n = e.address1,
                        r = e.size,
                        c = void 0 === r ? 16 : r;
                    return Object(nn.jsxs)(un, { children: [t && Object(nn.jsx)(ln, { address: t, size: "".concat(c.toString(), "px") }), n && Object(nn.jsx)(ln, { address: n, size: "".concat(c.toString(), "px") })] })
                },
                bn = n(1671),
                jn = n.n(bn),
                pn = function(e, t) {
                    var n = t || { notation: "compact" },
                        r = n.notation,
                        c = void 0 === r ? "compact" : r,
                        a = n.displayThreshold,
                        o = n.tokenPrecision,
                        i = n.isInteger;
                    if (0 === e) return i ? "0" : "0.00";
                    if (!e) return "-";
                    if (a && e < a) return "<".concat(a);
                    if (e < 1 && !o) return e.toFixed(9).match(/^-?\d*\.?0*\d{0,2}/)[0];
                    var s = 2;
                    o && (s = e < 1 ? 3 : 2);
                    var l = "0.".concat("0".repeat(s), "a");
                    "standard" === c && (l = "0,0.".concat("0".repeat(s))), i && e < 1e3 && (l = "0");
                    var u = parseFloat(e.toFixed(s));
                    return jn()(u).format(l).toUpperCase()
                },
                fn = n(58),
                xn = n(327),
                mn = ["fill"],
                On = Yt.default.div(ce || (ce = Object(j.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  :hover {\n    cursor: pointer;\n    opacity: 0.6;\n  }\n"]))),
                hn = function(e) {
                    var t = e.fill,
                        n = void 0 !== t && t,
                        r = Object(tn.a)(e, mn),
                        c = Object(xn.a)().theme;
                    return Object(nn.jsx)(On, Object(y.a)(Object(y.a)({}, r), {}, { children: n ? Object(nn.jsx)(Kt.hb, { stroke: c.colors.warning, color: c.colors.warning }) : Object(nn.jsx)(Kt.ib, { stroke: c.colors.textDisabled }) }))
                },
                vn = n(174),
                yn = Yt.default.div(ae || (ae = Object(j.a)(["\n  position: relative;\n  z-index: 7;\n  width: 100%;\n"]))),
                kn = Object(Yt.default)(Kt.M)(oe || (oe = Object(j.a)(["\n  z-index: 8;\n  border: 1px solid #3a3a3a;\n"]))),
                gn = Yt.default.div(ie || (ie = Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n  z-index: 8;\n  width: 100%;\n  top: 50px;\n  max-height: 400px;\n  overflow: auto;\n  right: 0;\n  padding: 1.5rem;\n  padding-bottom: 2.5rem;\n  position: absolute;\n  background: ", ";\n  border-radius: 8px;\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),\n    0px 24px 32px rgba(0, 0, 0, 0.04);\n  display: ", ";\n  border: 1px solid ", ";\n  margin-top: 4px;\n  ", " {\n    margin-top: 0;\n    width: 500px;\n    max-height: 600px;\n  }\n  ", " {\n    margin-top: 0;\n    width: 800px;\n    max-height: 600px;\n  }\n"])), (function(e) { return e.theme.colors.background }), (function(e) { return e.hide && "none" }), (function(e) { return e.theme.colors.secondary }), (function(e) { return e.theme.mediaQueries.sm }), (function(e) { return e.theme.mediaQueries.md })),
                Sn = Yt.default.div(se || (se = Object(j.a)(["\n  position: absolute;\n  min-height: 100vh;\n  width: 100vw;\n  z-index: 6;\n  background-color: black;\n  opacity: 0.7;\n  left: 0;\n  top: 0;\n"]))),
                Dn = Yt.default.div(le || (le = Object(j.a)(["\n  display: grid;\n  grid-gap: 1em;\n  grid-template-columns: 1fr;\n  margin: 8px 0;\n  align-items: center;\n  ", " {\n    grid-template-columns: 1.5fr repeat(3, 1fr);\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                wn = Yt.default.div(ue || (ue = Object(j.a)(["\n  height: 1px;\n  background-color: ", ";\n  width: 100%;\n  margin: 16px 0;\n"])), (function(e) { return e.theme.colors.cardBorder })),
                Cn = Yt.default.div(de || (de = Object(j.a)(["\n  color: ", ";\n  display: ", ";\n  margin-top: 16px;\n  :hover {\n    cursor: pointer;\n    opacity: 0.6;\n  }\n"])), (function(e) { return e.theme.colors.secondary }), (function(e) { return e.hide ? "none" : "block" })),
                Tn = Yt.default.div(be || (be = Object(j.a)(["\n  :hover {\n    cursor: pointer;\n    opacity: 0.6;\n  }\n"]))),
                Un = Yt.default.div(je || (je = Object(j.a)(["\n  width: fit-content;\n  padding: 4px 8px;\n  border-radius: 8px;\n  display: flex;\n  font-size: 12px;\n  font-weight: 600;\n  margin-right: 10px;\n  justify-content: center;\n  align-items: center;\n  background-color: ", ";\n  color: ", ";\n  :hover {\n    opacity: 0.6;\n    cursor: pointer;\n  }\n"])), (function(e) { var t = e.theme; return e.enabled ? t.colors.primary : "transparent" }), (function(e) { var t = e.theme; return e.enabled ? t.card.background : t.colors.secondary })),
                Fn = function(e, t) { return e.address.toLowerCase().includes(t.toLowerCase()) || e.symbol.toLowerCase().includes(t.toLowerCase()) || e.name.toLowerCase().includes(t.toLowerCase()) },
                An = function(e) {
                    var t = e.chainId,
                        n = Object(s.g)(),
                        r = Object(Kt.zb)(),
                        c = r.isXs,
                        a = r.isSm,
                        i = Object(Gt.b)().t,
                        l = Object(o.useRef)(null),
                        d = Object(o.useRef)(null),
                        b = Object(o.useRef)(null),
                        j = Object(o.useState)(!1),
                        p = Object(u.a)(j, 2),
                        f = p[0],
                        m = p[1],
                        O = Object(o.useState)(""),
                        h = Object(u.a)(O, 2),
                        v = h[0],
                        y = h[1],
                        k = Object(vn.a)(v, 600),
                        g = en(k),
                        S = g.tokens,
                        D = g.pools,
                        w = g.tokensLoading,
                        C = g.poolsLoading,
                        T = g.error,
                        U = Object(o.useState)(3),
                        F = Object(u.a)(U, 2),
                        A = F[0],
                        I = F[1],
                        L = Object(o.useState)(3),
                        q = Object(u.a)(L, 2),
                        z = q[0],
                        E = q[1];
                    Object(o.useEffect)((function() { I(3), E(3) }), [k]);
                    var N = function(e) {
                        var t = d.current && d.current.contains(e.target),
                            n = l.current && l.current.contains(e.target),
                            r = b.current && b.current.contains(e.target);
                        t || n || r || (E(3), I(3), m(!1))
                    };
                    Object(o.useEffect)((function() {
                        return f ? (document.addEventListener("click", N), document.querySelector("body").style.overflow = "hidden") : (document.removeEventListener("click", N), document.querySelector("body").style.overflow = "visible"),
                            function() { document.removeEventListener("click", N) }
                    }), [f]);
                    var P = Object(fn.o)(),
                        B = Object(u.a)(P, 2),
                        $ = B[0],
                        V = B[1],
                        M = Object(fn.n)(),
                        W = Object(u.a)(M, 2),
                        H = W[0],
                        R = W[1],
                        _ = function(e) { m(!1), E(3), I(3), n.push(e) },
                        Y = Wt($),
                        Q = Y.length !== $.length,
                        K = $t(H),
                        G = K.length !== H.length,
                        J = Object(o.useState)(!1),
                        X = Object(u.a)(J, 2),
                        Z = X[0],
                        ee = X[1],
                        te = Object(o.useMemo)((function() { return Z ? Y.filter((function(e) { return Fn(e, v) })) : S.sort((function(e, t) { return e.volumeUSD > t.volumeUSD ? -1 : 1 })) }), [Z, S, Y, v]),
                        ne = Object(o.useMemo)((function() { return Z ? K.filter((function(e) { return function(e, t) { return e.address.toLowerCase().includes(t.toLowerCase()) || Fn(e.token0, t) || Fn(e.token1, t) }(e, v) })) : D.sort((function(e, t) { return e.volumeUSD > t.volumeUSD ? -1 : 1 })) }), [D, Z, K, v]);
                    return Object(o.useEffect)((function() { console.log("+++++++++++", f) }), [f]), Object(nn.jsxs)(nn.Fragment, {
                        children: [f ? Object(nn.jsx)(Sn, {}) : null, Object(nn.jsxs)(yn, {
                            children: [Object(nn.jsx)(kn, { type: "text", value: v, onChange: function(e) { y(e.target.value) }, placeholder: i("Search pools or tokens"), ref: l, onFocus: function() { m(!0) } }), Object(nn.jsxs)(gn, {
                                hide: !f,
                                ref: d,
                                children: [Object(nn.jsxs)(Kt.F, { mb: "16px", children: [Object(nn.jsx)(Un, { enabled: !Z, onClick: function() { return ee(!1) }, children: i("Search") }), Object(nn.jsx)(Un, { enabled: Z, onClick: function() { return ee(!0) }, children: i("Watchlist") })] }), T && Object(nn.jsx)(Kt.lb, { color: "failure", children: i("Error occurred, please try again") }), Object(nn.jsxs)(Dn, { children: [Object(nn.jsx)(Kt.lb, { bold: !0, color: "secondary", children: i("Tokens") }), !c && !a && Object(nn.jsx)(Kt.lb, { textAlign: "end", fontSize: "12px", children: i("Price") }), !c && !a && Object(nn.jsx)(Kt.lb, { textAlign: "end", fontSize: "12px", children: i("Volume 24H") }), !c && !a && Object(nn.jsx)(Kt.lb, { textAlign: "end", fontSize: "12px", children: i("Liquidity") })] }), te.slice(0, A).map((function(e, n) { return Object(nn.jsx)(Tn, { onClick: function() { return _("/info/token/".concat(e.address, "/").concat(t)) }, children: Object(nn.jsxs)(Dn, { children: [Object(nn.jsxs)(Kt.F, { children: [Object(nn.jsx)(ln, { address: e.address }), Object(nn.jsx)(Kt.lb, { ml: "10px", children: Object(nn.jsx)(Kt.lb, { children: "".concat(e.name, " (").concat(e.symbol, ")") }) }), Object(nn.jsx)(hn, { id: "watchlist-icon", style: { marginLeft: "8px" }, fill: $.includes(e.address), onClick: function(t) { t.stopPropagation(), V(e.address) } })] }), !c && !a && Object(nn.jsxs)(Kt.lb, { textAlign: "end", children: ["$", pn(e.priceUSD)] }), !c && !a && Object(nn.jsxs)(Kt.lb, { textAlign: "end", children: ["$", pn(e.volumeUSD)] }), !c && !a && Object(nn.jsxs)(Kt.lb, { textAlign: "end", children: ["$", pn(e.liquidityUSD)] })] }) }, n) })), function() {
                                    var e = Z ? Q : w,
                                        t = 0 === te.length && !e && k.length >= x.c,
                                        n = 0 === te.length && !e,
                                        r = Z ? n : t,
                                        c = i(Z ? "Saved tokens will appear here" : "No results");
                                    return Object(nn.jsxs)(nn.Fragment, { children: [e && Object(nn.jsx)(Kt.fb, {}), r && Object(nn.jsx)(Kt.lb, { children: c }), !Z && k.length < x.c && Object(nn.jsx)(Kt.lb, { children: i("Search pools or tokens") })] })
                                }(), Object(nn.jsx)(Cn, { onClick: function() { I(A + 5) }, hide: te.length <= A, ref: b, children: i("See more...") }), Object(nn.jsx)(wn, {}), Object(nn.jsxs)(Dn, { children: [Object(nn.jsx)(Kt.lb, { bold: !0, color: "secondary", mb: "8px", children: i("Pools") }), !c && !a && Object(nn.jsx)(Kt.lb, { textAlign: "end", fontSize: "12px", children: i("Volume 24H") }), !c && !a && Object(nn.jsx)(Kt.lb, { textAlign: "end", fontSize: "12px", children: i("Volume 7D") }), !c && !a && Object(nn.jsx)(Kt.lb, { textAlign: "end", fontSize: "12px", children: i("Liquidity") })] }), ne.slice(0, z).map((function(e, n) { return Object(nn.jsx)(Tn, { onClick: function() { return _("/info/pool/".concat(e.address, "/").concat(t)) }, children: Object(nn.jsxs)(Dn, { children: [Object(nn.jsxs)(Kt.F, { children: [Object(nn.jsx)(dn, { address0: e.token0.address, address1: e.token1.address }), Object(nn.jsx)(Kt.lb, { ml: "10px", style: { whiteSpace: "nowrap" }, children: Object(nn.jsx)(Kt.lb, { children: "".concat(e.token0.symbol, " / ").concat(e.token1.symbol) }) }), Object(nn.jsx)(hn, { id: "watchlist-icon", style: { marginLeft: "10px" }, fill: H.includes(e.address), onClick: function(t) { t.stopPropagation(), R(e.address) } })] }), !c && !a && Object(nn.jsxs)(Kt.lb, { textAlign: "end", children: ["$", pn(e.volumeUSD)] }), !c && !a && Object(nn.jsxs)(Kt.lb, { textAlign: "end", children: ["$", pn(e.volumeUSDWeek)] }), !c && !a && Object(nn.jsxs)(Kt.lb, { textAlign: "end", children: ["$", pn(e.liquidityUSD)] })] }) }, n) })), function() {
                                    var e = Z ? G : C,
                                        t = 0 === ne.length && !C && k.length >= x.c,
                                        n = 0 === ne.length && !e,
                                        r = Z ? n : t,
                                        c = i(Z ? "Saved tokens will appear here" : "No results");
                                    return Object(nn.jsxs)(nn.Fragment, { children: [e && Object(nn.jsx)(Kt.fb, {}), r && Object(nn.jsx)(Kt.lb, { children: c }), !Z && k.length < x.c && Object(nn.jsx)(Kt.lb, { children: i("Search pools or tokens") })] })
                                }(), Object(nn.jsx)(Cn, { onClick: function() { E(z + 5) }, hide: ne.length <= z, ref: b, children: i("See more...") })]
                            })]
                        })]
                    })
                },
                In = n(74),
                Ln = Object(Yt.default)(Kt.F)(pe || (pe = Object(j.a)(["\n  background: ", ";\n  justify-content: space-between;\n  align-items: center;\n  padding: 10x 16px;\n  flex-direction: column;\n  gap: 8px;\n  ", " {\n    padding: 10px 40px;\n    flex-direction: row;\n  }\n"])), (function(e) { return e.theme.custom.tertiary }), (function(e) { return e.theme.mediaQueries.sm })),
                qn = function() {
                    var e = Object(s.h)().pathname.split("/"),
                        t = e[e.length - 1],
                        n = Object(Gt.b)().t;
                    return Object(nn.jsxs)(Ln, { children: [Object(nn.jsx)(Kt.k, { children: Object(nn.jsx)(In.f, { selectedTabClassName: "is-selected", selectedTabPanelClassName: "is-selected", children: Object(nn.jsxs)(In.c, { style: { marginTop: "0px" }, children: [Object(nn.jsx)(In.e, { style: { borderRadius: "5px 0px 0px 5px", padding: "0px" }, children: Object(nn.jsx)(Qt.b, { to: "/info/".concat(t), children: Object(nn.jsx)(Kt.lb, { textAlign: "center", fontSize: "14px", bold: !0, color: "white", padding: "10px", width: "100px", children: n("Overview") }) }) }), Object(nn.jsx)(In.e, { style: { padding: "0px" }, children: Object(nn.jsx)(Qt.b, { to: "/info/pools/".concat(t), children: Object(nn.jsx)(Kt.lb, { textAlign: "center", fontSize: "14px", bold: !0, color: "white", padding: "10px", width: "100px", children: n("Pools") }) }) }), Object(nn.jsx)(In.e, { style: { borderRadius: "0px 5px 5px 0px", padding: "0px" }, children: Object(nn.jsx)(Qt.b, { to: "/info/tokens/".concat(t), children: Object(nn.jsx)(Kt.lb, { textAlign: "center", fontSize: "14px", bold: !0, color: "white", padding: "10px", width: "100px", children: n("Tokens") }) }) })] }) }) }), Object(nn.jsx)(Kt.k, { width: ["100%", "100%", "250px"], children: Object(nn.jsx)(An, { chainId: t }) })] })
                },
                zn = n(1827),
                En = n(1492),
                Nn = n(1820),
                Pn = n(1821),
                Bn = n(1612),
                $n = n(1613),
                Vn = n(1786),
                Mn = n(1739),
                Wn = function(e) { return Object(nn.jsxs)(Kt.jb, Object(y.a)(Object(y.a)({ width: "100%", height: "100%", preserveAspectRatio: "none", viewBox: "0 0 100 50" }, e), {}, { children: [Object(nn.jsx)("path", { d: "M 0 49 C 1 49 1 45 4 47 C 7 49 7 35 11 37 C 13 38 14 32 16 34 C 18 35.6667 20 40 22 39 C 24 38 24 34 26 34 C 27 34 29 39 32 36 C 33 35 34 32 35 32 C 37 32 37 35 39 34 C 40 33 39 29 43 31 C 46 32 45 28 47 30 C 50 32 49 22 51 24 Q 53 26 55 24 C 56 23 56 25 57 26 C 58 27 59 28 60 28 C 63 28 66 17 67 16 C 68 15 69 17 70 16 C 71 15 71 13 74 13 C 76 13 76 14 77 15 C 79 17 80 18 82 18 C 83 18 83 17 84 17 C 87 17 89 24 91 24 C 93 24 95 20 96 17 C 97.6667 13.3333 98 9 101 6", stroke: "#7645D9", strokeWidth: "0.2", strokeDasharray: "156", strokeDashoffset: "156", fill: "transparent", opacity: "0.5", filter: "url(#glow)", children: Object(nn.jsx)("animate", { id: "firstline", attributeName: "stroke-dashoffset", dur: "2s", from: "156", to: "-156", begin: "0s;firstline.end+0.5s" }) }), Object(nn.jsx)("path", { d: "M 0 49 C 1 49 1 45 4 47 C 7 49 7 35 11 37 C 13 38 14 32 16 34 C 18 35.6667 20 40 22 39 C 24 38 24 34 26 34 C 27 34 29 39 32 36 C 33 35 34 32 35 32 C 37 32 37 35 39 34 C 40 33 39 29 43 31 C 46 32 45 28 47 30 C 50 32 49 22 51 24 Q 53 26 55 24 C 56 23 56 25 57 26 C 58 27 59 28 60 28 C 63 28 66 17 67 16 C 68 15 69 17 70 16 C 71 15 71 13 74 13 C 76 13 76 14 77 15 C 79 17 80 18 82 18 C 83 18 83 17 84 17 C 87 17 89 24 91 24 C 93 24 95 20 96 17 C 97.6667 13.3333 98 9 101 6", stroke: "#7645D9", strokeWidth: "0.2", strokeDasharray: "156", strokeDashoffset: "156", fill: "transparent", opacity: "0.5", filter: "url(#glow)", children: Object(nn.jsx)("animate", { id: "secondline", attributeName: "stroke-dashoffset", dur: "2s", from: "156", to: "-156", begin: "1.3s;secondline.end+0.5s" }) }), Object(nn.jsx)("defs", { children: Object(nn.jsxs)("filter", { id: "glow", children: [Object(nn.jsx)("feGaussianBlur", { className: "blur", result: "coloredBlur", stdDeviation: "4" }), Object(nn.jsxs)("feMerge", { children: [Object(nn.jsx)("feMergeNode", { in: "coloredBlur" }), Object(nn.jsx)("feMergeNode", { in: "coloredBlur" }), Object(nn.jsx)("feMergeNode", { in: "coloredBlur" }), Object(nn.jsx)("feMergeNode", { in: "SourceGraphic" })] })] }) })] })) },
                Hn = function(e) { return Object(nn.jsxs)(Kt.jb, Object(y.a)(Object(y.a)({ width: "100%", height: "100%", viewBox: "0 0 50 25", preserveAspectRatio: "none", opacity: "0.1" }, e), {}, { children: [Object(nn.jsxs)("rect", { width: "8%", fill: "#1FC7D4", children: [Object(nn.jsx)("animate", { attributeName: "height", dur: "0.9s", values: "15%; 90%; 15%", keyTimes: "0; 0.55; 1", repeatCount: "indefinite", begin: "-0.9s" }), Object(nn.jsx)("animate", { attributeName: "y", dur: "0.9s", values: "85%; 10%; 85%", keyTimes: "0; 0.55; 1", repeatCount: "indefinite", begin: "-0.9s" })] }), Object(nn.jsxs)("rect", { x: "10.222%", width: "8%", fill: "#1FC7D4", children: [Object(nn.jsx)("animate", { attributeName: "height", dur: "0.9s", values: "15%; 90%; 15%", keyTimes: "0; 0.55; 1", repeatCount: "indefinite", begin: "-0.8s" }), Object(nn.jsx)("animate", { attributeName: "y", dur: "0.9s", values: "85%; 10%; 85%", keyTimes: "0; 0.55; 1", repeatCount: "indefinite", begin: "-0.8s" })] }), Object(nn.jsxs)("rect", { x: "20.444%", width: "8%", fill: "#1FC7D4", children: [Object(nn.jsx)("animate", { attributeName: "height", dur: "0.9s", values: "15%; 90%; 15%", keyTimes: "0; 0.55; 1", repeatCount: "indefinite", begin: "-0.7s" }), Object(nn.jsx)("animate", { attributeName: "y", dur: "0.9s", values: "85%; 10%; 85%", keyTimes: "0; 0.55; 1", repeatCount: "indefinite", begin: "-0.7s" })] }), Object(nn.jsxs)("rect", { x: "30.666%", width: "8%", fill: "#1FC7D4", children: [Object(nn.jsx)("animate", { attributeName: "height", dur: "0.9s", values: "15%; 90%; 15%", keyTimes: "0; 0.55; 1", repeatCount: "indefinite", begin: "-0.6s" }), Object(nn.jsx)("animate", { attributeName: "y", dur: "0.9s", values: "85%; 10%; 85%", keyTimes: "0; 0.55; 1", repeatCount: "indefinite", begin: "-0.6s" })] }), Object(nn.jsxs)("rect", { x: "40.888%", width: "8%", fill: "#1FC7D4", children: [Object(nn.jsx)("animate", { attributeName: "height", dur: "0.9s", values: "15%; 90%; 15%", keyTimes: "0; 0.55; 1", repeatCount: "indefinite", begin: "-0.5s" }), Object(nn.jsx)("animate", { attributeName: "y", dur: "0.9s", values: "85%; 10%; 85%", keyTimes: "0; 0.55; 1", repeatCount: "indefinite", begin: "-0.5s" })] }), Object(nn.jsxs)("rect", { x: "51.11%", width: "8%", fill: "#1FC7D4", children: [Object(nn.jsx)("animate", { attributeName: "height", dur: "0.9s", values: "15%; 90%; 15%", keyTimes: "0; 0.55; 1", repeatCount: "indefinite", begin: "-0.4s" }), Object(nn.jsx)("animate", { attributeName: "y", dur: "0.9s", values: "85%; 10%; 85%", keyTimes: "0; 0.55; 1", repeatCount: "indefinite", begin: "-0.4s" })] }), Object(nn.jsxs)("rect", { x: "61.332%", width: "8%", fill: "#1FC7D4", children: [Object(nn.jsx)("animate", { attributeName: "height", dur: "0.9s", values: "15%; 90%; 15%", keyTimes: "0; 0.55; 1", repeatCount: "indefinite", begin: "-0.3s" }), Object(nn.jsx)("animate", { attributeName: "y", dur: "0.9s", values: "85%; 10%; 85%", keyTimes: "0; 0.55; 1", repeatCount: "indefinite", begin: "-0.3s" })] }), Object(nn.jsxs)("rect", { x: "71.554%", width: "8%", fill: "#1FC7D4", children: [Object(nn.jsx)("animate", { attributeName: "height", dur: "0.9s", values: "15%; 90%; 15%", keyTimes: "0; 0.55; 1", repeatCount: "indefinite", begin: "-0.2s" }), Object(nn.jsx)("animate", { attributeName: "y", dur: "0.9s", values: "85%; 10%; 85%", keyTimes: "0; 0.55; 1", repeatCount: "indefinite", begin: "-0.2s" })] }), Object(nn.jsxs)("rect", { x: "81.776%", width: "8%", fill: "#1FC7D4", children: [Object(nn.jsx)("animate", { attributeName: "height", dur: "0.9s", values: "15%; 90%; 15%", keyTimes: "0; 0.55; 1", repeatCount: "indefinite", begin: "-0.1s" }), Object(nn.jsx)("animate", { attributeName: "y", dur: "0.9s", values: "85%; 10%; 85%", keyTimes: "0; 0.55; 1", repeatCount: "indefinite", begin: "-0.1s" })] }), Object(nn.jsxs)("rect", { x: "91.998%", width: "8%", fill: "#1FC7D4", children: [Object(nn.jsx)("animate", { attributeName: "height", dur: "0.9s", values: "15%; 90%; 15%", keyTimes: "0; 0.55; 1", repeatCount: "indefinite" }), Object(nn.jsx)("animate", { attributeName: "y", dur: "0.9s", values: "85%; 10%; 85%", keyTimes: "0; 0.55; 1", repeatCount: "indefinite" })] })] })) },
                Rn = function(e) { return Object(nn.jsxs)(Kt.jb, Object(y.a)(Object(y.a)({ width: "100%", height: "100%", viewBox: "0 0 100 50", opacity: "0.1" }, e), {}, { children: [Object(nn.jsxs)("rect", { width: "5%", fill: "#31D0AA", children: [Object(nn.jsx)("animate", { attributeName: "height", dur: "2s", values: "0%; 40%; 40%; 10%; 10%", keyTimes: "0; 0.125; 0.5; 0.625; 1", repeatCount: "indefinite" }), Object(nn.jsx)("animate", { attributeName: "y", dur: "2s", from: "50%", to: "30%", values: "30%; 10%; 10%; 25%; 25%", keyTimes: "0; 0.125; 0.5; 0.625; 1", repeatCount: "indefinite" }), Object(nn.jsx)("animate", { attributeName: "rx", dur: "2s", values: "0%; 0%; 100%; 100%;", keyTimes: "0; 0.6; 0.625; 1", repeatCount: "indefinite" }), Object(nn.jsx)("animate", { attributeName: "x", dur: "2s", values: "32.5%; 32.5%; 47.5%; 47.5%;", keyTimes: "0; 0.7; 0.8; 1", repeatCount: "indefinite" }), Object(nn.jsx)("animate", { attributeName: "opacity", dur: "2s", values: "1; 1; 0; 0;", keyTimes: "0; 0.75; 0.9; 1", repeatCount: "indefinite" })] }), Object(nn.jsxs)("rect", { width: "5%", fill: "#31D0AA", children: [Object(nn.jsx)("animate", { attributeName: "height", dur: "2s", values: "0%; 0%; 20%; 20%; 10%; 10%", keyTimes: "0; 0.125; 0.25; 0.5; 0.625; 1", repeatCount: "indefinite" }), Object(nn.jsx)("animate", { attributeName: "y", dur: "2s", values: "15%; 15%; 5%; 5%; 25%; 25%", keyTimes: "0; 0.125; 0.25; 0.5; 0.625; 1", repeatCount: "indefinite" }), Object(nn.jsx)("animate", { attributeName: "rx", dur: "2s", values: "0%; 0%; 100%; 100%;", keyTimes: "0; 0.6; 0.625; 1", repeatCount: "indefinite" }), Object(nn.jsx)("animate", { attributeName: "x", dur: "2s", values: "42.5%; 42.5%; 47.5%; 47.5%;", keyTimes: "0; 0.7; 0.8; 1", repeatCount: "indefinite" }), Object(nn.jsx)("animate", { attributeName: "opacity", dur: "2s", values: "1; 1; 0; 0;", keyTimes: "0; 0.75; 0.9; 1", repeatCount: "indefinite" })] }), Object(nn.jsxs)("rect", { width: "5%", fill: "#ED4B9E", children: [Object(nn.jsx)("animate", { attributeName: "height", dur: "2s", values: "0%; 0%; 35%; 35%; 10%; 10%", keyTimes: "0; 0.25; 0.375; 0.5; 0.625; 1", repeatCount: "indefinite" }), Object(nn.jsx)("animate", { attributeName: "y", dur: "2s", values: "25%; 25%; 10%; 10%; 25%; 25%", keyTimes: "0; 0.25; 0.375; 0.5; 0.625; 1", repeatCount: "indefinite" }), Object(nn.jsx)("animate", { attributeName: "rx", dur: "2s", values: "0%; 0%; 100%; 100%;", keyTimes: "0; 0.6; 0.625; 1", repeatCount: "indefinite" }), Object(nn.jsx)("animate", { attributeName: "x", dur: "2s", values: "52.5%; 52.5%; 47.5%; 47.5%;", keyTimes: "0; 0.7; 0.8; 1", repeatCount: "indefinite" }), Object(nn.jsx)("animate", { attributeName: "opacity", dur: "2s", values: "1; 1; 0; 0;", keyTimes: "0; 0.75; 0.9; 1", repeatCount: "indefinite" })] }), Object(nn.jsxs)("rect", { width: "5%", fill: "#31D0AA", children: [Object(nn.jsx)("animate", { attributeName: "height", dur: "2s", values: "0%; 0%; 35%; 35%; 10%; 10%", keyTimes: "0; 0.375; 0.5; 0.5; 0.625; 1", repeatCount: "indefinite" }), Object(nn.jsx)("animate", { attributeName: "y", dur: "2s", values: "15%; 15%; 0%; 0%; 25%; 25%", keyTimes: "0; 0.375; 0.5; 0.5; 0.625; 1", repeatCount: "indefinite" }), Object(nn.jsx)("animate", { attributeName: "rx", dur: "2s", values: "0%; 0%; 100%; 100%;", keyTimes: "0; 0.6; 0.625; 1", repeatCount: "indefinite" }), Object(nn.jsx)("animate", { attributeName: "x", dur: "2s", values: "62.5%; 62.5%; 47.5%; 47.5%;", keyTimes: "0; 0.7; 0.8; 1", repeatCount: "indefinite" }), Object(nn.jsx)("animate", { attributeName: "opacity", dur: "2s", values: "1; 1; 0; 0;", keyTimes: "0; 0.75; 0.9; 1", repeatCount: "indefinite" })] })] })) },
                _n = Object(Yt.default)(Kt.k)(fe || (fe = Object(j.a)(["\n  position: absolute;\n  margin-left: auto;\n  margin-right: auto;\n  top: 50%;\n  left: 0;\n  right: 0;\n  text-align: center;\n"]))),
                Yn = Object(Yt.default)(Kt.k)(xe || (xe = Object(j.a)(["\n  height: 100%;\n  position: relative;\n"]))),
                Qn = function() { var e = Object(Gt.b)().t; return Object(nn.jsxs)(Yn, { children: [Object(nn.jsx)(Hn, {}), Object(nn.jsx)(_n, { children: Object(nn.jsx)(Kt.lb, { color: "textSubtle", fontSize: "20px", children: e("Loading chart data...") }) })] }) },
                Kn = function() { var e = Object(Gt.b)().t; return Object(nn.jsxs)(Yn, { children: [Object(nn.jsx)(Wn, {}), Object(nn.jsx)(_n, { children: Object(nn.jsx)(Kt.lb, { color: "textSubtle", fontSize: "20px", children: e("Loading chart data...") }) })] }) },
                Gn = function() { var e = Object(Gt.b)().t; return Object(nn.jsxs)(Yn, { children: [Object(nn.jsx)(Rn, {}), Object(nn.jsx)(_n, { children: Object(nn.jsx)(Kt.lb, { color: "textSubtle", fontSize: "20px", children: e("Loading chart data...") }) })] }) },
                Jn = function(e) {
                    var t = e.locale,
                        n = e.payload,
                        r = e.setHoverValue,
                        c = e.setHoverDate;
                    return Object(o.useEffect)((function() { r(n.value), c(n.time.toLocaleString(t, { year: "numeric", day: "numeric", month: "short" })) }), [t, n.value, n.time, r, c]), null
                },
                Xn = function(e) {
                    var t = e.data,
                        n = e.setHoverValue,
                        r = e.setHoverDate,
                        c = Object(Gt.b)().currentLanguage.locale,
                        a = Object(xn.a)().theme;
                    return t && 0 !== t.length ? Object(nn.jsx)(Nn.a, { children: Object(nn.jsxs)(Pn.a, { data: t, width: 300, height: 308, margin: { top: 5, right: 15, left: 0, bottom: 5 }, onMouseLeave: function() { r && r(void 0), n && n(void 0) }, children: [Object(nn.jsx)("defs", { children: Object(nn.jsxs)("linearGradient", { id: "gradient", x1: "0", y1: "0", x2: "0", y2: "1", children: [Object(nn.jsx)("stop", { offset: "5%", stopColor: a.colors.inputSecondary, stopOpacity: .5 }), Object(nn.jsx)("stop", { offset: "100%", stopColor: a.colors.secondary, stopOpacity: 0 })] }) }), Object(nn.jsx)(Bn.a, { dataKey: "time", axisLine: !1, tickLine: !1, tickFormatter: function(e) { return e.toLocaleDateString(void 0, { day: "2-digit" }) }, minTickGap: 10 }), Object(nn.jsx)($n.a, { dataKey: "value", tickCount: 6, scale: "linear", axisLine: !1, tickLine: !1, fontSize: "12px", tickFormatter: function(e) { return "$".concat(pn(e)) }, orientation: "right", tick: { dx: 10, fill: a.colors.textSubtle } }), Object(nn.jsx)(Vn.a, { cursor: { stroke: a.colors.secondary }, contentStyle: { display: "none" }, formatter: function(e, t, a) { return Object(nn.jsx)(Jn, { locale: c, payload: a.payload, setHoverValue: n, setHoverDate: r }) } }), Object(nn.jsx)(Mn.a, { dataKey: "value", type: "monotone", stroke: a.colors.secondary, fill: "url(#gradient)", strokeWidth: 2 })] }) }) : Object(nn.jsx)(Kn, {})
                },
                Zn = n(275),
                er = n(276),
                tr = ["value"],
                nr = function(e) {
                    var t = e.value,
                        n = Object(tn.a)(e, tr);
                    if (!t || Number.isNaN(t)) return Object(nn.jsx)(Kt.lb, Object(y.a)(Object(y.a)({}, n), {}, { children: "-" }));
                    var r = t < 0;
                    return Object(nn.jsx)(Kt.lb, Object(y.a)(Object(y.a)({}, n), {}, { color: r ? "#FF646D" : "#60E26D", children: Object(nn.jsxs)(Kt.F, { alignItems: "center", children: [r ? Object(nn.jsx)(er.a, { style: { marginRight: "5px" } }) : Object(nn.jsx)(Zn.a, { style: { marginRight: "5px" } }), Math.abs(t).toFixed(2), "%"] }) }))
                },
                rr = Object(Yt.default)(Kt.lb)(me || (me = Object(j.a)(["\n  cursor: pointer;\n"]))),
                cr = Object(Yt.default)(Kt.F)(Oe || (Oe = Object(j.a)(["\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  padding-top: 16px;\n  flex-direction: column;\n  gap: 10px;\n  background-color: ", ";\n  border-radius: 22px;\n  border: 1px solid #3a3a3a;\n"])), (function(e) { return e.theme.custom.tertiary })),
                ar = Yt.default.div(he || (he = Object(j.a)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 0.2em;\n  margin-bottom: 1.2em;\n"]))),
                or = Yt.default.div(ve || (ve = Object(j.a)(["\n  color: ", ";\n  padding: 0 20px;\n  :hover {\n    cursor: pointer;\n  }\n"])), (function(e) { return e.theme.colors.primary })),
                ir = Yt.default.div(ye || (ye = Object(j.a)(["\n  height: 1px;\n  background-color: #3a3a3a;\n  width: 100%;\n"]))),
                sr = Yt.default.div(ke || (ke = Object(j.a)(["\n  display: grid;\n  grid-gap: 1em;\n  align-items: center;\n\n  padding: 0 24px;\n\n  grid-template-columns: 20px 3fr repeat(4, 1fr);\n\n  @media screen and (max-width: 900px) {\n    grid-template-columns: 20px 2fr repeat(3, 1fr);\n    & :nth-child(4) {\n      display: none;\n    }\n  }\n\n  @media screen and (max-width: 800px) {\n    grid-template-columns: 20px 2fr repeat(2, 1fr);\n    & :nth-child(6) {\n      display: none;\n    }\n  }\n\n  @media screen and (max-width: 670px) {\n    grid-template-columns: 1fr 1fr;\n    > *:first-child {\n      display: none;\n    }\n    > *:nth-child(3) {\n      display: none;\n    }\n  }\n"]))),
                lr = Object(Yt.default)(Qt.b)(ge || (ge = Object(j.a)(["\n  text-decoration: none;\n  :hover {\n    cursor: pointer;\n    opacity: 0.7;\n  }\n"]))),
                ur = Object(Yt.default)(ln)(Se || (Se = Object(j.a)(["\n  @media screen and (max-width: 670px) {\n    width: 16px;\n    height: 16px;\n  }\n"]))),
                dr = function() { var e = Object(nn.jsxs)(sr, { children: [Object(nn.jsx)(Kt.fb, {}), Object(nn.jsx)(Kt.fb, {}), Object(nn.jsx)(Kt.fb, {}), Object(nn.jsx)(Kt.fb, {}), Object(nn.jsx)(Kt.fb, {}), Object(nn.jsx)(Kt.fb, {})] }); return Object(nn.jsxs)(nn.Fragment, { children: [e, e, e] }) },
                br = function(e) {
                    var t = e.tokenData,
                        n = e.index,
                        r = e.chainId,
                        c = Object(Kt.zb)(),
                        a = c.isXs,
                        o = c.isSm;
                    return Object(nn.jsx)(lr, { to: "/info/token/".concat(t.address, "/").concat(r), children: Object(nn.jsxs)(sr, { children: [Object(nn.jsx)(Kt.F, { children: Object(nn.jsx)(Kt.lb, { children: n + 1 }) }), Object(nn.jsxs)(Kt.F, { alignItems: "center", children: [Object(nn.jsx)(ur, { address: t.address }), (a || o) && Object(nn.jsx)(Kt.lb, { ml: "8px", children: t.symbol }), !a && !o && Object(nn.jsxs)(Kt.F, { marginLeft: "10px", children: [Object(nn.jsx)(Kt.lb, { children: t.name }), Object(nn.jsxs)(Kt.lb, { ml: "8px", children: ["(", t.symbol, ")"] })] })] }), Object(nn.jsxs)(Kt.lb, { fontWeight: 400, children: ["$", pn(t.priceUSD, { notation: "standard" })] }), Object(nn.jsx)(Kt.lb, { fontWeight: 400, children: Object(nn.jsx)(nr, { value: t.priceUSDChange, fontWeight: 400 }) }), Object(nn.jsxs)(Kt.lb, { fontWeight: 400, children: ["$", pn(t.volumeUSD)] }), Object(nn.jsxs)(Kt.lb, { fontWeight: 400, children: ["$", pn(t.liquidityUSD)] })] }) })
                },
                jr = "name",
                pr = "volumeUSD",
                fr = "liquidityUSD",
                xr = "priceUSD",
                mr = "priceUSDChange",
                Or = function(e) {
                    var t = e.tokenDatas,
                        n = e.maxItems,
                        r = void 0 === n ? 10 : n,
                        c = e.chainId,
                        a = Object(o.useState)(pr),
                        s = Object(u.a)(a, 2),
                        l = s[0],
                        d = s[1],
                        b = Object(o.useState)(!0),
                        j = Object(u.a)(b, 2),
                        p = j[0],
                        f = j[1],
                        x = Object(Gt.b)().t,
                        m = Object(o.useState)(1),
                        O = Object(u.a)(m, 2),
                        h = O[0],
                        v = O[1],
                        y = Object(o.useState)(1),
                        k = Object(u.a)(y, 2),
                        g = k[0],
                        S = k[1];
                    Object(o.useEffect)((function() {
                        var e = 1;
                        t && (t.length % r === 0 && (e = 0), S(Math.floor(t.length / r) + e))
                    }), [r, t]);
                    var D = Object(o.useMemo)((function() { return t ? t.sort((function(e, t) { return e && t ? e[l] > t[l] ? 1 * (p ? -1 : 1) : -1 * (p ? -1 : 1) : -1 })).slice(r * (h - 1), h * r) : [] }), [t, r, h, p, l]),
                        w = Object(o.useCallback)((function(e) { d(e), f(l !== e || !p) }), [p, l]),
                        C = Object(o.useCallback)((function(e) { return l === e ? p ? "\u2193" : "\u2191" : "" }), [p, l]);
                    return t ? Object(nn.jsxs)(cr, { children: [Object(nn.jsxs)(sr, { children: [Object(nn.jsx)(Kt.lb, { color: "secondary", fontSize: "12px", bold: !0, children: "#" }), Object(nn.jsxs)(rr, { color: "secondary", fontSize: "12px", bold: !0, onClick: function() { return w(jr) }, textTransform: "uppercase", children: [x("Name"), " ", C(jr)] }), Object(nn.jsxs)(rr, { color: "secondary", fontSize: "12px", bold: !0, onClick: function() { return w(xr) }, textTransform: "uppercase", children: [x("Price"), " ", C(xr)] }), Object(nn.jsxs)(rr, { color: "secondary", fontSize: "12px", bold: !0, onClick: function() { return w(mr) }, textTransform: "uppercase", children: [x("Price Change"), " ", C(mr)] }), Object(nn.jsxs)(rr, { color: "secondary", fontSize: "12px", bold: !0, onClick: function() { return w(pr) }, textTransform: "uppercase", children: [x("Volume 24H"), " ", C(pr)] }), Object(nn.jsxs)(rr, { color: "secondary", fontSize: "12px", bold: !0, onClick: function() { return w(fr) }, textTransform: "uppercase", children: [x("Liquidity"), " ", C(fr)] })] }), Object(nn.jsx)(ir, {}), D.length > 0 ? Object(nn.jsxs)(nn.Fragment, { children: [D.map((function(e, t) { return e ? Object(nn.jsxs)(i.a.Fragment, { children: [Object(nn.jsx)(br, { index: 10 * (h - 1) + t, tokenData: e, chainId: c }), Object(nn.jsx)(ir, {})] }, e.address) : null })), Object(nn.jsxs)(ar, { children: [Object(nn.jsx)(or, { onClick: function() { v(1 === h ? h : h - 1) }, children: Object(nn.jsx)(Kt.b, { color: 1 === h ? "textDisabled" : "primary" }) }), Object(nn.jsx)(Kt.lb, { children: x("Page %page% of %maxPage%", { page: h, maxPage: g }) }), Object(nn.jsx)(or, { onClick: function() { v(h === g ? h : h + 1) }, children: Object(nn.jsx)(Kt.e, { color: h === g ? "textDisabled" : "primary" }) })] })] }) : Object(nn.jsxs)(nn.Fragment, { children: [Object(nn.jsx)(dr, {}), Object(nn.jsx)(Kt.k, {})] })] }) : Object(nn.jsx)(Kt.fb, {})
                },
                hr = Yt.default.div(De || (De = Object(j.a)(["\n  display: grid;\n  grid-gap: 1em;\n  align-items: center;\n  grid-template-columns: 20px 3.5fr repeat(5, 1fr);\n\n  padding: 0 24px;\n  @media screen and (max-width: 900px) {\n    grid-template-columns: 20px 1.5fr repeat(3, 1fr);\n    & :nth-child(4),\n    & :nth-child(5) {\n      display: none;\n    }\n  }\n  @media screen and (max-width: 500px) {\n    grid-template-columns: 20px 1.5fr repeat(1, 1fr);\n    & :nth-child(4),\n    & :nth-child(5),\n    & :nth-child(6),\n    & :nth-child(7) {\n      display: none;\n    }\n  }\n  @media screen and (max-width: 480px) {\n    grid-template-columns: 2.5fr repeat(1, 1fr);\n    > *:nth-child(1) {\n      display: none;\n    }\n  }\n"]))),
                vr = Object(Yt.default)(Qt.b)(we || (we = Object(j.a)(["\n  text-decoration: none;\n  :hover {\n    cursor: pointer;\n    opacity: 0.7;\n  }\n"]))),
                yr = "volumeUSD",
                kr = "liquidityUSD",
                gr = "volumeUSDWeek",
                Sr = "lpFees24h",
                Dr = "lpApr7d",
                wr = function() { return Object(nn.jsxs)(hr, { children: [Object(nn.jsx)(Kt.fb, {}), Object(nn.jsx)(Kt.fb, {}), Object(nn.jsx)(Kt.fb, {}), Object(nn.jsx)(Kt.fb, {}), Object(nn.jsx)(Kt.fb, {}), Object(nn.jsx)(Kt.fb, {}), Object(nn.jsx)(Kt.fb, {})] }) },
                Cr = function() { return Object(nn.jsxs)(nn.Fragment, { children: [Object(nn.jsx)(wr, {}), Object(nn.jsx)(wr, {}), Object(nn.jsx)(wr, {})] }) },
                Tr = function(e) {
                    var t = e.poolData,
                        n = e.index,
                        r = e.chainId;
                    return Object(nn.jsx)(vr, { to: "/info/pool/".concat(t.address, "/").concat(r), children: Object(nn.jsxs)(hr, { children: [Object(nn.jsx)(Kt.lb, { children: n + 1 }), Object(nn.jsxs)(Kt.F, { children: [Object(nn.jsx)(dn, { address0: t.token0.address, address1: t.token1.address }), Object(nn.jsxs)(Kt.lb, { ml: "8px", children: [t.token0.symbol, "/", t.token1.symbol] })] }), Object(nn.jsxs)(Kt.lb, { children: ["$", pn(t.volumeUSD)] }), Object(nn.jsxs)(Kt.lb, { children: ["$", pn(t.volumeUSDWeek)] }), Object(nn.jsxs)(Kt.lb, { children: ["$", pn(t.lpFees24h)] }), Object(nn.jsxs)(Kt.lb, { children: [pn(t.lpApr7d), "%"] }), Object(nn.jsxs)(Kt.lb, { children: ["$", pn(t.liquidityUSD)] })] }) })
                },
                Ur = function(e) {
                    var t = e.poolDatas,
                        n = e.loading,
                        r = e.chainId,
                        c = Object(o.useState)(yr),
                        a = Object(u.a)(c, 2),
                        s = a[0],
                        l = a[1],
                        d = Object(o.useState)(!0),
                        b = Object(u.a)(d, 2),
                        j = b[0],
                        p = b[1],
                        f = Object(Gt.b)().t,
                        m = Object(o.useState)(1),
                        O = Object(u.a)(m, 2),
                        h = O[0],
                        v = O[1],
                        y = Object(o.useState)(1),
                        k = Object(u.a)(y, 2),
                        g = k[0],
                        S = k[1];
                    Object(o.useEffect)((function() {
                        var e = 1;
                        t.length % x.a === 0 && (e = 0), S(Math.floor(t.length / x.a) + e)
                    }), [t]);
                    var D = Object(o.useMemo)((function() { return t ? t.sort((function(e, t) { return e && t ? e[s] > t[s] ? 1 * (j ? -1 : 1) : -1 * (j ? -1 : 1) : -1 })).slice(x.a * (h - 1), h * x.a) : [] }), [h, t, j, s]),
                        w = Object(o.useCallback)((function(e) { l(e), p(s !== e || !j) }), [j, s]),
                        C = Object(o.useCallback)((function(e) { return s === e ? j ? "\u2193" : "\u2191" : "" }), [j, s]);
                    return Object(nn.jsxs)(cr, { children: [Object(nn.jsxs)(hr, { children: [Object(nn.jsx)(Kt.lb, { color: "secondary", fontSize: "12px", bold: !0, children: "#" }), Object(nn.jsx)(Kt.lb, { color: "secondary", fontSize: "12px", bold: !0, textTransform: "uppercase", children: f("Pool") }), Object(nn.jsxs)(rr, { color: "secondary", fontSize: "12px", bold: !0, onClick: function() { return w(yr) }, textTransform: "uppercase", children: [f("Volume 24H"), " ", C(yr)] }), Object(nn.jsxs)(rr, { color: "secondary", fontSize: "12px", bold: !0, onClick: function() { return w(gr) }, textTransform: "uppercase", children: [f("Volume 7D"), " ", C(gr)] }), Object(nn.jsxs)(rr, { color: "secondary", fontSize: "12px", bold: !0, onClick: function() { return w(Sr) }, textTransform: "uppercase", children: [f("LP reward fees 24H"), " ", C(Sr)] }), Object(nn.jsxs)(rr, { color: "secondary", fontSize: "12px", bold: !0, onClick: function() { return w(Dr) }, textTransform: "uppercase", children: [f("LP reward APR"), " ", C(Dr)] }), Object(nn.jsxs)(rr, { color: "secondary", fontSize: "12px", bold: !0, onClick: function() { return w(kr) }, textTransform: "uppercase", children: [f("Liquidity"), " ", C(kr)] })] }), Object(nn.jsx)(ir, {}), D.length > 0 ? Object(nn.jsxs)(nn.Fragment, { children: [D.map((function(e, t) { return e ? Object(nn.jsxs)(i.a.Fragment, { children: [Object(nn.jsx)(Tr, { index: (h - 1) * x.a + t, poolData: e, chainId: r }), Object(nn.jsx)(ir, {})] }, e.address) : null })), n && Object(nn.jsx)(wr, {}), Object(nn.jsxs)(ar, { children: [Object(nn.jsx)(or, { onClick: function() { v(1 === h ? h : h - 1) }, children: Object(nn.jsx)(Kt.b, { color: 1 === h ? "textDisabled" : "primary" }) }), Object(nn.jsx)(Kt.lb, { children: f("Page %page% of %maxPage%", { page: h, maxPage: g }) }), Object(nn.jsx)(or, { onClick: function() { v(h === g ? h : h + 1) }, children: Object(nn.jsx)(Kt.e, { color: h === g ? "textDisabled" : "primary" }) })] })] }) : Object(nn.jsxs)(nn.Fragment, { children: [Object(nn.jsx)(Cr, {}), Object(nn.jsx)(Kt.k, {})] })] })
                },
                Fr = n(1826),
                Ar = n(1783),
                Ir = function(e) {
                    var t = e.x,
                        n = e.y,
                        r = e.width,
                        c = e.height,
                        a = e.fill;
                    return Object(nn.jsx)("g", { children: Object(nn.jsx)("rect", { x: t, y: n, fill: a, width: r, height: c, rx: "2" }) })
                },
                Lr = function(e) {
                    var t = e.locale,
                        n = e.payload,
                        r = e.setHoverValue,
                        c = e.setHoverDate;
                    return Object(o.useEffect)((function() { r(n.value), c(n.time.toLocaleString(t, { year: "numeric", day: "numeric", month: "short" })) }), [t, n.value, n.time, r, c]), null
                },
                qr = function(e) {
                    var t = e.data,
                        n = e.setHoverValue,
                        r = e.setHoverDate,
                        c = Object(Gt.b)().currentLanguage.locale,
                        a = Object(xn.a)().theme;
                    return t && 0 !== t.length ? Object(nn.jsx)(Nn.a, { width: "100%", height: "100%", children: Object(nn.jsxs)(Fr.a, { data: t, margin: { top: 5, right: 15, left: 0, bottom: 5 }, onMouseLeave: function() { r(void 0), n(void 0) }, children: [Object(nn.jsx)(Bn.a, { dataKey: "time", axisLine: !1, tickLine: !1, tickFormatter: function(e) { return e.toLocaleDateString(void 0, { day: "2-digit" }) }, minTickGap: 10 }), Object(nn.jsx)($n.a, { dataKey: "value", tickCount: 6, scale: "linear", axisLine: !1, tickLine: !1, color: a.colors.textSubtle, fontSize: "12px", tickFormatter: function(e) { return "$".concat(pn(e)) }, orientation: "right", tick: { dx: 10, fill: a.colors.textSubtle } }), Object(nn.jsx)(Vn.a, { cursor: { fill: a.colors.backgroundDisabled }, contentStyle: { display: "none" }, formatter: function(e, t, a) { return Object(nn.jsx)(Lr, { locale: c, payload: a.payload, setHoverValue: n, setHoverDate: r }) } }), Object(nn.jsx)(Ar.a, { dataKey: "value", fill: a.colors.primary, shape: function(e) { return Object(nn.jsx)(Ir, { height: e.height, width: e.width, x: e.x, y: e.y, fill: a.colors.primary }) } })] }) }) : Object(nn.jsx)(Qn, {})
                },
                zr = n(1842),
                Er = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4;
                    return "".concat(e.substring(0, t), "...").concat(e.substring(e.length - n))
                },
                Nr = Yt.default.div(Ce || (Ce = Object(j.a)(["\n  width: 100%;\n"]))),
                Pr = Yt.default.div(Te || (Te = Object(j.a)(["\n  display: grid;\n  grid-gap: 1em;\n  align-items: center;\n  grid-template-columns: 2fr 0.8fr repeat(4, 1fr);\n  padding: 0 24px;\n  @media screen and (max-width: 940px) {\n    grid-template-columns: 2fr repeat(4, 1fr);\n    & > *:nth-child(5) {\n      display: none;\n    }\n  }\n  @media screen and (max-width: 800px) {\n    grid-template-columns: 2fr repeat(2, 1fr);\n    & > *:nth-child(5) {\n      display: none;\n    }\n    & > *:nth-child(3) {\n      display: none;\n    }\n    & > *:nth-child(4) {\n      display: none;\n    }\n  }\n  @media screen and (max-width: 500px) {\n    grid-template-columns: 2fr 1fr;\n    & > *:nth-child(5) {\n      display: none;\n    }\n    & > *:nth-child(3) {\n      display: none;\n    }\n    & > *:nth-child(4) {\n      display: none;\n    }\n    & > *:nth-child(2) {\n      display: none;\n    }\n  }\n"]))),
                Br = Object(Yt.default)(Kt.F)(Ue || (Ue = Object(j.a)(["\n  align-items: center;\n  margin-right: 16px;\n  margin-top: 8px;\n  cursor: pointer;\n"]))),
                $r = "amountUSD",
                Vr = "timestamp",
                Mr = "sender",
                Wr = "amountToken0",
                Hr = "amountToken1",
                Rr = function() { var e = Object(nn.jsxs)(Pr, { children: [Object(nn.jsx)(Kt.fb, {}), Object(nn.jsx)(Kt.fb, {}), Object(nn.jsx)(Kt.fb, {}), Object(nn.jsx)(Kt.fb, {}), Object(nn.jsx)(Kt.fb, {}), Object(nn.jsx)(Kt.fb, {})] }); return Object(nn.jsxs)(nn.Fragment, { children: [e, e, e] }) },
                _r = function(e) {
                    var t = e.transaction,
                        n = Object(Gt.b)().t,
                        r = Math.abs(t.amountToken0),
                        c = Math.abs(t.amountToken1),
                        a = t.amountToken0 < 0 ? t.token0Symbol : t.token1Symbol,
                        o = t.amountToken1 < 0 ? t.token0Symbol : t.token1Symbol;
                    return Object(nn.jsxs)(Pr, { children: [Object(nn.jsx)(Kt.O, { href: Object(pt.e)(t.hash, "transaction"), children: Object(nn.jsx)(Kt.lb, { children: t.type === U.MINT ? n("Add %token0% and %token1%", { token0: t.token0Symbol, token1: t.token1Symbol }) : t.type === U.SWAP ? n("Swap %token0% for %token1%", { token0: o, token1: a }) : n("Remove %token0% and %token1%", { token0: t.token0Symbol, token1: t.token1Symbol }) }) }), Object(nn.jsxs)(Kt.lb, { children: ["$", pn(t.amountUSD)] }), Object(nn.jsx)(Kt.lb, { children: Object(nn.jsx)(Kt.lb, { children: "".concat(pn(r), " ").concat(t.token0Symbol) }) }), Object(nn.jsx)(Kt.lb, { children: Object(nn.jsx)(Kt.lb, { children: "".concat(pn(c), " ").concat(t.token1Symbol) }) }), Object(nn.jsx)(Kt.O, { href: Object(pt.e)(t.sender, "address"), children: Er(t.sender) }), Object(nn.jsx)(Kt.lb, { children: Object(zr.a)(1e3 * parseInt(t.timestamp, 10)) })] })
                },
                Yr = function(e) {
                    var t = e.transactions,
                        n = Object(o.useState)(Vr),
                        r = Object(u.a)(n, 2),
                        c = r[0],
                        a = r[1],
                        s = Object(o.useState)(!0),
                        l = Object(u.a)(s, 2),
                        d = l[0],
                        b = l[1],
                        j = Object(Gt.b)().t,
                        p = Object(Yt.useTheme)(),
                        f = Object(o.useState)(1),
                        m = Object(u.a)(f, 2),
                        O = m[0],
                        h = m[1],
                        v = Object(o.useState)(1),
                        y = Object(u.a)(v, 2),
                        k = y[0],
                        g = y[1],
                        S = Object(o.useState)(void 0),
                        D = Object(u.a)(S, 2),
                        w = D[0],
                        C = D[1],
                        T = Object(o.useMemo)((function() {
                            var e = [Wr, Hr];
                            return t ? t.slice().sort((function(t, n) {
                                if (t && n) {
                                    var r = t[c],
                                        a = n[c],
                                        o = e.includes(c) ? [Math.abs(r), Math.abs(a)] : [r, a],
                                        i = Object(u.a)(o, 2);
                                    return i[0] > i[1] ? 1 * (d ? -1 : 1) : -1 * (d ? -1 : 1)
                                }
                                return -1
                            })).filter((function(e) { return void 0 === w || e.type === w })).slice(x.a * (O - 1), O * x.a) : []
                        }), [t, O, c, d, w]);
                    Object(o.useEffect)((function() {
                        if (t) {
                            var e = t.filter((function(e) { return void 0 === w || e.type === w }));
                            e.length % x.a === 0 ? g(Math.floor(e.length / x.a)) : g(Math.floor(e.length / x.a) + 1)
                        }
                    }), [t, w]);
                    var F = Object(o.useCallback)((function(e) { e !== w && (C(e), h(1)) }), [w]),
                        A = Object(o.useCallback)((function(e) { a(e), b(c !== e || !d) }), [d, c]),
                        I = Object(o.useCallback)((function(e) { return c === e ? d ? "\u2193" : "\u2191" : "" }), [d, c]);
                    return Object(nn.jsxs)(Nr, { children: [Object(nn.jsxs)(Kt.F, { mb: "16px", children: [Object(nn.jsxs)(Kt.F, { flexDirection: ["column", "row"], children: [Object(nn.jsxs)(Br, { onClick: function() { return F(void 0) }, children: [Object(nn.jsx)(Kt.db, { color: p.custom.tertiary, onChange: function() { return null }, scale: "sm", checked: void 0 === w }), Object(nn.jsx)(Kt.lb, { ml: "8px", children: j("All") })] }), Object(nn.jsxs)(Br, { onClick: function() { return F(U.SWAP) }, children: [Object(nn.jsx)(Kt.db, { onChange: function() { return null }, scale: "sm", checked: w === U.SWAP }), Object(nn.jsx)(Kt.lb, { ml: "8px", children: j("Swaps") })] })] }), Object(nn.jsxs)(Kt.F, { flexDirection: ["column", "row"], children: [Object(nn.jsxs)(Br, { onClick: function() { return F(U.MINT) }, children: [Object(nn.jsx)(Kt.db, { onChange: function() { return null }, scale: "sm", checked: w === U.MINT }), Object(nn.jsx)(Kt.lb, { ml: "8px", children: j("Adds") })] }), Object(nn.jsxs)(Br, { onClick: function() { return F(U.BURN) }, children: [Object(nn.jsx)(Kt.db, { onChange: function() { return null }, scale: "sm", checked: w === U.BURN }), Object(nn.jsx)(Kt.lb, { ml: "8px", children: j("Removes") })] })] })] }), Object(nn.jsxs)(cr, { children: [Object(nn.jsxs)(Pr, { children: [Object(nn.jsx)(Kt.lb, { color: "secondary", fontSize: "12px", bold: !0, textTransform: "uppercase", children: j("Action") }), Object(nn.jsxs)(rr, { color: "secondary", fontSize: "12px", bold: !0, onClick: function() { return A($r) }, textTransform: "uppercase", children: [j("Total Value"), " ", I($r)] }), Object(nn.jsxs)(rr, { color: "secondary", fontSize: "12px", bold: !0, onClick: function() { return A(Wr) }, textTransform: "uppercase", children: [j("Token Amount"), " ", I(Wr)] }), Object(nn.jsxs)(rr, { color: "secondary", fontSize: "12px", bold: !0, onClick: function() { return A(Hr) }, textTransform: "uppercase", children: [j("Token Amount"), " ", I(Hr)] }), Object(nn.jsxs)(rr, { color: "secondary", fontSize: "12px", bold: !0, onClick: function() { return A(Mr) }, textTransform: "uppercase", children: [j("Account"), " ", I(Mr)] }), Object(nn.jsxs)(rr, { color: "secondary", fontSize: "12px", bold: !0, onClick: function() { return A(Vr) }, textTransform: "uppercase", children: [j("Time"), " ", I(Vr)] })] }), Object(nn.jsx)(ir, {}), t ? Object(nn.jsxs)(nn.Fragment, { children: [T.map((function(e, t) { return e ? Object(nn.jsxs)(i.a.Fragment, { children: [Object(nn.jsx)(_r, { transaction: e }), Object(nn.jsx)(ir, {})] }, t) : null })), 0 === T.length ? Object(nn.jsx)(Kt.F, { justifyContent: "center", children: Object(nn.jsx)(Kt.lb, { children: j("No Transactions") }) }) : void 0, Object(nn.jsxs)(ar, { children: [Object(nn.jsx)(or, { onClick: function() { h(1 === O ? O : O - 1) }, children: Object(nn.jsx)(Kt.b, { color: 1 === O ? "textDisabled" : "primary" }) }), Object(nn.jsx)(Kt.lb, { children: j("Page %page% of %maxPage%", { page: O, maxPage: k }) }), Object(nn.jsx)(or, { onClick: function() { h(O === k ? O : O + 1) }, children: Object(nn.jsx)(Kt.e, { color: O === k ? "textDisabled" : "primary" }) })] })] }) : Object(nn.jsxs)(nn.Fragment, { children: [Object(nn.jsx)(Rr, {}), Object(nn.jsx)(Kt.k, {})] })] })] })
                },
                Qr = Object(Yt.default)(Kt.F)(Fe || (Fe = Object(j.a)(["\n  justify-content: space-between;\n  flex-direction: column;\n  width: 100%;\n  padding: 0;\n  gap: 1em;\n\n  & > * {\n    width: 100%;\n  }\n\n  ", " {\n    flex-direction: row;\n  } ;\n"])), (function(e) { return e.theme.mediaQueries.md })),
                Kr = Yt.default.div(Ae || (Ae = Object(j.a)(["\n  border-radius: 22px;\n  border: 1px solid #3a3a3a;\n  background: ", "\n"])), (function(e) { return e.theme.custom.tertiary })),
                Gr = function() {
                    var e = Object(Gt.b)(),
                        t = e.t,
                        n = e.currentLanguage.locale,
                        r = Object(s.i)(),
                        c = Object(o.useState)(),
                        a = Object(u.a)(c, 2),
                        i = a[0],
                        l = a[1],
                        d = Object(o.useState)(),
                        b = Object(u.a)(d, 2),
                        j = b[0],
                        p = b[1],
                        f = Object(o.useState)(),
                        x = Object(u.a)(f, 2),
                        m = x[0],
                        O = x[1],
                        h = Object(o.useState)(),
                        v = Object(u.a)(h, 2),
                        y = v[0],
                        k = v[1],
                        g = zt(),
                        S = Object(u.a)(g, 1)[0],
                        D = Et(),
                        w = Object(u.a)(D, 1)[0],
                        C = Nt(),
                        T = Object(u.a)(C, 1)[0],
                        U = (new Date).toLocaleString(n, { month: "short", year: "numeric", day: "numeric" });
                    Object(o.useEffect)((function() { null == m && S && O(S.volumeUSD) }), [S, m]), Object(o.useEffect)((function() { null == i && S && l(S.liquidityUSD) }), [i, S]);
                    var F = Object(o.useMemo)((function() { return w ? w.map((function(e) { return { time: Object(zn.a)(e.date), value: e.liquidityUSD } })) : [] }), [w]),
                        A = Object(o.useMemo)((function() { return w ? w.map((function(e) { return { time: Object(zn.a)(e.date), value: e.volumeUSD } })) : [] }), [w]),
                        I = Vt(),
                        L = Object(o.useMemo)((function() { return Object.values(I).map((function(e) { return e.data })).filter((function(e) { return e })) }), [I]),
                        q = Pt(),
                        z = Object(o.useMemo)((function() { return Object.values(q).map((function(e) { return e.data })).filter((function(e) { return e })) }), [q]),
                        E = Object(o.useMemo)((function() { return Object.values(q).some((function(e) { return !e.data })) }), [q]);
                    return Object(nn.jsxs)(En.a, { children: [Object(nn.jsx)(Kt.lb, { mb: "16px", id: "info-overview-title", fontSize: "26px", fontWeight: "bold", children: t("BriseSwap Info & Analytics") }), Object(nn.jsxs)(Qr, { children: [Object(nn.jsx)(Kr, { children: Object(nn.jsxs)(Kt.k, { p: ["16px", "16px", "24px"], children: [Object(nn.jsx)(Kt.lb, { bold: !0, color: "secondary", children: t("Liquidity") }), i > 0 ? Object(nn.jsxs)(Kt.lb, { bold: !0, fontSize: "24px", children: ["$", pn(i)] }) : Object(nn.jsx)(Kt.fb, { width: "128px", height: "36px" }), Object(nn.jsx)(Kt.lb, { children: null !== j && void 0 !== j ? j : U }), Object(nn.jsx)(Kt.k, { height: "250px", children: Object(nn.jsx)(Xn, { data: F, setHoverValue: l, setHoverDate: p }) })] }) }), Object(nn.jsx)(Kr, { children: Object(nn.jsxs)(Kt.k, { p: ["16px", "16px", "24px"], children: [Object(nn.jsx)(Kt.lb, { bold: !0, color: "secondary", children: t("Volume 24H") }), m > 0 ? Object(nn.jsxs)(Kt.lb, { bold: !0, fontSize: "24px", children: ["$", pn(m)] }) : Object(nn.jsx)(Kt.fb, { width: "128px", height: "36px" }), Object(nn.jsx)(Kt.lb, { children: null !== y && void 0 !== y ? y : U }), Object(nn.jsx)(Kt.k, { height: "250px", children: Object(nn.jsx)(qr, { data: A, setHoverValue: O, setHoverDate: k }) })] }) })] }), Object(nn.jsx)(Kt.lb, { fontSize: "26px", fontWeight: "bold", mt: "40px", mb: "16px", children: t("Top Tokens") }), Object(nn.jsx)(Or, { tokenDatas: L, chainId: r.chainId }), Object(nn.jsx)(Kt.lb, { fontSize: "26px", fontWeight: "bold", mt: "40px", mb: "16px", children: t("Top Pools") }), Object(nn.jsx)(Ur, { poolDatas: z, loading: E, chainId: r.chainId }), Object(nn.jsx)(Kt.lb, { fontSize: "26px", fontWeight: "bold", mt: "40px", mb: "16px", children: t("Transactions") }), Object(nn.jsx)(Yr, { transactions: T })] })
                },
                Jr = Yt.default.div(Ie || (Ie = Object(j.a)(["\n  border-radius: 22px;\n  border: 1px solid #3a3a3a;\n  background: ", ";\n  margin: 16px 0px;\n"])), (function(e) { return e.theme.custom.tertiary })),
                Xr = function() {
                    var e = Object(Gt.b)().t,
                        t = Object(s.i)(),
                        n = Pt(),
                        r = Object(o.useMemo)((function() { return Object.values(n).map((function(e) { return e.data })).filter((function(e) { return e })) }), [n]),
                        c = Object(fn.n)(),
                        a = Object(u.a)(c, 1)[0],
                        i = $t(a);
                    return Object(nn.jsxs)(En.a, { children: [Object(nn.jsx)(Kt.H, { scale: "lg", mb: "16px", children: e("Your Watchlist") }), Object(nn.jsx)(Jr, { children: i.length > 0 ? Object(nn.jsx)(Ur, { poolDatas: i, chainId: t.chainId }) : Object(nn.jsx)(Kt.lb, { px: "24px", py: "16px", children: e("Saved pools will appear here") }) }), Object(nn.jsx)(Kt.H, { scale: "lg", mt: "40px", mb: "16px", id: "info-pools-title", children: e("All Pools") }), Object(nn.jsx)(Ur, { poolDatas: r, chainId: t.chainId })] })
                },
                Zr = n(1787),
                ec = n(795),
                tc = ["data", "setValue", "setLabel"],
                nc = function(e) {
                    var t = e.data,
                        n = e.setValue,
                        r = e.setLabel,
                        c = Object(tn.a)(e, tc),
                        a = Object(xn.a)().theme,
                        i = Object(Gt.b)().currentLanguage.locale,
                        s = Object(o.useRef)(null),
                        l = Object(o.useState)(),
                        d = Object(u.a)(l, 2),
                        b = d[0],
                        j = d[1],
                        p = Object(o.useCallback)((function() {
                            var e;
                            b && null !== s && void 0 !== s && null !== (e = s.current) && void 0 !== e && e.parentElement && (b.resize(s.current.parentElement.clientWidth - 32, 250), b.timeScale().fitContent(), b.timeScale().scrollToPosition(0, !1))
                        }), [b, s]),
                        f = "object" === typeof window;
                    return Object(o.useEffect)((function() { return f ? (window.addEventListener("resize", p), function() { return window.removeEventListener("resize", p) }) : null }), [f, s, p]), Object(o.useEffect)((function() {
                        var e;
                        if (!b && t && null !== s && void 0 !== s && null !== (e = s.current) && void 0 !== e && e.parentElement) {
                            var n = Object(Zr.a)(s.current, { height: 250, width: s.current.parentElement.clientWidth - 32, layout: { backgroundColor: "transparent", textColor: a.colors.textSubtle, fontFamily: "Kanit, sans-serif", fontSize: 12 }, rightPriceScale: { scaleMargins: { top: .1, bottom: .1 }, borderVisible: !1 }, timeScale: { borderVisible: !1, secondsVisible: !0, tickMarkFormatter: function(e) { return Object(ec.default)(1e3 * e, "MM/dd h:mm a") } }, watermark: { visible: !1 }, grid: { horzLines: { visible: !1 }, vertLines: { visible: !1 } }, crosshair: { horzLine: { visible: !1, labelVisible: !1 }, mode: 1, vertLine: { visible: !0, labelVisible: !1, style: 3, width: 1, color: a.colors.textSubtle, labelBackgroundColor: a.colors.primary } } });
                            n.timeScale().fitContent(), j(n)
                        }
                    }), [b, t, n, a]), Object(o.useEffect)((function() {
                        if (b && t) {
                            var e = b.addCandlestickSeries({ upColor: a.colors.success, downColor: a.colors.failure, borderDownColor: a.colors.failure, borderUpColor: a.colors.success, wickDownColor: a.colors.failure, wickUpColor: a.colors.success });
                            e.setData(t), b.subscribeCrosshairMove((function(t) {
                                if (null !== s && void 0 !== s && s.current && (void 0 === t || void 0 === t.time || t && t.point && t.point.x < 0 || t && t.point && t.point.x > s.current.clientWidth || t && t.point && t.point.y < 0 || t && t.point && t.point.y > 250)) n && n(void 0), r && r(void 0);
                                else if (e && t) {
                                    var c = t.time,
                                        a = new Date(1e3 * c),
                                        o = "".concat(a.toLocaleString(i, { year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "2-digit", timeZone: "UTC" }), " (UTC)"),
                                        l = t.seriesPrices.get(e);
                                    n && n(null === l || void 0 === l ? void 0 : l.open), r && r(o)
                                }
                            }))
                        }
                    }), [i, b, t, n, r, a]), Object(nn.jsxs)(nn.Fragment, { children: [!b && Object(nn.jsx)(Gn, {}), Object(nn.jsx)("div", Object(y.a)({ ref: s, id: "candle-chart" }, c))] })
                },
                rc = Object(Yt.default)(Kt.F)(Le || (Le = Object(j.a)(["\n  overflow-x: scroll;\n  padding: 0;\n  border-radius: 22px 22px 0 0;\n  ::-webkit-scrollbar {\n    display: none;\n  }\n  scrollbar-width: none; /* Firefox */\n"]))),
                cc = Object(Yt.default)(Kt.F)(qe || (qe = Object(j.a)(["\n  justify-content: space-between;\n  background-color: ", ";\n  width: 100%;\n"])), (function(e) { return e.theme.custom.secondary })),
                ac = Yt.default.button(ze || (ze = Object(j.a)(["\n  display: inline-flex;\n  justify-content: center;\n  cursor: pointer;\n  flex: 1;\n  border: 0;\n  outline: 0;\n  padding: 16px;\n  margin: 0;\n  border-radius: 22px 22px 0 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: ", ";\n  background-color: ", ";\n"])), (function(e) { var t = e.theme; return e.isActive ? t.colors.text : t.colors.textSubtle }), (function(e) { var t = e.theme; return e.isActive ? t.custom.tertiary : t.custom.secondary })),
                oc = function(e) { var t = e.children; return Object(nn.jsx)(rc, { p: ["0 4px", "0 16px"], children: Object(nn.jsx)(cc, { children: t }) }) },
                ic = Yt.default.div(Ee || (Ee = Object(j.a)(["\n  border-radius: 22px;\n  border: 1px solid #3a3a3a;\n  background: ", ";\n  margin: 16px 0px;\n"])), (function(e) { return e.theme.custom.tertiary }));
            ! function(e) { e[e.LIQUIDITY = 0] = "LIQUIDITY", e[e.VOLUME = 1] = "VOLUME", e[e.PRICE = 2] = "PRICE" }(Ne || (Ne = {}));
            var sc, lc, uc, dc, bc, jc, pc, fc, xc, mc, Oc, hc, vc = function(e) {
                    var t = e.variant,
                        n = e.chartData,
                        r = e.tokenData,
                        c = e.tokenPriceData,
                        a = Object(o.useState)(Ne.VOLUME),
                        i = Object(u.a)(a, 2),
                        s = i[0],
                        l = i[1],
                        d = Object(o.useState)(),
                        b = Object(u.a)(d, 2),
                        j = b[0],
                        p = b[1],
                        f = Object(o.useState)(),
                        x = Object(u.a)(f, 2),
                        m = x[0],
                        O = x[1],
                        h = Object(Gt.b)(),
                        v = h.t,
                        y = h.currentLanguage.locale,
                        k = (new Date).toLocaleString(y, { month: "short", year: "numeric", day: "numeric" }),
                        g = Object(o.useMemo)((function() { return n ? n.map((function(e) { return { time: Object(zn.a)(e.date), value: e.liquidityUSD } })) : [] }), [n]),
                        S = Object(o.useMemo)((function() { return n ? n.map((function(e) { return { time: Object(zn.a)(e.date), value: e.volumeUSD } })) : [] }), [n]);
                    return Object(nn.jsxs)(ic, {
                        children: [Object(nn.jsxs)(oc, { children: [Object(nn.jsx)(ac, { isActive: s === Ne.VOLUME, onClick: function() { return l(Ne.VOLUME) }, children: Object(nn.jsx)(Kt.lb, { children: v("Volume") }) }), Object(nn.jsx)(ac, { isActive: s === Ne.LIQUIDITY, onClick: function() { return l(Ne.LIQUIDITY) }, children: Object(nn.jsx)(Kt.lb, { children: v("Liquidity") }) })] }), Object(nn.jsxs)(Kt.F, {
                            flexDirection: "column",
                            px: "24px",
                            pt: "24px",
                            children: [function() {
                                var e = null;
                                if (j) e = pn(j);
                                else if (s === Ne.VOLUME && S.length > 0) {
                                    var t;
                                    e = pn(null === (t = S[S.length - 1]) || void 0 === t ? void 0 : t.value)
                                } else if (s === Ne.LIQUIDITY && g.length > 0) {
                                    var n;
                                    e = pn(null === (n = g[g.length - 1]) || void 0 === n ? void 0 : n.value)
                                } else s === Ne.PRICE && null !== r && void 0 !== r && r.priceUSD && (e = pn(r.priceUSD));
                                return e ? Object(nn.jsxs)(Kt.lb, { fontSize: "24px", bold: !0, children: ["$", e] }) : Object(nn.jsx)(Kt.fb, { height: "36px", width: "128px" })
                            }(), Object(nn.jsx)(Kt.lb, { small: !0, color: "secondary", children: m || k })]
                        }), Object(nn.jsx)(Kt.k, { px: "24px", height: "token" === t ? "250px" : "335px", children: s === Ne.LIQUIDITY ? Object(nn.jsx)(Xn, { data: g, setHoverValue: p, setHoverDate: O }) : s === Ne.VOLUME ? Object(nn.jsx)(qr, { data: S, setHoverValue: p, setHoverDate: O }) : s === Ne.PRICE ? Object(nn.jsx)(nc, { data: c, setValue: p, setLabel: O }) : null })]
                    })
                },
                yc = n(18),
                kc = Yt.default.div(sc || (sc = Object(j.a)(["\n  display: grid;\n  grid-template-columns: 300px 1fr;\n  grid-gap: 1em;\n  margin-top: 16px;\n  @media screen and (max-width: 800px) {\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr;\n  }\n"]))),
                gc = Object(Yt.default)(Kt.F)(lc || (lc = Object(j.a)(["\n  padding: 8px 0px;\n  margin-right: 16px;\n  :hover {\n    cursor: pointer;\n    opacity: 0.6;\n  }\n"]))),
                Sc = Object(Yt.default)(Kt.F)(uc || (uc = Object(j.a)(["\n  border: 1px solid #3a3a3a;\n  background-color: ", ";\n  padding: 16px;\n  flex-direction: column;\n  gap: 8px;\n  margin-top: 8px;\n  border-radius: 22px;\n  max-width: 280px;\n"])), (function(e) { return e.theme.custom.secondary })),
                Dc = Yt.default.div(dc || (dc = Object(j.a)(["\n  border-radius: 22px;\n  border: 1px solid #3a3a3a;\n  background: ", ";\n  margin: 16px 0px;\n"])), (function(e) { return e.theme.custom.tertiary })),
                wc = function(e) {
                    var t = e.match.params.address,
                        n = Object(Gt.b)().t,
                        r = Object(o.useState)(0),
                        c = Object(u.a)(r, 2),
                        a = c[0],
                        i = c[1],
                        s = Object(Kt.Cb)(n("Based on last 7 days' performance. Does not account for impermanent loss"), {}),
                        d = s.tooltip,
                        j = s.tooltipVisible,
                        p = s.targetRef;
                    Object(o.useEffect)((function() { window.scrollTo(0, 0) }), []);
                    var f = t.toLowerCase(),
                        x = $t([f])[0],
                        m = function(e) {
                            var t = Object(dt.b)(),
                                n = Object(dt.c)((function(t) { return t.info.pools.byAddress[e] })),
                                r = null === n || void 0 === n ? void 0 : n.chartData,
                                c = Object(o.useState)(!1),
                                a = Object(u.a)(c, 2),
                                i = a[0],
                                s = a[1];
                            return Object(o.useEffect)((function() {
                                var n = function() {
                                    var n = Object(l.a)(b.a.mark((function n() {
                                        var r, c, a;
                                        return b.a.wrap((function(n) {
                                            for (;;) switch (n.prev = n.next) {
                                                case 0:
                                                    return n.next = 2, mt(e);
                                                case 2:
                                                    r = n.sent, c = r.error, a = r.data, !c && a && t(Object(qt.d)({ poolAddress: e, chartData: a })), c && s(c);
                                                case 7:
                                                case "end":
                                                    return n.stop()
                                            }
                                        }), n)
                                    })));
                                    return function() { return n.apply(this, arguments) }
                                }();
                                r || i || n()
                            }), [e, t, i, r]), r
                        }(f),
                        O = function(e) {
                            var t = Object(dt.b)(),
                                n = Object(dt.c)((function(t) { return t.info.pools.byAddress[e] })),
                                r = null === n || void 0 === n ? void 0 : n.transactions,
                                c = Object(o.useState)(!1),
                                a = Object(u.a)(c, 2),
                                i = a[0],
                                s = a[1];
                            return Object(o.useEffect)((function() {
                                var n = function() {
                                    var n = Object(l.a)(b.a.mark((function n() {
                                        var r, c, a;
                                        return b.a.wrap((function(n) {
                                            for (;;) switch (n.prev = n.next) {
                                                case 0:
                                                    return n.next = 2, vt(e);
                                                case 2:
                                                    r = n.sent, c = r.error, a = r.data, c ? s(!0) : t(Object(qt.f)({ poolAddress: e, transactions: a }));
                                                case 6:
                                                case "end":
                                                    return n.stop()
                                            }
                                        }), n)
                                    })));
                                    return function() { return n.apply(this, arguments) }
                                }();
                                r || i || n()
                            }), [e, t, i, r]), r
                        }(f),
                        h = Object(yc.a)().chainId;
                    return Object(nn.jsx)(En.a, { symbol: x ? "".concat(null === x || void 0 === x ? void 0 : x.token0.symbol, " / ").concat(null === x || void 0 === x ? void 0 : x.token1.symbol) : null, children: x ? Object(nn.jsxs)(nn.Fragment, { children: [Object(nn.jsxs)(Kt.F, { flexDirection: "column", children: [Object(nn.jsxs)(Kt.F, { justifyContent: "space-between", alignItems: "center", mb: ["8px", null], children: [Object(nn.jsxs)(Kt.F, { children: [Object(nn.jsx)(dn, { address0: x.token0.address, address1: x.token1.address, size: 32 }), Object(nn.jsx)(Kt.lb, { ml: "38px", bold: !0, fontSize: "26px", id: "info-pool-pair-title", children: "".concat(x.token0.symbol, " / ").concat(x.token1.symbol) })] }), Object(nn.jsx)(Kt.F, { justifyContent: [null, null, "flex-end"], mt: ["8px", "8px", 0], children: Object(nn.jsx)(Kt.O, { mr: "8px", href: Object(pt.e)(f, "address"), children: n("View on Block Explorer") }) })] }), Object(nn.jsxs)(Kt.F, { justifyContent: "space-between", flexDirection: ["column", "column", "column", "row"], children: [Object(nn.jsxs)(Kt.F, { flexDirection: ["column", "column", "row"], mb: ["8px", "8px", null], children: [Object(nn.jsx)(Qt.b, { to: "/info/token/".concat(x.token0.address), children: Object(nn.jsxs)(gc, { children: [Object(nn.jsx)(ln, { address: x.token0.address, size: "24px" }), Object(nn.jsx)(Kt.lb, { fontSize: "16px", ml: "4px", style: { whiteSpace: "nowrap" }, width: "fit-content", children: "1 ".concat(x.token0.symbol, " =  ").concat(pn(x.token1Price, { notation: "standard", displayThreshold: .001, tokenPrecision: !0 }), " ").concat(x.token1.symbol) })] }) }), Object(nn.jsx)(Qt.b, { to: "/info/token/".concat(x.token1.address), children: Object(nn.jsxs)(gc, { ml: [null, null, "10px"], children: [Object(nn.jsx)(ln, { address: x.token1.address, size: "24px" }), Object(nn.jsx)(Kt.lb, { fontSize: "16px", ml: "4px", style: { whiteSpace: "nowrap" }, width: "fit-content", children: "1 ".concat(x.token1.symbol, " =  ").concat(pn(x.token0Price, { notation: "standard", displayThreshold: .001, tokenPrecision: !0 }), " ").concat(x.token0.symbol) })] }) })] }), Object(nn.jsx)(Kt.F, { children: Object(nn.jsx)(Qt.b, { to: "/swap/".concat(h, "/").concat(x.token0.address), children: Object(nn.jsx)(Kt.l, { children: n("Trade") }) }) })] })] }), Object(nn.jsxs)(kc, { children: [Object(nn.jsxs)(Kt.k, { children: [Object(nn.jsx)(Dc, { children: Object(nn.jsxs)(Kt.k, { p: "24px", children: [Object(nn.jsxs)(Kt.F, { justifyContent: "space-between", children: [Object(nn.jsxs)(Kt.F, { flex: "1", flexDirection: "column", children: [Object(nn.jsx)(Kt.lb, { color: "secondary", bold: !0, fontSize: "12px", textTransform: "uppercase", children: n("Liquidity") }), Object(nn.jsxs)(Kt.lb, { fontSize: "24px", bold: !0, children: ["$", pn(x.liquidityUSD)] }), Object(nn.jsx)(nr, { value: x.liquidityUSDChange })] }), Object(nn.jsxs)(Kt.F, { flex: "1", flexDirection: "column", children: [Object(nn.jsx)(Kt.lb, { color: "secondary", bold: !0, fontSize: "12px", textTransform: "uppercase", children: n("LP reward APR") }), Object(nn.jsxs)(Kt.lb, { fontSize: "24px", bold: !0, children: [pn(x.lpApr7d), "%"] }), Object(nn.jsxs)(Kt.F, { alignItems: "center", children: [Object(nn.jsx)("span", { ref: p, children: Object(nn.jsx)(Kt.I, { color: "textSubtle" }) }), Object(nn.jsx)(Kt.lb, { ml: "4px", fontSize: "12px", color: "textSubtle", children: n("7D performance") }), j && d] })] })] }), Object(nn.jsx)(Kt.lb, { color: "secondary", bold: !0, mt: "24px", fontSize: "12px", textTransform: "uppercase", children: n("Total Tokens Locked") }), Object(nn.jsxs)(Sc, { children: [Object(nn.jsxs)(Kt.F, { justifyContent: "space-between", children: [Object(nn.jsxs)(Kt.F, { children: [Object(nn.jsx)(ln, { address: x.token0.address, size: "24px" }), Object(nn.jsx)(Kt.lb, { small: !0, color: "textSubtle", ml: "8px", children: x.token0.symbol })] }), Object(nn.jsx)(Kt.lb, { small: !0, children: pn(x.liquidityToken0) })] }), Object(nn.jsxs)(Kt.F, { justifyContent: "space-between", children: [Object(nn.jsxs)(Kt.F, { children: [Object(nn.jsx)(ln, { address: x.token1.address, size: "24px" }), Object(nn.jsx)(Kt.lb, { small: !0, color: "textSubtle", ml: "8px", children: x.token1.symbol })] }), Object(nn.jsx)(Kt.lb, { small: !0, children: pn(x.liquidityToken1) })] })] })] }) }), Object(nn.jsx)(Dc, { children: Object(nn.jsxs)(Kt.F, { flexDirection: "column", p: "20px", mt: "16px", children: [Object(nn.jsx)(In.f, { selectedTabClassName: "is-selected", selectedTabPanelClassName: "is-selected", children: Object(nn.jsxs)(In.c, { style: { marginTop: "0px" }, children: [Object(nn.jsx)(In.e, { style: { borderRadius: "5px 0px 0px 5px", padding: "0px" }, onClick: function() { return i(0) }, children: Object(nn.jsx)(Kt.lb, { textAlign: "center", fontSize: "14px", bold: !0, color: "white", padding: "10px", width: "100px", children: n("24H") }) }), Object(nn.jsx)(In.e, { style: { borderRadius: "0px 5px 5px 0px", padding: "0px" }, onClick: function() { return i(1) }, children: Object(nn.jsx)(Kt.lb, { textAlign: "center", fontSize: "14px", bold: !0, color: "white", padding: "10px", width: "100px", children: n("7D") }) })] }) }), Object(nn.jsxs)(Kt.F, { mt: "24px", children: [Object(nn.jsxs)(Kt.F, { flex: "1", flexDirection: "column", children: [Object(nn.jsx)(Kt.lb, { color: "secondary", fontSize: "12px", bold: !0, textTransform: "uppercase", children: n(a ? "Volume 7D" : "Volume 24H") }), Object(nn.jsxs)(Kt.lb, { fontSize: "24px", bold: !0, children: ["$", pn(a ? x.volumeUSDWeek : x.volumeUSD)] }), Object(nn.jsx)(nr, { value: a ? x.volumeUSDChangeWeek : x.volumeUSDChange })] }), Object(nn.jsxs)(Kt.F, { flex: "1", flexDirection: "column", children: [Object(nn.jsx)(Kt.lb, { color: "secondary", fontSize: "12px", bold: !0, textTransform: "uppercase", children: n(a ? "LP reward fees 7D" : "LP reward fees 24H") }), Object(nn.jsxs)(Kt.lb, { fontSize: "24px", bold: !0, children: ["$", pn(a ? x.lpFees7d : x.lpFees24h)] }), Object(nn.jsx)(Kt.lb, { color: "textSubtle", fontSize: "12px", children: n("out of $%totalFees% total fees", { totalFees: pn(a ? x.totalFees7d : x.totalFees24h) }) })] })] })] }) })] }), Object(nn.jsx)(vc, { variant: "pool", chartData: m })] }), Object(nn.jsx)(Kt.H, { mb: "16px", mt: "40px", scale: "lg", children: n("Transactions") }), Object(nn.jsx)(Yr, { transactions: O })] }) : Object(nn.jsx)(Kt.F, { mt: "80px", justifyContent: "center", children: Object(nn.jsx)(Kt.gb, { size: 40 }) }) })
                },
                Cc = Yt.default.div(bc || (bc = Object(j.a)(["\n  border-radius: 22px;\n  border: 1px solid #3a3a3a;\n  background: ", ";\n  margin: 16px 0px;\n"])), (function(e) { return e.theme.custom.tertiary })),
                Tc = Object(Yt.default)(Qt.b)(jc || (jc = Object(j.a)(["\n  display: inline-block;\n  min-width: 190px;\n  margin-left: 16px;\n  :hover {\n    cursor: pointer;\n    opacity: 0.6;\n  }\n"]))),
                Uc = Object(Yt.default)(Kt.k)(pc || (pc = Object(j.a)(["\n  border: 1px solid ", ";\n  border-radius: 22px;\n  padding: 16px;\n"])), (function(e) { return e.theme.colors.cardBorder })),
                Fc = Yt.default.div(fc || (fc = Object(j.a)(["\n  width: 100%;\n  overflow-x: auto;\n  padding: 16px 0;\n  white-space: nowrap;\n  ::-webkit-scrollbar {\n    display: none;\n  }\n"]))),
                Ac = function(e) {
                    var t = e.tokenData,
                        n = e.chainId;
                    return Object(nn.jsx)(Tc, { to: "/info/token/".concat(t.address, "/").concat(n), children: Object(nn.jsx)(Uc, { children: Object(nn.jsxs)(Kt.F, { children: [Object(nn.jsx)(Kt.k, { width: "32px", height: "32px", children: Object(nn.jsx)(ln, { address: t.address, size: "32px" }) }), Object(nn.jsxs)(Kt.k, { ml: "16px", children: [Object(nn.jsx)(Kt.lb, { children: t.symbol }), Object(nn.jsxs)(Kt.F, { alignItems: "center", children: [Object(nn.jsxs)(Kt.lb, { fontSize: "14px", mr: "6px", lineHeight: "16px", children: ["$", pn(t.priceUSD)] }), Object(nn.jsx)(nr, { fontSize: "14px", value: t.priceUSDChange })] })] })] }) }) })
                },
                Ic = function(e) {
                    var t = e.chainId,
                        n = Vt(),
                        r = Object(Gt.b)().t,
                        c = Object(o.useMemo)((function() {
                            return Object.values(n).sort((function(e, t) {
                                var n = e.data,
                                    r = t.data;
                                return n && r ? Math.abs(null === n || void 0 === n ? void 0 : n.priceUSDChange) > Math.abs(null === r || void 0 === r ? void 0 : r.priceUSDChange) ? -1 : 1 : -1
                            })).slice(0, Math.min(20, Object.values(n).length))
                        }), [n]),
                        a = Object(o.useRef)(null),
                        i = Object(o.useRef)(!0);
                    return Object(o.useEffect)((function() { var e = setInterval((function() { a.current && (a.current.scrollLeft === a.current.scrollWidth - a.current.clientWidth ? i.current = !1 : 0 === a.current.scrollLeft && (i.current = !0), a.current.scrollTo(i.current ? a.current.scrollLeft + 1 : a.current.scrollLeft - 1, 0)) }), 30); return function() { clearInterval(e) } }), []), 0 !== c.length && c.some((function(e) { return e.data })) ? Object(nn.jsxs)(Cc, { children: [Object(nn.jsx)(Kt.lb, { ml: "16px", mt: "8px", children: r("Top Movers") }), Object(nn.jsx)(Fc, { ref: a, children: c.map((function(e) { var n; return e.data ? Object(nn.jsx)(Ac, { tokenData: e.data, chainId: t }, "top-card-token-".concat(null === (n = e.data) || void 0 === n ? void 0 : n.address)) : null })) })] }) : null
                },
                Lc = Yt.default.div(xc || (xc = Object(j.a)(["\n  border-radius: 22px;\n  border: 1px solid #3a3a3a;\n  background: ", "\n"])), (function(e) { return e.theme.custom.tertiary })),
                qc = function() {
                    var e = Object(s.i)(),
                        t = Object(Gt.b)().t;
                    Object(o.useEffect)((function() { window.scrollTo(0, 0) }), []);
                    var n = Vt(),
                        r = Object(o.useMemo)((function() { return Object.values(n).map((function(e) { return e.data })).filter((function(e) { return e })) }), [n]),
                        c = Object(fn.o)(),
                        a = Object(u.a)(c, 1)[0],
                        i = Wt(a);
                    return Object(nn.jsxs)(En.a, { children: [Object(nn.jsx)(Kt.lb, { fontSize: "26px", fontWeight: "bold", mb: "16px", children: t("Your Watchlist") }), a.length > 0 ? Object(nn.jsx)(Or, { tokenDatas: i, chainId: e.chainId }) : Object(nn.jsx)(Lc, { children: Object(nn.jsx)(Kt.lb, { py: "16px", px: "24px", children: t("Saved tokens will appear here") }) }), Object(nn.jsx)(Ic, { chainId: e.chainId }), Object(nn.jsx)(Kt.lb, { fontSize: "26px", fontWeight: "bold", mt: "40px", mb: "16px", id: "info-tokens-title", children: t("All Tokens") }), Object(nn.jsx)(Or, { tokenDatas: r, chainId: e.chainId })] })
                },
                zc = n(149),
                Ec = function(e) {
                    var t = Object(o.useState)(void 0),
                        n = Object(u.a)(t, 2),
                        r = n[0],
                        c = n[1];
                    return Object(o.useEffect)((function() {
                        var t = function() {
                            var t = Object(l.a)(b.a.mark((function t() {
                                var n;
                                return b.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, fetch("".concat("https://3rdparty-apis.coinmarketcap.com/v1/cryptocurrency/contract?address=").concat(e));
                                        case 2:
                                            200 === (n = t.sent).status && n.json().then((function(e) {
                                                var t = e.data;
                                                c(t.url)
                                            }));
                                        case 4:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function() { return t.apply(this, arguments) }
                        }();
                        e && t()
                    }), [e]), r
                },
                Nc = n.p + "static/media/CoinMarketCaps.67379e07.svg",
                Pc = Yt.default.div(mc || (mc = Object(j.a)(["\n  margin-top: 16px;\n  display: grid;\n  grid-template-columns: 260px 1fr;\n  grid-gap: 1em;\n  @media screen and (max-width: 800px) {\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr;\n  }\n"]))),
                Bc = Object(Yt.default)(Kt.N)(Oc || (Oc = Object(j.a)(["\n  width: 24px;\n  height: 24px;\n  margin-right: 8px;\n\n  & :hover {\n    opacity: 0.8;\n  }\n"]))),
                $c = Yt.default.div(hc || (hc = Object(j.a)(["\n  border-radius: 22px;\n  border: 1px solid #3a3a3a;\n  background: ", ";\n  margin: 16px 0px;\n"])), (function(e) { return e.theme.custom.tertiary })),
                Vc = { weeks: 1 },
                Mc = function(e) {
                    var t = e.match.params.address,
                        n = Object(s.i)(),
                        r = Object(Gt.b)().t;
                    Object(o.useEffect)((function() { window.scrollTo(0, 0) }), []);
                    var c = t.toLowerCase(),
                        a = Ec(c),
                        i = function(e) {
                            var t, n = Vt(),
                                r = Mt();
                            if (e && Object(pt.h)(e)) return n[e] || r([e]), null === (t = n[e]) || void 0 === t ? void 0 : t.data
                        }(c),
                        d = function(e) {
                            var t = Object(dt.b)(),
                                n = Object(dt.c)((function(t) { return t.info.tokens.byAddress[e] })).poolAddresses,
                                r = Object(o.useState)(!1),
                                c = Object(u.a)(r, 2),
                                a = c[0],
                                i = c[1];
                            return Object(o.useEffect)((function() {
                                var r = function() {
                                    var n = Object(l.a)(b.a.mark((function n() {
                                        var r, c, a;
                                        return b.a.wrap((function(n) {
                                            for (;;) switch (n.prev = n.next) {
                                                case 0:
                                                    return n.next = 2, Lt(e);
                                                case 2:
                                                    r = n.sent, c = r.error, a = r.addresses, !c && a && t(Object(qt.c)({ tokenAddress: e, poolAddresses: a })), c && i(c);
                                                case 7:
                                                case "end":
                                                    return n.stop()
                                            }
                                        }), n)
                                    })));
                                    return function() { return n.apply(this, arguments) }
                                }();
                                n || a || r()
                            }), [e, t, a, n]), n
                        }(c),
                        j = $t(null !== d && void 0 !== d ? d : []),
                        p = function(e) {
                            var t = Object(dt.b)(),
                                n = Object(dt.c)((function(t) { return t.info.tokens.byAddress[e] })).transactions,
                                r = Object(o.useState)(!1),
                                c = Object(u.a)(r, 2),
                                a = c[0],
                                i = c[1];
                            return Object(o.useEffect)((function() {
                                var r = function() {
                                    var n = Object(l.a)(b.a.mark((function n() {
                                        var r, c, a;
                                        return b.a.wrap((function(n) {
                                            for (;;) switch (n.prev = n.next) {
                                                case 0:
                                                    return n.next = 2, wt(e);
                                                case 2:
                                                    r = n.sent, c = r.error, a = r.data, c ? i(!0) : a && t(Object(qt.m)({ tokenAddress: e, transactions: a }));
                                                case 6:
                                                case "end":
                                                    return n.stop()
                                            }
                                        }), n)
                                    })));
                                    return function() { return n.apply(this, arguments) }
                                }();
                                n || a || r()
                            }), [e, t, a, n]), n
                        }(c),
                        f = function(e) {
                            var t = Object(dt.b)(),
                                n = Object(dt.c)((function(t) { return t.info.tokens.byAddress[e] })).chartData,
                                r = Object(o.useState)(!1),
                                c = Object(u.a)(r, 2),
                                a = c[0],
                                i = c[1];
                            return Object(o.useEffect)((function() {
                                var r = function() {
                                    var n = Object(l.a)(b.a.mark((function n() {
                                        var r, c, a;
                                        return b.a.wrap((function(n) {
                                            for (;;) switch (n.prev = n.next) {
                                                case 0:
                                                    return n.next = 2, gt(e);
                                                case 2:
                                                    r = n.sent, c = r.error, a = r.data, !c && a && t(Object(qt.j)({ tokenAddress: e, chartData: a })), c && i(c);
                                                case 7:
                                                case "end":
                                                    return n.stop()
                                            }
                                        }), n)
                                    })));
                                    return function() { return n.apply(this, arguments) }
                                }();
                                n || a || r()
                            }), [e, t, a, n]), n
                        }(c),
                        m = Object(yc.a)().chainId,
                        O = function(e, t, n) {
                            var r = Object(dt.b)(),
                                c = Object(dt.c)((function(t) { return t.info.tokens.byAddress[e] })),
                                a = null === c || void 0 === c ? void 0 : c.priceData[t],
                                i = Object(o.useState)(!1),
                                s = Object(u.a)(i, 2),
                                d = s[0],
                                j = s[1],
                                p = null === c || void 0 === c ? void 0 : c.priceData.oldestFetchedTimestamp,
                                f = 1e3 * Object(k.a)(new Date),
                                x = Object(k.a)(Object(bt.a)(Object(jt.a)(f, n)));
                            return Object(o.useEffect)((function() {
                                var n = function() {
                                    var n = Object(l.a)(b.a.mark((function n() {
                                        var c, a, o;
                                        return b.a.wrap((function(n) {
                                            for (;;) switch (n.prev = n.next) {
                                                case 0:
                                                    return n.next = 2, Ft(e, t, x);
                                                case 2:
                                                    c = n.sent, a = c.data, o = c.error, a && r(Object(qt.l)({ tokenAddress: e, secondsInterval: t, priceData: a, oldestFetchedTimestamp: x })), o && j(!0);
                                                case 7:
                                                case "end":
                                                    return n.stop()
                                            }
                                        }), n)
                                    })));
                                    return function() { return n.apply(this, arguments) }
                                }();
                                a || d || n()
                            }), [e, r, d, t, p, a, x, n]), a
                        }(c, x.e, Vc),
                        h = Object(o.useMemo)((function() { if (O && i && O.length > 0) return [].concat(Object(Ye.a)(O), [{ time: (new Date).getTime() / 1e3, open: O[O.length - 1].close, close: null === i || void 0 === i ? void 0 : i.priceUSD, high: null === i || void 0 === i ? void 0 : i.priceUSD, low: O[O.length - 1].close }]) }), [O, i]);
                    return Object(nn.jsx)(En.a, { symbol: null === i || void 0 === i ? void 0 : i.symbol, children: i ? i.exists ? Object(nn.jsxs)(nn.Fragment, { children: [Object(nn.jsxs)(Kt.F, { justifyContent: "space-between", mb: "8px", flexDirection: ["column", "column", "row"], children: [Object(nn.jsxs)(Kt.F, { alignItems: "center", children: [Object(nn.jsx)(ln, { size: "32px", address: c }), Object(nn.jsx)(Kt.lb, { ml: "12px", bold: !0, lineHeight: "0.7", fontSize: "26px", id: "info-token-name-title", children: i.name }), Object(nn.jsxs)(Kt.lb, { ml: "12px", lineHeight: "1", color: "textSubtle", fontSize: "18px", children: ["(", i.symbol, ")"] })] }), Object(nn.jsxs)(Kt.F, { justifyContent: [null, null, "flex-end"], mt: ["8px", "8px", 0], children: [Object(nn.jsx)(Kt.O, { mr: "8px", color: "primary", href: Object(pt.e)(c, "address"), children: r("View on Block Explorer") }), a && Object(nn.jsx)(Bc, { href: a, rel: "noopener noreferrer nofollow", target: "_blank", children: Object(nn.jsx)(Kt.L, { src: Nc, height: 22, width: 22, alt: r("View token on CoinMarketCap") }) })] })] }), Object(nn.jsxs)(Kt.F, { justifyContent: "space-between", flexDirection: ["column", "column", "column", "row"], children: [Object(nn.jsx)(Kt.F, { flexDirection: "column", mb: ["8px", null], children: Object(nn.jsxs)(Kt.F, { mt: "8px", ml: "46px", alignItems: "center", children: [Object(nn.jsxs)(Kt.lb, { mr: "16px", bold: !0, fontSize: "24px", children: ["$", pn(i.priceUSD, { notation: "standard" })] }), Object(nn.jsx)(nr, { value: i.priceUSDChange, fontWeight: 600 })] }) }), Object(nn.jsx)(Kt.F, { children: Object(nn.jsx)(Qt.b, { to: "/swap/".concat(m || "56", "/").concat(c), children: Object(nn.jsx)(Kt.l, { children: r("Trade") }) }) })] }), Object(nn.jsxs)(Pc, { children: [Object(nn.jsx)($c, { children: Object(nn.jsxs)(Kt.k, { p: "24px", children: [Object(nn.jsx)(Kt.lb, { bold: !0, small: !0, color: "secondary", fontSize: "12px", textTransform: "uppercase", children: r("Liquidity") }), Object(nn.jsxs)(Kt.lb, { bold: !0, fontSize: "24px", children: ["$", pn(i.liquidityUSD)] }), Object(nn.jsx)(nr, { value: i.liquidityUSDChange }), Object(nn.jsx)(Kt.lb, { mt: "24px", bold: !0, color: "secondary", fontSize: "12px", textTransform: "uppercase", children: r("Volume 24H") }), Object(nn.jsxs)(Kt.lb, { bold: !0, fontSize: "24px", textTransform: "uppercase", children: ["$", pn(i.volumeUSD)] }), Object(nn.jsx)(nr, { value: i.volumeUSDChange }), Object(nn.jsx)(Kt.lb, { mt: "24px", bold: !0, color: "secondary", fontSize: "12px", textTransform: "uppercase", children: r("Volume 7D") }), Object(nn.jsxs)(Kt.lb, { bold: !0, fontSize: "24px", children: ["$", pn(i.volumeUSDWeek)] }), Object(nn.jsx)(Kt.lb, { mt: "24px", bold: !0, color: "secondary", fontSize: "12px", textTransform: "uppercase", children: r("Transactions 24H") }), Object(nn.jsx)(Kt.lb, { bold: !0, fontSize: "24px", children: pn(i.txCount, { isInteger: !0 }) })] }) }), Object(nn.jsx)(vc, { variant: "token", chartData: f, tokenData: i, tokenPriceData: h })] }), Object(nn.jsx)(Kt.H, { scale: "lg", mb: "16px", mt: "40px", children: r("Pools") }), Object(nn.jsx)(Ur, { poolDatas: j, chainId: n.chainId }), Object(nn.jsx)(Kt.H, { scale: "lg", mb: "16px", mt: "40px", children: r("Transactions") }), Object(nn.jsx)(Yr, { transactions: p })] }) : Object(nn.jsx)(Kt.n, { children: Object(nn.jsx)(Kt.k, { p: "16px", children: Object(nn.jsxs)(Kt.lb, { children: [r("No pool has been created with this token yet. Create one"), Object(nn.jsx)(Qt.b, { style: { display: "inline", marginLeft: "6px" }, to: "/add/".concat(c), children: r("here.") })] }) }) }) : Object(nn.jsx)(Kt.F, { mt: "80px", justifyContent: "center", children: Object(nn.jsx)(Kt.gb, { size: 40 }) }) })
                },
                Wc = function(e) { var t = e.match.params.address; return Object(zc.isAddress)(t.toLowerCase()) ? Object(nn.jsx)(Mc, Object(y.a)({}, e)) : Object(nn.jsx)(s.a, { to: "/" }) };
            t.default = function() { return Object(nn.jsxs)(nn.Fragment, { children: [Object(nn.jsx)(Ht, {}), Object(nn.jsx)(Rt, {}), Object(nn.jsx)(_t, {}), Object(nn.jsx)(qn, {}), Object(nn.jsx)(s.b, { path: "/info/:chainId", exact: !0, children: Object(nn.jsx)(Gr, {}) }), Object(nn.jsx)(s.b, { path: "/info/pools/:chainId", exact: !0, children: Object(nn.jsx)(Xr, {}) }), Object(nn.jsx)(s.b, { path: "/info/tokens/:chainId", exact: !0, children: Object(nn.jsx)(qc, {}) }), Object(nn.jsx)(s.b, { exact: !0, path: ["/info/tokens/:address/:chainId", "/info/token/:address/:chainId"], component: Wc }), Object(nn.jsx)(s.b, { exact: !0, path: ["/info/pools/:address/:chainId", "/info/pool/:address/:chainId", "/info/pair/:address/:chainId"], component: wc })] }) }
        }
    }
]);