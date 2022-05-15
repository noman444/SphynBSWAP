(this["webpackJsonpsphynx-frontend"] = this["webpackJsonpsphynx-frontend"] || []).push([
    [23], {
        1481: function(e, t, n) {
            "use strict";
            t.a = n.p + "static/media/MainLogo.7317e747.png"
        },
        1489: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() { return a })), n.d(t, "a", (function() { return i }));
            var a = { ALL: 4, GOLD: 3, SILVER: 2, BRONZE: 1, OTHER: 0 },
                i = 8
        },
        1503: function(e, t, n) {
            "use strict";
            t.a = n.p + "static/media/ListIcon.7aad4b1d.svg"
        },
        1538: function(e, t, n) {
            "use strict";
            var a = n(24),
                i = n(44),
                r = n(1),
                o = n(72),
                c = n(105),
                d = n(33),
                s = n(10),
                l = n(537);
            var u = n(265),
                p = n(519),
                b = n(1429),
                m = n(521),
                h = Object(m.a)(r.createElement("path", { d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z" }), "FirstPage"),
                f = Object(m.a)(r.createElement("path", { d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z" }), "LastPage"),
                g = Object(m.a)(r.createElement("path", { d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" }), "NavigateBefore"),
                x = Object(m.a)(r.createElement("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" }), "NavigateNext"),
                j = n(186),
                O = r.forwardRef((function(e, t) {
                    var n = e.classes,
                        c = e.className,
                        d = e.color,
                        s = void 0 === d ? "standard" : d,
                        l = e.component,
                        u = e.disabled,
                        m = void 0 !== u && u,
                        O = e.page,
                        v = e.selected,
                        y = void 0 !== v && v,
                        w = e.shape,
                        k = void 0 === w ? "round" : w,
                        C = e.size,
                        S = void 0 === C ? "medium" : C,
                        I = e.type,
                        L = void 0 === I ? "page" : I,
                        z = e.variant,
                        M = void 0 === z ? "text" : z,
                        N = Object(i.a)(e, ["classes", "className", "color", "component", "disabled", "page", "selected", "shape", "size", "type", "variant"]),
                        B = ("rtl" === Object(p.a)().direction ? { previous: x, next: g, last: h, first: f } : { previous: g, next: x, first: h, last: f })[L];
                    return "start-ellipsis" === L || "end-ellipsis" === L ? r.createElement("div", { ref: t, className: Object(o.a)(n.root, n.ellipsis, m && n.disabled, "medium" !== S && n["size".concat(Object(j.a)(S))]) }, "\u2026") : r.createElement(b.a, Object(a.a)({ ref: t, component: l, disabled: m, focusVisibleClassName: n.focusVisible, className: Object(o.a)(n.root, n.page, n[M], n[k], c, "standard" !== s && n["".concat(M).concat(Object(j.a)(s))], m && n.disabled, y && n.selected, "medium" !== S && n["size".concat(Object(j.a)(S))]) }, N), "page" === L && O, B ? r.createElement(B, { className: n.icon }) : null)
                })),
                v = Object(c.a)((function(e) { return { root: Object(a.a)({}, e.typography.body2, { borderRadius: 16, textAlign: "center", boxSizing: "border-box", minWidth: 32, height: 32, padding: "0 6px", margin: "0 3px", color: e.palette.text.primary }), page: { transition: e.transitions.create(["color", "background-color"], { duration: e.transitions.duration.short }), "&:hover": { backgroundColor: e.palette.action.hover, "@media (hover: none)": { backgroundColor: "transparent" } }, "&$focusVisible": { backgroundColor: e.palette.action.focus }, "&$selected": { backgroundColor: e.palette.action.selected, "&:hover, &$focusVisible": { backgroundColor: Object(u.a)(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity), "@media (hover: none)": { backgroundColor: e.palette.action.selected } }, "&$disabled": { opacity: 1, color: e.palette.action.disabled, backgroundColor: e.palette.action.selected } }, "&$disabled": { opacity: e.palette.action.disabledOpacity } }, sizeSmall: { minWidth: 26, height: 26, borderRadius: 13, margin: "0 1px", padding: "0 4px", "& $icon": { fontSize: e.typography.pxToRem(18) } }, sizeLarge: { minWidth: 40, height: 40, borderRadius: 20, padding: "0 10px", fontSize: e.typography.pxToRem(15), "& $icon": { fontSize: e.typography.pxToRem(22) } }, textPrimary: { "&$selected": { color: e.palette.primary.contrastText, backgroundColor: e.palette.primary.main, "&:hover, &$focusVisible": { backgroundColor: e.palette.primary.dark, "@media (hover: none)": { backgroundColor: e.palette.primary.main } }, "&$disabled": { color: e.palette.action.disabled } } }, textSecondary: { "&$selected": { color: e.palette.secondary.contrastText, backgroundColor: e.palette.secondary.main, "&:hover, &$focusVisible": { backgroundColor: e.palette.secondary.dark, "@media (hover: none)": { backgroundColor: e.palette.secondary.main } }, "&$disabled": { color: e.palette.action.disabled } } }, outlined: { border: "1px solid ".concat("light" === e.palette.type ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)"), "&$selected": { "&$disabled": { border: "1px solid ".concat(e.palette.action.disabledBackground) } } }, outlinedPrimary: { "&$selected": { color: e.palette.primary.main, border: "1px solid ".concat(Object(u.a)(e.palette.primary.main, .5)), backgroundColor: Object(u.a)(e.palette.primary.main, e.palette.action.activatedOpacity), "&:hover, &$focusVisible": { backgroundColor: Object(u.a)(e.palette.primary.main, e.palette.action.activatedOpacity + e.palette.action.hoverOpacity), "@media (hover: none)": { backgroundColor: "transparent" } }, "&$disabled": { color: e.palette.action.disabled } } }, outlinedSecondary: { "&$selected": { color: e.palette.secondary.main, border: "1px solid ".concat(Object(u.a)(e.palette.secondary.main, .5)), backgroundColor: Object(u.a)(e.palette.secondary.main, e.palette.action.activatedOpacity), "&:hover, &$focusVisible": { backgroundColor: Object(u.a)(e.palette.secondary.main, e.palette.action.activatedOpacity + e.palette.action.hoverOpacity), "@media (hover: none)": { backgroundColor: "transparent" } }, "&$disabled": { color: e.palette.action.disabled } } }, rounded: { borderRadius: e.shape.borderRadius }, ellipsis: { height: "auto", "&$disabled": { opacity: e.palette.action.disabledOpacity } }, focusVisible: {}, disabled: {}, selected: {}, icon: { fontSize: e.typography.pxToRem(20), margin: "0 -8px" } } }), { name: "MuiPaginationItem" })(O);

            function y(e, t, n) { return "page" === e ? "".concat(n ? "" : "Go to ", "page ").concat(t) : "Go to ".concat(e, " page") }
            var w = r.forwardRef((function(e, t) {
                e.boundaryCount;
                var n = e.classes,
                    c = e.className,
                    u = e.color,
                    p = void 0 === u ? "standard" : u,
                    b = (e.count, e.defaultPage, e.disabled, e.getItemAriaLabel),
                    m = void 0 === b ? y : b,
                    h = (e.hideNextButton, e.hidePrevButton, e.onChange, e.page, e.renderItem),
                    f = void 0 === h ? function(e) { return r.createElement(v, e) } : h,
                    g = e.shape,
                    x = void 0 === g ? "round" : g,
                    j = (e.showFirstButton, e.showLastButton, e.siblingCount, e.size),
                    O = void 0 === j ? "medium" : j,
                    w = e.variant,
                    k = void 0 === w ? "text" : w,
                    C = Object(i.a)(e, ["boundaryCount", "classes", "className", "color", "count", "defaultPage", "disabled", "getItemAriaLabel", "hideNextButton", "hidePrevButton", "onChange", "page", "renderItem", "shape", "showFirstButton", "showLastButton", "siblingCount", "size", "variant"]),
                    S = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.boundaryCount,
                            n = void 0 === t ? 1 : t,
                            r = e.componentName,
                            o = void 0 === r ? "usePagination" : r,
                            c = e.count,
                            u = void 0 === c ? 1 : c,
                            p = e.defaultPage,
                            b = void 0 === p ? 1 : p,
                            m = e.disabled,
                            h = void 0 !== m && m,
                            f = e.hideNextButton,
                            g = void 0 !== f && f,
                            x = e.hidePrevButton,
                            j = void 0 !== x && x,
                            O = e.onChange,
                            v = e.page,
                            y = e.showFirstButton,
                            w = void 0 !== y && y,
                            k = e.showLastButton,
                            C = void 0 !== k && k,
                            S = e.siblingCount,
                            I = void 0 === S ? 1 : S,
                            L = Object(i.a)(e, ["boundaryCount", "componentName", "count", "defaultPage", "disabled", "hideNextButton", "hidePrevButton", "onChange", "page", "showFirstButton", "showLastButton", "siblingCount"]),
                            z = Object(l.a)({ controlled: v, default: b, name: o, state: "page" }),
                            M = Object(s.a)(z, 2),
                            N = M[0],
                            B = M[1],
                            P = function(e, t) { v || B(t), O && O(e, t) },
                            E = function(e, t) { var n = t - e + 1; return Array.from({ length: n }, (function(t, n) { return e + n })) },
                            _ = E(1, Math.min(n, u)),
                            $ = E(Math.max(u - n + 1, n + 1), u),
                            D = Math.max(Math.min(N - I, u - n - 2 * I - 1), n + 2),
                            T = Math.min(Math.max(N + I, n + 2 * I + 2), $[0] - 2),
                            R = [].concat(Object(d.a)(w ? ["first"] : []), Object(d.a)(j ? [] : ["previous"]), Object(d.a)(_), Object(d.a)(D > n + 2 ? ["start-ellipsis"] : n + 1 < u - n ? [n + 1] : []), Object(d.a)(E(D, T)), Object(d.a)(T < u - n - 1 ? ["end-ellipsis"] : u - n > n ? [u - n] : []), Object(d.a)($), Object(d.a)(g ? [] : ["next"]), Object(d.a)(C ? ["last"] : [])),
                            A = function(e) {
                                switch (e) {
                                    case "first":
                                        return 1;
                                    case "previous":
                                        return N - 1;
                                    case "next":
                                        return N + 1;
                                    case "last":
                                        return u;
                                    default:
                                        return null
                                }
                            },
                            F = R.map((function(e) { return "number" === typeof e ? { onClick: function(t) { P(t, e) }, type: "page", page: e, selected: e === N, disabled: h, "aria-current": e === N ? "true" : void 0 } : { onClick: function(t) { P(t, A(e)) }, type: e, page: A(e), selected: !1, disabled: h || -1 === e.indexOf("ellipsis") && ("next" === e || "last" === e ? N >= u : N <= 1) } }));
                        return Object(a.a)({ items: F }, L)
                    }(Object(a.a)({}, e, { componentName: "Pagination" })),
                    I = S.items;
                return r.createElement("nav", Object(a.a)({ "aria-label": "pagination navigation", className: Object(o.a)(n.root, c), ref: t }, C), r.createElement("ul", { className: n.ul }, I.map((function(e, t) { return r.createElement("li", { key: t }, f(Object(a.a)({}, e, { color: p, "aria-label": m(e.type, e.page, e.selected), shape: x, size: O, variant: k }))) }))))
            }));
            t.a = Object(c.a)({ root: {}, ul: { display: "flex", flexWrap: "wrap", alignItems: "center", padding: 0, margin: 0, listStyle: "none" } }, { name: "MuiPagination" })(w)
        },
        1838: function(e, t, n) {
            "use strict";
            n.r(t);
            var a, i, r, o, c, d, s, l, u, p, b, m, h, f, g, x, j, O, v, y, w, k, C, S, I, L, z = n(11),
                M = n(10),
                N = n(7),
                B = n(3),
                P = n.n(B),
                E = n(1),
                _ = n(1538),
                $ = n(5),
                D = n(84),
                T = n.n(D),
                R = n(129),
                A = n(18),
                F = n(83),
                Q = n(77),
                V = n(49),
                W = n(1503),
                K = n(50),
                G = n(220),
                J = n(1489),
                H = n(45),
                U = n(2),
                X = n(1481),
                Z = n(1472),
                q = n(1471),
                Y = n(1470),
                ee = n(1469),
                te = n(795),
                ne = n(328),
                ae = n(516),
                ie = n(0),
                re = $.default.div(a || (a = Object(N.a)(["\n  background: ", ";\n  border-radius: 8px;\n  cursor: pointer;\n  padding: 20px;\n"])), (function(e) { return e.theme.custom.cardWrapper })),
                oe = $.default.div(i || (i = Object(N.a)(["\n  div:first-child {\n    font-weight: bold;\n    font-size: 20px;\n    text-transform: capitalize;\n  }\n  div:last-child {\n    font-weight: 600;\n    font-size: 14px;\n    white-space: nowrap;\n    color: white;\n    text-transform: capitalize;\n  }\n"]))),
                ce = $.default.div(r || (r = Object(N.a)(["\n  width: 100%;\n"]))),
                de = $.default.div(o || (o = Object(N.a)(["\n  margin: 0px 0px;\n  background-color: #23234b;\n  border-radius: 8px;\n  position: relative;\n"]))),
                se = $.default.div(c || (c = Object(N.a)(["\n  width: ", ";\n  height: 22px;\n  background: linear-gradient(90deg, #4a65d5 0%, #4a65d5 100%);\n  border-radius: 8px;\n  padding: 1px;\n  display: flex;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: bold;\n"])), (function(e) { return "".concat(e.state, "%") })),
                le = $.default.div(d || (d = Object(N.a)(["\n  img {\n    width: 64px;\n    height: 64px;\n    margin-right: 20px;\n    border-radius: 50%;\n    max-width: unset;\n  }\n"]))),
                ue = $.default.div(s || (s = Object(N.a)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  gap: 10px;\n  flex: 2;\n"]))),
                pe = $.default.div(l || (l = Object(N.a)(["\n  flex-grow: 1!important;\n"]))),
                be = $.default.div(u || (u = Object(N.a)(["\n  display: flex;\n  gap: 10px;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  margin-top: 10px;\n"]))),
                me = function(e) {
                    var t = e.idoId,
                        n = e.ownerAddress,
                        a = e.tokenSymbole,
                        i = e.tokenName,
                        r = e.tokenLogo,
                        o = e.activeSale,
                        c = e.hardCap,
                        d = e.maxContribution,
                        s = e.startTime,
                        l = e.endTime,
                        u = e.chainId,
                        p = e.raise,
                        b = e.websiteLink,
                        m = e.telegramLink,
                        h = Object(F.g)(),
                        f = Object(A.a)().account;
                    return Object(ie.jsxs)(re, {
                        onClick: function() { f === n ? h.push("/launchpad/premium/".concat(t, "/").concat(u)) : h.push("/launchpad/premium/live/".concat(t, "/").concat(u)) },
                        children: [Object(ie.jsxs)("div", { style: { display: "flex", alignItems: "center", marginBottom: "10px" }, children: [Object(ie.jsx)(le, { children: Object(ie.jsx)("img", { src: "" === r ? X.a : r, alt: "token icon" }) }), Object(ie.jsxs)("div", { style: { flex: "1 1 0%" }, children: [Object(ie.jsxs)(U.F, { children: [Object(ie.jsx)(ue, { children: Object(ie.jsxs)(oe, { children: [Object(ie.jsx)(U.lb, { children: a }), Object(ie.jsx)(U.lb, { fontSize: "10px", children: i })] }) }), Object(ie.jsx)(pe, {}), Object(ie.jsx)("div", { style: { marginLeft: "20px" }, children: Object(ie.jsxs)(be, { children: [b ? Object(ie.jsx)(U.N, { external: !0, href: b, "aria-label": "social2", children: Object(ie.jsx)(ne.a, { width: "15px", height: "15px" }) }) : null, m ? Object(ie.jsx)(U.N, { external: !0, href: m, "aria-label": "telegram", children: Object(ie.jsx)(ae.a, { width: "15px", height: "15px" }) }) : null] }) })] }), Object(ie.jsx)(U.F, { mt: "10px", children: Object(ie.jsxs)(U.lb, { fontSize: "10px", children: [" ", "Starts ".concat(Object(te.default)(new Date(1e3 * parseInt(s)), "EEE dd MMM hh:mm"), " your time"), " "] }) })] })] }), Object(ie.jsx)("div", {
                            style: { flex: "1 1 0%", marginBottom: "10px" },
                            children: Object(ie.jsx)(U.F, {
                                children: Object(ie.jsx)(U.lb, {
                                    fontSize: "12px",
                                    children: function() {
                                        if (Date.now() / 1e3 > parseInt(l)) return "Ended";
                                        var e = function() {
                                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l,
                                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s;
                                            return Object(Z.a)(new Date(1e3 * parseInt(e)), new Date(1e3 * parseInt(t)))
                                        }(s, "".concat(Date.now() / 1e3));
                                        if (e > 0) return "Starts in ".concat(e, " days");
                                        var t = function() {
                                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l,
                                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s;
                                            return Object(q.a)(new Date(1e3 * parseInt(e)), new Date(1e3 * parseInt(t)))
                                        }(s, "".concat(Date.now() / 1e3));
                                        if (t > 0) return "Starts in ".concat(t, " hours");
                                        var n = function() {
                                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l,
                                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s;
                                            return Object(Y.a)(new Date(1e3 * parseInt(e)), new Date(1e3 * parseInt(t)))
                                        }(s, "".concat(Date.now() / 1e3));
                                        if (n > 0) return "Starts in ".concat(n, " minutes");
                                        var a = function() {
                                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l,
                                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s;
                                            return Object(ee.a)(new Date(1e3 * parseInt(e)), new Date(1e3 * parseInt(t)))
                                        }(s, "".concat(Date.now() / 1e3));
                                        return a > 0 ? "Starts in ".concat(a, " seconds") : "Active"
                                    }()
                                })
                            })
                        }), Object(ie.jsx)(ce, { children: Object(ie.jsxs)(de, { children: [Object(ie.jsx)(se, { state: o }), Object(ie.jsx)("div", { style: { flex: "1 1 0%", position: "absolute", top: "10%", left: 0, width: "100%", alignItems: "center", padding: "0px 15px" }, children: Object(ie.jsxs)(U.F, { children: [Object(ie.jsx)(U.lb, { fontSize: "12px", children: "".concat(p, "/").concat(c, " BNB") }), Object(ie.jsx)(pe, {}), Object(ie.jsx)(U.lb, { fontSize: "12px", children: "".concat(d, " BNB") })] }) })] }) })]
                    })
                },
                he = n(515),
                fe = $.default.div(p || (p = Object(N.a)(["\n  flex-wrap: wrap;\n  justify-content: center;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  background: ", ";\n  padding: 0px 15px;\n  margin: 21px 0px;\n  border-radius: 3px;\n  > div {\n    padding: 8px 0px;\n  }\n\n  ", " {\n    justify-content: center;\n\n    > div {\n      padding: 0;\n    }\n  }\n"])), (function(e) { return e.theme.custom.tertiary }), (function(e) { return e.theme.mediaQueries.sm })),
                ge = $.default.div(b || (b = Object(N.a)(["\n  flex: 1;\n  position: relative;\n  padding: 0 20px;\n  z-index: 3;\n  ", " {\n    min-width: 420px;\n  }\n  & input {\n    background: transparent;\n    border: none;\n    width: 100%;\n    box-shadow: none;\n    outline: none;\n    color: white;\n    font-size: 16px;\n    &::placeholder {\n      color: white;\n    }\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                xe = Object($.default)(U.lb)(m || (m = Object(N.a)(["\n  padding: 0 4px;\n  width: ", ";\n  height: 47px;\n  text-overflow: ellipsis;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  border: 1px solid ", ";\n  border-radius: 5px;\n  margin: 12px 0;\n  & button:last-child {\n    background: ", ";\n  }\n  ", " {\n    flex: 1;\n    border: 1px solid ", ";\n    border-radius: 5px;\n  }\n"])), (function(e) { return e.isMobile ? "100%" : "auto" }), (function(e) { return e.theme.custom.currencySelectButton }), (function(e) { return e.theme.custom.pancakePrimary }), (function(e) { return e.theme.mediaQueries.md }), (function(e) { return e.theme.custom.currencySelectButton })),
                je = Object($.default)(U.K)(h || (h = Object(N.a)(["\n  background-color: transparent !important;\n  margin: 0px 3px;\n  border: none;\n  outline: none !important;\n  box-shadow: none;\n}\n"]))),
                Oe = function(e) {
                    e.setSearchOption, e.setFilterOption;
                    var t = e.setSearchKey,
                        n = e.setPageIndex,
                        a = !Object(U.zb)().isXl,
                        i = Object(E.useState)(""),
                        r = Object(M.a)(i, 2),
                        o = r[0],
                        c = r[1];
                    return Object(ie.jsx)(fe, { children: Object(ie.jsxs)(xe, { isMobile: a, children: [Object(ie.jsx)(ge, { children: Object(ie.jsx)("input", { placeholder: "Search", onChange: function(e) { c(e.target.value) }, onKeyDown: function(e) { "Enter" === e.key && (n(0), t(o)) } }) }), Object(ie.jsx)(je, { onClick: function() { t(o) }, children: Object(ie.jsx)(he.a, { width: "22px", height: "22px", color: Object($.useTheme)().colors.primary }) })] }) })
                },
                ve = $.default.div(f || (f = Object(N.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-flow: column;\n  color: white;\n  margin: 24px 0 40px;\n  text-align: left;\n  .ml16 {\n    margin-left: 16px;\n  }\n  .ml32 {\n    margin-left: 32px;\n  }\n  p {\n    line-height: 24px;\n  }\n  p.w110 {\n    width: 110px;\n  }\n  p.w80 {\n    width: 80px;\n  }\n  ", " {\n    align-items: flex-start;\n  }\n"])), (function(e) { return e.theme.mediaQueries.xl })),
                ye = $.default.h2(g || (g = Object(N.a)(["\n  font-size: 24px;\n  line-height: 24px;\n  font-weight: 700;\n  ", " {\n    font-size: 36px;\n    line-height: 42px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.xl })),
                we = $.default.div(x || (x = Object(N.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n"]))),
                ke = $.default.div(j || (j = Object(N.a)(["\n  display: flex;\n  img {\n    margin-right: 14px;\n  }\n"]))),
                Ce = $.default.div(O || (O = Object(N.a)(["\n  span {\n    font-size: 12px;\n    color: white;\n  }\n"]))),
                Se = ($.default.div(v || (v = Object(N.a)(["\n  button {\n    color: white;\n    border-radius: 5px;\n    height: 34px;\n    background: ", ";\n    // background: linear-gradient(90deg, #4a65d5 0%, #4a65d5 100%);\n    font-weight: 600;\n    font-size: 13px;\n    width: 102px;\n    outline: none;\n\n    img {\n      width: 16px;\n      height: 16px;\n      margin-right: 6px;\n    }\n\n    ", " {\n      width: 176px;\n    }\n  }\n"])), (function(e) { return e.theme.custom.gradient }), (function(e) { return e.theme.mediaQueries.sm })), $.default.div(y || (y = Object(N.a)(["\n  > ", " {\n    font-size: 12px;\n  }\n  div:last-child {\n    input {\n      border-radius: 8px;\n      border: unset;\n      height: 34px;\n      max-width: 192px;\n      width: 100%;\n      background: ", ";\n    }\n  }\n"])), U.lb, (function(e) { return e.theme.custom.inputWrapper })), $.default.div(w || (w = Object(N.a)(["\n  > ", " {\n    font-size: 12px;\n  }\n  div: last-child {\n    background: ", ";\n    border-radius: 8px;\n    div {\n      border-radius: 8px;\n      border: unset;\n      background: ", ";\n    }\n  }\n"])), U.lb, (function(e) { return e.theme.custom.inputWrapper }), (function(e) { return e.theme.custom.inputWrapper })), $.default.div(k || (k = Object(N.a)(["\n  display: flex;\n  width: 100%;\n  gap: 16px;\n  padding: 8px 0px;\n  justify-content: flex-end;\n  ", " {\n    flex-direction: column;\n    align-items: end;\n  }\n  ", " {\n    flex-direction: unset;\n    align-items: center;\n  }\n"])), (function(e) { return e.theme.mediaQueries.xs }), (function(e) { return e.theme.mediaQueries.md })), $.default.div(C || (C = Object(N.a)(["\n  margin-top: 48px;\n  display: flex;\n  width: 100%;\n  justify-content: center;\n"]))), $.default.div(S || (S = Object(N.a)(["\n  margin-top: 24px;\n  display: grid;\n  grid-gap: 20px;\n  width: 100%;\n  ", " {\n    grid-template-columns: repeat(1, 1fr);\n  }\n  ", " {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  ", " {\n    grid-template-columns: repeat(3, 1fr);\n  }\n  ", " {\n    grid-template-columns: repeat(", ", 1fr);\n  }\n  @media screen and (min-width: 1320px) {\n    grid-template-columns: repeat(", ", 1fr);\n  }\n  @media screen and (min-width: 1720px) {\n    grid-template-columns: repeat(", ", 1fr);\n  }\n"])), (function(e) { return e.theme.mediaQueries.xs }), (function(e) { return e.theme.mediaQueries.md }), (function(e) { return e.theme.mediaQueries.lg }), (function(e) { return e.theme.mediaQueries.xl }), (function(e) { return e.toggled ? "3" : "2" }), (function(e) { return e.toggled ? "4" : "3" }), (function(e) { return e.toggled ? "5" : "4" }))),
                Ie = $.default.div(I || (I = Object(N.a)(["\n  margin: 50px auto;\n  .MuiPagination-root {\n    .MuiPagination-ul {\n      flex-wrap: nowrap;\n      li {\n        > .MuiPaginationItem-ellipsis {\n          color: white;\n        }\n        &:first-child {\n          flex-basis: 100%;\n          display: flex;\n          justify-content: flex-start;\n          align-items: center;\n          > button::after {\n            content: 'Previous';\n            color: white;\n          }\n          > button {\n            border: none;\n            opacity: 1;\n          }\n          > .MuiPaginationItem-page.Mui-disabled {\n            opacity: 1;\n          }\n          > button.Mui-disabled::after {\n            color: #aaaaaa;\n          }\n        }\n        &:last-child {\n          flex-basis: 100%;\n          display: flex;\n          justify-content: flex-end;\n          align-items: center;\n          border: none;\n          > button::before {\n            content: 'Next';\n            color: white;\n          }\n          > button {\n            border: none;\n            opacity: 1;\n          }\n          > .MuiPaginationItem-page.Mui-disabled {\n            opacity: 1;\n          }\n          > button.Mui-disabled::before {\n            color: #aaaaaa;\n          }\n        }\n        & .MuiPaginationItem-icon {\n          display: none;\n        }\n        & button {\n          color: white;\n          border: 1px solid rgba(255, 255, 255, 0.15);\n        }\n        & button.Mui-selected {\n          border: none;\n          background: ", ";\n          // background: linear-gradient(90deg, #4a65d5 0%, #4a65d5 100%);\n        }\n      }\n    }\n  }\n"])), (function(e) { return e.theme.custom.gradient })),
                Le = $.default.div(L || (L = Object(N.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n"])));
            t.default = function() {
                var e = Object(A.a)().chainId,
                    t = Object(F.i)(),
                    n = parseInt(t.chainId),
                    a = Object(E.useState)(n),
                    i = Object(M.a)(a, 2),
                    r = i[0],
                    o = i[1],
                    c = Object(E.useMemo)((function() { return Object(V.J)(Object(H.e)(r), r) }), [r]),
                    d = Object(K.e)().menuToggled,
                    s = Object(E.useState)([]),
                    l = Object(M.a)(s, 2),
                    u = l[0],
                    p = l[1],
                    b = Object(E.useState)([]),
                    m = Object(M.a)(b, 2),
                    h = m[0],
                    f = m[1],
                    g = Object(E.useState)(!0),
                    x = Object(M.a)(g, 2),
                    j = x[0],
                    O = x[1],
                    v = Object(E.useState)(J.b.ALL),
                    y = Object(M.a)(v, 2),
                    w = y[0],
                    k = y[1],
                    C = Object(E.useState)("all"),
                    S = Object(M.a)(C, 2),
                    I = S[0],
                    L = S[1],
                    N = Object(E.useState)(""),
                    B = Object(M.a)(N, 2),
                    $ = B[0],
                    D = B[1],
                    U = Object(E.useState)(0),
                    X = Object(M.a)(U, 2),
                    Z = X[0],
                    q = X[1],
                    Y = Object(E.useState)(1),
                    ee = Object(M.a)(Y, 2),
                    te = ee[0],
                    ne = ee[1];
                Object(E.useEffect)((function() { localStorage.setItem(Q.a.LOCAL_ROUTER_NAME, "launchpad/premium/listing") }), []), Object(E.useEffect)((function() { o(void 0 === e ? n : e) }), [e, n]), Object(E.useEffect)((function() {
                    var e = function() {
                        var e = Object(z.a)(P.a.mark((function e() {
                            var t;
                            return P.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        t = { chain_id: r, key: $, page_index: Z, num_per_page: J.a }, O(!0), p([]), T.a.post("".concat("https://thesphynx.co/api2", "/getAllPremiumInfo"), { data: t }).then(function() {
                                            var e = Object(z.a)(P.a.mark((function e(t) {
                                                var n, a;
                                                return P.a.wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            if (!t.data) { e.next = 19; break }
                                                            return n = 1, t.data.length > 0 && (n = Math.ceil(parseInt(t.data[0].count) / J.a)), ne(n), e.prev = 4, e.next = 7, Promise.all(t.data.map(function() {
                                                                var e = Object(z.a)(P.a.mark((function e(t) {
                                                                    var n, a, i, r;
                                                                    return P.a.wrap((function(e) {
                                                                        for (;;) switch (e.prev = e.next) {
                                                                            case 0:
                                                                                return n = { idoId: t.ido_id, ownerAddress: t.owner_address, tokenName: t.token_name, tokenSymbole: t.token_symbol, tokenLogo: t.logo_link, hardCap: t.hard_cap, minContribution: t.min_amount, maxContribution: t.tier2_amount, startTime: t.start_time, endTime: t.tier2_time, raise: 0, totalCap: 0, activeSale: 0, tokenState: "active", websiteLink: t.site_link, telegramLink: t.telegram_link }, e.next = 3, c.totalContributionBNB(t.ido_id);
                                                                            case 3:
                                                                                return a = e.sent.toString(), i = parseFloat(R.utils.formatEther(a)), n.totalCap = i, n.raise = i, n.activeSale = i / t.hard_cap, e.next = 10, c.isFilled(t.ido_id.toString());
                                                                            case 10:
                                                                                return a = e.sent, (a = !0) && (r = Math.floor((new Date).getTime() / 1e3), parseInt(t.start_time) < r && n.totalCap < n.hardCap - n.minContribution ? n.tokenState = "active" : n.totalCap >= n.hardCap - n.minContribution ? n.tokenState = "ended" : r < parseInt(t.start_time) && (n.tokenState = "pending")), e.abrupt("return", n);
                                                                            case 14:
                                                                            case "end":
                                                                                return e.stop()
                                                                        }
                                                                    }), e)
                                                                })));
                                                                return function(t) { return e.apply(this, arguments) }
                                                            }()));
                                                        case 7:
                                                            a = e.sent, f(a), p(a), O(!1), e.next = 17;
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
                    r && void 0 !== w && e()
                }), [r, w, $, Z, c]), Object(E.useEffect)((function() {
                    var e = [];
                    h.forEach((function(t) { "all" !== I && I !== t.tokenState || e.push(t) })), p(e)
                }), [I, h]);
                return Object(ie.jsxs)(ve, { children: [Object(ie.jsx)(we, { children: Object(ie.jsxs)(ke, { children: [Object(ie.jsx)("img", { src: W.a, alt: "listIcon" }), Object(ie.jsx)(Ce, { children: Object(ie.jsx)(ye, { children: "Premium IDO Directory" }) })] }) }), Object(ie.jsx)(Oe, { setSearchOption: k, setSearchKey: D, setFilterOption: L, setPageIndex: q }), j && Object(ie.jsx)(Le, { children: Object(ie.jsx)(G.a, {}) }), Object(ie.jsx)(Se, { toggled: d, children: u && u.map((function(e) { return Object(ie.jsx)(me, { idoId: e.idoId, chainId: t.chainId, ownerAddress: e.ownerAddress, tokenName: e.tokenName, tokenSymbole: e.tokenSymbole, tokenLogo: e.tokenLogo, activeSale: 100 * e.activeSale, hardCap: e.hardCap, maxContribution: e.maxContribution, startTime: e.startTime, endTime: e.endTime, raise: e.raise, websiteLink: e.websiteLink, telegramLink: e.telegramLink, children: Object(ie.jsx)("img", { src: e.tokenLogo, alt: "token icon" }) }, e.idoId) })) }), Object(ie.jsx)(Ie, { children: Object(ie.jsx)(_.a, { count: te, siblingCount: 0, onChange: function(e, t) { q(t - 1) } }) })] })
            }
        }
    }
]);