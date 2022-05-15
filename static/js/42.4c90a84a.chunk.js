(this["webpackJsonpsphynx-frontend"] = this["webpackJsonpsphynx-frontend"] || []).push([
    [42], {
        1829: function(e, t, n) {
            "use strict";
            n.r(t);
            var a, c, r, i, s, o, l, d, b, u, j, x, p, h, m, O, f, g, k, w, y, v, S, I, C = n(11),
                T = n(8),
                F = n(10),
                A = n(7),
                D = n(3),
                E = n.n(D),
                B = n(1),
                P = n.n(B),
                z = n(83),
                R = n(5),
                M = n(29),
                L = n.n(M),
                N = n(2),
                U = n(229),
                V = n(25),
                Q = n(538),
                H = n(35),
                Y = n(18),
                X = n(22),
                G = n(39),
                W = n(126),
                q = n(45),
                K = n(359),
                _ = n(153),
                $ = n(682),
                J = function(e) {
                    var t = Object(Y.a)().chainId,
                        n = G.G.filter((function(e) { return 0 === e.sousId && "" !== e.contractAddress[t] })),
                        a = (n = n.map((function(e) { return e.masterChefIndex }))).indexOf(e),
                        c = Object(X.c)((function(e) { return e.pools.cakeVault[a] }));
                    void 0 === c || null === c ? ((c = {}).fees = {}, c.userData = {}) : (Object.prototype.hasOwnProperty.call(c, "fees") || (c = Object(T.a)(Object(T.a)({}, c), {}, { fees: {} })), Object.prototype.hasOwnProperty.call(c, "userData") || (c = Object(T.a)(Object(T.a)({}, c), {}, { userData: {} })));
                    var r = c,
                        i = r.totalShares,
                        s = r.pricePerFullShare,
                        o = r.totalCakeInVault,
                        l = r.estimatedCakeBountyReward,
                        d = r.totalPendingCakeHarvest,
                        b = r.fees,
                        u = b.performanceFee,
                        j = b.callFee,
                        x = b.withdrawalFee,
                        p = b.withdrawalFeePeriod,
                        h = r.userData,
                        m = h.isLoading,
                        O = h.userShares,
                        f = h.cakeAtLastUserAction,
                        g = h.lastDepositedTime,
                        k = h.lastUserActionTime,
                        w = Object(B.useMemo)((function() { return new L.a(l) }), [l]),
                        y = Object(B.useMemo)((function() { return new L.a(d) }), [d]);
                    return { totalShares: Object(B.useMemo)((function() { return new L.a(i) }), [i]), pricePerFullShare: Object(B.useMemo)((function() { return new L.a(s) }), [s]), totalCakeInVault: Object(B.useMemo)((function() { return new L.a(o) }), [o]), estimatedCakeBountyReward: w, totalPendingCakeHarvest: y, fees: { performanceFee: u, callFee: j, withdrawalFee: x, withdrawalFeePeriod: p }, userData: { isLoading: m, userShares: Object(B.useMemo)((function() { return new L.a(O) }), [O]), cakeAtLastUserAction: Object(B.useMemo)((function() { return new L.a(f) }), [f]), lastDepositedTime: g, lastUserActionTime: k } }
                },
                Z = n(1490),
                ee = n(1580),
                te = n(1579),
                ne = n(1492),
                ae = n(1539),
                ce = n(17),
                re = n(136),
                ie = n(310),
                se = n(1498),
                oe = n(77),
                le = n(708),
                de = n(6),
                be = n(163),
                ue = n(57),
                je = n(1479),
                xe = n(1483),
                pe = n(1541),
                he = n(512),
                me = n(0),
                Oe = function(e) {
                    var t = e.pool,
                        n = e.performanceFee,
                        a = void 0 === n ? 0 : n,
                        c = Object(V.b)().t,
                        r = Object(Y.a)().chainId;
                    r || (r = de.ChainId.MAINNET);
                    var i = Object(R.useTheme)(),
                        s = t.stakingToken,
                        o = t.earningToken,
                        l = t.isFinished,
                        d = t.apr,
                        b = t.earningTokenPrice,
                        u = t.isAutoVault,
                        j = c(u ? "APY includes compounding, APR doesn\u2019t. This pool\u2019s SPHYNX is compounded automatically, so we show APY." : "This pool\u2019s rewards aren\u2019t compounded automatically, so we show APR"),
                        x = Object(N.Cb)(j, { placement: "bottom-start" }),
                        p = x.targetRef,
                        h = x.tooltip,
                        m = x.tooltipVisible,
                        O = Object(he.c)(t, a),
                        f = O.apr,
                        g = O.roundingDecimals,
                        k = O.compoundFrequency,
                        w = Object(N.Ab)(Object(me.jsx)(pe.a, { tokenPrice: b, apr: d, linkLabel: c("Get %symbol%", { symbol: void 0 === r ? s[de.ChainId.MAINNET].symbol : s[r].symbol }), linkHref: "/swap", earningTokenSymbol: void 0 === r ? o[de.ChainId.MAINNET].symbol : o[r].symbol, roundingDecimals: g, compoundFrequency: k, performanceFee: a })),
                        y = Object(F.a)(w, 1)[0];
                    return Object(me.jsxs)(N.F, { alignItems: "center", justifyContent: "space-between", style: { borderBottom: i.custom.divider, paddingBottom: "10px" }, children: [m && h, Object(me.jsx)(N.rb, { fontSize: "14px", color: "white", ref: p, children: "".concat(c(u ? "APY" : "APR"), ":") }), l || !d ? Object(me.jsx)(N.fb, { width: "82px", height: "32px" }) : Object(me.jsxs)(N.F, { alignItems: "center", children: [Object(me.jsx)(xe.a, { color: "#F2C94C", fontSize: "14px", isDisabled: l, value: f, decimals: 2, unit: "%", bold: !0 }), Object(me.jsx)(N.K, { onClick: y, variant: "text", scale: "sm", children: Object(me.jsx)(N.m, { color: "textSubtle", width: "18px" }) })] })] })
                },
                fe = Object(R.default)(N.n)(a || (a = Object(A.a)(["\n  max-width: 352px;\n  margin: 0 8px 24px;\n  display: flex;\n  flex-direction: column;\n  align-self: streatch;\n  position: relative;\n  background: ", ";\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  box-sizing: border-box;\n  border-radius: 10px;\n\n  ", " {\n    margin: 0 12px 46px;\n  }\n  > div {\n    background: transparent;\n  }\n"])), (function(e) { return e.theme.custom.background }), (function(e) { return e.theme.mediaQueries.sm })),
                ge = n(1521),
                ke = n(133),
                we = n(534),
                ye = n(196),
                ve = n(41),
                Se = n(1481),
                Ie = Object(R.default)(N.F)(c || (c = Object(A.a)(["\n  svg {\n    height: 14px;\n    width: 14px;\n  }\n"]))),
                Ce = Object(R.default)(N.F)(r || (r = Object(A.a)(["\n  flex-direction: column;\n  align-items: center;\n"]))),
                Te = Object(R.default)(N.F)(i || (i = Object(A.a)(["\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  border-radius: 5px;\n  padding: 9px 2px;\n  ", " {\n    padding: 9px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.xs })),
                Fe = function(e) {
                    var t, n, a, c = e.pool,
                        r = e.account,
                        i = e.chainId,
                        s = Object(V.b)().t,
                        o = Object(R.useTheme)(),
                        l = Object(we.a)().currentBlock,
                        d = J(c.masterChefIndex),
                        b = d.totalCakeInVault,
                        u = d.fees.performanceFee,
                        j = c.stakingToken,
                        x = c.earningToken,
                        p = c.totalStaked,
                        h = c.startBlock,
                        m = c.endBlock,
                        O = c.stakingLimit,
                        f = c.contractAddress,
                        g = c.sousId,
                        k = c.isAutoVault,
                        w = c.stakingTokenPrice,
                        y = null !== (t = x[i]) && void 0 !== t && t.address ? Object(ce.a)(x[i].address, i) : "",
                        v = Object(ce.a)(f, i),
                        S = Object(ce.p)(i, c.masterChefIndex),
                        I = !(null === (n = window.ethereum) || void 0 === n || !n.isMetaMask),
                        C = 0 === g,
                        T = Object(he.e)(c, l),
                        F = T.shouldShowBlockCountdown,
                        A = T.blocksUntilStart,
                        D = T.blocksRemaining,
                        E = T.hasPoolStarted,
                        B = T.blocksToDisplay,
                        P = Object(N.Cb)(s("Subtracted automatically from each yield harvest and burned."), { placement: "bottom-start" }),
                        z = P.targetRef,
                        M = P.tooltip,
                        U = P.tooltipVisible,
                        Q = function() { if (k) return Object(ke.c)(b, j[i].decimals); if (C) { var e = new L.a(p).minus(b); return Object(ke.c)(e, j[i].decimals) } return Object(ke.c)(p, j[i].decimals) };
                    return Object(me.jsxs)(Ie, { flexDirection: "column", children: [Object(me.jsxs)(N.F, { mb: "2px", justifyContent: "space-between", alignItems: "center", style: { borderBottom: o.custom.divider, paddingBottom: "10px" }, children: [Object(me.jsxs)(N.lb, { fontSize: "10px", color: "white", children: [s("Total staked"), ":"] }), Object(me.jsxs)(N.F, { children: [Object(me.jsx)("img", { src: null !== (a = "/images/tokens/".concat(i, "/").concat(j[i].address[i].toLowerCase(), ".svg")) && void 0 !== a ? a : Se.a, style: { height: "40px", marginLeft: "4px" }, alt: "token" }), Object(me.jsx)(N.F, { alignItems: "flex-start", flexDirection: "column", children: p && p.gte(0) ? Object(me.jsxs)("div", { style: { display: "flex", flexDirection: "row" }, children: [Object(me.jsxs)("div", { style: { marginRight: "10px" }, children: [Object(me.jsx)(N.lb, { fontSize: "14px", color: "white", children: s(j[i].symbol) }), Object(me.jsx)(xe.a, { small: !0, value: Q(), decimals: 0 })] }), Object(me.jsxs)("div", { children: [Object(me.jsx)(N.lb, { fontSize: "14px", color: "white", children: "USD" }), Object(me.jsx)(xe.a, { small: !0, value: Q() * w, decimals: 0 })] })] }) : Object(me.jsx)(N.fb, { width: "90px", height: "21px" }) })] })] }), O && O.gt(0) && Object(me.jsxs)(N.F, { mb: "2px", justifyContent: "space-between", children: [Object(me.jsxs)(N.lb, { small: !0, children: [s("Max. stake per user"), ":"] }), Object(me.jsx)(N.lb, { small: !0, children: "".concat(Object(ke.e)(O, j[i].decimals, 0), " ").concat(j[i].symbol) })] }), F && Object(me.jsxs)(N.F, { mb: "2px", justifyContent: "space-between", alignItems: "center", children: [Object(me.jsxs)(N.lb, { small: !0, children: [s(E ? "Ends in" : "Starts in"), ":"] }), D || A ? Object(me.jsx)(N.F, { alignItems: "center", children: Object(me.jsxs)(N.N, { external: !0, href: Object(ve.e)(E ? m : h, "countdown"), children: [Object(me.jsx)(xe.a, { small: !0, value: B, decimals: 0, color: "primary" }), Object(me.jsx)(N.lb, { small: !0, ml: "4px", color: "primary", textTransform: "lowercase", children: s("Blocks") }), Object(me.jsx)(N.mb, { ml: "4px", color: "primary" })] }) }) : Object(me.jsx)(N.fb, { width: "54px", height: "21px" })] }), k && Object(me.jsxs)(N.F, { mb: "2px", justifyContent: "space-between", alignItems: "center", children: [U && M, Object(me.jsx)(N.rb, { ref: z, small: !0, children: s("Performance Fee") }), Object(me.jsx)(N.F, { alignItems: "center", children: Object(me.jsxs)(N.lb, { ml: "4px", small: !0, children: [u / 100, "%"] }) })] }), Object(me.jsxs)(Ce, { mt: "17px", children: [Object(me.jsx)(Te, { mb: "6px", justifyContent: "flex-end", children: Object(me.jsx)(N.O, { href: Object(ve.e)(Object(ce.a)(x[i].address, i), "token", i), color: "white", fontSize: "14px", children: s("See Token Info") }) }), Object(me.jsxs)(N.F, { width: "100%", children: [Object(me.jsx)(Te, { mr: "6px", mb: "2px", justifyContent: "flex-end", children: Object(me.jsx)(N.O, { href: x[i].projectLink, color: "white", fontSize: "14px", children: s("View Project Site") }) }), v && Object(me.jsx)(Te, { mb: "2px", justifyContent: "flex-end", children: Object(me.jsx)(N.O, { href: Object(ve.e)(k ? S : v, "address", i), color: "white", fontSize: "14px", children: s("View Contract") }) })] }), r && I && y && Object(me.jsx)(N.F, { justifyContent: "flex-end", mt: "6px", children: Object(me.jsxs)(N.l, { scale: "sm", onClick: function() { return Object(ye.a)(y, x[i].symbol, x[i].decimals, i) }, children: [Object(me.jsx)(N.lb, { color: "primary", fontSize: "14px", children: s("Add to Metamask") }), Object(me.jsx)(N.R, { ml: "4px" })] }) })] })] })
                },
                Ae = P.a.memo(Fe),
                De = Object(R.default)(N.F)(s || (s = Object(A.a)(["\n  align-items: center;\n  justify-content: space-between;\n  button {\n    outline: none;\n    color: white!important;\n    background: none;\n    flex-flow: column;\n    font-size: 12px;\n    padding: 0;\n    svg {\n      margin: 0;\n    }\n  }\n"]))),
                Ee = Object(R.default)(N.p)(o || (o = Object(A.a)(["\n  background-color: transparent;\n  border: 0px;\n"]))),
                Be = function(e) {
                    var t = e.pool,
                        n = e.account,
                        a = e.chainId,
                        c = t.isAutoVault,
                        r = Object(V.b)().t,
                        i = Object(B.useState)(!1),
                        s = Object(F.a)(i, 2),
                        o = s[0],
                        l = s[1],
                        d = r("You must harvest and compound your earnings from this pool manually."),
                        b = r("Any funds you stake in this pool will be automatically harvested and restaked (compounded) for you."),
                        u = Object(N.Cb)(c ? b : d, { placement: "bottom" }),
                        j = u.targetRef,
                        x = u.tooltip,
                        p = u.tooltipVisible;
                    return Object(me.jsxs)(Ee, { children: [Object(me.jsxs)(De, { children: [Object(me.jsxs)(N.F, { alignItems: "center", children: [c ? Object(me.jsx)(ge.b, {}) : Object(me.jsx)(ge.e, {}), p && x, Object(me.jsx)(N.F, { ref: j, children: Object(me.jsx)(N.I, { ml: "4px", width: "14px", height: "14px", color: "#F9B043" }) })] }), Object(me.jsx)(N.D, { expanded: o, onClick: function() { l(!o) }, children: r(o ? "Hide" : "Details") })] }), o && Object(me.jsx)(Ae, { pool: t, account: n, chainId: a })] })
                },
                Pe = n(413),
                ze = function(e) {
                    var t, n = Object(X.c)((function(e) { return e.inputReducer.connectedNetworkID })),
                        a = "/images/tokens/".concat(n, "/").concat((t = e.primaryToken.address, t[n] ? t[n] : t[de.ChainId.MAINNET]).toLowerCase(), ".svg");
                    return Object(me.jsx)(N.qb, { primarySrc: a, secondarySrc: "/images/tokens/autorenew.svg", width: e.width, height: e.height, mr: e.mr })
                },
                Re = Object(R.default)(N.q)(l || (l = Object(A.a)(["\n  background: transparent;\n"]))),
                Me = function(e) {
                    var t = e.earningToken,
                        n = e.stakingToken,
                        a = e.isFinished,
                        c = void 0 !== a && a,
                        r = e.isAutoVault,
                        i = void 0 !== r && r,
                        s = e.isStaking,
                        o = void 0 !== s && s,
                        l = e.addTitle,
                        d = void 0 === l ? "" : l,
                        b = Object(V.b)().t,
                        u = "SPHYNX" === (null === t || void 0 === t ? void 0 : t.symbol) && "SPHYNX" === (null === n || void 0 === n ? void 0 : n.symbol),
                        j = o ? "bubblegum" : "cardHeader";
                    return Object(me.jsx)(Re, { isFinished: c, background: j, children: Object(me.jsx)(N.F, { alignItems: "center", justifyContent: "center", children: Object(me.jsxs)(N.F, { flexDirection: "column", alignItems: "center", children: [i ? Object(me.jsx)(ze, { primaryToken: n, width: 100, height: 100 }) : Object(me.jsx)(Pe.c, { primaryToken: t, secondaryToken: n, width: 100, height: 100 }), Object(me.jsx)(N.H, { color: c ? "textDisabled" : "body", scale: "md", children: "".concat(b(i ? "Auto ".concat(null === t || void 0 === t ? void 0 : t.symbol).concat(d) : u ? "Manual ".concat(null === t || void 0 === t ? void 0 : t.symbol) : "Earn ".concat(null === t || void 0 === t ? void 0 : t.symbol))) }), Object(me.jsx)(N.lb, { color: "white", fontSize: "15px", children: i ? b("Automatic restaking") : u ? b("Earn SPHYNX, stake SPHYNX") : b("Stake %symbol%", { symbol: null === n || void 0 === n ? void 0 : n.symbol }) })] }) }) })
                },
                Le = n(37),
                Ne = n(49),
                Ue = n(47),
                Ve = n(55),
                Qe = n(212),
                He = n(88),
                Ye = n(700),
                Xe = function() {
                    var e = Object(B.useState)(Date.now()),
                        t = Object(F.a)(e, 2),
                        n = t[0],
                        a = t[1];
                    return { lastUpdated: n, previousLastUpdated: Object(Ye.a)(n), setLastUpdated: Object(B.useCallback)((function() { a(Date.now()) }), [a]) }
                },
                Ge = function(e, t, n, a) {
                    var c = Object(B.useState)(!1),
                        r = Object(F.a)(c, 2),
                        i = r[0],
                        s = r[1],
                        o = Object(He.a)(),
                        l = o.toastSuccess,
                        d = o.toastError,
                        b = Object(V.b)().t,
                        u = Object(W.b)(),
                        j = Object(Y.a)(),
                        x = j.account,
                        p = j.chainId,
                        h = Object(Ve.o)(t, a),
                        m = Object(B.useCallback)(Object(C.a)(E.a.mark((function c() {
                            var r, i;
                            return E.a.wrap((function(c) {
                                for (;;) switch (c.prev = c.next) {
                                    case 0:
                                        return c.prev = 0, s(!0), c.next = 4, e.approve(h.address, H.a.constants.MaxUint256);
                                    case 4:
                                        return r = c.sent, c.next = 7, r.wait();
                                    case 7:
                                        i = c.sent, u(Object(Qe.a)(t, x, p, a)), i.status ? (l(b("Contract Enabled"), b("You can now stake in the %symbol% pool!", { symbol: n })), s(!1)) : (d(b("Error"), b("Please try again. Confirm the transaction and make sure you are paying enough gas!")), s(!1)), c.next = 16;
                                        break;
                                    case 12:
                                        c.prev = 12, c.t0 = c.catch(0), console.error(c.t0), d(b("Error"), b("Please try again. Confirm the transaction and make sure you are paying enough gas!"));
                                    case 16:
                                    case "end":
                                        return c.stop()
                                }
                            }), c, null, [
                                [0, 12]
                            ])
                        }))), [x, u, e, h, t, n, b, d, l]);
                    return p !== de.ChainId.MAINNET && p !== de.ChainId.ETHEREUM && p !== de.ChainId.BRISE && p !== de.ChainId.TESTNET && p !== de.ChainId.TESTBRISE && p !== de.ChainId.CRONOS ? {} : { handleApprove: m, requestedApproval: i }
                },
                We = function(e, t) {
                    var n = Object(B.useState)(!1),
                        a = Object(F.a)(n, 2),
                        c = a[0],
                        r = a[1],
                        i = Object(V.b)().t,
                        s = Object(He.a)(),
                        o = s.toastSuccess,
                        l = s.toastError,
                        d = Object(Ve.e)(t),
                        b = Object(Ve.d)(t),
                        u = Object(Y.a)().chainId;
                    if (u !== de.ChainId.MAINNET && u !== de.ChainId.ETHEREUM && u !== de.ChainId.BRISE && u !== de.ChainId.TESTNET && u !== de.ChainId.TESTBRISE && u !== de.ChainId.CRONOS) return {};
                    var j = function() {
                        var t = Object(C.a)(E.a.mark((function t() {
                            var n;
                            return E.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, b.approve(d.address, H.a.constants.MaxUint256);
                                    case 2:
                                        return n = t.sent, r(!0), t.next = 6, n.wait();
                                    case 6:
                                        t.sent.status ? (o(i("Contract Enabled"), i("You can now stake in the %symbol% vault!", { symbol: "SPHYNX" })), e(), r(!1)) : (l(i("Error"), i("Please try again. Confirm the transaction and make sure you are paying enough gas!")), r(!1));
                                    case 8:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function() { return t.apply(this, arguments) }
                    }();
                    return { handleApprove: j, requestedApproval: c }
                },
                qe = function(e) {
                    var t = Object(B.useState)(!1),
                        n = Object(F.a)(t, 2),
                        a = n[0],
                        c = n[1],
                        r = Object(Y.a)().account,
                        i = Object(Ve.d)(e),
                        s = Object(Ve.e)(e),
                        o = Xe(),
                        l = o.lastUpdated,
                        d = o.setLastUpdated;
                    return Object(B.useEffect)((function() {
                        var e = function() {
                            var e = Object(C.a)(E.a.mark((function e() {
                                var t, n;
                                return E.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, i.allowance(r, s.address);
                                        case 3:
                                            t = e.sent, n = new L.a(t.toString()), c(n.gt(0)), e.next = 11;
                                            break;
                                        case 8:
                                            e.prev = 8, e.t0 = e.catch(0), c(!1);
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 8]
                                ])
                            })));
                            return function() { return e.apply(this, arguments) }
                        }();
                        e()
                    }), [r, i, s, l]), { isVaultApproved: a, setLastUpdated: d }
                },
                Ke = function(e) {
                    var t = e.pool,
                        n = e.isLoading,
                        a = void 0 !== n && n,
                        c = Object(Y.a)().chainId,
                        r = t.sousId,
                        i = t.stakingToken,
                        s = t.earningToken,
                        o = Object(V.b)().t,
                        l = Object(R.useTheme)(),
                        d = Object(Ve.h)(i[c].address ? Object(ce.a)(i[c].address, c) : ""),
                        b = Ge(d, r, s[c].symbol, t.masterChefIndex),
                        u = b.handleApprove,
                        j = b.requestedApproval;
                    return Object(me.jsx)(me.Fragment, { children: a ? Object(me.jsx)(N.fb, { width: "100%", height: "52px" }) : Object(me.jsx)(N.l, { isLoading: j, endIcon: j ? Object(me.jsx)(N.g, { spin: !0, color: "currentColor" }) : null, disabled: j, onClick: u, style: Object(T.a)(Object(T.a)({}, je.a), {}, { background: l.custom.gradient }), children: o("Enable") }) })
                },
                _e = n(327),
                $e = Object(R.default)(N.N)(d || (d = Object(A.a)(["\n  width: 100%;\n"]))),
                Je = function(e) {
                    var t = e.tokenSymbol,
                        n = e.onDismiss,
                        a = Object(V.b)().t,
                        c = Object(_e.a)().theme;
                    return Object(me.jsxs)(N.T, { title: a("%symbol% required", { symbol: t }), onDismiss: n, headerBackground: c.colors.gradients.cardHeader, children: [Object(me.jsx)(N.lb, { color: "failure", bold: !0, children: a("Insufficient %symbol% balance", { symbol: t }) }), Object(me.jsx)(N.lb, { mt: "24px", children: a("You\u2019ll need %symbol% to stake in this pool!", { symbol: t }) }), Object(me.jsx)(N.lb, { children: a("Buy some %symbol%, or make sure your %symbol% isn\u2019t in another pool or LP.", { symbol: t }) }), Object(me.jsxs)(N.l, { mt: "24px", as: "a", external: !0, href: "/swap", children: [a("Buy"), " ", t] }), Object(me.jsx)($e, { href: "https://yieldwatch.net", external: !0, children: Object(me.jsxs)(N.l, { variant: "secondary", mt: "8px", width: "100%", children: [a("Locate Assets"), Object(me.jsx)(N.cb, { color: "primary", ml: "4px" })] }) }), Object(me.jsx)(N.l, { variant: "text", onClick: n, children: a("Close Window") })] })
                },
                Ze = n(523),
                et = n.n(Ze),
                tt = Object(R.default)(N.l)(b || (b = Object(A.a)(["\n  flex-grow: 1;\n"]))),
                nt = function(e) {
                    var t = e.children,
                        n = e.onClick;
                    return Object(me.jsx)(tt, { scale: "xs", mx: "2px", p: "4px 16px", variant: "tertiary", onClick: n, children: t })
                },
                at = n(169),
                ct = n(64),
                rt = function() {
                    var e = Object(C.a)(E.a.mark((function e(t, n, a) {
                        var c, r;
                        return E.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.deposit(new L.a(n).times(ue.b.pow(a)).toString());
                                case 2:
                                    return c = e.sent, e.next = 5, c.wait();
                                case 5:
                                    return r = e.sent, e.abrupt("return", r.status);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n, a) { return e.apply(this, arguments) }
                }(),
                it = function() {
                    var e = Object(C.a)(E.a.mark((function e(t, n, a, c) {
                        var r, i;
                        return E.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.deposit(n, new L.a(a).times(ue.b.pow(c)).toString());
                                case 2:
                                    return r = e.sent, e.next = 5, r.wait();
                                case 5:
                                    return i = e.sent, e.abrupt("return", i.status);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n, a, c) { return e.apply(this, arguments) }
                }(),
                st = function() {
                    var e = Object(C.a)(E.a.mark((function e(t, n) {
                        var a, c;
                        return E.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.deposit(new L.a(n).times(ct.h).toString());
                                case 2:
                                    return a = e.sent, e.next = 5, a.wait();
                                case 5:
                                    return c = e.sent, e.abrupt("return", c.status);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) { return e.apply(this, arguments) }
                }(),
                ot = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        a = Object(W.b)(),
                        c = Object(Y.a)(),
                        r = c.account,
                        i = c.chainId,
                        s = G.G.find((function(n) { return n.sousId === e && n.masterChefIndex === t })),
                        o = Object(Ve.i)(t),
                        l = Object(Ve.o)(e, t),
                        d = Object(Ve.p)(e, t),
                        b = Object(B.useCallback)(function() {
                            var c = Object(C.a)(E.a.mark((function c(b, u) {
                                return E.a.wrap((function(c) {
                                    for (;;) switch (c.prev = c.next) {
                                        case 0:
                                            if (0 !== e) { c.next = 5; break }
                                            return c.next = 3, Object(at.d)(o, 0, b, u);
                                        case 3:
                                            c.next = 17;
                                            break;
                                        case 5:
                                            if (!n) { c.next = 10; break }
                                            return c.next = 8, st(l, b);
                                        case 8:
                                            c.next = 17;
                                            break;
                                        case 10:
                                            if (s.poolType !== Le.b.TIER) { c.next = 15; break }
                                            return c.next = 13, it(d, s.tierIndex, b, u);
                                        case 13:
                                            c.next = 17;
                                            break;
                                        case 15:
                                            return c.next = 17, rt(l, b, u);
                                        case 17:
                                            a(Object(Qe.g)(e, r, i, t)), a(Object(Qe.b)(e, r, i, t));
                                        case 19:
                                        case "end":
                                            return c.stop()
                                    }
                                }), c)
                            })));
                            return function(e, t) { return c.apply(this, arguments) }
                        }(), [r, a, n, o, l, e]);
                    return i !== de.ChainId.MAINNET && i !== de.ChainId.ETHEREUM && i !== de.ChainId.BRISE && i !== de.ChainId.TESTNET && i !== de.ChainId.TESTBRISE && i !== de.ChainId.CRONOS ? {} : { onStake: b }
                },
                lt = function() {
                    var e = Object(C.a)(E.a.mark((function e(t, n, a) {
                        var c, r;
                        return E.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.withdraw(new L.a(n).times(ue.b.pow(a)).toString());
                                case 2:
                                    return c = e.sent, e.next = 5, c.wait();
                                case 5:
                                    return r = e.sent, e.abrupt("return", r.status);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n, a) { return e.apply(this, arguments) }
                }(),
                dt = function() {
                    var e = Object(C.a)(E.a.mark((function e(t, n, a, c) {
                        var r, i;
                        return E.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.withdraw(n, new L.a(a).times(ue.b.pow(c)).toString());
                                case 2:
                                    return r = e.sent, e.next = 5, r.wait();
                                case 5:
                                    return i = e.sent, e.abrupt("return", i.status);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n, a, c) { return e.apply(this, arguments) }
                }(),
                bt = function() {
                    var e = Object(C.a)(E.a.mark((function e(t) {
                        var n, a;
                        return E.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.emergencyWithdraw();
                                case 2:
                                    return n = e.sent, e.next = 5, n.wait();
                                case 5:
                                    return a = e.sent, e.abrupt("return", a.status);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }(),
                ut = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        a = Object(W.b)(),
                        c = Object(Y.a)(),
                        r = c.account,
                        i = c.chainId,
                        s = G.G.find((function(n) { return n.sousId === e && n.masterChefIndex === t })),
                        o = Object(Ve.i)(t),
                        l = Object(Ve.o)(e, t),
                        d = Object(Ve.p)(e, t),
                        b = Object(B.useCallback)(function() {
                            var c = Object(C.a)(E.a.mark((function c(b, u) {
                                return E.a.wrap((function(c) {
                                    for (;;) switch (c.prev = c.next) {
                                        case 0:
                                            if (0 !== e) { c.next = 5; break }
                                            return c.next = 3, Object(at.g)(o, 0, b, u);
                                        case 3:
                                            c.next = 17;
                                            break;
                                        case 5:
                                            if (!n) { c.next = 10; break }
                                            return c.next = 8, bt(l);
                                        case 8:
                                            c.next = 17;
                                            break;
                                        case 10:
                                            if (n || s.poolType !== Le.b.TIER) { c.next = 15; break }
                                            return c.next = 13, dt(d, s.tierIndex, b, u);
                                        case 13:
                                            c.next = 17;
                                            break;
                                        case 15:
                                            return c.next = 17, lt(l, b, u);
                                        case 17:
                                            a(Object(Qe.g)(e, r, i, t)), a(Object(Qe.b)(e, r, i, t)), a(Object(Qe.f)(e, r, i, t));
                                        case 20:
                                        case "end":
                                            return c.stop()
                                    }
                                }), c)
                            })));
                            return function(e, t) { return c.apply(this, arguments) }
                        }(), [r, a, n, o, l, e]);
                    return i !== de.ChainId.MAINNET && i !== de.ChainId.ETHEREUM && i !== de.ChainId.BRISE && i !== de.ChainId.TESTNET && i !== de.ChainId.TESTBRISE && i !== de.ChainId.CRONOS ? {} : { onUnstake: b }
                },
                jt = Object(R.default)(N.T)(u || (u = Object(A.a)(["\n  border-radius: 20px;\n  background: ", ";\n"])), (function(e) { return e.theme.custom.background })),
                xt = Object(R.default)(N.L)(j || (j = Object(A.a)(["\n  width: 50px;\n"]))),
                pt = Object(R.default)(N.N)(x || (x = Object(A.a)(["\n  width: 100%;\n  justify-content: center;\n"]))),
                ht = function(e) {
                    var t = e.isBnbPool,
                        n = e.pool,
                        a = e.stakingTokenBalance,
                        c = e.stakingTokenPrice,
                        r = e.isRemovingStake,
                        i = void 0 !== r && r,
                        s = e.onDismiss,
                        o = Object(Y.a)().chainId,
                        l = n.sousId,
                        d = n.stakingToken,
                        b = n.userData,
                        u = n.stakingLimit,
                        j = n.earningToken,
                        x = n.masterChefIndex,
                        p = Object(V.b)().t,
                        h = Object(R.useTheme)(),
                        m = ot(l, x, t).onStake,
                        O = ut(l, x, n.enableEmergencyWithdraw).onUnstake,
                        f = Object(He.a)(),
                        g = f.toastSuccess,
                        k = f.toastError,
                        w = Object(B.useState)(!1),
                        y = Object(F.a)(w, 2),
                        v = y[0],
                        S = y[1],
                        I = Object(B.useState)(""),
                        A = Object(F.a)(I, 2),
                        D = A[0],
                        P = A[1],
                        z = Object(B.useState)(!1),
                        M = Object(F.a)(z, 2),
                        U = M[0],
                        Q = M[1],
                        H = Object(B.useState)(0),
                        X = Object(F.a)(H, 2),
                        G = X[0],
                        W = X[1],
                        q = function() { return i ? b.stakedBalance : u.gt(0) && a.gt(u) ? u : a },
                        K = D && Object(ke.a)(new L.a(D).times(c).toNumber());
                    Object(B.useEffect)((function() {
                        if (u.gt(0) && !i) {
                            var e = Object(ke.d)(new L.a(D), d[o].decimals);
                            Q(e.plus(b.stakedBalance).gt(u))
                        }
                    }), [D, u, b, d, i, Q]);
                    var _ = function(e) {
                            if (e > 0) {
                                var t = q().dividedBy(100).multipliedBy(e),
                                    n = Object(ke.e)(t, d[o].decimals, d[o].decimals);
                                P(n)
                            } else P("");
                            W(e)
                        },
                        $ = function() {
                            var e = Object(C.a)(E.a.mark((function e() {
                                return E.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (S(!0), !i) { e.next = 16; break }
                                            return e.prev = 2, e.next = 5, O(D, d[o].decimals);
                                        case 5:
                                            g("".concat(p("Unstaked"), "!"), p("Your %symbol% earnings have also been harvested to your wallet!", { symbol: j[o].symbol })), S(!1), s(), e.next = 14;
                                            break;
                                        case 10:
                                            e.prev = 10, e.t0 = e.catch(2), k(p("Error"), p("Please try again. Confirm the transaction and make sure you are paying enough gas!")), S(!1);
                                        case 14:
                                            e.next = 28;
                                            break;
                                        case 16:
                                            return e.prev = 16, e.next = 19, m(D, d[o].decimals);
                                        case 19:
                                            g("".concat(p("Staked"), "!"), p("Your %symbol% funds have been staked in the pool!", { symbol: d[o].symbol })), S(!1), s(), e.next = 28;
                                            break;
                                        case 24:
                                            e.prev = 24, e.t1 = e.catch(16), k(p("Error"), p("Please try again. Confirm the transaction and make sure you are paying enough gas!")), S(!1);
                                        case 28:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [2, 10],
                                    [16, 24]
                                ])
                            })));
                            return function() { return e.apply(this, arguments) }
                        }();
                    return Object(me.jsxs)(jt, {
                        title: p(i ? "Unstake" : "Stake in Pool"),
                        onDismiss: s,
                        headerBackground: h.custom.tertiary,
                        children: [u.gt(0) && !i && Object(me.jsx)(N.lb, { color: "secondary", bold: !0, mb: "24px", style: { textAlign: "center" }, fontSize: "16px", children: p("Max stake for this pool: %amount% %token%", { amount: Object(ke.e)(u, d[o].decimals, 0), token: d[o].symbol }) }), Object(me.jsxs)(N.F, { alignItems: "center", justifyContent: "space-between", mb: "8px", children: [Object(me.jsxs)(N.lb, { bold: !0, children: [p(i ? "Unstake" : "Stake"), ":"] }), Object(me.jsxs)(N.F, { alignItems: "center", children: [Object(me.jsx)(xt, { src: "/images/tokens/".concat(o, "/").concat(Object(ce.a)(d[o].address, o).toLowerCase(), ".svg"), width: 50, height: 50, alt: d[o].symbol }), Object(me.jsx)(N.lb, { ml: "4px", bold: !0, children: d[o].symbol })] })] }), Object(me.jsx)(N.h, {
                            value: D,
                            onUserInput: function(e) {
                                if (e) {
                                    var t = Object(ke.d)(new L.a(e), d[o].decimals),
                                        n = Math.floor(t.dividedBy(q()).multipliedBy(100).toNumber());
                                    W(Math.min(n, 100))
                                } else W(0);
                                P(e)
                            },
                            currencyValue: 0 !== c && !Number.isNaN(c) && "~".concat(K || 0, " USD"),
                            isWarning: U,
                            decimals: d[o].decimals
                        }), U && Object(me.jsx)(N.lb, { color: "failure", fontSize: "12px", style: { textAlign: "right" }, mt: "4px", children: p("Maximum total stake: %amount% %token%", { amount: Object(ke.e)(new L.a(u), d[o].decimals, 0), token: d[o].symbol }) }), Object(me.jsx)(N.lb, { ml: "auto", color: "textSubtle", fontSize: "12px", mb: "8px", children: p("Balance: %balance%", { balance: Object(ke.e)(q(), d[o].decimals) }) }), Object(me.jsx)(et.a, { min: 0, max: 99, value: G, onChange: function(e) { return _(Math.ceil(e)) }, name: "stake", valueLabel: "".concat(G, "%"), step: 1 }), Object(me.jsxs)(N.F, { alignItems: "center", justifyContent: "space-between", mt: "8px", children: [Object(me.jsx)(nt, { onClick: function() { return _(25) }, children: "25%" }), Object(me.jsx)(nt, { onClick: function() { return _(50) }, children: "50%" }), Object(me.jsx)(nt, { onClick: function() { return _(75) }, children: "75%" }), Object(me.jsx)(nt, { onClick: function() { return _(100) }, children: p("Max") })] }), Object(me.jsxs)(N.F, { alignItems: "center", flexDirection: "column", children: [Object(me.jsx)(N.l, { isLoading: v, endIcon: v ? Object(me.jsx)(N.g, { spin: !0, color: "currentColor" }) : null, onClick: $, disabled: !D || 0 === parseFloat(D) || U, mt: "24px", mb: "8px", style: Object(T.a)(Object(T.a)({}, je.a), {}, { background: h.custom.gradient }), children: p(v ? "Confirming" : "Confirm") }), !i && Object(me.jsx)(pt, { external: !0, href: "/swap", children: Object(me.jsx)(N.l, { width: "100%", variant: "secondary", mt: "8px", mb: "8px", style: je.b, children: p("Get %symbol%", { symbol: d[o].symbol }) }) })] })]
                    })
                },
                mt = Object(R.default)(N.K)(p || (p = Object(A.a)(["\n  width: 30px;\n  height: 30px;\n  border-radius: 9px;\n  ", " {\n    width: 40px;\n    height: 40px;\n    border-radius: 12px;\n  }\n  ", " {\n    width: 48px;\n    height: 48px;\n    border-radius: 16px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm }), (function(e) { return e.theme.mediaQueries.md })),
                Ot = function(e) {
                    var t = e.pool,
                        n = e.stakingTokenBalance,
                        a = e.stakedBalance,
                        c = e.isBnbPool,
                        r = e.isStaked,
                        i = e.isLoading,
                        s = void 0 !== i && i,
                        o = e.stakingAvailable,
                        l = void 0 === o || o,
                        d = Object(Y.a)().chainId,
                        b = t.stakingToken,
                        u = t.stakingTokenPrice,
                        j = t.stakingLimit,
                        x = t.isFinished,
                        p = t.userData,
                        h = Object(V.b)().t,
                        m = Object(R.useTheme)(),
                        O = !Object(N.zb)().isXl,
                        f = Object(ke.c)(a, b[d].decimals),
                        g = Object(ke.c)(a.multipliedBy(u), b[d].decimals),
                        k = Object(N.Ab)(Object(me.jsx)(Je, { tokenSymbol: b[d].symbol })),
                        w = Object(F.a)(k, 1)[0],
                        y = Object(N.Ab)(Object(me.jsx)(ht, { isBnbPool: c, pool: t, stakingTokenBalance: n, stakingTokenPrice: u })),
                        v = Object(F.a)(y, 1)[0],
                        S = Object(N.Ab)(Object(me.jsx)(ht, { stakingTokenBalance: n, isBnbPool: c, pool: t, stakingTokenPrice: u, isRemovingStake: !0 })),
                        I = Object(F.a)(S, 1)[0],
                        C = Object(N.Cb)(h("You\u2019ve already staked the maximum amount you can stake in this pool!"), { placement: "bottom" }),
                        A = C.targetRef,
                        D = C.tooltip,
                        E = C.tooltipVisible,
                        B = j.gt(0) && p.stakedBalance.gte(j);
                    return Object(me.jsx)(N.F, { flexDirection: "column", children: s ? Object(me.jsx)(N.fb, { width: "100%", height: "52px" }) : r ? Object(me.jsxs)(N.F, { justifyContent: "space-between", alignItems: "center", children: [Object(me.jsxs)(N.F, { flexDirection: "column", mr: "10px", children: [Object(me.jsx)(xe.a, { bold: !0, fontSize: O ? "12px" : "16px", decimals: 3, value: f }), 0 !== u && Object(me.jsx)(N.lb, { fontSize: "12px", color: "textSubtle", children: Object(me.jsx)(xe.a, { fontSize: O ? "12px" : "16px", color: "textSubtle", decimals: 2, value: g, prefix: "~", unit: " USD" }) })] }), Object(me.jsxs)(N.F, { children: [Object(me.jsx)(mt, { variant: "secondary", onClick: I, mr: "6px", children: Object(me.jsx)(N.S, { color: "primary", width: "24px" }) }), B ? Object(me.jsx)("span", { ref: A, children: Object(me.jsx)(mt, { variant: "secondary", disabled: !0, children: Object(me.jsx)(N.a, { color: "textDisabled", width: "24px", height: "24px" }) }) }) : Object(me.jsx)(mt, { variant: "secondary", onClick: n.gt(0) ? v : w, disabled: x || !l, children: Object(me.jsx)(N.a, { color: "primary", width: "24px", height: "24px" }) })] }), E && D] }) : Object(me.jsx)(N.l, { disabled: x || !l, onClick: n.gt(0) ? v : w, style: Object(T.a)(Object(T.a)({}, je.a), {}, { background: m.custom.gradient }), children: h("Stake") }) })
                },
                ft = function() {
                    var e = Object(C.a)(E.a.mark((function e(t) {
                        var n, a;
                        return E.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.deposit("0");
                                case 2:
                                    return n = e.sent, e.next = 5, n.wait();
                                case 5:
                                    return a = e.sent, e.abrupt("return", a.status);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }(),
                gt = function() {
                    var e = Object(C.a)(E.a.mark((function e(t, n) {
                        var a, c;
                        return E.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.deposit(n, "0");
                                case 2:
                                    return a = e.sent, e.next = 5, a.wait();
                                case 5:
                                    return c = e.sent, e.abrupt("return", c.status);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) { return e.apply(this, arguments) }
                }(),
                kt = function() {
                    var e = Object(C.a)(E.a.mark((function e(t) {
                        var n, a;
                        return E.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.deposit({ value: ue.c });
                                case 2:
                                    return n = e.sent, e.next = 5, n.wait();
                                case 5:
                                    return a = e.sent, e.abrupt("return", a.status);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }(),
                wt = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        a = Object(W.b)(),
                        c = Object(Y.a)(),
                        r = c.account,
                        i = c.chainId,
                        s = G.G.find((function(n) { return n.sousId === e && n.masterChefIndex === t })),
                        o = Object(Ve.o)(e, t),
                        l = Object(Ve.i)(t),
                        d = Object(Ve.p)(e, t),
                        b = Object(B.useCallback)(Object(C.a)(E.a.mark((function c() {
                            return E.a.wrap((function(c) {
                                for (;;) switch (c.prev = c.next) {
                                    case 0:
                                        if (0 !== e) { c.next = 5; break }
                                        return c.next = 3, Object(at.b)(l, 0);
                                    case 3:
                                        c.next = 17;
                                        break;
                                    case 5:
                                        if (!n) { c.next = 10; break }
                                        return c.next = 8, kt(o);
                                    case 8:
                                        c.next = 17;
                                        break;
                                    case 10:
                                        if (s.poolType !== Le.b.TIER) { c.next = 15; break }
                                        return c.next = 13, gt(d, s.tierIndex);
                                    case 13:
                                        c.next = 17;
                                        break;
                                    case 15:
                                        return c.next = 17, ft(o);
                                    case 17:
                                        a(Object(Qe.f)(e, r, i, t)), a(Object(Qe.b)(e, r, i, t));
                                    case 19:
                                    case "end":
                                        return c.stop()
                                }
                            }), c)
                        }))), [r, a, n, l, o, e]);
                    return i !== de.ChainId.MAINNET && i !== de.ChainId.ETHEREUM && i !== de.ChainId.BRISE && i !== de.ChainId.TESTNET && i !== de.ChainId.TESTBRISE && i !== de.ChainId.CRONOS ? {} : { onReward: b }
                },
                yt = Object(R.default)(N.T)(h || (h = Object(A.a)(["\n  border-radius: 20px;\n  background: ", ";\n"])), (function(e) { return e.theme.custom.background })),
                vt = Object(R.default)(N.lb)(m || (m = Object(A.a)(["\n  color: 'white';\n"]))),
                St = R.default.div(O || (O = Object(A.a)(["\n  display: flex;\n  height: 24px;\n  width: 100%;\n  justify-content: center;\n  background: transparent;\n  border-radius: 16px;\n  button:nth-child(1) {\n    width: 100%;\n    max-width: 120px;\n    font-weight: 600;\n    font-size: 12px;\n    color: white;\n    height: 24px;\n    padding: 0 16px;\n    background: ", ";\n    border: 1px solid ", ";\n    border-radius: 16px 0px 0px 16px;\n    box-shadow: none !important;\n    outline: none;\n    &:hover,\n    &.active {\n      background: ", ";\n      border: 1px solid ", ";\n    }\n  }\n  button:nth-child(2) {\n    width: 100%;\n    max-width: 120px;\n    font-weight: 600;\n    font-size: 12px;\n    color: white;\n    height: 24px;\n    padding: 0 16px;\n    background: ", ";\n    border: 1px solid ", ";\n    border-radius: 0px 16px 16px 0px;\n    box-shadow: none !important;\n    outline: none;\n    &:hover,\n    &.active {\n      background: ", " !important;\n      border: 1px solid ", ";\n    }\n  }\n"])), (function(e) { return e.theme.custom.autoCardBackground }), (function(e) { return e.theme.custom.globalBorderColor }), (function(e) { return e.theme.custom.gradient }), (function(e) { return e.theme.custom.globalBorderColor }), (function(e) { return e.theme.custom.autoCardBackground }), (function(e) { return e.theme.custom.globalBorderColor }), (function(e) { return e.theme.custom.gradient }), (function(e) { return e.theme.custom.globalBorderColor })),
                It = function(e) {
                    var t = e.formattedBalance,
                        n = e.fullBalance,
                        a = e.earningToken,
                        c = e.earningsDollarValue,
                        r = e.sousId,
                        i = e.masterChefIndex,
                        s = e.isBnbPool,
                        o = e.isCompoundPool,
                        l = void 0 !== o && o,
                        d = e.onDismiss,
                        b = Object(V.b)().t,
                        u = Object(_e.a)().theme,
                        j = Object(He.a)(),
                        x = j.toastSuccess,
                        p = j.toastError,
                        h = wt(r, i, s).onReward,
                        m = ot(r, i, s).onStake,
                        O = Object(B.useState)(!1),
                        f = Object(F.a)(O, 2),
                        g = f[0],
                        k = f[1],
                        w = Object(B.useState)(l),
                        y = Object(F.a)(w, 2),
                        v = y[0],
                        S = y[1],
                        I = Object(N.Cb)(Object(me.jsxs)(me.Fragment, { children: [Object(me.jsx)(vt, { mb: "12px", children: b("Compound: collect and restake Sphynx into pool.") }), Object(me.jsx)(vt, { children: b("Harvest: collect Sphynx and send to wallet") })] }), { placement: "bottom-end", tooltipOffset: [20, 10] }),
                        A = I.targetRef,
                        D = I.tooltip,
                        P = I.tooltipVisible,
                        z = function() {
                            var e = Object(C.a)(E.a.mark((function e() {
                                return E.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (k(!0), !v) { e.next = 17; break }
                                            return e.prev = 2, e.next = 5, m(n, a.decimals);
                                        case 5:
                                            x("".concat(b("Compounded"), "!"), b("Your %symbol% earnings have been re-invested into the pool!", { symbol: a.symbol })), k(!1), d(), e.next = 15;
                                            break;
                                        case 10:
                                            e.prev = 10, e.t0 = e.catch(2), p(b("Error"), b("Please try again. Confirm the transaction and make sure you are paying enough gas!")), console.error(e.t0), k(!1);
                                        case 15:
                                            e.next = 30;
                                            break;
                                        case 17:
                                            return e.prev = 17, e.next = 20, h();
                                        case 20:
                                            x("".concat(b("Harvested"), "!"), b("Your %symbol% earnings have been sent to your wallet!", { symbol: a.symbol })), k(!1), d(), e.next = 30;
                                            break;
                                        case 25:
                                            e.prev = 25, e.t1 = e.catch(17), p(b("Error"), b("Please try again. Confirm the transaction and make sure you are paying enough gas!")), console.error(e.t1), k(!1);
                                        case 30:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [2, 10],
                                    [17, 25]
                                ])
                            })));
                            return function() { return e.apply(this, arguments) }
                        }();
                    return Object(me.jsxs)(yt, { title: "".concat(a.symbol, " ").concat(b(l ? "Collect" : "Harvest")), onDismiss: d, headerBackground: u.custom.tertiary, children: [l && Object(me.jsxs)(N.F, { justifyContent: "center", alignItems: "center", mb: "24px", children: [Object(me.jsxs)(St, { children: [Object(me.jsx)(N.l, { className: v ? "active" : "", onClick: function() { S(!0) }, children: b("Compound") }), Object(me.jsx)(N.l, { className: v ? "" : "active", onClick: function() { S(!1) }, children: b("Harvest") })] }), Object(me.jsx)(N.F, { ml: "10px", ref: A, children: Object(me.jsx)(N.I, { color: "textSubtle" }) }), P && D] }), Object(me.jsxs)(N.F, { justifyContent: "space-between", alignItems: "center", mb: "24px", children: [Object(me.jsxs)(N.lb, { color: "white", fontSize: "14px", mr: "5px", children: [b(v ? "Compounding" : "Harvesting"), ":"] }), Object(me.jsxs)(N.F, { flexDirection: "column", children: [Object(me.jsxs)(N.lb, { fontSize: "16px", children: [t, " ", a.symbol] }), c > 0 && Object(me.jsx)(N.lb, { fontSize: "12px", color: "textSubtle", children: "~".concat(Object(ke.a)(c), " USD") })] })] }), Object(me.jsxs)(N.F, { alignItems: "center", flexDirection: "column", children: [Object(me.jsx)(N.l, { mt: "8px", mb: "8px", onClick: z, isLoading: g, style: Object(T.a)(Object(T.a)({}, je.a), {}, { background: u.custom.gradient }), endIcon: g ? Object(me.jsx)(N.g, { spin: !0, color: "currentColor" }) : null, children: b(g ? "Confirming" : "Confirm") }), Object(me.jsx)(N.l, { variant: "text", onClick: d, mt: "8px", mb: "8px", style: je.b, children: b("Close Window") })] })] })
                },
                Ct = function(e) {
                    var t = e.earnings,
                        n = e.earningToken,
                        a = e.sousId,
                        c = e.masterChefIndex,
                        r = e.isBnbPool,
                        i = e.earningTokenPrice,
                        s = e.isLoading,
                        o = void 0 !== s && s,
                        l = Object(V.b)().t,
                        d = Object(ke.c)(t, n.decimals),
                        b = Object(ke.a)(d, 3, 3),
                        u = Object(ke.c)(t.multipliedBy(i), n.decimals),
                        j = Object(ke.e)(t, n.decimals),
                        x = t.toNumber() > 0,
                        p = 0 === a,
                        h = Object(N.Ab)(Object(me.jsx)(It, { formattedBalance: b, fullBalance: j, earningToken: n, earningsDollarValue: u, sousId: a, masterChefIndex: c, isBnbPool: r, isCompoundPool: p })),
                        m = Object(F.a)(h, 1)[0];
                    return Object(me.jsxs)(N.F, { justifyContent: "space-between", alignItems: "center", mb: "16px", flexDirection: "column", children: [Object(me.jsx)(N.F, { flexDirection: "row", children: o ? Object(me.jsx)(N.fb, { width: "80px", height: "48px" }) : Object(me.jsx)(me.Fragment, { children: x ? Object(me.jsx)(me.Fragment, { children: i > 0 && Object(me.jsx)(xe.a, { display: "inline", fontSize: "20px", color: "textSubtle", decimals: 2, prefix: "$", value: u }) }) : Object(me.jsx)(me.Fragment, { children: Object(me.jsx)(N.lb, { fontSize: "20px", color: "textDisabled", children: "$0" }) }) }) }), Object(me.jsx)(N.l, { disabled: !x, onClick: m, style: je.b, children: l("Harvest") })] })
                },
                Tt = 3600,
                Ft = 86400,
                At = function(e) {
                    var t = Math.abs(e),
                        n = { years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
                    return t >= Ft && (n.days = Math.floor(t / Ft), t -= n.days * Ft), t >= Tt && (n.hours = Math.floor(t / Tt), t -= n.hours * Tt), t >= 60 && (n.minutes = Math.floor(t / 60), t -= 60 * n.minutes), n.seconds = t, n
                },
                Dt = function(e) {
                    var t = e.secondsRemaining,
                        n = Object(V.b)().t,
                        a = At(t),
                        c = a.days,
                        r = a.hours,
                        i = a.minutes;
                    return Object(me.jsx)(N.lb, { fontSize: "14px", children: n("%day%d : %hour%h : %minute%m", { day: c, hour: r, minute: i }) })
                },
                Et = Object(R.default)(N.lb)(f || (f = Object(A.a)(["\n  display: inline;\n"]))),
                Bt = function(e) {
                    var t = e.pool,
                        n = e.stakedBalance,
                        a = Object(Y.a)(),
                        c = a.chainId,
                        r = a.library.getSigner(),
                        i = t.sousId,
                        s = t.stakingToken,
                        o = t.earningToken,
                        l = t.harvest,
                        d = t.poolCategory,
                        b = t.userData,
                        u = t.earningTokenPrice,
                        j = t.masterChefIndex,
                        x = t.unlockedReward,
                        p = t.poolType,
                        h = t.lockTime,
                        m = d === Le.a.BINANCE,
                        O = Object(V.b)().t,
                        f = null !== b && void 0 !== b && b.allowance ? new L.a(b.allowance) : ue.c,
                        g = null !== b && void 0 !== b && b.stakingTokenBalance ? new L.a(b.stakingTokenBalance) : ue.c,
                        k = null !== b && void 0 !== b && b.pendingReward ? new L.a(b.pendingReward) : ue.c,
                        w = !f.gt(0) && !m,
                        y = n.gt(0),
                        v = !b,
                        S = Object(B.useState)(!0),
                        I = Object(F.a)(S, 2),
                        T = I[0],
                        A = I[1],
                        D = Object(B.useState)(0),
                        P = Object(F.a)(D, 2),
                        z = P[0],
                        R = P[1],
                        M = Object(B.useState)(0),
                        U = Object(F.a)(M, 2),
                        Q = U[0],
                        H = U[1],
                        X = Object(B.useMemo)((function() { return Object(Ne.C)(r, c, j) }), [r, c, j]);
                    Object(B.useEffect)((function() {
                        var e, n = new AbortController,
                            a = function() {
                                var t = Object(C.a)(E.a.mark((function t() {
                                    var n, r, i, s, o, l, d, b, u;
                                    return E.a.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return (n = []).push({ address: X.address, name: "stakingAvailable", params: [] }), n.push({ address: X.address, name: "stakingTime", params: [] }), n.push({ address: X.address, name: "stakingPeriods", params: [] }), n.push({ address: X.address, name: "lockPeriods", params: [] }), n.push({ address: X.address, name: "penaltyFee", params: [] }), t.next = 8, Object(Ue.a)(re, n, c);
                                            case 8:
                                                r = t.sent, i = r[0][0], s = parseInt(r[1][0].toString()), o = parseInt(r[2][0].toString()), l = parseInt(r[3][0].toString()), d = Math.floor((new Date).getTime() / 1e3), b = parseInt(r[4][0].toString()), d < s + o ? R(s - d) : (s += o, u = Math.ceil((d - s) / l), R((s += l * u) - d)), A(i), H(b), e = setTimeout((function() { return a() }), 6e4);
                                            case 19:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })));
                                return function() { return t.apply(this, arguments) }
                            }();
                        return null !== t && void 0 !== t && t.isLock && null !== t && void 0 !== t && t.isLock[c] && a(),
                            function() { clearTimeout(e), n.abort() }
                    }), [p, c]);
                    var G = p === Le.b.STANDARD || p === Le.b.MINT || Number(x) > 0 || !!(1e3 * Number(h) < (new Date).getTime() && Number(b.pendingReward) > 0);
                    return Object(me.jsx)(N.F, { flexDirection: "column", children: Object(me.jsxs)(N.F, { flexDirection: "column", alignItems: "center", children: [l && Object(me.jsxs)(me.Fragment, { children: [Object(me.jsxs)(N.k, { display: "inline", children: [Object(me.jsx)(Et, { color: "white", textTransform: "uppercase", fontSize: "14px", children: "".concat(o[c].symbol, " ") }), Object(me.jsx)(Et, { color: "white", textTransform: "uppercase", fontSize: "14px", children: O("Earned") })] }), G ? Object(me.jsx)(Ct, { earnings: k, earningToken: o[c], sousId: i, masterChefIndex: j, earningTokenPrice: u, isBnbPool: m, isLoading: v }) : null] }), !T && Object(me.jsxs)(N.lb, { fontSize: "12px", textAlign: "center", children: ["Staking Available in ", Object(me.jsx)(Dt, { secondsRemaining: z }), "Withdraw in this periods charge ", "".concat(Q, "%"), " of penalty Fee!"] }), Object(me.jsxs)(N.k, { display: "inline", mb: "5px", children: [Object(me.jsxs)(Et, { color: "white", textTransform: "uppercase", fontSize: "14px", children: [y ? s[c].symbol : O("Stake"), " "] }), Object(me.jsx)(Et, { color: "white", textTransform: "uppercase", fontSize: "14px", children: y ? O("Staked") : "".concat(s[c].symbol) })] }), w ? Object(me.jsx)(Ke, { pool: t, isLoading: v }) : Object(me.jsx)(Ot, { stakingAvailable: T, isLoading: v, pool: t, stakingTokenBalance: g, stakedBalance: n, isBnbPool: m, isStaked: y })] }) })
                },
                Pt = Object(R.default)(N.o)(g || (g = Object(A.a)(["\n  background-color: transparent;\n"]))),
                zt = R.default.div(k || (k = Object(A.a)(["\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  height: 100%;\n"]))),
                Rt = function(e) {
                    var t = e.pool,
                        n = e.account,
                        a = e.chainId,
                        c = t.sousId,
                        r = t.stakingToken,
                        i = t.earningToken,
                        s = t.isFinished,
                        o = t.userData,
                        l = Object(V.b)().t,
                        d = Object(R.useTheme)(),
                        b = null !== o && void 0 !== o && o.stakedBalance ? new L.a(o.stakedBalance) : ue.c,
                        u = b.gt(0),
                        j = "";
                    return t.hasOwnProperty("addTitles") && t.addTitles[a] && (j = t.addTitles[a]), Object(me.jsx)(fe, { isFinished: s && 0 !== c, ribbon: s && Object(me.jsx)(N.r, { variantColor: "textDisabled", text: l("Finished") }), children: Object(me.jsxs)(zt, { children: [Object(me.jsx)(Me, { isStaking: u, earningToken: a ? i[a] : i[de.ChainId.MAINNET], stakingToken: a ? r[a] : r[de.ChainId.MAINNET], isFinished: s && 0 !== c, addTitle: j }), Object(me.jsxs)(Pt, { children: [Object(me.jsx)(Oe, { pool: t }), Object(me.jsx)(N.F, { mt: "24px", flexDirection: "column", alignItems: "center", style: {}, children: n ? Object(me.jsx)(Bt, { pool: t, stakedBalance: b }) : Object(me.jsxs)(me.Fragment, { children: [Object(me.jsx)(N.lb, { mb: "10px", textTransform: "uppercase", fontSize: "14px", color: "white", children: l("Start earning") }), Object(me.jsx)(be.a, { style: Object(T.a)(Object(T.a)({}, je.a), {}, { background: d.custom.gradient }) })] }) })] }), Object(me.jsx)(Be, { pool: t, account: n, chainId: a })] }) })
                },
                Mt = n(119),
                Lt = function(e) {
                    var t = e.masterChefIndex,
                        n = e.isLoading,
                        a = void 0 !== n && n,
                        c = e.setLastUpdated,
                        r = Object(V.b)().t,
                        i = Object(R.useTheme)(),
                        s = We(c, t),
                        o = s.handleApprove,
                        l = s.requestedApproval;
                    return Object(me.jsx)(me.Fragment, { children: a ? Object(me.jsx)(N.fb, { width: "100%", height: "52px" }) : Object(me.jsx)(N.l, { isLoading: l, endIcon: l ? Object(me.jsx)(N.g, { spin: !0, color: "currentColor" }) : null, disabled: l, onClick: o, style: Object(T.a)(Object(T.a)({}, je.a), {}, { background: i.custom.gradient }), children: r("Enable") }) })
                },
                Nt = n(59),
                Ut = n(15),
                Vt = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 259200,
                        a = Object(B.useState)(null),
                        c = Object(F.a)(a, 2),
                        r = c[0],
                        i = c[1],
                        s = Object(B.useState)(!1),
                        o = Object(F.a)(s, 2),
                        l = o[0],
                        d = o[1],
                        b = Object(B.useState)(Math.floor(Date.now() / 1e3)),
                        u = Object(F.a)(b, 2),
                        j = u[0],
                        x = u[1],
                        p = Object(Y.a)(),
                        h = p.chainId;
                    return Object(B.useEffect)((function() {
                        var a = e + n - j,
                            c = t.gt(0) && a > 0,
                            r = setInterval((function() { x((function(e) { return e + 1 })) }), 1e3);
                        return c ? (i(a), d(!0)) : (d(!1), clearInterval(r)),
                            function() { return clearInterval(r) }
                    }), [e, n, i, j, t]), h !== de.ChainId.MAINNET && h !== de.ChainId.ETHEREUM && h !== de.ChainId.BRISE && h !== de.ChainId.TESTNET && h !== de.ChainId.TESTBRISE && h !== de.ChainId.CRONOS ? {} : { hasUnstakingFee: l, secondsRemaining: r }
                },
                Qt = n(79),
                Ht = function(e) {
                    var t, n = e.masterChefIndex,
                        a = e.isTableVariant,
                        c = Object(V.b)().t,
                        r = Object(Mt.c)(),
                        i = r.account,
                        s = r.chainId,
                        o = Qt.a.find((function(e) { return 0 === e.sousId && e.masterChefIndex === n })),
                        l = J(n),
                        d = l.userData,
                        b = d.lastDepositedTime,
                        u = d.userShares,
                        j = l.fees,
                        x = j.withdrawalFee,
                        p = j.withdrawalFeePeriod,
                        h = p / 60 / 60,
                        m = p / 60 / 60 / 24,
                        O = x / 100 || "-",
                        f = Object(N.Cb)(Object(me.jsxs)(me.Fragment, { children: [Object(me.jsx)(N.lb, { bold: !0, mb: "4px", children: c("Unstaking fee: %fee%%", { fee: O }) }), Object(me.jsx)(N.lb, { children: c("Only applies within ".concat(m, " days of staking. Unstaking after ").concat(m, " days will not include a fee. Timer resets every time you stake new ").concat(null === (t = o.stakingToken[s]) || void 0 === t ? void 0 : t.symbol, " in the pool.")) })] }), { placement: "bottom-start" }),
                        g = f.targetRef,
                        k = f.tooltip,
                        w = f.tooltipVisible,
                        y = Vt(parseInt(b, 10), u, p),
                        v = y.secondsRemaining,
                        S = y.hasUnstakingFee,
                        I = b && !S && u.gt(0),
                        C = i && b && S;
                    return Object(me.jsxs)(N.F, { alignItems: a ? "flex-start" : "center", justifyContent: "space-between", flexDirection: a ? "column" : "row", children: [w && k, Object(me.jsxs)(N.rb, { ref: g, small: !0, color: "white", children: [I ? "0" : O, "% ", I ? c("Unstaking Fee").toLowerCase() : c(C ? "unstaking fee until" : "unstaking fee if withdrawn within ".concat(h, "h"))] }), C && Object(me.jsx)(Dt, { secondsRemaining: v })] })
                },
                Yt = function(e) {
                    var t = e.stakingTokenSymbol,
                        n = e.stakeAmount,
                        a = e.masterChefIndex,
                        c = Object(V.b)().t,
                        r = J(a).fees.withdrawalFee / 100,
                        i = (parseFloat(n) * (r / 100)).toFixed(4),
                        s = Object(N.Cb)(Object(me.jsxs)(me.Fragment, { children: [Object(me.jsx)(N.lb, { bold: !0, mb: "4px", children: c("Unstaking fee: %fee%%", { fee: r }) }), Object(me.jsx)(N.lb, { children: c("Only applies within 3 days of staking. Unstaking after 3 days will not include a fee. Timer resets every time you stake in the pool.") })] }), { placement: "top-start" }),
                        o = s.targetRef,
                        l = s.tooltip,
                        d = s.tooltipVisible;
                    return Object(me.jsxs)(me.Fragment, { children: [Object(me.jsxs)(N.F, { mt: "24px", alignItems: "center", justifyContent: "space-between", children: [d && l, Object(me.jsx)(N.rb, { ref: o, small: !0, children: c("Unstaking Fee") }), Object(me.jsxs)(N.lb, { fontSize: "14px", children: [n ? i : "-", " ", t] })] }), Object(me.jsx)(Ht, { masterChefIndex: a })] })
                },
                Xt = Object(R.default)(N.l)(w || (w = Object(A.a)(["\n  flex-grow: 1;\n"]))),
                Gt = function(e) {
                    var t = e.pool,
                        n = e.stakingMax,
                        a = e.isRemovingStake,
                        c = void 0 !== a && a,
                        r = e.onDismiss,
                        i = Object(W.b)(),
                        s = t.stakingToken,
                        o = Object(Y.a)(),
                        l = o.account,
                        d = o.chainId,
                        b = Object(Ve.e)(t.masterChefIndex),
                        u = J(t.masterChefIndex),
                        j = u.userData,
                        x = j.lastDepositedTime,
                        p = j.userShares,
                        h = u.pricePerFullShare,
                        m = Object(V.b)().t,
                        O = Object(_e.a)().theme,
                        f = Object(He.a)(),
                        g = f.toastSuccess,
                        k = f.toastError,
                        w = Object(B.useState)(!1),
                        y = Object(F.a)(w, 2),
                        v = y[0],
                        S = y[1],
                        I = Object(B.useState)(""),
                        T = Object(F.a)(I, 2),
                        A = T[0],
                        D = T[1],
                        P = Object(B.useState)(""),
                        z = Object(F.a)(P, 2),
                        R = z[0],
                        M = z[1],
                        U = Object(B.useState)(0),
                        Q = Object(F.a)(U, 2),
                        H = Q[0],
                        X = Q[1],
                        G = Vt(parseInt(x, 10), p).hasUnstakingFee,
                        q = Object(Z.e)(d);
                    Object(B.useEffect)((function() {
                        var e = function() {
                            var e = Object(C.a)(E.a.mark((function e() {
                                var n, a;
                                return E.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (0 !== t.masterChefIndex) { e.next = 4; break }
                                            e.t0 = q, e.next = 9;
                                            break;
                                        case 4:
                                            return e.t1 = L.a, e.next = 7, Object(Nt.e)(t.stakingToken[d].address[d], d);
                                        case 7:
                                            e.t2 = e.sent, e.t0 = new e.t1(e.t2);
                                        case 9:
                                            n = e.t0, a = n.gt(0) && R ? Object(ke.a)(new L.a(R).times(n).toNumber()) : "", D(a);
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() { return e.apply(this, arguments) }
                        }();
                        e()
                    }), [d, q, t, R]);
                    var K = function(e) {
                            if (e > 0) {
                                var t = n.dividedBy(100).multipliedBy(e),
                                    a = Object(ke.e)(t, s[d].decimals, s[d].decimals);
                                M(a)
                            } else M("");
                            X(e)
                        },
                        $ = function() {
                            var e = Object(C.a)(E.a.mark((function e(t) {
                                var n, a, c, o, u;
                                return E.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (S(!0), n = Object(he.a)(t, h, s[d].decimals), a = new L.a("0.000001").times(ue.b.pow(s[d].decimals)), c = p.minus(n.sharesAsBigNumber), !c.lte(a)) { e.next = 29; break }
                                            if (e.prev = 6, d !== Ut.a.BRISE) { e.next = 13; break }
                                            return e.next = 10, b.withdrawAll({ gasLimit: 2920383 });
                                        case 10:
                                            e.t0 = e.sent, e.next = 16;
                                            break;
                                        case 13:
                                            return e.next = 15, b.withdrawAll();
                                        case 15:
                                            e.t0 = e.sent;
                                        case 16:
                                            return o = e.t0, e.next = 19, o.wait();
                                        case 19:
                                            e.sent.status && (g(m("Unstaked!"), m("Your earnings have also been harvested to your wallet")), S(!1), r(), i(Object(_.d)({ account: l, chainId: d }))), e.next = 27;
                                            break;
                                        case 23:
                                            e.prev = 23, e.t1 = e.catch(6), k(m("Error"), m("Please try again. Confirm the transaction and make sure you are paying enough gas!")), S(!1);
                                        case 27:
                                            e.next = 50;
                                            break;
                                        case 29:
                                            if (e.prev = 29, d !== Ut.a.BRISE) { e.next = 36; break }
                                            return e.next = 33, b.withdraw(n.sharesAsBigNumber.decimalPlaces(0).toString(), { gasLimit: 2920383 });
                                        case 33:
                                            e.t2 = e.sent, e.next = 39;
                                            break;
                                        case 36:
                                            return e.next = 38, b.withdraw(n.sharesAsBigNumber.decimalPlaces(0).toString());
                                        case 38:
                                            e.t2 = e.sent;
                                        case 39:
                                            return u = e.t2, e.next = 42, u.wait();
                                        case 42:
                                            e.sent.status && (g(m("Unstaked!"), m("Your earnings have also been harvested to your wallet")), S(!1), r(), i(Object(_.d)({ account: l, chainId: d }))), e.next = 50;
                                            break;
                                        case 46:
                                            e.prev = 46, e.t3 = e.catch(29), k(m("Error"), m("Please try again. Confirm the transaction and make sure you are paying enough gas!")), S(!1);
                                        case 50:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [6, 23],
                                    [29, 46]
                                ])
                            })));
                            return function(t) { return e.apply(this, arguments) }
                        }(),
                        ee = function() {
                            var e = Object(C.a)(E.a.mark((function e(t) {
                                var n;
                                return E.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (S(!0), e.prev = 1, d !== Ut.a.BRISE) { e.next = 8; break }
                                            return e.next = 5, b.deposit(t.toString(), { gasLimit: 2920383 });
                                        case 5:
                                            e.t0 = e.sent, e.next = 11;
                                            break;
                                        case 8:
                                            return e.next = 10, b.deposit(t.toString());
                                        case 10:
                                            e.t0 = e.sent;
                                        case 11:
                                            return n = e.t0, e.next = 14, n.wait();
                                        case 14:
                                            e.sent.status && (g(m("Staked!"), m("Your funds have been staked in the pool")), S(!1), r(), i(Object(_.d)({ account: l, chainId: d }))), e.next = 22;
                                            break;
                                        case 18:
                                            e.prev = 18, e.t1 = e.catch(1), k(m("Error"), m("Please try again. Confirm the transaction and make sure you are paying enough gas!")), S(!1);
                                        case 22:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [1, 18]
                                ])
                            })));
                            return function(t) { return e.apply(this, arguments) }
                        }(),
                        te = function() {
                            var e = Object(C.a)(E.a.mark((function e() {
                                var t;
                                return E.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            t = Object(ke.d)(new L.a(R), s[d].decimals), c ? $(t) : ee(t);
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() { return e.apply(this, arguments) }
                        }();
                    return Object(me.jsxs)(N.T, {
                        title: m(c ? "Unstake" : "Stake in Pool"),
                        onDismiss: r,
                        headerBackground: O.colors.gradients.cardHeader,
                        children: [Object(me.jsxs)(N.F, { alignItems: "center", justifyContent: "space-between", mb: "8px", children: [Object(me.jsxs)(N.lb, { bold: !0, children: [m(c ? "Unstake" : "Stake"), ":"] }), Object(me.jsxs)(N.F, { alignItems: "center", minWidth: "70px", children: [Object(me.jsx)(N.L, { src: "/images/tokens/".concat(d, "/").concat(Object(ce.a)(s[d].address, d).toLowerCase(), ".png"), width: 24, height: 24, alt: s[d].symbol }), Object(me.jsx)(N.lb, { ml: "4px", bold: !0, children: s[d].symbol })] })] }), Object(me.jsx)(N.h, {
                            value: R,
                            onUserInput: function(e) {
                                if (e) {
                                    var t = new L.a(e).multipliedBy(ue.b.pow(s[d].decimals)),
                                        a = Math.floor(t.dividedBy(n).multipliedBy(100).toNumber());
                                    X(a > 100 ? 100 : a)
                                } else X(0);
                                M(e)
                            },
                            currencyValue: A && "~".concat(A || 0, " USD"),
                            decimals: s[d].decimals
                        }), Object(me.jsx)(N.lb, { mt: "8px", ml: "auto", color: "textSubtle", fontSize: "12px", mb: "8px", children: m("Balance: %balance%", { balance: Object(ke.e)(n, s[d].decimals) }) }), Object(me.jsx)(et.a, { min: 0, max: 99, value: H, onChange: function(e) { return K(Math.ceil(e)) }, name: "stake", valueLabel: "".concat(H, "%"), step: 1 }), Object(me.jsxs)(N.F, { alignItems: "center", justifyContent: "space-between", mt: "8px", children: [Object(me.jsx)(Xt, { scale: "xs", mx: "2px", p: "4px 16px", variant: "tertiary", onClick: function() { return K(25) }, children: "25%" }), Object(me.jsx)(Xt, { scale: "xs", mx: "2px", p: "4px 16px", variant: "tertiary", onClick: function() { return K(50) }, children: "50%" }), Object(me.jsx)(Xt, { scale: "xs", mx: "2px", p: "4px 16px", variant: "tertiary", onClick: function() { return K(75) }, children: "75%" }), Object(me.jsx)(Xt, { scale: "xs", mx: "2px", p: "4px 16px", variant: "tertiary", onClick: function() { return K(100) }, children: m("Max") })] }), c && G && Object(me.jsx)(Yt, { stakingTokenSymbol: s[d].symbol, stakeAmount: R, masterChefIndex: t.masterChefIndex }), Object(me.jsx)(N.l, { isLoading: v, endIcon: v ? Object(me.jsx)(N.g, { spin: !0, color: "currentColor" }) : null, onClick: te, disabled: !R || 0 === parseFloat(R), mt: "24px", children: m(v ? "Confirming" : "Confirm") }), !c && Object(me.jsx)(N.l, { mt: "8px", as: "a", external: !0, href: "/swap", variant: "secondary", children: m("Get %symbol%", { symbol: s[d].symbol }) })]
                    })
                },
                Wt = function(e) {
                    var t = e.pool,
                        n = e.stakingTokenBalance,
                        a = J(t.masterChefIndex),
                        c = a.userData.userShares,
                        r = a.pricePerFullShare,
                        i = t.stakingToken,
                        s = Object(Y.a)().chainId,
                        o = Object(he.b)(c, r, i[s].decimals),
                        l = o.cakeAsBigNumber,
                        d = o.cakeAsNumberBalance,
                        b = Object(Z.e)(s),
                        u = b.gt(0) ? Object(ke.c)(l.multipliedBy(b), i[s].decimals) : 0,
                        j = Object(N.Ab)(Object(me.jsx)(Je, { tokenSymbol: i[s].symbol })),
                        x = Object(F.a)(j, 1)[0],
                        p = Object(N.Ab)(Object(me.jsx)(Gt, { stakingMax: n, pool: t })),
                        h = Object(F.a)(p, 1)[0],
                        m = Object(N.Ab)(Object(me.jsx)(Gt, { stakingMax: l, pool: t, isRemovingStake: !0 })),
                        O = Object(F.a)(m, 1)[0];
                    return Object(me.jsxs)(N.F, { justifyContent: "space-between", alignItems: "center", width: "100%", children: [Object(me.jsxs)(N.F, { flexDirection: "column", children: [Object(me.jsx)(xe.a, { fontSize: "20px", bold: !0, value: d, decimals: 5 }), Object(me.jsx)(N.lb, { fontSize: "12px", color: "textSubtle", children: b.gt(0) ? Object(me.jsx)(xe.a, { value: u, fontSize: "12px", color: "textSubtle", decimals: 2, prefix: "~", unit: " USD" }) : Object(me.jsx)(N.fb, { mt: "1px", height: 16, width: 64 }) })] }), Object(me.jsxs)(N.F, { children: [Object(me.jsx)(N.K, { variant: "secondary", scale: "sm", onClick: O, mr: "6px", children: Object(me.jsx)(N.S, { color: "primary", width: "24px" }) }), Object(me.jsx)(N.K, { variant: "secondary", scale: "sm", onClick: n.gt(0) ? h : x, children: Object(me.jsx)(N.a, { color: "primary", width: "24px", height: "24px" }) })] })] })
                },
                qt = function(e) {
                    var t = e.pool,
                        n = e.stakingTokenBalance,
                        a = e.accountHasSharesStaked,
                        c = e.isLoading,
                        r = void 0 !== c && c,
                        i = Object(Y.a)().chainId,
                        s = t.stakingToken,
                        o = Object(V.b)().t,
                        l = Object(N.Ab)(Object(me.jsx)(Je, { tokenSymbol: s[i].symbol })),
                        d = Object(F.a)(l, 1)[0],
                        b = Object(N.Ab)(Object(me.jsx)(Gt, { stakingMax: n, pool: t })),
                        u = Object(F.a)(b, 1)[0],
                        j = Object(R.useTheme)();
                    return Object(me.jsx)(N.F, { flexDirection: "column", width: "100%", alignItems: "center", children: r ? Object(me.jsx)(N.fb, { width: "100%", height: "52px" }) : a ? Object(me.jsx)(Wt, { pool: t, stakingTokenBalance: n }) : Object(me.jsx)(N.l, { style: Object(T.a)(Object(T.a)({}, je.a), {}, { background: j.custom.gradient }), onClick: n.gt(0) ? u : d, children: o("Stake") }) })
                },
                Kt = Object(R.default)(N.lb)(y || (y = Object(A.a)(["\n  display: inline;\n"]))),
                _t = function(e) {
                    var t = e.pool,
                        n = e.accountHasSharesStaked,
                        a = e.isLoading,
                        c = Object(Y.a)().chainId,
                        r = t.stakingToken,
                        i = t.userData,
                        s = Object(V.b)().t,
                        o = null !== i && void 0 !== i && i.stakingTokenBalance ? new L.a(i.stakingTokenBalance) : ue.c,
                        l = qe(t.masterChefIndex),
                        d = l.isVaultApproved,
                        b = l.setLastUpdated;
                    return Object(me.jsx)(N.F, { flexDirection: "column", width: "100%", children: Object(me.jsxs)(N.F, { flexDirection: "column", alignItems: "center", children: [Object(me.jsxs)(N.k, { display: "inline", mb: "10px", children: [Object(me.jsxs)(Kt, { color: "white", textTransform: "uppercase", fontSize: "14px", children: [n ? r[c].symbol : s("Stake"), " "] }), Object(me.jsx)(Kt, { color: "white", textTransform: "uppercase", fontSize: "14px", children: n ? s("Staked (compounding)") : "".concat(r[c].symbol) })] }), d ? Object(me.jsx)(qt, { isLoading: a, pool: t, stakingTokenBalance: o, accountHasSharesStaked: n }) : Object(me.jsx)(Lt, { masterChefIndex: t.masterChefIndex, isLoading: a, setLastUpdated: b })] }) })
                },
                $t = function(e) {
                    var t = e.cakeToDisplay,
                        n = e.dollarValueToDisplay,
                        a = e.dateStringToDisplay,
                        c = Object(V.b)().t,
                        r = Object(N.Cb)(Object(me.jsxs)(me.Fragment, { children: [Object(me.jsx)(xe.a, { fontSize: "16px", value: t, decimals: 3, bold: !0, unit: " CAKE" }), Object(me.jsx)(xe.a, { fontSize: "16px", value: n, decimals: 2, bold: !0, prefix: "~$" }), c("Earned since your last action"), Object(me.jsx)(N.lb, { children: a })] }), { placement: "bottom-end" }),
                        i = r.targetRef,
                        s = r.tooltip,
                        o = r.tooltipVisible;
                    return Object(me.jsxs)(me.Fragment, { children: [o && s, Object(me.jsx)(N.rb, { ref: i, small: !0, children: Object(me.jsx)(xe.a, { fontSize: "14px", value: t }) })] })
                },
                Jt = function(e) {
                    var t = e.masterChefIndex,
                        n = e.earningToken,
                        a = Object(V.b)().t,
                        c = Object(Y.a)(),
                        r = c.account,
                        i = c.chainId,
                        s = J(t),
                        o = s.pricePerFullShare,
                        l = s.userData,
                        d = l.cakeAtLastUserAction,
                        b = l.userShares,
                        u = l.lastUserActionTime,
                        j = Object(Z.e)(i),
                        x = Object(he.d)(r, d, b, o, j.toNumber(), 18),
                        p = x.hasAutoEarnings,
                        h = x.autoCakeToDisplay,
                        m = x.autoUsdToDisplay,
                        O = u && 1e3 * parseInt(u),
                        f = new Date(O).toLocaleString();
                    return Object(me.jsxs)(N.F, { alignItems: "center", justifyContent: "space-between", children: [Object(me.jsx)(N.lb, { color: "white", fontSize: "14px", children: "".concat(a("Recent %symbol% profit", { symbol: null === n || void 0 === n ? void 0 : n.symbol }), ":") }), p && Object(me.jsx)($t, { cakeToDisplay: h, dollarValueToDisplay: m, dateStringToDisplay: f })] })
                },
                Zt = Object(R.default)(N.o)(v || (v = Object(A.a)(["\n  min-height: ", ";\n"])), (function(e) { return e.isLoading ? "0" : "254px" })),
                en = function(e) {
                    var t = e.pool,
                        n = e.showStakedOnly,
                        a = e.chainId,
                        c = Object(V.b)().t,
                        r = Object(Mt.c)().account,
                        i = J(t.masterChefIndex),
                        s = i.userData,
                        o = s.userShares,
                        l = s.isLoading,
                        d = i.fees.performanceFee,
                        b = Object(R.useTheme)(),
                        u = o && o.gt(0),
                        j = !t.userData || l,
                        x = d && d / 100,
                        p = "";
                    return t.hasOwnProperty("addTitles") && t.addTitles[a] && (p = t.addTitles[a]), n && !u ? null : Object(me.jsxs)(fe, { isActive: !0, children: [Object(me.jsx)(Me, { isStaking: u, isAutoVault: !0, earningToken: t.earningToken[a], stakingToken: t.stakingToken[a], addTitle: p }), Object(me.jsxs)(Zt, { isLoading: j, children: [Object(me.jsx)(Oe, { pool: t, performanceFee: x }), Object(me.jsx)(N.k, { mt: "24px", children: Object(me.jsx)(Jt, { masterChefIndex: t.masterChefIndex, earningToken: t.earningToken[a] }) }), Object(me.jsx)(N.k, { mt: "8px", children: Object(me.jsx)(Ht, { masterChefIndex: t.masterChefIndex }) }), Object(me.jsx)(N.F, { mt: "32px", flexDirection: "column", alignItems: "center", children: r ? Object(me.jsx)(_t, { pool: t, accountHasSharesStaked: u, isLoading: j }) : Object(me.jsxs)(me.Fragment, { children: [Object(me.jsx)(N.lb, { mb: "10px", textTransform: "uppercase", fontSize: "14px", color: "white", children: c("Start earning") }), Object(me.jsx)(be.a, { style: Object(T.a)(Object(T.a)({}, je.a), {}, { background: b.custom.gradient }) })] }) })] }), Object(me.jsx)(Be, { pool: t, account: r, chainId: a })] })
                },
                tn = n(514),
                nn = n(515);
            ! function(e) { e.TABLE = "TABLE", e.CARD = "CARD" }(I || (I = {}));
            var an, cn, rn, sn, on, ln, dn, bn, un, jn, xn, pn, hn, mn, On, fn, gn, kn, wn, yn, vn, Sn, In, Cn, Tn, Fn, An, Dn, En, Bn, Pn, zn, Rn, Mn, Ln, Nn, Un, Vn, Qn, Hn, Yn, Xn, Gn, Wn, qn, Kn, _n, $n, Jn, Zn, ea, ta, na, aa, ca, ra, ia, sa, oa, la, da = R.default.div(S || (S = Object(A.a)(["\n  margin-right: 0px;\n  margin-left: -8px;\n\n  ", " {\n    margin-left: 0;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                ba = function(e) {
                    var t = e.viewMode,
                        n = e.onToggle,
                        a = function(e) { t !== e && n(e) };
                    return Object(me.jsxs)(da, { children: [Object(me.jsx)(N.K, { variant: "text", scale: "sm", id: "clickPoolCardView", onClick: function() { return a(I.CARD) }, children: Object(me.jsx)(N.s, { color: t === I.CARD ? "primary" : "textDisabled" }) }), Object(me.jsx)(N.K, { variant: "text", scale: "sm", id: "clickPoolTableView", onClick: function() { return a(I.TABLE) }, children: Object(me.jsx)(N.P, { color: t === I.TABLE ? "primary" : "textDisabled" }) })] })
                },
                ua = R.default.div(an || (an = Object(A.a)(["\n  display: flex;\n  align-items: center;\n  margin: ", ";\n\n  ", " {\n    margin-left: 8px;\n  }\n"])), (function(e) { return e.isMobile ? "0px 25px 0px 0px" : "0px 25px 0px 25px" }), N.lb),
                ja = R.default.div(cn || (cn = Object(A.a)(["\n  flex-wrap: wrap;\n  justify-content: center;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  background: ", ";\n  padding: 15px;\n  margin: 21px 0px;\n  border-radius: 3px;\n  > div {\n    padding: 8px 0px;\n  }\n\n  ", " {\n    justify-content: center;\n    width: auto;\n\n    > div {\n      padding: 0;\n    }\n  }\n"])), (function(e) { return e.theme.custom.tertiary }), (function(e) { return e.theme.mediaQueries.sm })),
                xa = Object(R.default)(N.F)(rn || (rn = Object(A.a)(["\n  height: 47px;\n  margin: 12px 0;\n  margin-right: ", ";\n  width: ", ";\n  background: ", ";\n  > div {\n    flex: 1;\n    height: 47px;\n    border-radius: 5px;\n    box-sizing: border-box;\n    background: ", ";\n    > div {\n      height: 47px;\n      > div {\n        color: white;\n      }\n    }\n  }\n"])), (function(e) { return e.isMobile ? "0" : "38px" }), (function(e) { return e.isMobile ? "100%" : "auto" }), (function(e) { return e.theme.custom.tertiary }), (function(e) { return e.theme.custom.tertiary })),
                pa = R.default.div(sn || (sn = Object(A.a)(["\n  flex: 1;\n  position: relative;\n  padding: 0 20px;\n  z-index: 3;\n  ", " {\n    min-width: 420px;\n  }\n  & input {\n    background: transparent;\n    border: none;\n    width: 100%;\n    box-shadow: none;\n    outline: none;\n    color: white;\n    font-size: 16px;\n    &::placeholder {\n      color: white;\n    }\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                ha = (R.default.div(on || (on = Object(A.a)(["\n  position: absolute;\n  width: 100%;\n  background: #131313;\n  color: #eee;\n  margin-top: 12px;\n  overflow-y: auto;\n  max-height: 90vh;\n  & a {\n    color: white !important;\n  }\n  & .selectedItem {\n    background: rgba(0, 0, 0, 0.4);\n  }\n  ", " {\n    max-height: 600px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })), Object(R.default)(N.lb)(ln || (ln = Object(A.a)(["\n  padding: 0 4px;\n  width: ", ";\n  height: 47px;\n  text-overflow: ellipsis;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  background: ", ";\n  // border: 1px solid ", ";\n  border-radius: 5px;\n  margin: 12px 0;\n  & button:last-child {\n    background: ", ";\n  }\n  ", " {\n    flex: 1;\n    margin: 0;\n    // border: 1px solid ", ";\n    border-radius: 5px;\n  }\n"])), (function(e) { return e.isMobile ? "100%" : "auto" }), (function(e) { return e.theme.custom.background }), (function(e) { return e.theme.custom.currencySelectButton }), (function(e) { return e.theme.custom.pancakePrimary }), (function(e) { return e.theme.mediaQueries.md }), (function(e) { return e.theme.custom.currencySelectButton }))),
                ma = Object(R.default)(N.K)(dn || (dn = Object(A.a)(["\n  background-color: transparent !important;\n  margin: 0px 3px;\n  border: none;\n  outline: none !important;\n"]))),
                Oa = function(e) {
                    var t = e.stakedOnly,
                        n = e.setStakedOnly,
                        a = e.viewMode,
                        c = e.setViewMode,
                        r = e.setSortOption,
                        i = e.setSearchQuery,
                        s = Object(V.b)().t,
                        o = !Object(N.zb)().isXl,
                        l = Object(me.jsx)(ba, { viewMode: a, onToggle: function(e) { return c(e) } }),
                        d = Object(me.jsxs)(ua, { isMobile: o, children: [Object(me.jsx)(N.ob, { checked: t, onChange: function() { return n(!t) }, scale: "sm" }), Object(me.jsxs)(N.lb, { color: "white", children: [" ", s("Staked only")] })] });
                    return Object(me.jsxs)(ja, { children: [Object(me.jsx)(xa, { isMobile: o, children: Object(me.jsx)(tn.a, { options: [{ label: s("Hot"), value: "hot" }, { label: s("APR"), value: "apr" }, { label: s("Earned"), value: "earned" }, { label: s("Total staked"), value: "totalStaked" }], onChange: function(e) { r(e.value) } }) }), Object(me.jsxs)(ha, { isMobile: o, children: [Object(me.jsxs)(pa, { children: [Object(me.jsx)("input", { placeholder: "Search pools", onChange: function(e) { i(e.target.value) } }), !1] }), Object(me.jsx)(ma, { onClick: function() { console.log("search") }, children: Object(me.jsx)(nn.a, { width: "22px", height: "22px", color: Object(R.useTheme)().colors.primary }) })] }), Object(me.jsxs)(N.F, { justifyContent: "center", alignItems: "center", width: o ? "100%" : "auto", height: "47px", children: [d, l] })] })
                },
                fa = n.p + "static/media/StopwatchIcon.72991967.svg",
                ga = R.default.div(bn || (bn = Object(A.a)(["\n  background-color: ", ";\n  height: 1px;\n  margin: 16px auto;\n  width: 100%;\n"])), (function(e) { return e.theme.colors.backgroundDisabled })),
                ka = function(e) {
                    var t = e.onDismiss,
                        n = e.TooltipComponent,
                        a = e.masterChefIndex,
                        c = Object(V.b)().t,
                        r = Object(Y.a)(),
                        i = r.account,
                        s = r.chainId,
                        o = Object(_e.a)().theme,
                        l = Object(He.a)(),
                        d = l.toastError,
                        b = l.toastSuccess,
                        u = Object(Ve.e)(a),
                        j = Object(B.useState)(!1),
                        x = Object(F.a)(j, 2),
                        p = x[0],
                        h = x[1],
                        m = J(a),
                        O = m.estimatedCakeBountyReward,
                        f = m.totalPendingCakeHarvest,
                        g = m.fees.callFee,
                        k = Object(Z.e)(s),
                        w = g / 100,
                        y = Object(ke.c)(f, 18),
                        v = Object(B.useMemo)((function() { return new L.a(O).multipliedBy(k) }), [k, O]),
                        S = v.gte(0),
                        I = !!O && O.gte(0),
                        T = S ? Object(ke.c)(v, 18) : 0,
                        A = I ? Object(ke.c)(O, 18) : 0,
                        D = Object(N.Cb)(Object(me.jsx)(n, { fee: g }), { placement: "bottom", tooltipPadding: { right: 15 } }),
                        P = D.targetRef,
                        z = D.tooltip,
                        R = D.tooltipVisible,
                        M = function() {
                            var e = Object(C.a)(E.a.mark((function e() {
                                var n;
                                return E.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return h(!0), e.prev = 1, e.next = 4, u.harvest();
                                        case 4:
                                            return n = e.sent, e.next = 7, n.wait();
                                        case 7:
                                            e.sent.status && (b(c("Bounty collected!"), c("SPHYNX bounty has been sent to your wallet.")), h(!1), t()), e.next = 15;
                                            break;
                                        case 11:
                                            e.prev = 11, e.t0 = e.catch(1), d(c("Error"), c("Please try again. Confirm the transaction and make sure you are paying enough gas!")), h(!1);
                                        case 15:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [1, 11]
                                ])
                            })));
                            return function() { return e.apply(this, arguments) }
                        }();
                    return Object(me.jsxs)(N.T, { title: c("Claim Bounty"), onDismiss: t, headerBackground: o.colors.gradients.cardHeader, children: [R && z, Object(me.jsxs)(N.F, { alignItems: "flex-start", justifyContent: "space-between", children: [Object(me.jsx)(N.lb, { children: c("You\u2019ll claim") }), Object(me.jsxs)(N.F, { flexDirection: "column", children: [Object(me.jsx)(xe.a, { bold: !0, value: A, decimals: 7, unit: " SPHYNX" }), Object(me.jsx)(N.lb, { fontSize: "12px", color: "textSubtle", children: Object(me.jsx)(xe.a, { fontSize: "12px", color: "textSubtle", value: T, decimals: 2, unit: " USD", prefix: "~" }) })] })] }), Object(me.jsx)(ga, {}), Object(me.jsxs)(N.F, { alignItems: "center", justifyContent: "space-between", children: [Object(me.jsx)(N.lb, { fontSize: "14px", color: "textSubtle", style: { marginRight: "8px" }, children: c("Pool total pending yield") }), Object(me.jsx)(xe.a, { color: "textSubtle", value: y, unit: " SPHYNX" })] }), Object(me.jsxs)(N.F, { alignItems: "center", justifyContent: "space-between", mb: "24px", children: [Object(me.jsx)(N.lb, { fontSize: "14px", color: "textSubtle", children: c("Bounty") }), Object(me.jsxs)(N.lb, { fontSize: "14px", color: "textSubtle", children: [w, "%"] })] }), i ? Object(me.jsx)(N.l, { isLoading: p, disabled: !T || !A || !g, endIcon: p ? Object(me.jsx)(N.g, { spin: !0, color: "currentColor" }) : null, onClick: M, mb: "28px", id: "autoCakeConfirmBounty", children: c(p ? "Confirming" : "Confirm") }) : Object(me.jsx)(be.a, { mb: "28px" }), Object(me.jsxs)(N.F, { justifyContent: "center", alignItems: "center", children: [Object(me.jsx)(N.lb, { fontSize: "16px", bold: !0, color: "textSubtle", mr: "4px", children: c("What\u2019s this?") }), Object(me.jsx)("span", { ref: P, children: Object(me.jsx)(N.I, { color: "textSubtle" }) })] })] })
                },
                wa = Object(R.default)(N.n)(un || (un = Object(A.a)(["\n  width: 100%;\n  flex: 1;\n  background: transparent;\n\n  & > div > div {\n    padding: 24px 0;\n  }\n\n  ", " {\n    min-width: 240px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                ya = Object(R.default)(N.F)(jn || (jn = Object(A.a)(["\n  align-items: center;\n  flex-direction: ", ";\n"])), (function(e) { return e.isMobile ? "column" : "row" })),
                va = Object(R.default)(N.lb)(xn || (xn = Object(A.a)(["\n    font-size: 12px;\n    font-weight: bold;\n    color: white;\n    margin-right: 4px;\n    text-align: center;\n  ", " {\n    font-size: 15px;\n  }\n  ", " {\n    font-size: 20px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.xs }), (function(e) { return e.theme.mediaQueries.sm })),
                Sa = Object(R.default)(N.lb)(pn || (pn = Object(A.a)(["\n  color: white;\n"]))),
                Ia = function() {
                    var e = Object(Y.a)().chainId,
                        t = Object(V.b)().t,
                        n = Object(N.zb)().isXl,
                        a = Object(R.useTheme)(),
                        c = !n,
                        r = J(0),
                        i = r.estimatedCakeBountyReward,
                        s = r.fees.callFee,
                        o = Object(Z.e)(e),
                        l = Object(B.useMemo)((function() { return new L.a(i).multipliedBy(o) }), [o, i]),
                        d = l.gte(0),
                        b = !!i && i.gte(0),
                        u = d ? Object(ke.c)(l, 18) : 0,
                        j = b ? Object(ke.c)(i, 18) : 0,
                        x = function(e) { var n = e.fee; return Object(me.jsxs)(me.Fragment, { children: [Object(me.jsx)(Sa, { mb: "16px", children: t("This bounty is given as a reward for providing a service to other users.") }), Object(me.jsx)(Sa, { mb: "16px", children: t("Whenever you successfully claim the bounty, you\u2019re also helping out by activating the Auto SPHYNX Pool\u2019s compounding function for everyone.") }), Object(me.jsx)(Sa, { style: { fontWeight: "bold" }, children: t("Auto-Compound Bounty: %fee%% of all Auto SPHYNX pool users pending yield", { fee: n / 100 }) })] }) },
                        p = Object(N.Ab)(Object(me.jsx)(ka, { TooltipComponent: x, masterChefIndex: 0 })),
                        h = Object(F.a)(p, 1)[0],
                        m = Object(N.Cb)(Object(me.jsx)(x, { fee: s }), { placement: "bottom-end", tooltipOffset: [20, 10] }),
                        O = m.targetRef,
                        f = m.tooltip,
                        g = m.tooltipVisible;
                    return Object(me.jsxs)(me.Fragment, { children: [g && f, Object(me.jsx)(wa, { background: "transparent", children: Object(me.jsx)(N.o, { children: Object(me.jsxs)(N.F, { flexDirection: c ? "column" : "row", alignItems: "center", children: [Object(me.jsx)(N.F, { flexGrow: 1, style: { borderRight: "".concat(c ? "0px" : "1px", " solid ").concat(a.custom.divider) }, children: Object(me.jsxs)(ya, { isMobile: c, children: [Object(me.jsx)("img", { src: fa, alt: "Stopwatch Logo", width: c ? "50" : "100" }), Object(me.jsxs)(N.F, { flexDirection: "column", children: [Object(me.jsxs)(N.F, { alignItems: "center", mb: "2px", children: [Object(me.jsx)(va, { children: t("Auto BSWAP Bounty") }), Object(me.jsx)(N.k, { ref: O, children: Object(me.jsx)(N.I, { color: "white" }) })] }), Object(me.jsx)(N.F, { flexDirection: "column", alignItems: c ? "center" : "star-flex", children: Object(me.jsx)(N.H, { children: b ? Object(me.jsx)(xe.a, { fontSize: c ? "13px" : "15px", color: "white", value: j, decimals: 3 }) : Object(me.jsx)(N.fb, { height: 20, width: 96, mb: "2px" }) }) })] })] }) }), Object(me.jsx)(N.F, { flexGrow: 1, alignItems: "center", justifyContent: "end", children: Object(me.jsx)(N.l, { variant: "primary", disabled: !u || !j || !s, onClick: h, scale: "sm", id: "clickClaimVaultBounty", style: { fontSize: "13px", color: "white", backgroundColor: a.custom.currencySelectButton, borderColor: a.custom.currencySelectButton, borderRadius: "5px" }, children: t("Claim") }) })] }) }) })] })
                },
                Ca = n(1581),
                Ta = R.default.div(hn || (hn = Object(A.a)(["\n  color: black;\n  padding: 24px 8px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n"]))),
                Fa = Object(R.default)(N.F)(mn || (mn = Object(A.a)(["\n  flex-direction: column;\n  justify-content: center;\n  ", " {\n    line-height: 1;\n  }\n"])), N.lb),
                Aa = Ta,
                Da = Object(R.default)(Aa)(On || (On = Object(A.a)(["\n  align-items:  ", ";\n  flex-direction: ", ";\n  flex: 2;\n  ", " {\n  }\n"])), (function(e) { return e.isMobile ? "flex-start" : "center" }), (function(e) { return e.isMobile ? "column" : "row" }), (function(e) { return e.theme.mediaQueries.sm })),
                Ea = function(e) {
                    var t, n, a = e.pool,
                        c = e.chainId,
                        r = void 0 === c ? de.ChainId.MAINNET : c,
                        i = Object(V.b)().t,
                        s = Object(N.zb)(),
                        o = s.isXs,
                        l = s.isXl,
                        d = s.isSm,
                        b = !l,
                        u = a.sousId,
                        j = a.stakingToken,
                        x = a.earningToken,
                        p = a.userData,
                        h = a.isFinished,
                        m = a.isAutoVault,
                        O = J(a.masterChefIndex).userData.userShares,
                        f = O && O.gt(0),
                        g = null === (t = j[r]) || void 0 === t ? void 0 : t.symbol,
                        k = null === (n = x[r]) || void 0 === n ? void 0 : n.symbol,
                        w = (null !== p && void 0 !== p && p.stakedBalance ? new L.a(p.stakedBalance) : ue.c).gt(0),
                        y = 0 === u,
                        v = m ? f : w,
                        S = 0 !== u || 0 === u && !o && !d,
                        I = "";
                    a.hasOwnProperty("addTitles") && a.addTitles[r] && (I = a.addTitles[r]);
                    var C = null !== a && void 0 !== a && a.hasEnd ? "".concat(i("Earn"), " ").concat(k) : "".concat(i("Earn"), " ").concat(k).concat(I),
                        T = "".concat(i("Stake"), " ").concat(g);
                    return m ? (C = "".concat(i("Auto"), " ").concat(k).concat(I), T = i("Automatic restaking")) : y && (C = "".concat(i("Manual"), " ").concat(k), T = "".concat(i("Earn"), " ").concat(k, " ").concat(i("Stake").toLocaleLowerCase(), " ").concat(g)), Object(me.jsxs)(Da, { role: "cell", isMobile: b, children: [m ? Object(me.jsx)(ze, { primaryToken: x[r], mr: "8px", width: b ? 50 : 70, height: b ? 50 : 70 }) : Object(me.jsx)(Pe.c, { primaryToken: x[r], secondaryToken: j[r], mr: "8px", width: b ? 50 : 70, height: b ? 50 : 70 }), Object(me.jsxs)(Fa, { children: [v && Object(me.jsx)(N.lb, { fontSize: "12px", bold: !0, color: h ? "failure" : "secondary", textTransform: "uppercase", children: i("Staked") }), Object(me.jsx)(N.lb, { bold: !o && !d, small: o || d, mb: "5px", children: C }), S && Object(me.jsx)(N.lb, { fontSize: b ? "12px" : "15px", color: "white", children: T })] })] })
                },
                Ba = n(97),
                Pa = function(e) {
                    var t = e.time,
                        n = Object(Mt.c)().chainId,
                        a = n && Object(q.e)(n)._fastQueryDate ? Math.floor(Object(q.e)(n)._fastQueryDate / 1e3) : Math.floor((new Date).getTime() / 1e3),
                        c = Object(B.useState)(0),
                        r = Object(F.a)(c, 2),
                        i = r[0],
                        s = r[1],
                        o = Object(B.useRef)(),
                        l = Object(B.useState)("0"),
                        d = Object(F.a)(l, 2),
                        b = d[0],
                        u = d[1],
                        j = Object(B.useState)("0"),
                        x = Object(F.a)(j, 2),
                        p = x[0],
                        h = x[1],
                        m = Object(B.useState)("0"),
                        O = Object(F.a)(m, 2),
                        f = O[0],
                        g = O[1],
                        k = Object(B.useState)("0"),
                        w = Object(F.a)(k, 2),
                        y = w[0],
                        v = w[1];
                    return Object(B.useEffect)((function() {
                        return t && (o.current = setInterval((function() { s((function(e) { return e > 0 ? e - 1 : 0 })) }), 1e3)),
                            function() { t && o.current && clearInterval(o.current) }
                    }), [o, s, t]), Object(B.useEffect)((function() {
                        if (t) {
                            var e = parseInt(t) - a;
                            s(e > 0 ? parseInt(t) - a : 0)
                        }
                    }), [t, s, a]), Object(B.useEffect)((function() {
                        var e = i % 60,
                            t = Math.floor(i / 60 % 60),
                            n = Math.floor(i / 60 / 60 % 24),
                            a = Math.floor(i / 60 / 60 / 24);
                        v(e < 10 ? "0".concat(e) : e.toString()), g(t < 10 ? "0".concat(t) : t.toString()), h(n < 10 ? "0".concat(n) : n.toString()), u(a < 10 ? "0".concat(a) : a.toString())
                    }), [i]), Object(me.jsxs)(N.lb, { color: "#A7A7CC", fontSize: "14px", bold: !0, children: [b, ":", p, ":", f, ":", y] })
                },
                za = Object(R.default)(Aa)(fn || (fn = Object(A.a)(["\n  flex: 1;\n  ", " {\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                Ra = R.default.div(gn || (gn = Object(A.a)(["\n  align-self: center;\n"]))),
                Ma = function(e) {
                    var t = e.pool,
                        n = e.account,
                        a = e.userDataLoaded,
                        c = e.chainId,
                        r = void 0 === c ? de.ChainId.MAINNET : c,
                        i = Object(V.b)().t,
                        s = Object(N.zb)(),
                        o = s.isXs,
                        l = s.isSm,
                        d = t.sousId,
                        b = t.stakingToken,
                        u = t.earningToken,
                        j = t.poolCategory,
                        x = t.userData,
                        p = t.earningTokenPrice,
                        h = t.isAutoVault,
                        m = t.masterChefIndex,
                        O = t.unlockedReward,
                        f = t.lockTime,
                        g = t.minDeposit,
                        k = t.lockDuration,
                        w = t.penalty,
                        y = t.poolType,
                        v = 0 === d,
                        S = (void 0 !== f && (parseInt(f), (new Date).getTime()), w ? Object(ke.c)(w, 0) / 100 : 30),
                        I = k ? Object(ke.c)(k, 0) / 60 / 60 / 24 : 60,
                        C = null !== x && void 0 !== x && x.pendingReward ? new L.a(x.pendingReward) : ue.c,
                        T = Object(ke.c)(C, u[r].decimals),
                        A = O ? Object(ke.c)(new L.a(O), u[r].decimals) : 0,
                        D = g ? Object(ke.c)(new L.a(g), b[r].decimals) : 0,
                        E = Object(ke.c)(C.multipliedBy(p), u[r].decimals),
                        B = n && C.gt(0),
                        P = Object(ke.e)(C, u[r].decimals),
                        z = Object(ke.a)(T, 3, 3),
                        R = j === Le.a.BINANCE,
                        M = J(t.masterChefIndex),
                        U = M.userData,
                        Q = U.cakeAtLastUserAction,
                        H = U.userShares,
                        Y = U.lastUserActionTime,
                        X = M.pricePerFullShare,
                        G = Object(he.d)(n, Q, H, X, p, u[r].decimals),
                        W = G.hasAutoEarnings,
                        q = G.autoCakeToDisplay,
                        K = G.autoUsdToDisplay,
                        _ = Y && 1e3 * parseInt(Y),
                        $ = new Date(_).toLocaleString(),
                        Z = h ? i("Recent ".concat(u[r].symbol, " profit")) : i("%asset% Earned", { asset: u[r].symbol });
                    T = h ? q : T, B = h ? W : B, E = h ? K : E;
                    var ee = Object(N.Cb)(Object(me.jsx)(me.Fragment, { children: y === Le.b.OTHER || y === Le.b.TIER ? Object(me.jsxs)(me.Fragment, { children: [Object(me.jsxs)(N.lb, { children: ["Unstaking fee: ", null !== t && void 0 !== t && t.hasEnd ? 100 - S : S, "%"] }), Object(me.jsxs)(N.lb, { children: ["Only applies within ", I, " days of staking. Unstaking after ", I, " days will not include a fee. Timer resets every time you stake new token in the pool."] })] }) : Object(me.jsxs)(me.Fragment, { children: [Object(me.jsx)(xe.a, { fontSize: "16px", value: q, decimals: 3, bold: !0, unit: " SPHYNX" }), Object(me.jsx)(xe.a, { fontSize: "16px", value: K, decimals: 2, bold: !0, prefix: "~$" }), i("Earned since your last action"), Object(me.jsx)(N.lb, { children: $ })] }) }), { placement: "bottom" }),
                        te = ee.targetRef,
                        ne = ee.tooltip,
                        ae = ee.tooltipVisible,
                        ce = Object(N.Ab)(Object(me.jsx)(It, { formattedBalance: z, fullBalance: P, earningToken: u[r], earningsDollarValue: E, sousId: d, masterChefIndex: m, isBnbPool: R, isCompoundPool: v })),
                        re = Object(F.a)(ce, 1)[0];
                    return Object(me.jsx)(za, { role: "cell", children: Object(me.jsxs)(Fa, { children: [y === Le.b.OTHER && (null === t || void 0 === t ? void 0 : t.hasEnd) && Object(me.jsxs)(N.lb, { fontSize: "14px", color: "white", textAlign: "left", mb: "4px", children: ["(Min Deposit: ", Object(me.jsx)(Ba.b, { value: D, prefix: "" }), " ", b[r].symbol, ")"] }), Object(me.jsxs)(N.F, { style: { alignItems: "center", gap: "5px" }, children: [Object(me.jsx)(N.lb, { fontSize: "14px", color: "white", textAlign: "left", mb: "4px", children: Z }), (y === Le.b.OTHER || y === Le.b.TIER) && Object(me.jsx)(Ra, { ref: te, children: Object(me.jsx)(N.I, { color: "textSubtle" }) })] }), !a && n ? Object(me.jsx)(N.fb, { width: "80px", height: "16px" }) : Object(me.jsxs)(me.Fragment, { children: [ae && ne, Object(me.jsxs)(N.F, { flexDirection: "column", children: [Object(me.jsx)(N.k, { mr: "8px", height: "32px", onClick: !h && B ? function(e) { e.stopPropagation(), re() } : void 0, children: Object(me.jsx)(xe.a, { mt: "4px", bold: !o && !l, fontSize: o || l ? "14px" : "16px", color: B ? "primary" : "#aaa", decimals: B ? 5 : 1, value: B ? T : 0 }) }), A > 0 && (null === t || void 0 === t ? void 0 : t.hasEnd) && Object(me.jsxs)(N.F, { mb: "3px", flexDirection: "column", children: [Object(me.jsxs)(N.lb, { fontSize: "14px", color: "white", textAlign: "left", mb: "4px", children: ["Unlocked ", u[r].symbol] }), Object(me.jsx)(xe.a, { mt: "4px", bold: !o && !l, fontSize: o || l ? "12px" : "14px", color: B ? "primary" : "#aaa", decimals: 1, value: A })] }), (y === Le.b.OTHER || y === Le.b.TIER) && Object(me.jsxs)(me.Fragment, { children: [Object(me.jsx)(N.lb, { fontSize: "14px", color: "white", textAlign: "left", mb: "4px", children: "Locked Time" }), Object(me.jsx)(Pa, { time: "".concat(parseInt(t.lockTime)) })] }), h && B && !o && !l && Object(me.jsx)(Ra, { ref: te, children: Object(me.jsx)(N.I, { color: "textSubtle" }) })] })] })] }) })
                },
                La = n(44),
                Na = ["pool", "showIcon", "performanceFee"],
                Ua = function(e) {
                    var t = e.pool,
                        n = e.showIcon,
                        a = e.performanceFee,
                        c = void 0 === a ? 0 : a,
                        r = Object(La.a)(e, Na),
                        i = Object(Y.a)().chainId,
                        s = void 0 === i ? de.ChainId.MAINNET : i,
                        o = t.stakingToken,
                        l = t.earningToken,
                        d = t.isFinished,
                        b = t.earningTokenPrice,
                        u = t.apr,
                        j = Object(V.b)().t,
                        x = Object(he.c)(t, c),
                        p = x.apr,
                        h = x.roundingDecimals,
                        m = x.compoundFrequency,
                        O = Object(N.Ab)(Object(me.jsx)(pe.a, { tokenPrice: b, apr: u, linkLabel: j("Get %symbol%", { symbol: o[s].symbol }), linkHref: "/swap", earningTokenSymbol: l[s].symbol, roundingDecimals: h, compoundFrequency: m, performanceFee: c })),
                        f = Object(F.a)(O, 1)[0],
                        g = function(e) { e.stopPropagation(), f() };
                    return Object(me.jsx)(N.F, Object(T.a)(Object(T.a)({ alignItems: "center", justifyContent: "space-between" }, r), {}, { children: p || d ? Object(me.jsxs)(me.Fragment, { children: [Object(me.jsx)(xe.a, { onClick: g, fontSize: "16px", isDisabled: d, value: d ? 0 : p, decimals: 2, unit: "%" }), !d && n && Object(me.jsx)(N.l, { onClick: g, variant: "text", width: "20px", height: "20px", padding: "0px", marginLeft: "4px", children: Object(me.jsx)(N.m, { color: "textSubtle", width: "20px" }) })] }) : Object(me.jsx)(N.fb, { width: "80px", height: "16px" }) }))
                },
                Va = Object(R.default)(Aa)(kn || (kn = Object(A.a)(["\n  flex: 1;\n  ", " {\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                Qa = function(e) {
                    var t = e.pool,
                        n = e.performanceFee,
                        a = Object(V.b)().t,
                        c = Object(N.zb)(),
                        r = c.isXs,
                        i = c.isSm,
                        s = t.isAutoVault;
                    return Object(me.jsx)(Va, { role: "cell", children: Object(me.jsxs)(Fa, { children: [Object(me.jsx)(N.lb, { fontSize: "14px", color: "white", textAlign: "left", mb: "4px", children: a(s ? "APY" : "APR") }), Object(me.jsx)(Ua, { pool: t, performanceFee: s ? n : 0, showIcon: !r && !i })] }) })
                },
                Ha = Object(R.default)(Aa)(wn || (wn = Object(A.a)(["\n  flex: 2;\n"]))),
                Ya = function(e) {
                    var t = e.pool,
                        n = e.chainId,
                        a = void 0 === n ? de.ChainId.MAINNET : n,
                        c = Object(V.b)().t,
                        r = t.stakingToken,
                        i = t.totalStaked,
                        s = t.stakingTokenPrice,
                        o = Object(B.useMemo)((function() { return Object(ke.c)(i, r[a].decimals) }), [i, r[a].decimals]);
                    return Object(me.jsx)(Ha, { role: "cell", children: Object(me.jsxs)(Fa, { children: [Object(me.jsx)(N.lb, { fontSize: "14px", color: "white", textAlign: "left", mb: "4px", children: c("Total staked") }), i && i.gte(0) ? Object(me.jsxs)(N.F, { mt: "4px", alignItems: "left", flexDirection: "column", children: [Object(me.jsx)(xe.a, { fontSize: "16px", value: o, decimals: 0, mb: "1px" }), Object(me.jsx)(N.lb, { fontSize: "16px", color: "white", textAlign: "left", children: r[a].symbol }), Object(me.jsx)(xe.a, { prefix: "$", color: "#00AC1C", fontSize: "16px", value: o * s, decimals: 1, mb: "1px", mt: "5px" })] }) : Object(me.jsx)(N.fb, { width: "80px", height: "16px" })] }) })
                },
                Xa = Object(R.default)(Aa)(yn || (yn = Object(A.a)(["\n  flex: 1;\n"]))),
                Ga = function(e) {
                    var t = e.pool,
                        n = t.sousId,
                        a = t.totalStaked,
                        c = t.startBlock,
                        r = t.endBlock,
                        i = t.isFinished,
                        s = t.hasEnd,
                        o = Object(we.a)().currentBlock,
                        l = Object(V.b)().t,
                        d = Object(he.e)(t, o),
                        b = d.shouldShowBlockCountdown,
                        u = d.blocksUntilStart,
                        j = d.blocksRemaining,
                        x = d.hasPoolStarted,
                        p = d.blocksToDisplay,
                        h = 0 === n,
                        m = b ? Object(me.jsxs)(N.F, { alignItems: "center", children: [Object(me.jsxs)(N.F, { flex: "1", children: [Object(me.jsx)(xe.a, { fontSize: "16px", value: p, decimals: 0 }), Object(me.jsx)(N.lb, { ml: "4px", textTransform: "lowercase", children: l("Blocks") })] }), Object(me.jsx)(N.F, { flex: "1", children: Object(me.jsx)(N.N, { external: !0, href: Object(ve.e)(x ? r : c, "countdown"), onClick: function(e) { return e.stopPropagation() }, children: Object(me.jsx)(N.mb, { ml: "4px" }) }) })] }) : Object(me.jsx)(N.lb, { fontSize: "16px", children: "-" }),
                        O = (!(null !== a && void 0 !== a && a.gt(0)) || !o || !j && !u) && !h && !i && s;
                    return Object(me.jsx)(Xa, { role: "cell", children: Object(me.jsxs)(Fa, { children: [Object(me.jsx)(N.lb, { fontSize: "14px", color: "white", textAlign: "left", mb: "4px", children: l(x || !b ? "Ends in" : "Starts in") }), O ? Object(me.jsx)(N.fb, { width: "80px", height: "16px" }) : m] }) })
                },
                Wa = Object(R.default)(Aa)(vn || (vn = Object(A.a)(["\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: center;\n  flex: 1;\n  ", " {\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                qa = Object(R.default)(N.w)(Sn || (Sn = Object(A.a)(["\n  width: 44px;  \n  height: 44px;\n  margin-bottom: auto;\n"]))),
                Ka = function(e) {
                    var t = e.expanded,
                        n = e.isFullLayout,
                        a = Object(V.b)().t,
                        c = Object(R.useTheme)();
                    return Object(me.jsxs)(Wa, { role: "cell", children: [n && Object(me.jsx)(N.lb, { color: "white", fontSize: "12px", children: a(t ? "Hide" : "Details") }), Object(me.jsx)(qa, { color: t ? c.custom.pancakePrimary : "white", toggled: t })] })
                },
                _a = (R.default.div(In || (In = Object(A.a)(["\n  padding: 16px;\n  flex-grow: 1;\n  flex-basis: 0;\n  margin-bottom: 16px;\n  flex-direction: column;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  height: 110px;\n  position: relative;\n\n  ", " {\n    margin-bottom: 0;\n    height: 130px;\n    max-height: 130px;\n  }\n\n  ", " {\n    margin-right: 0;\n    margin-bottom: 0;\n    height: 130px;\n    max-height: 130px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm }), (function(e) { return e.theme.mediaQueries.xl })), R.default.div(Cn || (Cn = Object(A.a)(["\n  text-align: center;\n  font-weight: 600;\n  font-size: 12px;\n"])))),
                $a = R.default.div(Tn || (Tn = Object(A.a)(["\n  font-weight: 600;\n  font-size: 12px;\n  position: absolute;\n  top: -10px;\n  ", " {\n    top: 10px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                Ja = R.default.div(Fn || (Fn = Object(A.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),
                Za = R.default.img(An || (An = Object(A.a)(["\n    height: 40px;\n    ", " {\n        height: 50px;\n    }\n    ", " {\n        height: 70px;\n    }\n"])), (function(e) { return e.theme.mediaQueries.xs }), (function(e) { return e.theme.mediaQueries.sm })),
                ec = function(e) {
                    var t = e.earningToken,
                        n = e.userData,
                        a = e.userDataLoaded,
                        c = e.isAutoVault,
                        r = e.earningTokenPrice,
                        i = e.masterChefIndex,
                        s = Object(V.b)().t,
                        o = Object(Y.a)(),
                        l = o.account,
                        d = o.chainId,
                        b = void 0 === d ? de.ChainId.MAINNET : d,
                        u = !Object(N.zb)().isXl,
                        j = null !== n && void 0 !== n && n.pendingReward ? new L.a(n.pendingReward) : ue.c,
                        x = Object(ke.c)(j, t[b].decimals),
                        p = Object(ke.c)(j.multipliedBy(r), t[b].decimals),
                        h = j.gt(0),
                        m = J(i),
                        O = m.userData,
                        f = O.cakeAtLastUserAction,
                        g = O.userShares,
                        k = m.pricePerFullShare,
                        w = (m.fees.performanceFee, Object(he.d)(l, f, g, k, r, t[b].decimals)),
                        y = w.hasAutoEarnings,
                        v = w.autoCakeToDisplay,
                        S = w.autoUsdToDisplay;
                    x = c ? v : x, h = c ? y : h, p = c ? S : p;
                    var I = c ? Object(me.jsx)(N.lb, { fontSize: "12px", bold: !0, color: "white", as: "span", textTransform: "uppercase", children: s("Recent ".concat(t[b].symbol, " profit")) }) : Object(me.jsxs)(me.Fragment, { children: [Object(me.jsxs)(N.lb, { fontSize: "12px", bold: !0, color: "white", as: "span", textTransform: "uppercase", children: [t[b].symbol, " "] }), Object(me.jsx)(N.lb, { fontSize: "12px", bold: !0, color: "white", as: "span", textTransform: "uppercase", children: s("Earned") })] });
                    return l ? a ? Object(me.jsxs)(N.F, { flexDirection: u ? "column" : "row", alignItems: "center", children: [Object(me.jsx)(Pe.a, { width: 40, height: 40, token: t[b] }), Object(me.jsxs)(N.F, { flexDirection: "column", alignItems: u ? "center" : "flex-start", children: [Object(me.jsx)(_a, { children: I }), Object(me.jsx)(N.F, { children: Object(me.jsx)(me.Fragment, { children: h ? Object(me.jsx)(me.Fragment, { children: r > 0 && Object(me.jsx)(xe.a, { display: "inline", fontSize: u ? "15px" : "24px", color: "white", decimals: 2, prefix: "$", value: p }) }) : Object(me.jsx)(me.Fragment, { children: Object(me.jsx)(N.lb, { fontSize: u ? "15px" : "24px", color: "textDisabled", children: "$0" }) }) }) })] })] }) : Object(me.jsxs)(N.F, { flexDirection: u ? "column" : "row", alignItems: "center", children: [Object(me.jsx)(Za, { src: Se.a, alt: "token" }), Object(me.jsx)(N.F, { flexDirection: "column", children: Object(me.jsx)(_a, { children: I }) })] }) : Object(me.jsxs)(N.F, { flexDirection: u ? "column" : "row", alignItems: "center", children: [Object(me.jsx)(Za, { src: Se.a, alt: "token" }), Object(me.jsxs)(N.F, { flexDirection: "column", alignItems: u ? "center" : "flex-start", children: [Object(me.jsx)(_a, { children: I }), Object(me.jsx)(N.lb, { fontSize: u ? "15px" : "24px", color: "textDisabled", children: "$0" })] })] })
                },
                tc = R.default.div(Dn || (Dn = Object(A.a)(["\n  padding: 16px;\n  margin-bottom: 8px;\n  flex-direction: column;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  position: relative;\n\n  ", " {\n    margin-bottom: 0;\n    height: 130px;\n    max-height: 130px;\n    margin-bottom: 16px;\n  }\n\n  ", " {\n    margin-right: 0;\n    margin-bottom: 0;\n    height: 130px;\n    max-height: 130px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm }), (function(e) { return e.theme.mediaQueries.xl })),
                nc = Object(R.default)(N.l)(En || (En = Object(A.a)(["\n  border-radius: 5px;\n  border: none;\n  font-size: 13px;\n  background: ", ";\n  width: 102px;\n  outline: none;\n\n  ", " {\n    width: 176px;\n  }\n\n  &:disabled {\n    background: ", ";\n  }\n"])), (function(e) { return e.theme.custom.tertiary }), (function(e) { return e.theme.mediaQueries.sm }), (function(e) { return e.theme.custom.tertiary })),
                ac = Object(R.default)(N.fb)(Bn || (Bn = Object(A.a)(["\n  width: 102px;\n  ", " {\n    width: 176px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                cc = function(e) {
                    var t = e.sousId,
                        n = e.poolCategory,
                        a = e.earningToken,
                        c = e.userData,
                        r = e.userDataLoaded,
                        i = e.isAutoVault,
                        s = e.earningTokenPrice,
                        o = e.masterChefIndex,
                        l = e.unlockedReward,
                        d = e.poolType,
                        b = e.lockTime,
                        u = Object(V.b)().t,
                        j = Object(Y.a)(),
                        x = j.account,
                        p = j.chainId,
                        h = void 0 === p ? de.ChainId.MAINNET : p,
                        m = d === Le.b.STANDARD || d === Le.b.MINT || Number(l) > 0 || !!(1e3 * Number(b) < (new Date).getTime() && Number(c.pendingReward) > 0),
                        O = null !== c && void 0 !== c && c.pendingReward ? new L.a(c.pendingReward) : ue.c,
                        f = Object(ke.c)(O, a[h].decimals),
                        g = Object(ke.c)(O.multipliedBy(s), a[h].decimals),
                        k = O.gt(0),
                        w = Object(ke.e)(O, a[h].decimals),
                        y = Object(ke.a)(f, 3, 3),
                        v = 0 === t,
                        S = n === Le.a.BINANCE,
                        I = !Object(N.zb)().isXl,
                        C = J(o),
                        T = C.userData,
                        A = T.cakeAtLastUserAction,
                        D = T.userShares,
                        E = C.pricePerFullShare,
                        B = C.fees.performanceFee,
                        P = Object(he.d)(x, A, D, E, s, a[h].decimals),
                        z = P.hasAutoEarnings,
                        R = P.autoCakeToDisplay,
                        M = P.autoUsdToDisplay;
                    f = i ? R : f, k = i ? z : k, g = i ? M : g;
                    var U = Object(N.Ab)(Object(me.jsx)(It, { formattedBalance: y, fullBalance: w, earningToken: a[h], earningsDollarValue: g, sousId: t, masterChefIndex: o, isBnbPool: S, isCompoundPool: v })),
                        Q = Object(F.a)(U, 1)[0],
                        H = Object(N.Cb)(u("Subtracted automatically from each yield harvest and burned."), { placement: "bottom-start" }),
                        X = H.targetRef,
                        G = H.tooltip,
                        W = H.tooltipVisible;
                    return x ? r ? Object(me.jsx)(tc, { children: Object(me.jsx)(Ja, { children: i ? Object(me.jsxs)(N.F, { flex: "1.3", flexDirection: "column", alignSelf: "flex-start", alignItems: "flex-start", children: [Object(me.jsx)(Ht, { masterChefIndex: o, isTableVariant: !0 }), Object(me.jsxs)(N.F, { mb: "2px", justifyContent: "space-between", alignItems: "center", children: [W && G, Object(me.jsx)(N.rb, { ref: X, small: !0, fontSize: I ? "12px" : "14px", children: u("Performance Fee") }), Object(me.jsx)(N.F, { alignItems: "center", children: Object(me.jsxs)(N.lb, { ml: "4px", small: !0, children: [B / 100, "%"] }) })] })] }) : m ? Object(me.jsx)(nc, { style: { width: "min-content" }, disabled: !k, onClick: Q, scale: "sm", children: u("Harvest") }) : null }) }) : Object(me.jsx)(tc, { children: Object(me.jsx)(Ja, { children: Object(me.jsx)(ac, { height: "32px", marginTop: 14 }) }) }) : Object(me.jsx)(tc, { children: Object(me.jsx)(Ja, { children: m ? Object(me.jsx)(nc, { disabled: !0, scale: "sm", children: u("Harvest") }) : null }) })
                },
                rc = R.default.div(Pn || (Pn = Object(A.a)(["\n  padding: 16px;\n  flex-grow: 1;\n  flex-basis: 0;\n  margin-bottom: 0;\n  flex-direction: column;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  position: relative;\n\n  ", " {\n    margin-bottom: 0;\n    height: 160px;\n    max-height: 160px;\n    margin-bottom: 16px;\n  }\n\n  ", " {\n    margin-right: 0;\n    margin-bottom: 0;\n    height: 160px;\n    max-height: 160px;\n  }\n\n  ", " {\n    margin-right: 0;\n    margin-bottom: 0;\n    height: 160px;\n    max-height: 160px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm }), (function(e) { return e.theme.mediaQueries.xl }), (function(e) { return e.theme.mediaQueries.md })),
                ic = R.default.div(zn || (zn = Object(A.a)(["\n  display: flex;\n  gap: 5px;\n  flex-direction: column;\n  ", " {\n    flex-direction: unset;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                sc = Object(R.default)(N.l)(Rn || (Rn = Object(A.a)(["\n  border-radius: 5px;\n  border: none;\n  color: white;\n  font-size: 13px;\n  background: ", ";\n  width: 102px;\n  outline: none;\n\n  ", " {\n    width: 176px;\n  }\n"])), (function(e) { return e.theme.custom.gradient }), (function(e) { return e.theme.mediaQueries.sm })),
                oc = Object(R.default)(N.fb)(Mn || (Mn = Object(A.a)(["\n  width: 102px;\n  ", " {\n    width: 176px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                lc = Object(R.default)(N.F)(Ln || (Ln = Object(A.a)(["\n  flex: 1;\n  flex-direction: column;\n  margin-bottom: 10px;\n  margin-right: 0px;\n  align-items: center;\n  ", " {\n    margin-bottom: 0px;\n    margin-right: 10px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                dc = Object(R.default)(Ja)(Nn || (Nn = Object(A.a)(["\n  flex-direction: column;\n  gap: 8px;\n"]))),
                bc = Object(R.default)(N.l)(Un || (Un = Object(A.a)(["\n  border-radius: 9px;\n  width: 112px;\n  ", " {\n    border-radius: 12px;\n  }\n  ", " {\n    border-radius: 16px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm }), (function(e) { return e.theme.mediaQueries.md })),
                uc = function(e) {
                    var t = e.pool,
                        n = e.userDataLoaded,
                        a = e.stakingAvailable,
                        c = (e.nextStakingTime, t.sousId),
                        r = t.stakingToken,
                        i = t.earningToken,
                        s = t.stakingLimit,
                        o = t.isFinished,
                        l = t.poolCategory,
                        d = t.userData,
                        b = t.stakingTokenPrice,
                        u = t.isAutoVault,
                        j = t.masterChefIndex,
                        x = Object(V.b)().t,
                        p = Object(Y.a)(),
                        h = p.account,
                        m = p.chainId,
                        O = void 0 === m ? de.ChainId.MAINNET : m,
                        f = !Object(N.zb)().isXl,
                        g = Object(Ve.h)(r[O].address ? Object(ce.a)(r[O].address, m) : ""),
                        k = Ge(g, c, i[O].symbol, t.masterChefIndex),
                        w = k.handleApprove,
                        y = (k.requestedApproval, qe(j)),
                        v = y.isVaultApproved,
                        S = y.setLastUpdated,
                        I = We(S, j),
                        C = I.handleApprove,
                        T = (I.requestedApproval, u ? C : w),
                        A = l === Le.a.BINANCE,
                        D = null !== d && void 0 !== d && d.allowance ? new L.a(d.allowance) : ue.c,
                        E = null !== d && void 0 !== d && d.stakedBalance ? new L.a(d.stakedBalance) : ue.c,
                        B = !u && E.gt(0),
                        P = null !== d && void 0 !== d && d.stakingTokenBalance ? new L.a(d.stakingTokenBalance) : ue.c,
                        z = Object(ke.c)(E, r[O].decimals),
                        R = J(j),
                        M = R.userData.userShares,
                        U = R.pricePerFullShare,
                        Q = Object(he.b)(M, U, r[O].decimals),
                        H = Q.cakeAsBigNumber,
                        X = Q.cakeAsNumberBalance,
                        G = M && M.gt(0),
                        W = u && G,
                        q = u ? !v : !D.gt(0) && !A,
                        K = Object(N.Ab)(Object(me.jsx)(Je, { tokenSymbol: r[O].symbol })),
                        _ = Object(F.a)(K, 1)[0],
                        $ = Object(N.Ab)(Object(me.jsx)(ht, { isBnbPool: A, pool: t, stakingTokenBalance: P, stakingTokenPrice: b })),
                        Z = Object(F.a)($, 1)[0],
                        ee = Object(N.Ab)(Object(me.jsx)(Gt, { stakingMax: P, pool: t })),
                        te = Object(F.a)(ee, 1)[0],
                        ne = Object(N.Ab)(Object(me.jsx)(ht, { stakingTokenBalance: P, isBnbPool: A, pool: t, stakingTokenPrice: b, isRemovingStake: !0 })),
                        ae = Object(F.a)(ne, 1)[0],
                        re = Object(N.Ab)(Object(me.jsx)(Gt, { stakingMax: H, pool: t, isRemovingStake: !0 })),
                        ie = Object(F.a)(re, 1)[0],
                        se = function() { u ? te() : Z() },
                        oe = Object(N.Cb)(x("You've already staked the maximum amount you can stake in this pool!"), { placement: "bottom" }),
                        le = oe.targetRef,
                        je = oe.tooltip,
                        pe = oe.tooltipVisible,
                        Oe = s.gt(0) && d.stakedBalance.gte(s);
                    return h ? n ? q ? Object(me.jsxs)(rc, { children: [Object(me.jsx)($a, { children: Object(me.jsx)(N.lb, { fontSize: "12px", bold: !0, color: "white", as: "span", textTransform: "uppercase", children: x("Enable pool") }) }), Object(me.jsx)(Ja, { children: Object(me.jsx)(sc, { onClick: T, variant: "secondary", scale: "sm", children: x("Enable") }) })] }) : B || W ? Object(me.jsxs)(rc, { children: [Object(me.jsxs)(N.F, { mb: "5px", flexDirection: "column", children: [Object(me.jsxs)(N.lb, { fontSize: "12px", bold: !0, color: "white", as: "span", textTransform: "uppercase", textAlign: "center", children: [r[O].symbol, " "] }), Object(me.jsx)(N.lb, { fontSize: "12px", bold: !0, color: "white", as: "span", textTransform: "uppercase", textAlign: "center", children: x(u ? "Staked (compounding)" : "Staked") })] }), Object(me.jsxs)(dc, { children: [Object(me.jsx)(lc, { children: Object(me.jsx)(xe.a, { lineHeight: "1", bold: !0, fontSize: f ? "12px" : "16px", decimals: 5, value: u ? parseFloat(X.toString()) : z }) }), Object(me.jsxs)(ic, { children: [Object(me.jsx)(bc, { variant: "secondary", onClick: function() { u ? ie() : ae() }, mr: f ? "0" : "6px", children: Object(me.jsx)(N.lb, { color: "primary", fontSize: "14px", children: "Remove" }) }), Oe ? Object(me.jsx)("span", { ref: le, children: Object(me.jsx)(bc, { variant: "secondary", disabled: !0, children: Object(me.jsx)(N.lb, { color: "primary", fontSize: "14px", children: "Add" }) }) }) : Object(me.jsx)(bc, { variant: "secondary", onClick: P.gt(0) ? se : _, disabled: o || !a, children: Object(me.jsx)(N.lb, { color: "primary", fontSize: "14px", children: "Add" }) })] }), pe && je] })] }) : Object(me.jsxs)(rc, { children: [Object(me.jsxs)($a, { children: [Object(me.jsxs)(N.lb, { fontSize: "12px", bold: !0, color: "white", as: "span", textTransform: "uppercase", children: [x("Stake"), " "] }), Object(me.jsx)(N.lb, { fontSize: "12px", bold: !0, color: "white", as: "span", textTransform: "uppercase", children: r[O].symbol })] }), Object(me.jsx)(Ja, { children: Object(me.jsx)(sc, { onClick: P.gt(0) ? se : _, variant: "secondary", disabled: o || !a, scale: "sm", children: x("Stake") }) })] }) : Object(me.jsxs)(rc, { children: [Object(me.jsx)($a, { children: Object(me.jsx)(N.lb, { fontSize: "12px", mb: "16px", bold: !0, color: "white", as: "span", textTransform: "uppercase", children: x("Start staking") }) }), Object(me.jsx)(Ja, { children: Object(me.jsx)(oc, { height: "32px", marginTop: 14 }) })] }) : Object(me.jsxs)(rc, { children: [Object(me.jsx)($a, { children: Object(me.jsx)(N.lb, { fontSize: "12px", bold: !0, color: "white", as: "span", textTransform: "uppercase", children: x("Start staking") }) }), Object(me.jsx)(Ja, { children: Object(me.jsx)(be.a, {}) })] })
                },
                jc = Object(R.keyframes)(Vn || (Vn = Object(A.a)(["\n  from {\n    max-height: 0px;\n  }\n  to {\n    max-height: 700px;\n  }\n"]))),
                xc = Object(R.keyframes)(Qn || (Qn = Object(A.a)(["\n  from {\n    max-height: 700px;\n  }\n  to {\n    max-height: 0px;\n  }\n"]))),
                pc = R.default.div(Hn || (Hn = Object(A.a)(["\n  animation: ", ";\n  overflow: hidden;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 10px;\n  background: ", ";\n  display: flex;\n  flex-direction: ", ";\n  justify-content: center;\n  padding: 5px;\n\n  ", " {\n    padding: 12px;\n  }\n  ", " {\n    padding: 16px 32px;\n  }\n"])), (function(e) { return e.expanded ? Object(R.css)(Yn || (Yn = Object(A.a)(["\n          ", " 300ms linear forwards\n        "])), jc) : Object(R.css)(Xn || (Xn = Object(A.a)(["\n          ", " 300ms linear forwards\n        "])), xc) }), (function(e) { return e.theme.custom.background }), (function(e) { return e.isMobile ? "column" : "row" }), (function(e) { return e.theme.mediaQueries.xs }), (function(e) { return e.theme.mediaQueries.lg })),
                hc = Object(R.default)(N.F)(Gn || (Gn = Object(A.a)(["\n  display: flex;\n  flex-direction: row;\n\n  ", " {\n    flex-direction: row;\n    align-items: center;\n    flex-grow: 2;\n    flex-basis: 0;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                mc = R.default.div(Wn || (Wn = Object(A.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 5px;\n  border-radius: 10px;\n\n  ", " {\n    flex-direction: row;\n  }\n\n  ", " {\n    padding: 12px;\n  }\n  ", " {\n    padding: 16px 32px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md }), (function(e) { return e.theme.mediaQueries.xs }), (function(e) { return e.theme.mediaQueries.lg })),
                Oc = Object(R.default)(N.k)(qn || (qn = Object(A.a)(["\n  justify-content: center;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  flex-shrink: 0;\n  flex-basis: auto;\n  padding: 8px 8px;\n  ", " {\n    padding: 0;\n  }\n"])), (function(e) { return e.theme.mediaQueries.lg })),
                fc = Object(R.default)(N.F)(Kn || (Kn = Object(A.a)(["\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  flex-grow: 1;\n"]))),
                gc = Object(R.default)(N.O)(_n || (_n = Object(A.a)(["\n  font-size: 18px;\n  font-weight: 600;\n  ", " {\n    font-size: 20px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                kc = Object(R.default)(N.O)($n || ($n = Object(A.a)(["\n  font-size: 12px;\n  font-weight: 400;\n  flex-flow: row-reverse;\n  > svg {\n    width: 15px;\n    margin-right: 3px;\n    margin-left: 0px;\n  }\n\n  ", " {\n    font-size: 14px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                wc = Object(R.default)(N.F)(Jn || (Jn = Object(A.a)(["\n  border-radius: 5px;\n  padding: 3px;\n  ", " {\n    padding: 8px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.xs })),
                yc = Object(R.default)(N.F)(Zn || (Zn = Object(A.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: unset;\n  gap: 10px;\n  ", " {\n    flex-direction: row;\n    margin-bottom: 8px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                vc = function(e) {
                    var t = e.pool,
                        n = e.userDataLoaded,
                        a = e.expanded,
                        c = t.stakingToken,
                        r = t.earningToken,
                        i = t.stakingLimit,
                        s = t.contractAddress,
                        o = t.isAutoVault,
                        l = t.poolType,
                        d = t.masterChefIndex,
                        b = Object(V.b)().t,
                        u = !Object(N.zb)().isXl,
                        j = Object(Y.a)(),
                        x = j.chainId,
                        p = j.library.getSigner(),
                        h = void 0 === x ? de.ChainId.MAINNET : x,
                        m = Object(ce.a)(s, x),
                        O = Object(B.useState)(!0),
                        f = Object(F.a)(O, 2),
                        g = f[0],
                        k = f[1],
                        w = Object(B.useState)(0),
                        y = Object(F.a)(w, 2),
                        v = y[0],
                        S = y[1],
                        I = Object(B.useState)(0),
                        A = Object(F.a)(I, 2),
                        D = A[0],
                        P = A[1],
                        z = Object(ce.p)(x, t.masterChefIndex),
                        R = Object(B.useMemo)((function() { return Object(Ne.C)(p, x, d) }), [x, d, p]);
                    Object(B.useEffect)((function() {
                        var e, n = new AbortController,
                            a = function() {
                                var t = Object(C.a)(E.a.mark((function t() {
                                    var n, c, r, i, s, o, l, d, b;
                                    return E.a.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return (n = []).push({ address: R.address, name: "stakingAvailable", params: [] }), n.push({ address: R.address, name: "stakingTime", params: [] }), n.push({ address: R.address, name: "stakingPeriods", params: [] }), n.push({ address: R.address, name: "lockPeriods", params: [] }), n.push({ address: R.address, name: "penaltyFee", params: [] }), t.next = 8, Object(Ue.a)(re, n, x);
                                            case 8:
                                                c = t.sent, r = c[0][0], i = parseInt(c[1][0].toString()), s = parseInt(c[2][0].toString()), o = parseInt(c[3][0].toString()), l = Math.floor((new Date).getTime() / 1e3), d = parseInt(c[4][0].toString()), l < i + s ? S(i - l) : (i += s, b = Math.ceil((l - i) / o), S((i += o * b) - l)), k(r), P(d), e = setTimeout((function() { return a() }), 6e4);
                                            case 19:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })));
                                return function() { return t.apply(this, arguments) }
                            }();
                        return null !== t && void 0 !== t && t.isLock && null !== t && void 0 !== t && t.isLock[x] && a(),
                            function() { clearTimeout(e), n.abort() }
                    }), [l, x]);
                    J(t.masterChefIndex).fees.performanceFee;
                    var M = b("You must harvest and compound your earnings from this pool manually."),
                        L = b("Any funds you stake in this pool will be automatically harvested and restaked (compounded) for you."),
                        U = Object(N.Cb)(o ? L : M, { placement: "bottom-start" }),
                        Q = U.targetRef,
                        H = U.tooltip,
                        X = U.tooltipVisible,
                        G = i.gt(0) ? Object(me.jsxs)(N.F, { mb: "8px", justifyContent: "space-between", children: [Object(me.jsxs)(N.lb, { children: [b("Max. stake per user"), ":"] }), Object(me.jsx)(N.lb, { children: "".concat(Object(ke.e)(i, c[h].decimals, 0), " ").concat(c[h].symbol) })] }) : null;
                    return Object(me.jsxs)(pc, { expanded: a, isMobile: u, children: [Object(me.jsxs)(hc, { children: [Object(me.jsxs)(Oc, { children: [Object(me.jsxs)(N.F, { flexDirection: "row", alignItems: "center", children: [o ? Object(me.jsx)(ge.b, {}) : Object(me.jsx)(ge.e, {}), X && H, Object(me.jsx)("span", { ref: Q, children: Object(me.jsx)(N.I, { ml: "4px", width: "14px", height: "14px", color: "#F9B043" }) })] }), G, Object(me.jsx)(N.F, { mb: "8px", children: Object(me.jsx)(gc, { href: Object(ve.e)(Object(ce.a)(r[h].address, x), "token", h), color: "white", children: b("See Token Info") }) }), Object(me.jsxs)(yc, { children: [Object(me.jsx)(wc, { mr: u ? "0" : "2px", children: Object(me.jsx)(kc, { href: r[h].projectLink, color: "white", children: b("View Project Site") }) }), m && Object(me.jsx)(wc, { ml: u ? "0" : "2px", children: Object(me.jsx)(kc, { href: Object(ve.e)(o ? z : m, "address", h), color: "white", children: b("View Contract") }) })] })] }), Object(me.jsx)(fc, { children: Object(me.jsx)(ec, Object(T.a)(Object(T.a)({}, t), {}, { userDataLoaded: n })) })] }), Object(me.jsxs)(mc, { children: [Object(me.jsx)(cc, Object(T.a)(Object(T.a)({}, t), {}, { userDataLoaded: n })), !g && Object(me.jsxs)(N.lb, { fontSize: "12px", textAlign: "center", width: "120px", children: ["Staking Available in ", Object(me.jsx)(Dt, { secondsRemaining: v }), "Withdraw in this periods charge ", "".concat(D, "%"), " of penalty Fee!"] }), Object(me.jsx)(uc, { stakingAvailable: g, nextStakingTime: v, pool: t, userDataLoaded: n })] })] })
                },
                Sc = R.default.div(ea || (ea = Object(A.a)(["\n  background-color: transparent;\n  display: flex;\n  flex-direction: ", "; \n  cursor: pointer;\n  border-bottom: ", ";\n"])), (function(e) { return e.isMobile ? "column" : "row" }), (function(e) {
                    var t = e.expanded,
                        n = e.theme;
                    return t ? "0px solid ".concat(n.custom.divider) : "1px solid ".concat(n.custom.divider)
                })),
                Ic = function(e) {
                    var t = e.pool,
                        n = e.account,
                        a = e.userDataLoaded,
                        c = e.chainId,
                        r = Object(N.zb)(),
                        i = r.isXs,
                        s = r.isSm,
                        o = r.isMd,
                        l = r.isLg,
                        d = r.isXl,
                        b = !d,
                        u = Object(B.useState)(!1),
                        j = Object(F.a)(u, 2),
                        x = j[0],
                        p = j[1],
                        h = Object(Ca.a)(x, 300),
                        m = J(t.masterChefIndex).fees.performanceFee,
                        O = m && m / 100;
                    return Object(me.jsxs)(me.Fragment, { children: [Object(me.jsxs)(Sc, { role: "row", expanded: x, isMobile: b, onClick: function() { p((function(e) { return !e })) }, children: [Object(me.jsxs)(N.F, { width: b ? "100%" : "60%", children: [Object(me.jsx)(Ea, { pool: t, chainId: c }), Object(me.jsx)(Ma, { pool: t, chainId: c, account: n, userDataLoaded: a }), Object(me.jsx)(Qa, { pool: t, performanceFee: O })] }), Object(me.jsxs)(N.F, { width: b ? "100%" : "40%", children: [Object(me.jsx)(Ya, { chainId: c, pool: t }), Object(me.jsx)(Ga, { pool: t }), Object(me.jsx)(Ka, { expanded: x, isFullLayout: o || l || d })] })] }), h && Object(me.jsx)(vc, { account: n, pool: t, userDataLoaded: a, expanded: x, breakpoints: { isXs: i, isSm: s, isMd: o, isLg: l, isXl: d } })] })
                },
                Cc = R.default.div(ta || (ta = Object(A.a)(["\n  background-color: transparent;\n"]))),
                Tc = R.default.div(na || (na = Object(A.a)(["\n  padding: ", ";\n  background-color: transparent;\n"])), (function(e) { return e.isMobile ? "10px" : "5px 40px 20px 40px" })),
                Fc = function(e) {
                    var t = e.pools,
                        n = e.userDataLoaded,
                        a = e.account,
                        c = e.chainId,
                        r = Object(B.useRef)(null),
                        i = !Object(N.zb)().isXl;
                    return Object(me.jsx)(Tc, { isMobile: i, children: Object(me.jsx)(Cc, { role: "table", ref: r, children: t.map((function(e) { return Object(me.jsx)(Ic, { chainId: c, pool: e, account: a, userDataLoaded: n }, e.isAutoVault ? "auto-cake-".concat(e.masterChefIndex) : "".concat(e.sousId, "-").concat(e.masterChefIndex)) })) }) })
                },
                Ac = n(74),
                Dc = n(98),
                Ec = Object(R.default)(N.F)(aa || (aa = Object(A.a)(["\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding: 0px;\n  ", " {\n    padding: 0px 10px;\n  }\n  ", " {\n    padding: 0px 10px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md }), (function(e) { return e.theme.mediaQueries.xl })),
                Bc = Object(R.default)(te.a)(ca || (ca = Object(A.a)(["\n  justify-content: center;\n  padding: 47px 69px 0;\n\n  ", " {\n    padding: 47px 0px 0px 0px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.xs })),
                Pc = Object(R.default)(N.F)(ra || (ra = Object(A.a)(["\n  align-items: ", ";\n  flex-direction: ", ";\n  ", " {\n  }\n"])), (function(e) { return e.isMobile ? "start-flex" : "center" }), (function(e) { return e.isMobile ? "column" : "row" }), (function(e) { return e.theme.mediaQueries.md })),
                zc = R.default.div(ia || (ia = Object(A.a)(["\n  display: block;\n  width: 100%;\n  ", " {\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                Rc = R.default.div(sa || (sa = Object(A.a)(["\n  display: flex;\n  align-items: center;\n"]))),
                Mc = Object(R.default)(N.lb)(oa || (oa = Object(A.a)(["\n  color: white;\n  font-size: 13px;\n  font-weight: bold;\n  ", " {\n    font-size: 20px;\n  }\n  ", " {\n    font-size: 26px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.xs }), (function(e) { return e.theme.mediaQueries.sm })),
                Lc = Object(R.default)(N.lb)(la || (la = Object(A.a)(["\n  color: white;\n  font-size: 12px;\n  ", " {\n    font-size: 13px;\n  }\n  ", " {\n    font-size: 15px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.xs }), (function(e) { return e.theme.mediaQueries.sm })),
                Nc = [1, 4, 56, 97, 64668, 32520, 25];
            t.default = function() {
                var e = Object(z.h)(),
                    t = Object(V.b)().t,
                    n = !Object(N.zb)().isXl,
                    a = Object(R.useTheme)(),
                    c = Object(Y.a)(),
                    r = c.account,
                    i = c.chainId,
                    s = c.library,
                    o = Object(z.i)(),
                    l = parseInt(o.chainId),
                    d = Object(B.useState)(l),
                    b = Object(F.a)(d, 2),
                    u = b[0],
                    j = b[1],
                    x = function(e, t) {
                        var n = Object(K.a)().fastRefresh,
                            a = Object(W.b)();
                        Object(B.useEffect)((function() { e && a(Object(_.g)(e, t)) }), [e, a, n]);
                        var c = Object(X.c)((function(e) { return { pools: e.pools.data, userDataLoaded: e.pools.userDataLoaded } })),
                            r = c.pools,
                            i = c.userDataLoaded;
                        return { pools: r.map($.b), userDataLoaded: i }
                    }(r, u),
                    p = x.pools,
                    h = x.userDataLoaded,
                    m = Object(Q.a)(!1, { localStorageKey: "pancake_pool_staked" }),
                    O = Object(F.a)(m, 2),
                    f = O[0],
                    g = O[1],
                    k = Object(B.useState)(12),
                    w = Object(F.a)(k, 2),
                    y = w[0],
                    v = w[1],
                    S = Object(B.useState)(!1),
                    A = Object(F.a)(S, 2),
                    D = A[0],
                    P = A[1],
                    M = Object(B.useRef)(null),
                    G = Object(Q.a)(I.TABLE, { localStorageKey: "pancake_pool_view" }),
                    J = Object(F.a)(G, 2),
                    te = J[0],
                    de = J[1],
                    be = Object(B.useState)(""),
                    ue = Object(F.a)(be, 2),
                    je = ue[0],
                    xe = ue[1],
                    pe = Object(B.useState)("hot"),
                    Oe = Object(F.a)(pe, 2),
                    fe = Oe[0],
                    ge = Oe[1],
                    ke = s.getSigner();
                Object(B.useEffect)((function() { localStorage.setItem(oe.a.LOCAL_ROUTER_NAME, "pools") }), []), Object(B.useEffect)((function() { j(void 0 !== i && r ? i : l) }), [i, l, r]);
                var we = Object(B.useRef)(0),
                    ye = function() {
                        var e = Object(X.c)((function(e) { return e.pools.cakeVault }));
                        return e.map((function(e) {
                            var t = Object(T.a)({}, e);
                            Object.prototype.hasOwnProperty.call(t, "fees") || (t.fees = {}), Object.prototype.hasOwnProperty.call(t, "userData") || (t.userData = {});
                            var n = t.totalShares,
                                a = t.pricePerFullShare,
                                c = t.totalCakeInVault,
                                r = t.estimatedCakeBountyReward,
                                i = t.totalPendingCakeHarvest,
                                s = t.fees,
                                o = s.performanceFee,
                                l = s.callFee,
                                d = s.withdrawalFee,
                                b = s.withdrawalFeePeriod,
                                u = t.userData,
                                j = u.isLoading,
                                x = u.userShares,
                                p = u.lastDepositedTime,
                                h = u.lastUserActionTime,
                                m = new L.a(r),
                                O = new L.a(i);
                            return { totalShares: new L.a(n), pricePerFullShare: new L.a(a), totalCakeInVault: new L.a(c), estimatedCakeBountyReward: m, totalPendingCakeHarvest: O, fees: { performanceFee: o, callFee: l, withdrawalFee: d, withdrawalFeePeriod: b }, userData: { isLoading: j, userShares: new L.a(x), cakeAtLastUserAction: new L.a(x), lastDepositedTime: p, lastUserActionTime: h } }
                        }))
                    }(),
                    ve = Object(B.useMemo)((function() {
                        var e = [];
                        return p.forEach((function(t) {
                            if (0 === t.sousId && t.poolType && Object(ce.p)(u, t.masterChefIndex)) {
                                var n = Object(T.a)(Object(T.a)({}, t), {}, { isAutoVault: !0 });
                                e.push(n)
                            }(0 !== t.sousId || !1 !== t.isShow || null !== t && void 0 !== t && t.isLock && null !== t && void 0 !== t && t.isLock[u]) && e.push(t)
                        })), e
                    }), [p]).filter((function(e) { return "" !== e.contractAddress[u] })),
                    Se = Object(B.useMemo)((function() { return Object(U.partition)(ve, (function(e) { return e.isFinished })) }), [ve]),
                    Ie = Object(F.a)(Se, 2),
                    Ce = Ie[0],
                    Te = Ie[1],
                    Fe = Object(B.useMemo)((function() { return Ce.filter((function(e) { return e.isAutoVault ? ye[e.masterChefIndex].userData.userShares.gt(0) : e.userData && new L.a(e.userData.stakedBalance).isGreaterThan(0) })) }), [Ce, ye]),
                    Ae = Object(B.useMemo)((function() { return Te.filter((function(e) { var t, n, a; return e.isAutoVault ? null === (t = ye[e.masterChefIndex]) || void 0 === t || null === (n = t.userData) || void 0 === n || null === (a = n.userShares) || void 0 === a ? void 0 : a.gt(0) : e.userData && new L.a(e.userData.stakedBalance).isGreaterThan(0) })) }), [Te, ye]);
                Object(Z.d)(u),
                    function(e) {
                        var t = Object(Y.a)().account,
                            n = Object(K.a)().fastRefresh,
                            a = Object(W.b)();
                        Object(B.useEffect)((function() { a(Object(_.c)({ chainId: e })) }), [a, n]), Object(B.useEffect)((function() { a(Object(_.d)({ account: t, chainId: e })) }), [a, n, t]), Object(B.useEffect)((function() { a(Object(_.b)({ chainId: e })) }), [a, e])
                    }(u),
                    function(e) {
                        var t = Object(Y.a)().account,
                            n = Object(W.b)(),
                            a = Object(K.a)().slowRefresh;
                        Object(B.useEffect)((function() {
                            var a = function() {
                                var a = Object(C.a)(E.a.mark((function a() {
                                    var c;
                                    return E.a.wrap((function(a) {
                                        for (;;) switch (a.prev = a.next) {
                                            case 0:
                                                return a.next = 2, Object(q.e)(e).getBlockNumber();
                                            case 2:
                                                c = a.sent, n(Object(_.e)(c, e, t));
                                            case 4:
                                            case "end":
                                                return a.stop()
                                        }
                                    }), a)
                                })));
                                return function() { return a.apply(this, arguments) }
                            }();
                            a(), n(Object(_.f)(e))
                        }), [n, a])
                    }(u), Object(B.useEffect)((function() { D || (new IntersectionObserver((function(e) { Object(F.a)(e, 1)[0].isIntersecting && v((function(e) { return e <= we.current ? e + 12 : e })) }), { rootMargin: "0px", threshold: 1 }).observe(M.current), P(!0)) }), [D]);
                var De, Ee = e.pathname.includes("history"),
                    Be = function() {
                        var e = Object(C.a)(E.a.mark((function e() {
                            var t, n;
                            return E.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = new H.a.Contract("0x39dDE712D0B08C3Ce11AF7bd5b6E2ef9A495D3Be", re, ke), e.next = 3, t.emergencyWithdraw(0);
                                    case 3:
                                        return n = e.sent, e.next = 6, n.wait();
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() { return e.apply(this, arguments) }
                    }(),
                    Pe = function() {
                        var e = Object(C.a)(E.a.mark((function e() {
                            var t, n;
                            return E.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = new H.a.Contract("0xb1518ed058C5df45168e338e9b1e75941b690307", ie, ke), e.next = 3, t.withdrawAll();
                                    case 3:
                                        return n = e.sent, e.next = 6, n.wait();
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() { return e.apply(this, arguments) }
                    }();
                if (De = Ee ? f ? Fe : Ce : f ? Ae : Te, je) {
                    var ze = Object(ee.a)(je.toLowerCase());
                    De = De.filter((function(e) { return Object(ee.a)(e.earningToken[u].symbol.toLowerCase()).includes(ze) }))
                }
                De = function(e) {
                    switch (fe) {
                        case "apr":
                            return Object(U.orderBy)(e, (function(e) { return e.apr ? Object(he.c)(e, ye[e.masterChefIndex].fees.performanceFee / 100).apr : 0 }), "desc");
                        case "earned":
                            return Object(U.orderBy)(e, (function(e) { return e.userData && e.earningTokenPrice ? e.isAutoVault ? Object(he.d)(r, ye[e.masterChefIndex].userData.cakeAtLastUserAction, ye[e.masterChefIndex].userData.userShares, ye[e.masterChefIndex].pricePerFullShare, e.earningTokenPrice, e.earningToken[u].decimals).autoUsdToDisplay : e.userData.pendingReward.times(e.earningTokenPrice).toNumber() : 0 }), "desc");
                        case "totalStaked":
                            return Object(U.orderBy)(e, (function(e) { return e.isAutoVault ? ye[e.masterChefIndex].totalCakeInVault.toNumber() : e.totalStaked.toNumber() }), "desc");
                        default:
                            return e
                    }
                }(De).slice(0, y), we.current = De.length, De = De.map((function(e) { var t, n = e; return n.totalStaked = e.isAutoVault ? null === (t = ye[e.masterChefIndex]) || void 0 === t ? void 0 : t.totalCakeInVault : e.totalStaked, n }));
                var Re = Object(me.jsx)(Bc, { children: De.map((function(e) { return e.isAutoVault ? Object(me.jsx)(en, { pool: e, chainId: u, showStakedOnly: f }, "auto-cake-".concat(null === e || void 0 === e ? void 0 : e.masterChefIndex)) : Object(me.jsx)(Rt, { chainId: u, pool: e, account: r }, "".concat(e.sousId, "-").concat(e.masterChefIndex)) })) }),
                    Me = Object(me.jsx)(Fc, { chainId: u, pools: De, account: r, userDataLoaded: h });
                return -1 !== Nc.indexOf(u) ? Object(me.jsx)(me.Fragment, { children: Object(me.jsxs)(Ec, { children: [Object(me.jsx)("div", { style: { height: 24 } }), Object(me.jsxs)(ae.a, { children: [Object(me.jsxs)(N.F, { justifyContent: "space-between", flexDirection: "row", children: [Object(me.jsx)(N.F, { flexGrow: 5, alignItems: "center", children: Object(me.jsxs)(Pc, { isMobile: n, children: [Object(me.jsx)("img", { src: le.a, alt: "Pool Logo", width: n ? "50" : "100", style: { padding: "".concat(n ? "0px" : "0 10px 10px 10px") } }), Object(me.jsx)(Rc, { children: Object(me.jsxs)(zc, { children: [Object(me.jsx)(Mc, { children: t("BSWAP Pools") }), Object(me.jsx)(Lc, { children: t("Just stake some tokens to earn.") }), Object(me.jsx)(Lc, { children: t("High APR, low risk.") })] }) })] }) }), Object(me.jsx)(N.F, { flexGrow: 3, height: "fit-content", justifyContent: "center", alignItems: "center", children: Object(me.jsx)(Ia, {}) })] }), Object(me.jsxs)(N.F, { alignItems: "center", children: [Object(me.jsx)(N.lb, { children: "Apply to create your own pool" }), Object(me.jsx)("a", { style: { marginLeft: "16px" }, target: "_blank", rel: "noreferrer", href: "https://forms.monday.com/forms/f647b20d6a085144d4679fd26fd4a4d6?r=use1", children: Object(me.jsx)(N.l, { children: "Apply" }) })] })] }), Object(me.jsxs)(ne.a, { children: [Object(me.jsx)(Oa, { stakedOnly: f, setStakedOnly: g, viewMode: te, setViewMode: de, setSortOption: ge, setSearchQuery: xe }), Object(me.jsx)("p", { style: { color: "white", textAlign: "center", margin: "16px", display: "none" }, children: "If you have tokens on previous pools, please use below button to withdraw!" }), Object(me.jsx)("div", { style: { display: "none" }, children: Object(me.jsxs)(N.F, { justifyContent: "center", children: [Object(me.jsx)(N.l, { disabled: 56 !== u, onClick: Be, style: { margin: "16px" }, children: "Withdraw From Manual Pool" }), Object(me.jsx)(N.l, { disabled: 56 !== u, onClick: Pe, style: { margin: "16px" }, children: "Withdraw From Auto Pool" })] }) }), Object(me.jsxs)(Ac.f, { selectedTabClassName: "is-selected", selectedTabPanelClassName: "is-selected", onSelect: function(t) { return function(t) { e.pathname = 0 === t ? "/pools" : "/pools/history" }(t) }, children: [Object(me.jsxs)(Ac.b, { children: [Object(me.jsx)(Ac.a, { children: Object(me.jsx)(N.lb, { children: t("Live") }) }), Object(me.jsx)(Ac.a, { children: Object(me.jsx)(N.lb, { children: t("Finished") }) })] }), Object(me.jsxs)(Dc.d, { bgColor: a.custom.tertiary, borderRadius: "0 0 3px 3px", padding: "20px 10px", children: [Object(me.jsxs)(Ac.d, { children: [r && !h && f && Object(me.jsx)(N.F, { justifyContent: "center", mb: "4px", children: Object(me.jsx)(se.a, {}) }), te === I.CARD ? Re : Me, Object(me.jsx)("div", { ref: M })] }), Object(me.jsxs)(Ac.d, { children: [Ee && Object(me.jsx)(N.F, { justifyContent: "center", children: Object(me.jsx)(N.lb, { fontSize: "20px", color: "failure", pb: "32px", pt: "32px", textAlign: "center", children: t("These pools are no longer distributing rewards. Please unstake your tokens.") }) }), r && !h && f && Object(me.jsx)(N.F, { justifyContent: "center", mb: "4px", children: Object(me.jsx)(se.a, {}) }), te === I.CARD ? Re : Me, Object(me.jsx)("div", { ref: M })] })] })] })] })] }) }) : Object(me.jsxs)(N.F, { justifyContent: "center", alignItems: "center", style: { height: "calc(100vh - 57px)", color: "red" }, children: [Object(me.jsx)("h3", { children: "Please switch to BSC mainnet!" }), Object(me.jsx)("div", { ref: M })] })
            }
        }
    }
]);