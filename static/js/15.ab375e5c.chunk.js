(this["webpackJsonpsphynx-frontend"] = this["webpackJsonpsphynx-frontend"] || []).push([
    [15], {
        1480: function(e, t, n) {
            "use strict";
            var r = n(287),
                a = n(288),
                c = n(408),
                i = n(242),
                o = n(26),
                s = n(19);
            var u = n(409),
                l = n(787);

            function p(e) {
                Object(s.a)(1, arguments);
                var t = Object(o.default)(e),
                    n = t.getFullYear();
                return t.setFullYear(n + 1, 0, 0), t.setHours(23, 59, 59, 999), t
            }
            var d = n(795),
                f = n(779),
                h = n(778),
                j = n(780),
                b = n(792),
                O = n(793),
                x = n(788),
                m = n(789),
                g = n(791),
                y = n(790),
                v = n(1488);
            var w = n(407),
                C = n(794),
                k = n(783),
                M = n(782),
                S = n(411),
                _ = n(781),
                I = n(784),
                E = n(221),
                L = n(785),
                T = n(410),
                H = n(241),
                D = n(786),
                N = function() {
                    function e(e) {
                        var t = (void 0 === e ? {} : e).locale;
                        this.yearFormat = "yyyy", this.yearMonthFormat = "MMMM yyyy", this.dateTime12hFormat = "MMMM do hh:mm aaaa", this.dateTime24hFormat = "MMMM do HH:mm", this.time12hFormat = "hh:mm a", this.time24hFormat = "HH:mm", this.dateFormat = "MMMM do", this.locale = t
                    }
                    return e.prototype.addDays = function(e, t) { return Object(r.default)(e, t) }, e.prototype.isValid = function(e) { return Object(w.default)(this.date(e)) }, e.prototype.getDiff = function(e, t) { return Object(i.a)(e, this.date(t)) }, e.prototype.isAfter = function(e, t) { return Object(b.default)(e, t) }, e.prototype.isBefore = function(e, t) { return Object(O.default)(e, t) }, e.prototype.startOfDay = function(e) { return Object(E.default)(e) }, e.prototype.endOfDay = function(e) { return Object(u.default)(e) }, e.prototype.getHours = function(e) { return Object(f.default)(e) }, e.prototype.setHours = function(e, t) { return Object(k.default)(e, t) }, e.prototype.setMinutes = function(e, t) { return Object(M.default)(e, t) }, e.prototype.getSeconds = function(e) { return Object(h.default)(e) }, e.prototype.setSeconds = function(e, t) { return Object(_.default)(e, t) }, e.prototype.isSameDay = function(e, t) { return Object(m.default)(e, t) }, e.prototype.isSameMonth = function(e, t) { return Object(y.default)(e, t) }, e.prototype.isSameYear = function(e, t) { return Object(g.default)(e, t) }, e.prototype.isSameHour = function(e, t) {
                        return function(e, t) {
                            Object(s.a)(2, arguments);
                            var n = Object(v.a)(e),
                                r = Object(v.a)(t);
                            return n.getTime() === r.getTime()
                        }(e, t)
                    }, e.prototype.startOfMonth = function(e) { return Object(L.default)(e) }, e.prototype.endOfMonth = function(e) { return Object(T.default)(e) }, e.prototype.getYear = function(e) { return Object(j.default)(e) }, e.prototype.setYear = function(e, t) { return Object(I.default)(e, t) }, e.prototype.date = function(e) { return "undefined" === typeof e ? new Date : null === e ? null : new Date(e) }, e.prototype.parse = function(e, t) { return "" === e ? null : Object(C.default)(e, t, new Date, { locale: this.locale }) }, e.prototype.format = function(e, t) { return Object(d.default)(e, t, { locale: this.locale }) }, e.prototype.isEqual = function(e, t) { return null === e && null === t || Object(x.default)(e, t) }, e.prototype.isNull = function(e) { return null === e }, e.prototype.isAfterDay = function(e, t) { return Object(b.default)(e, Object(u.default)(t)) }, e.prototype.isBeforeDay = function(e, t) { return Object(O.default)(e, Object(E.default)(t)) }, e.prototype.isBeforeYear = function(e, t) { return Object(O.default)(e, Object(D.default)(t)) }, e.prototype.isAfterYear = function(e, t) { return Object(b.default)(e, p(t)) }, e.prototype.formatNumber = function(e) { return e }, e.prototype.getMinutes = function(e) { return e.getMinutes() }, e.prototype.getMonth = function(e) { return e.getMonth() }, e.prototype.setMonth = function(e, t) { return Object(S.default)(e, t) }, e.prototype.getMeridiemText = function(e) { return "am" === e ? "AM" : "PM" }, e.prototype.getNextMonth = function(e) { return Object(a.default)(e, 1) }, e.prototype.getPreviousMonth = function(e) { return Object(a.default)(e, -1) }, e.prototype.getMonthArray = function(e) {
                        for (var t = [Object(D.default)(e)]; t.length < 12;) {
                            var n = t[t.length - 1];
                            t.push(this.getNextMonth(n))
                        }
                        return t
                    }, e.prototype.mergeDateAndTime = function(e, t) { return this.setMinutes(this.setHours(e, this.getHours(t)), this.getMinutes(t)) }, e.prototype.getWeekdays = function() {
                        var e = this,
                            t = new Date;
                        return function(e, t) {
                            Object(s.a)(1, arguments);
                            var n = e || {},
                                r = Object(o.default)(n.start),
                                a = Object(o.default)(n.end).getTime();
                            if (!(r.getTime() <= a)) throw new RangeError("Invalid interval");
                            var c = [],
                                i = r;
                            i.setHours(0, 0, 0, 0);
                            var u = t && "step" in t ? Number(t.step) : 1;
                            if (u < 1 || isNaN(u)) throw new RangeError("`options.step` must be a number greater than 1");
                            for (; i.getTime() <= a;) c.push(Object(o.default)(i)), i.setDate(i.getDate() + u), i.setHours(0, 0, 0, 0);
                            return c
                        }({ start: Object(H.default)(t, { locale: this.locale }), end: Object(l.default)(t, { locale: this.locale }) }).map((function(t) { return e.format(t, "EEEEEE") }))
                    }, e.prototype.getWeekArray = function(e) {
                        for (var t = Object(H.default)(Object(L.default)(e), { locale: this.locale }), n = Object(l.default)(Object(T.default)(e), { locale: this.locale }), a = 0, c = t, i = []; Object(O.default)(c, n);) {
                            var o = Math.floor(a / 7);
                            i[o] = i[o] || [], i[o].push(c), c = Object(r.default)(c, 1), a += 1
                        }
                        return i
                    }, e.prototype.getYearRange = function(e, t) { for (var n = Object(D.default)(e), r = p(t), a = [], i = n; Object(O.default)(i, r);) a.push(i), i = Object(c.default)(i, 1); return a }, e.prototype.getCalendarHeaderText = function(e) { return this.format(e, this.yearMonthFormat) }, e.prototype.getYearText = function(e) { return this.format(e, "yyyy") }, e.prototype.getDatePickerHeaderText = function(e) { return this.format(e, "EEE, MMM d") }, e.prototype.getDateTimePickerHeaderText = function(e) { return this.format(e, "MMM d") }, e.prototype.getMonthText = function(e) { return this.format(e, "MMMM") }, e.prototype.getDayText = function(e) { return this.format(e, "d") }, e.prototype.getHourText = function(e, t) { return this.format(e, t ? "hh" : "HH") }, e.prototype.getMinuteText = function(e) { return this.format(e, "mm") }, e.prototype.getSecondText = function(e) { return this.format(e, "ss") }, e
                }();
            t.a = N
        },
        1484: function(e, t, n) {
            "use strict";
            var r = n(10),
                a = n(1),
                c = n(5),
                i = n(2),
                o = n(45),
                s = n(119),
                u = n(0);
            t.a = function(e) {
                var t = e.time,
                    n = Object(s.c)().chainId,
                    l = n && Object(o.e)(n)._fastQueryDate ? Math.floor(Object(o.e)(n)._fastQueryDate / 1e3) : Math.floor((new Date).getTime() / 1e3),
                    p = Object(a.useState)(0),
                    d = Object(r.a)(p, 2),
                    f = d[0],
                    h = d[1],
                    j = Object(a.useRef)(),
                    b = Object(a.useState)("0"),
                    O = Object(r.a)(b, 2),
                    x = O[0],
                    m = O[1],
                    g = Object(a.useState)("0"),
                    y = Object(r.a)(g, 2),
                    v = y[0],
                    w = y[1],
                    C = Object(a.useState)("0"),
                    k = Object(r.a)(C, 2),
                    M = k[0],
                    S = k[1],
                    _ = Object(a.useState)("0"),
                    I = Object(r.a)(_, 2),
                    E = I[0],
                    L = I[1],
                    T = Object(c.useTheme)();
                return Object(a.useEffect)((function() {
                    return t && (j.current = setInterval((function() { h((function(e) { return e > 0 ? e - 1 : 0 })) }), 1e3)),
                        function() { t && clearInterval(j.current) }
                }), [j, h, t]), Object(a.useEffect)((function() {
                    if (t) {
                        var e = parseInt(t) - l;
                        h(e > 0 ? parseInt(t) - l : 0)
                    }
                }), [t, h, l]), Object(a.useEffect)((function() {
                    var e = f % 60,
                        t = Math.floor(f / 60 % 60),
                        n = Math.floor(f / 60 / 60 % 24),
                        r = Math.floor(f / 60 / 60 / 24);
                    L(e < 10 ? "0".concat(e) : e.toString()), S(t < 10 ? "0".concat(t) : t.toString()), w(n < 10 ? "0".concat(n) : n.toString()), m(r < 10 ? "0".concat(r) : r.toString())
                }), [f]), Object(u.jsxs)(i.lb, { color: "white", fontSize: "14px", bold: !0, children: [Object(u.jsx)("span", { style: { margin: "8px", background: T.custom.pancakePrimary, borderRadius: "4px", width: "34px", height: "34px", display: "inline-block", textAlign: "center", lineHeight: "34px" }, children: x }), Object(u.jsx)("span", { style: { margin: "8px", background: T.custom.pancakePrimary, borderRadius: "4px", width: "34px", height: "34px", display: "inline-block", textAlign: "center", lineHeight: "34px" }, children: v }), Object(u.jsx)("span", { style: { margin: "8px", background: T.custom.pancakePrimary, borderRadius: "4px", width: "34px", height: "34px", display: "inline-block", textAlign: "center", lineHeight: "34px" }, children: M }), Object(u.jsx)("span", { style: { margin: "8px", background: T.custom.pancakePrimary, borderRadius: "4px", width: "34px", height: "34px", display: "inline-block", textAlign: "center", lineHeight: "34px" }, children: E })] })
            }
        },
        1486: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return b }));
            var r, a, c, i, o, s, u, l, p = n(1),
                d = ["title", "titleId"];

            function f() { return f = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e }, f.apply(this, arguments) }

            function h(e, t) {
                if (null == e) return {};
                var n, r, a = function(e, t) {
                    if (null == e) return {};
                    var n, r, a = {},
                        c = Object.keys(e);
                    for (r = 0; r < c.length; r++) n = c[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) { var c = Object.getOwnPropertySymbols(e); for (r = 0; r < c.length; r++) n = c[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]) }
                return a
            }

            function j(e, t) {
                var n = e.title,
                    j = e.titleId,
                    b = h(e, d);
                return p.createElement("svg", f({ width: 38, height: 47, viewBox: "0 0 38 47", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: t, "aria-labelledby": j }, b), n ? p.createElement("title", { id: j }, n) : null, r || (r = p.createElement("path", { d: "M36.2642 6.87684L31.1684 1.78105C30.0305 0.643158 28.5463 0.0494736 26.9632 0.0494736L5.93684 0C4.35368 0 2.86947 0.593684 1.73158 1.73158C0.593684 2.86947 0 4.35368 0 5.93684V41.0632C0 44.3284 2.67158 47 5.93684 47H32.0589C35.3242 47 37.9958 44.3284 37.9958 41.0632V11.0326C37.9958 9.49895 37.3526 7.96526 36.2642 6.87684ZM34.0874 9.05368C34.2853 9.25158 34.4832 9.54842 34.6316 9.79579H28.4474C28.3484 9.79579 28.2495 9.69684 28.2495 9.59789V3.46316C28.4968 3.61158 28.7937 3.76 28.9916 4.00737L34.0874 9.05368ZM32.0589 43.8832H5.93684C4.40316 43.8832 3.11684 42.5968 3.11684 41.0632V5.93684C3.11684 5.19474 3.41368 4.45263 3.95789 3.95789C4.50211 3.41368 5.19474 3.11684 5.93684 3.11684L25.1326 3.16632V9.64737C25.1326 11.4779 26.6168 12.9621 28.4474 12.9621H34.9284V41.1126C34.8789 42.5968 33.6421 43.8832 32.0589 43.8832Z", fill: "url(#paint0_linear_37_518)" })), a || (a = p.createElement("path", { d: "M29.4371 26.3696H18.6518C17.8108 26.3696 17.1182 27.0623 17.1182 27.9033C17.1182 28.7444 17.8108 29.437 18.6518 29.437H29.4371C30.2782 29.437 30.9708 28.7444 30.9708 27.9033C30.9708 27.0623 30.2782 26.3696 29.4371 26.3696Z", fill: "url(#paint1_linear_37_518)" })), c || (c = p.createElement("path", { d: "M29.4371 17.5625H18.6518C17.8108 17.5625 17.1182 18.2551 17.1182 19.0962C17.1182 19.9372 17.8108 20.6299 18.6518 20.6299H29.4371C30.2782 20.6299 30.9708 19.9372 30.9708 19.0962C30.9708 18.2551 30.2782 17.5625 29.4371 17.5625Z", fill: "url(#paint2_linear_37_518)" })), i || (i = p.createElement("path", { d: "M29.4371 35.127H18.6518C17.8108 35.127 17.1182 35.8196 17.1182 36.6606C17.1182 37.5017 17.8108 38.1943 18.6518 38.1943H29.4371C30.2782 38.1943 30.9708 37.5017 30.9708 36.6606C30.9708 35.8196 30.2782 35.127 29.4371 35.127Z", fill: "url(#paint3_linear_37_518)" })), o || (o = p.createElement("path", { d: "M12.7656 15.9794L10.3414 18.4037L9.69828 17.7605C9.10459 17.1668 8.11512 17.1668 7.52144 17.7605C6.92775 18.3542 6.92775 19.3436 7.52144 19.9373L9.30249 21.7184C9.59933 22.0152 9.99512 22.1636 10.3909 22.1636C10.7867 22.1636 11.1825 22.0152 11.4793 21.7184L15.0414 18.1563C15.6351 17.5626 15.6351 16.5731 15.0414 15.9794C14.3488 15.3363 13.3593 15.3363 12.7656 15.9794Z", fill: "url(#paint4_linear_37_518)" })), s || (s = p.createElement("path", { d: "M12.7656 24.7365L10.3414 27.1607L9.69828 26.5176C9.10459 25.9239 8.11512 25.9239 7.52144 26.5176C6.92775 27.1113 6.92775 28.1007 7.52144 28.6944L9.30249 30.4755C9.59933 30.7723 9.99512 30.9207 10.3909 30.9207C10.7867 30.9207 11.1825 30.7723 11.4793 30.4755L15.0414 26.9134C15.6351 26.3197 15.6351 25.3302 15.0414 24.7365C14.3488 24.1428 13.3593 24.1428 12.7656 24.7365Z", fill: "url(#paint5_linear_37_518)" })), u || (u = p.createElement("path", { d: "M12.7656 33.4941L10.3414 35.9183L9.69828 35.2751C9.10459 34.6815 8.11512 34.6815 7.52144 35.2751C6.92775 35.8688 6.92775 36.8583 7.52144 37.452L9.30249 39.233C9.59933 39.5299 9.99512 39.6783 10.3909 39.6783C10.7867 39.6783 11.1825 39.5299 11.4793 39.233L15.0414 35.6709C15.6351 35.0773 15.6351 34.0878 15.0414 33.4941C14.3488 32.9004 13.3593 32.9004 12.7656 33.4941Z", fill: "url(#paint6_linear_37_518)" })), l || (l = p.createElement("defs", null, p.createElement("linearGradient", { id: "paint0_linear_37_518", x1: 0, y1: 47, x2: 37.9958, y2: 47, gradientUnits: "userSpaceOnUse" }, p.createElement("stop", { stopColor: "#4a65d5" }), p.createElement("stop", { offset: 1, stopColor: "#4a65d5" })), p.createElement("linearGradient", { id: "paint1_linear_37_518", x1: 17.1182, y1: 29.437, x2: 30.9708, y2: 29.437, gradientUnits: "userSpaceOnUse" }, p.createElement("stop", { stopColor: "#4a65d5" }), p.createElement("stop", { offset: 1, stopColor: "#4a65d5" })), p.createElement("linearGradient", { id: "paint2_linear_37_518", x1: 17.1182, y1: 20.6299, x2: 30.9708, y2: 20.6299, gradientUnits: "userSpaceOnUse" }, p.createElement("stop", { stopColor: "#4a65d5" }), p.createElement("stop", { offset: 1, stopColor: "#4a65d5" })), p.createElement("linearGradient", { id: "paint3_linear_37_518", x1: 17.1182, y1: 38.1943, x2: 30.9708, y2: 38.1943, gradientUnits: "userSpaceOnUse" }, p.createElement("stop", { stopColor: "#4a65d5" }), p.createElement("stop", { offset: 1, stopColor: "#4a65d5" })), p.createElement("linearGradient", { id: "paint4_linear_37_518", x1: 7.07617, y1: 22.1636, x2: 15.4867, y2: 22.1636, gradientUnits: "userSpaceOnUse" }, p.createElement("stop", { stopColor: "#4a65d5" }), p.createElement("stop", { offset: 1, stopColor: "#4a65d5" })), p.createElement("linearGradient", { id: "paint5_linear_37_518", x1: 7.07617, y1: 30.9207, x2: 15.4867, y2: 30.9207, gradientUnits: "userSpaceOnUse" }, p.createElement("stop", { stopColor: "#4a65d5" }), p.createElement("stop", { offset: 1, stopColor: "#4a65d5" })), p.createElement("linearGradient", { id: "paint6_linear_37_518", x1: 7.07617, y1: 39.6783, x2: 15.4867, y2: 39.6783, gradientUnits: "userSpaceOnUse" }, p.createElement("stop", { stopColor: "#4a65d5" }), p.createElement("stop", { offset: 1, stopColor: "#4a65d5" })))))
            }
            var b = p.forwardRef(j);
            n.p
        },
        1488: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return c }));
            var r = n(26),
                a = n(19);

            function c(e) { Object(a.a)(1, arguments); var t = Object(r.default)(e); return t.setMinutes(0, 0, 0), t }
        },
        1491: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return c })), n.d(t, "b", (function() { return i }));
            var r = n(1),
                a = Object(r.createContext)(null),
                c = function(e) {
                    var t = e.utils,
                        n = e.children,
                        c = e.locale,
                        i = e.libInstance,
                        o = Object(r.useMemo)((function() { return new t({ locale: c, instance: i }) }), [t, i, c]);
                    return Object(r.createElement)(a.Provider, { value: o, children: n })
                };

            function i() { var e = Object(r.useContext)(a); return function(e) { if (!e) throw new Error("Can not find utils in context. You either a) forgot to wrap your component tree in MuiPickersUtilsProvider; or b) mixed named and direct file imports.  Recommendation: use named imports from the module index.") }(e), e }
        },
        1810: function(e, t, n) {
            "use strict";
            n.r(t);
            var r, a, c, i, o, s, u, l, p, d, f, h, j, b = n(8),
                O = n(11),
                x = n(10),
                m = n(7),
                g = n(3),
                y = n.n(g),
                v = n(1),
                w = n(83),
                C = n(129),
                k = n(1491),
                M = n(1480),
                S = n(2),
                _ = n(65),
                I = n(18),
                E = n(84),
                L = n.n(E),
                T = n(49),
                H = n(1486),
                D = n(88),
                N = n(5),
                F = n(1484),
                A = n(513),
                U = n(0),
                B = Object(N.keyframes)(r || (r = Object(m.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n"]))),
                P = N.default.div(a || (a = Object(m.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-flow: column;\n  color: white;\n  margin-top: 24px;\n  text-align: left;\n  .ml16 {\n    margin-left: 16px;\n  }\n  .ml32 {\n    margin-left: 32px;\n  }\n  p {\n    line-height: 24px;\n  }\n  p.w110 {\n    width: 110px;\n  }\n  p.w220 {\n    width: 220px;\n  }\n  p.w80 {\n    width: 80px;\n  }\n  p.w140 {\n    width: 140px;\n  }\n  .pendingTx {\n    animation: ", " 2s linear infinite;\n  }\n  div.MuiTextField-root {\n    margin-left: 16px;\n    color: white !important;\n    background: black;\n    border-radius: 8px;\n    padding: 10px 14px;\n    height: 44px !important;\n    border: none;\n    outline: none;\n    .MuiInput-underline:after {\n      border: none !important;\n    }\n    input {\n      color: white;\n      width: 140px;\n      font-size: 14px;\n      margin-top: -3px;\n    }\n    button {\n      color: white;\n      margin-right: -15px;\n      margin-top: -3px;\n    }\n  }\n  ", " {\n    align-items: flex-start;\n  }\n"])), B, (function(e) { return e.theme.mediaQueries.xl })),
                Y = N.default.div(c || (c = Object(m.a)(["\n  display: flex;\n  align-items: center;\n  font-size: 18px;\n  line-height: 24px;\n  font-weight: 700;\n  & > *:first-child {\n    margin-right: 16px;\n  }\n  ", " {\n    font-size: 36px;\n    line-height: 42px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.xl })),
                R = N.default.div(i || (i = Object(m.a)(["\n  margin-top: 32px;\n"]))),
                W = N.default.p(o || (o = Object(m.a)(["\n  font-size: 24px;\n  font-weight: 700;\n"]))),
                z = N.default.div(s || (s = Object(m.a)(["\n  background: ", ";\n  border-radius: 10px;\n  width: 100%;\n  padding: 24px;\n  color: white;\n  padding-left: 12px;\n  padding-right: 12px;\n  ", " {\n    padding-left: 48px;\n    padding-right: 48px;\n  }\n"])), (function(e) { return e.theme.custom.tertiary }), (function(e) { return e.theme.mediaQueries.md })),
                Z = N.default.div(u || (u = Object(m.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  p.description {\n    font-size: 14px;\n  }\n"]))),
                G = N.default.div(l || (l = Object(m.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: start;\n  & > div > div {\n    background: ", ";\n  }\n  & > div.MuiFormControl-root {\n    background: ", ";\n  }\n"])), (function(e) { return e.theme.custom.tertiary }), (function(e) { return e.theme.custom.tertiary })),
                V = N.default.input(p || (p = Object(m.a)(["\n  background: ", ";\n  border-radius: 5px;\n  border: ", ";\n  padding: 10px 14px;\n  padding-inline-start: 12px;\n  height: 38px;\n  color: white;\n  border: none;\n  outline: none;\n  &:focus {\n    outline: 2px solid ", ";\n  }\n"])), (function(e) { return e.theme.custom.tertiary }), (function(e) { var t = e.theme; return "1px solid ".concat(t.custom.inputPanelBorder) }), (function(e) { return e.theme.custom.pancakePrimary })),
                Q = N.default.div(d || (d = Object(m.a)(["\n  max-width: 1000px;\n"]))),
                q = N.default.p(f || (f = Object(m.a)(["\n  color: white;\n  font-size: 14px;\n  line-height: 20px;\n  & > a {\n    font-size: 14px;\n    font-weight: 400;\n    display: inline;\n  }\n"]))),
                J = Object(N.default)(S.l)(h || (h = Object(m.a)(["\n  border-radius: 5px;\n  border: none;\n  font-size: 13px;\n  background: ", ";\n  // background: linear-gradient(90deg, #4a65d5 0%, #4a65d5 100%);\n  outline: none;\n  color: white;\n  width: 176px;\n"])), (function(e) { return e.theme.custom.gradient })),
                K = N.default.div(j || (j = Object(m.a)(["\n  & p {\n    margin-bottom: 16px;\n  }\n  & div {\n    color: white;\n  }\n"])));
            t.default = function() {
                var e = Object(w.i)(),
                    t = Object(I.a)(),
                    n = t.library,
                    r = t.chainId,
                    a = n.getSigner(),
                    c = Object(v.useState)({}),
                    i = Object(x.a)(c, 2),
                    o = i[0],
                    s = i[1],
                    u = Object(v.useState)(""),
                    l = Object(x.a)(u, 2),
                    p = l[0],
                    d = l[1],
                    f = Object(v.useState)(""),
                    h = Object(x.a)(f, 2),
                    j = h[0],
                    m = h[1],
                    g = Object(v.useState)(""),
                    E = Object(x.a)(g, 2),
                    N = E[0],
                    B = E[1],
                    X = Object(v.useState)(""),
                    $ = Object(x.a)(X, 2),
                    ee = $[0],
                    te = $[1],
                    ne = Object(v.useState)(""),
                    re = Object(x.a)(ne, 2),
                    ae = re[0],
                    ce = re[1],
                    ie = Object(v.useState)(""),
                    oe = Object(x.a)(ie, 2),
                    se = oe[0],
                    ue = oe[1],
                    le = Object(v.useState)(""),
                    pe = Object(x.a)(le, 2),
                    de = pe[0],
                    fe = pe[1],
                    he = Object(v.useState)(""),
                    je = Object(x.a)(he, 2),
                    be = je[0],
                    Oe = je[1],
                    xe = Object(v.useState)(""),
                    me = Object(x.a)(xe, 2),
                    ge = me[0],
                    ye = me[1],
                    ve = Object(v.useState)(""),
                    we = Object(x.a)(ve, 2),
                    Ce = we[0],
                    ke = we[1],
                    Me = Object(v.useState)(""),
                    Se = Object(x.a)(Me, 2),
                    _e = Se[0],
                    Ie = Se[1],
                    Ee = Object(v.useState)(""),
                    Le = Object(x.a)(Ee, 2),
                    Te = Le[0],
                    He = Le[1],
                    De = Object(v.useState)(""),
                    Ne = Object(x.a)(De, 2),
                    Fe = Ne[0],
                    Ae = Ne[1],
                    Ue = Object(v.useState)(!1),
                    Be = Object(x.a)(Ue, 2),
                    Pe = Be[0],
                    Ye = Be[1],
                    Re = Object(v.useState)(""),
                    We = Object(x.a)(Re, 2),
                    ze = We[0],
                    Ze = We[1],
                    Ge = Object(v.useState)(""),
                    Ve = Object(x.a)(Ge, 2),
                    Qe = Ve[0],
                    qe = Ve[1],
                    Je = Object(v.useState)(!1),
                    Ke = Object(x.a)(Je, 2),
                    Xe = Ke[0],
                    $e = Ke[1],
                    et = Object(v.useState)(!1),
                    tt = Object(x.a)(et, 2),
                    nt = tt[0],
                    rt = tt[1],
                    at = Object(v.useState)(!1),
                    ct = Object(x.a)(at, 2),
                    it = ct[0],
                    ot = ct[1],
                    st = Object(v.useState)(!1),
                    ut = Object(x.a)(st, 2),
                    lt = ut[0],
                    pt = ut[1],
                    dt = Object(v.useState)(!1),
                    ft = Object(x.a)(dt, 2),
                    ht = ft[0],
                    jt = ft[1],
                    bt = Object(v.useState)(!1),
                    Ot = Object(x.a)(bt, 2),
                    xt = Ot[0],
                    mt = Ot[1],
                    gt = Object(v.useState)(!1),
                    yt = Object(x.a)(gt, 2),
                    vt = yt[0],
                    wt = yt[1],
                    Ct = Object(v.useState)(!1),
                    kt = Object(x.a)(Ct, 2),
                    Mt = kt[0],
                    St = kt[1],
                    _t = Object(v.useState)(!1),
                    It = Object(x.a)(_t, 2),
                    Et = It[0],
                    Lt = It[1],
                    Tt = Object(v.useState)(!1),
                    Ht = Object(x.a)(Tt, 2),
                    Dt = Ht[0],
                    Nt = Ht[1],
                    Ft = Object(D.a)(),
                    At = Ft.toastSuccess,
                    Ut = Ft.toastError,
                    Bt = Math.floor((new Date).getTime() / 1e3),
                    Pt = _.b[r],
                    Yt = Object(v.useMemo)((function() { return Object(T.v)(a, r) }), [a]),
                    Rt = function() {
                        var t = Object(O.a)(y.a.mark((function t() {
                            var n;
                            return y.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return wt(!0), t.prev = 1, t.next = 4, Yt.cancel(parseInt(e.launchId));
                                    case 4:
                                        return n = t.sent, t.next = 7, n.wait();
                                    case 7:
                                        pt(!0), wt(!1), At("Success", "Fair launch is cancled!"), t.next = 16;
                                        break;
                                    case 12:
                                        t.prev = 12, t.t0 = t.catch(1), wt(!1), At("Failed", "Your action is failed!");
                                    case 16:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [1, 12]
                            ])
                        })));
                        return function() { return t.apply(this, arguments) }
                    }(),
                    Wt = function() {
                        var t = Object(O.a)(y.a.mark((function t() {
                            var n;
                            return y.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return Lt(!0), t.prev = 1, t.next = 4, Yt.tokenWithdraw(parseInt(e.launchId));
                                    case 4:
                                        return n = t.sent, t.next = 7, n.wait();
                                    case 7:
                                        jt(!0), Lt(!1), At("Success", "Operation successfully!"), t.next = 16;
                                        break;
                                    case 12:
                                        t.prev = 12, t.t0 = t.catch(1), Lt(!1), At("Failed", "Your action is failed!");
                                    case 16:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [1, 12]
                            ])
                        })));
                        return function() { return t.apply(this, arguments) }
                    }(),
                    zt = function() {
                        var t = Object(O.a)(y.a.mark((function t() {
                            var n;
                            return y.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return Nt(!0), t.prev = 1, t.next = 4, Yt.nativeCurrencyWithdraw(parseInt(e.launchId));
                                    case 4:
                                        return n = t.sent, t.next = 7, n.wait();
                                    case 7:
                                        mt(!0), Nt(!1), At("Success", "Operation successfully!"), t.next = 16;
                                        break;
                                    case 12:
                                        t.prev = 12, t.t0 = t.catch(1), Nt(!1), At("Failed", "Your action is failed!");
                                    case 16:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [1, 12]
                            ])
                        })));
                        return function() { return t.apply(this, arguments) }
                    }(),
                    Zt = function() {
                        var t = Object(O.a)(y.a.mark((function t() {
                            var n;
                            return y.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return ot(!0), t.prev = 1, t.next = 4, Yt.unlock(parseInt(e.launchId));
                                    case 4:
                                        return n = t.sent, t.next = 7, n.wait();
                                    case 7:
                                        rt(!0), ot(!1), At("Success", "Operation successfully!"), t.next = 16;
                                        break;
                                    case 12:
                                        t.prev = 12, t.t0 = t.catch(1), ot(!1), At("Failed", "Your action is failed!");
                                    case 16:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [1, 12]
                            ])
                        })));
                        return function() { return t.apply(this, arguments) }
                    }(),
                    Gt = function() {
                        var t = Object(O.a)(y.a.mark((function t() {
                            var n, a, c;
                            return y.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return St(!0), t.prev = 1, n = C.utils.parseEther("0.00001"), t.next = 5, Yt.launch(parseInt(e.launchId), { value: n });
                                    case 5:
                                        return a = t.sent, t.next = 8, a.wait();
                                    case 8:
                                        c = t.sent, Ye(!0), St(!1), 1 === c.status ? (At("Success", "Operation successfully!"), L.a.post("".concat("https://thesphynx.co/api2", "/inserttoken"), { name: p, address: N, symbol: j, chainId: r }).then((function(e) {}))) : At("Failed", "Your action is failed!"), t.next = 18;
                                        break;
                                    case 14:
                                        t.prev = 14, t.t0 = t.catch(1), St(!1), At("Failed", "Your action is failed!");
                                    case 18:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [1, 14]
                            ])
                        })));
                        return function() { return t.apply(this, arguments) }
                    }();
                return Object(v.useEffect)((function() {
                    var t = function() {
                        var t = Object(O.a)(y.a.mark((function t() {
                            var n;
                            return y.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        n = "", parseInt(Ce) > Bt ? (n = "Upcoming", $e(!1)) : Pe ? n = "Success" : Bt > parseInt(Ce) && Bt < parseInt(Ce) + 600 ? (n = "Active", $e(!0)) : (n = "Failed", $e(!1)), Ze(n), Yt.isCanceled(parseInt(e.launchId)).then((function(e) { pt(e) })), Yt.withdrawToken(parseInt(e.launchId)).then((function(e) { jt(e) })), Yt.withdrawNativeCurrency(parseInt(e.launchId)).then((function(e) { mt(e) })), Yt.isLaunched(parseInt(e.launchId)).then((function(e) { Ye(e) })), Yt.isUnlocked(parseInt(e.launchId)).then((function(e) { rt(e) }));
                                    case 8:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function() { return t.apply(this, arguments) }
                    }();
                    t()
                }), [Ce, Yt, Pe, e.launchId, r]), Object(v.useEffect)((function() {
                    r && parseInt(e.chainId) !== r && alert("Please make sure you are on the ".concat(A.a[parseInt(e.chainId)], "!"));
                    var t = function() {
                        var t = Object(O.a)(y.a.mark((function t() {
                            var n;
                            return y.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        n = e.launchId, L.a.get("".concat("https://thesphynx.co/api2", "/getFairLaunchInfo/").concat(n, "/").concat(r)).then((function(e) {
                                            var t = e.data;
                                            s(t), t && (te(t.logo_link), ce(t.website_link), ue(t.github_link), fe(t.twitter_link), ye(t.telegram_link), Oe(t.reddit_link), He(t.project_dec), Ae(t.update_dec), d(t.token_name), m(t.token_symbol), B(t.token_address), ke(t.launch_time), Ie(t.lock_time));
                                            var r = function() {
                                                var e = Object(O.a)(y.a.mark((function e() {
                                                    var t, r;
                                                    return y.a.wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                return e.next = 2, Yt.isLaunched(n.toString());
                                                            case 2:
                                                                return t = e.sent, e.next = 5, Yt.router(n.toString());
                                                            case 5:
                                                                r = e.sent, Ye(t), qe(r);
                                                            case 8:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })));
                                                return function() { return e.apply(this, arguments) }
                                            }();
                                            r()
                                        }));
                                    case 2:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function() { return t.apply(this, arguments) }
                    }();
                    t()
                }), [e, r, Yt]), Object(U.jsx)(P, {
                    children: Object(U.jsxs)(k.a, {
                        utils: M.a,
                        children: [Object(U.jsxs)(Y, { children: [Object(U.jsx)(H.a, {}), " Manage FairLaunch"] }), Object(U.jsx)(R, {}), Object(U.jsxs)(z, { children: [Object(U.jsx)(G, { children: Object(U.jsx)(W, { children: "Manage settings for your existing fair launch!" }) }), Object(U.jsx)(R, {}), Object(U.jsx)(q, { children: "Congratulations your Fair Launch is scheduled!" }), Object(U.jsx)(R, {}), Object(U.jsx)("p", { style: { color: "white" }, children: "If your token contains special transfers such as burn, rebase or something else you must ensure the SphynxSwap Router Address is excluded from these features! Or you must set fees, burns or whatever else to be 0 or disabled for the duration of the presale and until the finalize button is clicked!" }), Object(U.jsx)(R, {}), Object(U.jsxs)(q, { children: ["Router Address: ", Qe, Object(U.jsx)(R, {}), "- The launch button will become available once your listing countdown ends.", Object(U.jsx)("br", {}), "- You must list your token within 10 minutes of this time or your launch will fail!", Object(U.jsx)("br", {}), "- Clicking the launch button will list your token on PancakeSwap immediately. Liquidity will be locked by SphynxLock.", Object(U.jsx)(R, {}), "Here is a summary of your fair launch (more details on the fair launch view page):"] }), Object(U.jsx)(R, {}), Object(U.jsxs)(q, { children: ["Name: ", p] }), Object(U.jsxs)(q, { children: ["Symbol: ", j] }), Object(U.jsxs)(q, { children: ["Token Address: ", N] }), Object(U.jsxs)(q, { children: ["Status: ", ze, " Launch"] }), Object(U.jsxs)(q, { children: ["Manage Link:", " ", Object(U.jsx)(S.N, { href: "/launchpad/fair/manage/".concat(e.launchId, "/").concat(r), children: "https://thesphynx.co/launchpad/fair/manage/".concat(e.launchId, "/").concat(r) })] }), Object(U.jsxs)(q, { children: ["Launch Link:", " ", Object(U.jsx)(S.N, { href: "/launchpad/fair/live/".concat(e.launchId, "/").concat(r), children: "https://thesphynx.co/launchpad/fair/live/".concat(e.launchId, "/").concat(r) })] }), Object(U.jsx)(R, {}), lt ? Object(U.jsxs)(U.Fragment, { children: [Object(U.jsxs)(S.l, { disabled: ht || Et, mr: "20px", mt: "20px", onClick: Wt, children: ["WITHDRAW TOKEN", Et && Object(U.jsx)(S.g, { className: "pendingTx" })] }), Object(U.jsxs)(S.l, { disabled: xt || Dt, mt: "20px", onClick: zt, children: ["WITHDRAW ", Pt, Dt && Object(U.jsx)(S.g, { className: "pendingTx" })] })] }) : Pe ? Object(U.jsxs)(S.l, { disabled: nt || it || parseInt(_e) >= Bt, mt: "20px", onClick: Zt, children: ["WITHDRAW Liquidity", it && Object(U.jsx)(S.g, { className: "pendingTx" })] }) : Object(U.jsxs)(U.Fragment, { children: [Object(U.jsxs)(K, { children: [Object(U.jsx)(q, { children: Bt >= parseInt(Ce) ? "Launch ends in:" : "Launch starts in:" }), Object(U.jsx)(F.a, { time: Bt <= parseInt(Ce) ? Ce : "".concat(parseInt(Ce) + 600) })] }), Object(U.jsxs)(S.l, { disabled: !Xe || Mt, onClick: Gt, mr: "20px", mt: "20px", children: ["LAUNCH TOKEN", Mt && Object(U.jsx)(S.g, { className: "pendingTx" })] }), Object(U.jsxs)(S.l, { mt: "20px", disabled: vt, onClick: Rt, children: ["CANCEL LAUNCH", vt && Object(U.jsx)(S.g, { className: "pendingTx" })] })] }), Object(U.jsx)(R, {}), Object(U.jsx)(q, { children: "If you have trouble with launching please ensure the required addresses are whitelisted or your special transfer functions are disabled!" }), Object(U.jsx)(q, { children: "If you still cannot launch then please cancel your sale and test your contract throughly on our supported test nets!" })] }), Object(U.jsx)(R, {}), Object(U.jsx)(Z, {
                            children: Object(U.jsx)("div", {
                                style: { marginTop: "24px", width: "100%", marginBottom: "24px" },
                                children: Object(U.jsxs)(Q, {
                                    children: [Object(U.jsx)("p", { className: "description", children: "Logo Link: (URL must end with a supported image extension png, jpg, jpeg or gif)" }), Object(U.jsx)(V, { onChange: function(e) { return te(e.target.value) }, value: ee, style: { width: "100%" } }), Object(U.jsx)(R, {}), Object(U.jsx)("p", { className: "description", children: "Website Link" }), Object(U.jsx)(V, { onChange: function(e) { return ce(e.target.value) }, value: ae, style: { width: "100%" } }), Object(U.jsx)(R, {}), Object(U.jsx)("p", { className: "description", children: "GitHub Link" }), Object(U.jsx)(V, { onChange: function(e) { return ue(e.target.value) }, value: se, style: { width: "100%" } }), Object(U.jsx)(R, {}), Object(U.jsx)("p", { className: "description", children: "Twitter Link" }), Object(U.jsx)(V, { onChange: function(e) { return fe(e.target.value) }, value: de, style: { width: "100%" } }), Object(U.jsx)(R, {}), Object(U.jsx)("p", { className: "description", children: "Reddit Link" }), Object(U.jsx)(V, { onChange: function(e) { return Oe(e.target.value) }, value: be, style: { width: "100%" } }), Object(U.jsx)(R, {}), Object(U.jsx)("p", { className: "description", children: "Telegram Link" }), Object(U.jsx)(V, { onChange: function(e) { return ye(e.target.value) }, value: ge, style: { width: "100%" } }), Object(U.jsx)(R, {}), Object(U.jsx)("p", { className: "description", children: "Project Description" }), Object(U.jsx)(V, { onChange: function(e) { return He(e.target.value) }, value: Te, style: { width: "100%" } }), Object(U.jsx)(R, {}), Object(U.jsx)("p", { className: "description", children: "Any update you want to provide to participants" }), Object(U.jsx)(V, { onChange: function(e) { return Ae(e.target.value) }, value: Fe, style: { width: "100%" } }), Object(U.jsx)(R, {}), Object(U.jsx)(J, {
                                        onClick: function() {
                                            var e = Object(b.a)(Object(b.a)({}, o), {}, { logo_link: ee, website_link: ae, github_link: se, twitter_link: de, reddit_link: be, telegram_link: ge, project_dec: Te, update_dec: Fe });
                                            L.a.post("".concat("https://thesphynx.co/api2", "/updateFairLaunchInfo"), e).then((function(e) { e.data ? At("Pushed!", "Your fairlaunch info is saved successfully.") : Ut("Failed!", "Your action is failed.") }))
                                        },
                                        scale: "sm",
                                        children: "Update"
                                    })]
                                })
                            })
                        })]
                    })
                })
            }
        }
    }
]);