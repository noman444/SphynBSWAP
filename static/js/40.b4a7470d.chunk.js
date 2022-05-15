(this["webpackJsonpsphynx-frontend"] = this["webpackJsonpsphynx-frontend"] || []).push([
    [40], {
        1837: function(e, n, t) {
            "use strict";
            t.r(n);
            var i, a, r, c, o, l, s, d, u, p, b, x, h, f, j, m, g, O, w, v, k, y, S, _, L, I, R, z, C, T, D = t(11),
                E = t(10),
                M = t(7),
                A = t(3),
                N = t.n(A),
                F = t(1),
                P = t(1538),
                V = t(5),
                B = t(84),
                Q = t.n(B),
                G = t(129),
                K = t(116),
                U = t(18),
                W = t(83),
                Z = t(77),
                H = t(49),
                q = t(1503),
                J = t(50),
                X = t(220),
                Y = t(1489),
                $ = t(324),
                ee = t(71),
                ne = t(45),
                te = t(14),
                ie = t(2),
                ae = t(1481),
                re = t(1472),
                ce = t(1471),
                oe = t(1470),
                le = t(1469),
                se = t(795),
                de = t(1586),
                ue = t.n(de),
                pe = t(330),
                be = t(328),
                xe = t(1582),
                he = t(1583),
                fe = t(1584),
                je = t(1585),
                me = t(1499),
                ge = t(1500),
                Oe = t(516),
                we = t(65),
                ve = t(0),
                ke = V.default.div(i || (i = Object(M.a)(["\n  background: ", ";\n  border-radius: 8px;\n  cursor: pointer;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"])), (function(e) { return e.theme.custom.tertiary })),
                ye = V.default.div(a || (a = Object(M.a)(["\n  div:first-child {\n    font-weight: bold;\n    font-size: 20px;\n    white-space: pre-wrap;\n    text-transform: capitalize;\n  }\n  div:last-child {\n    font-weight: 600;\n    font-size: 14px;\n    white-space: pre-wrap;\n    color: white;\n    text-transform: capitalize;\n  }\n"]))),
                Se = V.default.div(r || (r = Object(M.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  flex: 1;\n  div:first-child {\n    font-weight: 600;\n    font-size: 14px;\n    white-space: nowrap;\n    color: #f2c94c;\n    margin-bottom: 16px;\n    text-align: center;\n  }\n  div:last-child {\n    font-weight: 600;\n    white-space: nowrap;\n    color: white;\n    margin-bottom: 16px;\n  }\n"]))),
                _e = V.default.div(c || (c = Object(M.a)(["\n  width: 100%;\n"]))),
                Le = V.default.div(o || (o = Object(M.a)(["\n  margin: 0px 0px;\n  background-color: ", ";\n  border-radius: 8px;\n  position: relative;\n"])), (function(e) { return e.theme.custom.secondary })),
                Ie = V.default.div(l || (l = Object(M.a)(["\n  width: ", ";\n  height: 22px;\n  background: ", ";\n  border-radius: 8px;\n  padding: 1px;\n  display: flex;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: bold;\n"])), (function(e) { return "".concat(e.state, "%") }), (function(e) { return e.theme.custom.gradient })),
                Re = V.default.div(s || (s = Object(M.a)(["\n  img {\n    width: 64px;\n    height: 64px;\n    margin-right: 20px;\n    border-radius: 50%;\n    max-width: unset;\n  }\n"]))),
                ze = V.default.div(d || (d = Object(M.a)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  gap: 10px;\n  flex: 2;\n"]))),
                Ce = V.default.div(u || (u = Object(M.a)(["\n  flex-grow: 1 !important;\n"]))),
                Te = V.default.div(p || (p = Object(M.a)(["\n  display: flex;\n  gap: 10px;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  margin-top: 10px;\n"]))),
                De = V.default.div(b || (b = Object(M.a)(["\n  display: flex;\n  gap: 10px;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  margin-top: 10px;\n"]))),
                Ee = (x = {}, Object(te.a)(x, Y.b.GOLD, "#ffbb00"), Object(te.a)(x, Y.b.SILVER, "#ccc"), Object(te.a)(x, Y.b.BRONZE, "#c85"), Object(te.a)(x, Y.b.OTHER, "#4FD"), x),
                Me = function(e) {
                    var n = e.saleId,
                        t = e.ownerAddress,
                        i = e.tokenSymbole,
                        a = e.tokenName,
                        r = e.tokenLogo,
                        c = e.activeSale,
                        o = e.hardCap,
                        l = e.maxContribution,
                        s = e.startTime,
                        d = e.endTime,
                        u = e.level,
                        p = e.chainId,
                        b = e.defaultRouterRate,
                        x = e.routerRate,
                        h = e.unlock,
                        f = e.totalTokenSupply,
                        j = e.raise,
                        m = e.websiteLink,
                        g = e.githubLink,
                        O = e.twitterLink,
                        w = e.redditLink,
                        v = e.telegramLink,
                        k = e.certikAudit,
                        y = e.doxxedTeam,
                        S = e.utility,
                        _ = e.kyc,
                        L = e.isOther,
                        I = e.otherSymbol,
                        R = Object(W.g)(),
                        z = Object(U.a)().account,
                        C = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s;
                            return Object(re.a)(new Date(1e3 * parseInt(e)), new Date(1e3 * parseInt(n)))
                        },
                        T = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s;
                            return Object(ce.a)(new Date(1e3 * parseInt(e)), new Date(1e3 * parseInt(n)))
                        };
                    return Object(ve.jsxs)(ke, {
                        onClick: function() { z === t ? R.push("/launchpad2/presale/".concat(n, "/").concat(p)) : R.push("/launchpad2/live/".concat(n, "/").concat(p)) },
                        children: [Object(ve.jsxs)("div", { style: { display: "flex", alignItems: "center", marginBottom: "10px" }, children: [Object(ve.jsx)(Re, { children: Object(ve.jsx)("img", { src: "" === r ? ae.a : r, alt: "token icon" }) }), Object(ve.jsxs)("div", { style: { flex: "1 1 0%" }, children: [Object(ve.jsxs)(ie.F, { children: [Object(ve.jsx)(ze, { children: Object(ve.jsxs)(ye, { children: [Object(ve.jsx)(ie.lb, { children: i }), Object(ve.jsx)(ie.lb, { fontSize: "10px", children: a })] }) }), Object(ve.jsx)(Ce, {}), Object(ve.jsxs)("div", { children: [Object(ve.jsx)(Se, { style: { fontWeight: "bold", color: Ee[u] }, children: u === Y.b.GOLD ? "GOLD" : u === Y.b.SILVER ? "SILVER" : u === Y.b.BRONZE ? "BRONZE" : "OTHER" }), Object(ve.jsxs)(Te, { children: [k && Object(ve.jsx)(xe.a, { width: "15px", height: "15px" }), y && Object(ve.jsx)(fe.a, { width: "15px", height: "15px" }), S && Object(ve.jsx)(je.a, { width: "15px", height: "15px" }), _ && Object(ve.jsx)(he.a, { width: "15px", height: "15px" })] }), Object(ve.jsxs)(De, { children: [m ? Object(ve.jsx)(ie.N, { external: !0, href: m, "aria-label": "social2", children: Object(ve.jsx)(be.a, { width: "15px", height: "15px" }) }) : null, g ? Object(ve.jsx)(ie.N, { external: !0, href: g, "aria-label": "social2", children: Object(ve.jsx)("img", { src: me.a, alt: "Git Logo", width: "15px", height: "15px" }) }) : null, O ? Object(ve.jsx)(ie.N, { external: !0, href: O, "aria-label": "twitter", children: Object(ve.jsx)(pe.a, { width: "15px", height: "15px" }) }) : null, w ? Object(ve.jsx)(ie.N, { external: !0, href: w, "aria-label": "discord", children: Object(ve.jsx)("img", { src: ge.a, alt: "Git Logo", width: "15px", height: "15px" }) }) : null, v ? Object(ve.jsx)(ie.N, { external: !0, href: v, "aria-label": "telegram", children: Object(ve.jsx)(Oe.a, { width: "15px", height: "15px" }) }) : null] })] })] }), Object(ve.jsx)(ie.F, { mt: "10px", children: Object(ve.jsxs)(ie.lb, { fontSize: "10px", children: [" ", "Starts ".concat(Object(se.default)(new Date(1e3 * parseInt(s)), "EEE dd MMM hh:mm"), " your time"), " "] }) }), Object(ve.jsxs)(ie.F, { mt: "10px", children: [Object(ve.jsx)(ue.a, { fontSize: "inherit", style: { marginTop: "2px", marginRight: "5px" } }), Object(ve.jsx)(ie.lb, { fontSize: "14px", mr: "10px", children: "".concat(b + x, "%") }), Object(ve.jsx)(ie.lb, { fontSize: "14px", style: { backgroundColor: "#710d89", padding: "0px 10px", borderRadius: "10px" }, children: "".concat(parseFloat((100 - h / f * 100).toFixed(2)), "%") })] })] })] }), Object(ve.jsxs)("div", {
                            children: [Object(ve.jsx)("div", {
                                style: { flex: "1 1 0%", marginBottom: "10px" },
                                children: Object(ve.jsxs)(ie.F, {
                                    children: [Object(ve.jsx)(ie.lb, { fontSize: "12px", children: "Duration ".concat(C() > 0 ? "".concat(C(), " days") : "".concat(T(), " hours")) }), Object(ve.jsx)(Ce, {}), Object(ve.jsx)(ie.lb, {
                                        fontSize: "12px",
                                        children: function() {
                                            if (Date.now() / 1e3 > parseInt(d)) return "Ended";
                                            var e = C(s, "".concat(Date.now() / 1e3));
                                            if (e > 0) return "Starts in ".concat(e, " days");
                                            var n = T(s, "".concat(Date.now() / 1e3));
                                            if (n > 0) return "Starts in ".concat(n, " hours");
                                            var t = function() {
                                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
                                                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s;
                                                return Object(oe.a)(new Date(1e3 * parseInt(e)), new Date(1e3 * parseInt(n)))
                                            }(s, "".concat(Date.now() / 1e3));
                                            if (t > 0) return "Starts in ".concat(t, " minutes");
                                            var i = function() {
                                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
                                                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s;
                                                return Object(le.a)(new Date(1e3 * parseInt(e)), new Date(1e3 * parseInt(n)))
                                            }(s, "".concat(Date.now() / 1e3));
                                            return i > 0 ? "Starts in ".concat(i, " seconds") : "Active"
                                        }()
                                    })]
                                })
                            }), Object(ve.jsx)(_e, { children: Object(ve.jsxs)(Le, { children: [Object(ve.jsx)(Ie, { state: c }), Object(ve.jsx)("div", { style: { flex: "1 1 0%", position: "absolute", top: "10%", left: 0, width: "100%", alignItems: "center", padding: "0px 15px" }, children: Object(ve.jsxs)(ie.F, { children: [Object(ve.jsx)(ie.lb, { fontSize: "12px", children: "".concat(j, "/").concat(o, " ").concat(L ? I : we.b[p]) }), Object(ve.jsx)(Ce, {}), Object(ve.jsx)(ie.lb, { fontSize: "12px", children: "".concat(l, " ").concat(L ? I : we.b[p]) })] }) })] }) })]
                        })]
                    })
                },
                Ae = t(514),
                Ne = t(25),
                Fe = t(515),
                Pe = V.default.div(h || (h = Object(M.a)(["\n  flex-wrap: wrap;\n  justify-content: center;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  background: ", ";\n  padding: 0px 15px;\n  margin: 21px 0px;\n  border-radius: 3px;\n  > div {\n    padding: 8px 0px;\n  }\n\n  ", " {\n    justify-content: center;\n\n    > div {\n      padding: 0;\n    }\n  }\n"])), (function(e) { return e.theme.custom.tertiary }), (function(e) { return e.theme.mediaQueries.sm })),
                Ve = Object(V.default)(ie.F)(f || (f = Object(M.a)(["\n  height: 47px;\n  margin: 12px 0;\n  margin-right: ", ";\n  width: ", ";\n  background: ", ";\n  > div {\n    flex: 1;\n    height: 47px;\n    border-radius: 5px;\n    box-sizing: border-box;\n    margin-right: 10px;\n    background: ", ";\n    > div {\n      > div {\n        color: white; \n      }\n    }\n  }\n"])), (function(e) { return e.isMobile ? "0" : "38px" }), (function(e) { return e.isMobile ? "100%" : "auto" }), (function(e) { return e.theme.custom.tertiary }), (function(e) { return e.theme.custom.tertiary })),
                Be = V.default.div(j || (j = Object(M.a)(["\n  flex: 1;\n  position: relative;\n  padding: 0 20px;\n  z-index: 3;\n  ", " {\n    min-width: 420px;\n  }\n  & input {\n    background: transparent;\n    border: none;\n    width: 100%;\n    box-shadow: none;\n    outline: none;\n    color: white;\n    font-size: 16px;\n    &::placeholder {\n      color: white;\n    }\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                Qe = Object(V.default)(ie.lb)(m || (m = Object(M.a)(["\n  padding: 0 4px;\n  width: ", ";\n  height: 47px;\n  text-overflow: ellipsis;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  background: ", ";\n  border-radius: 5px;\n  margin: 12px 0;\n  & button:last-child {\n    background: ", ";\n  }\n  ", " {\n    flex: 1;\n    border-radius: 5px;\n  }\n"])), (function(e) { return e.isMobile ? "100%" : "auto" }), (function(e) { return e.theme.custom.background }), (function(e) { return e.theme.custom.pancakePrimary }), (function(e) { return e.theme.mediaQueries.md })),
                Ge = Object(V.default)(ie.K)(g || (g = Object(M.a)(["\n  background-color: transparent !important;\n  margin: 0px 3px;\n  border: none;\n  outline: none !important;\n  box-shadow: none;\n}\n"]))),
                Ke = function(e) {
                    var n = e.setSearchOption,
                        t = e.setFilterOption,
                        i = e.setSearchKey,
                        a = e.setPageIndex,
                        r = Object(Ne.b)().t,
                        c = !Object(ie.zb)().isXl,
                        o = Object(F.useState)(""),
                        l = Object(E.a)(o, 2),
                        s = l[0],
                        d = l[1];
                    return Object(ve.jsxs)(Pe, { children: [Object(ve.jsxs)(Ve, { isMobile: c, children: [Object(ve.jsx)(Ae.a, { options: [{ label: r("ALL"), value: "all" }, { label: r("Active"), value: "active" }, { label: r("Success"), value: "ended" }, { label: r("Fail"), value: "failed" }, { label: r("Pending"), value: "pending" }], onChange: function(e) { a(0), t(e.value) } }), Object(ve.jsx)(Ae.a, { options: [{ label: r("ALL"), value: Y.b.ALL }, { label: r("Gold"), value: Y.b.GOLD }, { label: r("Silver"), value: Y.b.SILVER }, { label: r("Bronze"), value: Y.b.BRONZE }, { label: r("other"), value: Y.b.OTHER }], onChange: function(e) { a(0), n(e.value) } })] }), Object(ve.jsxs)(Qe, { isMobile: c, children: [Object(ve.jsx)(Be, { children: Object(ve.jsx)("input", { placeholder: "Search", onChange: function(e) { d(e.target.value) }, onKeyDown: function(e) { "Enter" === e.key && (a(0), i(s)) } }) }), Object(ve.jsx)(Ge, { onClick: function() { i(s) }, children: Object(ve.jsx)(Fe.a, { width: "22px", height: "22px", color: Object(V.useTheme)().colors.primary }) })] })] })
                },
                Ue = V.default.div(O || (O = Object(M.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-flow: column;\n  color: white;\n  margin: 24px 0 40px;\n  text-align: left;\n  .ml16 {\n    margin-left: 16px;\n  }\n  .ml32 {\n    margin-left: 32px;\n  }\n  p {\n    line-height: 24px;\n  }\n  p.w110 {\n    width: 110px;\n  }\n  p.w80 {\n    width: 80px;\n  }\n  ", " {\n    align-items: flex-start;\n  }\n"])), (function(e) { return e.theme.mediaQueries.xl })),
                We = V.default.h2(w || (w = Object(M.a)(["\n  font-size: 24px;\n  line-height: 24px;\n  font-weight: 700;\n  ", " {\n    font-size: 36px;\n    line-height: 42px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.xl })),
                Ze = V.default.div(v || (v = Object(M.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n"]))),
                He = V.default.div(k || (k = Object(M.a)(["\n  display: flex;\n  img {\n    margin-right: 14px;\n  }\n"]))),
                qe = V.default.div(y || (y = Object(M.a)(["\n  span {\n    font-size: 12px;\n    color: white;\n  }\n"]))),
                Je = (V.default.div(S || (S = Object(M.a)(["\n  button {\n    color: white;\n    border-radius: 5px;\n    height: 34px;\n    background: ", ";\n    // background: linear-gradient(90deg, #4a65d5 0%, #4a65d5 100%);\n    font-weight: 600;\n    font-size: 13px;\n    width: 102px;\n    outline: none;\n\n    img {\n      width: 16px;\n      height: 16px;\n      margin-right: 6px;\n    }\n\n    ", " {\n      width: 176px;\n    }\n  }\n"])), (function(e) { return e.theme.custom.gradient }), (function(e) { return e.theme.mediaQueries.sm })), V.default.div(_ || (_ = Object(M.a)(["\n  > ", " {\n    font-size: 12px;\n  }\n  div:last-child {\n    input {\n      border-radius: 8px;\n      border: unset;\n      height: 34px;\n      max-width: 192px;\n      width: 100%;\n      background: ", ";\n    }\n  }\n"])), ie.lb, (function(e) { return e.theme.custom.inputWrapper })), V.default.div(L || (L = Object(M.a)(["\n  > ", " {\n    font-size: 12px;\n  }\n  div: last-child {\n    background: ", ";\n    border-radius: 8px;\n    div {\n      border-radius: 8px;\n      border: unset;\n      background: ", ";\n    }\n  }\n"])), ie.lb, (function(e) { return e.theme.custom.inputWrapper }), (function(e) { return e.theme.custom.inputWrapper })), V.default.div(I || (I = Object(M.a)(["\n  display: flex;\n  width: 100%;\n  gap: 16px;\n  padding: 8px 0px;\n  justify-content: flex-end;\n  ", " {\n    flex-direction: column;\n    align-items: end;\n  }\n  ", " {\n    flex-direction: unset;\n    align-items: center;\n  }\n"])), (function(e) { return e.theme.mediaQueries.xs }), (function(e) { return e.theme.mediaQueries.md })), V.default.div(R || (R = Object(M.a)(["\n  margin-top: 48px;\n  display: flex;\n  width: 100%;\n  justify-content: center;\n"]))), V.default.div(z || (z = Object(M.a)(["\n  margin-top: 24px;\n  display: grid;\n  grid-gap: 20px;\n  width: 100%;\n  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));\n\n  ", " {\n    grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));\n  }\n\n  ", " {\n    grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));\n  }\n"])), (function(e) { return e.theme.mediaQueries.xs }), (function(e) { return e.theme.mediaQueries.sm }))),
                Xe = V.default.div(C || (C = Object(M.a)(["\n  margin: 50px auto 10px auto;\n  .MuiPagination-root {\n    .MuiPagination-ul {\n      flex-wrap: nowrap;\n      li {\n        > .MuiPaginationItem-ellipsis {\n          color: white;\n        }\n        &:first-child {\n          flex-basis: 100%;\n          display: flex;\n          justify-content: flex-start;\n          align-items: center;\n          > button::after {\n            content: 'Previous';\n            color: white;\n          }\n          > button {\n            border: none;\n            opacity: 1;\n          }\n          > .MuiPaginationItem-page.Mui-disabled {\n            opacity: 1;\n          }\n          > button.Mui-disabled::after {\n            color: #aaaaaa;\n          }\n        }\n        &:last-child {\n          flex-basis: 100%;\n          display: flex;\n          justify-content: flex-end;\n          align-items: center;\n          border: none;\n          > button::before {\n            content: 'Next';\n            color: white;\n          }\n          > button {\n            border: none;\n            opacity: 1;\n          }\n          > .MuiPaginationItem-page.Mui-disabled {\n            opacity: 1;\n          }\n          > button.Mui-disabled::before {\n            color: #aaaaaa;\n          }\n        }\n        & .MuiPaginationItem-icon {\n          display: none;\n        }\n        & button {\n          color: white;\n          border: 1px solid rgba(255, 255, 255, 0.15);\n        }\n        & button.Mui-selected {\n          border: none;\n          background: ", ";\n          // background: linear-gradient(90deg, #4a65d5 0%, #4a65d5 100%);\n        }\n      }\n    }\n  }\n"])), (function(e) { return e.theme.custom.gradient })),
                Ye = V.default.div(T || (T = Object(M.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n"])));
            n.default = function() {
                var e = Object(U.a)().chainId,
                    n = Object(W.i)(),
                    t = parseInt(n.chainId),
                    i = Object(F.useState)(t),
                    a = Object(E.a)(i, 2),
                    r = a[0],
                    c = a[1],
                    o = Object(F.useMemo)((function() { return Object(H.L)(Object(ne.e)(r), r) }), [r]),
                    l = Object(J.e)().menuToggled,
                    s = Object(F.useState)([]),
                    d = Object(E.a)(s, 2),
                    u = d[0],
                    p = d[1],
                    b = Object(F.useState)([]),
                    x = Object(E.a)(b, 2),
                    h = x[0],
                    f = x[1],
                    j = Object(F.useState)(!0),
                    m = Object(E.a)(j, 2),
                    g = m[0],
                    O = m[1],
                    w = Object(F.useState)(Y.b.ALL),
                    v = Object(E.a)(w, 2),
                    k = v[0],
                    y = v[1],
                    S = Object(F.useState)("all"),
                    _ = Object(E.a)(S, 2),
                    L = _[0],
                    I = _[1],
                    R = Object(F.useState)(""),
                    z = Object(E.a)(R, 2),
                    C = z[0],
                    T = z[1],
                    M = Object(F.useState)(0),
                    A = Object(E.a)(M, 2),
                    V = A[0],
                    B = A[1],
                    te = Object(F.useState)(1),
                    ie = Object(E.a)(te, 2),
                    ae = ie[0],
                    re = ie[1];
                Object(F.useEffect)((function() { localStorage.setItem(Z.a.LOCAL_ROUTER_NAME, "launchpad/listing") }), []), Object(F.useEffect)((function() { c(void 0 === e ? t : e) }), [e, t]), Object(F.useEffect)((function() {
                    var e = function() {
                        var e = Object(D.a)(N.a.mark((function e() {
                            var n;
                            return N.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        n = { chain_id: r, token_level: k, key: C, page_index: V, num_per_page: Y.a }, O(!0), p([]), Q.a.post("".concat("https://thesphynx.co/api2", "/getAllPresaleInfoV2"), { data: n }).then(function() {
                                            var e = Object(D.a)(N.a.mark((function e(n) {
                                                var t, i;
                                                return N.a.wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            if (!n.data) { e.next = 19; break }
                                                            return t = 1, n.data.length > 0 && (t = Math.ceil(parseInt(n.data[0].count) / Y.a)), re(t), e.prev = 4, e.next = 7, Promise.all(n.data.map(function() {
                                                                var e = Object(D.a)(N.a.mark((function e(n) {
                                                                    var t, i, a, c, l, s, d, u, p, b, x, h, f, j, m, g, O;
                                                                    return N.a.wrap((function(e) {
                                                                        for (;;) switch (e.prev = e.next) {
                                                                            case 0:
                                                                                return t = { saleId: n.sale_id, ownerAddress: n.owner_address, tokenName: n.token_name, tokenSymbole: n.token_symbol, tokenLogo: n.logo_link, activeSale: 0, totalCap: 0, softCap: n.soft_cap, hardCap: n.hard_cap, minContribution: n.min_buy, maxContribution: n.max_buy, startTime: n.start_time, endTime: n.end_time, tokenState: "active", level: n.token_level, defaultRouterRate: n.default_router_rate, routerRate: n.router_rate, totalTokenSupply: 0, burnValue: 0, lockValue: 0, presaleValue: 0, liquidityValue: 0, unlock: 0, raise: 0, websiteLink: n.website_link, githubLink: n.github_link, twitterLink: n.twitter_link, redditLink: n.reddit_link, telegramLink: n.telegram_link, certikAudit: n.certik_audit, doxxedTeam: n.doxxed_team, utility: n.utility, kyc: n.kyc, is_other: n.is_other, other_symbol: n.other_symbol }, e.next = 3, o.totalContributionBNB(n.sale_id);
                                                                            case 3:
                                                                                return i = e.sent.toString(), a = parseFloat(G.utils.formatUnits(i, n.decimal)), t.totalCap = a, t.activeSale = a / n.hard_cap, e.next = 9, o.isDeposited(n.sale_id.toString());
                                                                            case 9:
                                                                                return i = e.sent, (i = !0) && (c = Math.floor((new Date).getTime() / 1e3), parseInt(n.start_time) < c && parseInt(n.end_time) > c ? t.tokenState = "active" : c > parseInt(n.end_time) ? t.totalCap < t.softCap ? t.tokenState = "failed" : t.tokenState = "ended" : c < parseInt(n.start_time) && (t.tokenState = "pending")), l = $.a, s = new K.Contract(n.token_address, l, Object(ne.e)(r)), e.next = 16, s.decimals();
                                                                            case 16:
                                                                                return d = e.sent, e.next = 19, s.totalSupply();
                                                                            case 19:
                                                                                return i = e.sent.toString(), e.next = 22, s.balanceOf(ee.a);
                                                                            case 22:
                                                                                return u = e.sent, p = parseFloat(G.utils.formatUnits(u, d)), b = n.hard_cap * n.tier3, x = n.listing_rate * n.hard_cap * (n.router_rate + n.default_router_rate) / 100, h = parseFloat(G.utils.formatUnits(i, n.token_decimal)), e.next = 29, Q.a.get("".concat("https://thesphynx.co/api2", "/getTokenLockList/").concat(r, "/").concat(n.token_address));
                                                                            case 29:
                                                                                for (f = e.sent, j = f.data, m = 0, g = 0; g < j.length; g++) m += j[g].lock_supply;
                                                                                return O = h - p - m - b - x, t.totalTokenSupply = h, t.burnValue = p, t.lockValue = m, t.presaleValue = b, t.liquidityValue = x, t.unlock = O, e.next = 42, o.totalContributionBNB(n.sale_id);
                                                                            case 42:
                                                                                return i = e.sent.toString(), t.raise = parseFloat(G.utils.formatEther(i)), e.abrupt("return", t);
                                                                            case 45:
                                                                            case "end":
                                                                                return e.stop()
                                                                        }
                                                                    }), e)
                                                                })));
                                                                return function(n) { return e.apply(this, arguments) }
                                                            }()));
                                                        case 7:
                                                            i = e.sent, f(i), p(i), O(!1), e.next = 17;
                                                            break;
                                                        case 13:
                                                            e.prev = 13, e.t0 = e.catch(4), console.log("error", e.t0), O(!1);
                                                        case 17:
                                                            e.next = 20;
                                                            break;
                                                        case 19:
                                                            O(!1);
                                                        case 20:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e, null, [
                                                    [4, 13]
                                                ])
                                            })));
                                            return function(n) { return e.apply(this, arguments) }
                                        }());
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() { return e.apply(this, arguments) }
                    }();
                    r && void 0 !== k && e()
                }), [r, k, C, V, o]), Object(F.useEffect)((function() {
                    var e = [];
                    h.forEach((function(n) { "all" !== L && L !== n.tokenState || e.push(n) })), p(e)
                }), [L]);
                return Object(ve.jsxs)(Ue, { children: [Object(ve.jsx)(Ze, { children: Object(ve.jsxs)(He, { children: [Object(ve.jsx)("img", { src: q.a, alt: "listIcon" }), Object(ve.jsx)(qe, { children: Object(ve.jsx)(We, { children: "Presale Directory" }) })] }) }), Object(ve.jsx)(Ke, { setSearchOption: y, setSearchKey: T, setFilterOption: I, setPageIndex: B }), g && Object(ve.jsx)(Ye, { children: Object(ve.jsx)(X.a, {}) }), Object(ve.jsx)(Je, { toggled: l, children: u && u.map((function(e) { return Object(ve.jsx)(Me, { saleId: e.saleId, chainId: n.chainId, ownerAddress: e.ownerAddress, tokenName: e.tokenName, tokenSymbole: e.tokenSymbole, tokenLogo: e.tokenLogo, activeSale: 100 * e.activeSale, hardCap: e.hardCap, maxContribution: e.maxContribution, startTime: e.startTime, endTime: e.endTime, level: e.level, defaultRouterRate: e.defaultRouterRate, routerRate: e.routerRate, unlock: e.unlock, totalTokenSupply: e.totalTokenSupply, raise: e.raise, websiteLink: e.websiteLink, githubLink: e.githubLink, twitterLink: e.twitterLink, redditLink: e.redditLink, telegramLink: e.telegramLink, certikAudit: e.certikAudit, doxxedTeam: e.doxxedTeam, utility: e.utility, kyc: e.kyc, isOther: e.is_other, otherSymbol: e.other_symbol, children: Object(ve.jsx)("img", { src: e.tokenLogo, alt: "token icon" }) }, e.saleId) })) }), Object(ve.jsx)(Xe, { children: Object(ve.jsx)(P.a, { count: ae, siblingCount: 0, onChange: function(e, n) { B(n - 1) } }) })] })
            }
        }
    }
]);