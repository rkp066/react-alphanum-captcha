var e,
    t = require("react"),
    n = (e = t) && "object" == typeof e && "default" in e ? e.default : e;
var r = Object.getOwnPropertySymbols,
    a = Object.prototype.hasOwnProperty,
    o = Object.prototype.propertyIsEnumerable;
var i = function() {
        try {
            if (!Object.assign) return !1;
            var e = new String("abc");
            if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
            for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
            if ("0123456789" !== Object.getOwnPropertyNames(t).map(function(e) {
                    return t[e]
                }).join("")) return !1;
            var r = {};
            return "abcdefghijklmnopqrst".split("").forEach(function(e) {
                r[e] = e
            }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
        } catch (e) {
            return !1
        }
    }() ? Object.assign : function(e, t) {
        for (var n, i, c = function(e) {
                if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(e)
            }(e), u = 1; u < arguments.length; u++) {
            for (var s in n = Object(arguments[u])) a.call(n, s) && (c[s] = n[s]);
            if (r) {
                i = r(n);
                for (var l = 0; l < i.length; l++) o.call(n, i[l]) && (c[i[l]] = n[i[l]])
            }
        }
        return c
    },
    c = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
    u = function() {};
if ("production" !== process.env.NODE_ENV) {
    var s = c,
        l = {};
    u = function(e) {
        var t = "Warning: " + e;
        "undefined" != typeof console && console.error(t);
        try {
            throw new Error(t)
        } catch (e) {}
    }
}
var p = function(e, t, n, r, a) {
        if ("production" !== process.env.NODE_ENV)
            for (var o in e)
                if (e.hasOwnProperty(o)) {
                    var i;
                    try {
                        if ("function" != typeof e[o]) {
                            var c = Error((r || "React class") + ": " + n + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.");
                            throw c.name = "Invariant Violation", c
                        }
                        i = e[o](t, o, r, n, null, s)
                    } catch (e) {
                        i = e
                    }
                    if (!i || i instanceof Error || u((r || "React class") + ": type specification of " + n + " `" + o + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof i + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."), i instanceof Error && !(i.message in l)) {
                        l[i.message] = !0;
                        var p = a ? a() : "";
                        u("Failed " + n + " type: " + i.message + (null != p ? p : ""))
                    }
                }
    },
    f = function() {};

function d() {
    return null
}
"production" !== process.env.NODE_ENV && (f = function(e) {
    var t = "Warning: " + e;
    "undefined" != typeof console && console.error(t);
    try {
        throw new Error(t)
    } catch (e) {}
});
var y = function(e, t) {
    var n = "function" == typeof Symbol && Symbol.iterator,
        r = "@@iterator";
    var a = "<<anonymous>>",
        o = {
            array: y("array"),
            bool: y("boolean"),
            func: y("function"),
            number: y("number"),
            object: y("object"),
            string: y("string"),
            symbol: y("symbol"),
            any: l(d),
            arrayOf: function(e) {
                return l(function(t, n, r, a, o) {
                    if ("function" != typeof e) return new s("Property `" + o + "` of component `" + r + "` has invalid PropType notation inside arrayOf.");
                    var i = t[n];
                    if (!Array.isArray(i)) {
                        var u = v(i);
                        return new s("Invalid " + a + " `" + o + "` of type `" + u + "` supplied to `" + r + "`, expected an array.")
                    }
                    for (var l = 0; l < i.length; l++) {
                        var p = e(i, l, r, a, o + "[" + l + "]", c);
                        if (p instanceof Error) return p
                    }
                    return null
                })
            },
            element: function() {
                return l(function(t, n, r, a, o) {
                    var i = t[n];
                    if (!e(i)) {
                        var c = v(i);
                        return new s("Invalid " + a + " `" + o + "` of type `" + c + "` supplied to `" + r + "`, expected a single ReactElement.")
                    }
                    return null
                })
            }(),
            instanceOf: function(e) {
                return l(function(t, n, r, o, i) {
                    if (!(t[n] instanceof e)) {
                        var c = e.name || a,
                            u = function(e) {
                                if (!e.constructor || !e.constructor.name) return a;
                                return e.constructor.name
                            }(t[n]);
                        return new s("Invalid " + o + " `" + i + "` of type `" + u + "` supplied to `" + r + "`, expected instance of `" + c + "`.")
                    }
                    return null
                })
            },
            node: function() {
                return l(function(e, t, n, r, a) {
                    if (!h(e[t])) return new s("Invalid " + r + " `" + a + "` supplied to `" + n + "`, expected a ReactNode.");
                    return null
                })
            }(),
            objectOf: function(e) {
                return l(function(t, n, r, a, o) {
                    if ("function" != typeof e) return new s("Property `" + o + "` of component `" + r + "` has invalid PropType notation inside objectOf.");
                    var i = t[n],
                        u = v(i);
                    if ("object" !== u) return new s("Invalid " + a + " `" + o + "` of type `" + u + "` supplied to `" + r + "`, expected an object.");
                    for (var l in i)
                        if (i.hasOwnProperty(l)) {
                            var p = e(i, l, r, a, o + "." + l, c);
                            if (p instanceof Error) return p
                        } return null
                })
            },
            oneOf: function(e) {
                if (!Array.isArray(e)) return "production" !== process.env.NODE_ENV && f("Invalid argument supplied to oneOf, expected an instance of array."), d;
                return l(function(t, n, r, a, o) {
                    for (var i = t[n], c = 0; c < e.length; c++)
                        if (u(i, e[c])) return null;
                    var l = JSON.stringify(e);
                    return new s("Invalid " + a + " `" + o + "` of value `" + i + "` supplied to `" + r + "`, expected one of " + l + ".")
                })
            },
            oneOfType: function(e) {
                if (!Array.isArray(e)) return "production" !== process.env.NODE_ENV && f("Invalid argument supplied to oneOfType, expected an instance of array."), d;
                for (var t = 0; t < e.length; t++) {
                    var n = e[t];
                    if ("function" != typeof n) return f("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + b(n) + " at index " + t + "."), d
                }
                return l(function(t, n, r, a, o) {
                    for (var i = 0; i < e.length; i++) {
                        var u = e[i];
                        if (null == u(t, n, r, a, o, c)) return null
                    }
                    return new s("Invalid " + a + " `" + o + "` supplied to `" + r + "`.")
                })
            },
            shape: function(e) {
                return l(function(t, n, r, a, o) {
                    var i = t[n],
                        u = v(i);
                    if ("object" !== u) return new s("Invalid " + a + " `" + o + "` of type `" + u + "` supplied to `" + r + "`, expected `object`.");
                    for (var l in e) {
                        var p = e[l];
                        if (p) {
                            var f = p(i, l, r, a, o + "." + l, c);
                            if (f) return f
                        }
                    }
                    return null
                })
            },
            exact: function(e) {
                return l(function(t, n, r, a, o) {
                    var u = t[n],
                        l = v(u);
                    if ("object" !== l) return new s("Invalid " + a + " `" + o + "` of type `" + l + "` supplied to `" + r + "`, expected `object`.");
                    var p = i({}, t[n], e);
                    for (var f in p) {
                        var d = e[f];
                        if (!d) return new s("Invalid " + a + " `" + o + "` key `" + f + "` supplied to `" + r + "`.\nBad object: " + JSON.stringify(t[n], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(e), null, "  "));
                        var y = d(u, f, r, a, o + "." + f, c);
                        if (y) return y
                    }
                    return null
                })
            }
        };

    function u(e, t) {
        return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
    }

    function s(e) {
        this.message = e, this.stack = ""
    }

    function l(e) {
        if ("production" !== process.env.NODE_ENV) var n = {},
            r = 0;

        function o(o, i, u, l, p, d, y) {
            if (l = l || a, d = d || u, y !== c) {
                if (t) {
                    var h = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
                    throw h.name = "Invariant Violation", h
                }
                if ("production" !== process.env.NODE_ENV && "undefined" != typeof console) {
                    var v = l + ":" + u;
                    !n[v] && r < 3 && (f("You are manually calling a React.PropTypes validation function for the `" + d + "` prop on `" + l + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."), n[v] = !0, r++)
                }
            }
            return null == i[u] ? o ? new s(null === i[u] ? "The " + p + " `" + d + "` is marked as required in `" + l + "`, but its value is `null`." : "The " + p + " `" + d + "` is marked as required in `" + l + "`, but its value is `undefined`.") : null : e(i, u, l, p, d)
        }
        var i = o.bind(null, !1);
        return i.isRequired = o.bind(null, !0), i
    }

    function y(e) {
        return l(function(t, n, r, a, o, i) {
            var c = t[n];
            return v(c) !== e ? new s("Invalid " + a + " `" + o + "` of type `" + m(c) + "` supplied to `" + r + "`, expected `" + e + "`.") : null
        })
    }

    function h(t) {
        switch (typeof t) {
            case "number":
            case "string":
            case "undefined":
                return !0;
            case "boolean":
                return !t;
            case "object":
                if (Array.isArray(t)) return t.every(h);
                if (null === t || e(t)) return !0;
                var a = function(e) {
                    var t = e && (n && e[n] || e[r]);
                    if ("function" == typeof t) return t
                }(t);
                if (!a) return !1;
                var o, i = a.call(t);
                if (a !== t.entries) {
                    for (; !(o = i.next()).done;)
                        if (!h(o.value)) return !1
                } else
                    for (; !(o = i.next()).done;) {
                        var c = o.value;
                        if (c && !h(c[1])) return !1
                    }
                return !0;
            default:
                return !1
        }
    }

    function v(e) {
        var t = typeof e;
        return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : function(e, t) {
            return "symbol" === e || "Symbol" === t["@@toStringTag"] || "function" == typeof Symbol && t instanceof Symbol
        }(t, e) ? "symbol" : t
    }

    function m(e) {
        if (null == e) return "" + e;
        var t = v(e);
        if ("object" === t) {
            if (e instanceof Date) return "date";
            if (e instanceof RegExp) return "regexp"
        }
        return t
    }

    function b(e) {
        var t = m(e);
        switch (t) {
            case "array":
            case "object":
                return "an " + t;
            case "boolean":
            case "date":
            case "regexp":
                return "a " + t;
            default:
                return t
        }
    }
    return s.prototype = Error.prototype, o.checkPropTypes = p, o.PropTypes = o, o
};

function h() {}
var v = function(e, t) {
    return e(t = {
        exports: {}
    }, t.exports), t.exports
}(function(e) {
    if ("production" !== process.env.NODE_ENV) {
        var t = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
        e.exports = y(function(e) {
            return "object" == typeof e && null !== e && e.$$typeof === t
        }, !0)
    } else e.exports = function() {
        function e(e, t, n, r, a, o) {
            if (o !== c) {
                var i = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                throw i.name = "Invariant Violation", i
            }
        }

        function t() {
            return e
        }
        e.isRequired = e;
        var n = {
            array: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t
        };
        return n.checkPropTypes = h, n.PropTypes = n, n
    }()
});

function m(e, t) {
    return e = Math.ceil(e), t = Math.floor(t), Math.floor(Math.random() * (t - e)) + e
}
function randomize(){
    var randomText = "";
    var characters = "ABCDEFGHIkLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 6; i++) {
           randomText += characters.charAt(Math.floor(Math.random() * characters.length));
        }
    return randomText
}
var b = function(e) {
    function t() {
        for (var t = this, n = [], r = arguments.length; r--;) n[r] = arguments[r];
        e.apply(this, n), this.state = {
            // solution: m(111111, 999999),
            solution: randomize(),
            input: ""
        }, this.componentDidMount = function() {
            t.drawCaptcha()
        }, this.drawCaptcha = function() {
            var e = t.state.solution,
                n = t.canvas,
                r = n.width,
                a = n.height,
                o = t.canvas.getContext("2d");
            o.clearRect(0, 0, r, a), o.font = "40px serif", o.textAlign = "center", o.textBaseline = "middle", o.fillText(e, r / 2, a / 2 + 3), o.strokeStyle = "#000000", o.beginPath(), o.moveTo(m(5, 20), m(5, 20)), o.lineTo(r - m(5, 20), a - m(5, 20)), o.stroke(), o.moveTo(m(5, 20), a - m(5, 20)), o.lineTo(r - m(5, 20), m(5, 20)), o.stroke(), o.closePath()
        }, this.refresh = function() {
            t.setState({
                // solution: m(111111, 999999),
                solution: randomize(),
                input: ""
            }, t.drawCaptcha)
        }, this.playAudio = function() {
            var e = new SpeechSynthesisUtterance(t.state.solution.toString().split("").join(" "));
            e.rate = .25, window.speechSynthesis.speak(e)
        }, this.handleChange = function(e) {
            var n = t.props.onChange,
                r = t.state.solution;
            t.setState({
                input: e.target.value
            }), n(e.target.value === r.toString())
        }
    }
    return e && (t.__proto__ = e), (t.prototype = Object.create(e && e.prototype)).constructor = t, t.prototype.render = function() {
        var e = this,
            t = this.props.placeholder,
            r = this.state.input;
        return n.createElement("div", {
            className: "rnc"
        }, n.createElement("div", {
            className: "rnc-row"
        }, n.createElement("canvas", {
            ref: function(t) {
                return e.canvas = t
            },
            width: 200,
            height: 50,
            className: "rnc-canvas",
            "data-testid": "captcha-canvas"
        }), n.createElement("div", {
            className: "rnc-column"
        }, n.createElement("button", {
            type: "button",
            "aria-label": "get new captcha",
            onClick: this.refresh,
            className: "rnc-button",
            "data-testid": "captcha-refresh"
        }, n.createElement("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24"
        }, n.createElement("g", {
            "data-name": "Layer 2"
        }, n.createElement("g", {
            "data-name": "refresh"
        }, n.createElement("rect", {
            width: "24",
            height: "24",
            opacity: "0"
        }), n.createElement("path", {
            d: "M20.3 13.43a1 1 0 0 0-1.25.65A7.14 7.14 0 0 1 12.18 19 7.1 7.1 0 0 1 5 12a7.1 7.1 0 0 1 7.18-7 7.26 7.26 0 0 1 4.65 1.67l-2.17-.36a1 1 0 0 0-1.15.83 1 1 0 0 0 .83 1.15l4.24.7h.17a1 1 0 0 0 .34-.06.33.33 0 0 0 .1-.06.78.78 0 0 0 .2-.11l.09-.11c0-.05.09-.09.13-.15s0-.1.05-.14a1.34 1.34 0 0 0 .07-.18l.75-4a1 1 0 0 0-2-.38l-.27 1.45A9.21 9.21 0 0 0 12.18 3 9.1 9.1 0 0 0 3 12a9.1 9.1 0 0 0 9.18 9A9.12 9.12 0 0 0 21 14.68a1 1 0 0 0-.7-1.25z"
        }))))), n.createElement("button", {
            type: "button",
            "aria-label": "play audio",
            onClick: this.playAudio,
            className: "rnc-button",
            "data-testid": "captcha-audio"
        }, n.createElement("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24"
        }, n.createElement("g", {
            "data-name": "Layer 2"
        }, n.createElement("g", {
            "data-name": "volume-up"
        }, n.createElement("rect", {
            width: "24",
            height: "24",
            opacity: "0"
        }), n.createElement("path", {
            d: "M18.28 8.37a1 1 0 1 0-1.56 1.26 4 4 0 0 1 0 4.74A1 1 0 0 0 17.5 16a1 1 0 0 0 .78-.37 6 6 0 0 0 0-7.26z"
        }), n.createElement("path", {
            d: "M19.64 5.23a1 1 0 1 0-1.28 1.54A6.8 6.8 0 0 1 21 12a6.8 6.8 0 0 1-2.64 5.23 1 1 0 0 0-.13 1.41A1 1 0 0 0 19 19a1 1 0 0 0 .64-.23A8.75 8.75 0 0 0 23 12a8.75 8.75 0 0 0-3.36-6.77z"
        }), n.createElement("path", {
            d: "M15 3.12a1 1 0 0 0-1 0L7.52 7.57h-5a1 1 0 0 0-1 1v6.86a1 1 0 0 0 1 1h5l6.41 4.4a1.06 1.06 0 0 0 .57.17 1 1 0 0 0 1-1V4a1 1 0 0 0-.5-.88zm-1.47 15L8.4 14.6a1 1 0 0 0-.57-.17H3.5V9.57h4.33a1 1 0 0 0 .57-.17l5.1-3.5z"
        }))))))), n.createElement("input", {
            type: "text",
            value: r,
            onChange: this.handleChange,
            placeholder: t,
            className: "rnc-input",
            "data-testid": "captcha-input"
        }))
    }, t
}(t.Component);
b.defaultProps = {
    placeholder: "Insert captcha"
}, b.propTypes = {
    onChange: v.func.isRequired,
    placeholder: v.string
}, module.exports = b;
//# sourceMappingURL=captcha.js.map