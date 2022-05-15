(this["webpackJsonpsphynx-frontend"] = this["webpackJsonpsphynx-frontend"] || []).push([
    [30], {
        1480: function(e, t, n) {
            "use strict";
            var r = n(287),
                c = n(288),
                a = n(408),
                i = n(242),
                o = n(26),
                s = n(19);
            var u = n(409),
                l = n(787);

            function d(e) {
                Object(s.a)(1, arguments);
                var t = Object(o.default)(e),
                    n = t.getFullYear();
                return t.setFullYear(n + 1, 0, 0), t.setHours(23, 59, 59, 999), t
            }
            var p = n(795),
                j = n(779),
                b = n(778),
                f = n(780),
                h = n(792),
                O = n(793),
                x = n(788),
                m = n(789),
                g = n(791),
                y = n(790),
                w = n(1488);
            var v = n(407),
                k = n(794),
                M = n(783),
                N = n(782),
                T = n(411),
                C = n(781),
                S = n(784),
                D = n(221),
                E = n(785),
                A = n(410),
                H = n(241),
                _ = n(786),
                F = function() {
                    function e(e) {
                        var t = (void 0 === e ? {} : e).locale;
                        this.yearFormat = "yyyy", this.yearMonthFormat = "MMMM yyyy", this.dateTime12hFormat = "MMMM do hh:mm aaaa", this.dateTime24hFormat = "MMMM do HH:mm", this.time12hFormat = "hh:mm a", this.time24hFormat = "HH:mm", this.dateFormat = "MMMM do", this.locale = t
                    }
                    return e.prototype.addDays = function(e, t) { return Object(r.default)(e, t) }, e.prototype.isValid = function(e) { return Object(v.default)(this.date(e)) }, e.prototype.getDiff = function(e, t) { return Object(i.a)(e, this.date(t)) }, e.prototype.isAfter = function(e, t) { return Object(h.default)(e, t) }, e.prototype.isBefore = function(e, t) { return Object(O.default)(e, t) }, e.prototype.startOfDay = function(e) { return Object(D.default)(e) }, e.prototype.endOfDay = function(e) { return Object(u.default)(e) }, e.prototype.getHours = function(e) { return Object(j.default)(e) }, e.prototype.setHours = function(e, t) { return Object(M.default)(e, t) }, e.prototype.setMinutes = function(e, t) { return Object(N.default)(e, t) }, e.prototype.getSeconds = function(e) { return Object(b.default)(e) }, e.prototype.setSeconds = function(e, t) { return Object(C.default)(e, t) }, e.prototype.isSameDay = function(e, t) { return Object(m.default)(e, t) }, e.prototype.isSameMonth = function(e, t) { return Object(y.default)(e, t) }, e.prototype.isSameYear = function(e, t) { return Object(g.default)(e, t) }, e.prototype.isSameHour = function(e, t) {
                        return function(e, t) {
                            Object(s.a)(2, arguments);
                            var n = Object(w.a)(e),
                                r = Object(w.a)(t);
                            return n.getTime() === r.getTime()
                        }(e, t)
                    }, e.prototype.startOfMonth = function(e) { return Object(E.default)(e) }, e.prototype.endOfMonth = function(e) { return Object(A.default)(e) }, e.prototype.getYear = function(e) { return Object(f.default)(e) }, e.prototype.setYear = function(e, t) { return Object(S.default)(e, t) }, e.prototype.date = function(e) { return "undefined" === typeof e ? new Date : null === e ? null : new Date(e) }, e.prototype.parse = function(e, t) { return "" === e ? null : Object(k.default)(e, t, new Date, { locale: this.locale }) }, e.prototype.format = function(e, t) { return Object(p.default)(e, t, { locale: this.locale }) }, e.prototype.isEqual = function(e, t) { return null === e && null === t || Object(x.default)(e, t) }, e.prototype.isNull = function(e) { return null === e }, e.prototype.isAfterDay = function(e, t) { return Object(h.default)(e, Object(u.default)(t)) }, e.prototype.isBeforeDay = function(e, t) { return Object(O.default)(e, Object(D.default)(t)) }, e.prototype.isBeforeYear = function(e, t) { return Object(O.default)(e, Object(_.default)(t)) }, e.prototype.isAfterYear = function(e, t) { return Object(h.default)(e, d(t)) }, e.prototype.formatNumber = function(e) { return e }, e.prototype.getMinutes = function(e) { return e.getMinutes() }, e.prototype.getMonth = function(e) { return e.getMonth() }, e.prototype.setMonth = function(e, t) { return Object(T.default)(e, t) }, e.prototype.getMeridiemText = function(e) { return "am" === e ? "AM" : "PM" }, e.prototype.getNextMonth = function(e) { return Object(c.default)(e, 1) }, e.prototype.getPreviousMonth = function(e) { return Object(c.default)(e, -1) }, e.prototype.getMonthArray = function(e) {
                        for (var t = [Object(_.default)(e)]; t.length < 12;) {
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
                                c = Object(o.default)(n.end).getTime();
                            if (!(r.getTime() <= c)) throw new RangeError("Invalid interval");
                            var a = [],
                                i = r;
                            i.setHours(0, 0, 0, 0);
                            var u = t && "step" in t ? Number(t.step) : 1;
                            if (u < 1 || isNaN(u)) throw new RangeError("`options.step` must be a number greater than 1");
                            for (; i.getTime() <= c;) a.push(Object(o.default)(i)), i.setDate(i.getDate() + u), i.setHours(0, 0, 0, 0);
                            return a
                        }({ start: Object(H.default)(t, { locale: this.locale }), end: Object(l.default)(t, { locale: this.locale }) }).map((function(t) { return e.format(t, "EEEEEE") }))
                    }, e.prototype.getWeekArray = function(e) {
                        for (var t = Object(H.default)(Object(E.default)(e), { locale: this.locale }), n = Object(l.default)(Object(A.default)(e), { locale: this.locale }), c = 0, a = t, i = []; Object(O.default)(a, n);) {
                            var o = Math.floor(c / 7);
                            i[o] = i[o] || [], i[o].push(a), a = Object(r.default)(a, 1), c += 1
                        }
                        return i
                    }, e.prototype.getYearRange = function(e, t) { for (var n = Object(_.default)(e), r = d(t), c = [], i = n; Object(O.default)(i, r);) c.push(i), i = Object(a.default)(i, 1); return c }, e.prototype.getCalendarHeaderText = function(e) { return this.format(e, this.yearMonthFormat) }, e.prototype.getYearText = function(e) { return this.format(e, "yyyy") }, e.prototype.getDatePickerHeaderText = function(e) { return this.format(e, "EEE, MMM d") }, e.prototype.getDateTimePickerHeaderText = function(e) { return this.format(e, "MMM d") }, e.prototype.getMonthText = function(e) { return this.format(e, "MMMM") }, e.prototype.getDayText = function(e) { return this.format(e, "d") }, e.prototype.getHourText = function(e, t) { return this.format(e, t ? "hh" : "HH") }, e.prototype.getMinuteText = function(e) { return this.format(e, "mm") }, e.prototype.getSecondText = function(e) { return this.format(e, "ss") }, e
                }();
            t.a = F
        },
        1488: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return a }));
            var r = n(26),
                c = n(19);

            function a(e) { Object(c.a)(1, arguments); var t = Object(r.default)(e); return t.setMinutes(0, 0, 0), t }
        },
        1491: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return a })), n.d(t, "b", (function() { return i }));
            var r = n(1),
                c = Object(r.createContext)(null),
                a = function(e) {
                    var t = e.utils,
                        n = e.children,
                        a = e.locale,
                        i = e.libInstance,
                        o = Object(r.useMemo)((function() { return new t({ locale: a, instance: i }) }), [t, i, a]);
                    return Object(r.createElement)(c.Provider, { value: o, children: n })
                };

            function i() { var e = Object(r.useContext)(c); return function(e) { if (!e) throw new Error("Can not find utils in context. You either a) forgot to wrap your component tree in MuiPickersUtilsProvider; or b) mixed named and direct file imports.  Recommendation: use named imports from the module index.") }(e), e }
        },
        1811: function(e, t, n) {
            "use strict";
            n.r(t);
            var r, c, a, i, o, s, u, l, d, p, j, b, f, h, O, x = n(11),
                m = n(10),
                g = n(7),
                y = n(3),
                w = n.n(y),
                v = n(1),
                k = n(1491),
                M = n(1480),
                N = n(83),
                T = n(84),
                C = n.n(T),
                S = n(116),
                D = n(129),
                E = n(18),
                A = n(25),
                H = n(52),
                _ = n(88),
                F = n(5),
                P = n(77),
                Y = n(324),
                I = n(2),
                L = n(156),
                B = n(49),
                R = n(45),
                z = n(0),
                W = Object(F.keyframes)(r || (r = Object(g.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n"]))),
                U = F.default.div(c || (c = Object(g.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-flow: column;\n  color: white;\n  margin-top: 24px;\n  text-align: left;\n  font-weight: bold;\n  .ml16 {\n    margin-left: 16px;\n  }\n  .ml32 {\n    margin-left: 32px;\n  }\n  p {\n    line-height: 24px;\n  }\n  p.w110 {\n    width: 110px;\n  }\n  p.w220 {\n    width: 220px;\n  }\n  p.w80 {\n    width: 80px;\n  }\n  p.w140 {\n    width: 140px;\n  }\n  .pendingTx {\n    animation: ", " 2s linear infinite;\n  }\n  div.MuiTextField-root {\n    margin-left: 16px;\n    color: white !important;\n    background: black;\n    border-radius: 8px;\n    padding: 10px 14px;\n    height: 44px !important;\n    border: none;\n    outline: none;\n    .MuiInput-underline:after {\n      border: none !important;\n    }\n    input {\n      color: white;\n      width: 140px;\n      font-size: 14px;\n      margin-top: -3px;\n    }\n    button {\n      color: white;\n      margin-right: -15px;\n      margin-top: -3px;\n    }\n  }\n  ", " {\n    align-items: flex-start;\n  }\n"])), W, (function(e) { return e.theme.mediaQueries.xl })),
                G = F.default.div(a || (a = Object(g.a)(["\n  margin-top: 32px;\n"]))),
                J = F.default.p(i || (i = Object(g.a)(["\n  font-size: 24px;\n  font-weight: 700;\n"]))),
                Q = F.default.div(o || (o = Object(g.a)(["\n  background: ", ";\n  border-radius: 10px;\n  width: 100%;\n  padding: 24px;\n  color: white;\n  padding-left: 12px;\n  padding-right: 12px;\n  ", " {\n    padding-left: 48px;\n    padding-right: 48px;\n  }\n"])), (function(e) { return e.theme.custom.tertiary }), (function(e) { return e.theme.mediaQueries.md })),
                q = F.default.div(s || (s = Object(g.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  p.description {\n    font-size: 14px;\n  }\n"]))),
                V = F.default.div(u || (u = Object(g.a)(["\n  display: flex;\n  flex-wrap: wrap;\n"]))),
                K = F.default.div(l || (l = Object(g.a)(["\n  display: flex;\n  align-items: center;\n  & > div > div {\n    background: ", ";\n  }\n  & > div.MuiFormControl-root {\n    background: ", ";\n  }\n"])), (function(e) { return e.theme.custom.tertiary }), (function(e) { return e.theme.custom.tertiary })),
                X = F.default.div(d || (d = Object(g.a)(["\n  // background: linear-gradient(90deg, #4a65d5 0%, #4a65d5 100%);\n  background: ", ";\n  width: 28px;\n  height: 28px;\n  border-radius: 14px;\n  display: flex;\n  color: white;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n"])), (function(e) { return e.theme.custom.gradient })),
                Z = F.default.input(p || (p = Object(g.a)(["\n  background: ", ";\n  border-radius: 5px;\n  border: ", ";\n  padding: 10px 14px;\n  padding-inline-start: 12px;\n  height: 38px;\n  color: white;\n  border: none;\n  outline: none;\n  &:focus {\n    outline: 2px solid ", ";\n  }\n"])), (function(e) { return e.theme.custom.tertiary }), (function(e) { var t = e.theme; return "1px solid ".concat(t.custom.inputPanelBorder) }), (function(e) { return e.theme.custom.pancakePrimary })),
                $ = F.default.textarea(j || (j = Object(g.a)(["\n  background: ", ";\n  border-radius: 5px;\n  border: ", ";\n  padding: 10px 14px;\n  padding-inline-start: 12px;\n  height: 200px;\n  color: white;\n  border: none;\n  outline: none;\n  &:focus {\n    outline: 2px solid ", ";\n  }\n"])), (function(e) { return e.theme.custom.tertiary }), (function(e) { var t = e.theme; return "1px solid ".concat(t.custom.inputPanelBorder) }), (function(e) { return e.theme.custom.pancakePrimary })),
                ee = F.default.button(b || (b = Object(g.a)(["\n  height: 35px;\n  background: ", ";\n  width: 125px;\n  color: white;\n  padding: 8px 16px;\n  border-radius: 5px;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  &:hover {\n    background: #3a3a5a;\n  }\n  &:disabled {\n    background: #777;\n    border: 1px solid #444;\n  }\n"])), (function(e) { return e.theme.custom.lineBtn })),
                te = F.default.button(f || (f = Object(g.a)(["\n  height: 35px;\n  background: ", ";\n  // background: linear-gradient(90deg, #4a65d5 0%, #4a65d5 100%);\n  width: 125px;\n  border: 1px solid ", ";\n  color: white;\n  padding: 8px 16px;\n  border-radius: 5px;\n  cursor: pointer;\n  outline: none;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  &:hover {\n    background: ", ";\n    border: 1px solid ", ";\n  }\n  &:disabled {\n    background: ", ";\n    border: 1px solid #444;\n    cursor: not-allowed;\n  }\n"])), (function(e) { return e.theme.custom.gradient }), (function(e) { return e.theme.custom.secondary }), (function(e) { return e.theme.custom.gradient }), (function(e) { return e.theme.custom.secondary }), (function(e) { return e.theme.custom.gradient })),
                ne = F.default.div(h || (h = Object(g.a)(["\n  max-width: 1000px;\n"]))),
                re = F.default.p(O || (O = Object(g.a)(["\n  color: white;\n  font-size: 16px;\n  line-height: 20px;\n  font-weight: 600;\n"]))),
                ce = function(e) { var t = e.number; return Object(z.jsx)(X, { children: t }) },
                ae = function(e) {
                    var t = e.number,
                        n = e.stepName,
                        r = e.children,
                        c = e.step,
                        a = e.onClick;
                    return Object(z.jsxs)(ne, { children: [Object(z.jsxs)(K, { style: { cursor: "pointer" }, onClick: a, children: [Object(z.jsx)(ce, { number: t }), Object(z.jsx)(J, { style: { color: "white", marginLeft: "8px" }, children: n })] }), parseInt(t) === c ? Object(z.jsxs)(z.Fragment, { children: [Object(z.jsx)(G, {}), r] }) : ""] })
                };
            t.default = function() {
                var e = Object(A.b)().t,
                    t = Object(E.a)(),
                    n = t.library,
                    r = t.account,
                    c = t.chainId,
                    a = Object(N.i)(),
                    i = parseInt(a.chainId),
                    o = Object(R.e)(i),
                    s = Object(v.useState)(i),
                    u = Object(m.a)(s, 2),
                    l = u[0],
                    d = u[1],
                    p = n.getSigner(),
                    j = Object(v.useState)(""),
                    b = Object(m.a)(j, 2),
                    f = b[0],
                    h = b[1],
                    O = Object(v.useState)(""),
                    g = Object(m.a)(O, 2),
                    y = g[0],
                    T = g[1],
                    F = Object(v.useState)(""),
                    W = Object(m.a)(F, 2),
                    X = W[0],
                    ne = W[1],
                    ce = Object(v.useState)(""),
                    ie = Object(m.a)(ce, 2),
                    oe = ie[0],
                    se = ie[1],
                    ue = Object(v.useState)(""),
                    le = Object(m.a)(ue, 2),
                    de = le[0],
                    pe = le[1],
                    je = Object(v.useState)(""),
                    be = Object(m.a)(je, 2),
                    fe = be[0],
                    he = be[1],
                    Oe = Object(v.useState)(""),
                    xe = Object(m.a)(Oe, 2),
                    me = xe[0],
                    ge = xe[1],
                    ye = Object(v.useState)(""),
                    we = Object(m.a)(ye, 2),
                    ve = we[0],
                    ke = we[1],
                    Me = Object(v.useState)(""),
                    Ne = Object(m.a)(Me, 2),
                    Te = Ne[0],
                    Ce = Ne[1],
                    Se = Object(v.useState)(""),
                    De = Object(m.a)(Se, 2),
                    Ee = De[0],
                    Ae = De[1],
                    He = Object(v.useState)(""),
                    _e = Object(m.a)(He, 2),
                    Fe = _e[0],
                    Pe = _e[1],
                    Ye = Object(v.useState)(""),
                    Ie = Object(m.a)(Ye, 2),
                    Le = Ie[0],
                    Be = Ie[1],
                    Re = Object(v.useState)(""),
                    ze = Object(m.a)(Re, 2),
                    We = ze[0],
                    Ue = ze[1],
                    Ge = Object(v.useState)(1),
                    Je = Object(m.a)(Ge, 2),
                    Qe = Je[0],
                    qe = Je[1],
                    Ve = Object(_.a)(),
                    Ke = Ve.toastSuccess,
                    Xe = Ve.toastError,
                    Ze = Object(v.useState)(!1),
                    $e = Object(m.a)(Ze, 2),
                    et = $e[0],
                    tt = $e[1],
                    nt = Object(v.useMemo)((function() { return p ? Object(B.a)(p, l) : Object(B.a)(o, l) }), [p, o, l]),
                    rt = Object(N.g)(),
                    ct = Object(L.a)(),
                    at = ct.login,
                    it = ct.logout,
                    ot = Object(I.Db)(at, it).onPresentConnectModal;
                Object(v.useEffect)((function() { localStorage.setItem(P.a.LOCAL_ROUTER_NAME, "launchpad/fair") }), []), Object(v.useEffect)((function() { d(void 0 === c ? i : c) }), [c, i]);
                var st = function() {
                        var e = Object(x.a)(w.a.mark((function e(t) {
                            var n, r, c, a, i, o, s;
                            return w.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (n = t.target.value, h(n), !Object(H.isAddress)(n)) { e.next = 28; break }
                                        return e.prev = 4, r = Y.a, c = new S.Contract(n, r, Object(R.e)(l)), e.next = 9, c.name();
                                    case 9:
                                        return a = e.sent, e.next = 12, c.symbol();
                                    case 12:
                                        return i = e.sent, e.next = 15, c.decimals();
                                    case 15:
                                        return o = e.sent, e.next = 18, c.totalSupply();
                                    case 18:
                                        s = e.sent, T(a), ne(i), se(o), pe(D.utils.formatUnits(s, o)), e.next = 28;
                                        break;
                                    case 25:
                                        e.prev = 25, e.t0 = e.catch(4), console.log("error", e.t0.message);
                                    case 28:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [4, 25]
                            ])
                        })));
                        return function(t) { return e.apply(this, arguments) }
                    }(),
                    ut = function() {
                        var e = Object(x.a)(w.a.mark((function e() {
                            var t, n, c, a, i;
                            return w.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (e.prev = 0, f && y && X) { e.next = 5; break }
                                        return Xe("Oops, we can not parse token data, please input correct token address!"), qe(1), e.abrupt("return");
                                    case 5:
                                        return e.next = 7, nt.currentAirdropId();
                                    case 7:
                                        return t = e.sent, e.next = 10, nt.staticFee();
                                    case 10:
                                        return n = e.sent, tt(!0), e.next = 14, nt.createAirdrop(f, { value: n });
                                    case 14:
                                        return c = e.sent, e.next = 17, c.wait();
                                    case 17:
                                        a = e.sent, i = { chain_id: l, airdrop_id: t.toString(), owner_address: r, token_address: f, token_name: y, token_symbol: X, token_decimals: oe, total_supply: de, logo_link: ve, website_link: Te, github_link: Ee, twitter_link: Fe, reddit_link: Le, telegram_link: We, airdrop_title: fe, airdrop_desc: me }, tt(!1), 1 === a.status && C.a.post("".concat("https://thesphynx.co/api2", "/insertAirdropInfo"), i).then((function(e) { e.data ? (Ke("Pushed!", "Your Airdrop info is saved successfully."), rt.push("/launchpad/airdrop/manage/".concat(t, "/").concat(l))) : Xe("Failed!", "Your action is failed.") })), e.next = 28;
                                        break;
                                    case 23:
                                        e.prev = 23, e.t0 = e.catch(0), console.log("error", e.t0), tt(!1), Xe("Failed!", "Your action is failed.");
                                    case 28:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 23]
                            ])
                        })));
                        return function() { return e.apply(this, arguments) }
                    }();
                return Object(z.jsx)(U, { children: Object(z.jsxs)(k.a, { utils: M.a, children: [Object(z.jsxs)(Q, { children: [Object(z.jsx)(K, { children: Object(z.jsx)(J, { children: "Create New Airdrop" }) }), Object(z.jsx)(G, {}), Object(z.jsx)(re, { children: "Get started in just a few simple steps!" }), Object(z.jsx)(G, {}), Object(z.jsx)(re, { children: "Disclaimer: The information provided shall not in any way constitute a recommendation as to whether you should invest in any product discussed. We accept no liability for any loss occasioned to any person acting or refraining from action as a result of any material provided or published." })] }), Object(z.jsx)(G, {}), Object(z.jsx)(q, { children: Object(z.jsxs)("div", { style: { marginTop: "24px", width: "100%", marginBottom: "24px" }, children: [Object(z.jsxs)(ae, { number: "1", stepName: "Token", step: Qe, onClick: function() { return qe(1) }, children: [Object(z.jsx)("p", { className: "description", children: "Enter your token Address" }), Object(z.jsx)(Z, { onChange: st, value: f, style: { width: "100%" } }), Object(z.jsx)(G, {}), Object(z.jsxs)(K, { children: [Object(z.jsx)("p", { className: "description w110", children: "Token Name" }), Object(z.jsx)(Z, { className: "ml16", value: y, readOnly: !0 })] }), Object(z.jsx)(G, {}), Object(z.jsxs)(K, { children: [Object(z.jsx)("p", { className: "description w110", children: "Token Symbol" }), Object(z.jsx)(Z, { className: "ml16", value: X, readOnly: !0 })] }), Object(z.jsx)(G, {}), Object(z.jsxs)(K, { children: [Object(z.jsx)("p", { className: "description w110", children: "Token Decimal" }), Object(z.jsx)(Z, { className: "ml16", value: oe, readOnly: !0 })] }), Object(z.jsx)(G, {}), Object(z.jsxs)(K, { children: [Object(z.jsx)("p", { className: "description w110", children: "Total Supply" }), Object(z.jsx)(Z, { className: "ml16", value: de, readOnly: !0 })] }), Object(z.jsx)(G, {}), Object(z.jsxs)(K, { children: [Object(z.jsx)(ee, { disabled: !0, children: "Back" }), Object(z.jsx)(te, { className: "ml16", onClick: function() { return qe(2) }, children: "Next" })] })] }), Object(z.jsx)(G, {}), Object(z.jsxs)(ae, { number: "2", stepName: "Title And Description", step: Qe, onClick: function() { return qe(2) }, children: [Object(z.jsx)(G, {}), Object(z.jsx)("p", { className: "description", children: "Title:" }), Object(z.jsx)(Z, { value: fe, onChange: function(e) { he(e.target.value) }, style: { width: "100%" } }), Object(z.jsx)(G, {}), Object(z.jsx)("p", { className: "description", children: "Description:" }), Object(z.jsx)($, { value: me, onChange: function(e) { ge(e.target.value) }, style: { width: "100%" } }), Object(z.jsx)(G, {}), Object(z.jsxs)(K, { children: [Object(z.jsx)(ee, { onClick: function() { return qe(1) }, children: "Back" }), Object(z.jsx)(te, { className: "ml16", onClick: function() { return qe(3) }, children: "Next" })] })] }), Object(z.jsx)(G, {}), Object(z.jsx)(G, {}), Object(z.jsxs)(ae, { number: "3", stepName: "Additional Information", step: Qe, onClick: function() { return qe(3) }, children: [Object(z.jsx)("p", { className: "description", children: "Note the information in this section can be updated at any time by the presale creator while the presale is active. Any links left blank will not be displayed on your sale." }), Object(z.jsx)(G, {}), Object(z.jsx)("p", { className: "description", children: "Logo Link: (URL must end with a supported image extension png, jpg, jpeg or gif)" }), Object(z.jsx)(Z, { onChange: function(e) { return ke(e.target.value) }, value: ve, style: { width: "100%" } }), Object(z.jsx)(G, {}), Object(z.jsx)("p", { className: "description", children: "Website Link" }), Object(z.jsx)(Z, { onChange: function(e) { return Ce(e.target.value) }, value: Te, style: { width: "100%" } }), Object(z.jsx)(G, {}), Object(z.jsx)("p", { className: "description", children: "GitHub Link" }), Object(z.jsx)(Z, { onChange: function(e) { return Ae(e.target.value) }, value: Ee, style: { width: "100%" } }), Object(z.jsx)(G, {}), Object(z.jsx)("p", { className: "description", children: "Twitter Link" }), Object(z.jsx)(Z, { onChange: function(e) { return Pe(e.target.value) }, value: Fe, style: { width: "100%" } }), Object(z.jsx)(G, {}), Object(z.jsx)("p", { className: "description", children: "Reddit Link" }), Object(z.jsx)(Z, { onChange: function(e) { return Be(e.target.value) }, value: Le, style: { width: "100%" } }), Object(z.jsx)(G, {}), Object(z.jsx)("p", { className: "description", children: "Telegram Link" }), Object(z.jsx)(Z, { onChange: function(e) { return Ue(e.target.value) }, value: We, style: { width: "100%" } }), Object(z.jsx)(G, {}), Object(z.jsxs)(K, { children: [Object(z.jsx)(ee, { onClick: function() { return qe(2) }, children: "Back" }), Object(z.jsx)(te, { className: "ml16", onClick: function() { return qe(4) }, children: "Next" })] })] }), Object(z.jsx)(G, {}), Object(z.jsx)(ae, { number: "4", stepName: "Finalize", step: Qe, onClick: function() { return qe(4) }, children: Object(z.jsxs)(Q, { style: { maxWidth: "unset" }, children: [Object(z.jsxs)(V, { children: [Object(z.jsx)("p", { className: "description w220", children: "Token Name" }), Object(z.jsx)("p", { className: "description w220", children: y })] }), Object(z.jsx)(G, {}), Object(z.jsxs)(V, { children: [Object(z.jsx)("p", { className: "description w220", children: "Token Symbol" }), Object(z.jsx)("p", { className: "description w220", children: X })] }), Object(z.jsx)(G, {}), Object(z.jsxs)(V, { children: [Object(z.jsx)("p", { className: "description w220", children: "Title" }), Object(z.jsx)("p", { className: "description w220", children: fe })] }), Object(z.jsx)(G, {}), Object(z.jsxs)(V, { children: [Object(z.jsx)("p", { className: "description w220", children: "Description" }), Object(z.jsx)("p", { className: "description w220", children: me })] }), Object(z.jsx)(G, {}), Object(z.jsxs)(K, { children: [Object(z.jsx)(ee, { onClick: function() { return qe(1) }, children: "Edit" }), c ? Object(z.jsxs)(te, { disabled: et, className: "ml16", onClick: ut, children: ["Submit", et && Object(z.jsx)(I.g, { className: "pendingTx" })] }) : Object(z.jsx)(te, { className: "ml16", onClick: ot, children: e("Connect") })] })] }) })] }) })] }) })
            }
        }
    }
]);