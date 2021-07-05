/*!
 * jQuery.scrollTo
 * Copyright (c) 2007-2015 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
 * Licensed under MIT
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 * @projectDescription Lightweight, cross-browser and highly customizable animated scrolling with jQuery
 * @author Ariel Flesler
 * @version 2.1.2
 */
! function(e) { "use strict"; "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery) }(function(e) { "use strict";

    function t(t) { return !t.nodeName || -1 !== e.inArray(t.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]) }

    function o(t) { return e.isFunction(t) || e.isPlainObject(t) ? t : { top: t, left: t } } var n = e.scrollTo = function(t, o, n) { return e(window).scrollTo(t, o, n) }; return n.defaults = { axis: "xy", duration: 0, limit: !0 }, e.fn.scrollTo = function(r, i, s) { "object" == typeof i && (s = i, i = 0), "function" == typeof s && (s = { onAfter: s }), "max" === r && (r = 9e9), s = e.extend({}, n.defaults, s), i = i || s.duration; var a = s.queue && s.axis.length > 1; return a && (i /= 2), s.offset = o(s.offset), s.over = o(s.over), this.each(function() {
            function f(t) { var o = e.extend({}, s, { queue: !0, duration: i, complete: t && function() { t.call(l, m, s) } });
                d.animate(p, o) } if (null !== r) { var u, c = t(this),
                    l = c ? this.contentWindow || window : this,
                    d = e(l),
                    m = r,
                    p = {}; switch (typeof m) {
                    case "number":
                    case "string":
                        if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(m)) { m = o(m); break }
                        m = c ? e(m) : e(m, l);
                    case "object":
                        if (0 === m.length) return;
                        (m.is || m.style) && (u = (m = e(m)).offset()) } var h = e.isFunction(s.offset) && s.offset(l, m) || s.offset;
                e.each(s.axis.split(""), function(e, t) { var o = "x" === t ? "Left" : "Top",
                        r = o.toLowerCase(),
                        i = "scroll" + o,
                        x = d[i](),
                        v = n.max(l, t); if (u) p[i] = u[r] + (c ? 0 : x - d.offset()[r]), s.margin && (p[i] -= parseInt(m.css("margin" + o), 10) || 0, p[i] -= parseInt(m.css("border" + o + "Width"), 10) || 0), p[i] += h[r] || 0, s.over[r] && (p[i] += m["x" === t ? "width" : "height"]() * s.over[r]);
                    else { var w = m[r];
                        p[i] = w.slice && "%" === w.slice(-1) ? parseFloat(w) / 100 * v : w }
                    s.limit && /^\d+$/.test(p[i]) && (p[i] = p[i] <= 0 ? 0 : Math.min(p[i], v)), !e && s.axis.length > 1 && (x === p[i] ? p = {} : a && (f(s.onAfterFirst), p = {})) }), f(s.onAfter) } }) }, n.max = function(o, n) { var r = "x" === n ? "Width" : "Height",
            i = "scroll" + r; if (!t(o)) return o[i] - e(o)[r.toLowerCase()](); var s = "client" + r,
            a = o.ownerDocument || o.document,
            f = a.documentElement,
            u = a.body; return Math.max(f[i], u[i]) - Math.min(f[s], u[s]) }, e.Tween.propHooks.scrollLeft = e.Tween.propHooks.scrollTop = { get: function(t) { return e(t.elem)[t.prop]() }, set: function(t) { var o = this.get(t); if (t.options.interrupt && t._last && t._last !== o) return e(t.elem).stop(); var n = Math.round(t.now);
            o !== n && (e(t.elem)[t.prop](n), t._last = this.get(t)) } }, n });