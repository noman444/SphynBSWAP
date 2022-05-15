(this["webpackJsonpsphynx-frontend"] = this["webpackJsonpsphynx-frontend"] || []).push([
    [36], {
        1515: function(e, t, n) {
            "use strict";
            n.d(t, "g", (function() { return g })), n.d(t, "b", (function() { return m })), n.d(t, "a", (function() { return O })), n.d(t, "e", (function() { return w })), n.d(t, "d", (function() { return v })), n.d(t, "f", (function() { return k })), n.d(t, "c", (function() { return y }));
            var i, a, r, c, o, l, s, d, u, p, b, x, h = n(7),
                j = n(5),
                f = n(2),
                g = j.default.div(i || (i = Object(h.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-flow: column;\n  color: white;\n  margin: 24px 0 40px;\n  text-align: left;\n  .ml16 {\n    margin-left: 16px;\n  }\n  .ml32 {\n    margin-left: 32px;\n  }\n  p {\n    line-height: 24px;\n  }\n  p.w110 {\n    width: 110px;\n  }\n  p.w80 {\n    width: 80px;\n  }\n  ", " {\n    align-items: flex-start;\n  }\n"])), (function(e) { return e.theme.mediaQueries.xl })),
                m = j.default.h2(a || (a = Object(h.a)(["\n  font-size: 24px;\n  line-height: 24px;\n  font-weight: 700;\n  ", " {\n    font-size: 36px;\n    line-height: 42px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.xl })),
                O = j.default.div(r || (r = Object(h.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n"]))),
                w = j.default.div(c || (c = Object(h.a)(["\n  display: flex;\n  img {\n    margin-right: 14px;\n  }\n"]))),
                v = j.default.div(o || (o = Object(h.a)(["\n  span {\n    font-size: 12px;\n    color: white;\n  }\n"]))),
                k = (j.default.div(l || (l = Object(h.a)(["\n  button {\n    color: white;\n    border-radius: 5px;\n    height: 34px;\n    background: ", ";\n    // background: linear-gradient(90deg, #4a65d5 0%, #4a65d5 100%);\n    font-weight: 600;\n    font-size: 13px;\n    width: 102px;\n    outline: none;\n\n    img {\n      width: 16px;\n      height: 16px;\n      margin-right: 6px;\n    }\n\n    ", " {\n      width: 176px;\n    }\n  }\n"])), (function(e) { return e.theme.custom.gradient }), (function(e) { return e.theme.mediaQueries.sm })), j.default.div(s || (s = Object(h.a)(["\n  > ", " {\n    font-size: 12px;\n  }\n  div:last-child {\n    input {\n      border-radius: 8px;\n      border: unset;\n      height: 34px;\n      max-width: 192px;\n      width: 100%;\n      background: ", ";\n    }\n  }\n"])), f.lb, (function(e) { return e.theme.custom.inputWrapper })), j.default.div(d || (d = Object(h.a)(["\n  > ", " {\n    font-size: 12px;\n  }\n  div: last-child {\n    background: ", ";\n    border-radius: 8px;\n    div {\n      border-radius: 8px;\n      border: unset;\n      background: ", ";\n    }\n  }\n"])), f.lb, (function(e) { return e.theme.custom.inputWrapper }), (function(e) { return e.theme.custom.inputWrapper })), j.default.div(u || (u = Object(h.a)(["\n  display: flex;\n  width: 100%;\n  gap: 16px;\n  padding: 8px 0px;\n  justify-content: flex-end;\n  ", " {\n    flex-direction: column;\n    align-items: end;\n  }\n  ", " {\n    flex-direction: unset;\n    align-items: center;\n  }\n"])), (function(e) { return e.theme.mediaQueries.xs }), (function(e) { return e.theme.mediaQueries.md })), j.default.div(p || (p = Object(h.a)(["\n  margin-top: 48px;\n  display: flex;\n  width: 100%;\n  justify-content: center;\n"]))), j.default.div(b || (b = Object(h.a)(["\n  margin-top: 24px;\n  display: grid;\n  grid-gap: 20px;\n  width: 100%;\n  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));\n\n  ", " {\n    grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));\n  }\n\n  ", " {\n    grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));\n  }\n"])), (function(e) { return e.theme.mediaQueries.xs }), (function(e) { return e.theme.mediaQueries.sm }))),
                y = j.default.div(x || (x = Object(h.a)(["\n  margin: 50px auto 10px auto;\n  .MuiPagination-root {\n    .MuiPagination-ul {\n      flex-wrap: nowrap;\n      li {\n        > .MuiPaginationItem-ellipsis {\n          color: white;\n        }\n        &:first-child {\n          flex-basis: 100%;\n          display: flex;\n          justify-content: flex-start;\n          align-items: center;\n          > button::after {\n            content: 'Previous';\n            color: white;\n          }\n          > button {\n            border: none;\n            opacity: 1;\n          }\n          > .MuiPaginationItem-page.Mui-disabled {\n            opacity: 1;\n          }\n          > button.Mui-disabled::after {\n            color: #aaaaaa;\n          }\n        }\n        &:last-child {\n          flex-basis: 100%;\n          display: flex;\n          justify-content: flex-end;\n          align-items: center;\n          border: none;\n          > button::before {\n            content: 'Next';\n            color: white;\n          }\n          > button {\n            border: none;\n            opacity: 1;\n          }\n          > .MuiPaginationItem-page.Mui-disabled {\n            opacity: 1;\n          }\n          > button.Mui-disabled::before {\n            color: #aaaaaa;\n          }\n        }\n        & .MuiPaginationItem-icon {\n          display: none;\n        }\n        & button {\n          color: white;\n          border: 1px solid rgba(255, 255, 255, 0.15);\n        }\n        & button.Mui-selected {\n          border: none;\n          background: ", ";\n          // background: linear-gradient(90deg, #4a65d5 0%, #4a65d5 100%);\n        }\n      }\n    }\n  }\n"])), (function(e) { return e.theme.custom.gradient }))
        },
        1840: function(e, t, n) {
            "use strict";
            n.r(t);
            var i, a, r, c, o, l, s, d, u, p, b, x, h, j, f, g, m, O, w = n(11),
                v = n(10),
                k = n(7),
                y = n(3),
                S = n.n(y),
                _ = n(1),
                L = n(1538),
                I = n(5),
                R = n(84),
                T = n.n(R),
                z = n(129),
                C = n(116),
                E = n(18),
                D = n(83),
                M = n(77),
                A = n(49),
                B = n(1503),
                F = n(50),
                N = n(220),
                P = n(1489),
                V = n(324),
                Q = n(71),
                G = n(45),
                K = n(14),
                U = n(2),
                W = n(1481),
                Z = n(1472),
                H = n(1471),
                q = n(1470),
                J = n(1469),
                X = n(795),
                Y = n(1586),
                $ = n.n(Y),
                ee = n(330),
                te = n(328),
                ne = n(1582),
                ie = n(1583),
                ae = n(1584),
                re = n(1585),
                ce = n(1499),
                oe = n(1500),
                le = n(516),
                se = n(65),
                de = n(41),
                ue = n(0),
                pe = I.default.div(i || (i = Object(k.a)(["\n  background: ", ";\n  position: relative;\n  border-radius: 8px;\n  cursor: pointer;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"])), (function(e) { return e.theme.custom.tertiary })),
                be = I.default.div(a || (a = Object(k.a)(["\n  div:first-child {\n    font-weight: bold;\n    font-size: 20px;\n    white-space: pre-wrap;\n    text-transform: capitalize;\n  }\n  div:last-child {\n    font-weight: 600;\n    font-size: 14px;\n    white-space: pre-wrap;\n    color: white;\n    text-transform: capitalize;\n  }\n"]))),
                xe = I.default.div(r || (r = Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  flex: 1;\n  div:first-child {\n    font-weight: 600;\n    font-size: 14px;\n    white-space: nowrap;\n    color: #f2c94c;\n    margin-bottom: 16px;\n    text-align: center;\n  }\n  div:last-child {\n    font-weight: 600;\n    white-space: nowrap;\n    color: white;\n    margin-bottom: 16px;\n  }\n"]))),
                he = I.default.div(c || (c = Object(k.a)(["\n  width: 100%;\n"]))),
                je = I.default.div(o || (o = Object(k.a)(["\n  margin: 0px 0px;\n  background-color: ", ";\n  border-radius: 8px;\n  position: relative;\n"])), (function(e) { return e.theme.custom.secondary })),
                fe = I.default.div(l || (l = Object(k.a)(["\n  width: ", ";\n  height: 22px;\n  background: ", ";\n  border-radius: 8px;\n  padding: 1px;\n  display: flex;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: bold;\n"])), (function(e) { return "".concat(e.state, "%") }), (function(e) { return e.theme.custom.gradient })),
                ge = I.default.div(s || (s = Object(k.a)(["\n  img {\n    width: 64px;\n    height: 64px;\n    margin-right: 20px;\n    border-radius: 50%;\n    max-width: unset;\n  }\n"]))),
                me = I.default.div(d || (d = Object(k.a)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  gap: 10px;\n  flex: 2;\n"]))),
                Oe = I.default.div(u || (u = Object(k.a)(["\n  flex-grow: 1!important;\n"]))),
                we = I.default.div(p || (p = Object(k.a)(["\n  display: flex;\n  gap: 10px;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  margin-top: 10px;\n"]))),
                ve = I.default.div(b || (b = Object(k.a)(["\n  display: flex;\n  gap: 10px;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  margin-top: 10px;\n"]))),
                ke = (x = {}, Object(K.a)(x, P.b.GOLD, "#ffbb00"), Object(K.a)(x, P.b.SILVER, "#ccc"), Object(K.a)(x, P.b.BRONZE, "#c85"), Object(K.a)(x, P.b.OTHER, "#4FD"), x),
                ye = function(e) {
                    var t = e.saleId,
                        n = e.ownerAddress,
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
                        j = e.totalTokenSupply,
                        f = e.raise,
                        g = e.websiteLink,
                        m = e.githubLink,
                        O = e.twitterLink,
                        w = e.redditLink,
                        v = e.telegramLink,
                        k = e.certikAudit,
                        y = e.isBrise,
                        S = e.doxxedTeam,
                        _ = e.utility,
                        L = e.kyc,
                        I = Object(D.g)(),
                        R = Object(E.a)().account,
                        T = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s;
                            return Object(Z.a)(new Date(1e3 * parseInt(e)), new Date(1e3 * parseInt(t)))
                        },
                        z = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s;
                            return Object(H.a)(new Date(1e3 * parseInt(e)), new Date(1e3 * parseInt(t)))
                        },
                        C = function() { return Object(ue.jsxs)(U.F, { alignItems: "center", style: { position: "absolute", top: "0px", left: "15px", paddingInline: "15px", paddingTop: "4px", paddingBottom: "4px", background: "#7710e7", borderRadius: "0 0px 4px 4px" }, children: [Object(ue.jsx)("img", { src: "/images/net/brise.png", style: { width: "16px", height: "16px", marginRight: "4px", borderRadius: "4px" }, alt: "brise-logo" }), "Bitgert Startup Studio"] }) };
                    return Object(ue.jsxs)(pe, {
                        onClick: function() { R === n ? I.push("/launchpad/presale/".concat(t, "/").concat(p)) : I.push("/launchpad/live/".concat(t, "/").concat(p)) },
                        children: [y && Object(ue.jsx)(C, {}), Object(ue.jsxs)("div", { style: { display: "flex", alignItems: "center", marginBottom: "10px" }, children: [Object(ue.jsx)(ge, { children: Object(ue.jsx)("img", { src: "" === r ? W.a : r, alt: "token icon" }) }), Object(ue.jsxs)("div", { style: { flex: "1 1 0%" }, children: [Object(ue.jsxs)(U.F, { children: [Object(ue.jsx)(me, { children: Object(ue.jsxs)(be, { children: [Object(ue.jsx)(U.lb, { children: i }), Object(ue.jsx)(U.lb, { fontSize: "10px", children: a })] }) }), Object(ue.jsx)(Oe, {}), Object(ue.jsxs)("div", { children: [Object(ue.jsx)(xe, { style: { fontWeight: "bold", color: ke[u] }, children: u === P.b.GOLD ? "GOLD" : u === P.b.SILVER ? "SILVER" : u === P.b.BRONZE ? "BRONZE" : "OTHER" }), Object(ue.jsxs)(we, { children: [k && Object(ue.jsx)(ne.a, { width: "15px", height: "15px" }), S && Object(ue.jsx)(ae.a, { width: "15px", height: "15px" }), _ && Object(ue.jsx)(re.a, { width: "15px", height: "15px" }), L && Object(ue.jsx)(ie.a, { width: "15px", height: "15px" })] }), Object(ue.jsxs)(ve, { children: [g ? Object(ue.jsx)(U.N, { external: !0, href: g, "aria-label": "social2", children: Object(ue.jsx)(te.a, { width: "15px", height: "15px" }) }) : null, m ? Object(ue.jsx)(U.N, { external: !0, href: m, "aria-label": "social2", children: Object(ue.jsx)("img", { src: ce.a, alt: "Git Logo", width: "15px", height: "15px" }) }) : null, O ? Object(ue.jsx)(U.N, { external: !0, href: O, "aria-label": "twitter", children: Object(ue.jsx)(ee.a, { width: "15px", height: "15px" }) }) : null, w ? Object(ue.jsx)(U.N, { external: !0, href: w, "aria-label": "discord", children: Object(ue.jsx)("img", { src: oe.a, alt: "Git Logo", width: "15px", height: "15px" }) }) : null, v ? Object(ue.jsx)(U.N, { external: !0, href: v, "aria-label": "telegram", children: Object(ue.jsx)(le.a, { width: "15px", height: "15px" }) }) : null] })] })] }), Object(ue.jsx)(U.F, { mt: "10px", children: Object(ue.jsxs)(U.lb, { fontSize: "10px", children: [" ", "Starts ".concat(Object(X.default)(new Date(1e3 * parseInt(s)), "EEE dd MMM hh:mm"), " your time"), " "] }) }), Object(ue.jsxs)(U.F, { mt: "10px", children: [Object(ue.jsx)($.a, { fontSize: "inherit", style: { marginTop: "2px", marginRight: "5px" } }), Object(ue.jsx)(U.lb, { fontSize: "14px", mr: "10px", children: "".concat(b + x, "%") }), Object(ue.jsx)(U.lb, { fontSize: "14px", style: { backgroundColor: "#710d89", padding: "0px 10px", borderRadius: "10px" }, children: "".concat(parseFloat((100 - h / j * 100).toFixed(2)), "%") })] })] })] }), Object(ue.jsxs)("div", {
                            children: [Object(ue.jsx)("div", {
                                style: { flex: "1 1 0%", marginBottom: "10px" },
                                children: Object(ue.jsxs)(U.F, {
                                    children: [Object(ue.jsx)(U.lb, { fontSize: "12px", children: "Duration ".concat(T() > 0 ? "".concat(T(), " days") : "".concat(z(), " hours")) }), Object(ue.jsx)(Oe, {}), Object(ue.jsx)(U.lb, {
                                        fontSize: "12px",
                                        children: function() {
                                            if (Date.now() / 1e3 > parseInt(d)) return "Ended";
                                            var e = T(s, "".concat(Date.now() / 1e3));
                                            if (e > 0) return "Starts in ".concat(e, " days");
                                            var t = z(s, "".concat(Date.now() / 1e3));
                                            if (t > 0) return "Starts in ".concat(t, " hours");
                                            var n = function() {
                                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
                                                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s;
                                                return Object(q.a)(new Date(1e3 * parseInt(e)), new Date(1e3 * parseInt(t)))
                                            }(s, "".concat(Date.now() / 1e3));
                                            if (n > 0) return "Starts in ".concat(n, " minutes");
                                            var i = function() {
                                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
                                                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s;
                                                return Object(J.a)(new Date(1e3 * parseInt(e)), new Date(1e3 * parseInt(t)))
                                            }(s, "".concat(Date.now() / 1e3));
                                            return i > 0 ? "Starts in ".concat(i, " seconds") : "Active"
                                        }()
                                    })]
                                })
                            }), Object(ue.jsx)(he, { children: Object(ue.jsxs)(je, { children: [Object(ue.jsx)(fe, { state: c }), Object(ue.jsx)("div", { style: { flex: "1 1 0%", position: "absolute", top: "10%", left: 0, width: "100%", alignItems: "center", padding: "0px 15px" }, children: Object(ue.jsxs)(U.F, { children: [Object(ue.jsx)(U.lb, { fontSize: "12px", children: "".concat(Object(de.j)(f).length < 12 || 0 === f ? Object(de.j)(f) : "".concat(Object(de.j)(f).slice(0, 8), "...").concat(Object(de.j)(f).slice(Object(de.j)(f).length - 5, Object(de.j)(f).length)), "/").concat(Object(de.j)(o).length < 15 || 0 === o ? Object(de.j)(o) : "".concat(Object(de.j)(o).slice(0, 8), "...").concat(Object(de.j)(o).slice(Object(de.j)(o).length - 5, Object(de.j)(o).length)), " ").concat(se.b[p]) }), Object(ue.jsx)(Oe, {}), Object(ue.jsx)(U.lb, { fontSize: "12px", children: "".concat(Object(de.j)(l).length < 12 || 0 === l ? Object(de.j)(l) : "".concat(Object(de.j)(l).slice(0, 8), "...").concat(Object(de.j)(l).slice(Object(de.j)(l).length - 5, Object(de.j)(l).length)), " ").concat(se.b[p]) })] }) })] }) })]
                        })]
                    })
                },
                Se = n(514),
                _e = n(25),
                Le = n(515),
                Ie = I.default.div(h || (h = Object(k.a)(["\n  flex-wrap: wrap;\n  justify-content: center;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  background: ", ";\n  padding: 0px 15px;\n  margin: 21px 0px;\n  border-radius: 3px;\n  > div {\n    padding: 8px 0px;\n  }\n\n  ", " {\n    justify-content: center;\n\n    > div {\n      padding: 0;\n    }\n  }\n"])), (function(e) { return e.theme.custom.tertiary }), (function(e) { return e.theme.mediaQueries.sm })),
                Re = Object(I.default)(U.F)(j || (j = Object(k.a)(["\n  height: 47px;\n  margin: 12px 0;\n  margin-right: ", ";\n  width: ", ";\n  background: ", ";\n  > div {\n    flex: 1;\n    height: 47px;\n    border-radius: 5px;\n    box-sizing: border-box;\n    margin-right: 10px;\n    background: ", ";\n    > div {\n      > div {\n        color: white; \n      }\n    }\n  }\n"])), (function(e) { return e.isMobile ? "0" : "38px" }), (function(e) { return e.isMobile ? "100%" : "auto" }), (function(e) { return e.theme.custom.tertiary }), (function(e) { return e.theme.custom.tertiary })),
                Te = I.default.div(f || (f = Object(k.a)(["\n  flex: 1;\n  position: relative;\n  padding: 0 20px;\n  z-index: 3;\n  ", " {\n    min-width: 420px;\n  }\n  & input {\n    background: transparent;\n    border: none;\n    width: 100%;\n    box-shadow: none;\n    outline: none;\n    color: white;\n    font-size: 16px;\n    &::placeholder {\n      color: white;\n    }\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                ze = Object(I.default)(U.lb)(g || (g = Object(k.a)(["\n  padding: 0 4px;\n  width: ", ";\n  height: 47px;\n  text-overflow: ellipsis;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  background: ", ";\n  border-radius: 5px;\n  margin: 12px 0;\n  & button:last-child {\n    background: ", ";\n  }\n  ", " {\n    flex: 1;\n    border-radius: 5px;\n  }\n"])), (function(e) { return e.isMobile ? "100%" : "auto" }), (function(e) { return e.theme.custom.background }), (function(e) { return e.theme.custom.pancakePrimary }), (function(e) { return e.theme.mediaQueries.md })),
                Ce = Object(I.default)(U.K)(m || (m = Object(k.a)(["\n  background-color: transparent !important;\n  margin: 0px 3px;\n  border: none;\n  outline: none !important;\n  box-shadow: none;\n}\n"]))),
                Ee = function(e) {
                    var t = e.setSearchOption,
                        n = e.setFilterOption,
                        i = e.setSearchKey,
                        a = e.setPageIndex,
                        r = Object(_e.b)().t,
                        c = !Object(U.zb)().isXl,
                        o = Object(_.useState)(""),
                        l = Object(v.a)(o, 2),
                        s = l[0],
                        d = l[1];
                    return Object(ue.jsxs)(Ie, { children: [Object(ue.jsxs)(Re, { isMobile: c, children: [Object(ue.jsx)(Se.a, { options: [{ label: r("ALL"), value: "all" }, { label: r("Active"), value: "active" }, { label: r("Success"), value: "ended" }, { label: r("Fail"), value: "failed" }, { label: r("Pending"), value: "pending" }], onChange: function(e) { a(0), n(e.value) } }), Object(ue.jsx)(Se.a, { options: [{ label: r("ALL"), value: P.b.ALL }, { label: r("Gold"), value: P.b.GOLD }, { label: r("Silver"), value: P.b.SILVER }, { label: r("Bronze"), value: P.b.BRONZE }, { label: r("other"), value: P.b.OTHER }], onChange: function(e) { a(0), t(e.value) } })] }), Object(ue.jsxs)(ze, { isMobile: c, children: [Object(ue.jsx)(Te, { children: Object(ue.jsx)("input", { placeholder: "Search", onChange: function(e) { d(e.target.value) }, onKeyDown: function(e) { "Enter" === e.key && (a(0), i(s)) } }) }), Object(ue.jsx)(Ce, { onClick: function() { i(s) }, children: Object(ue.jsx)(Le.a, { width: "22px", height: "22px", color: Object(I.useTheme)().colors.primary }) })] })] })
                },
                De = n(1515),
                Me = I.default.div(O || (O = Object(k.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n"])));
            t.default = function() {
                var e = Object(E.a)().chainId,
                    t = Object(D.i)(),
                    n = parseInt(t.chainId),
                    i = Object(_.useState)(n),
                    a = Object(v.a)(i, 2),
                    r = a[0],
                    c = a[1],
                    o = Object(_.useMemo)((function() { return Object(A.K)(Object(G.e)(r), r) }), [r]),
                    l = Object(F.e)().menuToggled,
                    s = Object(_.useState)([]),
                    d = Object(v.a)(s, 2),
                    u = d[0],
                    p = d[1],
                    b = Object(_.useState)([]),
                    x = Object(v.a)(b, 2),
                    h = x[0],
                    j = x[1],
                    f = Object(_.useState)(!0),
                    g = Object(v.a)(f, 2),
                    m = g[0],
                    O = g[1],
                    k = Object(_.useState)(P.b.ALL),
                    y = Object(v.a)(k, 2),
                    I = y[0],
                    R = y[1],
                    K = Object(_.useState)("all"),
                    U = Object(v.a)(K, 2),
                    W = U[0],
                    Z = U[1],
                    H = Object(_.useState)(""),
                    q = Object(v.a)(H, 2),
                    J = q[0],
                    X = q[1],
                    Y = Object(_.useState)(0),
                    $ = Object(v.a)(Y, 2),
                    ee = $[0],
                    te = $[1],
                    ne = Object(_.useState)(1),
                    ie = Object(v.a)(ne, 2),
                    ae = ie[0],
                    re = ie[1];
                Object(_.useEffect)((function() { localStorage.setItem(M.a.LOCAL_ROUTER_NAME, "launchpad/listing") }), []), Object(_.useEffect)((function() { c(void 0 === e ? n : e) }), [e, n]), Object(_.useEffect)((function() {
                    var e = function() {
                        var e = Object(w.a)(S.a.mark((function e() {
                            var t;
                            return S.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        t = { chain_id: r, token_level: I, key: J, page_index: ee, num_per_page: P.a }, O(!0), p([]), T.a.post("".concat("https://thesphynx.co/api2", "/getAllPresaleInfo"), { data: t }).then(function() {
                                            var e = Object(w.a)(S.a.mark((function e(t) {
                                                var n, i;
                                                return S.a.wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            if (!t.data) { e.next = 19; break }
                                                            return n = 1, t.data.length > 0 && (n = Math.ceil(parseInt(t.data[0].count) / P.a)), re(n), e.prev = 4, e.next = 7, Promise.all(t.data.map(function() {
                                                                var e = Object(w.a)(S.a.mark((function e(t) {
                                                                    var n, i, a, c, l, s, d, u, p, b, x, h, j, f, g, m, O;
                                                                    return S.a.wrap((function(e) {
                                                                        for (;;) switch (e.prev = e.next) {
                                                                            case 0:
                                                                                return n = { saleId: t.sale_id, ownerAddress: t.owner_address, tokenName: t.token_name, tokenSymbole: t.token_symbol, tokenLogo: t.logo_link, activeSale: 0, totalCap: 0, softCap: t.soft_cap, hardCap: t.hard_cap, minContribution: t.min_buy, maxContribution: t.max_buy, startTime: t.start_time, endTime: t.end_time, tokenState: "active", level: t.token_level, defaultRouterRate: t.default_router_rate, routerRate: t.router_rate, totalTokenSupply: 0, burnValue: 0, lockValue: 0, presaleValue: 0, liquidityValue: 0, unlock: 0, raise: 0, isBrise: !!t.is_brise && t.is_brise, websiteLink: t.website_link, githubLink: t.github_link, twitterLink: t.twitter_link, redditLink: t.reddit_link, telegramLink: t.telegram_link, certikAudit: t.certik_audit, doxxedTeam: t.doxxed_team, utility: t.utility, kyc: t.kyc }, e.next = 3, o.totalContributionBNB(t.sale_id);
                                                                            case 3:
                                                                                return i = e.sent.toString(), a = parseFloat(z.utils.formatUnits(i, t.decimal)), n.totalCap = a, n.activeSale = a / t.hard_cap, i && (c = Math.floor((new Date).getTime() / 1e3), parseInt(t.start_time) < c && parseInt(t.end_time) > c ? n.tokenState = "active" : c > parseInt(t.end_time) ? n.totalCap < n.softCap ? n.tokenState = "failed" : n.tokenState = "ended" : c < parseInt(t.start_time) && (n.tokenState = "pending")), l = V.a, s = new C.Contract(t.token_address, l, Object(G.e)(r)), e.next = 12, s.decimals();
                                                                            case 12:
                                                                                return d = e.sent, e.next = 15, s.totalSupply();
                                                                            case 15:
                                                                                return i = e.sent.toString(), e.next = 18, s.balanceOf(Q.a);
                                                                            case 18:
                                                                                return u = e.sent, p = parseFloat(z.utils.formatUnits(u, d)), b = t.hard_cap * t.tier1, x = t.listing_rate * t.hard_cap * (t.router_rate + t.default_router_rate) / 100, h = parseFloat(z.utils.formatUnits(i, t.token_decimal)), e.next = 25, T.a.get("".concat("https://thesphynx.co/api2", "/getTokenLockList/").concat(r, "/").concat(t.token_address));
                                                                            case 25:
                                                                                for (j = e.sent, f = j.data, g = 0, m = 0; m < f.length; m++) g += f[m].lock_supply;
                                                                                return O = h - p - g - b - x, n.totalTokenSupply = h, n.burnValue = p, n.lockValue = g, n.presaleValue = b, n.liquidityValue = x, n.unlock = O, e.next = 38, o.totalContributionBNB(t.sale_id);
                                                                            case 38:
                                                                                return i = e.sent.toString(), n.raise = parseFloat(z.utils.formatEther(i)), e.abrupt("return", n);
                                                                            case 41:
                                                                            case "end":
                                                                                return e.stop()
                                                                        }
                                                                    }), e)
                                                                })));
                                                                return function(t) { return e.apply(this, arguments) }
                                                            }()));
                                                        case 7:
                                                            i = e.sent, j(i), p(i), O(!1), e.next = 17;
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
                                            return function(t) { return e.apply(this, arguments) }
                                        }());
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() { return e.apply(this, arguments) }
                    }();
                    r && void 0 !== I && e()
                }), [r, I, J, ee]), Object(_.useEffect)((function() {
                    var e = [];
                    h.forEach((function(t) { "all" !== W && W !== t.tokenState || e.push(t) })), p(e)
                }), [W]);
                return Object(ue.jsxs)(De.g, { children: [Object(ue.jsx)(De.a, { children: Object(ue.jsxs)(De.e, { children: [Object(ue.jsx)("img", { src: B.a, alt: "listIcon" }), Object(ue.jsx)(De.d, { children: Object(ue.jsx)(De.b, { children: "Presale Directory" }) })] }) }), Object(ue.jsx)(Ee, { setSearchOption: R, setSearchKey: X, setFilterOption: Z, setPageIndex: te }), m && Object(ue.jsx)(Me, { children: Object(ue.jsx)(N.a, {}) }), Object(ue.jsx)(De.f, { toggled: l, children: u && u.map((function(e) { return Object(ue.jsx)(ye, { saleId: e.saleId, chainId: t.chainId, ownerAddress: e.ownerAddress, tokenName: e.tokenName, tokenSymbole: e.tokenSymbole, tokenLogo: e.tokenLogo, activeSale: 100 * e.activeSale, hardCap: e.hardCap, maxContribution: e.maxContribution, startTime: e.startTime, endTime: e.endTime, level: e.level, defaultRouterRate: e.defaultRouterRate, routerRate: e.routerRate, unlock: e.unlock, totalTokenSupply: e.totalTokenSupply, raise: e.raise, websiteLink: e.websiteLink, githubLink: e.githubLink, twitterLink: e.twitterLink, redditLink: e.redditLink, telegramLink: e.telegramLink, certikAudit: e.certikAudit, doxxedTeam: e.doxxedTeam, utility: e.utility, isBrise: e.isBrise, kyc: e.kyc, children: Object(ue.jsx)("img", { src: e.tokenLogo, alt: "token icon" }) }, e.saleId) })) }), Object(ue.jsx)(De.c, { children: Object(ue.jsx)(L.a, { count: ae, siblingCount: 0, onChange: function(e, t) { te(t - 1) } }) })] })
            }
        }
    }
]);