/*!
 * The Final Countdown for jQuery v2.2.0 (http://hilios.github.io/jQuery.countdown/)
 * Copyright (c) 2016 Edson Hilios
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
! function(t) { "use strict"; "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery) }(function(t) { "use strict";

    function e(t) { if (t instanceof Date) return t; if (String(t).match(a)) return String(t).match(/^[0-9]*$/) && (t = Number(t)), String(t).match(/\-/) && (t = String(t).replace(/\-/g, "/")), new Date(t); throw new Error("Couldn't cast `" + t + "` to a date object.") }

    function s(t) { var e = t.toString().replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1"); return new RegExp(e) }

    function n(t) { return function(e) { var n = e.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi); if (n)
                for (var o = 0, a = n.length; o < a; ++o) { var h = n[o].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),
                        r = s(h[0]),
                        c = h[1] || "",
                        f = h[3] || "",
                        u = null;
                    h = h[2], l.hasOwnProperty(h) && (u = l[h], u = Number(t[u])), null !== u && ("!" === c && (u = i(f, u)), "" === c && u < 10 && (u = "0" + u.toString()), e = e.replace(r, u.toString())) }
            return e = e.replace(/%%/, "%") } }

    function i(t, e) { var s = "s",
            n = ""; return t && (t = t.replace(/(:|;|\s)/gi, "").split(/\,/), 1 === t.length ? s = t[0] : (n = t[0], s = t[1])), Math.abs(e) > 1 ? s : n } var o = [],
        a = [],
        h = { precision: 100, elapse: !1, defer: !1 };
    a.push(/^[0-9]*$/.source), a.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), a.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), a = new RegExp(a.join("|")); var l = { Y: "years", m: "months", n: "daysToMonth", d: "daysToWeek", w: "weeks", W: "weeksToMonth", H: "hours", M: "minutes", S: "seconds", D: "totalDays", I: "totalHours", N: "totalMinutes", T: "totalSeconds" },
        r = function(e, s, n) { this.el = e, this.$el = t(e), this.interval = null, this.offset = {}, this.options = t.extend({}, h), this.instanceNumber = o.length, o.push(this), this.$el.data("countdown-instance", this.instanceNumber), n && ("function" == typeof n ? (this.$el.on("update.countdown", n), this.$el.on("stoped.countdown", n), this.$el.on("finish.countdown", n)) : this.options = t.extend({}, h, n)), this.setFinalDate(s), !1 === this.options.defer && this.start() };
    t.extend(r.prototype, { start: function() { null !== this.interval && clearInterval(this.interval); var t = this;
            this.update(), this.interval = setInterval(function() { t.update.call(t) }, this.options.precision) }, stop: function() { clearInterval(this.interval), this.interval = null, this.dispatchEvent("stoped") }, toggle: function() { this.interval ? this.stop() : this.start() }, pause: function() { this.stop() }, resume: function() { this.start() }, remove: function() { this.stop.call(this), o[this.instanceNumber] = null, delete this.$el.data().countdownInstance }, setFinalDate: function(t) { this.finalDate = e(t) }, update: function() { if (0 === this.$el.closest("html").length) return void this.remove(); var e, s = t._data(this.el, "events") !== undefined,
                n = new Date;
            e = this.finalDate.getTime() - n.getTime(), e = Math.ceil(e / 1e3), e = !this.options.elapse && e < 0 ? 0 : Math.abs(e), this.totalSecsLeft !== e && s && (this.totalSecsLeft = e, this.elapsed = n >= this.finalDate, this.offset = { seconds: this.totalSecsLeft % 60, minutes: Math.floor(this.totalSecsLeft / 60) % 60, hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24, days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7, daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7, daysToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 % 30.4368), weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7), weeksToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7) % 4, months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368), years: Math.abs(this.finalDate.getFullYear() - n.getFullYear()), totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24), totalHours: Math.floor(this.totalSecsLeft / 60 / 60), totalMinutes: Math.floor(this.totalSecsLeft / 60), totalSeconds: this.totalSecsLeft }, this.options.elapse || 0 !== this.totalSecsLeft ? this.dispatchEvent("update") : (this.stop(), this.dispatchEvent("finish"))) }, dispatchEvent: function(e) { var s = t.Event(e + ".countdown");
            s.finalDate = this.finalDate, s.elapsed = this.elapsed, s.offset = t.extend({}, this.offset), s.strftime = n(this.offset), this.$el.trigger(s) } }), t.fn.countdown = function() { var e = Array.prototype.slice.call(arguments, 0); return this.each(function() { var s = t(this).data("countdown-instance"); if (s !== undefined) { var n = o[s],
                    i = e[0];
                r.prototype.hasOwnProperty(i) ? n[i].apply(n, e.slice(1)) : null === String(i).match(/^[$A-Z_][0-9A-Z_$]*$/i) ? (n.setFinalDate.call(n, i), n.start()) : t.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi, i)) } else new r(this, e[0], e[1]) }) } });