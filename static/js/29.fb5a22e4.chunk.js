(this["webpackJsonpsphynx-frontend"] = this["webpackJsonpsphynx-frontend"] || []).push([
    [29], {
        1492: function(e, n, t) {
            "use strict";
            var a, c = t(44),
                i = t(8),
                r = t(7),
                o = (t(1), t(5)),
                s = t(25),
                l = t(524),
                d = t(83),
                u = { title: "Sphynx", description: "", image: "" },
                b = t(1497),
                j = t(0),
                x = ["children", "symbol"],
                p = Object(o.default)(b.a)(a || (a = Object(r.a)(["\n  width: 100%;\n  max-width: none;\n  min-height: calc(100vh - 117px);\n  padding: 0px 0px 16px 0px;\n\n  ", " {\n    padding: 10px 10px 24px 10px;\n  }\n\n  ", " {\n    padding: 15px 15px 32px 15px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm }), (function(e) { return e.theme.mediaQueries.lg })),
                h = function(e) {
                    e.symbol;
                    var n = Object(s.b)().t,
                        t = function(e, n) {
                            switch (e) {
                                case "/":
                                    return { title: "".concat(n("Home"), " | ").concat(n("Sphynx Token")) };
                                case "/competition":
                                    return { title: "".concat(n("Trading Battle"), " | ").concat(n("Sphynx Token")) };
                                case "/prediction":
                                    return { title: "".concat(n("Prediction"), " | ").concat(n("Sphynx Token")) };
                                case "/farms":
                                    return { title: "".concat(n("Farms"), " | ").concat(n("Sphynx Token")) };
                                case "/pools":
                                    return { title: "".concat(n("Pools"), " | ").concat(n("Sphynx Token")) };
                                case "/lottery":
                                    return { title: "".concat(n("Lottery"), " | ").concat(n("PancakeSwap")) };
                                case "/collectibles":
                                    return { title: "".concat(n("Collectibles"), " | ").concat(n("PancakeSwap")) };
                                case "/ifo":
                                    return { title: "".concat(n("Initial Farm Offering"), " | ").concat(n("PancakeSwap")) };
                                case "/teams":
                                    return { title: "".concat(n("Leaderboard"), " | ").concat(n("PancakeSwap")) };
                                case "/profile/tasks":
                                    return { title: "".concat(n("Task Center"), " | ").concat(n("PancakeSwap")) };
                                case "/profile":
                                    return { title: "".concat(n("Your Profile"), " | ").concat(n("PancakeSwap")) };
                                default:
                                    return null
                            }
                        }(Object(d.h)().pathname, n) || {},
                        a = Object(i.a)(Object(i.a)({}, u), t),
                        c = a.title,
                        r = a.description,
                        o = a.image;
                    return Object(j.jsxs)(l.a, { children: [Object(j.jsx)("meta", { property: "og:title", content: c }), Object(j.jsx)("meta", { property: "og:description", content: r }), Object(j.jsx)("meta", { property: "og:image", content: o })] })
                };
            n.a = function(e) {
                var n = e.children,
                    t = e.symbol,
                    a = Object(c.a)(e, x);
                return Object(j.jsxs)(j.Fragment, { children: [Object(j.jsx)(h, { symbol: t }), Object(j.jsx)(p, Object(i.a)(Object(i.a)({}, a), {}, { children: n }))] })
            }
        },
        1497: function(e, n, t) {
            "use strict";
            var a = t(8),
                c = t(44),
                i = (t(1), t(2)),
                r = t(0),
                o = ["children"];
            n.a = function(e) {
                var n = e.children,
                    t = Object(c.a)(e, o);
                return Object(r.jsx)(i.k, Object(a.a)(Object(a.a)({ px: ["16px", "24px"], mx: "auto", maxWidth: "1200px" }, t), {}, { children: n }))
            }
        },
        1539: function(e, n, t) {
            "use strict";
            t.d(n, "a", (function() { return p }));
            var a, c, i = t(8),
                r = t(44),
                o = t(7),
                s = (t(1), t(5)),
                l = t(2),
                d = t(1497),
                u = t(0),
                b = ["background", "children"],
                j = Object(s.default)(l.k)(a || (a = Object(o.a)(["\n  background: transparent;\n  border-radius: 8px;\n  width: 100%;\n  margin: 0px;\n  max-width: none;\n  > div {\n    max-width: none;\n  }\n"]))),
                x = Object(s.default)(d.a)(c || (c = Object(o.a)([""]))),
                p = function(e) {
                    var n = e.background,
                        t = e.children,
                        a = Object(r.a)(e, b);
                    return Object(u.jsx)(j, Object(i.a)(Object(i.a)({ background: n }, a), {}, { children: Object(u.jsx)(x, { children: t }) }))
                }
        },
        1848: function(e, n, t) {
            "use strict";
            t.r(n);
            var a, c, i, r, o, s, l, d = t(10),
                u = t(7),
                b = t(1),
                j = t(84),
                x = t.n(j),
                p = t(5),
                h = t(2),
                m = t(25),
                O = t(98),
                f = t(1539),
                g = t(1492),
                k = t(11),
                v = t(14),
                y = t(8),
                w = t(3),
                N = t.n(w),
                S = t(88),
                D = t(0),
                T = p.default.div(a || (a = Object(u.a)(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-around;\n  ", " {\n    align-items: flex-end;\n  }\n"])), (function(e) { return e.theme.mediaQueries.xl })),
                P = p.default.div(c || (c = Object(u.a)(["\n  background: ", ";\n  // background: linear-gradient(90deg, #4a65d5 0%, #4a65d5 100%);\n  width: 28px;\n  height: 28px;\n  border-radius: 14px;\n  display: flex;\n  color: white;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  margin-bottom: 4px;\n  margin-right: 8px;\n  margin-top: 4px;\n"])), (function(e) { return e.theme.custom.gradient })),
                I = p.default.div(i || (i = Object(u.a)(["\n  width: 100%;\n  text-align: left;\n  font-weight: bold;\n  line-height: 24px;\n  color: white;\n  margin-bottom: 12px;\n  ", " {\n    width: 20%;\n    margin-bottom: 0px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.xl })),
                C = p.default.input(r || (r = Object(u.a)(["\n  background: ", ";\n  border-radius: 5px;\n  border: ", ";\n  padding: 10px 14px;\n  padding-inline-start: 12px;\n  height: 38px;\n  color: white;\n  border: none;\n  outline: none;\n  &:focus {\n    outline: 2px solid ", ";\n  }\n"])), (function(e) { return e.theme.custom.tertiary }), (function(e) { var n = e.theme; return "1px solid ".concat(n.custom.inputPanelBorder) }), (function(e) { return e.theme.custom.pancakePrimary })),
                A = p.default.button(o || (o = Object(u.a)(["\n  height: 35px;\n  background: ", ";\n  // background: linear-gradient(90deg, #4a65d5 0%, #4a65d5 100%);\n  width: 125px;\n  border: 1px solid ", ";\n  color: white;\n  padding: 8px 16px;\n  border-radius: 5px;\n  cursor: pointer;\n  outline: none;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  margin-bottom: 2px;\n  &:hover {\n    background: linear-gradient(90deg, #722da9 0%, #e44bd4 100%);\n    border: 1px solid #9b3aab;\n  }\n  &:disabled {\n    background: linear-gradient(90deg, #722da9 0%, #e44bd4 100%);\n    border: 1px solid #444;\n    cursor: not-allowed;\n  }\n"])), (function(e) { return e.theme.custom.gradient }), (function(e) { return e.theme.custom.pancakePrimary })),
                F = p.default.div(s || (s = Object(u.a)(["\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-around;\n  width: -webkit-fill-available;\n  flex-direction: column;\n  align-items: flex-start;\n  ", " {\n    flex-direction: row;\n    align-items: flex-end;\n  }\n"])), (function(e) { return e.theme.mediaQueries.xl })),
                Q = function(e) {
                    var n = Object(S.a)(),
                        t = n.toastSuccess,
                        a = n.toastError,
                        c = e.tokenNumber,
                        i = e.initialData,
                        r = Object(b.useState)({ tokenAddress: "", tokenName: "", tokenSymbol: "", chainId: 0 }),
                        o = Object(d.a)(r, 2),
                        s = o[0],
                        l = o[1];
                    Object(b.useEffect)((function() { l({ tokenAddress: i.token_address, tokenName: i.token_name, tokenSymbol: i.token_symbol, chainId: i.chain_id }) }), [i]);
                    var u = function(e) { console.log(e.target.value), l(Object(y.a)(Object(y.a)({}, s), {}, Object(v.a)({}, e.target.name, e.target.value))) },
                        j = function() {
                            var e = Object(k.a)(N.a.mark((function e() {
                                var n;
                                return N.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            n = { tokenAddress: s.tokenAddress, tokenName: s.tokenName, tokenSymbol: s.tokenSymbol, chainId: s.chainId, id: c }, x.a.post("".concat("https://thesphynx.co/api2", "/updateTrendingInfo"), n).then((function(e) { t("Success", "Operation Successfully!") })).catch((function(e) { a("Error", "Your action is failed!") }));
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() { return e.apply(this, arguments) }
                        }();
                    return Object(D.jsxs)(T, { children: [Object(D.jsx)(P, { children: c }), Object(D.jsxs)(F, { children: [Object(D.jsxs)(I, { children: [Object(D.jsx)("p", { className: "description", children: "Token Address" }), Object(D.jsx)(C, { onChange: u, name: "tokenAddress", value: s.tokenAddress, style: { width: "100%" } })] }), Object(D.jsxs)(I, { children: [Object(D.jsx)("p", { className: "description", children: "Token Name" }), Object(D.jsx)(C, { onChange: u, name: "tokenName", value: s.tokenName, style: { width: "100%" } })] }), Object(D.jsxs)(I, { children: [Object(D.jsx)("p", { className: "description", children: "Token Symbol" }), Object(D.jsx)(C, { onChange: u, name: "tokenSymbol", value: s.tokenSymbol, style: { width: "100%" } })] }), Object(D.jsxs)(I, { children: [Object(D.jsx)("p", { className: "description", children: "Chain ID" }), Object(D.jsx)(C, { onChange: u, name: "chainId", value: s.chainId, style: { width: "100%" } })] }), Object(D.jsx)(A, { onClick: j, children: "Update" })] })] })
                },
                E = p.default.div(l || (l = Object(u.a)(["\n  margin-top: 32px;\n"])));
            n.default = function() {
                var e, n, t, a, c, i, r, o, s, l, u, j, p, k, v, y = Object(m.b)().t,
                    w = Object(b.useState)([]),
                    N = Object(d.a)(w, 2),
                    S = N[0],
                    T = N[1];
                return Object(b.useEffect)((function() {
                    x.a.get("".concat("https://thesphynx.co/api2", "/getTrending")).then((function(e) {
                        var n = e.data;
                        T(n)
                    }))
                }), []), Object(D.jsxs)(D.Fragment, { children: [Object(D.jsx)("div", { style: { height: 24 } }), Object(D.jsx)(f.a, { children: Object(D.jsx)(h.F, { children: Object(D.jsx)(h.F, { flexDirection: "column", ml: "10px", children: Object(D.jsx)(h.lb, { fontSize: "26px", color: "white", bold: !0, children: y("Trending") }) }) }) }), Object(D.jsx)(g.a, { children: Object(D.jsxs)(O.d, { borderRadius: "0 0 3px 3px", padding: "20px 10px", children: [Object(D.jsx)(Q, { tokenNumber: 1, initialData: null !== (e = S[0]) && void 0 !== e ? e : {} }), Object(D.jsx)(E, {}), Object(D.jsx)(Q, { tokenNumber: 2, initialData: null !== (n = S[1]) && void 0 !== n ? n : {} }), Object(D.jsx)(E, {}), Object(D.jsx)(Q, { tokenNumber: 3, initialData: null !== (t = S[2]) && void 0 !== t ? t : {} }), Object(D.jsx)(E, {}), Object(D.jsx)(Q, { tokenNumber: 4, initialData: null !== (a = S[3]) && void 0 !== a ? a : {} }), Object(D.jsx)(E, {}), Object(D.jsx)(Q, { tokenNumber: 5, initialData: null !== (c = S[4]) && void 0 !== c ? c : {} }), Object(D.jsx)(E, {}), Object(D.jsx)(Q, { tokenNumber: 6, initialData: null !== (i = S[5]) && void 0 !== i ? i : {} }), Object(D.jsx)(E, {}), Object(D.jsx)(Q, { tokenNumber: 7, initialData: null !== (r = S[6]) && void 0 !== r ? r : {} }), Object(D.jsx)(E, {}), Object(D.jsx)(Q, { tokenNumber: 8, initialData: null !== (o = S[7]) && void 0 !== o ? o : {} }), Object(D.jsx)(E, {}), Object(D.jsx)(Q, { tokenNumber: 9, initialData: null !== (s = S[8]) && void 0 !== s ? s : {} }), Object(D.jsx)(E, {}), Object(D.jsx)(Q, { tokenNumber: 10, initialData: null !== (l = S[9]) && void 0 !== l ? l : {} }), Object(D.jsx)(E, {}), Object(D.jsx)(Q, { tokenNumber: 11, initialData: null !== (u = S[10]) && void 0 !== u ? u : {} }), Object(D.jsx)(E, {}), Object(D.jsx)(Q, { tokenNumber: 12, initialData: null !== (j = S[11]) && void 0 !== j ? j : {} }), Object(D.jsx)(E, {}), Object(D.jsx)(Q, { tokenNumber: 13, initialData: null !== (p = S[12]) && void 0 !== p ? p : {} }), Object(D.jsx)(E, {}), Object(D.jsx)(Q, { tokenNumber: 14, initialData: null !== (k = S[13]) && void 0 !== k ? k : {} }), Object(D.jsx)(E, {}), Object(D.jsx)(Q, { tokenNumber: 15, initialData: null !== (v = S[14]) && void 0 !== v ? v : {} })] }) })] })
            }
        }
    }
]);