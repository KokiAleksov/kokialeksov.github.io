! function() { "use strict";

    function i() { var i, t, o = document.getElementById("hero"),
            i = document.createElement("div");
        i.className = "hero-threejs", o.appendChild(i), r = new THREE.PerspectiveCamera(75, s / w, 1, 1e4), r.position.z = 900, a = new THREE.Scene, d = new THREE.CanvasRenderer({ alpha: !0 }), d.setPixelRatio(window.devicePixelRatio), d.setSize(s, w), i.appendChild(d.domElement); for (var l = 2 * Math.PI, c = new THREE.SpriteCanvasMaterial({ color: 14279145, program: function(i) { i.beginPath(), i.arc(0, 0, .5, 0, l, !0), i.fill() } }), p = 0; p < 1e3; p++) t = new THREE.Sprite(c), t.position.x = 2 * Math.random() - 1, t.position.y = 2 * Math.random() - 1, t.position.z = 2 * Math.random() - 1, t.position.normalize(), t.position.multiplyScalar(10 * Math.random() + 450), t.scale.multiplyScalar(2), a.add(t);
        document.addEventListener("mousemove", e, !1), window.addEventListener("resize", n, !1) }

    function n() { p = window.innerWidth / 2, h = window.innerHeight / 2, r.aspect = window.innerWidth / window.innerHeight, r.updateProjectionMatrix(), d.setSize(window.innerWidth, window.innerHeight) }

    function e(i) { l = i.clientX - p, c = i.clientY - h }

    function t() { requestAnimationFrame(t), o() }

    function o() { r.position.x += .05 * (l - r.position.x), r.position.y += .05 * (200 - c - r.position.y), r.lookAt(a.position), d.setClearColor(0, 0), d.render(a, r) } var r, a, d, s = window.innerWidth,
        w = window.innerHeight,
        l = 0,
        c = 0,
        p = window.innerWidth / 2,
        h = window.innerHeight / 2;
    i(), t() }();