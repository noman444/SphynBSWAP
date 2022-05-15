(this["webpackJsonpsphynx-frontend"] = this["webpackJsonpsphynx-frontend"] || []).push([
    [41], {
        1845: function(e, t, n) {
            "use strict";
            n.r(t);
            var a, i, r, c, s, l, o, d, u, b, x, j, p, h, f, m, O, g, w, v, y, k, I, _, S, F, T, z, C, N, A, E, P, D, W, V, B, M, L, Q, R, Y, U, q, H, G = n(11),
                J = n(10),
                K = n(7),
                X = n(3),
                Z = n.n(X),
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
                ue = n(71),
                be = n(1522),
                xe = n(1523),
                je = n(1524),
                pe = n(101),
                he = n(88),
                fe = n(1525),
                me = n(49),
                Oe = n(18),
                ge = n(84),
                we = n.n(ge),
                ve = n(129),
                ye = n(116),
                ke = n(795),
                Ie = n(17),
                _e = n(1484),
                Se = n(1481),
                Fe = n(330),
                Te = n(328),
                ze = n(1499),
                Ce = n(1500),
                Ne = n(516),
                Ae = n(1498),
                Ee = n(41),
                Pe = n(45),
                De = n(528),
                We = n(1587),
                Ve = n(0),
                Be = ee.default.div(a || (a = Object(K.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-left: ", ";\n  .chart-header {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    width: 100%;\n    align-items: center;\n    font-size: ", ";\n    .header-card {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      height: ", ";\n      border-radius: 3px;\n      border: #aaa 1px solid;\n      margin-right: 20px;\n      padding: 0 10px;\n    }\n  }\n  .chart-content {\n    display: flex;\n    flex-direction: ", ";\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    .doughnut {\n      padding: 10px;\n      width: fit-content;\n    }\n    .chart-label {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      width: fit-content;\n      padding: 10px;\n      .distribute-label {\n        display: flex;\n        align-items: center;\n        width: 100%;\n        padding: 5px;\n        .distribute-name {\n          text-align: left;\n          font-size: 13px;\n        }\n      }\n    }\n  }\n"])), (function(e) { return e.isMobile ? "0px" : "-20px" }), (function(e) { return e.isMobile ? "15px" : "20px" }), (function(e) { return e.isMobile ? "30px" : "40px" }), (function(e) { return e.isMobile ? "column" : "row" })),
                Me = ee.default.div(i || (i = Object(K.a)(["\n  background-color: ", ";\n  height: 20px;\n  width: 20px;\n  min-width: 20px;\n  border: 1px #aaa solid;\n  border-radius: 3px;\n  margin-right: 20px;\n"])), (function(e) { return e.color })),
                Le = ["#0066cc", "#4cb140", "#009596", "#f4c145", "#ec7a08"],
                Qe = ["Burn", "SphynxLock", "Presale", "Liquidity", "Unlocked"],
                Re = function(e) {
                    var t = e.symbol,
                        n = e.distributeData,
                        a = !Object(re.zb)().isXl,
                        i = { labels: Qe, datasets: [{ data: n, backgroundColor: Le, hoverBackgroundColor: Le }] },
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
                    return Object(Ve.jsxs)(Be, { isMobile: a, children: [Object(Ve.jsxs)("div", { className: "chart-header", children: [Object(Ve.jsx)("div", { className: "header-card", children: "Sphynx" }), Object(Ve.jsx)("div", { className: "header-str", children: "DYOR Area" })] }), Object(Ve.jsxs)("div", { className: "chart-content", children: [Object(Ve.jsx)("div", { className: "doughnut", children: Object(Ve.jsx)(We.a, { data: i, width: a ? 151 : 201, height: a ? 151 : 201, options: r, plugins: c }) }), Object(Ve.jsx)("div", { className: "chart-label", children: Qe.map((function(e, t) { return Object(Ve.jsxs)("div", { className: "distribute-label", children: [Object(Ve.jsx)(Me, { color: Le[t] }), Object(Ve.jsx)("div", { className: "distribute-name", children: "".concat(Qe[t], " ").concat(n[t], "%") })] }, e) })) })] })] })
                },
                Ye = Object(ee.keyframes)(r || (r = Object(K.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n"]))),
                Ue = ee.default.div(c || (c = Object(K.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-flow: column;\n  color: white;\n  margin-top: 24px;\n  text-align: center;\n  p {\n    line-height: 24px;\n  }\n  .pendingTx {\n    animation: ", " 2s linear infinite;\n  }\n"])), Ye),
                qe = ee.default.div(s || (s = Object(K.a)(["\n  width: 100%;\n"]))),
                He = Object(ee.default)(re.lb)(l || (l = Object(K.a)(["\n  color: white;\n  font-weight: 600;\n  line-height: 1.5;\n  font-size: 14px;\n  text-align: left;\n  padding: 0px;\n  ", " {\n    font-size: 20px;\n  }\n  ", " {\n    font-size: 30px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm }), (function(e) { return e.theme.mediaQueries.md })),
                Ge = Object(ee.default)(He)(o || (o = Object(K.a)(["\n  font-size: 15px;\n  ", " {\n    font-size: 22px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                Je = ee.default.div(d || (d = Object(K.a)(["\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  text-align: center;\n  flex-wrap: wrap;\n"]))),
                Ke = ee.default.div(u || (u = Object(K.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  border-radius: 10px;\n  background: ", "\n"])), (function(e) { return e.theme.custom.tertiary })),
                Xe = ee.default.div(b || (b = Object(K.a)(["\n  width: 100%;\n  background: ", ";\n  padding: 20px;\n"])), (function(e) { return e.theme.custom.tertiary })),
                Ze = Object(ee.default)(re.F)(x || (x = Object(K.a)(["\n  width: 100%;\n  flex-direction: column;\n  background: ", ";\n  border: 1px solid ", ";\n  border-radius: 5px;\n  padding: 17px;\n  margin-bottom: 10px;\n  ", " {\n    width: 57%;\n    margin-bottom: 0px;\n  }\n"])), (function(e) { return e.theme.custom.primary }), (function(e) { return e.theme.custom.coloredBorder }), (function(e) { return e.theme.mediaQueries.xl })),
                $e = ee.default.div(j || (j = Object(K.a)(["\n  font-size: 18px;\n  font-weight: 600;\n  color: white;\n  padding-bottom: 4px;\n  text-align: left;\n  font-weight: 600;\n"]))),
                et = Object(ee.default)(re.lb)(p || (p = Object(K.a)(["\n  font-size: 14px;\n  text-align: left;\n  font-weight: 500;\n"]))),
                tt = ee.default.div(h || (h = Object(K.a)(["\n  margin-top: 30px;\n"]))),
                nt = ee.default.div(f || (f = Object(K.a)(["\n  width: 100%;\n  opacity: 0.1;\n  border-bottom: 1px solid #e7fffe;\n  margin: 10px 0;\n"]))),
                at = ee.default.div(m || (m = Object(K.a)(["\n  display: flex;\n  width: 100%;\n  align-items: center;\n  gap: 16px;\n"]))),
                it = ee.default.div(O || (O = Object(K.a)(["\n  font-weight: 600;\n  font-size: 25px;\n  text-align: left;\n"]))),
                rt = ee.default.div(g || (g = Object(K.a)(["\n  font-weight: 600;\n  font-size: 15px;\n  color: #a7a7cc;\n  text-align: left;\n"]))),
                ct = ee.default.div(w || (w = Object(K.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"]))),
                st = ee.default.div(v || (v = Object(K.a)(["\n  margin-top: 25px;\n"]))),
                lt = ee.default.div(y || (y = Object(K.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  margin-top: 30px;\n"]))),
                ot = Object(ee.default)(re.F)(k || (k = Object(K.a)(["\n  flex-wrap: wrap;\n  padding-bottom: 10px;\n  gap: 5px;\n  justify-content: space-between;\n"]))),
                dt = ee.default.div(I || (I = Object(K.a)(["\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 4px;\n  flex-direction: row;\n  div {\n    font-size: 14px;\n  }\n  div:last-child {\n    color: #f2c94c;\n    font-size: 14px;\n    font-weight: 600;\n    word-break: break-word;\n    text-align: left;\n  }\n  ", " {\n    justify-content: space-between;\n  }\n"])), (function(e) { return e.theme.mediaQueries.lg })),
                ut = ee.default.div(_ || (_ = Object(K.a)(["\n  margin-top: -28px;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 16px;\n  letter-spacing: 0.15em;\n  color: #f2c94c;\n  text-align: left;\n"]))),
                bt = ee.default.div(S || (S = Object(K.a)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: space-evenly;\n  background: ", ";\n  box-sizing: border-box;\n  border-radius: 5px;\n  width: 100%;\n  padding: 15px;\n  position: relative;\n  margin: 10px 0;\n  ", " {\n    padding: 25px;\n  }\n  ", " {\n    width: 50%;\n    margin: 0;\n    padding: 25px;\n  }\n"])), (function(e) { return e.theme.custom.tertiary }), (function(e) { return e.theme.mediaQueries.sm }), (function(e) { return e.theme.mediaQueries.xl })),
                xt = Object(ee.default)(re.lb)(F || (F = Object(K.a)(["\n  font-weight: 600;\n  font-size: 15px;\n  margin-top: 16px;\n  ", " {\n    font-size: 20px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                jt = Object(ee.default)(re.lb)(T || (T = Object(K.a)(["\n  font-weight: 600;\n  font-size: 12px;\n  color: white;\n  ", " {\n    font-size: 15px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                pt = ee.default.div(z || (z = Object(K.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 24px;\n  img {\n    width: 20px;\n    height: 20px;\n    margin-right: 5px;\n  }\n  div:last-child {\n    text-align: center;\n    font-weight: 600;\n    font-size: 12px;\n    color: white;\n  }\n"]))),
                ht = Object(ee.default)(re.F)(C || (C = Object(K.a)(["\n  width: 100%;\n  justify-content: center;\n  border-radius: 5px;\n  align-items: center;\n"]))),
                ft = ee.default.div(N || (N = Object(K.a)(["\n  width: 100%;\n  border-radius: 5px;\n  padding: 0px 10px;\n  & > div > div {\n    font-size: 12px;\n  }\n  ", " {\n    margin: 0;\n    & > div > div {\n      font-size: 12px;\n    }\n  }\n"])), (function(e) { return e.theme.mediaQueries.xl })),
                mt = ee.default.div(A || (A = Object(K.a)(["\n  width: 100%;\n  margin-bottom: 20px;\n"]))),
                Ot = Object(ee.default)(re.F)(E || (E = Object(K.a)(["\n  width: 100%;\n  justify-content: space-between;\n  margin-bottom: 20px;\n"]))),
                gt = ee.default.div(P || (P = Object(K.a)(["\n  padding: 0 10px;\n  box-sizing: border-box;\n  justify-content: center;\n  display: flex;\n  margin-right: 5px;\n  & input {\n    width: 100%;\n    border: 1px solid #595989;\n    border-radius: 5px;\n    background: transparent;\n    box-shadow: none;\n    outline: none;\n    color: white;\n    font-size: 13px;\n    &::placeholder {\n      color: white;\n    }\n    margin-right: 10px;\n  }\n"]))),
                wt = Object(ee.default)(re.l)(D || (D = Object(K.a)(["\n  border-radius: 5px;\n  border: none;\n  font-size: 13px;\n  background: ", ";\n  outline: none;\n  color: white;\n"])), (function(e) { return e.theme.custom.gradient })),
                vt = Object(ee.default)(re.l)(W || (W = Object(K.a)(["\n  border-radius: 5px;\n  border: none;\n  font-size: 13px;\n  background: ", ";\n  outline: none;\n  color: white;\n  width: 100%;\n"])), (function(e) { return e.theme.custom.secondary })),
                yt = ee.default.div(V || (V = Object(K.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n"]))),
                kt = ee.default.div(B || (B = Object(K.a)(["\n  display: flex;\n  justify-content: center;\n  div:first-child {\n    width: 150px;\n    align-items: center;\n    display: flex;\n    padding: 5px;\n    text-align: start;\n    color: #a7a7cc;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 11px;\n    ", " {\n      font-size: 14px;\n      width: 190px;\n    }\n  }\n  div:last-child {\n    flex: 1;\n    min-width: 120px;\n    align-items: center;\n    display: flex;\n    padding: 5px;\n    text-align: start;\n    word-break: break-all;\n    color: #f2c94c;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 11px;\n    ", " {\n      font-size: 14px;\n    }\n  }\n"])), (function(e) { return e.theme.mediaQueries.lg }), (function(e) { return e.theme.mediaQueries.md })),
                It = Object(ee.default)(kt)(M || (M = Object(K.a)(["\n  div:first-child {\n    border-bottom: 0px;\n  }\n  div:last-child {\n    border-bottom: 0px;\n  }\n"]))),
                _t = ee.default.div(L || (L = Object(K.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  flex-direction: ", ";\n  gap: 20px;\n  border-radius: 5px;\n  margin-top: 30px;\n  margin-bottom: 30px;\n  .chart-field {\n    padding: 10px;\n  }\n"])), (function(e) { return e.isMobile ? "column" : "row" })),
                St = ee.default.div(Q || (Q = Object(K.a)(["\n  width: 100%;\n  margin-bottom: 20px;\n"]))),
                Ft = ee.default.div(R || (R = Object(K.a)(["\n  background-color: #23234b;\n  border-radius: 8px;\n  position: relative;\n"]))),
                Tt = ee.default.div(Y || (Y = Object(K.a)(["\n  width: ", ";\n  height: 12px;\n  background: ", ";\n  // background: linear-gradient(90deg, #4a65d5 0%, #4a65d5 100%);\n  border-radius: 8px;\n  padding: 1px;\n  display: flex;\n  justify-content: center;\n  font-size: 9px;\n  font-weight: bold;\n"])), (function(e) { return "".concat(e.state, "%") }), (function(e) { return e.theme.custom.gradient })),
                zt = ee.default.div(U || (U = Object(K.a)(["\n  display: flex;\n  gap: 10px;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n"]))),
                Ct = ee.default.div(q || (q = Object(K.a)(["\n  background: ", ";\n  padding: 10px;\n  border-radius: 3px;\n  display: flex;\n  width: fit-content;\n  align-items: center;\n"])), (function(e) { return e.color })),
                Nt = ee.default.div(H || (H = Object(K.a)(["\n  display: flex;\n  justify-content: space-around;\n  width: 100%;\n  text-align: center;\n  flex-wrap: wrap;\n  margin-top: 30px;\n  padding: 0 30px;\n"])));
            t.default = function() {
                var e = Object(te.i)(),
                    t = Object(ce.b)().t,
                    n = Object(te.g)(),
                    a = Object(he.a)(),
                    i = a.toastSuccess,
                    r = a.toastError,
                    c = Object(se.e)().menuToggled,
                    s = Object($.useState)(!1),
                    l = Object(J.a)(s, 2),
                    o = l[0],
                    d = l[1],
                    u = Object(Oe.a)(),
                    b = u.library,
                    x = u.account,
                    j = u.chainId,
                    p = b.getSigner(),
                    h = Object(Pe.e)(parseInt(e.chainId)),
                    f = Object($.useMemo)((function() { return p ? Object(me.L)(p, j) : Object(me.L)(h, e.chainId) }), [p, j, h, e]),
                    m = Object($.useState)(""),
                    O = Object(J.a)(m, 2),
                    g = O[0],
                    w = O[1],
                    v = Object($.useState)(null),
                    y = Object(J.a)(v, 2),
                    k = y[0],
                    I = y[1],
                    _ = Object($.useState)(0),
                    S = Object(J.a)(_, 2),
                    F = S[0],
                    T = S[1],
                    z = Object($.useState)(0),
                    C = Object(J.a)(z, 2),
                    N = C[0],
                    A = C[1],
                    E = Object($.useState)(0),
                    P = Object(J.a)(E, 2),
                    D = P[0],
                    W = P[1],
                    V = Object($.useState)(0),
                    B = Object(J.a)(V, 2),
                    M = B[0],
                    L = B[1],
                    Q = Object($.useState)(!1),
                    R = Object(J.a)(Q, 2),
                    Y = R[0],
                    U = R[1],
                    q = Object($.useState)(!1),
                    H = Object(J.a)(q, 2),
                    K = H[0],
                    X = H[1],
                    ae = Object($.useState)(!1),
                    ge = Object(J.a)(ae, 2),
                    We = ge[0],
                    Be = ge[1],
                    Me = Object($.useState)(!1),
                    Le = Object(J.a)(Me, 2),
                    Qe = Le[0],
                    Ye = Le[1],
                    At = Object($.useState)(!1),
                    Et = Object(J.a)(At, 2),
                    Pt = Et[0],
                    Dt = Et[1],
                    Wt = Object($.useState)(!1),
                    Vt = Object(J.a)(Wt, 2),
                    Bt = Vt[0],
                    Mt = Vt[1],
                    Lt = Object($.useState)(!1),
                    Qt = Object(J.a)(Lt, 2),
                    Rt = Qt[0],
                    Yt = Qt[1],
                    Ut = Object($.useState)(!1),
                    qt = Object(J.a)(Ut, 2),
                    Ht = qt[0],
                    Gt = qt[1],
                    Jt = Object($.useState)(!1),
                    Kt = Object(J.a)(Jt, 2),
                    Xt = Kt[0],
                    Zt = Kt[1],
                    $t = Object($.useState)(!1),
                    en = Object(J.a)($t, 2),
                    tn = en[0],
                    nn = en[1],
                    an = Object($.useState)(!1),
                    rn = Object(J.a)(an, 2),
                    cn = rn[0],
                    sn = rn[1],
                    ln = Object($.useState)(!1),
                    on = Object(J.a)(ln, 2),
                    dn = on[0],
                    un = on[1],
                    bn = Object($.useState)(!1),
                    xn = Object(J.a)(bn, 2),
                    jn = xn[0],
                    pn = xn[1],
                    hn = Object($.useState)(!1),
                    fn = Object(J.a)(hn, 2),
                    mn = fn[0],
                    On = fn[1],
                    gn = Object($.useState)(!1),
                    wn = Object(J.a)(gn, 2),
                    vn = wn[0],
                    yn = wn[1],
                    kn = Object($.useState)(!1),
                    In = Object(J.a)(kn, 2),
                    _n = In[0],
                    Sn = In[1],
                    Fn = Object($.useState)(!1),
                    Tn = Object(J.a)(Fn, 2),
                    zn = Tn[0],
                    Cn = Tn[1],
                    Nn = Object($.useState)(18),
                    An = Object(J.a)(Nn, 2),
                    En = An[0],
                    Pn = An[1],
                    Dn = Object($.useState)(ve.utils.parseEther("0")),
                    Wn = Object(J.a)(Dn, 2),
                    Vn = Wn[0],
                    Bn = Wn[1],
                    Mn = Object(Ie.K)(j),
                    Ln = Object($.useRef)(),
                    Qn = Object($.useState)(!0),
                    Rn = Object(J.a)(Qn, 2),
                    Yn = Rn[0],
                    Un = Rn[1],
                    qn = !Object(re.zb)().isXl,
                    Hn = Object($.useState)([0, 0, 0, 0, 0]),
                    Gn = Object(J.a)(Hn, 2),
                    Jn = Gn[0],
                    Kn = Gn[1],
                    Xn = Object($.useState)(!0),
                    Zn = Object(J.a)(Xn, 2),
                    $n = Zn[0],
                    ea = Zn[1],
                    ta = parseInt(e.chainId),
                    na = Object($.useState)(ta),
                    aa = Object(J.a)(na, 2),
                    ia = aa[0],
                    ra = aa[1],
                    ca = Object($.useState)(0),
                    sa = Object(J.a)(ca, 2),
                    la = sa[0],
                    oa = sa[1],
                    da = Object($.useState)(0),
                    ua = Object(J.a)(da, 2),
                    ba = ua[0],
                    xa = ua[1],
                    ja = Object($.useState)(0),
                    pa = Object(J.a)(ja, 2),
                    ha = pa[0],
                    fa = pa[1],
                    ma = Object(ee.useTheme)();
                Object($.useEffect)((function() {
                    var e = new AbortController,
                        t = new ie.a(Pe.j),
                        n = new ie.a(Pe.d),
                        a = new ie.a(Pe.b);
                    return function e() {
                            x && t.eth.getBalance(x).then((function(i) {
                                n.eth.getBalance(x).then((function(n) {
                                    a.eth.getBalance(x).then((function(a) {
                                        var r = t.utils.fromWei(i);
                                        r = Number(r).toFixed(3), oa(r);
                                        var c = t.utils.fromWei(n);
                                        c = Number(c).toFixed(3), xa(c), setTimeout((function() { return e() }), 6e4);
                                        var s = t.utils.fromWei(a);
                                        s = Number(s).toFixed(3), fa(s)
                                    }))
                                }))
                            }))
                        }(),
                        function() { return e.abort() }
                }), [x]);
                var Oa = function(e) { return Object(ke.default)(new Date(e), "yyyy-MM-dd HH:mm") },
                    ga = de.b[e.chainId];
                k && k.is_other && (ga = k.other_symbol);
                var wa = pe.b[e.chainId],
                    va = [{ presaleItem: "Sale ID:", presaleValue: e.saleId }, { presaleItem: "Token Address", presaleValue: "".concat(k && k.token_address) }, { presaleItem: "Total Supply:", presaleValue: "".concat(Object(Ee.j)(parseFloat(M.toString())), " ").concat(k && k.token_symbol) }, { presaleItem: "Tokens For Presale:", presaleValue: "".concat(k && Object(Ee.j)(parseFloat((k.hard_cap * k.tier3).toString())), " ").concat(k && k.token_symbol) }, { presaleItem: "Tokens For Liquidity:", presaleValue: "".concat(k && Object(Ee.j)(parseFloat((k.listing_rate * k.hard_cap * (k.router_rate + k.default_router_rate) / 100).toString())), " ").concat(k && k.token_symbol) }, { presaleItem: "Soft Cap:", presaleValue: "".concat(k && Object(Ee.j)(parseFloat(k.soft_cap)), " ").concat(ga) }, { presaleItem: "Hard Cap:", presaleValue: "".concat(k && Object(Ee.j)(parseFloat(k.hard_cap)), " ").concat(ga) }, { presaleItem: "Presale Rate:", presaleValue: "".concat(k && Object(Ee.j)(k.tier3.toString()), " ").concat(k && k.token_symbol, " per ").concat(ga) }, { presaleItem: "SphynxSwap Listing Rate:", presaleValue: "".concat(k && Object(Ee.j)(k.listing_rate.toString()), " ").concat(k && k.token_symbol, " per ").concat(ga) }, { presaleItem: "SphynxSwap Liquidity:", presaleValue: "".concat(k && k.default_router_rate, "%") }, { presaleItem: "".concat(wa, " Liquidity:"), presaleValue: "".concat(k && k.router_rate, "%") }, { presaleItem: "Minimum Contribution:", presaleValue: "".concat(k && Object(Ee.j)(k.min_buy), " ").concat(ga) }, { presaleItem: "Maximum Contribution:", presaleValue: "".concat(k && Object(Ee.j)(k.max_buy), " ").concat(ga) }, { presaleItem: "Presale Start Time:", presaleValue: "".concat(Oa(k && 1e3 * k.start_time)) }, { presaleItem: "Tier1 End Time:", presaleValue: "".concat(Oa(k && 1e3 * k.tier1_time)) }, { presaleItem: "Tier2 End Time:", presaleValue: "".concat(Oa(k && 1e3 * k.tier2_time)) }, { presaleItem: "Presale End Time:", presaleValue: "".concat(Oa(k && 1e3 * k.end_time)) }, { presaleItem: "Liquidity Unlock:", presaleValue: "".concat(Oa(k && 1e3 * k.lock_time)) }];
                j !== ne.ChainId.BRISE && j !== ne.ChainId.TESTBRISE || va.splice(10, 1), Object($.useEffect)((function() { ra(void 0 === j ? ta : j) }), [j, ta]), Object($.useEffect)((function() {
                    var t = function() {
                        var t = Object(G.a)(Z.a.mark((function t() {
                            var n, a, i, r, c, s, l, o, d, u, b, x;
                            return Z.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return n = le.a, a = new ye.Contract(k.token_address, n, h), t.next = 4, a.decimals();
                                    case 4:
                                        return i = t.sent, Pn(i), t.next = 8, a.balanceOf(ue.a);
                                    case 8:
                                        return r = t.sent, t.next = 11, we.a.get("".concat("https://thesphynx.co/api2", "/getTokenLockList/").concat(e.chainId, "/").concat(k.token_address));
                                    case 11:
                                        for (c = t.sent, s = c.data, l = 0, o = 0; o < s.length; o++) l += s[o].lock_supply;
                                        d = parseFloat(ve.utils.formatUnits(r, i)), u = k.hard_cap * k.tier3, b = k.listing_rate * k.hard_cap * (k.router_rate + k.default_router_rate) / 100, x = M - d - l - u - b, Kn([parseFloat((d / M * 100).toFixed(5)), parseFloat((l / M * 100).toFixed(5)), parseFloat((u / M * 100).toFixed(5)), parseFloat((b / M * 100).toFixed(5)), parseFloat((x / M * 100).toFixed(5))]);
                                    case 20:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function() { return t.apply(this, arguments) }
                    }();
                    k && M && t()
                }), [k, M]), Object($.useEffect)((function() {
                    return Ln.current = setInterval((function() {
                            if (k) {
                                var e = Math.floor((new Date).getTime() / 1e3);
                                parseInt(k.start_time) > e ? nn(!0) : parseInt(k.start_time) < e && e < parseInt(k.tier1_time) ? (nn(!1), Yt(!0)) : parseInt(k.tier1_time) < e && e < parseInt(k.tier2_time) ? (nn(!1), Yt(!1), Gt(!0)) : parseInt(k.tier2_time) < e && e < parseInt(k.end_time) ? (nn(!1), Yt(!1), Gt(!1), Zt(!0)) : e >= parseInt(k.end_time) && (nn(!1), sn(!0))
                            }
                        }), 1e4),
                        function() { clearInterval(Ln.current) }
                }), [Ln, k]), Object($.useEffect)((function() {
                    j && parseInt(e.chainId) !== j && alert("Please make sure you are on the ".concat(oe.a[parseInt(e.chainId)], "!")), !Number.isNaN(parseInt(e.saleId)) && e.chainId && we.a.get("".concat("https://thesphynx.co/api2", "/getPresaleInfoV2/").concat(e.saleId, "/").concat(e.chainId)).then(function() {
                        var e = Object(G.a)(Z.a.mark((function e(t) {
                            return Z.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        t.data && I(t.data);
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) { return e.apply(this, arguments) }
                    }())
                }), [e.saleId, j]), Object($.useEffect)((function() {
                    var t = function() {
                        var t = Object(G.a)(Z.a.mark((function t() {
                            var n, a, i, r, c, s;
                            return Z.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, t.next = 3, f.totalContributionBNB(e.saleId);
                                    case 3:
                                        return n = t.sent.toString(), a = parseFloat(ve.utils.formatEther(n)), T(a), a < (null === k || void 0 === k ? void 0 : k.soft_cap) && cn && un(!0), t.next = 9, f.presaleStatus(e.saleId);
                                    case 9:
                                        return n = t.sent, d(n), t.next = 13, f.isDeposited(e.saleId);
                                    case 13:
                                        return n = t.sent, X(n), t.next = 17, f.iswhitelist(e.saleId);
                                    case 17:
                                        return n = t.sent, Be(n), i = le.a, r = new ye.Contract(k.token_address, i, h), c = null, null !== k && void 0 !== k && k.is_other && (c = new ye.Contract(null === k || void 0 === k ? void 0 : k.other_token, le.a, h)), t.next = 25, r.totalSupply();
                                    case 25:
                                        if (n = t.sent.toString(), a = parseFloat(ve.utils.formatUnits(n, k.token_decimal)), L(a), !x) { t.next = 76; break }
                                        return t.next = 31, f.whitelist1(e.saleId, x);
                                    case 31:
                                        return n = t.sent, Ye(n), t.next = 35, f.whitelist2(e.saleId, x);
                                    case 35:
                                        return n = t.sent, Dt(n), t.next = 39, f.basewhitelist(x);
                                    case 39:
                                        return n = t.sent, Mt(n), t.next = 43, f.userContributionBNB(e.saleId, x);
                                    case 43:
                                        return n = t.sent.toString(), a = parseFloat(ve.utils.formatEther(n)), A(a), t.next = 48, f.userContributionToken(e.saleId, x);
                                    case 48:
                                        return n = t.sent.toString(), a = parseFloat(ve.utils.formatUnits(n, k.token_decimal)), W(a), t.next = 53, f.isClaimed(e.saleId, x);
                                    case 53:
                                        return n = t.sent, U(n), t.next = 57, f.getAvailableAmount(e.saleId, x);
                                    case 57:
                                        return n = t.sent, t.next = 60, f.userClaimedToken(e.saleId, x);
                                    case 60:
                                        if (s = t.sent, Bn(n.sub(s)), null === k || void 0 === k || !k.is_other) { t.next = 75; break }
                                        return t.prev = 63, t.next = 66, c.allowance(x, Mn);
                                    case 66:
                                        t.sent.gt(ve.utils.parseEther("100")) ? On(!0) : On(!1), t.next = 73;
                                        break;
                                    case 70:
                                        t.prev = 70, t.t0 = t.catch(63), console.log("Error", t.t0);
                                    case 73:
                                        t.next = 76;
                                        break;
                                    case 75:
                                        On(!0);
                                    case 76:
                                        Un(!1), t.next = 83;
                                        break;
                                    case 79:
                                        t.prev = 79, t.t1 = t.catch(0), console.log("Error", t.t1), Un(!1);
                                    case 83:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [0, 79],
                                [63, 70]
                            ])
                        })));
                        return function() { return t.apply(this, arguments) }
                    }();
                    k && t()
                }), [f, k, e.saleId, x, cn, j]);
                var ya = function() {
                        var t = Object(G.a)(Z.a.mark((function t() {
                            var n, a;
                            return Z.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, yn(!0), n = new ye.Contract(null === k || void 0 === k ? void 0 : k.other_token, le.a, p), t.next = 5, n.approve(Object(Ie.K)(e.chainId), "0xfffffffffffffffffffffffffffffffffffffffffffff");
                                    case 5:
                                        return a = t.sent, t.next = 8, a.wait();
                                    case 8:
                                        yn(!1), On(!0), t.next = 15;
                                        break;
                                    case 12:
                                        t.prev = 12, t.t0 = t.catch(0), yn(!1);
                                    case 15:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [0, 12]
                            ])
                        })));
                        return function() { return t.apply(this, arguments) }
                    }(),
                    ka = function() {
                        var t = Object(G.a)(Z.a.mark((function t() {
                            var n, a, c, s, l, o, d;
                            return Z.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (t.prev = 0, parseInt(e.chainId) === j) { t.next = 5; break }
                                        return n = oe.a[parseInt(e.chainId)], alert("Please make sure you are on the ".concat(n, "!")), t.abrupt("return");
                                    case 5:
                                        if (!(!Number.isNaN(parseInt(e.saleId)) && parseFloat(g) > 0 && k)) { t.next = 36; break }
                                        if (!k || !k.is_other) { t.next = 25; break }
                                        return a = new ye.Contract(null === k || void 0 === k ? void 0 : k.other_token, le.a, h), t.next = 11, a.decimals();
                                    case 11:
                                        return c = t.sent, s = ve.utils.parseUnits(g, c), pn(!0), t.next = 16, f.contribute(e.saleId, s);
                                    case 16:
                                        return l = t.sent, t.next = 19, l.wait();
                                    case 19:
                                        1 === t.sent.status && we.a.post("".concat("https://thesphynx.co/api2", "/contributeV2"), { saleId: e.saleId, chainId: j }).then((function(e) { console.log("response", e) })), pn(!1), i("Success", "Operation successfully!"), t.next = 36;
                                        break;
                                    case 25:
                                        return o = ve.utils.parseEther(g), pn(!0), t.next = 29, f.contribute(e.saleId, o, { value: o });
                                    case 29:
                                        return d = t.sent, t.next = 32, d.wait();
                                    case 32:
                                        1 === t.sent.status && we.a.post("".concat("https://thesphynx.co/api2", "/contributeV2"), { saleId: e.saleId, chainId: j }).then((function(e) { console.log("response", e) })), pn(!1), i("Success", "Operation successfully!");
                                    case 36:
                                        t.next = 42;
                                        break;
                                    case 38:
                                        t.prev = 38, t.t0 = t.catch(0), pn(!1), t.t0.data ? r("Failed", t.t0.data.message) : r("Failed", t.t0.message);
                                    case 42:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [0, 38]
                            ])
                        })));
                        return function() { return t.apply(this, arguments) }
                    }(),
                    Ia = function() {
                        var t = Object(G.a)(Z.a.mark((function t() {
                            var n, a;
                            return Z.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (t.prev = 0, parseInt(e.chainId) === j) { t.next = 5; break }
                                        return n = oe.a[parseInt(e.chainId)], alert("Please make sure you are on the ".concat(n, "!")), t.abrupt("return");
                                    case 5:
                                        return Sn(!0), t.next = 8, f.claimToken(e.saleId);
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
                    _a = function() {
                        var t = Object(G.a)(Z.a.mark((function t() {
                            var n, a;
                            return Z.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (t.prev = 0, parseInt(e.chainId) === j) { t.next = 5; break }
                                        return n = oe.a[parseInt(e.chainId)], alert("Please make sure you are on the ".concat(n, "!")), t.abrupt("return");
                                    case 5:
                                        return Cn(!0), t.next = 8, f.emergencyWithdraw(e.saleId);
                                    case 8:
                                        return a = t.sent, t.next = 11, a.wait();
                                    case 11:
                                        Cn(!1), i("Success", "Operation successfully!"), t.next = 19;
                                        break;
                                    case 15:
                                        t.prev = 15, t.t0 = t.catch(0), Cn(!1), t.t0.data ? r("Failed", t.t0.data.message) : r("Failed", t.t0.message);
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
                    Sa = function() {
                        var e = Object(G.a)(Z.a.mark((function e(t) {
                            var n, a;
                            return Z.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (56 === ia) { e.next = 3; break }
                                        return r("Failed", "Please connect to BSC network!"), e.abrupt("return");
                                    case 3:
                                        return e.prev = 3, n = new ye.Contract(Object(Ie.B)(ia), De, p), e.next = 7, n.mintNFT(x, "".concat(t), { value: ve.utils.parseEther((.5 * t).toString()) });
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
                    }(),
                    Fa = function() {
                        var e = Object(G.a)(Z.a.mark((function e() {
                            var t, n, a, i, r;
                            return Z.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (t = k && k.max_buy, n = "", a = 0, i = 0, null === k || void 0 === k || !k.is_other) { e.next = 10; break }
                                        return r = new ye.Contract(null === k || void 0 === k ? void 0 : k.other_token, le.a, h), e.next = 8, r.balanceOf(x);
                                    case 8:
                                        n = (n = e.sent).toString();
                                    case 10:
                                        "BNB" === ga ? (a = la, i = .01) : "ETH" === ga ? (a = ba, i = 1e-4) : "BRISE" === ga && (a = ha, i = .1), n = (a -= i) < 0 ? "0" : "".concat(a), parseFloat(n) > parseFloat(t) ? w(t) : w(n);
                                    case 14:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() { return e.apply(this, arguments) }
                    }();
                return Object(Ve.jsxs)(Ue, { children: [Object(Ve.jsx)(qe, { children: Object(Ve.jsx)(re.F, { justifyContent: "space-between", alignItems: "center", flexDirection: "row", children: Object(Ve.jsxs)(re.F, { alignItems: "center", children: [Object(Ve.jsx)(be.a, { width: "40", height: "40" }), Object(Ve.jsx)(re.F, { flexDirection: "column", ml: "10px", children: Object(Ve.jsx)(He, { children: t("SphynxSale Automated Warning System") }) })] }) }) }), $n && Object(Ve.jsx)(qe, { children: Object(Ve.jsx)(re.F, { justifyContent: "space-between", alignItems: "center", flexDirection: "row", mt: "30px", children: Object(Ve.jsxs)(re.F, { alignItems: "center", children: [Object(Ve.jsx)(xe.a, { width: "40", height: "40" }), Object(Ve.jsx)(re.F, { flexDirection: "column", ml: "10px", children: Object(Ve.jsx)(Ge, { children: t("1 Warnings Detected") }) })] }) }) }), $n && Object(Ve.jsx)(Je, { style: { marginTop: "32px" }, children: Object(Ve.jsxs)(Ze, { onClick: function() { ea(!1) }, style: { cursor: "pointer" }, children: [Object(Ve.jsx)($e, { children: "DeFi Zone Warning" }), Object(Ve.jsx)(et, { children: "This sale is listed in the DeFi Zone. Presales in this area use custom contracts that are not vetted by the SphynxSale team. Developers of tokens in this area can block transfers, can stop users from claiming tokens, can stop trading on exchanges and requires extra vetting. Participate at your own risk!" })] }) }), Object(Ve.jsxs)(_t, { isMobile: qn, children: [Object(Ve.jsxs)("div", { className: "chart-field", style: { background: ma.custom.tertiary }, children: [Object(Ve.jsx)(re.N, { style: { marginBottom: "16px" }, href: "/launchpad/listing/".concat(e.chainId), children: "Back to list" }), Object(Ve.jsx)(Re, { symbol: k && k.token_symbol, distributeData: Jn }), Object(Ve.jsxs)(Nt, { style: { justifyContent: "flex-start", textAlign: "left", flexFlow: "column", padding: "32px" }, children: [Object(Ve.jsx)(re.F, { justifyContent: "center", children: Object(Ve.jsx)("video", { id: "gif-video", src: "/images/animation.mp4", width: "250px", height: "250px", style: { marginBottom: "12px" }, autoPlay: !0, loop: !0 }) }), Object(Ve.jsx)(re.lb, { children: "Holding a Scion Sphynx NFT automatically grants 5 Whitelists per Month to all Presales on Sphynx Pad." }), Object(Ve.jsx)(re.lb, { children: "Holding 2 Scion NFTs grants VIP Access to all Exclusive Partnership IDOs on the Pad" }), Object(Ve.jsxs)(re.F, { mt: "10px", mb: "10px", alignItems: "center", flexWrap: "wrap", justifyContent: "center", children: [Object(Ve.jsx)(wt, { onClick: function() { return Sa(2) }, scale: "sm", mx: "5px", my: "5px", children: t("Mint 2 Sphynx NFTs") }), Object(Ve.jsx)(wt, { onClick: function() { return Sa(1) }, scale: "sm", mx: "5px", my: "5px", children: t("Mint 1 Sphynx NFT") })] })] })] }), Object(Ve.jsx)(Ke, { toggled: c, children: Object(Ve.jsx)(Xe, { children: Yn ? Object(Ve.jsx)(ht, { children: Object(Ve.jsx)(Ae.a, {}) }) : Object(Ve.jsxs)(Ve.Fragment, { children: [Object(Ve.jsxs)(at, { children: [Object(Ve.jsx)("img", { src: k && ("" === k.logo_link ? Se.a : k.logo_link), width: "64px", height: "64px", alt: "token icon" }), Object(Ve.jsxs)(ct, { children: [Object(Ve.jsx)(it, { children: k && k.token_symbol }), Object(Ve.jsx)(rt, { children: k && k.token_name })] })] }), Object(Ve.jsx)(st, { children: Object(Ve.jsx)(re.lb, { fontSize: "14px", textAlign: "left", color: "white", children: k && k.project_dec }) }), Object(Ve.jsxs)(lt, { children: [Object(Ve.jsx)(ot, { children: Object(Ve.jsxs)(dt, { children: [Object(Ve.jsx)(re.lb, { color: "white", bold: !0, children: "Presale Address:" }), Object(Ve.jsx)(re.lb, { children: Mn })] }) }), Object(Ve.jsxs)(ut, { children: ["Do not send ", k && k.is_other ? k.other_symbol : ga, " to the token address!"] })] }), Object(Ve.jsx)(tt, {}), Object(Ve.jsx)(Je, { children: Object(Ve.jsx)(ft, { children: va.map((function(e, t) { var n = "presale-data-".concat(t); return Object(Ve.jsx)("div", { children: t === va.length - 1 ? Object(Ve.jsxs)(It, { children: [Object(Ve.jsx)(re.lb, { children: e.presaleItem }), Object(Ve.jsx)(re.lb, { children: e.presaleValue })] }) : Object(Ve.jsxs)(kt, { children: [Object(Ve.jsx)(re.lb, { children: e.presaleItem }), Object(Ve.jsx)(re.lb, { children: e.presaleValue })] }) }, n) })) }) }), Object(Ve.jsx)(tt, {})] }) }) }), Object(Ve.jsx)(bt, { children: Yn ? Object(Ve.jsx)(ht, { children: Object(Ve.jsx)(Ae.a, {}) }) : Object(Ve.jsxs)(Ve.Fragment, { children: [Xt ? Object(Ve.jsxs)(Ve.Fragment, { children: [Object(Ve.jsxs)(zt, { children: [k && k.website_link ? Object(Ve.jsx)(re.N, { external: !0, href: k.website_link, "aria-label": "social2", children: Object(Ve.jsx)(Ct, { color: "#710D89", children: Object(Ve.jsx)(Te.a, { width: "15px", height: "15px" }) }) }) : null, k && k.github_link ? Object(Ve.jsx)(re.N, { external: !0, href: k.github_link, "aria-label": "social2", children: Object(Ve.jsx)(Ct, { color: "#3f4492", children: Object(Ve.jsx)("img", { src: ze.a, alt: "Git Logo", width: "15px", height: "15px" }) }) }) : null, k && k.twitter_link ? Object(Ve.jsx)(re.N, { external: !0, href: k.twitter_link, "aria-label": "twitter", children: Object(Ve.jsx)(Ct, { color: "#33AAED", children: Object(Ve.jsx)(Fe.a, { width: "15px", height: "15px" }) }) }) : null, k && k.reddit_link ? Object(Ve.jsx)(re.N, { external: !0, href: k.reddit_link, "aria-label": "discord", children: Object(Ve.jsx)(Ct, { color: "#2260DA", children: Object(Ve.jsx)("img", { src: Ce.a, alt: "Git Logo", width: "15px", height: "15px" }) }) }) : null, k && k.telegram_link ? Object(Ve.jsx)(re.N, { external: !0, href: k.telegram_link, "aria-label": "telegram", children: Object(Ve.jsx)(Ct, { color: "#3E70D1", children: Object(Ve.jsx)(Ne.a, { width: "15px", height: "15px" }) }) }) : null] }), Object(Ve.jsx)(xt, { children: "Public Sale" })] }) : Object(Ve.jsxs)(Ve.Fragment, { children: [Object(Ve.jsxs)(zt, { children: [k && k.website_link ? Object(Ve.jsx)(re.N, { external: !0, href: k.website_link, "aria-label": "social2", children: Object(Ve.jsx)(Ct, { color: "#710D89", children: Object(Ve.jsx)(Te.a, { width: "15px", height: "15px" }) }) }) : null, k && k.github_link ? Object(Ve.jsx)(re.N, { external: !0, href: k.github_link, "aria-label": "social2", children: Object(Ve.jsx)(Ct, { color: "#3f4492", children: Object(Ve.jsx)("img", { src: ze.a, alt: "Git Logo", width: "15px", height: "15px" }) }) }) : null, k && k.twitter_link ? Object(Ve.jsx)(re.N, { external: !0, href: k.twitter_link, "aria-label": "twitter", children: Object(Ve.jsx)(Ct, { color: "#33AAED", children: Object(Ve.jsx)(Fe.a, { width: "15px", height: "15px" }) }) }) : null, k && k.reddit_link ? Object(Ve.jsx)(re.N, { external: !0, href: k.reddit_link, "aria-label": "discord", children: Object(Ve.jsx)(Ct, { color: "#2260DA", children: Object(Ve.jsx)("img", { src: Ce.a, alt: "Git Logo", width: "15px", height: "15px" }) }) }) : null, k && k.telegram_link ? Object(Ve.jsx)(re.N, { external: !0, href: k.telegram_link, "aria-label": "telegram", children: Object(Ve.jsx)(Ct, { color: "#3E70D1", children: Object(Ve.jsx)(Ne.a, { width: "15px", height: "15px" }) }) }) : null] }), Xt ? Object(Ve.jsx)(xt, { children: "Public Sale" }) : Object(Ve.jsxs)(Ve.Fragment, { children: [Object(Ve.jsxs)(xt, { children: [We ? "WhiteList Enabled" : "Public", " Sale"] }), Object(Ve.jsx)(jt, { mb: We ? "12px" : "28px", children: K ? We ? "Only Whitelisted Wallets can Purchase This Token!" : "Anybody can Purchase This Token!" : "This token is not deposited!" }), We && Qe && Object(Ve.jsx)(re.lb, { mb: "24px", children: "Your wallet address is on the tier 1 whitelist!" }), We && Pt && Object(Ve.jsx)(re.lb, { children: "Your wallet address is on the tier 2 whitelist!" }), We && !Qe && !Pt && Bt && Object(Ve.jsx)(re.lb, { children: "Your wallet address is on the tier 2 whitelist!" }), We && !Qe && !Pt && !Bt && Object(Ve.jsxs)(pt, { children: [Object(Ve.jsx)("img", { src: fe.a, alt: "nuclear icon" }), Object(Ve.jsx)(re.lb, { children: "Your wallet address is not whitelisted" })] })] })] }), dn ? Object(Ve.jsxs)(Ve.Fragment, { children: [Object(Ve.jsx)(re.lb, { textAlign: "left", fontSize: "12px", fontWeight: "500", color: "white", children: "This presale has failed!" }), Object(Ve.jsxs)(re.lb, { textAlign: "left", fontSize: "12px", fontWeight: "500", mt: "16px", color: "white", children: ["If you participated in the presale click the claim button below to claim your", " ", k && k.is_other ? k.other_symbol : ga, "!"] }), Object(Ve.jsxs)(wt, { style: { width: "100%" }, mt: "16px", mb: "16px", onClick: Ia, disabled: Y || _n, scale: "sm", children: ["Claim ", k && k.is_other ? k.other_symbol : ga, _n && Object(Ve.jsx)(re.g, { className: "pendingTx" })] })] }) : o ? Object(Ve.jsxs)(Ve.Fragment, { children: [Object(Ve.jsx)(re.lb, { textAlign: "left", fontSize: "14px", fontWeight: "500", color: "white", children: "This presale has ended. Go back to the dashboard to view others!" }), Object(Ve.jsx)(vt, { onClick: function() { n.push("/swap/".concat(e.chainId, "/").concat(k.token_address)) }, style: { width: "100%" }, mt: "16px", scale: "sm", children: "Trade on SphynxSwap" }), Object(Ve.jsx)(re.lb, { textAlign: "left", fontSize: "14px", fontWeight: "500", mt: "16px", color: "white", children: "If you participated in the presale click the claim button below to claim your tokens!" }), Object(Ve.jsxs)(re.lb, { textAlign: "left", fontSize: "14px", fontWeight: "500", mt: "16px", color: "white", children: ["Available Amount: ", ve.utils.formatUnits(Vn.toString(), En), " ", k && k.token_symbol] }), Object(Ve.jsxs)(wt, { style: { width: "100%" }, mt: "16px", mb: "16px", onClick: Ia, disabled: Y || _n, scale: "sm", children: [_n && Object(Ve.jsx)(re.g, { className: "pendingTx" }), "Claim Token"] })] }) : Object(Ve.jsxs)(Ve.Fragment, { children: [Object(Ve.jsxs)(xt, { children: ["Raised: ", F, "/", null === k || void 0 === k ? void 0 : k.hard_cap] }), Object(Ve.jsx)(St, { children: Object(Ve.jsx)(Ft, { children: Object(Ve.jsx)(Tt, { state: F / (null === k || void 0 === k ? void 0 : k.hard_cap) * 100 }) }) }), Object(Ve.jsx)(mt, { children: Object(Ve.jsxs)(re.lb, { fontSize: "14px", fontWeight: "600", color: "white", textAlign: "left", children: ["1 ", k && k.is_other ? k.other_symbol : ga, " =", " ", k && k.tier3, " ", k && k.token_symbol, " "] }) }), Object(Ve.jsxs)(Ot, { children: [Object(Ve.jsxs)(gt, { children: [Object(Ve.jsx)("input", { value: g, placeholder: "", onChange: function(e) { w(e.target.value) } }), Object(Ve.jsx)(wt, { scale: "sm", onClick: Fa, children: "Max" })] }), k && k.is_other && Object(Ve.jsxs)(wt, { onClick: ya, disabled: vn || mn, scale: "sm", children: ["Approve", vn && Object(Ve.jsx)(re.g, { className: "pendingTx" })] }), Object(Ve.jsxs)(wt, { onClick: ka, disabled: jn, scale: "sm", children: ["Contribute", jn && Object(Ve.jsx)(re.g, { className: "pendingTx" })] })] }), Object(Ve.jsxs)(re.F, { alignItems: "center", style: { width: "100%" }, children: [Object(Ve.jsx)(je.a, {}), Object(Ve.jsxs)(re.lb, { fontSize: "13px", fontWeight: "600", style: { margin: "0 10px" }, children: [Rt ? "Tier 1 sale ends in" : Ht ? "Tier 2 sale ends in" : tn ? "Presale starts in" : "Public sale ends in", " "] }), Object(Ve.jsx)(_e.a, { time: k && Rt ? null === k || void 0 === k ? void 0 : k.tier1_time : Ht ? null === k || void 0 === k ? void 0 : k.tier2_time : tn ? null === k || void 0 === k ? void 0 : k.start_time : null === k || void 0 === k ? void 0 : k.end_time })] }), Object(Ve.jsx)(nt, {})] }), Object(Ve.jsxs)(yt, { children: [Object(Ve.jsx)(re.lb, { fontSize: "14px", fontWeight: "600", color: "white", children: "Your Contributed Account:" }), Object(Ve.jsxs)(re.lb, { fontSize: "14px", fontWeight: "600", textAlign: "center", color: "#F2C94C", children: [N, "\xa0", k && k.is_other ? k.other_symbol : ga] })] }), Object(Ve.jsx)(nt, {}), Object(Ve.jsxs)(yt, { children: [Object(Ve.jsx)(re.lb, { fontSize: "14px", fontWeight: "600", color: "white", children: "Your Reserved Tokens:" }), Object(Ve.jsxs)(re.lb, { fontSize: "14px", fontWeight: "600", textAlign: "center", color: "white", children: [D, " ", k && k.token_symbol] })] }), o || dn ? "" : Object(Ve.jsxs)(Ve.Fragment, { children: [Object(Ve.jsx)(tt, {}), Object(Ve.jsxs)(vt, { onClick: _a, disabled: zn, scale: "sm", children: ["Emergency Withdraw", zn && Object(Ve.jsx)(re.g, { className: "pendingTx" })] })] })] }) })] })] })
            }
        }
    }
]);