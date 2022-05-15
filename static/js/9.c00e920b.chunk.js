/*! For license information please see 9.c00e920b.chunk.js.LICENSE.txt */
(this["webpackJsonpsphynx-frontend"] = this["webpackJsonpsphynx-frontend"] || []).push([
    [9], { 1477: function(t, e, n) { "use strict";
            n.d(e, "i", (function() { return p })), n.d(e, "h", (function() { return d })), n.d(e, "g", (function() { return y })), n.d(e, "f", (function() { return v })), n.d(e, "j", (function() { return g })), n.d(e, "c", (function() { return b })), n.d(e, "b", (function() { return w })), n.d(e, "d", (function() { return x })), n.d(e, "e", (function() { return O })), n.d(e, "a", (function() { return _ })); var r = n(292),
                i = n.n(r),
                o = n(162),
                a = n.n(o),
                s = n(1546),
                u = n.n(s),
                c = n(1591),
                l = n.n(c),
                h = n(1547),
                f = n.n(h),
                p = function(t) { return 0 === t ? 0 : t > 0 ? 1 : -1 },
                d = function(t) { return f()(t) && t.indexOf("%") === t.length - 1 },
                y = function(t) { return l()(t) && !u()(t) },
                v = function(t) { return y(t) || f()(t) },
                m = 0,
                g = function(t) { var e = ++m; return "".concat(t || "").concat(e) },
                b = function(t, e) { var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]; if (!y(t) && !f()(t)) return r; if (d(t)) { var o = t.indexOf("%");
                        n = e * parseFloat(t.slice(0, o)) / 100 } else n = +t; return u()(n) && (n = r), i && n > e && (n = e), n },
                w = function(t) { if (!t) return null; var e = Object.keys(t); return e && e.length ? t[e[0]] : null },
                x = function(t) { if (!a()(t)) return !1; for (var e = t.length, n = {}, r = 0; r < e; r++) { if (n[t[r]]) return !0;
                        n[t[r]] = !0 } return !1 },
                O = function(t, e) { return y(t) && y(e) ? function(n) { return t + n * (e - t) } : function() { return e } };

            function _(t, e, n) { return t && t.length ? t.find((function(t) { return t && ("function" === typeof e ? e(t) : i()(t, e)) === n })) : null } }, 1478: function(t, e, n) { "use strict";
            n.d(e, "c", (function() { return l })), n.d(e, "a", (function() { return h })), n.d(e, "b", (function() { return f })); var r = n(240),
                i = n.n(r),
                o = n(1);

            function a(t) { return a = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t }, a(t) } var s = ["viewBox", "children"],
                u = ["className", "color", "height", "id", "lang", "max", "media", "method", "min", "name", "style", "target", "type", "width", "role", "tabIndex", "accentHeight", "accumulate", "additive", "alignmentBaseline", "allowReorder", "alphabetic", "amplitude", "arabicForm", "ascent", "attributeName", "attributeType", "autoReverse", "azimuth", "baseFrequency", "baselineShift", "baseProfile", "bbox", "begin", "bias", "by", "calcMode", "capHeight", "clip", "clipPath", "clipPathUnits", "clipRule", "colorInterpolation", "colorInterpolationFilters", "colorProfile", "colorRendering", "contentScriptType", "contentStyleType", "cursor", "cx", "cy", "d", "decelerate", "descent", "diffuseConstant", "direction", "display", "divisor", "dominantBaseline", "dur", "dx", "dy", "edgeMode", "elevation", "enableBackground", "end", "exponent", "externalResourcesRequired", "fill", "fillOpacity", "fillRule", "filter", "filterRes", "filterUnits", "floodColor", "floodOpacity", "focusable", "fontFamily", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontWeight", "format", "from", "fx", "fy", "g1", "g2", "glyphName", "glyphOrientationHorizontal", "glyphOrientationVertical", "glyphRef", "gradientTransform", "gradientUnits", "hanging", "horizAdvX", "horizOriginX", "href", "ideographic", "imageRendering", "in2", "in", "intercept", "k1", "k2", "k3", "k4", "k", "kernelMatrix", "kernelUnitLength", "kerning", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "letterSpacing", "lightingColor", "limitingConeAngle", "local", "markerEnd", "markerHeight", "markerMid", "markerStart", "markerUnits", "markerWidth", "mask", "maskContentUnits", "maskUnits", "mathematical", "mode", "numOctaves", "offset", "opacity", "operator", "order", "orient", "orientation", "origin", "overflow", "overlinePosition", "overlineThickness", "paintOrder", "panose1", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointerEvents", "points", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "r", "radius", "refX", "refY", "renderingIntent", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "result", "rotate", "rx", "ry", "seed", "shapeRendering", "slope", "spacing", "specularConstant", "specularExponent", "speed", "spreadMethod", "startOffset", "stdDeviation", "stemh", "stemv", "stitchTiles", "stopColor", "stopOpacity", "strikethroughPosition", "strikethroughThickness", "string", "stroke", "strokeDasharray", "strokeDashoffset", "strokeLinecap", "strokeLinejoin", "strokeMiterlimit", "strokeOpacity", "strokeWidth", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textAnchor", "textDecoration", "textLength", "textRendering", "to", "transform", "u1", "u2", "underlinePosition", "underlineThickness", "unicode", "unicodeBidi", "unicodeRange", "unitsPerEm", "vAlphabetic", "values", "vectorEffect", "version", "vertAdvY", "vertOriginX", "vertOriginY", "vHanging", "vIdeographic", "viewTarget", "visibility", "vMathematical", "widths", "wordSpacing", "writingMode", "x1", "x2", "x", "xChannelSelector", "xHeight", "xlinkActuate", "xlinkArcrole", "xlinkHref", "xlinkRole", "xlinkShow", "xlinkTitle", "xlinkType", "xmlBase", "xmlLang", "xmlns", "xmlnsXlink", "xmlSpace", "y1", "y2", "y", "yChannelSelector", "z", "zoomAndPan", "ref", "key", "angle"],
                c = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"],
                l = function(t, e, n) { if (!t || "function" === typeof t || "boolean" === typeof t) return null; var r = t; if (Object(o.isValidElement)(t) && (r = t.props), !i()(r)) return null; var a = {}; return Object.keys(r).forEach((function(t) {
                        (u.includes(t) || n && s.includes(t) || e && c.includes(t)) && (a[t] = r[t]) })), a },
                h = function(t, e) { if (!t || "function" === typeof t || "boolean" === typeof t) return null; var n = t; if (Object(o.isValidElement)(t) && (n = t.props), !i()(n)) return null; var r = {}; return Object.keys(n).forEach((function(t) { c.includes(t) && (r[t] = e || function(e) { return n[t](n, e) }) })), r },
                f = function(t, e, n) { if (!i()(t) || "object" !== a(t)) return null; var r = null; return Object.keys(t).forEach((function(i) { var o = t[i];
                        c.includes(i) && "function" === typeof o && (r || (r = {}), r[i] = function(t, e, n) { return function(r) { return t(e, n, r), null } }(o, e, n)) })), r } }, 1482: function(t, e, n) { "use strict"; var r = this && this.__assign || function() { return r = Object.assign || function(t) { for (var e, n = 1, r = arguments.length; n < r; n++)
                            for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]); return t }, r.apply(this, arguments) },
                i = this && this.__createBinding || (Object.create ? function(t, e, n, r) { void 0 === r && (r = n), Object.defineProperty(t, r, { enumerable: !0, get: function() { return e[n] } }) } : function(t, e, n, r) { void 0 === r && (r = n), t[r] = e[n] }),
                o = this && this.__setModuleDefault || (Object.create ? function(t, e) { Object.defineProperty(t, "default", { enumerable: !0, value: e }) } : function(t, e) { t.default = e }),
                a = this && this.__importStar || function(t) { if (t && t.__esModule) return t; var e = {}; if (null != t)
                        for (var n in t) "default" !== n && Object.prototype.hasOwnProperty.call(t, n) && i(e, t, n); return o(e, t), e },
                s = this && this.__awaiter || function(t, e, n, r) { return new(n || (n = Promise))((function(i, o) {
                        function a(t) { try { u(r.next(t)) } catch (e) { o(e) } }

                        function s(t) { try { u(r.throw(t)) } catch (e) { o(e) } }

                        function u(t) { var e;
                            t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) { t(e) }))).then(a, s) }
                        u((r = r.apply(t, e || [])).next()) })) },
                u = this && this.__generator || function(t, e) { var n, r, i, o, a = { label: 0, sent: function() { if (1 & i[0]) throw i[1]; return i[1] }, trys: [], ops: [] }; return o = { next: s(0), throw: s(1), return: s(2) }, "function" === typeof Symbol && (o[Symbol.iterator] = function() { return this }), o;

                    function s(o) { return function(s) { return function(o) { if (n) throw new TypeError("Generator is already executing."); for (; a;) try { if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i; switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            i = o; break;
                                        case 4:
                                            return a.label++, { value: o[1], done: !1 };
                                        case 5:
                                            a.label++, r = o[1], o = [0]; continue;
                                        case 7:
                                            o = a.ops.pop(), a.trys.pop(); continue;
                                        default:
                                            if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) { a = 0; continue } if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) { a.label = o[1]; break } if (6 === o[0] && a.label < i[1]) { a.label = i[1], i = o; break } if (i && a.label < i[2]) { a.label = i[2], a.ops.push(o); break }
                                            i[2] && a.ops.pop(), a.trys.pop(); continue }
                                    o = e.call(t, a) } catch (s) { o = [6, s], r = 0 } finally { n = i = 0 }
                                if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 } }([o, s]) } } },
                c = this && this.__rest || function(t, e) { var n = {}; for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]); if (null != t && "function" === typeof Object.getOwnPropertySymbols) { var i = 0; for (r = Object.getOwnPropertySymbols(t); i < r.length; i++) e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]) } return n },
                l = this && this.__importDefault || function(t) { return t && t.__esModule ? t : { default: t } };
            Object.defineProperty(e, "__esModule", { value: !0 }), e.gql = e.batchRequests = e.request = e.rawRequest = e.GraphQLClient = e.ClientError = void 0; var h = a(n(1666)),
                f = h,
                p = n(1781),
                d = l(n(1667)),
                y = n(1670);
            Object.defineProperty(e, "ClientError", { enumerable: !0, get: function() { return y.ClientError } }); var v = function(t) { var e = {}; return t && ("undefined" !== typeof Headers && t instanceof Headers || t instanceof f.Headers ? e = function(t) { var e = {}; return t.forEach((function(t, n) { e[n] = t })), e }(t) : Array.isArray(t) ? t.forEach((function(t) { var n = t[0],
                            r = t[1];
                        e[n] = r })) : e = t), e },
                m = function(t) { return t.replace(/([\s,]|#[^\n\r]+)+/g, " ").trim() },
                g = function(t) { var e = t.url,
                        n = t.query,
                        i = t.variables,
                        o = t.operationName,
                        a = t.headers,
                        c = t.fetch,
                        l = t.fetchOptions; return s(void 0, void 0, void 0, (function() { var t; return u(this, (function(s) { switch (s.label) {
                                case 0:
                                    return t = d.default(n, i, o), [4, c(e, r({ method: "POST", headers: r(r({}, "string" === typeof t ? { "Content-Type": "application/json" } : {}), a), body: t }, l))];
                                case 1:
                                    return [2, s.sent()] } })) })) },
                b = function(t) { var e = t.url,
                        n = t.query,
                        i = t.variables,
                        o = t.operationName,
                        a = t.headers,
                        c = t.fetch,
                        l = t.fetchOptions; return s(void 0, void 0, void 0, (function() { var t; return u(this, (function(s) { switch (s.label) {
                                case 0:
                                    return t = function(t) { var e = t.query,
                                            n = t.variables,
                                            r = t.operationName; if (!Array.isArray(e)) { var i = ["query=" + encodeURIComponent(m(e))]; return n && i.push("variables=" + encodeURIComponent(JSON.stringify(n))), r && i.push("operationName=" + encodeURIComponent(r)), i.join("&") } if ("undefined" !== typeof n && !Array.isArray(n)) throw new Error("Cannot create query with given variable type, array expected"); var o = e.reduce((function(t, e, r) { return t.push({ query: m(e), variables: n ? JSON.stringify(n[r]) : void 0 }), t }), []); return "query=" + encodeURIComponent(JSON.stringify(o)) }({ query: n, variables: i, operationName: o }), [4, c(e + "?" + t, r({ method: "GET", headers: a }, l))];
                                case 1:
                                    return [2, s.sent()] } })) })) },
                w = function() {
                    function t(t, e) { this.url = t, this.options = e || {} } return t.prototype.rawRequest = function(t, e, n) { var i = this.options,
                            o = i.headers,
                            a = i.fetch,
                            s = void 0 === a ? h.default : a,
                            u = i.method,
                            l = void 0 === u ? "POST" : u,
                            f = c(i, ["headers", "fetch", "method"]); return x({ url: this.url, query: t, variables: e, headers: r(r({}, v(o)), v(n)), operationName: void 0, fetch: s, method: l, fetchOptions: f }) }, t.prototype.request = function(t, e, n) { return s(this, void 0, void 0, (function() { var i, o, a, s, l, f, p, d, y, m, g; return u(this, (function(u) { switch (u.label) {
                                    case 0:
                                        return i = this.options, o = i.headers, a = i.fetch, s = void 0 === a ? h.default : a, l = i.method, f = void 0 === l ? "POST" : l, p = c(i, ["headers", "fetch", "method"]), d = this.url, y = M(t), m = y.query, g = y.operationName, [4, x({ url: d, query: m, variables: e, headers: r(r({}, v(o)), v(n)), operationName: g, fetch: s, method: f, fetchOptions: p })];
                                    case 1:
                                        return [2, u.sent().data] } })) })) }, t.prototype.batchRequests = function(t, e) { return s(this, void 0, void 0, (function() { var n, i, o, a, s, l, f, p, d, y; return u(this, (function(u) { switch (u.label) {
                                    case 0:
                                        return n = this.options, i = n.headers, o = n.fetch, a = void 0 === o ? h.default : o, s = n.method, l = void 0 === s ? "POST" : s, f = c(n, ["headers", "fetch", "method"]), p = this.url, d = t.map((function(t) { return M(t.document).query })), y = t.map((function(t) { return t.variables })), [4, x({ url: p, query: d, variables: y, headers: r(r({}, v(i)), v(e)), operationName: void 0, fetch: a, method: l, fetchOptions: f })];
                                    case 1:
                                        return [2, u.sent().data] } })) })) }, t.prototype.setHeaders = function(t) { return this.options.headers = t, this }, t.prototype.setHeader = function(t, e) { var n, r = this.options.headers; return r ? r[t] = e : this.options.headers = ((n = {})[t] = e, n), this }, t.prototype.setEndpoint = function(t) { return this.url = t, this }, t }();

            function x(t) { var e = t.url,
                    n = t.query,
                    i = t.variables,
                    o = t.headers,
                    a = t.operationName,
                    c = t.fetch,
                    l = t.method,
                    h = void 0 === l ? "POST" : l,
                    f = t.fetchOptions; return s(this, void 0, void 0, (function() { var t, s, l, p, d, v, m, w; return u(this, (function(u) { switch (u.label) {
                            case 0:
                                return t = "POST" === h.toUpperCase() ? g : b, s = Array.isArray(n), [4, t({ url: e, query: n, variables: i, operationName: a, headers: o, fetch: c, fetchOptions: f })];
                            case 1:
                                return [4, _(l = u.sent())];
                            case 2:
                                if (p = u.sent(), d = s && Array.isArray(p) ? !p.some((function(t) { return !t.data })) : !!p.data, l.ok && !p.errors && d) return v = l.headers, m = l.status, [2, r(r({}, s ? { data: p } : p), { headers: v, status: m })]; throw w = "string" === typeof p ? { error: p } : p, new y.ClientError(r(r({}, w), { status: l.status, headers: l.headers }), { query: n, variables: i }) } })) })) }

            function O(t, e, n, r) { return s(this, void 0, void 0, (function() { return u(this, (function(i) { return [2, new w(t).request(e, n, r)] })) })) }

            function _(t) { var e = t.headers.get("Content-Type"); return e && e.startsWith("application/json") ? t.json() : t.text() }

            function M(t) { var e; if ("string" === typeof t) return { query: t }; var n = void 0,
                    r = t.definitions.filter((function(t) { return "OperationDefinition" === t.kind })); return 1 === r.length && (n = null === (e = r[0].name) || void 0 === e ? void 0 : e.value), { query: p.print(t), operationName: n } }
            e.GraphQLClient = w, e.rawRequest = function(t, e, n, r) { return s(this, void 0, void 0, (function() { return u(this, (function(i) { return [2, new w(t).rawRequest(e, n, r)] })) })) }, e.request = O, e.batchRequests = function(t, e, n) { return s(this, void 0, void 0, (function() { return u(this, (function(r) { return [2, new w(t).batchRequests(e, n)] })) })) }, e.default = O, e.gql = function(t) { for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n]; return t.reduce((function(t, n, r) { return "" + t + n + (r in e ? e[r] : "") }), "") } }, 1487: function(t, e, n) { "use strict";

            function r(t, e) { switch (arguments.length) {
                    case 0:
                        break;
                    case 1:
                        this.range(t); break;
                    default:
                        this.range(e).domain(t) } return this }

            function i(t, e) { switch (arguments.length) {
                    case 0:
                        break;
                    case 1:
                        "function" === typeof t ? this.interpolator(t) : this.range(t); break;
                    default:
                        this.domain(t), "function" === typeof e ? this.interpolator(e) : this.range(e) } return this }
            n.d(e, "b", (function() { return r })), n.d(e, "a", (function() { return i })) }, 1488: function(t, e, n) { "use strict";
            n.d(e, "a", (function() { return o })); var r = n(26),
                i = n(19);

            function o(t) { Object(i.a)(1, arguments); var e = Object(r.default)(t); return e.setMinutes(0, 0, 0), e } }, 1494: function(t, e) { t.exports = function(t) { return null == t } }, 1495: function(t, e, n) { "use strict";
            n.d(e, "a", (function() { return l })); var r = n(1),
                i = n.n(r),
                o = n(406),
                a = n.n(o),
                s = n(1478);

            function u() { return u = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]) } return t }, u.apply(this, arguments) }

            function c(t, e) { if (null == t) return {}; var n, r, i = function(t, e) { if (null == t) return {}; var n, r, i = {},
                        o = Object.keys(t); for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || (i[n] = t[n]); return i }(t, e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(t); for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n]) } return i }

            function l(t) { var e = t.children,
                    n = t.className,
                    r = c(t, ["children", "className"]),
                    o = a()("recharts-layer", n); return i.a.createElement("g", u({ className: o }, Object(s.c)(r, !0)), e) } }, 1501: function(t, e, n) { "use strict";
            n.d(e, "b", (function() { return s })), n.d(e, "a", (function() { return u })); var r = n(1823),
                i = n(1502),
                o = n(1487),
                a = n(1568);

            function s(t) { var e = t.domain; return t.ticks = function(t) { var n = e(); return Object(r.a)(n[0], n[n.length - 1], null == t ? 10 : t) }, t.tickFormat = function(t, n) { var r = e(); return Object(a.a)(r[0], r[r.length - 1], null == t ? 10 : t, n) }, t.nice = function(n) { null == n && (n = 10); var i, o, a = e(),
                        s = 0,
                        u = a.length - 1,
                        c = a[s],
                        l = a[u],
                        h = 10; for (l < c && (o = c, c = l, l = o, o = s, s = u, u = o); h-- > 0;) { if ((o = Object(r.b)(c, l, n)) === i) return a[s] = c, a[u] = l, e(a); if (o > 0) c = Math.floor(c / o) * o, l = Math.ceil(l / o) * o;
                        else { if (!(o < 0)) break;
                            c = Math.ceil(c * o) / o, l = Math.floor(l * o) / o }
                        i = o } return t }, t }

            function u() { var t = Object(i.b)(); return t.copy = function() { return Object(i.a)(t, u()) }, o.b.apply(t, arguments), s(t) } }, 1502: function(t, e, n) { "use strict";
            n.d(e, "c", (function() { return c })), n.d(e, "a", (function() { return p })), n.d(e, "d", (function() { return d })), n.d(e, "b", (function() { return y })); var r = n(1824),
                i = n(1780),
                o = n(1603),
                a = n(1825); var s = n(1553),
                u = [0, 1];

            function c(t) { return t }

            function l(t, e) { return (e -= t = +t) ? function(n) { return (n - t) / e } : (n = isNaN(e) ? NaN : .5, function() { return n }); var n }

            function h(t, e, n) { var r = t[0],
                    i = t[1],
                    o = e[0],
                    a = e[1]; return i < r ? (r = l(i, r), o = n(a, o)) : (r = l(r, i), o = n(o, a)),
                    function(t) { return o(r(t)) } }

            function f(t, e, n) { var i = Math.min(t.length, e.length) - 1,
                    o = new Array(i),
                    a = new Array(i),
                    s = -1; for (t[i] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++s < i;) o[s] = l(t[s], t[s + 1]), a[s] = n(e[s], e[s + 1]); return function(e) { var n = Object(r.a)(t, e, 1, i) - 1; return a[n](o[n](e)) } }

            function p(t, e) { return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown()) }

            function d() { var t, e, n, r, l, p, d = u,
                    y = u,
                    v = i.a,
                    m = c;

                function g() { var t = Math.min(d.length, y.length); return m !== c && (m = function(t, e) { var n; return t > e && (n = t, t = e, e = n),
                            function(n) { return Math.max(t, Math.min(e, n)) } }(d[0], d[t - 1])), r = t > 2 ? f : h, l = p = null, b }

                function b(e) { return null == e || isNaN(e = +e) ? n : (l || (l = r(d.map(t), y, v)))(t(m(e))) } return b.invert = function(n) { return m(e((p || (p = r(y, d.map(t), o.a)))(n))) }, b.domain = function(t) { return arguments.length ? (d = Array.from(t, s.a), g()) : d.slice() }, b.range = function(t) { return arguments.length ? (y = Array.from(t), g()) : y.slice() }, b.rangeRound = function(t) { return y = Array.from(t), v = a.a, g() }, b.clamp = function(t) { return arguments.length ? (m = !!t || c, g()) : m !== c }, b.interpolate = function(t) { return arguments.length ? (v = t, g()) : v }, b.unknown = function(t) { return arguments.length ? (n = t, b) : n },
                    function(n, r) { return t = n, e = r, g() } }

            function y() { return d()(c, c) } }, 1505: function(t, e, n) { "use strict";
            n.d(e, "c", (function() { return m })), n.d(e, "a", (function() { return x })), n.d(e, "b", (function() { return O })), n.d(e, "h", (function() { return _ })), n.d(e, "e", (function() { return S })), n.d(e, "g", (function() { return k })), n.d(e, "d", (function() { return A })), n.d(e, "f", (function() { return C })); var r = n(1547),
                i = n.n(r),
                o = n(292),
                a = n.n(o),
                s = n(1494),
                u = n.n(s),
                c = n(162),
                l = n.n(c),
                h = n(1),
                f = n(1702),
                p = n(1477),
                d = n(1551);

            function y(t, e) { if (null == t) return {}; var n, r, i = function(t, e) { if (null == t) return {}; var n, r, i = {},
                        o = Object.keys(t); for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || (i[n] = t[n]); return i }(t, e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(t); for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n]) } return i } var v = { click: "onClick", mousedown: "onMouseDown", mouseup: "onMouseUp", mouseover: "onMouseOver", mousemove: "onMouseMove", mouseout: "onMouseOut", mouseenter: "onMouseEnter", mouseleave: "onMouseLeave", touchcancel: "onTouchCancel", touchend: "onTouchEnd", touchmove: "onTouchMove", touchstart: "onTouchStart" },
                m = function(t) { return "string" === typeof t ? t : t ? t.displayName || t.name || "Component" : "" },
                g = null,
                b = null,
                w = function t(e) { if (e === g && l()(b)) return b; var n = []; return h.Children.forEach(e, (function(e) { u()(e) || (Object(f.isFragment)(e) ? n = n.concat(t(e.props.children)) : n.push(e)) })), b = n, g = e, n },
                x = function(t, e) { var n = [],
                        r = []; return r = l()(e) ? e.map((function(t) { return m(t) })) : [m(e)], w(t).forEach((function(t) { var e = a()(t, "type.displayName") || a()(t, "type.name"); - 1 !== r.indexOf(e) && n.push(t) })), n },
                O = function(t, e) { var n = x(t, e); return n && n[0] },
                _ = function(t) { if (!t || !t.props) return !1; var e = t.props,
                        n = e.width,
                        r = e.height; return !(!Object(p.g)(n) || n <= 0 || !Object(p.g)(r) || r <= 0) },
                M = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"],
                j = function(t) { return t && t.type && i()(t.type) && M.indexOf(t.type) >= 0 },
                S = function t(e, n) { if (e === n) return !0; var r = h.Children.count(e); if (r !== h.Children.count(n)) return !1; if (0 === r) return !0; if (1 === r) return E(l()(e) ? e[0] : e, l()(n) ? n[0] : n); for (var i = 0; i < r; i++) { var o = e[i],
                            a = n[i]; if (l()(o) || l()(a)) { if (!t(o, a)) return !1 } else if (!E(o, a)) return !1 } return !0 },
                E = function(t, e) { if (u()(t) && u()(e)) return !0; if (!u()(t) && !u()(e)) { var n = t.props || {},
                            r = n.children,
                            i = y(n, ["children"]),
                            o = e.props || {},
                            a = o.children,
                            s = y(o, ["children"]); return r && a ? Object(d.a)(i, s) && S(r, a) : !r && !a && Object(d.a)(i, s) } return !1 },
                k = function(t, e) { var n = [],
                        r = {}; return w(t).forEach((function(t, i) { if (j(t)) n.push(t);
                        else if (t) { var o = m(t.type),
                                a = e[o] || {},
                                s = a.handler,
                                u = a.once; if (s && (!u || !r[o])) { var c = s(t, o, i);
                                n.push(c), r[o] = !0 } } })), n },
                A = function(t) { var e = t && t.type; return e && v[e] ? v[e] : null },
                C = function(t, e) { return w(e).indexOf(t) } }, 1509: function(t, e, n) { "use strict";
            n.d(e, "w", (function() { return gt })), n.d(e, "m", (function() { return bt })), n.d(e, "b", (function() { return wt })), n.d(e, "q", (function() { return xt })), n.d(e, "p", (function() { return Ot })), n.d(e, "h", (function() { return _t })), n.d(e, "g", (function() { return Mt })), n.d(e, "a", (function() { return jt })), n.d(e, "z", (function() { return Et })), n.d(e, "n", (function() { return kt })), n.d(e, "x", (function() { return At })), n.d(e, "l", (function() { return Ct })), n.d(e, "t", (function() { return Pt })), n.d(e, "d", (function() { return Tt })), n.d(e, "A", (function() { return Dt })), n.d(e, "c", (function() { return Rt })), n.d(e, "e", (function() { return It })), n.d(e, "C", (function() { return Bt })), n.d(e, "r", (function() { return Ft })), n.d(e, "u", (function() { return Wt })), n.d(e, "k", (function() { return Vt })), n.d(e, "j", (function() { return Ut })), n.d(e, "i", (function() { return Gt })), n.d(e, "s", (function() { return Xt })), n.d(e, "o", (function() { return Ht })), n.d(e, "B", (function() { return Jt })), n.d(e, "f", (function() { return $t })), n.d(e, "y", (function() { return Kt })), n.d(e, "v", (function() { return Zt })); var r = n(1516),
                i = n.n(r),
                o = n(1548),
                a = n.n(o),
                s = n(1546),
                u = n.n(s),
                c = n(1550),
                l = n.n(c),
                h = n(1547),
                f = n.n(h),
                p = n(162),
                d = n.n(p),
                y = n(1598),
                v = n.n(y),
                m = n(1700),
                g = n.n(m),
                b = n(311),
                w = n.n(b),
                x = n(511),
                O = n.n(x),
                _ = n(292),
                M = n.n(_),
                j = n(1494),
                S = n.n(j),
                E = n(798),
                k = n.n(E);

            function A(t) { return function(t) { if (Array.isArray(t)) return C(t) }(t) || function(t) { if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t) }(t) || function(t, e) { if (!t) return; if ("string" === typeof t) return C(t, e); var n = Object.prototype.toString.call(t).slice(8, -1); "Object" === n && t.constructor && (n = t.constructor.name); if ("Map" === n || "Set" === n) return Array.from(t); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return C(t, e) }(t) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

            function C(t, e) {
                (null == e || e > t.length) && (e = t.length); for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]; return r } var P = function(t) { return t },
                T = { "@@functional/placeholder": !0 },
                D = function(t) { return t === T },
                N = function(t) { return function e() { return 0 === arguments.length || 1 === arguments.length && D(arguments.length <= 0 ? void 0 : arguments[0]) ? e : t.apply(void 0, arguments) } },
                R = function t(e, n) { return 1 === e ? n : N((function() { for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]; var a = i.filter((function(t) { return t !== T })).length; return a >= e ? n.apply(void 0, i) : t(e - a, N((function() { for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r]; var o = i.map((function(t) { return D(t) ? e.shift() : t })); return n.apply(void 0, A(o).concat(e)) }))) })) },
                I = function(t) { return R(t.length, t) },
                B = function(t, e) { for (var n = [], r = t; r < e; ++r) n[r - t] = r; return n },
                L = I((function(t, e) { return Array.isArray(e) ? e.map(t) : Object.keys(e).map((function(t) { return e[t] })).map(t) })),
                z = function() { for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n]; if (!e.length) return P; var r = e.reverse(),
                        i = r[0],
                        o = r.slice(1); return function() { return o.reduce((function(t, e) { return e(t) }), i.apply(void 0, arguments)) } },
                F = function(t) { return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("") },
                W = function(t) { var e = null,
                        n = null; return function() { for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]; return e && i.every((function(t, n) { return t === e[n] })) ? n : (e = i, n = t.apply(void 0, i)) } }; var V = { rangeStep: function(t, e, n) { for (var r = new k.a(t), i = 0, o = []; r.lt(e) && i < 1e5;) o.push(r.toNumber()), r = r.add(n), i++; return o }, getDigitCount: function(t) { return 0 === t ? 1 : Math.floor(new k.a(t).abs().log(10).toNumber()) + 1 }, interpolateNumber: I((function(t, e, n) { var r = +t; return r + n * (+e - r) })), uninterpolateNumber: I((function(t, e, n) { var r = e - +t; return (n - t) / (r = r || 1 / 0) })), uninterpolateTruncation: I((function(t, e, n) { var r = e - +t; return r = r || 1 / 0, Math.max(0, Math.min(1, (n - t) / r)) })) };

            function U(t) { return function(t) { if (Array.isArray(t)) return H(t) }(t) || function(t) { if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t) }(t) || X(t) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

            function G(t, e) { return function(t) { if (Array.isArray(t)) return t }(t) || function(t, e) { if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(t))) return; var n = [],
                        r = !0,
                        i = !1,
                        o = void 0; try { for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0); } catch (u) { i = !0, o = u } finally { try { r || null == s.return || s.return() } finally { if (i) throw o } } return n }(t, e) || X(t, e) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

            function X(t, e) { if (t) { if ("string" === typeof t) return H(t, e); var n = Object.prototype.toString.call(t).slice(8, -1); return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? H(t, e) : void 0 } }

            function H(t, e) {
                (null == e || e > t.length) && (e = t.length); for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]; return r }

            function Y(t) { var e = G(t, 2),
                    n = e[0],
                    r = e[1],
                    i = n,
                    o = r; return n > r && (i = r, o = n), [i, o] }

            function q(t, e, n) { if (t.lte(0)) return new k.a(0); var r = V.getDigitCount(t.toNumber()),
                    i = new k.a(10).pow(r),
                    o = t.div(i),
                    a = 1 !== r ? .05 : .1,
                    s = new k.a(Math.ceil(o.div(a).toNumber())).add(n).mul(a).mul(i); return e ? s : new k.a(Math.ceil(s)) }

            function J(t, e, n) { var r = 1,
                    i = new k.a(t); if (!i.isint() && n) { var o = Math.abs(t);
                    o < 1 ? (r = new k.a(10).pow(V.getDigitCount(t) - 1), i = new k.a(Math.floor(i.div(r).toNumber())).mul(r)) : o > 1 && (i = new k.a(Math.floor(t))) } else 0 === t ? i = new k.a(Math.floor((e - 1) / 2)) : n || (i = new k.a(Math.floor(t))); var a = Math.floor((e - 1) / 2); return z(L((function(t) { return i.add(new k.a(t - a).mul(r)).toNumber() })), B)(0, e) }

            function $(t, e, n, r) { var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0; if (!Number.isFinite((e - t) / (n - 1))) return { step: new k.a(0), tickMin: new k.a(0), tickMax: new k.a(0) }; var o, a = q(new k.a(e).sub(t).div(n - 1), r, i);
                o = t <= 0 && e >= 0 ? new k.a(0) : (o = new k.a(t).add(e).div(2)).sub(new k.a(o).mod(a)); var s = Math.ceil(o.sub(t).div(a).toNumber()),
                    u = Math.ceil(new k.a(e).sub(o).div(a).toNumber()),
                    c = s + u + 1; return c > n ? $(t, e, n, r, i + 1) : (c < n && (u = e > 0 ? u + (n - c) : u, s = e > 0 ? s : s + (n - c)), { step: a, tickMin: o.sub(new k.a(s).mul(a)), tickMax: o.add(new k.a(u).mul(a)) }) } var K = W((function(t) { var e = G(t, 2),
                        n = e[0],
                        r = e[1],
                        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
                        o = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                        a = Math.max(i, 2),
                        s = Y([n, r]),
                        u = G(s, 2),
                        c = u[0],
                        l = u[1]; if (c === -1 / 0 || l === 1 / 0) { var h = l === 1 / 0 ? [c].concat(U(B(0, i - 1).map((function() { return 1 / 0 })))) : [].concat(U(B(0, i - 1).map((function() { return -1 / 0 }))), [l]); return n > r ? F(h) : h } if (c === l) return J(c, i, o); var f = $(c, l, a, o),
                        p = f.step,
                        d = f.tickMin,
                        y = f.tickMax,
                        v = V.rangeStep(d, y.add(new k.a(.1).mul(p)), p); return n > r ? F(v) : v })),
                Z = (W((function(t) { var e = G(t, 2),
                        n = e[0],
                        r = e[1],
                        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
                        o = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                        a = Math.max(i, 2),
                        s = Y([n, r]),
                        u = G(s, 2),
                        c = u[0],
                        l = u[1]; if (c === -1 / 0 || l === 1 / 0) return [n, r]; if (c === l) return J(c, i, o); var h = q(new k.a(l).sub(c).div(a - 1), o, 0),
                        f = z(L((function(t) { return new k.a(c).add(new k.a(t).mul(h)).toNumber() })), B),
                        p = f(0, a).filter((function(t) { return t >= c && t <= l })); return n > r ? F(p) : p })), W((function(t, e) { var n = G(t, 2),
                        r = n[0],
                        i = n[1],
                        o = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                        a = Y([r, i]),
                        s = G(a, 2),
                        u = s[0],
                        c = s[1]; if (u === -1 / 0 || c === 1 / 0) return [r, i]; if (u === c) return [u]; var l = Math.max(e, 2),
                        h = q(new k.a(c).sub(u).div(l - 1), o, 0),
                        f = [].concat(U(V.rangeStep(new k.a(u), new k.a(c).sub(new k.a(.99).mul(h)), h)), [c]); return r > i ? F(f) : f }))),
                Q = n(1569),
                tt = n(1501),
                et = n(1638),
                nt = function(t, e) { if ((i = t.length) > 1)
                        for (var n, r, i, o = 1, a = t[e[0]], s = a.length; o < i; ++o)
                            for (r = a, a = t[e[o]], n = 0; n < s; ++n) a[n][1] += a[n][0] = isNaN(r[n][1]) ? r[n][0] : r[n][1] },
                rt = n(412),
                it = n(1554),
                ot = n(1531),
                at = function(t) { for (var e = t.length, n = new Array(e); --e >= 0;) n[e] = e; return n };

            function st(t, e) { return t[e] }

            function ut(t) { var e = []; return e.key = t, e } var ct = n(1477),
                lt = n(1640),
                ht = n(1505),
                ft = n(1478);

            function pt(t) { return function(t) { if (Array.isArray(t)) return dt(t) }(t) || function(t) { if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t) }(t) || function(t, e) { if (!t) return; if ("string" === typeof t) return dt(t, e); var n = Object.prototype.toString.call(t).slice(8, -1); "Object" === n && t.constructor && (n = t.constructor.name); if ("Map" === n || "Set" === n) return Array.from(t); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return dt(t, e) }(t) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

            function dt(t, e) {
                (null == e || e > t.length) && (e = t.length); for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]; return r }

            function yt(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function vt(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? yt(Object(n), !0).forEach((function(e) { mt(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : yt(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

            function mt(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t }

            function gt(t, e, n) { return S()(t) || S()(e) ? n : Object(ct.f)(e) ? M()(t, e, n) : O()(e) ? e(t) : n }

            function bt(t, e, n, r) { var i = w()(t, (function(t) { return gt(t, e) })); if ("number" === n) { var o = i.filter((function(t) { return Object(ct.g)(t) || parseFloat(t) })); return o.length ? [g()(o), v()(o)] : [1 / 0, -1 / 0] } return (r ? i.filter((function(t) { return !S()(t) })) : i).map((function(t) { return Object(ct.f)(t) || t instanceof Date ? t : "" })) } var wt = function(t) { var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                        r = arguments.length > 2 ? arguments[2] : void 0,
                        i = arguments.length > 3 ? arguments[3] : void 0,
                        o = -1,
                        a = null !== (e = null === n || void 0 === n ? void 0 : n.length) && void 0 !== e ? e : 0; if (a > 1) { if (i && "angleAxis" === i.axisType && Math.abs(Math.abs(i.range[1] - i.range[0]) - 360) <= 1e-6)
                            for (var s = i.range, u = 0; u < a; u++) { var c = u > 0 ? r[u - 1].coordinate : r[a - 1].coordinate,
                                    l = r[u].coordinate,
                                    h = u >= a - 1 ? r[0].coordinate : r[u + 1].coordinate,
                                    f = void 0; if (Object(ct.i)(l - c) !== Object(ct.i)(h - l)) { var p = []; if (Object(ct.i)(h - l) === Object(ct.i)(s[1] - s[0])) { f = h; var d = l + s[1] - s[0];
                                        p[0] = Math.min(d, (d + c) / 2), p[1] = Math.max(d, (d + c) / 2) } else { f = c; var y = h + s[1] - s[0];
                                        p[0] = Math.min(l, (y + l) / 2), p[1] = Math.max(l, (y + l) / 2) } var v = [Math.min(l, (f + l) / 2), Math.max(l, (f + l) / 2)]; if (t > v[0] && t <= v[1] || t >= p[0] && t <= p[1]) { o = r[u].index; break } } else { var m = Math.min(c, h),
                                        g = Math.max(c, h); if (t > (m + l) / 2 && t <= (g + l) / 2) { o = r[u].index; break } } } else
                                for (var b = 0; b < a; b++)
                                    if (0 === b && t <= (n[b].coordinate + n[b + 1].coordinate) / 2 || b > 0 && b < a - 1 && t > (n[b].coordinate + n[b - 1].coordinate) / 2 && t <= (n[b].coordinate + n[b + 1].coordinate) / 2 || b === a - 1 && t > (n[b].coordinate + n[b - 1].coordinate) / 2) { o = n[b].index; break } } else o = 0; return o },
                xt = function(t) { var e, n = t.type.displayName,
                        r = t.props,
                        i = r.stroke,
                        o = r.fill; switch (n) {
                        case "Line":
                            e = i; break;
                        case "Area":
                        case "Radar":
                            e = i && "none" !== i ? i : o; break;
                        default:
                            e = o } return e },
                Ot = function(t) { var e, n = t.children,
                        r = t.formattedGraphicalItems,
                        i = t.legendWidth,
                        o = t.legendContent,
                        a = Object(ht.b)(n, lt.a.displayName); return a ? (e = a.props && a.props.payload ? a.props && a.props.payload : "children" === o ? (r || []).reduce((function(t, e) { var n = e.item,
                            r = e.props,
                            i = r.sectors || r.data || []; return t.concat(i.map((function(t) { return { type: a.props.iconType || n.props.legendType, value: t.name, color: t.fill, payload: t } }))) }), []) : (r || []).map((function(t) { var e = t.item,
                            n = e.props,
                            r = n.dataKey,
                            i = n.name,
                            o = n.legendType; return { inactive: n.hide, dataKey: r, type: a.props.iconType || o || "square", color: xt(e), value: i || r, payload: e.props } })), vt(vt(vt({}, a.props), lt.a.getWithHeight(a, i)), {}, { payload: e, item: a })) : null },
                _t = function(t) { var e = t.barSize,
                        n = t.stackGroups,
                        r = void 0 === n ? {} : n; if (!r) return {}; for (var i = {}, o = Object.keys(r), a = 0, s = o.length; a < s; a++)
                        for (var u = r[o[a]].stackGroups, c = Object.keys(u), l = 0, h = c.length; l < h; l++) { var f = u[c[l]],
                                p = f.items,
                                d = f.cateAxisId,
                                y = p.filter((function(t) { return Object(ht.c)(t.type).indexOf("Bar") >= 0 })); if (y && y.length) { var v = y[0].props.barSize,
                                    m = y[0].props[d];
                                i[m] || (i[m] = []), i[m].push({ item: y[0], stackList: y.slice(1), barSize: S()(v) ? e : v }) } }
                    return i },
                Mt = function(t) { var e = t.barGap,
                        n = t.barCategoryGap,
                        r = t.bandSize,
                        i = t.sizeList,
                        o = void 0 === i ? [] : i,
                        a = t.maxBarSize,
                        s = o.length; if (s < 1) return null; var u, c = Object(ct.c)(e, r, 0, !0); if (o[0].barSize === +o[0].barSize) { var l = !1,
                            h = r / s,
                            f = o.reduce((function(t, e) { return t + e.barSize || 0 }), 0);
                        (f += (s - 1) * c) >= r && (f -= (s - 1) * c, c = 0), f >= r && h > 0 && (l = !0, f = s * (h *= .9)); var p = { offset: ((r - f) / 2 >> 0) - c, size: 0 };
                        u = o.reduce((function(t, e) { var n = [].concat(pt(t), [{ item: e.item, position: { offset: p.offset + p.size + c, size: l ? h : e.barSize } }]); return p = n[n.length - 1].position, e.stackList && e.stackList.length && e.stackList.forEach((function(t) { n.push({ item: t, position: p }) })), n }), []) } else { var d = Object(ct.c)(n, r, 0, !0);
                        r - 2 * d - (s - 1) * c <= 0 && (c = 0); var y = (r - 2 * d - (s - 1) * c) / s;
                        y > 1 && (y >>= 0); var v = a === +a ? Math.min(y, a) : y;
                        u = o.reduce((function(t, e, n) { var r = [].concat(pt(t), [{ item: e.item, position: { offset: d + (y + c) * n + (y - v) / 2, size: v } }]); return e.stackList && e.stackList.length && e.stackList.forEach((function(t) { r.push({ item: t, position: r[r.length - 1].position }) })), r }), []) } return u },
                jt = function(t, e, n, r) { var i = n.children,
                        o = n.width,
                        a = n.margin,
                        s = o - (a.left || 0) - (a.right || 0),
                        u = Ot({ children: i, legendWidth: s }),
                        c = t; if (u) { var l = r || {},
                            h = u.align,
                            f = u.verticalAlign,
                            p = u.layout;
                        ("vertical" === p || "horizontal" === p && "center" === f) && Object(ct.g)(t[h]) && (c = vt(vt({}, t), {}, mt({}, h, c[h] + (l.width || 0)))), ("horizontal" === p || "vertical" === p && "center" === h) && Object(ct.g)(t[f]) && (c = vt(vt({}, t), {}, mt({}, f, c[f] + (l.height || 0)))) } return c },
                St = function(t, e, n, r) { var i = e.props.children,
                        o = Object(ht.a)(i, "ErrorBar").filter((function(t) { var e = t.props.direction; return !(!S()(e) && !S()(r)) || r.indexOf(e) >= 0 })); if (o && o.length) { var a = o.map((function(t) { return t.props.dataKey })); return t.reduce((function(t, e) { var r = gt(e, n, 0),
                                i = d()(r) ? [g()(r), v()(r)] : [r, r],
                                o = a.reduce((function(t, n) { var r = gt(e, n, 0),
                                        o = i[0] - Math.abs(d()(r) ? r[0] : r),
                                        a = i[1] + Math.abs(d()(r) ? r[1] : r); return [Math.min(o, t[0]), Math.max(a, t[1])] }), [1 / 0, -1 / 0]); return [Math.min(o[0], t[0]), Math.max(o[1], t[1])] }), [1 / 0, -1 / 0]) } return null },
                Et = function(t, e, n, r) { var i = e.map((function(e) { return St(t, e, n, r) })).filter((function(t) { return !S()(t) })); return i && i.length ? i.reduce((function(t, e) { return [Math.min(t[0], e[0]), Math.max(t[1], e[1])] }), [1 / 0, -1 / 0]) : null },
                kt = function(t, e, n, r) { var i = e.map((function(e) { var i = e.props.dataKey; return "number" === n && i && St(t, e, i) || bt(t, i, n, r) })); if ("number" === n) return i.reduce((function(t, e) { return [Math.min(t[0], e[0]), Math.max(t[1], e[1])] }), [1 / 0, -1 / 0]); var o = {}; return i.reduce((function(t, e) { for (var n = 0, r = e.length; n < r; n++) o[e[n]] || (o[e[n]] = !0, t.push(e[n])); return t }), []) },
                At = function(t, e) { return "horizontal" === t && "xAxis" === e || "vertical" === t && "yAxis" === e || "centric" === t && "angleAxis" === e || "radial" === t && "radiusAxis" === e },
                Ct = function(t, e, n) { var r, i, o = t.map((function(t) { return t.coordinate === e && (r = !0), t.coordinate === n && (i = !0), t.coordinate })); return r || o.push(e), i || o.push(n), o },
                Pt = function(t, e, n) { if (!t) return null; var r = t.scale,
                        i = t.duplicateDomain,
                        o = t.type,
                        a = t.range,
                        s = (e || n) && "category" === o && r.bandwidth ? r.bandwidth() / 2 : 0; return s = "angleAxis" === t.axisType ? 2 * Object(ct.i)(a[0] - a[1]) * s : s, e && (t.ticks || t.niceTicks) ? (t.ticks || t.niceTicks).map((function(t) { var e = i ? i.indexOf(t) : t; return { coordinate: r(e) + s, value: t, offset: s } })) : t.isCategorical && t.categoricalDomain ? t.categoricalDomain.map((function(t, e) { return { coordinate: r(t) + s, value: t, index: e, offset: s } })) : r.ticks && !n ? r.ticks(t.tickCount).map((function(t) { return { coordinate: r(t) + s, value: t, offset: s } })) : r.domain().map((function(t, e) { return { coordinate: r(t) + s, value: i ? i[t] : t, index: e, offset: s } })) },
                Tt = function(t, e, n) { var r; return O()(n) ? r = n : O()(e) && (r = e), O()(t) || r ? function(e, n, i, o) { O()(t) && t(e, n, i, o), O()(r) && r(e, n, i, o) } : null },
                Dt = function(t, e, n) { var r = t.scale,
                        i = t.type,
                        o = t.layout,
                        a = t.axisType; if ("auto" === r) return "radial" === o && "radiusAxis" === a ? { scale: Q.a(), realScaleType: "band" } : "radial" === o && "angleAxis" === a ? { scale: tt.a(), realScaleType: "linear" } : "category" === i && e && (e.indexOf("LineChart") >= 0 || e.indexOf("AreaChart") >= 0 || e.indexOf("ComposedChart") >= 0 && !n) ? { scale: Q.b(), realScaleType: "point" } : "category" === i ? { scale: Q.a(), realScaleType: "band" } : { scale: tt.a(), realScaleType: "linear" }; if (f()(r)) { var s = "scale".concat(l()(r)); return { scale: (et[s] || Q.b)(), realScaleType: et[s] ? s : "point" } } return O()(r) ? { scale: r } : { scale: Q.b(), realScaleType: "point" } },
                Nt = 1e-4,
                Rt = function(t) { var e = t.domain(); if (e && !(e.length <= 2)) { var n = e.length,
                            r = t.range(),
                            i = Math.min(r[0], r[1]) - Nt,
                            o = Math.max(r[0], r[1]) + Nt,
                            a = t(e[0]),
                            s = t(e[n - 1]);
                        (a < i || a > o || s < i || s > o) && t.domain([e[0], e[n - 1]]) } },
                It = function(t, e) { if (!t) return null; for (var n = 0, r = t.length; n < r; n++)
                        if (t[n].item === e) return t[n].position;
                    return null },
                Bt = function(t, e) { if (!e || 2 !== e.length || !Object(ct.g)(e[0]) || !Object(ct.g)(e[1])) return t; var n = Math.min(e[0], e[1]),
                        r = Math.max(e[0], e[1]),
                        i = [t[0], t[1]]; return (!Object(ct.g)(t[0]) || t[0] < n) && (i[0] = n), (!Object(ct.g)(t[1]) || t[1] > r) && (i[1] = r), i[0] > r && (i[0] = r), i[1] < n && (i[1] = n), i },
                Lt = { sign: function(t) { var e = t.length; if (!(e <= 0))
                            for (var n = 0, r = t[0].length; n < r; ++n)
                                for (var i = 0, o = 0, a = 0; a < e; ++a) { var s = u()(t[a][n][1]) ? t[a][n][0] : t[a][n][1];
                                    s >= 0 ? (t[a][n][0] = i, t[a][n][1] = i + s, i = t[a][n][1]) : (t[a][n][0] = o, t[a][n][1] = o + s, o = t[a][n][1]) } }, expand: function(t, e) { if ((r = t.length) > 0) { for (var n, r, i, o = 0, a = t[0].length; o < a; ++o) { for (i = n = 0; n < r; ++n) i += t[n][o][1] || 0; if (i)
                                    for (n = 0; n < r; ++n) t[n][o][1] /= i }
                            nt(t, e) } }, none: nt, silhouette: function(t, e) { if ((n = t.length) > 0) { for (var n, r = 0, i = t[e[0]], o = i.length; r < o; ++r) { for (var a = 0, s = 0; a < n; ++a) s += t[a][r][1] || 0;
                                i[r][1] += i[r][0] = -s / 2 }
                            nt(t, e) } }, wiggle: function(t, e) { if ((i = t.length) > 0 && (r = (n = t[e[0]]).length) > 0) { for (var n, r, i, o = 0, a = 1; a < r; ++a) { for (var s = 0, u = 0, c = 0; s < i; ++s) { for (var l = t[e[s]], h = l[a][1] || 0, f = (h - (l[a - 1][1] || 0)) / 2, p = 0; p < s; ++p) { var d = t[e[p]];
                                        f += (d[a][1] || 0) - (d[a - 1][1] || 0) }
                                    u += h, c += f * h }
                                n[a - 1][1] += n[a - 1][0] = o, u && (o -= c / u) }
                            n[a - 1][1] += n[a - 1][0] = o, nt(t, e) } }, positive: function(t) { var e = t.length; if (!(e <= 0))
                            for (var n = 0, r = t[0].length; n < r; ++n)
                                for (var i = 0, o = 0; o < e; ++o) { var a = u()(t[o][n][1]) ? t[o][n][0] : t[o][n][1];
                                    a >= 0 ? (t[o][n][0] = i, t[o][n][1] = i + a, i = t[o][n][1]) : (t[o][n][0] = 0, t[o][n][1] = 0) } } },
                zt = function(t, e, n) { var r = e.map((function(t) { return t.props.dataKey })),
                        i = function() { var t = Object(ot.a)([]),
                                e = at,
                                n = nt,
                                r = st;

                            function i(i) { var o, a, s, u = Array.from(t.apply(this, arguments), ut),
                                    c = u.length,
                                    l = -1,
                                    h = Object(rt.a)(i); try { for (h.s(); !(s = h.n()).done;) { var f = s.value; for (o = 0, ++l; o < c; ++o)(u[o][l] = [0, +r(f, u[o].key, l, i)]).data = f } } catch (p) { h.e(p) } finally { h.f() } for (o = 0, a = Object(it.a)(e(u)); o < c; ++o) u[a[o]].index = o; return n(u, a), u } return i.keys = function(e) { return arguments.length ? (t = "function" === typeof e ? e : Object(ot.a)(Array.from(e)), i) : t }, i.value = function(t) { return arguments.length ? (r = "function" === typeof t ? t : Object(ot.a)(+t), i) : r }, i.order = function(t) { return arguments.length ? (e = null == t ? at : "function" === typeof t ? t : Object(ot.a)(Array.from(t)), i) : e }, i.offset = function(t) { return arguments.length ? (n = null == t ? nt : t, i) : n }, i }().keys(r).value((function(t, e) { return +gt(t, e, 0) })).order(at).offset(Lt[n]); return i(t) },
                Ft = function(t, e, n, r, i, o) { if (!t) return null; var a = (o ? e.reverse() : e).reduce((function(t, e) { var i = e.props,
                            o = i.stackId; if (i.hide) return t; var a = e.props[n],
                            s = t[a] || { hasStack: !1, stackGroups: {} }; if (Object(ct.f)(o)) { var u = s.stackGroups[o] || { numericAxisId: n, cateAxisId: r, items: [] };
                            u.items.push(e), s.hasStack = !0, s.stackGroups[o] = u } else s.stackGroups[Object(ct.j)("_stackId_")] = { numericAxisId: n, cateAxisId: r, items: [e] }; return vt(vt({}, t), {}, mt({}, a, s)) }), {}); return Object.keys(a).reduce((function(e, o) { var s = a[o]; return s.hasStack && (s.stackGroups = Object.keys(s.stackGroups).reduce((function(e, o) { var a = s.stackGroups[o]; return vt(vt({}, e), {}, mt({}, o, { numericAxisId: n, cateAxisId: r, items: a.items, stackedData: zt(t, a.items, i) })) }), {})), vt(vt({}, e), {}, mt({}, o, s)) }), {}) },
                Wt = function(t, e) { var n = e.realScaleType,
                        r = e.type,
                        i = e.tickCount,
                        o = e.originalDomain,
                        a = e.allowDecimals,
                        s = n || e.scale; if ("auto" !== s && "linear" !== s) return null; if (i && "number" === r && o && ("auto" === o[0] || "auto" === o[1])) { var u = t.domain(); if (!u.length) return null; var c = K(u, i, a); return t.domain(function(t, e) { return "number" === e ? [g()(t), v()(t)] : t }(c, r)), { niceTicks: c } } if (i && "number" === r) { var l = t.domain(); return { niceTicks: Z(l, i, a) } } return null },
                Vt = function(t) { var e = t.axis,
                        n = t.ticks,
                        r = t.bandSize,
                        i = t.entry,
                        o = t.index,
                        a = t.dataKey; if ("category" === e.type) { if (!e.allowDuplicatedCategory && e.dataKey && !S()(i[e.dataKey])) { var s = Object(ct.a)(n, "value", i[e.dataKey]); if (s) return s.coordinate + r / 2 } return n[o] ? n[o].coordinate + r / 2 : null } var u = gt(i, S()(a) ? e.dataKey : a); return S()(u) ? null : e.scale(u) },
                Ut = function(t) { var e = t.axis,
                        n = t.ticks,
                        r = t.offset,
                        i = t.bandSize,
                        o = t.entry,
                        a = t.index; if ("category" === e.type) return n[a] ? n[a].coordinate + r : null; var s = gt(o, e.dataKey, e.domain[a]); return S()(s) ? null : e.scale(s) - i / 2 + r },
                Gt = function(t) { var e = t.numericAxis,
                        n = e.scale.domain(); if ("number" === e.type) { var r = Math.min(n[0], n[1]),
                            i = Math.max(n[0], n[1]); return r <= 0 && i >= 0 ? 0 : i < 0 ? i : r } return n[0] },
                Xt = function(t, e) { var n = t.props.stackId; if (Object(ct.f)(n)) { var r = e[n]; if (r && r.items.length) { for (var i = -1, o = 0, a = r.items.length; o < a; o++)
                                if (r.items[o] === t) { i = o; break }
                            return i >= 0 ? r.stackedData[i] : null } } return null },
                Ht = function(t, e, n) { return Object.keys(t).reduce((function(r, i) { var o = t[i].stackedData.reduce((function(t, r) { var i = r.slice(e, n + 1).reduce((function(t, e) { return [g()(e.concat([t[0]]).filter(ct.g)), v()(e.concat([t[1]]).filter(ct.g))] }), [1 / 0, -1 / 0]); return [Math.min(t[0], i[0]), Math.max(t[1], i[1])] }), [1 / 0, -1 / 0]); return [Math.min(o[0], r[0]), Math.max(o[1], r[1])] }), [1 / 0, -1 / 0]).map((function(t) { return t === 1 / 0 || t === -1 / 0 ? 0 : t })) },
                Yt = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
                qt = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
                Jt = function(t, e, n) { if (O()(t)) return t(e, n); if (!d()(t)) return e; var r = []; if (Object(ct.g)(t[0])) r[0] = n ? t[0] : Math.min(t[0], e[0]);
                    else if (Yt.test(t[0])) { var i = +Yt.exec(t[0])[1];
                        r[0] = e[0] - i } else O()(t[0]) ? r[0] = t[0](e[0]) : r[0] = e[0]; if (Object(ct.g)(t[1])) r[1] = n ? t[1] : Math.max(t[1], e[1]);
                    else if (qt.test(t[1])) { var o = +qt.exec(t[1])[1];
                        r[1] = e[1] + o } else O()(t[1]) ? r[1] = t[1](e[1]) : r[1] = e[1]; return r },
                $t = function(t, e, n) { if (t && t.scale && t.scale.bandwidth) { var r = t.scale.bandwidth(); if (!n || r > 0) return r } if (t && e && e.length >= 2) { for (var i = a()(e, (function(t) { return t.coordinate })), o = 1 / 0, s = 1, u = i.length; s < u; s++) { var c = i[s],
                                l = i[s - 1];
                            o = Math.min((c.coordinate || 0) - (l.coordinate || 0), o) } return o === 1 / 0 ? 0 : o } return n ? void 0 : 0 },
                Kt = function(t, e, n) { return t && t.length ? i()(t, M()(n, "type.defaultProps.domain")) ? e : t : e },
                Zt = function(t, e) { var n = t.props,
                        r = n.dataKey,
                        i = n.name,
                        o = n.unit,
                        a = n.formatter,
                        s = n.tooltipType,
                        u = n.chartType; return vt(vt({}, Object(ft.c)(t)), {}, { dataKey: r, unit: o, formatter: a, name: i || r, color: xt(t), value: gt(e, r), type: s, payload: e, chartType: u }) } }, 1511: function(t, e, n) { "use strict";
            n.d(e, "a", (function() { return r })); var r = { isSsr: !("undefined" !== typeof window && window.document && window.document.createElement && window.setTimeout), get: function(t) { return r[t] }, set: function(t, e) { if ("string" === typeof t) r[t] = e;
                    else { var n = Object.keys(t);
                        n && n.length && n.forEach((function(e) { r[e] = t[e] })) } } } }, 1516: function(t, e, n) { var r = n(527);
            t.exports = function(t, e) { return r(t, e) } }, 1517: function(t, e, n) { "use strict";
            n.d(e, "b", (function() { return d })), n.d(e, "d", (function() { return y })), n.d(e, "c", (function() { return v })), n.d(e, "a", (function() { return g })); var r = n(1593),
                i = n.n(r),
                o = n(1715),
                a = n.n(o),
                s = n(1509),
                u = n(1505),
                c = n(1477);

            function l(t, e) { for (var n = 0; n < e.length; n++) { var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r) } }

            function h(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function f(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? h(Object(n), !0).forEach((function(e) { p(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

            function p(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t } var d = function(t, e, n, r, i) { var o = t.width,
                        a = t.height,
                        l = t.layout,
                        h = t.children,
                        d = Object.keys(e),
                        y = { left: n.left, leftMirror: n.left, right: o - n.right, rightMirror: o - n.right, top: n.top, topMirror: n.top, bottom: a - n.bottom, bottomMirror: a - n.bottom },
                        v = !!Object(u.b)(h, "Bar"); return d.reduce((function(o, a) { var u, h, d, m, g, b = e[a],
                            w = b.orientation,
                            x = b.domain,
                            O = b.padding,
                            _ = void 0 === O ? {} : O,
                            M = b.mirror,
                            j = b.reversed,
                            S = "".concat(w).concat(M ? "Mirror" : ""); if ("number" === b.type && ("gap" === b.padding || "no-gap" === b.padding)) { var E = x[1] - x[0],
                                k = 1 / 0,
                                A = b.categoricalDomain.sort();
                            A.forEach((function(t, e) { e > 0 && (k = Math.min((t || 0) - (A[e - 1] || 0), k)) })); var C = k / E,
                                P = "vertical" === b.layout ? n.height : n.width; if ("gap" === b.padding && (u = C * P / 2), "no-gap" === b.padding) { var T = Object(c.c)(t.barCategoryGap, C * P),
                                    D = C * P / 2;
                                u = D - T - (D - T) / P * T } }
                        h = "xAxis" === r ? [n.left + (_.left || 0) + (u || 0), n.left + n.width - (_.right || 0) - (u || 0)] : "yAxis" === r ? "horizontal" === l ? [n.top + n.height - (_.bottom || 0), n.top + (_.top || 0)] : [n.top + (_.top || 0) + (u || 0), n.top + n.height - (_.bottom || 0) - (u || 0)] : b.range, j && (h = [h[1], h[0]]); var N = Object(s.A)(b, i, v),
                            R = N.scale,
                            I = N.realScaleType;
                        R.domain(x).range(h), Object(s.c)(R); var B = Object(s.u)(R, f(f({}, b), {}, { realScaleType: I })); "xAxis" === r ? (g = "top" === w && !M || "bottom" === w && M, d = n.left, m = y[S] - g * b.height) : "yAxis" === r && (g = "left" === w && !M || "right" === w && M, d = y[S] - g * b.width, m = n.top); var L = f(f(f({}, b), B), {}, { realScaleType: I, x: d, y: m, scale: R, width: "xAxis" === r ? n.width : b.width, height: "yAxis" === r ? n.height : b.height }); return L.bandSize = Object(s.f)(L, B), b.hide || "xAxis" !== r ? b.hide || (y[S] += (g ? -1 : 1) * L.width) : y[S] += (g ? -1 : 1) * L.height, f(f({}, o), {}, p({}, a, L)) }), {}) },
                y = function(t, e) { var n = t.x,
                        r = t.y,
                        i = e.x,
                        o = e.y; return { x: Math.min(n, i), y: Math.min(r, o), width: Math.abs(i - n), height: Math.abs(o - r) } },
                v = function(t) { var e = t.x1,
                        n = t.y1,
                        r = t.x2,
                        i = t.y2; return y({ x: e, y: n }, { x: r, y: i }) },
                m = function() {
                    function t(e) {! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t), this.scale = void 0, this.scale = e } var e, n, r; return e = t, n = [{ key: "domain", get: function() { return this.scale.domain } }, { key: "range", get: function() { return this.scale.range } }, { key: "rangeMin", get: function() { return this.range()[0] } }, { key: "rangeMax", get: function() { return this.range()[1] } }, { key: "bandwidth", get: function() { return this.scale.bandwidth } }, { key: "apply", value: function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = e.bandAware,
                                r = e.position; if (void 0 !== t) { if (r) switch (r) {
                                    case "start":
                                    default:
                                        return this.scale(t);
                                    case "middle":
                                        var i = this.bandwidth ? this.bandwidth() / 2 : 0; return this.scale(t) + i;
                                    case "end":
                                        var o = this.bandwidth ? this.bandwidth() : 0; return this.scale(t) + o }
                                if (n) { var a = this.bandwidth ? this.bandwidth() / 2 : 0; return this.scale(t) + a } return this.scale(t) } } }, { key: "isInRange", value: function(t) { var e = this.range(),
                                n = e[0],
                                r = e[e.length - 1]; return n <= r ? t >= n && t <= r : t >= r && t <= n } }], r = [{ key: "create", value: function(e) { return new t(e) } }], n && l(e.prototype, n), r && l(e, r), t }();
            m.EPS = 1e-4; var g = function(t) { var e = Object.keys(t).reduce((function(e, n) { return f(f({}, e), {}, p({}, n, m.create(t[n]))) }), {}); return f(f({}, e), {}, { apply: function(t) { var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            r = n.bandAware,
                            i = n.position; return a()(t, (function(t, n) { return e[n].apply(t, { bandAware: r, position: i }) })) }, isInRange: function(t) { return i()(t, (function(t, n) { return e[n].isInRange(t) })) } }) } }, 1518: function(t, e, n) { "use strict";
            n.d(e, "a", (function() { return j })); var r = n(240),
                i = n.n(r),
                o = n(511),
                a = n.n(o),
                s = n(1494),
                u = n.n(s),
                c = n(1),
                l = n.n(c),
                h = n(406),
                f = n.n(h),
                p = n(1555),
                d = n(1505),
                y = n(1477),
                v = n(1549),
                m = n(1478);

            function g(t) { return function(t) { if (Array.isArray(t)) return b(t) }(t) || function(t) { if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t) }(t) || function(t, e) { if (!t) return; if ("string" === typeof t) return b(t, e); var n = Object.prototype.toString.call(t).slice(8, -1); "Object" === n && t.constructor && (n = t.constructor.name); if ("Map" === n || "Set" === n) return Array.from(t); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return b(t, e) }(t) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

            function b(t, e) {
                (null == e || e > t.length) && (e = t.length); for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]; return r }

            function w(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function x(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? w(Object(n), !0).forEach((function(e) { O(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : w(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

            function O(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t }

            function _() { return _ = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]) } return t }, _.apply(this, arguments) } var M = function(t, e, n) { var r, i, o = t.position,
                    a = t.viewBox,
                    s = t.offset,
                    c = t.className,
                    h = a,
                    p = h.cx,
                    d = h.cy,
                    m = h.innerRadius,
                    g = h.outerRadius,
                    b = h.startAngle,
                    w = h.endAngle,
                    x = h.clockWise,
                    O = (m + g) / 2,
                    M = function(t, e) { return Object(y.i)(e - t) * Math.min(Math.abs(e - t), 360) }(b, w),
                    j = M >= 0 ? 1 : -1; "insideStart" === o ? (r = b + j * s, i = x) : "insideEnd" === o ? (r = w - j * s, i = !x) : "end" === o && (r = w + j * s, i = x), i = M <= 0 ? i : !i; var S = Object(v.c)(p, d, O, r),
                    E = Object(v.c)(p, d, O, r + 359 * (i ? 1 : -1)),
                    k = "M".concat(S.x, ",").concat(S.y, "\n    A").concat(O, ",").concat(O, ",0,1,").concat(i ? 0 : 1, ",\n    ").concat(E.x, ",").concat(E.y),
                    A = u()(t.id) ? Object(y.j)("recharts-radial-line-") : t.id; return l.a.createElement("text", _({}, n, { dominantBaseline: "central", className: f()("recharts-radial-bar-label", c) }), l.a.createElement("defs", null, l.a.createElement("path", { id: A, d: k })), l.a.createElement("textPath", { xlinkHref: "#".concat(A) }, e)) };

            function j(t) { var e, n = t.viewBox,
                    r = t.position,
                    o = t.value,
                    s = t.children,
                    h = t.content,
                    d = t.className,
                    g = void 0 === d ? "" : d,
                    b = t.textBreakAll; if (!n || u()(o) && u()(s) && !Object(c.isValidElement)(h) && !a()(h)) return null; if (Object(c.isValidElement)(h)) return Object(c.cloneElement)(h, t); if (a()(h)) { if (e = Object(c.createElement)(h, t), Object(c.isValidElement)(e)) return e } else e = function(t) { var e = t.value,
                        n = t.formatter,
                        r = u()(t.children) ? e : t.children; return a()(n) ? n(r) : r }(t); var w = function(t) { return Object(y.g)(t.cx) }(n),
                    O = Object(m.c)(t, !0); if (w && ("insideStart" === r || "insideEnd" === r || "end" === r)) return M(t, e, O); var j = w ? function(t) { var e = t.viewBox,
                        n = t.offset,
                        r = t.position,
                        i = e,
                        o = i.cx,
                        a = i.cy,
                        s = i.innerRadius,
                        u = i.outerRadius,
                        c = (i.startAngle + i.endAngle) / 2; if ("outside" === r) { var l = Object(v.c)(o, a, u + n, c),
                            h = l.x; return { x: h, y: l.y, textAnchor: h >= o ? "start" : "end", verticalAnchor: "middle" } } if ("center" === r) return { x: o, y: a, textAnchor: "middle", verticalAnchor: "middle" }; if ("centerTop" === r) return { x: o, y: a, textAnchor: "middle", verticalAnchor: "start" }; if ("centerBottom" === r) return { x: o, y: a, textAnchor: "middle", verticalAnchor: "end" }; var f = (s + u) / 2,
                        p = Object(v.c)(o, a, f, c); return { x: p.x, y: p.y, textAnchor: "middle", verticalAnchor: "middle" } }(t) : function(t) { var e = t.viewBox,
                        n = t.parentViewBox,
                        r = t.offset,
                        o = t.position,
                        a = e,
                        s = a.x,
                        u = a.y,
                        c = a.width,
                        l = a.height,
                        h = l >= 0 ? 1 : -1,
                        f = h * r,
                        p = h > 0 ? "end" : "start",
                        d = h > 0 ? "start" : "end",
                        v = c >= 0 ? 1 : -1,
                        m = v * r,
                        g = v > 0 ? "end" : "start",
                        b = v > 0 ? "start" : "end"; if ("top" === o) return x(x({}, { x: s + c / 2, y: u - h * r, textAnchor: "middle", verticalAnchor: p }), n ? { height: Math.max(u - n.y, 0), width: c } : {}); if ("bottom" === o) return x(x({}, { x: s + c / 2, y: u + l + f, textAnchor: "middle", verticalAnchor: d }), n ? { height: Math.max(n.y + n.height - (u + l), 0), width: c } : {}); if ("left" === o) { var w = { x: s - m, y: u + l / 2, textAnchor: g, verticalAnchor: "middle" }; return x(x({}, w), n ? { width: Math.max(w.x - n.x, 0), height: l } : {}) } if ("right" === o) { var O = { x: s + c + m, y: u + l / 2, textAnchor: b, verticalAnchor: "middle" }; return x(x({}, O), n ? { width: Math.max(n.x + n.width - O.x, 0), height: l } : {}) } var _ = n ? { width: c, height: l } : {}; return "insideLeft" === o ? x({ x: s + m, y: u + l / 2, textAnchor: b, verticalAnchor: "middle" }, _) : "insideRight" === o ? x({ x: s + c - m, y: u + l / 2, textAnchor: g, verticalAnchor: "middle" }, _) : "insideTop" === o ? x({ x: s + c / 2, y: u + f, textAnchor: "middle", verticalAnchor: d }, _) : "insideBottom" === o ? x({ x: s + c / 2, y: u + l - f, textAnchor: "middle", verticalAnchor: p }, _) : "insideTopLeft" === o ? x({ x: s + m, y: u + f, textAnchor: b, verticalAnchor: d }, _) : "insideTopRight" === o ? x({ x: s + c - m, y: u + f, textAnchor: g, verticalAnchor: d }, _) : "insideBottomLeft" === o ? x({ x: s + m, y: u + l - f, textAnchor: b, verticalAnchor: p }, _) : "insideBottomRight" === o ? x({ x: s + c - m, y: u + l - f, textAnchor: g, verticalAnchor: p }, _) : i()(o) && (Object(y.g)(o.x) || Object(y.h)(o.x)) && (Object(y.g)(o.y) || Object(y.h)(o.y)) ? x({ x: s + Object(y.c)(o.x, c), y: u + Object(y.c)(o.y, l), textAnchor: "end", verticalAnchor: "end" }, _) : x({ x: s + c / 2, y: u + l / 2, textAnchor: "middle", verticalAnchor: "middle" }, _) }(t); return l.a.createElement(p.a, _({ className: f()("recharts-label", g) }, O, j, { breakAll: b }), e) }
            j.displayName = "Label", j.defaultProps = { offset: 5 }; var S = function(t) { var e = t.cx,
                        n = t.cy,
                        r = t.angle,
                        i = t.startAngle,
                        o = t.endAngle,
                        a = t.r,
                        s = t.radius,
                        u = t.innerRadius,
                        c = t.outerRadius,
                        l = t.x,
                        h = t.y,
                        f = t.top,
                        p = t.left,
                        d = t.width,
                        v = t.height,
                        m = t.clockWise,
                        g = t.labelViewBox; if (g) return g; if (Object(y.g)(d) && Object(y.g)(v)) { if (Object(y.g)(l) && Object(y.g)(h)) return { x: l, y: h, width: d, height: v }; if (Object(y.g)(f) && Object(y.g)(p)) return { x: f, y: p, width: d, height: v } } return Object(y.g)(l) && Object(y.g)(h) ? { x: l, y: h, width: 0, height: 0 } : Object(y.g)(e) && Object(y.g)(n) ? { cx: e, cy: n, startAngle: i || r || 0, endAngle: o || r || 0, innerRadius: u || 0, outerRadius: c || s || a || 0, clockWise: m } : t.viewBox ? t.viewBox : {} },
                E = function(t, e) { return t ? !0 === t ? l.a.createElement(j, { key: "label-implicit", viewBox: e }) : Object(y.f)(t) ? l.a.createElement(j, { key: "label-implicit", viewBox: e, value: t }) : Object(c.isValidElement)(t) ? t.type === j ? Object(c.cloneElement)(t, { key: "label-implicit", viewBox: e }) : l.a.createElement(j, { key: "label-implicit", content: t, viewBox: e }) : a()(t) ? l.a.createElement(j, { key: "label-implicit", content: t, viewBox: e }) : i()(t) ? l.a.createElement(j, _({ viewBox: e }, t, { key: "label-implicit" })) : null : null };
            j.parseViewBox = S, j.renderCallByParent = function(t, e) { var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]; if (!t || !t.children && n && !t.label) return null; var r = t.children,
                    i = S(t),
                    o = Object(d.a)(r, j.displayName).map((function(t, n) { return Object(c.cloneElement)(t, { viewBox: e || i, key: "label-".concat(n) }) })); if (!n) return o; var a = E(t.label, e || i); return [a].concat(g(o)) } }, 1526: function(t, e, n) { var r = n(243),
                i = function() { try { var t = r(Object, "defineProperty"); return t({}, "", {}), t } catch (e) {} }();
            t.exports = i }, 1529: function(t, e, n) { "use strict";
            n.d(e, "a", (function() { return r })); var r = function(t, e) { for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) r[i - 2] = arguments[i] } }, 1530: function(t, e, n) { var r = n(532),
                i = n(415),
                o = n(529),
                a = n(240);
            t.exports = function(t, e, n) { if (!a(n)) return !1; var s = typeof e; return !!("number" == s ? i(n) && o(e, n.length) : "string" == s && e in n) && r(n[e], t) } }, 1531: function(t, e, n) { "use strict";
            e.a = function(t) { return function() { return t } } }, 1532: function(t, e, n) { "use strict";
            n.d(e, "b", (function() { return o })), n.d(e, "a", (function() { return a })); var r = n(412),
                i = n(1487),
                o = Symbol("implicit");

            function a() { var t = new Map,
                    e = [],
                    n = [],
                    s = o;

                function u(r) { var i = r + "",
                        a = t.get(i); if (!a) { if (s !== o) return s;
                        t.set(i, a = e.push(r)) } return n[(a - 1) % n.length] } return u.domain = function(n) { if (!arguments.length) return e.slice();
                    e = [], t = new Map; var i, o = Object(r.a)(n); try { for (o.s(); !(i = o.n()).done;) { var a = i.value,
                                s = a + "";
                            t.has(s) || t.set(s, e.push(a)) } } catch (c) { o.e(c) } finally { o.f() } return u }, u.range = function(t) { return arguments.length ? (n = Array.from(t), u) : n.slice() }, u.unknown = function(t) { return arguments.length ? (s = t, u) : s }, u.copy = function() { return a(e, n).unknown(s) }, i.b.apply(u, arguments), u } }, 1533: function(t, e, n) { "use strict"; var r = n(1534);
            e.a = function(t) { return (t = Object(r.b)(Math.abs(t))) ? t[1] : NaN } }, 1534: function(t, e, n) { "use strict";

            function r(t, e) { if ((n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0) return null; var n, r = t.slice(0, n); return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(n + 1)] }
            n.d(e, "b", (function() { return r })), e.a = function(t) { return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10) } }, 1537: function(t, e, n) { "use strict";
            n.d(e, "b", (function() { return _ })); var r = n(1),
                i = n.n(r),
                o = n(32),
                a = n.n(o),
                s = n(1727),
                u = n(1605),
                c = n.n(u);

            function l(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = -1,
                    r = function r(i) { n < 0 && (n = i), i - n > e ? (t(i), n = -1) : c()(r) };
                c()(r) }

            function h(t) { return h = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t }, h(t) }

            function f(t) { return function(t) { if (Array.isArray(t)) return t }(t) || function(t) { if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t) }(t) || function(t, e) { if (!t) return; if ("string" === typeof t) return p(t, e); var n = Object.prototype.toString.call(t).slice(8, -1); "Object" === n && t.constructor && (n = t.constructor.name); if ("Map" === n || "Set" === n) return Array.from(t); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return p(t, e) }(t) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

            function p(t, e) {
                (null == e || e > t.length) && (e = t.length); for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]; return r }

            function d() { var t = function() { return null },
                    e = !1,
                    n = function n(r) { if (!e) { if (Array.isArray(r)) { if (!r.length) return; var i = f(r),
                                    o = i[0],
                                    a = i.slice(1); return "number" === typeof o ? void l(n.bind(null, a), o) : (n(o), void l(n.bind(null, a))) } "object" === h(r) && t(r), "function" === typeof r && r() } }; return { stop: function() { e = !0 }, start: function(t) { e = !1, n(t) }, subscribe: function(e) { return t = e,
                            function() { t = function() { return null } } } } }

            function y(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function v(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? y(Object(n), !0).forEach((function(e) { m(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

            function m(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t } var g = ["Webkit", "Moz", "O", "ms"],
                b = ["-webkit-", "-moz-", "-o-", "-ms-"],
                w = ["transform", "transformOrigin", "transition"],
                x = function(t) { return t },
                O = function(t, e) { return Object.keys(e).reduce((function(n, r) { return v(v({}, n), {}, m({}, r, t(r, e[r]))) }), {}) },
                _ = function(t) { return Object.keys(t).reduce((function(t, e) { return v(v({}, t), function(t, e) { if (-1 === w.indexOf(t)) return m({}, t, e); var n = "transition" === t,
                                r = t.replace(/(\w)/, (function(t) { return t.toUpperCase() })),
                                i = e; return g.reduce((function(t, o, a) { return n && (i = e.replace(/(transform|transform-origin)/gim, "".concat(b[a], "$1"))), v(v({}, t), {}, m({}, o + r, i)) }), {}) }(e, t[e])) }), t) },
                M = function(t, e, n) { return t.map((function(t) { return "".concat((r = t, r.replace(/([A-Z])/g, (function(t) { return "-".concat(t.toLowerCase()) }))), " ").concat(e, "ms ").concat(n); var r })).join(",") };

            function j(t, e) { return function(t) { if (Array.isArray(t)) return t }(t) || function(t, e) { if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(t))) return; var n = [],
                        r = !0,
                        i = !1,
                        o = void 0; try { for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0); } catch (u) { i = !0, o = u } finally { try { r || null == s.return || s.return() } finally { if (i) throw o } } return n }(t, e) || E(t, e) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

            function S(t) { return function(t) { if (Array.isArray(t)) return k(t) }(t) || function(t) { if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t) }(t) || E(t) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

            function E(t, e) { if (t) { if ("string" === typeof t) return k(t, e); var n = Object.prototype.toString.call(t).slice(8, -1); return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? k(t, e) : void 0 } }

            function k(t, e) {
                (null == e || e > t.length) && (e = t.length); for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]; return r } var A = 1e-4,
                C = function(t, e) { return [0, 3 * t, 3 * e - 6 * t, 3 * t - 3 * e + 1] },
                P = function(t, e) { return t.map((function(t, n) { return t * Math.pow(e, n) })).reduce((function(t, e) { return t + e })) },
                T = function(t, e) { return function(n) { var r = C(t, e); return P(r, n) } },
                D = function(t, e) { return function(n) { var r = C(t, e),
                            i = [].concat(S(r.map((function(t, e) { return t * e })).slice(1)), [0]); return P(i, n) } },
                N = function() { for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n]; var r = e[0],
                        i = e[1],
                        o = e[2],
                        a = e[3]; if (1 === e.length) switch (e[0]) {
                        case "linear":
                            r = 0, i = 0, o = 1, a = 1; break;
                        case "ease":
                            r = .25, i = .1, o = .25, a = 1; break;
                        case "ease-in":
                            r = .42, i = 0, o = 1, a = 1; break;
                        case "ease-out":
                            r = .42, i = 0, o = .58, a = 1; break;
                        case "ease-in-out":
                            r = 0, i = 0, o = .58, a = 1; break;
                        default:
                            var s = e[0].split("("); if ("cubic-bezier" === s[0] && 4 === s[1].split(")")[0].split(",").length) { var u = s[1].split(")")[0].split(",").map((function(t) { return parseFloat(t) })),
                                    c = j(u, 4);
                                r = c[0], i = c[1], o = c[2], a = c[3] } }[r, o, i, a].every((function(t) { return "number" === typeof t && t >= 0 && t <= 1 })); var l = T(r, o),
                        h = T(i, a),
                        f = D(r, o),
                        p = function(t) { return t > 1 ? 1 : t < 0 ? 0 : t },
                        d = function(t) { for (var e = t > 1 ? 1 : t, n = e, r = 0; r < 8; ++r) { var i = l(n) - e,
                                    o = f(n); if (Math.abs(i - e) < A || o < A) return h(n);
                                n = p(n - i / o) } return h(n) }; return d.isStepper = !1, d },
                R = function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        e = t.stiff,
                        n = void 0 === e ? 100 : e,
                        r = t.damping,
                        i = void 0 === r ? 8 : r,
                        o = t.dt,
                        a = void 0 === o ? 17 : o,
                        s = function(t, e, r) { var o = r + (-(t - e) * n - r * i) * a / 1e3,
                                s = r * a / 1e3 + t; return Math.abs(s - e) < A && Math.abs(o) < A ? [e, 0] : [s, o] }; return s.isStepper = !0, s.dt = a, s };

            function I(t) { return function(t) { if (Array.isArray(t)) return V(t) }(t) || function(t) { if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t) }(t) || W(t) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

            function B(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function L(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? B(Object(n), !0).forEach((function(e) { z(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : B(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

            function z(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t }

            function F(t, e) { return function(t) { if (Array.isArray(t)) return t }(t) || function(t, e) { if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(t))) return; var n = [],
                        r = !0,
                        i = !1,
                        o = void 0; try { for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0); } catch (u) { i = !0, o = u } finally { try { r || null == s.return || s.return() } finally { if (i) throw o } } return n }(t, e) || W(t, e) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

            function W(t, e) { if (t) { if ("string" === typeof t) return V(t, e); var n = Object.prototype.toString.call(t).slice(8, -1); return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? V(t, e) : void 0 } }

            function V(t, e) {
                (null == e || e > t.length) && (e = t.length); for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]; return r } var U = function(t, e, n) { return t + (e - t) * n },
                G = function(t) { return t.from !== t.to },
                X = function t(e, n, r) { var i = O((function(t, n) { if (G(n)) { var r = F(e(n.from, n.to, n.velocity), 2),
                                i = r[0],
                                o = r[1]; return L(L({}, n), {}, { from: i, velocity: o }) } return n }), n); return r < 1 ? O((function(t, e) { return G(e) ? L(L({}, e), {}, { velocity: U(e.velocity, i[t].velocity, r), from: U(e.from, i[t].from, r) }) : e }), n) : t(e, i, r - 1) },
                H = function(t, e, n, r, i) { var o, a, s, l, h = (o = t, a = e, [Object.keys(o), Object.keys(a)].reduce((function(t, e) { return t.filter((function(t) { return e.includes(t) })) }))),
                        f = h.reduce((function(n, r) { return L(L({}, n), {}, z({}, r, [t[r], e[r]])) }), {}),
                        p = h.reduce((function(n, r) { return L(L({}, n), {}, z({}, r, { from: t[r], velocity: 0, to: e[r] })) }), {}),
                        d = -1,
                        y = function() { return null }; return y = n.isStepper ? function(r) { s || (s = r); var o = (r - s) / n.dt;
                            p = X(n, p, o), i(L(L(L({}, t), e), O((function(t, e) { return e.from }), p))), s = r, Object.values(p).filter(G).length && (d = c()(y)) } : function(o) { l || (l = o); var a = (o - l) / r,
                                s = O((function(t, e) { return U.apply(void 0, I(e).concat([n(a)])) }), f); if (i(L(L(L({}, t), e), s)), a < 1) d = c()(y);
                            else { var u = O((function(t, e) { return U.apply(void 0, I(e).concat([n(1)])) }), f);
                                i(L(L(L({}, t), e), u)) } },
                        function() { return c()(y),
                                function() { Object(u.cancel)(d) } } };

            function Y(t) { return Y = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t }, Y(t) }

            function q(t, e) { if (null == t) return {}; var n, r, i = function(t, e) { if (null == t) return {}; var n, r, i = {},
                        o = Object.keys(t); for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || (i[n] = t[n]); return i }(t, e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(t); for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n]) } return i }

            function J(t) { return function(t) { if (Array.isArray(t)) return $(t) }(t) || function(t) { if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t) }(t) || function(t, e) { if (!t) return; if ("string" === typeof t) return $(t, e); var n = Object.prototype.toString.call(t).slice(8, -1); "Object" === n && t.constructor && (n = t.constructor.name); if ("Map" === n || "Set" === n) return Array.from(t); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return $(t, e) }(t) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

            function $(t, e) {
                (null == e || e > t.length) && (e = t.length); for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]; return r }

            function K(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function Z(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? K(Object(n), !0).forEach((function(e) { Q(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : K(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

            function Q(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t }

            function tt(t, e) { for (var n = 0; n < e.length; n++) { var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r) } }

            function et(t, e) { return et = Object.setPrototypeOf || function(t, e) { return t.__proto__ = e, t }, et(t, e) }

            function nt(t) { var e = function() { if ("undefined" === typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" === typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = ot(t); if (e) { var i = ot(this).constructor;
                        n = Reflect.construct(r, arguments, i) } else n = r.apply(this, arguments); return rt(this, n) } }

            function rt(t, e) { return !e || "object" !== Y(e) && "function" !== typeof e ? it(t) : e }

            function it(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }

            function ot(t) { return ot = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) { return t.__proto__ || Object.getPrototypeOf(t) }, ot(t) } var at = function(t) {! function(t, e) { if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && et(t, e) }(u, t); var e, n, o, a = nt(u);

                function u(t, e) { var n;! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, u); var r = (n = a.call(this, t, e)).props,
                        i = r.isActive,
                        o = r.attributeName,
                        s = r.from,
                        c = r.to,
                        l = r.steps,
                        h = r.children; if (n.handleStyleChange = n.handleStyleChange.bind(it(n)), n.changeStyle = n.changeStyle.bind(it(n)), !i) return n.state = { style: {} }, "function" === typeof h && (n.state = { style: c }), rt(n); if (l && l.length) n.state = { style: l[0].style };
                    else if (s) { if ("function" === typeof h) return n.state = { style: s }, rt(n);
                        n.state = { style: o ? Q({}, o, s) : s } } else n.state = { style: {} }; return n } return e = u, n = [{ key: "componentDidMount", value: function() { var t = this.props,
                            e = t.isActive,
                            n = t.canBegin;
                        this.mounted = !0, e && n && this.runAnimation(this.props) } }, { key: "componentDidUpdate", value: function(t) { var e = this.props,
                            n = e.isActive,
                            r = e.canBegin,
                            i = e.attributeName,
                            o = e.shouldReAnimate; if (r)
                            if (n) { if (!(Object(s.deepEqual)(t.to, this.props.to) && t.canBegin && t.isActive)) { var a = !t.canBegin || !t.isActive;
                                    this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation(); var u = a || o ? this.props.from : t.to; if (this.state && this.state.style) { var c = { style: i ? Q({}, i, u) : u };
                                        (i && this.state.style[i] !== u || !i && this.state.style !== u) && this.setState(c) }
                                    this.runAnimation(Z(Z({}, this.props), {}, { from: u, begin: 0 })) } } else { var l = { style: i ? Q({}, i, this.props.to) : this.props.to };
                                this.state && this.state.style && (i && this.state.style[i] !== this.props.to || !i && this.state.style !== this.props.to) && this.setState(l) } } }, { key: "componentWillUnmount", value: function() { this.mounted = !1, this.unSubscribe && this.unSubscribe(), this.manager && (this.manager.stop(), this.manager = null), this.stopJSAnimation && this.stopJSAnimation() } }, { key: "runJSAnimation", value: function(t) { var e = this,
                            n = t.from,
                            r = t.to,
                            i = t.duration,
                            o = t.easing,
                            a = t.begin,
                            s = t.onAnimationEnd,
                            u = t.onAnimationStart,
                            c = H(n, r, function() { for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n]; var r = e[0]; if ("string" === typeof r) switch (r) {
                                    case "ease":
                                    case "ease-in-out":
                                    case "ease-out":
                                    case "ease-in":
                                    case "linear":
                                        return N(r);
                                    case "spring":
                                        return R();
                                    default:
                                        if ("cubic-bezier" === r.split("(")[0]) return N(r) }
                                return "function" === typeof r ? r : null }(o), i, this.changeStyle);
                        this.manager.start([u, a, function() { e.stopJSAnimation = c() }, i, s]) } }, { key: "runStepAnimation", value: function(t) { var e = this,
                            n = t.steps,
                            r = t.begin,
                            i = t.onAnimationStart,
                            o = n[0],
                            a = o.style,
                            s = o.duration,
                            u = void 0 === s ? 0 : s; return this.manager.start([i].concat(J(n.reduce((function(t, r, i) { if (0 === i) return t; var o = r.duration,
                                a = r.easing,
                                s = void 0 === a ? "ease" : a,
                                u = r.style,
                                c = r.properties,
                                l = r.onAnimationEnd,
                                h = i > 0 ? n[i - 1] : r,
                                f = c || Object.keys(u); if ("function" === typeof s || "spring" === s) return [].concat(J(t), [e.runJSAnimation.bind(e, { from: h.style, to: u, duration: o, easing: s }), o]); var p = M(f, o, s),
                                d = Z(Z(Z({}, h.style), u), {}, { transition: p }); return [].concat(J(t), [d, o, l]).filter(x) }), [a, Math.max(u, r)])), [t.onAnimationEnd])) } }, { key: "runAnimation", value: function(t) { this.manager || (this.manager = d()); var e = t.begin,
                            n = t.duration,
                            r = t.attributeName,
                            i = t.to,
                            o = t.easing,
                            a = t.onAnimationStart,
                            s = t.onAnimationEnd,
                            u = t.steps,
                            c = t.children,
                            l = this.manager; if (this.unSubscribe = l.subscribe(this.handleStyleChange), "function" !== typeof o && "function" !== typeof c && "spring" !== o)
                            if (u.length > 1) this.runStepAnimation(t);
                            else { var h = r ? Q({}, r, i) : i,
                                    f = M(Object.keys(h), n, o);
                                l.start([a, e, Z(Z({}, h), {}, { transition: f }), n, s]) }
                        else this.runJSAnimation(t) } }, { key: "handleStyleChange", value: function(t) { this.changeStyle(t) } }, { key: "changeStyle", value: function(t) { this.mounted && this.setState({ style: t }) } }, { key: "render", value: function() { var t = this.props,
                            e = t.children,
                            n = (t.begin, t.duration, t.attributeName, t.easing, t.isActive),
                            o = (t.steps, t.from, t.to, t.canBegin, t.onAnimationEnd, t.shouldReAnimate, t.onAnimationReStart, q(t, ["children", "begin", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"])),
                            a = r.Children.count(e),
                            s = _(this.state.style); if ("function" === typeof e) return e(s); if (!n || 0 === a) return e; var u = function(t) { var e = t.props,
                                n = e.style,
                                i = void 0 === n ? {} : n,
                                a = e.className; return Object(r.cloneElement)(t, Z(Z({}, o), {}, { style: Z(Z({}, i), s), className: a })) }; return 1 === a ? u(r.Children.only(e)) : i.a.createElement("div", null, r.Children.map(e, (function(t) { return u(t) }))) } }], n && tt(e.prototype, n), o && tt(e, o), u }(r.PureComponent);
            at.displayName = "Animate", at.propTypes = { from: a.a.oneOfType([a.a.object, a.a.string]), to: a.a.oneOfType([a.a.object, a.a.string]), attributeName: a.a.string, duration: a.a.number, begin: a.a.number, easing: a.a.oneOfType([a.a.string, a.a.func]), steps: a.a.arrayOf(a.a.shape({ duration: a.a.number.isRequired, style: a.a.object.isRequired, easing: a.a.oneOfType([a.a.oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), a.a.func]), properties: a.a.arrayOf("string"), onAnimationEnd: a.a.func })), children: a.a.oneOfType([a.a.node, a.a.func]), isActive: a.a.bool, canBegin: a.a.bool, onAnimationEnd: a.a.func, shouldReAnimate: a.a.bool, onAnimationStart: a.a.func, onAnimationReStart: a.a.func }, at.defaultProps = { begin: 0, duration: 1e3, from: "", to: "", attributeName: "", easing: "ease", isActive: !0, canBegin: !0, steps: [], onAnimationEnd: function() {}, onAnimationStart: function() {} }; var st = at,
                ut = n(1606);

            function ct(t) { return ct = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t }, ct(t) }

            function lt() { return lt = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]) } return t }, lt.apply(this, arguments) }

            function ht(t, e) { if (null == t) return {}; var n, r, i = function(t, e) { if (null == t) return {}; var n, r, i = {},
                        o = Object.keys(t); for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || (i[n] = t[n]); return i }(t, e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(t); for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n]) } return i }

            function ft(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function pt(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? ft(Object(n), !0).forEach((function(e) { dt(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ft(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

            function dt(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t }

            function yt(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

            function vt(t, e) { for (var n = 0; n < e.length; n++) { var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r) } }

            function mt(t, e) { return mt = Object.setPrototypeOf || function(t, e) { return t.__proto__ = e, t }, mt(t, e) }

            function gt(t) { var e = function() { if ("undefined" === typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" === typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = wt(t); if (e) { var i = wt(this).constructor;
                        n = Reflect.construct(r, arguments, i) } else n = r.apply(this, arguments); return bt(this, n) } }

            function bt(t, e) { return !e || "object" !== ct(e) && "function" !== typeof e ? function(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }(t) : e }

            function wt(t) { return wt = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) { return t.__proto__ || Object.getPrototypeOf(t) }, wt(t) }
            void 0 === Number.isFinite && (Number.isFinite = function(t) { return "number" === typeof t && isFinite(t) }); var xt = function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        e = t.steps,
                        n = t.duration; return e && e.length ? e.reduce((function(t, e) { return t + (Number.isFinite(e.duration) && e.duration > 0 ? e.duration : 0) }), 0) : Number.isFinite(n) ? n : 0 },
                Ot = function(t) {! function(t, e) { if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && mt(t, e) }(s, t); var e, n, o, a = gt(s);

                    function s() { var t;
                        yt(this, s); for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r]; return (t = a.call.apply(a, [this].concat(n))).state = { isActive: !1 }, t.handleEnter = function(e, n) { var r = t.props,
                                i = r.appearOptions,
                                o = r.enterOptions;
                            t.handleStyleActive(n ? i : o) }, t.handleExit = function() { t.handleStyleActive(t.props.leaveOptions) }, t } return e = s, (n = [{ key: "handleStyleActive", value: function(t) { if (t) { var e = t.onAnimationEnd ? function() { t.onAnimationEnd() } : null;
                                this.setState(pt(pt({}, t), {}, { onAnimationEnd: e, isActive: !0 })) } } }, { key: "parseTimeout", value: function() { var t = this.props,
                                e = t.appearOptions,
                                n = t.enterOptions,
                                r = t.leaveOptions; return xt(e) + xt(n) + xt(r) } }, { key: "render", value: function() { var t = this,
                                e = this.props,
                                n = e.children,
                                o = (e.appearOptions, e.enterOptions, e.leaveOptions, ht(e, ["children", "appearOptions", "enterOptions", "leaveOptions"])); return i.a.createElement(ut.Transition, lt({}, o, { onEnter: this.handleEnter, onExit: this.handleExit, timeout: this.parseTimeout() }), (function() { return i.a.createElement(st, t.state, r.Children.only(n)) })) } }]) && vt(e.prototype, n), o && vt(e, o), s }(r.Component);
            Ot.propTypes = { appearOptions: a.a.object, enterOptions: a.a.object, leaveOptions: a.a.object, children: a.a.element }; var _t = Ot;

            function Mt(t) { var e = t.component,
                    n = t.children,
                    o = t.appear,
                    a = t.enter,
                    s = t.leave; return i.a.createElement(ut.TransitionGroup, { component: e }, r.Children.map(n, (function(t, e) { return i.a.createElement(_t, { appearOptions: o, enterOptions: a, leaveOptions: s, key: "child-".concat(e) }, t) }))) }
            Mt.propTypes = { appear: a.a.object, enter: a.a.object, leave: a.a.object, children: a.a.oneOfType([a.a.array, a.a.element]), component: a.a.any }, Mt.defaultProps = { component: "span" };
            e.a = st }, 1542: function(t, e, n) { var r = n(1526);
            t.exports = function(t, e, n) { "__proto__" == e && r ? r(t, e, { configurable: !0, enumerable: !0, value: n, writable: !0 }) : t[e] = n } }, 1544: function(t, e, n) { "use strict";
            t.exports = function(t) { var e = t.uri,
                    n = t.name,
                    r = t.type;
                this.uri = e, this.name = n, this.type = r } }, 1545: function(t, e, n) { "use strict"; var r = n(1544);
            t.exports = function(t) { return "undefined" !== typeof File && t instanceof File || "undefined" !== typeof Blob && t instanceof Blob || t instanceof r } }, 1546: function(t, e, n) { var r = n(1591);
            t.exports = function(t) { return r(t) && t != +t } }, 1547: function(t, e, n) { var r = n(290),
                i = n(162),
                o = n(291);
            t.exports = function(t) { return "string" == typeof t || !i(t) && o(t) && "[object String]" == r(t) } }, 1548: function(t, e, n) { var r = n(806),
                i = n(1679),
                o = n(1683),
                a = n(1530),
                s = o((function(t, e) { if (null == t) return []; var n = e.length; return n > 1 && a(t, e[0], e[1]) ? e = [] : n > 2 && a(e[0], e[1], e[2]) && (e = [e[0]]), i(t, r(e, 1), []) }));
            t.exports = s }, 1549: function(t, e, n) { "use strict";
            n.d(e, "a", (function() { return a })), n.d(e, "c", (function() { return u })), n.d(e, "b", (function() { return h }));
            n(1494), n(1477), n(1509);

            function r(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function i(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? r(Object(n), !0).forEach((function(e) { o(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

            function o(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t } var a = Math.PI / 180,
                s = function(t) { return 180 * t / Math.PI },
                u = function(t, e, n, r) { return { x: t + Math.cos(-a * r) * n, y: e + Math.sin(-a * r) * n } },
                c = function(t, e) { var n = t.x,
                        r = t.y,
                        i = e.cx,
                        o = e.cy,
                        a = function(t, e) { var n = t.x,
                                r = t.y,
                                i = e.x,
                                o = e.y; return Math.sqrt(Math.pow(n - i, 2) + Math.pow(r - o, 2)) }({ x: n, y: r }, { x: i, y: o }); if (a <= 0) return { radius: a }; var u = (n - i) / a,
                        c = Math.acos(u); return r > o && (c = 2 * Math.PI - c), { radius: a, angle: s(c), angleInRadian: c } },
                l = function(t, e) { var n = e.startAngle,
                        r = e.endAngle,
                        i = Math.floor(n / 360),
                        o = Math.floor(r / 360); return t + 360 * Math.min(i, o) },
                h = function(t, e) { var n = t.x,
                        r = t.y,
                        o = c({ x: n, y: r }, e),
                        a = o.radius,
                        s = o.angle,
                        u = e.innerRadius,
                        h = e.outerRadius; if (a < u || a > h) return !1; if (0 === a) return !0; var f, p = function(t) { var e = t.startAngle,
                                n = t.endAngle,
                                r = Math.floor(e / 360),
                                i = Math.floor(n / 360),
                                o = Math.min(r, i); return { startAngle: e - 360 * o, endAngle: n - 360 * o } }(e),
                        d = p.startAngle,
                        y = p.endAngle,
                        v = s; if (d <= y) { for (; v > y;) v -= 360; for (; v < d;) v += 360;
                        f = v >= d && v <= y } else { for (; v > d;) v -= 360; for (; v < y;) v += 360;
                        f = v >= y && v <= d } return f ? i(i({}, e), {}, { radius: a, angle: l(v, e) }) : null } }, 1550: function(t, e, n) { var r = n(1693)("toUpperCase");
            t.exports = r }, 1551: function(t, e, n) { "use strict";

            function r(t, e) { for (var n in t)
                    if ({}.hasOwnProperty.call(t, n) && (!{}.hasOwnProperty.call(e, n) || t[n] !== e[n])) return !1;
                for (var r in e)
                    if ({}.hasOwnProperty.call(e, r) && !{}.hasOwnProperty.call(t, r)) return !1;
                return !0 }
            n.d(e, "a", (function() { return r })) }, 1552: function(t, e, n) { "use strict";
            e.a = function(t, e) { return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN } }, 1553: function(t, e, n) { "use strict";

            function r(t) { return +t }
            n.d(e, "a", (function() { return r })) }, 1554: function(t, e, n) { "use strict";
            Array.prototype.slice;
            e.a = function(t) { return "object" === typeof t && "length" in t ? t : Array.from(t) } }, 1555: function(t, e, n) { "use strict";
            n.d(e, "a", (function() { return D })); var r = n(1494),
                i = n.n(r),
                o = n(1),
                a = n.n(o),
                s = n(1716),
                u = n.n(s),
                c = n(406),
                l = n.n(c),
                h = n(1477),
                f = n(1511),
                p = n(1478),
                d = n(1556);

            function y(t) { return y = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t }, y(t) }

            function v() { return v = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]) } return t }, v.apply(this, arguments) }

            function m(t, e) { if (null == t) return {}; var n, r, i = function(t, e) { if (null == t) return {}; var n, r, i = {},
                        o = Object.keys(t); for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || (i[n] = t[n]); return i }(t, e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(t); for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n]) } return i }

            function g(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

            function b(t, e) { for (var n = 0; n < e.length; n++) { var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r) } }

            function w(t, e) { return w = Object.setPrototypeOf || function(t, e) { return t.__proto__ = e, t }, w(t, e) }

            function x(t) { var e = function() { if ("undefined" === typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" === typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = _(t); if (e) { var i = _(this).constructor;
                        n = Reflect.construct(r, arguments, i) } else n = r.apply(this, arguments); return O(this, n) } }

            function O(t, e) { return !e || "object" !== y(e) && "function" !== typeof e ? function(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }(t) : e }

            function _(t) { return _ = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) { return t.__proto__ || Object.getPrototypeOf(t) }, _(t) }

            function M(t, e) { return function(t) { if (Array.isArray(t)) return t }(t) || function(t, e) { if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(t))) return; var n = [],
                        r = !0,
                        i = !1,
                        o = void 0; try { for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0); } catch (u) { i = !0, o = u } finally { try { r || null == s.return || s.return() } finally { if (i) throw o } } return n }(t, e) || function(t, e) { if (!t) return; if ("string" === typeof t) return j(t, e); var n = Object.prototype.toString.call(t).slice(8, -1); "Object" === n && t.constructor && (n = t.constructor.name); if ("Map" === n || "Set" === n) return Array.from(t); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return j(t, e) }(t, e) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

            function j(t, e) {
                (null == e || e > t.length) && (e = t.length); for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]; return r }

            function S(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function E(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? S(Object(n), !0).forEach((function(e) { k(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : S(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

            function k(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t } var A = /[ \f\n\r\t\v\u2028\u2029]+/,
                C = function(t) { try { var e = []; return i()(t.children) || (e = t.breakAll ? t.children.toString().split("") : t.children.toString().split(A)), { wordsWithComputedWidth: e.map((function(e) { return { word: e, width: Object(d.c)(e, t.style).width } })), spaceWidth: t.breakAll ? 0 : Object(d.c)("\xa0", t.style).width } } catch (n) { return null } },
                P = function(t) { return [{ words: i()(t) ? [] : t.toString().split(A) }] },
                T = function(t, e) { if ((t.width || t.scaleToFit) && !f.a.isSsr && e) { var n = C(t); return n ? function(t, e, n, r, i) { var o = Object(h.g)(t.maxLines),
                                a = t.children,
                                s = function() { return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).reduce((function(t, e) { var o = e.word,
                                            a = e.width,
                                            s = t[t.length - 1]; if (s && (null == r || i || s.width + a + n < r)) s.words.push(o), s.width += a + n;
                                        else { var u = { words: [o], width: a };
                                            t.push(u) } return t }), []) },
                                u = s(e); if (!o) return u; for (var c, l = function(e) { var n = a.slice(0, e),
                                        i = C(E(E({}, t), {}, { children: n + "\u2026" })).wordsWithComputedWidth,
                                        o = s(i),
                                        u = o.length > t.maxLines || function(t) { return t.reduce((function(t, e) { return t.width > e.width ? t : e })) }(o).width > r; return [u, o] }, f = 0, p = a.length - 1, d = 0; f <= p && d <= a.length - 1;) { var y = Math.floor((f + p) / 2),
                                    v = M(l(y - 1), 2),
                                    m = v[0],
                                    g = v[1],
                                    b = M(l(y), 1)[0]; if (m || b || (f = y + 1), m && b && (p = y - 1), !m && b) { c = g; break }
                                d++ } return c || u }(t, n.wordsWithComputedWidth, n.spaceWidth, t.width, t.scaleToFit) : P(t.children) } return P(t.children) },
                D = function(t) {! function(t, e) { if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && w(t, e) }(o, t); var e, n, r, i = x(o);

                    function o() { var t;
                        g(this, o); for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r]; return (t = i.call.apply(i, [this].concat(n))).state = {}, t } return e = o, r = [{ key: "getDerivedStateFromProps", value: function(t, e) { if (t.width !== e.prevWidth || t.scaleToFit !== e.prevScaleToFit || t.children !== e.prevChildren || t.style !== e.prevStyle || t.breakAll !== e.prevBreakAll) { var n = t.children !== e.prevChildren || t.style !== e.prevStyle || t.breakAll !== e.prevBreakAll; return { prevWidth: t.width, prevScaleToFit: t.scaleToFit, prevChildren: t.children, prevStyle: t.style, wordsByLines: T(t, n) } } return null } }], (n = [{ key: "render", value: function() { var t = this.props,
                                e = t.dx,
                                n = t.dy,
                                r = t.textAnchor,
                                i = t.verticalAnchor,
                                o = t.scaleToFit,
                                s = t.angle,
                                c = t.lineHeight,
                                f = t.capHeight,
                                d = t.className,
                                y = t.breakAll,
                                g = m(t, ["dx", "dy", "textAnchor", "verticalAnchor", "scaleToFit", "angle", "lineHeight", "capHeight", "className", "breakAll"]),
                                b = this.state.wordsByLines; if (!Object(h.f)(g.x) || !Object(h.f)(g.y)) return null; var w, x = g.x + (Object(h.g)(e) ? e : 0),
                                O = g.y + (Object(h.g)(n) ? n : 0); switch (i) {
                                case "start":
                                    w = u()("calc(".concat(f, ")")); break;
                                case "middle":
                                    w = u()("calc(".concat((b.length - 1) / 2, " * -").concat(c, " + (").concat(f, " / 2))")); break;
                                default:
                                    w = u()("calc(".concat(b.length - 1, " * -").concat(c, ")")) } var _ = []; if (o) { var M = b[0].width,
                                    j = this.props.width;
                                _.push("scale(".concat((Object(h.g)(j) ? j / M : 1) / M, ")")) } return s && _.push("rotate(".concat(s, ", ").concat(x, ", ").concat(O, ")")), _.length && (g.transform = _.join(" ")), a.a.createElement("text", v({}, Object(p.c)(g, !0), { x: x, y: O, className: l()("recharts-text", d), textAnchor: r }), b.map((function(t, e) { return a.a.createElement("tspan", { x: x, dy: 0 === e ? w : c, key: e }, t.words.join(y ? "" : " ")) }))) } }]) && b(e.prototype, n), r && b(e, r), o }(o.Component);
            D.defaultProps = { x: 0, y: 0, lineHeight: "1em", capHeight: "0.71em", scaleToFit: !1, textAnchor: "start", verticalAnchor: "end" } }, 1556: function(t, e, n) { "use strict";
            n.d(e, "c", (function() { return d })), n.d(e, "b", (function() { return y })), n.d(e, "a", (function() { return v })); var r = n(1511);

            function i(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function o(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? i(Object(n), !0).forEach((function(e) { a(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

            function a(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t }

            function s(t) { return function(t) { if (Array.isArray(t)) return u(t) }(t) || function(t) { if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t) }(t) || function(t, e) { if (!t) return; if ("string" === typeof t) return u(t, e); var n = Object.prototype.toString.call(t).slice(8, -1); "Object" === n && t.constructor && (n = t.constructor.name); if ("Map" === n || "Set" === n) return Array.from(t); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(t, e) }(t) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

            function u(t, e) {
                (null == e || e > t.length) && (e = t.length); for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]; return r } var c = { widthCache: {}, cacheCount: 0 },
                l = { position: "absolute", top: "-20000px", left: 0, padding: 0, margin: 0, border: "none", whiteSpace: "pre" },
                h = ["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height", "top", "left", "fontSize", "lineHeight", "padding", "margin", "paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom"],
                f = "recharts_measurement_span"; var p = function(t) { return Object.keys(t).reduce((function(e, n) { return "".concat(e).concat((o = n, o.split("").reduce((function(t, e) { return e === e.toUpperCase() ? [].concat(s(t), ["-", e.toLowerCase()]) : [].concat(s(t), [e]) }), []).join("")), ":").concat((r = n, i = t[n], h.indexOf(r) >= 0 && i === +i ? "".concat(i, "px") : i), ";"); var r, i, o }), "") },
                d = function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; if (void 0 === t || null === t || r.a.isSsr) return { width: 0, height: 0 }; var n = "".concat(t),
                        i = p(e),
                        a = "".concat(n, "-").concat(i); if (c.widthCache[a]) return c.widthCache[a]; try { var s = document.getElementById(f);
                        s || ((s = document.createElement("span")).setAttribute("id", f), s.setAttribute("aria-hidden", "true"), document.body.appendChild(s)); var u = o(o({}, l), e);
                        Object.keys(u).map((function(t) { return s.style[t] = u[t], t })), s.textContent = n; var h = s.getBoundingClientRect(),
                            d = { width: h.width, height: h.height }; return c.widthCache[a] = d, ++c.cacheCount > 2e3 && (c.cacheCount = 0, c.widthCache = {}), d } catch (y) { return { width: 0, height: 0 } } },
                y = function(t) { var e = t.ownerDocument.documentElement,
                        n = { top: 0, left: 0 }; return "undefined" !== typeof t.getBoundingClientRect && (n = t.getBoundingClientRect()), { top: n.top + window.pageYOffset - e.clientTop, left: n.left + window.pageXOffset - e.clientLeft } },
                v = function(t, e) { return { chartX: Math.round(t.pageX - e.left), chartY: Math.round(t.pageY - e.top) } } }, 1557: function(t, e, n) { "use strict";
            n.d(e, "a", (function() { return v })); var r = n(1),
                i = n.n(r),
                o = n(406),
                a = n.n(o),
                s = n(1478);

            function u(t) { return u = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t }, u(t) }

            function c() { return c = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]) } return t }, c.apply(this, arguments) }

            function l(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

            function h(t, e) { for (var n = 0; n < e.length; n++) { var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r) } }

            function f(t, e) { return f = Object.setPrototypeOf || function(t, e) { return t.__proto__ = e, t }, f(t, e) }

            function p(t) { var e = function() { if ("undefined" === typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" === typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = y(t); if (e) { var i = y(this).constructor;
                        n = Reflect.construct(r, arguments, i) } else n = r.apply(this, arguments); return d(this, n) } }

            function d(t, e) { return !e || "object" !== u(e) && "function" !== typeof e ? function(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }(t) : e }

            function y(t) { return y = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) { return t.__proto__ || Object.getPrototypeOf(t) }, y(t) } var v = function(t) {! function(t, e) { if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && f(t, e) }(u, t); var e, n, r, o = p(u);

                function u() { return l(this, u), o.apply(this, arguments) } return e = u, (n = [{ key: "render", value: function() { var t = this.props,
                            e = t.cx,
                            n = t.cy,
                            r = t.r,
                            o = t.className,
                            u = a()("recharts-dot", o); return e === +e && n === +n && r === +r ? i.a.createElement("circle", c({}, Object(s.c)(this.props), Object(s.a)(this.props), { className: u, cx: e, cy: n, r: r })) : null } }]) && h(e.prototype, n), r && h(e, r), u }(r.PureComponent) }, 1558: function(t, e, n) { "use strict";
            n.d(e, "b", (function() { return g })), n.d(e, "a", (function() { return b })); var r = n(1),
                i = n.n(r),
                o = n(406),
                a = n.n(o),
                s = n(1537),
                u = n(1478);

            function c(t) { return c = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t }, c(t) }

            function l() { return l = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]) } return t }, l.apply(this, arguments) }

            function h(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

            function f(t, e) { for (var n = 0; n < e.length; n++) { var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r) } }

            function p(t, e) { return p = Object.setPrototypeOf || function(t, e) { return t.__proto__ = e, t }, p(t, e) }

            function d(t) { var e = function() { if ("undefined" === typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" === typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = v(t); if (e) { var i = v(this).constructor;
                        n = Reflect.construct(r, arguments, i) } else n = r.apply(this, arguments); return y(this, n) } }

            function y(t, e) { return !e || "object" !== c(e) && "function" !== typeof e ? function(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }(t) : e }

            function v(t) { return v = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) { return t.__proto__ || Object.getPrototypeOf(t) }, v(t) } var m = function(t, e, n, r, i) { var o, a = Math.min(Math.abs(n) / 2, Math.abs(r) / 2),
                        s = r >= 0 ? 1 : -1,
                        u = n >= 0 ? 1 : -1,
                        c = r >= 0 && n >= 0 || r < 0 && n < 0 ? 1 : 0; if (a > 0 && i instanceof Array) { for (var l = [0, 0, 0, 0], h = 0; h < 4; h++) l[h] = i[h] > a ? a : i[h];
                        o = "M".concat(t, ",").concat(e + s * l[0]), l[0] > 0 && (o += "A ".concat(l[0], ",").concat(l[0], ",0,0,").concat(c, ",").concat(t + u * l[0], ",").concat(e)), o += "L ".concat(t + n - u * l[1], ",").concat(e), l[1] > 0 && (o += "A ".concat(l[1], ",").concat(l[1], ",0,0,").concat(c, ",\n        ").concat(t + n, ",").concat(e + s * l[1])), o += "L ".concat(t + n, ",").concat(e + r - s * l[2]), l[2] > 0 && (o += "A ".concat(l[2], ",").concat(l[2], ",0,0,").concat(c, ",\n        ").concat(t + n - u * l[2], ",").concat(e + r)), o += "L ".concat(t + u * l[3], ",").concat(e + r), l[3] > 0 && (o += "A ".concat(l[3], ",").concat(l[3], ",0,0,").concat(c, ",\n        ").concat(t, ",").concat(e + r - s * l[3])), o += "Z" } else if (a > 0 && i === +i && i > 0) { var f = Math.min(a, i);
                        o = "M ".concat(t, ",").concat(e + s * f, "\n            A ").concat(f, ",").concat(f, ",0,0,").concat(c, ",").concat(t + u * f, ",").concat(e, "\n            L ").concat(t + n - u * f, ",").concat(e, "\n            A ").concat(f, ",").concat(f, ",0,0,").concat(c, ",").concat(t + n, ",").concat(e + s * f, "\n            L ").concat(t + n, ",").concat(e + r - s * f, "\n            A ").concat(f, ",").concat(f, ",0,0,").concat(c, ",").concat(t + n - u * f, ",").concat(e + r, "\n            L ").concat(t + u * f, ",").concat(e + r, "\n            A ").concat(f, ",").concat(f, ",0,0,").concat(c, ",").concat(t, ",").concat(e + r - s * f, " Z") } else o = "M ".concat(t, ",").concat(e, " h ").concat(n, " v ").concat(r, " h ").concat(-n, " Z"); return o },
                g = function(t, e) { if (!t || !e) return !1; var n = t.x,
                        r = t.y,
                        i = e.x,
                        o = e.y,
                        a = e.width,
                        s = e.height; if (Math.abs(a) > 0 && Math.abs(s) > 0) { var u = Math.min(i, i + a),
                            c = Math.max(i, i + a),
                            l = Math.min(o, o + s),
                            h = Math.max(o, o + s); return n >= u && n <= c && r >= l && r <= h } return !1 },
                b = function(t) {! function(t, e) { if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && p(t, e) }(c, t); var e, n, r, o = d(c);

                    function c() { var t;
                        h(this, c); for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r]; return (t = o.call.apply(o, [this].concat(n))).state = { totalLength: -1 }, t.node = void 0, t } return e = c, (n = [{ key: "componentDidMount", value: function() { if (this.node && this.node.getTotalLength) try { var t = this.node.getTotalLength();
                                t && this.setState({ totalLength: t }) } catch (e) {} } }, { key: "render", value: function() { var t = this,
                                e = this.props,
                                n = e.x,
                                r = e.y,
                                o = e.width,
                                c = e.height,
                                h = e.radius,
                                f = e.className,
                                p = this.state.totalLength,
                                d = this.props,
                                y = d.animationEasing,
                                v = d.animationDuration,
                                g = d.animationBegin,
                                b = d.isAnimationActive,
                                w = d.isUpdateAnimationActive; if (n !== +n || r !== +r || o !== +o || c !== +c || 0 === o || 0 === c) return null; var x = a()("recharts-rectangle", f); return w ? i.a.createElement(s.a, { canBegin: p > 0, from: { width: o, height: c, x: n, y: r }, to: { width: o, height: c, x: n, y: r }, duration: v, animationEasing: y, isActive: w }, (function(e) { var n = e.width,
                                    r = e.height,
                                    o = e.x,
                                    a = e.y; return i.a.createElement(s.a, { canBegin: p > 0, from: "0px ".concat(-1 === p ? 1 : p, "px"), to: "".concat(p, "px 0px"), attributeName: "strokeDasharray", begin: g, duration: v, isActive: b, easing: y }, i.a.createElement("path", l({}, Object(u.c)(t.props, !0), { className: x, d: m(o, a, n, r, h), ref: function(e) { t.node = e } }))) })) : i.a.createElement("path", l({}, Object(u.c)(this.props, !0), { className: x, d: m(n, r, o, c, h) })) } }]) && f(e.prototype, n), r && f(e, r), c }(r.PureComponent);
            b.defaultProps = { x: 0, y: 0, width: 0, height: 0, radius: 0, isAnimationActive: !1, isUpdateAnimationActive: !1, animationBegin: 0, animationDuration: 1500, animationEasing: "ease" } }, 1568: function(t, e, n) { "use strict";
            n.d(e, "a", (function() { return s })); var r = n(1823),
                i = n(1711),
                o = n(1533),
                a = n(1833);

            function s(t, e, n, s) { var u, c = Object(r.c)(t, e, n); switch ((s = Object(i.a)(null == s ? ",f" : s)).type) {
                    case "s":
                        var l = Math.max(Math.abs(t), Math.abs(e)); return null != s.precision || isNaN(u = function(t, e) { return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(Object(o.a)(e) / 3))) - Object(o.a)(Math.abs(t))) }(c, l)) || (s.precision = u), Object(a.b)(s, l);
                    case "":
                    case "e":
                    case "g":
                    case "p":
                    case "r":
                        null != s.precision || isNaN(u = function(t, e) { return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, Object(o.a)(e) - Object(o.a)(t)) + 1 }(c, Math.max(Math.abs(t), Math.abs(e)))) || (s.precision = u - ("e" === s.type)); break;
                    case "f":
                    case "%":
                        null != s.precision || isNaN(u = function(t) { return Math.max(0, -Object(o.a)(Math.abs(t))) }(c)) || (s.precision = u - 2 * ("%" === s.type)) } return Object(a.a)(s) } }, 1569: function(t, e, n) { "use strict";
            n.d(e, "a", (function() { return s })), n.d(e, "b", (function() { return c })); var r = n(10),
                i = function(t, e, n) { t = +t, e = +e, n = (i = arguments.length) < 2 ? (e = t, t = 0, 1) : i < 3 ? 1 : +n; for (var r = -1, i = 0 | Math.max(0, Math.ceil((e - t) / n)), o = new Array(i); ++r < i;) o[r] = t + r * n; return o },
                o = n(1487),
                a = n(1532);

            function s() { var t, e, n = Object(a.a)().unknown(void 0),
                    u = n.domain,
                    c = n.range,
                    l = 0,
                    h = 1,
                    f = !1,
                    p = 0,
                    d = 0,
                    y = .5;

                function v() { var n = u().length,
                        r = h < l,
                        o = r ? h : l,
                        a = r ? l : h;
                    t = (a - o) / Math.max(1, n - p + 2 * d), f && (t = Math.floor(t)), o += (a - o - t * (n - p)) * y, e = t * (1 - p), f && (o = Math.round(o), e = Math.round(e)); var s = i(n).map((function(e) { return o + t * e })); return c(r ? s.reverse() : s) } return delete n.unknown, n.domain = function(t) { return arguments.length ? (u(t), v()) : u() }, n.range = function(t) { var e, n; return arguments.length ? (e = t, n = Object(r.a)(e, 2), l = n[0], h = n[1], l = +l, h = +h, v()) : [l, h] }, n.rangeRound = function(t) { var e, n; return e = t, n = Object(r.a)(e, 2), l = n[0], h = n[1], l = +l, h = +h, f = !0, v() }, n.bandwidth = function() { return e }, n.step = function() { return t }, n.round = function(t) { return arguments.length ? (f = !!t, v()) : f }, n.padding = function(t) { return arguments.length ? (p = Math.min(1, d = +t), v()) : p }, n.paddingInner = function(t) { return arguments.length ? (p = Math.min(1, t), v()) : p }, n.paddingOuter = function(t) { return arguments.length ? (d = +t, v()) : d }, n.align = function(t) { return arguments.length ? (y = Math.max(0, Math.min(1, t)), v()) : y }, n.copy = function() { return s(u(), [l, h]).round(f).paddingInner(p).paddingOuter(d).align(y) }, o.b.apply(v(), arguments) }

            function u(t) { var e = t.copy; return t.padding = t.paddingOuter, delete t.paddingInner, delete t.paddingOuter, t.copy = function() { return u(e()) }, t }

            function c() { return u(s.apply(null, arguments).paddingInner(1)) } }, 1590: function(t, e, n) { "use strict"; var r = n(1545);
            t.exports = function t(e, n, i) { var o;
                void 0 === n && (n = ""), void 0 === i && (i = r); var a = new Map;

                function s(t, e) { var n = a.get(e);
                    n ? n.push.apply(n, t) : a.set(e, t) } if (i(e)) o = null, s([n], e);
                else { var u = n ? n + "." : ""; if ("undefined" !== typeof FileList && e instanceof FileList) o = Array.prototype.map.call(e, (function(t, e) { return s(["" + u + e], t), null }));
                    else if (Array.isArray(e)) o = e.map((function(e, n) { var r = t(e, "" + u + n, i); return r.files.forEach(s), r.clone }));
                    else if (e && e.constructor === Object)
                        for (var c in o = {}, e) { var l = t(e[c], "" + u + c, i);
                            l.files.forEach(s), o[c] = l.clone } else o = e } return { clone: o, files: a } } }, 1591: function(t, e, n) { var r = n(290),
                i = n(291);
            t.exports = function(t) { return "number" == typeof t || i(t) && "[object Number]" == r(t) } }, 1592: function(t, e, n) { "use strict";
            (function(t, r) { n.d(e, "a", (function() { return xt })); var i = n(1593),
                    o = n.n(i),
                    a = n(1675),
                    s = n.n(a),
                    u = n(511),
                    c = n.n(u),
                    l = n(679),
                    h = n.n(l),
                    f = n(1548),
                    p = n.n(f),
                    d = n(292),
                    y = n.n(d),
                    v = n(1596),
                    m = n.n(v),
                    g = n(1494),
                    b = n.n(g),
                    w = n(1692),
                    x = n.n(w),
                    O = n(162),
                    _ = n.n(O),
                    M = n(1),
                    j = n.n(M),
                    S = n(406),
                    E = n.n(S),
                    k = n(1601),
                    A = n(1495),
                    C = n(1786),
                    P = n(1640),
                    T = n(1639),
                    D = n(1735),
                    N = n(1736),
                    R = n(1557),
                    I = n(1558),
                    B = n(1505),
                    L = n(1734),
                    z = n(1785),
                    F = n(1556),
                    W = n(1477),
                    V = n(1509),
                    U = n(1782),
                    G = n(1549),
                    X = n(1551),
                    H = n(1737),
                    Y = n(1478);

                function q(t) { return q = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t }, q(t) }

                function J(t, e) { return function(t) { if (Array.isArray(t)) return t }(t) || function(t, e) { if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(t))) return; var n = [],
                            r = !0,
                            i = !1,
                            o = void 0; try { for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0); } catch (u) { i = !0, o = u } finally { try { r || null == s.return || s.return() } finally { if (i) throw o } } return n }(t, e) || ot(t, e) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

                function $() { return $ = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]) } return t }, $.apply(this, arguments) }

                function K(t, e) { if (null == t) return {}; var n, r, i = function(t, e) { if (null == t) return {}; var n, r, i = {},
                            o = Object.keys(t); for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || (i[n] = t[n]); return i }(t, e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(t); for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n]) } return i }

                function Z(t, e) { for (var n = 0; n < e.length; n++) { var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r) } }

                function Q(t, e) { return Q = Object.setPrototypeOf || function(t, e) { return t.__proto__ = e, t }, Q(t, e) }

                function tt(t) { var e = function() { if ("undefined" === typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" === typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = rt(t); if (e) { var i = rt(this).constructor;
                            n = Reflect.construct(r, arguments, i) } else n = r.apply(this, arguments); return et(this, n) } }

                function et(t, e) { return !e || "object" !== q(e) && "function" !== typeof e ? nt(t) : e }

                function nt(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }

                function rt(t) { return rt = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) { return t.__proto__ || Object.getPrototypeOf(t) }, rt(t) }

                function it(t) { return function(t) { if (Array.isArray(t)) return at(t) }(t) || function(t) { if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t) }(t) || ot(t) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

                function ot(t, e) { if (t) { if ("string" === typeof t) return at(t, e); var n = Object.prototype.toString.call(t).slice(8, -1); return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? at(t, e) : void 0 } }

                function at(t, e) {
                    (null == e || e > t.length) && (e = t.length); for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]; return r }

                function st(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                        e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

                function ut(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? st(Object(n), !0).forEach((function(e) { ct(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : st(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

                function ct(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t } var lt = { xAxis: ["bottom", "top"], yAxis: ["left", "right"] },
                    ht = { x: 0, y: 0 },
                    ft = Number.isFinite ? Number.isFinite : isFinite,
                    pt = "function" === typeof requestAnimationFrame ? requestAnimationFrame : "function" === typeof t ? t : setTimeout,
                    dt = "function" === typeof cancelAnimationFrame ? cancelAnimationFrame : "function" === typeof r ? r : clearTimeout,
                    yt = function(t, e, n) { var r = e.graphicalItems,
                            i = e.dataStartIndex,
                            o = e.dataEndIndex,
                            a = (r || []).reduce((function(t, e) { var n = e.props.data; return n && n.length ? [].concat(it(t), it(n)) : t }), []); return a && a.length > 0 ? a : n && n.props && n.props.data && n.props.data.length > 0 ? n.props.data : t && t.length && Object(W.g)(i) && Object(W.g)(o) ? t.slice(i, o + 1) : [] },
                    vt = function(t, e, n, r) { var i = t.graphicalItems,
                            o = t.tooltipAxis,
                            a = yt(e, t); return n < 0 || !i || !i.length || n >= a.length ? null : i.reduce((function(t, e) { if (e.props.hide) return t; var i, s = e.props.data; if (o.dataKey && !o.allowDuplicatedCategory) { var u = void 0 === s ? a : s;
                                i = Object(W.a)(u, o.dataKey, r) } else i = s && s[n] || a[n]; return i ? [].concat(it(t), [Object(V.v)(e, i)]) : t }), []) },
                    mt = function(t, e, n, r) { var i = r || { x: t.chartX, y: t.chartY },
                            o = function(t, e) { return "horizontal" === e ? t.x : "vertical" === e ? t.y : "centric" === e ? t.angle : t.radius }(i, n),
                            a = t.orderedTooltipTicks,
                            s = t.tooltipAxis,
                            u = t.tooltipTicks,
                            c = Object(V.b)(o, a, u, s); if (c >= 0 && u) { var l = u[c] && u[c].value,
                                h = vt(t, e, c, l),
                                f = function(t, e, n, r) { var i = e.find((function(t) { return t && t.index === n })); if (i) { if ("horizontal" === t) return { x: i.coordinate, y: r.y }; if ("vertical" === t) return { x: r.x, y: i.coordinate }; if ("centric" === t) { var o = i.coordinate,
                                                a = r.radius; return ut(ut(ut({}, r), Object(G.c)(r.cx, r.cy, a, o)), {}, { angle: o, radius: a }) } var s = i.coordinate,
                                            u = r.angle; return ut(ut(ut({}, r), Object(G.c)(r.cx, r.cy, s, u)), {}, { angle: u, radius: s }) } return ht }(n, a, c, i); return { activeTooltipIndex: c, activeLabel: l, activePayload: h, activeCoordinate: f } } return null },
                    gt = function(t, e) { var n = e.axisType,
                            r = void 0 === n ? "xAxis" : n,
                            i = e.AxisComp,
                            o = e.graphicalItems,
                            a = e.stackGroups,
                            s = e.dataStartIndex,
                            u = e.dataEndIndex,
                            c = t.children,
                            l = "".concat(r, "Id"),
                            h = Object(B.a)(c, i),
                            f = {}; return h && h.length ? f = function(t, e) { var n = e.axes,
                                r = e.graphicalItems,
                                i = e.axisType,
                                o = e.axisIdKey,
                                a = e.stackGroups,
                                s = e.dataStartIndex,
                                u = e.dataEndIndex,
                                c = t.layout,
                                l = t.children,
                                h = t.stackOffset,
                                f = Object(V.x)(c, i); return n.reduce((function(e, n) { var p = n.props,
                                    d = p.type,
                                    y = p.dataKey,
                                    v = p.allowDataOverflow,
                                    g = p.allowDuplicatedCategory,
                                    w = p.scale,
                                    x = p.ticks,
                                    O = n.props[o],
                                    _ = yt(t.data, { graphicalItems: r.filter((function(t) { return t.props[o] === O })), dataStartIndex: s, dataEndIndex: u }),
                                    M = _.length; if (!e[O]) { var j, S, E; if (y) { if (j = Object(V.m)(_, y, d), "category" === d && f) { var k = Object(W.d)(j);
                                            g && k ? (S = j, j = m()(0, M)) : g || (j = Object(V.y)(n.props.domain, j, n).reduce((function(t, e) { return t.indexOf(e) >= 0 ? t : [].concat(it(t), [e]) }), [])) } else if ("category" === d) j = g ? j.filter((function(t) { return "" !== t && !b()(t) })) : Object(V.y)(n.props.domain, j, n).reduce((function(t, e) { return t.indexOf(e) >= 0 || "" === e || b()(e) ? t : [].concat(it(t), [e]) }), []);
                                        else if ("number" === d) { var A = Object(V.z)(_, r.filter((function(t) { return t.props[o] === O && !t.props.hide })), y, i);
                                            A && (j = A) }!f || "number" !== d && "auto" === w || (E = Object(V.m)(_, y, "category")) } else j = f ? m()(0, M) : a && a[O] && a[O].hasStack && "number" === d ? "expand" === h ? [0, 1] : Object(V.o)(a[O].stackGroups, s, u) : Object(V.n)(_, r.filter((function(t) { return t.props[o] === O && !t.props.hide })), d, !0); if ("number" === d) j = Object(U.a)(l, j, O, i, x), n.props.domain && (j = Object(V.B)(n.props.domain, j, v));
                                    else if ("category" === d && n.props.domain) { var C = n.props.domain;
                                        j.every((function(t) { return C.indexOf(t) >= 0 })) && (j = C) } return ut(ut({}, e), {}, ct({}, O, ut(ut({}, n.props), {}, { axisType: i, domain: j, categoricalDomain: E, duplicateDomain: S, originalDomain: n.props.domain, isCategorical: f, layout: c }))) } return e }), {}) }(t, { axes: h, graphicalItems: o, axisType: r, axisIdKey: l, stackGroups: a, dataStartIndex: s, dataEndIndex: u }) : o && o.length && (f = function(t, e) { var n = e.graphicalItems,
                                r = e.Axis,
                                i = e.axisType,
                                o = e.axisIdKey,
                                a = e.stackGroups,
                                s = e.dataStartIndex,
                                u = e.dataEndIndex,
                                c = t.layout,
                                l = t.children,
                                h = yt(t.data, { graphicalItems: n, dataStartIndex: s, dataEndIndex: u }),
                                f = h.length,
                                p = Object(V.x)(c, i),
                                d = -1; return n.reduce((function(t, e) { var v, g = e.props[o]; return t[g] ? t : (d++, p ? v = m()(0, f) : a && a[g] && a[g].hasStack ? (v = Object(V.o)(a[g].stackGroups, s, u), v = Object(U.a)(l, v, g, i)) : (v = Object(V.B)(r.defaultProps.domain, Object(V.n)(h, n.filter((function(t) { return t.props[o] === g && !t.props.hide })), "number"), r.defaultProps.allowDataOverflow), v = Object(U.a)(l, v, g, i)), ut(ut({}, t), {}, ct({}, g, ut(ut({ axisType: i }, r.defaultProps), {}, { hide: !0, orientation: y()(lt, "".concat(i, ".").concat(d % 2), null), domain: v, originalDomain: r.defaultProps.domain, isCategorical: p, layout: c })))) }), {}) }(t, { Axis: i, graphicalItems: o, axisType: r, axisIdKey: l, stackGroups: a, dataStartIndex: s, dataEndIndex: u })), f },
                    bt = function(t) { var e = t.children,
                            n = t.defaultShowTooltip,
                            r = Object(B.b)(e, z.a.displayName); return { chartX: 0, chartY: 0, dataStartIndex: r && r.props && r.props.startIndex || 0, dataEndIndex: r && r.props && r.props.endIndex || t.data && t.data.length - 1 || 0, activeTooltipIndex: -1, isTooltipActive: !b()(n) && n } },
                    wt = function(t) { return "horizontal" === t ? { numericAxisName: "yAxis", cateAxisName: "xAxis" } : "vertical" === t ? { numericAxisName: "xAxis", cateAxisName: "yAxis" } : "centric" === t ? { numericAxisName: "radiusAxis", cateAxisName: "angleAxis" } : { numericAxisName: "angleAxis", cateAxisName: "radiusAxis" } },
                    xt = function(t) { var e, n, r = t.chartName,
                            i = t.GraphicalChild,
                            a = t.defaultTooltipEventType,
                            u = void 0 === a ? "axis" : a,
                            l = t.validateTooltipEventTypes,
                            f = void 0 === l ? ["axis"] : l,
                            d = t.axisComponents,
                            v = t.legendContent,
                            m = t.formatAxisMap,
                            g = t.defaultProps,
                            w = function(t, e) { var n = e.graphicalItems,
                                    r = e.stackGroups,
                                    i = e.offset,
                                    o = e.updateId,
                                    a = e.dataStartIndex,
                                    s = e.dataEndIndex,
                                    u = t.barSize,
                                    c = t.layout,
                                    l = t.barGap,
                                    h = t.barCategoryGap,
                                    f = t.maxBarSize,
                                    p = wt(c),
                                    y = p.numericAxisName,
                                    v = p.cateAxisName,
                                    m = function(t) { return !(!t || !t.length) && t.some((function(t) { var e = Object(B.c)(t && t.type); return e && e.indexOf("Bar") >= 0 })) }(n),
                                    g = m && Object(V.h)({ barSize: u, stackGroups: r }),
                                    w = []; return n.forEach((function(n, u) { var p = yt(t.data, { dataStartIndex: a, dataEndIndex: s }, n),
                                        m = n.props,
                                        x = m.dataKey,
                                        O = m.maxBarSize,
                                        _ = n.props["".concat(y, "Id")],
                                        M = n.props["".concat(v, "Id")],
                                        j = d.reduce((function(t, r) { var i, o = e["".concat(r.axisType, "Map")],
                                                a = n.props["".concat(r.axisType, "Id")],
                                                s = o && o[a]; return ut(ut({}, t), {}, (ct(i = {}, r.axisType, s), ct(i, "".concat(r.axisType, "Ticks"), Object(V.t)(s)), i)) }), {}),
                                        S = j[v],
                                        E = j["".concat(v, "Ticks")],
                                        k = r && r[_] && r[_].hasStack && Object(V.s)(n, r[_].stackGroups),
                                        A = Object(B.c)(n.type).indexOf("Bar") >= 0,
                                        C = Object(V.f)(S, E),
                                        P = []; if (A) { var T, D, N = b()(O) ? f : O,
                                            R = null !== (T = null !== (D = Object(V.f)(S, E, !0)) && void 0 !== D ? D : N) && void 0 !== T ? T : 0;
                                        P = Object(V.g)({ barGap: l, barCategoryGap: h, bandSize: R !== C ? R : C, sizeList: g[M], maxBarSize: N }), R !== C && (P = P.map((function(t) { return ut(ut({}, t), {}, { position: ut(ut({}, t.position), {}, { offset: t.position.offset - R / 2 }) }) }))) } var I, L = n && n.type && n.type.getComposedData;
                                    L && w.push({ props: ut(ut({}, L(ut(ut({}, j), {}, { displayedData: p, props: t, dataKey: x, item: n, bandSize: C, barPosition: P, offset: i, stackedData: k, layout: c, dataStartIndex: a, dataEndIndex: s }))), {}, (I = { key: n.key || "item-".concat(u) }, ct(I, y, j[y]), ct(I, v, j[v]), ct(I, "animationId", o), I)), childIndex: Object(B.f)(n, t.children), item: n }) })), w },
                            O = function(t, e) { var n = t.props,
                                    o = t.dataStartIndex,
                                    a = t.dataEndIndex,
                                    s = t.updateId; if (!Object(B.h)({ props: n })) return null; var u = n.children,
                                    c = n.layout,
                                    l = n.stackOffset,
                                    h = n.data,
                                    f = n.reverseStackOrder,
                                    v = wt(c),
                                    g = v.numericAxisName,
                                    b = v.cateAxisName,
                                    x = Object(B.a)(u, i),
                                    O = Object(V.r)(h, x, "".concat(g, "Id"), "".concat(b, "Id"), l, f),
                                    _ = d.reduce((function(t, e) { var r = "".concat(e.axisType, "Map"); return ut(ut({}, t), {}, ct({}, r, gt(n, ut(ut({}, e), {}, { graphicalItems: x, stackGroups: e.axisType === g && O, dataStartIndex: o, dataEndIndex: a })))) }), {}),
                                    M = function(t, e) { var n = t.props,
                                            r = t.graphicalItems,
                                            i = t.xAxisMap,
                                            o = void 0 === i ? {} : i,
                                            a = t.yAxisMap,
                                            s = void 0 === a ? {} : a,
                                            u = n.width,
                                            c = n.height,
                                            l = n.children,
                                            h = n.margin || {},
                                            f = Object(B.b)(l, z.a.displayName),
                                            p = Object(B.b)(l, P.a.displayName),
                                            d = Object.keys(s).reduce((function(t, e) { var n = s[e],
                                                    r = n.orientation; return n.mirror || n.hide ? t : ut(ut({}, t), {}, ct({}, r, t[r] + n.width)) }), { left: h.left || 0, right: h.right || 0 }),
                                            v = Object.keys(o).reduce((function(t, e) { var n = o[e],
                                                    r = n.orientation; return n.mirror || n.hide ? t : ut(ut({}, t), {}, ct({}, r, y()(t, "".concat(r)) + n.height)) }), { top: h.top || 0, bottom: h.bottom || 0 }),
                                            m = ut(ut({}, v), d),
                                            g = m.bottom; return f && (m.bottom += f.props.height || z.a.defaultProps.height), p && e && (m = Object(V.a)(m, r, n, e)), ut(ut({ brushBottom: g }, m), {}, { width: u - m.left - m.right, height: c - m.top - m.bottom }) }(ut(ut({}, _), {}, { props: n, graphicalItems: x }), null === e || void 0 === e ? void 0 : e.legendBBox);
                                Object.keys(_).forEach((function(t) { _[t] = m(n, _[t], M, t.replace("Map", ""), r) })); var j = function(t) { var e = Object(W.b)(t),
                                            n = Object(V.t)(e, !1, !0); return { tooltipTicks: n, orderedTooltipTicks: p()(n, (function(t) { return t.coordinate })), tooltipAxis: e, tooltipAxisBandSize: Object(V.f)(e, n) } }(_["".concat(b, "Map")]),
                                    S = w(n, ut(ut({}, _), {}, { dataStartIndex: o, dataEndIndex: a, updateId: s, graphicalItems: x, stackGroups: O, offset: M })); return ut(ut({ formattedGraphicalItems: S, graphicalItems: x, offset: M, stackGroups: O }, j), _) }; return n = e = function(t) {! function(t, e) { if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                                t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && Q(t, e) }(l, t); var e, n, i, a = tt(l);

                            function l(t) { var e; return function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, l), (e = a.call(this, t)).uniqueChartId = void 0, e.clipPathId = void 0, e.legendInstance = void 0, e.deferId = void 0, e.container = void 0, e.clearDeferId = function() {!b()(e.deferId) && dt && dt(e.deferId), e.deferId = null }, e.handleLegendBBoxUpdate = function(t) { if (t) { var n = e.state,
                                            r = n.dataStartIndex,
                                            i = n.dataEndIndex,
                                            o = n.updateId;
                                        e.setState(ut({ legendBBox: t }, O({ props: e.props, dataStartIndex: r, dataEndIndex: i, updateId: o }, ut(ut({}, e.state), {}, { legendBBox: t })))) } }, e.handleReceiveSyncEvent = function(t, n, r) { e.props.syncId === t && n !== e.uniqueChartId && (e.clearDeferId(), e.deferId = pt && pt(e.applySyncEvent.bind(nt(e), r))) }, e.handleBrushChange = function(t) { var n = t.startIndex,
                                        r = t.endIndex; if (n !== e.state.dataStartIndex || r !== e.state.dataEndIndex) { var i = e.state.updateId;
                                        e.setState((function() { return ut({ dataStartIndex: n, dataEndIndex: r }, O({ props: e.props, dataStartIndex: n, dataEndIndex: r, updateId: i }, e.state)) })), e.triggerSyncEvent({ dataStartIndex: n, dataEndIndex: r }) } }, e.handleMouseEnter = function(t) { var n = e.props.onMouseEnter,
                                        r = e.getMouseInfo(t); if (r) { var i = ut(ut({}, r), {}, { isTooltipActive: !0 });
                                        e.setState(i), e.triggerSyncEvent(i), c()(n) && n(i, t) } }, e.triggeredAfterMouseMove = function(t) { var n = e.props.onMouseMove,
                                        r = e.getMouseInfo(t),
                                        i = r ? ut(ut({}, r), {}, { isTooltipActive: !0 }) : { isTooltipActive: !1 };
                                    e.setState(i), e.triggerSyncEvent(i), c()(n) && n(i, t) }, e.handleItemMouseEnter = function(t) { e.setState((function() { return { isTooltipActive: !0, activeItem: t, activePayload: t.tooltipPayload, activeCoordinate: t.tooltipPosition || { x: t.cx, y: t.cy } } })) }, e.handleItemMouseLeave = function() { e.setState((function() { return { isTooltipActive: !1 } })) }, e.handleMouseMove = function(t) { t && c()(t.persist) && t.persist(), e.triggeredAfterMouseMove(t) }, e.handleMouseLeave = function(t) { var n = e.props.onMouseLeave,
                                        r = { isTooltipActive: !1 };
                                    e.setState(r), e.triggerSyncEvent(r), c()(n) && n(r, t), e.cancelThrottledTriggerAfterMouseMove() }, e.handleOuterEvent = function(t) { var n = Object(B.d)(t),
                                        r = y()(e.props, "".concat(n));
                                    n && c()(r) && r(/.*touch.*/i.test(n) ? e.getMouseInfo(t.changedTouches[0]) : e.getMouseInfo(t), t) }, e.handleClick = function(t) { var n = e.props.onClick,
                                        r = e.getMouseInfo(t); if (r) { var i = ut(ut({}, r), {}, { isTooltipActive: !0 });
                                        e.setState(i), e.triggerSyncEvent(i), c()(n) && n(i, t) } }, e.handleMouseDown = function(t) { var n = e.props.onMouseDown;
                                    c()(n) && n(e.getMouseInfo(t), t) }, e.handleMouseUp = function(t) { var n = e.props.onMouseUp;
                                    c()(n) && n(e.getMouseInfo(t), t) }, e.handleTouchMove = function(t) { null != t.changedTouches && t.changedTouches.length > 0 && e.handleMouseMove(t.changedTouches[0]) }, e.handleTouchStart = function(t) { null != t.changedTouches && t.changedTouches.length > 0 && e.handleMouseDown(t.changedTouches[0]) }, e.handleTouchEnd = function(t) { null != t.changedTouches && t.changedTouches.length > 0 && e.handleMouseUp(t.changedTouches[0]) }, e.verticalCoordinatesGenerator = function(t) { var e = t.xAxis,
                                        n = t.width,
                                        r = t.height,
                                        i = t.offset; return Object(V.l)(L.a.getTicks(ut(ut(ut({}, L.a.defaultProps), e), {}, { ticks: Object(V.t)(e, !0), viewBox: { x: 0, y: 0, width: n, height: r } })), i.left, i.left + i.width) }, e.horizontalCoordinatesGenerator = function(t) { var e = t.yAxis,
                                        n = t.width,
                                        r = t.height,
                                        i = t.offset; return Object(V.l)(L.a.getTicks(ut(ut(ut({}, L.a.defaultProps), e), {}, { ticks: Object(V.t)(e, !0), viewBox: { x: 0, y: 0, width: n, height: r } })), i.top, i.top + i.height) }, e.axesTicksGenerator = function(t) { return Object(V.t)(t, !0) }, e.renderCursor = function(t) { var n = e.state,
                                        i = n.isTooltipActive,
                                        o = n.activeCoordinate,
                                        a = n.activePayload,
                                        s = n.offset,
                                        u = n.activeTooltipIndex,
                                        c = e.getTooltipEventType(); if (!t || !t.props.cursor || !i || !o || "ScatterChart" !== r && "axis" !== c) return null; var l, h = e.props.layout,
                                        f = T.a; if ("ScatterChart" === r) l = o, f = D.a;
                                    else if ("BarChart" === r) l = e.getCursorRectangle(), f = I.a;
                                    else if ("radial" === h) { var p = e.getCursorPoints(),
                                            d = p.cx,
                                            y = p.cy,
                                            v = p.radius;
                                        l = { cx: d, cy: y, startAngle: p.startAngle, endAngle: p.endAngle, innerRadius: v, outerRadius: v }, f = N.a } else l = { points: e.getCursorPoints() }, f = T.a; var m = t.key || "_recharts-cursor",
                                        g = ut(ut(ut(ut({ stroke: "#ccc", pointerEvents: "none" }, s), l), Object(Y.c)(t.props.cursor)), {}, { payload: a, payloadIndex: u, key: m, className: "recharts-tooltip-cursor" }); return Object(M.isValidElement)(t.props.cursor) ? Object(M.cloneElement)(t.props.cursor, g) : Object(M.createElement)(f, g) }, e.renderPolarAxis = function(t, n, r) { var i = y()(t, "type.axisType"),
                                        o = y()(e.state, "".concat(i, "Map"))[t.props["".concat(i, "Id")]]; return Object(M.cloneElement)(t, ut(ut({}, o), {}, { className: i, key: t.key || "".concat(n, "-").concat(r), ticks: Object(V.t)(o, !0) })) }, e.renderXAxis = function(t, n, r) { var i = e.state.xAxisMap[t.props.xAxisId]; return e.renderAxis(i, t, n, r) }, e.renderYAxis = function(t, n, r) { var i = e.state.yAxisMap[t.props.yAxisId]; return e.renderAxis(i, t, n, r) }, e.renderGrid = function(t) { var n = e.state,
                                        r = n.xAxisMap,
                                        i = n.yAxisMap,
                                        a = n.offset,
                                        u = e.props,
                                        c = u.width,
                                        l = u.height,
                                        h = Object(W.b)(r),
                                        f = s()(i, (function(t) { return o()(t.domain, ft) })) || Object(W.b)(i),
                                        p = t.props || {}; return Object(M.cloneElement)(t, { key: t.key || "grid", x: Object(W.g)(p.x) ? p.x : a.left, y: Object(W.g)(p.y) ? p.y : a.top, width: Object(W.g)(p.width) ? p.width : a.width, height: Object(W.g)(p.height) ? p.height : a.height, xAxis: h, yAxis: f, offset: a, chartWidth: c, chartHeight: l, verticalCoordinatesGenerator: p.verticalCoordinatesGenerator || e.verticalCoordinatesGenerator, horizontalCoordinatesGenerator: p.horizontalCoordinatesGenerator || e.horizontalCoordinatesGenerator }) }, e.renderPolarGrid = function(t) { var n = t.props,
                                        r = n.radialLines,
                                        i = n.polarAngles,
                                        o = n.polarRadius,
                                        a = e.state,
                                        s = a.radiusAxisMap,
                                        u = a.angleAxisMap,
                                        c = Object(W.b)(s),
                                        l = Object(W.b)(u),
                                        h = l.cx,
                                        f = l.cy,
                                        p = l.innerRadius,
                                        d = l.outerRadius; return Object(M.cloneElement)(t, { polarAngles: _()(i) ? i : Object(V.t)(l, !0).map((function(t) { return t.coordinate })), polarRadius: _()(o) ? o : Object(V.t)(c, !0).map((function(t) { return t.coordinate })), cx: h, cy: f, innerRadius: p, outerRadius: d, key: t.key || "polar-grid", radialLines: r }) }, e.renderLegend = function() { var t = e.state.formattedGraphicalItems,
                                        n = e.props,
                                        r = n.children,
                                        i = n.width,
                                        o = n.height,
                                        a = e.props.margin || {},
                                        s = i - (a.left || 0) - (a.right || 0),
                                        u = Object(V.p)({ children: r, formattedGraphicalItems: t, legendWidth: s, legendContent: v }); if (!u) return null; var c = u.item,
                                        l = K(u, ["item"]); return Object(M.cloneElement)(c, ut(ut({}, l), {}, { chartWidth: i, chartHeight: o, margin: a, ref: function(t) { e.legendInstance = t }, onBBoxUpdate: e.handleLegendBBoxUpdate })) }, e.renderTooltip = function() { var t = e.props.children,
                                        n = Object(B.b)(t, C.a.displayName); if (!n) return null; var r = e.state,
                                        i = r.isTooltipActive,
                                        o = r.activeCoordinate,
                                        a = r.activePayload,
                                        s = r.activeLabel,
                                        u = r.offset; return Object(M.cloneElement)(n, { viewBox: ut(ut({}, u), {}, { x: u.left, y: u.top }), active: i, label: s, payload: i ? a : [], coordinate: o }) }, e.renderBrush = function(t) { var n = e.props,
                                        r = n.margin,
                                        i = n.data,
                                        o = e.state,
                                        a = o.offset,
                                        s = o.dataStartIndex,
                                        u = o.dataEndIndex,
                                        c = o.updateId; return Object(M.cloneElement)(t, { key: t.key || "_recharts-brush", onChange: Object(V.d)(e.handleBrushChange, null, t.props.onChange), data: i, x: Object(W.g)(t.props.x) ? t.props.x : a.left, y: Object(W.g)(t.props.y) ? t.props.y : a.top + a.height + a.brushBottom - (r.bottom || 0), width: Object(W.g)(t.props.width) ? t.props.width : a.width, startIndex: s, endIndex: u, updateId: "brush-".concat(c) }) }, e.renderReferenceElement = function(t, n, r) { if (!t) return null; var i = nt(e).clipPathId,
                                        o = e.state,
                                        a = o.xAxisMap,
                                        s = o.yAxisMap,
                                        u = o.offset,
                                        c = t.props,
                                        l = c.xAxisId,
                                        h = c.yAxisId; return Object(M.cloneElement)(t, { key: t.key || "".concat(n, "-").concat(r), xAxis: a[l], yAxis: s[h], viewBox: { x: u.left, y: u.top, width: u.width, height: u.height }, clipPathId: i }) }, e.renderActivePoints = function(t) { var e = t.item,
                                        n = t.activePoint,
                                        r = t.basePoint,
                                        i = t.childIndex,
                                        o = t.isRange,
                                        a = [],
                                        s = e.props.key,
                                        u = e.item.props,
                                        c = u.activeDot,
                                        h = ut(ut({ index: i, dataKey: u.dataKey, cx: n.x, cy: n.y, r: 4, fill: Object(V.q)(e.item), strokeWidth: 2, stroke: "#fff", payload: n.payload, value: n.value, key: "".concat(s, "-activePoint-").concat(i) }, Object(Y.c)(c)), Object(Y.a)(c)); return a.push(l.renderActiveDot(c, h)), r ? a.push(l.renderActiveDot(c, ut(ut({}, h), {}, { cx: r.x, cy: r.y, key: "".concat(s, "-basePoint-").concat(i) }))) : o && a.push(null), a }, e.renderGraphicChild = function(t, n, r) { var i = e.filterFormatItem(t, n, r); if (!i) return null; var o = e.getTooltipEventType(),
                                        a = e.state,
                                        s = a.isTooltipActive,
                                        u = a.tooltipAxis,
                                        c = a.activeTooltipIndex,
                                        l = a.activeLabel,
                                        h = e.props.children,
                                        f = Object(B.b)(h, C.a.displayName),
                                        p = i.props,
                                        d = p.points,
                                        y = p.isRange,
                                        v = p.baseLine,
                                        m = i.item.props,
                                        g = m.activeDot,
                                        w = !m.hide && s && f && g && c >= 0,
                                        x = {}; "axis" !== o && f && "click" === f.props.trigger ? x = { onClick: Object(V.d)(e.handleItemMouseEnter, null, t.props.onCLick) } : "axis" !== o && (x = { onMouseLeave: Object(V.d)(e.handleItemMouseLeave, null, t.props.onMouseLeave), onMouseEnter: Object(V.d)(e.handleItemMouseEnter, null, t.props.onMouseEnter) }); var O = Object(M.cloneElement)(t, ut(ut({}, i.props), x)); if (w) { var _, j; if (u.dataKey && !u.allowDuplicatedCategory) { var S = "function" === typeof u.dataKey ? function(t) { return "function" === typeof u.dataKey ? u.dataKey(t.payload) : null } : "payload.".concat(u.dataKey.toString());
                                            _ = Object(W.a)(d, S, l), j = y && v && Object(W.a)(v, S, l) } else _ = d[c], j = y && v && v[c]; if (!b()(_)) return [O].concat(it(e.renderActivePoints({ item: i, activePoint: _, basePoint: j, childIndex: c, isRange: y }))) } return y ? [O, null, null] : [O, null] }, e.renderCustomized = function(t, n, r) { return Object(M.cloneElement)(t, ut(ut({ key: "recharts-customized-".concat(r) }, e.props), e.state)) }, e.uniqueChartId = b()(t.id) ? Object(W.j)("recharts") : t.id, e.clipPathId = "".concat(e.uniqueChartId, "-clip"), t.throttleDelay && (e.triggeredAfterMouseMove = h()(e.triggeredAfterMouseMove, t.throttleDelay)), e.state = {}, e } return e = l, (n = [{ key: "componentDidMount", value: function() { b()(this.props.syncId) || this.addListener() } }, { key: "componentDidUpdate", value: function(t) { b()(t.syncId) && !b()(this.props.syncId) && this.addListener(), !b()(t.syncId) && b()(this.props.syncId) && this.removeListener() } }, { key: "componentWillUnmount", value: function() { this.clearDeferId(), b()(this.props.syncId) || this.removeListener(), this.cancelThrottledTriggerAfterMouseMove() } }, { key: "cancelThrottledTriggerAfterMouseMove", value: function() { "function" === typeof this.triggeredAfterMouseMove.cancel && this.triggeredAfterMouseMove.cancel() } }, { key: "getTooltipEventType", value: function() { var t = Object(B.b)(this.props.children, C.a.displayName); if (t && x()(t.props.shared)) { var e = t.props.shared ? "axis" : "item"; return f.indexOf(e) >= 0 ? e : u } return u } }, { key: "getMouseInfo", value: function(t) { if (!this.container) return null; var e = Object(F.b)(this.container),
                                        n = Object(F.a)(t, e),
                                        r = this.inRange(n.chartX, n.chartY); if (!r) return null; var i = this.state,
                                        o = i.xAxisMap,
                                        a = i.yAxisMap; if ("axis" !== this.getTooltipEventType() && o && a) { var s = Object(W.b)(o).scale,
                                            u = Object(W.b)(a).scale,
                                            c = s && s.invert ? s.invert(n.chartX) : null,
                                            l = u && u.invert ? u.invert(n.chartY) : null; return ut(ut({}, n), {}, { xValue: c, yValue: l }) } var h = mt(this.state, this.props.data, this.props.layout, r); return h ? ut(ut({}, n), h) : null } }, { key: "getCursorRectangle", value: function() { var t = this.props.layout,
                                        e = this.state,
                                        n = e.activeCoordinate,
                                        r = e.offset,
                                        i = e.tooltipAxisBandSize,
                                        o = i / 2; return { stroke: "none", fill: "#ccc", x: "horizontal" === t ? n.x - o : r.left + .5, y: "horizontal" === t ? r.top + .5 : n.y - o, width: "horizontal" === t ? i : r.width - 1, height: "horizontal" === t ? r.height - 1 : i } } }, { key: "getCursorPoints", value: function() { var t, e, n, r, i = this.props.layout,
                                        o = this.state,
                                        a = o.activeCoordinate,
                                        s = o.offset; if ("horizontal" === i) n = t = a.x, e = s.top, r = s.top + s.height;
                                    else if ("vertical" === i) r = e = a.y, t = s.left, n = s.left + s.width;
                                    else if (!b()(a.cx) || !b()(a.cy)) { if ("centric" !== i) { var u = a.cx,
                                                c = a.cy,
                                                l = a.radius,
                                                h = a.startAngle,
                                                f = a.endAngle; return { points: [Object(G.c)(u, c, l, h), Object(G.c)(u, c, l, f)], cx: u, cy: c, radius: l, startAngle: h, endAngle: f } } var p = a.cx,
                                            d = a.cy,
                                            y = a.innerRadius,
                                            v = a.outerRadius,
                                            m = a.angle,
                                            g = Object(G.c)(p, d, y, m),
                                            w = Object(G.c)(p, d, v, m);
                                        t = g.x, e = g.y, n = w.x, r = w.y } return [{ x: t, y: e }, { x: n, y: r }] } }, { key: "inRange", value: function(t, e) { var n = this.props.layout; if ("horizontal" === n || "vertical" === n) { var r = this.state.offset; return t >= r.left && t <= r.left + r.width && e >= r.top && e <= r.top + r.height ? { x: t, y: e } : null } var i = this.state,
                                        o = i.angleAxisMap,
                                        a = i.radiusAxisMap; if (o && a) { var s = Object(W.b)(o); return Object(G.b)({ x: t, y: e }, s) } return null } }, { key: "parseEventsOfWrapper", value: function() { var t = this.props.children,
                                        e = this.getTooltipEventType(),
                                        n = Object(B.b)(t, C.a.displayName),
                                        r = {}; return n && "axis" === e && (r = "click" === n.props.trigger ? { onClick: this.handleClick } : { onMouseEnter: this.handleMouseEnter, onMouseMove: this.handleMouseMove, onMouseLeave: this.handleMouseLeave, onTouchMove: this.handleTouchMove, onTouchStart: this.handleTouchStart, onTouchEnd: this.handleTouchEnd }), ut(ut({}, Object(Y.a)(this.props, this.handleOuterEvent)), r) } }, { key: "addListener", value: function() { H.b.on(H.a, this.handleReceiveSyncEvent), H.b.setMaxListeners && H.b._maxListeners && H.b.setMaxListeners(H.b._maxListeners + 1) } }, { key: "removeListener", value: function() { H.b.removeListener(H.a, this.handleReceiveSyncEvent), H.b.setMaxListeners && H.b._maxListeners && H.b.setMaxListeners(H.b._maxListeners - 1) } }, { key: "triggerSyncEvent", value: function(t) { var e = this.props.syncId;
                                    b()(e) || H.b.emit(H.a, e, this.uniqueChartId, t) } }, { key: "applySyncEvent", value: function(t) { var e = this.props,
                                        n = e.layout,
                                        r = e.syncMethod,
                                        i = this.state.updateId,
                                        o = t.dataStartIndex,
                                        a = t.dataEndIndex; if (b()(t.dataStartIndex) && b()(t.dataEndIndex))
                                        if (b()(t.activeTooltipIndex)) this.setState(t);
                                        else { var s = t.chartX,
                                                u = t.chartY,
                                                c = t.activeTooltipIndex,
                                                l = this.state,
                                                h = l.offset,
                                                f = l.tooltipTicks; if (!h) return; if ("function" === typeof r) c = r(f, t);
                                            else if ("value" === r) { c = -1; for (var p = 0; p < f.length; p++)
                                                    if (f[p].value === t.activeLabel) { c = p; break } } var d = ut(ut({}, h), {}, { x: h.left, y: h.top }),
                                                y = Math.min(s, d.x + d.width),
                                                v = Math.min(u, d.y + d.height),
                                                m = f[c] && f[c].value,
                                                g = vt(this.state, this.props.data, c),
                                                w = f[c] ? { x: "horizontal" === n ? f[c].coordinate : y, y: "horizontal" === n ? v : f[c].coordinate } : ht;
                                            this.setState(ut(ut({}, t), {}, { activeLabel: m, activeCoordinate: w, activePayload: g, activeTooltipIndex: c })) }
                                    else this.setState(ut({ dataStartIndex: o, dataEndIndex: a }, O({ props: this.props, dataStartIndex: o, dataEndIndex: a, updateId: i }, this.state))) } }, { key: "filterFormatItem", value: function(t, e, n) { for (var r = this.state.formattedGraphicalItems, i = 0, o = r.length; i < o; i++) { var a = r[i]; if (a.item === t || a.props.key === t.key || e === Object(B.c)(a.item.type) && n === a.childIndex) return a } return null } }, { key: "renderAxis", value: function(t, e, n, r) { var i = this.props,
                                        o = i.width,
                                        a = i.height; return j.a.createElement(L.a, $({}, t, { className: "recharts-".concat(t.axisType, " ").concat(t.axisType), key: e.key || "".concat(n, "-").concat(r), viewBox: { x: 0, y: 0, width: o, height: a }, ticksGenerator: this.axesTicksGenerator })) } }, { key: "renderClipPath", value: function() { var t = this.clipPathId,
                                        e = this.state.offset,
                                        n = e.left,
                                        r = e.top,
                                        i = e.height,
                                        o = e.width; return j.a.createElement("defs", null, j.a.createElement("clipPath", { id: t }, j.a.createElement("rect", { x: n, y: r, height: i, width: o }))) } }, { key: "getXScales", value: function() { var t = this.state.xAxisMap; return t ? Object.entries(t).reduce((function(t, e) { var n = J(e, 2),
                                            r = n[0],
                                            i = n[1]; return ut(ut({}, t), {}, ct({}, r, i.scale)) }), {}) : null } }, { key: "getYScales", value: function() { var t = this.state.yAxisMap; return t ? Object.entries(t).reduce((function(t, e) { var n = J(e, 2),
                                            r = n[0],
                                            i = n[1]; return ut(ut({}, t), {}, ct({}, r, i.scale)) }), {}) : null } }, { key: "getXScaleByAxisId", value: function(t) { var e, n; return null === (e = this.state.xAxisMap) || void 0 === e || null === (n = e[t]) || void 0 === n ? void 0 : n.scale } }, { key: "getYScaleByAxisId", value: function(t) { var e, n; return null === (e = this.state.yAxisMap) || void 0 === e || null === (n = e[t]) || void 0 === n ? void 0 : n.scale } }, { key: "getItemByXY", value: function(t) { var e = this.state.formattedGraphicalItems; if (e && e.length)
                                        for (var n = 0, r = e.length; n < r; n++) { var i = e[n],
                                                o = i.props,
                                                a = i.item,
                                                s = Object(B.c)(a.type); if ("Bar" === s) { var u = (o.data || []).find((function(e) { return Object(I.b)(t, e) })); if (u) return { graphicalItem: i, payload: u } } else if ("RadialBar" === s) { var c = (o.data || []).find((function(e) { return Object(G.b)(t, e) })); if (c) return { graphicalItem: i, payload: c } } }
                                    return null } }, { key: "render", value: function() { var t = this; if (!Object(B.h)(this)) return null; var e = this.props,
                                        n = e.children,
                                        r = e.className,
                                        i = e.width,
                                        o = e.height,
                                        a = e.style,
                                        s = e.compact,
                                        u = K(e, ["children", "className", "width", "height", "style", "compact"]),
                                        c = Object(Y.c)(u),
                                        l = { CartesianGrid: { handler: this.renderGrid, once: !0 }, ReferenceArea: { handler: this.renderReferenceElement }, ReferenceLine: { handler: this.renderReferenceElement }, ReferenceDot: { handler: this.renderReferenceElement }, XAxis: { handler: this.renderXAxis }, YAxis: { handler: this.renderYAxis }, Brush: { handler: this.renderBrush, once: !0 }, Bar: { handler: this.renderGraphicChild }, Line: { handler: this.renderGraphicChild }, Area: { handler: this.renderGraphicChild }, Radar: { handler: this.renderGraphicChild }, RadialBar: { handler: this.renderGraphicChild }, Scatter: { handler: this.renderGraphicChild }, Pie: { handler: this.renderGraphicChild }, Funnel: { handler: this.renderGraphicChild }, Tooltip: { handler: this.renderCursor, once: !0 }, PolarGrid: { handler: this.renderPolarGrid, once: !0 }, PolarAngleAxis: { handler: this.renderPolarAxis }, PolarRadiusAxis: { handler: this.renderPolarAxis }, Customized: { handler: this.renderCustomized } }; if (s) return j.a.createElement(k.a, $({}, c, { width: i, height: o }), this.renderClipPath(), Object(B.g)(n, l)); var h = this.parseEventsOfWrapper(); return j.a.createElement("div", $({ className: E()("recharts-wrapper", r), style: ut({ position: "relative", cursor: "default", width: i, height: o }, a) }, h, { ref: function(e) { t.container = e } }), j.a.createElement(k.a, $({}, c, { width: i, height: o }), this.renderClipPath(), Object(B.g)(n, l)), this.renderLegend(), this.renderTooltip()) } }]) && Z(e.prototype, n), i && Z(e, i), l }(M.Component), e.displayName = r, e.defaultProps = ut({ layout: "horizontal", stackOffset: "none", barCategoryGap: "10%", barGap: 4, margin: { top: 5, right: 5, bottom: 5, left: 5 }, reverseStackOrder: !1, syncMethod: "index" }, g), e.getDerivedStateFromProps = function(t, e) { var n = t.data,
                                r = t.children,
                                i = t.width,
                                o = t.height,
                                a = t.layout,
                                s = t.stackOffset,
                                u = t.margin; if (b()(e.updateId)) { var c = bt(t); return ut(ut(ut({}, c), {}, { updateId: 0 }, O(ut(ut({ props: t }, c), {}, { updateId: 0 }), e)), {}, { prevData: n, prevWidth: i, prevHeight: o, prevLayout: a, prevStackOffset: s, prevMargin: u, prevChildren: r }) } if (n !== e.prevData || i !== e.prevWidth || o !== e.prevHeight || a !== e.prevLayout || s !== e.prevStackOffset || !Object(X.a)(u, e.prevMargin)) { var l = bt(t),
                                    h = { chartX: e.chartX, chartY: e.chartY, isTooltipActive: e.isTooltipActive },
                                    f = ut(ut({}, mt(e, n, a)), {}, { updateId: e.updateId + 1 }),
                                    p = ut(ut(ut({}, l), h), f); return ut(ut(ut({}, p), O(ut({ props: t }, p), e)), {}, { prevData: n, prevWidth: i, prevHeight: o, prevLayout: a, prevStackOffset: s, prevMargin: u, prevChildren: r }) } if (!Object(B.e)(r, e.prevChildren)) { var d = !b()(n) ? e.updateId : e.updateId + 1; return ut(ut({ updateId: d }, O(ut(ut({ props: t }, e), {}, { updateId: d }), e)), {}, { prevChildren: r }) } return null }, e.renderActiveDot = function(t, e) { var n; return n = Object(M.isValidElement)(t) ? Object(M.cloneElement)(t, e) : c()(t) ? t(e) : j.a.createElement(R.a, e), j.a.createElement(A.a, { className: "recharts-active-dot", key: e.key }, n) }, n } }).call(this, n(525).setImmediate, n(525).clearImmediate) }, 1593: function(t, e, n) { var r = n(1673),
                i = n(1674),
                o = n(777),
                a = n(162),
                s = n(1530);
            t.exports = function(t, e, n) { var u = a(t) ? r : i; return n && s(t, e, n) && (e = void 0), u(t, o(e, 3)) } }, 1594: function(t, e) { t.exports = function(t, e, n, r) { for (var i = t.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i;)
                    if (e(t[o], o, t)) return o;
                return -1 } }, 1595: function(t, e, n) { var r = n(802),
                i = 1 / 0;
            t.exports = function(t) { return t ? (t = r(t)) === i || t === -1 / 0 ? 17976931348623157e292 * (t < 0 ? -1 : 1) : t === t ? t : 0 : 0 === t ? t : 0 } }, 1596: function(t, e, n) { var r = n(1690)();
            t.exports = r }, 1597: function(t, e) { var n = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
            t.exports = function(t) { return n.test(t) } }, 1598: function(t, e, n) { var r = n(1599),
                i = n(1699),
                o = n(331);
            t.exports = function(t) { return t && t.length ? r(t, o, i) : void 0 } }, 1599: function(t, e, n) { var r = n(332);
            t.exports = function(t, e, n) { for (var i = -1, o = t.length; ++i < o;) { var a = t[i],
                        s = e(a); if (null != s && (void 0 === u ? s === s && !r(s) : n(s, u))) var u = s,
                        c = a } return c } }, 1600: function(t, e, n) { var r = n(777),
                i = n(1704);
            t.exports = function(t, e) { return t && t.length ? i(t, r(e, 2)) : [] } }, 1601: function(t, e, n) { "use strict";
            n.d(e, "a", (function() { return l })); var r = n(1),
                i = n.n(r),
                o = n(406),
                a = n.n(o),
                s = n(1478);

            function u() { return u = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]) } return t }, u.apply(this, arguments) }

            function c(t, e) { if (null == t) return {}; var n, r, i = function(t, e) { if (null == t) return {}; var n, r, i = {},
                        o = Object.keys(t); for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || (i[n] = t[n]); return i }(t, e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(t); for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n]) } return i }

            function l(t) { var e = t.children,
                    n = t.width,
                    r = t.height,
                    o = t.viewBox,
                    l = t.className,
                    h = t.style,
                    f = c(t, ["children", "width", "height", "viewBox", "className", "style"]),
                    p = o || { width: n, height: r, x: 0, y: 0 },
                    d = a()("recharts-surface", l); return i.a.createElement("svg", u({}, Object(s.c)(f, !0, !0), { className: d, width: n, height: r, style: h, viewBox: "".concat(p.x, " ").concat(p.y, " ").concat(p.width, " ").concat(p.height), version: "1.1" }), e) } }, 1602: function(t, e, n) { "use strict";
            n.d(e, "b", (function() { return s })); var r = n(412),
                i = n(3),
                o = n.n(i),
                a = o.a.mark(s);

            function s(t, e) { var n, i, s, u, c, l, h; return o.a.wrap((function(o) { for (;;) switch (o.prev = o.next) {
                        case 0:
                            if (void 0 !== e) { o.next = 21; break }
                            n = Object(r.a)(t), o.prev = 2, n.s();
                        case 4:
                            if ((i = n.n()).done) { o.next = 11; break } if (!(null != (s = i.value) && (s = +s) >= s)) { o.next = 9; break } return o.next = 9, s;
                        case 9:
                            o.next = 4; break;
                        case 11:
                            o.next = 16; break;
                        case 13:
                            o.prev = 13, o.t0 = o.catch(2), n.e(o.t0);
                        case 16:
                            return o.prev = 16, n.f(), o.finish(16);
                        case 19:
                            o.next = 40; break;
                        case 21:
                            u = -1, c = Object(r.a)(t), o.prev = 23, c.s();
                        case 25:
                            if ((l = c.n()).done) { o.next = 32; break } if (h = l.value, !(null != (h = e(h, ++u, t)) && (h = +h) >= h)) { o.next = 30; break } return o.next = 30, h;
                        case 30:
                            o.next = 25; break;
                        case 32:
                            o.next = 37; break;
                        case 34:
                            o.prev = 34, o.t1 = o.catch(23), c.e(o.t1);
                        case 37:
                            return o.prev = 37, c.f(), o.finish(37);
                        case 40:
                        case "end":
                            return o.stop() } }), a, null, [
                    [2, 13, 16, 19],
                    [23, 34, 37, 40]
                ]) }
            e.a = function(t) { return null === t ? NaN : +t } }, 1603: function(t, e, n) { "use strict";
            e.a = function(t, e) { return t = +t, e = +e,
                    function(n) { return t * (1 - n) + e * n } } }, 1604: function(t, e, n) { "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }), e.flip = c; var r, i = n(1723),
                o = (r = i) && r.__esModule ? r : { default: r };

            function a(t, e) { return "MathExpression" === t.type ? function(t, e) { switch (t = function(t, e) { var n = (0, o.default)(t.left, t.right, e),
                            r = a(n.left, e),
                            i = a(n.right, e); "MathExpression" === r.type && "MathExpression" === i.type && ("/" === r.operator && "*" === i.operator || "-" === r.operator && "+" === i.operator || "*" === r.operator && "/" === i.operator || "+" === r.operator && "-" === i.operator) && (s(r.right, i.right) ? n = (0, o.default)(r.left, i.left, e) : s(r.right, i.left) && (n = (0, o.default)(r.left, i.right, e)), r = a(n.left, e), i = a(n.right, e)); return t.left = r, t.right = i, t }(t, e), t.operator) {
                        case "+":
                        case "-":
                            return function(t, e) { var n = t,
                                    r = n.left,
                                    i = n.right,
                                    o = n.operator; if ("CssVariable" === r.type || "CssVariable" === i.type) return t; if (0 === i.value) return r; if (0 === r.value && "+" === o) return i; if (0 === r.value && "-" === o) return l(i);
                                r.type === i.type && u(r.type) && ((t = Object.assign({}, r)).value = "+" === o ? r.value + i.value : r.value - i.value); if (u(r.type) && ("+" === i.operator || "-" === i.operator) && "MathExpression" === i.type) { if (r.type === i.left.type) return (t = Object.assign({}, t)).left = a({ type: "MathExpression", operator: o, left: r, right: i.left }, e), t.right = i.right, t.operator = "-" === o ? c(i.operator) : i.operator, a(t, e); if (r.type === i.right.type) return (t = Object.assign({}, t)).left = a({ type: "MathExpression", operator: "-" === o ? c(i.operator) : i.operator, left: r, right: i.right }, e), t.right = i.left, a(t, e) } if ("MathExpression" === r.type && ("+" === r.operator || "-" === r.operator) && u(i.type)) { if (i.type === r.left.type) return (t = Object.assign({}, r)).left = a({ type: "MathExpression", operator: o, left: r.left, right: i }, e), a(t, e); if (i.type === r.right.type) return t = Object.assign({}, r), "-" === r.operator ? (t.right = a({ type: "MathExpression", operator: "-" === o ? "+" : "-", left: i, right: r.right }, e), t.operator = "-" === o ? "-" : "+") : t.right = a({ type: "MathExpression", operator: o, left: r.right, right: i }, e), t.right.value < 0 && (t.right.value *= -1, t.operator = "-" === t.operator ? "+" : "-"), a(t, e) } return t }(t, e);
                        case "/":
                            return function(t, e) { if (!u(t.right.type)) return t; if ("Value" !== t.right.type) throw new Error('Cannot divide by "' + t.right.unit + '", number expected'); if (0 === t.right.value) throw new Error("Cannot divide by zero"); if ("MathExpression" === t.left.type) return u(t.left.left.type) && u(t.left.right.type) ? (t.left.left.value /= t.right.value, t.left.right.value /= t.right.value, a(t.left, e)) : t; if (u(t.left.type)) return t.left.value /= t.right.value, t.left; return t }(t, e);
                        case "*":
                            return function(t) { if ("MathExpression" === t.left.type && "Value" === t.right.type) { if (u(t.left.left.type) && u(t.left.right.type)) return t.left.left.value *= t.right.value, t.left.right.value *= t.right.value, t.left } else { if (u(t.left.type) && "Value" === t.right.type) return t.left.value *= t.right.value, t.left; if ("Value" === t.left.type && "MathExpression" === t.right.type) { if (u(t.right.left.type) && u(t.right.right.type)) return t.right.left.value *= t.left.value, t.right.right.value *= t.left.value, t.right } else if ("Value" === t.left.type && u(t.right.type)) return t.right.value *= t.left.value, t.right } return t }(t) } return t }(t, e) : "Calc" === t.type ? a(t.value, e) : t }

            function s(t, e) { return t.type === e.type && t.value === e.value }

            function u(t) { switch (t) {
                    case "LengthValue":
                    case "AngleValue":
                    case "TimeValue":
                    case "FrequencyValue":
                    case "ResolutionValue":
                    case "EmValue":
                    case "ExValue":
                    case "ChValue":
                    case "RemValue":
                    case "VhValue":
                    case "VwValue":
                    case "VminValue":
                    case "VmaxValue":
                    case "PercentageValue":
                    case "Value":
                        return !0 } return !1 }

            function c(t) { return "+" === t ? "-" : "+" }

            function l(t) { return u(t.type) ? t.value = -t.value : "MathExpression" == t.type && (t.left = l(t.left), t.right = l(t.right)), t }
            e.default = a }, 1605: function(t, e, n) {
            (function(e) { for (var r = n(1726), i = "undefined" === typeof window ? e : window, o = ["moz", "webkit"], a = "AnimationFrame", s = i["request" + a], u = i["cancel" + a] || i["cancelRequest" + a], c = 0; !s && c < o.length; c++) s = i[o[c] + "Request" + a], u = i[o[c] + "Cancel" + a] || i[o[c] + "CancelRequest" + a]; if (!s || !u) { var l = 0,
                        h = 0,
                        f = [];
                    s = function(t) { if (0 === f.length) { var e = r(),
                                n = Math.max(0, 16.666666666666668 - (e - l));
                            l = n + e, setTimeout((function() { var t = f.slice(0);
                                f.length = 0; for (var e = 0; e < t.length; e++)
                                    if (!t[e].cancelled) try { t[e].callback(l) } catch (n) { setTimeout((function() { throw n }), 0) } }), Math.round(n)) } return f.push({ handle: ++h, callback: t, cancelled: !1 }), h }, u = function(t) { for (var e = 0; e < f.length; e++) f[e].handle === t && (f[e].cancelled = !0) } }
                t.exports = function(t) { return s.call(i, t) }, t.exports.cancel = function() { u.apply(i, arguments) }, t.exports.polyfill = function(t) { t || (t = i), t.requestAnimationFrame = s, t.cancelAnimationFrame = u } }).call(this, n(81)) }, 1606: function(t, e, n) { "use strict"; var r = s(n(1728)),
                i = s(n(1732)),
                o = s(n(1610)),
                a = s(n(1607));

            function s(t) { return t && t.__esModule ? t : { default: t } }
            t.exports = { Transition: a.default, TransitionGroup: o.default, ReplaceTransition: i.default, CSSTransition: r.default } }, 1607: function(t, e, n) { "use strict";
            e.__esModule = !0, e.default = e.EXITING = e.ENTERED = e.ENTERING = e.EXITED = e.UNMOUNTED = void 0; var r = function(t) { if (t && t.__esModule) return t; var e = {}; if (null != t)
                        for (var n in t)
                            if (Object.prototype.hasOwnProperty.call(t, n)) { var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, n) : {};
                                r.get || r.set ? Object.defineProperty(e, n, r) : e[n] = t[n] }
                    return e.default = t, e }(n(32)),
                i = s(n(1)),
                o = s(n(111)),
                a = n(1608);
            n(1609);

            function s(t) { return t && t.__esModule ? t : { default: t } } var u = "unmounted";
            e.UNMOUNTED = u; var c = "exited";
            e.EXITED = c; var l = "entering";
            e.ENTERING = l; var h = "entered";
            e.ENTERED = h; var f = "exiting";
            e.EXITING = f; var p = function(t) { var e, n;

                function r(e, n) { var r;
                    r = t.call(this, e, n) || this; var i, o = n.transitionGroup,
                        a = o && !o.isMounting ? e.enter : e.appear; return r.appearStatus = null, e.in ? a ? (i = c, r.appearStatus = l) : i = h : i = e.unmountOnExit || e.mountOnEnter ? u : c, r.state = { status: i }, r.nextCallback = null, r }
                n = t, (e = r).prototype = Object.create(n.prototype), e.prototype.constructor = e, e.__proto__ = n; var a = r.prototype; return a.getChildContext = function() { return { transitionGroup: null } }, r.getDerivedStateFromProps = function(t, e) { return t.in && e.status === u ? { status: c } : null }, a.componentDidMount = function() { this.updateStatus(!0, this.appearStatus) }, a.componentDidUpdate = function(t) { var e = null; if (t !== this.props) { var n = this.state.status;
                        this.props.in ? n !== l && n !== h && (e = l) : n !== l && n !== h || (e = f) }
                    this.updateStatus(!1, e) }, a.componentWillUnmount = function() { this.cancelNextCallback() }, a.getTimeouts = function() { var t, e, n, r = this.props.timeout; return t = e = n = r, null != r && "number" !== typeof r && (t = r.exit, e = r.enter, n = void 0 !== r.appear ? r.appear : e), { exit: t, enter: e, appear: n } }, a.updateStatus = function(t, e) { if (void 0 === t && (t = !1), null !== e) { this.cancelNextCallback(); var n = o.default.findDOMNode(this);
                        e === l ? this.performEnter(n, t) : this.performExit(n) } else this.props.unmountOnExit && this.state.status === c && this.setState({ status: u }) }, a.performEnter = function(t, e) { var n = this,
                        r = this.props.enter,
                        i = this.context.transitionGroup ? this.context.transitionGroup.isMounting : e,
                        o = this.getTimeouts(),
                        a = i ? o.appear : o.enter;
                    e || r ? (this.props.onEnter(t, i), this.safeSetState({ status: l }, (function() { n.props.onEntering(t, i), n.onTransitionEnd(t, a, (function() { n.safeSetState({ status: h }, (function() { n.props.onEntered(t, i) })) })) }))) : this.safeSetState({ status: h }, (function() { n.props.onEntered(t) })) }, a.performExit = function(t) { var e = this,
                        n = this.props.exit,
                        r = this.getTimeouts();
                    n ? (this.props.onExit(t), this.safeSetState({ status: f }, (function() { e.props.onExiting(t), e.onTransitionEnd(t, r.exit, (function() { e.safeSetState({ status: c }, (function() { e.props.onExited(t) })) })) }))) : this.safeSetState({ status: c }, (function() { e.props.onExited(t) })) }, a.cancelNextCallback = function() { null !== this.nextCallback && (this.nextCallback.cancel(), this.nextCallback = null) }, a.safeSetState = function(t, e) { e = this.setNextCallback(e), this.setState(t, e) }, a.setNextCallback = function(t) { var e = this,
                        n = !0; return this.nextCallback = function(r) { n && (n = !1, e.nextCallback = null, t(r)) }, this.nextCallback.cancel = function() { n = !1 }, this.nextCallback }, a.onTransitionEnd = function(t, e, n) { this.setNextCallback(n); var r = null == e && !this.props.addEndListener;
                    t && !r ? (this.props.addEndListener && this.props.addEndListener(t, this.nextCallback), null != e && setTimeout(this.nextCallback, e)) : setTimeout(this.nextCallback, 0) }, a.render = function() { var t = this.state.status; if (t === u) return null; var e = this.props,
                        n = e.children,
                        r = function(t, e) { if (null == t) return {}; var n, r, i = {},
                                o = Object.keys(t); for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || (i[n] = t[n]); return i }(e, ["children"]); if (delete r.in, delete r.mountOnEnter, delete r.unmountOnExit, delete r.appear, delete r.enter, delete r.exit, delete r.timeout, delete r.addEndListener, delete r.onEnter, delete r.onEntering, delete r.onEntered, delete r.onExit, delete r.onExiting, delete r.onExited, "function" === typeof n) return n(t, r); var o = i.default.Children.only(n); return i.default.cloneElement(o, r) }, r }(i.default.Component);

            function d() {}
            p.contextTypes = { transitionGroup: r.object }, p.childContextTypes = { transitionGroup: function() {} }, p.propTypes = {}, p.defaultProps = { in: !1, mountOnEnter: !1, unmountOnExit: !1, appear: !1, enter: !0, exit: !0, onEnter: d, onEntering: d, onEntered: d, onExit: d, onExiting: d, onExited: d }, p.UNMOUNTED = 0, p.EXITED = 1, p.ENTERING = 2, p.ENTERED = 3, p.EXITING = 4; var y = (0, a.polyfill)(p);
            e.default = y }, 1608: function(t, e, n) { "use strict";

            function r() { var t = this.constructor.getDerivedStateFromProps(this.props, this.state);
                null !== t && void 0 !== t && this.setState(t) }

            function i(t) { this.setState(function(e) { var n = this.constructor.getDerivedStateFromProps(t, e); return null !== n && void 0 !== n ? n : null }.bind(this)) }

            function o(t, e) { try { var n = this.props,
                        r = this.state;
                    this.props = t, this.state = e, this.__reactInternalSnapshotFlag = !0, this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(n, r) } finally { this.props = n, this.state = r } }

            function a(t) { var e = t.prototype; if (!e || !e.isReactComponent) throw new Error("Can only polyfill class components"); if ("function" !== typeof t.getDerivedStateFromProps && "function" !== typeof e.getSnapshotBeforeUpdate) return t; var n = null,
                    a = null,
                    s = null; if ("function" === typeof e.componentWillMount ? n = "componentWillMount" : "function" === typeof e.UNSAFE_componentWillMount && (n = "UNSAFE_componentWillMount"), "function" === typeof e.componentWillReceiveProps ? a = "componentWillReceiveProps" : "function" === typeof e.UNSAFE_componentWillReceiveProps && (a = "UNSAFE_componentWillReceiveProps"), "function" === typeof e.componentWillUpdate ? s = "componentWillUpdate" : "function" === typeof e.UNSAFE_componentWillUpdate && (s = "UNSAFE_componentWillUpdate"), null !== n || null !== a || null !== s) { var u = t.displayName || t.name,
                        c = "function" === typeof t.getDerivedStateFromProps ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()"; throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n" + u + " uses " + c + " but also contains the following legacy lifecycles:" + (null !== n ? "\n  " + n : "") + (null !== a ? "\n  " + a : "") + (null !== s ? "\n  " + s : "") + "\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks") } if ("function" === typeof t.getDerivedStateFromProps && (e.componentWillMount = r, e.componentWillReceiveProps = i), "function" === typeof e.getSnapshotBeforeUpdate) { if ("function" !== typeof e.componentDidUpdate) throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");
                    e.componentWillUpdate = o; var l = e.componentDidUpdate;
                    e.componentDidUpdate = function(t, e, n) { var r = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : n;
                        l.call(this, t, e, r) } } return t }
            n.r(e), n.d(e, "polyfill", (function() { return a })), r.__suppressDeprecationWarning = !0, i.__suppressDeprecationWarning = !0, o.__suppressDeprecationWarning = !0 }, 1609: function(t, e, n) { "use strict";
            e.__esModule = !0, e.classNamesShape = e.timeoutsShape = void 0; var r;
            (r = n(32)) && r.__esModule;
            e.timeoutsShape = null;
            e.classNamesShape = null }, 1610: function(t, e, n) { "use strict";
            e.__esModule = !0, e.default = void 0; var r = s(n(32)),
                i = s(n(1)),
                o = n(1608),
                a = n(1733);

            function s(t) { return t && t.__esModule ? t : { default: t } }

            function u() { return u = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]) } return t }, u.apply(this, arguments) }

            function c(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t } var l = Object.values || function(t) { return Object.keys(t).map((function(e) { return t[e] })) },
                h = function(t) { var e, n;

                    function r(e, n) { var r, i = (r = t.call(this, e, n) || this).handleExited.bind(c(c(r))); return r.state = { handleExited: i, firstRender: !0 }, r }
                    n = t, (e = r).prototype = Object.create(n.prototype), e.prototype.constructor = e, e.__proto__ = n; var o = r.prototype; return o.getChildContext = function() { return { transitionGroup: { isMounting: !this.appeared } } }, o.componentDidMount = function() { this.appeared = !0, this.mounted = !0 }, o.componentWillUnmount = function() { this.mounted = !1 }, r.getDerivedStateFromProps = function(t, e) { var n = e.children,
                            r = e.handleExited; return { children: e.firstRender ? (0, a.getInitialChildMapping)(t, r) : (0, a.getNextChildMapping)(t, n, r), firstRender: !1 } }, o.handleExited = function(t, e) { var n = (0, a.getChildMapping)(this.props.children);
                        t.key in n || (t.props.onExited && t.props.onExited(e), this.mounted && this.setState((function(e) { var n = u({}, e.children); return delete n[t.key], { children: n } }))) }, o.render = function() { var t = this.props,
                            e = t.component,
                            n = t.childFactory,
                            r = function(t, e) { if (null == t) return {}; var n, r, i = {},
                                    o = Object.keys(t); for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || (i[n] = t[n]); return i }(t, ["component", "childFactory"]),
                            o = l(this.state.children).map(n); return delete r.appear, delete r.enter, delete r.exit, null === e ? o : i.default.createElement(e, r, o) }, r }(i.default.Component);
            h.childContextTypes = { transitionGroup: r.default.object.isRequired }, h.propTypes = {}, h.defaultProps = { component: "div", childFactory: function(t) { return t } }; var f = (0, o.polyfill)(h);
            e.default = f, t.exports = e.default }, 1611: function(t, e, n) { "use strict";
            n.d(e, "a", (function() { return k })); var r = n(240),
                i = n.n(r),
                o = n(511),
                a = n.n(o),
                s = n(1494),
                u = n.n(s),
                c = n(1740),
                l = n.n(c),
                h = n(162),
                f = n.n(h),
                p = n(1),
                d = n.n(p),
                y = n(1518),
                v = n(1495),
                m = n(1505),
                g = n(1509),
                b = n(1478);

            function w(t) { return function(t) { if (Array.isArray(t)) return x(t) }(t) || function(t) { if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t) }(t) || function(t, e) { if (!t) return; if ("string" === typeof t) return x(t, e); var n = Object.prototype.toString.call(t).slice(8, -1); "Object" === n && t.constructor && (n = t.constructor.name); if ("Map" === n || "Set" === n) return Array.from(t); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return x(t, e) }(t) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

            function x(t, e) {
                (null == e || e > t.length) && (e = t.length); for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]; return r }

            function O() { return O = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]) } return t }, O.apply(this, arguments) }

            function _(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function M(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? _(Object(n), !0).forEach((function(e) { j(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : _(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

            function j(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t }

            function S(t, e) { if (null == t) return {}; var n, r, i = function(t, e) { if (null == t) return {}; var n, r, i = {},
                        o = Object.keys(t); for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || (i[n] = t[n]); return i }(t, e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(t); for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n]) } return i } var E = { valueAccessor: function(t) { return f()(t.value) ? l()(t.value) : t.value } };

            function k(t) { var e = t.data,
                    n = t.valueAccessor,
                    r = t.dataKey,
                    i = t.clockWise,
                    o = t.id,
                    a = t.textBreakAll,
                    s = S(t, ["data", "valueAccessor", "dataKey", "clockWise", "id", "textBreakAll"]); return e && e.length ? d.a.createElement(v.a, { className: "recharts-label-list" }, e.map((function(t, e) { var c = u()(r) ? n(t, e) : Object(g.w)(t && t.payload, r),
                        l = u()(o) ? {} : { id: "".concat(o, "-").concat(e) }; return d.a.createElement(y.a, O({}, Object(b.c)(t, !0), s, l, { parentViewBox: t.parentViewBox, index: e, value: c, textBreakAll: a, viewBox: y.a.parseViewBox(u()(i) ? t : M(M({}, t), {}, { clockWise: i })), key: "label-".concat(e) })) }))) : null }

            function A(t, e) { return t ? !0 === t ? d.a.createElement(k, { key: "labelList-implicit", data: e }) : d.a.isValidElement(t) || a()(t) ? d.a.createElement(k, { key: "labelList-implicit", data: e, content: t }) : i()(t) ? d.a.createElement(k, O({ data: e }, t, { key: "labelList-implicit" })) : null : null }
            k.displayName = "LabelList", k.renderCallByParent = function(t, e) { var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]; if (!t || !t.children && n && !t.label) return null; var r = t.children,
                    i = Object(m.a)(r, k.displayName).map((function(t, n) { return Object(p.cloneElement)(t, { data: e, key: "labelList-".concat(n) }) })); if (!n) return i; var o = A(t.label, e); return [o].concat(w(i)) }, k.defaultProps = E }, 1612: function(t, e, n) { "use strict";
            n.d(e, "a", (function() { return r })); var r = function() { return null };
            r.displayName = "XAxis", r.defaultProps = { allowDecimals: !0, hide: !1, orientation: "bottom", width: 0, height: 30, mirror: !1, xAxisId: 0, tickCount: 5, type: "category", domain: [0, "auto"], padding: { left: 0, right: 0 }, allowDataOverflow: !1, scale: "auto", reversed: !1, allowDuplicatedCategory: !0 } }, 1613: function(t, e, n) { "use strict";
            n.d(e, "a", (function() { return r })); var r = function() { return null };
            r.displayName = "YAxis", r.defaultProps = { allowDuplicatedCategory: !0, allowDecimals: !0, hide: !1, orientation: "left", width: 60, height: 0, mirror: !1, yAxisId: 0, tickCount: 5, type: "number", domain: [0, "auto"], padding: { top: 0, bottom: 0 }, allowDataOverflow: !1, scale: "auto", reversed: !1 } }, 1638: function(t, e, n) { "use strict";
            n.r(e), n.d(e, "scaleBand", (function() { return r.a })), n.d(e, "scalePoint", (function() { return r.b })), n.d(e, "scaleIdentity", (function() { return a })), n.d(e, "scaleLinear", (function() { return i.a })), n.d(e, "scaleLog", (function() { return b })), n.d(e, "scaleSymlog", (function() { return _ })), n.d(e, "scaleOrdinal", (function() { return M.a })), n.d(e, "scaleImplicit", (function() { return M.b })), n.d(e, "scalePow", (function() { return A })), n.d(e, "scaleSqrt", (function() { return C })), n.d(e, "scaleRadial", (function() { return D })), n.d(e, "scaleQuantile", (function() { return G })), n.d(e, "scaleQuantize", (function() { return H })), n.d(e, "scaleThreshold", (function() { return Y })), n.d(e, "scaleTime", (function() { return En })), n.d(e, "scaleUtc", (function() { return kn })), n.d(e, "scaleSequential", (function() { return Dn })), n.d(e, "scaleSequentialLog", (function() { return Nn })), n.d(e, "scaleSequentialPow", (function() { return In })), n.d(e, "scaleSequentialSqrt", (function() { return Bn })), n.d(e, "scaleSequentialSymlog", (function() { return Rn })), n.d(e, "scaleSequentialQuantile", (function() { return Ln })), n.d(e, "scaleDiverging", (function() { return Wn })), n.d(e, "scaleDivergingLog", (function() { return Vn })), n.d(e, "scaleDivergingPow", (function() { return Gn })), n.d(e, "scaleDivergingSqrt", (function() { return Xn })), n.d(e, "scaleDivergingSymlog", (function() { return Un })), n.d(e, "tickFormat", (function() { return Hn.a })); var r = n(1569),
                i = n(1501),
                o = n(1553);

            function a(t) { var e;

                function n(t) { return null == t || isNaN(t = +t) ? e : t } return n.invert = n, n.domain = n.range = function(e) { return arguments.length ? (t = Array.from(e, o.a), n) : t.slice() }, n.unknown = function(t) { return arguments.length ? (e = t, n) : e }, n.copy = function() { return a(t).unknown(e) }, t = arguments.length ? Array.from(t, o.a) : [0, 1], Object(i.b)(n) } var s = n(1823),
                u = n(1833);

            function c(t, e) { var n, r = 0,
                    i = (t = t.slice()).length - 1,
                    o = t[r],
                    a = t[i]; return a < o && (n = r, r = i, i = n, n = o, o = a, a = n), t[r] = e.floor(o), t[i] = e.ceil(a), t } var l = n(1502),
                h = n(1487);

            function f(t) { return Math.log(t) }

            function p(t) { return Math.exp(t) }

            function d(t) { return -Math.log(-t) }

            function y(t) { return -Math.exp(-t) }

            function v(t) { return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t }

            function m(t) { return function(e) { return -t(-e) } }

            function g(t) { var e, n, r = t(f, p),
                    i = r.domain,
                    o = 10;

                function a() { return e = function(t) { return t === Math.E ? Math.log : 10 === t && Math.log10 || 2 === t && Math.log2 || (t = Math.log(t), function(e) { return Math.log(e) / t }) }(o), n = function(t) { return 10 === t ? v : t === Math.E ? Math.exp : function(e) { return Math.pow(t, e) } }(o), i()[0] < 0 ? (e = m(e), n = m(n), t(d, y)) : t(f, p), r } return r.base = function(t) { return arguments.length ? (o = +t, a()) : o }, r.domain = function(t) { return arguments.length ? (i(t), a()) : i() }, r.ticks = function(t) { var r, a = i(),
                        u = a[0],
                        c = a[a.length - 1];
                    (r = c < u) && (p = u, u = c, c = p); var l, h, f, p = e(u),
                        d = e(c),
                        y = null == t ? 10 : +t,
                        v = []; if (!(o % 1) && d - p < y) { if (p = Math.floor(p), d = Math.ceil(d), u > 0) { for (; p <= d; ++p)
                                for (h = 1, l = n(p); h < o; ++h)
                                    if (!((f = l * h) < u)) { if (f > c) break;
                                        v.push(f) } } else
                            for (; p <= d; ++p)
                                for (h = o - 1, l = n(p); h >= 1; --h)
                                    if (!((f = l * h) < u)) { if (f > c) break;
                                        v.push(f) }
                        2 * v.length < y && (v = Object(s.a)(u, c, y)) } else v = Object(s.a)(p, d, Math.min(d - p, y)).map(n); return r ? v.reverse() : v }, r.tickFormat = function(t, i) { if (null == i && (i = 10 === o ? ".0e" : ","), "function" !== typeof i && (i = Object(u.a)(i)), t === 1 / 0) return i;
                    null == t && (t = 10); var a = Math.max(1, o * t / r.ticks().length); return function(t) { var r = t / n(Math.round(e(t))); return r * o < o - .5 && (r *= o), r <= a ? i(t) : "" } }, r.nice = function() { return i(c(i(), { floor: function(t) { return n(Math.floor(e(t))) }, ceil: function(t) { return n(Math.ceil(e(t))) } })) }, r }

            function b() { var t = g(Object(l.d)()).domain([1, 10]); return t.copy = function() { return Object(l.a)(t, b()).base(t.base()) }, h.b.apply(t, arguments), t }

            function w(t) { return function(e) { return Math.sign(e) * Math.log1p(Math.abs(e / t)) } }

            function x(t) { return function(e) { return Math.sign(e) * Math.expm1(Math.abs(e)) * t } }

            function O(t) { var e = 1,
                    n = t(w(e), x(e)); return n.constant = function(n) { return arguments.length ? t(w(e = +n), x(e)) : e }, Object(i.b)(n) }

            function _() { var t = O(Object(l.d)()); return t.copy = function() { return Object(l.a)(t, _()).constant(t.constant()) }, h.b.apply(t, arguments) } var M = n(1532);

            function j(t) { return function(e) { return e < 0 ? -Math.pow(-e, t) : Math.pow(e, t) } }

            function S(t) { return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t) }

            function E(t) { return t < 0 ? -t * t : t * t }

            function k(t) { var e = t(l.c, l.c),
                    n = 1;

                function r() { return 1 === n ? t(l.c, l.c) : .5 === n ? t(S, E) : t(j(n), j(1 / n)) } return e.exponent = function(t) { return arguments.length ? (n = +t, r()) : n }, Object(i.b)(e) }

            function A() { var t = k(Object(l.d)()); return t.copy = function() { return Object(l.a)(t, A()).exponent(t.exponent()) }, h.b.apply(t, arguments), t }

            function C() { return A.apply(null, arguments).exponent(.5) }

            function P(t) { return Math.sign(t) * t * t }

            function T(t) { return Math.sign(t) * Math.sqrt(Math.abs(t)) }

            function D() { var t, e = Object(l.b)(),
                    n = [0, 1],
                    r = !1;

                function a(n) { var i = T(e(n)); return isNaN(i) ? t : r ? Math.round(i) : i } return a.invert = function(t) { return e.invert(P(t)) }, a.domain = function(t) { return arguments.length ? (e.domain(t), a) : e.domain() }, a.range = function(t) { return arguments.length ? (e.range((n = Array.from(t, o.a)).map(P)), a) : n.slice() }, a.rangeRound = function(t) { return a.range(t).round(!0) }, a.round = function(t) { return arguments.length ? (r = !!t, a) : r }, a.clamp = function(t) { return arguments.length ? (e.clamp(t), a) : e.clamp() }, a.unknown = function(e) { return arguments.length ? (t = e, a) : t }, a.copy = function() { return D(e.domain(), n).round(r).clamp(e.clamp()).unknown(t) }, h.b.apply(a, arguments), Object(i.b)(a) } var N = n(412);

            function R(t, e) { var n; if (void 0 === e) { var r, i = Object(N.a)(t); try { for (i.s(); !(r = i.n()).done;) { var o = r.value;
                            null != o && (n < o || void 0 === n && o >= o) && (n = o) } } catch (l) { i.e(l) } finally { i.f() } } else { var a, s = -1,
                        u = Object(N.a)(t); try { for (u.s(); !(a = u.n()).done;) { var c = a.value;
                            null != (c = e(c, ++s, t)) && (n < c || void 0 === n && c >= c) && (n = c) } } catch (l) { u.e(l) } finally { u.f() } } return n }

            function I(t, e) { var n; if (void 0 === e) { var r, i = Object(N.a)(t); try { for (i.s(); !(r = i.n()).done;) { var o = r.value;
                            null != o && (n > o || void 0 === n && o >= o) && (n = o) } } catch (l) { i.e(l) } finally { i.f() } } else { var a, s = -1,
                        u = Object(N.a)(t); try { for (u.s(); !(a = u.n()).done;) { var c = a.value;
                            null != (c = e(c, ++s, t)) && (n > c || void 0 === n && c >= c) && (n = c) } } catch (l) { u.e(l) } finally { u.f() } } return n } var B = n(1552);

            function L(t, e) { for (var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : t.length - 1, i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : B.a; r > n;) { if (r - n > 600) { var o = r - n + 1,
                            a = e - n + 1,
                            s = Math.log(o),
                            u = .5 * Math.exp(2 * s / 3),
                            c = .5 * Math.sqrt(s * u * (o - u) / o) * (a - o / 2 < 0 ? -1 : 1),
                            l = Math.max(n, Math.floor(e - a * u / o + c)),
                            h = Math.min(r, Math.floor(e + (o - a) * u / o + c));
                        L(t, e, l, h, i) } var f = t[e],
                        p = n,
                        d = r; for (z(t, n, e), i(t[r], f) > 0 && z(t, n, r); p < d;) { for (z(t, p, d), ++p, --d; i(t[p], f) < 0;) ++p; for (; i(t[d], f) > 0;) --d }
                    0 === i(t[n], f) ? z(t, n, d) : z(t, ++d, r), d <= e && (n = d + 1), e <= d && (r = d - 1) } return t }

            function z(t, e, n) { var r = t[e];
                t[e] = t[n], t[n] = r } var F = n(1602);

            function W(t, e, n) { if (r = (t = Float64Array.from(Object(F.b)(t, n))).length) { if ((e = +e) <= 0 || r < 2) return I(t); if (e >= 1) return R(t); var r, i = (r - 1) * e,
                        o = Math.floor(i),
                        a = R(L(t, o).subarray(0, o + 1)); return a + (I(t.subarray(o + 1)) - a) * (i - o) } }

            function V(t, e) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : F.a; if (r = t.length) { if ((e = +e) <= 0 || r < 2) return +n(t[0], 0, t); if (e >= 1) return +n(t[r - 1], r - 1, t); var r, i = (r - 1) * e,
                        o = Math.floor(i),
                        a = +n(t[o], o, t),
                        s = +n(t[o + 1], o + 1, t); return a + (s - a) * (i - o) } } var U = n(1824);

            function G() { var t, e = [],
                    n = [],
                    r = [];

                function i() { var t = 0,
                        i = Math.max(1, n.length); for (r = new Array(i - 1); ++t < i;) r[t - 1] = V(e, t / i); return o }

                function o(e) { return null == e || isNaN(e = +e) ? t : n[Object(U.a)(r, e)] } return o.invertExtent = function(t) { var i = n.indexOf(t); return i < 0 ? [NaN, NaN] : [i > 0 ? r[i - 1] : e[0], i < r.length ? r[i] : e[e.length - 1]] }, o.domain = function(t) { if (!arguments.length) return e.slice();
                    e = []; var n, r = Object(N.a)(t); try { for (r.s(); !(n = r.n()).done;) { var o = n.value;
                            null == o || isNaN(o = +o) || e.push(o) } } catch (a) { r.e(a) } finally { r.f() } return e.sort(B.a), i() }, o.range = function(t) { return arguments.length ? (n = Array.from(t), i()) : n.slice() }, o.unknown = function(e) { return arguments.length ? (t = e, o) : t }, o.quantiles = function() { return r.slice() }, o.copy = function() { return G().domain(e).range(n).unknown(t) }, h.b.apply(o, arguments) } var X = n(10);

            function H() { var t, e = 0,
                    n = 1,
                    r = 1,
                    o = [.5],
                    a = [0, 1];

                function s(e) { return null != e && e <= e ? a[Object(U.a)(o, e, 0, r)] : t }

                function u() { var t = -1; for (o = new Array(r); ++t < r;) o[t] = ((t + 1) * n - (t - r) * e) / (r + 1); return s } return s.domain = function(t) { var r, i; return arguments.length ? (r = t, i = Object(X.a)(r, 2), e = i[0], n = i[1], e = +e, n = +n, u()) : [e, n] }, s.range = function(t) { return arguments.length ? (r = (a = Array.from(t)).length - 1, u()) : a.slice() }, s.invertExtent = function(t) { var i = a.indexOf(t); return i < 0 ? [NaN, NaN] : i < 1 ? [e, o[0]] : i >= r ? [o[r - 1], n] : [o[i - 1], o[i]] }, s.unknown = function(e) { return arguments.length ? (t = e, s) : s }, s.thresholds = function() { return o.slice() }, s.copy = function() { return H().domain([e, n]).range(a).unknown(t) }, h.b.apply(Object(i.b)(s), arguments) }

            function Y() { var t, e = [.5],
                    n = [0, 1],
                    r = 1;

                function i(i) { return null != i && i <= i ? n[Object(U.a)(e, i, 0, r)] : t } return i.domain = function(t) { return arguments.length ? (e = Array.from(t), r = Math.min(e.length, n.length - 1), i) : e.slice() }, i.range = function(t) { return arguments.length ? (n = Array.from(t), r = Math.min(e.length, n.length - 1), i) : n.slice() }, i.invertExtent = function(t) { var r = n.indexOf(t); return [e[r - 1], e[r]] }, i.unknown = function(e) { return arguments.length ? (t = e, i) : t }, i.copy = function() { return Y().domain(e).range(n).unknown(t) }, h.b.apply(i, arguments) } var q = n(1712),
                J = 1e3,
                $ = 6e4,
                K = 36e5,
                Z = 864e5,
                Q = 6048e5,
                tt = 2592e6,
                et = 31536e6,
                nt = new Date,
                rt = new Date;

            function it(t, e, n, r) {
                function i(e) { return t(e = 0 === arguments.length ? new Date : new Date(+e)), e } return i.floor = function(e) { return t(e = new Date(+e)), e }, i.ceil = function(n) { return t(n = new Date(n - 1)), e(n, 1), t(n), n }, i.round = function(t) { var e = i(t),
                        n = i.ceil(t); return t - e < n - t ? e : n }, i.offset = function(t, n) { return e(t = new Date(+t), null == n ? 1 : Math.floor(n)), t }, i.range = function(n, r, o) { var a, s = []; if (n = i.ceil(n), o = null == o ? 1 : Math.floor(o), !(n < r) || !(o > 0)) return s;
                    do { s.push(a = new Date(+n)), e(n, o), t(n) } while (a < n && n < r); return s }, i.filter = function(n) { return it((function(e) { if (e >= e)
                            for (; t(e), !n(e);) e.setTime(e - 1) }), (function(t, r) { if (t >= t)
                            if (r < 0)
                                for (; ++r <= 0;)
                                    for (; e(t, -1), !n(t););
                            else
                                for (; --r >= 0;)
                                    for (; e(t, 1), !n(t);); })) }, n && (i.count = function(e, r) { return nt.setTime(+e), rt.setTime(+r), t(nt), t(rt), Math.floor(n(nt, rt)) }, i.every = function(t) { return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? i.filter(r ? function(e) { return r(e) % t === 0 } : function(e) { return i.count(0, e) % t === 0 }) : i : null }), i } var ot = it((function() {}), (function(t, e) { t.setTime(+t + e) }), (function(t, e) { return e - t }));
            ot.every = function(t) { return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? it((function(e) { e.setTime(Math.floor(e / t) * t) }), (function(e, n) { e.setTime(+e + n * t) }), (function(e, n) { return (n - e) / t })) : ot : null }; var at = ot,
                st = (ot.range, it((function(t) { t.setTime(t - t.getMilliseconds()) }), (function(t, e) { t.setTime(+t + e * J) }), (function(t, e) { return (e - t) / J }), (function(t) { return t.getUTCSeconds() }))),
                ut = st,
                ct = (st.range, it((function(t) { t.setTime(t - t.getMilliseconds() - t.getSeconds() * J) }), (function(t, e) { t.setTime(+t + e * $) }), (function(t, e) { return (e - t) / $ }), (function(t) { return t.getMinutes() }))),
                lt = ct,
                ht = (ct.range, it((function(t) { t.setTime(t - t.getMilliseconds() - t.getSeconds() * J - t.getMinutes() * $) }), (function(t, e) { t.setTime(+t + e * K) }), (function(t, e) { return (e - t) / K }), (function(t) { return t.getHours() }))),
                ft = ht,
                pt = (ht.range, it((function(t) { return t.setHours(0, 0, 0, 0) }), (function(t, e) { return t.setDate(t.getDate() + e) }), (function(t, e) { return (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * $) / Z }), (function(t) { return t.getDate() - 1 }))),
                dt = pt;
            pt.range;

            function yt(t) { return it((function(e) { e.setDate(e.getDate() - (e.getDay() + 7 - t) % 7), e.setHours(0, 0, 0, 0) }), (function(t, e) { t.setDate(t.getDate() + 7 * e) }), (function(t, e) { return (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * $) / Q })) } var vt = yt(0),
                mt = yt(1),
                gt = yt(2),
                bt = yt(3),
                wt = yt(4),
                xt = yt(5),
                Ot = yt(6),
                _t = (vt.range, mt.range, gt.range, bt.range, wt.range, xt.range, Ot.range, it((function(t) { t.setDate(1), t.setHours(0, 0, 0, 0) }), (function(t, e) { t.setMonth(t.getMonth() + e) }), (function(t, e) { return e.getMonth() - t.getMonth() + 12 * (e.getFullYear() - t.getFullYear()) }), (function(t) { return t.getMonth() }))),
                Mt = _t,
                jt = (_t.range, it((function(t) { t.setMonth(0, 1), t.setHours(0, 0, 0, 0) }), (function(t, e) { t.setFullYear(t.getFullYear() + e) }), (function(t, e) { return e.getFullYear() - t.getFullYear() }), (function(t) { return t.getFullYear() })));
            jt.every = function(t) { return isFinite(t = Math.floor(t)) && t > 0 ? it((function(e) { e.setFullYear(Math.floor(e.getFullYear() / t) * t), e.setMonth(0, 1), e.setHours(0, 0, 0, 0) }), (function(e, n) { e.setFullYear(e.getFullYear() + n * t) })) : null }; var St = jt,
                Et = (jt.range, it((function(t) { t.setUTCSeconds(0, 0) }), (function(t, e) { t.setTime(+t + e * $) }), (function(t, e) { return (e - t) / $ }), (function(t) { return t.getUTCMinutes() }))),
                kt = Et,
                At = (Et.range, it((function(t) { t.setUTCMinutes(0, 0, 0) }), (function(t, e) { t.setTime(+t + e * K) }), (function(t, e) { return (e - t) / K }), (function(t) { return t.getUTCHours() }))),
                Ct = At,
                Pt = (At.range, it((function(t) { t.setUTCHours(0, 0, 0, 0) }), (function(t, e) { t.setUTCDate(t.getUTCDate() + e) }), (function(t, e) { return (e - t) / Z }), (function(t) { return t.getUTCDate() - 1 }))),
                Tt = Pt;
            Pt.range;

            function Dt(t) { return it((function(e) { e.setUTCDate(e.getUTCDate() - (e.getUTCDay() + 7 - t) % 7), e.setUTCHours(0, 0, 0, 0) }), (function(t, e) { t.setUTCDate(t.getUTCDate() + 7 * e) }), (function(t, e) { return (e - t) / Q })) } var Nt = Dt(0),
                Rt = Dt(1),
                It = Dt(2),
                Bt = Dt(3),
                Lt = Dt(4),
                zt = Dt(5),
                Ft = Dt(6),
                Wt = (Nt.range, Rt.range, It.range, Bt.range, Lt.range, zt.range, Ft.range, it((function(t) { t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0) }), (function(t, e) { t.setUTCMonth(t.getUTCMonth() + e) }), (function(t, e) { return e.getUTCMonth() - t.getUTCMonth() + 12 * (e.getUTCFullYear() - t.getUTCFullYear()) }), (function(t) { return t.getUTCMonth() }))),
                Vt = Wt,
                Ut = (Wt.range, it((function(t) { t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0) }), (function(t, e) { t.setUTCFullYear(t.getUTCFullYear() + e) }), (function(t, e) { return e.getUTCFullYear() - t.getUTCFullYear() }), (function(t) { return t.getUTCFullYear() })));
            Ut.every = function(t) { return isFinite(t = Math.floor(t)) && t > 0 ? it((function(e) { e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t) * t), e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0) }), (function(e, n) { e.setUTCFullYear(e.getUTCFullYear() + n * t) })) : null }; var Gt = Ut;
            Ut.range;

            function Xt(t, e, n, r, i, o) { var a = [
                    [ut, 1, J],
                    [ut, 5, 5e3],
                    [ut, 15, 15e3],
                    [ut, 30, 3e4],
                    [o, 1, $],
                    [o, 5, 3e5],
                    [o, 15, 9e5],
                    [o, 30, 18e5],
                    [i, 1, K],
                    [i, 3, 108e5],
                    [i, 6, 216e5],
                    [i, 12, 432e5],
                    [r, 1, Z],
                    [r, 2, 1728e5],
                    [n, 1, Q],
                    [e, 1, tt],
                    [e, 3, 7776e6],
                    [t, 1, et]
                ];

                function u(e, n, r) { var i = Math.abs(n - e) / r,
                        o = Object(q.a)((function(t) { return Object(X.a)(t, 3)[2] })).right(a, i); if (o === a.length) return t.every(Object(s.c)(e / et, n / et, r)); if (0 === o) return at.every(Math.max(Object(s.c)(e, n, r), 1)); var u = Object(X.a)(a[i / a[o - 1][2] < a[o][2] / i ? o - 1 : o], 2),
                        c = u[0],
                        l = u[1]; return c.every(l) } return [function(t, e, n) { var r = e < t; if (r) { var i = [e, t];
                        t = i[0], e = i[1] } var o = n && "function" === typeof n.range ? n : u(t, e, n),
                        a = o ? o.range(t, +e + 1) : []; return r ? a.reverse() : a }, u] } var Ht = Xt(Gt, Vt, Nt, Tt, Ct, kt),
                Yt = Object(X.a)(Ht, 2),
                qt = Yt[0],
                Jt = Yt[1],
                $t = Xt(St, Mt, vt, dt, ft, lt),
                Kt = Object(X.a)($t, 2),
                Zt = Kt[0],
                Qt = Kt[1];

            function te(t) { if (0 <= t.y && t.y < 100) { var e = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L); return e.setFullYear(t.y), e } return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L) }

            function ee(t) { if (0 <= t.y && t.y < 100) { var e = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L)); return e.setUTCFullYear(t.y), e } return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L)) }

            function ne(t, e, n) { return { y: t, m: e, d: n, H: 0, M: 0, S: 0, L: 0 } } var re, ie, oe, ae = { "-": "", _: " ", 0: "0" },
                se = /^\s*\d+/,
                ue = /^%/,
                ce = /[\\^$*+?|[\]().{}]/g;

            function le(t, e, n) { var r = t < 0 ? "-" : "",
                    i = (r ? -t : t) + "",
                    o = i.length; return r + (o < n ? new Array(n - o + 1).join(e) + i : i) }

            function he(t) { return t.replace(ce, "\\$&") }

            function fe(t) { return new RegExp("^(?:" + t.map(he).join("|") + ")", "i") }

            function pe(t) { return new Map(t.map((function(t, e) { return [t.toLowerCase(), e] }))) }

            function de(t, e, n) { var r = se.exec(e.slice(n, n + 1)); return r ? (t.w = +r[0], n + r[0].length) : -1 }

            function ye(t, e, n) { var r = se.exec(e.slice(n, n + 1)); return r ? (t.u = +r[0], n + r[0].length) : -1 }

            function ve(t, e, n) { var r = se.exec(e.slice(n, n + 2)); return r ? (t.U = +r[0], n + r[0].length) : -1 }

            function me(t, e, n) { var r = se.exec(e.slice(n, n + 2)); return r ? (t.V = +r[0], n + r[0].length) : -1 }

            function ge(t, e, n) { var r = se.exec(e.slice(n, n + 2)); return r ? (t.W = +r[0], n + r[0].length) : -1 }

            function be(t, e, n) { var r = se.exec(e.slice(n, n + 4)); return r ? (t.y = +r[0], n + r[0].length) : -1 }

            function we(t, e, n) { var r = se.exec(e.slice(n, n + 2)); return r ? (t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), n + r[0].length) : -1 }

            function xe(t, e, n) { var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(n, n + 6)); return r ? (t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), n + r[0].length) : -1 }

            function Oe(t, e, n) { var r = se.exec(e.slice(n, n + 1)); return r ? (t.q = 3 * r[0] - 3, n + r[0].length) : -1 }

            function _e(t, e, n) { var r = se.exec(e.slice(n, n + 2)); return r ? (t.m = r[0] - 1, n + r[0].length) : -1 }

            function Me(t, e, n) { var r = se.exec(e.slice(n, n + 2)); return r ? (t.d = +r[0], n + r[0].length) : -1 }

            function je(t, e, n) { var r = se.exec(e.slice(n, n + 3)); return r ? (t.m = 0, t.d = +r[0], n + r[0].length) : -1 }

            function Se(t, e, n) { var r = se.exec(e.slice(n, n + 2)); return r ? (t.H = +r[0], n + r[0].length) : -1 }

            function Ee(t, e, n) { var r = se.exec(e.slice(n, n + 2)); return r ? (t.M = +r[0], n + r[0].length) : -1 }

            function ke(t, e, n) { var r = se.exec(e.slice(n, n + 2)); return r ? (t.S = +r[0], n + r[0].length) : -1 }

            function Ae(t, e, n) { var r = se.exec(e.slice(n, n + 3)); return r ? (t.L = +r[0], n + r[0].length) : -1 }

            function Ce(t, e, n) { var r = se.exec(e.slice(n, n + 6)); return r ? (t.L = Math.floor(r[0] / 1e3), n + r[0].length) : -1 }

            function Pe(t, e, n) { var r = ue.exec(e.slice(n, n + 1)); return r ? n + r[0].length : -1 }

            function Te(t, e, n) { var r = se.exec(e.slice(n)); return r ? (t.Q = +r[0], n + r[0].length) : -1 }

            function De(t, e, n) { var r = se.exec(e.slice(n)); return r ? (t.s = +r[0], n + r[0].length) : -1 }

            function Ne(t, e) { return le(t.getDate(), e, 2) }

            function Re(t, e) { return le(t.getHours(), e, 2) }

            function Ie(t, e) { return le(t.getHours() % 12 || 12, e, 2) }

            function Be(t, e) { return le(1 + dt.count(St(t), t), e, 3) }

            function Le(t, e) { return le(t.getMilliseconds(), e, 3) }

            function ze(t, e) { return Le(t, e) + "000" }

            function Fe(t, e) { return le(t.getMonth() + 1, e, 2) }

            function We(t, e) { return le(t.getMinutes(), e, 2) }

            function Ve(t, e) { return le(t.getSeconds(), e, 2) }

            function Ue(t) { var e = t.getDay(); return 0 === e ? 7 : e }

            function Ge(t, e) { return le(vt.count(St(t) - 1, t), e, 2) }

            function Xe(t) { var e = t.getDay(); return e >= 4 || 0 === e ? wt(t) : wt.ceil(t) }

            function He(t, e) { return t = Xe(t), le(wt.count(St(t), t) + (4 === St(t).getDay()), e, 2) }

            function Ye(t) { return t.getDay() }

            function qe(t, e) { return le(mt.count(St(t) - 1, t), e, 2) }

            function Je(t, e) { return le(t.getFullYear() % 100, e, 2) }

            function $e(t, e) { return le((t = Xe(t)).getFullYear() % 100, e, 2) }

            function Ke(t, e) { return le(t.getFullYear() % 1e4, e, 4) }

            function Ze(t, e) { var n = t.getDay(); return le((t = n >= 4 || 0 === n ? wt(t) : wt.ceil(t)).getFullYear() % 1e4, e, 4) }

            function Qe(t) { var e = t.getTimezoneOffset(); return (e > 0 ? "-" : (e *= -1, "+")) + le(e / 60 | 0, "0", 2) + le(e % 60, "0", 2) }

            function tn(t, e) { return le(t.getUTCDate(), e, 2) }

            function en(t, e) { return le(t.getUTCHours(), e, 2) }

            function nn(t, e) { return le(t.getUTCHours() % 12 || 12, e, 2) }

            function rn(t, e) { return le(1 + Tt.count(Gt(t), t), e, 3) }

            function on(t, e) { return le(t.getUTCMilliseconds(), e, 3) }

            function an(t, e) { return on(t, e) + "000" }

            function sn(t, e) { return le(t.getUTCMonth() + 1, e, 2) }

            function un(t, e) { return le(t.getUTCMinutes(), e, 2) }

            function cn(t, e) { return le(t.getUTCSeconds(), e, 2) }

            function ln(t) { var e = t.getUTCDay(); return 0 === e ? 7 : e }

            function hn(t, e) { return le(Nt.count(Gt(t) - 1, t), e, 2) }

            function fn(t) { var e = t.getUTCDay(); return e >= 4 || 0 === e ? Lt(t) : Lt.ceil(t) }

            function pn(t, e) { return t = fn(t), le(Lt.count(Gt(t), t) + (4 === Gt(t).getUTCDay()), e, 2) }

            function dn(t) { return t.getUTCDay() }

            function yn(t, e) { return le(Rt.count(Gt(t) - 1, t), e, 2) }

            function vn(t, e) { return le(t.getUTCFullYear() % 100, e, 2) }

            function mn(t, e) { return le((t = fn(t)).getUTCFullYear() % 100, e, 2) }

            function gn(t, e) { return le(t.getUTCFullYear() % 1e4, e, 4) }

            function bn(t, e) { var n = t.getUTCDay(); return le((t = n >= 4 || 0 === n ? Lt(t) : Lt.ceil(t)).getUTCFullYear() % 1e4, e, 4) }

            function wn() { return "+0000" }

            function xn() { return "%" }

            function On(t) { return +t }

            function _n(t) { return Math.floor(+t / 1e3) }

            function Mn(t) { return new Date(t) }

            function jn(t) { return t instanceof Date ? +t : +new Date(+t) }

            function Sn(t, e, n, r, i, o, a, s, u, h) { var f = Object(l.b)(),
                    p = f.invert,
                    d = f.domain,
                    y = h(".%L"),
                    v = h(":%S"),
                    m = h("%I:%M"),
                    g = h("%I %p"),
                    b = h("%a %d"),
                    w = h("%b %d"),
                    x = h("%B"),
                    O = h("%Y");

                function _(t) { return (u(t) < t ? y : s(t) < t ? v : a(t) < t ? m : o(t) < t ? g : r(t) < t ? i(t) < t ? b : w : n(t) < t ? x : O)(t) } return f.invert = function(t) { return new Date(p(t)) }, f.domain = function(t) { return arguments.length ? d(Array.from(t, jn)) : d().map(Mn) }, f.ticks = function(e) { var n = d(); return t(n[0], n[n.length - 1], null == e ? 10 : e) }, f.tickFormat = function(t, e) { return null == e ? _ : h(e) }, f.nice = function(t) { var n = d(); return t && "function" === typeof t.range || (t = e(n[0], n[n.length - 1], null == t ? 10 : t)), t ? d(c(n, t)) : f }, f.copy = function() { return Object(l.a)(f, Sn(t, e, n, r, i, o, a, s, u, h)) }, f }

            function En() { return h.b.apply(Sn(Zt, Qt, St, Mt, vt, dt, ft, lt, ut, ie).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments) }

            function kn() { return h.b.apply(Sn(qt, Jt, Gt, Vt, Nt, Tt, Ct, kt, ut, oe).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments) }
            re = function(t) { var e = t.dateTime,
                    n = t.date,
                    r = t.time,
                    i = t.periods,
                    o = t.days,
                    a = t.shortDays,
                    s = t.months,
                    u = t.shortMonths,
                    c = fe(i),
                    l = pe(i),
                    h = fe(o),
                    f = pe(o),
                    p = fe(a),
                    d = pe(a),
                    y = fe(s),
                    v = pe(s),
                    m = fe(u),
                    g = pe(u),
                    b = { a: function(t) { return a[t.getDay()] }, A: function(t) { return o[t.getDay()] }, b: function(t) { return u[t.getMonth()] }, B: function(t) { return s[t.getMonth()] }, c: null, d: Ne, e: Ne, f: ze, g: $e, G: Ze, H: Re, I: Ie, j: Be, L: Le, m: Fe, M: We, p: function(t) { return i[+(t.getHours() >= 12)] }, q: function(t) { return 1 + ~~(t.getMonth() / 3) }, Q: On, s: _n, S: Ve, u: Ue, U: Ge, V: He, w: Ye, W: qe, x: null, X: null, y: Je, Y: Ke, Z: Qe, "%": xn },
                    w = { a: function(t) { return a[t.getUTCDay()] }, A: function(t) { return o[t.getUTCDay()] }, b: function(t) { return u[t.getUTCMonth()] }, B: function(t) { return s[t.getUTCMonth()] }, c: null, d: tn, e: tn, f: an, g: mn, G: bn, H: en, I: nn, j: rn, L: on, m: sn, M: un, p: function(t) { return i[+(t.getUTCHours() >= 12)] }, q: function(t) { return 1 + ~~(t.getUTCMonth() / 3) }, Q: On, s: _n, S: cn, u: ln, U: hn, V: pn, w: dn, W: yn, x: null, X: null, y: vn, Y: gn, Z: wn, "%": xn },
                    x = { a: function(t, e, n) { var r = p.exec(e.slice(n)); return r ? (t.w = d.get(r[0].toLowerCase()), n + r[0].length) : -1 }, A: function(t, e, n) { var r = h.exec(e.slice(n)); return r ? (t.w = f.get(r[0].toLowerCase()), n + r[0].length) : -1 }, b: function(t, e, n) { var r = m.exec(e.slice(n)); return r ? (t.m = g.get(r[0].toLowerCase()), n + r[0].length) : -1 }, B: function(t, e, n) { var r = y.exec(e.slice(n)); return r ? (t.m = v.get(r[0].toLowerCase()), n + r[0].length) : -1 }, c: function(t, n, r) { return M(t, e, n, r) }, d: Me, e: Me, f: Ce, g: we, G: be, H: Se, I: Se, j: je, L: Ae, m: _e, M: Ee, p: function(t, e, n) { var r = c.exec(e.slice(n)); return r ? (t.p = l.get(r[0].toLowerCase()), n + r[0].length) : -1 }, q: Oe, Q: Te, s: De, S: ke, u: ye, U: ve, V: me, w: de, W: ge, x: function(t, e, r) { return M(t, n, e, r) }, X: function(t, e, n) { return M(t, r, e, n) }, y: we, Y: be, Z: xe, "%": Pe };

                function O(t, e) { return function(n) { var r, i, o, a = [],
                            s = -1,
                            u = 0,
                            c = t.length; for (n instanceof Date || (n = new Date(+n)); ++s < c;) 37 === t.charCodeAt(s) && (a.push(t.slice(u, s)), null != (i = ae[r = t.charAt(++s)]) ? r = t.charAt(++s) : i = "e" === r ? " " : "0", (o = e[r]) && (r = o(n, i)), a.push(r), u = s + 1); return a.push(t.slice(u, s)), a.join("") } }

                function _(t, e) { return function(n) { var r, i, o = ne(1900, void 0, 1); if (M(o, t, n += "", 0) != n.length) return null; if ("Q" in o) return new Date(o.Q); if ("s" in o) return new Date(1e3 * o.s + ("L" in o ? o.L : 0)); if (e && !("Z" in o) && (o.Z = 0), "p" in o && (o.H = o.H % 12 + 12 * o.p), void 0 === o.m && (o.m = "q" in o ? o.q : 0), "V" in o) { if (o.V < 1 || o.V > 53) return null; "w" in o || (o.w = 1), "Z" in o ? (i = (r = ee(ne(o.y, 0, 1))).getUTCDay(), r = i > 4 || 0 === i ? Rt.ceil(r) : Rt(r), r = Tt.offset(r, 7 * (o.V - 1)), o.y = r.getUTCFullYear(), o.m = r.getUTCMonth(), o.d = r.getUTCDate() + (o.w + 6) % 7) : (i = (r = te(ne(o.y, 0, 1))).getDay(), r = i > 4 || 0 === i ? mt.ceil(r) : mt(r), r = dt.offset(r, 7 * (o.V - 1)), o.y = r.getFullYear(), o.m = r.getMonth(), o.d = r.getDate() + (o.w + 6) % 7) } else("W" in o || "U" in o) && ("w" in o || (o.w = "u" in o ? o.u % 7 : "W" in o ? 1 : 0), i = "Z" in o ? ee(ne(o.y, 0, 1)).getUTCDay() : te(ne(o.y, 0, 1)).getDay(), o.m = 0, o.d = "W" in o ? (o.w + 6) % 7 + 7 * o.W - (i + 5) % 7 : o.w + 7 * o.U - (i + 6) % 7); return "Z" in o ? (o.H += o.Z / 100 | 0, o.M += o.Z % 100, ee(o)) : te(o) } }

                function M(t, e, n, r) { for (var i, o, a = 0, s = e.length, u = n.length; a < s;) { if (r >= u) return -1; if (37 === (i = e.charCodeAt(a++))) { if (i = e.charAt(a++), !(o = x[i in ae ? e.charAt(a++) : i]) || (r = o(t, n, r)) < 0) return -1 } else if (i != n.charCodeAt(r++)) return -1 } return r } return b.x = O(n, b), b.X = O(r, b), b.c = O(e, b), w.x = O(n, w), w.X = O(r, w), w.c = O(e, w), { format: function(t) { var e = O(t += "", b); return e.toString = function() { return t }, e }, parse: function(t) { var e = _(t += "", !1); return e.toString = function() { return t }, e }, utcFormat: function(t) { var e = O(t += "", w); return e.toString = function() { return t }, e }, utcParse: function(t) { var e = _(t += "", !0); return e.toString = function() { return t }, e } } }({ dateTime: "%x, %X", date: "%-m/%-d/%Y", time: "%-I:%M:%S %p", periods: ["AM", "PM"], days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] }), ie = re.format, re.parse, oe = re.utcFormat, re.utcParse; var An = n(1780),
                Cn = n(1825);

            function Pn() { var t, e, n, r, i, o = 0,
                    a = 1,
                    s = l.c,
                    u = !1;

                function c(e) { return null == e || isNaN(e = +e) ? i : s(0 === n ? .5 : (e = (r(e) - t) * n, u ? Math.max(0, Math.min(1, e)) : e)) }

                function h(t) { return function(e) { var n, r, i, o; return arguments.length ? (n = e, i = (r = Object(X.a)(n, 2))[0], o = r[1], s = t(i, o), c) : [s(0), s(1)] } } return c.domain = function(i) { var s, u; return arguments.length ? (s = i, u = Object(X.a)(s, 2), o = u[0], a = u[1], t = r(o = +o), e = r(a = +a), n = t === e ? 0 : 1 / (e - t), c) : [o, a] }, c.clamp = function(t) { return arguments.length ? (u = !!t, c) : u }, c.interpolator = function(t) { return arguments.length ? (s = t, c) : s }, c.range = h(An.a), c.rangeRound = h(Cn.a), c.unknown = function(t) { return arguments.length ? (i = t, c) : i },
                    function(i) { return r = i, t = i(o), e = i(a), n = t === e ? 0 : 1 / (e - t), c } }

            function Tn(t, e) { return e.domain(t.domain()).interpolator(t.interpolator()).clamp(t.clamp()).unknown(t.unknown()) }

            function Dn() { var t = Object(i.b)(Pn()(l.c)); return t.copy = function() { return Tn(t, Dn()) }, h.a.apply(t, arguments) }

            function Nn() { var t = g(Pn()).domain([1, 10]); return t.copy = function() { return Tn(t, Nn()).base(t.base()) }, h.a.apply(t, arguments) }

            function Rn() { var t = O(Pn()); return t.copy = function() { return Tn(t, Rn()).constant(t.constant()) }, h.a.apply(t, arguments) }

            function In() { var t = k(Pn()); return t.copy = function() { return Tn(t, In()).exponent(t.exponent()) }, h.a.apply(t, arguments) }

            function Bn() { return In.apply(null, arguments).exponent(.5) }

            function Ln() { var t = [],
                    e = l.c;

                function n(n) { if (null != n && !isNaN(n = +n)) return e((Object(U.a)(t, n, 1) - 1) / (t.length - 1)) } return n.domain = function(e) { if (!arguments.length) return t.slice();
                    t = []; var r, i = Object(N.a)(e); try { for (i.s(); !(r = i.n()).done;) { var o = r.value;
                            null == o || isNaN(o = +o) || t.push(o) } } catch (a) { i.e(a) } finally { i.f() } return t.sort(B.a), n }, n.interpolator = function(t) { return arguments.length ? (e = t, n) : e }, n.range = function() { return t.map((function(n, r) { return e(r / (t.length - 1)) })) }, n.quantiles = function(e) { return Array.from({ length: e + 1 }, (function(n, r) { return W(t, r / e) })) }, n.copy = function() { return Ln(e).domain(t) }, h.a.apply(n, arguments) }

            function zn(t, e) { void 0 === e && (e = t, t = An.a); for (var n = 0, r = e.length - 1, i = e[0], o = new Array(r < 0 ? 0 : r); n < r;) o[n] = t(i, i = e[++n]); return function(t) { var e = Math.max(0, Math.min(r - 1, Math.floor(t *= r))); return o[e](t - e) } }

            function Fn() { var t, e, n, r, i, o, a, s = 0,
                    u = .5,
                    c = 1,
                    h = 1,
                    f = l.c,
                    p = !1;

                function d(t) { return isNaN(t = +t) ? a : (t = .5 + ((t = +o(t)) - e) * (h * t < h * e ? r : i), f(p ? Math.max(0, Math.min(1, t)) : t)) }

                function y(t) { return function(e) { var n, r, i, o, a; return arguments.length ? (n = e, i = (r = Object(X.a)(n, 3))[0], o = r[1], a = r[2], f = zn(t, [i, o, a]), d) : [f(0), f(.5), f(1)] } } return d.domain = function(a) { var l, f; return arguments.length ? (l = a, f = Object(X.a)(l, 3), s = f[0], u = f[1], c = f[2], t = o(s = +s), e = o(u = +u), n = o(c = +c), r = t === e ? 0 : .5 / (e - t), i = e === n ? 0 : .5 / (n - e), h = e < t ? -1 : 1, d) : [s, u, c] }, d.clamp = function(t) { return arguments.length ? (p = !!t, d) : p }, d.interpolator = function(t) { return arguments.length ? (f = t, d) : f }, d.range = y(An.a), d.rangeRound = y(Cn.a), d.unknown = function(t) { return arguments.length ? (a = t, d) : a },
                    function(a) { return o = a, t = a(s), e = a(u), n = a(c), r = t === e ? 0 : .5 / (e - t), i = e === n ? 0 : .5 / (n - e), h = e < t ? -1 : 1, d } }

            function Wn() { var t = Object(i.b)(Fn()(l.c)); return t.copy = function() { return Tn(t, Wn()) }, h.a.apply(t, arguments) }

            function Vn() { var t = g(Fn()).domain([.1, 1, 10]); return t.copy = function() { return Tn(t, Vn()).base(t.base()) }, h.a.apply(t, arguments) }

            function Un() { var t = O(Fn()); return t.copy = function() { return Tn(t, Un()).constant(t.constant()) }, h.a.apply(t, arguments) }

            function Gn() { var t = k(Fn()); return t.copy = function() { return Tn(t, Gn()).exponent(t.exponent()) }, h.a.apply(t, arguments) }

            function Xn() { return Gn.apply(null, arguments).exponent(.5) } var Hn = n(1568) }, 1639: function(t, e, n) { "use strict";
            n.d(e, "a", (function() { return et })); var r = n(162),
                i = n.n(r),
                o = n(1550),
                a = n.n(o),
                s = n(511),
                u = n.n(s),
                c = n(1),
                l = n.n(c),
                h = function() {};

            function f(t, e, n) { t._context.bezierCurveTo((2 * t._x0 + t._x1) / 3, (2 * t._y0 + t._y1) / 3, (t._x0 + 2 * t._x1) / 3, (t._y0 + 2 * t._y1) / 3, (t._x0 + 4 * t._x1 + e) / 6, (t._y0 + 4 * t._y1 + n) / 6) }

            function p(t) { this._context = t }
            p.prototype = { areaStart: function() { this._line = 0 }, areaEnd: function() { this._line = NaN }, lineStart: function() { this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0 }, lineEnd: function() { switch (this._point) {
                        case 3:
                            f(this, this._x1, this._y1);
                        case 2:
                            this._context.lineTo(this._x1, this._y1) }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line }, point: function(t, e) { switch (t = +t, e = +e, this._point) {
                        case 0:
                            this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e); break;
                        case 1:
                            this._point = 2; break;
                        case 2:
                            this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
                        default:
                            f(this, t, e) }
                    this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e } };

            function d(t) { this._context = t }
            d.prototype = { areaStart: h, areaEnd: h, lineStart: function() { this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0 }, lineEnd: function() { switch (this._point) {
                        case 1:
                            this._context.moveTo(this._x2, this._y2), this._context.closePath(); break;
                        case 2:
                            this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath(); break;
                        case 3:
                            this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4) } }, point: function(t, e) { switch (t = +t, e = +e, this._point) {
                        case 0:
                            this._point = 1, this._x2 = t, this._y2 = e; break;
                        case 1:
                            this._point = 2, this._x3 = t, this._y3 = e; break;
                        case 2:
                            this._point = 3, this._x4 = t, this._y4 = e, this._context.moveTo((this._x0 + 4 * this._x1 + t) / 6, (this._y0 + 4 * this._y1 + e) / 6); break;
                        default:
                            f(this, t, e) }
                    this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e } };

            function y(t) { this._context = t }
            y.prototype = { areaStart: function() { this._line = 0 }, areaEnd: function() { this._line = NaN }, lineStart: function() { this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0 }, lineEnd: function() {
                    (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line }, point: function(t, e) { switch (t = +t, e = +e, this._point) {
                        case 0:
                            this._point = 1; break;
                        case 1:
                            this._point = 2; break;
                        case 2:
                            this._point = 3; var n = (this._x0 + 4 * this._x1 + t) / 6,
                                r = (this._y0 + 4 * this._y1 + e) / 6;
                            this._line ? this._context.lineTo(n, r) : this._context.moveTo(n, r); break;
                        case 3:
                            this._point = 4;
                        default:
                            f(this, t, e) }
                    this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e } };

            function v(t) { this._context = t }
            v.prototype = { areaStart: h, areaEnd: h, lineStart: function() { this._point = 0 }, lineEnd: function() { this._point && this._context.closePath() }, point: function(t, e) { t = +t, e = +e, this._point ? this._context.lineTo(t, e) : (this._point = 1, this._context.moveTo(t, e)) } };

            function m(t) { this._context = t }
            m.prototype = { areaStart: function() { this._line = 0 }, areaEnd: function() { this._line = NaN }, lineStart: function() { this._point = 0 }, lineEnd: function() {
                    (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line }, point: function(t, e) { switch (t = +t, e = +e, this._point) {
                        case 0:
                            this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e); break;
                        case 1:
                            this._point = 2;
                        default:
                            this._context.lineTo(t, e) } } }; var g = function(t) { return new m(t) };

            function b(t) { return t < 0 ? -1 : 1 }

            function w(t, e, n) { var r = t._x1 - t._x0,
                    i = e - t._x1,
                    o = (t._y1 - t._y0) / (r || i < 0 && -0),
                    a = (n - t._y1) / (i || r < 0 && -0),
                    s = (o * i + a * r) / (r + i); return (b(o) + b(a)) * Math.min(Math.abs(o), Math.abs(a), .5 * Math.abs(s)) || 0 }

            function x(t, e) { var n = t._x1 - t._x0; return n ? (3 * (t._y1 - t._y0) / n - e) / 2 : e }

            function O(t, e, n) { var r = t._x0,
                    i = t._y0,
                    o = t._x1,
                    a = t._y1,
                    s = (o - r) / 3;
                t._context.bezierCurveTo(r + s, i + s * e, o - s, a - s * n, o, a) }

            function _(t) { this._context = t }

            function M(t) { this._context = new j(t) }

            function j(t) { this._context = t }

            function S(t) { this._context = t }

            function E(t) { var e, n, r = t.length - 1,
                    i = new Array(r),
                    o = new Array(r),
                    a = new Array(r); for (i[0] = 0, o[0] = 2, a[0] = t[0] + 2 * t[1], e = 1; e < r - 1; ++e) i[e] = 1, o[e] = 4, a[e] = 4 * t[e] + 2 * t[e + 1]; for (i[r - 1] = 2, o[r - 1] = 7, a[r - 1] = 8 * t[r - 1] + t[r], e = 1; e < r; ++e) n = i[e] / o[e - 1], o[e] -= n, a[e] -= n * a[e - 1]; for (i[r - 1] = a[r - 1] / o[r - 1], e = r - 2; e >= 0; --e) i[e] = (a[e] - i[e + 1]) / o[e]; for (o[r - 1] = (t[r] + i[r - 1]) / 2, e = 0; e < r - 1; ++e) o[e] = 2 * t[e + 1] - i[e + 1]; return [i, o] }
            _.prototype = { areaStart: function() { this._line = 0 }, areaEnd: function() { this._line = NaN }, lineStart: function() { this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0 }, lineEnd: function() { switch (this._point) {
                        case 2:
                            this._context.lineTo(this._x1, this._y1); break;
                        case 3:
                            O(this, this._t0, x(this, this._t0)) }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line }, point: function(t, e) { var n = NaN; if (e = +e, (t = +t) !== this._x1 || e !== this._y1) { switch (this._point) {
                            case 0:
                                this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e); break;
                            case 1:
                                this._point = 2; break;
                            case 2:
                                this._point = 3, O(this, x(this, n = w(this, t, e)), n); break;
                            default:
                                O(this, this._t0, n = w(this, t, e)) }
                        this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e, this._t0 = n } } }, (M.prototype = Object.create(_.prototype)).point = function(t, e) { _.prototype.point.call(this, e, t) }, j.prototype = { moveTo: function(t, e) { this._context.moveTo(e, t) }, closePath: function() { this._context.closePath() }, lineTo: function(t, e) { this._context.lineTo(e, t) }, bezierCurveTo: function(t, e, n, r, i, o) { this._context.bezierCurveTo(e, t, r, n, o, i) } }, S.prototype = { areaStart: function() { this._line = 0 }, areaEnd: function() { this._line = NaN }, lineStart: function() { this._x = [], this._y = [] }, lineEnd: function() { var t = this._x,
                        e = this._y,
                        n = t.length; if (n)
                        if (this._line ? this._context.lineTo(t[0], e[0]) : this._context.moveTo(t[0], e[0]), 2 === n) this._context.lineTo(t[1], e[1]);
                        else
                            for (var r = E(t), i = E(e), o = 0, a = 1; a < n; ++o, ++a) this._context.bezierCurveTo(r[0][o], i[0][o], r[1][o], i[1][o], t[a], e[a]);
                        (this._line || 0 !== this._line && 1 === n) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null }, point: function(t, e) { this._x.push(+t), this._y.push(+e) } };

            function k(t, e) { this._context = t, this._t = e }
            k.prototype = { areaStart: function() { this._line = 0 }, areaEnd: function() { this._line = NaN }, lineStart: function() { this._x = this._y = NaN, this._point = 0 }, lineEnd: function() { 0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y), (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line) }, point: function(t, e) { switch (t = +t, e = +e, this._point) {
                        case 0:
                            this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e); break;
                        case 1:
                            this._point = 2;
                        default:
                            if (this._t <= 0) this._context.lineTo(this._x, e), this._context.lineTo(t, e);
                            else { var n = this._x * (1 - this._t) + t * this._t;
                                this._context.lineTo(n, this._y), this._context.lineTo(n, e) } }
                    this._x = t, this._y = e } }; var A = n(1822),
                C = n(1554),
                P = n(1531);

            function T(t) { return t[0] }

            function D(t) { return t[1] } var N = function(t, e) { var n = Object(P.a)(!0),
                        r = null,
                        i = g,
                        o = null;

                    function a(a) { var s, u, c, l = (a = Object(C.a)(a)).length,
                            h = !1; for (null == r && (o = i(c = Object(A.a)())), s = 0; s <= l; ++s) !(s < l && n(u = a[s], s, a)) === h && ((h = !h) ? o.lineStart() : o.lineEnd()), h && o.point(+t(u, s, a), +e(u, s, a)); if (c) return o = null, c + "" || null } return t = "function" === typeof t ? t : void 0 === t ? T : Object(P.a)(t), e = "function" === typeof e ? e : void 0 === e ? D : Object(P.a)(e), a.x = function(e) { return arguments.length ? (t = "function" === typeof e ? e : Object(P.a)(+e), a) : t }, a.y = function(t) { return arguments.length ? (e = "function" === typeof t ? t : Object(P.a)(+t), a) : e }, a.defined = function(t) { return arguments.length ? (n = "function" === typeof t ? t : Object(P.a)(!!t), a) : n }, a.curve = function(t) { return arguments.length ? (i = t, null != r && (o = i(r)), a) : i }, a.context = function(t) { return arguments.length ? (null == t ? r = o = null : o = i(r = t), a) : r }, a },
                R = function(t, e, n) { var r = null,
                        i = Object(P.a)(!0),
                        o = null,
                        a = g,
                        s = null;

                    function u(u) { var c, l, h, f, p, d = (u = Object(C.a)(u)).length,
                            y = !1,
                            v = new Array(d),
                            m = new Array(d); for (null == o && (s = a(p = Object(A.a)())), c = 0; c <= d; ++c) { if (!(c < d && i(f = u[c], c, u)) === y)
                                if (y = !y) l = c, s.areaStart(), s.lineStart();
                                else { for (s.lineEnd(), s.lineStart(), h = c - 1; h >= l; --h) s.point(v[h], m[h]);
                                    s.lineEnd(), s.areaEnd() }
                            y && (v[c] = +t(f, c, u), m[c] = +e(f, c, u), s.point(r ? +r(f, c, u) : v[c], n ? +n(f, c, u) : m[c])) } if (p) return s = null, p + "" || null }

                    function c() { return N().defined(i).curve(a).context(o) } return t = "function" === typeof t ? t : void 0 === t ? T : Object(P.a)(+t), e = "function" === typeof e ? e : void 0 === e ? Object(P.a)(0) : Object(P.a)(+e), n = "function" === typeof n ? n : void 0 === n ? D : Object(P.a)(+n), u.x = function(e) { return arguments.length ? (t = "function" === typeof e ? e : Object(P.a)(+e), r = null, u) : t }, u.x0 = function(e) { return arguments.length ? (t = "function" === typeof e ? e : Object(P.a)(+e), u) : t }, u.x1 = function(t) { return arguments.length ? (r = null == t ? null : "function" === typeof t ? t : Object(P.a)(+t), u) : r }, u.y = function(t) { return arguments.length ? (e = "function" === typeof t ? t : Object(P.a)(+t), n = null, u) : e }, u.y0 = function(t) { return arguments.length ? (e = "function" === typeof t ? t : Object(P.a)(+t), u) : e }, u.y1 = function(t) { return arguments.length ? (n = null == t ? null : "function" === typeof t ? t : Object(P.a)(+t), u) : n }, u.lineX0 = u.lineY0 = function() { return c().x(t).y(e) }, u.lineY1 = function() { return c().x(t).y(n) }, u.lineX1 = function() { return c().x(r).y(e) }, u.defined = function(t) { return arguments.length ? (i = "function" === typeof t ? t : Object(P.a)(!!t), u) : i }, u.curve = function(t) { return arguments.length ? (a = t, null != o && (s = a(o)), u) : a }, u.context = function(t) { return arguments.length ? (null == t ? o = s = null : s = a(o = t), u) : o }, u },
                I = n(406),
                B = n.n(I),
                L = n(1478),
                z = n(1477);

            function F(t) { return F = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t }, F(t) }

            function W() { return W = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]) } return t }, W.apply(this, arguments) }

            function V(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function U(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? V(Object(n), !0).forEach((function(e) { G(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : V(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

            function G(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t }

            function X(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

            function H(t, e) { for (var n = 0; n < e.length; n++) { var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r) } }

            function Y(t, e) { return Y = Object.setPrototypeOf || function(t, e) { return t.__proto__ = e, t }, Y(t, e) }

            function q(t) { var e = function() { if ("undefined" === typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" === typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = $(t); if (e) { var i = $(this).constructor;
                        n = Reflect.construct(r, arguments, i) } else n = r.apply(this, arguments); return J(this, n) } }

            function J(t, e) { return !e || "object" !== F(e) && "function" !== typeof e ? function(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }(t) : e }

            function $(t) { return $ = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) { return t.__proto__ || Object.getPrototypeOf(t) }, $(t) } var K = { curveBasisClosed: function(t) { return new d(t) }, curveBasisOpen: function(t) { return new y(t) }, curveBasis: function(t) { return new p(t) }, curveLinearClosed: function(t) { return new v(t) }, curveLinear: g, curveMonotoneX: function(t) { return new _(t) }, curveMonotoneY: function(t) { return new M(t) }, curveNatural: function(t) { return new S(t) }, curveStep: function(t) { return new k(t, .5) }, curveStepAfter: function(t) { return new k(t, 1) }, curveStepBefore: function(t) { return new k(t, 0) } },
                Z = function(t) { return t.x === +t.x && t.y === +t.y },
                Q = function(t) { return t.x },
                tt = function(t) { return t.y },
                et = function(t) {! function(t, e) { if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && Y(t, e) }(s, t); var e, n, r, o = q(s);

                    function s() { return X(this, s), o.apply(this, arguments) } return e = s, (n = [{ key: "getPath", value: function() { var t, e = this.props,
                                n = e.type,
                                r = e.points,
                                o = e.baseLine,
                                s = e.layout,
                                c = e.connectNulls,
                                l = function(t, e) { if (u()(t)) return t; var n = "curve".concat(a()(t)); return "curveMonotone" === n && e ? K["".concat(n).concat("vertical" === e ? "Y" : "X")] : K[n] || g }(n, s),
                                h = c ? r.filter((function(t) { return Z(t) })) : r; if (i()(o)) { var f = c ? o.filter((function(t) { return Z(t) })) : o,
                                    p = h.map((function(t, e) { return U(U({}, t), {}, { base: f[e] }) })); return (t = "vertical" === s ? R().y(tt).x1(Q).x0((function(t) { return t.base.x })) : R().x(Q).y1(tt).y0((function(t) { return t.base.y }))).defined(Z).curve(l), t(p) } return (t = "vertical" === s && Object(z.g)(o) ? R().y(tt).x1(Q).x0(o) : Object(z.g)(o) ? R().x(Q).y1(tt).y0(o) : N().x(Q).y(tt)).defined(Z).curve(l), t(h) } }, { key: "render", value: function() { var t = this.props,
                                e = t.className,
                                n = t.points,
                                r = t.path,
                                i = t.pathRef; if ((!n || !n.length) && !r) return null; var o = n && n.length ? this.getPath() : r; return l.a.createElement("path", W({}, Object(L.c)(this.props), Object(L.a)(this.props), { className: B()("recharts-curve", e), d: o, ref: i })) } }]) && H(e.prototype, n), r && H(e, r), s }(c.PureComponent);
            et.defaultProps = { type: "linear", points: [], connectNulls: !1 } }, 1640: function(t, e, n) { "use strict";
            n.d(e, "a", (function() { return bt })); var r = n(511),
                i = n.n(r),
                o = n(1600),
                a = n.n(o),
                s = n(1),
                u = n.n(s),
                c = n(406),
                l = n.n(c),
                h = n(1601),
                f = n(1550),
                p = n.n(f),
                d = (Math.abs, Math.atan2, Math.cos, Math.max, Math.min, Math.sin, Math.sqrt, Math.PI),
                y = 2 * d; var v = { draw: function(t, e) { var n = Math.sqrt(e / d);
                        t.moveTo(n, 0), t.arc(0, 0, n, 0, y) } },
                m = { draw: function(t, e) { var n = Math.sqrt(e / 5) / 2;
                        t.moveTo(-3 * n, -n), t.lineTo(-n, -n), t.lineTo(-n, -3 * n), t.lineTo(n, -3 * n), t.lineTo(n, -n), t.lineTo(3 * n, -n), t.lineTo(3 * n, n), t.lineTo(n, n), t.lineTo(n, 3 * n), t.lineTo(-n, 3 * n), t.lineTo(-n, n), t.lineTo(-3 * n, n), t.closePath() } },
                g = Math.sqrt(1 / 3),
                b = 2 * g,
                w = { draw: function(t, e) { var n = Math.sqrt(e / b),
                            r = n * g;
                        t.moveTo(0, -n), t.lineTo(r, 0), t.lineTo(0, n), t.lineTo(-r, 0), t.closePath() } },
                x = { draw: function(t, e) { var n = Math.sqrt(e),
                            r = -n / 2;
                        t.rect(r, r, n, n) } },
                O = Math.sin(d / 10) / Math.sin(7 * d / 10),
                _ = Math.sin(y / 10) * O,
                M = -Math.cos(y / 10) * O,
                j = { draw: function(t, e) { var n = Math.sqrt(.8908130915292852 * e),
                            r = _ * n,
                            i = M * n;
                        t.moveTo(0, -n), t.lineTo(r, i); for (var o = 1; o < 5; ++o) { var a = y * o / 5,
                                s = Math.cos(a),
                                u = Math.sin(a);
                            t.lineTo(u * n, -s * n), t.lineTo(s * r - u * i, u * r + s * i) }
                        t.closePath() } },
                S = Math.sqrt(3),
                E = { draw: function(t, e) { var n = -Math.sqrt(e / (3 * S));
                        t.moveTo(0, 2 * n), t.lineTo(-S * n, -n), t.lineTo(S * n, -n), t.closePath() } },
                k = -.5,
                A = Math.sqrt(3) / 2,
                C = 1 / Math.sqrt(12),
                P = 3 * (C / 2 + 1),
                T = { draw: function(t, e) { var n = Math.sqrt(e / P),
                            r = n / 2,
                            i = n * C,
                            o = r,
                            a = n * C + n,
                            s = -o,
                            u = a;
                        t.moveTo(r, i), t.lineTo(o, a), t.lineTo(s, u), t.lineTo(k * r - A * i, A * r + k * i), t.lineTo(k * o - A * a, A * o + k * a), t.lineTo(k * s - A * u, A * s + k * u), t.lineTo(k * r + A * i, k * i - A * r), t.lineTo(k * o + A * a, k * a - A * o), t.lineTo(k * s + A * u, k * u - A * s), t.closePath() } },
                D = n(1822),
                N = n(1531),
                R = n(1478);

            function I(t) { return I = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t }, I(t) }

            function B() { return B = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]) } return t }, B.apply(this, arguments) }

            function L(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

            function z(t, e) { for (var n = 0; n < e.length; n++) { var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r) } }

            function F(t, e) { return F = Object.setPrototypeOf || function(t, e) { return t.__proto__ = e, t }, F(t, e) }

            function W(t) { var e = function() { if ("undefined" === typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" === typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = U(t); if (e) { var i = U(this).constructor;
                        n = Reflect.construct(r, arguments, i) } else n = r.apply(this, arguments); return V(this, n) } }

            function V(t, e) { return !e || "object" !== I(e) && "function" !== typeof e ? function(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }(t) : e }

            function U(t) { return U = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) { return t.__proto__ || Object.getPrototypeOf(t) }, U(t) } var G = { symbolCircle: v, symbolCross: m, symbolDiamond: w, symbolSquare: x, symbolStar: j, symbolTriangle: E, symbolWye: T },
                X = Math.PI / 180,
                H = function(t) {! function(t, e) { if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && F(t, e) }(o, t); var e, n, r, i = W(o);

                    function o() { return L(this, o), i.apply(this, arguments) } return e = o, n = [{ key: "getPath", value: function() { var t = this.props,
                                e = t.size,
                                n = t.sizeType,
                                r = t.type,
                                i = function(t) { var e = "symbol".concat(p()(t)); return G[e] || v }(r),
                                o = function(t, e) { var n = null;

                                    function r() { var r; if (n || (n = r = Object(D.a)()), t.apply(this, arguments).draw(n, +e.apply(this, arguments)), r) return n = null, r + "" || null } return t = "function" === typeof t ? t : Object(N.a)(t || v), e = "function" === typeof e ? e : Object(N.a)(void 0 === e ? 64 : +e), r.type = function(e) { return arguments.length ? (t = "function" === typeof e ? e : Object(N.a)(e), r) : t }, r.size = function(t) { return arguments.length ? (e = "function" === typeof t ? t : Object(N.a)(+t), r) : e }, r.context = function(t) { return arguments.length ? (n = null == t ? null : t, r) : n }, r }().type(i).size(function(t, e, n) { if ("area" === e) return t; switch (n) {
                                        case "cross":
                                            return 5 * t * t / 9;
                                        case "diamond":
                                            return .5 * t * t / Math.sqrt(3);
                                        case "square":
                                            return t * t;
                                        case "star":
                                            var r = 18 * X; return 1.25 * t * t * (Math.tan(r) - Math.tan(2 * r) * Math.pow(Math.tan(r), 2));
                                        case "triangle":
                                            return Math.sqrt(3) * t * t / 4;
                                        case "wye":
                                            return (21 - 10 * Math.sqrt(3)) * t * t / 8;
                                        default:
                                            return Math.PI * t * t / 4 } }(e, n, r)); return o() } }, { key: "render", value: function() { var t = this.props,
                                e = t.className,
                                n = t.cx,
                                r = t.cy,
                                i = t.size; return n === +n && r === +r && i === +i ? u.a.createElement("path", B({}, Object(R.c)(this.props, !0), { className: l()("recharts-symbols", e), transform: "translate(".concat(n, ", ").concat(r, ")"), d: this.getPath() })) : null } }], n && z(e.prototype, n), r && z(e, r), o }(s.PureComponent);

            function Y(t) { return Y = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t }, Y(t) }

            function q() { return q = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]) } return t }, q.apply(this, arguments) }

            function J(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function $(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t }

            function K(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

            function Z(t, e) { for (var n = 0; n < e.length; n++) { var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r) } }

            function Q(t, e) { return Q = Object.setPrototypeOf || function(t, e) { return t.__proto__ = e, t }, Q(t, e) }

            function tt(t) { var e = function() { if ("undefined" === typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" === typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = nt(t); if (e) { var i = nt(this).constructor;
                        n = Reflect.construct(r, arguments, i) } else n = r.apply(this, arguments); return et(this, n) } }

            function et(t, e) { return !e || "object" !== Y(e) && "function" !== typeof e ? function(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }(t) : e }

            function nt(t) { return nt = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) { return t.__proto__ || Object.getPrototypeOf(t) }, nt(t) }
            H.defaultProps = { type: "circle", size: 64, sizeType: "area" }, H.registerSymbol = function(t, e) { G["symbol".concat(p()(t))] = e }; var rt = 32,
                it = function(t) {! function(t, e) { if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && Q(t, e) }(o, t); var e, n, r, i = tt(o);

                    function o() { return K(this, o), i.apply(this, arguments) } return e = o, n = [{ key: "renderIcon", value: function(t) { var e = this.props.inactiveColor,
                                n = 16,
                                r = rt / 6,
                                i = rt / 3,
                                o = t.inactive ? e : t.color; if ("plainline" === t.type) return u.a.createElement("line", { strokeWidth: 4, fill: "none", stroke: o, strokeDasharray: t.payload.strokeDasharray, x1: 0, y1: n, x2: rt, y2: n, className: "recharts-legend-icon" }); if ("line" === t.type) return u.a.createElement("path", { strokeWidth: 4, fill: "none", stroke: o, d: "M0,".concat(n, "h").concat(i, "\n            A").concat(r, ",").concat(r, ",0,1,1,").concat(2 * i, ",").concat(n, "\n            H").concat(rt, "M").concat(2 * i, ",").concat(n, "\n            A").concat(r, ",").concat(r, ",0,1,1,").concat(i, ",").concat(n), className: "recharts-legend-icon" }); if ("rect" === t.type) return u.a.createElement("path", { stroke: "none", fill: o, d: "M0,".concat(4, "h").concat(rt, "v").concat(24, "h").concat(-32, "z"), className: "recharts-legend-icon" }); if (u.a.isValidElement(t.legendIcon)) { var a = function(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                                        e % 2 ? J(Object(n), !0).forEach((function(e) { $(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : J(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }({}, t); return delete a.legendIcon, u.a.cloneElement(t.legendIcon, a) } return u.a.createElement(H, { fill: o, cx: n, cy: n, size: rt, sizeType: "diameter", type: t.type }) } }, { key: "renderItems", value: function() { var t = this,
                                e = this.props,
                                n = e.payload,
                                r = e.iconSize,
                                i = e.layout,
                                o = e.formatter,
                                a = e.inactiveColor,
                                s = { x: 0, y: 0, width: rt, height: rt },
                                c = { display: "horizontal" === i ? "inline-block" : "block", marginRight: 10 },
                                f = { display: "inline-block", verticalAlign: "middle", marginRight: 4 }; return n.map((function(e, n) { var i, p = e.formatter || o,
                                    d = l()(($(i = { "recharts-legend-item": !0 }, "legend-item-".concat(n), !0), $(i, "inactive", e.inactive), i)); if ("none" === e.type) return null; var y = e.inactive ? a : e.color; return u.a.createElement("li", q({ className: d, style: c, key: "legend-item-".concat(n) }, Object(R.b)(t.props, e, n)), u.a.createElement(h.a, { width: r, height: r, viewBox: s, style: f }, t.renderIcon(e)), u.a.createElement("span", { className: "recharts-legend-item-text", style: { color: y } }, p ? p(e.value, e, n) : e.value)) })) } }, { key: "render", value: function() { var t = this.props,
                                e = t.payload,
                                n = t.layout,
                                r = t.align; if (!e || !e.length) return null; var i = { padding: 0, margin: 0, textAlign: "horizontal" === n ? r : "left" }; return u.a.createElement("ul", { className: "recharts-default-legend", style: i }, this.renderItems()) } }], n && Z(e.prototype, n), r && Z(e, r), o }(s.PureComponent);
            it.displayName = "Legend", it.defaultProps = { iconSize: 14, layout: "horizontal", align: "center", verticalAlign: "middle", inactiveColor: "#ccc" }; var ot = n(1477);

            function at(t) { return at = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t }, at(t) }

            function st(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function ut(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? st(Object(n), !0).forEach((function(e) { ct(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : st(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

            function ct(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t }

            function lt(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

            function ht(t, e) { for (var n = 0; n < e.length; n++) { var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r) } }

            function ft(t, e) { return ft = Object.setPrototypeOf || function(t, e) { return t.__proto__ = e, t }, ft(t, e) }

            function pt(t) { var e = function() { if ("undefined" === typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" === typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = yt(t); if (e) { var i = yt(this).constructor;
                        n = Reflect.construct(r, arguments, i) } else n = r.apply(this, arguments); return dt(this, n) } }

            function dt(t, e) { return !e || "object" !== at(e) && "function" !== typeof e ? function(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }(t) : e }

            function yt(t) { return yt = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) { return t.__proto__ || Object.getPrototypeOf(t) }, yt(t) }

            function vt(t, e) { if (null == t) return {}; var n, r, i = function(t, e) { if (null == t) return {}; var n, r, i = {},
                        o = Object.keys(t); for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || (i[n] = t[n]); return i }(t, e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(t); for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n]) } return i }

            function mt(t) { return t.value }

            function gt(t, e) { return !0 === t ? a()(e, mt) : i()(t) ? a()(e, t) : e } var bt = function(t) {! function(t, e) { if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && ft(t, e) }(a, t); var e, n, r, o = pt(a);

                function a() { var t;
                    lt(this, a); for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r]; return (t = o.call.apply(o, [this].concat(n))).wrapperNode = void 0, t.state = { boxWidth: -1, boxHeight: -1 }, t } return e = a, r = [{ key: "getWithHeight", value: function(t, e) { var n = t.props.layout; return "vertical" === n && Object(ot.g)(t.props.height) ? { height: t.props.height } : "horizontal" === n ? { width: t.props.width || e } : null } }], (n = [{ key: "componentDidMount", value: function() { this.updateBBox() } }, { key: "componentDidUpdate", value: function() { this.updateBBox() } }, { key: "getBBox", value: function() { return this.wrapperNode && this.wrapperNode.getBoundingClientRect ? this.wrapperNode.getBoundingClientRect() : null } }, { key: "getBBoxSnapshot", value: function() { var t = this.state,
                            e = t.boxWidth,
                            n = t.boxHeight; return e >= 0 && n >= 0 ? { width: e, height: n } : null } }, { key: "getDefaultPosition", value: function(t) { var e, n, r = this.props,
                            i = r.layout,
                            o = r.align,
                            a = r.verticalAlign,
                            s = r.margin,
                            u = r.chartWidth,
                            c = r.chartHeight; return t && (void 0 !== t.left && null !== t.left || void 0 !== t.right && null !== t.right) || (e = "center" === o && "vertical" === i ? { left: ((u || 0) - (this.getBBoxSnapshot() || { width: 0 }).width) / 2 } : "right" === o ? { right: s && s.right || 0 } : { left: s && s.left || 0 }), t && (void 0 !== t.top && null !== t.top || void 0 !== t.bottom && null !== t.bottom) || (n = "middle" === a ? { top: ((c || 0) - (this.getBBoxSnapshot() || { height: 0 }).height) / 2 } : "bottom" === a ? { bottom: s && s.bottom || 0 } : { top: s && s.top || 0 }), ut(ut({}, e), n) } }, { key: "updateBBox", value: function() { var t = this.state,
                            e = t.boxWidth,
                            n = t.boxHeight,
                            r = this.props.onBBoxUpdate; if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) { var i = this.wrapperNode.getBoundingClientRect();
                            (Math.abs(i.width - e) > 1 || Math.abs(i.height - n) > 1) && this.setState({ boxWidth: i.width, boxHeight: i.height }, (function() { r && r(i) })) } else -1 === e && -1 === n || this.setState({ boxWidth: -1, boxHeight: -1 }, (function() { r && r(null) })) } }, { key: "render", value: function() { var t = this,
                            e = this.props,
                            n = e.content,
                            r = e.width,
                            o = e.height,
                            a = e.wrapperStyle,
                            s = e.payloadUniqBy,
                            c = e.payload,
                            l = ut(ut({ position: "absolute", width: r || "auto", height: o || "auto" }, this.getDefaultPosition(a)), a); return u.a.createElement("div", { className: "recharts-legend-wrapper", style: l, ref: function(e) { t.wrapperNode = e } }, function(t, e) { if (u.a.isValidElement(t)) return u.a.cloneElement(t, e); if (i()(t)) return u.a.createElement(t, e);
                            e.ref; var n = vt(e, ["ref"]); return u.a.createElement(it, n) }(n, ut(ut({}, this.props), {}, { payload: gt(s, c) }))) } }]) && ht(e.prototype, n), r && ht(e, r), a }(s.PureComponent);
            bt.displayName = "Legend", bt.defaultProps = { iconSize: 14, layout: "horizontal", align: "center", verticalAlign: "bottom" } }, 1666: function(t, e) { var n = "undefined" !== typeof self ? self : this,
                r = function() {
                    function t() { this.fetch = !1, this.DOMException = n.DOMException } return t.prototype = n, new t }();! function(t) {! function(e) { var n = "URLSearchParams" in t,
                        r = "Symbol" in t && "iterator" in Symbol,
                        i = "FileReader" in t && "Blob" in t && function() { try { return new Blob, !0 } catch (t) { return !1 } }(),
                        o = "FormData" in t,
                        a = "ArrayBuffer" in t; if (a) var s = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                        u = ArrayBuffer.isView || function(t) { return t && s.indexOf(Object.prototype.toString.call(t)) > -1 };

                    function c(t) { if ("string" !== typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t)) throw new TypeError("Invalid character in header field name"); return t.toLowerCase() }

                    function l(t) { return "string" !== typeof t && (t = String(t)), t }

                    function h(t) { var e = { next: function() { var e = t.shift(); return { done: void 0 === e, value: e } } }; return r && (e[Symbol.iterator] = function() { return e }), e }

                    function f(t) { this.map = {}, t instanceof f ? t.forEach((function(t, e) { this.append(e, t) }), this) : Array.isArray(t) ? t.forEach((function(t) { this.append(t[0], t[1]) }), this) : t && Object.getOwnPropertyNames(t).forEach((function(e) { this.append(e, t[e]) }), this) }

                    function p(t) { if (t.bodyUsed) return Promise.reject(new TypeError("Already read"));
                        t.bodyUsed = !0 }

                    function d(t) { return new Promise((function(e, n) { t.onload = function() { e(t.result) }, t.onerror = function() { n(t.error) } })) }

                    function y(t) { var e = new FileReader,
                            n = d(e); return e.readAsArrayBuffer(t), n }

                    function v(t) { if (t.slice) return t.slice(0); var e = new Uint8Array(t.byteLength); return e.set(new Uint8Array(t)), e.buffer }

                    function m() { return this.bodyUsed = !1, this._initBody = function(t) { var e;
                            this._bodyInit = t, t ? "string" === typeof t ? this._bodyText = t : i && Blob.prototype.isPrototypeOf(t) ? this._bodyBlob = t : o && FormData.prototype.isPrototypeOf(t) ? this._bodyFormData = t : n && URLSearchParams.prototype.isPrototypeOf(t) ? this._bodyText = t.toString() : a && i && ((e = t) && DataView.prototype.isPrototypeOf(e)) ? (this._bodyArrayBuffer = v(t.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : a && (ArrayBuffer.prototype.isPrototypeOf(t) || u(t)) ? this._bodyArrayBuffer = v(t) : this._bodyText = t = Object.prototype.toString.call(t) : this._bodyText = "", this.headers.get("content-type") || ("string" === typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : n && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8")) }, i && (this.blob = function() { var t = p(this); if (t) return t; if (this._bodyBlob) return Promise.resolve(this._bodyBlob); if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer])); if (this._bodyFormData) throw new Error("could not read FormData body as blob"); return Promise.resolve(new Blob([this._bodyText])) }, this.arrayBuffer = function() { return this._bodyArrayBuffer ? p(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(y) }), this.text = function() { var t = p(this); if (t) return t; if (this._bodyBlob) return function(t) { var e = new FileReader,
                                    n = d(e); return e.readAsText(t), n }(this._bodyBlob); if (this._bodyArrayBuffer) return Promise.resolve(function(t) { for (var e = new Uint8Array(t), n = new Array(e.length), r = 0; r < e.length; r++) n[r] = String.fromCharCode(e[r]); return n.join("") }(this._bodyArrayBuffer)); if (this._bodyFormData) throw new Error("could not read FormData body as text"); return Promise.resolve(this._bodyText) }, o && (this.formData = function() { return this.text().then(w) }), this.json = function() { return this.text().then(JSON.parse) }, this }
                    f.prototype.append = function(t, e) { t = c(t), e = l(e); var n = this.map[t];
                        this.map[t] = n ? n + ", " + e : e }, f.prototype.delete = function(t) { delete this.map[c(t)] }, f.prototype.get = function(t) { return t = c(t), this.has(t) ? this.map[t] : null }, f.prototype.has = function(t) { return this.map.hasOwnProperty(c(t)) }, f.prototype.set = function(t, e) { this.map[c(t)] = l(e) }, f.prototype.forEach = function(t, e) { for (var n in this.map) this.map.hasOwnProperty(n) && t.call(e, this.map[n], n, this) }, f.prototype.keys = function() { var t = []; return this.forEach((function(e, n) { t.push(n) })), h(t) }, f.prototype.values = function() { var t = []; return this.forEach((function(e) { t.push(e) })), h(t) }, f.prototype.entries = function() { var t = []; return this.forEach((function(e, n) { t.push([n, e]) })), h(t) }, r && (f.prototype[Symbol.iterator] = f.prototype.entries); var g = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

                    function b(t, e) { var n = (e = e || {}).body; if (t instanceof b) { if (t.bodyUsed) throw new TypeError("Already read");
                            this.url = t.url, this.credentials = t.credentials, e.headers || (this.headers = new f(t.headers)), this.method = t.method, this.mode = t.mode, this.signal = t.signal, n || null == t._bodyInit || (n = t._bodyInit, t.bodyUsed = !0) } else this.url = String(t); if (this.credentials = e.credentials || this.credentials || "same-origin", !e.headers && this.headers || (this.headers = new f(e.headers)), this.method = function(t) { var e = t.toUpperCase(); return g.indexOf(e) > -1 ? e : t }(e.method || this.method || "GET"), this.mode = e.mode || this.mode || null, this.signal = e.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && n) throw new TypeError("Body not allowed for GET or HEAD requests");
                        this._initBody(n) }

                    function w(t) { var e = new FormData; return t.trim().split("&").forEach((function(t) { if (t) { var n = t.split("="),
                                    r = n.shift().replace(/\+/g, " "),
                                    i = n.join("=").replace(/\+/g, " ");
                                e.append(decodeURIComponent(r), decodeURIComponent(i)) } })), e }

                    function x(t) { var e = new f; return t.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach((function(t) { var n = t.split(":"),
                                r = n.shift().trim(); if (r) { var i = n.join(":").trim();
                                e.append(r, i) } })), e }

                    function O(t, e) { e || (e = {}), this.type = "default", this.status = void 0 === e.status ? 200 : e.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in e ? e.statusText : "OK", this.headers = new f(e.headers), this.url = e.url || "", this._initBody(t) }
                    b.prototype.clone = function() { return new b(this, { body: this._bodyInit }) }, m.call(b.prototype), m.call(O.prototype), O.prototype.clone = function() { return new O(this._bodyInit, { status: this.status, statusText: this.statusText, headers: new f(this.headers), url: this.url }) }, O.error = function() { var t = new O(null, { status: 0, statusText: "" }); return t.type = "error", t }; var _ = [301, 302, 303, 307, 308];
                    O.redirect = function(t, e) { if (-1 === _.indexOf(e)) throw new RangeError("Invalid status code"); return new O(null, { status: e, headers: { location: t } }) }, e.DOMException = t.DOMException; try { new e.DOMException } catch (j) { e.DOMException = function(t, e) { this.message = t, this.name = e; var n = Error(t);
                            this.stack = n.stack }, e.DOMException.prototype = Object.create(Error.prototype), e.DOMException.prototype.constructor = e.DOMException }

                    function M(t, n) { return new Promise((function(r, o) { var a = new b(t, n); if (a.signal && a.signal.aborted) return o(new e.DOMException("Aborted", "AbortError")); var s = new XMLHttpRequest;

                            function u() { s.abort() }
                            s.onload = function() { var t = { status: s.status, statusText: s.statusText, headers: x(s.getAllResponseHeaders() || "") };
                                t.url = "responseURL" in s ? s.responseURL : t.headers.get("X-Request-URL"); var e = "response" in s ? s.response : s.responseText;
                                r(new O(e, t)) }, s.onerror = function() { o(new TypeError("Network request failed")) }, s.ontimeout = function() { o(new TypeError("Network request failed")) }, s.onabort = function() { o(new e.DOMException("Aborted", "AbortError")) }, s.open(a.method, a.url, !0), "include" === a.credentials ? s.withCredentials = !0 : "omit" === a.credentials && (s.withCredentials = !1), "responseType" in s && i && (s.responseType = "blob"), a.headers.forEach((function(t, e) { s.setRequestHeader(e, t) })), a.signal && (a.signal.addEventListener("abort", u), s.onreadystatechange = function() { 4 === s.readyState && a.signal.removeEventListener("abort", u) }), s.send("undefined" === typeof a._bodyInit ? null : a._bodyInit) })) }
                    M.polyfill = !0, t.fetch || (t.fetch = M, t.Headers = f, t.Request = b, t.Response = O), e.Headers = f, e.Request = b, e.Response = O, e.fetch = M, Object.defineProperty(e, "__esModule", { value: !0 }) }({}) }(r), r.fetch.ponyfill = !0, delete r.fetch.polyfill; var i = r;
            (e = i.fetch).default = i.fetch, e.fetch = i.fetch, e.Headers = i.Headers, e.Request = i.Request, e.Response = i.Response, t.exports = e }, 1667: function(t, e, n) { "use strict"; var r = this && this.__importDefault || function(t) { return t && t.__esModule ? t : { default: t } };
            Object.defineProperty(e, "__esModule", { value: !0 }); var i = n(1668),
                o = r(n(1669)),
                a = function(t) { return i.isExtractableFile(t) || null !== t && "object" === typeof t && "function" === typeof t.pipe };
            e.default = function(t, e, n) { var r = i.extractFiles({ query: t, variables: e, operationName: n }, "", a),
                    s = r.clone,
                    u = r.files; if (0 === u.size) { if (!Array.isArray(t)) return JSON.stringify(s); if ("undefined" !== typeof e && !Array.isArray(e)) throw new Error("Cannot create request body with given variable type, array expected"); var c = t.reduce((function(t, n, r) { return t.push({ query: n, variables: e ? e[r] : void 0 }), t }), []); return JSON.stringify(c) } var l = new("undefined" === typeof FormData ? o.default : FormData);
                l.append("operations", JSON.stringify(s)); var h = {},
                    f = 0; return u.forEach((function(t) { h[++f] = t })), l.append("map", JSON.stringify(h)), f = 0, u.forEach((function(t, e) { l.append("" + ++f, e) })), l } }, 1668: function(t, e, n) { "use strict";
            n.r(e); var r = n(1544);
            n.d(e, "ReactNativeFile", (function() { return r })); var i = n(1590);
            n.d(e, "extractFiles", (function() { return i })); var o = n(1545);
            n.d(e, "isExtractableFile", (function() { return o })) }, 1669: function(t, e) { t.exports = "object" == typeof self ? self.FormData : window.FormData }, 1670: function(t, e, n) { "use strict"; var r = this && this.__extends || function() { var t = function(e, n) { return t = Object.setPrototypeOf || { __proto__: [] }
                    instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]) }, t(e, n) }; return function(e, n) { if ("function" !== typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");

                    function r() { this.constructor = e }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r) } }();
            Object.defineProperty(e, "__esModule", { value: !0 }), e.ClientError = void 0; var i = function(t) {
                function e(n, r) { var i = this,
                        o = e.extractMessage(n) + ": " + JSON.stringify({ response: n, request: r }); return i = t.call(this, o) || this, Object.setPrototypeOf(i, e.prototype), i.response = n, i.request = r, "function" === typeof Error.captureStackTrace && Error.captureStackTrace(i, e), i } return r(e, t), e.extractMessage = function(t) { try { return t.errors[0].message } catch (e) { return "GraphQL Error (Code: " + t.status + ")" } }, e }(Error);
            e.ClientError = i }, 1671: function(t, e, n) { var r, i;
            r = function() { var t, e, n = "2.0.6",
                    r = {},
                    i = {},
                    o = { currentLocale: "en", zeroFormat: null, nullFormat: null, defaultFormat: "0,0", scalePercentBy100: !0 },
                    a = { currentLocale: o.currentLocale, zeroFormat: o.zeroFormat, nullFormat: o.nullFormat, defaultFormat: o.defaultFormat, scalePercentBy100: o.scalePercentBy100 };

                function s(t, e) { this._input = t, this._value = e } return (t = function(n) { var i, o, u, c; if (t.isNumeral(n)) i = n.value();
                        else if (0 === n || "undefined" === typeof n) i = 0;
                        else if (null === n || e.isNaN(n)) i = null;
                        else if ("string" === typeof n)
                            if (a.zeroFormat && n === a.zeroFormat) i = 0;
                            else if (a.nullFormat && n === a.nullFormat || !n.replace(/[^0-9]+/g, "").length) i = null;
                        else { for (o in r)
                                if ((c = "function" === typeof r[o].regexps.unformat ? r[o].regexps.unformat() : r[o].regexps.unformat) && n.match(c)) { u = r[o].unformat; break }
                            i = (u = u || t._.stringToNumber)(n) } else i = Number(n) || null; return new s(n, i) }).version = n, t.isNumeral = function(t) { return t instanceof s }, t._ = e = { numberToFormat: function(e, n, r) { var o, a, s, u, c, l, h, f = i[t.options.currentLocale],
                                p = !1,
                                d = !1,
                                y = 0,
                                v = "",
                                m = 1e12,
                                g = 1e9,
                                b = 1e6,
                                w = 1e3,
                                x = "",
                                O = !1; if (e = e || 0, a = Math.abs(e), t._.includes(n, "(") ? (p = !0, n = n.replace(/[\(|\)]/g, "")) : (t._.includes(n, "+") || t._.includes(n, "-")) && (c = t._.includes(n, "+") ? n.indexOf("+") : e < 0 ? n.indexOf("-") : -1, n = n.replace(/[\+|\-]/g, "")), t._.includes(n, "a") && (o = !!(o = n.match(/a(k|m|b|t)?/)) && o[1], t._.includes(n, " a") && (v = " "), n = n.replace(new RegExp(v + "a[kmbt]?"), ""), a >= m && !o || "t" === o ? (v += f.abbreviations.trillion, e /= m) : a < m && a >= g && !o || "b" === o ? (v += f.abbreviations.billion, e /= g) : a < g && a >= b && !o || "m" === o ? (v += f.abbreviations.million, e /= b) : (a < b && a >= w && !o || "k" === o) && (v += f.abbreviations.thousand, e /= w)), t._.includes(n, "[.]") && (d = !0, n = n.replace("[.]", ".")), s = e.toString().split(".")[0], u = n.split(".")[1], l = n.indexOf(","), y = (n.split(".")[0].split(",")[0].match(/0/g) || []).length, u ? (t._.includes(u, "[") ? (u = (u = u.replace("]", "")).split("["), x = t._.toFixed(e, u[0].length + u[1].length, r, u[1].length)) : x = t._.toFixed(e, u.length, r), s = x.split(".")[0], x = t._.includes(x, ".") ? f.delimiters.decimal + x.split(".")[1] : "", d && 0 === Number(x.slice(1)) && (x = "")) : s = t._.toFixed(e, 0, r), v && !o && Number(s) >= 1e3 && v !== f.abbreviations.trillion) switch (s = String(Number(s) / 1e3), v) {
                                case f.abbreviations.thousand:
                                    v = f.abbreviations.million; break;
                                case f.abbreviations.million:
                                    v = f.abbreviations.billion; break;
                                case f.abbreviations.billion:
                                    v = f.abbreviations.trillion }
                            if (t._.includes(s, "-") && (s = s.slice(1), O = !0), s.length < y)
                                for (var _ = y - s.length; _ > 0; _--) s = "0" + s; return l > -1 && (s = s.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1" + f.delimiters.thousands)), 0 === n.indexOf(".") && (s = ""), h = s + x + (v || ""), p ? h = (p && O ? "(" : "") + h + (p && O ? ")" : "") : c >= 0 ? h = 0 === c ? (O ? "-" : "+") + h : h + (O ? "-" : "+") : O && (h = "-" + h), h }, stringToNumber: function(t) { var e, n, r, o = i[a.currentLocale],
                                s = t,
                                u = { thousand: 3, million: 6, billion: 9, trillion: 12 }; if (a.zeroFormat && t === a.zeroFormat) n = 0;
                            else if (a.nullFormat && t === a.nullFormat || !t.replace(/[^0-9]+/g, "").length) n = null;
                            else { for (e in n = 1, "." !== o.delimiters.decimal && (t = t.replace(/\./g, "").replace(o.delimiters.decimal, ".")), u)
                                    if (r = new RegExp("[^a-zA-Z]" + o.abbreviations[e] + "(?:\\)|(\\" + o.currency.symbol + ")?(?:\\))?)?$"), s.match(r)) { n *= Math.pow(10, u[e]); break }
                                n *= (t.split("-").length + Math.min(t.split("(").length - 1, t.split(")").length - 1)) % 2 ? 1 : -1, t = t.replace(/[^0-9\.]+/g, ""), n *= Number(t) } return n }, isNaN: function(t) {
                            function e(e) { return t.apply(this, arguments) } return e.toString = function() { return t.toString() }, e }((function(t) { return "number" === typeof t && isNaN(t) })), includes: function(t, e) { return -1 !== t.indexOf(e) }, insert: function(t, e, n) { return t.slice(0, n) + e + t.slice(n) }, reduce: function(t, e) { if (null === this) throw new TypeError("Array.prototype.reduce called on null or undefined"); if ("function" !== typeof e) throw new TypeError(e + " is not a function"); var n, r = Object(t),
                                i = r.length >>> 0,
                                o = 0; if (3 === arguments.length) n = arguments[2];
                            else { for (; o < i && !(o in r);) o++; if (o >= i) throw new TypeError("Reduce of empty array with no initial value");
                                n = r[o++] } for (; o < i; o++) o in r && (n = e(n, r[o], o, r)); return n }, multiplier: function(t) { var e = t.toString().split("."); return e.length < 2 ? 1 : Math.pow(10, e[1].length) }, correctionFactor: function() { return Array.prototype.slice.call(arguments).reduce((function(t, n) { var r = e.multiplier(n); return t > r ? t : r }), 1) }, toFixed: function(t, e, n, r) { var i, o, a, s, u = t.toString().split("."),
                                c = e - (r || 0); return i = 2 === u.length ? Math.min(Math.max(u[1].length, c), e) : c, a = Math.pow(10, i), s = (n(t + "e+" + i) / a).toFixed(i), r > e - i && (o = new RegExp("\\.?0{1," + (r - (e - i)) + "}$"), s = s.replace(o, "")), s } }, t.options = a, t.formats = r, t.locales = i, t.locale = function(t) { return t && (a.currentLocale = t.toLowerCase()), a.currentLocale }, t.localeData = function(t) { if (!t) return i[a.currentLocale]; if (t = t.toLowerCase(), !i[t]) throw new Error("Unknown locale : " + t); return i[t] }, t.reset = function() { for (var t in o) a[t] = o[t] }, t.zeroFormat = function(t) { a.zeroFormat = "string" === typeof t ? t : null }, t.nullFormat = function(t) { a.nullFormat = "string" === typeof t ? t : null }, t.defaultFormat = function(t) { a.defaultFormat = "string" === typeof t ? t : "0.0" }, t.register = function(t, e, n) { if (e = e.toLowerCase(), this[t + "s"][e]) throw new TypeError(e + " " + t + " already registered."); return this[t + "s"][e] = n, n }, t.validate = function(e, n) { var r, i, o, a, s, u, c, l; if ("string" !== typeof e && (e += "", console.warn && console.warn("Numeral.js: Value is not string. It has been co-erced to: ", e)), (e = e.trim()).match(/^\d+$/)) return !0; if ("" === e) return !1; try { c = t.localeData(n) } catch (h) { c = t.localeData(t.locale()) } return o = c.currency.symbol, s = c.abbreviations, r = c.delimiters.decimal, i = "." === c.delimiters.thousands ? "\\." : c.delimiters.thousands, (null === (l = e.match(/^[^\d]+/)) || (e = e.substr(1), l[0] === o)) && (null === (l = e.match(/[^\d]+$/)) || (e = e.slice(0, -1), l[0] === s.thousand || l[0] === s.million || l[0] === s.billion || l[0] === s.trillion)) && (u = new RegExp(i + "{2}"), !e.match(/[^\d.,]/g) && !((a = e.split(r)).length > 2) && (a.length < 2 ? !!a[0].match(/^\d+.*\d$/) && !a[0].match(u) : 1 === a[0].length ? !!a[0].match(/^\d+$/) && !a[0].match(u) && !!a[1].match(/^\d+$/) : !!a[0].match(/^\d+.*\d$/) && !a[0].match(u) && !!a[1].match(/^\d+$/))) }, t.fn = s.prototype = { clone: function() { return t(this) }, format: function(e, n) { var i, o, s, u = this._value,
                                c = e || a.defaultFormat; if (n = n || Math.round, 0 === u && null !== a.zeroFormat) o = a.zeroFormat;
                            else if (null === u && null !== a.nullFormat) o = a.nullFormat;
                            else { for (i in r)
                                    if (c.match(r[i].regexps.format)) { s = r[i].format; break }
                                o = (s = s || t._.numberToFormat)(u, c, n) } return o }, value: function() { return this._value }, input: function() { return this._input }, set: function(t) { return this._value = Number(t), this }, add: function(t) { var n = e.correctionFactor.call(null, this._value, t);

                            function r(t, e, r, i) { return t + Math.round(n * e) } return this._value = e.reduce([this._value, t], r, 0) / n, this }, subtract: function(t) { var n = e.correctionFactor.call(null, this._value, t);

                            function r(t, e, r, i) { return t - Math.round(n * e) } return this._value = e.reduce([t], r, Math.round(this._value * n)) / n, this }, multiply: function(t) {
                            function n(t, n, r, i) { var o = e.correctionFactor(t, n); return Math.round(t * o) * Math.round(n * o) / Math.round(o * o) } return this._value = e.reduce([this._value, t], n, 1), this }, divide: function(t) {
                            function n(t, n, r, i) { var o = e.correctionFactor(t, n); return Math.round(t * o) / Math.round(n * o) } return this._value = e.reduce([this._value, t], n), this }, difference: function(e) { return Math.abs(t(this._value).subtract(e).value()) } }, t.register("locale", "en", { delimiters: { thousands: ",", decimal: "." }, abbreviations: { thousand: "k", million: "m", billion: "b", trillion: "t" }, ordinal: function(t) { var e = t % 10; return 1 === ~~(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th" }, currency: { symbol: "$" } }), t.register("format", "bps", { regexps: { format: /(BPS)/, unformat: /(BPS)/ }, format: function(e, n, r) { var i, o = t._.includes(n, " BPS") ? " " : ""; return e *= 1e4, n = n.replace(/\s?BPS/, ""), i = t._.numberToFormat(e, n, r), t._.includes(i, ")") ? ((i = i.split("")).splice(-1, 0, o + "BPS"), i = i.join("")) : i = i + o + "BPS", i }, unformat: function(e) { return +(1e-4 * t._.stringToNumber(e)).toFixed(15) } }),
                    function() { var e = { base: 1e3, suffixes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"] },
                            n = { base: 1024, suffixes: ["B", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"] },
                            r = e.suffixes.concat(n.suffixes.filter((function(t) { return e.suffixes.indexOf(t) < 0 }))).join("|");
                        r = "(" + r.replace("B", "B(?!PS)") + ")", t.register("format", "bytes", { regexps: { format: /([0\s]i?b)/, unformat: new RegExp(r) }, format: function(r, i, o) { var a, s, u, c = t._.includes(i, "ib") ? n : e,
                                    l = t._.includes(i, " b") || t._.includes(i, " ib") ? " " : ""; for (i = i.replace(/\s?i?b/, ""), a = 0; a <= c.suffixes.length; a++)
                                    if (s = Math.pow(c.base, a), u = Math.pow(c.base, a + 1), null === r || 0 === r || r >= s && r < u) { l += c.suffixes[a], s > 0 && (r /= s); break }
                                return t._.numberToFormat(r, i, o) + l }, unformat: function(r) { var i, o, a = t._.stringToNumber(r); if (a) { for (i = e.suffixes.length - 1; i >= 0; i--) { if (t._.includes(r, e.suffixes[i])) { o = Math.pow(e.base, i); break } if (t._.includes(r, n.suffixes[i])) { o = Math.pow(n.base, i); break } }
                                    a *= o || 1 } return a } }) }(), t.register("format", "currency", { regexps: { format: /(\$)/ }, format: function(e, n, r) { var i, o, a = t.locales[t.options.currentLocale],
                                s = { before: n.match(/^([\+|\-|\(|\s|\$]*)/)[0], after: n.match(/([\+|\-|\)|\s|\$]*)$/)[0] }; for (n = n.replace(/\s?\$\s?/, ""), i = t._.numberToFormat(e, n, r), e >= 0 ? (s.before = s.before.replace(/[\-\(]/, ""), s.after = s.after.replace(/[\-\)]/, "")) : e < 0 && !t._.includes(s.before, "-") && !t._.includes(s.before, "(") && (s.before = "-" + s.before), o = 0; o < s.before.length; o++) switch (s.before[o]) {
                                case "$":
                                    i = t._.insert(i, a.currency.symbol, o); break;
                                case " ":
                                    i = t._.insert(i, " ", o + a.currency.symbol.length - 1) }
                            for (o = s.after.length - 1; o >= 0; o--) switch (s.after[o]) {
                                case "$":
                                    i = o === s.after.length - 1 ? i + a.currency.symbol : t._.insert(i, a.currency.symbol, -(s.after.length - (1 + o))); break;
                                case " ":
                                    i = o === s.after.length - 1 ? i + " " : t._.insert(i, " ", -(s.after.length - (1 + o) + a.currency.symbol.length - 1)) }
                            return i } }), t.register("format", "exponential", { regexps: { format: /(e\+|e-)/, unformat: /(e\+|e-)/ }, format: function(e, n, r) { var i = ("number" !== typeof e || t._.isNaN(e) ? "0e+0" : e.toExponential()).split("e"); return n = n.replace(/e[\+|\-]{1}0/, ""), t._.numberToFormat(Number(i[0]), n, r) + "e" + i[1] }, unformat: function(e) { var n = t._.includes(e, "e+") ? e.split("e+") : e.split("e-"),
                                r = Number(n[0]),
                                i = Number(n[1]);

                            function o(e, n, r, i) { var o = t._.correctionFactor(e, n); return e * o * (n * o) / (o * o) } return i = t._.includes(e, "e-") ? i *= -1 : i, t._.reduce([r, Math.pow(10, i)], o, 1) } }), t.register("format", "ordinal", { regexps: { format: /(o)/ }, format: function(e, n, r) { var i = t.locales[t.options.currentLocale],
                                o = t._.includes(n, " o") ? " " : ""; return n = n.replace(/\s?o/, ""), o += i.ordinal(e), t._.numberToFormat(e, n, r) + o } }), t.register("format", "percentage", { regexps: { format: /(%)/, unformat: /(%)/ }, format: function(e, n, r) { var i, o = t._.includes(n, " %") ? " " : ""; return t.options.scalePercentBy100 && (e *= 100), n = n.replace(/\s?\%/, ""), i = t._.numberToFormat(e, n, r), t._.includes(i, ")") ? ((i = i.split("")).splice(-1, 0, o + "%"), i = i.join("")) : i = i + o + "%", i }, unformat: function(e) { var n = t._.stringToNumber(e); return t.options.scalePercentBy100 ? .01 * n : n } }), t.register("format", "time", { regexps: { format: /(:)/, unformat: /(:)/ }, format: function(t, e, n) { var r = Math.floor(t / 60 / 60),
                                i = Math.floor((t - 60 * r * 60) / 60),
                                o = Math.round(t - 60 * r * 60 - 60 * i); return r + ":" + (i < 10 ? "0" + i : i) + ":" + (o < 10 ? "0" + o : o) }, unformat: function(t) { var e = t.split(":"),
                                n = 0; return 3 === e.length ? (n += 60 * Number(e[0]) * 60, n += 60 * Number(e[1]), n += Number(e[2])) : 2 === e.length && (n += 60 * Number(e[0]), n += Number(e[1])), Number(n) } }), t }, void 0 === (i = "function" === typeof r ? r.call(e, n, e, t) : r) || (t.exports = i) }, 1672: function(t, e, n) { "use strict";
            (function(t) { Object.defineProperty(e, "__esModule", { value: !0 }); var r = n(813),
                    i = n(1),
                    o = n(111);

                function a(t) { return t && "object" === typeof t && "default" in t ? t : { default: t } }

                function s(t) { if (t && t.__esModule) return t; var e = Object.create(null); return t && Object.keys(t).forEach((function(n) { if ("default" !== n) { var r = Object.getOwnPropertyDescriptor(t, n);
                            Object.defineProperty(e, n, r.get ? r : { enumerable: !0, get: function() { return t[n] } }) } })), e.default = t, Object.freeze(e) } var u = a(r),
                    c = s(i),
                    l = function(t, e) { return l = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]) }, l(t, e) };

                function h(t, e) { if ("function" !== typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

                    function n() { this.constructor = t }
                    l(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n) } var f = function() { return f = Object.assign || function(t) { for (var e, n = 1, r = arguments.length; n < r; n++)
                            for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]); return t }, f.apply(this, arguments) };

                function p(t, e) { var n = {}; for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]); if (null != t && "function" === typeof Object.getOwnPropertySymbols) { var i = 0; for (r = Object.getOwnPropertySymbols(t); i < r.length; i++) e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]) } return n } var d = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof t ? t : "undefined" !== typeof self ? self : {}; var y = function(t) { var e = typeof t; return null != t && ("object" == e || "function" == e) },
                    v = "object" == typeof d && d && d.Object === Object && d,
                    m = "object" == typeof self && self && self.Object === Object && self,
                    g = v || m || Function("return this")(),
                    b = g,
                    w = function() { return b.Date.now() },
                    x = /\s/; var O = function(t) { for (var e = t.length; e-- && x.test(t.charAt(e));); return e },
                    _ = /^\s+/; var M = function(t) { return t ? t.slice(0, O(t) + 1).replace(_, "") : t },
                    j = g.Symbol,
                    S = j,
                    E = Object.prototype,
                    k = E.hasOwnProperty,
                    A = E.toString,
                    C = S ? S.toStringTag : void 0; var P = function(t) { var e = k.call(t, C),
                            n = t[C]; try { t[C] = void 0; var r = !0 } catch (o) {} var i = A.call(t); return r && (e ? t[C] = n : delete t[C]), i },
                    T = Object.prototype.toString; var D = P,
                    N = function(t) { return T.call(t) },
                    R = j ? j.toStringTag : void 0; var I = function(t) { return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : R && R in Object(t) ? D(t) : N(t) },
                    B = function(t) { return null != t && "object" == typeof t }; var L = M,
                    z = y,
                    F = function(t) { return "symbol" == typeof t || B(t) && "[object Symbol]" == I(t) },
                    W = /^[-+]0x[0-9a-f]+$/i,
                    V = /^0b[01]+$/i,
                    U = /^0o[0-7]+$/i,
                    G = parseInt; var X = y,
                    H = w,
                    Y = function(t) { if ("number" == typeof t) return t; if (F(t)) return NaN; if (z(t)) { var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                            t = z(e) ? e + "" : e } if ("string" != typeof t) return 0 === t ? t : +t;
                        t = L(t); var n = V.test(t); return n || U.test(t) ? G(t.slice(2), n ? 2 : 8) : W.test(t) ? NaN : +t },
                    q = Math.max,
                    J = Math.min; var $ = function(t, e, n) { var r, i, o, a, s, u, c = 0,
                            l = !1,
                            h = !1,
                            f = !0; if ("function" != typeof t) throw new TypeError("Expected a function");

                        function p(e) { var n = r,
                                o = i; return r = i = void 0, c = e, a = t.apply(o, n) }

                        function d(t) { return c = t, s = setTimeout(v, e), l ? p(t) : a }

                        function y(t) { var n = t - u; return void 0 === u || n >= e || n < 0 || h && t - c >= o }

                        function v() { var t = H(); if (y(t)) return m(t);
                            s = setTimeout(v, function(t) { var n = e - (t - u); return h ? J(n, o - (t - c)) : n }(t)) }

                        function m(t) { return s = void 0, f && r ? p(t) : (r = i = void 0, a) }

                        function g() { var t = H(),
                                n = y(t); if (r = arguments, i = this, u = t, n) { if (void 0 === s) return d(u); if (h) return clearTimeout(s), s = setTimeout(v, e), p(u) } return void 0 === s && (s = setTimeout(v, e)), a } return e = Y(e) || 0, X(n) && (l = !!n.leading, o = (h = "maxWait" in n) ? q(Y(n.maxWait) || 0, e) : o, f = "trailing" in n ? !!n.trailing : f), g.cancel = function() { void 0 !== s && clearTimeout(s), c = 0, r = u = i = s = void 0 }, g.flush = function() { return void 0 === s ? a : m(H()) }, g },
                    K = $,
                    Z = y; var Q = function(t, e, n) { var r = !0,
                            i = !0; if ("function" != typeof t) throw new TypeError("Expected a function"); return Z(n) && (r = "leading" in n ? !!n.leading : r, i = "trailing" in n ? !!n.trailing : i), K(t, e, { leading: r, maxWait: e, trailing: i }) },
                    tt = function(t, e, n, r) { switch (e) {
                            case "debounce":
                                return $(t, n, r);
                            case "throttle":
                                return Q(t, n, r);
                            default:
                                return t } },
                    et = function(t) { return "function" === typeof t },
                    nt = function() { return "undefined" === typeof window },
                    rt = function(t) { return t instanceof Element || t instanceof HTMLDocument },
                    it = function(t, e, n, r) { return function(i) { var o = i.width,
                                a = i.height;
                            e((function(e) { return e.width === o && e.height === a || e.width === o && !r || e.height === a && !n ? e : (t && et(t) && t(o, a), { width: o, height: a }) })) } },
                    ot = function(t) {
                        function e(e) { var n = t.call(this, e) || this;
                            n.cancelHandler = function() { n.resizeHandler && n.resizeHandler.cancel && (n.resizeHandler.cancel(), n.resizeHandler = null) }, n.attachObserver = function() { var t = n.props,
                                    e = t.targetRef,
                                    r = t.observerOptions; if (!nt()) { e && e.current && (n.targetRef.current = e.current); var i = n.getElement();
                                    i && (n.observableElement && n.observableElement === i || (n.observableElement = i, n.resizeObserver.observe(i, r))) } }, n.getElement = function() { var t = n.props,
                                    e = t.querySelector,
                                    r = t.targetDomEl; if (nt()) return null; if (e) return document.querySelector(e); if (r && rt(r)) return r; if (n.targetRef && rt(n.targetRef.current)) return n.targetRef.current; var i = o.findDOMNode(n); if (!i) return null; switch (n.getRenderType()) {
                                    case "renderProp":
                                    case "childFunction":
                                    case "child":
                                    case "childArray":
                                        return i;
                                    default:
                                        return i.parentElement } }, n.createResizeHandler = function(t) { var e = n.props,
                                    r = e.handleWidth,
                                    i = void 0 === r || r,
                                    o = e.handleHeight,
                                    a = void 0 === o || o,
                                    s = e.onResize; if (i || a) { var u = it(s, n.setState.bind(n), i, a);
                                    t.forEach((function(t) { var e = t && t.contentRect || {},
                                            r = e.width,
                                            i = e.height;!n.skipOnMount && !nt() && u({ width: r, height: i }), n.skipOnMount = !1 })) } }, n.getRenderType = function() { var t = n.props,
                                    e = t.render,
                                    r = t.children; return et(e) ? "renderProp" : et(r) ? "childFunction" : i.isValidElement(r) ? "child" : Array.isArray(r) ? "childArray" : "parent" }; var r = e.skipOnMount,
                                a = e.refreshMode,
                                s = e.refreshRate,
                                c = void 0 === s ? 1e3 : s,
                                l = e.refreshOptions; return n.state = { width: void 0, height: void 0 }, n.skipOnMount = r, n.targetRef = i.createRef(), n.observableElement = null, nt() || (n.resizeHandler = tt(n.createResizeHandler, a, c, l), n.resizeObserver = new u.default(n.resizeHandler)), n } return h(e, t), e.prototype.componentDidMount = function() { this.attachObserver() }, e.prototype.componentDidUpdate = function() { this.attachObserver() }, e.prototype.componentWillUnmount = function() { nt() || (this.resizeObserver.disconnect(), this.cancelHandler()) }, e.prototype.render = function() { var t, e = this.props,
                                n = e.render,
                                r = e.children,
                                o = e.nodeType,
                                a = void 0 === o ? "div" : o,
                                s = this.state,
                                u = { width: s.width, height: s.height, targetRef: this.targetRef }; switch (this.getRenderType()) {
                                case "renderProp":
                                    return n && n(u);
                                case "childFunction":
                                    return (t = r)(u);
                                case "child":
                                    if ((t = r).type && "string" === typeof t.type) { var l = p(u, ["targetRef"]); return i.cloneElement(t, l) } return i.cloneElement(t, u);
                                case "childArray":
                                    return (t = r).map((function(t) { return !!t && i.cloneElement(t, u) }));
                                default:
                                    return c.createElement(a, null) } }, e }(i.PureComponent); var at = nt() ? i.useEffect : i.useLayoutEffect;
                e.default = ot, e.useResizeDetector = function(t) { void 0 === t && (t = {}); var e = t.skipOnMount,
                        n = void 0 !== e && e,
                        r = t.refreshMode,
                        o = t.refreshRate,
                        a = void 0 === o ? 1e3 : o,
                        s = t.refreshOptions,
                        c = t.handleWidth,
                        l = void 0 === c || c,
                        h = t.handleHeight,
                        p = void 0 === h || h,
                        d = t.targetRef,
                        y = t.observerOptions,
                        v = t.onResize,
                        m = i.useRef(n),
                        g = i.useRef(null),
                        b = null !== d && void 0 !== d ? d : g,
                        w = i.useRef(),
                        x = i.useState({ width: void 0, height: void 0 }),
                        O = x[0],
                        _ = x[1]; return at((function() { if (!nt()) { var t = it(v, _, l, p);
                            w.current = tt((function(e) {
                                (l || p) && e.forEach((function(e) { var n = e && e.contentRect || {},
                                        r = n.width,
                                        i = n.height;!m.current && !nt() && t({ width: r, height: i }), m.current = !1 })) }), r, a, s); var e = new u.default(w.current); return b.current && e.observe(b.current, y),
                                function() { e.disconnect(); var t = w.current;
                                    t && t.cancel && t.cancel() } } }), [r, a, s, l, p, v, y, b.current]), f({ ref: b }, O) }, e.withResizeDetector = function(t, e) { void 0 === e && (e = {}); var n = function(n) {
                        function r() { var t = null !== n && n.apply(this, arguments) || this; return t.ref = i.createRef(), t } return h(r, n), r.prototype.render = function() { var n = this.props,
                                r = n.forwardedRef,
                                i = p(n, ["forwardedRef"]),
                                o = null !== r && void 0 !== r ? r : this.ref; return c.createElement(ot, f({}, e, { targetRef: o }), c.createElement(t, f({ targetRef: o }, i))) }, r }(i.Component);

                    function r(t, e) { return c.createElement(n, f({}, t, { forwardedRef: e })) } var o = t.displayName || t.name; return r.displayName = "withResizeDetector(".concat(o, ")"), i.forwardRef(r) } }).call(this, n(81)) }, 1673: function(t, e) { t.exports = function(t, e) { for (var n = -1, r = null == t ? 0 : t.length; ++n < r;)
                    if (!e(t[n], n, t)) return !1;
                return !0 } }, 1674: function(t, e, n) { var r = n(796);
            t.exports = function(t, e) { var n = !0; return r(t, (function(t, r, i) { return n = !!e(t, r, i) })), n } }, 1675: function(t, e, n) { var r = n(1676)(n(1677));
            t.exports = r }, 1676: function(t, e, n) { var r = n(777),
                i = n(415),
                o = n(333);
            t.exports = function(t) { return function(e, n, a) { var s = Object(e); if (!i(e)) { var u = r(n, 3);
                        e = o(e), n = function(t) { return u(s[t], t, s) } } var c = t(e, n, a); return c > -1 ? s[u ? e[c] : c] : void 0 } } }, 1677: function(t, e, n) { var r = n(1594),
                i = n(777),
                o = n(1678),
                a = Math.max;
            t.exports = function(t, e, n) { var s = null == t ? 0 : t.length; if (!s) return -1; var u = null == n ? 0 : o(n); return u < 0 && (u = a(s + u, 0)), r(t, i(e, 3), u) } }, 1678: function(t, e, n) { var r = n(1595);
            t.exports = function(t) { var e = r(t),
                    n = e % 1; return e === e ? n ? e - n : e : 0 } }, 1679: function(t, e, n) { var r = n(417),
                i = n(531),
                o = n(777),
                a = n(811),
                s = n(1680),
                u = n(801),
                c = n(1681),
                l = n(331),
                h = n(162);
            t.exports = function(t, e, n) { e = e.length ? r(e, (function(t) { return h(t) ? function(e) { return i(e, 1 === t.length ? t[0] : t) } : t })) : [l]; var f = -1;
                e = r(e, u(o)); var p = a(t, (function(t, n, i) { return { criteria: r(e, (function(e) { return e(t) })), index: ++f, value: t } })); return s(p, (function(t, e) { return c(t, e, n) })) } }, 1680: function(t, e) { t.exports = function(t, e) { var n = t.length; for (t.sort(e); n--;) t[n] = t[n].value; return t } }, 1681: function(t, e, n) { var r = n(1682);
            t.exports = function(t, e, n) { for (var i = -1, o = t.criteria, a = e.criteria, s = o.length, u = n.length; ++i < s;) { var c = r(o[i], a[i]); if (c) return i >= u ? c : c * ("desc" == n[i] ? -1 : 1) } return t.index - e.index } }, 1682: function(t, e, n) { var r = n(332);
            t.exports = function(t, e) { if (t !== e) { var n = void 0 !== t,
                        i = null === t,
                        o = t === t,
                        a = r(t),
                        s = void 0 !== e,
                        u = null === e,
                        c = e === e,
                        l = r(e); if (!u && !l && !a && t > e || a && s && c && !u && !l || i && s && c || !n && c || !o) return 1; if (!i && !a && !l && t < e || l && n && o && !i && !a || u && n && o || !s && o || !c) return -1 } return 0 } }, 1683: function(t, e, n) { var r = n(331),
                i = n(1684),
                o = n(1686);
            t.exports = function(t, e) { return o(i(t, e, r), t + "") } }, 1684: function(t, e, n) { var r = n(1685),
                i = Math.max;
            t.exports = function(t, e, n) { return e = i(void 0 === e ? t.length - 1 : e, 0),
                    function() { for (var o = arguments, a = -1, s = i(o.length - e, 0), u = Array(s); ++a < s;) u[a] = o[e + a];
                        a = -1; for (var c = Array(e + 1); ++a < e;) c[a] = o[a]; return c[e] = n(u), r(t, this, c) } } }, 1685: function(t, e) { t.exports = function(t, e, n) { switch (n.length) {
                    case 0:
                        return t.call(e);
                    case 1:
                        return t.call(e, n[0]);
                    case 2:
                        return t.call(e, n[0], n[1]);
                    case 3:
                        return t.call(e, n[0], n[1], n[2]) } return t.apply(e, n) } }, 1686: function(t, e, n) { var r = n(1687),
                i = n(1689)(r);
            t.exports = i }, 1687: function(t, e, n) { var r = n(1688),
                i = n(1526),
                o = n(331),
                a = i ? function(t, e) { return i(t, "toString", { configurable: !0, enumerable: !1, value: r(e), writable: !0 }) } : o;
            t.exports = a }, 1688: function(t, e) { t.exports = function(t) { return function() { return t } } }, 1689: function(t, e) { var n = Date.now;
            t.exports = function(t) { var e = 0,
                    r = 0; return function() { var i = n(),
                        o = 16 - (i - r); if (r = i, o > 0) { if (++e >= 800) return arguments[0] } else e = 0; return t.apply(void 0, arguments) } } }, 1690: function(t, e, n) { var r = n(1691),
                i = n(1530),
                o = n(1595);
            t.exports = function(t) { return function(e, n, a) { return a && "number" != typeof a && i(e, n, a) && (n = a = void 0), e = o(e), void 0 === n ? (n = e, e = 0) : n = o(n), a = void 0 === a ? e < n ? 1 : -1 : o(a), r(e, n, a, t) } } }, 1691: function(t, e) { var n = Math.ceil,
                r = Math.max;
            t.exports = function(t, e, i, o) { for (var a = -1, s = r(n((e - t) / (i || 1)), 0), u = Array(s); s--;) u[o ? s : ++a] = t, t += i; return u } }, 1692: function(t, e, n) { var r = n(290),
                i = n(291);
            t.exports = function(t) { return !0 === t || !1 === t || i(t) && "[object Boolean]" == r(t) } }, 1693: function(t, e, n) { var r = n(1694),
                i = n(1597),
                o = n(1696),
                a = n(533);
            t.exports = function(t) { return function(e) { e = a(e); var n = i(e) ? o(e) : void 0,
                        s = n ? n[0] : e.charAt(0),
                        u = n ? r(n, 1).join("") : e.slice(1); return s[t]() + u } } }, 1694: function(t, e, n) { var r = n(1695);
            t.exports = function(t, e, n) { var i = t.length; return n = void 0 === n ? i : n, !e && n >= i ? t : r(t, e, n) } }, 1695: function(t, e) { t.exports = function(t, e, n) { var r = -1,
                    i = t.length;
                e < 0 && (e = -e > i ? 0 : i + e), (n = n > i ? i : n) < 0 && (n += i), i = e > n ? 0 : n - e >>> 0, e >>>= 0; for (var o = Array(i); ++r < i;) o[r] = t[r + e]; return o } }, 1696: function(t, e, n) { var r = n(1697),
                i = n(1597),
                o = n(1698);
            t.exports = function(t) { return i(t) ? o(t) : r(t) } }, 1697: function(t, e) { t.exports = function(t) { return t.split("") } }, 1698: function(t, e) { var n = "[\\ud800-\\udfff]",
                r = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
                i = "\\ud83c[\\udffb-\\udfff]",
                o = "[^\\ud800-\\udfff]",
                a = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                s = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                u = "(?:" + r + "|" + i + ")" + "?",
                c = "[\\ufe0e\\ufe0f]?",
                l = c + u + ("(?:\\u200d(?:" + [o, a, s].join("|") + ")" + c + u + ")*"),
                h = "(?:" + [o + r + "?", r, a, s, n].join("|") + ")",
                f = RegExp(i + "(?=" + i + ")|" + h + l, "g");
            t.exports = function(t) { return t.match(f) || [] } }, 1699: function(t, e) { t.exports = function(t, e) { return t > e } }, 1700: function(t, e, n) { var r = n(1599),
                i = n(1701),
                o = n(331);
            t.exports = function(t) { return t && t.length ? r(t, o, i) : void 0 } }, 1701: function(t, e) { t.exports = function(t, e) { return t < e } }, 1702: function(t, e, n) { "use strict";
            t.exports = n(1703) }, 1703: function(t, e, n) { "use strict"; var r = "function" === typeof Symbol && Symbol.for,
                i = r ? Symbol.for("react.element") : 60103,
                o = r ? Symbol.for("react.portal") : 60106,
                a = r ? Symbol.for("react.fragment") : 60107,
                s = r ? Symbol.for("react.strict_mode") : 60108,
                u = r ? Symbol.for("react.profiler") : 60114,
                c = r ? Symbol.for("react.provider") : 60109,
                l = r ? Symbol.for("react.context") : 60110,
                h = r ? Symbol.for("react.async_mode") : 60111,
                f = r ? Symbol.for("react.concurrent_mode") : 60111,
                p = r ? Symbol.for("react.forward_ref") : 60112,
                d = r ? Symbol.for("react.suspense") : 60113,
                y = r ? Symbol.for("react.suspense_list") : 60120,
                v = r ? Symbol.for("react.memo") : 60115,
                m = r ? Symbol.for("react.lazy") : 60116,
                g = r ? Symbol.for("react.block") : 60121,
                b = r ? Symbol.for("react.fundamental") : 60117,
                w = r ? Symbol.for("react.responder") : 60118,
                x = r ? Symbol.for("react.scope") : 60119;

            function O(t) { if ("object" === typeof t && null !== t) { var e = t.$$typeof; switch (e) {
                        case i:
                            switch (t = t.type) {
                                case h:
                                case f:
                                case a:
                                case u:
                                case s:
                                case d:
                                    return t;
                                default:
                                    switch (t = t && t.$$typeof) {
                                        case l:
                                        case p:
                                        case m:
                                        case v:
                                        case c:
                                            return t;
                                        default:
                                            return e } }
                        case o:
                            return e } } }

            function _(t) { return O(t) === f }
            e.AsyncMode = h, e.ConcurrentMode = f, e.ContextConsumer = l, e.ContextProvider = c, e.Element = i, e.ForwardRef = p, e.Fragment = a, e.Lazy = m, e.Memo = v, e.Portal = o, e.Profiler = u, e.StrictMode = s, e.Suspense = d, e.isAsyncMode = function(t) { return _(t) || O(t) === h }, e.isConcurrentMode = _, e.isContextConsumer = function(t) { return O(t) === l }, e.isContextProvider = function(t) { return O(t) === c }, e.isElement = function(t) { return "object" === typeof t && null !== t && t.$$typeof === i }, e.isForwardRef = function(t) { return O(t) === p }, e.isFragment = function(t) { return O(t) === a }, e.isLazy = function(t) { return O(t) === m }, e.isMemo = function(t) { return O(t) === v }, e.isPortal = function(t) { return O(t) === o }, e.isProfiler = function(t) { return O(t) === u }, e.isStrictMode = function(t) { return O(t) === s }, e.isSuspense = function(t) { return O(t) === d }, e.isValidElementType = function(t) { return "string" === typeof t || "function" === typeof t || t === a || t === f || t === u || t === s || t === d || t === y || "object" === typeof t && null !== t && (t.$$typeof === m || t.$$typeof === v || t.$$typeof === c || t.$$typeof === l || t.$$typeof === p || t.$$typeof === b || t.$$typeof === w || t.$$typeof === x || t.$$typeof === g) }, e.typeOf = O }, 1704: function(t, e, n) { var r = n(807),
                i = n(1705),
                o = n(1709),
                a = n(809),
                s = n(1710),
                u = n(799);
            t.exports = function(t, e, n) { var c = -1,
                    l = i,
                    h = t.length,
                    f = !0,
                    p = [],
                    d = p; if (n) f = !1, l = o;
                else if (h >= 200) { var y = e ? null : s(t); if (y) return u(y);
                    f = !1, l = a, d = new r } else d = e ? [] : p;
                t: for (; ++c < h;) { var v = t[c],
                        m = e ? e(v) : v; if (v = n || 0 !== v ? v : 0, f && m === m) { for (var g = d.length; g--;)
                            if (d[g] === m) continue t;
                        e && d.push(m), p.push(v) } else l(d, m, n) || (d !== p && d.push(m), p.push(v)) }
                return p } }, 1705: function(t, e, n) { var r = n(1706);
            t.exports = function(t, e) { return !!(null == t ? 0 : t.length) && r(t, e, 0) > -1 } }, 1706: function(t, e, n) { var r = n(1594),
                i = n(1707),
                o = n(1708);
            t.exports = function(t, e, n) { return e === e ? o(t, e, n) : r(t, i, n) } }, 1707: function(t, e) { t.exports = function(t) { return t !== t } }, 1708: function(t, e) { t.exports = function(t, e, n) { for (var r = n - 1, i = t.length; ++r < i;)
                    if (t[r] === e) return r;
                return -1 } }, 1709: function(t, e) { t.exports = function(t, e, n) { for (var r = -1, i = null == t ? 0 : t.length; ++r < i;)
                    if (n(e, t[r])) return !0;
                return !1 } }, 1710: function(t, e, n) { var r = n(810),
                i = n(489),
                o = n(799),
                a = r && 1 / o(new r([, -0]))[1] == 1 / 0 ? function(t) { return new r(t) } : i;
            t.exports = a }, 1711: function(t, e, n) { "use strict";
            n.d(e, "a", (function() { return i })); var r = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

            function i(t) { if (!(e = r.exec(t))) throw new Error("invalid format: " + t); var e; return new o({ fill: e[1], align: e[2], sign: e[3], symbol: e[4], zero: e[5], width: e[6], comma: e[7], precision: e[8] && e[8].slice(1), trim: e[9], type: e[10] }) }

            function o(t) { this.fill = void 0 === t.fill ? " " : t.fill + "", this.align = void 0 === t.align ? ">" : t.align + "", this.sign = void 0 === t.sign ? "-" : t.sign + "", this.symbol = void 0 === t.symbol ? "" : t.symbol + "", this.zero = !!t.zero, this.width = void 0 === t.width ? void 0 : +t.width, this.comma = !!t.comma, this.precision = void 0 === t.precision ? void 0 : +t.precision, this.trim = !!t.trim, this.type = void 0 === t.type ? "" : t.type + "" }
            i.prototype = o.prototype, o.prototype.toString = function() { return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type } }, 1712: function(t, e, n) { "use strict"; var r = n(1552);
            e.a = function(t) { var e = t,
                    n = t;

                function i(t, e, r, i) { for (null == r && (r = 0), null == i && (i = t.length); r < i;) { var o = r + i >>> 1;
                        n(t[o], e) < 0 ? r = o + 1 : i = o } return r } return 1 === t.length && (e = function(e, n) { return t(e) - n }, n = function(t) { return function(e, n) { return Object(r.a)(t(e), n) } }(t)), { left: i, center: function(t, n, r, o) { null == r && (r = 0), null == o && (o = t.length); var a = i(t, n, r, o - 1); return a > r && e(t[a - 1], n) > -e(t[a], n) ? a - 1 : a }, right: function(t, e, r, i) { for (null == r && (r = 0), null == i && (i = t.length); r < i;) { var o = r + i >>> 1;
                            n(t[o], e) > 0 ? i = o : r = o + 1 } return r } } } }, 1713: function(t, e, n) { var r = n(808),
                i = n(777),
                o = n(1714),
                a = n(162),
                s = n(1530);
            t.exports = function(t, e, n) { var u = a(t) ? r : o; return n && s(t, e, n) && (e = void 0), u(t, i(e, 3)) } }, 1714: function(t, e, n) { var r = n(796);
            t.exports = function(t, e) { var n; return r(t, (function(t, r, i) { return !(n = e(t, r, i)) })), !!n } }, 1715: function(t, e, n) { var r = n(1542),
                i = n(812),
                o = n(777);
            t.exports = function(t, e) { var n = {}; return e = o(e, 3), i(t, (function(t, i, o) { r(n, i, e(t, i, o)) })), n } }, 1716: function(t, e, n) { "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }); var r = s(n(1717)),
                i = n(1722),
                o = s(n(1604)),
                a = s(n(1725));

            function s(t) { return t && t.__esModule ? t : { default: t } } var u = /((?:\-[a-z]+\-)?calc)/;
            e.default = function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5; return (0, r.default)(t).walk((function(t) { if ("function" === t.type && u.test(t.value)) { var n = r.default.stringify(t.nodes); if (!(n.indexOf("constant") >= 0 || n.indexOf("env") >= 0)) { var s = i.parser.parse(n),
                                c = (0, o.default)(s, e);
                            t.type = "word", t.value = (0, a.default)(t.value, c, e) } } }), !0).toString() }, t.exports = e.default }, 1717: function(t, e, n) { var r = n(1718),
                i = n(1719),
                o = n(1720);

            function a(t) { return this instanceof a ? (this.nodes = r(t), this) : new a(t) }
            a.prototype.toString = function() { return Array.isArray(this.nodes) ? o(this.nodes) : "" }, a.prototype.walk = function(t, e) { return i(this.nodes, t, e), this }, a.unit = n(1721), a.walk = i, a.stringify = o, t.exports = a }, 1718: function(t, e) { var n = "(".charCodeAt(0),
                r = ")".charCodeAt(0),
                i = "'".charCodeAt(0),
                o = '"'.charCodeAt(0),
                a = "\\".charCodeAt(0),
                s = "/".charCodeAt(0),
                u = ",".charCodeAt(0),
                c = ":".charCodeAt(0),
                l = "*".charCodeAt(0);
            t.exports = function(t) { for (var e, h, f, p, d, y, v, m, g = [], b = t, w = 0, x = b.charCodeAt(w), O = b.length, _ = [{ nodes: g }], M = 0, j = "", S = "", E = ""; w < O;)
                    if (x <= 32) { e = w;
                        do { e += 1, x = b.charCodeAt(e) } while (x <= 32);
                        p = b.slice(w, e), f = g[g.length - 1], x === r && M ? E = p : f && "div" === f.type ? f.after = p : x === u || x === c || x === s && b.charCodeAt(e + 1) !== l ? S = p : g.push({ type: "space", sourceIndex: w, value: p }), w = e } else if (x === i || x === o) { e = w, p = { type: "string", sourceIndex: w, quote: h = x === i ? "'" : '"' };
                    do { if (d = !1, ~(e = b.indexOf(h, e + 1)))
                            for (y = e; b.charCodeAt(y - 1) === a;) y -= 1, d = !d;
                        else e = (b += h).length - 1, p.unclosed = !0 } while (d);
                    p.value = b.slice(w + 1, e), g.push(p), w = e + 1, x = b.charCodeAt(w) } else if (x === s && b.charCodeAt(w + 1) === l) p = { type: "comment", sourceIndex: w }, -1 === (e = b.indexOf("*/", w)) && (p.unclosed = !0, e = b.length), p.value = b.slice(w + 2, e), g.push(p), w = e + 2, x = b.charCodeAt(w);
                else if (x === s || x === u || x === c) p = b[w], g.push({ type: "div", sourceIndex: w - S.length, value: p, before: S, after: "" }), S = "", w += 1, x = b.charCodeAt(w);
                else if (n === x) { e = w;
                    do { e += 1, x = b.charCodeAt(e) } while (x <= 32); if (p = { type: "function", sourceIndex: w - j.length, value: j, before: b.slice(w + 1, e) }, w = e, "url" === j && x !== i && x !== o) { e -= 1;
                        do { if (d = !1, ~(e = b.indexOf(")", e + 1)))
                                for (y = e; b.charCodeAt(y - 1) === a;) y -= 1, d = !d;
                            else e = (b += ")").length - 1, p.unclosed = !0 } while (d);
                        v = e;
                        do { v -= 1, x = b.charCodeAt(v) } while (x <= 32);
                        p.nodes = w !== v + 1 ? [{ type: "word", sourceIndex: w, value: b.slice(w, v + 1) }] : [], p.unclosed && v + 1 !== e ? (p.after = "", p.nodes.push({ type: "space", sourceIndex: v + 1, value: b.slice(v + 1, e) })) : p.after = b.slice(v + 1, e), w = e + 1, x = b.charCodeAt(w), g.push(p) } else M += 1, p.after = "", g.push(p), _.push(p), g = p.nodes = [], m = p;
                    j = "" } else if (r === x && M) w += 1, x = b.charCodeAt(w), m.after = E, E = "", M -= 1, _.pop(), g = (m = _[M]).nodes;
                else { e = w;
                    do { x === a && (e += 1), e += 1, x = b.charCodeAt(e) } while (e < O && !(x <= 32 || x === i || x === o || x === u || x === c || x === s || x === n || x === r && M));
                    p = b.slice(w, e), n === x ? j = p : g.push({ type: "word", sourceIndex: w, value: p }), w = e } for (w = _.length - 1; w; w -= 1) _[w].unclosed = !0; return _[0].nodes } }, 1719: function(t, e) { t.exports = function t(e, n, r) { var i, o, a, s; for (i = 0, o = e.length; i < o; i += 1) a = e[i], r || (s = n(a, i, e)), !1 !== s && "function" === a.type && Array.isArray(a.nodes) && t(a.nodes, n, r), r && n(a, i, e) } }, 1720: function(t, e) {
            function n(t, e) { var n, i, o = t.type,
                    a = t.value; return e && void 0 !== (i = e(t)) ? i : "word" === o || "space" === o ? a : "string" === o ? (n = t.quote || "") + a + (t.unclosed ? "" : n) : "comment" === o ? "/*" + a + (t.unclosed ? "" : "*/") : "div" === o ? (t.before || "") + a + (t.after || "") : Array.isArray(t.nodes) ? (n = r(t.nodes), "function" !== o ? n : a + "(" + (t.before || "") + n + (t.after || "") + (t.unclosed ? "" : ")")) : a }

            function r(t, e) { var r, i; if (Array.isArray(t)) { for (r = "", i = t.length - 1; ~i; i -= 1) r = n(t[i], e) + r; return r } return n(t, e) }
            t.exports = r }, 1721: function(t, e) { var n = "-".charCodeAt(0),
                r = "+".charCodeAt(0),
                i = ".".charCodeAt(0),
                o = "e".charCodeAt(0),
                a = "E".charCodeAt(0);
            t.exports = function(t) { for (var e, s = 0, u = t.length, c = !1, l = -1, h = !1; s < u;) { if ((e = t.charCodeAt(s)) >= 48 && e <= 57) h = !0;
                    else if (e === o || e === a) { if (l > -1) break;
                        l = s } else if (e === i) { if (c) break;
                        c = !0 } else { if (e !== r && e !== n) break; if (0 !== s) break }
                    s += 1 } return l + 1 === s && s--, !!h && { number: t.slice(0, s), unit: t.slice(s) } } }, 1722: function(t, e, n) { var r = function() {
                function t(t, e) { var n; if (Object.defineProperty(this, "name", { enumerable: !1, writable: !1, value: "JisonParserError" }), null == t && (t = "???"), Object.defineProperty(this, "message", { enumerable: !1, writable: !0, value: t }), this.hash = e, e && e.exception instanceof Error) { var r = e.exception;
                        this.message = r.message || t, n = r.stack }
                    n || (Error.hasOwnProperty("captureStackTrace") ? Error.captureStackTrace(this, this.constructor) : n = new Error(t).stack), n && Object.defineProperty(this, "stack", { enumerable: !1, writable: !1, value: n }) }

                function e(t, e, n) { n = n || 0; for (var r = 0; r < e; r++) this.push(t), t += n }

                function n(t, e) { for (e += t = this.length - t; t < e; t++) this.push(this[t]) }

                function r(t) { for (var e = [], n = 0, r = t.length; n < r; n++) { var i = t[n]; "function" === typeof i ? (n++, i.apply(e, t[n])) : e.push(i) } return e } "function" === typeof Object.setPrototypeOf ? Object.setPrototypeOf(t.prototype, Error.prototype) : t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t.prototype.name = "JisonParserError"; var i = { trace: function() {}, JisonParserError: t, yy: {}, options: { type: "lalr", hasPartialLrUpgradeOnConflict: !0, errorRecoveryTokenDiscardCount: 3 }, symbols_: { $accept: 0, $end: 1, ADD: 3, ANGLE: 16, CHS: 22, COMMA: 14, CSS_CPROP: 13, CSS_VAR: 12, DIV: 6, EMS: 20, EOF: 1, EXS: 21, FREQ: 18, LENGTH: 15, LPAREN: 7, MUL: 5, NESTED_CALC: 9, NUMBER: 11, PERCENTAGE: 28, PREFIX: 10, REMS: 23, RES: 19, RPAREN: 8, SUB: 4, TIME: 17, VHS: 24, VMAXS: 27, VMINS: 26, VWS: 25, css_value: 33, css_variable: 32, error: 2, expression: 29, math_expression: 30, value: 31 }, terminals_: { 1: "EOF", 2: "error", 3: "ADD", 4: "SUB", 5: "MUL", 6: "DIV", 7: "LPAREN", 8: "RPAREN", 9: "NESTED_CALC", 10: "PREFIX", 11: "NUMBER", 12: "CSS_VAR", 13: "CSS_CPROP", 14: "COMMA", 15: "LENGTH", 16: "ANGLE", 17: "TIME", 18: "FREQ", 19: "RES", 20: "EMS", 21: "EXS", 22: "CHS", 23: "REMS", 24: "VHS", 25: "VWS", 26: "VMINS", 27: "VMAXS", 28: "PERCENTAGE" }, TERROR: 2, EOF: 1, originalQuoteName: null, originalParseError: null, cleanupAfterParse: null, constructParseErrorInfo: null, yyMergeLocationInfo: null, __reentrant_call_depth: 0, __error_infos: [], __error_recovery_infos: [], quoteName: function(t) { return '"' + t + '"' }, getSymbolName: function(t) { if (this.terminals_[t]) return this.terminals_[t]; var e = this.symbols_; for (var n in e)
                            if (e[n] === t) return n;
                        return null }, describeSymbol: function(t) { if (t !== this.EOF && this.terminal_descriptions_ && this.terminal_descriptions_[t]) return this.terminal_descriptions_[t]; if (t === this.EOF) return "end of input"; var e = this.getSymbolName(t); return e ? this.quoteName(e) : null }, collect_expected_token_set: function(t, e) { var n = this.TERROR,
                            r = [],
                            i = {}; if (!e && this.state_descriptions_ && this.state_descriptions_[t]) return [this.state_descriptions_[t]]; for (var o in this.table[t])
                            if ((o = +o) !== n) { var a = e ? o : this.describeSymbol(o);
                                a && !i[a] && (r.push(a), i[a] = !0) }
                        return r }, productions_: function(t) { for (var e = [], n = t.pop, r = t.rule, i = 0, o = n.length; i < o; i++) e.push([n[i], r[i]]); return e }({ pop: r([29, e, [30, 10], 31, 31, 32, 32, e, [33, 15]]), rule: r([2, e, [3, 5], 4, 7, e, [1, 4], 2, 4, 6, e, [1, 14], 2]) }), performAction: function(t, e, n) { var r = this.yy;
                        r.parser, r.lexer; switch (t) {
                            case 0:
                            case 6:
                                this.$ = n[e - 1]; break;
                            case 1:
                                return this.$ = n[e - 1], n[e - 1];
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                                this.$ = { type: "MathExpression", operator: n[e - 1], left: n[e - 2], right: n[e] }; break;
                            case 7:
                                this.$ = { type: "Calc", value: n[e - 1] }; break;
                            case 8:
                                this.$ = { type: "Calc", value: n[e - 1], prefix: n[e - 5] }; break;
                            case 9:
                            case 10:
                            case 11:
                                this.$ = n[e]; break;
                            case 12:
                                this.$ = { type: "Value", value: parseFloat(n[e]) }; break;
                            case 13:
                                this.$ = { type: "Value", value: -1 * parseFloat(n[e]) }; break;
                            case 14:
                                this.$ = { type: "CssVariable", value: n[e - 1] }; break;
                            case 15:
                                this.$ = { type: "CssVariable", value: n[e - 3], fallback: n[e - 1] }; break;
                            case 16:
                                this.$ = { type: "LengthValue", value: parseFloat(n[e]), unit: /[a-z]+/.exec(n[e])[0] }; break;
                            case 17:
                                this.$ = { type: "AngleValue", value: parseFloat(n[e]), unit: /[a-z]+/.exec(n[e])[0] }; break;
                            case 18:
                                this.$ = { type: "TimeValue", value: parseFloat(n[e]), unit: /[a-z]+/.exec(n[e])[0] }; break;
                            case 19:
                                this.$ = { type: "FrequencyValue", value: parseFloat(n[e]), unit: /[a-z]+/.exec(n[e])[0] }; break;
                            case 20:
                                this.$ = { type: "ResolutionValue", value: parseFloat(n[e]), unit: /[a-z]+/.exec(n[e])[0] }; break;
                            case 21:
                                this.$ = { type: "EmValue", value: parseFloat(n[e]), unit: "em" }; break;
                            case 22:
                                this.$ = { type: "ExValue", value: parseFloat(n[e]), unit: "ex" }; break;
                            case 23:
                                this.$ = { type: "ChValue", value: parseFloat(n[e]), unit: "ch" }; break;
                            case 24:
                                this.$ = { type: "RemValue", value: parseFloat(n[e]), unit: "rem" }; break;
                            case 25:
                                this.$ = { type: "VhValue", value: parseFloat(n[e]), unit: "vh" }; break;
                            case 26:
                                this.$ = { type: "VwValue", value: parseFloat(n[e]), unit: "vw" }; break;
                            case 27:
                                this.$ = { type: "VminValue", value: parseFloat(n[e]), unit: "vmin" }; break;
                            case 28:
                                this.$ = { type: "VmaxValue", value: parseFloat(n[e]), unit: "vmax" }; break;
                            case 29:
                                this.$ = { type: "PercentageValue", value: parseFloat(n[e]), unit: "%" }; break;
                            case 30:
                                var i = n[e];
                                i.value *= -1, this.$ = i } }, table: function(t) { for (var e = [], n = t.len, r = t.symbol, i = t.type, o = t.state, a = t.mode, s = t.goto, u = 0, c = n.length; u < c; u++) { for (var l = n[u], h = {}, f = 0; f < l; f++) { var p = r.shift(); switch (i.shift()) {
                                    case 2:
                                        h[p] = [a.shift(), s.shift()]; break;
                                    case 0:
                                        h[p] = o.shift(); break;
                                    default:
                                        h[p] = [3] } }
                            e.push(h) } return e }({ len: r([24, 1, 5, 23, 1, 18, e, [0, 3], 1, e, [0, 16], e, [23, 4], n, [28, 3], 0, 0, 16, 1, 6, 6, e, [0, 3], 5, 1, 2, n, [37, 3], n, [20, 3], 5, 0, 0]), symbol: r([4, 7, 9, 11, 12, e, [15, 19, 1], 1, 1, e, [3, 4, 1], n, [30, 19], n, [29, 4], 7, 4, 10, 11, n, [22, 14], n, [19, 3], n, [43, 22], n, [23, 69], n, [139, 4], 8, n, [51, 24], 4, n, [138, 15], 13, n, [186, 5], 8, n, [6, 6], n, [5, 5], 9, 8, 14, n, [159, 47], n, [60, 10]]), type: r([e, [2, 19], e, [0, 5], 1, e, [2, 24], e, [0, 4], n, [22, 19], n, [43, 42], n, [23, 70], n, [28, 25], n, [45, 25], n, [113, 54]]), state: r([1, 2, 8, 6, 7, 30, n, [4, 3], 33, 37, n, [5, 3], 38, n, [4, 3], 39, n, [4, 3], 40, n, [4, 3], 42, n, [21, 4], 50, n, [5, 3], 51, n, [4, 3]]), mode: r([e, [1, 179], e, [2, 3], n, [5, 5], n, [6, 4], e, [1, 57]]), goto: r([5, 3, 4, 24, e, [9, 15, 1], e, [25, 5, 1], n, [24, 19], 31, 35, 32, 34, n, [18, 14], 36, n, [38, 19], n, [19, 57], n, [118, 4], 41, n, [24, 19], 43, 35, n, [16, 14], 44, e, [2, 3], 28, 29, 2, e, [3, 3], 28, 29, 3, n, [53, 4], e, [45, 5, 1], n, [100, 42], 52, n, [5, 4], 53]) }), defaultActions: function(t) { for (var e = {}, n = t.idx, r = t.goto, i = 0, o = n.length; i < o; i++) { e[n[i]] = r[i] } return e }({ idx: r([6, 7, 8, e, [10, 16, 1], 33, 34, 39, 40, 41, 45, 47, 52, 53]), goto: r([9, 10, 11, e, [16, 14, 1], 12, 1, 30, 13, e, [4, 4, 1], 14, 15, 8]) }), parseError: function(t, e, n) { if (!e.recoverable) throw "function" === typeof this.trace && this.trace(t), n || (n = this.JisonParserError), new n(t, e); "function" === typeof this.trace && this.trace(t), e.destroy() }, parse: function(t) { var e, n = this,
                            r = new Array(128),
                            i = new Array(128),
                            o = new Array(128),
                            a = this.table,
                            s = 0,
                            u = 0,
                            c = (this.TERROR, this.EOF),
                            l = (this.options.errorRecoveryTokenDiscardCount, [0, 54]);
                        e = this.__lexer__ ? this.__lexer__ : this.__lexer__ = Object.create(this.lexer); var h = { parseError: void 0, quoteName: void 0, lexer: void 0, parser: void 0, pre_parse: void 0, post_parse: void 0, pre_lex: void 0, post_lex: void 0 };

                        function f() { var t = e.fastLex(); return "number" !== typeof t && (t = n.symbols_[t] || t), t || c } "function" !== typeof assert || assert, this.yyGetSharedState = function() { return h },
                            function(t, e) { for (var n in e) "undefined" === typeof t[n] && Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]) }(h, this.yy), h.lexer = e, h.parser = this, "function" === typeof h.parseError ? this.parseError = function(t, e, n) { return n || (n = this.JisonParserError), h.parseError.call(this, t, e, n) } : this.parseError = this.originalParseError, "function" === typeof h.quoteName ? this.quoteName = function(t) { return h.quoteName.call(this, t) } : this.quoteName = this.originalQuoteName, this.cleanupAfterParse = function(t, n, a) { var u, c;
                                n && ((h.post_parse || this.post_parse) && (c = this.constructParseErrorInfo(null, null, null, !1)), h.post_parse && "undefined" !== typeof(u = h.post_parse.call(this, h, t, c)) && (t = u), this.post_parse && "undefined" !== typeof(u = this.post_parse.call(this, h, t, c)) && (t = u), c && c.destroy && c.destroy()); if (this.__reentrant_call_depth > 1) return t; if (e.cleanupAfterLex && e.cleanupAfterLex(a), h && (h.lexer = void 0, h.parser = void 0, e.yy === h && (e.yy = void 0)), h = void 0, this.parseError = this.originalParseError, this.quoteName = this.originalQuoteName, r.length = 0, i.length = 0, o.length = 0, s = 0, !a) { for (var l = this.__error_infos.length - 1; l >= 0; l--) { var f = this.__error_infos[l];
                                        f && "function" === typeof f.destroy && f.destroy() }
                                    this.__error_infos.length = 0 } return t }, this.constructParseErrorInfo = function(t, n, a, c) { var l = { errStr: t, exception: n, text: e.match, value: e.yytext, token: this.describeSymbol(u) || u, token_id: u, line: e.yylineno, expected: a, recoverable: c, state: p, action: d, new_state: w, symbol_stack: r, state_stack: i, value_stack: o, stack_pointer: s, yy: h, lexer: e, parser: this, destroy: function() { var t = !!this.recoverable; for (var e in this) this.hasOwnProperty(e) && "object" === typeof e && (this[e] = void 0);
                                        this.recoverable = t } }; return this.__error_infos.push(l), l }; var p, d, y, v, m, g, b, w, x = function() { var t = e.lex(); return "number" !== typeof t && (t = n.symbols_[t] || t), t || c },
                            O = { $: !0, _$: void 0, yy: h },
                            _ = !1; try { if (this.__reentrant_call_depth++, e.setInput(t, h), "function" === typeof e.canIUse) e.canIUse().fastLex && (x = f); for (o[s] = null, i[s] = 0, r[s] = 0, ++s, this.pre_parse && this.pre_parse.call(this, h), h.pre_parse && h.pre_parse.call(this, h), w = i[s - 1];;) { if (p = w, this.defaultActions[p]) d = 2, w = this.defaultActions[p];
                                else if (u || (u = x()), v = a[p] && a[p][u] || l, w = v[1], !(d = v[0])) { var M, j = this.describeSymbol(u) || u,
                                        S = this.collect_expected_token_set(p);
                                    M = "number" === typeof e.yylineno ? "Parse error on line " + (e.yylineno + 1) + ": " : "Parse error: ", "function" === typeof e.showPosition && (M += "\n" + e.showPosition(69, 10) + "\n"), S.length ? M += "Expecting " + S.join(", ") + ", got unexpected " + j : M += "Unexpected " + j, m = this.constructParseErrorInfo(M, null, S, !1), "undefined" !== typeof(y = this.parseError(m.errStr, m, this.JisonParserError)) && (_ = y); break } switch (d) { default: if (d instanceof Array) { m = this.constructParseErrorInfo("Parse Error: multiple actions possible at state: " + p + ", token: " + u, null, null, !1), "undefined" !== typeof(y = this.parseError(m.errStr, m, this.JisonParserError)) && (_ = y); break }m = this.constructParseErrorInfo("Parsing halted. No viable error recovery approach available due to internal system failure.", null, null, !1), "undefined" !== typeof(y = this.parseError(m.errStr, m, this.JisonParserError)) && (_ = y); break;
                                    case 1:
                                            r[s] = u, o[s] = e.yytext, i[s] = w, ++s, u = 0; continue;
                                    case 2:
                                            if (g = (b = this.productions_[w - 1])[1], "undefined" !== typeof(y = this.performAction.call(O, w, s - 1, o))) { _ = y; break }s -= g; var E = b[0];r[s] = E, o[s] = O.$, w = a[i[s - 1]][E], i[s] = w, ++s; continue;
                                    case 3:
                                            -2 !== s && (_ = !0, s--, "undefined" !== typeof o[s] && (_ = o[s])) } break } } catch (k) { if (k instanceof this.JisonParserError) throw k; if (e && "function" === typeof e.JisonLexerError && k instanceof e.JisonLexerError) throw k;
                            m = this.constructParseErrorInfo("Parsing aborted due to exception.", k, null, !1), _ = !1, "undefined" !== typeof(y = this.parseError(m.errStr, m, this.JisonParserError)) && (_ = y) } finally { _ = this.cleanupAfterParse(_, !0, !0), this.__reentrant_call_depth-- } return _ } };
                i.originalParseError = i.parseError, i.originalQuoteName = i.quoteName; var o = function() {
                    function t(t, e) { var n; if (Object.defineProperty(this, "name", { enumerable: !1, writable: !1, value: "JisonLexerError" }), null == t && (t = "???"), Object.defineProperty(this, "message", { enumerable: !1, writable: !0, value: t }), this.hash = e, e && e.exception instanceof Error) { var r = e.exception;
                            this.message = r.message || t, n = r.stack }
                        n || (Error.hasOwnProperty("captureStackTrace") ? Error.captureStackTrace(this, this.constructor) : n = new Error(t).stack), n && Object.defineProperty(this, "stack", { enumerable: !1, writable: !1, value: n }) } "function" === typeof Object.setPrototypeOf ? Object.setPrototypeOf(t.prototype, Error.prototype) : t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t.prototype.name = "JisonLexerError"; var e = { EOF: 1, ERROR: 2, __currentRuleSet__: null, __error_infos: [], __decompressed: !1, done: !1, _backtrack: !1, _input: "", _more: !1, _signaled_error_token: !1, conditionStack: [], match: "", matched: "", matches: !1, yytext: "", offset: 0, yyleng: 0, yylineno: 0, yylloc: null, constructLexErrorInfo: function(t, e, n) { if (t = "" + t, void 0 == n && (n = !(t.indexOf("\n") > 0 && t.indexOf("^") > 0)), this.yylloc && n)
                                if ("function" === typeof this.prettyPrintRange) { this.prettyPrintRange(this.yylloc); /\n\s*$/.test(t) || (t += "\n"), t += "\n  Erroneous area:\n" + this.prettyPrintRange(this.yylloc) } else if ("function" === typeof this.showPosition) { var r = this.showPosition();
                                r && (t.length && "\n" !== t[t.length - 1] && "\n" !== r[0] ? t += "\n" + r : t += r) } var i = { errStr: t, recoverable: !!e, text: this.match, token: null, line: this.yylineno, loc: this.yylloc, yy: this.yy, lexer: this, destroy: function() { var t = !!this.recoverable; for (var e in this) this.hasOwnProperty(e) && "object" === typeof e && (this[e] = void 0);
                                    this.recoverable = t } }; return this.__error_infos.push(i), i }, parseError: function(t, e, n) { if (n || (n = this.JisonLexerError), this.yy) { if (this.yy.parser && "function" === typeof this.yy.parser.parseError) return this.yy.parser.parseError.call(this, t, e, n) || this.ERROR; if ("function" === typeof this.yy.parseError) return this.yy.parseError.call(this, t, e, n) || this.ERROR } throw new n(t, e) }, yyerror: function(t) { var e = "";
                            this.yylloc && (e = " on line " + (this.yylineno + 1)); var n = this.constructLexErrorInfo("Lexical error" + e + ": " + t, this.options.lexerErrorsAreRecoverable),
                                r = Array.prototype.slice.call(arguments, 1); return r.length && (n.extra_error_attributes = r), this.parseError(n.errStr, n, this.JisonLexerError) || this.ERROR }, cleanupAfterLex: function(t) { if (this.setInput("", {}), !t) { for (var e = this.__error_infos.length - 1; e >= 0; e--) { var n = this.__error_infos[e];
                                    n && "function" === typeof n.destroy && n.destroy() }
                                this.__error_infos.length = 0 } return this }, clear: function() { this.yytext = "", this.yyleng = 0, this.match = "", this.matches = !1, this._more = !1, this._backtrack = !1; var t = this.yylloc ? this.yylloc.last_column : 0;
                            this.yylloc = { first_line: this.yylineno + 1, first_column: t, last_line: this.yylineno + 1, last_column: t, range: [this.offset, this.offset] } }, setInput: function(t, e) { if (this.yy = e || this.yy || {}, !this.__decompressed) { for (var n = this.rules, r = 0, i = n.length; r < i; r++) { "number" === typeof(f = n[r]) && (n[r] = n[f]) } var o = this.conditions; for (var a in o) { var s = o[a],
                                        u = s.rules,
                                        c = (i = u.length, new Array(i + 1)),
                                        l = new Array(i + 1); for (r = 0; r < i; r++) { var h = u[r],
                                            f = n[h];
                                        c[r + 1] = f, l[r + 1] = h }
                                    s.rules = l, s.__rule_regexes = c, s.__rule_count = i }
                                this.__decompressed = !0 } return this._input = t || "", this.clear(), this._signaled_error_token = !1, this.done = !1, this.yylineno = 0, this.matched = "", this.conditionStack = ["INITIAL"], this.__currentRuleSet__ = null, this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0, range: [0, 0] }, this.offset = 0, this }, editRemainingInput: function(t, e) { var n = t.call(this, this._input, e); return "string" !== typeof n ? n && (this._input = "" + n) : this._input = n, this }, input: function() { if (!this._input) return null; var t = this._input[0];
                            this.yytext += t, this.yyleng++, this.offset++, this.match += t, this.matched += t; var e = 1,
                                n = !1; if ("\n" === t) n = !0;
                            else if ("\r" === t) { n = !0; var r = this._input[1]; "\n" === r && (e++, t += r, this.yytext += r, this.yyleng++, this.offset++, this.match += r, this.matched += r, this.yylloc.range[1]++) } return n ? (this.yylineno++, this.yylloc.last_line++, this.yylloc.last_column = 0) : this.yylloc.last_column++, this.yylloc.range[1]++, this._input = this._input.slice(e), t }, unput: function(t) { var e = t.length,
                                n = t.split(/(?:\r\n?|\n)/g); if (this._input = t + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - e), this.yyleng = this.yytext.length, this.offset -= e, this.match = this.match.substr(0, this.match.length - e), this.matched = this.matched.substr(0, this.matched.length - e), n.length > 1) { this.yylineno -= n.length - 1, this.yylloc.last_line = this.yylineno + 1; var r = this.match,
                                    i = r.split(/(?:\r\n?|\n)/g);
                                1 === i.length && (i = (r = this.matched).split(/(?:\r\n?|\n)/g)), this.yylloc.last_column = i[i.length - 1].length } else this.yylloc.last_column -= e; return this.yylloc.range[1] = this.yylloc.range[0] + this.yyleng, this.done = !1, this }, more: function() { return this._more = !0, this }, reject: function() { if (this.options.backtrack_lexer) this._backtrack = !0;
                            else { var t = "";
                                this.yylloc && (t = " on line " + (this.yylineno + 1)); var e = this.constructLexErrorInfo("Lexical error" + t + ": You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).", !1);
                                this._signaled_error_token = this.parseError(e.errStr, e, this.JisonLexerError) || this.ERROR } return this }, less: function(t) { return this.unput(this.match.slice(t)) }, pastInput: function(t, e) { var n = this.matched.substring(0, this.matched.length - this.match.length);
                            t < 0 ? t = n.length : t || (t = 20), e < 0 ? e = n.length : e || (e = 1); var r = (n = n.substr(2 * -t - 2)).replace(/\r\n|\r/g, "\n").split("\n"); return (n = (r = r.slice(-e)).join("\n")).length > t && (n = "..." + n.substr(-t)), n }, upcomingInput: function(t, e) { var n = this.match;
                            t < 0 ? t = n.length + this._input.length : t || (t = 20), e < 0 ? e = t : e || (e = 1), n.length < 2 * t + 2 && (n += this._input.substring(0, 2 * t + 2)); var r = n.replace(/\r\n|\r/g, "\n").split("\n"); return (n = (r = r.slice(0, e)).join("\n")).length > t && (n = n.substring(0, t) + "..."), n }, showPosition: function(t, e) { var n = this.pastInput(t).replace(/\s/g, " "),
                                r = new Array(n.length + 1).join("-"); return n + this.upcomingInput(e).replace(/\s/g, " ") + "\n" + r + "^" }, deriveLocationInfo: function(t, e, n, r) { var i = { first_line: 1, first_column: 0, last_line: 1, last_column: 0, range: [0, 0] }; return t && (i.first_line = 0 | t.first_line, i.last_line = 0 | t.last_line, i.first_column = 0 | t.first_column, i.last_column = 0 | t.last_column, t.range && (i.range[0] = 0 | t.range[0], i.range[1] = 0 | t.range[1])), (i.first_line <= 0 || i.last_line < i.first_line) && (i.first_line <= 0 && e && (i.first_line = 0 | e.last_line, i.first_column = 0 | e.last_column, e.range && (i.range[0] = 0 | t.range[1])), (i.last_line <= 0 || i.last_line < i.first_line) && n && (i.last_line = 0 | n.first_line, i.last_column = 0 | n.first_column, n.range && (i.range[1] = 0 | t.range[0])), i.first_line <= 0 && r && (i.last_line <= 0 || r.last_line <= i.last_line) && (i.first_line = 0 | r.first_line, i.first_column = 0 | r.first_column, r.range && (i.range[0] = 0 | r.range[0])), i.last_line <= 0 && r && (i.first_line <= 0 || r.first_line >= i.first_line) && (i.last_line = 0 | r.last_line, i.last_column = 0 | r.last_column, r.range && (i.range[1] = 0 | r.range[1]))), i.last_line <= 0 && (i.first_line <= 0 ? (i.first_line = this.yylloc.first_line, i.last_line = this.yylloc.last_line, i.first_column = this.yylloc.first_column, i.last_column = this.yylloc.last_column, i.range[0] = this.yylloc.range[0], i.range[1] = this.yylloc.range[1]) : (i.last_line = this.yylloc.last_line, i.last_column = this.yylloc.last_column, i.range[1] = this.yylloc.range[1])), i.first_line <= 0 && (i.first_line = i.last_line, i.first_column = 0, i.range[1] = i.range[0]), i.first_column < 0 && (i.first_column = 0), i.last_column < 0 && (i.last_column = i.first_column > 0 ? i.first_column : 80), i }, prettyPrintRange: function(t, e, n) { t = this.deriveLocationInfo(t, e, n); var r = (this.matched + this._input).split("\n"),
                                i = Math.max(1, e ? e.first_line : t.first_line - 3),
                                o = Math.max(1, n ? n.last_line : t.last_line + 1),
                                a = 1 + Math.log10(1 | o) | 0,
                                s = new Array(a).join(" "),
                                u = [],
                                c = r.slice(i - 1, o + 1).map((function(e, n) { var r = n + i,
                                        o = (s + r).substr(-a) + ": " + e,
                                        c = new Array(a + 1).join("^"),
                                        l = 3,
                                        h = 0;
                                    (r === t.first_line ? (l += t.first_column, h = Math.max(2, (r === t.last_line ? t.last_column : e.length) - t.first_column + 1)) : r === t.last_line ? h = Math.max(2, t.last_column + 1) : r > t.first_line && r < t.last_line && (h = Math.max(2, e.length + 1)), h) && (o += "\n" + c + new Array(l).join(".") + new Array(h).join("^"), e.trim().length > 0 && u.push(n)); return o = o.replace(/\t/g, " ") })); if (u.length > 4) { var l = u[1] + 1,
                                    h = u[u.length - 2] - 1,
                                    f = new Array(a + 1).join(" ") + "  (...continued...)";
                                f += "\n" + new Array(a + 1).join("-") + "  (---------------)", c.splice(l, h - l + 1, f) } return c.join("\n") }, describeYYLLOC: function(t, e) { var n, r = t.first_line,
                                i = t.last_line,
                                o = t.first_column,
                                a = t.last_column; if (0 === i - r ? (n = "line " + r + ", ", n += a - o <= 1 ? "column " + o : "columns " + o + " .. " + a) : n = "lines " + r + "(column " + o + ") .. " + i + "(column " + a + ")", t.range && e) { var s = t.range[0],
                                    u = t.range[1] - 1;
                                n += u <= s ? " {String Offset: " + s + "}" : " {String Offset range: " + s + " .. " + u + "}" } return n }, test_match: function(t, e) { var n, r, i, o, a; if (this.options.backtrack_lexer && (i = { yylineno: this.yylineno, yylloc: { first_line: this.yylloc.first_line, last_line: this.yylloc.last_line, first_column: this.yylloc.first_column, last_column: this.yylloc.last_column, range: this.yylloc.range.slice(0) }, yytext: this.yytext, match: this.match, matches: this.matches, matched: this.matched, yyleng: this.yyleng, offset: this.offset, _more: this._more, _input: this._input, yy: this.yy, conditionStack: this.conditionStack.slice(0), done: this.done }), a = (o = t[0]).length, (r = o.split(/(?:\r\n?|\n)/g)).length > 1 ? (this.yylineno += r.length - 1, this.yylloc.last_line = this.yylineno + 1, this.yylloc.last_column = r[r.length - 1].length) : this.yylloc.last_column += a, this.yytext += o, this.match += o, this.matched += o, this.matches = t, this.yyleng = this.yytext.length, this.yylloc.range[1] += a, this.offset += a, this._more = !1, this._backtrack = !1, this._input = this._input.slice(a), n = this.performAction.call(this, this.yy, e, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), n) return n; if (this._backtrack) { for (var s in i) this[s] = i[s]; return this.__currentRuleSet__ = null, !1 } return !!this._signaled_error_token && (n = this._signaled_error_token, this._signaled_error_token = !1, n) }, next: function() { if (this.done) return this.clear(), this.EOF; var t, e, n, r;
                            this._input || (this.done = !0), this._more || this.clear(); var i = this.__currentRuleSet__; if (!i && (!(i = this.__currentRuleSet__ = this._currentRules()) || !i.rules)) { var o = "";
                                this.options.trackPosition && (o = " on line " + (this.yylineno + 1)); var a = this.constructLexErrorInfo("Internal lexer engine error" + o + ': The lex grammar programmer pushed a non-existing condition name "' + this.topState() + '"; this is a fatal error and should be reported to the application programmer team!', !1); return this.parseError(a.errStr, a, this.JisonLexerError) || this.ERROR } for (var s = i.rules, u = i.__rule_regexes, c = i.__rule_count, l = 1; l <= c; l++)
                                if ((n = this._input.match(u[l])) && (!e || n[0].length > e[0].length)) { if (e = n, r = l, this.options.backtrack_lexer) { if (!1 !== (t = this.test_match(n, s[l]))) return t; if (this._backtrack) { e = void 0; continue } return !1 } if (!this.options.flex) break }
                            if (e) return !1 !== (t = this.test_match(e, s[r])) && t; if (this._input) { o = "";
                                this.options.trackPosition && (o = " on line " + (this.yylineno + 1));
                                a = this.constructLexErrorInfo("Lexical error" + o + ": Unrecognized text.", this.options.lexerErrorsAreRecoverable); var h = this._input,
                                    f = this.topState(),
                                    p = this.conditionStack.length; return (t = this.parseError(a.errStr, a, this.JisonLexerError) || this.ERROR) === this.ERROR && (this.matches || h !== this._input || f !== this.topState() || p !== this.conditionStack.length || this.input()), t } return this.done = !0, this.clear(), this.EOF }, lex: function() { var t; for ("function" === typeof this.pre_lex && (t = this.pre_lex.call(this, 0)), "function" === typeof this.options.pre_lex && (t = this.options.pre_lex.call(this, t) || t), this.yy && "function" === typeof this.yy.pre_lex && (t = this.yy.pre_lex.call(this, t) || t); !t;) t = this.next(); return this.yy && "function" === typeof this.yy.post_lex && (t = this.yy.post_lex.call(this, t) || t), "function" === typeof this.options.post_lex && (t = this.options.post_lex.call(this, t) || t), "function" === typeof this.post_lex && (t = this.post_lex.call(this, t) || t), t }, fastLex: function() { for (var t; !t;) t = this.next(); return t }, canIUse: function() { return { fastLex: !("function" === typeof this.pre_lex || "function" === typeof this.options.pre_lex || this.yy && "function" === typeof this.yy.pre_lex || this.yy && "function" === typeof this.yy.post_lex || "function" === typeof this.options.post_lex || "function" === typeof this.post_lex) && "function" === typeof this.fastLex } }, begin: function(t) { return this.pushState(t) }, pushState: function(t) { return this.conditionStack.push(t), this.__currentRuleSet__ = null, this }, popState: function() { return this.conditionStack.length - 1 > 0 ? (this.__currentRuleSet__ = null, this.conditionStack.pop()) : this.conditionStack[0] }, topState: function(t) { return (t = this.conditionStack.length - 1 - Math.abs(t || 0)) >= 0 ? this.conditionStack[t] : "INITIAL" }, _currentRules: function() { return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]] : this.conditions.INITIAL }, stateStackSize: function() { return this.conditionStack.length }, options: { trackPosition: !0 }, JisonLexerError: t, performAction: function(t, e, n) { if (1 !== e) return this.simpleCaseActionClusters[e] }, simpleCaseActionClusters: { 0: 13, 2: 5, 3: 6, 4: 3, 5: 4, 6: 15, 7: 15, 8: 15, 9: 15, 10: 15, 11: 15, 12: 16, 13: 16, 14: 16, 15: 16, 16: 17, 17: 17, 18: 18, 19: 18, 20: 19, 21: 19, 22: 19, 23: 20, 24: 21, 25: 22, 26: 23, 27: 25, 28: 24, 29: 26, 30: 27, 31: 28, 32: 11, 33: 9, 34: 12, 35: 10, 36: 7, 37: 8, 38: 14, 39: 1 }, rules: [/^(?:(--[\d\-A-Za-z]*))/, /^(?:\s+)/, /^(?:\*)/, /^(?:\/)/, /^(?:\+)/, /^(?:-)/, /^(?:(\d+(\.\d*)?|\.\d+)px\b)/, /^(?:(\d+(\.\d*)?|\.\d+)cm\b)/, /^(?:(\d+(\.\d*)?|\.\d+)mm\b)/, /^(?:(\d+(\.\d*)?|\.\d+)in\b)/, /^(?:(\d+(\.\d*)?|\.\d+)pt\b)/, /^(?:(\d+(\.\d*)?|\.\d+)pc\b)/, /^(?:(\d+(\.\d*)?|\.\d+)deg\b)/, /^(?:(\d+(\.\d*)?|\.\d+)grad\b)/, /^(?:(\d+(\.\d*)?|\.\d+)rad\b)/, /^(?:(\d+(\.\d*)?|\.\d+)turn\b)/, /^(?:(\d+(\.\d*)?|\.\d+)s\b)/, /^(?:(\d+(\.\d*)?|\.\d+)ms\b)/, /^(?:(\d+(\.\d*)?|\.\d+)Hz\b)/, /^(?:(\d+(\.\d*)?|\.\d+)kHz\b)/, /^(?:(\d+(\.\d*)?|\.\d+)dpi\b)/, /^(?:(\d+(\.\d*)?|\.\d+)dpcm\b)/, /^(?:(\d+(\.\d*)?|\.\d+)dppx\b)/, /^(?:(\d+(\.\d*)?|\.\d+)em\b)/, /^(?:(\d+(\.\d*)?|\.\d+)ex\b)/, /^(?:(\d+(\.\d*)?|\.\d+)ch\b)/, /^(?:(\d+(\.\d*)?|\.\d+)rem\b)/, /^(?:(\d+(\.\d*)?|\.\d+)vw\b)/, /^(?:(\d+(\.\d*)?|\.\d+)vh\b)/, /^(?:(\d+(\.\d*)?|\.\d+)vmin\b)/, /^(?:(\d+(\.\d*)?|\.\d+)vmax\b)/, /^(?:(\d+(\.\d*)?|\.\d+)%)/, /^(?:(\d+(\.\d*)?|\.\d+)\b)/, /^(?:(calc))/, /^(?:(var))/, /^(?:([a-z]+))/, /^(?:\()/, /^(?:\))/, /^(?:,)/, /^(?:$)/], conditions: { INITIAL: { rules: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39], inclusive: !0 } } }; return e }();

                function a() { this.yy = {} } return i.lexer = o, a.prototype = i, i.Parser = a, new a }();
            e.parser = r, e.Parser = r.Parser, e.parse = function() { return r.parse.apply(r, arguments) } }, 1723: function(t, e, n) { "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }); var r, i = n(1724),
                o = (r = i) && r.__esModule ? r : { default: r };
            e.default = function(t, e, n) { switch (t.type) {
                    case "LengthValue":
                    case "AngleValue":
                    case "TimeValue":
                    case "FrequencyValue":
                    case "ResolutionValue":
                        return function(t, e, n) { e.type === t.type && (e = { type: t.type, value: (0, o.default)(e.value, e.unit, t.unit, n), unit: t.unit }); return { left: t, right: e } }(t, e, n);
                    default:
                        return { left: t, right: e } } }, t.exports = e.default }, 1724: function(t, e) { var n = { px: { px: 1, cm: 96 / 2.54, mm: 96 / 25.4, in: 96, pt: 96 / 72, pc: 16 }, cm: { px: 2.54 / 96, cm: 1, mm: .1, in: 2.54, pt: 2.54 / 72, pc: 2.54 / 6 }, mm: { px: 25.4 / 96, cm: 10, mm: 1, in: 25.4, pt: 25.4 / 72, pc: 25.4 / 6 }, in: { px: 1 / 96, cm: 1 / 2.54, mm: 1 / 25.4, in: 1, pt: 1 / 72, pc: 1 / 6 }, pt: { px: .75, cm: 72 / 2.54, mm: 72 / 25.4, in: 72, pt: 1, pc: 12 }, pc: { px: 6 / 96, cm: 6 / 2.54, mm: 6 / 25.4, in: 6, pt: 6 / 72, pc: 1 }, deg: { deg: 1, grad: .9, rad: 180 / Math.PI, turn: 360 }, grad: { deg: 400 / 360, grad: 1, rad: 200 / Math.PI, turn: 400 }, rad: { deg: Math.PI / 180, grad: Math.PI / 200, rad: 1, turn: 2 * Math.PI }, turn: { deg: 1 / 360, grad: 1 / 400, rad: .5 / Math.PI, turn: 1 }, s: { s: 1, ms: .001 }, ms: { s: 1e3, ms: 1 }, Hz: { Hz: 1, kHz: 1e3 }, kHz: { Hz: .001, kHz: 1 }, dpi: { dpi: 1, dpcm: 1 / 2.54, dppx: 1 / 96 }, dpcm: { dpi: 2.54, dpcm: 1, dppx: 2.54 / 96 }, dppx: { dpi: 96, dpcm: 96 / 2.54, dppx: 1 } };
            t.exports = function(t, e, r, i) { if (!n.hasOwnProperty(r)) throw new Error("Cannot convert to " + r); if (!n[r].hasOwnProperty(e)) throw new Error("Cannot convert from " + e + " to " + r); var o = n[r][e] * t; return !1 !== i ? (i = Math.pow(10, parseInt(i) || 5), Math.round(o * i) / i) : o } }, 1725: function(t, e, n) { "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }), e.default = function(t, e, n) { var r = a(e, n); return "MathExpression" === e.type && (r = t + "(" + r + ")"), r }; var r = n(1604),
                i = { "*": 0, "/": 0, "+": 1, "-": 1 };

            function o(t, e) { if (!1 !== e) { var n = Math.pow(10, e); return Math.round(t * n) / n } return t }

            function a(t, e) { switch (t.type) {
                    case "MathExpression":
                        var n = t.left,
                            s = t.right,
                            u = t.operator,
                            c = ""; return "MathExpression" === n.type && i[u] < i[n.operator] ? c += "(" + a(n, e) + ")" : c += a(n, e), c += " " + t.operator + " ", "MathExpression" === s.type && i[u] < i[s.operator] ? c += "(" + a(s, e) + ")" : "MathExpression" === s.type && "-" === u && ["+", "-"].includes(s.operator) ? (s.operator = (0, r.flip)(s.operator), c += a(s, e)) : c += a(s, e), c;
                    case "Value":
                        return o(t.value, e);
                    case "CssVariable":
                        return t.fallback ? "var(" + t.value + ", " + a(t.fallback, e) + ")" : "var(" + t.value + ")";
                    case "Calc":
                        return t.prefix ? "-" + t.prefix + "-calc(" + a(t.value, e) + ")" : "calc(" + a(t.value, e) + ")";
                    default:
                        return o(t.value, e) + t.unit } }
            t.exports = e.default }, 1726: function(t, e, n) {
            (function(e) {
                (function() { var n, r, i, o, a, s; "undefined" !== typeof performance && null !== performance && performance.now ? t.exports = function() { return performance.now() } : "undefined" !== typeof e && null !== e && e.hrtime ? (t.exports = function() { return (n() - a) / 1e6 }, r = e.hrtime, o = (n = function() { var t; return 1e9 * (t = r())[0] + t[1] })(), s = 1e9 * e.uptime(), a = o - s) : Date.now ? (t.exports = function() { return Date.now() - i }, i = Date.now()) : (t.exports = function() { return (new Date).getTime() - i }, i = (new Date).getTime()) }).call(this) }).call(this, n(63)) }, 1727: function(t, e, n) {! function(t) { "use strict"; var e = "function" === typeof WeakSet,
                    n = Object.keys;

                function r(t, e) { return t === e || t !== t && e !== e }

                function i(t) { return t.constructor === Object || null == t.constructor }

                function o(t) { return !!t && "function" === typeof t.then }

                function a(t) { return !(!t || !t.$$typeof) }

                function s() { var t = []; return { add: function(e) { t.push(e) }, has: function(e) { return -1 !== t.indexOf(e) } } } var u = e ? function() { return new WeakSet } : s;

                function c(t) { return function(e) { var n = t || e; return function(t, e, r) { void 0 === r && (r = u()); var i = !!t && "object" === typeof t,
                                o = !!e && "object" === typeof e; if (i || o) { var a = i && r.has(t),
                                    s = o && r.has(e); if (a || s) return a && s;
                                i && r.add(t), o && r.add(e) } return n(t, e, r) } } }

                function l(t, e, n, r) { var i = t.length; if (e.length !== i) return !1; for (; i-- > 0;)
                        if (!n(t[i], e[i], r)) return !1;
                    return !0 }

                function h(t, e, n, r) { var i = t.size === e.size; if (i && t.size) { var o = {};
                        t.forEach((function(t, a) { if (i) { var s = !1,
                                    u = 0;
                                e.forEach((function(e, i) { s || o[u] || (s = n(a, i, r) && n(t, e, r)) && (o[u] = !0), u++ })), i = s } })) } return i } var f = "_owner",
                    p = Function.prototype.bind.call(Function.prototype.call, Object.prototype.hasOwnProperty);

                function d(t, e, r, i) { var o = n(t),
                        s = o.length; if (n(e).length !== s) return !1; if (s)
                        for (var u = void 0; s-- > 0;) { if ((u = o[s]) === f) { var c = a(t),
                                    l = a(e); if ((c || l) && c !== l) return !1 } if (!p(e, u) || !r(t[u], e[u], i)) return !1 }
                    return !0 }

                function y(t, e) { return t.source === e.source && t.global === e.global && t.ignoreCase === e.ignoreCase && t.multiline === e.multiline && t.unicode === e.unicode && t.sticky === e.sticky && t.lastIndex === e.lastIndex }

                function v(t, e, n, r) { var i = t.size === e.size; if (i && t.size) { var o = {};
                        t.forEach((function(t) { if (i) { var a = !1,
                                    s = 0;
                                e.forEach((function(e) { a || o[s] || (a = n(t, e, r)) && (o[s] = !0), s++ })), i = a } })) } return i } var m = "function" === typeof Map,
                    g = "function" === typeof Set;

                function b(t) { var e = "function" === typeof t ? t(n) : n;

                    function n(t, n, a) { if (t === n) return !0; if (t && n && "object" === typeof t && "object" === typeof n) { if (i(t) && i(n)) return d(t, n, e, a); var s = Array.isArray(t),
                                u = Array.isArray(n); return s || u ? s === u && l(t, n, e, a) : (s = t instanceof Date, u = n instanceof Date, s || u ? s === u && r(t.getTime(), n.getTime()) : (s = t instanceof RegExp, u = n instanceof RegExp, s || u ? s === u && y(t, n) : o(t) || o(n) ? t === n : m && (s = t instanceof Map, u = n instanceof Map, s || u) ? s === u && h(t, n, e, a) : g && (s = t instanceof Set, u = n instanceof Set, s || u) ? s === u && v(t, n, e, a) : d(t, n, e, a))) } return t !== t && n !== n } return n } var w = b(),
                    x = b((function() { return r })),
                    O = b(c()),
                    _ = b(c(r));
                t.circularDeepEqual = O, t.circularShallowEqual = _, t.createCustomEqual = b, t.deepEqual = w, t.sameValueZeroEqual = r, t.shallowEqual = x, Object.defineProperty(t, "__esModule", { value: !0 }) }(e) }, 1728: function(t, e, n) { "use strict";
            e.__esModule = !0, e.default = void 0;! function(t) { if (t && t.__esModule) return t; var e = {}; if (null != t)
                    for (var n in t)
                        if (Object.prototype.hasOwnProperty.call(t, n)) { var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, n) : {};
                            r.get || r.set ? Object.defineProperty(e, n, r) : e[n] = t[n] }
                e.default = t }(n(32)); var r = s(n(1729)),
                i = s(n(1731)),
                o = s(n(1)),
                a = s(n(1607));
            n(1609);

            function s(t) { return t && t.__esModule ? t : { default: t } }

            function u() { return u = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]) } return t }, u.apply(this, arguments) } var c = function(t, e) { return t && e && e.split(" ").forEach((function(e) { return (0, r.default)(t, e) })) },
                l = function(t, e) { return t && e && e.split(" ").forEach((function(e) { return (0, i.default)(t, e) })) },
                h = function(t) { var e, n;

                    function r() { for (var e, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]; return (e = t.call.apply(t, [this].concat(r)) || this).onEnter = function(t, n) { var r = e.getClassNames(n ? "appear" : "enter").className;
                            e.removeClasses(t, "exit"), c(t, r), e.props.onEnter && e.props.onEnter(t, n) }, e.onEntering = function(t, n) { var r = e.getClassNames(n ? "appear" : "enter").activeClassName;
                            e.reflowAndAddClass(t, r), e.props.onEntering && e.props.onEntering(t, n) }, e.onEntered = function(t, n) { var r = e.getClassNames("appear").doneClassName,
                                i = e.getClassNames("enter").doneClassName,
                                o = n ? r + " " + i : i;
                            e.removeClasses(t, n ? "appear" : "enter"), c(t, o), e.props.onEntered && e.props.onEntered(t, n) }, e.onExit = function(t) { var n = e.getClassNames("exit").className;
                            e.removeClasses(t, "appear"), e.removeClasses(t, "enter"), c(t, n), e.props.onExit && e.props.onExit(t) }, e.onExiting = function(t) { var n = e.getClassNames("exit").activeClassName;
                            e.reflowAndAddClass(t, n), e.props.onExiting && e.props.onExiting(t) }, e.onExited = function(t) { var n = e.getClassNames("exit").doneClassName;
                            e.removeClasses(t, "exit"), c(t, n), e.props.onExited && e.props.onExited(t) }, e.getClassNames = function(t) { var n = e.props.classNames,
                                r = "string" === typeof n,
                                i = r ? (r && n ? n + "-" : "") + t : n[t]; return { className: i, activeClassName: r ? i + "-active" : n[t + "Active"], doneClassName: r ? i + "-done" : n[t + "Done"] } }, e }
                    n = t, (e = r).prototype = Object.create(n.prototype), e.prototype.constructor = e, e.__proto__ = n; var i = r.prototype; return i.removeClasses = function(t, e) { var n = this.getClassNames(e),
                            r = n.className,
                            i = n.activeClassName,
                            o = n.doneClassName;
                        r && l(t, r), i && l(t, i), o && l(t, o) }, i.reflowAndAddClass = function(t, e) { e && (t && t.scrollTop, c(t, e)) }, i.render = function() { var t = u({}, this.props); return delete t.classNames, o.default.createElement(a.default, u({}, t, { onEnter: this.onEnter, onEntered: this.onEntered, onEntering: this.onEntering, onExit: this.onExit, onExiting: this.onExiting, onExited: this.onExited })) }, r }(o.default.Component);
            h.defaultProps = { classNames: "" }, h.propTypes = {}; var f = h;
            e.default = f, t.exports = e.default }, 1729: function(t, e, n) { "use strict"; var r = n(416);
            e.__esModule = !0, e.default = function(t, e) { t.classList ? t.classList.add(e) : (0, i.default)(t, e) || ("string" === typeof t.className ? t.className = t.className + " " + e : t.setAttribute("class", (t.className && t.className.baseVal || "") + " " + e)) }; var i = r(n(1730));
            t.exports = e.default }, 1730: function(t, e, n) { "use strict";
            e.__esModule = !0, e.default = function(t, e) { return t.classList ? !!e && t.classList.contains(e) : -1 !== (" " + (t.className.baseVal || t.className) + " ").indexOf(" " + e + " ") }, t.exports = e.default }, 1731: function(t, e, n) { "use strict";

            function r(t, e) { return t.replace(new RegExp("(^|\\s)" + e + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "") }
            t.exports = function(t, e) { t.classList ? t.classList.remove(e) : "string" === typeof t.className ? t.className = r(t.className, e) : t.setAttribute("class", r(t.className && t.className.baseVal || "", e)) } }, 1732: function(t, e, n) { "use strict";
            e.__esModule = !0, e.default = void 0;
            a(n(32)); var r = a(n(1)),
                i = n(111),
                o = a(n(1610));

            function a(t) { return t && t.__esModule ? t : { default: t } } var s = function(t) { var e, n;

                function a() { for (var e, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]; return (e = t.call.apply(t, [this].concat(r)) || this).handleEnter = function() { for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r]; return e.handleLifecycle("onEnter", 0, n) }, e.handleEntering = function() { for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r]; return e.handleLifecycle("onEntering", 0, n) }, e.handleEntered = function() { for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r]; return e.handleLifecycle("onEntered", 0, n) }, e.handleExit = function() { for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r]; return e.handleLifecycle("onExit", 1, n) }, e.handleExiting = function() { for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r]; return e.handleLifecycle("onExiting", 1, n) }, e.handleExited = function() { for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r]; return e.handleLifecycle("onExited", 1, n) }, e }
                n = t, (e = a).prototype = Object.create(n.prototype), e.prototype.constructor = e, e.__proto__ = n; var s = a.prototype; return s.handleLifecycle = function(t, e, n) { var o, a = this.props.children,
                        s = r.default.Children.toArray(a)[e];
                    s.props[t] && (o = s.props)[t].apply(o, n), this.props[t] && this.props[t]((0, i.findDOMNode)(this)) }, s.render = function() { var t = this.props,
                        e = t.children,
                        n = t.in,
                        i = function(t, e) { if (null == t) return {}; var n, r, i = {},
                                o = Object.keys(t); for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || (i[n] = t[n]); return i }(t, ["children", "in"]),
                        a = r.default.Children.toArray(e),
                        s = a[0],
                        u = a[1]; return delete i.onEnter, delete i.onEntering, delete i.onEntered, delete i.onExit, delete i.onExiting, delete i.onExited, r.default.createElement(o.default, i, n ? r.default.cloneElement(s, { key: "first", onEnter: this.handleEnter, onEntering: this.handleEntering, onEntered: this.handleEntered }) : r.default.cloneElement(u, { key: "second", onEnter: this.handleExit, onEntering: this.handleExiting, onEntered: this.handleExited })) }, a }(r.default.Component);
            s.propTypes = {}; var u = s;
            e.default = u, t.exports = e.default }, 1733: function(t, e, n) { "use strict";
            e.__esModule = !0, e.getChildMapping = i, e.mergeChildMappings = o, e.getInitialChildMapping = function(t, e) { return i(t.children, (function(n) { return (0, r.cloneElement)(n, { onExited: e.bind(null, n), in: !0, appear: a(n, "appear", t), enter: a(n, "enter", t), exit: a(n, "exit", t) }) })) }, e.getNextChildMapping = function(t, e, n) { var s = i(t.children),
                    u = o(e, s); return Object.keys(u).forEach((function(i) { var o = u[i]; if ((0, r.isValidElement)(o)) { var c = i in e,
                            l = i in s,
                            h = e[i],
                            f = (0, r.isValidElement)(h) && !h.props.in;!l || c && !f ? l || !c || f ? l && c && (0, r.isValidElement)(h) && (u[i] = (0, r.cloneElement)(o, { onExited: n.bind(null, o), in: h.props.in, exit: a(o, "exit", t), enter: a(o, "enter", t) })) : u[i] = (0, r.cloneElement)(o, { in: !1 }) : u[i] = (0, r.cloneElement)(o, { onExited: n.bind(null, o), in: !0, exit: a(o, "exit", t), enter: a(o, "enter", t) }) } })), u }; var r = n(1);

            function i(t, e) { var n = Object.create(null); return t && r.Children.map(t, (function(t) { return t })).forEach((function(t) { n[t.key] = function(t) { return e && (0, r.isValidElement)(t) ? e(t) : t }(t) })), n }

            function o(t, e) {
                function n(n) { return n in e ? e[n] : t[n] }
                t = t || {}, e = e || {}; var r, i = Object.create(null),
                    o = []; for (var a in t) a in e ? o.length && (i[a] = o, o = []) : o.push(a); var s = {}; for (var u in e) { if (i[u])
                        for (r = 0; r < i[u].length; r++) { var c = i[u][r];
                            s[i[u][r]] = n(c) }
                    s[u] = n(u) } for (r = 0; r < o.length; r++) s[o[r]] = n(o[r]); return s }

            function a(t, e, n) { return null != n[e] ? n[e] : t.props[e] } }, 1734: function(t, e, n) { "use strict";
            n.d(e, "a", (function() { return P })); var r = n(292),
                i = n.n(r),
                o = n(511),
                a = n.n(o),
                s = n(1),
                u = n.n(s),
                c = n(406),
                l = n.n(c),
                h = n(1551),
                f = n(1556),
                p = n(1495),
                d = n(1555),
                y = n(1518),
                v = n(1511),
                m = n(1477),
                g = n(1478);

            function b(t) { return b = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t }, b(t) }

            function w() { return w = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]) } return t }, w.apply(this, arguments) }

            function x(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function O(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? x(Object(n), !0).forEach((function(e) { _(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : x(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

            function _(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t }

            function M(t, e) { if (null == t) return {}; var n, r, i = function(t, e) { if (null == t) return {}; var n, r, i = {},
                        o = Object.keys(t); for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || (i[n] = t[n]); return i }(t, e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(t); for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n]) } return i }

            function j(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

            function S(t, e) { for (var n = 0; n < e.length; n++) { var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r) } }

            function E(t, e) { return E = Object.setPrototypeOf || function(t, e) { return t.__proto__ = e, t }, E(t, e) }

            function k(t) { var e = function() { if ("undefined" === typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" === typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = C(t); if (e) { var i = C(this).constructor;
                        n = Reflect.construct(r, arguments, i) } else n = r.apply(this, arguments); return A(this, n) } }

            function A(t, e) { return !e || "object" !== b(e) && "function" !== typeof e ? function(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }(t) : e }

            function C(t) { return C = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) { return t.__proto__ || Object.getPrototypeOf(t) }, C(t) } var P = function(t) {! function(t, e) { if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && E(t, e) }(s, t); var e, n, r, o = k(s);

                function s() { return j(this, s), o.apply(this, arguments) } return e = s, r = [{ key: "getTicks", value: function(t) { var e = t.tick,
                            n = t.ticks,
                            r = t.viewBox,
                            i = t.minTickGap,
                            o = t.orientation,
                            a = t.interval,
                            u = t.tickFormatter,
                            c = t.unit; return n && n.length && e ? Object(m.g)(a) || v.a.isSsr ? s.getNumberIntervalTicks(n, "number" === typeof a && Object(m.g)(a) ? a : 0) : "preserveStartEnd" === a ? s.getTicksStart({ ticks: n, tickFormatter: u, viewBox: r, orientation: o, minTickGap: i, unit: c }, !0) : "preserveStart" === a ? s.getTicksStart({ ticks: n, tickFormatter: u, viewBox: r, orientation: o, minTickGap: i, unit: c }) : s.getTicksEnd({ ticks: n, tickFormatter: u, viewBox: r, orientation: o, minTickGap: i, unit: c }) : [] } }, { key: "getNumberIntervalTicks", value: function(t, e) { return t.filter((function(t, n) { return n % (e + 1) === 0 })) } }, { key: "getTicksStart", value: function(t, e) { var n, r, i = t.ticks,
                            o = t.tickFormatter,
                            s = t.viewBox,
                            u = t.orientation,
                            c = t.minTickGap,
                            l = t.unit,
                            h = s.x,
                            p = s.y,
                            d = s.width,
                            y = s.height,
                            v = "top" === u || "bottom" === u ? "width" : "height",
                            g = (i || []).slice(),
                            b = l && "width" === v ? Object(f.c)(l)[v] : 0,
                            w = g.length,
                            x = w >= 2 ? Object(m.i)(g[1].coordinate - g[0].coordinate) : 1; if (1 === x ? (n = "width" === v ? h : p, r = "width" === v ? h + d : p + y) : (n = "width" === v ? h + d : p + y, r = "width" === v ? h : p), e) { var _ = i[w - 1],
                                M = a()(o) ? o(_.value, w - 1) : _.value,
                                j = Object(f.c)(M)[v] + b,
                                S = x * (_.coordinate + x * j / 2 - r);
                            g[w - 1] = _ = O(O({}, _), {}, { tickCoord: S > 0 ? _.coordinate - S * x : _.coordinate }), x * (_.tickCoord - x * j / 2 - n) >= 0 && x * (_.tickCoord + x * j / 2 - r) <= 0 && (r = _.tickCoord - x * (j / 2 + c), g[w - 1] = O(O({}, _), {}, { isShow: !0 })) } for (var E = e ? w - 1 : w, k = 0; k < E; k++) { var A = g[k],
                                C = a()(o) ? o(A.value, k) : A.value,
                                P = Object(f.c)(C)[v] + b; if (0 === k) { var T = x * (A.coordinate - x * P / 2 - n);
                                g[k] = A = O(O({}, A), {}, { tickCoord: T < 0 ? A.coordinate - T * x : A.coordinate }) } else g[k] = A = O(O({}, A), {}, { tickCoord: A.coordinate });
                            x * (A.tickCoord - x * P / 2 - n) >= 0 && x * (A.tickCoord + x * P / 2 - r) <= 0 && (n = A.tickCoord + x * (P / 2 + c), g[k] = O(O({}, A), {}, { isShow: !0 })) } return g.filter((function(t) { return t.isShow })) } }, { key: "getTicksEnd", value: function(t) { var e, n, r = t.ticks,
                            i = t.tickFormatter,
                            o = t.viewBox,
                            s = t.orientation,
                            u = t.minTickGap,
                            c = t.unit,
                            l = o.x,
                            h = o.y,
                            p = o.width,
                            d = o.height,
                            y = "top" === s || "bottom" === s ? "width" : "height",
                            v = c && "width" === y ? Object(f.c)(c)[y] : 0,
                            g = (r || []).slice(),
                            b = g.length,
                            w = b >= 2 ? Object(m.i)(g[1].coordinate - g[0].coordinate) : 1;
                        1 === w ? (e = "width" === y ? l : h, n = "width" === y ? l + p : h + d) : (e = "width" === y ? l + p : h + d, n = "width" === y ? l : h); for (var x = b - 1; x >= 0; x--) { var _ = g[x],
                                M = a()(i) ? i(_.value, b - x - 1) : _.value,
                                j = Object(f.c)(M)[y] + v; if (x === b - 1) { var S = w * (_.coordinate + w * j / 2 - n);
                                g[x] = _ = O(O({}, _), {}, { tickCoord: S > 0 ? _.coordinate - S * w : _.coordinate }) } else g[x] = _ = O(O({}, _), {}, { tickCoord: _.coordinate });
                            w * (_.tickCoord - w * j / 2 - e) >= 0 && w * (_.tickCoord + w * j / 2 - n) <= 0 && (n = _.tickCoord - w * (j / 2 + u), g[x] = O(O({}, _), {}, { isShow: !0 })) } return g.filter((function(t) { return t.isShow })) } }, { key: "renderTickItem", value: function(t, e, n) { return u.a.isValidElement(t) ? u.a.cloneElement(t, e) : a()(t) ? t(e) : u.a.createElement(d.a, w({}, e, { className: "recharts-cartesian-axis-tick-value" }), n) } }], (n = [{ key: "shouldComponentUpdate", value: function(t) { var e = t.viewBox,
                            n = M(t, ["viewBox"]),
                            r = this.props,
                            i = r.viewBox,
                            o = M(r, ["viewBox"]); return !Object(h.a)(e, i) || !Object(h.a)(n, o) } }, { key: "getTickLineCoord", value: function(t) { var e, n, r, i, o, a, s = this.props,
                            u = s.x,
                            c = s.y,
                            l = s.width,
                            h = s.height,
                            f = s.orientation,
                            p = s.tickSize,
                            d = s.mirror,
                            y = s.tickMargin,
                            v = d ? -1 : 1,
                            g = t.tickSize || p,
                            b = Object(m.g)(t.tickCoord) ? t.tickCoord : t.coordinate; switch (f) {
                            case "top":
                                e = n = t.coordinate, a = (r = (i = c + +!d * h) - v * g) - v * y, o = b; break;
                            case "left":
                                r = i = t.coordinate, o = (e = (n = u + +!d * l) - v * g) - v * y, a = b; break;
                            case "right":
                                r = i = t.coordinate, o = (e = (n = u + +d * l) + v * g) + v * y, a = b; break;
                            default:
                                e = n = t.coordinate, a = (r = (i = c + +d * h) + v * g) + v * y, o = b } return { line: { x1: e, y1: r, x2: n, y2: i }, tick: { x: o, y: a } } } }, { key: "getTickTextAnchor", value: function() { var t, e = this.props,
                            n = e.orientation,
                            r = e.mirror; switch (n) {
                            case "left":
                                t = r ? "start" : "end"; break;
                            case "right":
                                t = r ? "end" : "start"; break;
                            default:
                                t = "middle" } return t } }, { key: "getTickVerticalAnchor", value: function() { var t = this.props,
                            e = t.orientation,
                            n = t.mirror,
                            r = "end"; switch (e) {
                            case "left":
                            case "right":
                                r = "middle"; break;
                            case "top":
                                r = n ? "start" : "end"; break;
                            default:
                                r = n ? "end" : "start" } return r } }, { key: "renderAxisLine", value: function() { var t = this.props,
                            e = t.x,
                            n = t.y,
                            r = t.width,
                            o = t.height,
                            a = t.orientation,
                            s = t.mirror,
                            c = t.axisLine,
                            h = O(O(O({}, Object(g.c)(this.props)), Object(g.c)(c)), {}, { fill: "none" }); if ("top" === a || "bottom" === a) { var f = +("top" === a && !s || "bottom" === a && s);
                            h = O(O({}, h), {}, { x1: e, y1: n + f * o, x2: e + r, y2: n + f * o }) } else { var p = +("left" === a && !s || "right" === a && s);
                            h = O(O({}, h), {}, { x1: e + p * r, y1: n, x2: e + p * r, y2: n + o }) } return u.a.createElement("line", w({}, h, { className: l()("recharts-cartesian-axis-line", i()(c, "className")) })) } }, { key: "renderTicks", value: function(t) { var e = this,
                            n = this.props,
                            r = n.tickLine,
                            o = n.stroke,
                            c = n.tick,
                            h = n.tickFormatter,
                            f = n.unit,
                            d = s.getTicks(O(O({}, this.props), {}, { ticks: t })),
                            y = this.getTickTextAnchor(),
                            v = this.getTickVerticalAnchor(),
                            m = Object(g.c)(this.props),
                            b = Object(g.c)(c),
                            x = O(O({}, m), {}, { fill: "none" }, Object(g.c)(r)),
                            _ = d.map((function(t, n) { var _ = e.getTickLineCoord(t),
                                    M = _.line,
                                    j = _.tick,
                                    S = O(O(O(O({ textAnchor: y, verticalAnchor: v }, m), {}, { stroke: "none", fill: o }, b), j), {}, { index: n, payload: t, visibleTicksCount: d.length, tickFormatter: h }); return u.a.createElement(p.a, w({ className: "recharts-cartesian-axis-tick", key: "tick-".concat(n) }, Object(g.b)(e.props, t, n)), r && u.a.createElement("line", w({}, x, M, { className: l()("recharts-cartesian-axis-tick-line", i()(r, "className")) })), c && s.renderTickItem(c, S, "".concat(a()(h) ? h(t.value, n) : t.value).concat(f || ""))) })); return u.a.createElement("g", { className: "recharts-cartesian-axis-ticks" }, _) } }, { key: "render", value: function() { var t = this.props,
                            e = t.axisLine,
                            n = t.width,
                            r = t.height,
                            i = t.ticksGenerator,
                            o = t.className; if (t.hide) return null; var s = this.props,
                            c = s.ticks,
                            h = M(s, ["ticks"]),
                            f = c; return a()(i) && (f = c && c.length > 0 ? i(this.props) : i(h)), n <= 0 || r <= 0 || !f || !f.length ? null : u.a.createElement(p.a, { className: l()("recharts-cartesian-axis", o) }, e && this.renderAxisLine(), this.renderTicks(f), y.a.renderCallByParent(this.props)) } }]) && S(e.prototype, n), r && S(e, r), s }(s.Component);
            P.displayName = "CartesianAxis", P.defaultProps = { x: 0, y: 0, width: 0, height: 0, viewBox: { x: 0, y: 0, width: 0, height: 0 }, orientation: "bottom", ticks: [], stroke: "#666", tickLine: !0, axisLine: !0, tick: !0, mirror: !1, minTickGap: 5, tickSize: 6, tickMargin: 2, interval: "preserveEnd" } }, 1735: function(t, e, n) { "use strict";
            n.d(e, "a", (function() { return m })); var r = n(1),
                i = n.n(r),
                o = n(406),
                a = n.n(o),
                s = n(1477),
                u = n(1478);

            function c(t) { return c = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t }, c(t) }

            function l() { return l = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]) } return t }, l.apply(this, arguments) }

            function h(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

            function f(t, e) { for (var n = 0; n < e.length; n++) { var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r) } }

            function p(t, e) { return p = Object.setPrototypeOf || function(t, e) { return t.__proto__ = e, t }, p(t, e) }

            function d(t) { var e = function() { if ("undefined" === typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" === typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = v(t); if (e) { var i = v(this).constructor;
                        n = Reflect.construct(r, arguments, i) } else n = r.apply(this, arguments); return y(this, n) } }

            function y(t, e) { return !e || "object" !== c(e) && "function" !== typeof e ? function(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }(t) : e }

            function v(t) { return v = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) { return t.__proto__ || Object.getPrototypeOf(t) }, v(t) } var m = function(t) {! function(t, e) { if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && p(t, e) }(c, t); var e, n, r, o = d(c);

                function c() { return h(this, c), o.apply(this, arguments) } return e = c, r = [{ key: "getPath", value: function(t, e, n, r, i, o) { return "M".concat(t, ",").concat(i, "v").concat(r, "M").concat(o, ",").concat(e, "h").concat(n) } }], (n = [{ key: "render", value: function() { var t = this.props,
                            e = t.x,
                            n = t.y,
                            r = t.width,
                            o = t.height,
                            h = t.top,
                            f = t.left,
                            p = t.className; return Object(s.g)(e) && Object(s.g)(n) && Object(s.g)(r) && Object(s.g)(o) && Object(s.g)(h) && Object(s.g)(f) ? i.a.createElement("path", l({}, Object(u.c)(this.props, !0), { className: a()("recharts-cross", p), d: c.getPath(e, n, r, o, h, f) })) : null } }]) && f(e.prototype, n), r && f(e, r), c }(r.PureComponent);
            m.defaultProps = { x: 0, y: 0, top: 0, left: 0, width: 0, height: 0 } }, 1736: function(t, e, n) { "use strict";
            n.d(e, "a", (function() { return w })); var r = n(1),
                i = n.n(r),
                o = n(406),
                a = n.n(o),
                s = n(1478),
                u = n(1549),
                c = n(1477);

            function l(t) { return l = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t }, l(t) }

            function h() { return h = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]) } return t }, h.apply(this, arguments) }

            function f(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

            function p(t, e) { for (var n = 0; n < e.length; n++) { var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r) } }

            function d(t, e) { return d = Object.setPrototypeOf || function(t, e) { return t.__proto__ = e, t }, d(t, e) }

            function y(t) { var e = function() { if ("undefined" === typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" === typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = m(t); if (e) { var i = m(this).constructor;
                        n = Reflect.construct(r, arguments, i) } else n = r.apply(this, arguments); return v(this, n) } }

            function v(t, e) { return !e || "object" !== l(e) && "function" !== typeof e ? function(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }(t) : e }

            function m(t) { return m = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) { return t.__proto__ || Object.getPrototypeOf(t) }, m(t) } var g = function(t) { var e = t.cx,
                        n = t.cy,
                        r = t.radius,
                        i = t.angle,
                        o = t.sign,
                        a = t.isExternal,
                        s = t.cornerRadius,
                        c = t.cornerIsExternal,
                        l = s * (a ? 1 : -1) + r,
                        h = Math.asin(s / l) / u.a,
                        f = c ? i : i + o * h,
                        p = c ? i - o * h : i; return { center: Object(u.c)(e, n, l, f), circleTangency: Object(u.c)(e, n, r, f), lineTangency: Object(u.c)(e, n, l * Math.cos(h * u.a), p), theta: h } },
                b = function(t) { var e = t.cx,
                        n = t.cy,
                        r = t.innerRadius,
                        i = t.outerRadius,
                        o = t.startAngle,
                        a = function(t, e) { return Object(c.i)(e - t) * Math.min(Math.abs(e - t), 359.999) }(o, t.endAngle),
                        s = o + a,
                        l = Object(u.c)(e, n, i, o),
                        h = Object(u.c)(e, n, i, s),
                        f = "M ".concat(l.x, ",").concat(l.y, "\n    A ").concat(i, ",").concat(i, ",0,\n    ").concat(+(Math.abs(a) > 180), ",").concat(+(o > s), ",\n    ").concat(h.x, ",").concat(h.y, "\n  "); if (r > 0) { var p = Object(u.c)(e, n, r, o),
                            d = Object(u.c)(e, n, r, s);
                        f += "L ".concat(d.x, ",").concat(d.y, "\n            A ").concat(r, ",").concat(r, ",0,\n            ").concat(+(Math.abs(a) > 180), ",").concat(+(o <= s), ",\n            ").concat(p.x, ",").concat(p.y, " Z") } else f += "L ".concat(e, ",").concat(n, " Z"); return f },
                w = function(t) {! function(t, e) { if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && d(t, e) }(u, t); var e, n, r, o = y(u);

                    function u() { return f(this, u), o.apply(this, arguments) } return e = u, (n = [{ key: "render", value: function() { var t = this.props,
                                e = t.cx,
                                n = t.cy,
                                r = t.innerRadius,
                                o = t.outerRadius,
                                u = t.cornerRadius,
                                l = t.forceCornerRadius,
                                f = t.cornerIsExternal,
                                p = t.startAngle,
                                d = t.endAngle,
                                y = t.className; if (o < r || p === d) return null; var v, m = a()("recharts-sector", y),
                                w = o - r,
                                x = Object(c.c)(u, w, 0, !0); return v = x > 0 && Math.abs(p - d) < 360 ? function(t) { var e = t.cx,
                                    n = t.cy,
                                    r = t.innerRadius,
                                    i = t.outerRadius,
                                    o = t.cornerRadius,
                                    a = t.forceCornerRadius,
                                    s = t.cornerIsExternal,
                                    u = t.startAngle,
                                    l = t.endAngle,
                                    h = Object(c.i)(l - u),
                                    f = g({ cx: e, cy: n, radius: i, angle: u, sign: h, cornerRadius: o, cornerIsExternal: s }),
                                    p = f.circleTangency,
                                    d = f.lineTangency,
                                    y = f.theta,
                                    v = g({ cx: e, cy: n, radius: i, angle: l, sign: -h, cornerRadius: o, cornerIsExternal: s }),
                                    m = v.circleTangency,
                                    w = v.lineTangency,
                                    x = v.theta,
                                    O = s ? Math.abs(u - l) : Math.abs(u - l) - y - x; if (O < 0) return a ? "M ".concat(d.x, ",").concat(d.y, "\n        a").concat(o, ",").concat(o, ",0,0,1,").concat(2 * o, ",0\n        a").concat(o, ",").concat(o, ",0,0,1,").concat(2 * -o, ",0\n      ") : b({ cx: e, cy: n, innerRadius: r, outerRadius: i, startAngle: u, endAngle: l }); var _ = "M ".concat(d.x, ",").concat(d.y, "\n    A").concat(o, ",").concat(o, ",0,0,").concat(+(h < 0), ",").concat(p.x, ",").concat(p.y, "\n    A").concat(i, ",").concat(i, ",0,").concat(+(O > 180), ",").concat(+(h < 0), ",").concat(m.x, ",").concat(m.y, "\n    A").concat(o, ",").concat(o, ",0,0,").concat(+(h < 0), ",").concat(w.x, ",").concat(w.y, "\n  "); if (r > 0) { var M = g({ cx: e, cy: n, radius: r, angle: u, sign: h, isExternal: !0, cornerRadius: o, cornerIsExternal: s }),
                                        j = M.circleTangency,
                                        S = M.lineTangency,
                                        E = M.theta,
                                        k = g({ cx: e, cy: n, radius: r, angle: l, sign: -h, isExternal: !0, cornerRadius: o, cornerIsExternal: s }),
                                        A = k.circleTangency,
                                        C = k.lineTangency,
                                        P = k.theta,
                                        T = s ? Math.abs(u - l) : Math.abs(u - l) - E - P; if (T < 0 && 0 === o) return "".concat(_, "L").concat(e, ",").concat(n, "Z");
                                    _ += "L".concat(C.x, ",").concat(C.y, "\n      A").concat(o, ",").concat(o, ",0,0,").concat(+(h < 0), ",").concat(A.x, ",").concat(A.y, "\n      A").concat(r, ",").concat(r, ",0,").concat(+(T > 180), ",").concat(+(h > 0), ",").concat(j.x, ",").concat(j.y, "\n      A").concat(o, ",").concat(o, ",0,0,").concat(+(h < 0), ",").concat(S.x, ",").concat(S.y, "Z") } else _ += "L".concat(e, ",").concat(n, "Z"); return _ }({ cx: e, cy: n, innerRadius: r, outerRadius: o, cornerRadius: Math.min(x, w / 2), forceCornerRadius: l, cornerIsExternal: f, startAngle: p, endAngle: d }) : b({ cx: e, cy: n, innerRadius: r, outerRadius: o, startAngle: p, endAngle: d }), i.a.createElement("path", h({}, Object(s.c)(this.props, !0), { className: m, d: v })) } }]) && p(e.prototype, n), r && p(e, r), u }(r.PureComponent);
            w.defaultProps = { cx: 0, cy: 0, innerRadius: 0, outerRadius: 0, startAngle: 0, endAngle: 0, cornerRadius: 0, forceCornerRadius: !1, cornerIsExternal: !1 } }, 1737: function(t, e, n) { "use strict";
            n.d(e, "b", (function() { return i })), n.d(e, "a", (function() { return o })); var r = n(1738),
                i = new(n.n(r).a);
            i.setMaxListeners && i.setMaxListeners(10); var o = "recharts.syncMouseEvents" }, 1738: function(t, e, n) { "use strict"; var r = Object.prototype.hasOwnProperty,
                i = "~";

            function o() {}

            function a(t, e, n) { this.fn = t, this.context = e, this.once = n || !1 }

            function s(t, e, n, r, o) { if ("function" !== typeof n) throw new TypeError("The listener must be a function"); var s = new a(n, r || t, o),
                    u = i ? i + e : e; return t._events[u] ? t._events[u].fn ? t._events[u] = [t._events[u], s] : t._events[u].push(s) : (t._events[u] = s, t._eventsCount++), t }

            function u(t, e) { 0 === --t._eventsCount ? t._events = new o : delete t._events[e] }

            function c() { this._events = new o, this._eventsCount = 0 }
            Object.create && (o.prototype = Object.create(null), (new o).__proto__ || (i = !1)), c.prototype.eventNames = function() { var t, e, n = []; if (0 === this._eventsCount) return n; for (e in t = this._events) r.call(t, e) && n.push(i ? e.slice(1) : e); return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(t)) : n }, c.prototype.listeners = function(t) { var e = i ? i + t : t,
                    n = this._events[e]; if (!n) return []; if (n.fn) return [n.fn]; for (var r = 0, o = n.length, a = new Array(o); r < o; r++) a[r] = n[r].fn; return a }, c.prototype.listenerCount = function(t) { var e = i ? i + t : t,
                    n = this._events[e]; return n ? n.fn ? 1 : n.length : 0 }, c.prototype.emit = function(t, e, n, r, o, a) { var s = i ? i + t : t; if (!this._events[s]) return !1; var u, c, l = this._events[s],
                    h = arguments.length; if (l.fn) { switch (l.once && this.removeListener(t, l.fn, void 0, !0), h) {
                        case 1:
                            return l.fn.call(l.context), !0;
                        case 2:
                            return l.fn.call(l.context, e), !0;
                        case 3:
                            return l.fn.call(l.context, e, n), !0;
                        case 4:
                            return l.fn.call(l.context, e, n, r), !0;
                        case 5:
                            return l.fn.call(l.context, e, n, r, o), !0;
                        case 6:
                            return l.fn.call(l.context, e, n, r, o, a), !0 } for (c = 1, u = new Array(h - 1); c < h; c++) u[c - 1] = arguments[c];
                    l.fn.apply(l.context, u) } else { var f, p = l.length; for (c = 0; c < p; c++) switch (l[c].once && this.removeListener(t, l[c].fn, void 0, !0), h) {
                        case 1:
                            l[c].fn.call(l[c].context); break;
                        case 2:
                            l[c].fn.call(l[c].context, e); break;
                        case 3:
                            l[c].fn.call(l[c].context, e, n); break;
                        case 4:
                            l[c].fn.call(l[c].context, e, n, r); break;
                        default:
                            if (!u)
                                for (f = 1, u = new Array(h - 1); f < h; f++) u[f - 1] = arguments[f];
                            l[c].fn.apply(l[c].context, u) } } return !0 }, c.prototype.on = function(t, e, n) { return s(this, t, e, n, !1) }, c.prototype.once = function(t, e, n) { return s(this, t, e, n, !0) }, c.prototype.removeListener = function(t, e, n, r) { var o = i ? i + t : t; if (!this._events[o]) return this; if (!e) return u(this, o), this; var a = this._events[o]; if (a.fn) a.fn !== e || r && !a.once || n && a.context !== n || u(this, o);
                else { for (var s = 0, c = [], l = a.length; s < l; s++)(a[s].fn !== e || r && !a[s].once || n && a[s].context !== n) && c.push(a[s]);
                    c.length ? this._events[o] = 1 === c.length ? c[0] : c : u(this, o) } return this }, c.prototype.removeAllListeners = function(t) { var e; return t ? (e = i ? i + t : t, this._events[e] && u(this, e)) : (this._events = new o, this._eventsCount = 0), this }, c.prototype.off = c.prototype.removeListener, c.prototype.addListener = c.prototype.on, c.prefixed = i, c.EventEmitter = c, t.exports = c }, 1739: function(t, e, n) { "use strict";
            n.d(e, "a", (function() { return V })); var r = n(1516),
                i = n.n(r),
                o = n(1546),
                a = n.n(o),
                s = n(1598),
                u = n.n(s),
                c = n(511),
                l = n.n(c),
                h = n(292),
                f = n.n(h),
                p = n(1494),
                d = n.n(p),
                y = n(162),
                v = n.n(y),
                m = n(1),
                g = n.n(m),
                b = n(406),
                w = n.n(b),
                x = n(1537),
                O = n(1639),
                _ = n(1557),
                M = n(1495),
                j = n(1611),
                S = n(1511),
                E = n(1477),
                k = n(1509),
                A = n(1478);

            function C(t) { return C = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t }, C(t) }

            function P(t, e) { if (null == t) return {}; var n, r, i = function(t, e) { if (null == t) return {}; var n, r, i = {},
                        o = Object.keys(t); for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || (i[n] = t[n]); return i }(t, e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(t); for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n]) } return i }

            function T() { return T = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]) } return t }, T.apply(this, arguments) }

            function D(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function N(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? D(Object(n), !0).forEach((function(e) { R(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : D(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

            function R(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t }

            function I(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

            function B(t, e) { for (var n = 0; n < e.length; n++) { var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r) } }

            function L(t, e) { return L = Object.setPrototypeOf || function(t, e) { return t.__proto__ = e, t }, L(t, e) }

            function z(t) { var e = function() { if ("undefined" === typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" === typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = W(t); if (e) { var i = W(this).constructor;
                        n = Reflect.construct(r, arguments, i) } else n = r.apply(this, arguments); return F(this, n) } }

            function F(t, e) { return !e || "object" !== C(e) && "function" !== typeof e ? function(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }(t) : e }

            function W(t) { return W = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) { return t.__proto__ || Object.getPrototypeOf(t) }, W(t) } var V = function(t) {! function(t, e) { if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && L(t, e) }(s, t); var e, n, r, o = z(s);

                function s() { var t;
                    I(this, s); for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r]; return (t = o.call.apply(o, [this].concat(n))).state = { isAnimationFinished: !0 }, t.id = Object(E.j)("recharts-area-"), t.handleAnimationEnd = function() { var e = t.props.onAnimationEnd;
                        t.setState({ isAnimationFinished: !0 }), l()(e) && e() }, t.handleAnimationStart = function() { var e = t.props.onAnimationStart;
                        t.setState({ isAnimationFinished: !1 }), l()(e) && e() }, t } return e = s, r = [{ key: "getDerivedStateFromProps", value: function(t, e) { return t.animationId !== e.prevAnimationId ? { prevAnimationId: t.animationId, curPoints: t.points, curBaseLine: t.baseLine, prevPoints: e.curPoints, prevBaseLine: e.curBaseLine } : t.points !== e.curPoints || t.baseLine !== e.curBaseLine ? { curPoints: t.points, curBaseLine: t.baseLine } : null } }], (n = [{ key: "renderDots", value: function(t, e) { var n = this.props.isAnimationActive,
                            r = this.state.isAnimationFinished; if (n && !r) return null; var i = this.props,
                            o = i.dot,
                            a = i.points,
                            u = i.dataKey,
                            c = Object(A.c)(this.props),
                            l = Object(A.c)(o, !0),
                            h = a.map((function(t, e) { var n = N(N(N({ key: "dot-".concat(e), r: 3 }, c), l), {}, { dataKey: u, cx: t.x, cy: t.y, index: e, value: t.value, payload: t.payload }); return s.renderDotItem(o, n) })),
                            f = { clipPath: t ? "url(#clipPath-".concat(e, ")") : null }; return g.a.createElement(M.a, T({ className: "recharts-area-dots" }, f), h) } }, { key: "renderHorizontalRect", value: function(t) { var e = this.props,
                            n = e.baseLine,
                            r = e.points,
                            i = e.strokeWidth,
                            o = r[0].x,
                            a = r[r.length - 1].x,
                            s = t * Math.abs(o - a),
                            c = u()(r.map((function(t) { return t.y || 0 }))); return Object(E.g)(n) && "number" === typeof n ? c = Math.max(n, c) : n && v()(n) && n.length && (c = Math.max(u()(n.map((function(t) { return t.y || 0 }))), c)), Object(E.g)(c) ? g.a.createElement("rect", { x: o < a ? o : o - s, y: 0, width: s, height: Math.floor(c + (i ? parseInt("".concat(i), 10) : 1)) }) : null } }, { key: "renderVerticalRect", value: function(t) { var e = this.props,
                            n = e.baseLine,
                            r = e.points,
                            i = e.strokeWidth,
                            o = r[0].y,
                            a = r[r.length - 1].y,
                            s = t * Math.abs(o - a),
                            c = u()(r.map((function(t) { return t.x || 0 }))); return Object(E.g)(n) && "number" === typeof n ? c = Math.max(n, c) : n && v()(n) && n.length && (c = Math.max(u()(n.map((function(t) { return t.x || 0 }))), c)), Object(E.g)(c) ? g.a.createElement("rect", { x: 0, y: o < a ? o : o - s, width: c + (i ? parseInt("".concat(i), 10) : 1), height: Math.floor(s) }) : null } }, { key: "renderClipRect", value: function(t) { return "vertical" === this.props.layout ? this.renderVerticalRect(t) : this.renderHorizontalRect(t) } }, { key: "renderAreaStatically", value: function(t, e, n, r) { var i = this.props,
                            o = i.layout,
                            a = i.type,
                            s = i.stroke,
                            u = i.connectNulls,
                            c = i.isRange,
                            l = (i.ref, P(i, ["layout", "type", "stroke", "connectNulls", "isRange", "ref"])); return g.a.createElement(M.a, { clipPath: n ? "url(#clipPath-".concat(r, ")") : null }, g.a.createElement(O.a, T({}, Object(A.c)(l, !0), { points: t, connectNulls: u, type: a, baseLine: e, layout: o, stroke: "none", className: "recharts-area-area" })), "none" !== s && g.a.createElement(O.a, T({}, Object(A.c)(this.props), { className: "recharts-area-curve", layout: o, type: a, connectNulls: u, fill: "none", points: t })), "none" !== s && c && g.a.createElement(O.a, T({}, Object(A.c)(this.props), { className: "recharts-area-curve", layout: o, type: a, connectNulls: u, fill: "none", points: e }))) } }, { key: "renderAreaWithAnimation", value: function(t, e) { var n = this,
                            r = this.props,
                            i = r.points,
                            o = r.baseLine,
                            s = r.isAnimationActive,
                            u = r.animationBegin,
                            c = r.animationDuration,
                            l = r.animationEasing,
                            h = r.animationId,
                            f = this.state,
                            p = f.prevPoints,
                            y = f.prevBaseLine; return g.a.createElement(x.a, { begin: u, duration: c, isActive: s, easing: l, from: { t: 0 }, to: { t: 1 }, key: "area-".concat(h), onAnimationEnd: this.handleAnimationEnd, onAnimationStart: this.handleAnimationStart }, (function(r) { var s = r.t; if (p) { var u, c = p.length / i.length,
                                    l = i.map((function(t, e) { var n = Math.floor(e * c); if (p[n]) { var r = p[n],
                                                i = Object(E.e)(r.x, t.x),
                                                o = Object(E.e)(r.y, t.y); return N(N({}, t), {}, { x: i(s), y: o(s) }) } return t })); return u = Object(E.g)(o) && "number" === typeof o ? Object(E.e)(y, o)(s) : d()(o) || a()(o) ? Object(E.e)(y, 0)(s) : o.map((function(t, e) { var n = Math.floor(e * c); if (y[n]) { var r = y[n],
                                            i = Object(E.e)(r.x, t.x),
                                            o = Object(E.e)(r.y, t.y); return N(N({}, t), {}, { x: i(s), y: o(s) }) } return t })), n.renderAreaStatically(l, u, t, e) } return g.a.createElement(M.a, null, g.a.createElement("defs", null, g.a.createElement("clipPath", { id: "animationClipPath-".concat(e) }, n.renderClipRect(s))), g.a.createElement(M.a, { clipPath: "url(#animationClipPath-".concat(e, ")") }, n.renderAreaStatically(i, o, t, e))) })) } }, { key: "renderArea", value: function(t, e) { var n = this.props,
                            r = n.points,
                            o = n.baseLine,
                            a = n.isAnimationActive,
                            s = this.state,
                            u = s.prevPoints,
                            c = s.prevBaseLine,
                            l = s.totalLength; return a && r && r.length && (!u && l > 0 || !i()(u, r) || !i()(c, o)) ? this.renderAreaWithAnimation(t, e) : this.renderAreaStatically(r, o, t, e) } }, { key: "render", value: function() { var t = this.props,
                            e = t.hide,
                            n = t.dot,
                            r = t.points,
                            i = t.className,
                            o = t.top,
                            a = t.left,
                            s = t.xAxis,
                            u = t.yAxis,
                            c = t.width,
                            l = t.height,
                            h = t.isAnimationActive,
                            f = t.id; if (e || !r || !r.length) return null; var p = this.state.isAnimationFinished,
                            y = 1 === r.length,
                            v = w()("recharts-area", i),
                            m = s && s.allowDataOverflow || u && u.allowDataOverflow,
                            b = d()(f) ? this.id : f; return g.a.createElement(M.a, { className: v }, m ? g.a.createElement("defs", null, g.a.createElement("clipPath", { id: "clipPath-".concat(b) }, g.a.createElement("rect", { x: a, y: o, width: c, height: Math.floor(l) }))) : null, y ? null : this.renderArea(m, b), (n || y) && this.renderDots(m, b), (!h || p) && j.a.renderCallByParent(this.props, r)) } }]) && B(e.prototype, n), r && B(e, r), s }(m.PureComponent);
            V.displayName = "Area", V.defaultProps = { stroke: "#3182bd", fill: "#3182bd", fillOpacity: .6, xAxisId: 0, yAxisId: 0, legendType: "line", connectNulls: !1, points: [], dot: !1, activeDot: !0, hide: !1, isAnimationActive: !S.a.isSsr, animationBegin: 0, animationDuration: 1500, animationEasing: "ease" }, V.getBaseValue = function(t, e, n) { var r = t.layout,
                    i = t.baseValue; if (Object(E.g)(i) && "number" === typeof i) return i; var o = "horizontal" === r ? n : e,
                    a = o.scale.domain(); if ("number" === o.type) { var s = Math.max(a[0], a[1]),
                        u = Math.min(a[0], a[1]); return "dataMin" === i ? u : "dataMax" === i || s < 0 ? s : Math.max(Math.min(a[0], a[1]), 0) } return "dataMin" === i ? a[0] : "dataMax" === i ? a[1] : a[0] }, V.getComposedData = function(t) { var e, n = t.props,
                    r = t.xAxis,
                    i = t.yAxis,
                    o = t.xAxisTicks,
                    a = t.yAxisTicks,
                    s = t.bandSize,
                    u = t.dataKey,
                    c = t.stackedData,
                    l = t.dataStartIndex,
                    h = t.displayedData,
                    p = t.offset,
                    y = n.layout,
                    m = c && c.length,
                    g = V.getBaseValue(n, r, i),
                    b = !1,
                    w = h.map((function(t, e) { var n, h = Object(k.w)(t, u);
                        m ? n = c[l + e] : (n = h, v()(n) ? b = !0 : n = [g, n]); var f = d()(n[1]) || m && d()(h); return "horizontal" === y ? { x: Object(k.k)({ axis: r, ticks: o, bandSize: s, entry: t, index: e }), y: f ? null : i.scale(n[1]), value: n, payload: t } : { x: f ? null : r.scale(n[1]), y: Object(k.k)({ axis: i, ticks: a, bandSize: s, entry: t, index: e }), value: n, payload: t } })); return e = m || b ? w.map((function(t) { return "horizontal" === y ? { x: t.x, y: d()(f()(t, "value[0]")) || d()(f()(t, "y")) ? null : i.scale(f()(t, "value[0]")) } : { x: d()(f()(t, "value[0]")) ? null : r.scale(f()(t, "value[0]")), y: t.y } })) : "horizontal" === y ? i.scale(g) : r.scale(g), N({ points: w, baseLine: e, layout: y, isRange: b }, p) }, V.renderDotItem = function(t, e) { return g.a.isValidElement(t) ? g.a.cloneElement(t, e) : l()(t) ? t(e) : g.a.createElement(_.a, T({}, e, { className: "recharts-area-dot" })) } }, 1740: function(t, e) { t.exports = function(t) { var e = null == t ? 0 : t.length; return e ? t[e - 1] : void 0 } }, 1780: function(t, e, n) { "use strict"; var r = function(t, e, n) { t.prototype = e.prototype = n, n.constructor = t };

            function i(t, e) { var n = Object.create(t.prototype); for (var r in e) n[r] = e[r]; return n }

            function o() {} var a = .7,
                s = 1 / a,
                u = "\\s*([+-]?\\d+)\\s*",
                c = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
                l = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
                h = /^#([0-9a-f]{3,8})$/,
                f = new RegExp("^rgb\\(" + [u, u, u] + "\\)$"),
                p = new RegExp("^rgb\\(" + [l, l, l] + "\\)$"),
                d = new RegExp("^rgba\\(" + [u, u, u, c] + "\\)$"),
                y = new RegExp("^rgba\\(" + [l, l, l, c] + "\\)$"),
                v = new RegExp("^hsl\\(" + [c, l, l] + "\\)$"),
                m = new RegExp("^hsla\\(" + [c, l, l, c] + "\\)$"),
                g = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };

            function b() { return this.rgb().formatHex() }

            function w() { return this.rgb().formatRgb() }

            function x(t) { var e, n; return t = (t + "").trim().toLowerCase(), (e = h.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), 6 === n ? O(e) : 3 === n ? new S(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | 240 & e, (15 & e) << 4 | 15 & e, 1) : 8 === n ? _(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (255 & e) / 255) : 4 === n ? _(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | 240 & e, ((15 & e) << 4 | 15 & e) / 255) : null) : (e = f.exec(t)) ? new S(e[1], e[2], e[3], 1) : (e = p.exec(t)) ? new S(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, 1) : (e = d.exec(t)) ? _(e[1], e[2], e[3], e[4]) : (e = y.exec(t)) ? _(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, e[4]) : (e = v.exec(t)) ? C(e[1], e[2] / 100, e[3] / 100, 1) : (e = m.exec(t)) ? C(e[1], e[2] / 100, e[3] / 100, e[4]) : g.hasOwnProperty(t) ? O(g[t]) : "transparent" === t ? new S(NaN, NaN, NaN, 0) : null }

            function O(t) { return new S(t >> 16 & 255, t >> 8 & 255, 255 & t, 1) }

            function _(t, e, n, r) { return r <= 0 && (t = e = n = NaN), new S(t, e, n, r) }

            function M(t) { return t instanceof o || (t = x(t)), t ? new S((t = t.rgb()).r, t.g, t.b, t.opacity) : new S }

            function j(t, e, n, r) { return 1 === arguments.length ? M(t) : new S(t, e, n, null == r ? 1 : r) }

            function S(t, e, n, r) { this.r = +t, this.g = +e, this.b = +n, this.opacity = +r }

            function E() { return "#" + A(this.r) + A(this.g) + A(this.b) }

            function k() { var t = this.opacity; return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")") }

            function A(t) { return ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) < 16 ? "0" : "") + t.toString(16) }

            function C(t, e, n, r) { return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new T(t, e, n, r) }

            function P(t) { if (t instanceof T) return new T(t.h, t.s, t.l, t.opacity); if (t instanceof o || (t = x(t)), !t) return new T; if (t instanceof T) return t; var e = (t = t.rgb()).r / 255,
                    n = t.g / 255,
                    r = t.b / 255,
                    i = Math.min(e, n, r),
                    a = Math.max(e, n, r),
                    s = NaN,
                    u = a - i,
                    c = (a + i) / 2; return u ? (s = e === a ? (n - r) / u + 6 * (n < r) : n === a ? (r - e) / u + 2 : (e - n) / u + 4, u /= c < .5 ? a + i : 2 - a - i, s *= 60) : u = c > 0 && c < 1 ? 0 : s, new T(s, u, c, t.opacity) }

            function T(t, e, n, r) { this.h = +t, this.s = +e, this.l = +n, this.opacity = +r }

            function D(t, e, n) { return 255 * (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) }

            function N(t, e, n, r, i) { var o = t * t,
                    a = o * t; return ((1 - 3 * t + 3 * o - a) * e + (4 - 6 * o + 3 * a) * n + (1 + 3 * t + 3 * o - 3 * a) * r + a * i) / 6 }
            r(o, x, { copy: function(t) { return Object.assign(new this.constructor, this, t) }, displayable: function() { return this.rgb().displayable() }, hex: b, formatHex: b, formatHsl: function() { return P(this).formatHsl() }, formatRgb: w, toString: w }), r(S, j, i(o, { brighter: function(t) { return t = null == t ? s : Math.pow(s, t), new S(this.r * t, this.g * t, this.b * t, this.opacity) }, darker: function(t) { return t = null == t ? a : Math.pow(a, t), new S(this.r * t, this.g * t, this.b * t, this.opacity) }, rgb: function() { return this }, displayable: function() { return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1 }, hex: E, formatHex: E, formatRgb: k, toString: k })), r(T, (function(t, e, n, r) { return 1 === arguments.length ? P(t) : new T(t, e, n, null == r ? 1 : r) }), i(o, { brighter: function(t) { return t = null == t ? s : Math.pow(s, t), new T(this.h, this.s, this.l * t, this.opacity) }, darker: function(t) { return t = null == t ? a : Math.pow(a, t), new T(this.h, this.s, this.l * t, this.opacity) }, rgb: function() { var t = this.h % 360 + 360 * (this.h < 0),
                        e = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                        n = this.l,
                        r = n + (n < .5 ? n : 1 - n) * e,
                        i = 2 * n - r; return new S(D(t >= 240 ? t - 240 : t + 120, i, r), D(t, i, r), D(t < 120 ? t + 240 : t - 120, i, r), this.opacity) }, displayable: function() { return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1 }, formatHsl: function() { var t = this.opacity; return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "hsl(" : "hsla(") + (this.h || 0) + ", " + 100 * (this.s || 0) + "%, " + 100 * (this.l || 0) + "%" + (1 === t ? ")" : ", " + t + ")") } })); var R = function(t) { return function() { return t } };

            function I(t, e) { return function(n) { return t + n * e } }

            function B(t) { return 1 === (t = +t) ? L : function(e, n) { return n - e ? function(t, e, n) { return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n,
                            function(r) { return Math.pow(t + r * e, n) } }(e, n, t) : R(isNaN(e) ? n : e) } }

            function L(t, e) { var n = e - t; return n ? I(t, n) : R(isNaN(t) ? e : t) } var z = function t(e) { var n = B(e);

                function r(t, e) { var r = n((t = j(t)).r, (e = j(e)).r),
                        i = n(t.g, e.g),
                        o = n(t.b, e.b),
                        a = L(t.opacity, e.opacity); return function(e) { return t.r = r(e), t.g = i(e), t.b = o(e), t.opacity = a(e), t + "" } } return r.gamma = t, r }(1);

            function F(t) { return function(e) { var n, r, i = e.length,
                        o = new Array(i),
                        a = new Array(i),
                        s = new Array(i); for (n = 0; n < i; ++n) r = j(e[n]), o[n] = r.r || 0, a[n] = r.g || 0, s[n] = r.b || 0; return o = t(o), a = t(a), s = t(s), r.opacity = 1,
                        function(t) { return r.r = o(t), r.g = a(t), r.b = s(t), r + "" } } }
            F((function(t) { var e = t.length - 1; return function(n) { var r = n <= 0 ? n = 0 : n >= 1 ? (n = 1, e - 1) : Math.floor(n * e),
                        i = t[r],
                        o = t[r + 1],
                        a = r > 0 ? t[r - 1] : 2 * i - o,
                        s = r < e - 1 ? t[r + 2] : 2 * o - i; return N((n - r / e) * e, a, i, o, s) } })), F((function(t) { var e = t.length; return function(n) { var r = Math.floor(((n %= 1) < 0 ? ++n : n) * e),
                        i = t[(r + e - 1) % e],
                        o = t[r % e],
                        a = t[(r + 1) % e],
                        s = t[(r + 2) % e]; return N((n - r / e) * e, i, o, a, s) } })); var W = function(t, e) { e || (e = []); var n, r = t ? Math.min(e.length, t.length) : 0,
                    i = e.slice(); return function(o) { for (n = 0; n < r; ++n) i[n] = t[n] * (1 - o) + e[n] * o; return i } };

            function V(t) { return ArrayBuffer.isView(t) && !(t instanceof DataView) }

            function U(t, e) { var n, r = e ? e.length : 0,
                    i = t ? Math.min(r, t.length) : 0,
                    o = new Array(i),
                    a = new Array(r); for (n = 0; n < i; ++n) o[n] = $(t[n], e[n]); for (; n < r; ++n) a[n] = e[n]; return function(t) { for (n = 0; n < i; ++n) a[n] = o[n](t); return a } } var G = function(t, e) { var n = new Date; return t = +t, e = +e,
                        function(r) { return n.setTime(t * (1 - r) + e * r), n } },
                X = n(1603),
                H = function(t, e) { var n, r = {},
                        i = {}; for (n in null !== t && "object" === typeof t || (t = {}), null !== e && "object" === typeof e || (e = {}), e) n in t ? r[n] = $(t[n], e[n]) : i[n] = e[n]; return function(t) { for (n in r) i[n] = r[n](t); return i } },
                Y = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
                q = new RegExp(Y.source, "g"); var J = function(t, e) { var n, r, i, o = Y.lastIndex = q.lastIndex = 0,
                        a = -1,
                        s = [],
                        u = []; for (t += "", e += "";
                        (n = Y.exec(t)) && (r = q.exec(e));)(i = r.index) > o && (i = e.slice(o, i), s[a] ? s[a] += i : s[++a] = i), (n = n[0]) === (r = r[0]) ? s[a] ? s[a] += r : s[++a] = r : (s[++a] = null, u.push({ i: a, x: Object(X.a)(n, r) })), o = q.lastIndex; return o < e.length && (i = e.slice(o), s[a] ? s[a] += i : s[++a] = i), s.length < 2 ? u[0] ? function(t) { return function(e) { return t(e) + "" } }(u[0].x) : function(t) { return function() { return t } }(e) : (e = u.length, function(t) { for (var n, r = 0; r < e; ++r) s[(n = u[r]).i] = n.x(t); return s.join("") }) },
                $ = e.a = function(t, e) { var n, r = typeof e; return null == e || "boolean" === r ? R(e) : ("number" === r ? X.a : "string" === r ? (n = x(e)) ? (e = n, z) : J : e instanceof x ? z : e instanceof Date ? G : V(e) ? W : Array.isArray(e) ? U : "function" !== typeof e.valueOf && "function" !== typeof e.toString || isNaN(e) ? H : X.a)(t, e) } }, 1781: function(t, e, n) { "use strict";
            n.r(e), n.d(e, "print", (function() { return f })); var r = "function" === typeof Symbol && "function" === typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : void 0;

            function i(t) { return i = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t }, i(t) }

            function o(t) { return a(t, []) }

            function a(t, e) { switch (i(t)) {
                    case "string":
                        return JSON.stringify(t);
                    case "function":
                        return t.name ? "[function ".concat(t.name, "]") : "[function]";
                    case "object":
                        return null === t ? "null" : function(t, e) { if (-1 !== e.indexOf(t)) return "[Circular]"; var n = [].concat(e, [t]),
                                i = function(t) { var e = t[String(r)]; if ("function" === typeof e) return e; if ("function" === typeof t.inspect) return t.inspect }(t); if (void 0 !== i) { var o = i.call(t); if (o !== t) return "string" === typeof o ? o : a(o, n) } else if (Array.isArray(t)) return function(t, e) { if (0 === t.length) return "[]"; if (e.length > 2) return "[Array]"; for (var n = Math.min(10, t.length), r = t.length - n, i = [], o = 0; o < n; ++o) i.push(a(t[o], e));
                                1 === r ? i.push("... 1 more item") : r > 1 && i.push("... ".concat(r, " more items")); return "[" + i.join(", ") + "]" }(t, n); return function(t, e) { var n = Object.keys(t); if (0 === n.length) return "{}"; if (e.length > 2) return "[" + function(t) { var e = Object.prototype.toString.call(t).replace(/^\[object /, "").replace(/]$/, ""); if ("Object" === e && "function" === typeof t.constructor) { var n = t.constructor.name; if ("string" === typeof n && "" !== n) return n } return e }(t) + "]"; var r = n.map((function(n) { return n + ": " + a(t[n], e) })); return "{ " + r.join(", ") + " }" }(t, n) }(t, e);
                    default:
                        return String(t) } }

            function s(t) { var e = t.prototype.toJSON; "function" === typeof e || function(t, e) { if (!Boolean(t)) throw new Error(null != e ? e : "Unexpected invariant triggered.") }(0), t.prototype.inspect = e, r && (t.prototype[r] = e) }

            function u(t) { return null != t && "string" === typeof t.kind }
            s(function() {
                function t(t, e, n) { this.start = t.start, this.end = e.end, this.startToken = t, this.endToken = e, this.source = n } return t.prototype.toJSON = function() { return { start: this.start, end: this.end } }, t }()), s(function() {
                function t(t, e, n, r, i, o, a) { this.kind = t, this.start = e, this.end = n, this.line = r, this.column = i, this.value = a, this.prev = o, this.next = null } return t.prototype.toJSON = function() { return { kind: this.kind, value: this.value, line: this.line, column: this.column } }, t }()); var c = { Name: [], Document: ["definitions"], OperationDefinition: ["name", "variableDefinitions", "directives", "selectionSet"], VariableDefinition: ["variable", "type", "defaultValue", "directives"], Variable: ["name"], SelectionSet: ["selections"], Field: ["alias", "name", "arguments", "directives", "selectionSet"], Argument: ["name", "value"], FragmentSpread: ["name", "directives"], InlineFragment: ["typeCondition", "directives", "selectionSet"], FragmentDefinition: ["name", "variableDefinitions", "typeCondition", "directives", "selectionSet"], IntValue: [], FloatValue: [], StringValue: [], BooleanValue: [], NullValue: [], EnumValue: [], ListValue: ["values"], ObjectValue: ["fields"], ObjectField: ["name", "value"], Directive: ["name", "arguments"], NamedType: ["name"], ListType: ["type"], NonNullType: ["type"], SchemaDefinition: ["description", "directives", "operationTypes"], OperationTypeDefinition: ["type"], ScalarTypeDefinition: ["description", "name", "directives"], ObjectTypeDefinition: ["description", "name", "interfaces", "directives", "fields"], FieldDefinition: ["description", "name", "arguments", "type", "directives"], InputValueDefinition: ["description", "name", "type", "defaultValue", "directives"], InterfaceTypeDefinition: ["description", "name", "interfaces", "directives", "fields"], UnionTypeDefinition: ["description", "name", "directives", "types"], EnumTypeDefinition: ["description", "name", "directives", "values"], EnumValueDefinition: ["description", "name", "directives"], InputObjectTypeDefinition: ["description", "name", "directives", "fields"], DirectiveDefinition: ["description", "name", "arguments", "locations"], SchemaExtension: ["directives", "operationTypes"], ScalarTypeExtension: ["name", "directives"], ObjectTypeExtension: ["name", "interfaces", "directives", "fields"], InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"], UnionTypeExtension: ["name", "directives", "types"], EnumTypeExtension: ["name", "directives", "values"], InputObjectTypeExtension: ["name", "directives", "fields"] },
                l = Object.freeze({});

            function h(t, e, n) { var r = t[e]; if (r) { if (!n && "function" === typeof r) return r; var i = n ? r.leave : r.enter; if ("function" === typeof i) return i } else { var o = n ? t.leave : t.enter; if (o) { if ("function" === typeof o) return o; var a = o[e]; if ("function" === typeof a) return a } } }

            function f(t) { return function(t, e) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c,
                        r = void 0,
                        i = Array.isArray(t),
                        a = [t],
                        s = -1,
                        f = [],
                        p = void 0,
                        d = void 0,
                        y = void 0,
                        v = [],
                        m = [],
                        g = t;
                    do { var b = ++s === a.length,
                            w = b && 0 !== f.length; if (b) { if (d = 0 === m.length ? void 0 : v[v.length - 1], p = y, y = m.pop(), w) { if (i) p = p.slice();
                                else { for (var x = {}, O = 0, _ = Object.keys(p); O < _.length; O++) { var M = _[O];
                                        x[M] = p[M] }
                                    p = x } for (var j = 0, S = 0; S < f.length; S++) { var E = f[S][0],
                                        k = f[S][1];
                                    i && (E -= j), i && null === k ? (p.splice(E, 1), j++) : p[E] = k } }
                            s = r.index, a = r.keys, f = r.edits, i = r.inArray, r = r.prev } else { if (d = y ? i ? s : a[s] : void 0, null === (p = y ? y[d] : g) || void 0 === p) continue;
                            y && v.push(d) } var A, C = void 0; if (!Array.isArray(p)) { if (!u(p)) throw new Error("Invalid AST Node: ".concat(o(p), ".")); var P = h(e, p.kind, b); if (P) { if ((C = P.call(e, p, d, y, v, m)) === l) break; if (!1 === C) { if (!b) { v.pop(); continue } } else if (void 0 !== C && (f.push([d, C]), !b)) { if (!u(C)) { v.pop(); continue }
                                    p = C } } }
                        void 0 === C && w && f.push([d, p]), b ? v.pop() : (r = { inArray: i, index: s, keys: a, edits: f, prev: r }, a = (i = Array.isArray(p)) ? p : null !== (A = n[p.kind]) && void 0 !== A ? A : [], s = -1, f = [], y && m.push(y), y = p) } while (void 0 !== r); return 0 !== f.length && (g = f[f.length - 1][1]), g }(t, { leave: p }) } var p = { Name: function(t) { return t.value }, Variable: function(t) { return "$" + t.name }, Document: function(t) { return y(t.definitions, "\n\n") + "\n" }, OperationDefinition: function(t) { var e = t.operation,
                        n = t.name,
                        r = m("(", y(t.variableDefinitions, ", "), ")"),
                        i = y(t.directives, " "),
                        o = t.selectionSet; return n || i || r || "query" !== e ? y([e, y([n, r]), i, o], " ") : o }, VariableDefinition: function(t) { var e = t.variable,
                        n = t.type,
                        r = t.defaultValue,
                        i = t.directives; return e + ": " + n + m(" = ", r) + m(" ", y(i, " ")) }, SelectionSet: function(t) { return v(t.selections) }, Field: function(t) { var e = t.alias,
                        n = t.name,
                        r = t.arguments,
                        i = t.directives,
                        o = t.selectionSet,
                        a = m("", e, ": ") + n,
                        s = a + m("(", y(r, ", "), ")"); return s.length > 80 && (s = a + m("(\n", g(y(r, "\n")), "\n)")), y([s, y(i, " "), o], " ") }, Argument: function(t) { return t.name + ": " + t.value }, FragmentSpread: function(t) { return "..." + t.name + m(" ", y(t.directives, " ")) }, InlineFragment: function(t) { var e = t.typeCondition,
                        n = t.directives,
                        r = t.selectionSet; return y(["...", m("on ", e), y(n, " "), r], " ") }, FragmentDefinition: function(t) { var e = t.name,
                        n = t.typeCondition,
                        r = t.variableDefinitions,
                        i = t.directives,
                        o = t.selectionSet; return "fragment ".concat(e).concat(m("(", y(r, ", "), ")"), " ") + "on ".concat(n, " ").concat(m("", y(i, " "), " ")) + o }, IntValue: function(t) { return t.value }, FloatValue: function(t) { return t.value }, StringValue: function(t, e) { var n = t.value; return t.block ? function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            r = -1 === t.indexOf("\n"),
                            i = " " === t[0] || "\t" === t[0],
                            o = '"' === t[t.length - 1],
                            a = "\\" === t[t.length - 1],
                            s = !r || o || a || n,
                            u = ""; return !s || r && i || (u += "\n" + e), u += e ? t.replace(/\n/g, "\n" + e) : t, s && (u += "\n"), '"""' + u.replace(/"""/g, '\\"""') + '"""' }(n, "description" === e ? "" : "  ") : JSON.stringify(n) }, BooleanValue: function(t) { return t.value ? "true" : "false" }, NullValue: function() { return "null" }, EnumValue: function(t) { return t.value }, ListValue: function(t) { return "[" + y(t.values, ", ") + "]" }, ObjectValue: function(t) { return "{" + y(t.fields, ", ") + "}" }, ObjectField: function(t) { return t.name + ": " + t.value }, Directive: function(t) { return "@" + t.name + m("(", y(t.arguments, ", "), ")") }, NamedType: function(t) { return t.name }, ListType: function(t) { return "[" + t.type + "]" }, NonNullType: function(t) { return t.type + "!" }, SchemaDefinition: d((function(t) { var e = t.directives,
                        n = t.operationTypes; return y(["schema", y(e, " "), v(n)], " ") })), OperationTypeDefinition: function(t) { return t.operation + ": " + t.type }, ScalarTypeDefinition: d((function(t) { return y(["scalar", t.name, y(t.directives, " ")], " ") })), ObjectTypeDefinition: d((function(t) { var e = t.name,
                        n = t.interfaces,
                        r = t.directives,
                        i = t.fields; return y(["type", e, m("implements ", y(n, " & ")), y(r, " "), v(i)], " ") })), FieldDefinition: d((function(t) { var e = t.name,
                        n = t.arguments,
                        r = t.type,
                        i = t.directives; return e + (w(n) ? m("(\n", g(y(n, "\n")), "\n)") : m("(", y(n, ", "), ")")) + ": " + r + m(" ", y(i, " ")) })), InputValueDefinition: d((function(t) { var e = t.name,
                        n = t.type,
                        r = t.defaultValue,
                        i = t.directives; return y([e + ": " + n, m("= ", r), y(i, " ")], " ") })), InterfaceTypeDefinition: d((function(t) { var e = t.name,
                        n = t.interfaces,
                        r = t.directives,
                        i = t.fields; return y(["interface", e, m("implements ", y(n, " & ")), y(r, " "), v(i)], " ") })), UnionTypeDefinition: d((function(t) { var e = t.name,
                        n = t.directives,
                        r = t.types; return y(["union", e, y(n, " "), r && 0 !== r.length ? "= " + y(r, " | ") : ""], " ") })), EnumTypeDefinition: d((function(t) { var e = t.name,
                        n = t.directives,
                        r = t.values; return y(["enum", e, y(n, " "), v(r)], " ") })), EnumValueDefinition: d((function(t) { return y([t.name, y(t.directives, " ")], " ") })), InputObjectTypeDefinition: d((function(t) { var e = t.name,
                        n = t.directives,
                        r = t.fields; return y(["input", e, y(n, " "), v(r)], " ") })), DirectiveDefinition: d((function(t) { var e = t.name,
                        n = t.arguments,
                        r = t.repeatable,
                        i = t.locations; return "directive @" + e + (w(n) ? m("(\n", g(y(n, "\n")), "\n)") : m("(", y(n, ", "), ")")) + (r ? " repeatable" : "") + " on " + y(i, " | ") })), SchemaExtension: function(t) { var e = t.directives,
                        n = t.operationTypes; return y(["extend schema", y(e, " "), v(n)], " ") }, ScalarTypeExtension: function(t) { return y(["extend scalar", t.name, y(t.directives, " ")], " ") }, ObjectTypeExtension: function(t) { var e = t.name,
                        n = t.interfaces,
                        r = t.directives,
                        i = t.fields; return y(["extend type", e, m("implements ", y(n, " & ")), y(r, " "), v(i)], " ") }, InterfaceTypeExtension: function(t) { var e = t.name,
                        n = t.interfaces,
                        r = t.directives,
                        i = t.fields; return y(["extend interface", e, m("implements ", y(n, " & ")), y(r, " "), v(i)], " ") }, UnionTypeExtension: function(t) { var e = t.name,
                        n = t.directives,
                        r = t.types; return y(["extend union", e, y(n, " "), r && 0 !== r.length ? "= " + y(r, " | ") : ""], " ") }, EnumTypeExtension: function(t) { var e = t.name,
                        n = t.directives,
                        r = t.values; return y(["extend enum", e, y(n, " "), v(r)], " ") }, InputObjectTypeExtension: function(t) { var e = t.name,
                        n = t.directives,
                        r = t.fields; return y(["extend input", e, y(n, " "), v(r)], " ") } };

            function d(t) { return function(e) { return y([e.description, t(e)], "\n") } }

            function y(t) { var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""; return null !== (e = null === t || void 0 === t ? void 0 : t.filter((function(t) { return t })).join(n)) && void 0 !== e ? e : "" }

            function v(t) { return m("{\n", g(y(t, "\n")), "\n}") }

            function m(t, e) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ""; return null != e && "" !== e ? t + e + n : "" }

            function g(t) { return m("  ", t.replace(/\n/g, "\n  ")) }

            function b(t) { return -1 !== t.indexOf("\n") }

            function w(t) { return null != t && t.some(b) } }, 1782: function(t, e, n) { "use strict";
            n.d(e, "a", (function() { return L })); var r = n(511),
                i = n.n(r),
                o = n(1),
                a = n.n(o),
                s = n(406),
                u = n.n(s),
                c = n(1495),
                l = n(1557),
                h = n(1518),
                f = n(1477),
                p = function(t, e) { var n = t.alwaysShow,
                        r = t.ifOverflow; return n && (r = "extendDomain"), r === e },
                d = n(1517),
                y = n(1529),
                v = n(1478);

            function m() { return m = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]) } return t }, m.apply(this, arguments) }

            function g(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function b(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? g(Object(n), !0).forEach((function(e) { w(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : g(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

            function w(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t }

            function x(t) { var e = t.x,
                    n = t.y,
                    r = t.r,
                    i = t.alwaysShow,
                    o = t.clipPathId,
                    s = Object(f.f)(e),
                    l = Object(f.f)(n); if (Object(y.a)(void 0 === i, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !s || !l) return null; var m = function(t) { var e = t.x,
                        n = t.y,
                        r = t.xAxis,
                        i = t.yAxis,
                        o = Object(d.a)({ x: r.scale, y: i.scale }),
                        a = o.apply({ x: e, y: n }, { bandAware: !0 }); return p(t, "discard") && !o.isInRange(a) ? null : a }(t); if (!m) return null; var g = m.x,
                    w = m.y,
                    O = t.shape,
                    _ = t.className,
                    M = b(b({ clipPath: p(t, "hidden") ? "url(#".concat(o, ")") : void 0 }, Object(v.c)(t, !0)), {}, { cx: g, cy: w }); return a.a.createElement(c.a, { className: u()("recharts-reference-dot", _) }, x.renderDot(O, M), h.a.renderCallByParent(t, { x: g - r, y: w - r, width: 2 * r, height: 2 * r })) }
            x.displayName = "ReferenceDot", x.defaultProps = { isFront: !1, ifOverflow: "discard", xAxisId: 0, yAxisId: 0, r: 10, fill: "#fff", stroke: "#ccc", fillOpacity: 1, strokeWidth: 1 }, x.renderDot = function(t, e) { return a.a.isValidElement(t) ? a.a.cloneElement(t, e) : i()(t) ? t(e) : a.a.createElement(l.a, m({}, e, { cx: e.cx, cy: e.cy, className: "recharts-reference-dot-dot" })) }; var O = n(1713),
                _ = n.n(O);

            function M(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function j(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? M(Object(n), !0).forEach((function(e) { S(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : M(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

            function S(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t }

            function E(t, e) { return function(t) { if (Array.isArray(t)) return t }(t) || function(t, e) { if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(t))) return; var n = [],
                        r = !0,
                        i = !1,
                        o = void 0; try { for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0); } catch (u) { i = !0, o = u } finally { try { r || null == s.return || s.return() } finally { if (i) throw o } } return n }(t, e) || function(t, e) { if (!t) return; if ("string" === typeof t) return k(t, e); var n = Object.prototype.toString.call(t).slice(8, -1); "Object" === n && t.constructor && (n = t.constructor.name); if ("Map" === n || "Set" === n) return Array.from(t); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return k(t, e) }(t, e) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

            function k(t, e) {
                (null == e || e > t.length) && (e = t.length); for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]; return r }

            function A() { return A = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]) } return t }, A.apply(this, arguments) }

            function C(t) { var e = t.x,
                    n = t.y,
                    r = t.segment,
                    o = t.xAxis,
                    s = t.yAxis,
                    l = t.shape,
                    m = t.className,
                    g = t.alwaysShow,
                    b = t.clipPathId;
                Object(y.a)(void 0 === g, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'); var w = function(t, e, n, r, i) { var o = i.viewBox,
                        a = o.x,
                        s = o.y,
                        u = o.width,
                        c = o.height,
                        l = i.position; if (n) { var h = i.y,
                            f = i.yAxis.orientation,
                            d = t.y.apply(h, { position: l }); if (p(i, "discard") && !t.y.isInRange(d)) return null; var y = [{ x: a + u, y: d }, { x: a, y: d }]; return "left" === f ? y.reverse() : y } if (e) { var v = i.x,
                            m = i.xAxis.orientation,
                            g = t.x.apply(v, { position: l }); if (p(i, "discard") && !t.x.isInRange(g)) return null; var b = [{ x: g, y: s + c }, { x: g, y: s }]; return "top" === m ? b.reverse() : b } if (r) { var w = i.segment.map((function(e) { return t.apply(e, { position: l }) })); return p(i, "discard") && _()(w, (function(e) { return !t.isInRange(e) })) ? null : w } return null }(Object(d.a)({ x: o.scale, y: s.scale }), Object(f.f)(e), Object(f.f)(n), r && 2 === r.length, t); if (!w) return null; var x = E(w, 2),
                    O = x[0],
                    M = O.x,
                    S = O.y,
                    k = x[1],
                    C = k.x,
                    P = k.y,
                    T = j(j({ clipPath: p(t, "hidden") ? "url(#".concat(b, ")") : void 0 }, Object(v.c)(t, !0)), {}, { x1: M, y1: S, x2: C, y2: P }); return a.a.createElement(c.a, { className: u()("recharts-reference-line", m) }, function(t, e) { return a.a.isValidElement(t) ? a.a.cloneElement(t, e) : i()(t) ? t(e) : a.a.createElement("line", A({}, e, { className: "recharts-reference-line-line" })) }(l, T), h.a.renderCallByParent(t, Object(d.c)({ x1: M, y1: S, x2: C, y2: P }))) }
            C.displayName = "ReferenceLine", C.defaultProps = { isFront: !1, ifOverflow: "discard", xAxisId: 0, yAxisId: 0, fill: "none", stroke: "#ccc", fillOpacity: 1, strokeWidth: 1, position: "middle" }; var P = n(1558);

            function T() { return T = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]) } return t }, T.apply(this, arguments) }

            function D(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function N(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? D(Object(n), !0).forEach((function(e) { R(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : D(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

            function R(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t }

            function I(t) { var e = t.x1,
                    n = t.x2,
                    r = t.y1,
                    i = t.y2,
                    o = t.className,
                    s = t.alwaysShow,
                    l = t.clipPathId;
                Object(y.a)(void 0 === s, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'); var m = Object(f.f)(e),
                    g = Object(f.f)(n),
                    b = Object(f.f)(r),
                    w = Object(f.f)(i),
                    x = t.shape; if (!m && !g && !b && !w && !x) return null; var O = function(t, e, n, r, i) { var o = i.x1,
                        a = i.x2,
                        s = i.y1,
                        u = i.y2,
                        c = i.xAxis,
                        l = i.yAxis; if (!c || !l) return null; var h = Object(d.a)({ x: c.scale, y: l.scale }),
                        f = { x: t ? h.x.apply(o, { position: "start" }) : h.x.rangeMin, y: n ? h.y.apply(s, { position: "start" }) : h.y.rangeMin },
                        y = { x: e ? h.x.apply(a, { position: "end" }) : h.x.rangeMax, y: r ? h.y.apply(u, { position: "end" }) : h.y.rangeMax }; return !p(i, "discard") || h.isInRange(f) && h.isInRange(y) ? Object(d.d)(f, y) : null }(m, g, b, w, t); if (!O && !x) return null; var _ = p(t, "hidden") ? "url(#".concat(l, ")") : void 0; return a.a.createElement(c.a, { className: u()("recharts-reference-area", o) }, I.renderRect(x, N(N({ clipPath: _ }, Object(v.c)(t, !0)), O)), h.a.renderCallByParent(t, O)) }
            I.displayName = "ReferenceArea", I.defaultProps = { isFront: !1, ifOverflow: "discard", xAxisId: 0, yAxisId: 0, r: 10, fill: "#ccc", fillOpacity: .5, stroke: "none", strokeWidth: 1 }, I.renderRect = function(t, e) { return a.a.isValidElement(t) ? a.a.cloneElement(t, e) : i()(t) ? t(e) : a.a.createElement(P.a, T({}, e, { className: "recharts-reference-area-rect" })) }; var B = n(1505),
                L = function(t, e, n, r, i) { var o = Object(B.a)(t, C.displayName),
                        a = Object(B.a)(t, x.displayName),
                        s = o.concat(a),
                        u = Object(B.a)(t, I.displayName),
                        c = "".concat(r, "Id"),
                        l = r[0],
                        h = e; if (s.length && (h = s.reduce((function(t, e) { if (e.props[c] === n && p(e.props, "extendDomain") && Object(f.g)(e.props[l])) { var r = e.props[l]; return [Math.min(t[0], r), Math.max(t[1], r)] } return t }), h)), u.length) { var d = "".concat(l, "1"),
                            y = "".concat(l, "2");
                        h = u.reduce((function(t, e) { if (e.props[c] === n && p(e.props, "extendDomain") && Object(f.g)(e.props[d]) && Object(f.g)(e.props[y])) { var r = e.props[d],
                                    i = e.props[y]; return [Math.min(t[0], r, i), Math.max(t[1], r, i)] } return t }), h) } return i && i.length && (h = i.reduce((function(t, e) { return Object(f.g)(e) ? [Math.min(t[0], e), Math.max(t[1], e)] : t }), h)), h } }, 1783: function(t, e, n) { "use strict";
            n.d(e, "a", (function() { return V })); var r = n(1494),
                i = n.n(r),
                o = n(1516),
                a = n.n(o),
                s = n(511),
                u = n.n(s),
                c = n(162),
                l = n.n(c),
                h = n(1),
                f = n.n(h),
                p = n(406),
                d = n.n(p),
                y = n(1537),
                v = n(1558),
                m = n(1495),
                g = n(1478);

            function b() { return b = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]) } return t }, b.apply(this, arguments) }

            function w(t, e) { return function(t) { if (Array.isArray(t)) return t }(t) || function(t, e) { if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(t))) return; var n = [],
                        r = !0,
                        i = !1,
                        o = void 0; try { for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0); } catch (u) { i = !0, o = u } finally { try { r || null == s.return || s.return() } finally { if (i) throw o } } return n }(t, e) || function(t, e) { if (!t) return; if ("string" === typeof t) return x(t, e); var n = Object.prototype.toString.call(t).slice(8, -1); "Object" === n && t.constructor && (n = t.constructor.name); if ("Map" === n || "Set" === n) return Array.from(t); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return x(t, e) }(t, e) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

            function x(t, e) {
                (null == e || e > t.length) && (e = t.length); for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]; return r }

            function O(t, e) { if (null == t) return {}; var n, r, i = function(t, e) { if (null == t) return {}; var n, r, i = {},
                        o = Object.keys(t); for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || (i[n] = t[n]); return i }(t, e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(t); for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n]) } return i }

            function _(t) { var e = t.offset,
                    n = t.layout,
                    r = t.width,
                    i = t.dataKey,
                    o = t.data,
                    a = t.dataPointFormatter,
                    s = t.xAxis,
                    u = t.yAxis,
                    c = O(t, ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"]),
                    l = Object(g.c)(c),
                    h = o.map((function(t, o) { var c = a(t, i),
                            h = c.x,
                            p = c.y,
                            d = c.value,
                            y = c.errorVal; if (!y) return null; var v, g, x = []; if (Array.isArray(y)) { var O = w(y, 2);
                            v = O[0], g = O[1] } else v = g = y; if ("vertical" === n) { var _ = s.scale,
                                M = p + e,
                                j = M + r,
                                S = M - r,
                                E = _(d - v),
                                k = _(d + g);
                            x.push({ x1: k, y1: j, x2: k, y2: S }), x.push({ x1: E, y1: M, x2: k, y2: M }), x.push({ x1: E, y1: j, x2: E, y2: S }) } else if ("horizontal" === n) { var A = u.scale,
                                C = h + e,
                                P = C - r,
                                T = C + r,
                                D = A(d - v),
                                N = A(d + g);
                            x.push({ x1: P, y1: N, x2: T, y2: N }), x.push({ x1: C, y1: D, x2: C, y2: N }), x.push({ x1: P, y1: D, x2: T, y2: D }) } return f.a.createElement(m.a, b({ className: "recharts-errorBar", key: "bar-".concat(o) }, l), x.map((function(t, e) { return f.a.createElement("line", b({}, t, { key: "line-".concat(e) })) }))) })); return f.a.createElement(m.a, { className: "recharts-errorBars" }, h) }
            _.defaultProps = { stroke: "black", strokeWidth: 1.5, width: 5, offset: 0, layout: "horizontal" }, _.displayName = "ErrorBar"; var M = function(t) { return null };
            M.displayName = "Cell"; var j = n(1611),
                S = n(1477),
                E = n(1505),
                k = n(1511),
                A = n(1509);

            function C(t) { return C = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t }, C(t) }

            function P(t, e) { if (null == t) return {}; var n, r, i = function(t, e) { if (null == t) return {}; var n, r, i = {},
                        o = Object.keys(t); for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || (i[n] = t[n]); return i }(t, e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(t); for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n]) } return i }

            function T() { return T = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]) } return t }, T.apply(this, arguments) }

            function D(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function N(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? D(Object(n), !0).forEach((function(e) { R(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : D(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

            function R(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t }

            function I(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

            function B(t, e) { for (var n = 0; n < e.length; n++) { var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r) } }

            function L(t, e) { return L = Object.setPrototypeOf || function(t, e) { return t.__proto__ = e, t }, L(t, e) }

            function z(t) { var e = function() { if ("undefined" === typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" === typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = W(t); if (e) { var i = W(this).constructor;
                        n = Reflect.construct(r, arguments, i) } else n = r.apply(this, arguments); return F(this, n) } }

            function F(t, e) { return !e || "object" !== C(e) && "function" !== typeof e ? function(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }(t) : e }

            function W(t) { return W = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) { return t.__proto__ || Object.getPrototypeOf(t) }, W(t) } var V = function(t) {! function(t, e) { if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && L(t, e) }(s, t); var e, n, r, o = z(s);

                function s() { var t;
                    I(this, s); for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r]; return (t = o.call.apply(o, [this].concat(n))).state = { isAnimationFinished: !1 }, t.id = Object(S.j)("recharts-bar-"), t.handleAnimationEnd = function() { var e = t.props.onAnimationEnd;
                        t.setState({ isAnimationFinished: !0 }), e && e() }, t.handleAnimationStart = function() { var e = t.props.onAnimationStart;
                        t.setState({ isAnimationFinished: !1 }), e && e() }, t } return e = s, r = [{ key: "getDerivedStateFromProps", value: function(t, e) { return t.animationId !== e.prevAnimationId ? { prevAnimationId: t.animationId, curData: t.data, prevData: e.curData } : t.data !== e.curData ? { curData: t.data } : null } }, { key: "renderRectangle", value: function(t, e) { return f.a.isValidElement(t) ? f.a.cloneElement(t, e) : u()(t) ? t(e) : f.a.createElement(v.a, e) } }], (n = [{ key: "renderRectanglesStatically", value: function(t) { var e = this,
                            n = this.props.shape,
                            r = Object(g.c)(this.props); return t && t.map((function(t, i) { var o = N(N(N({}, r), t), {}, { index: i }); return f.a.createElement(m.a, T({ className: "recharts-bar-rectangle" }, Object(g.b)(e.props, t, i), { key: "rectangle-".concat(i) }), s.renderRectangle(n, o)) })) } }, { key: "renderRectanglesWithAnimation", value: function() { var t = this,
                            e = this.props,
                            n = e.data,
                            r = e.layout,
                            i = e.isAnimationActive,
                            o = e.animationBegin,
                            a = e.animationDuration,
                            s = e.animationEasing,
                            u = e.animationId,
                            c = this.state.prevData; return f.a.createElement(y.a, { begin: o, duration: a, isActive: i, easing: s, from: { t: 0 }, to: { t: 1 }, key: "bar-".concat(u), onAnimationEnd: this.handleAnimationEnd, onAnimationStart: this.handleAnimationStart }, (function(e) { var i = e.t,
                                o = n.map((function(t, e) { var n = c && c[e]; if (n) { var o = Object(S.e)(n.x, t.x),
                                            a = Object(S.e)(n.y, t.y),
                                            s = Object(S.e)(n.width, t.width),
                                            u = Object(S.e)(n.height, t.height); return N(N({}, t), {}, { x: o(i), y: a(i), width: s(i), height: u(i) }) } if ("horizontal" === r) { var l = Object(S.e)(0, t.height)(i); return N(N({}, t), {}, { y: t.y + t.height - l, height: l }) } var h = Object(S.e)(0, t.width)(i); return N(N({}, t), {}, { width: h }) })); return f.a.createElement(m.a, null, t.renderRectanglesStatically(o)) })) } }, { key: "renderRectangles", value: function() { var t = this.props,
                            e = t.data,
                            n = t.isAnimationActive,
                            r = this.state.prevData; return !(n && e && e.length) || r && a()(r, e) ? this.renderRectanglesStatically(e) : this.renderRectanglesWithAnimation() } }, { key: "renderBackground", value: function() { var t = this,
                            e = this.props.data,
                            n = Object(g.c)(this.props.background); return e.map((function(e, r) { e.value; var i = e.background,
                                o = P(e, ["value", "background"]); if (!i) return null; var a = N(N(N(N(N({}, o), {}, { fill: "#eee" }, i), n), Object(g.b)(t.props, e, r)), {}, { index: r, key: "background-bar-".concat(r), className: "recharts-bar-background-rectangle" }); return s.renderRectangle(t.props.background, a) })) } }, { key: "renderErrorBar", value: function() { if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null; var t = this.props,
                            e = t.data,
                            n = t.xAxis,
                            r = t.yAxis,
                            i = t.layout,
                            o = t.children,
                            a = Object(E.a)(o, _.displayName); if (!a) return null; var s = "vertical" === i ? e[0].height / 2 : e[0].width / 2;

                        function u(t, e) { return { x: t.x, y: t.y, value: t.value, errorVal: Object(A.w)(t, e) } } return a.map((function(t, o) { return f.a.cloneElement(t, { key: "error-bar-".concat(o), data: e, xAxis: n, yAxis: r, layout: i, offset: s, dataPointFormatter: u }) })) } }, { key: "render", value: function() { var t = this.props,
                            e = t.hide,
                            n = t.data,
                            r = t.className,
                            o = t.xAxis,
                            a = t.yAxis,
                            s = t.left,
                            u = t.top,
                            c = t.width,
                            l = t.height,
                            h = t.isAnimationActive,
                            p = t.background,
                            y = t.id; if (e || !n || !n.length) return null; var v = this.state.isAnimationFinished,
                            g = d()("recharts-bar", r),
                            b = o && o.allowDataOverflow || a && a.allowDataOverflow,
                            w = i()(y) ? this.id : y; return f.a.createElement(m.a, { className: g }, b ? f.a.createElement("defs", null, f.a.createElement("clipPath", { id: "clipPath-".concat(w) }, f.a.createElement("rect", { x: s, y: u, width: c, height: l }))) : null, f.a.createElement(m.a, { className: "recharts-bar-rectangles", clipPath: b ? "url(#clipPath-".concat(w, ")") : null }, p ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(), (!h || v) && j.a.renderCallByParent(this.props, n)) } }]) && B(e.prototype, n), r && B(e, r), s }(h.PureComponent);
            V.displayName = "Bar", V.defaultProps = { xAxisId: 0, yAxisId: 0, legendType: "rect", minPointSize: 0, hide: !1, data: [], layout: "vertical", isAnimationActive: !k.a.isSsr, animationBegin: 0, animationDuration: 400, animationEasing: "ease" }, V.getComposedData = function(t) { var e = t.props,
                    n = t.item,
                    r = t.barPosition,
                    i = t.bandSize,
                    o = t.xAxis,
                    a = t.yAxis,
                    s = t.xAxisTicks,
                    u = t.yAxisTicks,
                    c = t.stackedData,
                    h = t.dataStartIndex,
                    f = t.displayedData,
                    p = t.offset,
                    d = Object(A.e)(r, n); if (!d) return null; var y = e.layout,
                    v = n.props,
                    m = v.dataKey,
                    g = v.children,
                    b = v.minPointSize,
                    w = "horizontal" === y ? a : o,
                    x = c ? w.scale.domain() : null,
                    O = Object(A.i)({ numericAxis: w }),
                    _ = Object(E.a)(g, M.displayName),
                    j = f.map((function(t, e) { var r, f, p, v, g, w; if (c ? r = Object(A.C)(c[h + e], x) : (r = Object(A.w)(t, m), l()(r) || (r = [O, r])), "horizontal" === y) { if (f = Object(A.j)({ axis: o, ticks: s, bandSize: i, offset: d.offset, entry: t, index: e }), p = a.scale(r[1]), v = d.size, g = a.scale(r[0]) - a.scale(r[1]), w = { x: f, y: a.y, width: v, height: a.height }, Math.abs(b) > 0 && Math.abs(g) < Math.abs(b)) { var M = Object(S.i)(g || b) * (Math.abs(b) - Math.abs(g));
                                p -= M, g += M } } else f = o.scale(r[0]), p = Object(A.j)({ axis: a, ticks: u, bandSize: i, offset: d.offset, entry: t, index: e }), v = o.scale(r[1]) - o.scale(r[0]), g = d.size, w = { x: o.x, y: p, width: o.width, height: g }, Math.abs(b) > 0 && Math.abs(v) < Math.abs(b) && (v += Object(S.i)(v || b) * (Math.abs(b) - Math.abs(v))); return N(N(N({}, t), {}, { x: f, y: p, width: v, height: g, value: c ? r : r[1], payload: t, background: w }, _ && _[e] && _[e].props), {}, { tooltipPayload: [Object(A.v)(n, t)], tooltipPosition: { x: f + v / 2, y: p + g / 2 } }) })); return N({ data: j, layout: y }, p) } }, 1785: function(t, e, n) { "use strict";
            n.d(e, "a", (function() { return D })); var r = n(511),
                i = n.n(r),
                o = n(1596),
                a = n.n(o),
                s = n(1),
                u = n.n(s),
                c = n(406),
                l = n.n(c),
                h = n(1569),
                f = n(1495),
                p = n(1555),
                d = n(1509),
                y = n(1477);

            function v(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function m(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? v(Object(n), !0).forEach((function(e) { g(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : v(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

            function g(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t } var b = ["Webkit", "Moz", "O", "ms"],
                w = n(1478);

            function x(t) { return x = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t }, x(t) }

            function O() { return O = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]) } return t }, O.apply(this, arguments) }

            function _(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function M(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? _(Object(n), !0).forEach((function(e) { j(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : _(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

            function j(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t }

            function S(t, e) { for (var n = 0; n < e.length; n++) { var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r) } }

            function E(t, e) { return E = Object.setPrototypeOf || function(t, e) { return t.__proto__ = e, t }, E(t, e) }

            function k(t) { var e = function() { if ("undefined" === typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" === typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = P(t); if (e) { var i = P(this).constructor;
                        n = Reflect.construct(r, arguments, i) } else n = r.apply(this, arguments); return A(this, n) } }

            function A(t, e) { return !e || "object" !== x(e) && "function" !== typeof e ? C(t) : e }

            function C(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }

            function P(t) { return P = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) { return t.__proto__ || Object.getPrototypeOf(t) }, P(t) } var T = function(t) { return t.changedTouches && !!t.changedTouches.length },
                D = function(t) {! function(t, e) { if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && E(t, e) }(c, t); var e, n, r, o = k(c);

                    function c(t) { var e; return function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, c), (e = o.call(this, t)).leaveTimer = void 0, e.travellerDragStartHandlers = void 0, e.handleDrag = function(t) { e.leaveTimer && (clearTimeout(e.leaveTimer), e.leaveTimer = null), e.state.isTravellerMoving ? e.handleTravellerMove(t) : e.state.isSlideMoving && e.handleSlideDrag(t) }, e.handleTouchMove = function(t) { null != t.changedTouches && t.changedTouches.length > 0 && e.handleDrag(t.changedTouches[0]) }, e.handleDragEnd = function() { e.setState({ isTravellerMoving: !1, isSlideMoving: !1 }), e.detachDragEndListener() }, e.handleLeaveWrapper = function() {
                            (e.state.isTravellerMoving || e.state.isSlideMoving) && (e.leaveTimer = window.setTimeout(e.handleDragEnd, e.props.leaveTimeOut)) }, e.handleEnterSlideOrTraveller = function() { e.setState({ isTextActive: !0 }) }, e.handleLeaveSlideOrTraveller = function() { e.setState({ isTextActive: !1 }) }, e.handleSlideDragStart = function(t) { var n = T(t) ? t.changedTouches[0] : t;
                            e.setState({ isTravellerMoving: !1, isSlideMoving: !0, slideMoveStartX: n.pageX }), e.attachDragEndListener() }, e.travellerDragStartHandlers = { startX: e.handleTravellerDragStart.bind(C(e), "startX"), endX: e.handleTravellerDragStart.bind(C(e), "endX") }, e.state = {}, e } return e = c, r = [{ key: "renderDefaultTraveller", value: function(t) { var e = t.x,
                                n = t.y,
                                r = t.width,
                                i = t.height,
                                o = t.stroke,
                                a = Math.floor(n + i / 2) - 1; return u.a.createElement(u.a.Fragment, null, u.a.createElement("rect", { x: e, y: n, width: r, height: i, fill: o, stroke: "none" }), u.a.createElement("line", { x1: e + 1, y1: a, x2: e + r - 1, y2: a, fill: "none", stroke: "#fff" }), u.a.createElement("line", { x1: e + 1, y1: a + 2, x2: e + r - 1, y2: a + 2, fill: "none", stroke: "#fff" })) } }, { key: "renderTraveller", value: function(t, e) { return u.a.isValidElement(t) ? u.a.cloneElement(t, e) : i()(t) ? t(e) : c.renderDefaultTraveller(e) } }, { key: "getDerivedStateFromProps", value: function(t, e) { var n = t.data,
                                r = t.width,
                                i = t.x,
                                o = t.travellerWidth,
                                s = t.updateId,
                                u = t.startIndex,
                                c = t.endIndex; if (n !== e.prevData || s !== e.prevUpdateId) return M({ prevData: n, prevTravellerWidth: o, prevUpdateId: s, prevX: i, prevWidth: r }, n && n.length ? function(t) { var e = t.data,
                                    n = t.startIndex,
                                    r = t.endIndex,
                                    i = t.x,
                                    o = t.width,
                                    s = t.travellerWidth; if (!e || !e.length) return {}; var u = e.length,
                                    c = Object(h.b)().domain(a()(0, u)).range([i, i + o - s]),
                                    l = c.domain().map((function(t) { return c(t) })); return { isTextActive: !1, isSlideMoving: !1, isTravellerMoving: !1, startX: c(n), endX: c(r), scale: c, scaleValues: l } }({ data: n, width: r, x: i, travellerWidth: o, startIndex: u, endIndex: c }) : { scale: null, scaleValues: null }); if (e.scale && (r !== e.prevWidth || i !== e.prevX || o !== e.prevTravellerWidth)) { e.scale.range([i, i + r - o]); var l = e.scale.domain().map((function(t) { return e.scale(t) })); return { prevData: n, prevTravellerWidth: o, prevUpdateId: s, prevX: i, prevWidth: r, startX: e.scale(t.startIndex), endX: e.scale(t.endIndex), scaleValues: l } } return null } }, { key: "getIndexInRange", value: function(t, e) { for (var n = 0, r = t.length - 1; r - n > 1;) { var i = Math.floor((n + r) / 2);
                                t[i] > e ? r = i : n = i } return e >= t[r] ? r : n } }], (n = [{ key: "componentWillUnmount", value: function() { this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener() } }, { key: "getIndex", value: function(t) { var e = t.startX,
                                n = t.endX,
                                r = this.state.scaleValues,
                                i = this.props,
                                o = i.gap,
                                a = i.data.length - 1,
                                s = Math.min(e, n),
                                u = Math.max(e, n),
                                l = c.getIndexInRange(r, s),
                                h = c.getIndexInRange(r, u); return { startIndex: l - l % o, endIndex: h === a ? a : h - h % o } } }, { key: "getTextOfTick", value: function(t) { var e = this.props,
                                n = e.data,
                                r = e.tickFormatter,
                                o = e.dataKey,
                                a = Object(d.w)(n[t], o, t); return i()(r) ? r(a, t) : a } }, { key: "attachDragEndListener", value: function() { window.addEventListener("mouseup", this.handleDragEnd, !0), window.addEventListener("touchend", this.handleDragEnd, !0) } }, { key: "detachDragEndListener", value: function() { window.removeEventListener("mouseup", this.handleDragEnd, !0), window.removeEventListener("touchend", this.handleDragEnd, !0) } }, { key: "handleSlideDrag", value: function(t) { var e = this.state,
                                n = e.slideMoveStartX,
                                r = e.startX,
                                i = e.endX,
                                o = this.props,
                                a = o.x,
                                s = o.width,
                                u = o.travellerWidth,
                                c = o.startIndex,
                                l = o.endIndex,
                                h = o.onChange,
                                f = t.pageX - n;
                            f > 0 ? f = Math.min(f, a + s - u - i, a + s - u - r) : f < 0 && (f = Math.max(f, a - r, a - i)); var p = this.getIndex({ startX: r + f, endX: i + f });
                            p.startIndex === c && p.endIndex === l || !h || h(p), this.setState({ startX: r + f, endX: i + f, slideMoveStartX: t.pageX }) } }, { key: "handleTravellerDragStart", value: function(t, e) { var n = T(e) ? e.changedTouches[0] : e;
                            this.setState({ isSlideMoving: !1, isTravellerMoving: !0, movingTravellerId: t, brushMoveStartX: n.pageX }), this.attachDragEndListener() } }, { key: "handleTravellerMove", value: function(t) { var e, n = this.state,
                                r = n.brushMoveStartX,
                                i = n.movingTravellerId,
                                o = n.endX,
                                a = n.startX,
                                s = this.state[i],
                                u = this.props,
                                c = u.x,
                                l = u.width,
                                h = u.travellerWidth,
                                f = u.onChange,
                                p = u.gap,
                                d = u.data,
                                y = { startX: this.state.startX, endX: this.state.endX },
                                v = t.pageX - r;
                            v > 0 ? v = Math.min(v, c + l - h - s) : v < 0 && (v = Math.max(v, c - s)), y[i] = s + v; var m = this.getIndex(y),
                                g = m.startIndex,
                                b = m.endIndex;
                            this.setState((j(e = {}, i, s + v), j(e, "brushMoveStartX", t.pageX), e), (function() { f && function() { var t = d.length - 1; return "startX" === i && (o > a ? g % p === 0 : b % p === 0) || o < a && b === t || "endX" === i && (o > a ? b % p === 0 : g % p === 0) || o > a && b === t }() && f(m) })) } }, { key: "renderBackground", value: function() { var t = this.props,
                                e = t.x,
                                n = t.y,
                                r = t.width,
                                i = t.height,
                                o = t.fill,
                                a = t.stroke; return u.a.createElement("rect", { stroke: a, fill: o, x: e, y: n, width: r, height: i }) } }, { key: "renderPanorama", value: function() { var t = this.props,
                                e = t.x,
                                n = t.y,
                                r = t.width,
                                i = t.height,
                                o = t.data,
                                a = t.children,
                                c = t.padding,
                                l = s.Children.only(a); return l ? u.a.cloneElement(l, { x: e, y: n, width: r, height: i, margin: c, compact: !0, data: o }) : null } }, { key: "renderTravellerLayer", value: function(t, e) { var n = this.props,
                                r = n.y,
                                i = n.travellerWidth,
                                o = n.height,
                                a = n.traveller,
                                s = Math.max(t, this.props.x),
                                l = M(M({}, Object(w.c)(this.props)), {}, { x: s, y: r, width: i, height: o }); return u.a.createElement(f.a, { className: "recharts-brush-traveller", onMouseEnter: this.handleEnterSlideOrTraveller, onMouseLeave: this.handleLeaveSlideOrTraveller, onMouseDown: this.travellerDragStartHandlers[e], onTouchStart: this.travellerDragStartHandlers[e], style: { cursor: "col-resize" } }, c.renderTraveller(a, l)) } }, { key: "renderSlide", value: function(t, e) { var n = this.props,
                                r = n.y,
                                i = n.height,
                                o = n.stroke,
                                a = n.travellerWidth,
                                s = Math.min(t, e) + a,
                                c = Math.max(Math.abs(e - t) - a, 0); return u.a.createElement("rect", { className: "recharts-brush-slide", onMouseEnter: this.handleEnterSlideOrTraveller, onMouseLeave: this.handleLeaveSlideOrTraveller, onMouseDown: this.handleSlideDragStart, onTouchStart: this.handleSlideDragStart, style: { cursor: "move" }, stroke: "none", fill: o, fillOpacity: .2, x: s, y: r, width: c, height: i }) } }, { key: "renderText", value: function() { var t = this.props,
                                e = t.startIndex,
                                n = t.endIndex,
                                r = t.y,
                                i = t.height,
                                o = t.travellerWidth,
                                a = t.stroke,
                                s = this.state,
                                c = s.startX,
                                l = s.endX,
                                h = { pointerEvents: "none", fill: a }; return u.a.createElement(f.a, { className: "recharts-brush-texts" }, u.a.createElement(p.a, O({ textAnchor: "end", verticalAnchor: "middle", x: Math.min(c, l) - 5, y: r + i / 2 }, h), this.getTextOfTick(e)), u.a.createElement(p.a, O({ textAnchor: "start", verticalAnchor: "middle", x: Math.max(c, l) + o + 5, y: r + i / 2 }, h), this.getTextOfTick(n))) } }, { key: "render", value: function() { var t = this.props,
                                e = t.data,
                                n = t.className,
                                r = t.children,
                                i = t.x,
                                o = t.y,
                                a = t.width,
                                s = t.height,
                                c = t.alwaysShowText,
                                h = this.state,
                                p = h.startX,
                                d = h.endX,
                                v = h.isTextActive,
                                w = h.isSlideMoving,
                                x = h.isTravellerMoving; if (!e || !e.length || !Object(y.g)(i) || !Object(y.g)(o) || !Object(y.g)(a) || !Object(y.g)(s) || a <= 0 || s <= 0) return null; var O = l()("recharts-brush", n),
                                _ = 1 === u.a.Children.count(r),
                                M = function(t, e) { if (!t) return null; var n = t.replace(/(\w)/, (function(t) { return t.toUpperCase() })),
                                        r = b.reduce((function(t, r) { return m(m({}, t), {}, g({}, r + n, e)) }), {}); return r[t] = e, r }("userSelect", "none"); return u.a.createElement(f.a, { className: O, onMouseMove: this.handleDrag, onMouseLeave: this.handleLeaveWrapper, onTouchMove: this.handleTouchMove, style: M }, this.renderBackground(), _ && this.renderPanorama(), this.renderSlide(p, d), this.renderTravellerLayer(p, "startX"), this.renderTravellerLayer(d, "endX"), (v || w || x || c) && this.renderText()) } }]) && S(e.prototype, n), r && S(e, r), c }(s.PureComponent);
            D.displayName = "Brush", D.defaultProps = { height: 40, travellerWidth: 5, gap: 1, fill: "#fff", stroke: "#666", padding: { top: 1, right: 1, bottom: 1, left: 1 }, leaveTimeOut: 1e3, alwaysShowText: !1 } }, 1786: function(t, e, n) { "use strict";
            n.d(e, "a", (function() { return H })); var r = n(1494),
                i = n.n(r),
                o = n(511),
                a = n.n(o),
                s = n(1600),
                u = n.n(s),
                c = n(1),
                l = n.n(c),
                h = n(1537),
                f = n(406),
                p = n.n(f),
                d = n(1548),
                y = n.n(d),
                v = n(162),
                m = n.n(v),
                g = n(1477);

            function b(t) { return b = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t }, b(t) }

            function w(t, e) { return function(t) { if (Array.isArray(t)) return t }(t) || function(t, e) { if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(t))) return; var n = [],
                        r = !0,
                        i = !1,
                        o = void 0; try { for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0); } catch (u) { i = !0, o = u } finally { try { r || null == s.return || s.return() } finally { if (i) throw o } } return n }(t, e) || function(t, e) { if (!t) return; if ("string" === typeof t) return x(t, e); var n = Object.prototype.toString.call(t).slice(8, -1); "Object" === n && t.constructor && (n = t.constructor.name); if ("Map" === n || "Set" === n) return Array.from(t); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return x(t, e) }(t, e) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

            function x(t, e) {
                (null == e || e > t.length) && (e = t.length); for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]; return r }

            function O(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function _(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? O(Object(n), !0).forEach((function(e) { M(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : O(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

            function M(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t }

            function j(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

            function S(t, e) { for (var n = 0; n < e.length; n++) { var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r) } }

            function E(t, e) { return E = Object.setPrototypeOf || function(t, e) { return t.__proto__ = e, t }, E(t, e) }

            function k(t) { var e = function() { if ("undefined" === typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" === typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = C(t); if (e) { var i = C(this).constructor;
                        n = Reflect.construct(r, arguments, i) } else n = r.apply(this, arguments); return A(this, n) } }

            function A(t, e) { return !e || "object" !== b(e) && "function" !== typeof e ? function(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }(t) : e }

            function C(t) { return C = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) { return t.__proto__ || Object.getPrototypeOf(t) }, C(t) }

            function P(t) { return m()(t) && Object(g.f)(t[0]) && Object(g.f)(t[1]) ? t.join(" ~ ") : t } var T = function(t) {! function(t, e) { if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && E(t, e) }(a, t); var e, n, r, o = k(a);

                function a() { return j(this, a), o.apply(this, arguments) } return e = a, (n = [{ key: "renderContent", value: function() { var t = this.props,
                            e = t.payload,
                            n = t.separator,
                            r = t.formatter,
                            i = t.itemStyle,
                            o = t.itemSorter; if (e && e.length) { var a = (o ? y()(e, o) : e).map((function(t, o) { if ("none" === t.type) return null; var a = _({ display: "block", paddingTop: 4, paddingBottom: 4, color: t.color || "#000" }, i),
                                    s = t.formatter || r || P,
                                    u = t.name,
                                    c = t.value; if (s) { var h = s(c, u, t, o, e); if (Array.isArray(h)) { var f = w(h, 2);
                                        c = f[0], u = f[1] } else c = h } return l.a.createElement("li", { className: "recharts-tooltip-item", key: "tooltip-item-".concat(o), style: a }, Object(g.f)(u) ? l.a.createElement("span", { className: "recharts-tooltip-item-name" }, u) : null, Object(g.f)(u) ? l.a.createElement("span", { className: "recharts-tooltip-item-separator" }, n) : null, l.a.createElement("span", { className: "recharts-tooltip-item-value" }, c), l.a.createElement("span", { className: "recharts-tooltip-item-unit" }, t.unit || "")) })); return l.a.createElement("ul", { className: "recharts-tooltip-item-list", style: { padding: 0, margin: 0 } }, a) } return null } }, { key: "render", value: function() { var t = this.props,
                            e = t.wrapperClassName,
                            n = t.contentStyle,
                            r = t.labelClassName,
                            o = t.labelStyle,
                            a = t.label,
                            s = t.labelFormatter,
                            u = t.payload,
                            c = _({ margin: 0, padding: 10, backgroundColor: "#fff", border: "1px solid #ccc", whiteSpace: "nowrap" }, n),
                            h = _({ margin: 0 }, o),
                            f = !i()(a),
                            d = f ? a : "",
                            y = p()("recharts-default-tooltip", e),
                            v = p()("recharts-tooltip-label", r); return f && s && (d = s(a, u)), l.a.createElement("div", { className: y, style: c }, l.a.createElement("p", { className: v, style: h }, l.a.isValidElement(d) ? d : "".concat(d)), this.renderContent()) } }]) && S(e.prototype, n), r && S(e, r), a }(c.PureComponent);
            T.displayName = "DefaultTooltipContent", T.defaultProps = { separator: " : ", contentStyle: {}, itemStyle: {}, labelStyle: {} }; var D = n(1511);

            function N(t) { return N = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t }, N(t) }

            function R(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function I(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? R(Object(n), !0).forEach((function(e) { B(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : R(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

            function B(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t }

            function L(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

            function z(t, e) { for (var n = 0; n < e.length; n++) { var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r) } }

            function F(t, e) { return F = Object.setPrototypeOf || function(t, e) { return t.__proto__ = e, t }, F(t, e) }

            function W(t) { var e = function() { if ("undefined" === typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" === typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = U(t); if (e) { var i = U(this).constructor;
                        n = Reflect.construct(r, arguments, i) } else n = r.apply(this, arguments); return V(this, n) } }

            function V(t, e) { return !e || "object" !== N(e) && "function" !== typeof e ? function(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }(t) : e }

            function U(t) { return U = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) { return t.__proto__ || Object.getPrototypeOf(t) }, U(t) } var G = "recharts-tooltip-wrapper";

            function X(t) { return t.dataKey } var H = function(t) {! function(t, e) { if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && F(t, e) }(s, t); var e, n, r, o = W(s);

                function s() { var t;
                    L(this, s); for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r]; return (t = o.call.apply(o, [this].concat(n))).state = { boxWidth: -1, boxHeight: -1 }, t.wrapperNode = void 0, t.getTranslate = function(e) { var n = e.key,
                            r = e.tooltipDimension,
                            i = e.viewBoxDimension,
                            o = t.props,
                            a = o.allowEscapeViewBox,
                            s = o.coordinate,
                            u = o.offset,
                            c = o.position,
                            l = o.viewBox; if (c && Object(g.g)(c[n])) return c[n]; var h = s[n] - r - u,
                            f = s[n] + u; return a[n] ? f : s[n] + r + u > l[n] + i ? Math.max(h, l[n]) : Math.max(f, l[n]) }, t } return e = s, (n = [{ key: "componentDidMount", value: function() { this.updateBBox() } }, { key: "componentDidUpdate", value: function() { this.updateBBox() } }, { key: "updateBBox", value: function() { var t = this.state,
                            e = t.boxWidth,
                            n = t.boxHeight; if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) { var r = this.wrapperNode.getBoundingClientRect();
                            (Math.abs(r.width - e) > 1 || Math.abs(r.height - n) > 1) && this.setState({ boxWidth: r.width, boxHeight: r.height }) } else -1 === e && -1 === n || this.setState({ boxWidth: -1, boxHeight: -1 }) } }, { key: "render", value: function() { var t, e, n, r = this,
                            o = this.props,
                            s = o.payload,
                            c = o.isAnimationActive,
                            f = o.animationDuration,
                            d = o.animationEasing,
                            y = o.filterNull,
                            v = function(t, e) { return !0 === t ? u()(e, X) : a()(t) ? u()(e, t) : e }(o.payloadUniqBy, y && s && s.length ? s.filter((function(t) { return !i()(t.value) })) : s),
                            m = v && v.length,
                            b = this.props,
                            w = b.content,
                            x = b.viewBox,
                            O = b.coordinate,
                            _ = b.position,
                            M = b.active,
                            j = I({ pointerEvents: "none", visibility: M && m ? "visible" : "hidden", position: "absolute", top: 0, left: 0 }, b.wrapperStyle); if (_ && Object(g.g)(_.x) && Object(g.g)(_.y)) e = _.x, n = _.y;
                        else { var S = this.state,
                                E = S.boxWidth,
                                k = S.boxHeight;
                            E > 0 && k > 0 && O ? (e = this.getTranslate({ key: "x", tooltipDimension: E, viewBoxDimension: x.width }), n = this.getTranslate({ key: "y", tooltipDimension: k, viewBoxDimension: x.height })) : j.visibility = "hidden" }
                        j = I(I({}, Object(h.b)({ transform: this.props.useTranslate3d ? "translate3d(".concat(e, "px, ").concat(n, "px, 0)") : "translate(".concat(e, "px, ").concat(n, "px)") })), j), c && M && (j = I(I({}, Object(h.b)({ transition: "transform ".concat(f, "ms ").concat(d) })), j)); var A = p()(G, (B(t = {}, "".concat(G, "-right"), Object(g.g)(e) && O && Object(g.g)(O.x) && e >= O.x), B(t, "".concat(G, "-left"), Object(g.g)(e) && O && Object(g.g)(O.x) && e < O.x), B(t, "".concat(G, "-bottom"), Object(g.g)(n) && O && Object(g.g)(O.y) && n >= O.y), B(t, "".concat(G, "-top"), Object(g.g)(n) && O && Object(g.g)(O.y) && n < O.y), t)); return l.a.createElement("div", { className: A, style: j, ref: function(t) { r.wrapperNode = t } }, function(t, e) { return l.a.isValidElement(t) ? l.a.cloneElement(t, e) : a()(t) ? l.a.createElement(t, e) : l.a.createElement(T, e) }(w, I(I({}, this.props), {}, { payload: v }))) } }]) && z(e.prototype, n), r && z(e, r), s }(c.PureComponent);
            H.displayName = "Tooltip", H.defaultProps = { active: !1, allowEscapeViewBox: { x: !1, y: !1 }, offset: 10, viewBox: { x1: 0, x2: 0, y1: 0, y2: 0 }, coordinate: { x: 0, y: 0 }, cursorStyle: {}, separator: " : ", wrapperStyle: {}, contentStyle: {}, itemStyle: {}, labelStyle: {}, cursor: !0, trigger: "hover", isAnimationActive: !D.a.isSsr, animationEasing: "ease", animationDuration: 400, filterNull: !0, useTranslate3d: !1 } }, 1787: function(t, e, n) { "use strict";
            n.d(e, "a", (function() { return Tr })); var r = { allowDownsampling: !0 }; var i, o, a, s = function() {
                function t(t, e) { var n = this;
                    this._resolutionMediaQueryList = null, this._resolutionListener = function(t) { return n._onResolutionChanged() }, this._canvasConfiguredListeners = [], this.canvas = t, this._canvasSize = { width: this.canvas.clientWidth, height: this.canvas.clientHeight }, this._options = e, this._configureCanvas(), this._installResolutionListener() } return t.prototype.destroy = function() { this._canvasConfiguredListeners.length = 0, this._uninstallResolutionListener(), this.canvas = null }, Object.defineProperty(t.prototype, "canvasSize", { get: function() { return { width: this._canvasSize.width, height: this._canvasSize.height } }, enumerable: !0, configurable: !0 }), t.prototype.resizeCanvas = function(t) { this._canvasSize = { width: t.width, height: t.height }, this._configureCanvas() }, Object.defineProperty(t.prototype, "pixelRatio", { get: function() { var t = this.canvas.ownerDocument.defaultView; if (null == t) throw new Error("No window is associated with the canvas"); return t.devicePixelRatio > 1 || this._options.allowDownsampling ? t.devicePixelRatio : 1 }, enumerable: !0, configurable: !0 }), t.prototype.subscribeCanvasConfigured = function(t) { this._canvasConfiguredListeners.push(t) }, t.prototype.unsubscribeCanvasConfigured = function(t) { this._canvasConfiguredListeners = this._canvasConfiguredListeners.filter((function(e) { return e != t })) }, t.prototype._configureCanvas = function() { var t = this.pixelRatio;
                    this.canvas.style.width = this._canvasSize.width + "px", this.canvas.style.height = this._canvasSize.height + "px", this.canvas.width = this._canvasSize.width * t, this.canvas.height = this._canvasSize.height * t, this._emitCanvasConfigured() }, t.prototype._emitCanvasConfigured = function() { var t = this;
                    this._canvasConfiguredListeners.forEach((function(e) { return e.call(t) })) }, t.prototype._installResolutionListener = function() { if (null !== this._resolutionMediaQueryList) throw new Error("Resolution listener is already installed"); var t = this.canvas.ownerDocument.defaultView; if (null == t) throw new Error("No window is associated with the canvas"); var e = t.devicePixelRatio;
                    this._resolutionMediaQueryList = t.matchMedia("all and (resolution: " + e + "dppx)"), this._resolutionMediaQueryList.addListener(this._resolutionListener) }, t.prototype._uninstallResolutionListener = function() { null !== this._resolutionMediaQueryList && (this._resolutionMediaQueryList.removeListener(this._resolutionListener), this._resolutionMediaQueryList = null) }, t.prototype._reinstallResolutionListener = function() { this._uninstallResolutionListener(), this._installResolutionListener() }, t.prototype._onResolutionChanged = function() { this._configureCanvas(), this._reinstallResolutionListener() }, t }();

            function u(t, e) { var n, r = ((n = {})[0] = [], n[1] = [t.lineWidth, t.lineWidth], n[2] = [2 * t.lineWidth, 2 * t.lineWidth], n[3] = [6 * t.lineWidth, 6 * t.lineWidth], n[4] = [t.lineWidth, 4 * t.lineWidth], n)[e];
                t.setLineDash(r) }

            function c(t, e, n, r) { t.beginPath(); var i = t.lineWidth % 2 ? .5 : 0;
                t.moveTo(n, e + i), t.lineTo(r, e + i), t.stroke() }

            function l(t, e) { if (!t) throw new Error("Assertion failed" + (e ? ": " + e : "")) }

            function h(t) { if (void 0 === t) throw new Error("Value is undefined"); return t }

            function f(t) { if (null === t) throw new Error("Value is null"); return t }

            function p(t) { return f(h(t)) }(a = i || (i = {}))[a.Simple = 0] = "Simple", a[a.WithSteps = 1] = "WithSteps",
                function(t) { t[t.Solid = 0] = "Solid", t[t.Dotted = 1] = "Dotted", t[t.Dashed = 2] = "Dashed", t[t.LargeDashed = 3] = "LargeDashed", t[t.SparseDotted = 4] = "SparseDotted" }(o || (o = {})); var d = { khaki: "#f0e68c", azure: "#f0ffff", aliceblue: "#f0f8ff", ghostwhite: "#f8f8ff", gold: "#ffd700", goldenrod: "#daa520", gainsboro: "#dcdcdc", gray: "#808080", green: "#008000", honeydew: "#f0fff0", floralwhite: "#fffaf0", lightblue: "#add8e6", lightcoral: "#f08080", lemonchiffon: "#fffacd", hotpink: "#ff69b4", lightyellow: "#ffffe0", greenyellow: "#adff2f", lightgoldenrodyellow: "#fafad2", limegreen: "#32cd32", linen: "#faf0e6", lightcyan: "#e0ffff", magenta: "#f0f", maroon: "#800000", olive: "#808000", orange: "#ffa500", oldlace: "#fdf5e6", mediumblue: "#0000cd", transparent: "#0000", lime: "#0f0", lightpink: "#ffb6c1", mistyrose: "#ffe4e1", moccasin: "#ffe4b5", midnightblue: "#191970", orchid: "#da70d6", mediumorchid: "#ba55d3", mediumturquoise: "#48d1cc", orangered: "#ff4500", royalblue: "#4169e1", powderblue: "#b0e0e6", red: "#f00", coral: "#ff7f50", turquoise: "#40e0d0", white: "#fff", whitesmoke: "#f5f5f5", wheat: "#f5deb3", teal: "#008080", steelblue: "#4682b4", bisque: "#ffe4c4", aquamarine: "#7fffd4", aqua: "#0ff", sienna: "#a0522d", silver: "#c0c0c0", springgreen: "#00ff7f", antiquewhite: "#faebd7", burlywood: "#deb887", brown: "#a52a2a", beige: "#f5f5dc", chocolate: "#d2691e", chartreuse: "#7fff00", cornflowerblue: "#6495ed", cornsilk: "#fff8dc", crimson: "#dc143c", cadetblue: "#5f9ea0", tomato: "#ff6347", fuchsia: "#f0f", blue: "#00f", salmon: "#fa8072", blanchedalmond: "#ffebcd", slateblue: "#6a5acd", slategray: "#708090", thistle: "#d8bfd8", tan: "#d2b48c", cyan: "#0ff", darkblue: "#00008b", darkcyan: "#008b8b", darkgoldenrod: "#b8860b", darkgray: "#a9a9a9", blueviolet: "#8a2be2", black: "#000", darkmagenta: "#8b008b", darkslateblue: "#483d8b", darkkhaki: "#bdb76b", darkorchid: "#9932cc", darkorange: "#ff8c00", darkgreen: "#006400", darkred: "#8b0000", dodgerblue: "#1e90ff", darkslategray: "#2f4f4f", dimgray: "#696969", deepskyblue: "#00bfff", firebrick: "#b22222", forestgreen: "#228b22", indigo: "#4b0082", ivory: "#fffff0", lavenderblush: "#fff0f5", feldspar: "#d19275", indianred: "#cd5c5c", lightgreen: "#90ee90", lightgrey: "#d3d3d3", lightskyblue: "#87cefa", lightslategray: "#789", lightslateblue: "#8470ff", snow: "#fffafa", lightseagreen: "#20b2aa", lightsalmon: "#ffa07a", darksalmon: "#e9967a", darkviolet: "#9400d3", mediumpurple: "#9370d8", mediumaquamarine: "#66cdaa", skyblue: "#87ceeb", lavender: "#e6e6fa", lightsteelblue: "#b0c4de", mediumvioletred: "#c71585", mintcream: "#f5fffa", navajowhite: "#ffdead", navy: "#000080", olivedrab: "#6b8e23", palevioletred: "#d87093", violetred: "#d02090", yellow: "#ff0", yellowgreen: "#9acd32", lawngreen: "#7cfc00", pink: "#ffc0cb", paleturquoise: "#afeeee", palegoldenrod: "#eee8aa", darkolivegreen: "#556b2f", darkseagreen: "#8fbc8f", darkturquoise: "#00ced1", peachpuff: "#ffdab9", deeppink: "#ff1493", violet: "#ee82ee", palegreen: "#98fb98", mediumseagreen: "#3cb371", peru: "#cd853f", saddlebrown: "#8b4513", sandybrown: "#f4a460", rosybrown: "#bc8f8f", purple: "#800080", seagreen: "#2e8b57", seashell: "#fff5ee", papayawhip: "#ffefd5", mediumslateblue: "#7b68ee", plum: "#dda0dd", mediumspringgreen: "#00fa9a" };

            function y(t) { return t < 0 ? 0 : t > 255 ? 255 : Math.round(t) || 0 }

            function v(t) { return t <= 0 || t > 0 ? t < 0 ? 0 : t > 1 ? 1 : Math.round(1e4 * t) / 1e4 : 0 } var m = /^#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])?$/i,
                g = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$/i,
                b = /^rgb\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*\)$/,
                w = /^rgba\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?[\d]{0,10}(?:\.\d+)?)\s*\)$/;

            function x(t) { var e; if ((t = t.toLowerCase()) in d && (t = d[t]), e = w.exec(t) || b.exec(t)) return [y(parseInt(e[1], 10)), y(parseInt(e[2], 10)), y(parseInt(e[3], 10)), v(e.length < 5 ? 1 : parseFloat(e[4]))]; if (e = g.exec(t)) return [y(parseInt(e[1], 16)), y(parseInt(e[2], 16)), y(parseInt(e[3], 16)), 1]; if (e = m.exec(t)) return [y(17 * parseInt(e[1], 16)), y(17 * parseInt(e[2], 16)), y(17 * parseInt(e[3], 16)), 1]; throw new Error("Cannot parse color: ".concat(t)) }

            function O(t) { var e, n = x(t); return { t: "rgb(".concat(n[0], ", ").concat(n[1], ", ").concat(n[2], ")"), i: (e = n, .199 * e[0] + .687 * e[1] + .114 * e[2] > 160 ? "black" : "white") } } var _ = function(t, e) { return _ = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]) }, _(t, e) };

            function M(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

                function n() { this.constructor = t }
                _(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n) } var j = function() { return j = Object.assign || function(t) { for (var e, n = 1, r = arguments.length; n < r; n++)
                        for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]); return t }, j.apply(this, arguments) };

            function S(t, e, n) { if (n || 2 === arguments.length)
                    for (var r, i = 0, o = e.length; i < o; i++) !r && i in e || (r || (r = Array.prototype.slice.call(e, 0, i)), r[i] = e[i]); return t.concat(r || Array.prototype.slice.call(e)) } var E = function() {
                function t() { this.h = [] } return t.prototype.u = function(t, e, n) { var r = { o: t, l: e, v: !0 === n };
                    this.h.push(r) }, t.prototype._ = function(t) { var e = this.h.findIndex((function(e) { return t === e.o }));
                    e > -1 && this.h.splice(e, 1) }, t.prototype.M = function(t) { this.h = this.h.filter((function(e) { return e.l !== t })) }, t.prototype.m = function(t, e) { var n = S([], this.h, !0);
                    this.h = this.h.filter((function(t) { return !t.v })), n.forEach((function(n) { return n.o(t, e) })) }, t.prototype.p = function() { return this.h.length > 0 }, t.prototype.g = function() { this.h = [] }, t }();

            function k(t) { for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n]; for (var r = 0, i = e; r < i.length; r++) { var o = i[r]; for (var a in o) void 0 !== o[a] && ("object" != typeof o[a] || void 0 === t[a] ? t[a] = o[a] : k(t[a], o[a])) } return t }

            function A(t) { return "number" == typeof t && isFinite(t) }

            function C(t) { return "number" == typeof t && t % 1 == 0 }

            function P(t) { return "string" == typeof t }

            function T(t) { return "boolean" == typeof t }

            function D(t) { var e, n, r, i = t; if (!i || "object" != typeof i) return i; for (n in e = Array.isArray(i) ? [] : {}, i) i.hasOwnProperty(n) && (r = i[n], e[n] = r && "object" == typeof r ? D(r) : r); return e }

            function N(t) { return null !== t }

            function R(t) { return null === t ? void 0 : t } var I = "'Trebuchet MS', Roboto, Ubuntu, sans-serif";

            function B(t, e, n) { return n = void 0 !== n ? "".concat(n, " ") : "", void 0 === e && (e = I), "".concat(n).concat(t, "px ").concat(e) } var L = function() {
                    function t(t) { this.k = { N: 1, C: 4, S: NaN, T: "", D: "", A: "", B: 0, L: 0, F: 0, O: 0, V: 0 }, this.P = t } return t.prototype.W = function() { var t = this.k,
                            e = this.R(),
                            n = this.I(); return t.S === e && t.D === n || (t.S = e, t.D = n, t.T = B(e, n), t.O = Math.floor(e / 3.5), t.B = t.O, t.L = Math.max(Math.ceil(e / 2 - t.C / 2), 0), t.F = Math.ceil(e / 2 + t.C / 2), t.V = Math.round(e / 10)), t.A = this.j(), this.k }, t.prototype.j = function() { return this.P.W().layout.textColor }, t.prototype.R = function() { return this.P.W().layout.fontSize }, t.prototype.I = function() { return this.P.W().layout.fontFamily }, t }(),
                z = function() {
                    function t() { this.q = [] } return t.prototype.U = function(t) { this.q = t }, t.prototype.H = function(t, e, n, r) { this.q.forEach((function(i) { t.save(), i.H(t, e, n, r), t.restore() })) }, t }(),
                F = function() {
                    function t() {} return t.prototype.H = function(t, e, n, r) { t.save(), t.scale(e, e), this.Y(t, n, r), t.restore() }, t.prototype.$ = function(t, e, n, r) { t.save(), t.scale(e, e), this.K(t, n, r), t.restore() }, t.prototype.K = function(t, e, n) {}, t }(),
                W = function(t) {
                    function e() { var e = null !== t && t.apply(this, arguments) || this; return e.X = null, e } return M(e, t), e.prototype.Z = function(t) { this.X = t }, e.prototype.Y = function(t) { if (null !== this.X && null !== this.X.J) { var e = this.X.J,
                                n = this.X,
                                r = function(r) { t.beginPath(); for (var i = e.to - 1; i >= e.from; --i) { var o = n.G[i];
                                        t.moveTo(o.tt, o.it), t.arc(o.tt, o.it, r, 0, 2 * Math.PI) }
                                    t.fill() };
                            t.fillStyle = n.nt, r(n.st + 2), t.fillStyle = n.ht, r(n.st) } }, e }(F);

            function V() { return { G: [{ tt: 0, it: 0, rt: 0, et: 0 }], ht: "", nt: "", st: 0, J: null } } var U = { from: 0, to: 1 },
                G = function() {
                    function t(t, e) { this.ut = new z, this.ot = [], this.lt = [], this.ft = !0, this.P = t, this.ct = e, this.ut.U(this.ot) } return t.prototype.vt = function(t) { var e = this.P._t();
                        e.length !== this.ot.length && (this.lt = e.map(V), this.ot = this.lt.map((function(t) { var e = new W; return e.Z(t), e })), this.ut.U(this.ot)), this.ft = !0 }, t.prototype.dt = function(t, e, n) { return this.ft && (this.wt(t), this.ft = !1), this.ut }, t.prototype.wt = function(t) { var e = this,
                            n = this.P._t(),
                            r = this.ct.Mt(),
                            i = this.P.bt();
                        n.forEach((function(n, o) { var a, s = e.lt[o],
                                u = n.gt(r); if (null !== u && n.yt()) { var c = f(n.kt());
                                s.ht = u.Nt, s.st = u.st, s.G[0].et = u.et, s.G[0].it = n.Ct().xt(u.et, c.St), s.nt = null !== (a = u.Tt) && void 0 !== a ? a : e.P.Dt(s.G[0].it / t), s.G[0].rt = r, s.G[0].tt = i.At(r), s.J = U } else s.J = null })) }, t }(),
                X = function() {
                    function t(t) { this.Bt = t } return t.prototype.H = function(t, e, n, r) { if (null !== this.Bt) { var i = this.Bt.Lt.yt,
                                o = this.Bt.Et.yt; if (i || o) { t.save(); var a = Math.round(this.Bt.tt * e),
                                    s = Math.round(this.Bt.it * e),
                                    l = Math.ceil(this.Bt.Ft * e),
                                    h = Math.ceil(this.Bt.Ot * e);
                                t.lineCap = "butt", i && a >= 0 && (t.lineWidth = Math.floor(this.Bt.Lt.Vt * e), t.strokeStyle = this.Bt.Lt.A, t.fillStyle = this.Bt.Lt.A, u(t, this.Bt.Lt.Pt), function(t, e, n, r) { t.beginPath(); var i = t.lineWidth % 2 ? .5 : 0;
                                    t.moveTo(e + i, 0), t.lineTo(e + i, r), t.stroke() }(t, a, 0, h)), o && s >= 0 && (t.lineWidth = Math.floor(this.Bt.Et.Vt * e), t.strokeStyle = this.Bt.Et.A, t.fillStyle = this.Bt.Et.A, u(t, this.Bt.Et.Pt), c(t, s, 0, l)), t.restore() } } }, t }(),
                H = function() {
                    function t(t) { this.ft = !0, this.Wt = { Lt: { Vt: 1, Pt: 0, A: "", yt: !1 }, Et: { Vt: 1, Pt: 0, A: "", yt: !1 }, Ft: 0, Ot: 0, tt: 0, it: 0 }, this.zt = new X(this.Wt), this.Rt = t } return t.prototype.vt = function() { this.ft = !0 }, t.prototype.dt = function(t, e) { return this.ft && (this.wt(), this.ft = !1), this.zt }, t.prototype.wt = function() { var t = this.Rt.yt(),
                            e = f(this.Rt.It()),
                            n = e.jt().W().crosshair,
                            r = this.Wt;
                        r.Et.yt = t && this.Rt.qt(e), r.Lt.yt = t && this.Rt.Ut(), r.Et.Vt = n.horzLine.width, r.Et.Pt = n.horzLine.style, r.Et.A = n.horzLine.color, r.Lt.Vt = n.vertLine.width, r.Lt.Pt = n.vertLine.style, r.Lt.A = n.vertLine.color, r.Ft = e.Ht(), r.Ot = e.Yt(), r.tt = this.Rt.$t(), r.it = this.Rt.Kt() }, t }();

            function Y(t, e, n, r, i, o) { t.fillRect(e + o, n, r - 2 * o, o), t.fillRect(e + o, n + i - o, r - 2 * o, o), t.fillRect(e, n, o, i), t.fillRect(e + r - o, n, o, i) }

            function q(t, e, n) { t.save(), t.scale(e, e), n(), t.restore() }

            function J(t, e, n, r, i, o) { t.save(), t.globalCompositeOperation = "copy", t.fillStyle = o, t.fillRect(e, n, r, i), t.restore() }

            function $(t, e, n, r, i, o, a) { t.save(), t.globalCompositeOperation = "copy"; var s = t.createLinearGradient(0, 0, 0, i);
                s.addColorStop(0, o), s.addColorStop(1, a), t.fillStyle = s, t.fillRect(e, n, r, i), t.restore() } var K, Z = function() {
                    function t(t, e) { this.Z(t, e) } return t.prototype.Z = function(t, e) { this.Bt = t, this.Xt = e }, t.prototype.H = function(t, e, n, r, i, o) { if (this.Bt.yt) { t.font = e.T; var a = this.Bt.Zt || !this.Bt.Jt ? e.C : 0,
                                s = e.N,
                                u = e.O,
                                c = e.B,
                                l = e.L,
                                h = e.F,
                                f = this.Bt.Gt,
                                p = Math.ceil(n.Qt(t, f)),
                                d = e.V,
                                y = e.S + u + c,
                                v = Math.ceil(.5 * y),
                                m = s + p + l + h + a,
                                g = this.Xt.ti;
                            this.Xt.ii && (g = this.Xt.ii); var b, w, x = (g = Math.round(g)) - v,
                                O = x + y,
                                _ = "right" === i,
                                M = _ ? r : 0,
                                j = Math.ceil(r * o),
                                S = M; if (t.fillStyle = this.Xt.t, t.lineWidth = 1, t.lineCap = "butt", f) { _ ? (b = M - a, w = (S = M - m) + h) : (S = M + m, b = M + a, w = M + s + a + l); var E = Math.max(1, Math.floor(o)),
                                    k = Math.max(1, Math.floor(s * o)),
                                    A = _ ? j : 0,
                                    C = Math.round(x * o),
                                    P = Math.round(S * o),
                                    T = Math.round(g * o) - Math.floor(.5 * o),
                                    D = T + E + (T - C),
                                    N = Math.round(b * o);
                                t.save(), t.beginPath(), t.moveTo(A, C), t.lineTo(P, C), t.lineTo(P, D), t.lineTo(A, D), t.fill(), t.fillStyle = this.Bt.Tt, t.fillRect(_ ? j - k : 0, C, k, D - C), this.Bt.Zt && (t.fillStyle = this.Xt.A, t.fillRect(A, T, N - A, E)), t.textAlign = "left", t.fillStyle = this.Xt.A, q(t, o, (function() { t.fillText(f, w, O - c - d) })), t.restore() } } }, t.prototype.Yt = function(t, e) { return this.Bt.yt ? t.S + t.O + t.B : 0 }, t }(),
                Q = function() {
                    function t(t) { this.ni = { ti: 0, A: "#FFF", t: "#000" }, this.si = { Gt: "", yt: !1, Zt: !0, Jt: !1, Tt: "" }, this.hi = { Gt: "", yt: !1, Zt: !1, Jt: !0, Tt: "" }, this.ft = !0, this.ri = new(t || Z)(this.si, this.ni), this.ei = new(t || Z)(this.hi, this.ni) } return t.prototype.Gt = function() { return this.ui(), this.si.Gt }, t.prototype.ti = function() { return this.ui(), this.ni.ti }, t.prototype.vt = function() { this.ft = !0 }, t.prototype.Yt = function(t, e) { return void 0 === e && (e = !1), Math.max(this.ri.Yt(t, e), this.ei.Yt(t, e)) }, t.prototype.ai = function() { return this.ni.ii || 0 }, t.prototype.oi = function(t) { this.ni.ii = t }, t.prototype.li = function() { return this.ui(), this.si.yt || this.hi.yt }, t.prototype.fi = function() { return this.ui(), this.si.yt }, t.prototype.dt = function(t) { return this.ui(), this.si.Zt = this.si.Zt && t.W().drawTicks, this.hi.Zt = this.hi.Zt && t.W().drawTicks, this.ri.Z(this.si, this.ni), this.ei.Z(this.hi, this.ni), this.ri }, t.prototype.ci = function() { return this.ui(), this.ri.Z(this.si, this.ni), this.ei.Z(this.hi, this.ni), this.ei }, t.prototype.ui = function() { this.ft && (this.si.Zt = !0, this.hi.Zt = !1, this.vi(this.si, this.hi, this.ni)) }, t }(),
                tt = function(t) {
                    function e(e, n, r) { var i = t.call(this) || this; return i.Rt = e, i._i = n, i.di = r, i } return M(e, t), e.prototype.vi = function(t, e, n) { t.yt = !1; var r = this.Rt.W().horzLine; if (r.labelVisible) { var i = this._i.kt(); if (this.Rt.yt() && !this._i.wi() && null !== i) { var o = O(r.labelBackgroundColor);
                                n.t = o.t, n.A = o.i; var a = this.di(this._i);
                                n.ti = a.ti, t.Gt = this._i.Mi(a.et, i), t.yt = !0 } } }, e }(Q),
                et = /[1-9]/g,
                nt = function() {
                    function t() { this.Bt = null } return t.prototype.Z = function(t) { this.Bt = t }, t.prototype.H = function(t, e, n) { var r = this; if (null !== this.Bt && !1 !== this.Bt.yt && 0 !== this.Bt.Gt.length) { t.font = e.T; var i = Math.round(e.bi.Qt(t, this.Bt.Gt, et)); if (!(i <= 0)) { t.save(); var o = e.mi,
                                    a = i + 2 * o,
                                    s = a / 2,
                                    u = this.Bt.Ht,
                                    c = this.Bt.ti,
                                    l = Math.floor(c - s) + .5;
                                l < 0 ? (c += Math.abs(0 - l), l = Math.floor(c - s) + .5) : l + a > u && (c -= Math.abs(u - (l + a)), l = Math.floor(c - s) + .5); var h = l + a,
                                    p = 0 + e.N + e.O + e.S + e.B;
                                t.fillStyle = this.Bt.t; var d = Math.round(l * n),
                                    y = Math.round(0 * n),
                                    v = Math.round(h * n),
                                    m = Math.round(p * n);
                                t.fillRect(d, y, v - d, m - y); var g = Math.round(this.Bt.ti * n),
                                    b = y,
                                    w = Math.round((b + e.N + e.C) * n);
                                t.fillStyle = this.Bt.A; var x = Math.max(1, Math.floor(n)),
                                    O = Math.floor(.5 * n);
                                t.fillRect(g - O, b, x, w - b); var _ = p - e.V - e.B;
                                t.textAlign = "left", t.fillStyle = this.Bt.A, q(t, n, (function() { t.fillText(f(r.Bt).Gt, l + o, _) })), t.restore() } } }, t }(),
                rt = function() {
                    function t(t, e, n) { this.ft = !0, this.zt = new nt, this.Wt = { yt: !1, t: "#4c525e", A: "white", Gt: "", Ht: 0, ti: NaN }, this.ct = t, this.pi = e, this.di = n } return t.prototype.vt = function() { this.ft = !0 }, t.prototype.dt = function() { return this.ft && (this.wt(), this.ft = !1), this.zt.Z(this.Wt), this.zt }, t.prototype.wt = function() { var t = this.Wt;
                        t.yt = !1; var e = this.ct.W().vertLine; if (e.labelVisible) { var n = this.pi.bt(); if (!n.wi()) { var r = n.gi(this.ct.Mt());
                                t.Ht = n.Ht(); var i = this.di(); if (i.rt) { t.ti = i.ti, t.Gt = n.yi(f(r)), t.yt = !0; var o = O(e.labelBackgroundColor);
                                    t.t = o.t, t.A = o.i } } } }, t }(),
                it = function() {
                    function t() { this.ki = null, this.Ni = 0 } return t.prototype.xi = function() { return this.Ni }, t.prototype.Ci = function(t) { this.Ni = t }, t.prototype.Ct = function() { return this.ki }, t.prototype.Si = function(t) { this.ki = t }, t.prototype.Ti = function() { return [] }, t.prototype.yt = function() { return !0 }, t }();! function(t) { t[t.Normal = 0] = "Normal", t[t.Magnet = 1] = "Magnet" }(K || (K = {})); var ot = function(t) {
                function e(e, n) { var r, i, o = t.call(this) || this;
                    o.Di = null, o.Ai = NaN, o.Bi = 0, o.Li = !0, o.Ei = new Map, o.Fi = !1, o.Oi = NaN, o.Vi = NaN, o.Pi = NaN, o.Wi = NaN, o.pi = e, o.zi = n, o.Ri = new G(e, o), o.Ii = (r = function() { return o.Ai }, i = function() { return o.Vi }, function(t) { var e = i(),
                            n = r(); if (t === f(o.Di).ji()) return { et: n, ti: e }; var a = f(t.kt()); return { et: t.qi(e, a), ti: e } }); var a = function() { return { rt: o.pi.bt().gi(o.Bi), ti: o.$t() } }; return o.Ui = new rt(o, e, a), o.Hi = new H(o), o } return M(e, t), e.prototype.W = function() { return this.zi }, e.prototype.Yi = function(t, e) { this.Pi = t, this.Wi = e }, e.prototype.$i = function() { this.Pi = NaN, this.Wi = NaN }, e.prototype.Ki = function() { return this.Pi }, e.prototype.Xi = function() { return this.Wi }, e.prototype.Zi = function(t, e, n) { this.Fi || (this.Fi = !0), this.Li = !0, this.Ji(t, e, n) }, e.prototype.Mt = function() { return this.Bi }, e.prototype.$t = function() { return this.Oi }, e.prototype.Kt = function() { return this.Vi }, e.prototype.yt = function() { return this.Li }, e.prototype.Gi = function() { this.Li = !1, this.Qi(), this.Ai = NaN, this.Oi = NaN, this.Vi = NaN, this.Di = null, this.$i() }, e.prototype.tn = function(t) { return null !== this.Di ? [this.Hi, this.Ri] : [] }, e.prototype.qt = function(t) { return t === this.Di && this.zi.horzLine.visible }, e.prototype.Ut = function() { return this.zi.vertLine.visible }, e.prototype.nn = function(t, e) { this.Li && this.Di === t || this.Ei.clear(); var n = []; return this.Di === t && n.push(this.sn(this.Ei, e, this.Ii)), n }, e.prototype.Ti = function() { return this.Li ? [this.Ui] : [] }, e.prototype.It = function() { return this.Di }, e.prototype.hn = function() { this.Hi.vt(), this.Ei.forEach((function(t) { return t.vt() })), this.Ui.vt(), this.Ri.vt() }, e.prototype.rn = function(t) { return t && !t.ji().wi() ? t.ji() : null }, e.prototype.Ji = function(t, e, n) { this.en(t, e, n) && this.hn() }, e.prototype.en = function(t, e, n) { var r = this.Oi,
                        i = this.Vi,
                        o = this.Ai,
                        a = this.Bi,
                        s = this.Di,
                        u = this.rn(n);
                    this.Bi = t, this.Oi = isNaN(t) ? NaN : this.pi.bt().At(t), this.Di = n; var c = null !== u ? u.kt() : null; return null !== u && null !== c ? (this.Ai = e, this.Vi = u.xt(e, c)) : (this.Ai = NaN, this.Vi = NaN), r !== this.Oi || i !== this.Vi || a !== this.Bi || o !== this.Ai || s !== this.Di }, e.prototype.Qi = function() { var t = this.pi._t().map((function(t) { return t.an().un() })).filter(N),
                        e = 0 === t.length ? null : Math.max.apply(Math, t);
                    this.Bi = null !== e ? e : NaN }, e.prototype.sn = function(t, e, n) { var r = t.get(e); return void 0 === r && (r = new tt(this, e, n), t.set(e, r)), r }, e }(it);

            function at(t) { return "left" === t || "right" === t } var st = function() {
                function t(t) { this.on = new Map, this.ln = [], this.fn = t } return t.prototype.cn = function(t, e) { var n = function(t, e) { return void 0 === t ? e : { vn: Math.max(t.vn, e.vn), _n: t._n || e._n } }(this.on.get(t), e);
                    this.on.set(t, n) }, t.prototype.dn = function() { return this.fn }, t.prototype.wn = function(t) { var e = this.on.get(t); return void 0 === e ? { vn: this.fn } : { vn: Math.max(this.fn, e.vn), _n: e._n } }, t.prototype.Mn = function() { this.ln = [{ bn: 0 }] }, t.prototype.mn = function(t) { this.ln = [{ bn: 1, St: t }] }, t.prototype.pn = function() { this.ln = [{ bn: 4 }] }, t.prototype.gn = function(t) { this.ln.push({ bn: 2, St: t }) }, t.prototype.yn = function(t) { this.ln.push({ bn: 3, St: t }) }, t.prototype.kn = function() { return this.ln }, t.prototype.Nn = function(t) { for (var e = this, n = 0, r = t.ln; n < r.length; n++) { var i = r[n];
                        this.xn(i) }
                    this.fn = Math.max(this.fn, t.fn), t.on.forEach((function(t, n) { e.cn(n, t) })) }, t.prototype.xn = function(t) { switch (t.bn) {
                        case 0:
                            this.Mn(); break;
                        case 1:
                            this.mn(t.St); break;
                        case 2:
                            this.gn(t.St); break;
                        case 3:
                            this.yn(t.St); break;
                        case 4:
                            this.pn() } }, t }();

            function ut(t, e) { if (!A(t)) return "n/a"; if (!C(e)) throw new TypeError("invalid length"); if (e < 0 || e > 16) throw new TypeError("invalid length"); return 0 === e ? t.toString() : ("0000000000000000" + t.toString()).slice(-e) } var ct = function() {
                    function t(t, e) { if (e || (e = 1), A(t) && C(t) || (t = 100), t < 0) throw new TypeError("invalid base");
                        this._i = t, this.Cn = e, this.Sn() } return t.prototype.format = function(t) { var e = t < 0 ? "\u2212" : ""; return t = Math.abs(t), e + this.Tn(t) }, t.prototype.Sn = function() { if (this.Dn = 0, this._i > 0 && this.Cn > 0)
                            for (var t = this._i; t > 1;) t /= 10, this.Dn++ }, t.prototype.Tn = function(t) { var e = this._i / this.Cn,
                            n = Math.floor(t),
                            r = "",
                            i = void 0 !== this.Dn ? this.Dn : NaN; if (e > 1) { var o = +(Math.round(t * e) - n * e).toFixed(this.Dn);
                            o >= e && (o -= e, n += 1), r = "." + ut(+o.toFixed(this.Dn) * this.Cn, i) } else n = Math.round(n * e) / e, i > 0 && (r = "." + ut(0, i)); return n.toFixed(0) + r }, t }(),
                lt = function(t) {
                    function e(e) { return void 0 === e && (e = 100), t.call(this, e) || this } return M(e, t), e.prototype.format = function(e) { return "".concat(t.prototype.format.call(this, e), "%") }, e }(ct),
                ht = function() {
                    function t(t) { this.An = t } return t.prototype.format = function(t) { var e = ""; return t < 0 && (e = "-", t = -t), t < 995 ? e + this.Bn(t) : t < 999995 ? e + this.Bn(t / 1e3) + "K" : t < 999999995 ? (t = 1e3 * Math.round(t / 1e3), e + this.Bn(t / 1e6) + "M") : (t = 1e6 * Math.round(t / 1e6), e + this.Bn(t / 1e9) + "B") }, t.prototype.Bn = function(t) { var e = Math.pow(10, this.An); return ((t = Math.round(t * e) / e) >= 1e-15 && t < 1 ? t.toFixed(this.An).replace(/\.?0+$/, "") : String(t)).replace(/(\.[1-9]*)0+$/, (function(t, e) { return e })) }, t }();

            function ft(t, e, n, r) { if (0 !== e.length) { var i = e[r.from].tt,
                        o = e[r.from].it;
                    t.moveTo(i, o); for (var a = r.from + 1; a < r.to; ++a) { var s = e[a]; if (1 === n) { var u = e[a - 1].it,
                                c = s.tt;
                            t.lineTo(c, u) }
                        t.lineTo(s.tt, s.it) } } } var pt = function(t) {
                    function e() { var e = null !== t && t.apply(this, arguments) || this; return e.X = null, e } return M(e, t), e.prototype.Z = function(t) { this.X = t }, e.prototype.Y = function(t) { if (null !== this.X && 0 !== this.X.G.length && null !== this.X.J) { if (t.lineCap = "butt", t.lineJoin = "round", t.lineWidth = this.X.Vt, u(t, this.X.Pt), t.lineWidth = 1, t.beginPath(), 1 === this.X.G.length) { var e = this.X.G[0],
                                    n = this.X.Ln / 2;
                                t.moveTo(e.tt - n, this.X.En), t.lineTo(e.tt - n, e.it), t.lineTo(e.tt + n, e.it), t.lineTo(e.tt + n, this.X.En) } else t.moveTo(this.X.G[this.X.J.from].tt, this.X.En), t.lineTo(this.X.G[this.X.J.from].tt, this.X.G[this.X.J.from].it), ft(t, this.X.G, this.X.Fn, this.X.J), this.X.J.to > this.X.J.from && (t.lineTo(this.X.G[this.X.J.to - 1].tt, this.X.En), t.lineTo(this.X.G[this.X.J.from].tt, this.X.En));
                            t.closePath(), t.fillStyle = this.On(t), t.fill() } }, e }(F),
                dt = function(t) {
                    function e() { return null !== t && t.apply(this, arguments) || this } return M(e, t), e.prototype.On = function(t) { var e = this.X,
                            n = t.createLinearGradient(0, 0, 0, e.Vn); return n.addColorStop(0, e.Pn), n.addColorStop(1, e.Wn), n }, e }(pt),
                yt = function(t) {
                    function e() { var e = null !== t && t.apply(this, arguments) || this; return e.X = null, e } return M(e, t), e.prototype.Z = function(t) { this.X = t }, e.prototype.Y = function(t) { if (null !== this.X && 0 !== this.X.G.length && null !== this.X.J)
                            if (t.lineCap = "butt", t.lineWidth = this.X.Vt, u(t, this.X.Pt), t.strokeStyle = this.zn(t), t.lineJoin = "round", 1 === this.X.G.length) { t.beginPath(); var e = this.X.G[0];
                                t.moveTo(e.tt - this.X.Ln / 2, e.it), t.lineTo(e.tt + this.X.Ln / 2, e.it), void 0 !== e.A && (t.strokeStyle = e.A), t.stroke() } else this.Rn(t, this.X) }, e.prototype.Rn = function(t, e) { t.beginPath(), ft(t, e.G, e.Fn, e.J), t.stroke() }, e }(F),
                vt = function(t) {
                    function e() { return null !== t && t.apply(this, arguments) || this } return M(e, t), e.prototype.Rn = function(t, e) { var n, r, i = e.G,
                            o = e.J,
                            a = e.Fn,
                            s = e.ht; if (0 !== i.length && null !== o) { t.beginPath(); var u = i[o.from];
                            t.moveTo(u.tt, u.it); var c = null !== (n = u.A) && void 0 !== n ? n : s;
                            t.strokeStyle = c; for (var l = function(e) { t.stroke(), t.beginPath(), t.strokeStyle = e, c = e }, h = o.from + 1; h < o.to; ++h) { var f = i[h],
                                    p = i[h - 1],
                                    d = null !== (r = f.A) && void 0 !== r ? r : s;
                                1 === a && (t.lineTo(f.tt, p.it), d !== c && (l(d), t.moveTo(f.tt, p.it))), t.lineTo(f.tt, f.it), 1 !== a && d !== c && (l(d), t.moveTo(f.tt, f.it)) }
                            t.stroke() } }, e.prototype.zn = function() { return this.X.ht }, e }(yt);

            function mt(t, e, n, r, i) { void 0 === r && (r = 0), void 0 === i && (i = t.length); for (var o = i - r; 0 < o;) { var a = o >> 1,
                        s = r + a;
                    n(t[s], e) ? (r = s + 1, o -= a + 1) : o = a } return r }

            function gt(t, e, n, r, i) { void 0 === r && (r = 0), void 0 === i && (i = t.length); for (var o = i - r; 0 < o;) { var a = o >> 1,
                        s = r + a;
                    n(e, t[s]) ? o = a : (r = s + 1, o -= a + 1) } return r }

            function bt(t, e) { return t.rt < e }

            function wt(t, e) { return t < e.rt }

            function xt(t, e, n) { var r = e.In(),
                    i = e.jn(),
                    o = mt(t, r, bt),
                    a = gt(t, i, wt); if (!n) return { from: o, to: a }; var s = o,
                    u = a; return o > 0 && o < t.length && t[o].rt >= r && (s = o - 1), a > 0 && a < t.length && t[a - 1].rt <= i && (u = a + 1), { from: s, to: u } } var Ot = function() {
                    function t(t, e, n) { this.qn = !0, this.Un = !0, this.Hn = !0, this.Yn = [], this.$n = null, this.Kn = t, this.Xn = e, this.Zn = n } return t.prototype.vt = function(t) { this.qn = !0, "data" === t && (this.Un = !0), "options" === t && (this.Hn = !0) }, t.prototype.Jn = function() { this.Un && (this.Gn(), this.Un = !1), this.qn && (this.Qn(), this.qn = !1), this.Hn && (this.ts(), this.Hn = !1) }, t.prototype.ns = function() { this.$n = null }, t.prototype.Qn = function() { var t = this.Kn.Ct(),
                            e = this.Xn.bt(); if (this.ns(), !e.wi() && !t.wi()) { var n = e.ss(); if (null !== n && 0 !== this.Kn.an().hs()) { var r = this.Kn.kt();
                                null !== r && (this.$n = xt(this.Yn, n, this.Zn), this.rs(t, e, r.St)) } } }, t }(),
                _t = function(t) {
                    function e(e, n) { return t.call(this, e, n, !0) || this } return M(e, t), e.prototype.rs = function(t, e, n) { e.es(this.Yn, R(this.$n)), t.us(this.Yn, n, R(this.$n)) }, e.prototype.os = function(t, e) { return { rt: t, et: e, tt: NaN, it: NaN } }, e.prototype.ts = function() {}, e.prototype.Gn = function() { var t = this,
                            e = this.Kn.ls();
                        this.Yn = this.Kn.an().fs().map((function(n) { var r = n.St[3]; return t.cs(n.vs, r, e) })) }, e }(Ot),
                Mt = function(t) {
                    function e(e, n) { var r = t.call(this, e, n) || this; return r.zt = new z, r._s = new dt, r.ds = new vt, r.zt.U([r._s, r.ds]), r } return M(e, t), e.prototype.dt = function(t, e) { if (!this.Kn.yt()) return null; var n = this.Kn.W(); return this.Jn(), this._s.Z({ Fn: n.lineType, G: this.Yn, Pt: n.lineStyle, Vt: n.lineWidth, Pn: n.topColor, Wn: n.bottomColor, En: t, Vn: t, J: this.$n, Ln: this.Xn.bt().ws() }), this.ds.Z({ Fn: n.lineType, G: this.Yn, ht: n.lineColor, Pt: n.lineStyle, Vt: n.lineWidth, J: this.$n, Ln: this.Xn.bt().ws() }), this.zt }, e.prototype.cs = function(t, e) { return this.os(t, e) }, e }(_t),
                jt = function() {
                    function t() { this.Bt = null, this.Ms = 0, this.bs = 0 } return t.prototype.Z = function(t) { this.Bt = t }, t.prototype.H = function(t, e, n, r) { if (null !== this.Bt && 0 !== this.Bt.an.length && null !== this.Bt.J) { this.Ms = this.ps(e), this.Ms >= 2 && Math.max(1, Math.floor(e)) % 2 != this.Ms % 2 && this.Ms--, this.bs = this.Bt.gs ? Math.min(this.Ms, Math.floor(e)) : this.Ms; for (var i = null, o = this.bs <= this.Ms && this.Bt.ws >= Math.floor(1.5 * e), a = this.Bt.J.from; a < this.Bt.J.to; ++a) { var s = this.Bt.an[a];
                                i !== s.A && (t.fillStyle = s.A, i = s.A); var u = Math.floor(.5 * this.bs),
                                    c = Math.round(s.tt * e),
                                    l = c - u,
                                    h = this.bs,
                                    f = l + h - 1,
                                    p = Math.min(s.ys, s.ks),
                                    d = Math.max(s.ys, s.ks),
                                    y = Math.round(p * e) - u,
                                    v = Math.round(d * e) + u,
                                    m = Math.max(v - y, this.bs);
                                t.fillRect(l, y, h, m); var g = Math.ceil(1.5 * this.Ms); if (o) { if (this.Bt.Ns) { var b = c - g,
                                            w = Math.max(y, Math.round(s.xs * e) - u),
                                            x = w + h - 1;
                                        x > y + m - 1 && (w = (x = y + m - 1) - h + 1), t.fillRect(b, w, l - b, x - w + 1) } var O = c + g,
                                        _ = Math.max(y, Math.round(s.Cs * e) - u),
                                        M = _ + h - 1;
                                    M > y + m - 1 && (_ = (M = y + m - 1) - h + 1), t.fillRect(f + 1, _, O - f, M - _ + 1) } } } }, t.prototype.ps = function(t) { var e = Math.floor(t); return Math.max(e, Math.floor(function(t, e) { return Math.floor(.3 * t * e) }(f(this.Bt).ws, t))) }, t }(),
                St = function(t) {
                    function e(e, n) { return t.call(this, e, n, !1) || this } return M(e, t), e.prototype.rs = function(t, e, n) { e.es(this.Yn, R(this.$n)), t.Ss(this.Yn, n, R(this.$n)) }, e.prototype.Ts = function(t, e, n) { return { rt: t, open: e.St[0], high: e.St[1], low: e.St[2], close: e.St[3], tt: NaN, xs: NaN, ys: NaN, ks: NaN, Cs: NaN } }, e.prototype.Gn = function() { var t = this,
                            e = this.Kn.ls();
                        this.Yn = this.Kn.an().fs().map((function(n) { return t.cs(n.vs, n, e) })) }, e }(Ot),
                Et = function(t) {
                    function e() { var e = null !== t && t.apply(this, arguments) || this; return e.zt = new jt, e } return M(e, t), e.prototype.dt = function(t, e) { if (!this.Kn.yt()) return null; var n = this.Kn.W();
                        this.Jn(); var r = { an: this.Yn, ws: this.Xn.bt().ws(), Ns: n.openVisible, gs: n.thinBars, J: this.$n }; return this.zt.Z(r), this.zt }, e.prototype.ts = function() { var t = this;
                        this.Yn.forEach((function(e) { e.A = t.Kn.ls().As(e.rt).Ds })) }, e.prototype.cs = function(t, e, n) { return j(j({}, this.Ts(t, e, n)), { A: n.As(t).Ds }) }, e }(St);

            function kt(t, e, n) { return Math.min(Math.max(t, e), n) }

            function At(t, e, n) { return e - t <= n }

            function Ct(t) { return t <= 0 ? NaN : Math.log(t) / Math.log(10) }

            function Pt(t) { var e = Math.ceil(t); return e % 2 != 0 ? e - 1 : e }

            function Tt(t) { var e = Math.ceil(t); return e % 2 == 0 ? e - 1 : e } var Dt = function(t) {
                    function e() { return null !== t && t.apply(this, arguments) || this } return M(e, t), e.prototype.On = function(t) { var e = this.X,
                            n = t.createLinearGradient(0, 0, 0, e.Vn),
                            r = kt(e.En / e.Vn, 0, 1); return n.addColorStop(0, e.Bs), n.addColorStop(r, e.Ls), n.addColorStop(r, e.Es), n.addColorStop(1, e.Fs), n }, e }(pt),
                Nt = function(t) {
                    function e() { return null !== t && t.apply(this, arguments) || this } return M(e, t), e.prototype.zn = function(t) { var e = this.X,
                            n = t.createLinearGradient(0, 0, 0, e.Vn),
                            r = kt(e.En / e.Vn, 0, 1); return n.addColorStop(0, e.Pn), n.addColorStop(r, e.Pn), n.addColorStop(r, e.Wn), n.addColorStop(1, e.Wn), n }, e }(yt),
                Rt = function(t) {
                    function e(e, n) { var r = t.call(this, e, n) || this; return r.Os = new Dt, r.Vs = new Nt, r.ut = new z, r.ut.U([r.Os, r.Vs]), r } return M(e, t), e.prototype.dt = function(t, e) { if (!this.Kn.yt()) return null; var n = this.Kn.kt(); if (null === n) return null; var r = this.Kn.W();
                        this.Jn(); var i = this.Kn.Ct().xt(r.baseValue.price, n.St),
                            o = this.Xn.bt().ws(); return this.Os.Z({ G: this.Yn, Bs: r.topFillColor1, Ls: r.topFillColor2, Es: r.bottomFillColor1, Fs: r.bottomFillColor2, Vt: r.lineWidth, Pt: r.lineStyle, Fn: 0, En: i, Vn: t, J: this.$n, Ln: o }), this.Vs.Z({ G: this.Yn, Pn: r.topLineColor, Wn: r.bottomLineColor, Vt: r.lineWidth, Pt: r.lineStyle, Fn: 0, En: i, Vn: t, J: this.$n, Ln: o }), this.ut }, e.prototype.cs = function(t, e) { return this.os(t, e) }, e }(_t),
                It = function() {
                    function t() { this.Bt = null, this.Ms = 0 } return t.prototype.Z = function(t) { this.Bt = t }, t.prototype.H = function(t, e, n, r) { if (null !== this.Bt && 0 !== this.Bt.an.length && null !== this.Bt.J) { this.Ms = function(t, e) { if (t >= 2.5 && t <= 4) return Math.floor(3 * e); var n = 1 - .2 * Math.atan(Math.max(4, t) - 4) / (.5 * Math.PI),
                                    r = Math.floor(t * n * e),
                                    i = Math.floor(t * e),
                                    o = Math.min(r, i); return Math.max(Math.floor(e), o) }(this.Bt.ws, e), this.Ms >= 2 && Math.floor(e) % 2 != this.Ms % 2 && this.Ms--; var i = this.Bt.an;
                            this.Bt.Ps && this.Ws(t, i, this.Bt.J, e), this.Bt.zs && this.Rs(t, i, this.Bt.J, this.Bt.ws, e); var o = this.Is(e);
                            (!this.Bt.zs || this.Ms > 2 * o) && this.js(t, i, this.Bt.J, e) } }, t.prototype.Ws = function(t, e, n, r) { if (null !== this.Bt) { var i = "",
                                o = Math.min(Math.floor(r), Math.floor(this.Bt.ws * r));
                            o = Math.max(Math.floor(r), Math.min(o, this.Ms)); for (var a = Math.floor(.5 * o), s = null, u = n.from; u < n.to; u++) { var c = e[u];
                                c.qs !== i && (t.fillStyle = c.qs, i = c.qs); var l = Math.round(Math.min(c.xs, c.Cs) * r),
                                    h = Math.round(Math.max(c.xs, c.Cs) * r),
                                    f = Math.round(c.ys * r),
                                    p = Math.round(c.ks * r),
                                    d = Math.round(r * c.tt) - a,
                                    y = d + o - 1;
                                null !== s && (d = Math.max(s + 1, d), d = Math.min(d, y)); var v = y - d + 1;
                                t.fillRect(d, f, v, l - f), t.fillRect(d, h + 1, v, p - h), s = y } } }, t.prototype.Is = function(t) { var e = Math.floor(1 * t);
                        this.Ms <= 2 * e && (e = Math.floor(.5 * (this.Ms - 1))); var n = Math.max(Math.floor(t), e); return this.Ms <= 2 * n ? Math.max(Math.floor(t), Math.floor(1 * t)) : n }, t.prototype.Rs = function(t, e, n, r, i) { if (null !== this.Bt)
                            for (var o = "", a = this.Is(i), s = null, u = n.from; u < n.to; u++) { var c = e[u];
                                c.Tt !== o && (t.fillStyle = c.Tt, o = c.Tt); var l = Math.round(c.tt * i) - Math.floor(.5 * this.Ms),
                                    h = l + this.Ms - 1,
                                    f = Math.round(Math.min(c.xs, c.Cs) * i),
                                    p = Math.round(Math.max(c.xs, c.Cs) * i); if (null !== s && (l = Math.max(s + 1, l), l = Math.min(l, h)), this.Bt.ws * i > 2 * a) Y(t, l, f, h - l + 1, p - f + 1, a);
                                else { var d = h - l + 1;
                                    t.fillRect(l, f, d, p - f + 1) }
                                s = h } }, t.prototype.js = function(t, e, n, r) { if (null !== this.Bt)
                            for (var i = "", o = this.Is(r), a = n.from; a < n.to; a++) { var s = e[a],
                                    u = Math.round(Math.min(s.xs, s.Cs) * r),
                                    c = Math.round(Math.max(s.xs, s.Cs) * r),
                                    l = Math.round(s.tt * r) - Math.floor(.5 * this.Ms),
                                    h = l + this.Ms - 1; if (s.A !== i) { var f = s.A;
                                    t.fillStyle = f, i = f }
                                this.Bt.zs && (l += o, u += o, h -= o, c -= o), u > c || t.fillRect(l, u, h - l + 1, c - u + 1) } }, t }(),
                Bt = function(t) {
                    function e() { var e = null !== t && t.apply(this, arguments) || this; return e.zt = new It, e } return M(e, t), e.prototype.dt = function(t, e) { if (!this.Kn.yt()) return null; var n = this.Kn.W();
                        this.Jn(); var r = { an: this.Yn, ws: this.Xn.bt().ws(), Ps: n.wickVisible, zs: n.borderVisible, J: this.$n }; return this.zt.Z(r), this.zt }, e.prototype.ts = function() { var t = this;
                        this.Yn.forEach((function(e) { var n = t.Kn.ls().As(e.rt);
                            e.A = n.Ds, e.qs = n.Us, e.Tt = n.Hs })) }, e.prototype.cs = function(t, e, n) { var r = n.As(t); return j(j({}, this.Ts(t, e, n)), { A: r.Ds, qs: r.Us, Tt: r.Hs }) }, e }(St),
                Lt = function() {
                    function t() { this.Bt = null, this.Ys = [] } return t.prototype.Z = function(t) { this.Bt = t, this.Ys = [] }, t.prototype.H = function(t, e, n, r) { if (null !== this.Bt && 0 !== this.Bt.G.length && null !== this.Bt.J) { this.Ys.length || this.$s(e); for (var i = Math.max(1, Math.floor(e)), o = Math.round(this.Bt.Ks * e) - Math.floor(i / 2), a = o + i, s = this.Bt.J.from; s < this.Bt.J.to; s++) { var u = this.Bt.G[s],
                                    c = this.Ys[s - this.Bt.J.from],
                                    l = Math.round(u.it * e);
                                t.fillStyle = u.A; var h = void 0,
                                    f = void 0;
                                l <= o ? (h = l, f = a) : (h = o, f = l - Math.floor(i / 2) + i), t.fillRect(c.In, h, c.jn - c.In + 1, f - h) } } }, t.prototype.$s = function(t) { if (null !== this.Bt && 0 !== this.Bt.G.length && null !== this.Bt.J) { var e = Math.ceil(this.Bt.ws * t) <= 1 ? 0 : Math.max(1, Math.floor(t)),
                                n = Math.round(this.Bt.ws * t) - e;
                            this.Ys = new Array(this.Bt.J.to - this.Bt.J.from); for (var r = this.Bt.J.from; r < this.Bt.J.to; r++) { var i, o = this.Bt.G[r],
                                    a = Math.round(o.tt * t),
                                    s = void 0,
                                    u = void 0;
                                n % 2 ? (s = a - (i = (n - 1) / 2), u = a + i) : (s = a - (i = n / 2), u = a + i - 1), this.Ys[r - this.Bt.J.from] = { In: s, jn: u, Xs: a, Zs: o.tt * t, rt: o.rt } } for (r = this.Bt.J.from + 1; r < this.Bt.J.to; r++) { var c = this.Ys[r - this.Bt.J.from],
                                    l = this.Ys[r - this.Bt.J.from - 1];
                                c.rt === l.rt + 1 && c.In - l.jn !== e + 1 && (l.Xs > l.Zs ? l.jn = c.In - e - 1 : c.In = l.jn + e + 1) } var h = Math.ceil(this.Bt.ws * t); for (r = this.Bt.J.from; r < this.Bt.J.to; r++) {
                                (c = this.Ys[r - this.Bt.J.from]).jn < c.In && (c.jn = c.In); var f = c.jn - c.In + 1;
                                h = Math.min(f, h) } if (e > 0 && h < 4)
                                for (r = this.Bt.J.from; r < this.Bt.J.to; r++)(f = (c = this.Ys[r - this.Bt.J.from]).jn - c.In + 1) > h && (c.Xs > c.Zs ? c.jn -= 1 : c.In += 1) } else this.Ys = [] }, t }();

            function zt(t) { return { G: [], ws: t, Ks: NaN, J: null } }

            function Ft(t, e, n) { return { rt: t, et: e, tt: NaN, it: NaN, A: n } } var Wt = function(t) {
                    function e(e, n) { var r = t.call(this, e, n, !1) || this; return r.ut = new z, r.Js = zt(0), r.zt = new Lt, r } return M(e, t), e.prototype.dt = function(t, e) { return this.Kn.yt() ? (this.Jn(), this.ut) : null }, e.prototype.Gn = function() { var t = this.Xn.bt().ws();
                        this.Js = zt(t); for (var e = 0, n = 0, r = this.Kn.W().color, i = 0, o = this.Kn.an().fs(); i < o.length; i++) { var a = o[i],
                                s = a.St[3],
                                u = void 0 !== a.A ? a.A : r,
                                c = Ft(a.vs, s, u);++e < this.Js.G.length ? this.Js.G[e] = c : this.Js.G.push(c), this.Yn[n++] = { rt: a.vs, tt: 0 } }
                        this.zt.Z(this.Js), this.ut.U([this.zt]) }, e.prototype.ts = function() {}, e.prototype.ns = function() { t.prototype.ns.call(this), this.Js.J = null }, e.prototype.rs = function(t, e, n) { if (null !== this.$n) { var r = e.ws(),
                                i = f(e.ss()),
                                o = t.xt(this.Kn.W().base, n);
                            e.es(this.Js.G), t.us(this.Js.G, n), this.Js.Ks = o, this.Js.J = xt(this.Js.G, i, !1), this.Js.ws = r, this.zt.Z(this.Js) } }, e }(Ot),
                Vt = function(t) {
                    function e(e, n) { var r = t.call(this, e, n) || this; return r.ds = new vt, r } return M(e, t), e.prototype.dt = function(t, e) { if (!this.Kn.yt()) return null; var n = this.Kn.W();
                        this.Jn(); var r = { G: this.Yn, ht: n.color, Pt: n.lineStyle, Fn: n.lineType, Vt: n.lineWidth, J: this.$n, Ln: this.Xn.bt().ws() }; return this.ds.Z(r), this.ds }, e.prototype.ts = function() { var t = this;
                        this.Yn.forEach((function(e) { e.A = t.Kn.ls().As(e.rt).Ds })) }, e.prototype.cs = function(t, e, n) { var r = this.os(t, e); return r.A = n.As(t).Ds, r }, e }(_t),
                Ut = /[2-9]/g,
                Gt = function() {
                    function t(t) { void 0 === t && (t = 50), this.Gs = new Map, this.Qs = 0, this.th = Array.from(new Array(t)) } return t.prototype.ih = function() { this.Gs.clear(), this.th.fill(void 0) }, t.prototype.Qt = function(t, e, n) { var r = n || Ut,
                            i = String(e).replace(r, "0"),
                            o = this.Gs.get(i); if (void 0 === o) { if (0 === (o = t.measureText(i).width) && 0 !== e.length) return 0; var a = this.th[this.Qs];
                            void 0 !== a && this.Gs.delete(a), this.th[this.Qs] = i, this.Qs = (this.Qs + 1) % this.th.length, this.Gs.set(i, o) } return o }, t }(),
                Xt = function() {
                    function t(t) { this.nh = null, this.k = null, this.sh = "right", this.hh = 0, this.rh = t } return t.prototype.eh = function(t, e, n, r) { this.nh = t, this.k = e, this.hh = n, this.sh = r }, t.prototype.H = function(t, e) { null !== this.k && null !== this.nh && this.nh.H(t, this.k, this.rh, this.hh, this.sh, e) }, t }(),
                Ht = function() {
                    function t(t, e, n) { this.uh = t, this.rh = new Gt(50), this.ah = e, this.P = n, this.R = -1, this.zt = new Xt(this.rh) } return t.prototype.dt = function(t, e) { var n = this.P.oh(this.ah); if (null === n) return null; var r = n.lh(this.ah) ? n.fh() : this.ah.Ct(); if (null === r) return null; var i = n._h(r); if ("overlay" === i) return null; var o = this.P.dh(); return o.S !== this.R && (this.R = o.S, this.rh.ih()), this.zt.eh(this.uh.ci(), o, e, i), this.zt }, t }(),
                Yt = function() {
                    function t() { this.Bt = null } return t.prototype.Z = function(t) { this.Bt = t }, t.prototype.H = function(t, e, n, r) { if (null !== this.Bt && !1 !== this.Bt.yt) { var i = Math.round(this.Bt.it * e); if (!(i < 0 || i > Math.ceil(this.Bt.Yt * e))) { var o = Math.ceil(this.Bt.Ht * e);
                                t.lineCap = "butt", t.strokeStyle = this.Bt.A, t.lineWidth = Math.floor(this.Bt.Vt * e), u(t, this.Bt.Pt), c(t, i, 0, o) } } }, t }(),
                qt = function() {
                    function t(t) { this.wh = { Ht: 0, Yt: 0, it: 0, A: "rgba(0, 0, 0, 0)", Vt: 1, Pt: 0, yt: !1 }, this.Mh = new Yt, this.ft = !0, this.Kn = t, this.Xn = t.jt(), this.Mh.Z(this.wh) } return t.prototype.vt = function() { this.ft = !0 }, t.prototype.dt = function(t, e) { return this.Kn.yt() ? (this.ft && (this.bh(t, e), this.ft = !1), this.Mh) : null }, t }(),
                Jt = function(t) {
                    function e(e) { return t.call(this, e) || this } return M(e, t), e.prototype.bh = function(t, e) { this.wh.yt = !1; var n = this.Kn.Ct(),
                            r = n.mh().mh; if (2 === r || 3 === r) { var i = this.Kn.W(); if (i.baseLineVisible && this.Kn.yt()) { var o = this.Kn.kt();
                                null !== o && (this.wh.yt = !0, this.wh.it = n.xt(o.St, o.St), this.wh.Ht = e, this.wh.Yt = t, this.wh.A = i.baseLineColor, this.wh.Vt = i.baseLineWidth, this.wh.Pt = i.baseLineStyle) } } }, e }(qt),
                $t = function() {
                    function t() { this.Bt = null } return t.prototype.Z = function(t) { this.Bt = t }, t.prototype.ph = function() { return this.Bt }, t.prototype.H = function(t, e, n, r) { var i = this.Bt; if (null !== i) { t.save(); var o = Math.max(1, Math.floor(e)),
                                a = o % 2 / 2,
                                s = Math.round(i.Zs.x * e) + a,
                                u = i.Zs.y * e;
                            t.fillStyle = i.gh, t.beginPath(); var c = Math.max(2, 1.5 * i.yh) * e;
                            t.arc(s, u, c, 0, 2 * Math.PI, !1), t.fill(), t.fillStyle = i.kh, t.beginPath(), t.arc(s, u, i.st * e, 0, 2 * Math.PI, !1), t.fill(), t.lineWidth = o, t.strokeStyle = i.Nh, t.beginPath(), t.arc(s, u, i.st * e + o / 2, 0, 2 * Math.PI, !1), t.stroke(), t.restore() } }, t }(),
                Kt = [{ xh: 0, Ch: .25, Sh: 4, Th: 10, Dh: .25, Ah: 0, Bh: .4, Lh: .8 }, { xh: .25, Ch: .525, Sh: 10, Th: 14, Dh: 0, Ah: 0, Bh: .8, Lh: 0 }, { xh: .525, Ch: 1, Sh: 14, Th: 14, Dh: 0, Ah: 0, Bh: 0, Lh: 0 }];

            function Zt(t, e, n, r) { return function(t, e) { if ("transparent" === t) return t; var n = x(t),
                        r = n[3]; return "rgba(".concat(n[0], ", ").concat(n[1], ", ").concat(n[2], ", ").concat(e * r, ")") }(t, n + (r - n) * e) }

            function Qt(t, e) { for (var n, r = t % 2600 / 2600, i = 0, o = Kt; i < o.length; i++) { var a = o[i]; if (r >= a.xh && r <= a.Ch) { n = a; break } }
                l(void 0 !== n, "Last price animation internal logic error"); var s, u, c, h = (r - n.xh) / (n.Ch - n.xh); return { kh: Zt(e, h, n.Dh, n.Ah), Nh: Zt(e, h, n.Bh, n.Lh), st: (s = h, u = n.Sh, c = n.Th, u + (c - u) * s) } } var te = function() {
                function t(t) { this.zt = new $t, this.ft = !0, this.Eh = !0, this.Fh = performance.now(), this.Oh = this.Fh - 1, this.Vh = t } return t.prototype.Ph = function() { this.Oh = this.Fh - 1, this.vt() }, t.prototype.Wh = function() { if (this.vt(), 2 === this.Vh.W().lastPriceAnimation) { var t = performance.now(),
                            e = this.Oh - t; if (e > 0) return void(e < 650 && (this.Oh += 2600));
                        this.Fh = t, this.Oh = t + 2600 } }, t.prototype.vt = function() { this.ft = !0 }, t.prototype.zh = function() { this.Eh = !0 }, t.prototype.yt = function() { return 0 !== this.Vh.W().lastPriceAnimation }, t.prototype.Rh = function() { switch (this.Vh.W().lastPriceAnimation) {
                        case 0:
                            return !1;
                        case 1:
                            return !0;
                        case 2:
                            return performance.now() <= this.Oh } }, t.prototype.dt = function(t, e) { return this.ft ? (this.wt(t, e), this.ft = !1, this.Eh = !1) : this.Eh && (this.Ih(), this.Eh = !1), this.zt }, t.prototype.wt = function(t, e) { this.zt.Z(null); var n = this.Vh.jt().bt(),
                        r = n.ss(),
                        i = this.Vh.kt(); if (null !== r && null !== i) { var o = this.Vh.jh(!0); if (!o.qh && r.Uh(o.vs)) { var a = { x: n.At(o.vs), y: this.Vh.Ct().xt(o.et, i.St) },
                                s = o.A,
                                u = this.Vh.W().lineWidth,
                                c = Qt(this.Hh(), s);
                            this.zt.Z({ gh: s, yh: u, kh: c.kh, Nh: c.Nh, st: c.st, Zs: a }) } } }, t.prototype.Ih = function() { var t = this.zt.ph(); if (null !== t) { var e = Qt(this.Hh(), t.gh);
                        t.kh = e.kh, t.Nh = e.Nh, t.st = e.st } }, t.prototype.Hh = function() { return this.Rh() ? performance.now() - this.Fh : 2599 }, t }();

            function ee(t, e) { return Tt(Math.min(Math.max(t, 12), 30) * e) }

            function ne(t, e) { switch (t) {
                    case "arrowDown":
                    case "arrowUp":
                        return ee(e, 1);
                    case "circle":
                        return ee(e, .8);
                    case "square":
                        return ee(e, .7) } }

            function re(t) { return Pt(ee(t, 1)) }

            function ie(t) { return Math.max(ee(t, .1), 3) }

            function oe(t, e, n, r, i) { var o = ne("square", n),
                    a = (o - 1) / 2,
                    s = t - a,
                    u = e - a; return r >= s && r <= s + o && i >= u && i <= u + o }

            function ae(t, e, n, r, i) { var o = (ne("arrowUp", i) - 1) / 2,
                    a = (Tt(i / 2) - 1) / 2;
                e.beginPath(), t ? (e.moveTo(n - o, r), e.lineTo(n, r - o), e.lineTo(n + o, r), e.lineTo(n + a, r), e.lineTo(n + a, r + o), e.lineTo(n - a, r + o), e.lineTo(n - a, r)) : (e.moveTo(n - o, r), e.lineTo(n, r + o), e.lineTo(n + o, r), e.lineTo(n + a, r), e.lineTo(n + a, r - o), e.lineTo(n - a, r - o), e.lineTo(n - a, r)), e.fill() } var se = function(t) {
                function e() { var e = null !== t && t.apply(this, arguments) || this; return e.Bt = null, e.rh = new Gt, e.R = -1, e.I = "", e.Yh = "", e } return M(e, t), e.prototype.Z = function(t) { this.Bt = t }, e.prototype.eh = function(t, e) { this.R === t && this.I === e || (this.R = t, this.I = e, this.Yh = B(t, e), this.rh.ih()) }, e.prototype.$h = function(t, e) { if (null === this.Bt || null === this.Bt.J) return null; for (var n = this.Bt.J.from; n < this.Bt.J.to; n++) { var r = this.Bt.G[n]; if (ce(r, t, e)) return { Kh: r.Xh, Zh: r.Zh } } return null }, e.prototype.Y = function(t, e, n) { if (null !== this.Bt && null !== this.Bt.J) { t.textBaseline = "middle", t.font = this.Yh; for (var r = this.Bt.J.from; r < this.Bt.J.to; r++) { var i = this.Bt.G[r];
                            void 0 !== i.Gt && (i.Gt.Ht = this.rh.Qt(t, i.Gt.Jh), i.Gt.Yt = this.R), ue(i, t) } } }, e }(F);

            function ue(t, e) { e.fillStyle = t.A, void 0 !== t.Gt && function(t, e, n, r) { t.fillText(e, n, r) }(e, t.Gt.Jh, t.tt - t.Gt.Ht / 2, t.Gt.it),
                    function(t, e) { if (0 !== t.hs) { switch (t.Gh) {
                                case "arrowDown":
                                    return void ae(!1, e, t.tt, t.it, t.hs);
                                case "arrowUp":
                                    return void ae(!0, e, t.tt, t.it, t.hs);
                                case "circle":
                                    return void
                                    function(t, e, n, r) { var i = (ne("circle", r) - 1) / 2;
                                        t.beginPath(), t.arc(e, n, i, 0, 2 * Math.PI, !1), t.fill() }(e, t.tt, t.it, t.hs);
                                case "square":
                                    return void
                                    function(t, e, n, r) { var i = ne("square", r),
                                            o = (i - 1) / 2,
                                            a = e - o,
                                            s = n - o;
                                        t.fillRect(a, s, i, i) }(e, t.tt, t.it, t.hs) }
                            t.Gh } }(t, e) }

            function ce(t, e, n) { return !(void 0 === t.Gt || ! function(t, e, n, r, i, o) { var a = r / 2; return i >= t && i <= t + n && o >= e - a && o <= e + a }(t.tt, t.Gt.it, t.Gt.Ht, t.Gt.Yt, e, n)) || function(t, e, n) { if (0 === t.hs) return !1; switch (t.Gh) {
                        case "arrowDown":
                        case "arrowUp":
                            return function(t, e, n, r, i, o) { return oe(e, n, r, i, o) }(0, t.tt, t.it, t.hs, e, n);
                        case "circle":
                            return function(t, e, n, r, i) { var o = 2 + ne("circle", n) / 2,
                                    a = t - r,
                                    s = e - i; return Math.sqrt(a * a + s * s) <= o }(t.tt, t.it, t.hs, e, n);
                        case "square":
                            return oe(t.tt, t.it, t.hs, e, n) } }(t, e, n) }

            function le(t, e, n, r, i, o, a, s, u) { var c = A(n) ? n : n.close,
                    l = A(n) ? n : n.high,
                    h = A(n) ? n : n.low,
                    f = A(e.size) ? Math.max(e.size, 0) : 1,
                    p = re(s.ws()) * f,
                    d = p / 2; switch (t.hs = p, e.position) {
                    case "inBar":
                        return t.it = a.xt(c, u), void(void 0 !== t.Gt && (t.Gt.it = t.it + d + o + .6 * i));
                    case "aboveBar":
                        return t.it = a.xt(l, u) - d - r.Qh, void 0 !== t.Gt && (t.Gt.it = t.it - d - .6 * i, r.Qh += 1.2 * i), void(r.Qh += p + o);
                    case "belowBar":
                        return t.it = a.xt(h, u) + d + r.tr, void 0 !== t.Gt && (t.Gt.it = t.it + d + o + .6 * i, r.tr += 1.2 * i), void(r.tr += p + o) }
                e.position } var he = function() {
                    function t(t, e) { this.ft = !0, this.ir = !0, this.nr = !0, this.sr = null, this.zt = new se, this.Vh = t, this.pi = e, this.Bt = { G: [], J: null } } return t.prototype.vt = function(t) { this.ft = !0, this.nr = !0, "data" === t && (this.ir = !0) }, t.prototype.dt = function(t, e, n) { if (!this.Vh.yt()) return null;
                        this.ft && this.Jn(); var r = this.pi.W().layout; return this.zt.eh(r.fontSize, r.fontFamily), this.zt.Z(this.Bt), this.zt }, t.prototype.hr = function() { if (this.nr) { if (this.Vh.rr().length > 0) { var t = this.pi.bt().ws(),
                                    e = ie(t),
                                    n = 1.5 * re(t) + 2 * e;
                                this.sr = { above: n, below: n } } else this.sr = null;
                            this.nr = !1 } return this.sr }, t.prototype.Jn = function() { var t = this.Vh.Ct(),
                            e = this.pi.bt(),
                            n = this.Vh.rr();
                        this.ir && (this.Bt.G = n.map((function(t) { return { rt: t.time, tt: 0, it: 0, hs: 0, Gh: t.shape, A: t.color, Xh: t.Xh, Zh: t.id, Gt: void 0 } })), this.ir = !1); var r = this.pi.W().layout;
                        this.Bt.J = null; var i = e.ss(); if (null !== i) { var o = this.Vh.kt(); if (null !== o && 0 !== this.Bt.G.length) { var a = NaN,
                                    s = ie(e.ws()),
                                    u = { Qh: s, tr: s };
                                this.Bt.J = xt(this.Bt.G, i, !0); for (var c = this.Bt.J.from; c < this.Bt.J.to; c++) { var l = n[c];
                                    l.time !== a && (u.Qh = s, u.tr = s, a = l.time); var h = this.Bt.G[c];
                                    h.tt = e.At(l.time), void 0 !== l.text && l.text.length > 0 && (h.Gt = { Jh: l.text, it: 0, Ht: 0, Yt: 0 }); var f = this.Vh.er(l.time);
                                    null !== f && le(h, l, f, u, r.fontSize, s, t, e, o.St) }
                                this.ft = !1 } } }, t }(),
                fe = function(t) {
                    function e(e) { return t.call(this, e) || this } return M(e, t), e.prototype.bh = function(t, e) { var n = this.wh;
                        n.yt = !1; var r = this.Kn.W(); if (r.priceLineVisible && this.Kn.yt()) { var i = this.Kn.jh(0 === r.priceLineSource);
                            i.qh || (n.yt = !0, n.it = i.ti, n.A = this.Kn.ur(i.A), n.Ht = e, n.Yt = t, n.Vt = r.priceLineWidth, n.Pt = r.priceLineStyle) } }, e }(qt),
                pe = function(t) {
                    function e(e) { var n = t.call(this) || this; return n.Rt = e, n } return M(e, t), e.prototype.vi = function(t, e, n) { t.yt = !1, e.yt = !1; var r = this.Rt; if (r.yt()) { var i = r.W(),
                                o = i.lastValueVisible,
                                a = "" !== r.ar(),
                                s = 0 === i.seriesLastValueMode,
                                u = r.jh(!1); if (!u.qh) { o && (t.Gt = this.lr(u, o, s), t.yt = 0 !== t.Gt.length), (a || s) && (e.Gt = this.cr(u, o, a, s), e.yt = e.Gt.length > 0); var c = r.ur(u.A),
                                    l = O(c);
                                n.t = l.t, n.A = l.i, n.ti = u.ti, e.Tt = r.jt().Dt(u.ti / r.Ct().Yt()), t.Tt = c } } }, e.prototype.cr = function(t, e, n, r) { var i = "",
                            o = this.Rt.ar(); return n && 0 !== o.length && (i += "".concat(o, " ")), e && r && (i += this.Rt.Ct().vr() ? t._r : t.dr), i.trim() }, e.prototype.lr = function(t, e, n) { return e ? n ? this.Rt.Ct().vr() ? t.dr : t._r : t.Gt : "" }, e }(Q),
                de = function() {
                    function t(t, e) { this.wr = t, this.Mr = e } return t.prototype.br = function(t) { return null !== t && this.wr === t.wr && this.Mr === t.Mr }, t.prototype.mr = function() { return new t(this.wr, this.Mr) }, t.prototype.pr = function() { return this.wr }, t.prototype.gr = function() { return this.Mr }, t.prototype.yr = function() { return this.Mr - this.wr }, t.prototype.wi = function() { return this.Mr === this.wr || Number.isNaN(this.Mr) || Number.isNaN(this.wr) }, t.prototype.Nn = function(e) { return null === e ? this : new t(Math.min(this.pr(), e.pr()), Math.max(this.gr(), e.gr())) }, t.prototype.kr = function(t) { if (A(t) && 0 !== this.Mr - this.wr) { var e = .5 * (this.Mr + this.wr),
                                n = this.Mr - e,
                                r = this.wr - e;
                            n *= t, r *= t, this.Mr = e + n, this.wr = e + r } }, t.prototype.Nr = function(t) { A(t) && (this.Mr += t, this.wr += t) }, t.prototype.Cr = function() { return { minValue: this.wr, maxValue: this.Mr } }, t.Sr = function(e) { return null === e ? null : new t(e.minValue, e.maxValue) }, t }(),
                ye = function() {
                    function t(t, e) { this.Tr = t, this.Dr = e || null } return t.prototype.Ar = function() { return this.Tr }, t.prototype.Br = function() { return this.Dr }, t.prototype.Cr = function() { return null === this.Tr ? null : { priceRange: this.Tr.Cr(), margins: this.Dr || void 0 } }, t.Sr = function(e) { return null === e ? null : new t(de.Sr(e.priceRange), e.margins) }, t }(),
                ve = function(t) {
                    function e(e, n) { var r = t.call(this, e) || this; return r.Lr = n, r } return M(e, t), e.prototype.bh = function(t, e) { var n = this.wh;
                        n.yt = !1; var r = this.Lr.W(); if (this.Kn.yt() && r.lineVisible) { var i = this.Lr.Er();
                            null !== i && (n.yt = !0, n.it = i, n.A = r.color, n.Ht = e, n.Yt = t, n.Vt = r.lineWidth, n.Pt = r.lineStyle) } }, e }(qt),
                me = function(t) {
                    function e(e, n) { var r = t.call(this) || this; return r.Vh = e, r.Lr = n, r } return M(e, t), e.prototype.vi = function(t, e, n) { t.yt = !1, e.yt = !1; var r = this.Lr.W(),
                            i = r.axisLabelVisible,
                            o = "" !== r.title,
                            a = this.Vh; if (i && a.yt()) { var s = this.Lr.Er(); if (null !== s) { o && (e.Gt = r.title, e.yt = !0), e.Tt = a.jt().Dt(s / a.Ct().Yt()), t.Gt = a.Ct().Fr(r.price), t.yt = !0; var u = O(r.color);
                                n.t = u.t, n.A = u.i, n.ti = s } } }, e }(Q),
                ge = function() {
                    function t(t, e) { this.Vh = t, this.zi = e, this.Or = new ve(t, this), this.uh = new me(t, this), this.Vr = new Ht(this.uh, t, t.jt()) } return t.prototype.Pr = function(t) { k(this.zi, t), this.vt(), this.Vh.jt().Wr() }, t.prototype.W = function() { return this.zi }, t.prototype.tn = function() { return [this.Or, this.Vr] }, t.prototype.zr = function() { return this.uh }, t.prototype.vt = function() { this.Or.vt(), this.uh.vt() }, t.prototype.Er = function() { var t = this.Vh,
                            e = t.Ct(); if (t.jt().bt().wi() || e.wi()) return null; var n = t.kt(); return null === n ? null : e.xt(this.zi.price, n.St) }, t }(),
                be = function(t) {
                    function e(e) { var n = t.call(this) || this; return n.pi = e, n } return M(e, t), e.prototype.jt = function() { return this.pi }, e }(it),
                we = { Ds: "", Hs: "", Us: "" },
                xe = function() {
                    function t(t) { this.Vh = t } return t.prototype.As = function(t, e) { var n = this.Vh.Rr(),
                            r = this.Vh.W(); switch (n) {
                            case "Line":
                                return this.Ir(r, t, e);
                            case "Area":
                                return this.jr(r);
                            case "Baseline":
                                return this.qr(r, t, e);
                            case "Bar":
                                return this.Ur(r, t, e);
                            case "Candlestick":
                                return this.Hr(r, t, e);
                            case "Histogram":
                                return this.Yr(r, t, e) } throw new Error("Unknown chart style") }, t.prototype.Ur = function(t, e, n) { var r = j({}, we),
                            i = t.upColor,
                            o = t.downColor,
                            a = i,
                            s = o,
                            u = f(this.$r(e, n)),
                            c = p(u.St[0]) <= p(u.St[3]); return void 0 !== u.A ? (r.Ds = u.A, r.Hs = u.A) : (r.Ds = c ? i : o, r.Hs = c ? a : s), r }, t.prototype.Hr = function(t, e, n) { var r, i, o, a = j({}, we),
                            s = t.upColor,
                            u = t.downColor,
                            c = t.borderUpColor,
                            l = t.borderDownColor,
                            h = t.wickUpColor,
                            d = t.wickDownColor,
                            y = f(this.$r(e, n)),
                            v = p(y.St[0]) <= p(y.St[3]); return a.Ds = null !== (r = y.A) && void 0 !== r ? r : v ? s : u, a.Hs = null !== (i = y.Tt) && void 0 !== i ? i : v ? c : l, a.Us = null !== (o = y.qs) && void 0 !== o ? o : v ? h : d, a }, t.prototype.jr = function(t) { return j(j({}, we), { Ds: t.lineColor }) }, t.prototype.qr = function(t, e, n) { var r = f(this.$r(e, n)).St[3] >= t.baseValue.price; return j(j({}, we), { Ds: r ? t.topLineColor : t.bottomLineColor }) }, t.prototype.Ir = function(t, e, n) { var r, i = f(this.$r(e, n)); return j(j({}, we), { Ds: null !== (r = i.A) && void 0 !== r ? r : t.color }) }, t.prototype.Yr = function(t, e, n) { var r = j({}, we),
                            i = f(this.$r(e, n)); return r.Ds = void 0 !== i.A ? i.A : t.color, r }, t.prototype.$r = function(t, e) { return void 0 !== e ? e.St : this.Vh.an().Kr(t) }, t }(),
                Oe = function() {
                    function t() { this.Xr = [], this.Zr = new Map, this.Jr = new Map } return t.prototype.Gr = function() { return this.hs() > 0 ? this.Xr[this.Xr.length - 1] : null }, t.prototype.Qr = function() { return this.hs() > 0 ? this.te(0) : null }, t.prototype.un = function() { return this.hs() > 0 ? this.te(this.Xr.length - 1) : null }, t.prototype.hs = function() { return this.Xr.length }, t.prototype.wi = function() { return 0 === this.hs() }, t.prototype.Uh = function(t) { return null !== this.ie(t, 0) }, t.prototype.Kr = function(t) { return this.ne(t) }, t.prototype.ne = function(t, e) { void 0 === e && (e = 0); var n = this.ie(t, e); return null === n ? null : j(j({}, this.se(n)), { vs: this.te(n) }) }, t.prototype.fs = function() { return this.Xr }, t.prototype.he = function(t, e, n) { if (this.wi()) return null; for (var r = null, i = 0, o = n; i < o.length; i++) { var a = o[i];
                            r = _e(r, this.re(t, e, a)) } return r }, t.prototype.Z = function(t) { this.Jr.clear(), this.Zr.clear(), this.Xr = t }, t.prototype.te = function(t) { return this.Xr[t].vs }, t.prototype.se = function(t) { return this.Xr[t] }, t.prototype.ie = function(t, e) { var n = this.ee(t); if (null === n && 0 !== e) switch (e) {
                            case -1:
                                return this.ue(t);
                            case 1:
                                return this.ae(t);
                            default:
                                throw new TypeError("Unknown search mode") }
                        return n }, t.prototype.ue = function(t) { var e = this.oe(t); return e > 0 && (e -= 1), e !== this.Xr.length && this.te(e) < t ? e : null }, t.prototype.ae = function(t) { var e = this.le(t); return e !== this.Xr.length && t < this.te(e) ? e : null }, t.prototype.ee = function(t) { var e = this.oe(t); return e === this.Xr.length || t < this.Xr[e].vs ? null : e }, t.prototype.oe = function(t) { return mt(this.Xr, t, (function(t, e) { return t.vs < e })) }, t.prototype.le = function(t) { return gt(this.Xr, t, (function(t, e) { return e.vs > t })) }, t.prototype.fe = function(t, e, n) { for (var r = null, i = t; i < e; i++) { var o = this.Xr[i].St[n];
                            Number.isNaN(o) || (null === r ? r = { ce: o, ve: o } : (o < r.ce && (r.ce = o), o > r.ve && (r.ve = o))) } return r }, t.prototype.re = function(t, e, n) { if (this.wi()) return null; var r = null,
                            i = f(this.Qr()),
                            o = f(this.un()),
                            a = Math.max(t, i),
                            s = Math.min(e, o),
                            u = 30 * Math.ceil(a / 30),
                            c = Math.max(u, 30 * Math.floor(s / 30)),
                            l = this.oe(a),
                            h = this.le(Math.min(s, u, e));
                        r = _e(r, this.fe(l, h, n)); var p = this.Zr.get(n);
                        void 0 === p && (p = new Map, this.Zr.set(n, p)); for (var d = Math.max(u + 1, a); d < c; d += 30) { var y = Math.floor(d / 30),
                                v = p.get(y); if (void 0 === v) { var m = this.oe(30 * y),
                                    g = this.le(30 * (y + 1) - 1);
                                v = this.fe(m, g, n), p.set(y, v) }
                            r = _e(r, v) } return l = this.oe(c), h = this.le(s), _e(r, this.fe(l, h, n)) }, t }();

            function _e(t, e) { return null === t ? e : null === e ? t : { ce: Math.min(t.ce, e.ce), ve: Math.max(t.ve, e.ve) } } var Me = function(t) {
                    function e(e, n, r) { var i = t.call(this, e) || this;
                        i.Bt = new Oe, i.Or = new fe(i), i._e = [], i.de = new Jt(i), i.we = null, i.Me = null, i.be = [], i.me = [], i.pe = null, i.zi = n, i.ge = r; var o = new pe(i); return i.Ei = [o], i.Vr = new Ht(o, i, e), "Area" !== r && "Line" !== r && "Baseline" !== r || (i.we = new te(i)), i.ye(), i.ke(), i } return M(e, t), e.prototype.g = function() { null !== this.pe && clearTimeout(this.pe) }, e.prototype.ur = function(t) { return this.zi.priceLineColor || t }, e.prototype.jh = function(t) { var e = { qh: !0 },
                            n = this.Ct(); if (this.jt().bt().wi() || n.wi() || this.Bt.wi()) return e; var r, i, o = this.jt().bt().ss(),
                            a = this.kt(); if (null === o || null === a) return e; if (t) { var s = this.Bt.Gr(); if (null === s) return e;
                            r = s, i = s.vs } else { var u = this.Bt.ne(o.jn(), -1); if (null === u) return e; if (null === (r = this.Bt.Kr(u.vs))) return e;
                            i = u.vs } var c = r.St[3],
                            l = this.ls().As(i, { St: r }),
                            h = n.xt(c, a.St); return { qh: !1, et: c, Gt: n.Mi(c, a.St), _r: n.Fr(c), dr: n.Ne(c, a.St), A: l.Ds, ti: h, vs: i } }, e.prototype.ls = function() { return null !== this.Me || (this.Me = new xe(this)), this.Me }, e.prototype.W = function() { return this.zi }, e.prototype.Pr = function(t) { var e = t.priceScaleId;
                        void 0 !== e && e !== this.zi.priceScaleId && this.jt().xe(this, e), k(this.zi, t), null !== this.ki && void 0 !== t.scaleMargins && this.ki.Pr({ scaleMargins: t.scaleMargins }), void 0 !== t.priceFormat && (this.ye(), this.jt().Ce()), this.jt().Se(this), this.jt().Te(), this.Hi.vt("options") }, e.prototype.Z = function(t, e) { this.Bt.Z(t), this.De(), this.Hi.vt("data"), this.Ri.vt("data"), null !== this.we && (e && e.Ae ? this.we.Wh() : 0 === t.length && this.we.Ph()); var n = this.jt().oh(this);
                        this.jt().Be(n), this.jt().Se(this), this.jt().Te(), this.jt().Wr() }, e.prototype.Le = function(t) { this.be = t.map((function(t) { return j({}, t) })), this.De(); var e = this.jt().oh(this);
                        this.Ri.vt("data"), this.jt().Be(e), this.jt().Se(this), this.jt().Te(), this.jt().Wr() }, e.prototype.rr = function() { return this.me }, e.prototype.Ee = function(t) { var e = new ge(this, t); return this._e.push(e), this.jt().Se(this), e }, e.prototype.Fe = function(t) { var e = this._e.indexOf(t); - 1 !== e && this._e.splice(e, 1), this.jt().Se(this) }, e.prototype.Rr = function() { return this.ge }, e.prototype.kt = function() { var t = this.Oe(); return null === t ? null : { St: t.St[3], Ve: t.rt } }, e.prototype.Oe = function() { var t = this.jt().bt().ss(); if (null === t) return null; var e = t.In(); return this.Bt.ne(e, 1) }, e.prototype.an = function() { return this.Bt }, e.prototype.er = function(t) { var e = this.Bt.Kr(t); return null === e ? null : "Bar" === this.ge || "Candlestick" === this.ge ? { open: e.St[0], high: e.St[1], low: e.St[2], close: e.St[3] } : e.St[3] }, e.prototype.Pe = function(t) { var e = this,
                            n = this.we; return null !== n && n.yt() ? (null === this.pe && n.Rh() && (this.pe = setTimeout((function() { e.pe = null, e.jt().We() }), 0)), n.zh(), [n]) : [] }, e.prototype.tn = function() { var t = [];
                        this.ze() || t.push(this.de); for (var e = 0, n = this._e; e < n.length; e++) { var r = n[e];
                            t.push.apply(t, r.tn()) } return t.push(this.Hi, this.Or, this.Vr, this.Ri), t }, e.prototype.nn = function(t, e) { if (e !== this.ki && !this.ze()) return []; for (var n = S([], this.Ei, !0), r = 0, i = this._e; r < i.length; r++) { var o = i[r];
                            n.push(o.zr()) } return n }, e.prototype.Re = function(t, e) { var n = this; if (void 0 !== this.zi.autoscaleInfoProvider) { var r = this.zi.autoscaleInfoProvider((function() { var r = n.Ie(t, e); return null === r ? null : r.Cr() })); return ye.Sr(r) } return this.Ie(t, e) }, e.prototype.je = function() { return this.zi.priceFormat.minMove }, e.prototype.qe = function() { return this.Ue }, e.prototype.hn = function() { var t;
                        this.Hi.vt(), this.Ri.vt(); for (var e = 0, n = this.Ei; e < n.length; e++) n[e].vt(); for (var r = 0, i = this._e; r < i.length; r++) i[r].vt();
                        this.Or.vt(), this.de.vt(), null === (t = this.we) || void 0 === t || t.vt() }, e.prototype.Ct = function() { return f(t.prototype.Ct.call(this)) }, e.prototype.gt = function(t) { if ("Line" !== this.ge && "Area" !== this.ge && "Baseline" !== this.ge || !this.zi.crosshairMarkerVisible) return null; var e = this.Bt.Kr(t); return null === e ? null : { et: e.St[3], st: this.He(), Tt: this.Ye(), Nt: this.$e(t) } }, e.prototype.ar = function() { return this.zi.title }, e.prototype.yt = function() { return this.zi.visible }, e.prototype.ze = function() { return !at(this.Ct().Ke()) }, e.prototype.Ie = function(t, e) { if (!C(t) || !C(e) || this.Bt.wi()) return null; var n = "Line" === this.ge || "Area" === this.ge || "Baseline" === this.ge || "Histogram" === this.ge ? [3] : [2, 1],
                            r = this.Bt.he(t, e, n),
                            i = null !== r ? new de(r.ce, r.ve) : null; if ("Histogram" === this.Rr()) { var o = this.zi.base,
                                a = new de(o, o);
                            i = null !== i ? i.Nn(a) : a } return new ye(i, this.Ri.hr()) }, e.prototype.He = function() { switch (this.ge) {
                            case "Line":
                            case "Area":
                            case "Baseline":
                                return this.zi.crosshairMarkerRadius } return 0 }, e.prototype.Ye = function() { switch (this.ge) {
                            case "Line":
                            case "Area":
                            case "Baseline":
                                var t = this.zi.crosshairMarkerBorderColor; if (0 !== t.length) return t } return null }, e.prototype.$e = function(t) { switch (this.ge) {
                            case "Line":
                            case "Area":
                            case "Baseline":
                                var e = this.zi.crosshairMarkerBackgroundColor; if (0 !== e.length) return e } return this.ls().As(t).Ds }, e.prototype.ye = function() { switch (this.zi.priceFormat.type) {
                            case "custom":
                                this.Ue = { format: this.zi.priceFormat.formatter }; break;
                            case "volume":
                                this.Ue = new ht(this.zi.priceFormat.precision); break;
                            case "percent":
                                this.Ue = new lt(this.zi.priceFormat.precision); break;
                            default:
                                var t = Math.pow(10, this.zi.priceFormat.precision);
                                this.Ue = new ct(t, this.zi.priceFormat.minMove * t) }
                        null !== this.ki && this.ki.Xe() }, e.prototype.De = function() { var t = this,
                            e = this.jt().bt(); if (e.wi() || 0 === this.Bt.hs()) this.me = [];
                        else { var n = f(this.Bt.Qr());
                            this.me = this.be.map((function(r, i) { var o = f(e.Ze(r.time, !0)),
                                    a = o < n ? 1 : -1; return { time: f(t.Bt.ne(o, a)).vs, position: r.position, shape: r.shape, color: r.color, id: r.id, Xh: i, text: r.text, size: r.size } })) } }, e.prototype.ke = function() { switch (this.Ri = new he(this, this.jt()), this.ge) {
                            case "Bar":
                                this.Hi = new Et(this, this.jt()); break;
                            case "Candlestick":
                                this.Hi = new Bt(this, this.jt()); break;
                            case "Line":
                                this.Hi = new Vt(this, this.jt()); break;
                            case "Area":
                                this.Hi = new Mt(this, this.jt()); break;
                            case "Baseline":
                                this.Hi = new Rt(this, this.jt()); break;
                            case "Histogram":
                                this.Hi = new Wt(this, this.jt()); break;
                            default:
                                throw Error("Unknown chart style assigned: " + this.ge) } }, e }(be),
                je = function() {
                    function t(t) { this.zi = t } return t.prototype.Je = function(t, e, n) { var r = t; if (0 === this.zi.mode) return r; var i = n.ji(),
                            o = i.kt(); if (null === o) return r; var a = i.xt(t, o),
                            s = n.Ge().filter((function(t) { return t instanceof Me })).reduce((function(t, r) { if (n.lh(r) || !r.yt()) return t; var i = r.Ct(),
                                    o = r.an(); if (i.wi() || !o.Uh(e)) return t; var a = o.Kr(e); if (null === a) return t; var s = p(r.kt()); return t.concat([i.xt(a.St[3], s.St)]) }), []); if (0 === s.length) return r;
                        s.sort((function(t, e) { return Math.abs(t - a) - Math.abs(e - a) })); var u = s[0]; return i.qi(u, o) }, t }(),
                Se = function() {
                    function t() { this.Bt = null } return t.prototype.Z = function(t) { this.Bt = t }, t.prototype.H = function(t, e, n, r) { var i = this; if (null !== this.Bt) { var o = Math.max(1, Math.floor(e));
                            t.lineWidth = o; var a = Math.ceil(this.Bt.Ot * e),
                                s = Math.ceil(this.Bt.Ft * e);! function(t, e) { t.save(), t.lineWidth % 2 && t.translate(.5, .5), e(), t.restore() }(t, (function() { var n = f(i.Bt); if (n.Qe) { t.strokeStyle = n.tu, u(t, n.iu), t.beginPath(); for (var r = 0, c = n.nu; r < c.length; r++) { var l = c[r],
                                            h = Math.round(l.su * e);
                                        t.moveTo(h, -o), t.lineTo(h, a + o) }
                                    t.stroke() } if (n.hu) { t.strokeStyle = n.ru, u(t, n.eu), t.beginPath(); for (var p = 0, d = n.uu; p < d.length; p++) { var y = d[p],
                                            v = Math.round(y.su * e);
                                        t.moveTo(-o, v), t.lineTo(s + o, v) }
                                    t.stroke() } })) } }, t }(),
                Ee = function() {
                    function t(t) { this.zt = new Se, this.ft = !0, this.Di = t } return t.prototype.vt = function() { this.ft = !0 }, t.prototype.dt = function(t, e) { if (this.ft) { var n = this.Di.jt().W().grid,
                                r = { Ot: t, Ft: e, hu: n.horzLines.visible, Qe: n.vertLines.visible, ru: n.horzLines.color, tu: n.vertLines.color, eu: n.horzLines.style, iu: n.vertLines.style, uu: this.Di.ji().au(), nu: this.Di.jt().bt().au() || [] };
                            this.zt.Z(r), this.ft = !1 } return this.zt }, t }(),
                ke = function() {
                    function t(t) { this.Hi = new Ee(t) } return t.prototype.ou = function() { return this.Hi }, t }(),
                Ae = { lu: 4, fu: 1e-4 };

            function Ce(t, e) { var n = 100 * (t - e) / e; return e < 0 ? -n : n }

            function Pe(t, e) { var n = Ce(t.pr(), e),
                    r = Ce(t.gr(), e); return new de(n, r) }

            function Te(t, e) { var n = 100 * (t - e) / e + 100; return e < 0 ? -n : n }

            function De(t, e) { var n = Te(t.pr(), e),
                    r = Te(t.gr(), e); return new de(n, r) }

            function Ne(t, e) { var n = Math.abs(t); if (n < 1e-15) return 0; var r = Ct(n + e.fu) + e.lu; return t < 0 ? -r : r }

            function Re(t, e) { var n = Math.abs(t); if (n < 1e-15) return 0; var r = Math.pow(10, n - e.lu) - e.fu; return t < 0 ? -r : r }

            function Ie(t, e) { if (null === t) return null; var n = Ne(t.pr(), e),
                    r = Ne(t.gr(), e); return new de(n, r) }

            function Be(t, e) { if (null === t) return null; var n = Re(t.pr(), e),
                    r = Re(t.gr(), e); return new de(n, r) }

            function Le(t) { if (null === t) return Ae; var e = Math.abs(t.gr() - t.pr()); if (e >= 1 || e < 1e-15) return Ae; var n = Math.ceil(Math.abs(Math.log10(e))),
                    r = Ae.lu + n; return { lu: r, fu: 1 / Math.pow(10, r) } } var ze, Fe = function() {
                    function t(t, e) { if (this.cu = t, this.vu = e, function(t) { if (t < 0) return !1; for (var e = t; e > 1; e /= 10)
                                    if (e % 10 != 0) return !1;
                                return !0 }(this.cu)) this._u = [2, 2.5, 2];
                        else { this._u = []; for (var n = this.cu; 1 !== n;) { if (n % 2 == 0) this._u.push(2), n /= 2;
                                else { if (n % 5 != 0) throw new Error("unexpected base");
                                    this._u.push(2, 2.5), n /= 5 } if (this._u.length > 100) throw new Error("something wrong with base") } } } return t.prototype.du = function(t, e, n) { for (var r, i = 0 === this.cu ? 0 : 1 / this.cu, o = Math.pow(10, Math.max(0, Math.ceil(Ct(t - e)))), a = 0, s = this.vu[0];;) { var u = At(o, i, 1e-14) && o > i + 1e-14,
                                c = At(o, n * s, 1e-14),
                                l = At(o, 1, 1e-14); if (!(u && c && l)) break;
                            o /= s, s = this.vu[++a % this.vu.length] } if (o <= i + 1e-14 && (o = i), o = Math.max(1, o), this._u.length > 0 && (r = o, 1, 1e-14, Math.abs(r - 1) < 1e-14))
                            for (a = 0, s = this._u[0]; At(o, n * s, 1e-14) && o > i + 1e-14;) o /= s, s = this._u[++a % this._u.length]; return o }, t }(),
                We = function() {
                    function t(t, e, n, r) { this.wu = [], this._i = t, this.cu = e, this.Mu = n, this.bu = r } return t.prototype.du = function(t, e) { if (t < e) throw new Error("high < low"); var n = this._i.Yt(),
                            r = (t - e) * this.mu() / n,
                            i = new Fe(this.cu, [2, 2.5, 2]),
                            o = new Fe(this.cu, [2, 2, 2.5]),
                            a = new Fe(this.cu, [2.5, 2, 2]),
                            s = []; return s.push(i.du(t, e, r), o.du(t, e, r), a.du(t, e, r)),
                            function(t) { if (t.length < 1) throw Error("array is empty"); for (var e = t[0], n = 1; n < t.length; ++n) t[n] < e && (e = t[n]); return e }(s) }, t.prototype.pu = function() { var t = this._i,
                            e = t.kt(); if (null !== e) { var n = t.Yt(),
                                r = this.Mu(n - 1, e),
                                i = this.Mu(0, e),
                                o = this._i.W().entireTextOnly ? this.gu() / 2 : 0,
                                a = o,
                                s = n - 1 - o,
                                u = Math.max(r, i),
                                c = Math.min(r, i); if (u !== c) { for (var l = this.du(u, c), h = u % l, f = u >= c ? 1 : -1, p = null, d = 0, y = u - (h += h < 0 ? l : 0); y > c; y -= l) { var v = this.bu(y, e, !0);
                                    null !== p && Math.abs(v - p) < this.mu() || v < a || v > s || (d < this.wu.length ? (this.wu[d].su = v, this.wu[d].yu = t.ku(y)) : this.wu.push({ su: v, yu: t.ku(y) }), d++, p = v, t.Nu() && (l = this.du(y * f, c))) }
                                this.wu.length = d } else this.wu = [] } else this.wu = [] }, t.prototype.au = function() { return this.wu }, t.prototype.gu = function() { return this._i.S() }, t.prototype.mu = function() { return Math.ceil(2.5 * this.gu()) }, t }();

            function Ve(t) { return t.slice().sort((function(t, e) { return f(t.xi()) - f(e.xi()) })) }! function(t) { t[t.Normal = 0] = "Normal", t[t.Logarithmic = 1] = "Logarithmic", t[t.Percentage = 2] = "Percentage", t[t.IndexedTo100 = 3] = "IndexedTo100" }(ze || (ze = {})); var Ue = new lt,
                Ge = new ct(100, 1),
                Xe = function() {
                    function t(t, e, n, r) { this.xu = 0, this.Cu = null, this.Tr = null, this.Su = null, this.Tu = { Du: !1, Au: null }, this.Bu = 0, this.Lu = 0, this.Eu = new E, this.Fu = new E, this.Ou = [], this.Vu = null, this.Pu = null, this.Wu = null, this.zu = null, this.Ue = Ge, this.Ru = Le(null), this.Iu = t, this.zi = e, this.ju = n, this.qu = r, this.Uu = new We(this, 100, this.Hu.bind(this), this.Yu.bind(this)) } return t.prototype.Ke = function() { return this.Iu }, t.prototype.W = function() { return this.zi }, t.prototype.Pr = function(t) { if (k(this.zi, t), this.Xe(), void 0 !== t.mode && this.$u({ mh: t.mode }), void 0 !== t.scaleMargins) { var e = h(t.scaleMargins.top),
                                n = h(t.scaleMargins.bottom); if (e < 0 || e > 1) throw new Error("Invalid top margin - expect value between 0 and 1, given=".concat(e)); if (n < 0 || n > 1 || e + n > 1) throw new Error("Invalid bottom margin - expect value between 0 and 1, given=".concat(n)); if (e + n > 1) throw new Error("Invalid margins - sum of margins must be less than 1, given=".concat(e + n));
                            this.Ku(), this.Pu = null } }, t.prototype.Xu = function() { return this.zi.autoScale }, t.prototype.Nu = function() { return 1 === this.zi.mode }, t.prototype.vr = function() { return 2 === this.zi.mode }, t.prototype.Zu = function() { return 3 === this.zi.mode }, t.prototype.mh = function() { return { _n: this.zi.autoScale, Ju: this.zi.invertScale, mh: this.zi.mode } }, t.prototype.$u = function(t) { var e = this.mh(),
                            n = null;
                        void 0 !== t._n && (this.zi.autoScale = t._n), void 0 !== t.mh && (this.zi.mode = t.mh, 2 !== t.mh && 3 !== t.mh || (this.zi.autoScale = !0), this.Tu.Du = !1), 1 === e.mh && t.mh !== e.mh && (function(t, e) { if (null === t) return !1; var n = Re(t.pr(), e),
                                r = Re(t.gr(), e); return isFinite(n) && isFinite(r) }(this.Tr, this.Ru) ? null !== (n = Be(this.Tr, this.Ru)) && this.Gu(n) : this.zi.autoScale = !0), 1 === t.mh && t.mh !== e.mh && null !== (n = Ie(this.Tr, this.Ru)) && this.Gu(n); var r = e.mh !== this.zi.mode;
                        r && (2 === e.mh || this.vr()) && this.Xe(), r && (3 === e.mh || this.Zu()) && this.Xe(), void 0 !== t.Ju && e.Ju !== t.Ju && (this.zi.invertScale = t.Ju, this.Qu()), this.Fu.m(e, this.mh()) }, t.prototype.ta = function() { return this.Fu }, t.prototype.S = function() { return this.ju.fontSize }, t.prototype.Yt = function() { return this.xu }, t.prototype.ia = function(t) { this.xu !== t && (this.xu = t, this.Ku(), this.Pu = null) }, t.prototype.na = function() { if (this.Cu) return this.Cu; var t = this.Yt() - this.sa() - this.ha(); return this.Cu = t, t }, t.prototype.Ar = function() { return this.ra(), this.Tr }, t.prototype.Gu = function(t, e) { var n = this.Tr;
                        (e || null === n && null !== t || null !== n && !n.br(t)) && (this.Pu = null, this.Tr = t) }, t.prototype.wi = function() { return this.ra(), 0 === this.xu || !this.Tr || this.Tr.wi() }, t.prototype.ea = function(t) { return this.Ju() ? t : this.Yt() - 1 - t }, t.prototype.xt = function(t, e) { return this.vr() ? t = Ce(t, e) : this.Zu() && (t = Te(t, e)), this.Yu(t, e) }, t.prototype.us = function(t, e, n) { this.ra(); for (var r = this.ha(), i = f(this.Ar()), o = i.pr(), a = i.gr(), s = this.na() - 1, u = this.Ju(), c = s / (a - o), l = void 0 === n ? 0 : n.from, h = void 0 === n ? t.length : n.to, p = this.ua(), d = l; d < h; d++) { var y = t[d],
                                v = y.et; if (!isNaN(v)) { var m = v;
                                null !== p && (m = p(y.et, e)); var g = r + c * (m - o),
                                    b = u ? g : this.xu - 1 - g;
                                y.it = b } } }, t.prototype.Ss = function(t, e, n) { this.ra(); for (var r = this.ha(), i = f(this.Ar()), o = i.pr(), a = i.gr(), s = this.na() - 1, u = this.Ju(), c = s / (a - o), l = void 0 === n ? 0 : n.from, h = void 0 === n ? t.length : n.to, p = this.ua(), d = l; d < h; d++) { var y = t[d],
                                v = y.open,
                                m = y.high,
                                g = y.low,
                                b = y.close;
                            null !== p && (v = p(y.open, e), m = p(y.high, e), g = p(y.low, e), b = p(y.close, e)); var w = r + c * (v - o),
                                x = u ? w : this.xu - 1 - w;
                            y.xs = x, w = r + c * (m - o), x = u ? w : this.xu - 1 - w, y.ys = x, w = r + c * (g - o), x = u ? w : this.xu - 1 - w, y.ks = x, w = r + c * (b - o), x = u ? w : this.xu - 1 - w, y.Cs = x } }, t.prototype.qi = function(t, e) { var n = this.Hu(t, e); return this.aa(n, e) }, t.prototype.aa = function(t, e) { var n = t; return this.vr() ? n = function(t, e) { return e < 0 && (t = -t), t / 100 * e + e }(n, e) : this.Zu() && (n = function(t, e) { return t -= 100, e < 0 && (t = -t), t / 100 * e + e }(n, e)), n }, t.prototype.Ge = function() { return this.Ou }, t.prototype.oa = function() { if (this.Vu) return this.Vu; for (var t = [], e = 0; e < this.Ou.length; e++) { var n = this.Ou[e];
                            null === n.xi() && n.Ci(e + 1), t.push(n) } return t = Ve(t), this.Vu = t, this.Vu }, t.prototype.la = function(t) {-1 === this.Ou.indexOf(t) && (this.Ou.push(t), this.Xe(), this.fa()) }, t.prototype.ca = function(t) { var e = this.Ou.indexOf(t); if (-1 === e) throw new Error("source is not attached to scale");
                        this.Ou.splice(e, 1), 0 === this.Ou.length && (this.$u({ _n: !0 }), this.Gu(null)), this.Xe(), this.fa() }, t.prototype.kt = function() { for (var t = null, e = 0, n = this.Ou; e < n.length; e++) { var r = n[e].kt();
                            null !== r && (null === t || r.Ve < t.Ve) && (t = r) } return null === t ? null : t.St }, t.prototype.Ju = function() { return this.zi.invertScale }, t.prototype.au = function() { var t = null === this.kt(); if (null !== this.Pu && (t || this.Pu.va === t)) return this.Pu.au;
                        this.Uu.pu(); var e = this.Uu.au(); return this.Pu = { au: e, va: t }, this.Eu.m(), e }, t.prototype._a = function() { return this.Eu }, t.prototype.da = function(t) { this.vr() || this.Zu() || null === this.Wu && null === this.Su && (this.wi() || (this.Wu = this.xu - t, this.Su = f(this.Ar()).mr())) }, t.prototype.wa = function(t) { if (!this.vr() && !this.Zu() && null !== this.Wu) { this.$u({ _n: !1 }), (t = this.xu - t) < 0 && (t = 0); var e = (this.Wu + .2 * (this.xu - 1)) / (t + .2 * (this.xu - 1)),
                                n = f(this.Su).mr();
                            e = Math.max(e, .1), n.kr(e), this.Gu(n) } }, t.prototype.Ma = function() { this.vr() || this.Zu() || (this.Wu = null, this.Su = null) }, t.prototype.ba = function(t) { this.Xu() || null === this.zu && null === this.Su && (this.wi() || (this.zu = t, this.Su = f(this.Ar()).mr())) }, t.prototype.ma = function(t) { if (!this.Xu() && null !== this.zu) { var e = f(this.Ar()).yr() / (this.na() - 1),
                                n = t - this.zu;
                            this.Ju() && (n *= -1); var r = n * e,
                                i = f(this.Su).mr();
                            i.Nr(r), this.Gu(i, !0), this.Pu = null } }, t.prototype.pa = function() { this.Xu() || null !== this.zu && (this.zu = null, this.Su = null) }, t.prototype.qe = function() { return this.Ue || this.Xe(), this.Ue }, t.prototype.Mi = function(t, e) { switch (this.zi.mode) {
                            case 2:
                                return this.qe().format(Ce(t, e));
                            case 3:
                                return this.qe().format(Te(t, e));
                            default:
                                return this.ga(t) } }, t.prototype.ku = function(t) { switch (this.zi.mode) {
                            case 2:
                            case 3:
                                return this.qe().format(t);
                            default:
                                return this.ga(t) } }, t.prototype.Fr = function(t) { return this.ga(t, f(this.ya()).qe()) }, t.prototype.Ne = function(t, e) { return t = Ce(t, e), Ue.format(t) }, t.prototype.ka = function() { return this.Ou }, t.prototype.Na = function(t) { this.Tu = { Au: t, Du: !1 } }, t.prototype.hn = function() { this.Ou.forEach((function(t) { return t.hn() })) }, t.prototype.Xe = function() { this.Pu = null; var t = this.ya(),
                            e = 100;
                        null !== t && (e = Math.round(1 / t.je())), this.Ue = Ge, this.vr() ? (this.Ue = Ue, e = 100) : this.Zu() ? (this.Ue = new ct(100, 1), e = 100) : null !== t && (this.Ue = t.qe()), this.Uu = new We(this, e, this.Hu.bind(this), this.Yu.bind(this)), this.Uu.pu() }, t.prototype.fa = function() { this.Vu = null }, t.prototype.ya = function() { return this.Ou[0] || null }, t.prototype.sa = function() { return this.Ju() ? this.zi.scaleMargins.bottom * this.Yt() + this.Lu : this.zi.scaleMargins.top * this.Yt() + this.Bu }, t.prototype.ha = function() { return this.Ju() ? this.zi.scaleMargins.top * this.Yt() + this.Bu : this.zi.scaleMargins.bottom * this.Yt() + this.Lu }, t.prototype.ra = function() { this.Tu.Du || (this.Tu.Du = !0, this.xa()) }, t.prototype.Ku = function() { this.Cu = null }, t.prototype.Yu = function(t, e) { if (this.ra(), this.wi()) return 0;
                        t = this.Nu() && t ? Ne(t, this.Ru) : t; var n = f(this.Ar()),
                            r = this.ha() + (this.na() - 1) * (t - n.pr()) / n.yr(); return this.ea(r) }, t.prototype.Hu = function(t, e) { if (this.ra(), this.wi()) return 0; var n = this.ea(t),
                            r = f(this.Ar()),
                            i = r.pr() + r.yr() * ((n - this.ha()) / (this.na() - 1)); return this.Nu() ? Re(i, this.Ru) : i }, t.prototype.Qu = function() { this.Pu = null, this.Uu.pu() }, t.prototype.xa = function() { var t = this.Tu.Au; if (null !== t) { for (var e, n, r = null, i = 0, o = 0, a = 0, s = this.ka(); a < s.length; a++) { var u = s[a]; if (u.yt()) { var c = u.kt(); if (null !== c) { var l = u.Re(t.In(), t.jn()),
                                            h = l && l.Ar(); if (null !== h) { switch (this.zi.mode) {
                                                case 1:
                                                    h = Ie(h, this.Ru); break;
                                                case 2:
                                                    h = Pe(h, c.St); break;
                                                case 3:
                                                    h = De(h, c.St) } if (r = null === r ? h : r.Nn(f(h)), null !== l) { var p = l.Br();
                                                null !== p && (i = Math.max(i, p.above), o = Math.max(i, p.below)) } } } } } if (i === this.Bu && o === this.Lu || (this.Bu = i, this.Lu = o, this.Pu = null, this.Ku()), null !== r) { if (r.pr() === r.gr()) { var d = this.ya(),
                                        y = 5 * (null === d || this.vr() || this.Zu() ? 1 : d.je());
                                    this.Nu() && (r = Be(r, this.Ru)), r = new de(r.pr() - y, r.gr() + y), this.Nu() && (r = Ie(r, this.Ru)) } if (this.Nu()) { var v = Be(r, this.Ru),
                                        m = Le(v); if (e = m, n = this.Ru, e.lu !== n.lu || e.fu !== n.fu) { var g = null !== this.Su ? Be(this.Su, this.Ru) : null;
                                        this.Ru = m, r = Ie(v, m), null !== g && (this.Su = Ie(g, m)) } }
                                this.Gu(r) } else null === this.Tr && (this.Gu(new de(-.5, .5)), this.Ru = Le(null));
                            this.Tu.Du = !0 } }, t.prototype.ua = function() { var t = this; return this.vr() ? Ce : this.Zu() ? Te : this.Nu() ? function(e) { return Ne(e, t.Ru) } : null }, t.prototype.ga = function(t, e) { return void 0 === this.qu.priceFormatter ? (void 0 === e && (e = this.qe()), e.format(t)) : this.qu.priceFormatter(t) }, t }(),
                He = function() {
                    function t(t, e) { this.Ou = [], this.Ca = new Map, this.xu = 0, this.hh = 0, this.Sa = 1e3, this.Vu = null, this.Ta = new E, this.Da = t, this.pi = e, this.Aa = new ke(this); var n = e.W();
                        this.Ba = this.La("left", n.leftPriceScale), this.Ea = this.La("right", n.rightPriceScale), this.Ba.ta().u(this.Fa.bind(this, this.Ba), this), this.Ea.ta().u(this.Fa.bind(this, this.Ba), this), this.Oa(n) } return t.prototype.Oa = function(t) { if (t.leftPriceScale && this.Ba.Pr(t.leftPriceScale), t.rightPriceScale && this.Ea.Pr(t.rightPriceScale), t.localization && (this.Ba.Xe(), this.Ea.Xe()), t.overlayPriceScales)
                            for (var e = 0, n = Array.from(this.Ca.values()); e < n.length; e++) { var r = f(n[e][0].Ct());
                                r.Pr(t.overlayPriceScales), t.localization && r.Xe() } }, t.prototype.Va = function(t) { switch (t) {
                            case "left":
                                return this.Ba;
                            case "right":
                                return this.Ea } return this.Ca.has(t) ? h(this.Ca.get(t))[0].Ct() : null }, t.prototype.g = function() { this.jt().Pa().M(this), this.Ba.ta().M(this), this.Ea.ta().M(this), this.Ou.forEach((function(t) { t.g && t.g() })), this.Ta.m() }, t.prototype.Wa = function() { return this.Sa }, t.prototype.za = function(t) { this.Sa = t }, t.prototype.jt = function() { return this.pi }, t.prototype.Ht = function() { return this.hh }, t.prototype.Yt = function() { return this.xu }, t.prototype.Ra = function(t) { this.hh = t, this.Ia() }, t.prototype.ia = function(t) { var e = this;
                        this.xu = t, this.Ba.ia(t), this.Ea.ia(t), this.Ou.forEach((function(n) { if (e.lh(n)) { var r = n.Ct();
                                null !== r && r.ia(t) } })), this.Ia() }, t.prototype.Ge = function() { return this.Ou }, t.prototype.lh = function(t) { var e = t.Ct(); return null === e || this.Ba !== e && this.Ea !== e }, t.prototype.la = function(t, e, n) { var r = void 0 !== n ? n : this.qa().ja + 1;
                        this.Ua(t, e, r) }, t.prototype.ca = function(t) { var e = this.Ou.indexOf(t);
                        l(-1 !== e, "removeDataSource: invalid data source"), this.Ou.splice(e, 1); var n = f(t.Ct()).Ke(); if (this.Ca.has(n)) { var r = h(this.Ca.get(n)),
                                i = r.indexOf(t); - 1 !== i && (r.splice(i, 1), 0 === r.length && this.Ca.delete(n)) } var o = t.Ct();
                        o && o.Ge().indexOf(t) >= 0 && o.ca(t), null !== o && (o.fa(), this.Ha(o)), this.Vu = null }, t.prototype._h = function(t) { return t === this.Ba ? "left" : t === this.Ea ? "right" : "overlay" }, t.prototype.Ya = function() { return this.Ba }, t.prototype.$a = function() { return this.Ea }, t.prototype.Ka = function(t, e) { t.da(e) }, t.prototype.Xa = function(t, e) { t.wa(e), this.Ia() }, t.prototype.Za = function(t) { t.Ma() }, t.prototype.Ja = function(t, e) { t.ba(e) }, t.prototype.Ga = function(t, e) { t.ma(e), this.Ia() }, t.prototype.Qa = function(t) { t.pa() }, t.prototype.Ia = function() { this.Ou.forEach((function(t) { t.hn() })) }, t.prototype.ji = function() { var t = null; return this.pi.W().rightPriceScale.visible && 0 !== this.Ea.Ge().length ? t = this.Ea : this.pi.W().leftPriceScale.visible && 0 !== this.Ba.Ge().length ? t = this.Ba : 0 !== this.Ou.length && (t = this.Ou[0].Ct()), null === t && (t = this.Ea), t }, t.prototype.fh = function() { var t = null; return this.pi.W().rightPriceScale.visible ? t = this.Ea : this.pi.W().leftPriceScale.visible && (t = this.Ba), t }, t.prototype.Ha = function(t) { null !== t && t.Xu() && this.io(t) }, t.prototype.no = function(t) { var e = this.Da.ss();
                        t.$u({ _n: !0 }), null !== e && t.Na(e), this.Ia() }, t.prototype.so = function() { this.io(this.Ba), this.io(this.Ea) }, t.prototype.ho = function() { var t = this;
                        this.Ha(this.Ba), this.Ha(this.Ea), this.Ou.forEach((function(e) { t.lh(e) && t.Ha(e.Ct()) })), this.Ia(), this.pi.Wr() }, t.prototype.oa = function() { return null === this.Vu && (this.Vu = Ve(this.Ou)), this.Vu }, t.prototype.ro = function() { return this.Ta }, t.prototype.eo = function() { return this.Aa }, t.prototype.io = function(t) { var e = t.ka(); if (e && e.length > 0 && !this.Da.wi()) { var n = this.Da.ss();
                            null !== n && t.Na(n) }
                        t.hn() }, t.prototype.qa = function() { var t = this.oa(); if (0 === t.length) return { uo: 0, ja: 0 }; for (var e = 0, n = 0, r = 0; r < t.length; r++) { var i = t[r].xi();
                            null !== i && (i < e && (e = i), i > n && (n = i)) } return { uo: e, ja: n } }, t.prototype.Ua = function(t, e, n) { var r = this.Va(e); if (null === r && (r = this.La(e, this.pi.W().overlayPriceScales)), this.Ou.push(t), !at(e)) { var i = this.Ca.get(e) || [];
                            i.push(t), this.Ca.set(e, i) }
                        r.la(t), t.Si(r), t.Ci(n), this.Ha(r), this.Vu = null }, t.prototype.Fa = function(t, e, n) { e.mh !== n.mh && this.io(t) }, t.prototype.La = function(t, e) { var n = j({ visible: !0, autoScale: !0 }, D(e)),
                            r = new Xe(t, n, this.pi.W().layout, this.pi.W().localization); return r.ia(this.Yt()), r }, t }(),
                Ye = function(t) { return t.getUTCFullYear() }; var qe = function() {
                    function t(t, e) { void 0 === t && (t = "yyyy-MM-dd"), void 0 === e && (e = "default"), this.ao = t, this.oo = e } return t.prototype.lo = function(t) { return function(t, e, n) { return e.replace(/yyyy/g, function(t) { return ut(Ye(t), 4) }(t)).replace(/yy/g, function(t) { return ut(Ye(t) % 100, 2) }(t)).replace(/MMMM/g, function(t, e) { return new Date(t.getUTCFullYear(), t.getUTCMonth(), 1).toLocaleString(e, { month: "long" }) }(t, n)).replace(/MMM/g, function(t, e) { return new Date(t.getUTCFullYear(), t.getUTCMonth(), 1).toLocaleString(e, { month: "short" }) }(t, n)).replace(/MM/g, function(t) { return ut(function(t) { return t.getUTCMonth() + 1 }(t), 2) }(t)).replace(/dd/g, function(t) { return ut(function(t) { return t.getUTCDate() }(t), 2) }(t)) }(t, this.ao, this.oo) }, t }(),
                Je = function() {
                    function t(t) { this.fo = t || "%h:%m:%s" } return t.prototype.lo = function(t) { return this.fo.replace("%h", ut(t.getUTCHours(), 2)).replace("%m", ut(t.getUTCMinutes(), 2)).replace("%s", ut(t.getUTCSeconds(), 2)) }, t }(),
                $e = { co: "yyyy-MM-dd", vo: "%h:%m:%s", _o: " ", do: "default" },
                Ke = function() {
                    function t(t) { void 0 === t && (t = {}); var e = j(j({}, $e), t);
                        this.wo = new qe(e.co, e.do), this.Mo = new Je(e.vo), this.bo = e._o } return t.prototype.lo = function(t) { return "".concat(this.wo.lo(t)).concat(this.bo).concat(this.Mo.lo(t)) }, t }(),
                Ze = function() {
                    function t(t, e) { void 0 === e && (e = 50), this.mo = 0, this.po = 1, this.yo = 1, this.Gs = new Map, this.ko = new Map, this.No = t, this.xo = e } return t.prototype.lo = function(t) { var e = void 0 === t.Co ? new Date(1e3 * t.So).getTime() : new Date(Date.UTC(t.Co.year, t.Co.month - 1, t.Co.day)).getTime(),
                            n = this.Gs.get(e); if (void 0 !== n) return n.To; if (this.mo === this.xo) { var r = this.ko.get(this.yo);
                            this.ko.delete(this.yo), this.Gs.delete(h(r)), this.yo++, this.mo-- } var i = this.No(t); return this.Gs.set(e, { To: i, Do: this.po }), this.ko.set(this.po, e), this.mo++, this.po++, i }, t }(),
                Qe = function() {
                    function t(t, e) { l(t <= e, "right should be >= left"), this.Ao = t, this.Bo = e } return t.prototype.In = function() { return this.Ao }, t.prototype.jn = function() { return this.Bo }, t.prototype.Lo = function() { return this.Bo - this.Ao + 1 }, t.prototype.Uh = function(t) { return this.Ao <= t && t <= this.Bo }, t.prototype.br = function(t) { return this.Ao === t.In() && this.Bo === t.jn() }, t }();

            function tn(t, e) { return null === t || null === e ? t === e : t.br(e) } var en, nn = function() {
                    function t() { this.Eo = new Map, this.Gs = null } return t.prototype.Fo = function(t, e) { this.Oo(e), this.Gs = null; for (var n = e; n < t.length; ++n) { var r = t[n],
                                i = this.Eo.get(r.Vo);
                            void 0 === i && (i = [], this.Eo.set(r.Vo, i)), i.push({ vs: n, rt: r.rt, Po: r.Vo }) } }, t.prototype.Wo = function(t, e) { var n = Math.ceil(e / t); return null !== this.Gs && this.Gs.zo === n || (this.Gs = { au: this.Ro(n), zo: n }), this.Gs.au }, t.prototype.Oo = function(t) { if (0 !== t) { var e = [];
                            this.Eo.forEach((function(n, r) { t <= n[0].vs ? e.push(r) : n.splice(mt(n, t, (function(e) { return e.vs < t })), 1 / 0) })); for (var n = 0, r = e; n < r.length; n++) { var i = r[n];
                                this.Eo.delete(i) } } else this.Eo.clear() }, t.prototype.Ro = function(t) { for (var e = [], n = 0, r = Array.from(this.Eo.keys()).sort((function(t, e) { return e - t })); n < r.length; n++) { var i = r[n]; if (this.Eo.get(i)) { var o = e;
                                e = []; for (var a = o.length, s = 0, u = h(this.Eo.get(i)), c = u.length, l = 1 / 0, f = -1 / 0, p = 0; p < c; p++) { for (var d = u[p], y = d.vs; s < a;) { var v = o[s],
                                            m = v.vs; if (!(m < y)) { l = m; break }
                                        s++, e.push(v), f = m, l = 1 / 0 }
                                    l - y >= t && y - f >= t && (e.push(d), f = y) } for (; s < a; s++) e.push(o[s]) } } return e }, t }(),
                rn = function() {
                    function t(t) { this.Io = t } return t.prototype.jo = function() { return null === this.Io ? null : new Qe(Math.floor(this.Io.In()), Math.ceil(this.Io.jn())) }, t.prototype.qo = function() { return this.Io }, t.Uo = function() { return new t(null) }, t }();! function(t) { t[t.Year = 0] = "Year", t[t.Month = 1] = "Month", t[t.DayOfMonth = 2] = "DayOfMonth", t[t.Time = 3] = "Time", t[t.TimeWithSeconds = 4] = "TimeWithSeconds" }(en || (en = {})); var on, an = function() {
                    function t(t, e, n) { this.hh = 0, this.Ho = null, this.Yo = [], this.zu = null, this.Wu = null, this.$o = new nn, this.Ko = new Map, this.Xo = rn.Uo(), this.Zo = !0, this.Jo = new E, this.Go = new E, this.Qo = new E, this.tl = null, this.il = null, this.nl = [], this.zi = e, this.qu = n, this.sl = e.rightOffset, this.hl = e.barSpacing, this.pi = t, this.rl() } return t.prototype.W = function() { return this.zi }, t.prototype.el = function(t) { k(this.qu, t), this.ul(), this.rl() }, t.prototype.Pr = function(t, e) { var n;
                        k(this.zi, t), this.zi.fixLeftEdge && this.al(), this.zi.fixRightEdge && this.ol(), void 0 !== t.barSpacing && this.pi.gn(t.barSpacing), void 0 !== t.rightOffset && this.pi.yn(t.rightOffset), void 0 !== t.minBarSpacing && this.pi.gn(null !== (n = t.barSpacing) && void 0 !== n ? n : this.hl), this.ul(), this.rl(), this.Qo.m() }, t.prototype.gi = function(t) { var e; return (null === (e = this.Yo[t]) || void 0 === e ? void 0 : e.rt) || null }, t.prototype.Ze = function(t, e) { if (this.Yo.length < 1) return null; if (t.So > this.Yo[this.Yo.length - 1].rt.So) return e ? this.Yo.length - 1 : null; var n = mt(this.Yo, t.So, (function(t, e) { return t.rt.So < e })); return t.So < this.Yo[n].rt.So ? e ? n : null : n }, t.prototype.wi = function() { return 0 === this.hh || 0 === this.Yo.length || null === this.Ho }, t.prototype.ss = function() { return this.ll(), this.Xo.jo() }, t.prototype.fl = function() { return this.ll(), this.Xo.qo() }, t.prototype.cl = function() { var t = this.ss(); if (null === t) return null; var e = { from: t.In(), to: t.jn() }; return this.vl(e) }, t.prototype.vl = function(t) { var e = Math.round(t.from),
                            n = Math.round(t.to),
                            r = f(this._l()),
                            i = f(this.dl()); return { from: f(this.gi(Math.max(r, e))), to: f(this.gi(Math.min(i, n))) } }, t.prototype.wl = function(t) { return { from: f(this.Ze(t.from, !0)), to: f(this.Ze(t.to, !0)) } }, t.prototype.Ht = function() { return this.hh }, t.prototype.Ra = function(t) { if (isFinite(t) && !(t <= 0) && this.hh !== t) { if (this.zi.lockVisibleTimeRangeOnResize && this.hh) { var e = this.hl * t / this.hh;
                                this.hl = e } if (this.zi.fixLeftEdge) { var n = this.ss(); if (null !== n && n.In() <= 0) { var r = this.hh - t;
                                    this.sl -= Math.round(r / this.hl) + 1 } }
                            this.hh = t, this.Zo = !0, this.Ml(), this.bl() } }, t.prototype.At = function(t) { if (this.wi() || !C(t)) return 0; var e = this.ml() + this.sl - t; return this.hh - (e + .5) * this.hl - 1 }, t.prototype.es = function(t, e) { for (var n = this.ml(), r = void 0 === e ? 0 : e.from, i = void 0 === e ? t.length : e.to, o = r; o < i; o++) { var a = t[o].rt,
                                s = n + this.sl - a,
                                u = this.hh - (s + .5) * this.hl - 1;
                            t[o].tt = u } }, t.prototype.pl = function(t) { return Math.ceil(this.gl(t)) }, t.prototype.yn = function(t) { this.Zo = !0, this.sl = t, this.bl(), this.pi.yl(), this.pi.Wr() }, t.prototype.ws = function() { return this.hl }, t.prototype.gn = function(t) { this.kl(t), this.bl(), this.pi.yl(), this.pi.Wr() }, t.prototype.Nl = function() { return this.sl }, t.prototype.au = function() { if (this.wi()) return null; if (null !== this.il) return this.il; for (var t = this.hl, e = 5 * (this.pi.W().layout.fontSize + 4), n = Math.round(e / t), r = f(this.ss()), i = Math.max(r.In(), r.In() - n), o = Math.max(r.jn(), r.jn() - n), a = this.$o.Wo(t, e), s = this._l() + n, u = this.dl() - n, c = this.xl(), l = this.zi.fixLeftEdge || c, h = this.zi.fixRightEdge || c, p = 0, d = 0, y = a; d < y.length; d++) { var v = y[d]; if (i <= v.vs && v.vs <= o) { var m = void 0;
                                p < this.nl.length ? ((m = this.nl[p]).su = this.At(v.vs), m.yu = this.Cl(v.rt, v.Po), m.Po = v.Po) : (m = { Sl: !1, su: this.At(v.vs), yu: this.Cl(v.rt, v.Po), Po: v.Po }, this.nl.push(m)), this.hl > e / 2 && !c ? m.Sl = !1 : m.Sl = l && v.vs <= s || h && v.vs >= u, p++ } } return this.nl.length = p, this.il = this.nl, this.nl }, t.prototype.Tl = function() { this.Zo = !0, this.gn(this.zi.barSpacing), this.yn(this.zi.rightOffset) }, t.prototype.Dl = function(t) { this.Zo = !0, this.Ho = t, this.bl(), this.al() }, t.prototype.Al = function(t, e) { var n = this.gl(t),
                            r = this.ws(),
                            i = r + e * (r / 10);
                        this.gn(i), this.zi.rightBarStaysOnScroll || this.yn(this.Nl() + (n - this.gl(t))) }, t.prototype.da = function(t) { this.zu && this.pa(), null === this.Wu && null === this.tl && (this.wi() || (this.Wu = t, this.Bl())) }, t.prototype.wa = function(t) { if (null !== this.tl) { var e = kt(this.hh - t, 0, this.hh),
                                n = kt(this.hh - f(this.Wu), 0, this.hh);
                            0 !== e && 0 !== n && this.gn(this.tl.ws * e / n) } }, t.prototype.Ma = function() { null !== this.Wu && (this.Wu = null, this.Ll()) }, t.prototype.ba = function(t) { null === this.zu && null === this.tl && (this.wi() || (this.zu = t, this.Bl())) }, t.prototype.ma = function(t) { if (null !== this.zu) { var e = (this.zu - t) / this.ws();
                            this.sl = f(this.tl).Nl + e, this.Zo = !0, this.bl() } }, t.prototype.pa = function() { null !== this.zu && (this.zu = null, this.Ll()) }, t.prototype.El = function() { this.Fl(this.zi.rightOffset) }, t.prototype.Fl = function(t, e) { var n = this; if (void 0 === e && (e = 400), !isFinite(t)) throw new RangeError("offset is required and must be finite number"); if (!isFinite(e) || e <= 0) throw new RangeError("animationDuration (optional) must be finite positive number"); var r = this.sl,
                            i = performance.now();! function o() { var a = (performance.now() - i) / e,
                                s = a >= 1,
                                u = s ? t : r + (t - r) * a;
                            n.yn(u), s || setTimeout(o, 20) }() }, t.prototype.vt = function(t, e) { this.Zo = !0, this.Yo = t, this.$o.Fo(t, e), this.bl() }, t.prototype.Ol = function() { return this.Jo }, t.prototype.Vl = function() { return this.Go }, t.prototype.Pl = function() { return this.Qo }, t.prototype.ml = function() { return this.Ho || 0 }, t.prototype.Wl = function(t) { var e = t.Lo();
                        this.kl(this.hh / e), this.sl = t.jn() - this.ml(), this.bl(), this.Zo = !0, this.pi.yl(), this.pi.Wr() }, t.prototype.zl = function() { var t = this._l(),
                            e = this.dl();
                        null !== t && null !== e && this.Wl(new Qe(t, e + this.zi.rightOffset)) }, t.prototype.Rl = function(t) { var e = new Qe(t.from, t.to);
                        this.Wl(e) }, t.prototype.yi = function(t) { return void 0 !== this.qu.timeFormatter ? this.qu.timeFormatter(t.Co || t.So) : this.Il.lo(new Date(1e3 * t.So)) }, t.prototype.xl = function() { var t = this.pi.W(),
                            e = t.handleScroll,
                            n = t.handleScale; return !(e.horzTouchDrag || e.mouseWheel || e.pressedMouseMove || e.vertTouchDrag || n.axisDoubleClickReset || n.axisPressedMouseMove.time || n.mouseWheel || n.pinch) }, t.prototype._l = function() { return 0 === this.Yo.length ? null : 0 }, t.prototype.dl = function() { return 0 === this.Yo.length ? null : this.Yo.length - 1 }, t.prototype.jl = function(t) { return (this.hh - 1 - t) / this.hl }, t.prototype.gl = function(t) { var e = this.jl(t),
                            n = this.ml() + this.sl - e; return Math.round(1e6 * n) / 1e6 }, t.prototype.kl = function(t) { var e = this.hl;
                        this.hl = t, this.Ml(), e !== this.hl && (this.Zo = !0, this.ql()) }, t.prototype.ll = function() { if (this.Zo)
                            if (this.Zo = !1, this.wi()) this.Ul(rn.Uo());
                            else { var t = this.ml(),
                                    e = this.hh / this.hl,
                                    n = this.sl + t,
                                    r = new Qe(n - e + 1, n);
                                this.Ul(new rn(r)) } }, t.prototype.Ml = function() { var t = this.Hl(); if (this.hl < t && (this.hl = t, this.Zo = !0), 0 !== this.hh) { var e = .5 * this.hh;
                            this.hl > e && (this.hl = e, this.Zo = !0) } }, t.prototype.Hl = function() { return this.zi.fixLeftEdge && this.zi.fixRightEdge && 0 !== this.Yo.length ? this.hh / this.Yo.length : this.zi.minBarSpacing }, t.prototype.bl = function() { var t = this.Yl();
                        this.sl > t && (this.sl = t, this.Zo = !0); var e = this.$l();
                        null !== e && this.sl < e && (this.sl = e, this.Zo = !0) }, t.prototype.$l = function() { var t = this._l(),
                            e = this.Ho; return null === t || null === e ? null : t - e - 1 + (this.zi.fixLeftEdge ? this.hh / this.hl : Math.min(2, this.Yo.length)) }, t.prototype.Yl = function() { return this.zi.fixRightEdge ? 0 : this.hh / this.hl - Math.min(2, this.Yo.length) }, t.prototype.Bl = function() { this.tl = { ws: this.ws(), Nl: this.Nl() } }, t.prototype.Ll = function() { this.tl = null }, t.prototype.Cl = function(t, e) { var n = this,
                            r = this.Ko.get(e); return void 0 === r && (r = new Ze((function(t) { return n.Kl(t, e) })), this.Ko.set(e, r)), r.lo(t) }, t.prototype.Kl = function(t, e) { var n, r = function(t, e, n) { switch (t) {
                                case 0:
                                case 10:
                                    return e ? n ? 4 : 3 : 2;
                                case 20:
                                case 21:
                                case 22:
                                case 30:
                                case 31:
                                case 32:
                                case 33:
                                    return e ? 3 : 2;
                                case 50:
                                    return 2;
                                case 60:
                                    return 1;
                                case 70:
                                    return 0 } }(e, this.zi.timeVisible, this.zi.secondsVisible); return void 0 !== this.zi.tickMarkFormatter ? this.zi.tickMarkFormatter(null !== (n = t.Co) && void 0 !== n ? n : t.So, r, this.qu.locale) : function(t, e, n) { var r = {}; switch (e) {
                                case 0:
                                    r.year = "numeric"; break;
                                case 1:
                                    r.month = "short"; break;
                                case 2:
                                    r.day = "numeric"; break;
                                case 3:
                                    r.hour12 = !1, r.hour = "2-digit", r.minute = "2-digit"; break;
                                case 4:
                                    r.hour12 = !1, r.hour = "2-digit", r.minute = "2-digit", r.second = "2-digit" } var i = void 0 === t.Co ? new Date(1e3 * t.So) : new Date(Date.UTC(t.Co.year, t.Co.month - 1, t.Co.day)); return new Date(i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate(), i.getUTCHours(), i.getUTCMinutes(), i.getUTCSeconds(), i.getUTCMilliseconds()).toLocaleString(n, r) }(t, r, this.qu.locale) }, t.prototype.Ul = function(t) { var e = this.Xo;
                        this.Xo = t, tn(e.jo(), this.Xo.jo()) || this.Jo.m(), tn(e.qo(), this.Xo.qo()) || this.Go.m(), this.ql() }, t.prototype.ql = function() { this.il = null }, t.prototype.ul = function() { this.ql(), this.Ko.clear() }, t.prototype.rl = function() { var t = this.qu.dateFormat;
                        this.zi.timeVisible ? this.Il = new Ke({ co: t, vo: this.zi.secondsVisible ? "%h:%m:%s" : "%h:%m", _o: "   ", do: this.qu.locale }) : this.Il = new qe(t, this.qu.locale) }, t.prototype.al = function() { if (this.zi.fixLeftEdge) { var t = this._l(); if (null !== t) { var e = this.ss(); if (null !== e) { var n = e.In() - t; if (n < 0) { var r = this.sl - n - 1;
                                        this.yn(r) }
                                    this.Ml() } } } }, t.prototype.ol = function() { this.bl(), this.Ml() }, t }(),
                sn = function(t) {
                    function e(e) { var n = t.call(this) || this; return n.Xl = new Map, n.Bt = e, n } return M(e, t), e.prototype.Y = function(t) {}, e.prototype.K = function(t) { if (this.Bt.yt) { t.save(); for (var e = 0, n = 0, r = this.Bt.Zl; n < r.length; n++)
                                if (0 !== (u = r[n]).Gt.length) { t.font = u.T; var i = this.Jl(t, u.Gt);
                                    i > this.Bt.Ht ? u.Al = this.Bt.Ht / i : u.Al = 1, e += u.Gl * u.Al }
                            var o = 0; switch (this.Bt.Ql) {
                                case "top":
                                    o = 0; break;
                                case "center":
                                    o = Math.max((this.Bt.Yt - e) / 2, 0); break;
                                case "bottom":
                                    o = Math.max(this.Bt.Yt - e, 0) }
                            t.fillStyle = this.Bt.A; for (var a = 0, s = this.Bt.Zl; a < s.length; a++) { var u = s[a];
                                t.save(); var c = 0; switch (this.Bt.tf) {
                                    case "left":
                                        t.textAlign = "left", c = u.Gl / 2; break;
                                    case "center":
                                        t.textAlign = "center", c = this.Bt.Ht / 2; break;
                                    case "right":
                                        t.textAlign = "right", c = this.Bt.Ht - 1 - u.Gl / 2 }
                                t.translate(c, o), t.textBaseline = "top", t.font = u.T, t.scale(u.Al, u.Al), t.fillText(u.Gt, 0, u.if), t.restore(), o += u.Gl * u.Al }
                            t.restore() } }, e.prototype.Jl = function(t, e) { var n = this.nf(t.font),
                            r = n.get(e); return void 0 === r && (r = t.measureText(e).width, n.set(e, r)), r }, e.prototype.nf = function(t) { var e = this.Xl.get(t); return void 0 === e && (e = new Map, this.Xl.set(t, e)), e }, e }(F),
                un = function() {
                    function t(t) { this.ft = !0, this.Wt = { yt: !1, A: "", Yt: 0, Ht: 0, Zl: [], Ql: "center", tf: "center" }, this.zt = new sn(this.Wt), this.Rt = t } return t.prototype.vt = function() { this.ft = !0 }, t.prototype.dt = function(t, e) { return this.ft && (this.wt(t, e), this.ft = !1), this.zt }, t.prototype.wt = function(t, e) { var n = this.Rt.W(),
                            r = this.Wt;
                        r.yt = n.visible, r.yt && (r.A = n.color, r.Ht = e, r.Yt = t, r.tf = n.horzAlign, r.Ql = n.vertAlign, r.Zl = [{ Gt: n.text, T: B(n.fontSize, n.fontFamily, n.fontStyle), Gl: 1.2 * n.fontSize, if: 0, Al: 0 }]) }, t }(),
                cn = function(t) {
                    function e(e, n) { var r = t.call(this) || this; return r.zi = n, r.Hi = new un(r), r } return M(e, t), e.prototype.nn = function() { return [] }, e.prototype.tn = function() { return [this.Hi] }, e.prototype.W = function() { return this.zi }, e.prototype.hn = function() { this.Hi.vt() }, e }(it);! function(t) { t[t.OnTouchEnd = 0] = "OnTouchEnd", t[t.OnNextTap = 1] = "OnNextTap" }(on || (on = {})); var ln, hn, fn, pn = function() {
                function t(t, e) { this.sf = [], this.hf = [], this.hh = 0, this.rf = null, this.ef = null, this.uf = new E, this.af = new E, this.lf = null, this.ff = t, this.zi = e, this.cf = new L(this), this.Da = new an(this, e.timeScale, this.zi.localization), this.ct = new ot(this, e.crosshair), this.vf = new je(e.crosshair), this._f = new cn(this, e.watermark), this.df(), this.sf[0].za(2e3), this.wf = this.Mf(0), this.bf = this.Mf(1) } return t.prototype.Ce = function() { this.mf(new st(3)) }, t.prototype.Wr = function() { this.mf(new st(2)) }, t.prototype.We = function() { this.mf(new st(1)) }, t.prototype.Se = function(t) { var e = this.pf(t);
                    this.mf(e) }, t.prototype.gf = function() { return this.ef }, t.prototype.yf = function(t) { var e = this.ef;
                    this.ef = t, null !== e && this.Se(e.kf), null !== t && this.Se(t.kf) }, t.prototype.W = function() { return this.zi }, t.prototype.Pr = function(t) { k(this.zi, t), this.sf.forEach((function(e) { return e.Oa(t) })), void 0 !== t.timeScale && this.Da.Pr(t.timeScale), void 0 !== t.localization && this.Da.el(t.localization), (t.leftPriceScale || t.rightPriceScale) && this.uf.m(), this.wf = this.Mf(0), this.bf = this.Mf(1), this.Ce() }, t.prototype.Nf = function(t, e) { if ("left" !== t)
                        if ("right" !== t) { var n = this.xf(t);
                            null !== n && (n.Ct.Pr(e), this.uf.m()) } else this.Pr({ rightPriceScale: e });
                    else this.Pr({ leftPriceScale: e }) }, t.prototype.xf = function(t) { for (var e = 0, n = this.sf; e < n.length; e++) { var r = n[e],
                            i = r.Va(t); if (null !== i) return { It: r, Ct: i } } return null }, t.prototype.bt = function() { return this.Da }, t.prototype.Cf = function() { return this.sf }, t.prototype.Sf = function() { return this._f }, t.prototype.Tf = function() { return this.ct }, t.prototype.Df = function() { return this.af }, t.prototype.Af = function(t, e) { t.ia(e), this.yl() }, t.prototype.Ra = function(t) { this.hh = t, this.Da.Ra(this.hh), this.sf.forEach((function(e) { return e.Ra(t) })), this.yl() }, t.prototype.df = function(t) { var e = new He(this.Da, this);
                    void 0 !== t ? this.sf.splice(t, 0, e) : this.sf.push(e); var n = void 0 === t ? this.sf.length - 1 : t,
                        r = new st(3); return r.cn(n, { vn: 0, _n: !0 }), this.mf(r), e }, t.prototype.Ka = function(t, e, n) { t.Ka(e, n) }, t.prototype.Xa = function(t, e, n) { t.Xa(e, n), this.Te(), this.mf(this.Bf(t, 2)) }, t.prototype.Za = function(t, e) { t.Za(e), this.mf(this.Bf(t, 2)) }, t.prototype.Ja = function(t, e, n) { e.Xu() || t.Ja(e, n) }, t.prototype.Ga = function(t, e, n) { e.Xu() || (t.Ga(e, n), this.Te(), this.mf(this.Bf(t, 2))) }, t.prototype.Qa = function(t, e) { e.Xu() || (t.Qa(e), this.mf(this.Bf(t, 2))) }, t.prototype.no = function(t, e) { t.no(e), this.mf(this.Bf(t, 2)) }, t.prototype.Lf = function(t) { this.Da.da(t) }, t.prototype.Ef = function(t, e) { var n = this.bt(); if (!n.wi() && 0 !== e) { var r = n.Ht();
                        t = Math.max(1, Math.min(t, r)), n.Al(t, e), this.yl() } }, t.prototype.Ff = function(t) { this.Of(0), this.Vf(t), this.Pf() }, t.prototype.Wf = function(t) { this.Da.wa(t), this.yl() }, t.prototype.zf = function() { this.Da.Ma(), this.Wr() }, t.prototype.Of = function(t) { this.rf = t, this.Da.ba(t) }, t.prototype.Vf = function(t) { var e = !1; return null !== this.rf && Math.abs(t - this.rf) > 20 && (this.rf = null, e = !0), this.Da.ma(t), this.yl(), e }, t.prototype.Pf = function() { this.Da.pa(), this.Wr(), this.rf = null }, t.prototype._t = function() { return this.hf }, t.prototype.Rf = function(t, e, n) { this.ct.Yi(t, e); var r = NaN,
                        i = this.Da.pl(t),
                        o = this.Da.ss();
                    null !== o && (i = Math.min(Math.max(o.In(), i), o.jn())); var a = n.ji(),
                        s = a.kt();
                    null !== s && (r = a.qi(e, s)), r = this.vf.Je(r, i, n), this.ct.Zi(i, r, n), this.We(), this.af.m(this.ct.Mt(), { x: t, y: e }) }, t.prototype.If = function() { this.Tf().Gi(), this.We(), this.af.m(null, null) }, t.prototype.Te = function() { var t = this.ct.It(); if (null !== t) { var e = this.ct.Ki(),
                            n = this.ct.Xi();
                        this.Rf(e, n, t) }
                    this.ct.hn() }, t.prototype.jf = function(t, e, n) { var r = this.Da.gi(0);
                    void 0 !== e && void 0 !== n && this.Da.vt(e, n); var i = this.Da.gi(0),
                        o = this.Da.ml(),
                        a = this.Da.ss(); if (null !== a && null !== r && null !== i) { var s = a.Uh(o),
                            u = r.So > i.So,
                            c = null !== t && t > o && !u,
                            l = s && this.Da.W().shiftVisibleRangeOnNewBar; if (c && !l) { var h = t - o;
                            this.Da.yn(this.Da.Nl() - h) } }
                    this.Da.Dl(t) }, t.prototype.Be = function(t) { null !== t && t.ho() }, t.prototype.oh = function(t) { var e = this.sf.find((function(e) { return e.oa().includes(t) })); return void 0 === e ? null : e }, t.prototype.yl = function() { this._f.hn(), this.sf.forEach((function(t) { return t.ho() })), this.Te() }, t.prototype.g = function() { this.sf.forEach((function(t) { return t.g() })), this.sf.length = 0, this.zi.localization.priceFormatter = void 0, this.zi.localization.timeFormatter = void 0 }, t.prototype.qf = function() { return this.cf }, t.prototype.dh = function() { return this.cf.W() }, t.prototype.Pa = function() { return this.uf }, t.prototype.Uf = function(t, e) { var n = this.sf[0],
                        r = this.Hf(e, t, n); return this.hf.push(r), 1 === this.hf.length ? this.Ce() : this.Wr(), r }, t.prototype.Yf = function(t) { var e = this.oh(t),
                        n = this.hf.indexOf(t);
                    l(-1 !== n, "Series not found"), this.hf.splice(n, 1), f(e).ca(t), t.g && t.g() }, t.prototype.xe = function(t, e) { var n = f(this.oh(t));
                    n.ca(t); var r = this.xf(e); if (null === r) { var i = t.xi();
                        n.la(t, e, i) } else i = r.It === n ? t.xi() : void 0, r.It.la(t, e, i) }, t.prototype.zl = function() { var t = new st(2);
                    t.Mn(), this.mf(t) }, t.prototype.$f = function(t) { var e = new st(2);
                    e.mn(t), this.mf(e) }, t.prototype.pn = function() { var t = new st(2);
                    t.pn(), this.mf(t) }, t.prototype.gn = function(t) { var e = new st(2);
                    e.gn(t), this.mf(e) }, t.prototype.yn = function(t) { var e = new st(2);
                    e.yn(t), this.mf(e) }, t.prototype.Kf = function() { return this.zi.rightPriceScale.visible ? "right" : "left" }, t.prototype.Xf = function() { return this.bf }, t.prototype.Zf = function() { return this.wf }, t.prototype.Dt = function(t) { var e = this.bf,
                        n = this.wf; if (e === n) return e; if (t = Math.max(0, Math.min(100, Math.round(100 * t))), null === this.lf || this.lf.Pn !== n || this.lf.Wn !== e) this.lf = { Pn: n, Wn: e, Jf: new Map };
                    else { var r = this.lf.Jf.get(t); if (void 0 !== r) return r } var i = function(t, e, n) { var r = x(t),
                            i = r[0],
                            o = r[1],
                            a = r[2],
                            s = r[3],
                            u = x(e),
                            c = u[0],
                            l = u[1],
                            h = u[2],
                            f = u[3],
                            p = [y(i + n * (c - i)), y(o + n * (l - o)), y(a + n * (h - a)), v(s + n * (f - s))]; return "rgba(".concat(p[0], ", ").concat(p[1], ", ").concat(p[2], ", ").concat(p[3], ")") }(n, e, t / 100); return this.lf.Jf.set(t, i), i }, t.prototype.Bf = function(t, e) { var n = new st(e); if (null !== t) { var r = this.sf.indexOf(t);
                        n.cn(r, { vn: e }) } return n }, t.prototype.pf = function(t, e) { return void 0 === e && (e = 2), this.Bf(this.oh(t), e) }, t.prototype.mf = function(t) { this.ff && this.ff(t), this.sf.forEach((function(t) { return t.eo().ou().vt() })) }, t.prototype.Hf = function(t, e, n) { var r = new Me(this, t, e),
                        i = void 0 !== t.priceScaleId ? t.priceScaleId : this.Kf(); return n.la(r, i), at(i) || r.Pr(t), r }, t.prototype.Mf = function(t) { var e = this.zi.layout; return "gradient" === e.background.type ? 0 === t ? e.background.topColor : e.background.bottomColor : e.background.color }, t }();

            function dn(t) { void 0 !== t.borderColor && (t.borderUpColor = t.borderColor, t.borderDownColor = t.borderColor), void 0 !== t.wickColor && (t.wickUpColor = t.wickColor, t.wickDownColor = t.wickColor) }

            function yn(t) { return !A(t) && !P(t) }

            function vn(t) { return A(t) }! function(t) { t[t.Disabled = 0] = "Disabled", t[t.Continuous = 1] = "Continuous", t[t.OnDataUpdate = 2] = "OnDataUpdate" }(ln || (ln = {})),
            function(t) { t[t.LastBar = 0] = "LastBar", t[t.LastVisible = 1] = "LastVisible" }(hn || (hn = {})),
            function(t) { t.Solid = "solid", t.VerticalGradient = "gradient" }(fn || (fn = {})); var mn = function() {
                function t(t, e) { this.Ft = t, this.Ot = e } return t.prototype.br = function(t) { return this.Ft === t.Ft && this.Ot === t.Ot }, t }();

            function gn(t) { return t.ownerDocument && t.ownerDocument.defaultView && t.ownerDocument.defaultView.devicePixelRatio || 1 }

            function bn(t) { var e = f(t.getContext("2d")); return e.setTransform(1, 0, 0, 1, 0, 0), e }

            function wn(t, e) { var n = t.createElement("canvas"),
                    r = gn(n); return n.style.width = "".concat(e.Ft, "px"), n.style.height = "".concat(e.Ot, "px"), n.width = e.Ft * r, n.height = e.Ot * r, n }

            function xn(t, e) { var n = f(t.ownerDocument).createElement("canvas");
                t.appendChild(n); var i, o = (void 0 === (i = { allowDownsampling: !1 }) && (i = r), new s(n, i)); return o.resizeCanvas({ width: e.Ft, height: e.Ot }), o }

            function On(t, e) { return t.Gf - e.Gf }

            function _n(t, e, n) { var r = (t.Gf - e.Gf) / (t.rt - e.rt); return Math.sign(r) * Math.min(Math.abs(r), n) } var Mn = function() {
                    function t(t, e, n, r) { this.Qf = null, this.tc = null, this.ic = null, this.nc = null, this.sc = null, this.hc = 0, this.rc = 0, this.ec = !1, this.uc = t, this.ac = e, this.oc = n, this.Cn = r } return t.prototype.lc = function(t, e) { if (null !== this.Qf) { if (this.Qf.rt === e) return void(this.Qf.Gf = t); if (Math.abs(this.Qf.Gf - t) < this.Cn) return }
                        this.nc = this.ic, this.ic = this.tc, this.tc = this.Qf, this.Qf = { rt: e, Gf: t } }, t.prototype.xh = function(t, e) { if (null !== this.Qf && null !== this.tc && !(e - this.Qf.rt > 50)) { var n = 0,
                                r = _n(this.Qf, this.tc, this.ac),
                                i = On(this.Qf, this.tc),
                                o = [r],
                                a = [i]; if (n += i, null !== this.ic) { var s = _n(this.tc, this.ic, this.ac); if (Math.sign(s) === Math.sign(r)) { var u = On(this.tc, this.ic); if (o.push(s), a.push(u), n += u, null !== this.nc) { var c = _n(this.ic, this.nc, this.ac); if (Math.sign(c) === Math.sign(r)) { var l = On(this.ic, this.nc);
                                            o.push(c), a.push(l), n += l } } } } for (var h, f, p, d = 0, y = 0; y < o.length; ++y) d += a[y] / n * o[y];
                            Math.abs(d) < this.uc || (this.sc = { Gf: t, rt: e }, this.rc = d, this.hc = (h = Math.abs(d), f = this.oc, p = Math.log(f), Math.log(1 * p / -h) / p)) } }, t.prototype.fc = function(t) { var e = f(this.sc),
                            n = t - e.rt; return e.Gf + this.rc * (Math.pow(this.oc, n) - 1) / Math.log(this.oc) }, t.prototype.cc = function(t) { return null === this.sc || this.vc(t) === this.hc }, t.prototype._c = function() { return this.ec }, t.prototype.dc = function() { this.ec = !0 }, t.prototype.vc = function(t) { var e = t - f(this.sc).rt; return Math.min(e, this.hc) }, t }(),
                jn = "undefined" != typeof window;

            function Sn() { return !!jn && window.navigator.userAgent.toLowerCase().indexOf("firefox") > -1 }

            function En() { return !!jn && /iPhone|iPad|iPod/.test(window.navigator.platform) } var kn = function() {
                function t(t, e, n) { var r = this;
                    this.wc = 0, this.Mc = null, this.bc = { tt: Number.NEGATIVE_INFINITY, it: Number.POSITIVE_INFINITY }, this.mc = 0, this.gc = null, this.yc = { tt: Number.NEGATIVE_INFINITY, it: Number.POSITIVE_INFINITY }, this.kc = null, this.Nc = !1, this.xc = null, this.Cc = null, this.Sc = !1, this.Tc = !1, this.Dc = !1, this.Ac = null, this.Bc = null, this.Lc = null, this.Ec = null, this.Fc = null, this.Oc = null, this.Vc = null, this.Pc = 0, this.Wc = !1, this.zc = !1, this.Rc = !1, this.Ic = 0, this.jc = null, this.qc = !En(), this.Uc = function(t) { r.Hc(t) }, this.Yc = function(t) { if (r.$c(t)) { var e = r.Kc(t);++r.mc, r.gc && r.mc > 1 && (r.Zc(Pn(t), r.yc).Xc < 30 && !r.Dc && r.Jc(e, r.Qc.Gc), r.tv()) } else e = r.Kc(t), ++r.wc, r.Mc && r.wc > 1 && (r.Zc(Pn(t), r.bc).Xc < 5 && !r.Tc && r.iv(e, r.Qc.nv), r.sv()) }, this.hv = t, this.Qc = e, this.zi = n, this.rv() } return t.prototype.g = function() { null !== this.Ac && (this.Ac(), this.Ac = null), null !== this.Bc && (this.Bc(), this.Bc = null), null !== this.Ec && (this.Ec(), this.Ec = null), null !== this.Fc && (this.Fc(), this.Fc = null), null !== this.Oc && (this.Oc(), this.Oc = null), null !== this.Lc && (this.Lc(), this.Lc = null), this.ev(), this.sv() }, t.prototype.uv = function(t) { var e = this;
                    this.Ec && this.Ec(); var n = this.av.bind(this); if (this.Ec = function() { e.hv.removeEventListener("mousemove", n) }, this.hv.addEventListener("mousemove", n), !this.$c(t)) { var r = this.Kc(t);
                        this.iv(r, this.Qc.ov), this.qc = !0 } }, t.prototype.sv = function() { null !== this.Mc && clearTimeout(this.Mc), this.wc = 0, this.Mc = null, this.bc = { tt: Number.NEGATIVE_INFINITY, it: Number.POSITIVE_INFINITY } }, t.prototype.tv = function() { null !== this.gc && clearTimeout(this.gc), this.mc = 0, this.gc = null, this.yc = { tt: Number.NEGATIVE_INFINITY, it: Number.POSITIVE_INFINITY } }, t.prototype.av = function(t) { if (!this.Rc && null === this.Cc && !this.$c(t)) { var e = this.Kc(t);
                        this.iv(e, this.Qc.lv), this.qc = !0 } }, t.prototype.fv = function(t) { var e = Dn(t.changedTouches, f(this.jc)); if (null !== e && (this.Ic = Tn(t), null === this.Vc && !this.zc)) { this.Wc = !0; var n = this.Zc(Pn(e), f(this.Cc)),
                            r = n.cv,
                            i = n.vv,
                            o = n.Xc; if (this.Sc || !(o < 5)) { if (!this.Sc) { var a = .5 * r,
                                    s = i >= a && !this.zi._v(),
                                    u = a > i && !this.zi.dv();
                                s || u || (this.zc = !0), this.Sc = !0, this.Dc = !0, this.ev(), this.tv() } if (!this.zc) { var c = this.Kc(t, e);
                                this.Jc(c, this.Qc.wv), Cn(t) } } } }, t.prototype.Mv = function(t) { if (0 === t.button && (this.Zc(Pn(t), f(this.xc)).Xc >= 5 && (this.Tc = !0, this.sv()), this.Tc)) { var e = this.Kc(t);
                        this.iv(e, this.Qc.bv) } }, t.prototype.Zc = function(t, e) { var n = Math.abs(e.tt - t.tt),
                        r = Math.abs(e.it - t.it); return { cv: n, vv: r, Xc: n + r } }, t.prototype.mv = function(t) { var e = Dn(t.changedTouches, f(this.jc)); if (null === e && 0 === t.touches.length && (e = t.changedTouches[0]), null !== e) { this.jc = null, this.Ic = Tn(t), this.ev(), this.Cc = null, this.Oc && (this.Oc(), this.Oc = null); var n = this.Kc(t, e);
                        this.Jc(n, this.Qc.pv), ++this.mc, this.gc && this.mc > 1 ? (this.Zc(Pn(e), this.yc).Xc < 30 && !this.Dc && this.Jc(n, this.Qc.Gc), this.tv()) : this.Dc || (this.Jc(n, this.Qc.gv), this.Qc.gv && Cn(t)), 0 === this.mc && Cn(t), 0 === t.touches.length && this.Nc && (this.Nc = !1, Cn(t)) } }, t.prototype.Hc = function(t) { if (0 === t.button) { var e = this.Kc(t);
                        this.xc = null, this.Rc = !1, this.Fc && (this.Fc(), this.Fc = null), Sn() && this.hv.ownerDocument.documentElement.removeEventListener("mouseleave", this.Uc), this.$c(t) || (this.iv(e, this.Qc.yv), ++this.wc, this.Mc && this.wc > 1 ? (this.Zc(Pn(t), this.bc).Xc < 5 && !this.Tc && this.iv(e, this.Qc.nv), this.sv()) : this.Tc || this.iv(e, this.Qc.kv)) } }, t.prototype.ev = function() { null !== this.kc && (clearTimeout(this.kc), this.kc = null) }, t.prototype.Nv = function(t) { if (null === this.jc) { var e = t.changedTouches[0];
                        this.jc = e.identifier, this.Ic = Tn(t); var n = this.hv.ownerDocument.documentElement;
                        this.Dc = !1, this.Sc = !1, this.zc = !1, this.Cc = Pn(e), this.Oc && (this.Oc(), this.Oc = null); var r = this.fv.bind(this),
                            i = this.mv.bind(this);
                        this.Oc = function() { n.removeEventListener("touchmove", r), n.removeEventListener("touchend", i) }, n.addEventListener("touchmove", r, { passive: !1 }), n.addEventListener("touchend", i, { passive: !1 }), this.ev(), this.kc = setTimeout(this.xv.bind(this, t), 240); var o = this.Kc(t, e);
                        this.Jc(o, this.Qc.Cv), this.gc || (this.mc = 0, this.gc = setTimeout(this.tv.bind(this), 500), this.yc = Pn(e)) } }, t.prototype.Sv = function(t) { if (0 === t.button) { var e = this.hv.ownerDocument.documentElement;
                        Sn() && e.addEventListener("mouseleave", this.Uc), this.Tc = !1, this.xc = Pn(t), this.Fc && (this.Fc(), this.Fc = null); var n = this.Mv.bind(this),
                            r = this.Hc.bind(this); if (this.Fc = function() { e.removeEventListener("mousemove", n), e.removeEventListener("mouseup", r) }, e.addEventListener("mousemove", n), e.addEventListener("mouseup", r), this.Rc = !0, !this.$c(t)) { var i = this.Kc(t);
                            this.iv(i, this.Qc.Tv), this.Mc || (this.wc = 0, this.Mc = setTimeout(this.sv.bind(this), 500), this.bc = Pn(t)) } } }, t.prototype.rv = function() { var t = this;
                    this.hv.addEventListener("mouseenter", this.uv.bind(this)), this.hv.addEventListener("touchcancel", this.ev.bind(this)); var e = this.hv.ownerDocument,
                        n = function(e) { t.Qc.Dv && (e.target && t.hv.contains(e.target) || t.Qc.Dv()) };
                    this.Bc = function() { e.removeEventListener("touchstart", n) }, this.Ac = function() { e.removeEventListener("mousedown", n) }, e.addEventListener("mousedown", n), e.addEventListener("touchstart", n, { passive: !0 }), En() && (this.Lc = function() { t.hv.removeEventListener("dblclick", t.Yc) }, this.hv.addEventListener("dblclick", this.Yc)), this.hv.addEventListener("mouseleave", this.Av.bind(this)), this.hv.addEventListener("touchstart", this.Nv.bind(this), { passive: !0 }),
                        function(t) { jn && void 0 !== window.chrome && t.addEventListener("mousedown", (function(t) { if (1 === t.button) return t.preventDefault(), !1 })) }(this.hv), this.hv.addEventListener("mousedown", this.Sv.bind(this)), this.Bv(), this.hv.addEventListener("touchmove", (function() {}), { passive: !1 }) }, t.prototype.Bv = function() { var t = this;
                    void 0 === this.Qc.Lv && void 0 === this.Qc.Ev && void 0 === this.Qc.Fv || (this.hv.addEventListener("touchstart", (function(e) { return t.Ov(e.touches) }), { passive: !0 }), this.hv.addEventListener("touchmove", (function(e) { if (2 === e.touches.length && null !== t.Vc && void 0 !== t.Qc.Ev) { var n = An(e.touches[0], e.touches[1]) / t.Pc;
                            t.Qc.Ev(t.Vc, n), Cn(e) } }), { passive: !1 }), this.hv.addEventListener("touchend", (function(e) { t.Ov(e.touches) }))) }, t.prototype.Ov = function(t) { 1 === t.length && (this.Wc = !1), 2 !== t.length || this.Wc || this.Nc ? this.Vv() : this.Pv(t) }, t.prototype.Pv = function(t) { var e = this.hv.getBoundingClientRect() || { left: 0, top: 0 };
                    this.Vc = { tt: (t[0].clientX - e.left + (t[1].clientX - e.left)) / 2, it: (t[0].clientY - e.top + (t[1].clientY - e.top)) / 2 }, this.Pc = An(t[0], t[1]), void 0 !== this.Qc.Lv && this.Qc.Lv(), this.ev() }, t.prototype.Vv = function() { null !== this.Vc && (this.Vc = null, void 0 !== this.Qc.Fv && this.Qc.Fv()) }, t.prototype.Av = function(t) { if (this.Ec && this.Ec(), !this.$c(t) && this.qc) { var e = this.Kc(t);
                        this.iv(e, this.Qc.Wv), this.qc = !En() } }, t.prototype.xv = function(t) { var e = Dn(t.touches, f(this.jc)); if (null !== e) { var n = this.Kc(t, e);
                        this.Jc(n, this.Qc.zv), this.Dc = !0, this.Nc = !0 } }, t.prototype.$c = function(t) { return t.sourceCapabilities && void 0 !== t.sourceCapabilities.firesTouchEvents ? t.sourceCapabilities.firesTouchEvents : Tn(t) < this.Ic + 500 }, t.prototype.Jc = function(t, e) { e && e.call(this.Qc, t) }, t.prototype.iv = function(t, e) { e && e.call(this.Qc, t) }, t.prototype.Kc = function(t, e) { var n = e || t,
                        r = this.hv.getBoundingClientRect() || { left: 0, top: 0 }; return { Rv: n.clientX, Iv: n.clientY, jv: n.pageX, qv: n.pageY, Uv: n.screenX, Hv: n.screenY, Yv: n.clientX - r.left, $v: n.clientY - r.top, Kv: t.ctrlKey, Xv: t.altKey, Zv: t.shiftKey, Jv: t.metaKey, Gv: !t.type.startsWith("mouse") && "contextmenu" !== t.type && "click" !== t.type, Qv: t.type, t_: n.target, i_: t.view, n_: function() { "touchstart" !== t.type && Cn(t) } } }, t }();

            function An(t, e) { var n = t.clientX - e.clientX,
                    r = t.clientY - e.clientY; return Math.sqrt(n * n + r * r) }

            function Cn(t) { t.cancelable && t.preventDefault() }

            function Pn(t) { return { tt: t.pageX, it: t.pageY } }

            function Tn(t) { return t.timeStamp || performance.now() }

            function Dn(t, e) { for (var n = 0; n < t.length; ++n)
                    if (t[n].identifier === e) return t[n];
                return null } var Nn = function() {
                    function t(t, e, n, r) { this.rh = new Gt(200), this.R = 0, this.s_ = "", this.Yh = "", this.th = [], this.h_ = new Map, this.R = t, this.s_ = e, this.Yh = B(t, n, r) } return t.prototype.g = function() { this.rh.ih(), this.th = [], this.h_.clear() }, t.prototype.r_ = function(t, e, n, r, i) { var o = this.e_(t, e); if ("left" !== i) { var a = gn(t.canvas);
                            n -= Math.floor(o.u_ * a) }
                        r -= Math.floor(o.Yt / 2), t.drawImage(o.a_, n, r, o.Ht, o.Yt) }, t.prototype.e_ = function(t, e) { var n, r = this; if (this.h_.has(e)) n = h(this.h_.get(e));
                        else { if (this.th.length >= 200) { var i = h(this.th.shift());
                                this.h_.delete(i) } var o = gn(t.canvas),
                                a = Math.ceil(this.R / 4.5),
                                s = Math.round(this.R / 10),
                                u = Math.ceil(this.rh.Qt(t, e)),
                                c = Pt(Math.round(u + 2 * a)),
                                l = Pt(this.R + 2 * a),
                                f = wn(document, new mn(c, l));
                            n = { Gt: e, u_: Math.round(Math.max(1, u)), Ht: Math.ceil(c * o), Yt: Math.ceil(l * o), a_: f }, 0 !== u && (this.th.push(n.Gt), this.h_.set(n.Gt, n)), q(t = bn(n.a_), o, (function() { t.font = r.Yh, t.fillStyle = r.s_, t.fillText(e, 0, l - a - s) })) } return n }, t }(),
                Rn = function() {
                    function t(t, e, n, r) { var i = this;
                        this._i = null, this.o_ = null, this.l_ = !1, this.f_ = new Gt(50), this.c_ = new Nn(11, "#000"), this.s_ = null, this.Yh = null, this.v_ = 0, this.__ = !1, this.d_ = function() { i.w_(i.cf.W()), i.__ || i.Di.M_().jt().Wr() }, this.b_ = function() { i.__ || i.Di.M_().jt().Wr() }, this.Di = t, this.zi = e, this.cf = n, this.m_ = "left" === r, this.p_ = document.createElement("div"), this.p_.style.height = "100%", this.p_.style.overflow = "hidden", this.p_.style.width = "25px", this.p_.style.left = "0", this.p_.style.position = "relative", this.g_ = xn(this.p_, new mn(16, 16)), this.g_.subscribeCanvasConfigured(this.d_); var o = this.g_.canvas;
                        o.style.position = "absolute", o.style.zIndex = "1", o.style.left = "0", o.style.top = "0", this.y_ = xn(this.p_, new mn(16, 16)), this.y_.subscribeCanvasConfigured(this.b_); var a = this.y_.canvas;
                        a.style.position = "absolute", a.style.zIndex = "2", a.style.left = "0", a.style.top = "0"; var s = { Tv: this.k_.bind(this), Cv: this.k_.bind(this), bv: this.N_.bind(this), wv: this.N_.bind(this), Dv: this.x_.bind(this), yv: this.C_.bind(this), pv: this.C_.bind(this), nv: this.S_.bind(this), Gc: this.S_.bind(this), ov: this.T_.bind(this), Wv: this.D_.bind(this) };
                        this.A_ = new kn(this.y_.canvas, s, { _v: function() { return !1 }, dv: function() { return !0 } }) } return t.prototype.g = function() { this.A_.g(), this.y_.unsubscribeCanvasConfigured(this.b_), this.y_.destroy(), this.g_.unsubscribeCanvasConfigured(this.d_), this.g_.destroy(), null !== this._i && this._i._a().M(this), this._i = null, this.c_.g() }, t.prototype.B_ = function() { return this.p_ }, t.prototype.ht = function() { return f(this._i).W().borderColor }, t.prototype.L_ = function() { return this.zi.textColor }, t.prototype.S = function() { return this.zi.fontSize }, t.prototype.E_ = function() { return B(this.S(), this.zi.fontFamily) }, t.prototype.F_ = function() { var t = this.cf.W(),
                            e = this.s_ !== t.A,
                            n = this.Yh !== t.T; return (e || n) && (this.w_(t), this.s_ = t.A), n && (this.f_.ih(), this.Yh = t.T), t }, t.prototype.O_ = function() { if (null === this._i) return 0; var t = 0,
                            e = this.F_(),
                            n = bn(this.g_.canvas),
                            r = this._i.au();
                        n.font = this.E_(), r.length > 0 && (t = Math.max(this.f_.Qt(n, r[0].yu), this.f_.Qt(n, r[r.length - 1].yu))); for (var i = this.V_(), o = i.length; o--;) { var a = this.f_.Qt(n, i[o].Gt());
                            a > t && (t = a) } var s = this._i.kt(); if (null !== s && null !== this.o_) { var u = this._i.qi(1, s),
                                c = this._i.qi(this.o_.Ot - 2, s);
                            t = Math.max(t, this.f_.Qt(n, this._i.Mi(Math.floor(Math.min(u, c)) + .11111111111111, s)), this.f_.Qt(n, this._i.Mi(Math.ceil(Math.max(u, c)) - .11111111111111, s))) } var l = t || 34,
                            h = Math.ceil(e.N + e.C + e.L + e.F + l); return h + h % 2 }, t.prototype.P_ = function(t) { if (t.Ft < 0 || t.Ot < 0) throw new Error("Try to set invalid size to PriceAxisWidget " + JSON.stringify(t));
                        null !== this.o_ && this.o_.br(t) || (this.o_ = t, this.__ = !0, this.g_.resizeCanvas({ width: t.Ft, height: t.Ot }), this.y_.resizeCanvas({ width: t.Ft, height: t.Ot }), this.__ = !1, this.p_.style.width = t.Ft + "px", this.p_.style.height = t.Ot + "px", this.p_.style.minWidth = t.Ft + "px") }, t.prototype.W_ = function() { return f(this.o_).Ft }, t.prototype.Si = function(t) { this._i !== t && (null !== this._i && this._i._a().M(this), this._i = t, t._a().u(this.Eu.bind(this), this)) }, t.prototype.Ct = function() { return this._i }, t.prototype.ih = function() { var t = this.Di.z_();
                        this.Di.M_().jt().no(t, f(this.Ct())) }, t.prototype.R_ = function(t) { if (null !== this.o_) { if (1 !== t) { var e = bn(this.g_.canvas);
                                this.I_(), this.j_(e, this.g_.pixelRatio), this.Rs(e, this.g_.pixelRatio), this.q_(e, this.g_.pixelRatio), this.U_(e, this.g_.pixelRatio) } var n = bn(this.y_.canvas),
                                r = this.o_.Ft,
                                i = this.o_.Ot;
                            q(n, this.y_.pixelRatio, (function() { n.clearRect(0, 0, r, i) })), this.H_(n, this.y_.pixelRatio) } }, t.prototype.Y_ = function() { return this.g_.canvas }, t.prototype.vt = function() { var t;
                        null === (t = this._i) || void 0 === t || t.au() }, t.prototype.k_ = function(t) { if (null !== this._i && !this._i.wi() && this.Di.M_().W().handleScale.axisPressedMouseMove.price) { var e = this.Di.M_().jt(),
                                n = this.Di.z_();
                            this.l_ = !0, e.Ka(n, this._i, t.$v) } }, t.prototype.N_ = function(t) { if (null !== this._i && this.Di.M_().W().handleScale.axisPressedMouseMove.price) { var e = this.Di.M_().jt(),
                                n = this.Di.z_(),
                                r = this._i;
                            e.Xa(n, r, t.$v) } }, t.prototype.x_ = function() { if (null !== this._i && this.Di.M_().W().handleScale.axisPressedMouseMove.price) { var t = this.Di.M_().jt(),
                                e = this.Di.z_(),
                                n = this._i;
                            this.l_ && (this.l_ = !1, t.Za(e, n)) } }, t.prototype.C_ = function(t) { if (null !== this._i && this.Di.M_().W().handleScale.axisPressedMouseMove.price) { var e = this.Di.M_().jt(),
                                n = this.Di.z_();
                            this.l_ = !1, e.Za(n, this._i) } }, t.prototype.S_ = function(t) { this.Di.M_().W().handleScale.axisDoubleClickReset && this.ih() }, t.prototype.T_ = function(t) { null !== this._i && (!this.Di.M_().jt().W().handleScale.axisPressedMouseMove.price || this._i.vr() || this._i.Zu() || this.K_(1)) }, t.prototype.D_ = function(t) { this.K_(0) }, t.prototype.V_ = function() { var t = this,
                            e = [],
                            n = null === this._i ? void 0 : this._i; return function(r) { for (var i = 0; i < r.length; ++i)
                                for (var o = r[i].nn(t.Di.z_(), n), a = 0; a < o.length; a++) e.push(o[a]) }(this.Di.z_().oa()), e }, t.prototype.j_ = function(t, e) { var n = this; if (null !== this.o_) { var r = this.o_.Ft,
                                i = this.o_.Ot;
                            q(t, e, (function() { var e = n.Di.z_().jt(),
                                    o = e.Zf(),
                                    a = e.Xf();
                                o === a ? J(t, 0, 0, r, i, o) : $(t, 0, 0, r, i, o, a) })) } }, t.prototype.Rs = function(t, e) { if (null !== this.o_ && null !== this._i && this._i.W().borderVisible) { t.save(), t.fillStyle = this.ht(); var n, r = Math.max(1, Math.floor(this.F_().N * e));
                            n = this.m_ ? Math.floor(this.o_.Ft * e) - r : 0, t.fillRect(n, 0, r, Math.ceil(this.o_.Ot * e)), t.restore() } }, t.prototype.q_ = function(t, e) { if (null !== this.o_ && null !== this._i) { var n = this._i.au();
                            t.save(), t.strokeStyle = this.ht(), t.font = this.E_(), t.fillStyle = this.ht(); var r = this.F_(),
                                i = this._i.W().borderVisible && this._i.W().drawTicks,
                                o = this.m_ ? Math.floor((this.o_.Ft - r.C) * e - r.N * e) : Math.floor(r.N * e),
                                a = this.m_ ? Math.round(o - r.L * e) : Math.round(o + r.C * e + r.L * e),
                                s = this.m_ ? "right" : "left",
                                u = Math.max(1, Math.floor(e)),
                                c = Math.floor(.5 * e); if (i) { var l = Math.round(r.C * e);
                                t.beginPath(); for (var h = 0, f = n; h < f.length; h++) { var p = f[h];
                                    t.rect(o, Math.round(p.su * e) - c, l, u) }
                                t.fill() }
                            t.fillStyle = this.L_(); for (var d = 0, y = n; d < y.length; d++) p = y[d], this.c_.r_(t, p.yu, a, Math.round(p.su * e), s);
                            t.restore() } }, t.prototype.I_ = function() { if (null !== this.o_ && null !== this._i) { var t = this.o_.Ot / 2,
                                e = [],
                                n = this._i.oa().slice(),
                                r = this.Di.z_(),
                                i = this.F_();
                            this._i === r.fh() && this.Di.z_().oa().forEach((function(t) { r.lh(t) && n.push(t) })); var o = this._i.Ge()[0],
                                a = this._i;
                            n.forEach((function(n) { var i = n.nn(r, a);
                                i.forEach((function(t) { t.oi(null), t.li() && e.push(t) })), o === n && i.length > 0 && (t = i[0].ti()) })); var s = e.filter((function(e) { return e.ti() <= t })),
                                u = e.filter((function(e) { return e.ti() > t })); if (s.sort((function(t, e) { return e.ti() - t.ti() })), s.length && u.length && u.push(s[0]), u.sort((function(t, e) { return t.ti() - e.ti() })), e.forEach((function(t) { return t.oi(t.ti()) })), this._i.W().alignLabels) { for (var c = 1; c < s.length; c++) { var l = s[c],
                                        h = (p = s[c - 1]).Yt(i, !1);
                                    l.ti() > (d = p.ai()) - h && l.oi(d - h) } for (var f = 1; f < u.length; f++) { var p, d;
                                    l = u[f], h = (p = u[f - 1]).Yt(i, !0), l.ti() < (d = p.ai()) + h && l.oi(d + h) } } } }, t.prototype.U_ = function(t, e) { var n = this; if (null !== this.o_) { t.save(); var r = this.o_,
                                i = this.V_(),
                                o = this.F_(),
                                a = this.m_ ? "right" : "left";
                            i.forEach((function(i) { if (i.fi()) { var s = i.dt(f(n._i));
                                    t.save(), s.H(t, o, n.f_, r.Ft, a, e), t.restore() } })), t.restore() } }, t.prototype.H_ = function(t, e) { var n = this; if (null !== this.o_ && null !== this._i) { t.save(); var r = this.o_,
                                i = this.Di.M_().jt(),
                                o = [],
                                a = this.Di.z_(),
                                s = i.Tf().nn(a, this._i);
                            s.length && o.push(s); var u = this.F_(),
                                c = this.m_ ? "right" : "left";
                            o.forEach((function(i) { i.forEach((function(i) { t.save(), i.dt(f(n._i)).H(t, u, n.f_, r.Ft, c, e), t.restore() })) })), t.restore() } }, t.prototype.K_ = function(t) { this.p_.style.cursor = 1 === t ? "ns-resize" : "default" }, t.prototype.Eu = function() { var t = this.O_();
                        this.v_ < t && this.Di.M_().jt().Ce(), this.v_ = t }, t.prototype.w_ = function(t) { this.c_.g(), this.c_ = new Nn(t.S, t.A, t.D) }, t }();

            function In(t, e, n, r, i) { t.$ && t.$(e, n, r, i) }

            function Bn(t, e, n, r, i) { t.H(e, n, r, i) }

            function Ln(t, e) { return t.tn(e) }

            function zn(t, e) { return void 0 !== t.Pe ? t.Pe(e) : [] } var Fn = function() {
                    function t(t, e) { var n = this;
                        this.o_ = new mn(0, 0), this.X_ = null, this.Z_ = null, this.J_ = null, this.G_ = !1, this.Q_ = new E, this.td = 0, this.nd = !1, this.sd = null, this.hd = !1, this.rd = null, this.ed = null, this.__ = !1, this.d_ = function() { n.__ || null === n.ud || n.pi().Wr() }, this.b_ = function() { n.__ || null === n.ud || n.pi().Wr() }, this.ad = t, this.ud = e, this.ud.ro().u(this.od.bind(this), this, !0), this.ld = document.createElement("td"), this.ld.style.padding = "0", this.ld.style.position = "relative"; var r = document.createElement("div");
                        r.style.width = "100%", r.style.height = "100%", r.style.position = "relative", r.style.overflow = "hidden", this.fd = document.createElement("td"), this.fd.style.padding = "0", this.vd = document.createElement("td"), this.vd.style.padding = "0", this.ld.appendChild(r), this.g_ = xn(r, new mn(16, 16)), this.g_.subscribeCanvasConfigured(this.d_); var i = this.g_.canvas;
                        i.style.position = "absolute", i.style.zIndex = "1", i.style.left = "0", i.style.top = "0", this.y_ = xn(r, new mn(16, 16)), this.y_.subscribeCanvasConfigured(this.b_); var o = this.y_.canvas;
                        o.style.position = "absolute", o.style.zIndex = "2", o.style.left = "0", o.style.top = "0", this._d = document.createElement("tr"), this._d.appendChild(this.fd), this._d.appendChild(this.ld), this._d.appendChild(this.vd), this.dd(), this.A_ = new kn(this.y_.canvas, this, { _v: function() { return null === n.sd && !n.ad.W().handleScroll.vertTouchDrag }, dv: function() { return null === n.sd && !n.ad.W().handleScroll.horzTouchDrag } }) } return t.prototype.g = function() { null !== this.X_ && this.X_.g(), null !== this.Z_ && this.Z_.g(), this.y_.unsubscribeCanvasConfigured(this.b_), this.y_.destroy(), this.g_.unsubscribeCanvasConfigured(this.d_), this.g_.destroy(), null !== this.ud && this.ud.ro().M(this), this.A_.g() }, t.prototype.z_ = function() { return f(this.ud) }, t.prototype.wd = function(e) { null !== this.ud && this.ud.ro().M(this), this.ud = e, null !== this.ud && this.ud.ro().u(t.prototype.od.bind(this), this, !0), this.dd() }, t.prototype.M_ = function() { return this.ad }, t.prototype.B_ = function() { return this._d }, t.prototype.dd = function() { if (null !== this.ud && (this.Md(), 0 !== this.pi()._t().length)) { if (null !== this.X_) { var t = this.ud.Ya();
                                this.X_.Si(f(t)) } if (null !== this.Z_) { var e = this.ud.$a();
                                this.Z_.Si(f(e)) } } }, t.prototype.bd = function() { null !== this.X_ && this.X_.vt(), null !== this.Z_ && this.Z_.vt() }, t.prototype.Wa = function() { return null !== this.ud ? this.ud.Wa() : 0 }, t.prototype.za = function(t) { this.ud && this.ud.za(t) }, t.prototype.ov = function(t) { if (this.ud) { this.md(); var e = t.Yv,
                                n = t.$v;
                            this.pd(e, n) } }, t.prototype.Tv = function(t) { this.md(), this.gd(), this.pd(t.Yv, t.$v) }, t.prototype.lv = function(t) { if (this.ud) { this.md(); var e = t.Yv,
                                n = t.$v;
                            this.pd(e, n); var r = this.$h(e, n);
                            this.pi().yf(r && { kf: r.kf, yd: r.yd }) } }, t.prototype.kv = function(t) { if (null !== this.ud) { this.md(); var e = t.Yv,
                                n = t.$v; if (this.Q_.p()) { var r = this.pi().Tf().Mt();
                                this.Q_.m(r, { x: e, y: n }) } } }, t.prototype.bv = function(t) { this.md(), this.kd(t), this.pd(t.Yv, t.$v) }, t.prototype.yv = function(t) { null !== this.ud && (this.md(), this.nd = !1, this.Nd(t)) }, t.prototype.zv = function(t) { if (this.nd = !0, null === this.sd) { var e = { x: t.Yv, y: t.$v };
                            this.xd(e, e) } }, t.prototype.Wv = function(t) { null !== this.ud && (this.md(), this.ud.jt().yf(null), this.Cd()) }, t.prototype.Sd = function() { return this.Q_ }, t.prototype.Lv = function() { this.td = 1, this.Td() }, t.prototype.Ev = function(t, e) { if (this.ad.W().handleScale.pinch) { var n = 5 * (e - this.td);
                            this.td = e, this.pi().Ef(t.tt, n) } }, t.prototype.Cv = function(t) { if (this.nd = !1, this.hd = null !== this.sd, this.gd(), null !== this.sd) { var e = this.pi().Tf();
                            this.rd = { x: e.$t(), y: e.Kt() }, this.sd = { x: t.Yv, y: t.$v } } }, t.prototype.wv = function(t) { if (null !== this.ud) { var e = t.Yv,
                                n = t.$v; if (null === this.sd) this.kd(t);
                            else { this.hd = !1; var r = f(this.rd),
                                    i = r.x + (e - this.sd.x),
                                    o = r.y + (n - this.sd.y);
                                this.pd(i, o) } } }, t.prototype.pv = function(t) { 0 === this.M_().W().trackingMode.exitMode && (this.hd = !0), this.Dd(), this.Nd(t) }, t.prototype.$h = function(t, e) { var n = this.ud; if (null === n) return null; for (var r = 0, i = n.oa(); r < i.length; r++) { var o = i[r],
                                a = this.Ad(o.tn(n), t, e); if (null !== a) return { kf: o, i_: a.i_, yd: a.yd } } return null }, t.prototype.Bd = function(t, e) { f("left" === e ? this.X_ : this.Z_).P_(new mn(t, this.o_.Ot)) }, t.prototype.Ld = function() { return this.o_ }, t.prototype.P_ = function(t) { if (t.Ft < 0 || t.Ot < 0) throw new Error("Try to set invalid size to PaneWidget " + JSON.stringify(t));
                        this.o_.br(t) || (this.o_ = t, this.__ = !0, this.g_.resizeCanvas({ width: t.Ft, height: t.Ot }), this.y_.resizeCanvas({ width: t.Ft, height: t.Ot }), this.__ = !1, this.ld.style.width = t.Ft + "px", this.ld.style.height = t.Ot + "px") }, t.prototype.Ed = function() { var t = f(this.ud);
                        t.Ha(t.Ya()), t.Ha(t.$a()); for (var e = 0, n = t.Ge(); e < n.length; e++) { var r = n[e]; if (t.lh(r)) { var i = r.Ct();
                                null !== i && t.Ha(i), r.hn() } } }, t.prototype.Y_ = function() { return this.g_.canvas }, t.prototype.R_ = function(t) { if (0 !== t && null !== this.ud) { if (t > 1 && this.Ed(), null !== this.X_ && this.X_.R_(t), null !== this.Z_ && this.Z_.R_(t), 1 !== t) { var e = bn(this.g_.canvas);
                                e.save(), this.j_(e, this.g_.pixelRatio), this.ud && (this.Fd(e, this.g_.pixelRatio), this.Od(e, this.g_.pixelRatio), this.Vd(e, this.g_.pixelRatio, Ln)), e.restore() } var n = bn(this.y_.canvas);
                            n.clearRect(0, 0, Math.ceil(this.o_.Ft * this.y_.pixelRatio), Math.ceil(this.o_.Ot * this.y_.pixelRatio)), this.Vd(n, this.g_.pixelRatio, zn), this.Pd(n, this.y_.pixelRatio) } }, t.prototype.Wd = function() { return this.X_ }, t.prototype.zd = function() { return this.Z_ }, t.prototype.od = function() { null !== this.ud && this.ud.ro().M(this), this.ud = null }, t.prototype.j_ = function(t, e) { var n = this;
                        q(t, e, (function() { var e = n.pi(),
                                r = e.Zf(),
                                i = e.Xf();
                            r === i ? J(t, 0, 0, n.o_.Ft, n.o_.Ot, i) : $(t, 0, 0, n.o_.Ft, n.o_.Ot, r, i) })) }, t.prototype.Fd = function(t, e) { var n = f(this.ud),
                            r = n.eo().ou().dt(n.Yt(), n.Ht());
                        null !== r && (t.save(), r.H(t, e, !1), t.restore()) }, t.prototype.Od = function(t, e) { var n = this.pi().Sf();
                        this.Rd(t, e, Ln, In, n), this.Rd(t, e, Ln, Bn, n) }, t.prototype.Pd = function(t, e) { this.Rd(t, e, Ln, Bn, this.pi().Tf()) }, t.prototype.Vd = function(t, e, n) { for (var r = f(this.ud).oa(), i = 0, o = r; i < o.length; i++) { var a = o[i];
                            this.Rd(t, e, n, In, a) } for (var s = 0, u = r; s < u.length; s++) a = u[s], this.Rd(t, e, n, Bn, a) }, t.prototype.Rd = function(t, e, n, r, i) { for (var o = f(this.ud), a = n(i, o), s = o.Yt(), u = o.Ht(), c = o.jt().gf(), l = null !== c && c.kf === i, h = null !== c && l && void 0 !== c.yd ? c.yd.Kh : void 0, p = 0, d = a; p < d.length; p++) { var y = d[p].dt(s, u);
                            null !== y && (t.save(), r(y, t, e, l, h), t.restore()) } }, t.prototype.Ad = function(t, e, n) { for (var r = 0, i = t; r < i.length; r++) { var o = i[r],
                                a = o.dt(this.o_.Ot, this.o_.Ft); if (null !== a && a.$h) { var s = a.$h(e, n); if (null !== s) return { i_: o, yd: s } } } return null }, t.prototype.Md = function() { if (null !== this.ud) { var t = this.ad,
                                e = this.ud.Ya().W().visible,
                                n = this.ud.$a().W().visible;
                            e || null === this.X_ || (this.fd.removeChild(this.X_.B_()), this.X_.g(), this.X_ = null), n || null === this.Z_ || (this.vd.removeChild(this.Z_.B_()), this.Z_.g(), this.Z_ = null); var r = t.jt().qf();
                            e && null === this.X_ && (this.X_ = new Rn(this, t.W().layout, r, "left"), this.fd.appendChild(this.X_.B_())), n && null === this.Z_ && (this.Z_ = new Rn(this, t.W().layout, r, "right"), this.vd.appendChild(this.Z_.B_())) } }, t.prototype.Id = function(t) { return t.Gv && this.nd || null !== this.sd }, t.prototype.jd = function(t) { return Math.max(0, Math.min(t, this.o_.Ft - 1)) }, t.prototype.qd = function(t) { return Math.max(0, Math.min(t, this.o_.Ot - 1)) }, t.prototype.pd = function(t, e) { this.pi().Rf(this.jd(t), this.qd(e), f(this.ud)) }, t.prototype.Cd = function() { this.pi().If() }, t.prototype.Dd = function() { this.hd && (this.sd = null, this.Cd()) }, t.prototype.xd = function(t, e) { this.sd = t, this.hd = !1, this.pd(e.x, e.y); var n = this.pi().Tf();
                        this.rd = { x: n.$t(), y: n.Kt() } }, t.prototype.pi = function() { return this.ad.jt() }, t.prototype.Ud = function() { var t = this.pi(),
                            e = this.z_(),
                            n = e.ji();
                        t.Qa(e, n), t.Pf(), this.J_ = null, this.G_ = !1 }, t.prototype.Nd = function(t) { var e = this; if (this.G_) { var n = performance.now(); if (null !== this.ed && this.ed.xh(t.Yv, n), null === this.ed || this.ed.cc(n)) this.Ud();
                            else { var r = this.pi(),
                                    i = r.bt(),
                                    o = this.ed;
                                requestAnimationFrame((function t() { if (!o._c()) { var n = performance.now(),
                                            a = o.cc(n); if (!o._c()) { var s = i.Nl();
                                            r.Vf(o.fc(n)), s === i.Nl() && (a = !0, e.ed = null) }
                                        a ? e.Ud() : requestAnimationFrame(t) } })) } } }, t.prototype.md = function() { this.sd = null }, t.prototype.gd = function() { if (this.ud) { if (this.Td(), document.activeElement !== document.body && document.activeElement !== document.documentElement) f(document.activeElement).blur();
                            else { var t = document.getSelection();
                                null !== t && t.removeAllRanges() }!this.ud.ji().wi() && this.pi().bt().wi() } }, t.prototype.kd = function(t) { if (null !== this.ud) { var e = this.pi(); if (!e.bt().wi()) { var n = this.ad.W(),
                                    r = n.handleScroll,
                                    i = n.kineticScroll; if (r.pressedMouseMove && !t.Gv || (r.horzTouchDrag || r.vertTouchDrag) && t.Gv) { var o = this.ud.ji(),
                                        a = performance.now();
                                    null !== this.J_ || this.Id(t) || (this.J_ = { x: t.Rv, y: t.Iv, So: a, Yv: t.Yv, $v: t.$v }), null !== this.ed && this.ed.lc(t.Yv, a), null === this.J_ || this.G_ || this.J_.x === t.Rv && this.J_.y === t.Iv || (null === this.ed && (t.Gv && i.touch || !t.Gv && i.mouse) && (this.ed = new Mn(.2, 7, .997, 15), this.ed.lc(this.J_.Yv, this.J_.So), this.ed.lc(t.Yv, a)), o.wi() || e.Ja(this.ud, o, t.$v), e.Of(t.Yv), this.G_ = !0), this.G_ && (o.wi() || e.Ga(this.ud, o, t.$v), e.Vf(t.Yv)) } } } }, t.prototype.Td = function() { var t = performance.now(),
                            e = null === this.ed || this.ed.cc(t);
                        null !== this.ed && (e || this.Ud()), null !== this.ed && (this.ed.dc(), this.ed = null) }, t }(),
                Wn = function() {
                    function t(t, e, n, r, i) { var o = this;
                        this.ft = !0, this.o_ = new mn(0, 0), this.d_ = function() { return o.R_(3) }, this.m_ = "left" === t, this.cf = n.qf, this.zi = e, this.Hd = r, this.Yd = i, this.p_ = document.createElement("div"), this.p_.style.width = "25px", this.p_.style.height = "100%", this.p_.style.overflow = "hidden", this.g_ = xn(this.p_, new mn(16, 16)), this.g_.subscribeCanvasConfigured(this.d_) } return t.prototype.g = function() { this.g_.unsubscribeCanvasConfigured(this.d_), this.g_.destroy() }, t.prototype.B_ = function() { return this.p_ }, t.prototype.Ld = function() { return this.o_ }, t.prototype.P_ = function(t) { if (t.Ft < 0 || t.Ot < 0) throw new Error("Try to set invalid size to PriceAxisStub " + JSON.stringify(t));
                        this.o_.br(t) || (this.o_ = t, this.g_.resizeCanvas({ width: t.Ft, height: t.Ot }), this.p_.style.width = "".concat(t.Ft, "px"), this.p_.style.minWidth = "".concat(t.Ft, "px"), this.p_.style.height = "".concat(t.Ot, "px"), this.ft = !0) }, t.prototype.R_ = function(t) { if ((!(t < 3) || this.ft) && 0 !== this.o_.Ft && 0 !== this.o_.Ot) { this.ft = !1; var e = bn(this.g_.canvas);
                            this.j_(e, this.g_.pixelRatio), this.Rs(e, this.g_.pixelRatio) } }, t.prototype.Y_ = function() { return this.g_.canvas }, t.prototype.Rs = function(t, e) { if (this.Hd()) { var n = this.o_.Ft;
                            t.save(), t.fillStyle = this.zi.timeScale.borderColor; var r = Math.floor(this.cf.W().N * e),
                                i = this.m_ ? Math.round(n * e) - r : 0;
                            t.fillRect(i, 0, r, r), t.restore() } }, t.prototype.j_ = function(t, e) { var n = this;
                        q(t, e, (function() { J(t, 0, 0, n.o_.Ft, n.o_.Ot, n.Yd()) })) }, t }();

            function Vn(t, e) { return t.Po > e.Po ? t : e } var Un = function() {
                    function t(t) { var e = this;
                        this.$d = null, this.Kd = null, this.k = null, this.Xd = !1, this.o_ = new mn(0, 0), this.Zd = new E, this.f_ = new Gt(5), this.__ = !1, this.d_ = function() { e.__ || e.ad.jt().Wr() }, this.b_ = function() { e.__ || e.ad.jt().Wr() }, this.ad = t, this.zi = t.W().layout, this.Jd = document.createElement("tr"), this.Gd = document.createElement("td"), this.Gd.style.padding = "0", this.Qd = document.createElement("td"), this.Qd.style.padding = "0", this.p_ = document.createElement("td"), this.p_.style.height = "25px", this.p_.style.padding = "0", this.tw = document.createElement("div"), this.tw.style.width = "100%", this.tw.style.height = "100%", this.tw.style.position = "relative", this.tw.style.overflow = "hidden", this.p_.appendChild(this.tw), this.g_ = xn(this.tw, new mn(16, 16)), this.g_.subscribeCanvasConfigured(this.d_); var n = this.g_.canvas;
                        n.style.position = "absolute", n.style.zIndex = "1", n.style.left = "0", n.style.top = "0", this.y_ = xn(this.tw, new mn(16, 16)), this.y_.subscribeCanvasConfigured(this.b_); var r = this.y_.canvas;
                        r.style.position = "absolute", r.style.zIndex = "2", r.style.left = "0", r.style.top = "0", this.Jd.appendChild(this.Gd), this.Jd.appendChild(this.p_), this.Jd.appendChild(this.Qd), this.iw(), this.ad.jt().Pa().u(this.iw.bind(this), this), this.A_ = new kn(this.y_.canvas, this, { _v: function() { return !0 }, dv: function() { return !1 } }) } return t.prototype.g = function() { this.A_.g(), null !== this.$d && this.$d.g(), null !== this.Kd && this.Kd.g(), this.y_.unsubscribeCanvasConfigured(this.b_), this.y_.destroy(), this.g_.unsubscribeCanvasConfigured(this.d_), this.g_.destroy() }, t.prototype.B_ = function() { return this.Jd }, t.prototype.nw = function() { return this.$d }, t.prototype.sw = function() { return this.Kd }, t.prototype.Tv = function(t) { if (!this.Xd) { this.Xd = !0; var e = this.ad.jt();!e.bt().wi() && this.ad.W().handleScale.axisPressedMouseMove.time && e.Lf(t.Yv) } }, t.prototype.Cv = function(t) { this.Tv(t) }, t.prototype.Dv = function() { var t = this.ad.jt();!t.bt().wi() && this.Xd && (this.Xd = !1, this.ad.W().handleScale.axisPressedMouseMove.time && t.zf()) }, t.prototype.bv = function(t) { var e = this.ad.jt();!e.bt().wi() && this.ad.W().handleScale.axisPressedMouseMove.time && e.Wf(t.Yv) }, t.prototype.wv = function(t) { this.bv(t) }, t.prototype.yv = function() { this.Xd = !1; var t = this.ad.jt();
                        t.bt().wi() && !this.ad.W().handleScale.axisPressedMouseMove.time || t.zf() }, t.prototype.pv = function() { this.yv() }, t.prototype.nv = function() { this.ad.W().handleScale.axisDoubleClickReset && this.ad.jt().pn() }, t.prototype.Gc = function() { this.nv() }, t.prototype.ov = function() { this.ad.jt().W().handleScale.axisPressedMouseMove.time && this.K_(1) }, t.prototype.Wv = function() { this.K_(0) }, t.prototype.Ld = function() { return this.o_ }, t.prototype.hw = function() { return this.Zd }, t.prototype.rw = function(t, e, n) { this.o_ && this.o_.br(t) || (this.o_ = t, this.__ = !0, this.g_.resizeCanvas({ width: t.Ft, height: t.Ot }), this.y_.resizeCanvas({ width: t.Ft, height: t.Ot }), this.__ = !1, this.p_.style.width = t.Ft + "px", this.p_.style.height = t.Ot + "px", this.Zd.m(t)), null !== this.$d && this.$d.P_(new mn(e, t.Ot)), null !== this.Kd && this.Kd.P_(new mn(n, t.Ot)) }, t.prototype.ew = function() { var t = this.uw(); return Math.ceil(t.N + t.C + t.S + t.O + t.B) }, t.prototype.vt = function() { this.ad.jt().bt().au() }, t.prototype.Y_ = function() { return this.g_.canvas }, t.prototype.R_ = function(t) { if (0 !== t) { if (1 !== t) { var e = bn(this.g_.canvas);
                                this.j_(e, this.g_.pixelRatio), this.Rs(e, this.g_.pixelRatio), this.q_(e, this.g_.pixelRatio), null !== this.$d && this.$d.R_(t), null !== this.Kd && this.Kd.R_(t) } var n = bn(this.y_.canvas),
                                r = this.y_.pixelRatio;
                            n.clearRect(0, 0, Math.ceil(this.o_.Ft * r), Math.ceil(this.o_.Ot * r)), this.aw([this.ad.jt().Tf()], n, r) } }, t.prototype.j_ = function(t, e) { var n = this;
                        q(t, e, (function() { J(t, 0, 0, n.o_.Ft, n.o_.Ot, n.ad.jt().Xf()) })) }, t.prototype.Rs = function(t, e) { if (this.ad.W().timeScale.borderVisible) { t.save(), t.fillStyle = this.ow(); var n = Math.max(1, Math.floor(this.uw().N * e));
                            t.fillRect(0, 0, Math.ceil(this.o_.Ft * e), n), t.restore() } }, t.prototype.q_ = function(t, e) { var n = this,
                            r = this.ad.jt().bt().au(); if (r && 0 !== r.length) { var i = r.reduce(Vn, r[0]).Po;
                            i > 30 && i < 50 && (i = 30), t.save(), t.strokeStyle = this.ow(); var o = this.uw(),
                                a = o.N + o.C + o.O + o.S - o.V;
                            t.textAlign = "center", t.fillStyle = this.ow(); var s = Math.floor(this.uw().N * e),
                                u = Math.max(1, Math.floor(e)),
                                c = Math.floor(.5 * e); if (this.ad.jt().bt().W().borderVisible) { t.beginPath(); for (var l = Math.round(o.C * e), h = r.length; h--;) { var f = Math.round(r[h].su * e);
                                    t.rect(f - c, s, u, l) }
                                t.fill() }
                            t.fillStyle = this.j(), q(t, e, (function() { t.font = n.lw(); for (var e = 0, o = r; e < o.length; e++)
                                    if ((l = o[e]).Po < i) { var s = l.Sl ? n.fw(t, l.su, l.yu) : l.su;
                                        t.fillText(l.yu, s, a) }
                                t.font = n.cw(); for (var u = 0, c = r; u < c.length; u++) { var l;
                                    (l = c[u]).Po >= i && (s = l.Sl ? n.fw(t, l.su, l.yu) : l.su, t.fillText(l.yu, s, a)) } })), t.restore() } }, t.prototype.fw = function(t, e, n) { var r = this.f_.Qt(t, n),
                            i = r / 2,
                            o = Math.floor(e - i) + .5; return o < 0 ? e += Math.abs(0 - o) : o + r > this.o_.Ft && (e -= Math.abs(this.o_.Ft - (o + r))), e }, t.prototype.aw = function(t, e, n) { for (var r = this.uw(), i = 0, o = t; i < o.length; i++)
                            for (var a = 0, s = o[i].Ti(); a < s.length; a++) { var u = s[a];
                                e.save(), u.dt().H(e, r, n), e.restore() } }, t.prototype.ow = function() { return this.ad.W().timeScale.borderColor }, t.prototype.j = function() { return this.zi.textColor }, t.prototype.R = function() { return this.zi.fontSize }, t.prototype.lw = function() { return B(this.R(), this.zi.fontFamily) }, t.prototype.cw = function() { return B(this.R(), this.zi.fontFamily, "bold") }, t.prototype.uw = function() { null === this.k && (this.k = { N: 1, V: NaN, O: NaN, B: NaN, mi: NaN, C: 3, S: NaN, T: "", bi: new Gt }); var t = this.k,
                            e = this.lw(); if (t.T !== e) { var n = this.R();
                            t.S = n, t.T = e, t.O = Math.ceil(n / 2.5), t.B = t.O, t.mi = Math.ceil(n / 2), t.V = Math.round(this.R() / 5), t.bi.ih() } return this.k }, t.prototype.K_ = function(t) { this.p_.style.cursor = 1 === t ? "ew-resize" : "default" }, t.prototype.iw = function() { var t = this.ad.jt(),
                            e = t.W();
                        e.leftPriceScale.visible || null === this.$d || (this.Gd.removeChild(this.$d.B_()), this.$d.g(), this.$d = null), e.rightPriceScale.visible || null === this.Kd || (this.Qd.removeChild(this.Kd.B_()), this.Kd.g(), this.Kd = null); var n = { qf: this.ad.jt().qf() },
                            r = function() { return e.leftPriceScale.borderVisible && t.bt().W().borderVisible },
                            i = function() { return t.Xf() };
                        e.leftPriceScale.visible && null === this.$d && (this.$d = new Wn("left", e, n, r, i), this.Gd.appendChild(this.$d.B_())), e.rightPriceScale.visible && null === this.Kd && (this.Kd = new Wn("right", e, n, r, i), this.Qd.appendChild(this.Kd.B_())) }, t }(),
                Gn = function() {
                    function t(t, e) { var n;
                        this._w = [], this.dw = 0, this.xu = 0, this.hh = 0, this.ww = 0, this.Mw = 0, this.bw = null, this.mw = !1, this.Q_ = new E, this.af = new E, this.zi = e, this.Jd = document.createElement("div"), this.Jd.classList.add("tv-lightweight-charts"), this.Jd.style.overflow = "hidden", this.Jd.style.width = "100%", this.Jd.style.height = "100%", (n = this.Jd).style.userSelect = "none", n.style.webkitUserSelect = "none", n.style.msUserSelect = "none", n.style.MozUserSelect = "none", n.style.webkitTapHighlightColor = "transparent", this.pw = document.createElement("table"), this.pw.setAttribute("cellspacing", "0"), this.Jd.appendChild(this.pw), this.gw = this.yw.bind(this), this.Jd.addEventListener("wheel", this.gw, { passive: !1 }), this.pi = new pn(this.ff.bind(this), this.zi), this.jt().Df().u(this.kw.bind(this), this), this.Nw = new Un(this), this.pw.appendChild(this.Nw.B_()); var r = this.zi.width,
                            i = this.zi.height; if (0 === r || 0 === i) { var o = t.getBoundingClientRect();
                            0 === r && (r = Math.floor(o.width), r -= r % 2), 0 === i && (i = Math.floor(o.height), i -= i % 2) }
                        this.xw(r, i), this.Cw(), t.appendChild(this.Jd), this.Sw(), this.pi.bt().Pl().u(this.pi.Ce.bind(this.pi), this), this.pi.Pa().u(this.pi.Ce.bind(this.pi), this) } return t.prototype.jt = function() { return this.pi }, t.prototype.W = function() { return this.zi }, t.prototype.Tw = function() { return this._w }, t.prototype.Dw = function() { return this.Nw }, t.prototype.g = function() { this.Jd.removeEventListener("wheel", this.gw), 0 !== this.dw && window.cancelAnimationFrame(this.dw), this.pi.Df().M(this), this.pi.bt().Pl().M(this), this.pi.Pa().M(this), this.pi.g(); for (var t = 0, e = this._w; t < e.length; t++) { var n = e[t];
                            this.pw.removeChild(n.B_()), n.Sd().M(this), n.g() }
                        this._w = [], f(this.Nw).g(), null !== this.Jd.parentElement && this.Jd.parentElement.removeChild(this.Jd), this.af.g(), this.Q_.g() }, t.prototype.xw = function(t, e, n) { if (void 0 === n && (n = !1), this.xu !== e || this.hh !== t) { this.xu = e, this.hh = t; var r = e + "px",
                                i = t + "px";
                            f(this.Jd).style.height = r, f(this.Jd).style.width = i, this.pw.style.height = r, this.pw.style.width = i, n ? this.Aw(new st(3)) : this.pi.Ce() } }, t.prototype.R_ = function(t) { void 0 === t && (t = new st(3)); for (var e = 0; e < this._w.length; e++) this._w[e].R_(t.wn(e).vn);
                        this.zi.timeScale.visible && this.Nw.R_(t.dn()) }, t.prototype.Pr = function(t) { this.pi.Pr(t), this.Sw(); var e = t.width || this.hh,
                            n = t.height || this.xu;
                        this.xw(e, n) }, t.prototype.Sd = function() { return this.Q_ }, t.prototype.Df = function() { return this.af }, t.prototype.Bw = function() { var t = this;
                        null !== this.bw && (this.Aw(this.bw), this.bw = null); var e = this._w[0],
                            n = wn(document, new mn(this.hh, this.xu)),
                            r = bn(n),
                            i = gn(n); return q(r, i, (function() { var n = 0,
                                i = 0,
                                o = function(e) { for (var o = 0; o < t._w.length; o++) { var a = t._w[o],
                                            s = a.Ld().Ot,
                                            u = f("left" === e ? a.Wd() : a.zd()),
                                            c = u.Y_();
                                        r.drawImage(c, n, i, u.W_(), s), i += s } };
                            t.Lw() && (o("left"), n = f(e.Wd()).W_()), i = 0; for (var a = 0; a < t._w.length; a++) { var s = t._w[a],
                                    u = s.Ld(),
                                    c = s.Y_();
                                r.drawImage(c, n, i, u.Ft, u.Ot), i += u.Ot }
                            n += e.Ld().Ft, t.Ew() && (i = 0, o("right")); var l = function(e) { var o = f("left" === e ? t.Nw.nw() : t.Nw.sw()),
                                    a = o.Ld(),
                                    s = o.Y_();
                                r.drawImage(s, n, i, a.Ft, a.Ot) }; if (t.zi.timeScale.visible) { n = 0, t.Lw() && (l("left"), n = f(e.Wd()).W_()); var h = t.Nw.Ld();
                                c = t.Nw.Y_(), r.drawImage(c, n, i, h.Ft, h.Ot), t.Ew() && (n += e.Ld().Ft, l("right"), r.restore()) } })), n }, t.prototype.Fw = function(t) { return "none" === t || "left" === t && !this.Lw() || "right" === t && !this.Ew() || 0 === this._w.length ? 0 : f("left" === t ? this._w[0].Wd() : this._w[0].zd()).W_() }, t.prototype.Ow = function() { for (var t = 0, e = 0, n = 0, r = 0, i = this._w; r < i.length; r++) { var o = i[r];
                            this.Lw() && (e = Math.max(e, f(o.Wd()).O_())), this.Ew() && (n = Math.max(n, f(o.zd()).O_())), t += o.Wa() } var a = this.hh,
                            s = this.xu,
                            u = Math.max(a - e - n, 0),
                            c = this.zi.timeScale.visible,
                            l = c ? this.Nw.ew() : 0;
                        l % 2 && (l += 1); for (var h = 0 + l, p = s < h ? 0 : s - h, d = p / t, y = 0, v = 0; v < this._w.length; ++v) {
                            (o = this._w[v]).wd(this.pi.Cf()[v]); var m, g;
                            g = v === this._w.length - 1 ? p - y : Math.round(o.Wa() * d), y += m = Math.max(g, 2), o.P_(new mn(u, m)), this.Lw() && o.Bd(e, "left"), this.Ew() && o.Bd(n, "right"), o.z_() && this.pi.Af(o.z_(), m) }
                        this.Nw.rw(new mn(c ? u : 0, l), c ? e : 0, c ? n : 0), this.pi.Ra(u), this.ww !== e && (this.ww = e), this.Mw !== n && (this.Mw = n) }, t.prototype.yw = function(t) { var e = t.deltaX / 100,
                            n = -t.deltaY / 100; if (0 !== e && this.zi.handleScroll.mouseWheel || 0 !== n && this.zi.handleScale.mouseWheel) { switch (t.cancelable && t.preventDefault(), t.deltaMode) {
                                case t.DOM_DELTA_PAGE:
                                    e *= 120, n *= 120; break;
                                case t.DOM_DELTA_LINE:
                                    e *= 32, n *= 32 } if (0 !== n && this.zi.handleScale.mouseWheel) { var r = Math.sign(n) * Math.min(1, Math.abs(n)),
                                    i = t.clientX - this.Jd.getBoundingClientRect().left;
                                this.jt().Ef(i, r) }
                            0 !== e && this.zi.handleScroll.mouseWheel && this.jt().Ff(-80 * e) } }, t.prototype.Aw = function(t) { var e, n = t.dn();
                        3 === n && this.Vw(), 3 !== n && 2 !== n || (this.Pw(t), this.Ww(t), this.Nw.vt(), this._w.forEach((function(t) { t.bd() })), 3 === (null === (e = this.bw) || void 0 === e ? void 0 : e.dn()) && (this.bw.Nn(t), this.Vw(), this.Pw(this.bw), this.Ww(this.bw), t = this.bw, this.bw = null)), this.R_(t) }, t.prototype.Ww = function(t) { for (var e = 0, n = t.kn(); e < n.length; e++) { var r = n[e];
                            this.xn(r) } }, t.prototype.Pw = function(t) { for (var e = this.pi.Cf(), n = 0; n < e.length; n++) t.wn(n)._n && e[n].so() }, t.prototype.xn = function(t) { var e = this.pi.bt(); switch (t.bn) {
                            case 0:
                                e.zl(); break;
                            case 1:
                                e.Rl(t.St); break;
                            case 2:
                                e.gn(t.St); break;
                            case 3:
                                e.yn(t.St); break;
                            case 4:
                                e.Tl() } }, t.prototype.ff = function(t) { var e = this;
                        null !== this.bw ? this.bw.Nn(t) : this.bw = t, this.mw || (this.mw = !0, this.dw = window.requestAnimationFrame((function() { if (e.mw = !1, e.dw = 0, null !== e.bw) { var t = e.bw;
                                e.bw = null, e.Aw(t) } }))) }, t.prototype.Vw = function() { this.Cw() }, t.prototype.Cw = function() { for (var t = this.pi.Cf(), e = t.length, n = this._w.length, r = e; r < n; r++) { var i = h(this._w.pop());
                            this.pw.removeChild(i.B_()), i.Sd().M(this), i.g() } for (r = n; r < e; r++)(i = new Fn(this, t[r])).Sd().u(this.zw.bind(this), this), this._w.push(i), this.pw.insertBefore(i.B_(), this.Nw.B_()); for (r = 0; r < e; r++) { var o = t[r];
                            (i = this._w[r]).z_() !== o ? i.wd(o) : i.dd() }
                        this.Sw(), this.Ow() }, t.prototype.Rw = function(t, e) { var n, r = new Map; if (null !== t && this.pi._t().forEach((function(e) { var n = e.er(t);
                                null !== n && r.set(e, n) })), null !== t) { var i = this.pi.bt().gi(t);
                            null !== i && (n = i) } var o = this.jt().gf(),
                            a = null !== o && o.kf instanceof Me ? o.kf : void 0,
                            s = null !== o && void 0 !== o.yd ? o.yd.Zh : void 0; return { rt: n, Iw: e || void 0, jw: a, qw: r, Uw: s } }, t.prototype.zw = function(t, e) { var n = this;
                        this.Q_.m((function() { return n.Rw(t, e) })) }, t.prototype.kw = function(t, e) { var n = this;
                        this.af.m((function() { return n.Rw(t, e) })) }, t.prototype.Sw = function() { var t = this.zi.timeScale.visible ? "" : "none";
                        this.Nw.B_().style.display = t }, t.prototype.Lw = function() { return this._w[0].z_().Ya().W().visible }, t.prototype.Ew = function() { return this._w[0].z_().$a().W().visible }, t }();

            function Xn(t, e, n) { var r = n.value; return { vs: e, rt: t, St: [r, r, r, r] } }

            function Hn(t, e, n) { var r = n.value,
                    i = { vs: e, rt: t, St: [r, r, r, r] }; return "color" in n && void 0 !== n.color && (i.A = n.color), i }

            function Yn(t) { return void 0 !== t.St }

            function qn(t) { return function(e, n, r) { return void 0 === (i = r).open && void 0 === i.value ? { rt: e, vs: n } : t(e, n, r); var i } } var Jn = { Candlestick: qn((function(t, e, n) { var r = { vs: e, rt: t, St: [n.open, n.high, n.low, n.close] }; return "color" in n && void 0 !== n.color && (r.A = n.color), "borderColor" in n && void 0 !== n.borderColor && (r.Tt = n.borderColor), "wickColor" in n && void 0 !== n.wickColor && (r.qs = n.wickColor), r })), Bar: qn((function(t, e, n) { var r = { vs: e, rt: t, St: [n.open, n.high, n.low, n.close] }; return "color" in n && void 0 !== n.color && (r.A = n.color), r })), Area: qn(Xn), Baseline: qn(Xn), Histogram: qn(Hn), Line: qn(Hn) };

            function $n(t) { return Jn[t] }

            function Kn(t) { return 60 * t * 60 * 1e3 }

            function Zn(t) { return 60 * t * 1e3 } var Qn = [{ Hw: (1, 1e3), Po: 10 }, { Hw: Zn(1), Po: 20 }, { Hw: Zn(5), Po: 21 }, { Hw: Zn(30), Po: 22 }, { Hw: Kn(1), Po: 30 }, { Hw: Kn(3), Po: 31 }, { Hw: Kn(6), Po: 32 }, { Hw: Kn(12), Po: 33 }];

            function tr(t, e) { if (t.getUTCFullYear() !== e.getUTCFullYear()) return 70; if (t.getUTCMonth() !== e.getUTCMonth()) return 60; if (t.getUTCDate() !== e.getUTCDate()) return 50; for (var n = Qn.length - 1; n >= 0; --n)
                    if (Math.floor(e.getTime() / Qn[n].Hw) !== Math.floor(t.getTime() / Qn[n].Hw)) return Qn[n].Po;
                return 0 }

            function er(t, e) { if (void 0 === e && (e = 0), 0 !== t.length) { for (var n = 0 === e ? null : t[e - 1].rt.So, r = null !== n ? new Date(1e3 * n) : null, i = 0, o = e; o < t.length; ++o) { var a = t[o],
                            s = new Date(1e3 * a.rt.So);
                        null !== r && (a.Vo = tr(s, r)), i += a.rt.So - (n || a.rt.So), n = a.rt.So, r = s } if (0 === e && t.length > 1) { var u = Math.ceil(i / (t.length - 1)),
                            c = new Date(1e3 * (t[0].rt.So - u));
                        t[0].Vo = tr(new Date(1e3 * t[0].rt.So), c) } } }

            function nr(t) { if (!yn(t)) throw new Error("time must be of type BusinessDay"); var e = new Date(Date.UTC(t.year, t.month - 1, t.day, 0, 0, 0, 0)); return { So: Math.round(e.getTime() / 1e3), Co: t } }

            function rr(t) { if (!vn(t)) throw new Error("time must be of type isUTCTimestamp"); return { So: t } }

            function ir(t) { return 0 === t.length ? null : yn(t[0].time) ? nr : rr }

            function or(t) { return vn(t) ? rr(t) : yn(t) ? nr(t) : nr(ar(t)) }

            function ar(t) { var e = new Date(t); if (isNaN(e.getTime())) throw new Error("Invalid date string=".concat(t, ", expected format=yyyy-mm-dd")); return { day: e.getUTCDate(), month: e.getUTCMonth() + 1, year: e.getUTCFullYear() } }

            function sr(t) { P(t.time) && (t.time = ar(t.time)) }

            function ur(t) { return { vs: 0, Yw: new Map, Ve: t } }

            function cr(t) { if (void 0 !== t && 0 !== t.length) return { $w: t[0].rt.So, Kw: t[t.length - 1].rt.So } } var lr = function() {
                function t() { this.Xw = new Map, this.Zw = new Map, this.Jw = new Map, this.Gw = [] } return t.prototype.g = function() { this.Xw.clear(), this.Zw.clear(), this.Jw.clear(), this.Gw = [] }, t.prototype.Qw = function(t, e) { var n = this,
                        r = 0 !== this.Xw.size,
                        i = !1,
                        o = this.Zw.get(t); if (void 0 !== o)
                        if (1 === this.Zw.size) r = !1, i = !0, this.Xw.clear();
                        else
                            for (var a = 0, s = this.Gw; a < s.length; a++) s[a].pointData.Yw.delete(t) && (i = !0);
                    var u = []; if (0 !== e.length) {! function(t) { t.forEach(sr) }(e); var c = f(ir(e)),
                            l = $n(t.Rr());
                        u = e.map((function(e) { var r = c(e.time),
                                o = n.Xw.get(r.So);
                            void 0 === o && (o = ur(r), n.Xw.set(r.So, o), i = !0); var a = l(r, o.vs, e); return o.Yw.set(t, a), a })) }
                    r && this.tM(), this.iM(t, u); var h = -1; if (i) { var p = [];
                        this.Xw.forEach((function(t) { p.push({ Vo: 0, rt: t.Ve, pointData: t }) })), p.sort((function(t, e) { return t.rt.So - e.rt.So })), h = this.nM(p) } return this.sM(t, h, function(t, e) { var n = cr(t),
                            r = cr(e); if (void 0 !== n && void 0 !== r) return { Ae: n.Kw >= r.Kw && n.$w >= r.$w } }(this.Zw.get(t), o)) }, t.prototype.Yf = function(t) { return this.Qw(t, []) }, t.prototype.hM = function(t, e) { sr(e); var n = f(ir([e]))(e.time),
                        r = this.Jw.get(t); if (void 0 !== r && n.So < r.So) throw new Error("Cannot update oldest data, last time=".concat(r.So, ", new time=").concat(n.So)); var i = this.Xw.get(n.So),
                        o = void 0 === i;
                    void 0 === i && (i = ur(n), this.Xw.set(n.So, i)); var a = $n(t.Rr())(n, i.vs, e);
                    i.Yw.set(t, a), this.rM(t, a); var s = { Ae: Yn(a) }; if (!o) return this.sM(t, -1, s); var u = { Vo: 0, rt: i.Ve, pointData: i },
                        c = mt(this.Gw, u.rt.So, (function(t, e) { return t.rt.So < e }));
                    this.Gw.splice(c, 0, u); for (var l = c; l < this.Gw.length; ++l) hr(this.Gw[l].pointData, l); return er(this.Gw, c), this.sM(t, c, s) }, t.prototype.rM = function(t, e) { var n = this.Zw.get(t);
                    void 0 === n && (n = [], this.Zw.set(t, n)); var r = 0 !== n.length ? n[n.length - 1] : null;
                    null === r || e.rt.So > r.rt.So ? Yn(e) && n.push(e) : Yn(e) ? n[n.length - 1] = e : n.splice(-1, 1), this.Jw.set(t, e.rt) }, t.prototype.iM = function(t, e) { 0 !== e.length ? (this.Zw.set(t, e.filter(Yn)), this.Jw.set(t, e[e.length - 1].rt)) : (this.Zw.delete(t), this.Jw.delete(t)) }, t.prototype.tM = function() { for (var t = 0, e = this.Gw; t < e.length; t++) { var n = e[t];
                        0 === n.pointData.Yw.size && this.Xw.delete(n.rt.So) } }, t.prototype.nM = function(t) { for (var e = -1, n = 0; n < this.Gw.length && n < t.length; ++n) { var r = this.Gw[n],
                            i = t[n]; if (r.rt.So !== i.rt.So) { e = n; break }
                        i.Vo = r.Vo, hr(i.pointData, n) } if (-1 === e && this.Gw.length !== t.length && (e = Math.min(this.Gw.length, t.length)), -1 === e) return -1; for (n = e; n < t.length; ++n) hr(t[n].pointData, n); return er(t, e), this.Gw = t, e }, t.prototype.eM = function() { if (0 === this.Zw.size) return null; var t = 0; return this.Zw.forEach((function(e) { 0 !== e.length && (t = Math.max(t, e[e.length - 1].vs)) })), t }, t.prototype.sM = function(t, e, n) { var r = { uM: new Map, bt: { ml: this.eM() } }; if (-1 !== e) this.Zw.forEach((function(e, i) { r.uM.set(i, { ph: e, aM: i === t ? n : void 0 }) })), this.Zw.has(t) || r.uM.set(t, { ph: [], aM: n }), r.bt.oM = this.Gw, r.bt.lM = e;
                    else { var i = this.Zw.get(t);
                        r.uM.set(t, { ph: i || [], aM: n }) } return r }, t }();

            function hr(t, e) { t.vs = e, t.Yw.forEach((function(t) { t.vs = e })) } var fr = { color: "#FF0000", price: 0, lineStyle: 2, lineWidth: 1, lineVisible: !0, axisLabelVisible: !0, title: "" },
                pr = function() {
                    function t(t) { this.Lr = t } return t.prototype.applyOptions = function(t) { this.Lr.Pr(t) }, t.prototype.options = function() { return this.Lr.W() }, t.prototype.fM = function() { return this.Lr }, t }();

            function dr(t) { var e = t.overlay,
                    n = function(t, e) { var n = {}; for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]); if (null != t && "function" == typeof Object.getOwnPropertySymbols) { var i = 0; for (r = Object.getOwnPropertySymbols(t); i < r.length; i++) e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]) } return n }(t, ["overlay"]); return e && (n.priceScaleId = ""), n } var yr = function() {
                    function t(t, e, n) { this.Kn = t, this.cM = e, this.vM = n } return t.prototype.priceFormatter = function() { return this.Kn.qe() }, t.prototype.priceToCoordinate = function(t) { var e = this.Kn.kt(); return null === e ? null : this.Kn.Ct().xt(t, e.St) }, t.prototype.coordinateToPrice = function(t) { var e = this.Kn.kt(); return null === e ? null : this.Kn.Ct().qi(t, e.St) }, t.prototype.barsInLogicalRange = function(t) { if (null === t) return null; var e = new rn(new Qe(t.from, t.to)).jo(),
                            n = this.Kn.an(); if (n.wi()) return null; var r = n.ne(e.In(), 1),
                            i = n.ne(e.jn(), -1),
                            o = f(n.Qr()),
                            a = f(n.un()); if (null !== r && null !== i && r.vs > i.vs) return { barsBefore: t.from - o, barsAfter: a - t.to }; var s = { barsBefore: null === r || r.vs === o ? t.from - o : r.vs - o, barsAfter: null === i || i.vs === a ? a - t.to : a - i.vs }; return null !== r && null !== i && (s.from = r.rt.Co || r.rt.So, s.to = i.rt.Co || i.rt.So), s }, t.prototype.setData = function(t) { this.Kn.Rr(), this.cM._M(this.Kn, t) }, t.prototype.update = function(t) { this.Kn.Rr(), this.cM.dM(this.Kn, t) }, t.prototype.setMarkers = function(t) { var e = t.map((function(t) { return j(j({}, t), { time: or(t.time) }) }));
                        this.Kn.Le(e) }, t.prototype.applyOptions = function(t) { var e = dr(t);
                        this.Kn.Pr(e) }, t.prototype.options = function() { return D(this.Kn.W()) }, t.prototype.priceScale = function() { return this.vM.priceScale(this.Kn.Ct().Ke()) }, t.prototype.createPriceLine = function(t) { var e = k(D(fr), t),
                            n = this.Kn.Ee(e); return new pr(n) }, t.prototype.removePriceLine = function(t) { this.Kn.Fe(t.fM()) }, t.prototype.seriesType = function() { return this.Kn.Rr() }, t }(),
                vr = function(t) {
                    function e() { return null !== t && t.apply(this, arguments) || this } return M(e, t), e.prototype.applyOptions = function(e) { dn(e), t.prototype.applyOptions.call(this, e) }, e }(yr),
                mr = { autoScale: !0, mode: 0, invertScale: !1, alignLabels: !0, borderVisible: !0, borderColor: "#2B2B43", entireTextOnly: !1, visible: !1, drawTicks: !0, scaleMargins: { bottom: .1, top: .2 } },
                gr = { color: "rgba(0, 0, 0, 0)", visible: !1, fontSize: 48, fontFamily: I, fontStyle: "", text: "", horzAlign: "center", vertAlign: "center" },
                br = { width: 0, height: 0, layout: { background: { type: "solid", color: "#e7fffe" }, textColor: "#191919", fontSize: 11, fontFamily: I }, crosshair: { vertLine: { color: "#758696", width: 1, style: 3, visible: !0, labelVisible: !0, labelBackgroundColor: "#4c525e" }, horzLine: { color: "#758696", width: 1, style: 3, visible: !0, labelVisible: !0, labelBackgroundColor: "#4c525e" }, mode: 1 }, grid: { vertLines: { color: "#D6DCDE", style: 0, visible: !0 }, horzLines: { color: "#D6DCDE", style: 0, visible: !0 } }, overlayPriceScales: j({}, mr), leftPriceScale: j(j({}, mr), { visible: !1 }), rightPriceScale: j(j({}, mr), { visible: !0 }), timeScale: { rightOffset: 0, barSpacing: 6, minBarSpacing: .5, fixLeftEdge: !1, fixRightEdge: !1, lockVisibleTimeRangeOnResize: !1, rightBarStaysOnScroll: !1, borderVisible: !0, borderColor: "#2B2B43", visible: !0, timeVisible: !1, secondsVisible: !0, shiftVisibleRangeOnNewBar: !0 }, watermark: gr, localization: { locale: jn ? navigator.language : "", dateFormat: "dd MMM 'yy" }, handleScroll: { mouseWheel: !0, pressedMouseMove: !0, horzTouchDrag: !0, vertTouchDrag: !0 }, handleScale: { axisPressedMouseMove: { time: !0, price: !0 }, axisDoubleClickReset: !0, mouseWheel: !0, pinch: !0 }, kineticScroll: { mouse: !1, touch: !0 }, trackingMode: { exitMode: 1 } },
                wr = { upColor: "#26a69a", downColor: "#ef5350", wickVisible: !0, borderVisible: !0, borderColor: "#378658", borderUpColor: "#26a69a", borderDownColor: "#ef5350", wickColor: "#737375", wickUpColor: "#26a69a", wickDownColor: "#ef5350" },
                xr = { upColor: "#26a69a", downColor: "#ef5350", openVisible: !0, thinBars: !0 },
                Or = { color: "#2196f3", lineStyle: 0, lineWidth: 3, lineType: 0, crosshairMarkerVisible: !0, crosshairMarkerRadius: 4, crosshairMarkerBorderColor: "", crosshairMarkerBackgroundColor: "", lastPriceAnimation: 0 },
                _r = { topColor: "rgba( 46, 220, 135, 0.4)", bottomColor: "rgba( 40, 221, 100, 0)", lineColor: "#33D778", lineStyle: 0, lineWidth: 3, lineType: 0, crosshairMarkerVisible: !0, crosshairMarkerRadius: 4, crosshairMarkerBorderColor: "", crosshairMarkerBackgroundColor: "", lastPriceAnimation: 0 },
                Mr = { baseValue: { type: "price", price: 0 }, topFillColor1: "rgba(38, 166, 154, 0.28)", topFillColor2: "rgba(38, 166, 154, 0.05)", topLineColor: "rgba(38, 166, 154, 1)", bottomFillColor1: "rgba(239, 83, 80, 0.05)", bottomFillColor2: "rgba(239, 83, 80, 0.28)", bottomLineColor: "rgba(239, 83, 80, 1)", lineWidth: 3, lineStyle: 0, crosshairMarkerVisible: !0, crosshairMarkerRadius: 4, crosshairMarkerBorderColor: "", crosshairMarkerBackgroundColor: "", lastPriceAnimation: 0 },
                jr = { color: "#26a69a", base: 0 },
                Sr = { title: "", visible: !0, lastValueVisible: !0, priceLineVisible: !0, priceLineSource: 0, priceLineWidth: 1, priceLineColor: "", priceLineStyle: 2, baseLineVisible: !0, baseLineWidth: 1, baseLineColor: "#B2B5BE", baseLineStyle: 0, priceFormat: { type: "price", precision: 2, minMove: .01 } },
                Er = function() {
                    function t(t, e) { this.wM = t, this.MM = e } return t.prototype.applyOptions = function(t) { this.wM.jt().Nf(this.MM, t) }, t.prototype.options = function() { return this._i().W() }, t.prototype.width = function() { return at(this.MM) ? this.wM.Fw("left" === this.MM ? "left" : "right") : 0 }, t.prototype._i = function() { return f(this.wM.jt().xf(this.MM)).Ct }, t }(),
                kr = function() {
                    function t(t, e) { this.bM = new E, this.Go = new E, this.Zd = new E, this.pi = t, this.Da = t.bt(), this.Nw = e, this.Da.Ol().u(this.mM.bind(this)), this.Da.Vl().u(this.pM.bind(this)), this.Nw.hw().u(this.gM.bind(this)) } return t.prototype.g = function() { this.Da.Ol().M(this), this.Da.Vl().M(this), this.Nw.hw().M(this), this.bM.g(), this.Go.g(), this.Zd.g() }, t.prototype.scrollPosition = function() { return this.Da.Nl() }, t.prototype.scrollToPosition = function(t, e) { e ? this.Da.Fl(t, 1e3) : this.pi.yn(t) }, t.prototype.scrollToRealTime = function() { this.Da.El() }, t.prototype.getVisibleRange = function() { var t, e, n = this.Da.cl(); return null === n ? null : { from: null !== (t = n.from.Co) && void 0 !== t ? t : n.from.So, to: null !== (e = n.to.Co) && void 0 !== e ? e : n.to.So } }, t.prototype.setVisibleRange = function(t) { var e = { from: or(t.from), to: or(t.to) },
                            n = this.Da.wl(e);
                        this.pi.$f(n) }, t.prototype.getVisibleLogicalRange = function() { var t = this.Da.fl(); return null === t ? null : { from: t.In(), to: t.jn() } }, t.prototype.setVisibleLogicalRange = function(t) { l(t.from <= t.to, "The from index cannot be after the to index."), this.pi.$f(t) }, t.prototype.resetTimeScale = function() { this.pi.pn() }, t.prototype.fitContent = function() { this.pi.zl() }, t.prototype.logicalToCoordinate = function(t) { var e = this.pi.bt(); return e.wi() ? null : e.At(t) }, t.prototype.coordinateToLogical = function(t) { return this.Da.wi() ? null : this.Da.pl(t) }, t.prototype.timeToCoordinate = function(t) { var e = or(t),
                            n = this.Da.Ze(e, !1); return null === n ? null : this.Da.At(n) }, t.prototype.coordinateToTime = function(t) { var e, n = this.pi.bt(),
                            r = n.pl(t),
                            i = n.gi(r); return null === i ? null : null !== (e = i.Co) && void 0 !== e ? e : i.So }, t.prototype.width = function() { return this.Nw.Ld().Ft }, t.prototype.height = function() { return this.Nw.Ld().Ot }, t.prototype.subscribeVisibleTimeRangeChange = function(t) { this.bM.u(t) }, t.prototype.unsubscribeVisibleTimeRangeChange = function(t) { this.bM._(t) }, t.prototype.subscribeVisibleLogicalRangeChange = function(t) { this.Go.u(t) }, t.prototype.unsubscribeVisibleLogicalRangeChange = function(t) { this.Go._(t) }, t.prototype.subscribeSizeChange = function(t) { this.Zd.u(t) }, t.prototype.unsubscribeSizeChange = function(t) { this.Zd._(t) }, t.prototype.applyOptions = function(t) { this.Da.Pr(t) }, t.prototype.options = function() { return D(this.Da.W()) }, t.prototype.mM = function() { this.bM.p() && this.bM.m(this.getVisibleRange()) }, t.prototype.pM = function() { this.Go.p() && this.Go.m(this.getVisibleLogicalRange()) }, t.prototype.gM = function(t) { this.Zd.m(t.Ft, t.Ot) }, t }();

            function Ar(t) { if (void 0 !== t && "custom" !== t.type) { var e = t;
                    void 0 !== e.minMove && void 0 === e.precision && (e.precision = function(t) { if (t >= 1) return 0; for (var e = 0; e < 8; e++) { var n = Math.round(t); if (Math.abs(n - t) < 1e-8) return e;
                            t *= 10 } return e }(e.minMove)) } }

            function Cr(t) { return function(t) { if (T(t.handleScale)) { var e = t.handleScale;
                            t.handleScale = { axisDoubleClickReset: e, axisPressedMouseMove: { time: e, price: e }, mouseWheel: e, pinch: e } } else if (void 0 !== t.handleScale && T(t.handleScale.axisPressedMouseMove)) { var n = t.handleScale.axisPressedMouseMove;
                            t.handleScale.axisPressedMouseMove = { time: n, price: n } } var r = t.handleScroll;
                        T(r) && (t.handleScroll = { horzTouchDrag: r, vertTouchDrag: r, mouseWheel: r, pressedMouseMove: r }) }(t),
                    function(t) { if (t.priceScale) { t.leftPriceScale = t.leftPriceScale || {}, t.rightPriceScale = t.rightPriceScale || {}; var e = t.priceScale.position;
                            delete t.priceScale.position, t.leftPriceScale = k(t.leftPriceScale, t.priceScale), t.rightPriceScale = k(t.rightPriceScale, t.priceScale), "left" === e && (t.leftPriceScale.visible = !0, t.rightPriceScale.visible = !1), "right" === e && (t.leftPriceScale.visible = !1, t.rightPriceScale.visible = !0), "none" === e && (t.leftPriceScale.visible = !1, t.rightPriceScale.visible = !1), t.overlayPriceScales = t.overlayPriceScales || {}, void 0 !== t.priceScale.invertScale && (t.overlayPriceScales.invertScale = t.priceScale.invertScale), void 0 !== t.priceScale.scaleMargins && (t.overlayPriceScales.scaleMargins = t.priceScale.scaleMargins) } }(t),
                    function(t) { t.layout && t.layout.backgroundColor && !t.layout.background && (t.layout.background = { type: "solid", color: t.layout.backgroundColor }) }(t), t } var Pr = function() {
                function t(t, e) { var n = this;
                    this.yM = new lr, this.kM = new Map, this.NM = new Map, this.xM = new E, this.CM = new E; var r = void 0 === e ? D(br) : k(D(br), Cr(e));
                    this.wM = new Gn(t, r), this.wM.Sd().u((function(t) { n.xM.p() && n.xM.m(n.SM(t())) }), this), this.wM.Df().u((function(t) { n.CM.p() && n.CM.m(n.SM(t())) }), this); var i = this.wM.jt();
                    this.TM = new kr(i, this.wM.Dw()) } return t.prototype.remove = function() { this.wM.Sd().M(this), this.wM.Df().M(this), this.TM.g(), this.wM.g(), this.kM.clear(), this.NM.clear(), this.xM.g(), this.CM.g(), this.yM.g() }, t.prototype.resize = function(t, e, n) { this.wM.xw(t, e, n) }, t.prototype.addAreaSeries = function(t) { void 0 === t && (t = {}), Ar((t = dr(t)).priceFormat); var e = k(D(Sr), _r, t),
                        n = this.wM.jt().Uf("Area", e),
                        r = new yr(n, this, this); return this.kM.set(r, n), this.NM.set(n, r), r }, t.prototype.addBaselineSeries = function(t) { void 0 === t && (t = {}), Ar((t = dr(t)).priceFormat); var e = k(D(Sr), D(Mr), t),
                        n = this.wM.jt().Uf("Baseline", e),
                        r = new yr(n, this, this); return this.kM.set(r, n), this.NM.set(n, r), r }, t.prototype.addBarSeries = function(t) { void 0 === t && (t = {}), Ar((t = dr(t)).priceFormat); var e = k(D(Sr), xr, t),
                        n = this.wM.jt().Uf("Bar", e),
                        r = new yr(n, this, this); return this.kM.set(r, n), this.NM.set(n, r), r }, t.prototype.addCandlestickSeries = function(t) { void 0 === t && (t = {}), dn(t = dr(t)), Ar(t.priceFormat); var e = k(D(Sr), wr, t),
                        n = this.wM.jt().Uf("Candlestick", e),
                        r = new vr(n, this, this); return this.kM.set(r, n), this.NM.set(n, r), r }, t.prototype.addHistogramSeries = function(t) { void 0 === t && (t = {}), Ar((t = dr(t)).priceFormat); var e = k(D(Sr), jr, t),
                        n = this.wM.jt().Uf("Histogram", e),
                        r = new yr(n, this, this); return this.kM.set(r, n), this.NM.set(n, r), r }, t.prototype.addLineSeries = function(t) { void 0 === t && (t = {}), Ar((t = dr(t)).priceFormat); var e = k(D(Sr), Or, t),
                        n = this.wM.jt().Uf("Line", e),
                        r = new yr(n, this, this); return this.kM.set(r, n), this.NM.set(n, r), r }, t.prototype.removeSeries = function(t) { var e = h(this.kM.get(t)),
                        n = this.yM.Yf(e);
                    this.wM.jt().Yf(e), this.DM(n), this.kM.delete(t), this.NM.delete(e) }, t.prototype._M = function(t, e) { this.DM(this.yM.Qw(t, e)) }, t.prototype.dM = function(t, e) { this.DM(this.yM.hM(t, e)) }, t.prototype.subscribeClick = function(t) { this.xM.u(t) }, t.prototype.unsubscribeClick = function(t) { this.xM._(t) }, t.prototype.subscribeCrosshairMove = function(t) { this.CM.u(t) }, t.prototype.unsubscribeCrosshairMove = function(t) { this.CM._(t) }, t.prototype.priceScale = function(t) { return void 0 === t && (t = this.wM.jt().Kf()), new Er(this.wM, t) }, t.prototype.timeScale = function() { return this.TM }, t.prototype.applyOptions = function(t) { this.wM.Pr(Cr(t)) }, t.prototype.options = function() { return this.wM.W() }, t.prototype.takeScreenshot = function() { return this.wM.Bw() }, t.prototype.DM = function(t) { var e = this.wM.jt();
                    e.jf(t.bt.ml, t.bt.oM, t.bt.lM), t.uM.forEach((function(t, e) { return e.Z(t.ph, t.aM) })), e.yl() }, t.prototype.AM = function(t) { return h(this.NM.get(t)) }, t.prototype.SM = function(t) { var e = this,
                        n = new Map;
                    t.qw.forEach((function(t, r) { n.set(e.AM(r), t) })); var r = void 0 === t.jw ? void 0 : this.AM(t.jw); return { time: t.rt && (t.rt.Co || t.rt.So), point: t.Iw, hoveredSeries: r, hoveredMarkerId: t.Uw, seriesPrices: n } }, t }();

            function Tr(t, e) { var n; if (P(t)) { var r = document.getElementById(t);
                    l(null !== r, "Cannot find element in DOM with id=".concat(t)), n = r } else n = t; return new Pr(n, e) } }, 1817: function(t, e, n) { "use strict";
            n.d(e, "a", (function() { return o })); var r = n(805),
                i = n(19);

            function o(t) { return Object(i.a)(1, arguments), Math.floor(Object(r.default)(t) / 1e3) } }, 1818: function(t, e, n) { "use strict";
            n.d(e, "a", (function() { return o })); var r = n(26),
                i = n(19);

            function o(t) { Object(i.a)(1, arguments); var e = Object(r.default)(t); return e.setSeconds(0, 0), e } }, 1819: function(t, e, n) { "use strict";
            n.d(e, "a", (function() { return s })); var r = n(803),
                i = n(804),
                o = n(19),
                a = n(40);

            function s(t, e) { if (Object(o.a)(2, arguments), !e || "object" !== typeof e) return new Date(NaN); var n = e.years ? Object(a.a)(e.years) : 0,
                    s = e.months ? Object(a.a)(e.months) : 0,
                    u = e.weeks ? Object(a.a)(e.weeks) : 0,
                    c = e.days ? Object(a.a)(e.days) : 0,
                    l = e.hours ? Object(a.a)(e.hours) : 0,
                    h = e.minutes ? Object(a.a)(e.minutes) : 0,
                    f = e.seconds ? Object(a.a)(e.seconds) : 0,
                    p = Object(i.default)(t, s + 12 * n),
                    d = Object(r.default)(p, c + 7 * u),
                    y = h + 60 * l,
                    v = f + 60 * y,
                    m = 1e3 * v,
                    g = new Date(d.getTime() - m); return g } }, 1820: function(t, e, n) { "use strict";
            n.d(e, "a", (function() { return v })); var r = n(479),
                i = n.n(r),
                o = n(406),
                a = n.n(o),
                s = n(1),
                u = n.n(s),
                c = n(1672),
                l = n.n(c),
                h = n(1477),
                f = n(1529);

            function p() { return p = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]) } return t }, p.apply(this, arguments) }

            function d(t, e) { return function(t) { if (Array.isArray(t)) return t }(t) || function(t, e) { if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(t))) return; var n = [],
                        r = !0,
                        i = !1,
                        o = void 0; try { for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0); } catch (u) { i = !0, o = u } finally { try { r || null == s.return || s.return() } finally { if (i) throw o } } return n }(t, e) || function(t, e) { if (!t) return; if ("string" === typeof t) return y(t, e); var n = Object.prototype.toString.call(t).slice(8, -1); "Object" === n && t.constructor && (n = t.constructor.name); if ("Map" === n || "Set" === n) return Array.from(t); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return y(t, e) }(t, e) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

            function y(t, e) {
                (null == e || e > t.length) && (e = t.length); for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]; return r } var v = Object(s.forwardRef)((function(t, e) { var n = t.aspect,
                    r = t.width,
                    o = void 0 === r ? "100%" : r,
                    c = t.height,
                    y = void 0 === c ? "100%" : c,
                    v = t.minWidth,
                    m = t.minHeight,
                    g = t.maxHeight,
                    b = t.children,
                    w = t.debounce,
                    x = void 0 === w ? 0 : w,
                    O = t.id,
                    _ = t.className,
                    M = d(Object(s.useState)({ containerWidth: -1, containerHeight: -1 }), 2),
                    j = M[0],
                    S = M[1],
                    E = Object(s.useRef)(null);
                Object(s.useImperativeHandle)(e, (function() { return E }), [E]); var k = d(Object(s.useState)(!1), 2),
                    A = k[0],
                    C = k[1],
                    P = function() { return E.current ? { containerWidth: E.current.clientWidth, containerHeight: E.current.clientHeight } : null },
                    T = function() { if (A) { var t = P(); if (t) { var e = j.containerWidth,
                                    n = j.containerHeight,
                                    r = t.containerWidth,
                                    i = t.containerHeight;
                                r === e && i === n || S({ containerWidth: r, containerHeight: i }) } } },
                    D = x > 0 ? i()(T, x) : T;
                Object(s.useEffect)((function() { if (A) { var t = P();
                        t && S(t) } }), [A]), Object(s.useEffect)((function() { C(!0) }), []); var N = { width: o, height: y, minWidth: v, minHeight: m, maxHeight: g }; return u.a.createElement(l.a, { handleWidth: !0, handleHeight: !0, onResize: D, targetRef: E }, u.a.createElement("div", p({}, null != O ? { id: "".concat(O) } : {}, { className: a()("recharts-responsive-container", _), style: N, ref: E }), function() { var t = j.containerWidth,
                        e = j.containerHeight; if (t < 0 || e < 0) return null;
                    Object(f.a)(Object(h.h)(o) || Object(h.h)(y), "The width(%s) and height(%s) are both fixed numbers,\n       maybe you don't need to use a ResponsiveContainer.", o, y), Object(f.a)(!n || n > 0, "The aspect(%s) must be greater than zero.", n); var r = Object(h.h)(o) ? t : o,
                        i = Object(h.h)(y) ? e : y; return n && n > 0 && (r ? i = r / n : i && (r = i * n), g && i > g && (i = g)), Object(f.a)(r > 0 || i > 0, "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.", r, i, o, y, v, m, n), Object(s.cloneElement)(b, { width: r, height: i }) }())) })) }, 1821: function(t, e, n) { "use strict";
            n.d(e, "a", (function() { return u })); var r = n(1592),
                i = n(1739),
                o = n(1612),
                a = n(1613),
                s = n(1517),
                u = Object(r.a)({ chartName: "AreaChart", GraphicalChild: i.a, axisComponents: [{ axisType: "xAxis", AxisComp: o.a }, { axisType: "yAxis", AxisComp: a.a }], formatAxisMap: s.b }) }, 1822: function(t, e, n) { "use strict"; var r = Math.PI,
                i = 2 * r,
                o = 1e-6,
                a = i - o;

            function s() { this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "" }

            function u() { return new s }
            s.prototype = u.prototype = { constructor: s, moveTo: function(t, e) { this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +e) }, closePath: function() { null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z") }, lineTo: function(t, e) { this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +e) }, quadraticCurveTo: function(t, e, n, r) { this._ += "Q" + +t + "," + +e + "," + (this._x1 = +n) + "," + (this._y1 = +r) }, bezierCurveTo: function(t, e, n, r, i, o) { this._ += "C" + +t + "," + +e + "," + +n + "," + +r + "," + (this._x1 = +i) + "," + (this._y1 = +o) }, arcTo: function(t, e, n, i, a) { t = +t, e = +e, n = +n, i = +i, a = +a; var s = this._x1,
                        u = this._y1,
                        c = n - t,
                        l = i - e,
                        h = s - t,
                        f = u - e,
                        p = h * h + f * f; if (a < 0) throw new Error("negative radius: " + a); if (null === this._x1) this._ += "M" + (this._x1 = t) + "," + (this._y1 = e);
                    else if (p > o)
                        if (Math.abs(f * c - l * h) > o && a) { var d = n - s,
                                y = i - u,
                                v = c * c + l * l,
                                m = d * d + y * y,
                                g = Math.sqrt(v),
                                b = Math.sqrt(p),
                                w = a * Math.tan((r - Math.acos((v + p - m) / (2 * g * b))) / 2),
                                x = w / b,
                                O = w / g;
                            Math.abs(x - 1) > o && (this._ += "L" + (t + x * h) + "," + (e + x * f)), this._ += "A" + a + "," + a + ",0,0," + +(f * d > h * y) + "," + (this._x1 = t + O * c) + "," + (this._y1 = e + O * l) } else this._ += "L" + (this._x1 = t) + "," + (this._y1 = e);
                    else; }, arc: function(t, e, n, s, u, c) { t = +t, e = +e, c = !!c; var l = (n = +n) * Math.cos(s),
                        h = n * Math.sin(s),
                        f = t + l,
                        p = e + h,
                        d = 1 ^ c,
                        y = c ? s - u : u - s; if (n < 0) throw new Error("negative radius: " + n);
                    null === this._x1 ? this._ += "M" + f + "," + p : (Math.abs(this._x1 - f) > o || Math.abs(this._y1 - p) > o) && (this._ += "L" + f + "," + p), n && (y < 0 && (y = y % i + i), y > a ? this._ += "A" + n + "," + n + ",0,1," + d + "," + (t - l) + "," + (e - h) + "A" + n + "," + n + ",0,1," + d + "," + (this._x1 = f) + "," + (this._y1 = p) : y > o && (this._ += "A" + n + "," + n + ",0," + +(y >= r) + "," + d + "," + (this._x1 = t + n * Math.cos(u)) + "," + (this._y1 = e + n * Math.sin(u)))) }, rect: function(t, e, n, r) { this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +e) + "h" + +n + "v" + +r + "h" + -n + "Z" }, toString: function() { return this._ } }, e.a = u }, 1823: function(t, e, n) { "use strict";
            n.d(e, "b", (function() { return a })), n.d(e, "c", (function() { return s })); var r = Math.sqrt(50),
                i = Math.sqrt(10),
                o = Math.sqrt(2);

            function a(t, e, n) { var a = (e - t) / Math.max(0, n),
                    s = Math.floor(Math.log(a) / Math.LN10),
                    u = a / Math.pow(10, s); return s >= 0 ? (u >= r ? 10 : u >= i ? 5 : u >= o ? 2 : 1) * Math.pow(10, s) : -Math.pow(10, -s) / (u >= r ? 10 : u >= i ? 5 : u >= o ? 2 : 1) }

            function s(t, e, n) { var a = Math.abs(e - t) / Math.max(0, n),
                    s = Math.pow(10, Math.floor(Math.log(a) / Math.LN10)),
                    u = a / s; return u >= r ? s *= 10 : u >= i ? s *= 5 : u >= o && (s *= 2), e < t ? -s : s }
            e.a = function(t, e, n) { var r, i, o, s, u = -1; if (n = +n, (t = +t) === (e = +e) && n > 0) return [t]; if ((r = e < t) && (i = t, t = e, e = i), 0 === (s = a(t, e, n)) || !isFinite(s)) return []; if (s > 0) { var c = Math.round(t / s),
                        l = Math.round(e / s); for (c * s < t && ++c, l * s > e && --l, o = new Array(i = l - c + 1); ++u < i;) o[u] = (c + u) * s } else { s = -s; var h = Math.round(t * s),
                        f = Math.round(e * s); for (h / s < t && ++h, f / s > e && --f, o = new Array(i = f - h + 1); ++u < i;) o[u] = (h + u) / s } return r && o.reverse(), o } }, 1824: function(t, e, n) { "use strict"; var r = n(1552),
                i = n(1712),
                o = n(1602),
                a = Object(i.a)(r.a),
                s = a.right;
            a.left, Object(i.a)(o.a).center;
            e.a = s }, 1825: function(t, e, n) { "use strict";
            e.a = function(t, e) { return t = +t, e = +e,
                    function(n) { return Math.round(t * (1 - n) + e * n) } } }, 1826: function(t, e, n) { "use strict";
            n.d(e, "a", (function() { return u })); var r = n(1592),
                i = n(1783),
                o = n(1612),
                a = n(1613),
                s = n(1517),
                u = Object(r.a)({ chartName: "BarChart", GraphicalChild: i.a, defaultTooltipEventType: "axis", validateTooltipEventTypes: ["axis", "item"], axisComponents: [{ axisType: "xAxis", AxisComp: o.a }, { axisType: "yAxis", AxisComp: a.a }], formatAxisMap: s.b }) }, 1827: function(t, e, n) { "use strict";
            n.d(e, "a", (function() { return a })); var r = n(26),
                i = n(40),
                o = n(19);

            function a(t) { Object(o.a)(1, arguments); var e = Object(i.a)(t); return Object(r.default)(1e3 * e) } }, 1833: function(t, e, n) { "use strict";
            n.d(e, "a", (function() { return o })), n.d(e, "b", (function() { return a })); var r, i, o, a, s = n(1533),
                u = n(1711),
                c = n(1534),
                l = function(t, e) { var n = Object(c.b)(t, e); if (!n) return t + ""; var r = n[0],
                        i = n[1]; return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0") },
                h = { "%": function(t, e) { return (100 * t).toFixed(e) }, b: function(t) { return Math.round(t).toString(2) }, c: function(t) { return t + "" }, d: c.a, e: function(t, e) { return t.toExponential(e) }, f: function(t, e) { return t.toFixed(e) }, g: function(t, e) { return t.toPrecision(e) }, o: function(t) { return Math.round(t).toString(8) }, p: function(t, e) { return l(100 * t, e) }, r: l, s: function(t, e) { var n = Object(c.b)(t, e); if (!n) return t + ""; var i = n[0],
                            o = n[1],
                            a = o - (r = 3 * Math.max(-8, Math.min(8, Math.floor(o / 3)))) + 1,
                            s = i.length; return a === s ? i : a > s ? i + new Array(a - s + 1).join("0") : a > 0 ? i.slice(0, a) + "." + i.slice(a) : "0." + new Array(1 - a).join("0") + Object(c.b)(t, Math.max(0, e + a - 1))[0] }, X: function(t) { return Math.round(t).toString(16).toUpperCase() }, x: function(t) { return Math.round(t).toString(16) } },
                f = function(t) { return t },
                p = Array.prototype.map,
                d = ["y", "z", "a", "f", "p", "n", "\xb5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
            i = function(t) { var e, n, i = void 0 === t.grouping || void 0 === t.thousands ? f : (e = p.call(t.grouping, Number), n = t.thousands + "", function(t, r) { for (var i = t.length, o = [], a = 0, s = e[0], u = 0; i > 0 && s > 0 && (u + s + 1 > r && (s = Math.max(1, r - u)), o.push(t.substring(i -= s, i + s)), !((u += s + 1) > r));) s = e[a = (a + 1) % e.length]; return o.reverse().join(n) }),
                    o = void 0 === t.currency ? "" : t.currency[0] + "",
                    a = void 0 === t.currency ? "" : t.currency[1] + "",
                    c = void 0 === t.decimal ? "." : t.decimal + "",
                    l = void 0 === t.numerals ? f : function(t) { return function(e) { return e.replace(/[0-9]/g, (function(e) { return t[+e] })) } }(p.call(t.numerals, String)),
                    y = void 0 === t.percent ? "%" : t.percent + "",
                    v = void 0 === t.minus ? "\u2212" : t.minus + "",
                    m = void 0 === t.nan ? "NaN" : t.nan + "";

                function g(t) { var e = (t = Object(u.a)(t)).fill,
                        n = t.align,
                        s = t.sign,
                        f = t.symbol,
                        p = t.zero,
                        g = t.width,
                        b = t.comma,
                        w = t.precision,
                        x = t.trim,
                        O = t.type; "n" === O ? (b = !0, O = "g") : h[O] || (void 0 === w && (w = 12), x = !0, O = "g"), (p || "0" === e && "=" === n) && (p = !0, e = "0", n = "="); var _ = "$" === f ? o : "#" === f && /[boxX]/.test(O) ? "0" + O.toLowerCase() : "",
                        M = "$" === f ? a : /[%p]/.test(O) ? y : "",
                        j = h[O],
                        S = /[defgprs%]/.test(O);

                    function E(t) { var o, a, u, h = _,
                            f = M; if ("c" === O) f = j(t) + f, t = "";
                        else { var y = (t = +t) < 0 || 1 / t < 0; if (t = isNaN(t) ? m : j(Math.abs(t), w), x && (t = function(t) { t: for (var e, n = t.length, r = 1, i = -1; r < n; ++r) switch (t[r]) {
                                        case ".":
                                            i = e = r; break;
                                        case "0":
                                            0 === i && (i = r), e = r; break;
                                        default:
                                            if (!+t[r]) break t;
                                            i > 0 && (i = 0) }
                                    return i > 0 ? t.slice(0, i) + t.slice(e + 1) : t }(t)), y && 0 === +t && "+" !== s && (y = !1), h = (y ? "(" === s ? s : v : "-" === s || "(" === s ? "" : s) + h, f = ("s" === O ? d[8 + r / 3] : "") + f + (y && "(" === s ? ")" : ""), S)
                                for (o = -1, a = t.length; ++o < a;)
                                    if (48 > (u = t.charCodeAt(o)) || u > 57) { f = (46 === u ? c + t.slice(o + 1) : t.slice(o)) + f, t = t.slice(0, o); break } }
                        b && !p && (t = i(t, 1 / 0)); var E = h.length + t.length + f.length,
                            k = E < g ? new Array(g - E + 1).join(e) : ""; switch (b && p && (t = i(k + t, k.length ? g - f.length : 1 / 0), k = ""), n) {
                            case "<":
                                t = h + t + f + k; break;
                            case "=":
                                t = h + k + t + f; break;
                            case "^":
                                t = k.slice(0, E = k.length >> 1) + h + t + f + k.slice(E); break;
                            default:
                                t = k + h + t + f } return l(t) } return w = void 0 === w ? 6 : /[gprs]/.test(O) ? Math.max(1, Math.min(21, w)) : Math.max(0, Math.min(20, w)), E.toString = function() { return t + "" }, E } return { format: g, formatPrefix: function(t, e) { var n = g(((t = Object(u.a)(t)).type = "f", t)),
                            r = 3 * Math.max(-8, Math.min(8, Math.floor(Object(s.a)(e) / 3))),
                            i = Math.pow(10, -r),
                            o = d[8 + r / 3]; return function(t) { return n(i * t) + o } } } }({ thousands: ",", grouping: [3], currency: ["$", ""] }), o = i.format, a = i.formatPrefix }, 1842: function(t, e, n) { "use strict";
            n.d(e, "a", (function() { return y })); var r = n(176),
                i = n(237),
                o = n(26),
                a = n(691);

            function s(t) { return Object(a.a)({}, t) } var u = n(365),
                c = n(19),
                l = 6e4,
                h = 1440,
                f = 43200,
                p = 525600;

            function d(t, e) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                Object(c.a)(2, arguments); var a = n.locale || u.a; if (!a.formatDistance) throw new RangeError("locale must contain localize.formatDistance property"); var d = Object(i.a)(t, e); if (isNaN(d)) throw new RangeError("Invalid time value"); var y, v, m = s(n);
                m.addSuffix = Boolean(n.addSuffix), m.comparison = d, d > 0 ? (y = Object(o.default)(e), v = Object(o.default)(t)) : (y = Object(o.default)(t), v = Object(o.default)(e)); var g, b = null == n.roundingMethod ? "round" : String(n.roundingMethod); if ("floor" === b) g = Math.floor;
                else if ("ceil" === b) g = Math.ceil;
                else { if ("round" !== b) throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");
                    g = Math.round } var w, x = v.getTime() - y.getTime(),
                    O = x / l,
                    _ = Object(r.a)(v) - Object(r.a)(y),
                    M = (x - _) / l; if ("second" === (w = null == n.unit ? O < 1 ? "second" : O < 60 ? "minute" : O < h ? "hour" : M < f ? "day" : M < p ? "month" : "year" : String(n.unit))) { var j = g(x / 1e3); return a.formatDistance("xSeconds", j, m) } if ("minute" === w) { var S = g(O); return a.formatDistance("xMinutes", S, m) } if ("hour" === w) { var E = g(O / 60); return a.formatDistance("xHours", E, m) } if ("day" === w) { var k = g(M / h); return a.formatDistance("xDays", k, m) } if ("month" === w) { var A = g(M / f); return 12 === A && "month" !== n.unit ? a.formatDistance("xYears", 1, m) : a.formatDistance("xMonths", A, m) } if ("year" === w) { var C = g(M / p); return a.formatDistance("xYears", C, m) } throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'") }

            function y(t, e) { return Object(c.a)(1, arguments), d(t, Date.now(), e) } } }
]);