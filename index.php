<?php 

header_remove("x-powered-by");

header("Content-Type: text/html; charset=UTF-8");
header("Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; img-src 'self'; style-src 'self'; font-src 'self'; form-action 'self'");
header("Feature-Policy: accelerometer 'none'; camera 'none'; geolocation 'none'; gyroscope 'none'; magnetometer 'none'; microphone 'none'; payment 'none'; usb 'none'");
header("Referrer-Policy: strict-origin-when-cross-origin");
header("Strict-Transport-Security: max-age=31536000; includeSubDomains; preload");
header("X-Content-Type-Options: nosniff");
header("X-Frame-Options: SAMEORIGIN");
header("X-Xss-Protection: 1;mode=block");

require_once('db/keys.php');

?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <link rel="shortcut icon" href="/assets/favicon.ico">
    <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
    <meta name="theme-color" content="#333333">
    <link rel="manifest" href="/manifest.json">
    <title>J Sreepati Rao</title>
    <link href="/static/css/main.b330b563.chunk.css" rel="stylesheet">
</head>
<body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="jsr"></div>
    <script>
        ! function(l) {
            function e(e) {
                for (var r, t, n = e[0], o = e[1], u = e[2], f = 0, i = []; f < n.length; f++) t = n[f], p[t] && i.push(p[t][0]), p[t] = 0;
                for (r in o) Object.prototype.hasOwnProperty.call(o, r) && (l[r] = o[r]);
                for (s && s(e); i.length;) i.shift()();
                return c.push.apply(c, u || []), a()
            }

            function a() {
                for (var e, r = 0; r < c.length; r++) {
                    for (var t = c[r], n = !0, o = 1; o < t.length; o++) {
                        var u = t[o];
                        0 !== p[u] && (n = !1)
                    }
                    n && (c.splice(r--, 1), e = f(f.s = t[0]))
                }
                return e
            }
            var t = {},
                p = {
                    2: 0
                },
                c = [];

            function f(e) {
                if (t[e]) return t[e].exports;
                var r = t[e] = {
                    i: e,
                    l: !1,
                    exports: {}
                };
                return l[e].call(r.exports, r, r.exports, f), r.l = !0, r.exports
            }
            f.m = l, f.c = t, f.d = function(e, r, t) {
                f.o(e, r) || Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t
                })
            }, f.r = function(e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }, f.t = function(r, e) {
                if (1 & e && (r = f(r)), 8 & e) return r;
                if (4 & e && "object" == typeof r && r && r.__esModule) return r;
                var t = Object.create(null);
                if (f.r(t), Object.defineProperty(t, "default", {
                        enumerable: !0,
                        value: r
                    }), 2 & e && "string" != typeof r)
                    for (var n in r) f.d(t, n, function(e) {
                        return r[e]
                    }.bind(null, n));
                return t
            }, f.n = function(e) {
                var r = e && e.__esModule ? function() {
                    return e.default
                } : function() {
                    return e
                };
                return f.d(r, "a", r), r
            }, f.o = function(e, r) {
                return Object.prototype.hasOwnProperty.call(e, r)
            }, f.p = "/";
            var r = window.webpackJsonp = window.webpackJsonp || [],
                n = r.push.bind(r);
            r.push = e, r = r.slice();
            for (var o = 0; o < r.length; o++) e(r[o]);
            var s = n;
            a()
        }([])
    </script>
    <script src="/static/js/1.fa989624.chunk.js"></script>
    <script src="/static/js/main.c06faa76.chunk.js"></script>
    <script src="/sw.js"></script>
    <script>
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker
                .register('/sw.js')
                .then(function() {
                    console.log("Service Worker Registered");
                });
        }
    </script>
</body>
</html>
