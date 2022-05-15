(this["webpackJsonpsphynx-frontend"] = this["webpackJsonpsphynx-frontend"] || []).push([
    [39], {
        1843: function(e, t, n) {
            "use strict";
            n.r(t);
            var a, i, r, c, s, l, o, d, b, u, j, x, p, h, f, m, O, g, w, y, v, k, I, S, _, F, T, z, N, C, E, B, D, P, W, A, V, M, R, L, Q, Y, q, H, G, U = n(11),
                X = n(10),
                J = n(7),
                K = n(3),
                Z = n.n(K),
                $ = n(1),
                ee = n(5),
                te = n(83),
                ne = n(6),
                ae = n(67),
                ie = n.n(ae),
                re = n(2),
                ce = n(25),
                se = n(50),
                le = n(324),
                oe = n(513),
                de = n(65),
                be = n(71),
                ue = n(1522),
                je = n(1523),
                xe = n(1524),
                pe = n(101),
                he = n(88),
                fe = n(1525),
                me = n(49),
                Oe = n(18),
                ge = n(84),
                we = n.n(ge),
                ye = n(116),
                ve = n(129),
                ke = n(795),
                Ie = n(17),
                Se = n(1484),
                _e = n(1481),
                Fe = n(330),
                Te = n(328),
                ze = n(1499),
                Ne = n(1500),
                Ce = n(516),
                Ee = n(1498),
                Be = n(41),
                De = n(45),
                Pe = n(528),
                We = n(47),
                Ae = n(653),
                Ve = n(1587),
                Me = n(0),
                Re = ee.default.div(a || (a = Object(J.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-left: ", ";\n  .chart-header {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    width: 100%;\n    align-items: center;\n    font-size: ", ";\n    .header-card {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      height: ", ";\n      border-radius: 3px;\n      border: #aaa 1px solid;\n      margin-right: 20px;\n      padding: 0 10px;\n    }\n  }\n  .chart-content {\n    display: flex;\n    flex-direction: ", ";\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    .doughnut {\n      padding: 10px;\n      width: fit-content;\n    }\n    .chart-label {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      width: fit-content;\n      padding: 10px;\n      .distribute-label {\n        display: flex;\n        align-items: center;\n        width: 100%;\n        padding: 5px;\n        .distribute-name {\n          text-align: left;\n          font-size: 13px;\n        }\n      }\n    }\n  }\n"])), (function(e) { return e.isMobile ? "0px" : "-20px" }), (function(e) { return e.isMobile ? "15px" : "20px" }), (function(e) { return e.isMobile ? "30px" : "40px" }), (function(e) { return e.isMobile ? "column" : "row" })),
                Le = ee.default.div(i || (i = Object(J.a)(["\n  background-color: ", ";\n  height: 20px;\n  width: 20px;\n  min-width: 20px;\n  border: 1px #aaa solid;\n  border-radius: 3px;\n  margin-right: 20px;\n"])), (function(e) { return e.color })),
                Qe = ["#0066cc", "#4cb140", "#009596", "#f4c145", "#ec7a08"],
                Ye = ["Burn", "SphynxLock", "Presale", "Liquidity", "Unlocked"],
                qe = function(e) {
                    var t = e.symbol,
                        n = e.distributeData,
                        a = !Object(re.zb)().isXl,
                        i = { labels: Ye, datasets: [{ data: n, backgroundColor: Qe, hoverBackgroundColor: Qe }] },
                        r = { legend: { display: !1, position: "right" }, responsive: !1, maintainAspectRatio: !0, elements: { arc: { borderWidth: 0 }, center: { text: t } }, cutoutPercentage: 80 },
                        c = [{
                            beforeDraw: function(e) {
                                var t = e.width,
                                    n = e.height,
                                    a = e.ctx;
                                a.restore();
                                var i = Number((n / 100).toFixed(2));
                                a.font = "30px sans-serif", a.fillStyle = "#fff", a.textBaseline = "top";
                                var r = e.config.options.elements.center.text,
                                    c = Math.round((t - a.measureText(r).width) / 2),
                                    s = n / 2 - 16 * i;
                                a.fillText(r, c, s), a.font = "20px sans-serif", a.textBaseline = "top", r = "Distribution", c = Math.round((t - a.measureText(r).width) / 2), s = n / 2, a.fillStyle = "#fff", a.fillText(r, c, s), a.save()
                            }
                        }];
                    return Object(Me.jsxs)(Re, { isMobile: a, children: [Object(Me.jsxs)("div", { className: "chart-header", children: [Object(Me.jsx)("div", { className: "header-card", children: "Sphynx" }), Object(Me.jsx)("div", { className: "header-str", children: "DYOR Area" })] }), Object(Me.jsxs)("div", { className: "chart-content", children: [Object(Me.jsx)("div", { className: "doughnut", children: Object(Me.jsx)(Ve.a, { data: i, width: a ? 151 : 201, height: a ? 151 : 201, options: r, plugins: c }) }), Object(Me.jsx)("div", { className: "chart-label", children: Ye.map((function(e, t) { return Object(Me.jsxs)("div", { className: "distribute-label", children: [Object(Me.jsx)(Le, { color: Qe[t] }), Object(Me.jsx)("div", { className: "distribute-name", children: "".concat(Ye[t], " ").concat(n[t], "%") })] }, e) })) })] })] })
                },
                He = Object(ee.keyframes)(r || (r = Object(J.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n"]))),
                Ge = ee.default.div(c || (c = Object(J.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-flow: column;\n  color: white;\n  margin-top: 24px;\n  text-align: center;\n  p {\n    line-height: 24px;\n  }\n  .pendingTx {\n    animation: ", " 2s linear infinite;\n  }\n"])), He),
                Ue = ee.default.div(s || (s = Object(J.a)(["\n  width: 100%;\n"]))),
                Xe = Object(ee.default)(re.lb)(l || (l = Object(J.a)(["\n  color: white;\n  font-weight: 600;\n  line-height: 1.5;\n  font-size: 14px;\n  text-align: left;\n  padding: 0px;\n  ", " {\n    font-size: 20px;\n  }\n  ", " {\n    font-size: 30px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm }), (function(e) { return e.theme.mediaQueries.md })),
                Je = Object(ee.default)(Xe)(o || (o = Object(J.a)(["\n  font-size: 15px;\n  ", " {\n    font-size: 22px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                Ke = ee.default.div(d || (d = Object(J.a)(["\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  text-align: center;\n  flex-wrap: wrap;\n"]))),
                Ze = ee.default.div(b || (b = Object(J.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  border-radius: 10px;\n  background: ", ";\n"])), (function(e) { return e.theme.custom.tertiary })),
                $e = ee.default.div(u || (u = Object(J.a)(["\n  width: 100%;\n  background: ", ";\n  padding: 20px;\n"])), (function(e) { return e.theme.custom.tertiary })),
                et = Object(ee.default)(re.F)(j || (j = Object(J.a)(["\n  width: 100%;\n  flex-direction: column;\n  background: ", ";\n  border: 1px solid ", ";\n  border-radius: 5px;\n  padding: 17px;\n  margin-bottom: 10px;\n  ", " {\n    width: 57%;\n    margin-bottom: 0px;\n  }\n"])), (function(e) { return e.theme.custom.primary }), (function(e) { return e.theme.custom.coloredBorder }), (function(e) { return e.theme.mediaQueries.xl })),
                tt = ee.default.div(x || (x = Object(J.a)(["\n  font-size: 18px;\n  font-weight: 600;\n  color: white;\n  padding-bottom: 4px;\n  text-align: left;\n  font-weight: 600;\n"]))),
                nt = Object(ee.default)(re.lb)(p || (p = Object(J.a)(["\n  font-size: 14px;\n  text-align: left;\n  font-weight: 500;\n"]))),
                at = ee.default.div(h || (h = Object(J.a)(["\n  margin-top: 30px;\n"]))),
                it = ee.default.div(f || (f = Object(J.a)(["\n  width: 100%;\n  opacity: 0.1;\n  border-bottom: 1px solid #e7fffe;\n  margin: 10px 0;\n"]))),
                rt = ee.default.div(m || (m = Object(J.a)(["\n  display: flex;\n  width: 100%;\n  align-items: center;\n  gap: 16px;\n"]))),
                ct = ee.default.div(O || (O = Object(J.a)(["\n  font-weight: 600;\n  font-size: 25px;\n  text-align: left;\n"]))),
                st = ee.default.div(g || (g = Object(J.a)(["\n  font-weight: 600;\n  font-size: 15px;\n  color: #a7a7cc;\n  text-align: left;\n"]))),
                lt = ee.default.div(w || (w = Object(J.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"]))),
                ot = ee.default.div(y || (y = Object(J.a)(["\n  margin-top: 25px;\n"]))),
                dt = ee.default.div(v || (v = Object(J.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  margin-top: 30px;\n"]))),
                bt = Object(ee.default)(re.F)(k || (k = Object(J.a)(["\n  flex-wrap: wrap;\n  padding-bottom: 10px;\n  gap: 5px;\n  justify-content: space-between;\n"]))),
                ut = ee.default.div(I || (I = Object(J.a)(["\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 4px;\n  flex-direction: row;\n  div {\n    font-size: 14px;\n  }\n  div:last-child {\n    color: #f2c94c;\n    font-size: 14px;\n    font-weight: 600;\n    word-break: break-word;\n    text-align: left;\n  }\n  ", " {\n    justify-content: space-between;\n  }\n"])), (function(e) { return e.theme.mediaQueries.lg })),
                jt = ee.default.div(S || (S = Object(J.a)(["\n  margin-top: -28px;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 16px;\n  letter-spacing: 0.15em;\n  color: #f2c94c;\n  text-align: left;\n"]))),
                xt = ee.default.div(_ || (_ = Object(J.a)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: space-evenly;\n  background: ", ";\n  box-sizing: border-box;\n  border-radius: 5px;\n  width: 100%;\n  padding: 15px;\n  position: relative;\n  margin: 10px 0;\n  ", " {\n    padding: 25px;\n  }\n  ", " {\n    width: 50%;\n    margin: 0;\n    padding: 25px;\n  }\n"])), (function(e) { return e.theme.custom.tertiary }), (function(e) { return e.theme.mediaQueries.sm }), (function(e) { return e.theme.mediaQueries.xl })),
                pt = Object(ee.default)(re.lb)(F || (F = Object(J.a)(["\n  font-weight: 600;\n  font-size: 15px;\n  margin-top: 16px;\n  ", " {\n    font-size: 20px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                ht = Object(ee.default)(re.lb)(T || (T = Object(J.a)(["\n  font-weight: 600;\n  font-size: 12px;\n  color: white;\n  ", " {\n    font-size: 15px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                ft = ee.default.div(z || (z = Object(J.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 24px;\n  img {\n    width: 20px;\n    height: 20px;\n    margin-right: 5px;\n  }\n  div:last-child {\n    text-align: center;\n    font-weight: 600;\n    font-size: 12px;\n    color: white;\n  }\n"]))),
                mt = Object(ee.default)(re.F)(N || (N = Object(J.a)(["\n  width: 100%;\n  justify-content: center;\n  border-radius: 5px;\n  align-items: center;\n"]))),
                Ot = ee.default.div(C || (C = Object(J.a)(["\n  width: 100%;\n  border-radius: 5px;\n  padding: 0px 10px;\n  & > div > div {\n    font-size: 12px;\n  }\n  ", " {\n    margin: 0;\n    & > div > div {\n      font-size: 12px;\n    }\n  }\n"])), (function(e) { return e.theme.mediaQueries.xl })),
                gt = ee.default.div(E || (E = Object(J.a)(["\n  width: 100%;\n  margin-bottom: 20px;\n"]))),
                wt = Object(ee.default)(re.F)(B || (B = Object(J.a)(["\n  width: 100%;\n  justify-content: space-between;\n  margin-bottom: 20px;\n"]))),
                yt = ee.default.div(D || (D = Object(J.a)(["\n  padding: 0 10px;\n  box-sizing: border-box;\n  justify-content: center;\n  display: flex;\n  margin-right: 5px;\n  & input {\n    width: 100%;\n    border: 1px solid #595989;\n    border-radius: 5px;\n    background: transparent;\n    box-shadow: none;\n    outline: none;\n    color: white;\n    font-size: 13px;\n    &::placeholder {\n      color: white;\n    }\n    margin-right: 10px;\n  }\n"]))),
                vt = Object(ee.default)(re.l)(P || (P = Object(J.a)(["\n  border-radius: 5px;\n  border: none;\n  font-size: 13px;\n  background: ", ";\n  outline: none;\n  color: white;\n"])), (function(e) { return e.theme.custom.gradient })),
                kt = Object(ee.default)(re.l)(W || (W = Object(J.a)(["\n  border-radius: 5px;\n  border: none;\n  font-size: 13px;\n  background: ", ";\n  outline: none;\n  color: white;\n  width: 100%;\n"])), (function(e) { return e.theme.custom.secondary })),
                It = ee.default.div(A || (A = Object(J.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n"]))),
                St = ee.default.div(V || (V = Object(J.a)(["\n  display: flex;\n  justify-content: center;\n  div:first-child {\n    width: 150px;\n    align-items: center;\n    display: flex;\n    padding: 5px;\n    text-align: start;\n    color: #a7a7cc;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 11px;\n    ", " {\n      font-size: 14px;\n      width: 190px;\n    }\n  }\n  div:last-child {\n    flex: 1;\n    min-width: 120px;\n    align-items: center;\n    display: flex;\n    padding: 5px;\n    text-align: start;\n    word-break: break-all;\n    color: #f2c94c;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 11px;\n    ", " {\n      font-size: 14px;\n    }\n  }\n"])), (function(e) { return e.theme.mediaQueries.lg }), (function(e) { return e.theme.mediaQueries.md })),
                _t = Object(ee.default)(St)(M || (M = Object(J.a)(["\n  div:first-child {\n    border-bottom: 0px;\n  }\n  div:last-child {\n    border-bottom: 0px;\n  }\n"]))),
                Ft = ee.default.div(R || (R = Object(J.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  flex-direction: ", ";\n  gap: 20px;\n  border-radius: 5px;\n  margin-top: 30px;\n  margin-bottom: 30px;\n  .chart-field {\n    padding: 10px;\n  }\n"])), (function(e) { return e.isMobile ? "column" : "row" })),
                Tt = ee.default.div(L || (L = Object(J.a)(["\n  width: 100%;\n  margin-bottom: 20px;\n"]))),
                zt = ee.default.div(Q || (Q = Object(J.a)(["\n  background-color: #23234b;\n  border-radius: 8px;\n  position: relative;\n"]))),
                Nt = ee.default.div(Y || (Y = Object(J.a)(["\n  width: ", ";\n  height: 12px;\n  background: ", ";\n  // background: linear-gradient(90deg, #4a65d5 0%, #4a65d5 100%);\n  border-radius: 8px;\n  padding: 1px;\n  display: flex;\n  justify-content: center;\n  font-size: 9px;\n  font-weight: bold;\n"])), (function(e) { return "".concat(e.state, "%") }), (function(e) { return e.theme.custom.gradient })),
                Ct = ee.default.div(q || (q = Object(J.a)(["\n  display: flex;\n  gap: 10px;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n"]))),
                Et = ee.default.div(H || (H = Object(J.a)(["\n  background: ", ";\n  padding: 10px;\n  border-radius: 3px;\n  display: flex;\n  width: fit-content;\n  align-items: center;\n"])), (function(e) { return e.color })),
                Bt = ee.default.div(G || (G = Object(J.a)(["\n  display: flex;\n  justify-content: space-around;\n  width: 100%;\n  text-align: center;\n  flex-wrap: wrap;\n  margin-top: 30px;\n  padding: 0 30px;\n"]))),
                Dt = function() { return Object(Me.jsxs)(re.F, { alignItems: "center", style: { paddingInline: "8px", paddingTop: "4px", paddingBottom: "4px", background: "#7710e7", borderRadius: "4px" }, children: [Object(Me.jsx)("img", { src: "/images/net/brise.png", style: { width: "24px", height: "24px", marginRight: "4px", borderRadius: "4px" }, alt: "brise-logo" }), "Bitgert Startup Studio"] }) };
            t.default = function() {
                var e = Object(te.i)(),
                    t = Object(ce.b)().t,
                    n = Object(te.g)(),
                    a = Object(he.a)(),
                    i = a.toastSuccess,
                    r = a.toastError,
                    c = Object(se.e)().menuToggled,
                    s = Object($.useState)(!1),
                    l = Object(X.a)(s, 2),
                    o = l[0],
                    d = l[1],
                    b = Object(Oe.a)(),
                    u = b.library,
                    j = b.account,
                    x = b.chainId,
                    p = u.getSigner(),
                    h = Object(De.e)(parseInt(e.chainId)),
                    f = Object($.useMemo)((function() { return p ? Object(me.K)(p, x) : Object(me.K)(h, e.chainId) }), [p]),
                    m = Object($.useState)(""),
                    O = Object(X.a)(m, 2),
                    g = O[0],
                    w = O[1],
                    y = Object($.useState)(null),
                    v = Object(X.a)(y, 2),
                    k = v[0],
                    I = v[1],
                    S = Object($.useState)(0),
                    _ = Object(X.a)(S, 2),
                    F = _[0],
                    T = _[1],
                    z = Object($.useState)(0),
                    N = Object(X.a)(z, 2),
                    C = N[0],
                    E = N[1],
                    B = Object($.useState)(0),
                    D = Object(X.a)(B, 2),
                    P = D[0],
                    W = D[1],
                    A = Object($.useState)(0),
                    V = Object(X.a)(A, 2),
                    M = V[0],
                    R = V[1],
                    L = Object($.useState)(!1),
                    Q = Object(X.a)(L, 2),
                    Y = Q[0],
                    q = Q[1],
                    H = Object($.useState)(!1),
                    G = Object(X.a)(H, 2),
                    J = G[0],
                    K = G[1],
                    ae = Object($.useState)(!1),
                    ge = Object(X.a)(ae, 2),
                    Ve = ge[0],
                    Re = ge[1],
                    Le = Object($.useState)(!1),
                    Qe = Object(X.a)(Le, 2),
                    Ye = Qe[0],
                    He = Qe[1],
                    Pt = Object($.useState)(!1),
                    Wt = Object(X.a)(Pt, 2),
                    At = Wt[0],
                    Vt = Wt[1],
                    Mt = Object($.useState)(!1),
                    Rt = Object(X.a)(Mt, 2),
                    Lt = Rt[0],
                    Qt = Rt[1],
                    Yt = Object($.useState)(!1),
                    qt = Object(X.a)(Yt, 2),
                    Ht = qt[0],
                    Gt = qt[1],
                    Ut = Object($.useState)(!1),
                    Xt = Object(X.a)(Ut, 2),
                    Jt = Xt[0],
                    Kt = Xt[1],
                    Zt = Object($.useState)(!1),
                    $t = Object(X.a)(Zt, 2),
                    en = $t[0],
                    tn = $t[1],
                    nn = Object($.useState)(!1),
                    an = Object(X.a)(nn, 2),
                    rn = an[0],
                    cn = an[1],
                    sn = Object($.useState)(!1),
                    ln = Object(X.a)(sn, 2),
                    on = ln[0],
                    dn = ln[1],
                    bn = Object($.useState)(!1),
                    un = Object(X.a)(bn, 2),
                    jn = un[0],
                    xn = un[1],
                    pn = Object($.useState)(!1),
                    hn = Object(X.a)(pn, 2),
                    fn = hn[0],
                    mn = hn[1],
                    On = Object($.useState)(!1),
                    gn = Object(X.a)(On, 2),
                    wn = gn[0],
                    yn = gn[1],
                    vn = Object($.useState)(!1),
                    kn = Object(X.a)(vn, 2),
                    In = kn[0],
                    Sn = kn[1],
                    _n = Object(Ie.J)(x),
                    Fn = Object($.useRef)(),
                    Tn = Object($.useState)(!0),
                    zn = Object(X.a)(Tn, 2),
                    Nn = zn[0],
                    Cn = zn[1],
                    En = !Object(re.zb)().isXl,
                    Bn = Object($.useState)([0, 0, 0, 0, 0]),
                    Dn = Object(X.a)(Bn, 2),
                    Pn = Dn[0],
                    Wn = Dn[1],
                    An = Object($.useState)(!0),
                    Vn = Object(X.a)(An, 2),
                    Mn = Vn[0],
                    Rn = Vn[1],
                    Ln = parseInt(e.chainId),
                    Qn = Object($.useState)(Ln),
                    Yn = Object(X.a)(Qn, 2),
                    qn = Yn[0],
                    Hn = Yn[1],
                    Gn = Object($.useState)(0),
                    Un = Object(X.a)(Gn, 2),
                    Xn = Un[0],
                    Jn = Un[1],
                    Kn = Object($.useState)(0),
                    Zn = Object(X.a)(Kn, 2),
                    $n = Zn[0],
                    ea = Zn[1],
                    ta = Object($.useState)(0),
                    na = Object(X.a)(ta, 2),
                    aa = na[0],
                    ia = na[1],
                    ra = Object(ee.useTheme)();
                Object($.useEffect)((function() {
                    var e = new AbortController,
                        t = new ie.a(De.j),
                        n = new ie.a(De.d),
                        a = new ie.a(De.b);
                    return function e() {
                            j && t.eth.getBalance(j).then((function(i) {
                                n.eth.getBalance(j).then((function(n) {
                                    a.eth.getBalance(j).then((function(a) {
                                        var r = t.utils.fromWei(i);
                                        r = Number(r).toFixed(3), Jn(r);
                                        var c = t.utils.fromWei(n);
                                        c = Number(c).toFixed(3), ea(c), setTimeout((function() { return e() }), 6e4);
                                        var s = t.utils.fromWei(a);
                                        s = Number(s).toFixed(3), ia(s)
                                    }))
                                }))
                            }))
                        }(),
                        function() { return e.abort() }
                }), [j]);
                var ca = function(e) { return Object(ke.default)(new Date(e), "yyyy-MM-dd HH:mm") },
                    sa = de.b[e.chainId],
                    la = pe.b[e.chainId],
                    oa = [{ presaleItem: "Sale ID:", presaleValue: e.saleId }, { presaleItem: "Token Address", presaleValue: "".concat(k && k.token_address) }, { presaleItem: "Total Supply:", presaleValue: "".concat(Object(Be.j)(parseFloat(M.toString())), " ").concat(k && k.token_symbol) }, { presaleItem: "Tokens For Presale:", presaleValue: "".concat(k && Object(Be.j)(parseFloat((k.hard_cap * k.tier3).toString())), " ").concat(k && k.token_symbol) }, { presaleItem: "Tokens For Liquidity:", presaleValue: "".concat(k && Object(Be.j)(parseFloat((k.listing_rate * k.hard_cap * (k.router_rate + k.default_router_rate) / 100).toString())), " ").concat(k && k.token_symbol) }, { presaleItem: "Soft Cap:", presaleValue: "".concat(k && Object(Be.j)(parseFloat(k.soft_cap)), " ").concat(sa) }, { presaleItem: "Hard Cap:", presaleValue: "".concat(k && Object(Be.j)(parseFloat(k.hard_cap)), " ").concat(sa) }, { presaleItem: "Presale Rate:", presaleValue: "".concat(k && Object(Be.j)(k.tier3.toString()), " ").concat(k && k.token_symbol, " per ").concat(sa) }, { presaleItem: "SphynxSwap Listing Rate:", presaleValue: "".concat(k && Object(Be.j)(k.listing_rate.toString()), " ").concat(k && k.token_symbol, " per ").concat(sa) }, { presaleItem: "SphynxSwap Liquidity:", presaleValue: "".concat(k && k.default_router_rate, "%") }, { presaleItem: "".concat(la, " Liquidity:"), presaleValue: "".concat(k && k.router_rate, "%") }, { presaleItem: "Minimum Contribution:", presaleValue: "".concat(k && Object(Be.j)(k.min_buy), " ").concat(sa) }, { presaleItem: "Maximum Contribution:", presaleValue: "".concat(k && Object(Be.j)(k.max_buy), " ").concat(sa) }, { presaleItem: "Presale Start Time:", presaleValue: "".concat(ca(k && 1e3 * k.start_time)) }, { presaleItem: "Tier1 End Time:", presaleValue: "".concat(ca(k && 1e3 * k.tier1_time)) }, { presaleItem: "Tier2 End Time:", presaleValue: "".concat(ca(k && 1e3 * k.tier2_time)) }, { presaleItem: "Presale End Time:", presaleValue: "".concat(ca(k && 1e3 * k.end_time)) }, { presaleItem: "Liquidity Unlock:", presaleValue: "".concat(ca(k && 1e3 * k.lock_time)) }];
                x !== ne.ChainId.BRISE && x !== ne.ChainId.TESTBRISE || oa.splice(10, 1), Object($.useEffect)((function() { Hn(void 0 === x ? Ln : x) }), [x, Ln]), Object($.useEffect)((function() {
                    var t = function() {
                        var t = Object(U.a)(Z.a.mark((function t() {
                            var n, a, i, r, c, s, l, o, d, b, u, j;
                            return Z.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return n = le.a, a = new ye.Contract(k.token_address, n, h), t.next = 4, a.decimals();
                                    case 4:
                                        return i = t.sent, t.next = 7, a.balanceOf(be.a);
                                    case 7:
                                        return r = t.sent, t.next = 10, we.a.get("".concat("https://thesphynx.co/api2", "/getTokenLockList/").concat(e.chainId, "/").concat(k.token_address));
                                    case 10:
                                        for (c = t.sent, s = c.data, l = 0, o = 0; o < s.length; o++) l += s[o].lock_supply;
                                        d = parseFloat(ve.utils.formatUnits(r, i)), b = k.hard_cap * k.tier1, u = k.listing_rate * k.hard_cap * (k.router_rate + k.default_router_rate) / 100, j = M - d - l - b - u, Wn([parseFloat((d / M * 100).toFixed(5)), parseFloat((l / M * 100).toFixed(5)), parseFloat((b / M * 100).toFixed(5)), parseFloat((u / M * 100).toFixed(5)), parseFloat((j / M * 100).toFixed(5))]);
                                    case 19:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function() { return t.apply(this, arguments) }
                    }();
                    k && M && t()
                }), [k, M]), Object($.useEffect)((function() {
                    return Fn.current = setInterval((function() {
                            if (k) {
                                var e = Math.floor((new Date).getTime() / 1e3);
                                parseInt(k.start_time) > e ? cn(!0) : parseInt(k.start_time) < e && e < parseInt(k.tier1_time) ? (cn(!1), Gt(!0)) : parseInt(k.tier1_time) < e && e < parseInt(k.tier2_time) ? (cn(!1), Gt(!1), Kt(!0)) : parseInt(k.tier2_time) < e && e < parseInt(k.end_time) ? (cn(!1), Gt(!1), Kt(!1), tn(!0)) : e >= parseInt(k.end_time) && (cn(!1), dn(!0))
                            }
                        }), 1e4),
                        function() { clearInterval(Fn.current) }
                }), [Fn, k]), Object($.useEffect)((function() { x && parseInt(e.chainId) !== x && alert("Please make sure you are on the ".concat(oe.a[parseInt(e.chainId)], "!")), !Number.isNaN(parseInt(e.saleId)) && e.chainId && we.a.get("".concat("https://thesphynx.co/api2", "/getPresaleInfo/").concat(e.saleId, "/").concat(e.chainId)).then((function(e) { e.data && I(e.data) })) }), [e.saleId, x]), Object($.useEffect)((function() {
                    var t = function() {
                        var t = Object(U.a)(Z.a.mark((function t() {
                            var n, a, i, r, c, s;
                            return Z.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, t.next = 3, f.totalContributionBNB(e.saleId);
                                    case 3:
                                        return n = t.sent.toString(), a = parseFloat(ve.utils.formatEther(n)), T(a), a < (null === k || void 0 === k ? void 0 : k.soft_cap) && on && xn(!0), t.next = 9, f.presaleStatus(e.saleId);
                                    case 9:
                                        return n = t.sent, d(n), t.next = 13, f.isDeposited(e.saleId);
                                    case 13:
                                        return n = t.sent, K(n), t.next = 17, f.iswhitelist(e.saleId);
                                    case 17:
                                        return n = t.sent, Re(n), i = le.a, r = new ye.Contract(k.token_address, i, h), t.next = 23, r.totalSupply();
                                    case 23:
                                        if (n = t.sent.toString(), a = parseFloat(ve.utils.formatUnits(n, k.token_decimal)), R(a), !j) { t.next = 49; break }
                                        return (c = []).push({ address: _n, name: "whitelist1", params: [e.saleId, j] }), c.push({ address: _n, name: "whitelist2", params: [e.saleId, j] }), c.push({ address: _n, name: "basewhitelist", params: [j] }), c.push({ address: _n, name: "userContributionBNB", params: [e.saleId, j] }), c.push({ address: _n, name: "userContributionToken", params: [e.saleId, j] }), c.push({ address: _n, name: "isClaimed", params: [e.saleId, j] }), t.next = 36, Object(We.a)(Ae, c, qn);
                                    case 36:
                                        return s = t.sent, He(s[0][0]), Vt(s[1][0]), Qt(s[2][0]), a = parseFloat(ve.utils.formatEther(s[3][0])), E(a), a = parseFloat(ve.utils.formatUnits(s[4][0], k.token_decimal)), W(a), q(s[5][0]), t.next = 47, f.whitelist1(e.saleId, j);
                                    case 47:
                                        n = t.sent, He(n);
                                    case 49:
                                        Cn(!1), t.next = 56;
                                        break;
                                    case 52:
                                        t.prev = 52, t.t0 = t.catch(0), console.log("Error", t.t0), Cn(!1);
                                    case 56:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [0, 52]
                            ])
                        })));
                        return function() { return t.apply(this, arguments) }
                    }();
                    k && t()
                }), [k, e.saleId, j, on, x]);
                var da = function() {
                        var t = Object(U.a)(Z.a.mark((function t() {
                            var n, a, c;
                            return Z.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (t.prev = 0, parseInt(e.chainId) === x) { t.next = 5; break }
                                        return n = oe.a[parseInt(e.chainId)], alert("Please make sure you are on the ".concat(n, "!")), t.abrupt("return");
                                    case 5:
                                        if (!(!Number.isNaN(parseInt(e.saleId)) && parseFloat(g) > 0 && k)) { t.next = 18; break }
                                        return a = ve.utils.parseEther(g.toString()), mn(!0), t.next = 11, f.contribute(e.saleId, { value: a });
                                    case 11:
                                        return c = t.sent, t.next = 14, c.wait();
                                    case 14:
                                        1 === t.sent.status && we.a.post("".concat("https://thesphynx.co/api2", "/contribute"), { saleId: e.saleId, chainId: x }).then((function(e) { console.log("response", e) })), mn(!1), i("Success", "Operation successfully!");
                                    case 18:
                                        t.next = 24;
                                        break;
                                    case 20:
                                        t.prev = 20, t.t0 = t.catch(0), mn(!1), t.t0.data ? r("Failed", t.t0.data.message) : r("Failed", t.t0.message);
                                    case 24:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [0, 20]
                            ])
                        })));
                        return function() { return t.apply(this, arguments) }
                    }(),
                    ba = function() {
                        var t = Object(U.a)(Z.a.mark((function t() {
                            var n, a;
                            return Z.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (t.prev = 0, parseInt(e.chainId) === x) { t.next = 5; break }
                                        return n = oe.a[parseInt(e.chainId)], alert("Please make sure you are on the ".concat(n, "!")), t.abrupt("return");
                                    case 5:
                                        return yn(!0), t.next = 8, f.claimToken(e.saleId);
                                    case 8:
                                        return a = t.sent, t.next = 11, a.wait();
                                    case 11:
                                        yn(!1), i("Success", "Operation successfully!"), t.next = 19;
                                        break;
                                    case 15:
                                        t.prev = 15, t.t0 = t.catch(0), yn(!1), t.t0.data ? r("Failed", t.t0.data.message) : r("Failed", t.t0.message);
                                    case 19:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [0, 15]
                            ])
                        })));
                        return function() { return t.apply(this, arguments) }
                    }(),
                    ua = function() {
                        var t = Object(U.a)(Z.a.mark((function t() {
                            var n, a;
                            return Z.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (t.prev = 0, parseInt(e.chainId) === x) { t.next = 5; break }
                                        return n = oe.a[parseInt(e.chainId)], alert("Please make sure you are on the ".concat(n, "!")), t.abrupt("return");
                                    case 5:
                                        return Sn(!0), t.next = 8, f.emergencyWithdraw(e.saleId);
                                    case 8:
                                        return a = t.sent, t.next = 11, a.wait();
                                    case 11:
                                        Sn(!1), i("Success", "Operation successfully!"), t.next = 19;
                                        break;
                                    case 15:
                                        t.prev = 15, t.t0 = t.catch(0), Sn(!1), t.t0.data ? r("Failed", t.t0.data.message) : r("Failed", t.t0.message);
                                    case 19:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [0, 15]
                            ])
                        })));
                        return function() { return t.apply(this, arguments) }
                    }(),
                    ja = function() {
                        var e = Object(U.a)(Z.a.mark((function e(t) {
                            var n, a;
                            return Z.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (56 === qn) { e.next = 3; break }
                                        return r("Failed", "Please connect to BSC network!"), e.abrupt("return");
                                    case 3:
                                        return e.prev = 3, n = new ye.Contract(Object(Ie.B)(qn), Pe, p), e.next = 7, n.mintNFT(j, "".concat(t), { value: ve.utils.parseEther((.5 * t).toString()) });
                                    case 7:
                                        return a = e.sent, e.next = 10, a.wait();
                                    case 10:
                                        e.next = 15;
                                        break;
                                    case 12:
                                        e.prev = 12, e.t0 = e.catch(3), r("Failed", "Your action is failed!");
                                    case 15:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [3, 12]
                            ])
                        })));
                        return function(t) { return e.apply(this, arguments) }
                    }();
                return Object(Me.jsxs)(Ge, {
                    children: [Object(Me.jsx)(Ue, { children: Object(Me.jsx)(re.F, { justifyContent: "space-between", alignItems: "center", flexDirection: "row", children: Object(Me.jsxs)(re.F, { alignItems: "center", children: [Object(Me.jsx)(ue.a, { width: "40", height: "40" }), Object(Me.jsx)(re.F, { flexDirection: "column", ml: "10px", children: Object(Me.jsx)(Xe, { children: t("SphynxSale Automated Warning System") }) })] }) }) }), Mn && Object(Me.jsx)(Ue, { children: Object(Me.jsx)(re.F, { justifyContent: "space-between", alignItems: "center", flexDirection: "row", mt: "30px", children: Object(Me.jsxs)(re.F, { alignItems: "center", children: [Object(Me.jsx)(je.a, { width: "40", height: "40" }), Object(Me.jsx)(re.F, { flexDirection: "column", ml: "10px", children: Object(Me.jsx)(Je, { children: t("1 Warnings Detected") }) })] }) }) }), Mn && Object(Me.jsx)(Ke, { style: { marginTop: "32px" }, children: Object(Me.jsxs)(et, { onClick: function() { Rn(!1) }, style: { cursor: "pointer" }, children: [Object(Me.jsx)(tt, { children: "DeFi Zone Warning" }), Object(Me.jsx)(nt, { children: "This sale is listed in the DeFi Zone. Presales in this area use custom contracts that are not vetted by the SphynxSale team. Developers of tokens in this area can block transfers, can stop users from claiming tokens, can stop trading on exchanges and requires extra vetting. Participate at your own risk!" })] }) }), Object(Me.jsxs)(Ft, {
                        isMobile: En,
                        children: [Object(Me.jsxs)("div", { className: "chart-field", style: { background: ra.custom.tertiary }, children: [Object(Me.jsx)(re.N, { style: { marginBottom: "16px" }, href: "/launchpad/listing/".concat(e.chainId), children: "Back to list" }), Object(Me.jsx)(qe, { symbol: k && k.token_symbol, distributeData: Pn }), Object(Me.jsxs)(Bt, { style: { justifyContent: "flex-start", textAlign: "left", flexFlow: "column", padding: "32px" }, children: [Object(Me.jsx)(re.F, { justifyContent: "center", children: Object(Me.jsx)("video", { id: "gif-video", src: "/images/animation.mp4", width: "250px", height: "250px", style: { marginBottom: "12px" }, autoPlay: !0, loop: !0 }) }), Object(Me.jsx)(re.lb, { children: "Not only do Scion Sphynxes grant presale Whitelists, but they are also the only Sphynxes to yield $SPHYNX daily." }), Object(Me.jsx)(re.lb, { children: "Each staked Scion Sphynx yields an equal share from daily $SPHYNX emissions. They make some pretty sweet profile pics too." }), Object(Me.jsxs)(re.F, { mt: "10px", mb: "10px", alignItems: "center", flexWrap: "wrap", justifyContent: "center", children: [Object(Me.jsx)(vt, { onClick: function() { return ja(2) }, scale: "sm", mx: "5px", my: "5px", children: t("Mint 2 Sphynx NFTs") }), Object(Me.jsx)(vt, { onClick: function() { return ja(1) }, scale: "sm", mx: "5px", my: "5px", children: t("Mint 1 Sphynx NFT") })] })] })] }), Object(Me.jsx)(Ze, { toggled: c, children: Object(Me.jsx)($e, { children: Nn ? Object(Me.jsx)(mt, { children: Object(Me.jsx)(Ee.a, {}) }) : Object(Me.jsxs)(Me.Fragment, { children: [Object(Me.jsxs)(re.F, { justifyContent: "space-between", children: [Object(Me.jsxs)(rt, { children: [Object(Me.jsx)("img", { src: k && ("" === k.logo_link ? _e.a : k.logo_link), width: "64px", height: "64px", alt: "token icon" }), Object(Me.jsxs)(lt, { children: [Object(Me.jsx)(ct, { children: k && k.token_symbol }), Object(Me.jsx)(st, { children: k && k.token_name })] })] }), k.is_brise && Object(Me.jsx)(Dt, {})] }), Object(Me.jsx)(ot, { children: Object(Me.jsx)(re.lb, { fontSize: "14px", textAlign: "left", color: "white", children: k && k.project_dec }) }), Object(Me.jsxs)(dt, { children: [Object(Me.jsxs)(bt, { children: [Object(Me.jsxs)(ut, { children: [Object(Me.jsx)(re.lb, { color: "white", bold: !0, children: "Presale Address:" }), Object(Me.jsx)(re.lb, { children: _n })] }), qn === ne.ChainId.BRISE && Object(Me.jsxs)(ut, { children: [Object(Me.jsx)(re.lb, { color: "white", bold: !0, children: "Finalizer:" }), Object(Me.jsx)(re.lb, { children: "0xcd40711ce9d5e2bd3113ae3ae197332a141cab65" })] })] }), Object(Me.jsxs)(jt, { children: ["Do not send ", sa, " to the token address!"] })] }), Object(Me.jsx)(at, {}), Object(Me.jsx)(Ke, { children: Object(Me.jsx)(Ot, { children: oa.map((function(e, t) { var n = "presale-data-".concat(t); return Object(Me.jsx)("div", { children: t === oa.length - 1 ? 10 === t && x === ne.ChainId.BRISE ? Object(Me.jsx)(Me.Fragment, {}) : Object(Me.jsxs)(_t, { children: [Object(Me.jsx)(re.lb, { children: e.presaleItem }), Object(Me.jsx)(re.lb, { children: e.presaleValue })] }) : Object(Me.jsxs)(St, { children: [Object(Me.jsx)(re.lb, { children: e.presaleItem }), Object(Me.jsx)(re.lb, { children: e.presaleValue })] }) }, n) })) }) }), Object(Me.jsx)(at, {})] }) }) }), Object(Me.jsx)(xt, {
                            children: Nn ? Object(Me.jsx)(mt, { children: Object(Me.jsx)(Ee.a, {}) }) : Object(Me.jsxs)(Me.Fragment, {
                                children: [en ? Object(Me.jsxs)(Me.Fragment, { children: [Object(Me.jsxs)(Ct, { children: [k && k.website_link ? Object(Me.jsx)(re.N, { external: !0, href: k.website_link, "aria-label": "social2", children: Object(Me.jsx)(Et, { color: "#710D89", children: Object(Me.jsx)(Te.a, { width: "15px", height: "15px" }) }) }) : null, k && k.github_link ? Object(Me.jsx)(re.N, { external: !0, href: k.github_link, "aria-label": "social2", children: Object(Me.jsx)(Et, { color: "#3f4492", children: Object(Me.jsx)("img", { src: ze.a, alt: "Git Logo", width: "15px", height: "15px" }) }) }) : null, k && k.twitter_link ? Object(Me.jsx)(re.N, { external: !0, href: k.twitter_link, "aria-label": "twitter", children: Object(Me.jsx)(Et, { color: "#33AAED", children: Object(Me.jsx)(Fe.a, { width: "15px", height: "15px" }) }) }) : null, k && k.reddit_link ? Object(Me.jsx)(re.N, { external: !0, href: k.reddit_link, "aria-label": "discord", children: Object(Me.jsx)(Et, { color: "#2260DA", children: Object(Me.jsx)("img", { src: Ne.a, alt: "Git Logo", width: "15px", height: "15px" }) }) }) : null, k && k.telegram_link ? Object(Me.jsx)(re.N, { external: !0, href: k.telegram_link, "aria-label": "telegram", children: Object(Me.jsx)(Et, { color: "#3E70D1", children: Object(Me.jsx)(Ce.a, { width: "15px", height: "15px" }) }) }) : null] }), Object(Me.jsx)(pt, { children: "Public Sale" })] }) : Object(Me.jsxs)(Me.Fragment, { children: [Object(Me.jsxs)(Ct, { children: [k && k.website_link ? Object(Me.jsx)(re.N, { external: !0, href: k.website_link, "aria-label": "social2", children: Object(Me.jsx)(Et, { color: "#710D89", children: Object(Me.jsx)(Te.a, { width: "15px", height: "15px" }) }) }) : null, k && k.github_link ? Object(Me.jsx)(re.N, { external: !0, href: k.github_link, "aria-label": "social2", children: Object(Me.jsx)(Et, { color: "#3f4492", children: Object(Me.jsx)("img", { src: ze.a, alt: "Git Logo", width: "15px", height: "15px" }) }) }) : null, k && k.twitter_link ? Object(Me.jsx)(re.N, { external: !0, href: k.twitter_link, "aria-label": "twitter", children: Object(Me.jsx)(Et, { color: "#33AAED", children: Object(Me.jsx)(Fe.a, { width: "15px", height: "15px" }) }) }) : null, k && k.reddit_link ? Object(Me.jsx)(re.N, { external: !0, href: k.reddit_link, "aria-label": "discord", children: Object(Me.jsx)(Et, { color: "#2260DA", children: Object(Me.jsx)("img", { src: Ne.a, alt: "Git Logo", width: "15px", height: "15px" }) }) }) : null, k && k.telegram_link ? Object(Me.jsx)(re.N, { external: !0, href: k.telegram_link, "aria-label": "telegram", children: Object(Me.jsx)(Et, { color: "#3E70D1", children: Object(Me.jsx)(Ce.a, { width: "15px", height: "15px" }) }) }) : null] }), en ? Object(Me.jsx)(pt, { children: "Public Sale" }) : Object(Me.jsxs)(Me.Fragment, { children: [Object(Me.jsxs)(pt, { children: [Ve ? "WhiteList Enabled" : "Public", " Sale"] }), Object(Me.jsx)(ht, { mb: Ve ? "12px" : "28px", children: J ? Ve ? "Only Whitelisted Wallets can Purchase This Token!" : "Anybody can Purchase This Token!" : "This token is not deposited!" }), Ve && Ye && Object(Me.jsx)(re.lb, { mb: "24px", children: "Your wallet address is on the tier 1 whitelist!" }), Ve && At && Object(Me.jsx)(re.lb, { children: "Your wallet address is on the tier 2 whitelist!" }), Ve && !Ye && !At && Lt && Object(Me.jsx)(re.lb, { children: "Your wallet address is on the tier 2 whitelist!" }), Ve && !Ye && !At && !Lt && Object(Me.jsxs)(ft, { children: [Object(Me.jsx)("img", { src: fe.a, alt: "nuclear icon" }), Object(Me.jsx)(re.lb, { children: "Your wallet address is not whitelisted" })] })] })] }), jn ? Object(Me.jsxs)(Me.Fragment, { children: [Object(Me.jsx)(re.lb, { textAlign: "left", fontSize: "12px", fontWeight: "500", color: "white", children: "This presale has failed!" }), Object(Me.jsxs)(re.lb, { textAlign: "left", fontSize: "12px", fontWeight: "500", mt: "16px", color: "white", children: ["If you participated in the presale click the claim button below to claim your ", sa, "!"] }), Object(Me.jsxs)(vt, { style: { width: "100%" }, mt: "16px", mb: "16px", onClick: ba, disabled: Y || wn, scale: "sm", children: ["Claim ", sa, wn && Object(Me.jsx)(re.g, { className: "pendingTx" })] })] }) : o ? Object(Me.jsxs)(Me.Fragment, { children: [Object(Me.jsx)(re.lb, { textAlign: "left", fontSize: "14px", fontWeight: "500", color: "white", children: "This presale has ended. Go back to the dashboard to view others!" }), Object(Me.jsx)(kt, { onClick: function() { n.push("/swap/".concat(e.chainId, "/").concat(k.token_address)) }, style: { width: "100%" }, mt: "16px", scale: "sm", children: "Trade on SphynxSwap" }), Object(Me.jsx)(re.lb, { textAlign: "left", fontSize: "14px", fontWeight: "500", mt: "16px", color: "white", children: "If you participated in the presale click the claim button below to claim your tokens!" }), Object(Me.jsxs)(vt, { style: { width: "100%" }, mt: "16px", mb: "16px", onClick: ba, disabled: Y || wn, scale: "sm", children: [wn && Object(Me.jsx)(re.g, { className: "pendingTx" }), "Claim Token"] })] }) : Object(Me.jsxs)(Me.Fragment, {
                                    children: [Object(Me.jsxs)(pt, { children: ["Raised: ", F, "/", null === k || void 0 === k ? void 0 : k.hard_cap] }), Object(Me.jsx)(Tt, { children: Object(Me.jsx)(zt, { children: Object(Me.jsx)(Nt, { state: F / (null === k || void 0 === k ? void 0 : k.hard_cap) * 100 }) }) }), Object(Me.jsx)(gt, { children: Object(Me.jsxs)(re.lb, { fontSize: "14px", fontWeight: "600", color: "white", textAlign: "left", children: ["1 ", sa, " = ", k && k.tier3, " ", k && k.token_symbol, " "] }) }), Object(Me.jsxs)(wt, {
                                        children: [Object(Me.jsxs)(yt, {
                                            children: [Object(Me.jsx)("input", { value: g, placeholder: "", onChange: function(e) { w(e.target.value) } }), Object(Me.jsx)(vt, {
                                                scale: "sm",
                                                onClick: function() {
                                                    var e, t = k && k.max_buy,
                                                        n = 0,
                                                        a = 0;
                                                    "BNB" === sa ? (n = Xn, a = .01) : "ETH" === sa ? (n = $n, a = 1e-4) : "BRISE" === sa && (n = aa, a = .1), e = (n -= a) < 0 ? "0" : "".concat(n), parseFloat(e) > parseFloat(t) ? w(t) : w(e)
                                                },
                                                children: "Max"
                                            })]
                                        }), Object(Me.jsxs)(vt, { onClick: da, disabled: fn, scale: "sm", children: ["Contribute", fn && Object(Me.jsx)(re.g, { className: "pendingTx" })] })]
                                    }), Object(Me.jsxs)(re.F, { alignItems: "center", style: { width: "100%" }, children: [Object(Me.jsx)(xe.a, {}), Object(Me.jsxs)(re.lb, { fontSize: "13px", fontWeight: "600", style: { margin: "0 10px" }, children: [Ht ? "Tier 1 sale ends in" : Jt ? "Tier 2 sale ends in" : rn ? "Presale starts in" : "Public sale ends in", " "] }), Object(Me.jsx)(Se.a, { time: k && Ht ? null === k || void 0 === k ? void 0 : k.tier1_time : Jt ? null === k || void 0 === k ? void 0 : k.tier2_time : rn ? null === k || void 0 === k ? void 0 : k.start_time : null === k || void 0 === k ? void 0 : k.end_time })] }), Object(Me.jsx)(it, {})]
                                }), Object(Me.jsxs)(It, { children: [Object(Me.jsx)(re.lb, { fontSize: "14px", fontWeight: "600", color: "white", children: "Your Contributed Account:" }), Object(Me.jsxs)(re.lb, { fontSize: "14px", fontWeight: "600", textAlign: "center", color: "#F2C94C", children: [C, "\xa0", sa] })] }), Object(Me.jsx)(it, {}), Object(Me.jsxs)(It, { children: [Object(Me.jsx)(re.lb, { fontSize: "14px", fontWeight: "600", color: "white", children: "Your Reserved Tokens:" }), Object(Me.jsxs)(re.lb, { fontSize: "14px", fontWeight: "600", textAlign: "center", color: "white", children: [P, " ", k && k.token_symbol] })] }), o || jn ? "" : Object(Me.jsxs)(Me.Fragment, { children: [Object(Me.jsx)(at, {}), Object(Me.jsxs)(kt, { onClick: ua, disabled: In, scale: "sm", children: ["Emergency Withdraw", In && Object(Me.jsx)(re.g, { className: "pendingTx" })] })] })]
                            })
                        })]
                    })]
                })
            }
        }
    }
]);