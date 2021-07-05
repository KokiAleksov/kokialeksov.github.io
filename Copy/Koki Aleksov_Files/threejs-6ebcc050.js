! function(t, e) { "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : (t = t || self, e(t.THREE = {})) }(this, function(t) {
    function e() {}

    function n(t, e) { this.x = t || 0, this.y = e || 0 }

    function i() { this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], 0 < arguments.length && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.") }

    function r(t, e, n, i) { this._x = t || 0, this._y = e || 0, this._z = n || 0, this._w = void 0 !== i ? i : 1 }

    function a(t, e, n) { this.x = t || 0, this.y = e || 0, this.z = n || 0 }

    function o() { this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], 0 < arguments.length && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.") }

    function s(t, e, i, r, a, c, h, l, u, p) { Object.defineProperty(this, "id", { value: ua++ }), this.uuid = ca.generateUUID(), this.name = "", this.image = void 0 !== t ? t : s.DEFAULT_IMAGE, this.mipmaps = [], this.mapping = void 0 !== e ? e : s.DEFAULT_MAPPING, this.wrapS = void 0 !== i ? i : 1001, this.wrapT = void 0 !== r ? r : 1001, this.magFilter = void 0 !== a ? a : 1006, this.minFilter = void 0 !== c ? c : 1008, this.anisotropy = void 0 !== u ? u : 1, this.format = void 0 !== h ? h : 1023, this.type = void 0 !== l ? l : 1009, this.offset = new n(0, 0), this.repeat = new n(1, 1), this.center = new n(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new o, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = void 0 !== p ? p : 3e3, this.version = 0, this.onUpdate = null }

    function c(t, e, n, i) { this.x = t || 0, this.y = e || 0, this.z = n || 0, this.w = void 0 !== i ? i : 1 }

    function h(t, e, n) { this.width = t, this.height = e, this.scissor = new c(0, 0, t, e), this.scissorTest = !1, this.viewport = new c(0, 0, t, e), n = n || {}, this.texture = new s(void 0, void 0, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding), this.texture.generateMipmaps = void 0 !== n.generateMipmaps && n.generateMipmaps, this.texture.minFilter = void 0 !== n.minFilter ? n.minFilter : 1006, this.depthBuffer = void 0 === n.depthBuffer || n.depthBuffer, this.stencilBuffer = void 0 === n.stencilBuffer || n.stencilBuffer, this.depthTexture = void 0 !== n.depthTexture ? n.depthTexture : null }

    function l(t, e, n) { h.call(this, t, e, n), this.samples = 4 }

    function u(t, e, n) { h.call(this, t, e, n) }

    function p(t, e, n, i, r, a, o, c, h, l, u, p) { s.call(this, null, a, o, c, h, l, i, r, u, p), this.image = { data: t, width: e, height: n }, this.magFilter = void 0 !== h ? h : 1003, this.minFilter = void 0 !== l ? l : 1003, this.flipY = this.generateMipmaps = !1, this.unpackAlignment = 1 }

    function d(t, e) { this.min = void 0 !== t ? t : new a(Infinity, Infinity, Infinity), this.max = void 0 !== e ? e : new a(-Infinity, -Infinity, -Infinity) }

    function f(t, e) { this.center = void 0 !== t ? t : new a, this.radius = void 0 !== e ? e : 0 }

    function m(t, e) { this.normal = void 0 !== t ? t : new a(1, 0, 0), this.constant = void 0 !== e ? e : 0 }

    function g(t, e, n, i, r, a) { this.planes = [void 0 !== t ? t : new m, void 0 !== e ? e : new m, void 0 !== n ? n : new m, void 0 !== i ? i : new m, void 0 !== r ? r : new m, void 0 !== a ? a : new m] }

    function v(t) {
        var e, n = {};
        for (e in t) {
            n[e] = {};
            for (var i in t[e]) {
                var r = t[e][i];
                r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture) ? n[e][i] = r.clone() : Array.isArray(r) ? n[e][i] = r.slice() : n[e][i] = r
            }
        }
        return n
    }

    function y(t) { for (var e = {}, n = 0; n < t.length; n++) { var i, r = v(t[n]); for (i in r) e[i] = r[i] } return e }

    function x(t, e, n) { return void 0 === e && void 0 === n ? this.set(t) : this.setRGB(t, e, n) }

    function b() {
        function t(r, a) {!1 !== n && (i(r, a), e.requestAnimationFrame(t)) }
        var e = null,
            n = !1,
            i = null;
        return { start: function() {!0 !== n && null !== i && (e.requestAnimationFrame(t), n = !0) }, stop: function() { n = !1 }, setAnimationLoop: function(t) { i = t }, setContext: function(t) { e = t } }
    }

    function w(t) {
        function e(e, n) {
            var i = e.array,
                r = e.dynamic ? 35048 : 35044,
                a = t.createBuffer();
            return t.bindBuffer(n, a), t.bufferData(n, i, r), e.onUploadCallback(), n = 5126, i instanceof Float32Array ? n = 5126 : i instanceof Float64Array ? console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.") : i instanceof Uint16Array ? n = 5123 : i instanceof Int16Array ? n = 5122 : i instanceof Uint32Array ? n = 5125 : i instanceof Int32Array ? n = 5124 : i instanceof Int8Array ? n = 5120 : i instanceof Uint8Array && (n = 5121), { buffer: a, type: n, bytesPerElement: i.BYTES_PER_ELEMENT, version: e.version }
        }
        var n = new WeakMap;
        return {
            get: function(t) { return t.isInterleavedBufferAttribute && (t = t.data), n.get(t) },
            remove: function(e) {
                e.isInterleavedBufferAttribute && (e = e.data);
                var i = n.get(e);
                i && (t.deleteBuffer(i.buffer), n["delete"](e))
            },
            update: function(i, r) {
                i.isInterleavedBufferAttribute && (i = i.data);
                var a = n.get(i);
                if (void 0 === a) n.set(i, e(i, r));
                else if (a.version < i.version) {
                    var o = i,
                        s = o.array,
                        c = o.updateRange;
                    t.bindBuffer(r, a.buffer), !1 === o.dynamic ? t.bufferData(r, s, 35044) : -1 === c.count ? t.bufferSubData(r, 0, s) : 0 === c.count ? console.error("THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually.") : (t.bufferSubData(r, c.offset * s.BYTES_PER_ELEMENT, s.subarray(c.offset, c.offset + c.count)), c.count = -1), a.version = i.version
                }
            }
        }
    }

    function _(t, e, n, i, r, o) { this.a = t, this.b = e, this.c = n, this.normal = i && i.isVector3 ? i : new a, this.vertexNormals = Array.isArray(i) ? i : [], this.color = r && r.isColor ? r : new x, this.vertexColors = Array.isArray(r) ? r : [], this.materialIndex = void 0 !== o ? o : 0 }

    function M(t, e, n, i) { this._x = t || 0, this._y = e || 0, this._z = n || 0, this._order = i || M.DefaultOrder }

    function E() { this.mask = 1 }

    function S() {
        Object.defineProperty(this, "id", { value: va++ }), this.uuid = ca.generateUUID(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = S.DefaultUp.clone();
        var t = new a,
            e = new M,
            n = new r,
            s = new a(1, 1, 1);
        e.onChange(function() { n.setFromEuler(e, !1) }), n.onChange(function() { e.setFromQuaternion(n, void 0, !1) }), Object.defineProperties(this, { position: { configurable: !0, enumerable: !0, value: t }, rotation: { configurable: !0, enumerable: !0, value: e }, quaternion: { configurable: !0, enumerable: !0, value: n }, scale: { configurable: !0, enumerable: !0, value: s }, modelViewMatrix: { value: new i }, normalMatrix: { value: new o } }), this.matrix = new i, this.matrixWorld = new i, this.matrixAutoUpdate = S.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new E, this.visible = !0, this.receiveShadow = this.castShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.userData = {}
    }

    function T() {
        Object.defineProperty(this, "id", { value: ya += 2 }), this.uuid = ca.generateUUID(), this.name = "", this.type = "Geometry", this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [
            []
        ], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingSphere = this.boundingBox = null, this.groupsNeedUpdate = this.lineDistancesNeedUpdate = this.colorsNeedUpdate = this.normalsNeedUpdate = this.uvsNeedUpdate = this.verticesNeedUpdate = this.elementsNeedUpdate = !1
    }

    function A(t, e, n) {
        if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
        this.name = "", this.array = t, this.itemSize = e, this.count = void 0 !== t ? t.length / e : 0, this.normalized = !0 === n, this.dynamic = !1, this.updateRange = { offset: 0, count: -1 }, this.version = 0
    }

    function L(t, e, n) { A.call(this, new Int8Array(t), e, n) }

    function R(t, e, n) { A.call(this, new Uint8Array(t), e, n) }

    function P(t, e, n) { A.call(this, new Uint8ClampedArray(t), e, n) }

    function C(t, e, n) { A.call(this, new Int16Array(t), e, n) }

    function I(t, e, n) { A.call(this, new Uint16Array(t), e, n) }

    function O(t, e, n) { A.call(this, new Int32Array(t), e, n) }

    function D(t, e, n) { A.call(this, new Uint32Array(t), e, n) }

    function N(t, e, n) { A.call(this, new Float32Array(t), e, n) }

    function B(t, e, n) { A.call(this, new Float64Array(t), e, n) }

    function z() { this.vertices = [], this.normals = [], this.colors = [], this.uvs = [], this.uvs2 = [], this.groups = [], this.morphTargets = {}, this.skinWeights = [], this.skinIndices = [], this.boundingSphere = this.boundingBox = null, this.groupsNeedUpdate = this.uvsNeedUpdate = this.colorsNeedUpdate = this.normalsNeedUpdate = this.verticesNeedUpdate = !1 }

    function U(t) { if (0 === t.length) return -Infinity; for (var e = t[0], n = 1, i = t.length; n < i; ++n) t[n] > e && (e = t[n]); return e }

    function G() { Object.defineProperty(this, "id", { value: xa += 2 }), this.uuid = ca.generateUUID(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingSphere = this.boundingBox = null, this.drawRange = { start: 0, count: Infinity }, this.userData = {} }

    function F(t, e, n, i, r, a) { T.call(this), this.type = "BoxGeometry", this.parameters = { width: t, height: e, depth: n, widthSegments: i, heightSegments: r, depthSegments: a }, this.fromBufferGeometry(new H(t, e, n, i, r, a)), this.mergeVertices() }

    function H(t, e, n, i, r, o) {
        function s(t, e, n, i, r, o, s, m, g, v, y) {
            var x = o / g,
                b = s / v,
                w = o / 2,
                _ = s / 2,
                M = m / 2;
            s = g + 1;
            var E, S, T = v + 1,
                A = o = 0,
                L = new a;
            for (S = 0; S < T; S++) { var R = S * b - _; for (E = 0; E < s; E++) L[t] = (E * x - w) * i, L[e] = R * r, L[n] = M, l.push(L.x, L.y, L.z), L[t] = 0, L[e] = 0, L[n] = 0 < m ? 1 : -1, u.push(L.x, L.y, L.z), p.push(E / g), p.push(1 - S / v), o += 1 }
            for (S = 0; S < v; S++)
                for (E = 0; E < g; E++) t = d + E + s * (S + 1), e = d + (E + 1) + s * (S + 1), n = d + (E + 1) + s * S, h.push(d + E + s * S, t, n), h.push(t, e, n), A += 6;
            c.addGroup(f, A, y), f += A, d += o
        }
        G.call(this), this.type = "BoxBufferGeometry", this.parameters = { width: t, height: e, depth: n, widthSegments: i, heightSegments: r, depthSegments: o };
        var c = this;
        t = t || 1, e = e || 1, n = n || 1, i = Math.floor(i) || 1, r = Math.floor(r) || 1, o = Math.floor(o) || 1;
        var h = [],
            l = [],
            u = [],
            p = [],
            d = 0,
            f = 0;
        s("z", "y", "x", -1, -1, n, e, t, o, r, 0), s("z", "y", "x", 1, -1, n, e, -t, o, r, 1), s("x", "z", "y", 1, 1, t, n, e, i, o, 2), s("x", "z", "y", 1, -1, t, n, -e, i, o, 3), s("x", "y", "z", 1, -1, t, e, n, i, r, 4), s("x", "y", "z", -1, -1, t, e, -n, i, r, 5), this.setIndex(h), this.addAttribute("position", new N(l, 3)), this.addAttribute("normal", new N(u, 3)), this.addAttribute("uv", new N(p, 2))
    }

    function V(t, e, n, i) { T.call(this), this.type = "PlaneGeometry", this.parameters = { width: t, height: e, widthSegments: n, heightSegments: i }, this.fromBufferGeometry(new k(t, e, n, i)), this.mergeVertices() }

    function k(t, e, n, i) {
        G.call(this), this.type = "PlaneBufferGeometry", this.parameters = { width: t, height: e, widthSegments: n, heightSegments: i }, t = t || 1, e = e || 1;
        var r = t / 2,
            a = e / 2;
        n = Math.floor(n) || 1, i = Math.floor(i) || 1;
        var o = n + 1,
            s = i + 1,
            c = t / n,
            h = e / i,
            l = [],
            u = [],
            p = [],
            d = [];
        for (t = 0; t < s; t++) { var f = t * h - a; for (e = 0; e < o; e++) u.push(e * c - r, -f, 0), p.push(0, 0, 1), d.push(e / n), d.push(1 - t / i) }
        for (t = 0; t < i; t++)
            for (e = 0; e < n; e++) r = e + o * (t + 1), a = e + 1 + o * (t + 1), s = e + 1 + o * t, l.push(e + o * t, r, s), l.push(r, a, s);
        this.setIndex(l), this.addAttribute("position", new N(u, 3)), this.addAttribute("normal", new N(p, 3)), this.addAttribute("uv", new N(d, 2))
    }

    function j() { Object.defineProperty(this, "id", { value: ba++ }), this.uuid = ca.generateUUID(), this.name = "", this.type = "Material", this.lights = this.fog = !0, this.blending = 1, this.side = 0, this.vertexTangents = this.flatShading = !1, this.vertexColors = 0, this.opacity = 1, this.transparent = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendEquationAlpha = this.blendDstAlpha = this.blendSrcAlpha = null, this.depthFunc = 3, this.depthWrite = this.depthTest = !0, this.clippingPlanes = null, this.clipShadows = this.clipIntersection = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetUnits = this.polygonOffsetFactor = 0, this.dithering = !1, this.alphaTest = 0, this.premultipliedAlpha = !1, this.visible = !0, this.userData = {}, this.needsUpdate = !0 }

    function W(t) { j.call(this), this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.vertexShader = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.morphNormals = this.morphTargets = this.skinning = this.clipping = this.lights = this.fog = !1, this.extensions = { derivatives: !1, fragDepth: !1, drawBuffers: !1, shaderTextureLOD: !1 }, this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv2: [0, 0] }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, void 0 !== t && (void 0 !== t.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this.setValues(t)) }

    function q(t, e) { this.origin = void 0 !== t ? t : new a, this.direction = void 0 !== e ? e : new a }

    function X(t, e, n) { this.a = void 0 !== t ? t : new a, this.b = void 0 !== e ? e : new a, this.c = void 0 !== n ? n : new a }

    function Y(t) { j.call(this), this.type = "MeshBasicMaterial", this.color = new x(16777215), this.lightMap = this.map = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.envMap = this.alphaMap = this.specularMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinejoin = this.wireframeLinecap = "round", this.lights = this.morphTargets = this.skinning = !1, this.setValues(t) }

    function J(t, e) { S.call(this), this.type = "Mesh", this.geometry = void 0 !== t ? t : new G, this.material = void 0 !== e ? e : new Y({ color: 16777215 * Math.random() }), this.drawMode = 0, this.updateMorphTargets() }

    function Z(t, e, n, i) {
        function r(t, n) { e.buffers.color.setClear(t.r, t.g, t.b, n, i) }
        var a, o, s = new x(0),
            c = 0,
            h = null,
            l = 0;
        return { getClearColor: function() { return s }, setClearColor: function(t, e) { s.set(t), c = void 0 !== e ? e : 1, r(s, c) }, getClearAlpha: function() { return c }, setClearAlpha: function(t) { c = t, r(s, c) }, render: function(e, i, u, p) { i = i.background, null === i ? (r(s, c), h = null, l = 0) : i && i.isColor && (r(i, 1), p = !0, h = null, l = 0), (t.autoClear || p) && t.clear(t.autoClearColor, t.autoClearDepth, t.autoClearStencil), i && (i.isCubeTexture || i.isWebGLRenderTargetCube) ? (void 0 === o && (o = new J(new H(1, 1, 1), new W({ type: "BackgroundCubeMaterial", uniforms: v(ga.cube.uniforms), vertexShader: ga.cube.vertexShader, fragmentShader: ga.cube.fragmentShader, side: 1, depthTest: !1, depthWrite: !1, fog: !1 })), o.geometry.removeAttribute("normal"), o.geometry.removeAttribute("uv"), o.onBeforeRender = function(t, e, n) { this.matrixWorld.copyPosition(n.matrixWorld) }, Object.defineProperty(o.material, "map", { get: function() { return this.uniforms.tCube.value } }), n.update(o)), p = i.isWebGLRenderTargetCube ? i.texture : i, o.material.uniforms.tCube.value = p, o.material.uniforms.tFlip.value = i.isWebGLRenderTargetCube ? 1 : -1, h === i && l === p.version || (o.material.needsUpdate = !0, h = i, l = p.version), e.unshift(o, o.geometry, o.material, 0, 0, null)) : i && i.isTexture && (void 0 === a && (a = new J(new k(2, 2), new W({ type: "BackgroundMaterial", uniforms: v(ga.background.uniforms), vertexShader: ga.background.vertexShader, fragmentShader: ga.background.fragmentShader, side: 0, depthTest: !1, depthWrite: !1, fog: !1 })), a.geometry.removeAttribute("normal"), Object.defineProperty(a.material, "map", { get: function() { return this.uniforms.t2D.value } }), n.update(a)), a.material.uniforms.t2D.value = i, !0 === i.matrixAutoUpdate && i.updateMatrix(), a.material.uniforms.uvTransform.value.copy(i.matrix), h === i && l === i.version || (a.material.needsUpdate = !0, h = i, l = i.version), e.unshift(a, a.geometry, a.material, 0, 0, null)) } }
    }

    function Q(t, e, n, i) {
        var r;
        this.setMode = function(t) { r = t }, this.render = function(e, i) { t.drawArrays(r, e, i), n.update(i, r) }, this.renderInstances = function(a, o, s) {
            if (i.isWebGL2) var c = t;
            else if (null === (c = e.get("ANGLE_instanced_arrays"))) return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
            c[i.isWebGL2 ? "drawArraysInstanced" : "drawArraysInstancedANGLE"](r, o, s, a.maxInstancedCount), n.update(s, r, a.maxInstancedCount)
        }
    }

    function K(t, e, n) {
        function i(e) {
            if ("highp" === e) {
                if (0 < t.getShaderPrecisionFormat(35633, 36338).precision && 0 < t.getShaderPrecisionFormat(35632, 36338).precision) return "highp";
                e = "mediump"
            }
            return "mediump" === e && 0 < t.getShaderPrecisionFormat(35633, 36337).precision && 0 < t.getShaderPrecisionFormat(35632, 36337).precision ? "mediump" : "lowp"
        }
        var r, a = "undefined" != typeof WebGL2RenderingContext && t instanceof WebGL2RenderingContext,
            o = void 0 !== n.precision ? n.precision : "highp",
            s = i(o);
        s !== o && (console.warn("THREE.WebGLRenderer:", o, "not supported, using", s, "instead."), o = s), n = !0 === n.logarithmicDepthBuffer, s = t.getParameter(34930);
        var c = t.getParameter(35660),
            h = t.getParameter(3379),
            l = t.getParameter(34076),
            u = t.getParameter(34921),
            p = t.getParameter(36347),
            d = t.getParameter(36348),
            f = t.getParameter(36349),
            m = 0 < c,
            g = a || !!e.get("OES_texture_float"),
            v = m && g,
            y = a ? t.getParameter(36183) : 0;
        return { isWebGL2: a, getMaxAnisotropy: function() { if (void 0 !== r) return r; var n = e.get("EXT_texture_filter_anisotropic"); return r = null !== n ? t.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0 }, getMaxPrecision: i, precision: o, logarithmicDepthBuffer: n, maxTextures: s, maxVertexTextures: c, maxTextureSize: h, maxCubemapSize: l, maxAttributes: u, maxVertexUniforms: p, maxVaryings: d, maxFragmentUniforms: f, vertexTextures: m, floatFragmentTextures: g, floatVertexTextures: v, maxSamples: y }
    }

    function $() {
        function t() { l.value !== i && (l.value = i, l.needsUpdate = 0 < r), n.numPlanes = r, n.numIntersection = 0 }

        function e(t, e, i, r) {
            var a = null !== t ? t.length : 0,
                o = null;
            if (0 !== a) {
                if (o = l.value, !0 !== r || null === o)
                    for (r = i + 4 * a, e = e.matrixWorldInverse, h.getNormalMatrix(e), (null === o || o.length < r) && (o = new Float32Array(r)), r = 0; r !== a; ++r, i += 4) c.copy(t[r]).applyMatrix4(e, h), c.normal.toArray(o, i), o[i + 3] = c.constant;
                l.value = o, l.needsUpdate = !0
            }
            return n.numPlanes = a, o
        }
        var n = this,
            i = null,
            r = 0,
            a = !1,
            s = !1,
            c = new m,
            h = new o,
            l = { value: null, needsUpdate: !1 };
        this.uniform = l, this.numIntersection = this.numPlanes = 0, this.init = function(t, n, o) { var s = 0 !== t.length || n || 0 !== r || a; return a = n, i = e(t, o, 0), r = t.length, s }, this.beginShadows = function() { s = !0, e(null) }, this.endShadows = function() { s = !1, t() }, this.setState = function(n, o, c, h, u, p) {
            if (!a || null === n || 0 === n.length || s && !c) s ? e(null) : t();
            else {
                c = s ? 0 : r;
                var d = 4 * c,
                    f = u.clippingState || null;
                for (l.value = f, f = e(n, h, d, p), n = 0; n !== d; ++n) f[n] = i[n];
                u.clippingState = f, this.numIntersection = o ? this.numPlanes : 0, this.numPlanes += c
            }
        }
    }

    function tt(t) {
        var e = {};
        return {
            get: function(n) {
                if (void 0 !== e[n]) return e[n];
                switch (n) {
                    case "WEBGL_depth_texture":
                        var i = t.getExtension("WEBGL_depth_texture") || t.getExtension("MOZ_WEBGL_depth_texture") || t.getExtension("WEBKIT_WEBGL_depth_texture");
                        break;
                    case "EXT_texture_filter_anisotropic":
                        i = t.getExtension("EXT_texture_filter_anisotropic") || t.getExtension("MOZ_EXT_texture_filter_anisotropic") || t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                        break;
                    case "WEBGL_compressed_texture_s3tc":
                        i = t.getExtension("WEBGL_compressed_texture_s3tc") || t.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                        break;
                    case "WEBGL_compressed_texture_pvrtc":
                        i = t.getExtension("WEBGL_compressed_texture_pvrtc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                        break;
                    default:
                        i = t.getExtension(n)
                }
                return null === i && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."), e[n] = i
            }
        }
    }

    function et(t, e, n) {
        function i(t) {
            var o = t.target;
            t = r[o.id], null !== t.index && e.remove(t.index);
            for (var s in t.attributes) e.remove(t.attributes[s]);
            o.removeEventListener("dispose", i), delete r[o.id], (s = a[t.id]) && (e.remove(s), delete a[t.id]), n.memory.geometries--
        }
        var r = {},
            a = {};
        return {
            get: function(t, e) { var a = r[e.id]; return a || (e.addEventListener("dispose", i), e.isBufferGeometry ? a = e : e.isGeometry && (void 0 === e._bufferGeometry && (e._bufferGeometry = (new G).setFromObject(t)), a = e._bufferGeometry), r[e.id] = a, n.memory.geometries++, a) },
            update: function(t) {
                var n = t.index,
                    i = t.attributes;
                null !== n && e.update(n, 34963);
                for (var r in i) e.update(i[r], 34962);
                t = t.morphAttributes;
                for (r in t) { n = t[r], i = 0; for (var a = n.length; i < a; i++) e.update(n[i], 34962) }
            },
            getWireframeAttribute: function(t) {
                var n = a[t.id];
                if (n) return n;
                n = [];
                var i = t.index,
                    r = t.attributes;
                if (null !== i) {
                    i = i.array, r = 0;
                    for (var o = i.length; r < o; r += 3) {
                        var s = i[r + 0],
                            c = i[r + 1],
                            h = i[r + 2];
                        n.push(s, c, c, h, h, s)
                    }
                } else
                    for (i = r.position.array, r = 0, o = i.length / 3 - 1; r < o; r += 3) s = r + 0, c = r + 1, h = r + 2, n.push(s, c, c, h, h, s);
                return n = new(65535 < U(n) ? D : I)(n, 1), e.update(n, 34963), a[t.id] = n
            }
        }
    }

    function nt(t, e, n, i) {
        var r, a, o;
        this.setMode = function(t) { r = t }, this.setIndex = function(t) { a = t.type, o = t.bytesPerElement }, this.render = function(e, i) { t.drawElements(r, i, a, e * o), n.update(i, r) }, this.renderInstances = function(s, c, h) {
            if (i.isWebGL2) var l = t;
            else if (null === (l = e.get("ANGLE_instanced_arrays"))) return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
            l[i.isWebGL2 ? "drawElementsInstanced" : "drawElementsInstancedANGLE"](r, h, a, c * o, s.maxInstancedCount), n.update(h, r, s.maxInstancedCount)
        }
    }

    function it() {
        var t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
        return {
            memory: { geometries: 0, textures: 0 },
            render: t,
            programs: null,
            autoReset: !0,
            reset: function() { t.frame++, t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0 },
            update: function(e, n, i) {
                switch (i = i || 1, t.calls++, n) {
                    case 4:
                        t.triangles += e / 3 * i;
                        break;
                    case 5:
                    case 6:
                        t.triangles += i * (e - 2);
                        break;
                    case 1:
                        t.lines += e / 2 * i;
                        break;
                    case 3:
                        t.lines += i * (e - 1);
                        break;
                    case 2:
                        t.lines += i * e;
                        break;
                    case 0:
                        t.points += i * e;
                        break;
                    default:
                        console.error("THREE.WebGLInfo: Unknown draw mode:", n)
                }
            }
        }
    }

    function rt(t, e) { return Math.abs(e[1]) - Math.abs(t[1]) }

    function at(t) {
        var e = {},
            n = new Float32Array(8);
        return {
            update: function(i, r, a, o) {
                var s = i.morphTargetInfluences,
                    c = s.length;
                if (void 0 === (i = e[r.id])) {
                    i = [];
                    for (var h = 0; h < c; h++) i[h] = [h, 0];
                    e[r.id] = i
                }
                var l = a.morphTargets && r.morphAttributes.position;
                for (a = a.morphNormals && r.morphAttributes.normal, h = 0; h < c; h++) {
                    var u = i[h];
                    0 !== u[1] && (l && r.removeAttribute("morphTarget" + h), a && r.removeAttribute("morphNormal" + h))
                }
                for (h = 0; h < c; h++) u = i[h], u[0] = h, u[1] = s[h];
                for (i.sort(rt), h = 0; 8 > h; h++)(u = i[h]) && (s = u[0], c = u[1]) ? (l && r.addAttribute("morphTarget" + h, l[s]), a && r.addAttribute("morphNormal" + h, a[s]), n[h] = c) : n[h] = 0;
                o.getUniforms().setValue(t, "morphTargetInfluences", n)
            }
        }
    }

    function ot(t, e) {
        var n = {};
        return {
            update: function(i) {
                var r = e.render.frame,
                    a = i.geometry,
                    o = t.get(i, a);
                return n[o.id] !== r && (a.isGeometry && o.updateFromObject(i), t.update(o), n[o.id] = r), o
            },
            dispose: function() { n = {} }
        }
    }

    function st(t, e, n, i, r, a, o, c, h, l) { t = void 0 !== t ? t : [], s.call(this, t, void 0 !== e ? e : 301, n, i, r, a, void 0 !== o ? o : 1022, c, h, l), this.flipY = !1 }

    function ct(t, e, n, i) { s.call(this, null), this.image = { data: t, width: e, height: n, depth: i }, this.minFilter = this.magFilter = 1003, this.wrapR = 1001, this.flipY = this.generateMipmaps = !1 }

    function ht(t, e, n) {
        var i = t[0];
        if (0 >= i || 0 < i) return t;
        var r = e * n,
            a = Ea[r];
        if (void 0 === a && (a = new Float32Array(r), Ea[r] = a), 0 !== e)
            for (i.toArray(a, 0), i = 1, r = 0; i !== e; ++i) r += n, t[i].toArray(a, r);
        return a
    }

    function lt(t, e) {
        if (t.length !== e.length) return !1;
        for (var n = 0, i = t.length; n < i; n++)
            if (t[n] !== e[n]) return !1;
        return !0
    }

    function ut(t, e) { for (var n = 0, i = e.length; n < i; n++) t[n] = e[n] }

    function pt(t, e) {
        var n = Sa[e];
        void 0 === n && (n = new Int32Array(e), Sa[e] = n);
        for (var i = 0; i !== e; ++i) n[i] = t.allocTextureUnit();
        return n
    }

    function dt(t, e) {
        var n = this.cache;
        n[0] !== e && (t.uniform1f(this.addr, e), n[0] = e)
    }

    function ft(t, e) {
        var n = this.cache;
        n[0] !== e && (t.uniform1i(this.addr, e), n[0] = e)
    }

    function mt(t, e) {
        var n = this.cache;
        void 0 !== e.x ? n[0] === e.x && n[1] === e.y || (t.uniform2f(this.addr, e.x, e.y), n[0] = e.x, n[1] = e.y) : lt(n, e) || (t.uniform2fv(this.addr, e), ut(n, e))
    }

    function gt(t, e) {
        var n = this.cache;
        void 0 !== e.x ? n[0] === e.x && n[1] === e.y && n[2] === e.z || (t.uniform3f(this.addr, e.x, e.y, e.z), n[0] = e.x, n[1] = e.y, n[2] = e.z) : void 0 !== e.r ? n[0] === e.r && n[1] === e.g && n[2] === e.b || (t.uniform3f(this.addr, e.r, e.g, e.b), n[0] = e.r, n[1] = e.g, n[2] = e.b) : lt(n, e) || (t.uniform3fv(this.addr, e), ut(n, e))
    }

    function vt(t, e) {
        var n = this.cache;
        void 0 !== e.x ? n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w || (t.uniform4f(this.addr, e.x, e.y, e.z, e.w), n[0] = e.x, n[1] = e.y, n[2] = e.z, n[3] = e.w) : lt(n, e) || (t.uniform4fv(this.addr, e), ut(n, e))
    }

    function yt(t, e) {
        var n = this.cache,
            i = e.elements;
        void 0 === i ? lt(n, e) || (t.uniformMatrix2fv(this.addr, !1, e), ut(n, e)) : lt(n, i) || (La.set(i), t.uniformMatrix2fv(this.addr, !1, La), ut(n, i))
    }

    function xt(t, e) {
        var n = this.cache,
            i = e.elements;
        void 0 === i ? lt(n, e) || (t.uniformMatrix3fv(this.addr, !1, e), ut(n, e)) : lt(n, i) || (Aa.set(i), t.uniformMatrix3fv(this.addr, !1, Aa), ut(n, i))
    }

    function bt(t, e) {
        var n = this.cache,
            i = e.elements;
        void 0 === i ? lt(n, e) || (t.uniformMatrix4fv(this.addr, !1, e), ut(n, e)) : lt(n, i) || (Ta.set(i), t.uniformMatrix4fv(this.addr, !1, Ta), ut(n, i))
    }

    function wt(t, e, n) {
        var i = this.cache,
            r = n.allocTextureUnit();
        i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.setTexture2D(e || wa, r)
    }

    function _t(t, e, n) {
        var i = this.cache,
            r = n.allocTextureUnit();
        i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.setTexture3D(e || _a, r)
    }

    function Mt(t, e, n) {
        var i = this.cache,
            r = n.allocTextureUnit();
        i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.setTextureCube(e || Ma, r)
    }

    function Et(t, e) {
        var n = this.cache;
        lt(n, e) || (t.uniform2iv(this.addr, e), ut(n, e))
    }

    function St(t, e) {
        var n = this.cache;
        lt(n, e) || (t.uniform3iv(this.addr, e), ut(n, e))
    }

    function Tt(t, e) {
        var n = this.cache;
        lt(n, e) || (t.uniform4iv(this.addr, e), ut(n, e))
    }

    function At(t) {
        switch (t) {
            case 5126:
                return dt;
            case 35664:
                return mt;
            case 35665:
                return gt;
            case 35666:
                return vt;
            case 35674:
                return yt;
            case 35675:
                return xt;
            case 35676:
                return bt;
            case 35678:
            case 36198:
                return wt;
            case 35679:
                return _t;
            case 35680:
                return Mt;
            case 5124:
            case 35670:
                return ft;
            case 35667:
            case 35671:
                return Et;
            case 35668:
            case 35672:
                return St;
            case 35669:
            case 35673:
                return Tt
        }
    }

    function Lt(t, e) {
        var n = this.cache;
        lt(n, e) || (t.uniform1fv(this.addr, e), ut(n, e))
    }

    function Rt(t, e) {
        var n = this.cache;
        lt(n, e) || (t.uniform1iv(this.addr, e), ut(n, e))
    }

    function Pt(t, e) {
        var n = this.cache;
        e = ht(e, this.size, 2), lt(n, e) || (t.uniform2fv(this.addr, e), this.updateCache(e))
    }

    function Ct(t, e) {
        var n = this.cache;
        e = ht(e, this.size, 3), lt(n, e) || (t.uniform3fv(this.addr, e), this.updateCache(e))
    }

    function It(t, e) {
        var n = this.cache;
        e = ht(e, this.size, 4), lt(n, e) || (t.uniform4fv(this.addr, e), this.updateCache(e))
    }

    function Ot(t, e) {
        var n = this.cache;
        e = ht(e, this.size, 4), lt(n, e) || (t.uniformMatrix2fv(this.addr, !1, e), this.updateCache(e))
    }

    function Dt(t, e) {
        var n = this.cache;
        e = ht(e, this.size, 9), lt(n, e) || (t.uniformMatrix3fv(this.addr, !1, e), this.updateCache(e))
    }

    function Nt(t, e) {
        var n = this.cache;
        e = ht(e, this.size, 16), lt(n, e) || (t.uniformMatrix4fv(this.addr, !1, e), this.updateCache(e))
    }

    function Bt(t, e, n) {
        var i = this.cache,
            r = e.length,
            a = pt(n, r);
        for (!1 === lt(i, a) && (t.uniform1iv(this.addr, a), ut(i, a)), t = 0; t !== r; ++t) n.setTexture2D(e[t] || wa, a[t])
    }

    function zt(t, e, n) {
        var i = this.cache,
            r = e.length,
            a = pt(n, r);
        for (!1 === lt(i, a) && (t.uniform1iv(this.addr, a), ut(i, a)), t = 0; t !== r; ++t) n.setTextureCube(e[t] || Ma, a[t])
    }

    function Ut(t) {
        switch (t) {
            case 5126:
                return Lt;
            case 35664:
                return Pt;
            case 35665:
                return Ct;
            case 35666:
                return It;
            case 35674:
                return Ot;
            case 35675:
                return Dt;
            case 35676:
                return Nt;
            case 35678:
                return Bt;
            case 35680:
                return zt;
            case 5124:
            case 35670:
                return Rt;
            case 35667:
            case 35671:
                return Et;
            case 35668:
            case 35672:
                return St;
            case 35669:
            case 35673:
                return Tt
        }
    }

    function Gt(t, e, n) { this.id = t, this.addr = n, this.cache = [], this.setValue = At(e.type) }

    function Ft(t, e, n) { this.id = t, this.addr = n, this.cache = [], this.size = e.size, this.setValue = Ut(e.type) }

    function Ht(t) { this.id = t, this.seq = [], this.map = {} }

    function Vt(t, e, n) {
        this.seq = [], this.map = {}, this.renderer = n, n = t.getProgramParameter(e, 35718);
        for (var i = 0; i < n; ++i) {
            var r = t.getActiveUniform(e, i),
                a = t.getUniformLocation(e, r.name),
                o = this,
                s = r.name,
                c = s.length;
            for (Ra.lastIndex = 0;;) {
                var h = Ra.exec(s),
                    l = Ra.lastIndex,
                    u = h[1],
                    p = h[3];
                if ("]" === h[2] && (u |= 0), void 0 === p || "[" === p && l + 2 === c) { s = o, r = void 0 === p ? new Gt(u, r, a) : new Ft(u, r, a), s.seq.push(r), s.map[r.id] = r; break }
                p = o.map[u], void 0 === p && (p = new Ht(u), u = o, o = p, u.seq.push(o), u.map[o.id] = o), o = p
            }
        }
    }

    function kt(t) { t = t.split("\n"); for (var e = 0; e < t.length; e++) t[e] = e + 1 + ": " + t[e]; return t.join("\n") }

    function jt(t, e, n) { var i = t.createShader(e); return t.shaderSource(i, n), t.compileShader(i), !1 === t.getShaderParameter(i, 35713) && console.error("THREE.WebGLShader: Shader couldn't compile."), "" !== t.getShaderInfoLog(i) && console.warn("THREE.WebGLShader: gl.getShaderInfoLog()", 35633 === e ? "vertex" : "fragment", t.getShaderInfoLog(i), kt(n)), i }

    function Wt(t) {
        switch (t) {
            case 3e3:
                return ["Linear", "( value )"];
            case 3001:
                return ["sRGB", "( value )"];
            case 3002:
                return ["RGBE", "( value )"];
            case 3004:
                return ["RGBM", "( value, 7.0 )"];
            case 3005:
                return ["RGBM", "( value, 16.0 )"];
            case 3006:
                return ["RGBD", "( value, 256.0 )"];
            case 3007:
                return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
            default:
                throw Error("unsupported encoding: " + t)
        }
    }

    function qt(t, e) { return e = Wt(e), "vec4 " + t + "( vec4 value ) { return " + e[0] + "ToLinear" + e[1] + "; }" }

    function Xt(t, e) { return e = Wt(e), "vec4 " + t + "( vec4 value ) { return LinearTo" + e[0] + e[1] + "; }" }

    function Yt(t, e) {
        switch (e) {
            case 1:
                e = "Linear";
                break;
            case 2:
                e = "Reinhard";
                break;
            case 3:
                e = "Uncharted2";
                break;
            case 4:
                e = "OptimizedCineon";
                break;
            case 5:
                e = "ACESFilmic";
                break;
            default:
                throw Error("unsupported toneMapping: " + e)
        }
        return "vec3 " + t + "( vec3 color ) { return " + e + "ToneMapping( color ); }"
    }

    function Jt(t, e, n) { return t = t || {}, [t.derivatives || e.envMapCubeUV || e.bumpMap || e.normalMap && !e.objectSpaceNormalMap || e.flatShading ? "#extension GL_OES_standard_derivatives : enable" : "", (t.fragDepth || e.logarithmicDepthBuffer) && n.get("EXT_frag_depth") ? "#extension GL_EXT_frag_depth : enable" : "", t.drawBuffers && n.get("WEBGL_draw_buffers") ? "#extension GL_EXT_draw_buffers : require" : "", (t.shaderTextureLOD || e.envMap) && n.get("EXT_shader_texture_lod") ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(Qt).join("\n") }

    function Zt(t) { var e, n = []; for (e in t) { var i = t[e];!1 !== i && n.push("#define " + e + " " + i) } return n.join("\n") }

    function Qt(t) { return "" !== t }

    function Kt(t, e) { return t.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights) }

    function $t(t, e) { return t.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection) }

    function te(t) { return t.replace(/^[ \t]*#include +<([\w\d.\/]+)>/gm, function(t, e) { if (void 0 === (t = pa[e])) throw Error("Can not resolve #include <" + e + ">"); return te(t) }) }

    function ee(t) { return t.replace(/#pragma unroll_loop[\s]+?for \( int i = (\d+); i < (\d+); i \+\+ \) \{([\s\S]+?)(?=\})\}/g, function(t, e, n, i) { for (t = "", e = parseInt(e); e < parseInt(n); e++) t += i.replace(/\[ i \]/g, "[ " + e + " ]"); return t }) }

    function ne(t, e, n, i, r, a, o) {
        var s = t.context,
            c = i.defines,
            h = r.vertexShader,
            l = r.fragmentShader,
            u = "SHADOWMAP_TYPE_BASIC";
        1 === a.shadowMapType ? u = "SHADOWMAP_TYPE_PCF" : 2 === a.shadowMapType && (u = "SHADOWMAP_TYPE_PCF_SOFT");
        var p = "ENVMAP_TYPE_CUBE",
            d = "ENVMAP_MODE_REFLECTION",
            f = "ENVMAP_BLENDING_MULTIPLY";
        if (a.envMap) {
            switch (i.envMap.mapping) {
                case 301:
                case 302:
                    p = "ENVMAP_TYPE_CUBE";
                    break;
                case 306:
                case 307:
                    p = "ENVMAP_TYPE_CUBE_UV";
                    break;
                case 303:
                case 304:
                    p = "ENVMAP_TYPE_EQUIREC";
                    break;
                case 305:
                    p = "ENVMAP_TYPE_SPHERE"
            }
            switch (i.envMap.mapping) {
                case 302:
                case 304:
                    d = "ENVMAP_MODE_REFRACTION"
            }
            switch (i.combine) {
                case 0:
                    f = "ENVMAP_BLENDING_MULTIPLY";
                    break;
                case 1:
                    f = "ENVMAP_BLENDING_MIX";
                    break;
                case 2:
                    f = "ENVMAP_BLENDING_ADD"
            }
        }
        var m = 0 < t.gammaFactor ? t.gammaFactor : 1,
            g = o.isWebGL2 ? "" : Jt(i.extensions, a, e),
            v = Zt(c),
            y = s.createProgram();
        i.isRawShaderMaterial ? (c = [v].filter(Qt).join("\n"), 0 < c.length && (c += "\n"), e = [g, v].filter(Qt).join("\n"), 0 < e.length && (e += "\n")) : (c = ["precision " + a.precision + " float;", "precision " + a.precision + " int;", "#define SHADER_NAME " + r.name, v, a.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + m, "#define MAX_BONES " + a.maxBones, a.useFog && a.fog ? "#define USE_FOG" : "", a.useFog && a.fogExp ? "#define FOG_EXP2" : "", a.map ? "#define USE_MAP" : "", a.envMap ? "#define USE_ENVMAP" : "", a.envMap ? "#define " + d : "", a.lightMap ? "#define USE_LIGHTMAP" : "", a.aoMap ? "#define USE_AOMAP" : "", a.emissiveMap ? "#define USE_EMISSIVEMAP" : "", a.bumpMap ? "#define USE_BUMPMAP" : "", a.normalMap ? "#define USE_NORMALMAP" : "", a.normalMap && a.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", a.displacementMap && a.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", a.specularMap ? "#define USE_SPECULARMAP" : "", a.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", a.metalnessMap ? "#define USE_METALNESSMAP" : "", a.alphaMap ? "#define USE_ALPHAMAP" : "", a.vertexTangents ? "#define USE_TANGENT" : "", a.vertexColors ? "#define USE_COLOR" : "", a.flatShading ? "#define FLAT_SHADED" : "", a.skinning ? "#define USE_SKINNING" : "", a.useVertexTexture ? "#define BONE_TEXTURE" : "", a.morphTargets ? "#define USE_MORPHTARGETS" : "", a.morphNormals && !1 === a.flatShading ? "#define USE_MORPHNORMALS" : "", a.doubleSided ? "#define DOUBLE_SIDED" : "", a.flipSided ? "#define FLIP_SIDED" : "", a.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", a.shadowMapEnabled ? "#define " + u : "", a.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", a.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", a.logarithmicDepthBuffer && (o.isWebGL2 || e.get("EXT_frag_depth")) ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_TANGENT", "\tattribute vec4 tangent;", "#endif", "#ifdef USE_COLOR", "\tattribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter(Qt).join("\n"), e = [g, "precision " + a.precision + " float;", "precision " + a.precision + " int;", "#define SHADER_NAME " + r.name, v, a.alphaTest ? "#define ALPHATEST " + a.alphaTest + (a.alphaTest % 1 ? "" : ".0") : "", "#define GAMMA_FACTOR " + m, a.useFog && a.fog ? "#define USE_FOG" : "", a.useFog && a.fogExp ? "#define FOG_EXP2" : "", a.map ? "#define USE_MAP" : "", a.matcap ? "#define USE_MATCAP" : "", a.envMap ? "#define USE_ENVMAP" : "", a.envMap ? "#define " + p : "", a.envMap ? "#define " + d : "", a.envMap ? "#define " + f : "", a.lightMap ? "#define USE_LIGHTMAP" : "", a.aoMap ? "#define USE_AOMAP" : "", a.emissiveMap ? "#define USE_EMISSIVEMAP" : "", a.bumpMap ? "#define USE_BUMPMAP" : "", a.normalMap ? "#define USE_NORMALMAP" : "", a.normalMap && a.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", a.specularMap ? "#define USE_SPECULARMAP" : "", a.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", a.metalnessMap ? "#define USE_METALNESSMAP" : "", a.alphaMap ? "#define USE_ALPHAMAP" : "", a.vertexTangents ? "#define USE_TANGENT" : "", a.vertexColors ? "#define USE_COLOR" : "", a.gradientMap ? "#define USE_GRADIENTMAP" : "", a.flatShading ? "#define FLAT_SHADED" : "", a.doubleSided ? "#define DOUBLE_SIDED" : "", a.flipSided ? "#define FLIP_SIDED" : "", a.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", a.shadowMapEnabled ? "#define " + u : "", a.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", a.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", a.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", a.logarithmicDepthBuffer && (o.isWebGL2 || e.get("EXT_frag_depth")) ? "#define USE_LOGDEPTHBUF_EXT" : "", a.envMap && (o.isWebGL2 || e.get("EXT_shader_texture_lod")) ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", 0 !== a.toneMapping ? "#define TONE_MAPPING" : "", 0 !== a.toneMapping ? pa.tonemapping_pars_fragment : "", 0 !== a.toneMapping ? Yt("toneMapping", a.toneMapping) : "", a.dithering ? "#define DITHERING" : "", a.outputEncoding || a.mapEncoding || a.matcapEncoding || a.envMapEncoding || a.emissiveMapEncoding ? pa.encodings_pars_fragment : "", a.mapEncoding ? qt("mapTexelToLinear", a.mapEncoding) : "", a.matcapEncoding ? qt("matcapTexelToLinear", a.matcapEncoding) : "", a.envMapEncoding ? qt("envMapTexelToLinear", a.envMapEncoding) : "", a.emissiveMapEncoding ? qt("emissiveMapTexelToLinear", a.emissiveMapEncoding) : "", a.outputEncoding ? Xt("linearToOutputTexel", a.outputEncoding) : "", a.depthPacking ? "#define DEPTH_PACKING " + i.depthPacking : "", "\n"].filter(Qt).join("\n")), h = te(h), h = Kt(h, a), h = $t(h, a), l = te(l), l = Kt(l, a), l = $t(l, a), h = ee(h), l = ee(l), o.isWebGL2 && !i.isRawShaderMaterial && (o = !1, u = /^\s*#version\s+300\s+es\s*\n/, i.isShaderMaterial && null !== h.match(u) && null !== l.match(u) && (o = !0, h = h.replace(u, ""), l = l.replace(u, "")), c = "#version 300 es\n\n#define attribute in\n#define varying out\n#define texture2D texture\n" + c, e = ["#version 300 es\n\n#define varying in", o ? "" : "out highp vec4 pc_fragColor;", o ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth\n#define texture2D texture\n#define textureCube texture\n#define texture2DProj textureProj\n#define texture2DLodEXT textureLod\n#define texture2DProjLodEXT textureProjLod\n#define textureCubeLodEXT textureLod\n#define texture2DGradEXT textureGrad\n#define texture2DProjGradEXT textureProjGrad\n#define textureCubeGradEXT textureGrad"].join("\n") + "\n" + e), l = e + l, h = jt(s, 35633, c + h), l = jt(s, 35632, l), s.attachShader(y, h), s.attachShader(y, l), void 0 !== i.index0AttributeName ? s.bindAttribLocation(y, 0, i.index0AttributeName) : !0 === a.morphTargets && s.bindAttribLocation(y, 0, "position"), s.linkProgram(y), a = s.getProgramInfoLog(y).trim(), o = s.getShaderInfoLog(h).trim(), u = s.getShaderInfoLog(l).trim(), d = p = !0, !1 === s.getProgramParameter(y, 35714) ? (p = !1, console.error("THREE.WebGLProgram: shader error: ", s.getError(), "35715", s.getProgramParameter(y, 35715), "gl.getProgramInfoLog", a, o, u)) : "" !== a ? console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", a) : "" !== o && "" !== u || (d = !1), d && (this.diagnostics = { runnable: p, material: i, programLog: a, vertexShader: { log: o, prefix: c }, fragmentShader: { log: u, prefix: e } }), s.deleteShader(h), s.deleteShader(l);
        var x;
        this.getUniforms = function() { return void 0 === x && (x = new Vt(s, y, t)), x };
        var b;
        return this.getAttributes = function() {
            if (void 0 === b) {
                for (var t = {}, e = s.getProgramParameter(y, 35721), n = 0; n < e; n++) {
                    var i = s.getActiveAttrib(y, n).name;
                    t[i] = s.getAttribLocation(y, i)
                }
                b = t
            }
            return b
        }, this.destroy = function() { s.deleteProgram(y), this.program = void 0 }, Object.defineProperties(this, { uniforms: { get: function() { return console.warn("THREE.WebGLProgram: .uniforms is now .getUniforms()."), this.getUniforms() } }, attributes: { get: function() { return console.warn("THREE.WebGLProgram: .attributes is now .getAttributes()."), this.getAttributes() } } }), this.name = r.name, this.id = Pa++, this.code = n, this.usedTimes = 1, this.program = y, this.vertexShader = h, this.fragmentShader = l, this
    }

    function ie(t, e, n) {
        function i(t, e) {
            if (t) t.isTexture ? n = t.encoding : t.isWebGLRenderTarget && (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."), n = t.texture.encoding);
            else var n = 3e3;
            return 3e3 === n && e && (n = 3007), n
        }
        var r = [],
            a = { MeshDepthMaterial: "depth", MeshDistanceMaterial: "distanceRGBA", MeshNormalMaterial: "normal", MeshBasicMaterial: "basic", MeshLambertMaterial: "lambert", MeshPhongMaterial: "phong", MeshToonMaterial: "phong", MeshStandardMaterial: "physical", MeshPhysicalMaterial: "physical", MeshMatcapMaterial: "matcap", LineBasicMaterial: "basic", LineDashedMaterial: "dashed", PointsMaterial: "points", ShadowMaterial: "shadow", SpriteMaterial: "sprite" },
            o = "precision supportsVertexTextures map mapEncoding matcap matcapEncoding envMap envMapMode envMapEncoding lightMap aoMap emissiveMap emissiveMapEncoding bumpMap normalMap objectSpaceNormalMap displacementMap specularMap roughnessMap metalnessMap gradientMap alphaMap combine vertexColors vertexTangents fog useFog fogExp flatShading sizeAttenuation logarithmicDepthBuffer skinning maxBones useVertexTexture morphTargets morphNormals maxMorphTargets maxMorphNormals premultipliedAlpha numDirLights numPointLights numSpotLights numHemiLights numRectAreaLights shadowMapEnabled shadowMapType toneMapping physicallyCorrectLights alphaTest doubleSided flipSided numClippingPlanes numClipIntersection depthPacking dithering".split(" ");
        this.getParameters = function(e, r, o, s, c, h, l) {
            var u = a[e.type];
            if (l.isSkinnedMesh) {
                var p = l.skeleton.bones;
                if (n.floatVertexTextures) p = 1024;
                else {
                    var d = Math.min(Math.floor((n.maxVertexUniforms - 20) / 4), p.length);
                    d < p.length ? (console.warn("THREE.WebGLRenderer: Skeleton has " + p.length + " bones. This GPU supports " + d + "."), p = 0) : p = d
                }
            } else p = 0;
            d = n.precision, null !== e.precision && (d = n.getMaxPrecision(e.precision)) !== e.precision && console.warn("THREE.WebGLProgram.getParameters:", e.precision, "not supported, using", d, "instead.");
            var f = t.getRenderTarget();
            return { shaderID: u, precision: d, supportsVertexTextures: n.vertexTextures, outputEncoding: i(f ? f.texture : null, t.gammaOutput), map: !!e.map, mapEncoding: i(e.map, t.gammaInput), matcap: !!e.matcap, matcapEncoding: i(e.matcap, t.gammaInput), envMap: !!e.envMap, envMapMode: e.envMap && e.envMap.mapping, envMapEncoding: i(e.envMap, t.gammaInput), envMapCubeUV: !!e.envMap && (306 === e.envMap.mapping || 307 === e.envMap.mapping), lightMap: !!e.lightMap, aoMap: !!e.aoMap, emissiveMap: !!e.emissiveMap, emissiveMapEncoding: i(e.emissiveMap, t.gammaInput), bumpMap: !!e.bumpMap, normalMap: !!e.normalMap, objectSpaceNormalMap: 1 === e.normalMapType, displacementMap: !!e.displacementMap, roughnessMap: !!e.roughnessMap, metalnessMap: !!e.metalnessMap, specularMap: !!e.specularMap, alphaMap: !!e.alphaMap, gradientMap: !!e.gradientMap, combine: e.combine, vertexTangents: e.normalMap && e.vertexTangents, vertexColors: e.vertexColors, fog: !!s, useFog: e.fog, fogExp: s && s.isFogExp2, flatShading: e.flatShading, sizeAttenuation: e.sizeAttenuation, logarithmicDepthBuffer: n.logarithmicDepthBuffer, skinning: e.skinning && 0 < p, maxBones: p, useVertexTexture: n.floatVertexTextures, morphTargets: e.morphTargets, morphNormals: e.morphNormals, maxMorphTargets: t.maxMorphTargets, maxMorphNormals: t.maxMorphNormals, numDirLights: r.directional.length, numPointLights: r.point.length, numSpotLights: r.spot.length, numRectAreaLights: r.rectArea.length, numHemiLights: r.hemi.length, numClippingPlanes: c, numClipIntersection: h, dithering: e.dithering, shadowMapEnabled: t.shadowMap.enabled && l.receiveShadow && 0 < o.length, shadowMapType: t.shadowMap.type, toneMapping: t.toneMapping, physicallyCorrectLights: t.physicallyCorrectLights, premultipliedAlpha: e.premultipliedAlpha, alphaTest: e.alphaTest, doubleSided: 2 === e.side, flipSided: 1 === e.side, depthPacking: void 0 !== e.depthPacking && e.depthPacking }
        }, this.getProgramCode = function(e, n) {
            var i = [];
            if (n.shaderID ? i.push(n.shaderID) : (i.push(e.fragmentShader), i.push(e.vertexShader)), void 0 !== e.defines)
                for (var r in e.defines) i.push(r), i.push(e.defines[r]);
            for (r = 0; r < o.length; r++) i.push(n[o[r]]);
            return i.push(e.onBeforeCompile.toString()), i.push(t.gammaOutput), i.push(t.gammaFactor), i.join()
        }, this.acquireProgram = function(i, a, o, s) { for (var c, h = 0, l = r.length; h < l; h++) { var u = r[h]; if (u.code === s) { c = u, ++c.usedTimes; break } } return void 0 === c && (c = new ne(t, e, s, i, a, o, n), r.push(c)), c }, this.releaseProgram = function(t) {
            if (0 == --t.usedTimes) {
                var e = r.indexOf(t);
                r[e] = r[r.length - 1], r.pop(), t.destroy()
            }
        }, this.programs = r
    }

    function re() { var t = new WeakMap; return { get: function(e) { var n = t.get(e); return void 0 === n && (n = {}, t.set(e, n)), n }, remove: function(e) { t["delete"](e) }, update: function(e, n, i) { t.get(e)[n] = i }, dispose: function() { t = new WeakMap } } }

    function ae(t, e) { return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.program && e.program && t.program !== e.program ? t.program.id - e.program.id : t.material.id !== e.material.id ? t.material.id - e.material.id : t.z !== e.z ? t.z - e.z : t.id - e.id }

    function oe(t, e) { return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.z !== e.z ? e.z - t.z : t.id - e.id }

    function se() {
        function t(t, i, r, a, o, s) { var c = e[n]; return void 0 === c ? (c = { id: t.id, object: t, geometry: i, material: r, program: r.program, groupOrder: a, renderOrder: t.renderOrder, z: o, group: s }, e[n] = c) : (c.id = t.id, c.object = t, c.geometry = i, c.material = r, c.program = r.program, c.groupOrder = a, c.renderOrder = t.renderOrder, c.z = o, c.group = s), n++, c }
        var e = [],
            n = 0,
            i = [],
            r = [];
        return { opaque: i, transparent: r, init: function() { n = 0, i.length = 0, r.length = 0 }, push: function(e, n, a, o, s, c) { e = t(e, n, a, o, s, c), (!0 === a.transparent ? r : i).push(e) }, unshift: function(e, n, a, o, s, c) { e = t(e, n, a, o, s, c), (!0 === a.transparent ? r : i).unshift(e) }, sort: function() { 1 < i.length && i.sort(ae), 1 < r.length && r.sort(oe) } }
    }

    function ce() {
        function t(n) { n = n.target, n.removeEventListener("dispose", t), delete e[n.id] }
        var e = {};
        return {
            get: function(n, i) {
                var r = e[n.id];
                if (void 0 === r) {
                    var a = new se;
                    e[n.id] = {}, e[n.id][i.id] = a, n.addEventListener("dispose", t)
                } else void 0 === (a = r[i.id]) && (a = new se, r[i.id] = a);
                return a
            },
            dispose: function() { e = {} }
        }
    }

    function he() {
        var t = {};
        return {
            get: function(e) {
                if (void 0 !== t[e.id]) return t[e.id];
                switch (e.type) {
                    case "DirectionalLight":
                        var i = { direction: new a, color: new x, shadow: !1, shadowBias: 0, shadowRadius: 1, shadowMapSize: new n };
                        break;
                    case "SpotLight":
                        i = { position: new a, direction: new a, color: new x, distance: 0, coneCos: 0, penumbraCos: 0, decay: 0, shadow: !1, shadowBias: 0, shadowRadius: 1, shadowMapSize: new n };
                        break;
                    case "PointLight":
                        i = { position: new a, color: new x, distance: 0, decay: 0, shadow: !1, shadowBias: 0, shadowRadius: 1, shadowMapSize: new n, shadowCameraNear: 1, shadowCameraFar: 1e3 };
                        break;
                    case "HemisphereLight":
                        i = { direction: new a, skyColor: new x, groundColor: new x };
                        break;
                    case "RectAreaLight":
                        i = { color: new x, position: new a, halfWidth: new a, halfHeight: new a }
                }
                return t[e.id] = i
            }
        }
    }

    function le() {
        var t = new he,
            e = { id: Ca++, hash: { stateID: -1, directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, shadowsLength: -1 }, ambient: [0, 0, 0], directional: [], directionalShadowMap: [], directionalShadowMatrix: [], spot: [], spotShadowMap: [], spotShadowMatrix: [], rectArea: [], point: [], pointShadowMap: [], pointShadowMatrix: [], hemi: [] },
            n = new a,
            r = new i,
            o = new i;
        return {
            setup: function(i, a, s) {
                var c = 0,
                    h = 0,
                    l = 0,
                    u = 0,
                    p = 0,
                    d = 0,
                    f = 0,
                    m = 0;
                s = s.matrixWorldInverse;
                for (var g = 0, v = i.length; g < v; g++) {
                    var y = i[g],
                        x = y.color,
                        b = y.intensity,
                        w = y.distance,
                        _ = y.shadow && y.shadow.map ? y.shadow.map.texture : null;
                    if (y.isAmbientLight) c += x.r * b, h += x.g * b, l += x.b * b;
                    else if (y.isDirectionalLight) {
                        var M = t.get(y);
                        M.color.copy(y.color).multiplyScalar(y.intensity), M.direction.setFromMatrixPosition(y.matrixWorld), n.setFromMatrixPosition(y.target.matrixWorld), M.direction.sub(n), M.direction.transformDirection(s), (M.shadow = y.castShadow) && (x = y.shadow, M.shadowBias = x.bias, M.shadowRadius = x.radius, M.shadowMapSize = x.mapSize), e.directionalShadowMap[u] = _, e.directionalShadowMatrix[u] = y.shadow.matrix, e.directional[u] = M, u++
                    } else y.isSpotLight ? (M = t.get(y), M.position.setFromMatrixPosition(y.matrixWorld), M.position.applyMatrix4(s), M.color.copy(x).multiplyScalar(b), M.distance = w, M.direction.setFromMatrixPosition(y.matrixWorld), n.setFromMatrixPosition(y.target.matrixWorld), M.direction.sub(n), M.direction.transformDirection(s), M.coneCos = Math.cos(y.angle), M.penumbraCos = Math.cos(y.angle * (1 - y.penumbra)), M.decay = y.decay, (M.shadow = y.castShadow) && (x = y.shadow, M.shadowBias = x.bias, M.shadowRadius = x.radius, M.shadowMapSize = x.mapSize), e.spotShadowMap[d] = _, e.spotShadowMatrix[d] = y.shadow.matrix, e.spot[d] = M, d++) : y.isRectAreaLight ? (M = t.get(y), M.color.copy(x).multiplyScalar(b), M.position.setFromMatrixPosition(y.matrixWorld), M.position.applyMatrix4(s), o.identity(), r.copy(y.matrixWorld), r.premultiply(s), o.extractRotation(r), M.halfWidth.set(.5 * y.width, 0, 0), M.halfHeight.set(0, .5 * y.height, 0), M.halfWidth.applyMatrix4(o), M.halfHeight.applyMatrix4(o), e.rectArea[f] = M, f++) : y.isPointLight ? (M = t.get(y), M.position.setFromMatrixPosition(y.matrixWorld), M.position.applyMatrix4(s), M.color.copy(y.color).multiplyScalar(y.intensity), M.distance = y.distance, M.decay = y.decay, (M.shadow = y.castShadow) && (x = y.shadow, M.shadowBias = x.bias, M.shadowRadius = x.radius, M.shadowMapSize = x.mapSize, M.shadowCameraNear = x.camera.near, M.shadowCameraFar = x.camera.far), e.pointShadowMap[p] = _, e.pointShadowMatrix[p] = y.shadow.matrix, e.point[p] = M, p++) : y.isHemisphereLight && (M = t.get(y), M.direction.setFromMatrixPosition(y.matrixWorld), M.direction.transformDirection(s), M.direction.normalize(), M.skyColor.copy(y.color).multiplyScalar(b), M.groundColor.copy(y.groundColor).multiplyScalar(b), e.hemi[m] = M, m++)
                }
                e.ambient[0] = c, e.ambient[1] = h, e.ambient[2] = l, e.directional.length = u, e.spot.length = d, e.rectArea.length = f, e.point.length = p, e.hemi.length = m, e.hash.stateID = e.id, e.hash.directionalLength = u, e.hash.pointLength = p, e.hash.spotLength = d, e.hash.rectAreaLength = f, e.hash.hemiLength = m, e.hash.shadowsLength = a.length
            },
            state: e
        }
    }

    function ue() {
        var t = new le,
            e = [],
            n = [];
        return { init: function() { e.length = 0, n.length = 0 }, state: { lightsArray: e, shadowsArray: n, lights: t }, setupLights: function(i) { t.setup(e, n, i) }, pushLight: function(t) { e.push(t) }, pushShadow: function(t) { n.push(t) } }
    }

    function pe() {
        function t(n) { n = n.target, n.removeEventListener("dispose", t), delete e[n.id] }
        var e = {};
        return {
            get: function(n, i) {
                if (void 0 === e[n.id]) {
                    var r = new ue;
                    e[n.id] = {}, e[n.id][i.id] = r, n.addEventListener("dispose", t)
                } else void 0 === e[n.id][i.id] ? (r = new ue, e[n.id][i.id] = r) : r = e[n.id][i.id];
                return r
            },
            dispose: function() { e = {} }
        }
    }

    function de(t) { j.call(this), this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.morphTargets = this.skinning = !1, this.displacementMap = this.alphaMap = this.map = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.lights = this.fog = !1, this.setValues(t) }

    function fe(t) { j.call(this), this.type = "MeshDistanceMaterial", this.referencePosition = new a, this.nearDistance = 1, this.farDistance = 1e3, this.morphTargets = this.skinning = !1, this.displacementMap = this.alphaMap = this.map = null, this.displacementScale = 1, this.displacementBias = 0, this.lights = this.fog = !1, this.setValues(t) }

    function me(t, e, r) {
        function o(e, n, i, r, a, o) {
            var s = e.geometry,
                c = v,
                h = e.customDepthMaterial;
            return i && (c = y, h = e.customDistanceMaterial), h ? c = h : (h = !1, n.morphTargets && (s && s.isBufferGeometry ? h = s.morphAttributes && s.morphAttributes.position && 0 < s.morphAttributes.position.length : s && s.isGeometry && (h = s.morphTargets && 0 < s.morphTargets.length)), e.isSkinnedMesh && !1 === n.skinning && console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:", e), e = e.isSkinnedMesh && n.skinning, s = 0, h && (s |= 1), e && (s |= 2), c = c[s]), t.localClippingEnabled && !0 === n.clipShadows && 0 !== n.clippingPlanes.length && (s = c.uuid, h = n.uuid, e = x[s], void 0 === e && (e = {}, x[s] = e), s = e[h], void 0 === s && (s = c.clone(), e[h] = s), c = s), c.visible = n.visible, c.wireframe = n.wireframe, c.side = null != n.shadowSide ? n.shadowSide : b[n.side], c.clipShadows = n.clipShadows, c.clippingPlanes = n.clippingPlanes, c.clipIntersection = n.clipIntersection, c.wireframeLinewidth = n.wireframeLinewidth, c.linewidth = n.linewidth, i && c.isMeshDistanceMaterial && (c.referencePosition.copy(r), c.nearDistance = a, c.farDistance = o), c
        }

        function s(n, i, r, a) {
            if (!1 !== n.visible) {
                if (n.layers.test(i.layers) && (n.isMesh || n.isLine || n.isPoints) && n.castShadow && (!n.frustumCulled || l.intersectsObject(n))) {
                    n.modelViewMatrix.multiplyMatrices(r.matrixWorldInverse, n.matrixWorld);
                    var c = e.update(n),
                        h = n.material;
                    if (Array.isArray(h))
                        for (var u = c.groups, p = 0, d = u.length; p < d; p++) {
                            var f = u[p],
                                g = h[f.materialIndex];
                            g && g.visible && (g = o(n, g, a, m, r.near, r.far), t.renderBufferDirect(r, null, c, g, n, f))
                        } else h.visible && (g = o(n, h, a, m, r.near, r.far), t.renderBufferDirect(r, null, c, g, n, null))
                }
                for (n = n.children, c = 0, h = n.length; c < h; c++) s(n[c], i, r, a)
            }
        }
        var l = new g,
            u = new i,
            p = new n,
            d = new n(r, r),
            f = new a,
            m = new a,
            v = Array(4),
            y = Array(4),
            x = {},
            b = { 0: 1, 1: 0, 2: 2 },
            w = [new a(1, 0, 0), new a(-1, 0, 0), new a(0, 0, 1), new a(0, 0, -1), new a(0, 1, 0), new a(0, -1, 0)],
            _ = [new a(0, 1, 0), new a(0, 1, 0), new a(0, 1, 0), new a(0, 1, 0), new a(0, 0, 1), new a(0, 0, -1)],
            M = [new c, new c, new c, new c, new c, new c];
        for (r = 0; 4 !== r; ++r) {
            var E = 0 != (1 & r),
                S = 0 != (2 & r),
                T = new de({ depthPacking: 3201, morphTargets: E, skinning: S });
            v[r] = T, E = new fe({ morphTargets: E, skinning: S }), y[r] = E
        }
        var A = this;
        this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1, this.render = function(e, n, i) {
            if (!1 !== A.enabled && (!1 !== A.autoUpdate || !1 !== A.needsUpdate) && 0 !== e.length) {
                var r = t.getRenderTarget(),
                    a = t.state;
                a.setBlending(0), a.buffers.color.setClear(1, 1, 1, 1), a.buffers.depth.setTest(!0), a.setScissorTest(!1);
                for (var o, c = 0, g = e.length; c < g; c++) {
                    var v = e[c];
                    o = v.shadow;
                    var y = v && v.isPointLight;
                    if (void 0 === o) console.warn("THREE.WebGLShadowMap:", v, "has no shadow.");
                    else {
                        var x = o.camera;
                        if (p.copy(o.mapSize), p.min(d), y) {
                            var b = p.x,
                                E = p.y;
                            M[0].set(2 * b, E, b, E), M[1].set(0, E, b, E), M[2].set(3 * b, E, b, E), M[3].set(b, E, b, E), M[4].set(3 * b, 0, b, E), M[5].set(b, 0, b, E), p.x *= 4, p.y *= 2
                        }
                        for (null === o.map && (o.map = new h(p.x, p.y, { minFilter: 1003, magFilter: 1003, format: 1023 }), o.map.texture.name = v.name + ".shadowMap", x.updateProjectionMatrix()), o.isSpotLightShadow && o.update(v), b = o.map, E = o.matrix, m.setFromMatrixPosition(v.matrixWorld), x.position.copy(m), y ? (o = 6, E.makeTranslation(-m.x, -m.y, -m.z)) : (o = 1, f.setFromMatrixPosition(v.target.matrixWorld), x.lookAt(f), x.updateMatrixWorld(), E.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), E.multiply(x.projectionMatrix), E.multiply(x.matrixWorldInverse)), t.setRenderTarget(b), t.clear(), v = 0; v < o; v++) y && (f.copy(x.position), f.add(w[v]), x.up.copy(_[v]), x.lookAt(f), x.updateMatrixWorld(), a.viewport(M[v])), u.multiplyMatrices(x.projectionMatrix, x.matrixWorldInverse), l.setFromMatrix(u), s(n, i, x, y)
                    }
                }
                A.needsUpdate = !1, t.setRenderTarget(r)
            }
        }
    }

    function ge(t, e, n, i) {
        function r(e, n, i) {
            var r = new Uint8Array(4),
                a = t.createTexture();
            for (t.bindTexture(e, a), t.texParameteri(e, 10241, 9728), t.texParameteri(e, 10240, 9728), e = 0; e < i; e++) t.texImage2D(n + e, 0, 6408, 1, 1, 0, 6408, 5121, r);
            return a
        }

        function a(n, r) { y[n] = 1, 0 === x[n] && (t.enableVertexAttribArray(n), x[n] = 1), b[n] !== r && ((i.isWebGL2 ? t : e.get("ANGLE_instanced_arrays"))[i.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](n, r), b[n] = r) }

        function o(e) {!0 !== w[e] && (t.enable(e), w[e] = !0) }

        function s(e) {!1 !== w[e] && (t.disable(e), w[e] = !1) }

        function h(e, i, r, a, c, h, l, u) {
            if (0 === e) E && (s(3042), E = !1);
            else if (E || (o(3042), E = !0), 5 !== e) {
                if (e !== S || u !== I) {
                    if (100 === T && 100 === R || (t.blendEquation(32774), R = T = 100), u) switch (e) {
                        case 1:
                            t.blendFuncSeparate(1, 771, 1, 771);
                            break;
                        case 2:
                            t.blendFunc(1, 1);
                            break;
                        case 3:
                            t.blendFuncSeparate(0, 0, 769, 771);
                            break;
                        case 4:
                            t.blendFuncSeparate(0, 768, 0, 770);
                            break;
                        default:
                            console.error("THREE.WebGLState: Invalid blending: ", e)
                    } else switch (e) {
                        case 1:
                            t.blendFuncSeparate(770, 771, 1, 771);
                            break;
                        case 2:
                            t.blendFunc(770, 1);
                            break;
                        case 3:
                            t.blendFunc(0, 769);
                            break;
                        case 4:
                            t.blendFunc(0, 768);
                            break;
                        default:
                            console.error("THREE.WebGLState: Invalid blending: ", e)
                    }
                    C = P = L = A = null, S = e, I = u
                }
            } else c = c || i, h = h || r, l = l || a, i === T && c === R || (t.blendEquationSeparate(n.convert(i), n.convert(c)), T = i, R = c), r === A && a === L && h === P && l === C || (t.blendFuncSeparate(n.convert(r), n.convert(a), n.convert(h), n.convert(l)), A = r, L = a, P = h, C = l), S = e, I = null
        }

        function l(e) { O !== e && (e ? t.frontFace(2304) : t.frontFace(2305), O = e) }

        function u(e) { 0 !== e ? (o(2884), e !== D && (1 === e ? t.cullFace(1029) : 2 === e ? t.cullFace(1028) : t.cullFace(1032))) : s(2884), D = e }

        function p(e, n, i) { e ? (o(32823), (B !== n || z !== i) && (t.polygonOffset(n, i), B = n, z = i)) : s(32823) }

        function d(e) { void 0 === e && (e = 33984 + U - 1), F !== e && (t.activeTexture(e), F = e) }
        var f = new function() {
                var e = !1,
                    n = new c,
                    i = null,
                    r = new c(0, 0, 0, 0);
                return { setMask: function(n) { i === n || e || (t.colorMask(n, n, n, n), i = n) }, setLocked: function(t) { e = t }, setClear: function(e, i, a, o, s) {!0 === s && (e *= o, i *= o, a *= o), n.set(e, i, a, o), !1 === r.equals(n) && (t.clearColor(e, i, a, o), r.copy(n)) }, reset: function() { e = !1, i = null, r.set(-1, 0, 0, 0) } }
            },
            m = new function() {
                var e = !1,
                    n = null,
                    i = null,
                    r = null;
                return {
                    setTest: function(t) { t ? o(2929) : s(2929) },
                    setMask: function(i) { n === i || e || (t.depthMask(i), n = i) },
                    setFunc: function(e) {
                        if (i !== e) {
                            if (e) switch (e) {
                                case 0:
                                    t.depthFunc(512);
                                    break;
                                case 1:
                                    t.depthFunc(519);
                                    break;
                                case 2:
                                    t.depthFunc(513);
                                    break;
                                case 3:
                                    t.depthFunc(515);
                                    break;
                                case 4:
                                    t.depthFunc(514);
                                    break;
                                case 5:
                                    t.depthFunc(518);
                                    break;
                                case 6:
                                    t.depthFunc(516);
                                    break;
                                case 7:
                                    t.depthFunc(517);
                                    break;
                                default:
                                    t.depthFunc(515)
                            } else t.depthFunc(515);
                            i = e
                        }
                    },
                    setLocked: function(t) { e = t },
                    setClear: function(e) { r !== e && (t.clearDepth(e), r = e) },
                    reset: function() { e = !1, r = i = n = null }
                }
            },
            g = new function() {
                var e = !1,
                    n = null,
                    i = null,
                    r = null,
                    a = null,
                    c = null,
                    h = null,
                    l = null,
                    u = null;
                return { setTest: function(t) { t ? o(2960) : s(2960) }, setMask: function(i) { n === i || e || (t.stencilMask(i), n = i) }, setFunc: function(e, n, o) { i === e && r === n && a === o || (t.stencilFunc(e, n, o), i = e, r = n, a = o) }, setOp: function(e, n, i) { c === e && h === n && l === i || (t.stencilOp(e, n, i), c = e, h = n, l = i) }, setLocked: function(t) { e = t }, setClear: function(e) { u !== e && (t.clearStencil(e), u = e) }, reset: function() { e = !1, u = l = h = c = a = r = i = n = null } }
            },
            v = t.getParameter(34921),
            y = new Uint8Array(v),
            x = new Uint8Array(v),
            b = new Uint8Array(v),
            w = {},
            _ = null,
            M = null,
            E = null,
            S = null,
            T = null,
            A = null,
            L = null,
            R = null,
            P = null,
            C = null,
            I = !1,
            O = null,
            D = null,
            N = null,
            B = null,
            z = null,
            U = t.getParameter(35661),
            G = !1;
        v = 0, v = t.getParameter(7938), -1 !== v.indexOf("WebGL") ? (v = parseFloat(/^WebGL ([0-9])/.exec(v)[1]), G = 1 <= v) : -1 !== v.indexOf("OpenGL ES") && (v = parseFloat(/^OpenGL ES ([0-9])/.exec(v)[1]), G = 2 <= v);
        var F = null,
            H = {},
            V = new c,
            k = new c,
            j = {};
        return j[3553] = r(3553, 3553, 1), j[34067] = r(34067, 34069, 6), f.setClear(0, 0, 0, 1), m.setClear(1), g.setClear(0), o(2929), m.setFunc(3), l(!1), u(1), o(2884), h(0), {
            buffers: { color: f, depth: m, stencil: g },
            initAttributes: function() { for (var t = 0, e = y.length; t < e; t++) y[t] = 0 },
            enableAttribute: function(t) { a(t, 0) },
            enableAttributeAndDivisor: a,
            disableUnusedAttributes: function() { for (var e = 0, n = x.length; e !== n; ++e) x[e] !== y[e] && (t.disableVertexAttribArray(e), x[e] = 0) },
            enable: o,
            disable: s,
            getCompressedTextureFormats: function() {
                if (null === _ && (_ = [], e.get("WEBGL_compressed_texture_pvrtc") || e.get("WEBGL_compressed_texture_s3tc") || e.get("WEBGL_compressed_texture_etc1") || e.get("WEBGL_compressed_texture_astc")))
                    for (var n = t.getParameter(34467), i = 0; i < n.length; i++) _.push(n[i]);
                return _
            },
            useProgram: function(e) { return M !== e && (t.useProgram(e), M = e, !0) },
            setBlending: h,
            setMaterial: function(t, e) {
                2 === t.side ? s(2884) : o(2884);
                var n = 1 === t.side;
                e && (n = !n), l(n), 1 === t.blending && !1 === t.transparent ? h(0) : h(t.blending, t.blendEquation, t.blendSrc, t.blendDst, t.blendEquationAlpha, t.blendSrcAlpha, t.blendDstAlpha, t.premultipliedAlpha), m.setFunc(t.depthFunc), m.setTest(t.depthTest), m.setMask(t.depthWrite), f.setMask(t.colorWrite), p(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits)
            },
            setFlipSided: l,
            setCullFace: u,
            setLineWidth: function(e) { e !== N && (G && t.lineWidth(e), N = e) },
            setPolygonOffset: p,
            setScissorTest: function(t) { t ? o(3089) : s(3089) },
            activeTexture: d,
            bindTexture: function(e, n) {
                null === F && d();
                var i = H[F];
                void 0 === i && (i = { type: void 0, texture: void 0 }, H[F] = i), i.type === e && i.texture === n || (t.bindTexture(e, n || j[e]), i.type = e, i.texture = n)
            },
            compressedTexImage2D: function() { try { t.compressedTexImage2D.apply(t, arguments) } catch (t) { console.error("THREE.WebGLState:", t) } },
            texImage2D: function() { try { t.texImage2D.apply(t, arguments) } catch (t) { console.error("THREE.WebGLState:", t) } },
            texImage3D: function() { try { t.texImage3D.apply(t, arguments) } catch (t) { console.error("THREE.WebGLState:", t) } },
            scissor: function(e) {!1 === V.equals(e) && (t.scissor(e.x, e.y, e.z, e.w), V.copy(e)) },
            viewport: function(e) {!1 === k.equals(e) && (t.viewport(e.x, e.y, e.z, e.w), k.copy(e)) },
            reset: function() {
                for (var e = 0; e < x.length; e++) 1 === x[e] && (t.disableVertexAttribArray(e), x[e] = 0);
                w = {}, F = _ = null, H = {}, D = O = S = M = null, f.reset(), m.reset(), g.reset()
            }
        }
    }

    function ve(t, e, n, i, r, a, o) {
        function s(t, e) { return S ? new OffscreenCanvas(t, e) : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas") }

        function c(t, e, n, i) { var r = 1; if ((t.width > i || t.height > i) && (r = i / Math.max(t.width, t.height)), 1 > r || !0 === e) { if (t instanceof ImageBitmap || t instanceof HTMLImageElement || t instanceof HTMLCanvasElement) return i = e ? ca.floorPowerOfTwo : Math.floor, e = i(r * t.width), r = i(r * t.height), void 0 === M && (M = s(e, r)), n = n ? s(e, r) : M, n.width = e, n.height = r, n.getContext("2d").drawImage(t, 0, 0, e, r), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + t.width + "x" + t.height + ") to (" + e + "x" + r + ")."), S ? n.transferToImageBitmap() : n; "data" in t && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + t.width + "x" + t.height + ").") } return t }

        function h(t) { return ca.isPowerOfTwo(t.width) && ca.isPowerOfTwo(t.height) }

        function l(t, e) { return t.generateMipmaps && e && 1003 !== t.minFilter && 1006 !== t.minFilter }

        function u(e, n, r, a) { t.generateMipmap(e), i.get(n).__maxMipLevel = Math.log(Math.max(r, a)) * Math.LOG2E }

        function p(t, n) { if (!r.isWebGL2) return t; var i = t; return 6403 === t && (5126 === n && (i = 33326), 5131 === n && (i = 33325), 5121 === n && (i = 33321)), 6407 === t && (5126 === n && (i = 34837), 5131 === n && (i = 34843), 5121 === n && (i = 32849)), 6408 === t && (5126 === n && (i = 34836), 5131 === n && (i = 34842), 5121 === n && (i = 32856)), 33325 === i || 33326 === i || 34842 === i || 34836 === i ? e.get("EXT_color_buffer_float") : (34843 === i || 34837 === i) && console.warn("THREE.WebGLRenderer: Floating point textures with RGB format not supported. Please use RGBA instead."), i }

        function d(t) { return 1003 === t || 1004 === t || 1005 === t ? 9728 : 9729 }

        function f(e) {
            e = e.target, e.removeEventListener("dispose", f);
            var n = i.get(e);
            void 0 !== n.__webglInit && (t.deleteTexture(n.__webglTexture), i.remove(e)), e.isVideoTexture && delete E[e.id], o.memory.textures--
        }

        function m(e) {
            e = e.target, e.removeEventListener("dispose", m);
            var n = i.get(e),
                r = i.get(e.texture);
            if (e) {
                if (void 0 !== r.__webglTexture && t.deleteTexture(r.__webglTexture), e.depthTexture && e.depthTexture.dispose(), e.isWebGLRenderTargetCube)
                    for (r = 0; 6 > r; r++) t.deleteFramebuffer(n.__webglFramebuffer[r]), n.__webglDepthbuffer && t.deleteRenderbuffer(n.__webglDepthbuffer[r]);
                else t.deleteFramebuffer(n.__webglFramebuffer), n.__webglDepthbuffer && t.deleteRenderbuffer(n.__webglDepthbuffer);
                i.remove(e.texture), i.remove(e)
            }
            o.memory.textures--
        }

        function g(t, e) {
            var r = i.get(t);
            if (t.isVideoTexture) {
                var a = t.id,
                    s = o.render.frame;
                E[a] !== s && (E[a] = s, t.update())
            }
            if (0 < t.version && r.__version !== t.version)
                if (void 0 === (a = t.image)) console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");
                else {
                    if (!1 !== a.complete) return void x(r, t, e);
                    console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")
                }
            n.activeTexture(33984 + e), n.bindTexture(3553, r.__webglTexture)
        }

        function v(n, o, s) { s ? (t.texParameteri(n, 10242, a.convert(o.wrapS)), t.texParameteri(n, 10243, a.convert(o.wrapT)), 32879 === n && t.texParameteri(n, 32882, a.convert(o.wrapR)), t.texParameteri(n, 10240, a.convert(o.magFilter)), t.texParameteri(n, 10241, a.convert(o.minFilter))) : (t.texParameteri(n, 10242, 33071), t.texParameteri(n, 10243, 33071), 32879 === n && t.texParameteri(n, 32882, 33071), 1001 === o.wrapS && 1001 === o.wrapT || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), t.texParameteri(n, 10240, d(o.magFilter)), t.texParameteri(n, 10241, d(o.minFilter)), 1003 !== o.minFilter && 1006 !== o.minFilter && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), !(s = e.get("EXT_texture_filter_anisotropic")) || 1015 === o.type && null === e.get("OES_texture_float_linear") || 1016 === o.type && null === (r.isWebGL2 || e.get("OES_texture_half_float_linear")) || !(1 < o.anisotropy || i.get(o).__currentAnisotropy) || (t.texParameterf(n, s.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(o.anisotropy, r.getMaxAnisotropy())), i.get(o).__currentAnisotropy = o.anisotropy) }

        function y(e, n) { void 0 === e.__webglInit && (e.__webglInit = !0, n.addEventListener("dispose", f), e.__webglTexture = t.createTexture(), o.memory.textures++) }

        function x(e, i, o) {
            var s = i.isDataTexture3D ? 32879 : 3553;
            y(e, i), n.activeTexture(33984 + o), n.bindTexture(s, e.__webglTexture), t.pixelStorei(37440, i.flipY), t.pixelStorei(37441, i.premultiplyAlpha), t.pixelStorei(3317, i.unpackAlignment), o = !r.isWebGL2 && (1001 !== i.wrapS || 1001 !== i.wrapT || 1003 !== i.minFilter && 1006 !== i.minFilter), o = o && !1 === h(i.image), o = c(i.image, o, !1, r.maxTextureSize);
            var d = h(o) || r.isWebGL2,
                f = a.convert(i.format),
                m = a.convert(i.type),
                g = p(f, m);
            v(s, i, d);
            var x = i.mipmaps;
            if (i.isDepthTexture) {
                if (g = 6402, 1015 === i.type) {
                    if (!r.isWebGL2) throw Error("Float Depth Texture only supported in WebGL2.0");
                    g = 36012
                } else r.isWebGL2 && (g = 33189);
                1026 === i.format && 6402 === g && 1012 !== i.type && 1014 !== i.type && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), i.type = 1012, m = a.convert(i.type)), 1027 === i.format && (g = 34041, 1020 !== i.type && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), i.type = 1020, m = a.convert(i.type))), n.texImage2D(3553, 0, g, o.width, o.height, 0, f, m, null)
            } else if (i.isDataTexture)
                if (0 < x.length && d) {
                    for (var b = 0, w = x.length; b < w; b++) s = x[b], n.texImage2D(3553, b, g, s.width, s.height, 0, f, m, s.data);
                    i.generateMipmaps = !1, e.__maxMipLevel = x.length - 1
                } else n.texImage2D(3553, 0, g, o.width, o.height, 0, f, m, o.data), e.__maxMipLevel = 0;
            else if (i.isCompressedTexture) {
                for (b = 0, w = x.length; b < w; b++) s = x[b], 1023 !== i.format && 1022 !== i.format ? -1 < n.getCompressedTextureFormats().indexOf(f) ? n.compressedTexImage2D(3553, b, g, s.width, s.height, 0, s.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : n.texImage2D(3553, b, g, s.width, s.height, 0, f, m, s.data);
                e.__maxMipLevel = x.length - 1
            } else if (i.isDataTexture3D) n.texImage3D(32879, 0, g, o.width, o.height, o.depth, 0, f, m, o.data), e.__maxMipLevel = 0;
            else if (0 < x.length && d) {
                for (b = 0, w = x.length; b < w; b++) s = x[b], n.texImage2D(3553, b, g, f, m, s);
                i.generateMipmaps = !1, e.__maxMipLevel = x.length - 1
            } else n.texImage2D(3553, 0, g, f, m, o), e.__maxMipLevel = 0;
            l(i, d) && u(3553, i, o.width, o.height), e.__version = i.version, i.onUpdate && i.onUpdate(i)
        }

        function b(e, r, o, s) {
            var c = a.convert(r.texture.format),
                h = a.convert(r.texture.type),
                l = p(c, h);
            n.texImage2D(s, 0, l, r.width, r.height, 0, c, h, null), t.bindFramebuffer(36160, e), t.framebufferTexture2D(36160, o, s, i.get(r.texture).__webglTexture, 0), t.bindFramebuffer(36160, null)
        }

        function w(e, n, i) {
            if (t.bindRenderbuffer(36161, e), n.depthBuffer && !n.stencilBuffer) i ? (i = _(n), t.renderbufferStorageMultisample(36161, i, 33189, n.width, n.height)) : t.renderbufferStorage(36161, 33189, n.width, n.height), t.framebufferRenderbuffer(36160, 36096, 36161, e);
            else if (n.depthBuffer && n.stencilBuffer) i ? (i = _(n), t.renderbufferStorageMultisample(36161, i, 34041, n.width, n.height)) : t.renderbufferStorage(36161, 34041, n.width, n.height), t.framebufferRenderbuffer(36160, 33306, 36161, e);
            else {
                e = a.convert(n.texture.format);
                var r = a.convert(n.texture.type);
                e = p(e, r), i ? (i = _(n), t.renderbufferStorageMultisample(36161, i, e, n.width, n.height)) : t.renderbufferStorage(36161, e, n.width, n.height)
            }
            t.bindRenderbuffer(36161, null)
        }

        function _(t) { return r.isWebGL2 && t.isWebGLMultisampleRenderTarget ? Math.min(r.maxSamples, t.samples) : 0 }
        var M, E = {},
            S = "undefined" != typeof OffscreenCanvas;
        this.setTexture2D = g, this.setTexture3D = function(t, e) {
            var r = i.get(t);
            0 < t.version && r.__version !== t.version ? x(r, t, e) : (n.activeTexture(33984 + e), n.bindTexture(32879, r.__webglTexture))
        }, this.setTextureCube = function(e, o) {
            var s = i.get(e);
            if (6 === e.image.length)
                if (0 < e.version && s.__version !== e.version) {
                    y(s, e), n.activeTexture(33984 + o), n.bindTexture(34067, s.__webglTexture), t.pixelStorei(37440, e.flipY), o = e && e.isCompressedTexture;
                    for (var d = e.image[0] && e.image[0].isDataTexture, f = [], m = 0; 6 > m; m++) f[m] = o || d ? d ? e.image[m].image : e.image[m] : c(e.image[m], !1, !0, r.maxCubemapSize);
                    var g = f[0],
                        x = h(g) || r.isWebGL2,
                        b = a.convert(e.format),
                        w = a.convert(e.type),
                        _ = p(b, w);
                    for (v(34067, e, x), m = 0; 6 > m; m++)
                        if (o)
                            for (var M, E = f[m].mipmaps, S = 0, T = E.length; S < T; S++) M = E[S], 1023 !== e.format && 1022 !== e.format ? -1 < n.getCompressedTextureFormats().indexOf(b) ? n.compressedTexImage2D(34069 + m, S, _, M.width, M.height, 0, M.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : n.texImage2D(34069 + m, S, _, M.width, M.height, 0, b, w, M.data);
                        else d ? n.texImage2D(34069 + m, 0, _, f[m].width, f[m].height, 0, b, w, f[m].data) : n.texImage2D(34069 + m, 0, _, b, w, f[m]);
                    s.__maxMipLevel = o ? E.length - 1 : 0, l(e, x) && u(34067, e, g.width, g.height), s.__version = e.version, e.onUpdate && e.onUpdate(e)
                } else n.activeTexture(33984 + o), n.bindTexture(34067, s.__webglTexture)
        }, this.setTextureCubeDynamic = function(t, e) { n.activeTexture(33984 + e), n.bindTexture(34067, i.get(t).__webglTexture) }, this.setupRenderTarget = function(e) {
            var s = i.get(e),
                c = i.get(e.texture);
            e.addEventListener("dispose", m), c.__webglTexture = t.createTexture(), o.memory.textures++;
            var d = !0 === e.isWebGLRenderTargetCube,
                f = !0 === e.isWebGLMultisampleRenderTarget,
                y = h(e) || r.isWebGL2;
            if (d)
                for (s.__webglFramebuffer = [], f = 0; 6 > f; f++) s.__webglFramebuffer[f] = t.createFramebuffer();
            else if (s.__webglFramebuffer = t.createFramebuffer(), f)
                if (r.isWebGL2) {
                    s.__webglMultisampledFramebuffer = t.createFramebuffer(), s.__webglColorRenderbuffer = t.createRenderbuffer(), t.bindRenderbuffer(36161, s.__webglColorRenderbuffer), f = a.convert(e.texture.format);
                    var x = a.convert(e.texture.type);
                    f = p(f, x), x = _(e), t.renderbufferStorageMultisample(36161, x, f, e.width, e.height), t.bindFramebuffer(36160, s.__webglMultisampledFramebuffer), t.framebufferRenderbuffer(36160, 36064, 36161, s.__webglColorRenderbuffer), t.bindRenderbuffer(36161, null), e.depthBuffer && (s.__webglDepthRenderbuffer = t.createRenderbuffer(), w(s.__webglDepthRenderbuffer, e, !0)), t.bindFramebuffer(36160, null)
                } else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");
            if (d) {
                for (n.bindTexture(34067, c.__webglTexture), v(34067, e.texture, y), f = 0; 6 > f; f++) b(s.__webglFramebuffer[f], e, 36064, 34069 + f);
                l(e.texture, y) && u(34067, e.texture, e.width, e.height), n.bindTexture(34067, null)
            } else n.bindTexture(3553, c.__webglTexture), v(3553, e.texture, y), b(s.__webglFramebuffer, e, 36064, 3553), l(e.texture, y) && u(3553, e.texture, e.width, e.height), n.bindTexture(3553, null);
            if (e.depthBuffer) {
                if (s = i.get(e), c = !0 === e.isWebGLRenderTargetCube, e.depthTexture) {
                    if (c) throw Error("target.depthTexture not supported in Cube render targets");
                    if (e && e.isWebGLRenderTargetCube) throw Error("Depth Texture with cube render targets is not supported");
                    if (t.bindFramebuffer(36160, s.__webglFramebuffer), !e.depthTexture || !e.depthTexture.isDepthTexture) throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
                    if (i.get(e.depthTexture).__webglTexture && e.depthTexture.image.width === e.width && e.depthTexture.image.height === e.height || (e.depthTexture.image.width = e.width, e.depthTexture.image.height = e.height, e.depthTexture.needsUpdate = !0), g(e.depthTexture, 0), s = i.get(e.depthTexture).__webglTexture, 1026 === e.depthTexture.format) t.framebufferTexture2D(36160, 36096, 3553, s, 0);
                    else {
                        if (1027 !== e.depthTexture.format) throw Error("Unknown depthTexture format");
                        t.framebufferTexture2D(36160, 33306, 3553, s, 0)
                    }
                } else if (c)
                    for (s.__webglDepthbuffer = [], c = 0; 6 > c; c++) t.bindFramebuffer(36160, s.__webglFramebuffer[c]), s.__webglDepthbuffer[c] = t.createRenderbuffer(), w(s.__webglDepthbuffer[c], e);
                else t.bindFramebuffer(36160, s.__webglFramebuffer), s.__webglDepthbuffer = t.createRenderbuffer(), w(s.__webglDepthbuffer, e);
                t.bindFramebuffer(36160, null)
            }
        }, this.updateRenderTargetMipmap = function(t) {
            var e = t.texture,
                a = h(t) || r.isWebGL2;
            if (l(e, a)) {
                a = t.isWebGLRenderTargetCube ? 34067 : 3553;
                var o = i.get(e).__webglTexture;
                n.bindTexture(a, o), u(a, e, t.width, t.height), n.bindTexture(a, null)
            }
        }, this.updateMultisampleRenderTarget = function(e) {
            if (e.isWebGLMultisampleRenderTarget)
                if (r.isWebGL2) {
                    var n = i.get(e);
                    t.bindFramebuffer(36008, n.__webglMultisampledFramebuffer), t.bindFramebuffer(36009, n.__webglFramebuffer), n = e.width;
                    var a = e.height,
                        o = 16384;
                    e.depthBuffer && (o |= 256), e.stencilBuffer && (o |= 1024), t.blitFramebuffer(0, 0, n, a, 0, 0, n, a, o, 9728)
                } else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")
        }
    }

    function ye(t, e, n) { return { convert: function(t) { if (1e3 === t) return 10497; if (1001 === t) return 33071; if (1002 === t) return 33648; if (1003 === t) return 9728; if (1004 === t) return 9984; if (1005 === t) return 9986; if (1006 === t) return 9729; if (1007 === t) return 9985; if (1008 === t) return 9987; if (1009 === t) return 5121; if (1017 === t) return 32819; if (1018 === t) return 32820; if (1019 === t) return 33635; if (1010 === t) return 5120; if (1011 === t) return 5122; if (1012 === t) return 5123; if (1013 === t) return 5124; if (1014 === t) return 5125; if (1015 === t) return 5126; if (1016 === t) { if (n.isWebGL2) return 5131; var i = e.get("OES_texture_half_float"); if (null !== i) return i.HALF_FLOAT_OES } if (1021 === t) return 6406; if (1022 === t) return 6407; if (1023 === t) return 6408; if (1024 === t) return 6409; if (1025 === t) return 6410; if (1026 === t) return 6402; if (1027 === t) return 34041; if (1028 === t) return 6403; if (100 === t) return 32774; if (101 === t) return 32778; if (102 === t) return 32779; if (200 === t) return 0; if (201 === t) return 1; if (202 === t) return 768; if (203 === t) return 769; if (204 === t) return 770; if (205 === t) return 771; if (206 === t) return 772; if (207 === t) return 773; if (208 === t) return 774; if (209 === t) return 775; if (210 === t) return 776; if ((33776 === t || 33777 === t || 33778 === t || 33779 === t) && null !== (i = e.get("WEBGL_compressed_texture_s3tc"))) { if (33776 === t) return i.COMPRESSED_RGB_S3TC_DXT1_EXT; if (33777 === t) return i.COMPRESSED_RGBA_S3TC_DXT1_EXT; if (33778 === t) return i.COMPRESSED_RGBA_S3TC_DXT3_EXT; if (33779 === t) return i.COMPRESSED_RGBA_S3TC_DXT5_EXT } if ((35840 === t || 35841 === t || 35842 === t || 35843 === t) && null !== (i = e.get("WEBGL_compressed_texture_pvrtc"))) { if (35840 === t) return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG; if (35841 === t) return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG; if (35842 === t) return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG; if (35843 === t) return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG } if (36196 === t && null !== (i = e.get("WEBGL_compressed_texture_etc1"))) return i.COMPRESSED_RGB_ETC1_WEBGL; if ((37808 === t || 37809 === t || 37810 === t || 37811 === t || 37812 === t || 37813 === t || 37814 === t || 37815 === t || 37816 === t || 37817 === t || 37818 === t || 37819 === t || 37820 === t || 37821 === t) && null !== (i = e.get("WEBGL_compressed_texture_astc"))) return t; if (103 === t || 104 === t) { if (n.isWebGL2) { if (103 === t) return 32775; if (104 === t) return 32776 } if (null !== (i = e.get("EXT_blend_minmax"))) { if (103 === t) return i.MIN_EXT; if (104 === t) return i.MAX_EXT } } if (1020 === t) { if (n.isWebGL2) return 34042; if (null !== (i = e.get("WEBGL_depth_texture"))) return i.UNSIGNED_INT_24_8_WEBGL } return 0 } } }

    function xe() { S.call(this), this.type = "Group" }

    function be() { S.call(this), this.type = "Camera", this.matrixWorldInverse = new i, this.projectionMatrix = new i, this.projectionMatrixInverse = new i }

    function we(t, e, n, i) { be.call(this), this.type = "PerspectiveCamera", this.fov = void 0 !== t ? t : 50, this.zoom = 1, this.near = void 0 !== n ? n : .1, this.far = void 0 !== i ? i : 2e3, this.focus = 10, this.aspect = void 0 !== e ? e : 1, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix() }

    function _e(t) { we.call(this), this.cameras = t || [] }

    function Me(t, e, n) {
        Ia.setFromMatrixPosition(e.matrixWorld), Oa.setFromMatrixPosition(n.matrixWorld);
        var i = Ia.distanceTo(Oa),
            r = e.projectionMatrix.elements,
            a = n.projectionMatrix.elements,
            o = r[14] / (r[10] - 1);
        n = r[14] / (r[10] + 1);
        var s = (r[9] + 1) / r[5],
            c = (r[9] - 1) / r[5],
            h = (r[8] - 1) / r[0],
            l = (a[8] + 1) / a[0];
        r = o * h, a = o * l, l = i / (-h + l), h = l * -h, e.matrixWorld.decompose(t.position, t.quaternion, t.scale), t.translateX(h), t.translateZ(l), t.matrixWorld.compose(t.position, t.quaternion, t.scale), t.matrixWorldInverse.getInverse(t.matrixWorld), e = o + l, o = n + l, t.projectionMatrix.makePerspective(r - h, a + (i - h), s * n / o * e, c * n / o * e, e, o)
    }

    function Ee(t) {
        function e() { return null !== h && !0 === h.isPresenting }

        function o() {
            if (e()) {
                var n = h.getEyeParameters("left"),
                    i = n.renderWidth * m;
                n = n.renderHeight * m, E = t.getPixelRatio(), t.getSize(S), t.setDrawingBufferSize(2 * i, n, 1), A.start()
            } else s.enabled && t.setDrawingBufferSize(S.width, S.height, E), A.stop()
        }
        var s = this,
            h = null,
            l = null,
            u = null,
            p = [],
            d = new i,
            f = new i,
            m = 1,
            g = "stage";
        "undefined" != typeof window && "VRFrameData" in window && (l = new window.VRFrameData, window.addEventListener("vrdisplaypresentchange", o, !1));
        var v = new i,
            y = new r,
            x = new a,
            w = new we;
        w.bounds = new c(0, 0, .5, 1), w.layers.enable(1);
        var _ = new we;
        _.bounds = new c(.5, 0, .5, 1), _.layers.enable(2);
        var M = new _e([w, _]);
        M.layers.enable(1), M.layers.enable(2);
        var E, S = new n,
            T = [];
        this.enabled = !1, this.getController = function(t) { var e = p[t]; return void 0 === e && (e = new xe, e.matrixAutoUpdate = !1, e.visible = !1, p[t] = e), e }, this.getDevice = function() { return h }, this.setDevice = function(t) { void 0 !== t && (h = t), A.setContext(t) }, this.setFramebufferScaleFactor = function(t) { m = t }, this.setFrameOfReferenceType = function(t) { g = t }, this.setPoseTarget = function(t) { void 0 !== t && (u = t) }, this.getCamera = function(t) {
            var n = "stage" === g ? 1.6 : 0;
            if (!1 === e()) return t.position.set(0, n, 0), t.rotation.set(0, 0, 0), t;
            if (h.depthNear = t.near, h.depthFar = t.far, h.getFrameData(l), "stage" === g) {
                var i = h.stageParameters;
                i ? d.fromArray(i.sittingToStandingTransform) : d.makeTranslation(0, n, 0)
            }
            n = l.pose, i = null !== u ? u : t, i.matrix.copy(d), i.matrix.decompose(i.position, i.quaternion, i.scale), null !== n.orientation && (y.fromArray(n.orientation), i.quaternion.multiply(y)), null !== n.position && (y.setFromRotationMatrix(d), x.fromArray(n.position), x.applyQuaternion(y), i.position.add(x)), i.updateMatrixWorld(), w.near = t.near, _.near = t.near, w.far = t.far, _.far = t.far, w.matrixWorldInverse.fromArray(l.leftViewMatrix), _.matrixWorldInverse.fromArray(l.rightViewMatrix), f.getInverse(d), "stage" === g && (w.matrixWorldInverse.multiply(f), _.matrixWorldInverse.multiply(f)), t = i.parent, null !== t && (v.getInverse(t.matrixWorld), w.matrixWorldInverse.multiply(v), _.matrixWorldInverse.multiply(v)), w.matrixWorld.getInverse(w.matrixWorldInverse), _.matrixWorld.getInverse(_.matrixWorldInverse), w.projectionMatrix.fromArray(l.leftProjectionMatrix), _.projectionMatrix.fromArray(l.rightProjectionMatrix), Me(M, w, _), t = h.getLayers(), t.length && (t = t[0], null !== t.leftBounds && 4 === t.leftBounds.length && w.bounds.fromArray(t.leftBounds), null !== t.rightBounds && 4 === t.rightBounds.length && _.bounds.fromArray(t.rightBounds));
            t: for (t = 0; t < p.length; t++) {
                n = p[t];
                e: {
                    i = t;
                    for (var r = navigator.getGamepads && navigator.getGamepads(), a = 0, o = 0, s = r.length; a < s; a++) {
                        var c = r[a];
                        if (c && ("Daydream Controller" === c.id || "Gear VR Controller" === c.id || "Oculus Go Controller" === c.id || "OpenVR Gamepad" === c.id || c.id.startsWith("Oculus Touch") || c.id.startsWith("Spatial Controller"))) {
                            if (o === i) { i = c; break e }
                            o++
                        }
                    }
                    i = void 0
                }
                if (void 0 !== i && void 0 !== i.pose) {
                    if (null === i.pose) break t;
                    r = i.pose, !1 === r.hasPosition && n.position.set(.2, -.6, -.05), null !== r.position && n.position.fromArray(r.position), null !== r.orientation && n.quaternion.fromArray(r.orientation), n.matrix.compose(n.position, n.quaternion, n.scale), n.matrix.premultiply(d), n.matrix.decompose(n.position, n.quaternion, n.scale), n.matrixWorldNeedsUpdate = !0, n.visible = !0, r = "Daydream Controller" === i.id ? 0 : 1, T[t] !== i.buttons[r].pressed && (T[t] = i.buttons[r].pressed, !0 === T[t] ? n.dispatchEvent({ type: "selectstart" }) : (n.dispatchEvent({ type: "selectend" }), n.dispatchEvent({ type: "select" })))
                } else n.visible = !1
            }
            return M
        }, this.getStandingMatrix = function() { return d }, this.isPresenting = e;
        var A = new b;
        this.setAnimationLoop = function(t) { A.setAnimationLoop(t) }, this.submitFrame = function() { e() && h.submitFrame() }, this.dispose = function() { "undefined" != typeof window && window.removeEventListener("vrdisplaypresentchange", o) }
    }

    function Se(t) {
        function e() { return null !== s && null !== l }

        function n(t) {
            var e = d[f.indexOf(t.inputSource)];
            e && e.dispatchEvent({ type: t.type })
        }

        function i() { t.setFramebuffer(null), t.setRenderTarget(t.getRenderTarget()), x.stop() }

        function r(t, e) { null === e ? t.matrixWorld.copy(t.matrix) : t.matrixWorld.multiplyMatrices(e.matrixWorld, t.matrix), t.matrixWorldInverse.getInverse(t.matrixWorld) }
        var a = t.context,
            o = null,
            s = null,
            h = 1,
            l = null,
            u = "stage",
            p = null,
            d = [],
            f = [],
            m = new we;
        m.layers.enable(1), m.viewport = new c;
        var g = new we;
        g.layers.enable(2), g.viewport = new c;
        var v = new _e([m, g]);
        v.layers.enable(1), v.layers.enable(2), this.enabled = !1, this.getController = function(t) { var e = d[t]; return void 0 === e && (e = new xe, e.matrixAutoUpdate = !1, e.visible = !1, d[t] = e), e }, this.getDevice = function() { return o }, this.setDevice = function(t) { void 0 !== t && (o = t), t instanceof XRDevice && a.setCompatibleXRDevice(t) }, this.setFramebufferScaleFactor = function(t) { h = t }, this.setFrameOfReferenceType = function(t) { u = t }, this.setSession = function(e) { null !== (s = e) && (s.addEventListener("select", n), s.addEventListener("selectstart", n), s.addEventListener("selectend", n), s.addEventListener("end", i), s.baseLayer = new XRWebGLLayer(s, a, { framebufferScaleFactor: h }), s.requestFrameOfReference(u).then(function(e) { l = e, t.setFramebuffer(s.baseLayer.framebuffer), x.setContext(s), x.start() }), f = s.getInputSources(), s.addEventListener("inputsourceschange", function() { f = s.getInputSources(), console.log(f); for (var t = 0; t < d.length; t++) d[t].userData.inputSource = f[t] })) }, this.getCamera = function(t) {
            if (e()) {
                var n = t.parent,
                    i = v.cameras;
                r(v, n);
                for (var a = 0; a < i.length; a++) r(i[a], n);
                for (t.matrixWorld.copy(v.matrixWorld), t = t.children, a = 0, n = t.length; a < n; a++) t[a].updateMatrixWorld(!0);
                return Me(v, m, g), v
            }
            return t
        }, this.isPresenting = e;
        var y = null,
            x = new b;
        x.setAnimationLoop(function(t, e) {
            if (null !== (p = e.getDevicePose(l)))
                for (var n = s.baseLayer, i = e.views, r = 0; r < i.length; r++) {
                    var a = i[r],
                        o = n.getViewport(a),
                        c = p.getViewMatrix(a),
                        h = v.cameras[r];
                    h.matrix.fromArray(c).getInverse(h.matrix), h.projectionMatrix.fromArray(a.projectionMatrix), h.viewport.set(o.x, o.y, o.width, o.height), 0 === r && v.matrix.copy(h.matrix)
                }
            for (r = 0; r < d.length; r++) n = d[r], (i = f[r]) && null !== (i = e.getInputPose(i, l)) ? ("targetRay" in i ? n.matrix.elements = i.targetRay.transformMatrix : "pointerMatrix" in i && (n.matrix.elements = i.pointerMatrix), n.matrix.decompose(n.position, n.rotation, n.scale), n.visible = !0) : n.visible = !1;
            y && y(t)
        }), this.setAnimationLoop = function(t) { y = t }, this.dispose = function() {}, this.getStandingMatrix = function() { return console.warn("THREE.WebXRManager: getStandingMatrix() is no longer needed."), new THREE.Matrix4 }, this.submitFrame = function() {}
    }

    function Te(t) {
        function e() { xt = new tt(yt), bt = new K(yt, xt, t), bt.isWebGL2 || (xt.get("WEBGL_depth_texture"), xt.get("OES_texture_float"), xt.get("OES_texture_half_float"), xt.get("OES_texture_half_float_linear"), xt.get("OES_standard_derivatives"), xt.get("OES_element_index_uint"), xt.get("ANGLE_instanced_arrays")), xt.get("OES_texture_float_linear"), Nt = new ye(yt, xt, bt), wt = new ge(yt, xt, Nt, bt), wt.scissor(X.copy(lt).multiplyScalar(ct)), wt.viewport(q.copy(ht).multiplyScalar(ct)), _t = new it(yt), Mt = new re, Et = new ve(yt, xt, wt, Mt, bt, Nt, _t), St = new w(yt), Tt = new et(yt, St, _t), At = new ot(Tt, _t), It = new at(yt), Lt = new ie(B, xt, bt), Rt = new ce, Pt = new pe, Ct = new Z(B, wt, At, C), Ot = new Q(yt, xt, _t, bt), Dt = new nt(yt, xt, _t, bt), _t.programs = Lt.programs, B.context = yt, B.capabilities = bt, B.extensions = xt, B.properties = Mt, B.renderLists = Rt, B.state = wt, B.info = _t }

        function r(t) { t.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), z = !0 }

        function o() { console.log("THREE.WebGLRenderer: Context Restored."), z = !1, e() }

        function s(t) { t = t.target, t.removeEventListener("dispose", s), h(t), Mt.remove(t) }

        function h(t) {
            var e = Mt.get(t).program;
            t.program = void 0, void 0 !== e && Lt.releaseProgram(e)
        }

        function l(t, e) { t.render(function(t) { B.renderBufferImmediate(t, e) }) }

        function u(t, e, n, i) {
            if (!1 !== t.visible) {
                if (t.layers.test(e.layers))
                    if (t.isGroup) n = t.renderOrder;
                    else if (t.isLight) N.pushLight(t), t.castShadow && N.pushShadow(t);
                else if (t.isSprite) {
                    if (!t.frustumCulled || pt.intersectsSprite(t)) {
                        i && vt.setFromMatrixPosition(t.matrixWorld).applyMatrix4(gt);
                        var r = At.update(t),
                            a = t.material;
                        D.push(t, r, a, n, vt.z, null)
                    }
                } else if (t.isImmediateRenderObject) i && vt.setFromMatrixPosition(t.matrixWorld).applyMatrix4(gt), D.push(t, null, t.material, n, vt.z, null);
                else if ((t.isMesh || t.isLine || t.isPoints) && (t.isSkinnedMesh && t.skeleton.update(), !t.frustumCulled || pt.intersectsObject(t)))
                    if (i && vt.setFromMatrixPosition(t.matrixWorld).applyMatrix4(gt), r = At.update(t), a = t.material, Array.isArray(a))
                        for (var o = r.groups, s = 0, c = o.length; s < c; s++) {
                            var h = o[s],
                                l = a[h.materialIndex];
                            l && l.visible && D.push(t, r, l, n, vt.z, h)
                        } else a.visible && D.push(t, r, a, n, vt.z, null);
                for (t = t.children, s = 0, c = t.length; s < c; s++) u(t[s], e, n, i)
            }
        }

        function d(t, e, n, i) {
            for (var r = 0, a = t.length; r < a; r++) {
                var o = t[r],
                    s = o.object,
                    c = o.geometry,
                    h = void 0 === i ? o.material : i;
                if (o = o.group, n.isArrayCamera) {
                    W = n;
                    for (var l = n.cameras, u = 0, p = l.length; u < p; u++) {
                        var d = l[u];
                        if (s.layers.test(d.layers)) {
                            if ("viewport" in d) wt.viewport(q.copy(d.viewport));
                            else {
                                var m = d.bounds;
                                wt.viewport(q.set(m.x * rt, m.y * st, m.z * rt, m.w * st).multiplyScalar(ct))
                            }
                            N.setupLights(d), f(s, e, d, c, h, o)
                        }
                    }
                } else W = null, f(s, e, n, c, h, o)
            }
        }

        function f(t, e, n, i, r, a) {
            if (t.onBeforeRender(B, e, n, i, r, a), N = Pt.get(e, W || n), t.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, t.matrixWorld), t.normalMatrix.getNormalMatrix(t.modelViewMatrix), t.isImmediateRenderObject) {
                wt.setMaterial(r);
                var o = y(n, e.fog, r, t);
                V = E = null, k = !1, l(t, o)
            } else B.renderBufferDirect(n, e.fog, i, r, t, a);
            t.onAfterRender(B, e, n, i, r, a), N = Pt.get(e, W || n)
        }

        function m(t, e, n) {
            var i = Mt.get(t),
                r = N.state.lights,
                a = i.lightsHash,
                o = r.state.hash;
            n = Lt.getParameters(t, r.state, N.state.shadowsArray, e, dt.numPlanes, dt.numIntersection, n);
            var c = Lt.getProgramCode(t, n),
                l = i.program,
                u = !0;
            if (void 0 === l) t.addEventListener("dispose", s);
            else if (l.code !== c) h(t);
            else {
                if (a.stateID !== o.stateID || a.directionalLength !== o.directionalLength || a.pointLength !== o.pointLength || a.spotLength !== o.spotLength || a.rectAreaLength !== o.rectAreaLength || a.hemiLength !== o.hemiLength || a.shadowsLength !== o.shadowsLength) a.stateID = o.stateID, a.directionalLength = o.directionalLength, a.pointLength = o.pointLength, a.spotLength = o.spotLength, a.rectAreaLength = o.rectAreaLength, a.hemiLength = o.hemiLength, a.shadowsLength = o.shadowsLength;
                else if (void 0 !== n.shaderID) return;
                u = !1
            }
            if (u && (n.shaderID ? (c = ga[n.shaderID], i.shader = { name: t.type, uniforms: v(c.uniforms), vertexShader: c.vertexShader, fragmentShader: c.fragmentShader }) : i.shader = { name: t.type, uniforms: t.uniforms, vertexShader: t.vertexShader, fragmentShader: t.fragmentShader }, t.onBeforeCompile(i.shader, B), c = Lt.getProgramCode(t, n), l = Lt.acquireProgram(t, i.shader, n, c), i.program = l, t.program = l), n = l.getAttributes(), t.morphTargets)
                for (c = t.numSupportedMorphTargets = 0; c < B.maxMorphTargets; c++) 0 <= n["morphTarget" + c] && t.numSupportedMorphTargets++;
            if (t.morphNormals)
                for (c = t.numSupportedMorphNormals = 0; c < B.maxMorphNormals; c++) 0 <= n["morphNormal" + c] && t.numSupportedMorphNormals++;
            n = i.shader.uniforms, (t.isShaderMaterial || t.isRawShaderMaterial) && !0 !== t.clipping || (i.numClippingPlanes = dt.numPlanes, i.numIntersection = dt.numIntersection, n.clippingPlanes = dt.uniform), i.fog = e, void 0 === a && (i.lightsHash = a = {}), a.stateID = o.stateID, a.directionalLength = o.directionalLength, a.pointLength = o.pointLength, a.spotLength = o.spotLength, a.rectAreaLength = o.rectAreaLength, a.hemiLength = o.hemiLength, a.shadowsLength = o.shadowsLength, t.lights && (n.ambientLightColor.value = r.state.ambient, n.directionalLights.value = r.state.directional, n.spotLights.value = r.state.spot, n.rectAreaLights.value = r.state.rectArea, n.pointLights.value = r.state.point, n.hemisphereLights.value = r.state.hemi, n.directionalShadowMap.value = r.state.directionalShadowMap, n.directionalShadowMatrix.value = r.state.directionalShadowMatrix, n.spotShadowMap.value = r.state.spotShadowMap, n.spotShadowMatrix.value = r.state.spotShadowMatrix, n.pointShadowMap.value = r.state.pointShadowMap, n.pointShadowMatrix.value = r.state.pointShadowMatrix), t = i.program.getUniforms(), t = Vt.seqWithValue(t.seq, n), i.uniformsList = t
        }

        function y(t, e, n, i) {
            J = 0;
            var r = Mt.get(n),
                a = r.lightsHash,
                o = N.state.lights.state.hash;
            ft && (mt || t !== j) && dt.setState(n.clippingPlanes, n.clipIntersection, n.clipShadows, t, r, t === j && n.id === H), !1 === n.needsUpdate && (void 0 === r.program ? n.needsUpdate = !0 : n.fog && r.fog !== e ? n.needsUpdate = !0 : !n.lights || a.stateID === o.stateID && a.directionalLength === o.directionalLength && a.pointLength === o.pointLength && a.spotLength === o.spotLength && a.rectAreaLength === o.rectAreaLength && a.hemiLength === o.hemiLength && a.shadowsLength === o.shadowsLength ? void 0 === r.numClippingPlanes || r.numClippingPlanes === dt.numPlanes && r.numIntersection === dt.numIntersection || (n.needsUpdate = !0) : n.needsUpdate = !0), n.needsUpdate && (m(n, e, i), n.needsUpdate = !1);
            var s = !1,
                c = !1,
                h = !1;
            a = r.program, o = a.getUniforms();
            var l = r.shader.uniforms;
            if (wt.useProgram(a.program) && (h = c = s = !0), n.id !== H && (H = n.id, c = !0), (s || j !== t) && (o.setValue(yt, "projectionMatrix", t.projectionMatrix), bt.logarithmicDepthBuffer && o.setValue(yt, "logDepthBufFC", 2 / (Math.log(t.far + 1) / Math.LN2)), j !== t && (j = t, h = c = !0), (n.isShaderMaterial || n.isMeshPhongMaterial || n.isMeshStandardMaterial || n.envMap) && void 0 !== (s = o.map.cameraPosition) && s.setValue(yt, vt.setFromMatrixPosition(t.matrixWorld)), (n.isMeshPhongMaterial || n.isMeshLambertMaterial || n.isMeshBasicMaterial || n.isMeshStandardMaterial || n.isShaderMaterial || n.skinning) && o.setValue(yt, "viewMatrix", t.matrixWorldInverse)), n.skinning && (o.setOptional(yt, i, "bindMatrix"), o.setOptional(yt, i, "bindMatrixInverse"), t = i.skeleton))
                if (s = t.bones, bt.floatVertexTextures) {
                    if (void 0 === t.boneTexture) {
                        s = Math.sqrt(4 * s.length), s = ca.ceilPowerOfTwo(s), s = Math.max(s, 4);
                        var u = new Float32Array(s * s * 4);
                        u.set(t.boneMatrices);
                        var d = new p(u, s, s, 1023, 1015);
                        d.needsUpdate = !0, t.boneMatrices = u, t.boneTexture = d, t.boneTextureSize = s
                    }
                    o.setValue(yt, "boneTexture", t.boneTexture), o.setValue(yt, "boneTextureSize", t.boneTextureSize)
                } else o.setOptional(yt, t, "boneMatrices");
            return c && (o.setValue(yt, "toneMappingExposure", B.toneMappingExposure), o.setValue(yt, "toneMappingWhitePoint", B.toneMappingWhitePoint), n.lights && (c = h, l.ambientLightColor.needsUpdate = c, l.directionalLights.needsUpdate = c, l.pointLights.needsUpdate = c, l.spotLights.needsUpdate = c, l.rectAreaLights.needsUpdate = c, l.hemisphereLights.needsUpdate = c), e && n.fog && (l.fogColor.value = e.color, e.isFog ? (l.fogNear.value = e.near, l.fogFar.value = e.far) : e.isFogExp2 && (l.fogDensity.value = e.density)), n.isMeshBasicMaterial ? x(l, n) : n.isMeshLambertMaterial ? (x(l, n), n.emissiveMap && (l.emissiveMap.value = n.emissiveMap)) : n.isMeshPhongMaterial ? (x(l, n), n.isMeshToonMaterial ? (_(l, n), n.gradientMap && (l.gradientMap.value = n.gradientMap)) : _(l, n)) : n.isMeshStandardMaterial ? (x(l, n), n.isMeshPhysicalMaterial ? (M(l, n), l.reflectivity.value = n.reflectivity, l.clearCoat.value = n.clearCoat, l.clearCoatRoughness.value = n.clearCoatRoughness) : M(l, n)) : n.isMeshMatcapMaterial ? (x(l, n), n.matcap && (l.matcap.value = n.matcap), n.bumpMap && (l.bumpMap.value = n.bumpMap, l.bumpScale.value = n.bumpScale, 1 === n.side && (l.bumpScale.value *= -1)), n.normalMap && (l.normalMap.value = n.normalMap, l.normalScale.value.copy(n.normalScale), 1 === n.side && l.normalScale.value.negate()), n.displacementMap && (l.displacementMap.value = n.displacementMap, l.displacementScale.value = n.displacementScale, l.displacementBias.value = n.displacementBias)) : n.isMeshDepthMaterial ? (x(l, n), n.displacementMap && (l.displacementMap.value = n.displacementMap, l.displacementScale.value = n.displacementScale, l.displacementBias.value = n.displacementBias)) : n.isMeshDistanceMaterial ? (x(l, n), n.displacementMap && (l.displacementMap.value = n.displacementMap, l.displacementScale.value = n.displacementScale, l.displacementBias.value = n.displacementBias), l.referencePosition.value.copy(n.referencePosition), l.nearDistance.value = n.nearDistance, l.farDistance.value = n.farDistance) : n.isMeshNormalMaterial ? (x(l, n), n.bumpMap && (l.bumpMap.value = n.bumpMap, l.bumpScale.value = n.bumpScale, 1 === n.side && (l.bumpScale.value *= -1)), n.normalMap && (l.normalMap.value = n.normalMap, l.normalScale.value.copy(n.normalScale), 1 === n.side && l.normalScale.value.negate()), n.displacementMap && (l.displacementMap.value = n.displacementMap, l.displacementScale.value = n.displacementScale, l.displacementBias.value = n.displacementBias)) : n.isLineBasicMaterial ? (l.diffuse.value = n.color, l.opacity.value = n.opacity, n.isLineDashedMaterial && (l.dashSize.value = n.dashSize, l.totalSize.value = n.dashSize + n.gapSize, l.scale.value = n.scale)) : n.isPointsMaterial ? (l.diffuse.value = n.color, l.opacity.value = n.opacity, l.size.value = n.size * ct, l.scale.value = .5 * st, l.map.value = n.map, null !== n.map && (!0 === n.map.matrixAutoUpdate && n.map.updateMatrix(), l.uvTransform.value.copy(n.map.matrix))) : n.isSpriteMaterial ? (l.diffuse.value = n.color, l.opacity.value = n.opacity, l.rotation.value = n.rotation, l.map.value = n.map, null !== n.map && (!0 === n.map.matrixAutoUpdate && n.map.updateMatrix(), l.uvTransform.value.copy(n.map.matrix))) : n.isShadowMaterial && (l.color.value = n.color, l.opacity.value = n.opacity), void 0 !== l.ltc_1 && (l.ltc_1.value = ma.LTC_1), void 0 !== l.ltc_2 && (l.ltc_2.value = ma.LTC_2), Vt.upload(yt, r.uniformsList, l, B)), n.isShaderMaterial && !0 === n.uniformsNeedUpdate && (Vt.upload(yt, r.uniformsList, l, B), n.uniformsNeedUpdate = !1), n.isSpriteMaterial && o.setValue(yt, "center", i.center), o.setValue(yt, "modelViewMatrix", i.modelViewMatrix), o.setValue(yt, "normalMatrix", i.normalMatrix), o.setValue(yt, "modelMatrix", i.matrixWorld), a
        }

        function x(t, e) {
            if (t.opacity.value = e.opacity, e.color && (t.diffuse.value = e.color), e.emissive && t.emissive.value.copy(e.emissive).multiplyScalar(e.emissiveIntensity), e.map && (t.map.value = e.map), e.alphaMap && (t.alphaMap.value = e.alphaMap), e.specularMap && (t.specularMap.value = e.specularMap), e.envMap && (t.envMap.value = e.envMap, t.flipEnvMap.value = e.envMap.isCubeTexture ? -1 : 1, t.reflectivity.value = e.reflectivity, t.refractionRatio.value = e.refractionRatio, t.maxMipLevel.value = Mt.get(e.envMap).__maxMipLevel), e.lightMap && (t.lightMap.value = e.lightMap, t.lightMapIntensity.value = e.lightMapIntensity), e.aoMap && (t.aoMap.value = e.aoMap, t.aoMapIntensity.value = e.aoMapIntensity), e.map) var n = e.map;
            else e.specularMap ? n = e.specularMap : e.displacementMap ? n = e.displacementMap : e.normalMap ? n = e.normalMap : e.bumpMap ? n = e.bumpMap : e.roughnessMap ? n = e.roughnessMap : e.metalnessMap ? n = e.metalnessMap : e.alphaMap ? n = e.alphaMap : e.emissiveMap && (n = e.emissiveMap);
            void 0 !== n && (n.isWebGLRenderTarget && (n = n.texture), !0 === n.matrixAutoUpdate && n.updateMatrix(), t.uvTransform.value.copy(n.matrix))
        }

        function _(t, e) { t.specular.value = e.specular, t.shininess.value = Math.max(e.shininess, 1e-4), e.emissiveMap && (t.emissiveMap.value = e.emissiveMap), e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, 1 === e.side && (t.bumpScale.value *= -1)), e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), 1 === e.side && t.normalScale.value.negate()), e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias) }

        function M(t, e) { t.roughness.value = e.roughness, t.metalness.value = e.metalness, e.roughnessMap && (t.roughnessMap.value = e.roughnessMap), e.metalnessMap && (t.metalnessMap.value = e.metalnessMap), e.emissiveMap && (t.emissiveMap.value = e.emissiveMap), e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, 1 === e.side && (t.bumpScale.value *= -1)), e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), 1 === e.side && t.normalScale.value.negate()), e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias), e.envMap && (t.envMapIntensity.value = e.envMapIntensity) }
        var E;
        console.log("THREE.WebGLRenderer", "102"), t = t || {};
        var S = void 0 !== t.canvas ? t.canvas : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"),
            T = void 0 !== t.context ? t.context : null,
            A = void 0 !== t.alpha && t.alpha,
            L = void 0 === t.depth || t.depth,
            R = void 0 === t.stencil || t.stencil,
            P = void 0 !== t.antialias && t.antialias,
            C = void 0 === t.premultipliedAlpha || t.premultipliedAlpha,
            I = void 0 !== t.preserveDrawingBuffer && t.preserveDrawingBuffer,
            O = void 0 !== t.powerPreference ? t.powerPreference : "default",
            D = null,
            N = null;
        this.domElement = S, this.context = null, this.sortObjects = this.autoClearStencil = this.autoClearDepth = this.autoClearColor = this.autoClear = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.gammaFactor = 2, this.physicallyCorrectLights = this.gammaOutput = this.gammaInput = !1, this.toneMappingWhitePoint = this.toneMappingExposure = this.toneMapping = 1, this.maxMorphTargets = 8, this.maxMorphNormals = 4;
        var B = this,
            z = !1,
            U = null,
            G = null,
            F = null,
            H = -1,
            V = E = null,
            k = !1,
            j = null,
            W = null,
            q = new c,
            X = new c,
            Y = null,
            J = 0,
            rt = S.width,
            st = S.height,
            ct = 1,
            ht = new c(0, 0, rt, st),
            lt = new c(0, 0, rt, st),
            ut = !1,
            pt = new g,
            dt = new $,
            ft = !1,
            mt = !1,
            gt = new i,
            vt = new a;
        try {
            A = { alpha: A, depth: L, stencil: R, antialias: P, premultipliedAlpha: C, preserveDrawingBuffer: I, powerPreference: O }, S.addEventListener("webglcontextlost", r, !1), S.addEventListener("webglcontextrestored", o, !1);
            var yt = T || S.getContext("webgl", A) || S.getContext("experimental-webgl", A);
            if (null === yt) { if (null !== S.getContext("webgl")) throw Error("Error creating WebGL context with your selected attributes."); throw Error("Error creating WebGL context.") }
            void 0 === yt.getShaderPrecisionFormat && (yt.getShaderPrecisionFormat = function() { return { rangeMin: 1, rangeMax: 1, precision: 1 } })
        } catch (t) { throw console.error("THREE.WebGLRenderer: " + t.message), t }
        var xt, bt, wt, _t, Mt, Et, St, Tt, At, Lt, Rt, Pt, Ct, It, Ot, Dt, Nt;
        e();
        var Bt = null;
        "undefined" != typeof navigator && (Bt = "xr" in navigator ? new Se(B) : new Ee(B)), this.vr = Bt;
        var zt = new me(B, At, bt.maxTextureSize);
        this.shadowMap = zt, this.getContext = function() { return yt }, this.getContextAttributes = function() { return yt.getContextAttributes() }, this.forceContextLoss = function() {
            var t = xt.get("WEBGL_lose_context");
            t && t.loseContext()
        }, this.forceContextRestore = function() {
            var t = xt.get("WEBGL_lose_context");
            t && t.restoreContext()
        }, this.getPixelRatio = function() { return ct }, this.setPixelRatio = function(t) { void 0 !== t && (ct = t, this.setSize(rt, st, !1)) }, this.getSize = function(t) { return void 0 === t && (console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"), t = new n), t.set(rt, st) }, this.setSize = function(t, e, n) { Bt.isPresenting() ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (rt = t, st = e, S.width = t * ct, S.height = e * ct, !1 !== n && (S.style.width = t + "px", S.style.height = e + "px"), this.setViewport(0, 0, t, e)) }, this.getDrawingBufferSize = function(t) { return void 0 === t && (console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"), t = new n), t.set(rt * ct, st * ct) }, this.setDrawingBufferSize = function(t, e, n) { rt = t, st = e, ct = n, S.width = t * n, S.height = e * n, this.setViewport(0, 0, t, e) }, this.getCurrentViewport = function(t) { return void 0 === t && (console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"), t = new c), t.copy(q) }, this.getViewport = function(t) { return t.copy(ht) }, this.setViewport = function(t, e, n, i) { t.isVector4 ? ht.set(t.x, t.y, t.z, t.w) : ht.set(t, e, n, i), wt.viewport(q.copy(ht).multiplyScalar(ct)) }, this.getScissor = function(t) { return t.copy(lt) }, this.setScissor = function(t, e, n, i) { t.isVector4 ? lt.set(t.x, t.y, t.z, t.w) : lt.set(t, e, n, i), wt.scissor(X.copy(lt).multiplyScalar(ct)) }, this.getScissorTest = function() { return ut }, this.setScissorTest = function(t) { wt.setScissorTest(ut = t) }, this.getClearColor = function() { return Ct.getClearColor() }, this.setClearColor = function() { Ct.setClearColor.apply(Ct, arguments) }, this.getClearAlpha = function() { return Ct.getClearAlpha() }, this.setClearAlpha = function() { Ct.setClearAlpha.apply(Ct, arguments) }, this.clear = function(t, e, n) {
            var i = 0;
            (void 0 === t || t) && (i |= 16384), (void 0 === e || e) && (i |= 256), (void 0 === n || n) && (i |= 1024), yt.clear(i)
        }, this.clearColor = function() { this.clear(!0, !1, !1) }, this.clearDepth = function() { this.clear(!1, !0, !1) }, this.clearStencil = function() { this.clear(!1, !1, !0) }, this.dispose = function() { S.removeEventListener("webglcontextlost", r, !1), S.removeEventListener("webglcontextrestored", o, !1), Rt.dispose(), Pt.dispose(), Mt.dispose(), At.dispose(), Bt.dispose(), Gt.stop() }, this.renderBufferImmediate = function(t, e) {
            wt.initAttributes();
            var n = Mt.get(t);
            t.hasPositions && !n.position && (n.position = yt.createBuffer()), t.hasNormals && !n.normal && (n.normal = yt.createBuffer()), t.hasUvs && !n.uv && (n.uv = yt.createBuffer()), t.hasColors && !n.color && (n.color = yt.createBuffer()), e = e.getAttributes(), t.hasPositions && (yt.bindBuffer(34962, n.position), yt.bufferData(34962, t.positionArray, 35048), wt.enableAttribute(e.position), yt.vertexAttribPointer(e.position, 3, 5126, !1, 0, 0)), t.hasNormals && (yt.bindBuffer(34962, n.normal), yt.bufferData(34962, t.normalArray, 35048), wt.enableAttribute(e.normal), yt.vertexAttribPointer(e.normal, 3, 5126, !1, 0, 0)), t.hasUvs && (yt.bindBuffer(34962, n.uv), yt.bufferData(34962, t.uvArray, 35048), wt.enableAttribute(e.uv), yt.vertexAttribPointer(e.uv, 2, 5126, !1, 0, 0)), t.hasColors && (yt.bindBuffer(34962, n.color), yt.bufferData(34962, t.colorArray, 35048), wt.enableAttribute(e.color), yt.vertexAttribPointer(e.color, 3, 5126, !1, 0, 0)), wt.disableUnusedAttributes(), yt.drawArrays(4, 0, t.count), t.count = 0
        }, this.renderBufferDirect = function(t, e, n, i, r, a) {
            var o = r.isMesh && 0 > r.matrixWorld.determinant();
            wt.setMaterial(i, o);
            var s = y(t, e, i, r),
                c = !1;
            E === n.id && V === s.id && k === (!0 === i.wireframe) || (E = n.id, V = s.id, k = !0 === i.wireframe, c = !0), r.morphTargetInfluences && (It.update(r, n, i, s), c = !0), o = n.index;
            var h = n.attributes.position;
            if (e = 1, !0 === i.wireframe && (o = Tt.getWireframeAttribute(n), e = 2), t = Ot, null !== o) {
                var l = St.get(o);
                t = Dt, t.setIndex(l)
            }
            if (c) {
                if (n && n.isInstancedBufferGeometry && !bt.isWebGL2 && null === xt.get("ANGLE_instanced_arrays")) console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
                else {
                    wt.initAttributes(), c = n.attributes, s = s.getAttributes();
                    var u = i.defaultAttributeValues;
                    for (_ in s) {
                        var p = s[_];
                        if (0 <= p) {
                            var d = c[_];
                            if (void 0 !== d) {
                                var f = d.normalized,
                                    m = d.itemSize,
                                    g = St.get(d);
                                if (void 0 !== g) {
                                    var v = g.buffer,
                                        x = g.type;
                                    if (g = g.bytesPerElement, d.isInterleavedBufferAttribute) {
                                        var b = d.data,
                                            w = b.stride;
                                        d = d.offset, b && b.isInstancedInterleavedBuffer ? (wt.enableAttributeAndDivisor(p, b.meshPerAttribute), void 0 === n.maxInstancedCount && (n.maxInstancedCount = b.meshPerAttribute * b.count)) : wt.enableAttribute(p), yt.bindBuffer(34962, v), yt.vertexAttribPointer(p, m, x, f, w * g, d * g)
                                    } else d.isInstancedBufferAttribute ? (wt.enableAttributeAndDivisor(p, d.meshPerAttribute), void 0 === n.maxInstancedCount && (n.maxInstancedCount = d.meshPerAttribute * d.count)) : wt.enableAttribute(p), yt.bindBuffer(34962, v), yt.vertexAttribPointer(p, m, x, f, 0, 0)
                                }
                            } else if (void 0 !== u && void 0 !== (f = u[_])) switch (f.length) {
                                case 2:
                                    yt.vertexAttrib2fv(p, f);
                                    break;
                                case 3:
                                    yt.vertexAttrib3fv(p, f);
                                    break;
                                case 4:
                                    yt.vertexAttrib4fv(p, f);
                                    break;
                                default:
                                    yt.vertexAttrib1fv(p, f)
                            }
                        }
                    }
                    wt.disableUnusedAttributes()
                }
                null !== o && yt.bindBuffer(34963, l.buffer)
            }
            l = Infinity, null !== o ? l = o.count : void 0 !== h && (l = h.count), o = n.drawRange.start * e, h = null !== a ? a.start * e : 0;
            var _ = Math.max(o, h);
            if (0 !== (a = Math.max(0, Math.min(l, o + n.drawRange.count * e, h + (null !== a ? a.count * e : Infinity)) - 1 - _ + 1))) {
                if (r.isMesh)
                    if (!0 === i.wireframe) wt.setLineWidth(i.wireframeLinewidth * (null === G ? ct : 1)), t.setMode(1);
                    else switch (r.drawMode) {
                        case 0:
                            t.setMode(4);
                            break;
                        case 1:
                            t.setMode(5);
                            break;
                        case 2:
                            t.setMode(6)
                    } else r.isLine ? (i = i.linewidth, void 0 === i && (i = 1), wt.setLineWidth(i * (null === G ? ct : 1)), r.isLineSegments ? t.setMode(1) : r.isLineLoop ? t.setMode(2) : t.setMode(3)) : r.isPoints ? t.setMode(0) : r.isSprite && t.setMode(4);
                n && n.isInstancedBufferGeometry ? 0 < n.maxInstancedCount && t.renderInstances(n, _, a) : t.render(_, a)
            }
        }, this.compile = function(t, e) {
            N = Pt.get(t, e), N.init(), t.traverse(function(t) { t.isLight && (N.pushLight(t), t.castShadow && N.pushShadow(t)) }), N.setupLights(e), t.traverse(function(e) {
                if (e.material)
                    if (Array.isArray(e.material))
                        for (var n = 0; n < e.material.length; n++) m(e.material[n], t.fog, e);
                    else m(e.material, t.fog, e)
            })
        };
        var Ut = null,
            Gt = new b;
        Gt.setAnimationLoop(function(t) { Bt.isPresenting() || Ut && Ut(t) }), "undefined" != typeof window && Gt.setContext(window), this.setAnimationLoop = function(t) { Ut = t, Bt.setAnimationLoop(t), Gt.start() }, this.render = function(t, e, n, i) {
            if (void 0 !== n) { console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."); var r = n }
            if (void 0 !== i) { console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."); var a = i }
            e && e.isCamera ? z || (V = E = null, k = !1, H = -1, j = null, !0 === t.autoUpdate && t.updateMatrixWorld(), null === e.parent && e.updateMatrixWorld(), Bt.enabled && (e = Bt.getCamera(e)), N = Pt.get(t, e), N.init(), t.onBeforeRender(B, t, e, r || G), gt.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), pt.setFromMatrix(gt), mt = this.localClippingEnabled, ft = dt.init(this.clippingPlanes, mt, e), D = Rt.get(t, e), D.init(), u(t, e, 0, B.sortObjects), !0 === B.sortObjects && D.sort(), ft && dt.beginShadows(), zt.render(N.state.shadowsArray, t, e), N.setupLights(e), ft && dt.endShadows(), this.info.autoReset && this.info.reset(), void 0 !== r && this.setRenderTarget(r), Ct.render(D, t, e, a), n = D.opaque, i = D.transparent, t.overrideMaterial ? (r = t.overrideMaterial, n.length && d(n, t, e, r), i.length && d(i, t, e, r)) : (n.length && d(n, t, e), i.length && d(i, t, e)), null !== G && (Et.updateRenderTargetMipmap(G), Et.updateMultisampleRenderTarget(G)), wt.buffers.depth.setTest(!0), wt.buffers.depth.setMask(!0), wt.buffers.color.setMask(!0), wt.setPolygonOffset(!1), t.onAfterRender(B, t, e), Bt.enabled && Bt.submitFrame(), N = D = null) : console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.")
        }, this.allocTextureUnit = function() { var t = J; return t >= bt.maxTextures && console.warn("THREE.WebGLRenderer: Trying to use " + t + " texture units while this GPU supports only " + bt.maxTextures), J += 1, t }, this.setTexture2D = function() { var t = !1; return function(e, n) { e && e.isWebGLRenderTarget && (t || (console.warn("THREE.WebGLRenderer.setTexture2D: don't use render targets as textures. Use their .texture property instead."), t = !0), e = e.texture), Et.setTexture2D(e, n) } }(), this.setTexture3D = function() { return function(t, e) { Et.setTexture3D(t, e) } }(), this.setTexture = function() { var t = !1; return function(e, n) { t || (console.warn("THREE.WebGLRenderer: .setTexture is deprecated, use setTexture2D instead."), t = !0), Et.setTexture2D(e, n) } }(), this.setTextureCube = function() { var t = !1; return function(e, n) { e && e.isWebGLRenderTargetCube && (t || (console.warn("THREE.WebGLRenderer.setTextureCube: don't use cube render targets as textures. Use their .texture property instead."), t = !0), e = e.texture), e && e.isCubeTexture || Array.isArray(e.image) && 6 === e.image.length ? Et.setTextureCube(e, n) : Et.setTextureCubeDynamic(e, n) } }(), this.setFramebuffer = function(t) { U = t }, this.getRenderTarget = function() { return G }, this.setRenderTarget = function(t, e, n) {
            (G = t) && void 0 === Mt.get(t).__webglFramebuffer && Et.setupRenderTarget(t);
            var i = U,
                r = !1;
            t ? (i = Mt.get(t).__webglFramebuffer, t.isWebGLRenderTargetCube ? (i = i[e || 0], r = !0) : i = t.isWebGLMultisampleRenderTarget ? Mt.get(t).__webglMultisampledFramebuffer : i, q.copy(t.viewport), X.copy(t.scissor), Y = t.scissorTest) : (q.copy(ht).multiplyScalar(ct), X.copy(lt).multiplyScalar(ct), Y = ut), F !== i && (yt.bindFramebuffer(36160, i), F = i), wt.viewport(q), wt.scissor(X), wt.setScissorTest(Y), r && (t = Mt.get(t.texture), yt.framebufferTexture2D(36160, 36064, 34069 + e || 0, t.__webglTexture, n || 0))
        }, this.readRenderTargetPixels = function(t, e, n, i, r, a) {
            if (t && t.isWebGLRenderTarget) {
                var o = Mt.get(t).__webglFramebuffer;
                if (o) {
                    var s = !1;
                    o !== F && (yt.bindFramebuffer(36160, o), s = !0);
                    try {
                        var c = t.texture,
                            h = c.format,
                            l = c.type;
                        1023 !== h && Nt.convert(h) !== yt.getParameter(35739) ? console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.") : 1009 === l || Nt.convert(l) === yt.getParameter(35738) || 1015 === l && (bt.isWebGL2 || xt.get("OES_texture_float") || xt.get("WEBGL_color_buffer_float")) || 1016 === l && (bt.isWebGL2 ? xt.get("EXT_color_buffer_float") : xt.get("EXT_color_buffer_half_float")) ? 36053 === yt.checkFramebufferStatus(36160) ? 0 <= e && e <= t.width - i && 0 <= n && n <= t.height - r && yt.readPixels(e, n, i, r, Nt.convert(h), Nt.convert(l), a) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.") : console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.")
                    } finally { s && yt.bindFramebuffer(36160, F) }
                }
            } else console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.")
        }, this.copyFramebufferToTexture = function(t, e, n) {
            var i = e.image.width,
                r = e.image.height,
                a = Nt.convert(e.format);
            this.setTexture2D(e, 0), yt.copyTexImage2D(3553, n || 0, a, t.x, t.y, i, r, 0)
        }, this.copyTextureToTexture = function(t, e, n, i) {
            var r = e.image.width,
                a = e.image.height,
                o = Nt.convert(n.format),
                s = Nt.convert(n.type);
            this.setTexture2D(n, 0), e.isDataTexture ? yt.texSubImage2D(3553, i || 0, t.x, t.y, r, a, o, s, e.image.data) : yt.texSubImage2D(3553, i || 0, t.x, t.y, o, s, e.image)
        }
    }

    function Ae(t, e) { this.name = "", this.color = new x(t), this.density = void 0 !== e ? e : 25e-5 }

    function Le(t, e, n) { this.name = "", this.color = new x(t), this.near = void 0 !== e ? e : 1, this.far = void 0 !== n ? n : 1e3 }

    function Re() { S.call(this), this.type = "Scene", this.overrideMaterial = this.fog = this.background = null, this.autoUpdate = !0 }

    function Pe(t, e) { this.array = t, this.stride = e, this.count = void 0 !== t ? t.length / e : 0, this.dynamic = !1, this.updateRange = { offset: 0, count: -1 }, this.version = 0 }

    function Ce(t, e, n, i) { this.data = t, this.itemSize = e, this.offset = n, this.normalized = !0 === i }

    function Ie(t) { j.call(this), this.type = "SpriteMaterial", this.color = new x(16777215), this.map = null, this.rotation = 0, this.sizeAttenuation = !0, this.lights = !1, this.transparent = !0, this.setValues(t) }

    function Oe(t) {
        if (S.call(this), this.type = "Sprite", void 0 === Da) {
            Da = new G;
            var e = new Float32Array([-.5, -.5, 0, 0, 0, .5, -.5, 0, 1, 0, .5, .5, 0, 1, 1, -.5, .5, 0, 0, 1]);
            e = new Pe(e, 5), Da.setIndex([0, 1, 2, 0, 2, 3]), Da.addAttribute("position", new Ce(e, 3, 0, !1)), Da.addAttribute("uv", new Ce(e, 2, 3, !1))
        }
        this.geometry = Da, this.material = void 0 !== t ? t : new Ie, this.center = new n(.5, .5)
    }

    function De() { S.call(this), this.type = "LOD", Object.defineProperties(this, { levels: { enumerable: !0, value: [] } }) }

    function Ne(t, e) { t && t.isGeometry && console.error("THREE.SkinnedMesh no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."), J.call(this, t, e), this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new i, this.bindMatrixInverse = new i }

    function Be(t, e) {
        if (t = t || [], this.bones = t.slice(0), this.boneMatrices = new Float32Array(16 * this.bones.length), void 0 === e) this.calculateInverses();
        else if (this.bones.length === e.length) this.boneInverses = e.slice(0);
        else
            for (console.warn("THREE.Skeleton boneInverses is the wrong length."), this.boneInverses = [], t = 0, e = this.bones.length; t < e; t++) this.boneInverses.push(new i)
    }

    function ze() { S.call(this), this.type = "Bone" }

    function Ue(t) { j.call(this), this.type = "LineBasicMaterial", this.color = new x(16777215), this.linewidth = 1, this.linejoin = this.linecap = "round", this.lights = !1, this.setValues(t) }

    function Ge(t, e, n) { 1 === n && console.error("THREE.Line: parameter THREE.LinePieces no longer supported. Use THREE.LineSegments instead."), S.call(this), this.type = "Line", this.geometry = void 0 !== t ? t : new G, this.material = void 0 !== e ? e : new Ue({ color: 16777215 * Math.random() }) }

    function Fe(t, e) { Ge.call(this, t, e), this.type = "LineSegments" }

    function He(t, e) { Ge.call(this, t, e), this.type = "LineLoop" }

    function Ve(t) { j.call(this), this.type = "PointsMaterial", this.color = new x(16777215), this.map = null, this.size = 1, this.sizeAttenuation = !0, this.lights = this.morphTargets = !1, this.setValues(t) }

    function ke(t, e) { S.call(this), this.type = "Points", this.geometry = void 0 !== t ? t : new G, this.material = void 0 !== e ? e : new Ve({ color: 16777215 * Math.random() }) }

    function je(t, e, n, i, r, a, o, c, h) { s.call(this, t, e, n, i, r, a, o, c, h), this.format = void 0 !== o ? o : 1022, this.minFilter = void 0 !== a ? a : 1006, this.magFilter = void 0 !== r ? r : 1006, this.generateMipmaps = !1 }

    function We(t, e, n, i, r, a, o, c, h, l, u, p) { s.call(this, null, a, o, c, h, l, i, r, u, p), this.image = { width: e, height: n }, this.mipmaps = t, this.generateMipmaps = this.flipY = !1 }

    function qe(t, e, n, i, r, a, o, c, h) { s.call(this, t, e, n, i, r, a, o, c, h), this.needsUpdate = !0 }

    function Xe(t, e, n, i, r, a, o, c, h, l) {
        if (1026 !== (l = void 0 !== l ? l : 1026) && 1027 !== l) throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
        void 0 === n && 1026 === l && (n = 1012), void 0 === n && 1027 === l && (n = 1020), s.call(this, null, i, r, a, o, c, l, n, h), this.image = { width: t, height: e }, this.magFilter = void 0 !== o ? o : 1003, this.minFilter = void 0 !== c ? c : 1003, this.generateMipmaps = this.flipY = !1
    }

    function Ye(t) {
        G.call(this), this.type = "WireframeGeometry";
        var e, n, i, r = [],
            o = [0, 0],
            s = {},
            c = ["a", "b", "c"];
        if (t && t.isGeometry) {
            var h = t.faces,
                l = 0;
            for (n = h.length; l < n; l++) {
                var u = h[l];
                for (e = 0; 3 > e; e++) {
                    var p = u[c[e]],
                        d = u[c[(e + 1) % 3]];
                    o[0] = Math.min(p, d), o[1] = Math.max(p, d), p = o[0] + "," + o[1], void 0 === s[p] && (s[p] = { index1: o[0], index2: o[1] })
                }
            }
            for (p in s) l = s[p], c = t.vertices[l.index1], r.push(c.x, c.y, c.z), c = t.vertices[l.index2], r.push(c.x, c.y, c.z)
        } else if (t && t.isBufferGeometry)
            if (c = new a, null !== t.index) {
                h = t.attributes.position, u = t.index;
                var f = t.groups;
                for (0 === f.length && (f = [{ start: 0, count: u.count, materialIndex: 0 }]), t = 0, i = f.length; t < i; ++t)
                    for (l = f[t], e = l.start, n = l.count, l = e, n = e + n; l < n; l += 3)
                        for (e = 0; 3 > e; e++) p = u.getX(l + e), d = u.getX(l + (e + 1) % 3), o[0] = Math.min(p, d), o[1] = Math.max(p, d), p = o[0] + "," + o[1], void 0 === s[p] && (s[p] = { index1: o[0], index2: o[1] });
                for (p in s) l = s[p], c.fromBufferAttribute(h, l.index1), r.push(c.x, c.y, c.z), c.fromBufferAttribute(h, l.index2), r.push(c.x, c.y, c.z)
            } else
                for (h = t.attributes.position, l = 0, n = h.count / 3; l < n; l++)
                    for (e = 0; 3 > e; e++) s = 3 * l + e, c.fromBufferAttribute(h, s), r.push(c.x, c.y, c.z), s = 3 * l + (e + 1) % 3, c.fromBufferAttribute(h, s), r.push(c.x, c.y, c.z);
        this.addAttribute("position", new N(r, 3))
    }

    function Je(t, e, n) { T.call(this), this.type = "ParametricGeometry", this.parameters = { func: t, slices: e, stacks: n }, this.fromBufferGeometry(new Ze(t, e, n)), this.mergeVertices() }

    function Ze(t, e, n) {
        G.call(this), this.type = "ParametricBufferGeometry", this.parameters = { func: t, slices: e, stacks: n };
        var i, r, o = [],
            s = [],
            c = [],
            h = [],
            l = new a,
            u = new a,
            p = new a,
            d = new a,
            f = new a;
        3 > t.length && console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");
        var m = e + 1;
        for (i = 0; i <= n; i++) {
            var g = i / n;
            for (r = 0; r <= e; r++) {
                var v = r / e;
                t(v, g, u), s.push(u.x, u.y, u.z), 0 <= v - 1e-5 ? (t(v - 1e-5, g, p), d.subVectors(u, p)) : (t(v + 1e-5, g, p), d.subVectors(p, u)), 0 <= g - 1e-5 ? (t(v, g - 1e-5, p), f.subVectors(u, p)) : (t(v, g + 1e-5, p), f.subVectors(p, u)), l.crossVectors(d, f).normalize(), c.push(l.x, l.y, l.z), h.push(v, g)
            }
        }
        for (i = 0; i < n; i++)
            for (r = 0; r < e; r++) t = i * m + r + 1, l = (i + 1) * m + r + 1, u = (i + 1) * m + r, o.push(i * m + r, t, u), o.push(t, l, u);
        this.setIndex(o), this.addAttribute("position", new N(s, 3)), this.addAttribute("normal", new N(c, 3)), this.addAttribute("uv", new N(h, 2))
    }

    function Qe(t, e, n, i) { T.call(this), this.type = "PolyhedronGeometry", this.parameters = { vertices: t, indices: e, radius: n, detail: i }, this.fromBufferGeometry(new Ke(t, e, n, i)), this.mergeVertices() }

    function Ke(t, e, i, r) {
        function o(t) { h.push(t.x, t.y, t.z) }

        function s(e, n) { e *= 3, n.x = t[e + 0], n.y = t[e + 1], n.z = t[e + 2] }

        function c(t, e, n, i) { 0 > i && 1 === t.x && (l[e] = t.x - 1), 0 === n.x && 0 === n.z && (l[e] = i / 2 / Math.PI + .5) }
        G.call(this), this.type = "PolyhedronBufferGeometry", this.parameters = { vertices: t, indices: e, radius: i, detail: r }, i = i || 1, r = r || 0;
        var h = [],
            l = [];
        ! function(t) {
            for (var n = new a, i = new a, r = new a, c = 0; c < e.length; c += 3) {
                s(e[c + 0], n), s(e[c + 1], i), s(e[c + 2], r);
                var h, l, u = n,
                    p = i,
                    d = r,
                    f = Math.pow(2, t),
                    m = [];
                for (l = 0; l <= f; l++) {
                    m[l] = [];
                    var g = u.clone().lerp(d, l / f),
                        v = p.clone().lerp(d, l / f),
                        y = f - l;
                    for (h = 0; h <= y; h++) m[l][h] = 0 === h && l === f ? g : g.clone().lerp(v, h / y)
                }
                for (l = 0; l < f; l++)
                    for (h = 0; h < 2 * (f - l) - 1; h++) u = Math.floor(h / 2), 0 == h % 2 ? (o(m[l][u + 1]), o(m[l + 1][u]), o(m[l][u])) : (o(m[l][u + 1]), o(m[l + 1][u + 1]), o(m[l + 1][u]))
            }
        }(r),
        function(t) { for (var e = new a, n = 0; n < h.length; n += 3) e.x = h[n + 0], e.y = h[n + 1], e.z = h[n + 2], e.normalize().multiplyScalar(t), h[n + 0] = e.x, h[n + 1] = e.y, h[n + 2] = e.z }(i),
        function() {
            for (var t = new a, e = 0; e < h.length; e += 3) t.x = h[e + 0], t.y = h[e + 1], t.z = h[e + 2], l.push(Math.atan2(t.z, -t.x) / 2 / Math.PI + .5, 1 - (Math.atan2(-t.y, Math.sqrt(t.x * t.x + t.z * t.z)) / Math.PI + .5));
            t = new a, e = new a;
            for (var i = new a, r = new a, o = new n, s = new n, u = new n, p = 0, d = 0; p < h.length; p += 9, d += 6) {
                t.set(h[p + 0], h[p + 1], h[p + 2]), e.set(h[p + 3], h[p + 4], h[p + 5]), i.set(h[p + 6], h[p + 7], h[p + 8]), o.set(l[d + 0], l[d + 1]), s.set(l[d + 2], l[d + 3]), u.set(l[d + 4], l[d + 5]), r.copy(t).add(e).add(i).divideScalar(3);
                var f = Math.atan2(r.z, -r.x);
                c(o, d + 0, t, f), c(s, d + 2, e, f), c(u, d + 4, i, f)
            }
            for (t = 0; t < l.length; t += 6) e = l[t + 0], i = l[t + 2], r = l[t + 4], o = Math.min(e, i, r), .9 < Math.max(e, i, r) && .1 > o && (.2 > e && (l[t + 0] += 1), .2 > i && (l[t + 2] += 1), .2 > r && (l[t + 4] += 1))
        }(), this.addAttribute("position", new N(h, 3)), this.addAttribute("normal", new N(h.slice(), 3)), this.addAttribute("uv", new N(l, 2)), 0 === r ? this.computeVertexNormals() : this.normalizeNormals()
    }

    function $e(t, e) { T.call(this), this.type = "TetrahedronGeometry", this.parameters = { radius: t, detail: e }, this.fromBufferGeometry(new tn(t, e)), this.mergeVertices() }

    function tn(t, e) { Ke.call(this, [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1], t, e), this.type = "TetrahedronBufferGeometry", this.parameters = { radius: t, detail: e } }

    function en(t, e) { T.call(this), this.type = "OctahedronGeometry", this.parameters = { radius: t, detail: e }, this.fromBufferGeometry(new nn(t, e)), this.mergeVertices() }

    function nn(t, e) { Ke.call(this, [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2], t, e), this.type = "OctahedronBufferGeometry", this.parameters = { radius: t, detail: e } }

    function rn(t, e) { T.call(this), this.type = "IcosahedronGeometry", this.parameters = { radius: t, detail: e }, this.fromBufferGeometry(new an(t, e)), this.mergeVertices() }

    function an(t, e) {
        var n = (1 + Math.sqrt(5)) / 2;
        Ke.call(this, [-1, n, 0, 1, n, 0, -1, -n, 0, 1, -n, 0, 0, -1, n, 0, 1, n, 0, -1, -n, 0, 1, -n, n, 0, -1, n, 0, 1, -n, 0, -1, -n, 0, 1], [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1], t, e), this.type = "IcosahedronBufferGeometry", this.parameters = { radius: t, detail: e }
    }

    function on(t, e) { T.call(this), this.type = "DodecahedronGeometry", this.parameters = { radius: t, detail: e }, this.fromBufferGeometry(new sn(t, e)), this.mergeVertices() }

    function sn(t, e) {
        var n = (1 + Math.sqrt(5)) / 2,
            i = 1 / n;
        Ke.call(this, [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -i, -n, 0, -i, n, 0, i, -n, 0, i, n, -i, -n, 0, -i, n, 0, i, -n, 0, i, n, 0, -n, 0, -i, n, 0, -i, -n, 0, i, n, 0, i], [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9], t, e), this.type = "DodecahedronBufferGeometry", this.parameters = { radius: t, detail: e }
    }

    function cn(t, e, n, i, r, a) { T.call(this), this.type = "TubeGeometry", this.parameters = { path: t, tubularSegments: e, radius: n, radialSegments: i, closed: r }, void 0 !== a && console.warn("THREE.TubeGeometry: taper has been removed."), t = new hn(t, e, n, i, r), this.tangents = t.tangents, this.normals = t.normals, this.binormals = t.binormals, this.fromBufferGeometry(t), this.mergeVertices() }

    function hn(t, e, i, r, o) {
        function s(n) {
            f = t.getPointAt(n / e, f);
            var a = c.normals[n];
            for (n = c.binormals[n], l = 0; l <= r; l++) {
                var o = l / r * Math.PI * 2,
                    s = Math.sin(o);
                o = -Math.cos(o), p.x = o * a.x + s * n.x, p.y = o * a.y + s * n.y, p.z = o * a.z + s * n.z, p.normalize(), g.push(p.x, p.y, p.z), u.x = f.x + i * p.x, u.y = f.y + i * p.y, u.z = f.z + i * p.z, m.push(u.x, u.y, u.z)
            }
        }
        G.call(this), this.type = "TubeBufferGeometry", this.parameters = { path: t, tubularSegments: e, radius: i, radialSegments: r, closed: o }, e = e || 64, i = i || 1, r = r || 8, o = o || !1;
        var c = t.computeFrenetFrames(e, o);
        this.tangents = c.tangents, this.normals = c.normals, this.binormals = c.binormals;
        var h, l, u = new a,
            p = new a,
            d = new n,
            f = new a,
            m = [],
            g = [],
            v = [],
            y = [];
        for (h = 0; h < e; h++) s(h);
        for (s(!1 === o ? e : 0), h = 0; h <= e; h++)
            for (l = 0; l <= r; l++) d.x = h / e, d.y = l / r, v.push(d.x, d.y);
        ! function() {
            for (l = 1; l <= e; l++)
                for (h = 1; h <= r; h++) {
                    var t = (r + 1) * l + (h - 1),
                        n = (r + 1) * l + h,
                        i = (r + 1) * (l - 1) + h;
                    y.push((r + 1) * (l - 1) + (h - 1), t, i), y.push(t, n, i)
                }
        }(), this.setIndex(y), this.addAttribute("position", new N(m, 3)), this.addAttribute("normal", new N(g, 3)), this.addAttribute("uv", new N(v, 2))
    }

    function ln(t, e, n, i, r, a, o) { T.call(this), this.type = "TorusKnotGeometry", this.parameters = { radius: t, tube: e, tubularSegments: n, radialSegments: i, p: r, q: a }, void 0 !== o && console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead."), this.fromBufferGeometry(new un(t, e, n, i, r, a)), this.mergeVertices() }

    function un(t, e, n, i, r, o) {
        function s(t, e, n, i, r) {
            var a = Math.sin(t);
            e = n / e * t, n = Math.cos(e), r.x = i * (2 + n) * .5 * Math.cos(t), r.y = i * (2 + n) * a * .5, r.z = i * Math.sin(e) * .5
        }
        G.call(this), this.type = "TorusKnotBufferGeometry", this.parameters = { radius: t, tube: e, tubularSegments: n, radialSegments: i, p: r, q: o }, t = t || 1, e = e || .4, n = Math.floor(n) || 64, i = Math.floor(i) || 8, r = r || 2, o = o || 3;
        var c, h = [],
            l = [],
            u = [],
            p = [],
            d = new a,
            f = new a,
            m = new a,
            g = new a,
            v = new a,
            y = new a,
            x = new a;
        for (c = 0; c <= n; ++c) {
            var b = c / n * r * Math.PI * 2;
            for (s(b, r, o, t, m), s(b + .01, r, o, t, g), y.subVectors(g, m), x.addVectors(g, m), v.crossVectors(y, x), x.crossVectors(v, y), v.normalize(), x.normalize(), b = 0; b <= i; ++b) {
                var w = b / i * Math.PI * 2,
                    _ = -e * Math.cos(w);
                w = e * Math.sin(w), d.x = m.x + (_ * x.x + w * v.x), d.y = m.y + (_ * x.y + w * v.y), d.z = m.z + (_ * x.z + w * v.z), l.push(d.x, d.y, d.z), f.subVectors(d, m).normalize(), u.push(f.x, f.y, f.z), p.push(c / n), p.push(b / i)
            }
        }
        for (b = 1; b <= n; b++)
            for (c = 1; c <= i; c++) t = (i + 1) * b + (c - 1), e = (i + 1) * b + c, r = (i + 1) * (b - 1) + c, h.push((i + 1) * (b - 1) + (c - 1), t, r), h.push(t, e, r);
        this.setIndex(h), this.addAttribute("position", new N(l, 3)), this.addAttribute("normal", new N(u, 3)), this.addAttribute("uv", new N(p, 2))
    }

    function pn(t, e, n, i, r) { T.call(this), this.type = "TorusGeometry", this.parameters = { radius: t, tube: e, radialSegments: n, tubularSegments: i, arc: r }, this.fromBufferGeometry(new dn(t, e, n, i, r)), this.mergeVertices() }

    function dn(t, e, n, i, r) {
        G.call(this), this.type = "TorusBufferGeometry", this.parameters = { radius: t, tube: e, radialSegments: n, tubularSegments: i, arc: r }, t = t || 1, e = e || .4, n = Math.floor(n) || 8, i = Math.floor(i) || 6, r = r || 2 * Math.PI;
        var o, s, c = [],
            h = [],
            l = [],
            u = [],
            p = new a,
            d = new a,
            f = new a;
        for (o = 0; o <= n; o++)
            for (s = 0; s <= i; s++) {
                var m = s / i * r,
                    g = o / n * Math.PI * 2;
                d.x = (t + e * Math.cos(g)) * Math.cos(m), d.y = (t + e * Math.cos(g)) * Math.sin(m), d.z = e * Math.sin(g), h.push(d.x, d.y, d.z), p.x = t * Math.cos(m), p.y = t * Math.sin(m), f.subVectors(d, p).normalize(), l.push(f.x, f.y, f.z), u.push(s / i), u.push(o / n)
            }
        for (o = 1; o <= n; o++)
            for (s = 1; s <= i; s++) t = (i + 1) * (o - 1) + s - 1, e = (i + 1) * (o - 1) + s, r = (i + 1) * o + s, c.push((i + 1) * o + s - 1, t, r), c.push(t, e, r);
        this.setIndex(c), this.addAttribute("position", new N(h, 3)), this.addAttribute("normal", new N(l, 3)), this.addAttribute("uv", new N(u, 2))
    }

    function fn(t, e, n, i, r) {
        for (var a, o = 0, s = e, c = n - i; s < n; s += i) o += (t[c] - t[s]) * (t[s + 1] + t[c + 1]), c = s;
        if (r === 0 < o)
            for (r = e; r < n; r += i) a = An(r, t[r], t[r + 1], a);
        else
            for (r = n - i; r >= e; r -= i) a = An(r, t[r], t[r + 1], a);
        return a && Mn(a, a.next) && (Ln(a), a = a.next), a
    }

    function mn(t, e) {
        if (!t) return t;
        e || (e = t);
        do {
            var n = !1;
            if (t.steiner || !Mn(t, t.next) && 0 !== _n(t.prev, t, t.next)) t = t.next;
            else {
                if (Ln(t), (t = e = t.prev) === t.next) break;
                n = !0
            }
        } while (n || t !== e);
        return e
    }

    function gn(t, e, n, i, r, a, o) {
        if (t) {
            if (!o && a) {
                var s = t,
                    c = s;
                do { null === c.z && (c.z = xn(c.x, c.y, i, r, a)), c.prevZ = c.prev, c = c.nextZ = c.next } while (c !== s);
                c.prevZ.nextZ = null, c.prevZ = null, s = c;
                var h, l, u, p, d = 1;
                do {
                    c = s;
                    var f = s = null;
                    for (l = 0; c;) {
                        l++;
                        var m = c;
                        for (h = u = 0; h < d && (u++, m = m.nextZ); h++);
                        for (p = d; 0 < u || 0 < p && m;) 0 !== u && (0 === p || !m || c.z <= m.z) ? (h = c, c = c.nextZ, u--) : (h = m, m = m.nextZ, p--), f ? f.nextZ = h : s = h, h.prevZ = f, f = h;
                        c = m
                    }
                    f.nextZ = null, d *= 2
                } while (1 < l)
            }
            for (s = t; t.prev !== t.next;) {
                if (c = t.prev, m = t.next, a) t: {
                    f = t,
                    p = i;
                    var g = r,
                        v = a;
                    if (l = f.prev, u = f, d = f.next, 0 <= _n(l, u, d)) f = !1;
                    else {
                        var y = l.x > u.x ? l.x > d.x ? l.x : d.x : u.x > d.x ? u.x : d.x,
                            x = l.y > u.y ? l.y > d.y ? l.y : d.y : u.y > d.y ? u.y : d.y;
                        for (h = xn(l.x < u.x ? l.x < d.x ? l.x : d.x : u.x < d.x ? u.x : d.x, l.y < u.y ? l.y < d.y ? l.y : d.y : u.y < d.y ? u.y : d.y, p, g, v), p = xn(y, x, p, g, v), g = f.nextZ; g && g.z <= p;) {
                            if (g !== f.prev && g !== f.next && wn(l.x, l.y, u.x, u.y, d.x, d.y, g.x, g.y) && 0 <= _n(g.prev, g, g.next)) { f = !1; break t }
                            g = g.nextZ
                        }
                        for (g = f.prevZ; g && g.z >= h;) {
                            if (g !== f.prev && g !== f.next && wn(l.x, l.y, u.x, u.y, d.x, d.y, g.x, g.y) && 0 <= _n(g.prev, g, g.next)) { f = !1; break t }
                            g = g.prevZ
                        }
                        f = !0
                    }
                }
                else t: if (f = t, l = f.prev, u = f, d = f.next, 0 <= _n(l, u, d)) f = !1;
                    else {
                        for (h = f.next.next; h !== f.prev;) {
                            if (wn(l.x, l.y, u.x, u.y, d.x, d.y, h.x, h.y) && 0 <= _n(h.prev, h, h.next)) { f = !1; break t }
                            h = h.next
                        }
                        f = !0
                    } if (f) e.push(c.i / n), e.push(t.i / n), e.push(m.i / n), Ln(t), s = t = m.next;
                else if ((t = m) === s) {
                    if (o) {
                        if (1 === o) {
                            o = e, s = n, c = t;
                            do { m = c.prev, f = c.next.next, !Mn(m, f) && En(m, c, c.next, f) && Sn(m, f) && Sn(f, m) && (o.push(m.i / s), o.push(c.i / s), o.push(f.i / s), Ln(c), Ln(c.next), c = t = f), c = c.next } while (c !== t);
                            t = c, gn(t, e, n, i, r, a, 2)
                        } else if (2 === o) t: {
                            o = t;do {
                                for (s = o.next.next; s !== o.prev;) {
                                    if (c = o.i !== s.i) {
                                        if (c = o, m = s, f = c.next.i !== m.i && c.prev.i !== m.i) {
                                            e: {
                                                f = c;do {
                                                    if (f.i !== c.i && f.next.i !== c.i && f.i !== m.i && f.next.i !== m.i && En(f, f.next, c, m)) { f = !0; break e }
                                                    f = f.next
                                                } while (f !== c);f = !1
                                            }
                                            f = !f
                                        }
                                        if (f = f && Sn(c, m) && Sn(m, c)) {
                                            f = c, l = !1, u = (c.x + m.x) / 2, m = (c.y + m.y) / 2;
                                            do { f.y > m != f.next.y > m && f.next.y !== f.y && u < (f.next.x - f.x) * (m - f.y) / (f.next.y - f.y) + f.x && (l = !l), f = f.next } while (f !== c);
                                            f = l
                                        }
                                        c = f
                                    }
                                    if (c) { t = Tn(o, s), o = mn(o, o.next), t = mn(t, t.next), gn(o, e, n, i, r, a), gn(t, e, n, i, r, a); break t }
                                    s = s.next
                                }
                                o = o.next
                            } while (o !== t)
                        }
                    } else gn(mn(t), e, n, i, r, a, 1);
                    break
                }
            }
        }
    }

    function vn(t, e) { return t.x - e.x }

    function yn(t, e) {
        var n = e,
            i = t.x,
            r = t.y,
            a = -Infinity;
        do {
            if (r <= n.y && r >= n.next.y && n.next.y !== n.y) { var o = n.x + (r - n.y) * (n.next.x - n.x) / (n.next.y - n.y); if (o <= i && o > a) { if (a = o, o === i) { if (r === n.y) return n; if (r === n.next.y) return n.next } var s = n.x < n.next.x ? n : n.next } }
            n = n.next
        } while (n !== e);
        if (!s) return null;
        if (i === a) return s.prev;
        e = s, o = s.x;
        var c = s.y,
            h = Infinity;
        for (n = s.next; n !== e;) {
            if (i >= n.x && n.x >= o && i !== n.x && wn(r < c ? i : a, r, o, c, r < c ? a : i, r, n.x, n.y)) {
                var l = Math.abs(r - n.y) / (i - n.x);
                (l < h || l === h && n.x > s.x) && Sn(n, t) && (s = n, h = l)
            }
            n = n.next
        }
        return s
    }

    function xn(t, e, n, i, r) { return t = 32767 * (t - n) * r, e = 32767 * (e - i) * r, t = 16711935 & (t | t << 8), t = 252645135 & (t | t << 4), t = 858993459 & (t | t << 2), e = 16711935 & (e | e << 8), e = 252645135 & (e | e << 4), e = 858993459 & (e | e << 2), 1431655765 & (t | t << 1) | (1431655765 & (e | e << 1)) << 1 }

    function bn(t) {
        var e = t,
            n = t;
        do { e.x < n.x && (n = e), e = e.next } while (e !== t);
        return n
    }

    function wn(t, e, n, i, r, a, o, s) { return 0 <= (r - o) * (e - s) - (t - o) * (a - s) && 0 <= (t - o) * (i - s) - (n - o) * (e - s) && 0 <= (n - o) * (a - s) - (r - o) * (i - s) }

    function _n(t, e, n) { return (e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y) }

    function Mn(t, e) { return t.x === e.x && t.y === e.y }

    function En(t, e, n, i) { return !!(Mn(t, e) && Mn(n, i) || Mn(t, i) && Mn(n, e)) || 0 < _n(t, e, n) != 0 < _n(t, e, i) && 0 < _n(n, i, t) != 0 < _n(n, i, e) }

    function Sn(t, e) { return 0 > _n(t.prev, t, t.next) ? 0 <= _n(t, e, t.next) && 0 <= _n(t, t.prev, e) : 0 > _n(t, e, t.prev) || 0 > _n(t, t.next, e) }

    function Tn(t, e) {
        var n = new Rn(t.i, t.x, t.y),
            i = new Rn(e.i, e.x, e.y),
            r = t.next,
            a = e.prev;
        return t.next = e, e.prev = t, n.next = r, r.prev = n, i.next = n, n.prev = i, a.next = i, i.prev = a, i
    }

    function An(t, e, n, i) { return t = new Rn(t, e, n), i ? (t.next = i.next, t.prev = i, i.next.prev = t, i.next = t) : (t.prev = t, t.next = t), t }

    function Ln(t) { t.next.prev = t.prev, t.prev.next = t.next, t.prevZ && (t.prevZ.nextZ = t.nextZ), t.nextZ && (t.nextZ.prevZ = t.prevZ) }

    function Rn(t, e, n) { this.i = t, this.x = e, this.y = n, this.nextZ = this.prevZ = this.z = this.next = this.prev = null, this.steiner = !1 }

    function Pn(t) {
        var e = t.length;
        2 < e && t[e - 1].equals(t[0]) && t.pop()
    }

    function Cn(t, e) { for (var n = 0; n < e.length; n++) t.push(e[n].x), t.push(e[n].y) }

    function In(t, e) { T.call(this), this.type = "ExtrudeGeometry", this.parameters = { shapes: t, options: e }, this.fromBufferGeometry(new On(t, e)), this.mergeVertices() }

    function On(t, e) {
        function i(t) {
            function i(t, e, n) { return e || console.error("THREE.ExtrudeGeometry: vec does not exist"), e.clone().multiplyScalar(n).add(t) }

            function c(t, e, i) {
                var r = t.x - e.x,
                    a = t.y - e.y,
                    o = i.x - t.x,
                    s = i.y - t.y,
                    c = r * r + a * a;
                if (Math.abs(r * s - a * o) > Number.EPSILON) {
                    var h = Math.sqrt(c),
                        l = Math.sqrt(o * o + s * s);
                    if (c = e.x - a / h, e = e.y + r / h, s = ((i.x - s / l - c) * s - (i.y + o / l - e) * o) / (r * s - a * o), o = c + r * s - t.x, r = e + a * s - t.y, 2 >= (a = o * o + r * r)) return new n(o, r);
                    a = Math.sqrt(a / 2)
                } else t = !1, r > Number.EPSILON ? o > Number.EPSILON && (t = !0) : r < -Number.EPSILON ? o < -Number.EPSILON && (t = !0) : Math.sign(a) === Math.sign(s) && (t = !0), t ? (o = -a, a = Math.sqrt(c)) : (o = r, r = a, a = Math.sqrt(c / 2));
                return new n(o / a, r / a)
            }

            function h(t, e) {
                for (F = t.length; 0 <= --F;) {
                    var n = F,
                        i = F - 1;
                    0 > i && (i = t.length - 1);
                    var a, s = g + 2 * w;
                    for (a = 0; a < s; a++) {
                        var c = U * a,
                            h = U * (a + 1),
                            l = e + i + c,
                            u = e + i + h;
                        h = e + n + h, p(e + n + c), p(l), p(h), p(l), p(u), p(h), c = o.length / 3, c = M.generateSideWallUV(r, o, c - 6, c - 3, c - 2, c - 1), d(c[0]), d(c[1]), d(c[3]), d(c[1]), d(c[2]), d(c[3])
                    }
                }
            }

            function l(t, e, n) { f.push(t), f.push(e), f.push(n) }

            function u(t, e, n) { p(t), p(e), p(n), t = o.length / 3, t = M.generateTopUV(r, o, t - 3, t - 2, t - 1), d(t[0]), d(t[1]), d(t[2]) }

            function p(t) { o.push(f[3 * t]), o.push(f[3 * t + 1]), o.push(f[3 * t + 2]) }

            function d(t) { s.push(t.x), s.push(t.y) }
            var f = [],
                m = void 0 !== e.curveSegments ? e.curveSegments : 12,
                g = void 0 !== e.steps ? e.steps : 1,
                v = void 0 !== e.depth ? e.depth : 100,
                y = void 0 === e.bevelEnabled || e.bevelEnabled,
                x = void 0 !== e.bevelThickness ? e.bevelThickness : 6,
                b = void 0 !== e.bevelSize ? e.bevelSize : x - 2,
                w = void 0 !== e.bevelSegments ? e.bevelSegments : 3,
                _ = e.extrudePath,
                M = void 0 !== e.UVGenerator ? e.UVGenerator : za;
            void 0 !== e.amount && (console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."), v = e.amount);
            var E = !1;
            if (_) {
                var S = _.getSpacedPoints(g);
                E = !0, y = !1;
                var T = _.computeFrenetFrames(g, !1),
                    A = new a,
                    L = new a,
                    R = new a
            }
            y || (b = x = w = 0);
            var P;
            m = t.extractPoints(m), t = m.shape;
            var C = m.holes;
            if (!Ba.isClockWise(t)) {
                t = t.reverse();
                var I = 0;
                for (P = C.length; I < P; I++) {
                    var O = C[I];
                    Ba.isClockWise(O) && (C[I] = O.reverse())
                }
            }
            var D = Ba.triangulateShape(t, C),
                N = t;
            for (I = 0, P = C.length; I < P; I++) O = C[I], t = t.concat(O);
            var B, z, U = t.length,
                G = D.length;
            m = [];
            var F = 0,
                H = N.length,
                V = H - 1;
            for (B = F + 1; F < H; F++, V++, B++) V === H && (V = 0), B === H && (B = 0), m[F] = c(N[F], N[V], N[B]);
            _ = [];
            var k = m.concat();
            for (I = 0, P = C.length; I < P; I++) {
                O = C[I];
                var j = [];
                for (F = 0, H = O.length, V = H - 1, B = F + 1; F < H; F++, V++, B++) V === H && (V = 0), B === H && (B = 0), j[F] = c(O[F], O[V], O[B]);
                _.push(j), k = k.concat(j)
            }
            for (V = 0; V < w; V++) {
                H = V / w;
                var W = x * Math.cos(H * Math.PI / 2);
                for (B = b * Math.sin(H * Math.PI / 2), F = 0, H = N.length; F < H; F++) {
                    var q = i(N[F], m[F], B);
                    l(q.x, q.y, -W)
                }
                for (I = 0, P = C.length; I < P; I++)
                    for (O = C[I], j = _[I], F = 0, H = O.length; F < H; F++) q = i(O[F], j[F], B), l(q.x, q.y, -W)
            }
            for (B = b, F = 0; F < U; F++) q = y ? i(t[F], k[F], B) : t[F], E ? (L.copy(T.normals[0]).multiplyScalar(q.x), A.copy(T.binormals[0]).multiplyScalar(q.y), R.copy(S[0]).add(L).add(A), l(R.x, R.y, R.z)) : l(q.x, q.y, 0);
            for (H = 1; H <= g; H++)
                for (F = 0; F < U; F++) q = y ? i(t[F], k[F], B) : t[F], E ? (L.copy(T.normals[H]).multiplyScalar(q.x), A.copy(T.binormals[H]).multiplyScalar(q.y), R.copy(S[H]).add(L).add(A), l(R.x, R.y, R.z)) : l(q.x, q.y, v / g * H);
            for (V = w - 1; 0 <= V; V--) {
                for (H = V / w, W = x * Math.cos(H * Math.PI / 2), B = b * Math.sin(H * Math.PI / 2), F = 0, H = N.length; F < H; F++) q = i(N[F], m[F], B), l(q.x, q.y, v + W);
                for (I = 0, P = C.length; I < P; I++)
                    for (O = C[I], j = _[I], F = 0, H = O.length; F < H; F++) q = i(O[F], j[F], B), E ? l(q.x, q.y + S[g - 1].y, S[g - 1].x + W) : l(q.x, q.y, v + W)
            }! function() {
                var t = o.length / 3;
                if (y) { var e = 0 * U; for (F = 0; F < G; F++) z = D[F], u(z[2] + e, z[1] + e, z[0] + e); for (e = U * (g + 2 * w), F = 0; F < G; F++) z = D[F], u(z[0] + e, z[1] + e, z[2] + e) } else { for (F = 0; F < G; F++) z = D[F], u(z[2], z[1], z[0]); for (F = 0; F < G; F++) z = D[F], u(z[0] + U * g, z[1] + U * g, z[2] + U * g) }
                r.addGroup(t, o.length / 3 - t, 0)
            }(),
            function() {
                var t = o.length / 3,
                    e = 0;
                for (h(N, e), e += N.length, I = 0, P = C.length; I < P; I++) O = C[I], h(O, e), e += O.length;
                r.addGroup(t, o.length / 3 - t, 1)
            }()
        }
        G.call(this), this.type = "ExtrudeBufferGeometry", this.parameters = { shapes: t, options: e }, t = Array.isArray(t) ? t : [t];
        for (var r = this, o = [], s = [], c = 0, h = t.length; c < h; c++) i(t[c]);
        this.addAttribute("position", new N(o, 3)), this.addAttribute("uv", new N(s, 2)), this.computeVertexNormals()
    }

    function Dn(t, e, n) {
        if (n.shapes = [], Array.isArray(t))
            for (var i = 0, r = t.length; i < r; i++) n.shapes.push(t[i].uuid);
        else n.shapes.push(t.uuid);
        return void 0 !== e.extrudePath && (n.options.extrudePath = e.extrudePath.toJSON()), n
    }

    function Nn(t, e) { T.call(this), this.type = "TextGeometry", this.parameters = { text: t, parameters: e }, this.fromBufferGeometry(new Bn(t, e)), this.mergeVertices() }

    function Bn(t, e) {
        e = e || {};
        var n = e.font;
        if (!n || !n.isFont) return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."), new T;
        t = n.generateShapes(t, e.size), e.depth = void 0 !== e.height ? e.height : 50, void 0 === e.bevelThickness && (e.bevelThickness = 10), void 0 === e.bevelSize && (e.bevelSize = 8), void 0 === e.bevelEnabled && (e.bevelEnabled = !1), On.call(this, t, e), this.type = "TextBufferGeometry"
    }

    function zn(t, e, n, i, r, a, o) { T.call(this), this.type = "SphereGeometry", this.parameters = { radius: t, widthSegments: e, heightSegments: n, phiStart: i, phiLength: r, thetaStart: a, thetaLength: o }, this.fromBufferGeometry(new Un(t, e, n, i, r, a, o)), this.mergeVertices() }

    function Un(t, e, n, i, r, o, s) {
        G.call(this), this.type = "SphereBufferGeometry", this.parameters = { radius: t, widthSegments: e, heightSegments: n, phiStart: i, phiLength: r, thetaStart: o, thetaLength: s }, t = t || 1, e = Math.max(3, Math.floor(e) || 8), n = Math.max(2, Math.floor(n) || 6), i = void 0 !== i ? i : 0, r = void 0 !== r ? r : 2 * Math.PI, o = void 0 !== o ? o : 0, s = void 0 !== s ? s : Math.PI;
        var c, h, l = o + s,
            u = 0,
            p = [],
            d = new a,
            f = new a,
            m = [],
            g = [],
            v = [],
            y = [];
        for (h = 0; h <= n; h++) {
            var x = [],
                b = h / n;
            for (c = 0; c <= e; c++) {
                var w = c / e;
                d.x = -t * Math.cos(i + w * r) * Math.sin(o + b * s), d.y = t * Math.cos(o + b * s), d.z = t * Math.sin(i + w * r) * Math.sin(o + b * s), g.push(d.x, d.y, d.z), f.set(d.x, d.y, d.z).normalize(), v.push(f.x, f.y, f.z), y.push(w, 1 - b), x.push(u++)
            }
            p.push(x)
        }
        for (h = 0; h < n; h++)
            for (c = 0; c < e; c++) t = p[h][c + 1], i = p[h][c], r = p[h + 1][c], s = p[h + 1][c + 1], (0 !== h || 0 < o) && m.push(t, i, s), (h !== n - 1 || l < Math.PI) && m.push(i, r, s);
        this.setIndex(m), this.addAttribute("position", new N(g, 3)), this.addAttribute("normal", new N(v, 3)), this.addAttribute("uv", new N(y, 2))
    }

    function Gn(t, e, n, i, r, a) { T.call(this), this.type = "RingGeometry", this.parameters = { innerRadius: t, outerRadius: e, thetaSegments: n, phiSegments: i, thetaStart: r, thetaLength: a }, this.fromBufferGeometry(new Fn(t, e, n, i, r, a)), this.mergeVertices() }

    function Fn(t, e, i, r, o, s) {
        G.call(this), this.type = "RingBufferGeometry", this.parameters = { innerRadius: t, outerRadius: e, thetaSegments: i, phiSegments: r, thetaStart: o, thetaLength: s }, t = t || .5, e = e || 1, o = void 0 !== o ? o : 0, s = void 0 !== s ? s : 2 * Math.PI, i = void 0 !== i ? Math.max(3, i) : 8, r = void 0 !== r ? Math.max(1, r) : 1;
        var c, h, l = [],
            u = [],
            p = [],
            d = [],
            f = t,
            m = (e - t) / r,
            g = new a,
            v = new n;
        for (c = 0; c <= r; c++) {
            for (h = 0; h <= i; h++) t = o + h / i * s, g.x = f * Math.cos(t), g.y = f * Math.sin(t), u.push(g.x, g.y, g.z), p.push(0, 0, 1), v.x = (g.x / e + 1) / 2, v.y = (g.y / e + 1) / 2, d.push(v.x, v.y);
            f += m
        }
        for (c = 0; c < r; c++)
            for (e = c * (i + 1), h = 0; h < i; h++) t = h + e, o = t + i + 1, s = t + i + 2, f = t + 1, l.push(t, o, f), l.push(o, s, f);
        this.setIndex(l), this.addAttribute("position", new N(u, 3)), this.addAttribute("normal", new N(p, 3)), this.addAttribute("uv", new N(d, 2))
    }

    function Hn(t, e, n, i) { T.call(this), this.type = "LatheGeometry", this.parameters = { points: t, segments: e, phiStart: n, phiLength: i }, this.fromBufferGeometry(new Vn(t, e, n, i)), this.mergeVertices() }

    function Vn(t, e, i, r) {
        G.call(this), this.type = "LatheBufferGeometry", this.parameters = { points: t, segments: e, phiStart: i, phiLength: r }, e = Math.floor(e) || 12, i = i || 0, r = r || 2 * Math.PI, r = ca.clamp(r, 0, 2 * Math.PI);
        var o, s = [],
            c = [],
            h = [],
            l = 1 / e,
            u = new a,
            p = new n;
        for (o = 0; o <= e; o++) {
            var d = i + o * l * r,
                f = Math.sin(d),
                m = Math.cos(d);
            for (d = 0; d <= t.length - 1; d++) u.x = t[d].x * f, u.y = t[d].y, u.z = t[d].x * m, c.push(u.x, u.y, u.z), p.x = o / e, p.y = d / (t.length - 1), h.push(p.x, p.y)
        }
        for (o = 0; o < e; o++)
            for (d = 0; d < t.length - 1; d++) i = d + o * t.length, l = i + t.length, u = i + t.length + 1, p = i + 1, s.push(i, l, p), s.push(l, u, p);
        if (this.setIndex(s), this.addAttribute("position", new N(c, 3)), this.addAttribute("uv", new N(h, 2)), this.computeVertexNormals(), r === 2 * Math.PI)
            for (r = this.attributes.normal.array, s = new a, c = new a, h = new a, i = e * t.length * 3, d = o = 0; o < t.length; o++, d += 3) s.x = r[d + 0], s.y = r[d + 1], s.z = r[d + 2], c.x = r[i + d + 0], c.y = r[i + d + 1], c.z = r[i + d + 2], h.addVectors(s, c).normalize(), r[d + 0] = r[i + d + 0] = h.x, r[d + 1] = r[i + d + 1] = h.y, r[d + 2] = r[i + d + 2] = h.z
    }

    function kn(t, e) { T.call(this), this.type = "ShapeGeometry", "object" == typeof e && (console.warn("THREE.ShapeGeometry: Options parameter has been removed."), e = e.curveSegments), this.parameters = { shapes: t, curveSegments: e }, this.fromBufferGeometry(new jn(t, e)), this.mergeVertices() }

    function jn(t, e) {
        function n(t) {
            var n, s = r.length / 3;
            t = t.extractPoints(e);
            var h = t.shape,
                l = t.holes;
            for (!1 === Ba.isClockWise(h) && (h = h.reverse()), t = 0, n = l.length; t < n; t++) { var u = l[t];!0 === Ba.isClockWise(u) && (l[t] = u.reverse()) }
            var p = Ba.triangulateShape(h, l);
            for (t = 0, n = l.length; t < n; t++) u = l[t], h = h.concat(u);
            for (t = 0, n = h.length; t < n; t++) u = h[t], r.push(u.x, u.y, 0), a.push(0, 0, 1), o.push(u.x, u.y);
            for (t = 0, n = p.length; t < n; t++) h = p[t], i.push(h[0] + s, h[1] + s, h[2] + s), c += 3
        }
        G.call(this), this.type = "ShapeBufferGeometry", this.parameters = { shapes: t, curveSegments: e }, e = e || 12;
        var i = [],
            r = [],
            a = [],
            o = [],
            s = 0,
            c = 0;
        if (!1 === Array.isArray(t)) n(t);
        else
            for (var h = 0; h < t.length; h++) n(t[h]), this.addGroup(s, c, h), s += c, c = 0;
        this.setIndex(i), this.addAttribute("position", new N(r, 3)), this.addAttribute("normal", new N(a, 3)), this.addAttribute("uv", new N(o, 2))
    }

    function Wn(t, e) {
        if (e.shapes = [], Array.isArray(t))
            for (var n = 0, i = t.length; n < i; n++) e.shapes.push(t[n].uuid);
        else e.shapes.push(t.uuid);
        return e
    }

    function qn(t, e) {
        G.call(this), this.type = "EdgesGeometry", this.parameters = { thresholdAngle: e };
        var n = [];
        e = Math.cos(ca.DEG2RAD * (void 0 !== e ? e : 1));
        var i = [0, 0],
            r = {},
            a = ["a", "b", "c"];
        if (t.isBufferGeometry) {
            var o = new T;
            o.fromBufferGeometry(t)
        } else o = t.clone();
        o.mergeVertices(), o.computeFaceNormals(), t = o.vertices, o = o.faces;
        for (var s = 0, c = o.length; s < c; s++)
            for (var h = o[s], l = 0; 3 > l; l++) {
                var u = h[a[l]],
                    p = h[a[(l + 1) % 3]];
                i[0] = Math.min(u, p), i[1] = Math.max(u, p), u = i[0] + "," + i[1], void 0 === r[u] ? r[u] = { index1: i[0], index2: i[1], face1: s, face2: void 0 } : r[u].face2 = s
            }
        for (u in r) i = r[u], (void 0 === i.face2 || o[i.face1].normal.dot(o[i.face2].normal) <= e) && (a = t[i.index1], n.push(a.x, a.y, a.z), a = t[i.index2], n.push(a.x, a.y, a.z));
        this.addAttribute("position", new N(n, 3))
    }

    function Xn(t, e, n, i, r, a, o, s) { T.call(this), this.type = "CylinderGeometry", this.parameters = { radiusTop: t, radiusBottom: e, height: n, radialSegments: i, heightSegments: r, openEnded: a, thetaStart: o, thetaLength: s }, this.fromBufferGeometry(new Yn(t, e, n, i, r, a, o, s)), this.mergeVertices() }

    function Yn(t, e, i, r, o, s, c, h) {
        function l(i) {
            var o, s = new n,
                l = new a,
                v = 0,
                b = !0 === i ? t : e,
                w = !0 === i ? 1 : -1,
                _ = g;
            for (o = 1; o <= r; o++) d.push(0, y * w, 0), f.push(0, w, 0), m.push(.5, .5), g++;
            var M = g;
            for (o = 0; o <= r; o++) {
                var E = o / r * h + c,
                    S = Math.cos(E);
                E = Math.sin(E), l.x = b * E, l.y = y * w, l.z = b * S, d.push(l.x, l.y, l.z), f.push(0, w, 0), s.x = .5 * S + .5, s.y = .5 * E * w + .5, m.push(s.x, s.y), g++
            }
            for (o = 0; o < r; o++) s = _ + o, l = M + o, !0 === i ? p.push(l, l + 1, s) : p.push(l + 1, l, s), v += 3;
            u.addGroup(x, v, !0 === i ? 1 : 2), x += v
        }
        G.call(this), this.type = "CylinderBufferGeometry", this.parameters = { radiusTop: t, radiusBottom: e, height: i, radialSegments: r, heightSegments: o, openEnded: s, thetaStart: c, thetaLength: h };
        var u = this;
        t = void 0 !== t ? t : 1, e = void 0 !== e ? e : 1, i = i || 1, r = Math.floor(r) || 8, o = Math.floor(o) || 1, s = void 0 !== s && s, c = void 0 !== c ? c : 0, h = void 0 !== h ? h : 2 * Math.PI;
        var p = [],
            d = [],
            f = [],
            m = [],
            g = 0,
            v = [],
            y = i / 2,
            x = 0;
        ! function() {
            var n, s, l = new a,
                b = new a,
                w = 0,
                _ = (e - t) / i;
            for (s = 0; s <= o; s++) {
                var M = [],
                    E = s / o,
                    S = E * (e - t) + t;
                for (n = 0; n <= r; n++) {
                    var T = n / r,
                        A = T * h + c,
                        L = Math.sin(A);
                    A = Math.cos(A), b.x = S * L, b.y = -E * i + y, b.z = S * A, d.push(b.x, b.y, b.z), l.set(L, _, A).normalize(), f.push(l.x, l.y, l.z), m.push(T, 1 - E), M.push(g++)
                }
                v.push(M)
            }
            for (n = 0; n < r; n++)
                for (s = 0; s < o; s++) l = v[s + 1][n], b = v[s + 1][n + 1], _ = v[s][n + 1], p.push(v[s][n], l, _), p.push(l, b, _), w += 6;
            u.addGroup(x, w, 0), x += w
        }(), !1 === s && (0 < t && l(!0), 0 < e && l(!1)), this.setIndex(p), this.addAttribute("position", new N(d, 3)), this.addAttribute("normal", new N(f, 3)), this.addAttribute("uv", new N(m, 2))
    }

    function Jn(t, e, n, i, r, a, o) { Xn.call(this, 0, t, e, n, i, r, a, o), this.type = "ConeGeometry", this.parameters = { radius: t, height: e, radialSegments: n, heightSegments: i, openEnded: r, thetaStart: a, thetaLength: o } }

    function Zn(t, e, n, i, r, a, o) { Yn.call(this, 0, t, e, n, i, r, a, o), this.type = "ConeBufferGeometry", this.parameters = { radius: t, height: e, radialSegments: n, heightSegments: i, openEnded: r, thetaStart: a, thetaLength: o } }

    function Qn(t, e, n, i) { T.call(this), this.type = "CircleGeometry", this.parameters = { radius: t, segments: e, thetaStart: n, thetaLength: i }, this.fromBufferGeometry(new Kn(t, e, n, i)), this.mergeVertices() }

    function Kn(t, e, i, r) {
        G.call(this), this.type = "CircleBufferGeometry", this.parameters = { radius: t, segments: e, thetaStart: i, thetaLength: r }, t = t || 1, e = void 0 !== e ? Math.max(3, e) : 8, i = void 0 !== i ? i : 0, r = void 0 !== r ? r : 2 * Math.PI;
        var o, s = [],
            c = [],
            h = [],
            l = [],
            u = new a,
            p = new n;
        c.push(0, 0, 0), h.push(0, 0, 1), l.push(.5, .5);
        var d = 0;
        for (o = 3; d <= e; d++, o += 3) {
            var f = i + d / e * r;
            u.x = t * Math.cos(f), u.y = t * Math.sin(f), c.push(u.x, u.y, u.z), h.push(0, 0, 1), p.x = (c[o] / t + 1) / 2, p.y = (c[o + 1] / t + 1) / 2, l.push(p.x, p.y)
        }
        for (o = 1; o <= e; o++) s.push(o, o + 1, 0);
        this.setIndex(s), this.addAttribute("position", new N(c, 3)), this.addAttribute("normal", new N(h, 3)), this.addAttribute("uv", new N(l, 2))
    }

    function $n(t) { j.call(this), this.type = "ShadowMaterial", this.color = new x(0), this.transparent = !0, this.setValues(t) }

    function ti(t) { W.call(this, t), this.type = "RawShaderMaterial" }

    function ei(t) { j.call(this), this.defines = { STANDARD: "" }, this.type = "MeshStandardMaterial", this.color = new x(16777215), this.metalness = this.roughness = .5, this.lightMap = this.map = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new x(0), this.emissiveIntensity = 1, this.bumpMap = this.emissiveMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new n(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.envMap = this.alphaMap = this.metalnessMap = this.roughnessMap = null, this.envMapIntensity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinejoin = this.wireframeLinecap = "round", this.morphNormals = this.morphTargets = this.skinning = !1, this.setValues(t) }

    function ni(t) { ei.call(this), this.defines = { PHYSICAL: "" }, this.type = "MeshPhysicalMaterial", this.reflectivity = .5, this.clearCoatRoughness = this.clearCoat = 0, this.setValues(t) }

    function ii(t) { j.call(this), this.type = "MeshPhongMaterial", this.color = new x(16777215), this.specular = new x(1118481), this.shininess = 30, this.lightMap = this.map = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new x(0), this.emissiveIntensity = 1, this.bumpMap = this.emissiveMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new n(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.envMap = this.alphaMap = this.specularMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinejoin = this.wireframeLinecap = "round", this.morphNormals = this.morphTargets = this.skinning = !1, this.setValues(t) }

    function ri(t) { ii.call(this), this.defines = { TOON: "" }, this.type = "MeshToonMaterial", this.gradientMap = null, this.setValues(t) }

    function ai(t) { j.call(this), this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new n(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.morphNormals = this.morphTargets = this.skinning = this.lights = this.fog = !1, this.setValues(t) }

    function oi(t) { j.call(this), this.type = "MeshLambertMaterial", this.color = new x(16777215), this.lightMap = this.map = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new x(0), this.emissiveIntensity = 1, this.envMap = this.alphaMap = this.specularMap = this.emissiveMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinejoin = this.wireframeLinecap = "round", this.morphNormals = this.morphTargets = this.skinning = !1, this.setValues(t) }

    function si(t) { j.call(this), this.defines = { MATCAP: "" }, this.type = "MeshMatcapMaterial", this.color = new x(16777215), this.bumpMap = this.map = this.matcap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new n(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.lights = this.morphNormals = this.morphTargets = this.skinning = !1, this.setValues(t) }

    function ci(t) { Ue.call(this), this.type = "LineDashedMaterial", this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.setValues(t) }

    function hi(t, e, n, i) { this.parameterPositions = t, this._cachedIndex = 0, this.resultBuffer = void 0 !== i ? i : new e.constructor(n), this.sampleValues = e, this.valueSize = n }

    function li(t, e, n, i) { hi.call(this, t, e, n, i), this._offsetNext = this._weightNext = this._offsetPrev = this._weightPrev = -0 }

    function ui(t, e, n, i) { hi.call(this, t, e, n, i) }

    function pi(t, e, n, i) { hi.call(this, t, e, n, i) }

    function di(t, e, n, i) {
        if (void 0 === t) throw Error("THREE.KeyframeTrack: track name is undefined");
        if (void 0 === e || 0 === e.length) throw Error("THREE.KeyframeTrack: no keyframes in track named " + t);
        this.name = t, this.times = Fa.convertArray(e, this.TimeBufferType), this.values = Fa.convertArray(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation)
    }

    function fi(t, e, n) { di.call(this, t, e, n) }

    function mi(t, e, n, i) { di.call(this, t, e, n, i) }

    function gi(t, e, n, i) { di.call(this, t, e, n, i) }

    function vi(t, e, n, i) { hi.call(this, t, e, n, i) }

    function yi(t, e, n, i) { di.call(this, t, e, n, i) }

    function xi(t, e, n, i) { di.call(this, t, e, n, i) }

    function bi(t, e, n, i) { di.call(this, t, e, n, i) }

    function wi(t, e, n) { this.name = t, this.tracks = n, this.duration = void 0 !== e ? e : -1, this.uuid = ca.generateUUID(), 0 > this.duration && this.resetDuration() }

    function _i(t) {
        switch (t.toLowerCase()) {
            case "scalar":
            case "double":
            case "float":
            case "number":
            case "integer":
                return gi;
            case "vector":
            case "vector2":
            case "vector3":
            case "vector4":
                return bi;
            case "color":
                return mi;
            case "quaternion":
                return yi;
            case "bool":
            case "boolean":
                return fi;
            case "string":
                return xi
        }
        throw Error("THREE.KeyframeTrack: Unsupported typeName: " + t)
    }

    function Mi(t) {
        if (void 0 === t.type) throw Error("THREE.KeyframeTrack: track type undefined, can not parse");
        var e = _i(t.type);
        if (void 0 === t.times) {
            var n = [],
                i = [];
            Fa.flattenJSON(t.keys, n, i, "value"), t.times = n, t.values = i
        }
        return void 0 !== e.parse ? e.parse(t) : new e(t.name, t.times, t.values, t.interpolation)
    }

    function Ei(t, e, n) {
        var i = this,
            r = !1,
            a = 0,
            o = 0,
            s = void 0;
        this.onStart = void 0, this.onLoad = t, this.onProgress = e, this.onError = n, this.itemStart = function(t) { o++, !1 === r && void 0 !== i.onStart && i.onStart(t, a, o), r = !0 }, this.itemEnd = function(t) { a++, void 0 !== i.onProgress && i.onProgress(t, a, o), a === o && (r = !1, void 0 !== i.onLoad) && i.onLoad() }, this.itemError = function(t) { void 0 !== i.onError && i.onError(t) }, this.resolveURL = function(t) { return s ? s(t) : t }, this.setURLModifier = function(t) { return s = t, this }
    }

    function Si(t) { this.manager = void 0 !== t ? t : Va }

    function Ti(t) { this.manager = void 0 !== t ? t : Va }

    function Ai(t) { this.manager = void 0 !== t ? t : Va, this._parser = null }

    function Li(t) { this.manager = void 0 !== t ? t : Va, this._parser = null }

    function Ri(t) { this.manager = void 0 !== t ? t : Va }

    function Pi(t) { this.manager = void 0 !== t ? t : Va }

    function Ci(t) { this.manager = void 0 !== t ? t : Va }

    function Ii() { this.type = "Curve", this.arcLengthDivisions = 200 }

    function Oi(t, e, n, i, r, a, o, s) { Ii.call(this), this.type = "EllipseCurve", this.aX = t || 0, this.aY = e || 0, this.xRadius = n || 1, this.yRadius = i || 1, this.aStartAngle = r || 0, this.aEndAngle = a || 2 * Math.PI, this.aClockwise = o || !1, this.aRotation = s || 0 }

    function Di(t, e, n, i, r, a) { Oi.call(this, t, e, n, n, i, r, a), this.type = "ArcCurve" }

    function Ni() {
        var t = 0,
            e = 0,
            n = 0,
            i = 0;
        return { initCatmullRom: function(r, a, o, s, c) { r = c * (o - r), s = c * (s - a), t = a, e = r, n = -3 * a + 3 * o - 2 * r - s, i = 2 * a - 2 * o + r + s }, initNonuniformCatmullRom: function(r, a, o, s, c, h, l) { r = ((a - r) / c - (o - r) / (c + h) + (o - a) / h) * h, s = ((o - a) / h - (s - a) / (h + l) + (s - o) / l) * h, t = a, e = r, n = -3 * a + 3 * o - 2 * r - s, i = 2 * a - 2 * o + r + s }, calc: function(r) { var a = r * r; return t + e * r + n * a + i * a * r } }
    }

    function Bi(t, e, n, i) { Ii.call(this), this.type = "CatmullRomCurve3", this.points = t || [], this.closed = e || !1, this.curveType = n || "centripetal", this.tension = i || .5 }

    function zi(t, e, n, i, r) { e = .5 * (i - e), r = .5 * (r - n); var a = t * t; return (2 * n - 2 * i + e + r) * t * a + (-3 * n + 3 * i - 2 * e - r) * a + e * t + n }

    function Ui(t, e, n, i) { var r = 1 - t; return r * r * e + 2 * (1 - t) * t * n + t * t * i }

    function Gi(t, e, n, i, r) {
        var a = 1 - t,
            o = 1 - t;
        return a * a * a * e + 3 * o * o * t * n + 3 * (1 - t) * t * t * i + t * t * t * r
    }

    function Fi(t, e, i, r) { Ii.call(this), this.type = "CubicBezierCurve", this.v0 = t || new n, this.v1 = e || new n, this.v2 = i || new n, this.v3 = r || new n }

    function Hi(t, e, n, i) { Ii.call(this), this.type = "CubicBezierCurve3", this.v0 = t || new a, this.v1 = e || new a, this.v2 = n || new a, this.v3 = i || new a }

    function Vi(t, e) { Ii.call(this), this.type = "LineCurve", this.v1 = t || new n, this.v2 = e || new n }

    function ki(t, e) { Ii.call(this), this.type = "LineCurve3", this.v1 = t || new a, this.v2 = e || new a }

    function ji(t, e, i) { Ii.call(this), this.type = "QuadraticBezierCurve", this.v0 = t || new n, this.v1 = e || new n, this.v2 = i || new n }

    function Wi(t, e, n) { Ii.call(this), this.type = "QuadraticBezierCurve3", this.v0 = t || new a, this.v1 = e || new a, this.v2 = n || new a }

    function qi(t) { Ii.call(this), this.type = "SplineCurve", this.points = t || [] }

    function Xi() { Ii.call(this), this.type = "CurvePath", this.curves = [], this.autoClose = !1 }

    function Yi(t) { Xi.call(this), this.type = "Path", this.currentPoint = new n, t && this.setFromPoints(t) }

    function Ji(t) { Yi.call(this, t), this.uuid = ca.generateUUID(), this.type = "Shape", this.holes = [] }

    function Zi(t, e) { S.call(this), this.type = "Light", this.color = new x(t), this.intensity = void 0 !== e ? e : 1, this.receiveShadow = void 0 }

    function Qi(t, e, n) { Zi.call(this, t, n), this.type = "HemisphereLight", this.castShadow = void 0, this.position.copy(S.DefaultUp), this.updateMatrix(), this.groundColor = new x(e) }

    function Ki(t) { this.camera = t, this.bias = 0, this.radius = 1, this.mapSize = new n(512, 512), this.map = null, this.matrix = new i }

    function $i() { Ki.call(this, new we(50, 1, .5, 500)) }

    function tr(t, e, n, i, r, a) { Zi.call(this, t, e), this.type = "SpotLight", this.position.copy(S.DefaultUp), this.updateMatrix(), this.target = new S, Object.defineProperty(this, "power", { get: function() { return this.intensity * Math.PI }, set: function(t) { this.intensity = t / Math.PI } }), this.distance = void 0 !== n ? n : 0, this.angle = void 0 !== i ? i : Math.PI / 3, this.penumbra = void 0 !== r ? r : 0, this.decay = void 0 !== a ? a : 1, this.shadow = new $i }

    function er(t, e, n, i) { Zi.call(this, t, e), this.type = "PointLight", Object.defineProperty(this, "power", { get: function() { return 4 * this.intensity * Math.PI }, set: function(t) { this.intensity = t / (4 * Math.PI) } }), this.distance = void 0 !== n ? n : 0, this.decay = void 0 !== i ? i : 1, this.shadow = new Ki(new we(90, 1, .5, 500)) }

    function nr(t, e, n, i, r, a) { be.call(this), this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = void 0 !== t ? t : -1, this.right = void 0 !== e ? e : 1, this.top = void 0 !== n ? n : 1, this.bottom = void 0 !== i ? i : -1, this.near = void 0 !== r ? r : .1, this.far = void 0 !== a ? a : 2e3, this.updateProjectionMatrix() }

    function ir() { Ki.call(this, new nr(-5, 5, 5, -5, .5, 500)) }

    function rr(t, e) { Zi.call(this, t, e), this.type = "DirectionalLight", this.position.copy(S.DefaultUp), this.updateMatrix(), this.target = new S, this.shadow = new ir }

    function ar(t, e) { Zi.call(this, t, e), this.type = "AmbientLight", this.castShadow = void 0 }

    function or(t, e, n, i) { Zi.call(this, t, e), this.type = "RectAreaLight", this.width = void 0 !== n ? n : 10, this.height = void 0 !== i ? i : 10 }

    function sr(t) { this.manager = void 0 !== t ? t : Va, this.textures = {} }

    function cr(t) { this.manager = void 0 !== t ? t : Va }

    function hr(t) { this.manager = void 0 !== t ? t : Va, this.resourcePath = "" }

    function lr(t) { "undefined" == typeof createImageBitmap && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), "undefined" == typeof fetch && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.manager = void 0 !== t ? t : Va, this.options = void 0 }

    function ur() { this.type = "ShapePath", this.color = new x, this.subPaths = [], this.currentPath = null }

    function pr(t) { this.type = "Font", this.data = t }

    function dr(t) { this.manager = void 0 !== t ? t : Va }

    function fr() {}

    function mr(t) { this.manager = void 0 !== t ? t : Va }

    function gr() { this.type = "StereoCamera", this.aspect = 1, this.eyeSep = .064, this.cameraL = new we, this.cameraL.layers.enable(1), this.cameraL.matrixAutoUpdate = !1, this.cameraR = new we, this.cameraR.layers.enable(2), this.cameraR.matrixAutoUpdate = !1 }

    function vr(t, e, n, i) {
        S.call(this), this.type = "CubeCamera";
        var r = new we(90, 1, t, e);
        r.up.set(0, -1, 0), r.lookAt(new a(1, 0, 0)), this.add(r);
        var o = new we(90, 1, t, e);
        o.up.set(0, -1, 0), o.lookAt(new a(-1, 0, 0)), this.add(o);
        var s = new we(90, 1, t, e);
        s.up.set(0, 0, 1), s.lookAt(new a(0, 1, 0)), this.add(s);
        var c = new we(90, 1, t, e);
        c.up.set(0, 0, -1), c.lookAt(new a(0, -1, 0)), this.add(c);
        var h = new we(90, 1, t, e);
        h.up.set(0, -1, 0), h.lookAt(new a(0, 0, 1)), this.add(h);
        var l = new we(90, 1, t, e);
        l.up.set(0, -1, 0), l.lookAt(new a(0, 0, -1)), this.add(l), i = i || { format: 1022, magFilter: 1006, minFilter: 1006 }, this.renderTarget = new u(n, n, i), this.renderTarget.texture.name = "CubeCamera", this.update = function(t, e) {
            null === this.parent && this.updateMatrixWorld();
            var n = t.getRenderTarget(),
                i = this.renderTarget,
                a = i.texture.generateMipmaps;
            i.texture.generateMipmaps = !1, t.setRenderTarget(i, 0), t.render(e, r), t.setRenderTarget(i, 1), t.render(e, o), t.setRenderTarget(i, 2), t.render(e, s), t.setRenderTarget(i, 3), t.render(e, c), t.setRenderTarget(i, 4), t.render(e, h), i.texture.generateMipmaps = a, t.setRenderTarget(i, 5), t.render(e, l), t.setRenderTarget(n)
        }, this.clear = function(t, e, n, i) {
            for (var r = t.getRenderTarget(), a = this.renderTarget, o = 0; 6 > o; o++) a.activeCubeFace = o, t.setRenderTarget(a), t.clear(e, n, i);
            t.setRenderTarget(r)
        }
    }

    function yr(t) { this.autoStart = void 0 === t || t, this.elapsedTime = this.oldTime = this.startTime = 0, this.running = !1 }

    function xr() { S.call(this), this.type = "AudioListener", this.context = eo.getContext(), this.gain = this.context.createGain(), this.gain.connect(this.context.destination), this.filter = null, this.timeDelta = 0 }

    function br(t) { S.call(this), this.type = "Audio", this.listener = t, this.context = t.context, this.gain = this.context.createGain(), this.gain.connect(t.getInput()), this.autoplay = !1, this.buffer = null, this.detune = 0, this.loop = !1, this.offset = this.startTime = 0, this.playbackRate = 1, this.isPlaying = !1, this.hasPlaybackControl = !0, this.sourceType = "empty", this.filters = [] }

    function wr(t) { br.call(this, t), this.panner = this.context.createPanner(), this.panner.connect(this.gain) }

    function _r(t, e) { this.analyser = t.context.createAnalyser(), this.analyser.fftSize = void 0 !== e ? e : 2048, this.data = new Uint8Array(this.analyser.frequencyBinCount), t.getOutput().connect(this.analyser) }

    function Mr(t, e, n) {
        switch (this.binding = t, this.valueSize = n, t = Float64Array, e) {
            case "quaternion":
                e = this._slerp;
                break;
            case "string":
            case "bool":
                t = Array, e = this._select;
                break;
            default:
                e = this._lerp
        }
        this.buffer = new t(4 * n), this._mixBufferRegion = e, this.referenceCount = this.useCount = this.cumulativeWeight = 0
    }

    function Er(t, e, n) { n = n || Sr.parseTrackName(e), this._targetGroup = t, this._bindings = t.subscribe_(e, n) }

    function Sr(t, e, n) { this.path = e, this.parsedPath = n || Sr.parseTrackName(e), this.node = Sr.findNode(t, this.parsedPath.nodeName) || t, this.rootNode = t }

    function Tr() {
        this.uuid = ca.generateUUID(), this._objects = Array.prototype.slice.call(arguments), this.nCachedObjects_ = 0;
        var t = {};
        this._indicesByUUID = t;
        for (var e = 0, n = arguments.length; e !== n; ++e) t[arguments[e].uuid] = e;
        this._paths = [], this._parsedPaths = [], this._bindings = [], this._bindingsIndicesByPath = {};
        var i = this;
        this.stats = { objects: {get total() { return i._objects.length }, get inUse() { return this.total - i.nCachedObjects_ } }, get bindingsPerObject() { return i._bindings.length } }
    }

    function Ar(t, e, n) {
        this._mixer = t, this._clip = e, this._localRoot = n || null, t = e.tracks, e = t.length, n = Array(e);
        for (var i = { endingStart: 2400, endingEnd: 2400 }, r = 0; r !== e; ++r) {
            var a = t[r].createInterpolant(null);
            n[r] = a, a.settings = i
        }
        this._interpolantSettings = i, this._interpolants = n, this._propertyBindings = Array(e), this._weightInterpolant = this._timeScaleInterpolant = this._byClipCacheIndex = this._cacheIndex = null, this.loop = 2201, this._loopCount = -1, this._startTime = null, this.time = 0, this._effectiveWeight = this.weight = this._effectiveTimeScale = this.timeScale = 1, this.repetitions = Infinity, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtEnd = this.zeroSlopeAtStart = !0
    }

    function Lr(t) { this._root = t, this._initMemoryManager(), this.time = this._accuIndex = 0, this.timeScale = 1 }

    function Rr(t, e) { "string" == typeof t && (console.warn("THREE.Uniform: Type parameter is no longer needed."), t = e), this.value = t }

    function Pr() { G.call(this), this.type = "InstancedBufferGeometry", this.maxInstancedCount = void 0 }

    function Cr(t, e, n) { Pe.call(this, t, e), this.meshPerAttribute = n || 1 }

    function Ir(t, e, n, i) { "number" == typeof n && (i = n, n = !1, console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")), A.call(this, t, e, n), this.meshPerAttribute = i || 1 }

    function Or(t, e, n, i) { this.ray = new q(t, e), this.near = n || 0, this.far = i || Infinity, this.params = { Mesh: {}, Line: {}, LOD: {}, Points: { threshold: 1 }, Sprite: {} }, Object.defineProperties(this.params, { PointCloud: { get: function() { return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."), this.Points } } }) }

    function Dr(t, e) { return t.distance - e.distance }

    function Nr(t, e, n, i) { if (!1 !== t.visible && (t.raycast(e, n), !0 === i)) { t = t.children, i = 0; for (var r = t.length; i < r; i++) Nr(t[i], e, n, !0) } }

    function Br(t, e, n) { return this.radius = void 0 !== t ? t : 1, this.phi = void 0 !== e ? e : 0, this.theta = void 0 !== n ? n : 0, this }

    function zr(t, e, n) { return this.radius = void 0 !== t ? t : 1, this.theta = void 0 !== e ? e : 0, this.y = void 0 !== n ? n : 0, this }

    function Ur(t, e) { this.min = void 0 !== t ? t : new n(Infinity, Infinity), this.max = void 0 !== e ? e : new n(-Infinity, -Infinity) }

    function Gr(t, e) { this.start = void 0 !== t ? t : new a, this.end = void 0 !== e ? e : new a }

    function Fr(t) { S.call(this), this.material = t, this.render = function() {} }

    function Hr(t, e, n, i) { this.object = t, this.size = void 0 !== e ? e : 1, t = void 0 !== n ? n : 16711680, i = void 0 !== i ? i : 1, e = 0, (n = this.object.geometry) && n.isGeometry ? e = 3 * n.faces.length : n && n.isBufferGeometry && (e = n.attributes.normal.count), n = new G, e = new N(6 * e, 3), n.addAttribute("position", e), Fe.call(this, n, new Ue({ color: t, linewidth: i })), this.matrixAutoUpdate = !1, this.update() }

    function Vr(t, e) {
        S.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = e, t = new G, e = [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, -1, 1];
        for (var n = 0, i = 1; 32 > n; n++, i++) {
            var r = n / 32 * Math.PI * 2,
                a = i / 32 * Math.PI * 2;
            e.push(Math.cos(r), Math.sin(r), 1, Math.cos(a), Math.sin(a), 1)
        }
        t.addAttribute("position", new N(e, 3)), e = new Ue({ fog: !1 }), this.cone = new Fe(t, e), this.add(this.cone), this.update()
    }

    function kr(t) {
        var e = [];
        t && t.isBone && e.push(t);
        for (var n = 0; n < t.children.length; n++) e.push.apply(e, kr(t.children[n]));
        return e
    }

    function jr(t) {
        for (var e = kr(t), n = new G, i = [], r = [], a = new x(0, 0, 1), o = new x(0, 1, 0), s = 0; s < e.length; s++) {
            var c = e[s];
            c.parent && c.parent.isBone && (i.push(0, 0, 0), i.push(0, 0, 0), r.push(a.r, a.g, a.b), r.push(o.r, o.g, o.b))
        }
        n.addAttribute("position", new N(i, 3)), n.addAttribute("color", new N(r, 3)), i = new Ue({ vertexColors: 2, depthTest: !1, depthWrite: !1, transparent: !0 }), Fe.call(this, n, i), this.root = t, this.bones = e, this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1
    }

    function Wr(t, e, n) { this.light = t, this.light.updateMatrixWorld(), this.color = n, t = new Un(e, 4, 2), e = new Y({ wireframe: !0, fog: !1 }), J.call(this, t, e), this.matrix = this.light.matrixWorld, this.matrixAutoUpdate = !1, this.update() }

    function qr(t, e) { this.type = "RectAreaLightHelper", this.light = t, this.color = e, t = new G, t.addAttribute("position", new N([1, 1, 0, -1, 1, 0, -1, -1, 0, 1, -1, 0, 1, 1, 0], 3)), t.computeBoundingSphere(), e = new Ue({ fog: !1 }), Ge.call(this, t, e), t = new G, t.addAttribute("position", new N([1, 1, 0, -1, 1, 0, -1, -1, 0, 1, 1, 0, -1, -1, 0, 1, -1, 0], 3)), t.computeBoundingSphere(), this.add(new J(t, new Y({ side: 1, fog: !1 }))), this.update() }

    function Xr(t, e, n) { S.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = n, t = new nn(e), t.rotateY(.5 * Math.PI), this.material = new Y({ wireframe: !0, fog: !1 }), void 0 === this.color && (this.material.vertexColors = 2), e = t.getAttribute("position"), e = new Float32Array(3 * e.count), t.addAttribute("color", new A(e, 3)), this.add(new J(t, this.material)), this.update() }

    function Yr(t, e, n, i) {
        t = t || 10, e = e || 10, n = new x(void 0 !== n ? n : 4473924), i = new x(void 0 !== i ? i : 8947848);
        var r = e / 2,
            a = t / e,
            o = t / 2;
        t = [];
        for (var s = [], c = 0, h = 0, l = -o; c <= e; c++, l += a) {
            t.push(-o, 0, l, o, 0, l), t.push(l, 0, -o, l, 0, o);
            var u = c === r ? n : i;
            u.toArray(s, h), h += 3, u.toArray(s, h), h += 3, u.toArray(s, h), h += 3, u.toArray(s, h), h += 3
        }
        e = new G, e.addAttribute("position", new N(t, 3)), e.addAttribute("color", new N(s, 3)), n = new Ue({ vertexColors: 2 }), Fe.call(this, e, n)
    }

    function Jr(t, e, n, i, r, a) {
        t = t || 10, e = e || 16, n = n || 8, i = i || 64, r = new x(void 0 !== r ? r : 4473924), a = new x(void 0 !== a ? a : 8947848);
        var o, s = [],
            c = [];
        for (o = 0; o <= e; o++) {
            var h = o / e * 2 * Math.PI,
                l = Math.sin(h) * t;
            h = Math.cos(h) * t, s.push(0, 0, 0), s.push(l, 0, h);
            var u = 1 & o ? r : a;
            c.push(u.r, u.g, u.b), c.push(u.r, u.g, u.b)
        }
        for (o = 0; o <= n; o++) { u = 1 & o ? r : a; var p = t - t / n * o; for (e = 0; e < i; e++) h = e / i * 2 * Math.PI, l = Math.sin(h) * p, h = Math.cos(h) * p, s.push(l, 0, h), c.push(u.r, u.g, u.b), h = (e + 1) / i * 2 * Math.PI, l = Math.sin(h) * p, h = Math.cos(h) * p, s.push(l, 0, h), c.push(u.r, u.g, u.b) }
        t = new G, t.addAttribute("position", new N(s, 3)), t.addAttribute("color", new N(c, 3)), s = new Ue({ vertexColors: 2 }), Fe.call(this, t, s)
    }

    function Zr(t, e, n, i) { this.audio = t, this.range = e || 1, this.divisionsInnerAngle = n || 16, this.divisionsOuterAngle = i || 2, t = new G, e = new Float32Array(3 * (3 * (this.divisionsInnerAngle + 2 * this.divisionsOuterAngle) + 3)), t.addAttribute("position", new A(e, 3)), e = new Ue({ color: 65280 }), n = new Ue({ color: 16776960 }), Ge.call(this, t, [n, e]), this.update() }

    function Qr(t, e, n, i) { this.object = t, this.size = void 0 !== e ? e : 1, t = void 0 !== n ? n : 16776960, i = void 0 !== i ? i : 1, e = 0, (n = this.object.geometry) && n.isGeometry ? e = n.faces.length : console.warn("THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead."), n = new G, e = new N(6 * e, 3), n.addAttribute("position", e), Fe.call(this, n, new Ue({ color: t, linewidth: i })), this.matrixAutoUpdate = !1, this.update() }

    function Kr(t, e, n) { S.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = n, void 0 === e && (e = 1), t = new G, t.addAttribute("position", new N([-e, e, 0, e, e, 0, e, -e, 0, -e, -e, 0, -e, e, 0], 3)), e = new Ue({ fog: !1 }), this.lightPlane = new Ge(t, e), this.add(this.lightPlane), t = new G, t.addAttribute("position", new N([0, 0, 0, 0, 0, 1], 3)), this.targetLine = new Ge(t, e), this.add(this.targetLine), this.update() }

    function $r(t) {
        function e(t, e, i) { n(t, i), n(e, i) }

        function n(t, e) { a.push(0, 0, 0), o.push(e.r, e.g, e.b), void 0 === s[t] && (s[t] = []), s[t].push(a.length / 3 - 1) }
        var i = new G,
            r = new Ue({ color: 16777215, vertexColors: 1 }),
            a = [],
            o = [],
            s = {},
            c = new x(16755200),
            h = new x(16711680),
            l = new x(43775),
            u = new x(16777215),
            p = new x(3355443);
        e("n1", "n2", c), e("n2", "n4", c), e("n4", "n3", c), e("n3", "n1", c), e("f1", "f2", c), e("f2", "f4", c), e("f4", "f3", c), e("f3", "f1", c), e("n1", "f1", c), e("n2", "f2", c), e("n3", "f3", c), e("n4", "f4", c), e("p", "n1", h), e("p", "n2", h), e("p", "n3", h), e("p", "n4", h), e("u1", "u2", l), e("u2", "u3", l), e("u3", "u1", l), e("c", "t", u), e("p", "c", p), e("cn1", "cn2", p), e("cn3", "cn4", p), e("cf1", "cf2", p), e("cf3", "cf4", p), i.addAttribute("position", new N(a, 3)), i.addAttribute("color", new N(o, 3)), Fe.call(this, i, r), this.camera = t, this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.pointMap = s, this.update()
    }

    function ta(t, e) {
        this.object = t, void 0 === e && (e = 16776960), t = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]);
        var n = new Float32Array(24),
            i = new G;
        i.setIndex(new A(t, 1)), i.addAttribute("position", new A(n, 3)), Fe.call(this, i, new Ue({ color: e })), this.matrixAutoUpdate = !1, this.update()
    }

    function ea(t, e) {
        this.type = "Box3Helper", this.box = t, t = void 0 !== e ? e : 16776960, e = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]);
        var n = new G;
        n.setIndex(new A(e, 1)), n.addAttribute("position", new N([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1], 3)), Fe.call(this, n, new Ue({ color: t })), this.geometry.computeBoundingSphere()
    }

    function na(t, e, n) { this.type = "PlaneHelper", this.plane = t, this.size = void 0 === e ? 1 : e, t = void 0 !== n ? n : 16776960, e = new G, e.addAttribute("position", new N([1, -1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0], 3)), e.computeBoundingSphere(), Ge.call(this, e, new Ue({ color: t })), e = new G, e.addAttribute("position", new N([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, -1, 1, 1, -1, 1], 3)), e.computeBoundingSphere(), this.add(new J(e, new Y({ color: t, opacity: .2, transparent: !0, depthWrite: !1 }))) }

    function ia(t, e, n, i, r, o) { S.call(this), void 0 === t && (t = new a(0, 0, 1)), void 0 === e && (e = new a(0, 0, 0)), void 0 === n && (n = 1), void 0 === i && (i = 16776960), void 0 === r && (r = .2 * n), void 0 === o && (o = .2 * r), void 0 === no && (no = new G, no.addAttribute("position", new N([0, 0, 0, 0, 1, 0], 3)), io = new Yn(0, .5, 1, 5, 1), io.translate(0, -.5, 0)), this.position.copy(e), this.line = new Ge(no, new Ue({ color: i })), this.line.matrixAutoUpdate = !1, this.add(this.line), this.cone = new J(io, new Y({ color: i })), this.cone.matrixAutoUpdate = !1, this.add(this.cone), this.setDirection(t), this.setLength(n, r, o) }

    function ra(t) {
        t = t || 1;
        var e = [0, 0, 0, t, 0, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 0, t];
        t = new G, t.addAttribute("position", new N(e, 3)), t.addAttribute("color", new N([1, 0, 0, 1, .6, 0, 0, 1, 0, .6, 1, 0, 0, 0, 1, 0, .6, 1], 3)), e = new Ue({ vertexColors: 2 }), Fe.call(this, t, e)
    }

    function aa(t) { console.warn("THREE.ClosedSplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."), Bi.call(this, t), this.type = "catmullrom", this.closed = !0 }

    function oa(t) { console.warn("THREE.SplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."), Bi.call(this, t), this.type = "catmullrom" }

    function sa(t) { console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead."), Bi.call(this, t), this.type = "catmullrom" }
    void 0 === Number.EPSILON && (Number.EPSILON = Math.pow(2, -52)), void 0 === Number.isInteger && (Number.isInteger = function(t) { return "number" == typeof t && isFinite(t) && Math.floor(t) === t }), void 0 === Math.sign && (Math.sign = function(t) { return 0 > t ? -1 : 0 < t ? 1 : +t }), !1 == "name" in Function.prototype && Object.defineProperty(Function.prototype, "name", { get: function() { return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1] } }), void 0 === Object.assign && function() {
        Object.assign = function(t) {
            if (void 0 === t || null === t) throw new TypeError("Cannot convert undefined or null to object");
            for (var e = Object(t), n = 1; n < arguments.length; n++) {
                var i = arguments[n];
                if (void 0 !== i && null !== i)
                    for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
            }
            return e
        }
    }(), Object.assign(e.prototype, {
        addEventListener: function(t, e) {
            void 0 === this._listeners && (this._listeners = {});
            var n = this._listeners;
            void 0 === n[t] && (n[t] = []), -1 === n[t].indexOf(e) && n[t].push(e)
        },
        hasEventListener: function(t, e) { if (void 0 === this._listeners) return !1; var n = this._listeners; return void 0 !== n[t] && -1 !== n[t].indexOf(e) },
        removeEventListener: function(t, e) { void 0 !== this._listeners && void 0 !== (t = this._listeners[t]) && -1 !== (e = t.indexOf(e)) && t.splice(e, 1) },
        dispatchEvent: function(t) { if (void 0 !== this._listeners) { var e = this._listeners[t.type]; if (void 0 !== e) { t.target = this, e = e.slice(0); for (var n = 0, i = e.length; n < i; n++) e[n].call(this, t) } } }
    });
    var ca = {
        DEG2RAD: Math.PI / 180,
        RAD2DEG: 180 / Math.PI,
        generateUUID: function() {
            for (var t = [], e = 0; 256 > e; e++) t[e] = (16 > e ? "0" : "") + e.toString(16);
            return function() {
                var e = 4294967295 * Math.random() | 0,
                    n = 4294967295 * Math.random() | 0,
                    i = 4294967295 * Math.random() | 0,
                    r = 4294967295 * Math.random() | 0;
                return (t[255 & e] + t[e >> 8 & 255] + t[e >> 16 & 255] + t[e >> 24 & 255] + "-" + t[255 & n] + t[n >> 8 & 255] + "-" + t[n >> 16 & 15 | 64] + t[n >> 24 & 255] + "-" + t[63 & i | 128] + t[i >> 8 & 255] + "-" + t[i >> 16 & 255] + t[i >> 24 & 255] + t[255 & r] + t[r >> 8 & 255] + t[r >> 16 & 255] + t[r >> 24 & 255]).toUpperCase()
            }
        }(),
        clamp: function(t, e, n) { return Math.max(e, Math.min(n, t)) },
        euclideanModulo: function(t, e) { return (t % e + e) % e },
        mapLinear: function(t, e, n, i, r) { return i + (t - e) * (r - i) / (n - e) },
        lerp: function(t, e, n) { return (1 - n) * t + n * e },
        smoothstep: function(t, e, n) { return t <= e ? 0 : t >= n ? 1 : (t = (t - e) / (n - e)) * t * (3 - 2 * t) },
        smootherstep: function(t, e, n) { return t <= e ? 0 : t >= n ? 1 : (t = (t - e) / (n - e)) * t * t * (t * (6 * t - 15) + 10) },
        randInt: function(t, e) { return t + Math.floor(Math.random() * (e - t + 1)) },
        randFloat: function(t, e) { return t + Math.random() * (e - t) },
        randFloatSpread: function(t) { return t * (.5 - Math.random()) },
        degToRad: function(t) { return t * ca.DEG2RAD },
        radToDeg: function(t) { return t * ca.RAD2DEG },
        isPowerOfTwo: function(t) { return 0 == (t & t - 1) && 0 !== t },
        ceilPowerOfTwo: function(t) { return Math.pow(2, Math.ceil(Math.log(t) / Math.LN2)) },
        floorPowerOfTwo: function(t) { return Math.pow(2, Math.floor(Math.log(t) / Math.LN2)) }
    };
    Object.defineProperties(n.prototype, { width: { get: function() { return this.x }, set: function(t) { this.x = t } }, height: { get: function() { return this.y }, set: function(t) { this.y = t } } }), Object.assign(n.prototype, {
        isVector2: !0,
        set: function(t, e) { return this.x = t, this.y = e, this },
        setScalar: function(t) { return this.y = this.x = t, this },
        setX: function(t) { return this.x = t, this },
        setY: function(t) { return this.y = t, this },
        setComponent: function(t, e) {
            switch (t) {
                case 0:
                    this.x = e;
                    break;
                case 1:
                    this.y = e;
                    break;
                default:
                    throw Error("index is out of range: " + t)
            }
            return this
        },
        getComponent: function(t) {
            switch (t) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                default:
                    throw Error("index is out of range: " + t)
            }
        },
        clone: function() { return new this.constructor(this.x, this.y) },
        copy: function(t) { return this.x = t.x, this.y = t.y, this },
        add: function(t, e) { return void 0 !== e ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this) },
        addScalar: function(t) { return this.x += t, this.y += t, this },
        addVectors: function(t, e) { return this.x = t.x + e.x, this.y = t.y + e.y, this },
        addScaledVector: function(t, e) { return this.x += t.x * e, this.y += t.y * e, this },
        sub: function(t, e) { return void 0 !== e ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this) },
        subScalar: function(t) { return this.x -= t, this.y -= t, this },
        subVectors: function(t, e) { return this.x = t.x - e.x, this.y = t.y - e.y, this },
        multiply: function(t) { return this.x *= t.x, this.y *= t.y, this },
        multiplyScalar: function(t) { return this.x *= t, this.y *= t, this },
        divide: function(t) { return this.x /= t.x, this.y /= t.y, this },
        divideScalar: function(t) { return this.multiplyScalar(1 / t) },
        applyMatrix3: function(t) {
            var e = this.x,
                n = this.y;
            return t = t.elements, this.x = t[0] * e + t[3] * n + t[6], this.y = t[1] * e + t[4] * n + t[7], this
        },
        min: function(t) { return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this },
        max: function(t) { return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this },
        clamp: function(t, e) { return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this },
        clampScalar: function() {
            var t = new n,
                e = new n;
            return function(n, i) { return t.set(n, n), e.set(i, i), this.clamp(t, e) }
        }(),
        clampLength: function(t, e) { var n = this.length(); return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n))) },
        floor: function() { return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this },
        ceil: function() { return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this },
        round: function() { return this.x = Math.round(this.x), this.y = Math.round(this.y), this },
        roundToZero: function() { return this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x), this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y), this },
        negate: function() { return this.x = -this.x, this.y = -this.y, this },
        dot: function(t) { return this.x * t.x + this.y * t.y },
        cross: function(t) { return this.x * t.y - this.y * t.x },
        lengthSq: function() { return this.x * this.x + this.y * this.y },
        length: function() { return Math.sqrt(this.x * this.x + this.y * this.y) },
        manhattanLength: function() { return Math.abs(this.x) + Math.abs(this.y) },
        normalize: function() { return this.divideScalar(this.length() || 1) },
        angle: function() { var t = Math.atan2(this.y, this.x); return 0 > t && (t += 2 * Math.PI), t },
        distanceTo: function(t) { return Math.sqrt(this.distanceToSquared(t)) },
        distanceToSquared: function(t) { var e = this.x - t.x; return t = this.y - t.y, e * e + t * t },
        manhattanDistanceTo: function(t) { return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) },
        setLength: function(t) { return this.normalize().multiplyScalar(t) },
        lerp: function(t, e) { return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this },
        lerpVectors: function(t, e, n) { return this.subVectors(e, t).multiplyScalar(n).add(t) },
        equals: function(t) { return t.x === this.x && t.y === this.y },
        fromArray: function(t, e) { return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this },
        toArray: function(t, e) { return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t },
        fromBufferAttribute: function(t, e, n) { return void 0 !== n && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this },
        rotateAround: function(t, e) {
            var n = Math.cos(e);
            e = Math.sin(e);
            var i = this.x - t.x,
                r = this.y - t.y;
            return this.x = i * n - r * e + t.x, this.y = i * e + r * n + t.y, this
        }
    }), Object.assign(i.prototype, {
        isMatrix4: !0,
        set: function(t, e, n, i, r, a, o, s, c, h, l, u, p, d, f, m) { var g = this.elements; return g[0] = t, g[4] = e, g[8] = n, g[12] = i, g[1] = r, g[5] = a, g[9] = o, g[13] = s, g[2] = c, g[6] = h, g[10] = l, g[14] = u, g[3] = p, g[7] = d, g[11] = f, g[15] = m, this },
        identity: function() { return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this },
        clone: function() { return (new i).fromArray(this.elements) },
        copy: function(t) { var e = this.elements; return t = t.elements, e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], this },
        copyPosition: function(t) { var e = this.elements; return t = t.elements, e[12] = t[12], e[13] = t[13], e[14] = t[14], this },
        extractBasis: function(t, e, n) { return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this },
        makeBasis: function(t, e, n) { return this.set(t.x, e.x, n.x, 0, t.y, e.y, n.y, 0, t.z, e.z, n.z, 0, 0, 0, 0, 1), this },
        extractRotation: function() {
            var t = new a;
            return function(e) {
                var n = this.elements,
                    i = e.elements,
                    r = 1 / t.setFromMatrixColumn(e, 0).length(),
                    a = 1 / t.setFromMatrixColumn(e, 1).length();
                return e = 1 / t.setFromMatrixColumn(e, 2).length(), n[0] = i[0] * r, n[1] = i[1] * r, n[2] = i[2] * r, n[3] = 0, n[4] = i[4] * a, n[5] = i[5] * a, n[6] = i[6] * a, n[7] = 0, n[8] = i[8] * e, n[9] = i[9] * e, n[10] = i[10] * e, n[11] = 0, n[12] = 0, n[13] = 0, n[14] = 0, n[15] = 1, this
            }
        }(),
        makeRotationFromEuler: function(t) {
            t && t.isEuler || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
            var e = this.elements,
                n = t.x,
                i = t.y,
                r = t.z,
                a = Math.cos(n);
            n = Math.sin(n);
            var o = Math.cos(i);
            i = Math.sin(i);
            var s = Math.cos(r);
            if (r = Math.sin(r), "XYZ" === t.order) {
                t = a * s;
                var c = a * r,
                    h = n * s,
                    l = n * r;
                e[0] = o * s, e[4] = -o * r, e[8] = i, e[1] = c + h * i, e[5] = t - l * i, e[9] = -n * o, e[2] = l - t * i, e[6] = h + c * i, e[10] = a * o
            } else "YXZ" === t.order ? (t = o * s, c = o * r, h = i * s, l = i * r, e[0] = t + l * n, e[4] = h * n - c, e[8] = a * i, e[1] = a * r, e[5] = a * s, e[9] = -n, e[2] = c * n - h, e[6] = l + t * n, e[10] = a * o) : "ZXY" === t.order ? (t = o * s, c = o * r, h = i * s, l = i * r, e[0] = t - l * n, e[4] = -a * r, e[8] = h + c * n, e[1] = c + h * n, e[5] = a * s, e[9] = l - t * n, e[2] = -a * i, e[6] = n, e[10] = a * o) : "ZYX" === t.order ? (t = a * s, c = a * r, h = n * s, l = n * r, e[0] = o * s, e[4] = h * i - c, e[8] = t * i + l, e[1] = o * r, e[5] = l * i + t, e[9] = c * i - h, e[2] = -i, e[6] = n * o, e[10] = a * o) : "YZX" === t.order ? (t = a * o, c = a * i, h = n * o, l = n * i, e[0] = o * s, e[4] = l - t * r, e[8] = h * r + c, e[1] = r, e[5] = a * s, e[9] = -n * s, e[2] = -i * s, e[6] = c * r + h, e[10] = t - l * r) : "XZY" === t.order && (t = a * o, c = a * i, h = n * o, l = n * i, e[0] = o * s, e[4] = -r, e[8] = i * s, e[1] = t * r + l, e[5] = a * s, e[9] = c * r - h, e[2] = h * r - c, e[6] = n * s, e[10] = l * r + t);
            return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this
        },
        makeRotationFromQuaternion: function() {
            var t = new a(0, 0, 0),
                e = new a(1, 1, 1);
            return function(n) { return this.compose(t, n, e) }
        }(),
        lookAt: function() {
            var t = new a,
                e = new a,
                n = new a;
            return function(i, r, a) { var o = this.elements; return n.subVectors(i, r), 0 === n.lengthSq() && (n.z = 1), n.normalize(), t.crossVectors(a, n), 0 === t.lengthSq() && (1 === Math.abs(a.z) ? n.x += 1e-4 : n.z += 1e-4, n.normalize(), t.crossVectors(a, n)), t.normalize(), e.crossVectors(n, t), o[0] = t.x, o[4] = e.x, o[8] = n.x, o[1] = t.y, o[5] = e.y, o[9] = n.y, o[2] = t.z, o[6] = e.z, o[10] = n.z, this }
        }(),
        multiply: function(t, e) { return void 0 !== e ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(t, e)) : this.multiplyMatrices(this, t) },
        premultiply: function(t) { return this.multiplyMatrices(t, this) },
        multiplyMatrices: function(t, e) {
            var n = t.elements,
                i = e.elements;
            e = this.elements, t = n[0];
            var r = n[4],
                a = n[8],
                o = n[12],
                s = n[1],
                c = n[5],
                h = n[9],
                l = n[13],
                u = n[2],
                p = n[6],
                d = n[10],
                f = n[14],
                m = n[3],
                g = n[7],
                v = n[11];
            n = n[15];
            var y = i[0],
                x = i[4],
                b = i[8],
                w = i[12],
                _ = i[1],
                M = i[5],
                E = i[9],
                S = i[13],
                T = i[2],
                A = i[6],
                L = i[10],
                R = i[14],
                P = i[3],
                C = i[7],
                I = i[11];
            return i = i[15], e[0] = t * y + r * _ + a * T + o * P, e[4] = t * x + r * M + a * A + o * C, e[8] = t * b + r * E + a * L + o * I, e[12] = t * w + r * S + a * R + o * i, e[1] = s * y + c * _ + h * T + l * P, e[5] = s * x + c * M + h * A + l * C, e[9] = s * b + c * E + h * L + l * I, e[13] = s * w + c * S + h * R + l * i, e[2] = u * y + p * _ + d * T + f * P, e[6] = u * x + p * M + d * A + f * C, e[10] = u * b + p * E + d * L + f * I, e[14] = u * w + p * S + d * R + f * i, e[3] = m * y + g * _ + v * T + n * P, e[7] = m * x + g * M + v * A + n * C, e[11] = m * b + g * E + v * L + n * I, e[15] = m * w + g * S + v * R + n * i, this
        },
        multiplyScalar: function(t) { var e = this.elements; return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this },
        applyToBufferAttribute: function() { var t = new a; return function(e) { for (var n = 0, i = e.count; n < i; n++) t.x = e.getX(n), t.y = e.getY(n), t.z = e.getZ(n), t.applyMatrix4(this), e.setXYZ(n, t.x, t.y, t.z); return e } }(),
        determinant: function() {
            var t = this.elements,
                e = t[0],
                n = t[4],
                i = t[8],
                r = t[12],
                a = t[1],
                o = t[5],
                s = t[9],
                c = t[13],
                h = t[2],
                l = t[6],
                u = t[10],
                p = t[14];
            return t[3] * (+r * s * l - i * c * l - r * o * u + n * c * u + i * o * p - n * s * p) + t[7] * (+e * s * p - e * c * u + r * a * u - i * a * p + i * c * h - r * s * h) + t[11] * (+e * c * l - e * o * p - r * a * l + n * a * p + r * o * h - n * c * h) + t[15] * (-i * o * h - e * s * l + e * o * u + i * a * l - n * a * u + n * s * h)
        },
        transpose: function() {
            var t = this.elements,
                e = t[1];
            return t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this
        },
        setPosition: function(t) { var e = this.elements; return e[12] = t.x, e[13] = t.y, e[14] = t.z, this },
        getInverse: function(t, e) {
            var n = this.elements,
                i = t.elements;
            t = i[0];
            var r = i[1],
                a = i[2],
                o = i[3],
                s = i[4],
                c = i[5],
                h = i[6],
                l = i[7],
                u = i[8],
                p = i[9],
                d = i[10],
                f = i[11],
                m = i[12],
                g = i[13],
                v = i[14];
            i = i[15];
            var y = p * v * l - g * d * l + g * h * f - c * v * f - p * h * i + c * d * i,
                x = m * d * l - u * v * l - m * h * f + s * v * f + u * h * i - s * d * i,
                b = u * g * l - m * p * l + m * c * f - s * g * f - u * c * i + s * p * i,
                w = m * p * h - u * g * h - m * c * d + s * g * d + u * c * v - s * p * v,
                _ = t * y + r * x + a * b + o * w;
            if (0 === _) { if (!0 === e) throw Error("THREE.Matrix4: .getInverse() can't invert matrix, determinant is 0"); return console.warn("THREE.Matrix4: .getInverse() can't invert matrix, determinant is 0"), this.identity() }
            return e = 1 / _, n[0] = y * e, n[1] = (g * d * o - p * v * o - g * a * f + r * v * f + p * a * i - r * d * i) * e, n[2] = (c * v * o - g * h * o + g * a * l - r * v * l - c * a * i + r * h * i) * e, n[3] = (p * h * o - c * d * o - p * a * l + r * d * l + c * a * f - r * h * f) * e, n[4] = x * e, n[5] = (u * v * o - m * d * o + m * a * f - t * v * f - u * a * i + t * d * i) * e, n[6] = (m * h * o - s * v * o - m * a * l + t * v * l + s * a * i - t * h * i) * e, n[7] = (s * d * o - u * h * o + u * a * l - t * d * l - s * a * f + t * h * f) * e, n[8] = b * e, n[9] = (m * p * o - u * g * o - m * r * f + t * g * f + u * r * i - t * p * i) * e, n[10] = (s * g * o - m * c * o + m * r * l - t * g * l - s * r * i + t * c * i) * e, n[11] = (u * c * o - s * p * o - u * r * l + t * p * l + s * r * f - t * c * f) * e, n[12] = w * e, n[13] = (u * g * a - m * p * a + m * r * d - t * g * d - u * r * v + t * p * v) * e, n[14] = (m * c * a - s * g * a - m * r * h + t * g * h + s * r * v - t * c * v) * e, n[15] = (s * p * a - u * c * a + u * r * h - t * p * h - s * r * d + t * c * d) * e, this
        },
        scale: function(t) {
            var e = this.elements,
                n = t.x,
                i = t.y;
            return t = t.z, e[0] *= n, e[4] *= i, e[8] *= t, e[1] *= n, e[5] *= i, e[9] *= t, e[2] *= n, e[6] *= i, e[10] *= t, e[3] *= n, e[7] *= i, e[11] *= t, this
        },
        getMaxScaleOnAxis: function() { var t = this.elements; return Math.sqrt(Math.max(t[0] * t[0] + t[1] * t[1] + t[2] * t[2], t[4] * t[4] + t[5] * t[5] + t[6] * t[6], t[8] * t[8] + t[9] * t[9] + t[10] * t[10])) },
        makeTranslation: function(t, e, n) { return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1), this },
        makeRotationX: function(t) { var e = Math.cos(t); return t = Math.sin(t), this.set(1, 0, 0, 0, 0, e, -t, 0, 0, t, e, 0, 0, 0, 0, 1), this },
        makeRotationY: function(t) { var e = Math.cos(t); return t = Math.sin(t), this.set(e, 0, t, 0, 0, 1, 0, 0, -t, 0, e, 0, 0, 0, 0, 1), this },
        makeRotationZ: function(t) { var e = Math.cos(t); return t = Math.sin(t), this.set(e, -t, 0, 0, t, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this },
        makeRotationAxis: function(t, e) {
            var n = Math.cos(e);
            e = Math.sin(e);
            var i = 1 - n,
                r = t.x,
                a = t.y;
            t = t.z;
            var o = i * r,
                s = i * a;
            return this.set(o * r + n, o * a - e * t, o * t + e * a, 0, o * a + e * t, s * a + n, s * t - e * r, 0, o * t - e * a, s * t + e * r, i * t * t + n, 0, 0, 0, 0, 1), this
        },
        makeScale: function(t, e, n) { return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this },
        makeShear: function(t, e, n) { return this.set(1, e, n, 0, t, 1, n, 0, t, e, 1, 0, 0, 0, 0, 1), this },
        compose: function(t, e, n) {
            var i = this.elements,
                r = e._x,
                a = e._y,
                o = e._z,
                s = e._w,
                c = r + r,
                h = a + a,
                l = o + o;
            e = r * c;
            var u = r * h;
            r *= l;
            var p = a * h;
            a *= l, o *= l, c *= s, h *= s, s *= l, l = n.x;
            var d = n.y;
            return n = n.z, i[0] = (1 - (p + o)) * l, i[1] = (u + s) * l, i[2] = (r - h) * l, i[3] = 0, i[4] = (u - s) * d, i[5] = (1 - (e + o)) * d, i[6] = (a + c) * d, i[7] = 0, i[8] = (r + h) * n, i[9] = (a - c) * n, i[10] = (1 - (e + p)) * n, i[11] = 0, i[12] = t.x, i[13] = t.y, i[14] = t.z, i[15] = 1, this
        },
        decompose: function() {
            var t = new a,
                e = new i;
            return function(n, i, r) {
                var a = this.elements,
                    o = t.set(a[0], a[1], a[2]).length(),
                    s = t.set(a[4], a[5], a[6]).length(),
                    c = t.set(a[8], a[9], a[10]).length();
                0 > this.determinant() && (o = -o), n.x = a[12], n.y = a[13], n.z = a[14], e.copy(this), n = 1 / o, a = 1 / s;
                var h = 1 / c;
                return e.elements[0] *= n, e.elements[1] *= n, e.elements[2] *= n, e.elements[4] *= a, e.elements[5] *= a, e.elements[6] *= a, e.elements[8] *= h, e.elements[9] *= h, e.elements[10] *= h, i.setFromRotationMatrix(e), r.x = o, r.y = s, r.z = c, this
            }
        }(),
        makePerspective: function(t, e, n, i, r, a) { void 0 === a && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs."); var o = this.elements; return o[0] = 2 * r / (e - t), o[4] = 0, o[8] = (e + t) / (e - t), o[12] = 0, o[1] = 0, o[5] = 2 * r / (n - i), o[9] = (n + i) / (n - i), o[13] = 0, o[2] = 0, o[6] = 0, o[10] = -(a + r) / (a - r), o[14] = -2 * a * r / (a - r), o[3] = 0, o[7] = 0, o[11] = -1, o[15] = 0, this },
        makeOrthographic: function(t, e, n, i, r, a) {
            var o = this.elements,
                s = 1 / (e - t),
                c = 1 / (n - i),
                h = 1 / (a - r);
            return o[0] = 2 * s, o[4] = 0, o[8] = 0, o[12] = -(e + t) * s, o[1] = 0, o[5] = 2 * c, o[9] = 0, o[13] = -(n + i) * c, o[2] = 0, o[6] = 0, o[10] = -2 * h, o[14] = -(a + r) * h, o[3] = 0, o[7] = 0, o[11] = 0, o[15] = 1, this
        },
        equals: function(t) {
            var e = this.elements;
            t = t.elements;
            for (var n = 0; 16 > n; n++)
                if (e[n] !== t[n]) return !1;
            return !0
        },
        fromArray: function(t, e) { void 0 === e && (e = 0); for (var n = 0; 16 > n; n++) this.elements[n] = t[n + e]; return this },
        toArray: function(t, e) { void 0 === t && (t = []), void 0 === e && (e = 0); var n = this.elements; return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t[e + 9] = n[9], t[e + 10] = n[10], t[e + 11] = n[11], t[e + 12] = n[12], t[e + 13] = n[13], t[e + 14] = n[14], t[e + 15] = n[15], t }
    }), Object.assign(r, {
        slerp: function(t, e, n, i) { return n.copy(t).slerp(e, i) },
        slerpFlat: function(t, e, n, i, r, a, o) {
            var s = n[i + 0],
                c = n[i + 1],
                h = n[i + 2];
            n = n[i + 3], i = r[a + 0];
            var l = r[a + 1],
                u = r[a + 2];
            if (r = r[a + 3], n !== r || s !== i || c !== l || h !== u) {
                a = 1 - o;
                var p = s * i + c * l + h * u + n * r,
                    d = 0 <= p ? 1 : -1,
                    f = 1 - p * p;
                f > Number.EPSILON && (f = Math.sqrt(f), p = Math.atan2(f, p * d), a = Math.sin(a * p) / f, o = Math.sin(o * p) / f), d *= o, s = s * a + i * d, c = c * a + l * d, h = h * a + u * d, n = n * a + r * d, a === 1 - o && (o = 1 / Math.sqrt(s * s + c * c + h * h + n * n), s *= o, c *= o, h *= o, n *= o)
            }
            t[e] = s, t[e + 1] = c, t[e + 2] = h, t[e + 3] = n
        }
    }), Object.defineProperties(r.prototype, { x: { get: function() { return this._x }, set: function(t) { this._x = t, this.onChangeCallback() } }, y: { get: function() { return this._y }, set: function(t) { this._y = t, this.onChangeCallback() } }, z: { get: function() { return this._z }, set: function(t) { this._z = t, this.onChangeCallback() } }, w: { get: function() { return this._w }, set: function(t) { this._w = t, this.onChangeCallback() } } }), Object.assign(r.prototype, {
        isQuaternion: !0,
        set: function(t, e, n, i) { return this._x = t, this._y = e, this._z = n, this._w = i, this.onChangeCallback(), this },
        clone: function() { return new this.constructor(this._x, this._y, this._z, this._w) },
        copy: function(t) { return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this.onChangeCallback(), this },
        setFromEuler: function(t, e) {
            if (!t || !t.isEuler) throw Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
            var n = t._x,
                i = t._y,
                r = t._z;
            t = t.order;
            var a = Math.cos,
                o = Math.sin,
                s = a(n / 2),
                c = a(i / 2);
            return a = a(r / 2), n = o(n / 2), i = o(i / 2), r = o(r / 2), "XYZ" === t ? (this._x = n * c * a + s * i * r, this._y = s * i * a - n * c * r, this._z = s * c * r + n * i * a, this._w = s * c * a - n * i * r) : "YXZ" === t ? (this._x = n * c * a + s * i * r, this._y = s * i * a - n * c * r, this._z = s * c * r - n * i * a, this._w = s * c * a + n * i * r) : "ZXY" === t ? (this._x = n * c * a - s * i * r, this._y = s * i * a + n * c * r, this._z = s * c * r + n * i * a, this._w = s * c * a - n * i * r) : "ZYX" === t ? (this._x = n * c * a - s * i * r, this._y = s * i * a + n * c * r, this._z = s * c * r - n * i * a, this._w = s * c * a + n * i * r) : "YZX" === t ? (this._x = n * c * a + s * i * r, this._y = s * i * a + n * c * r, this._z = s * c * r - n * i * a, this._w = s * c * a - n * i * r) : "XZY" === t && (this._x = n * c * a - s * i * r, this._y = s * i * a - n * c * r, this._z = s * c * r + n * i * a, this._w = s * c * a + n * i * r), !1 !== e && this.onChangeCallback(), this
        },
        setFromAxisAngle: function(t, e) { e /= 2; var n = Math.sin(e); return this._x = t.x * n, this._y = t.y * n, this._z = t.z * n, this._w = Math.cos(e), this.onChangeCallback(), this },
        setFromRotationMatrix: function(t) {
            var e = t.elements,
                n = e[0];
            t = e[4];
            var i = e[8],
                r = e[1],
                a = e[5],
                o = e[9],
                s = e[2],
                c = e[6];
            e = e[10];
            var h = n + a + e;
            return 0 < h ? (n = .5 / Math.sqrt(h + 1), this._w = .25 / n, this._x = (c - o) * n, this._y = (i - s) * n, this._z = (r - t) * n) : n > a && n > e ? (n = 2 * Math.sqrt(1 + n - a - e), this._w = (c - o) / n, this._x = .25 * n, this._y = (t + r) / n, this._z = (i + s) / n) : a > e ? (n = 2 * Math.sqrt(1 + a - n - e), this._w = (i - s) / n, this._x = (t + r) / n, this._y = .25 * n, this._z = (o + c) / n) : (n = 2 * Math.sqrt(1 + e - n - a), this._w = (r - t) / n, this._x = (i + s) / n, this._y = (o + c) / n, this._z = .25 * n), this.onChangeCallback(), this
        },
        setFromUnitVectors: function() { var t, e = new a; return function(n, i) { return void 0 === e && (e = new a), t = n.dot(i) + 1, 1e-6 > t ? (t = 0, Math.abs(n.x) > Math.abs(n.z) ? e.set(-n.y, n.x, 0) : e.set(0, -n.z, n.y)) : e.crossVectors(n, i), this._x = e.x, this._y = e.y, this._z = e.z, this._w = t, this.normalize() } }(),
        angleTo: function(t) { return 2 * Math.acos(Math.abs(ca.clamp(this.dot(t), -1, 1))) },
        rotateTowards: function(t, e) { var n = this.angleTo(t); return 0 === n ? this : (this.slerp(t, Math.min(1, e / n)), this) },
        inverse: function() { return this.conjugate() },
        conjugate: function() { return this._x *= -1, this._y *= -1, this._z *= -1, this.onChangeCallback(), this },
        dot: function(t) { return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w },
        lengthSq: function() { return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w },
        length: function() { return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w) },
        normalize: function() { var t = this.length(); return 0 === t ? (this._z = this._y = this._x = 0, this._w = 1) : (t = 1 / t, this._x *= t, this._y *= t, this._z *= t, this._w *= t), this.onChangeCallback(), this },
        multiply: function(t, e) { return void 0 !== e ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(t, e)) : this.multiplyQuaternions(this, t) },
        premultiply: function(t) { return this.multiplyQuaternions(t, this) },
        multiplyQuaternions: function(t, e) {
            var n = t._x,
                i = t._y,
                r = t._z;
            t = t._w;
            var a = e._x,
                o = e._y,
                s = e._z;
            return e = e._w, this._x = n * e + t * a + i * s - r * o, this._y = i * e + t * o + r * a - n * s, this._z = r * e + t * s + n * o - i * a, this._w = t * e - n * a - i * o - r * s, this.onChangeCallback(), this
        },
        slerp: function(t, e) {
            if (0 === e) return this;
            if (1 === e) return this.copy(t);
            var n = this._x,
                i = this._y,
                r = this._z,
                a = this._w,
                o = a * t._w + n * t._x + i * t._y + r * t._z;
            if (0 > o ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, o = -o) : this.copy(t), 1 <= o) return this._w = a, this._x = n, this._y = i, this._z = r, this;
            if ((t = 1 - o * o) <= Number.EPSILON) return o = 1 - e, this._w = o * a + e * this._w, this._x = o * n + e * this._x, this._y = o * i + e * this._y, this._z = o * r + e * this._z, this.normalize();
            t = Math.sqrt(t);
            var s = Math.atan2(t, o);
            return o = Math.sin((1 - e) * s) / t, e = Math.sin(e * s) / t, this._w = a * o + this._w * e, this._x = n * o + this._x * e, this._y = i * o + this._y * e, this._z = r * o + this._z * e, this.onChangeCallback(), this
        },
        equals: function(t) { return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w },
        fromArray: function(t, e) { return void 0 === e && (e = 0), this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this.onChangeCallback(), this },
        toArray: function(t, e) { return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t },
        onChange: function(t) { return this.onChangeCallback = t, this },
        onChangeCallback: function() {}
    }), Object.assign(a.prototype, {
        isVector3: !0,
        set: function(t, e, n) { return this.x = t, this.y = e, this.z = n, this },
        setScalar: function(t) { return this.z = this.y = this.x = t, this },
        setX: function(t) { return this.x = t, this },
        setY: function(t) { return this.y = t, this },
        setZ: function(t) { return this.z = t, this },
        setComponent: function(t, e) {
            switch (t) {
                case 0:
                    this.x = e;
                    break;
                case 1:
                    this.y = e;
                    break;
                case 2:
                    this.z = e;
                    break;
                default:
                    throw Error("index is out of range: " + t)
            }
            return this
        },
        getComponent: function(t) {
            switch (t) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                case 2:
                    return this.z;
                default:
                    throw Error("index is out of range: " + t)
            }
        },
        clone: function() { return new this.constructor(this.x, this.y, this.z) },
        copy: function(t) { return this.x = t.x, this.y = t.y, this.z = t.z, this },
        add: function(t, e) { return void 0 !== e ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this.z += t.z, this) },
        addScalar: function(t) { return this.x += t, this.y += t, this.z += t, this },
        addVectors: function(t, e) { return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this },
        addScaledVector: function(t, e) { return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this },
        sub: function(t, e) { return void 0 !== e ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this) },
        subScalar: function(t) { return this.x -= t, this.y -= t, this.z -= t, this },
        subVectors: function(t, e) { return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this },
        multiply: function(t, e) { return void 0 !== e ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(t, e)) : (this.x *= t.x, this.y *= t.y, this.z *= t.z, this) },
        multiplyScalar: function(t) { return this.x *= t, this.y *= t, this.z *= t, this },
        multiplyVectors: function(t, e) { return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this },
        applyEuler: function() { var t = new r; return function(e) { return e && e.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."), this.applyQuaternion(t.setFromEuler(e)) } }(),
        applyAxisAngle: function() { var t = new r; return function(e, n) { return this.applyQuaternion(t.setFromAxisAngle(e, n)) } }(),
        applyMatrix3: function(t) {
            var e = this.x,
                n = this.y,
                i = this.z;
            return t = t.elements, this.x = t[0] * e + t[3] * n + t[6] * i, this.y = t[1] * e + t[4] * n + t[7] * i, this.z = t[2] * e + t[5] * n + t[8] * i, this
        },
        applyMatrix4: function(t) {
            var e = this.x,
                n = this.y,
                i = this.z;
            t = t.elements;
            var r = 1 / (t[3] * e + t[7] * n + t[11] * i + t[15]);
            return this.x = (t[0] * e + t[4] * n + t[8] * i + t[12]) * r, this.y = (t[1] * e + t[5] * n + t[9] * i + t[13]) * r, this.z = (t[2] * e + t[6] * n + t[10] * i + t[14]) * r, this
        },
        applyQuaternion: function(t) {
            var e = this.x,
                n = this.y,
                i = this.z,
                r = t.x,
                a = t.y,
                o = t.z;
            t = t.w;
            var s = t * e + a * i - o * n,
                c = t * n + o * e - r * i,
                h = t * i + r * n - a * e;
            return e = -r * e - a * n - o * i, this.x = s * t + e * -r + c * -o - h * -a, this.y = c * t + e * -a + h * -r - s * -o, this.z = h * t + e * -o + s * -a - c * -r, this
        },
        project: function(t) { return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix) },
        unproject: function() { var t = new i; return function(e) { return this.applyMatrix4(t.getInverse(e.projectionMatrix)).applyMatrix4(e.matrixWorld) } }(),
        transformDirection: function(t) {
            var e = this.x,
                n = this.y,
                i = this.z;
            return t = t.elements, this.x = t[0] * e + t[4] * n + t[8] * i, this.y = t[1] * e + t[5] * n + t[9] * i, this.z = t[2] * e + t[6] * n + t[10] * i, this.normalize()
        },
        divide: function(t) { return this.x /= t.x, this.y /= t.y, this.z /= t.z, this },
        divideScalar: function(t) { return this.multiplyScalar(1 / t) },
        min: function(t) { return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this },
        max: function(t) { return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this },
        clamp: function(t, e) { return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this },
        clampScalar: function() {
            var t = new a,
                e = new a;
            return function(n, i) { return t.set(n, n, n), e.set(i, i, i), this.clamp(t, e) }
        }(),
        clampLength: function(t, e) { var n = this.length(); return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n))) },
        floor: function() { return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this },
        ceil: function() { return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this },
        round: function() { return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this },
        roundToZero: function() { return this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x), this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y), this.z = 0 > this.z ? Math.ceil(this.z) : Math.floor(this.z), this },
        negate: function() { return this.x = -this.x, this.y = -this.y, this.z = -this.z, this },
        dot: function(t) { return this.x * t.x + this.y * t.y + this.z * t.z },
        lengthSq: function() { return this.x * this.x + this.y * this.y + this.z * this.z },
        length: function() { return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z) },
        manhattanLength: function() { return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) },
        normalize: function() { return this.divideScalar(this.length() || 1) },
        setLength: function(t) { return this.normalize().multiplyScalar(t) },
        lerp: function(t, e) { return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this },
        lerpVectors: function(t, e, n) { return this.subVectors(e, t).multiplyScalar(n).add(t) },
        cross: function(t, e) { return void 0 !== e ? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(t, e)) : this.crossVectors(this, t) },
        crossVectors: function(t, e) {
            var n = t.x,
                i = t.y;
            t = t.z;
            var r = e.x,
                a = e.y;
            return e = e.z, this.x = i * e - t * a, this.y = t * r - n * e, this.z = n * a - i * r, this
        },
        projectOnVector: function(t) { var e = t.dot(this) / t.lengthSq(); return this.copy(t).multiplyScalar(e) },
        projectOnPlane: function() { var t = new a; return function(e) { return t.copy(this).projectOnVector(e), this.sub(t) } }(),
        reflect: function() { var t = new a; return function(e) { return this.sub(t.copy(e).multiplyScalar(2 * this.dot(e))) } }(),
        angleTo: function(t) { return t = this.dot(t) / Math.sqrt(this.lengthSq() * t.lengthSq()), Math.acos(ca.clamp(t, -1, 1)) },
        distanceTo: function(t) { return Math.sqrt(this.distanceToSquared(t)) },
        distanceToSquared: function(t) {
            var e = this.x - t.x,
                n = this.y - t.y;
            return t = this.z - t.z, e * e + n * n + t * t
        },
        manhattanDistanceTo: function(t) { return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z) },
        setFromSpherical: function(t) { return this.setFromSphericalCoords(t.radius, t.phi, t.theta) },
        setFromSphericalCoords: function(t, e, n) { var i = Math.sin(e) * t; return this.x = i * Math.sin(n), this.y = Math.cos(e) * t, this.z = i * Math.cos(n), this },
        setFromCylindrical: function(t) { return this.setFromCylindricalCoords(t.radius, t.theta, t.y) },
        setFromCylindricalCoords: function(t, e, n) { return this.x = t * Math.sin(e), this.y = n, this.z = t * Math.cos(e), this },
        setFromMatrixPosition: function(t) { return t = t.elements, this.x = t[12], this.y = t[13], this.z = t[14], this },
        setFromMatrixScale: function(t) {
            var e = this.setFromMatrixColumn(t, 0).length(),
                n = this.setFromMatrixColumn(t, 1).length();
            return t = this.setFromMatrixColumn(t, 2).length(), this.x = e, this.y = n, this.z = t, this
        },
        setFromMatrixColumn: function(t, e) { return this.fromArray(t.elements, 4 * e) },
        equals: function(t) { return t.x === this.x && t.y === this.y && t.z === this.z },
        fromArray: function(t, e) { return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this },
        toArray: function(t, e) { return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t },
        fromBufferAttribute: function(t, e, n) { return void 0 !== n && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this }
    }), Object.assign(o.prototype, {
        isMatrix3: !0,
        set: function(t, e, n, i, r, a, o, s, c) { var h = this.elements; return h[0] = t, h[1] = i, h[2] = o, h[3] = e, h[4] = r, h[5] = s, h[6] = n, h[7] = a, h[8] = c, this },
        identity: function() { return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this },
        clone: function() { return (new this.constructor).fromArray(this.elements) },
        copy: function(t) { var e = this.elements; return t = t.elements, e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], this },
        setFromMatrix4: function(t) { return t = t.elements, this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this },
        applyToBufferAttribute: function() { var t = new a; return function(e) { for (var n = 0, i = e.count; n < i; n++) t.x = e.getX(n), t.y = e.getY(n), t.z = e.getZ(n), t.applyMatrix3(this), e.setXYZ(n, t.x, t.y, t.z); return e } }(),
        multiply: function(t) { return this.multiplyMatrices(this, t) },
        premultiply: function(t) { return this.multiplyMatrices(t, this) },
        multiplyMatrices: function(t, e) {
            var n = t.elements,
                i = e.elements;
            e = this.elements, t = n[0];
            var r = n[3],
                a = n[6],
                o = n[1],
                s = n[4],
                c = n[7],
                h = n[2],
                l = n[5];
            n = n[8];
            var u = i[0],
                p = i[3],
                d = i[6],
                f = i[1],
                m = i[4],
                g = i[7],
                v = i[2],
                y = i[5];
            return i = i[8], e[0] = t * u + r * f + a * v, e[3] = t * p + r * m + a * y, e[6] = t * d + r * g + a * i, e[1] = o * u + s * f + c * v, e[4] = o * p + s * m + c * y, e[7] = o * d + s * g + c * i, e[2] = h * u + l * f + n * v, e[5] = h * p + l * m + n * y, e[8] = h * d + l * g + n * i, this
        },
        multiplyScalar: function(t) { var e = this.elements; return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this },
        determinant: function() {
            var t = this.elements,
                e = t[0],
                n = t[1],
                i = t[2],
                r = t[3],
                a = t[4],
                o = t[5],
                s = t[6],
                c = t[7];
            return t = t[8], e * a * t - e * o * c - n * r * t + n * o * s + i * r * c - i * a * s
        },
        getInverse: function(t, e) {
            t && t.isMatrix4 && console.error("THREE.Matrix3: .getInverse() no longer takes a Matrix4 argument.");
            var n = t.elements;
            t = this.elements;
            var i = n[0],
                r = n[1],
                a = n[2],
                o = n[3],
                s = n[4],
                c = n[5],
                h = n[6],
                l = n[7];
            n = n[8];
            var u = n * s - c * l,
                p = c * h - n * o,
                d = l * o - s * h,
                f = i * u + r * p + a * d;
            if (0 === f) { if (!0 === e) throw Error("THREE.Matrix3: .getInverse() can't invert matrix, determinant is 0"); return console.warn("THREE.Matrix3: .getInverse() can't invert matrix, determinant is 0"), this.identity() }
            return e = 1 / f, t[0] = u * e, t[1] = (a * l - n * r) * e, t[2] = (c * r - a * s) * e, t[3] = p * e, t[4] = (n * i - a * h) * e, t[5] = (a * o - c * i) * e, t[6] = d * e, t[7] = (r * h - l * i) * e, t[8] = (s * i - r * o) * e, this
        },
        transpose: function() {
            var t = this.elements,
                e = t[1];
            return t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this
        },
        getNormalMatrix: function(t) { return this.setFromMatrix4(t).getInverse(this).transpose() },
        transposeIntoArray: function(t) { var e = this.elements; return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this },
        setUvTransform: function(t, e, n, i, r, a, o) {
            var s = Math.cos(r);
            r = Math.sin(r), this.set(n * s, n * r, -n * (s * a + r * o) + a + t, -i * r, i * s, -i * (-r * a + s * o) + o + e, 0, 0, 1)
        },
        scale: function(t, e) { var n = this.elements; return n[0] *= t, n[3] *= t, n[6] *= t, n[1] *= e, n[4] *= e, n[7] *= e, this },
        rotate: function(t) {
            var e = Math.cos(t);
            t = Math.sin(t);
            var n = this.elements,
                i = n[0],
                r = n[3],
                a = n[6],
                o = n[1],
                s = n[4],
                c = n[7];
            return n[0] = e * i + t * o, n[3] = e * r + t * s, n[6] = e * a + t * c, n[1] = -t * i + e * o, n[4] = -t * r + e * s, n[7] = -t * a + e * c, this
        },
        translate: function(t, e) { var n = this.elements; return n[0] += t * n[2], n[3] += t * n[5], n[6] += t * n[8], n[1] += e * n[2], n[4] += e * n[5], n[7] += e * n[8], this },
        equals: function(t) {
            var e = this.elements;
            t = t.elements;
            for (var n = 0; 9 > n; n++)
                if (e[n] !== t[n]) return !1;
            return !0
        },
        fromArray: function(t, e) { void 0 === e && (e = 0); for (var n = 0; 9 > n; n++) this.elements[n] = t[n + e]; return this },
        toArray: function(t, e) { void 0 === t && (t = []), void 0 === e && (e = 0); var n = this.elements; return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t }
    });
    var ha, la = {
            getDataURL: function(t) {
                if ("undefined" == typeof HTMLCanvasElement) return t.src;
                if (!(t instanceof HTMLCanvasElement)) {
                    void 0 === ha && (ha = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")), ha.width = t.width, ha.height = t.height;
                    var e = ha.getContext("2d");
                    t instanceof ImageData ? e.putImageData(t, 0, 0) : e.drawImage(t, 0, 0, t.width, t.height), t = ha
                }
                return 2048 < t.width || 2048 < t.height ? t.toDataURL("image/jpeg", .6) : t.toDataURL("image/png")
            }
        },
        ua = 0;
    s.DEFAULT_IMAGE = void 0, s.DEFAULT_MAPPING = 300, s.prototype = Object.assign(Object.create(e.prototype), {
        constructor: s,
        isTexture: !0,
        updateMatrix: function() { this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y) },
        clone: function() { return (new this.constructor).copy(this) },
        copy: function(t) { return this.name = t.name, this.image = t.image, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.encoding = t.encoding, this },
        toJSON: function(t) {
            var e = void 0 === t || "string" == typeof t;
            if (!e && void 0 !== t.textures[this.uuid]) return t.textures[this.uuid];
            var n = { metadata: { version: 4.5, type: "Texture", generator: "Texture.toJSON" }, uuid: this.uuid, name: this.name, mapping: this.mapping, repeat: [this.repeat.x, this.repeat.y], offset: [this.offset.x, this.offset.y], center: [this.center.x, this.center.y], rotation: this.rotation, wrap: [this.wrapS, this.wrapT], format: this.format, type: this.type, encoding: this.encoding, minFilter: this.minFilter, magFilter: this.magFilter, anisotropy: this.anisotropy, flipY: this.flipY, premultiplyAlpha: this.premultiplyAlpha, unpackAlignment: this.unpackAlignment };
            if (void 0 !== this.image) {
                var i = this.image;
                if (void 0 === i.uuid && (i.uuid = ca.generateUUID()), !e && void 0 === t.images[i.uuid]) {
                    if (Array.isArray(i))
                        for (var r = [], a = 0, o = i.length; a < o; a++) r.push(la.getDataURL(i[a]));
                    else r = la.getDataURL(i);
                    t.images[i.uuid] = { uuid: i.uuid, url: r }
                }
                n.image = i.uuid
            }
            return e || (t.textures[this.uuid] = n), n
        },
        dispose: function() { this.dispatchEvent({ type: "dispose" }) },
        transformUv: function(t) {
            if (300 !== this.mapping) return t;
            if (t.applyMatrix3(this.matrix), 0 > t.x || 1 < t.x) switch (this.wrapS) {
                case 1e3:
                    t.x -= Math.floor(t.x);
                    break;
                case 1001:
                    t.x = 0 > t.x ? 0 : 1;
                    break;
                case 1002:
                    t.x = 1 === Math.abs(Math.floor(t.x) % 2) ? Math.ceil(t.x) - t.x : t.x - Math.floor(t.x)
            }
            if (0 > t.y || 1 < t.y) switch (this.wrapT) {
                case 1e3:
                    t.y -= Math.floor(t.y);
                    break;
                case 1001:
                    t.y = 0 > t.y ? 0 : 1;
                    break;
                case 1002:
                    t.y = 1 === Math.abs(Math.floor(t.y) % 2) ? Math.ceil(t.y) - t.y : t.y - Math.floor(t.y)
            }
            return this.flipY && (t.y = 1 - t.y), t
        }
    }), Object.defineProperty(s.prototype, "needsUpdate", { set: function(t) {!0 === t && this.version++ } }), Object.assign(c.prototype, {
        isVector4: !0,
        set: function(t, e, n, i) { return this.x = t, this.y = e, this.z = n, this.w = i, this },
        setScalar: function(t) { return this.w = this.z = this.y = this.x = t, this },
        setX: function(t) { return this.x = t, this },
        setY: function(t) { return this.y = t, this },
        setZ: function(t) { return this.z = t, this },
        setW: function(t) { return this.w = t, this },
        setComponent: function(t, e) {
            switch (t) {
                case 0:
                    this.x = e;
                    break;
                case 1:
                    this.y = e;
                    break;
                case 2:
                    this.z = e;
                    break;
                case 3:
                    this.w = e;
                    break;
                default:
                    throw Error("index is out of range: " + t)
            }
            return this
        },
        getComponent: function(t) {
            switch (t) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                case 2:
                    return this.z;
                case 3:
                    return this.w;
                default:
                    throw Error("index is out of range: " + t)
            }
        },
        clone: function() { return new this.constructor(this.x, this.y, this.z, this.w) },
        copy: function(t) { return this.x = t.x, this.y = t.y, this.z = t.z, this.w = void 0 !== t.w ? t.w : 1, this },
        add: function(t, e) { return void 0 !== e ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this) },
        addScalar: function(t) { return this.x += t, this.y += t, this.z += t, this.w += t, this },
        addVectors: function(t, e) { return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this },
        addScaledVector: function(t, e) { return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this },
        sub: function(t, e) { return void 0 !== e ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this) },
        subScalar: function(t) { return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this },
        subVectors: function(t, e) { return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this },
        multiplyScalar: function(t) { return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this },
        applyMatrix4: function(t) {
            var e = this.x,
                n = this.y,
                i = this.z,
                r = this.w;
            return t = t.elements, this.x = t[0] * e + t[4] * n + t[8] * i + t[12] * r, this.y = t[1] * e + t[5] * n + t[9] * i + t[13] * r, this.z = t[2] * e + t[6] * n + t[10] * i + t[14] * r, this.w = t[3] * e + t[7] * n + t[11] * i + t[15] * r, this
        },
        divideScalar: function(t) { return this.multiplyScalar(1 / t) },
        setAxisAngleFromQuaternion: function(t) { this.w = 2 * Math.acos(t.w); var e = Math.sqrt(1 - t.w * t.w); return 1e-4 > e ? (this.x = 1, this.z = this.y = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this },
        setAxisAngleFromRotationMatrix: function(t) {
            t = t.elements;
            var e = t[0],
                n = t[4],
                i = t[8],
                r = t[1],
                a = t[5],
                o = t[9],
                s = t[2],
                c = t[6],
                h = t[10];
            return .01 > Math.abs(n - r) && .01 > Math.abs(i - s) && .01 > Math.abs(o - c) ? .1 > Math.abs(n + r) && .1 > Math.abs(i + s) && .1 > Math.abs(o + c) && .1 > Math.abs(e + a + h - 3) ? (this.set(1, 0, 0, 0), this) : (t = Math.PI, e = (e + 1) / 2, a = (a + 1) / 2, h = (h + 1) / 2, n = (n + r) / 4, i = (i + s) / 4, o = (o + c) / 4, e > a && e > h ? .01 > e ? (c = 0, n = s = .707106781) : (c = Math.sqrt(e), s = n / c, n = i / c) : a > h ? .01 > a ? (c = .707106781, s = 0, n = .707106781) : (s = Math.sqrt(a), c = n / s, n = o / s) : .01 > h ? (s = c = .707106781, n = 0) : (n = Math.sqrt(h), c = i / n, s = o / n), this.set(c, s, n, t), this) : (t = Math.sqrt((c - o) * (c - o) + (i - s) * (i - s) + (r - n) * (r - n)), .001 > Math.abs(t) && (t = 1), this.x = (c - o) / t, this.y = (i - s) / t, this.z = (r - n) / t, this.w = Math.acos((e + a + h - 1) / 2), this)
        },
        min: function(t) { return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this },
        max: function(t) { return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this },
        clamp: function(t, e) { return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this.w = Math.max(t.w, Math.min(e.w, this.w)), this },
        clampScalar: function() { var t, e; return function(n, i) { return void 0 === t && (t = new c, e = new c), t.set(n, n, n, n), e.set(i, i, i, i), this.clamp(t, e) } }(),
        clampLength: function(t, e) { var n = this.length(); return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n))) },
        floor: function() { return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this },
        ceil: function() { return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this },
        round: function() { return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this },
        roundToZero: function() { return this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x), this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y), this.z = 0 > this.z ? Math.ceil(this.z) : Math.floor(this.z), this.w = 0 > this.w ? Math.ceil(this.w) : Math.floor(this.w), this },
        negate: function() { return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this },
        dot: function(t) { return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w },
        lengthSq: function() { return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w },
        length: function() { return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w) },
        manhattanLength: function() { return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w) },
        normalize: function() { return this.divideScalar(this.length() || 1) },
        setLength: function(t) { return this.normalize().multiplyScalar(t) },
        lerp: function(t, e) { return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this },
        lerpVectors: function(t, e, n) { return this.subVectors(e, t).multiplyScalar(n).add(t) },
        equals: function(t) { return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w },
        fromArray: function(t, e) { return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this },
        toArray: function(t, e) { return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t },
        fromBufferAttribute: function(t, e, n) { return void 0 !== n && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this.w = t.getW(e), this }
    }), h.prototype = Object.assign(Object.create(e.prototype), { constructor: h, isWebGLRenderTarget: !0, setSize: function(t, e) { this.width === t && this.height === e || (this.width = t, this.height = e, this.dispose()), this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e) }, clone: function() { return (new this.constructor).copy(this) }, copy: function(t) { return this.width = t.width, this.height = t.height, this.viewport.copy(t.viewport), this.texture = t.texture.clone(), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, this.depthTexture = t.depthTexture, this }, dispose: function() { this.dispatchEvent({ type: "dispose" }) } }), l.prototype = Object.assign(Object.create(h.prototype), { constructor: l, isWebGLMultisampleRenderTarget: !0, copy: function(t) { return h.prototype.copy.call(this, t), this.samples = t.samples, this } }), u.prototype = Object.create(h.prototype), u.prototype.constructor = u, u.prototype.isWebGLRenderTargetCube = !0, p.prototype = Object.create(s.prototype), p.prototype.constructor = p, p.prototype.isDataTexture = !0, Object.assign(d.prototype, {
        isBox3: !0,
        set: function(t, e) { return this.min.copy(t), this.max.copy(e), this },
        setFromArray: function(t) {
            for (var e = Infinity, n = Infinity, i = Infinity, r = -Infinity, a = -Infinity, o = -Infinity, s = 0, c = t.length; s < c; s += 3) {
                var h = t[s],
                    l = t[s + 1],
                    u = t[s + 2];
                h < e && (e = h), l < n && (n = l), u < i && (i = u), h > r && (r = h), l > a && (a = l), u > o && (o = u)
            }
            return this.min.set(e, n, i), this.max.set(r, a, o), this
        },
        setFromBufferAttribute: function(t) {
            for (var e = Infinity, n = Infinity, i = Infinity, r = -Infinity, a = -Infinity, o = -Infinity, s = 0, c = t.count; s < c; s++) {
                var h = t.getX(s),
                    l = t.getY(s),
                    u = t.getZ(s);
                h < e && (e = h), l < n && (n = l), u < i && (i = u), h > r && (r = h), l > a && (a = l), u > o && (o = u)
            }
            return this.min.set(e, n, i), this.max.set(r, a, o), this
        },
        setFromPoints: function(t) { this.makeEmpty(); for (var e = 0, n = t.length; e < n; e++) this.expandByPoint(t[e]); return this },
        setFromCenterAndSize: function() { var t = new a; return function(e, n) { return n = t.copy(n).multiplyScalar(.5), this.min.copy(e).sub(n), this.max.copy(e).add(n), this } }(),
        setFromObject: function(t) { return this.makeEmpty(), this.expandByObject(t) },
        clone: function() { return (new this.constructor).copy(this) },
        copy: function(t) { return this.min.copy(t.min), this.max.copy(t.max), this },
        makeEmpty: function() { return this.min.x = this.min.y = this.min.z = Infinity, this.max.x = this.max.y = this.max.z = -Infinity, this },
        isEmpty: function() { return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z },
        getCenter: function(t) { return void 0 === t && (console.warn("THREE.Box3: .getCenter() target is now required"), t = new a), this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5) },
        getSize: function(t) { return void 0 === t && (console.warn("THREE.Box3: .getSize() target is now required"), t = new a), this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min) },
        expandByPoint: function(t) { return this.min.min(t), this.max.max(t), this },
        expandByVector: function(t) { return this.min.sub(t), this.max.add(t), this },
        expandByScalar: function(t) { return this.min.addScalar(-t), this.max.addScalar(t), this },
        expandByObject: function() {
            function t(t) {
                var a = t.geometry;
                if (void 0 !== a)
                    if (a.isGeometry)
                        for (a = a.vertices, n = 0, i = a.length; n < i; n++) r.copy(a[n]), r.applyMatrix4(t.matrixWorld), e.expandByPoint(r);
                    else if (a.isBufferGeometry && void 0 !== (a = a.attributes.position))
                    for (n = 0, i = a.count; n < i; n++) r.fromBufferAttribute(a, n).applyMatrix4(t.matrixWorld), e.expandByPoint(r)
            }
            var e, n, i, r = new a;
            return function(n) { return e = this, n.updateMatrixWorld(!0), n.traverse(t), this }
        }(),
        containsPoint: function(t) { return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t.z < this.min.z || t.z > this.max.z) },
        containsBox: function(t) { return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z },
        getParameter: function(t, e) { return void 0 === e && (console.warn("THREE.Box3: .getParameter() target is now required"), e = new a), e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z)) },
        intersectsBox: function(t) { return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y || t.max.z < this.min.z || t.min.z > this.max.z) },
        intersectsSphere: function() { var t = new a; return function(e) { return this.clampPoint(e.center, t), t.distanceToSquared(e.center) <= e.radius * e.radius } }(),
        intersectsPlane: function(t) {
            if (0 < t.normal.x) var e = t.normal.x * this.min.x,
                n = t.normal.x * this.max.x;
            else e = t.normal.x * this.max.x, n = t.normal.x * this.min.x;
            return 0 < t.normal.y ? (e += t.normal.y * this.min.y, n += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, n += t.normal.y * this.min.y), 0 < t.normal.z ? (e += t.normal.z * this.min.z, n += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, n += t.normal.z * this.min.z), e <= -t.constant && n >= -t.constant
        },
        intersectsTriangle: function() {
            function t(t) {
                var r, a = 0;
                for (r = t.length - 3; a <= r; a += 3) {
                    c.fromArray(t, a);
                    var o = l.x * Math.abs(c.x) + l.y * Math.abs(c.y) + l.z * Math.abs(c.z),
                        s = e.dot(c),
                        h = n.dot(c),
                        u = i.dot(c);
                    if (Math.max(-Math.max(s, h, u), Math.min(s, h, u)) > o) return !1
                }
                return !0
            }
            var e = new a,
                n = new a,
                i = new a,
                r = new a,
                o = new a,
                s = new a,
                c = new a,
                h = new a,
                l = new a,
                u = new a;
            return function(a) { return !this.isEmpty() && (this.getCenter(h), l.subVectors(this.max, h), e.subVectors(a.a, h), n.subVectors(a.b, h), i.subVectors(a.c, h), r.subVectors(n, e), o.subVectors(i, n), s.subVectors(e, i), a = [0, -r.z, r.y, 0, -o.z, o.y, 0, -s.z, s.y, r.z, 0, -r.x, o.z, 0, -o.x, s.z, 0, -s.x, -r.y, r.x, 0, -o.y, o.x, 0, -s.y, s.x, 0], !!t(a) && (a = [1, 0, 0, 0, 1, 0, 0, 0, 1], !!t(a) && (u.crossVectors(r, o), a = [u.x, u.y, u.z], t(a)))) }
        }(),
        clampPoint: function(t, e) { return void 0 === e && (console.warn("THREE.Box3: .clampPoint() target is now required"), e = new a), e.copy(t).clamp(this.min, this.max) },
        distanceToPoint: function() { var t = new a; return function(e) { return t.copy(e).clamp(this.min, this.max).sub(e).length() } }(),
        getBoundingSphere: function() { var t = new a; return function(e) { return void 0 === e && (console.warn("THREE.Box3: .getBoundingSphere() target is now required"), e = new f), this.getCenter(e.center), e.radius = .5 * this.getSize(t).length(), e } }(),
        intersect: function(t) { return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this },
        union: function(t) { return this.min.min(t.min), this.max.max(t.max), this },
        applyMatrix4: function() { var t = [new a, new a, new a, new a, new a, new a, new a, new a]; return function(e) { return this.isEmpty() ? this : (t[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), t[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), t[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), t[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), t[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), t[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), t[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), t[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(t), this) } }(),
        translate: function(t) { return this.min.add(t), this.max.add(t), this },
        equals: function(t) { return t.min.equals(this.min) && t.max.equals(this.max) }
    }), Object.assign(f.prototype, {
        set: function(t, e) { return this.center.copy(t), this.radius = e, this },
        setFromPoints: function() {
            var t = new d;
            return function(e, n) {
                var i = this.center;
                void 0 !== n ? i.copy(n) : t.setFromPoints(e).getCenter(i);
                for (var r = n = 0, a = e.length; r < a; r++) n = Math.max(n, i.distanceToSquared(e[r]));
                return this.radius = Math.sqrt(n), this
            }
        }(),
        clone: function() { return (new this.constructor).copy(this) },
        copy: function(t) { return this.center.copy(t.center), this.radius = t.radius, this },
        empty: function() { return 0 >= this.radius },
        containsPoint: function(t) { return t.distanceToSquared(this.center) <= this.radius * this.radius },
        distanceToPoint: function(t) { return t.distanceTo(this.center) - this.radius },
        intersectsSphere: function(t) { var e = this.radius + t.radius; return t.center.distanceToSquared(this.center) <= e * e },
        intersectsBox: function(t) { return t.intersectsSphere(this) },
        intersectsPlane: function(t) { return Math.abs(t.distanceToPoint(this.center)) <= this.radius },
        clampPoint: function(t, e) { var n = this.center.distanceToSquared(t); return void 0 === e && (console.warn("THREE.Sphere: .clampPoint() target is now required"), e = new a), e.copy(t), n > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e },
        getBoundingBox: function(t) { return void 0 === t && (console.warn("THREE.Sphere: .getBoundingBox() target is now required"), t = new d), t.set(this.center, this.center), t.expandByScalar(this.radius), t },
        applyMatrix4: function(t) { return this.center.applyMatrix4(t), this.radius *= t.getMaxScaleOnAxis(), this },
        translate: function(t) { return this.center.add(t), this },
        equals: function(t) { return t.center.equals(this.center) && t.radius === this.radius }
    }), Object.assign(m.prototype, {
        set: function(t, e) { return this.normal.copy(t), this.constant = e, this },
        setComponents: function(t, e, n, i) { return this.normal.set(t, e, n), this.constant = i, this },
        setFromNormalAndCoplanarPoint: function(t, e) { return this.normal.copy(t), this.constant = -e.dot(this.normal), this },
        setFromCoplanarPoints: function() {
            var t = new a,
                e = new a;
            return function(n, i, r) { return i = t.subVectors(r, i).cross(e.subVectors(n, i)).normalize(), this.setFromNormalAndCoplanarPoint(i, n), this }
        }(),
        clone: function() { return (new this.constructor).copy(this) },
        copy: function(t) { return this.normal.copy(t.normal), this.constant = t.constant, this },
        normalize: function() { var t = 1 / this.normal.length(); return this.normal.multiplyScalar(t), this.constant *= t, this },
        negate: function() { return this.constant *= -1, this.normal.negate(), this },
        distanceToPoint: function(t) { return this.normal.dot(t) + this.constant },
        distanceToSphere: function(t) { return this.distanceToPoint(t.center) - t.radius },
        projectPoint: function(t, e) { return void 0 === e && (console.warn("THREE.Plane: .projectPoint() target is now required"), e = new a), e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t) },
        intersectLine: function() {
            var t = new a;
            return function(e, n) {
                void 0 === n && (console.warn("THREE.Plane: .intersectLine() target is now required"), n = new a);
                var i = e.delta(t),
                    r = this.normal.dot(i);
                if (0 === r) { if (0 === this.distanceToPoint(e.start)) return n.copy(e.start) } else if (!(0 > (r = -(e.start.dot(this.normal) + this.constant) / r) || 1 < r)) return n.copy(i).multiplyScalar(r).add(e.start)
            }
        }(),
        intersectsLine: function(t) { var e = this.distanceToPoint(t.start); return t = this.distanceToPoint(t.end), 0 > e && 0 < t || 0 > t && 0 < e },
        intersectsBox: function(t) { return t.intersectsPlane(this) },
        intersectsSphere: function(t) { return t.intersectsPlane(this) },
        coplanarPoint: function(t) { return void 0 === t && (console.warn("THREE.Plane: .coplanarPoint() target is now required"), t = new a), t.copy(this.normal).multiplyScalar(-this.constant) },
        applyMatrix4: function() {
            var t = new a,
                e = new o;
            return function(n, i) { return i = i || e.getNormalMatrix(n), n = this.coplanarPoint(t).applyMatrix4(n), i = this.normal.applyMatrix3(i).normalize(), this.constant = -n.dot(i), this }
        }(),
        translate: function(t) { return this.constant -= t.dot(this.normal), this },
        equals: function(t) { return t.normal.equals(this.normal) && t.constant === this.constant }
    }), Object.assign(g.prototype, {
        set: function(t, e, n, i, r, a) { var o = this.planes; return o[0].copy(t), o[1].copy(e), o[2].copy(n), o[3].copy(i), o[4].copy(r), o[5].copy(a), this },
        clone: function() { return (new this.constructor).copy(this) },
        copy: function(t) { for (var e = this.planes, n = 0; 6 > n; n++) e[n].copy(t.planes[n]); return this },
        setFromMatrix: function(t) {
            var e = this.planes,
                n = t.elements;
            t = n[0];
            var i = n[1],
                r = n[2],
                a = n[3],
                o = n[4],
                s = n[5],
                c = n[6],
                h = n[7],
                l = n[8],
                u = n[9],
                p = n[10],
                d = n[11],
                f = n[12],
                m = n[13],
                g = n[14];
            return n = n[15], e[0].setComponents(a - t, h - o, d - l, n - f).normalize(), e[1].setComponents(a + t, h + o, d + l, n + f).normalize(), e[2].setComponents(a + i, h + s, d + u, n + m).normalize(), e[3].setComponents(a - i, h - s, d - u, n - m).normalize(), e[4].setComponents(a - r, h - c, d - p, n - g).normalize(), e[5].setComponents(a + r, h + c, d + p, n + g).normalize(), this
        },
        intersectsObject: function() { var t = new f; return function(e) { var n = e.geometry; return null === n.boundingSphere && n.computeBoundingSphere(), t.copy(n.boundingSphere).applyMatrix4(e.matrixWorld), this.intersectsSphere(t) } }(),
        intersectsSprite: function() { var t = new f; return function(e) { return t.center.set(0, 0, 0), t.radius = .7071067811865476, t.applyMatrix4(e.matrixWorld), this.intersectsSphere(t) } }(),
        intersectsSphere: function(t) {
            var e = this.planes,
                n = t.center;
            t = -t.radius;
            for (var i = 0; 6 > i; i++)
                if (e[i].distanceToPoint(n) < t) return !1;
            return !0
        },
        intersectsBox: function() { var t = new a; return function(e) { for (var n = this.planes, i = 0; 6 > i; i++) { var r = n[i]; if (t.x = 0 < r.normal.x ? e.max.x : e.min.x, t.y = 0 < r.normal.y ? e.max.y : e.min.y, t.z = 0 < r.normal.z ? e.max.z : e.min.z, 0 > r.distanceToPoint(t)) return !1 } return !0 } }(),
        containsPoint: function(t) {
            for (var e = this.planes, n = 0; 6 > n; n++)
                if (0 > e[n].distanceToPoint(t)) return !1;
            return !0
        }
    });
    var pa = { alphamap_fragment: "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif", alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif", alphatest_fragment: "#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif", aomap_fragment: "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif", aomap_pars_fragment: "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif", begin_vertex: "vec3 transformed = vec3( position );", beginnormal_vertex: "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif", bsdfs: "vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\treturn vec2( -1.04, 1.04 ) * a004 + r.zw;\n}\nfloat punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\tif( cutoffDistance > 0.0 ) {\n\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t}\n\treturn distanceFalloff;\n#else\n\tif( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t}\n\treturn 1.0;\n#endif\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE  = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS  = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nvec3 BRDF_Specular_GGX_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\treturn specularColor * brdf.x + brdf.y;\n}\nvoid BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tvec3 F = F_Schlick( specularColor, dotNV );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\tvec3 FssEss = F * brdf.x + brdf.y;\n\tfloat Ess = brdf.x + brdf.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}", bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tfDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif", clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\tif ( clipped ) discard;\n\t#endif\n#endif", clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n\t#if ! defined( PHYSICAL ) && ! defined( PHONG ) && ! defined( MATCAP )\n\t\tvarying vec3 vViewPosition;\n\t#endif\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif", clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG ) && ! defined( MATCAP )\n\tvarying vec3 vViewPosition;\n#endif", clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG ) && ! defined( MATCAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif", color_fragment: "#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif", color_pars_fragment: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif", color_pars_vertex: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif", color_vertex: "#ifdef USE_COLOR\n\tvColor.xyz = color.xyz;\n#endif", common: "#define PI 3.14159265359\n#define PI2 6.28318530718\n#define PI_HALF 1.5707963267949\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}", cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_textureSize (1024.0)\nint getFaceFromDirection(vec3 direction) {\n\tvec3 absDirection = abs(direction);\n\tint face = -1;\n\tif( absDirection.x > absDirection.z ) {\n\t\tif(absDirection.x > absDirection.y )\n\t\t\tface = direction.x > 0.0 ? 0 : 3;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\telse {\n\t\tif(absDirection.z > absDirection.y )\n\t\t\tface = direction.z > 0.0 ? 2 : 5;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\treturn face;\n}\n#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)\n#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))\nvec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {\n\tfloat scale = exp2(cubeUV_maxLods1 - roughnessLevel);\n\tfloat dxRoughness = dFdx(roughness);\n\tfloat dyRoughness = dFdy(roughness);\n\tvec3 dx = dFdx( vec * scale * dxRoughness );\n\tvec3 dy = dFdy( vec * scale * dyRoughness );\n\tfloat d = max( dot( dx, dx ), dot( dy, dy ) );\n\td = clamp(d, 1.0, cubeUV_rangeClamp);\n\tfloat mipLevel = 0.5 * log2(d);\n\treturn vec2(floor(mipLevel), fract(mipLevel));\n}\n#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)\n#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)\nvec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {\n\tmipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;\n\tfloat a = 16.0 * cubeUV_rcpTextureSize;\n\tvec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );\n\tvec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;\n\tfloat powScale = exp2_packed.x * exp2_packed.y;\n\tfloat scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;\n\tfloat mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;\n\tbool bRes = mipLevel == 0.0;\n\tscale =  bRes && (scale < a) ? a : scale;\n\tvec3 r;\n\tvec2 offset;\n\tint face = getFaceFromDirection(direction);\n\tfloat rcpPowScale = 1.0 / powScale;\n\tif( face == 0) {\n\t\tr = vec3(direction.x, -direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 1) {\n\t\tr = vec3(direction.y, direction.x, direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 2) {\n\t\tr = vec3(direction.z, direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 3) {\n\t\tr = vec3(direction.x, direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse if( face == 4) {\n\t\tr = vec3(direction.y, direction.x, -direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse {\n\t\tr = vec3(direction.z, -direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\tr = normalize(r);\n\tfloat texelOffset = 0.5 * cubeUV_rcpTextureSize;\n\tvec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;\n\tvec2 base = offset + vec2( texelOffset );\n\treturn base + s * ( scale - 2.0 * texelOffset );\n}\n#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)\nvec4 textureCubeUV( sampler2D envMap, vec3 reflectedDirection, float roughness ) {\n\tfloat roughnessVal = roughness* cubeUV_maxLods3;\n\tfloat r1 = floor(roughnessVal);\n\tfloat r2 = r1 + 1.0;\n\tfloat t = fract(roughnessVal);\n\tvec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);\n\tfloat s = mipInfo.y;\n\tfloat level0 = mipInfo.x;\n\tfloat level1 = level0 + 1.0;\n\tlevel1 = level1 > 5.0 ? 5.0 : level1;\n\tlevel0 += min( floor( s + 0.5 ), 5.0 );\n\tvec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);\n\tvec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));\n\tvec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);\n\tvec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));\n\tvec4 result = mix(color10, color20, t);\n\treturn vec4(result.rgb, 1.0);\n}\n#endif", defaultnormal_vertex: "vec3 transformedNormal = normalMatrix * objectNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = normalMatrix * objectTangent;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif", displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif", displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n#endif", emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif", emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif", encodings_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );", encodings_pars_fragment: "\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * value.a * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat M = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat D = max( maxRange / maxRGB, 1.0 );\n\tD = min( floor( D ) / 255.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n\tvec3 Xp_Y_XYZp = cLogLuvM * value.rgb;\n\tXp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract( Le );\n\tvResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;\n\treturn vec4( max( vRGB, 0.0 ), 1.0 );\n}", envmap_fragment: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\treflectVec = normalize( reflectVec );\n\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\treflectVec = normalize( reflectVec );\n\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\tenvColor = envMapTexelToLinear( envColor );\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif", envmap_pars_fragment: "#if defined( USE_ENVMAP ) || defined( PHYSICAL )\n\tuniform float reflectivity;\n\tuniform float envMapIntensity;\n#endif\n#ifdef USE_ENVMAP\n\t#if ! defined( PHYSICAL ) && ( defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) )\n\t\tvarying vec3 vWorldPosition;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\tuniform float flipEnvMap;\n\tuniform int maxMipLevel;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( PHYSICAL )\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif", envmap_pars_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif", envmap_physical_pars_fragment: "#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, queryVec, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + 0.79248 - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -geometry.viewDir, geometry.normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( blinnShininessExponent, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, queryReflectVec, BlinnExponentToGGXRoughness(blinnShininessExponent ));\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\t\tvec2 sampleUV;\n\t\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif", envmap_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif", fog_vertex: "#ifdef USE_FOG\n\tfogDepth = -mvPosition.z;\n#endif", fog_pars_vertex: "#ifdef USE_FOG\n\tvarying float fogDepth;\n#endif", fog_fragment: "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * fogDepth * fogDepth * LOG2 ) );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif", fog_pars_fragment: "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif", gradientmap_pars_fragment: "#ifdef TOON\n\tuniform sampler2D gradientMap;\n\tvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\t\tfloat dotNL = dot( normal, lightDirection );\n\t\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t\t#ifdef USE_GRADIENTMAP\n\t\t\treturn texture2D( gradientMap, coord ).rgb;\n\t\t#else\n\t\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t\t#endif\n\t}\n#endif", lightmap_fragment: "#ifdef USE_LIGHTMAP\n\treflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n#endif", lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif", lights_lambert_vertex: "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\nvIndirectFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n\tvIndirectBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n#endif", lights_pars_begin: "uniform vec3 ambientLightColor;\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t\tfloat shadowCameraNear;\n\t\tfloat shadowCameraFar;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif", lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;", lights_phong_pars_fragment: "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifdef TOON\n\t\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#else\n\t\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\t\tvec3 irradiance = dotNL * directLight.color;\n\t#endif\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)", lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\n#ifdef STANDARD\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.clearCoat = saturate( clearCoat );\tmaterial.clearCoatRoughness = clamp( clearCoatRoughness, 0.04, 1.0 );\n#endif", lights_physical_pars_fragment: "struct PhysicalMaterial {\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n\t#ifndef STANDARD\n\t\tfloat clearCoat;\n\t\tfloat clearCoatRoughness;\n\t#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearCoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifndef STANDARD\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.directSpecular += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry, material.specularColor, material.specularRoughness );\n\treflectedLight.directDiffuse += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\t#ifndef STANDARD\n\t\treflectedLight.directSpecular += irradiance * material.clearCoat * BRDF_Specular_GGX( directLight, geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifndef ENVMAP_TYPE_CUBE_UV\n\t\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\t#endif\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearCoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifndef STANDARD\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\tfloat dotNL = dotNV;\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\tfloat clearCoatInv = 1.0 - clearCoatDHR;\n\t#if defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec3 singleScattering = vec3( 0.0 );\n\t\tvec3 multiScattering = vec3( 0.0 );\n\t\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\t\tBRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );\n\t\tvec3 diffuse = material.diffuseColor;\n\t\treflectedLight.indirectSpecular += clearCoatInv * radiance * singleScattering;\n\t\treflectedLight.indirectDiffuse += multiScattering * cosineWeightedIrradiance;\n\t\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n\t#else\n\t\treflectedLight.indirectSpecular += clearCoatInv * radiance * BRDF_Specular_GGX_Environment( geometry, material.specularColor, material.specularRoughness );\n\t#endif\n\t#ifndef STANDARD\n\t\treflectedLight.indirectSpecular += clearCoatRadiance * material.clearCoat * BRDF_Specular_GGX_Environment( geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\n#define Material_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.specularRoughness )\n#define Material_ClearCoat_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.clearCoatRoughness )\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}", lights_fragment_begin: "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = normalize( vViewPosition );\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( pointLight.shadow, directLight.visible ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( spotLight.shadow, directLight.visible ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( directionalLight.shadow, directLight.visible ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearCoatRadiance = vec3( 0.0 );\n#endif", lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tirradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getLightProbeIndirectRadiance( geometry, Material_BlinnShininessExponent( material ), maxMipLevel );\n\t#ifndef STANDARD\n\t\tclearCoatRadiance += getLightProbeIndirectRadiance( geometry, Material_ClearCoat_BlinnShininessExponent( material ), maxMipLevel );\n\t#endif\n#endif", lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, irradiance, clearCoatRadiance, geometry, material, reflectedLight );\n#endif", logdepthbuf_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif", logdepthbuf_pars_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n#endif", logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif", logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t#else\n\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\tgl_Position.z *= gl_Position.w;\n\t#endif\n#endif", map_fragment: "#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif", map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif", map_particle_fragment: "#ifdef USE_MAP\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif", map_particle_pars_fragment: "#ifdef USE_MAP\n\tuniform mat3 uvTransform;\n\tuniform sampler2D map;\n#endif", metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif", metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif", morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n\tobjectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tobjectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tobjectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tobjectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n#endif", morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n\t#ifndef USE_MORPHNORMALS\n\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif", morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n\ttransformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\ttransformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\ttransformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\ttransformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\ttransformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\ttransformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\ttransformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\ttransformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\t#endif\n#endif", normal_fragment_begin: "#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n\t#ifdef USE_TANGENT\n\t\tvec3 tangent = normalize( vTangent );\n\t\tvec3 bitangent = normalize( vBitangent );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\ttangent = tangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t\tbitangent = bitangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t#endif\n\t#endif\n#endif", normal_fragment_maps: "#ifdef USE_NORMALMAP\n\t#ifdef OBJECTSPACE_NORMALMAP\n\t\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\t#ifdef FLIP_SIDED\n\t\t\tnormal = - normal;\n\t\t#endif\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t#endif\n\t\tnormal = normalize( normalMatrix * normal );\n\t#else\n\t\t#ifdef USE_TANGENT\n\t\t\tmat3 vTBN = mat3( tangent, bitangent, normal );\n\t\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\t\tmapN.xy = normalScale * mapN.xy;\n\t\t\tnormal = normalize( vTBN * mapN );\n\t\t#else\n\t\t\tnormal = perturbNormal2Arb( -vViewPosition, normal );\n\t\t#endif\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif", normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\t#ifdef OBJECTSPACE_NORMALMAP\n\t\tuniform mat3 normalMatrix;\n\t#else\n\t\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\t\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\t\tvec2 st0 = dFdx( vUv.st );\n\t\t\tvec2 st1 = dFdy( vUv.st );\n\t\t\tfloat scale = sign( st1.t * st0.s - st0.t * st1.s );\n\t\t\tvec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );\n\t\t\tvec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );\n\t\t\tvec3 N = normalize( surf_norm );\n\t\t\tmat3 tsn = mat3( S, T, N );\n\t\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\t\tmapN.xy *= normalScale;\n\t\t\tmapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t\treturn normalize( tsn * mapN );\n\t\t}\n\t#endif\n#endif", packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}", premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif", project_vertex: "vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\ngl_Position = projectionMatrix * mvPosition;", dithering_fragment: "#if defined( DITHERING )\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif", dithering_pars_fragment: "#if defined( DITHERING )\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif", roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif", roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif", shadowmap_pars_fragment: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tfloat texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n\t\tconst vec2 offset = vec2( 0.0, 1.0 );\n\t\tvec2 texelSize = vec2( 1.0 ) / size;\n\t\tvec2 centroidUV = floor( uv * size + 0.5 ) / size;\n\t\tfloat lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n\t\tfloat lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n\t\tfloat rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n\t\tfloat rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n\t\tvec2 f = fract( uv * size + 0.5 );\n\t\tfloat a = mix( lb, lt, f.y );\n\t\tfloat b = mix( rb, rt, f.y );\n\t\tfloat c = mix( a, b, f.x );\n\t\treturn c;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif", shadowmap_pars_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n#endif", shadowmap_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n#endif", shadowmask_pars_fragment: "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tDirectionalLight directionalLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tshadow *= bool( directionalLight.shadow ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tSpotLight spotLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tshadow *= bool( spotLight.shadow ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tPointLight pointLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tshadow *= bool( pointLight.shadow ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#endif\n\t#endif\n\treturn shadow;\n}", skinbase_vertex: "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif", skinning_pars_vertex: "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif", skinning_vertex: "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif", skinnormal_vertex: "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif", specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif", specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif", tonemapping_fragment: "#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif", tonemapping_pars_fragment: "#ifndef saturate\n\t#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( ( color * ( 2.51 * color + 0.03 ) ) / ( color * ( 2.43 * color + 0.59 ) + 0.14 ) );\n}", uv_pars_fragment: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n#endif", uv_pars_vertex: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n\tuniform mat3 uvTransform;\n#endif", uv_vertex: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif", uv2_pars_fragment: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif", uv2_pars_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n#endif", uv2_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = uv2;\n#endif", worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n\tvec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n#endif", background_frag: "uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor = texture2D( t2D, vUv );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}", background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}", cube_frag: "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n\tvec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}", cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}", depth_frag: "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - gl_FragCoord.z ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n\t#endif\n}", depth_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}", distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}", distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}", equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV;\n\tsampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tvec4 texColor = texture2D( tEquirect, sampleUV );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}", equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}", linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}", linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}", meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\treflectedLight.indirectDiffuse += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}", meshbasic_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}", meshlambert_frag: "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\treflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n\t#else\n\t\treflectedLight.indirectDiffuse += vIndirectFront;\n\t#endif\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}", meshlambert_vert: "#define LAMBERT\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}", meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t\tmatcapColor = matcapTexelToLinear( matcapColor );\n\t#else\n\t\tvec4 matcapColor = vec4( 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}", meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#ifndef FLAT_SHADED\n\t\tvNormal = normalize( transformedNormal );\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}", meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}", meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}", meshphysical_frag: "#define PHYSICAL\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifndef STANDARD\n\tuniform float clearCoat;\n\tuniform float clearCoatRoughness;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}", meshphysical_vert: "#define PHYSICAL\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}", normal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || ( defined( USE_NORMALMAP ) && ! defined( OBJECTSPACE_NORMALMAP ) )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}", normal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || ( defined( USE_NORMALMAP ) && ! defined( OBJECTSPACE_NORMALMAP ) )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || ( defined( USE_NORMALMAP ) && ! defined( OBJECTSPACE_NORMALMAP ) )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}", points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}", points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}", shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <fog_fragment>\n}", shadow_vert: "#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}", sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}", sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}" },
        da = { clone: v, merge: y },
        fa = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };
    Object.assign(x.prototype, {
        isColor: !0,
        r: 1,
        g: 1,
        b: 1,
        set: function(t) { return t && t.isColor ? this.copy(t) : "number" == typeof t ? this.setHex(t) : "string" == typeof t && this.setStyle(t), this },
        setScalar: function(t) { return this.b = this.g = this.r = t, this },
        setHex: function(t) { return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (255 & t) / 255, this },
        setRGB: function(t, e, n) { return this.r = t, this.g = e, this.b = n, this },
        setHSL: function() {
            function t(t, e, n) { return 0 > n && (n += 1), 1 < n && --n, n < 1 / 6 ? t + 6 * (e - t) * n : .5 > n ? e : n < 2 / 3 ? t + 6 * (e - t) * (2 / 3 - n) : t }
            return function(e, n, i) { return e = ca.euclideanModulo(e, 1), n = ca.clamp(n, 0, 1), i = ca.clamp(i, 0, 1), 0 === n ? this.r = this.g = this.b = i : (n = .5 >= i ? i * (1 + n) : i + n - i * n, i = 2 * i - n, this.r = t(i, n, e + 1 / 3), this.g = t(i, n, e), this.b = t(i, n, e - 1 / 3)), this }
        }(),
        setStyle: function(t) {
            function e(e) { void 0 !== e && 1 > parseFloat(e) && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.") }
            var n;
            if (n = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(t)) {
                var i = n[2];
                switch (n[1]) {
                    case "rgb":
                    case "rgba":
                        if (n = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(i)) return this.r = Math.min(255, parseInt(n[1], 10)) / 255, this.g = Math.min(255, parseInt(n[2], 10)) / 255, this.b = Math.min(255, parseInt(n[3], 10)) / 255, e(n[5]), this;
                        if (n = /^(\d+)%\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(i)) return this.r = Math.min(100, parseInt(n[1], 10)) / 100, this.g = Math.min(100, parseInt(n[2], 10)) / 100, this.b = Math.min(100, parseInt(n[3], 10)) / 100, e(n[5]), this;
                        break;
                    case "hsl":
                    case "hsla":
                        if (n = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(i)) {
                            i = parseFloat(n[1]) / 360;
                            var r = parseInt(n[2], 10) / 100,
                                a = parseInt(n[3], 10) / 100;
                            return e(n[5]), this.setHSL(i, r, a)
                        }
                }
            } else if (n = /^#([A-Fa-f0-9]+)$/.exec(t)) { if (n = n[1], 3 === (i = n.length)) return this.r = parseInt(n.charAt(0) + n.charAt(0), 16) / 255, this.g = parseInt(n.charAt(1) + n.charAt(1), 16) / 255, this.b = parseInt(n.charAt(2) + n.charAt(2), 16) / 255, this; if (6 === i) return this.r = parseInt(n.charAt(0) + n.charAt(1), 16) / 255, this.g = parseInt(n.charAt(2) + n.charAt(3), 16) / 255, this.b = parseInt(n.charAt(4) + n.charAt(5), 16) / 255, this }
            return t && 0 < t.length && (n = fa[t], void 0 !== n ? this.setHex(n) : console.warn("THREE.Color: Unknown color " + t)), this
        },
        clone: function() { return new this.constructor(this.r, this.g, this.b) },
        copy: function(t) { return this.r = t.r, this.g = t.g, this.b = t.b, this },
        copyGammaToLinear: function(t, e) { return void 0 === e && (e = 2), this.r = Math.pow(t.r, e), this.g = Math.pow(t.g, e), this.b = Math.pow(t.b, e), this },
        copyLinearToGamma: function(t, e) { return void 0 === e && (e = 2), e = 0 < e ? 1 / e : 1, this.r = Math.pow(t.r, e), this.g = Math.pow(t.g, e), this.b = Math.pow(t.b, e), this },
        convertGammaToLinear: function(t) { return this.copyGammaToLinear(this, t), this },
        convertLinearToGamma: function(t) { return this.copyLinearToGamma(this, t), this },
        copySRGBToLinear: function() {
            function t(t) { return .04045 > t ? .0773993808 * t : Math.pow(.9478672986 * t + .0521327014, 2.4) }
            return function(e) { return this.r = t(e.r), this.g = t(e.g), this.b = t(e.b), this }
        }(),
        copyLinearToSRGB: function() {
            function t(t) { return .0031308 > t ? 12.92 * t : 1.055 * Math.pow(t, .41666) - .055 }
            return function(e) { return this.r = t(e.r), this.g = t(e.g), this.b = t(e.b), this }
        }(),
        convertSRGBToLinear: function() { return this.copySRGBToLinear(this), this },
        convertLinearToSRGB: function() { return this.copyLinearToSRGB(this), this },
        getHex: function() { return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0 },
        getHexString: function() { return ("000000" + this.getHex().toString(16)).slice(-6) },
        getHSL: function(t) {
            void 0 === t && (console.warn("THREE.Color: .getHSL() target is now required"), t = { h: 0, s: 0, l: 0 });
            var e, n = this.r,
                i = this.g,
                r = this.b,
                a = Math.max(n, i, r),
                o = Math.min(n, i, r),
                s = (o + a) / 2;
            if (o === a) o = e = 0;
            else {
                var c = a - o;
                switch (o = .5 >= s ? c / (a + o) : c / (2 - a - o), a) {
                    case n:
                        e = (i - r) / c + (i < r ? 6 : 0);
                        break;
                    case i:
                        e = (r - n) / c + 2;
                        break;
                    case r:
                        e = (n - i) / c + 4
                }
                e /= 6
            }
            return t.h = e, t.s = o, t.l = s, t
        },
        getStyle: function() { return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")" },
        offsetHSL: function() { var t = {}; return function(e, n, i) { return this.getHSL(t), t.h += e, t.s += n, t.l += i, this.setHSL(t.h, t.s, t.l), this } }(),
        add: function(t) { return this.r += t.r, this.g += t.g, this.b += t.b, this },
        addColors: function(t, e) { return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this },
        addScalar: function(t) { return this.r += t, this.g += t, this.b += t, this },
        sub: function(t) { return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this },
        multiply: function(t) { return this.r *= t.r, this.g *= t.g, this.b *= t.b, this },
        multiplyScalar: function(t) { return this.r *= t, this.g *= t, this.b *= t, this },
        lerp: function(t, e) { return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this },
        lerpHSL: function() {
            var t = { h: 0, s: 0, l: 0 },
                e = { h: 0, s: 0, l: 0 };
            return function(n, i) { this.getHSL(t), n.getHSL(e), n = ca.lerp(t.h, e.h, i); var r = ca.lerp(t.s, e.s, i); return i = ca.lerp(t.l, e.l, i), this.setHSL(n, r, i), this }
        }(),
        equals: function(t) { return t.r === this.r && t.g === this.g && t.b === this.b },
        fromArray: function(t, e) { return void 0 === e && (e = 0), this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this },
        toArray: function(t, e) { return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t },
        toJSON: function() { return this.getHex() }
    });
    var ma = { common: { diffuse: { value: new x(15658734) }, opacity: { value: 1 }, map: { value: null }, uvTransform: { value: new o }, alphaMap: { value: null } }, specularmap: { specularMap: { value: null } }, envmap: { envMap: { value: null }, flipEnvMap: { value: -1 }, reflectivity: { value: 1 }, refractionRatio: { value: .98 }, maxMipLevel: { value: 0 } }, aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 } }, lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 } }, emissivemap: { emissiveMap: { value: null } }, bumpmap: { bumpMap: { value: null }, bumpScale: { value: 1 } }, normalmap: { normalMap: { value: null }, normalScale: { value: new n(1, 1) } }, displacementmap: { displacementMap: { value: null }, displacementScale: { value: 1 }, displacementBias: { value: 0 } }, roughnessmap: { roughnessMap: { value: null } }, metalnessmap: { metalnessMap: { value: null } }, gradientmap: { gradientMap: { value: null } }, fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 }, fogColor: { value: new x(16777215) } }, lights: { ambientLightColor: { value: [] }, directionalLights: { value: [], properties: { direction: {}, color: {}, shadow: {}, shadowBias: {}, shadowRadius: {}, shadowMapSize: {} } }, directionalShadowMap: { value: [] }, directionalShadowMatrix: { value: [] }, spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {}, shadow: {}, shadowBias: {}, shadowRadius: {}, shadowMapSize: {} } }, spotShadowMap: { value: [] }, spotShadowMatrix: { value: [] }, pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {}, shadow: {}, shadowBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } }, pointShadowMap: { value: [] }, pointShadowMatrix: { value: [] }, hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } }, rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } } }, points: { diffuse: { value: new x(15658734) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, uvTransform: { value: new o } }, sprite: { diffuse: { value: new x(15658734) }, opacity: { value: 1 }, center: { value: new n(.5, .5) }, rotation: { value: 0 }, map: { value: null }, uvTransform: { value: new o } } },
        ga = { basic: { uniforms: y([ma.common, ma.specularmap, ma.envmap, ma.aomap, ma.lightmap, ma.fog]), vertexShader: pa.meshbasic_vert, fragmentShader: pa.meshbasic_frag }, lambert: { uniforms: y([ma.common, ma.specularmap, ma.envmap, ma.aomap, ma.lightmap, ma.emissivemap, ma.fog, ma.lights, { emissive: { value: new x(0) } }]), vertexShader: pa.meshlambert_vert, fragmentShader: pa.meshlambert_frag }, phong: { uniforms: y([ma.common, ma.specularmap, ma.envmap, ma.aomap, ma.lightmap, ma.emissivemap, ma.bumpmap, ma.normalmap, ma.displacementmap, ma.gradientmap, ma.fog, ma.lights, { emissive: { value: new x(0) }, specular: { value: new x(1118481) }, shininess: { value: 30 } }]), vertexShader: pa.meshphong_vert, fragmentShader: pa.meshphong_frag }, standard: { uniforms: y([ma.common, ma.envmap, ma.aomap, ma.lightmap, ma.emissivemap, ma.bumpmap, ma.normalmap, ma.displacementmap, ma.roughnessmap, ma.metalnessmap, ma.fog, ma.lights, { emissive: { value: new x(0) }, roughness: { value: .5 }, metalness: { value: .5 }, envMapIntensity: { value: 1 } }]), vertexShader: pa.meshphysical_vert, fragmentShader: pa.meshphysical_frag }, matcap: { uniforms: y([ma.common, ma.bumpmap, ma.normalmap, ma.displacementmap, ma.fog, { matcap: { value: null } }]), vertexShader: pa.meshmatcap_vert, fragmentShader: pa.meshmatcap_frag }, points: { uniforms: y([ma.points, ma.fog]), vertexShader: pa.points_vert, fragmentShader: pa.points_frag }, dashed: { uniforms: y([ma.common, ma.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: pa.linedashed_vert, fragmentShader: pa.linedashed_frag }, depth: { uniforms: y([ma.common, ma.displacementmap]), vertexShader: pa.depth_vert, fragmentShader: pa.depth_frag }, normal: { uniforms: y([ma.common, ma.bumpmap, ma.normalmap, ma.displacementmap, { opacity: { value: 1 } }]), vertexShader: pa.normal_vert, fragmentShader: pa.normal_frag }, sprite: { uniforms: y([ma.sprite, ma.fog]), vertexShader: pa.sprite_vert, fragmentShader: pa.sprite_frag }, background: { uniforms: { uvTransform: { value: new o }, t2D: { value: null } }, vertexShader: pa.background_vert, fragmentShader: pa.background_frag }, cube: { uniforms: { tCube: { value: null }, tFlip: { value: -1 }, opacity: { value: 1 } }, vertexShader: pa.cube_vert, fragmentShader: pa.cube_frag }, equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: pa.equirect_vert, fragmentShader: pa.equirect_frag }, distanceRGBA: { uniforms: y([ma.common, ma.displacementmap, { referencePosition: { value: new a }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }]), vertexShader: pa.distanceRGBA_vert, fragmentShader: pa.distanceRGBA_frag }, shadow: { uniforms: y([ma.lights, ma.fog, { color: { value: new x(0) }, opacity: { value: 1 } }]), vertexShader: pa.shadow_vert, fragmentShader: pa.shadow_frag } };
    ga.physical = { uniforms: y([ga.standard.uniforms, { clearCoat: { value: 0 }, clearCoatRoughness: { value: 0 } }]), vertexShader: pa.meshphysical_vert, fragmentShader: pa.meshphysical_frag }, Object.assign(_.prototype, { clone: function() { return (new this.constructor).copy(this) }, copy: function(t) { this.a = t.a, this.b = t.b, this.c = t.c, this.normal.copy(t.normal), this.color.copy(t.color), this.materialIndex = t.materialIndex; for (var e = 0, n = t.vertexNormals.length; e < n; e++) this.vertexNormals[e] = t.vertexNormals[e].clone(); for (e = 0, n = t.vertexColors.length; e < n; e++) this.vertexColors[e] = t.vertexColors[e].clone(); return this } }), M.RotationOrders = "XYZ YZX ZXY XZY YXZ ZYX".split(" "), M.DefaultOrder = "XYZ", Object.defineProperties(M.prototype, { x: { get: function() { return this._x }, set: function(t) { this._x = t, this.onChangeCallback() } }, y: { get: function() { return this._y }, set: function(t) { this._y = t, this.onChangeCallback() } }, z: { get: function() { return this._z }, set: function(t) { this._z = t, this.onChangeCallback() } }, order: { get: function() { return this._order }, set: function(t) { this._order = t, this.onChangeCallback() } } }), Object.assign(M.prototype, {
        isEuler: !0,
        set: function(t, e, n, i) { return this._x = t, this._y = e, this._z = n, this._order = i || this._order, this.onChangeCallback(), this },
        clone: function() { return new this.constructor(this._x, this._y, this._z, this._order) },
        copy: function(t) { return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this.onChangeCallback(), this },
        setFromRotationMatrix: function(t, e, n) {
            var i = ca.clamp,
                r = t.elements;
            t = r[0];
            var a = r[4],
                o = r[8],
                s = r[1],
                c = r[5],
                h = r[9],
                l = r[2],
                u = r[6];
            return r = r[10], e = e || this._order, "XYZ" === e ? (this._y = Math.asin(i(o, -1, 1)), .99999 > Math.abs(o) ? (this._x = Math.atan2(-h, r), this._z = Math.atan2(-a, t)) : (this._x = Math.atan2(u, c), this._z = 0)) : "YXZ" === e ? (this._x = Math.asin(-i(h, -1, 1)), .99999 > Math.abs(h) ? (this._y = Math.atan2(o, r), this._z = Math.atan2(s, c)) : (this._y = Math.atan2(-l, t), this._z = 0)) : "ZXY" === e ? (this._x = Math.asin(i(u, -1, 1)), .99999 > Math.abs(u) ? (this._y = Math.atan2(-l, r), this._z = Math.atan2(-a, c)) : (this._y = 0, this._z = Math.atan2(s, t))) : "ZYX" === e ? (this._y = Math.asin(-i(l, -1, 1)), .99999 > Math.abs(l) ? (this._x = Math.atan2(u, r), this._z = Math.atan2(s, t)) : (this._x = 0, this._z = Math.atan2(-a, c))) : "YZX" === e ? (this._z = Math.asin(i(s, -1, 1)), .99999 > Math.abs(s) ? (this._x = Math.atan2(-h, c), this._y = Math.atan2(-l, t)) : (this._x = 0, this._y = Math.atan2(o, r))) : "XZY" === e ? (this._z = Math.asin(-i(a, -1, 1)), .99999 > Math.abs(a) ? (this._x = Math.atan2(u, c), this._y = Math.atan2(o, t)) : (this._x = Math.atan2(-h, r), this._y = 0)) : console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: " + e), this._order = e, !1 !== n && this.onChangeCallback(), this
        },
        setFromQuaternion: function() { var t = new i; return function(e, n, i) { return t.makeRotationFromQuaternion(e), this.setFromRotationMatrix(t, n, i) } }(),
        setFromVector3: function(t, e) { return this.set(t.x, t.y, t.z, e || this._order) },
        reorder: function() { var t = new r; return function(e) { return t.setFromEuler(this), this.setFromQuaternion(t, e) } }(),
        equals: function(t) { return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order },
        fromArray: function(t) { return this._x = t[0], this._y = t[1], this._z = t[2], void 0 !== t[3] && (this._order = t[3]), this.onChangeCallback(), this },
        toArray: function(t, e) { return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t },
        toVector3: function(t) { return t ? t.set(this._x, this._y, this._z) : new a(this._x, this._y, this._z) },
        onChange: function(t) { return this.onChangeCallback = t, this },
        onChangeCallback: function() {}
    }), Object.assign(E.prototype, { set: function(t) { this.mask = 1 << t | 0 }, enable: function(t) { this.mask = this.mask | 1 << t | 0 }, toggle: function(t) { this.mask ^= 1 << t | 0 }, disable: function(t) { this.mask &= ~(1 << t | 0) }, test: function(t) { return 0 != (this.mask & t.mask) } });
    var va = 0;
    S.DefaultUp = new a(0, 1, 0), S.DefaultMatrixAutoUpdate = !0, S.prototype = Object.assign(Object.create(e.prototype), {
        constructor: S,
        isObject3D: !0,
        onBeforeRender: function() {},
        onAfterRender: function() {},
        applyMatrix: function(t) { this.matrix.multiplyMatrices(t, this.matrix), this.matrix.decompose(this.position, this.quaternion, this.scale) },
        applyQuaternion: function(t) { return this.quaternion.premultiply(t), this },
        setRotationFromAxisAngle: function(t, e) { this.quaternion.setFromAxisAngle(t, e) },
        setRotationFromEuler: function(t) { this.quaternion.setFromEuler(t, !0) },
        setRotationFromMatrix: function(t) { this.quaternion.setFromRotationMatrix(t) },
        setRotationFromQuaternion: function(t) { this.quaternion.copy(t) },
        rotateOnAxis: function() { var t = new r; return function(e, n) { return t.setFromAxisAngle(e, n), this.quaternion.multiply(t), this } }(),
        rotateOnWorldAxis: function() { var t = new r; return function(e, n) { return t.setFromAxisAngle(e, n), this.quaternion.premultiply(t), this } }(),
        rotateX: function() { var t = new a(1, 0, 0); return function(e) { return this.rotateOnAxis(t, e) } }(),
        rotateY: function() { var t = new a(0, 1, 0); return function(e) { return this.rotateOnAxis(t, e) } }(),
        rotateZ: function() { var t = new a(0, 0, 1); return function(e) { return this.rotateOnAxis(t, e) } }(),
        translateOnAxis: function() { var t = new a; return function(e, n) { return t.copy(e).applyQuaternion(this.quaternion), this.position.add(t.multiplyScalar(n)), this } }(),
        translateX: function() { var t = new a(1, 0, 0); return function(e) { return this.translateOnAxis(t, e) } }(),
        translateY: function() { var t = new a(0, 1, 0); return function(e) { return this.translateOnAxis(t, e) } }(),
        translateZ: function() { var t = new a(0, 0, 1); return function(e) { return this.translateOnAxis(t, e) } }(),
        localToWorld: function(t) { return t.applyMatrix4(this.matrixWorld) },
        worldToLocal: function() { var t = new i; return function(e) { return e.applyMatrix4(t.getInverse(this.matrixWorld)) } }(),
        lookAt: function() {
            var t = new r,
                e = new i,
                n = new a,
                o = new a;
            return function(i, r, a) { i.isVector3 ? n.copy(i) : n.set(i, r, a), i = this.parent, this.updateWorldMatrix(!0, !1), o.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? e.lookAt(o, n, this.up) : e.lookAt(n, o, this.up), this.quaternion.setFromRotationMatrix(e), i && (e.extractRotation(i.matrixWorld), t.setFromRotationMatrix(e), this.quaternion.premultiply(t.inverse())) }
        }(),
        add: function(t) { if (1 < arguments.length) { for (var e = 0; e < arguments.length; e++) this.add(arguments[e]); return this } return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (null !== t.parent && t.parent.remove(t), t.parent = this, t.dispatchEvent({ type: "added" }), this.children.push(t)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this) },
        remove: function(t) { if (1 < arguments.length) { for (var e = 0; e < arguments.length; e++) this.remove(arguments[e]); return this } return e = this.children.indexOf(t), -1 !== e && (t.parent = null, t.dispatchEvent({ type: "removed" }), this.children.splice(e, 1)), this },
        getObjectById: function(t) { return this.getObjectByProperty("id", t) },
        getObjectByName: function(t) { return this.getObjectByProperty("name", t) },
        getObjectByProperty: function(t, e) { if (this[t] === e) return this; for (var n = 0, i = this.children.length; n < i; n++) { var r = this.children[n].getObjectByProperty(t, e); if (void 0 !== r) return r } },
        getWorldPosition: function(t) { return void 0 === t && (console.warn("THREE.Object3D: .getWorldPosition() target is now required"), t = new a), this.updateMatrixWorld(!0), t.setFromMatrixPosition(this.matrixWorld) },
        getWorldQuaternion: function() {
            var t = new a,
                e = new a;
            return function(n) { return void 0 === n && (console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"), n = new r), this.updateMatrixWorld(!0), this.matrixWorld.decompose(t, n, e), n }
        }(),
        getWorldScale: function() {
            var t = new a,
                e = new r;
            return function(n) { return void 0 === n && (console.warn("THREE.Object3D: .getWorldScale() target is now required"), n = new a), this.updateMatrixWorld(!0), this.matrixWorld.decompose(t, e, n), n }
        }(),
        getWorldDirection: function(t) { void 0 === t && (console.warn("THREE.Object3D: .getWorldDirection() target is now required"), t = new a), this.updateMatrixWorld(!0); var e = this.matrixWorld.elements; return t.set(e[8], e[9], e[10]).normalize() },
        raycast: function() {},
        traverse: function(t) { t(this); for (var e = this.children, n = 0, i = e.length; n < i; n++) e[n].traverse(t) },
        traverseVisible: function(t) { if (!1 !== this.visible) { t(this); for (var e = this.children, n = 0, i = e.length; n < i; n++) e[n].traverseVisible(t) } },
        traverseAncestors: function(t) {
            var e = this.parent;
            null !== e && (t(e), e.traverseAncestors(t))
        },
        updateMatrix: function() { this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0 },
        updateMatrixWorld: function(t) { this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, t = !0); for (var e = this.children, n = 0, i = e.length; n < i; n++) e[n].updateMatrixWorld(t) },
        updateWorldMatrix: function(t, e) {
            var n = this.parent;
            if (!0 === t && null !== n && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), !0 === e)
                for (t = this.children, e = 0, n = t.length; e < n; e++) t[e].updateWorldMatrix(!1, !0)
        },
        toJSON: function(t) {
            function e(e, n) { return void 0 === e[n.uuid] && (e[n.uuid] = n.toJSON(t)), n.uuid }

            function n(t) {
                var e, n = [];
                for (e in t) {
                    var i = t[e];
                    delete i.metadata, n.push(i)
                }
                return n
            }
            var i = void 0 === t || "string" == typeof t,
                r = {};
            i && (t = { geometries: {}, materials: {}, textures: {}, images: {}, shapes: {} }, r.metadata = { version: 4.5, type: "Object", generator: "Object3D.toJSON" });
            var a = {};
            if (a.uuid = this.uuid, a.type = this.type, "" !== this.name && (a.name = this.name), !0 === this.castShadow && (a.castShadow = !0), !0 === this.receiveShadow && (a.receiveShadow = !0), !1 === this.visible && (a.visible = !1), !1 === this.frustumCulled && (a.frustumCulled = !1), 0 !== this.renderOrder && (a.renderOrder = this.renderOrder), "{}" !== JSON.stringify(this.userData) && (a.userData = this.userData), a.layers = this.layers.mask, a.matrix = this.matrix.toArray(), !1 === this.matrixAutoUpdate && (a.matrixAutoUpdate = !1), this.isMesh && 0 !== this.drawMode && (a.drawMode = this.drawMode), this.isMesh || this.isLine || this.isPoints) {
                a.geometry = e(t.geometries, this.geometry);
                var o = this.geometry.parameters;
                if (void 0 !== o && void 0 !== o.shapes)
                    if (o = o.shapes, Array.isArray(o))
                        for (var s = 0, c = o.length; s < c; s++) e(t.shapes, o[s]);
                    else e(t.shapes, o)
            }
            if (void 0 !== this.material)
                if (Array.isArray(this.material)) {
                    for (o = [], s = 0, c = this.material.length; s < c; s++) o.push(e(t.materials, this.material[s]));
                    a.material = o
                } else a.material = e(t.materials, this.material);
            if (0 < this.children.length)
                for (a.children = [], s = 0; s < this.children.length; s++) a.children.push(this.children[s].toJSON(t).object);
            if (i) {
                i = n(t.geometries), s = n(t.materials), c = n(t.textures);
                var h = n(t.images);
                o = n(t.shapes), 0 < i.length && (r.geometries = i), 0 < s.length && (r.materials = s), 0 < c.length && (r.textures = c), 0 < h.length && (r.images = h), 0 < o.length && (r.shapes = o)
            }
            return r.object = a, r
        },
        clone: function(t) { return (new this.constructor).copy(this, t) },
        copy: function(t, e) {
            if (void 0 === e && (e = !0), this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.userData = JSON.parse(JSON.stringify(t.userData)), !0 === e)
                for (e = 0; e < t.children.length; e++) this.add(t.children[e].clone());
            return this
        }
    });
    var ya = 0;
    T.prototype = Object.assign(Object.create(e.prototype), {
        constructor: T,
        isGeometry: !0,
        applyMatrix: function(t) { for (var e = (new o).getNormalMatrix(t), n = 0, i = this.vertices.length; n < i; n++) this.vertices[n].applyMatrix4(t); for (n = 0, i = this.faces.length; n < i; n++) { t = this.faces[n], t.normal.applyMatrix3(e).normalize(); for (var r = 0, a = t.vertexNormals.length; r < a; r++) t.vertexNormals[r].applyMatrix3(e).normalize() } return null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this.normalsNeedUpdate = this.verticesNeedUpdate = !0, this },
        rotateX: function() { var t = new i; return function(e) { return t.makeRotationX(e), this.applyMatrix(t), this } }(),
        rotateY: function() { var t = new i; return function(e) { return t.makeRotationY(e), this.applyMatrix(t), this } }(),
        rotateZ: function() { var t = new i; return function(e) { return t.makeRotationZ(e), this.applyMatrix(t), this } }(),
        translate: function() { var t = new i; return function(e, n, i) { return t.makeTranslation(e, n, i), this.applyMatrix(t), this } }(),
        scale: function() { var t = new i; return function(e, n, i) { return t.makeScale(e, n, i), this.applyMatrix(t), this } }(),
        lookAt: function() { var t = new S; return function(e) { t.lookAt(e), t.updateMatrix(), this.applyMatrix(t.matrix) } }(),
        fromBufferGeometry: function(t) {
            function e(t, e, r, o) {
                var s = void 0 === h ? [] : [i.colors[t].clone(), i.colors[e].clone(), i.colors[r].clone()];
                o = new _(t, e, r, void 0 === c ? [] : [(new a).fromArray(c, 3 * t), (new a).fromArray(c, 3 * e), (new a).fromArray(c, 3 * r)], s, o), i.faces.push(o), void 0 !== l && i.faceVertexUvs[0].push([(new n).fromArray(l, 2 * t), (new n).fromArray(l, 2 * e), (new n).fromArray(l, 2 * r)]), void 0 !== u && i.faceVertexUvs[1].push([(new n).fromArray(u, 2 * t), (new n).fromArray(u, 2 * e), (new n).fromArray(u, 2 * r)])
            }
            var i = this,
                r = null !== t.index ? t.index.array : void 0,
                o = t.attributes,
                s = o.position.array,
                c = void 0 !== o.normal ? o.normal.array : void 0,
                h = void 0 !== o.color ? o.color.array : void 0,
                l = void 0 !== o.uv ? o.uv.array : void 0,
                u = void 0 !== o.uv2 ? o.uv2.array : void 0;
            void 0 !== u && (this.faceVertexUvs[1] = []);
            for (var p = o = 0; o < s.length; o += 3, p += 2) i.vertices.push((new a).fromArray(s, o)), void 0 !== h && i.colors.push((new x).fromArray(h, o));
            var d = t.groups;
            if (0 < d.length)
                for (o = 0; o < d.length; o++) {
                    s = d[o];
                    var f = s.start,
                        m = s.count;
                    for (p = f, f += m; p < f; p += 3) void 0 !== r ? e(r[p], r[p + 1], r[p + 2], s.materialIndex) : e(p, p + 1, p + 2, s.materialIndex)
                } else if (void 0 !== r)
                    for (o = 0; o < r.length; o += 3) e(r[o], r[o + 1], r[o + 2]);
                else
                    for (o = 0; o < s.length / 3; o += 3) e(o, o + 1, o + 2);
            return this.computeFaceNormals(), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()), null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), this
        },
        center: function() { var t = new a; return function() { return this.computeBoundingBox(), this.boundingBox.getCenter(t).negate(), this.translate(t.x, t.y, t.z), this } }(),
        normalize: function() {
            this.computeBoundingSphere();
            var t = this.boundingSphere.center,
                e = this.boundingSphere.radius;
            e = 0 === e ? 1 : 1 / e;
            var n = new i;
            return n.set(e, 0, 0, -e * t.x, 0, e, 0, -e * t.y, 0, 0, e, -e * t.z, 0, 0, 0, 1), this.applyMatrix(n), this
        },
        computeFaceNormals: function() {
            for (var t = new a, e = new a, n = 0, i = this.faces.length; n < i; n++) {
                var r = this.faces[n],
                    o = this.vertices[r.a],
                    s = this.vertices[r.b];
                t.subVectors(this.vertices[r.c], s), e.subVectors(o, s), t.cross(e), t.normalize(), r.normal.copy(t)
            }
        },
        computeVertexNormals: function(t) {
            void 0 === t && (t = !0);
            var e, n = Array(this.vertices.length),
                i = 0;
            for (e = this.vertices.length; i < e; i++) n[i] = new a;
            if (t) {
                var r = new a,
                    o = new a;
                for (t = 0, i = this.faces.length; t < i; t++) {
                    e = this.faces[t];
                    var s = this.vertices[e.a],
                        c = this.vertices[e.b],
                        h = this.vertices[e.c];
                    r.subVectors(h, c), o.subVectors(s, c), r.cross(o), n[e.a].add(r), n[e.b].add(r), n[e.c].add(r)
                }
            } else
                for (this.computeFaceNormals(), t = 0, i = this.faces.length; t < i; t++) e = this.faces[t], n[e.a].add(e.normal), n[e.b].add(e.normal), n[e.c].add(e.normal);
            for (i = 0, e = this.vertices.length; i < e; i++) n[i].normalize();
            for (t = 0, i = this.faces.length; t < i; t++) e = this.faces[t], s = e.vertexNormals, 3 === s.length ? (s[0].copy(n[e.a]), s[1].copy(n[e.b]), s[2].copy(n[e.c])) : (s[0] = n[e.a].clone(), s[1] = n[e.b].clone(), s[2] = n[e.c].clone());
            0 < this.faces.length && (this.normalsNeedUpdate = !0)
        },
        computeFlatVertexNormals: function() {
            var t;
            this.computeFaceNormals();
            var e = 0;
            for (t = this.faces.length; e < t; e++) {
                var n = this.faces[e],
                    i = n.vertexNormals;
                3 === i.length ? (i[0].copy(n.normal), i[1].copy(n.normal), i[2].copy(n.normal)) : (i[0] = n.normal.clone(), i[1] = n.normal.clone(), i[2] = n.normal.clone())
            }
            0 < this.faces.length && (this.normalsNeedUpdate = !0)
        },
        computeMorphNormals: function() {
            var t, e, n = 0;
            for (e = this.faces.length; n < e; n++) {
                var i = this.faces[n];
                i.__originalFaceNormal ? i.__originalFaceNormal.copy(i.normal) : i.__originalFaceNormal = i.normal.clone(), i.__originalVertexNormals || (i.__originalVertexNormals = []);
                var r = 0;
                for (t = i.vertexNormals.length; r < t; r++) i.__originalVertexNormals[r] ? i.__originalVertexNormals[r].copy(i.vertexNormals[r]) : i.__originalVertexNormals[r] = i.vertexNormals[r].clone()
            }
            var o = new T;
            for (o.faces = this.faces, r = 0, t = this.morphTargets.length; r < t; r++) {
                if (!this.morphNormals[r]) {
                    this.morphNormals[r] = {}, this.morphNormals[r].faceNormals = [], this.morphNormals[r].vertexNormals = [], i = this.morphNormals[r].faceNormals;
                    var s = this.morphNormals[r].vertexNormals;
                    for (n = 0, e = this.faces.length; n < e; n++) {
                        var c = new a,
                            h = { a: new a, b: new a, c: new a };
                        i.push(c), s.push(h)
                    }
                }
                for (s = this.morphNormals[r], o.vertices = this.morphTargets[r].vertices, o.computeFaceNormals(), o.computeVertexNormals(), n = 0, e = this.faces.length; n < e; n++) i = this.faces[n], c = s.faceNormals[n], h = s.vertexNormals[n], c.copy(i.normal), h.a.copy(i.vertexNormals[0]), h.b.copy(i.vertexNormals[1]), h.c.copy(i.vertexNormals[2])
            }
            for (n = 0, e = this.faces.length; n < e; n++) i = this.faces[n], i.normal = i.__originalFaceNormal, i.vertexNormals = i.__originalVertexNormals
        },
        computeBoundingBox: function() { null === this.boundingBox && (this.boundingBox = new d), this.boundingBox.setFromPoints(this.vertices) },
        computeBoundingSphere: function() { null === this.boundingSphere && (this.boundingSphere = new f), this.boundingSphere.setFromPoints(this.vertices) },
        merge: function(t, e, n) {
            if (t && t.isGeometry) {
                var i, r = this.vertices.length,
                    a = this.vertices,
                    s = t.vertices,
                    c = this.faces,
                    h = t.faces,
                    l = this.faceVertexUvs[0],
                    u = t.faceVertexUvs[0],
                    p = this.colors,
                    d = t.colors;
                void 0 === n && (n = 0), void 0 !== e && (i = (new o).getNormalMatrix(e)), t = 0;
                for (var f = s.length; t < f; t++) {
                    var m = s[t].clone();
                    void 0 !== e && m.applyMatrix4(e), a.push(m)
                }
                for (t = 0, f = d.length; t < f; t++) p.push(d[t].clone());
                for (t = 0, f = h.length; t < f; t++) {
                    s = h[t];
                    var g = s.vertexNormals;
                    for (d = s.vertexColors, p = new _(s.a + r, s.b + r, s.c + r), p.normal.copy(s.normal), void 0 !== i && p.normal.applyMatrix3(i).normalize(), e = 0, a = g.length; e < a; e++) m = g[e].clone(), void 0 !== i && m.applyMatrix3(i).normalize(), p.vertexNormals.push(m);
                    for (p.color.copy(s.color), e = 0, a = d.length; e < a; e++) m = d[e], p.vertexColors.push(m.clone());
                    p.materialIndex = s.materialIndex + n, c.push(p)
                }
                for (t = 0, f = u.length; t < f; t++)
                    if (n = u[t], i = [], void 0 !== n) {
                        for (e = 0, a = n.length; e < a; e++) i.push(n[e].clone());
                        l.push(i)
                    }
            } else console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.", t)
        },
        mergeMesh: function(t) { t && t.isMesh ? (t.matrixAutoUpdate && t.updateMatrix(), this.merge(t.geometry, t.matrix)) : console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.", t) },
        mergeVertices: function() {
            var t, e = {},
                n = [],
                i = [],
                r = Math.pow(10, 4),
                a = 0;
            for (t = this.vertices.length; a < t; a++) {
                var o = this.vertices[a];
                o = Math.round(o.x * r) + "_" + Math.round(o.y * r) + "_" + Math.round(o.z * r), void 0 === e[o] ? (e[o] = a, n.push(this.vertices[a]), i[a] = n.length - 1) : i[a] = i[e[o]]
            }
            for (e = [], a = 0, t = this.faces.length; a < t; a++)
                for (r = this.faces[a], r.a = i[r.a], r.b = i[r.b], r.c = i[r.c], r = [r.a, r.b, r.c], o = 0; 3 > o; o++)
                    if (r[o] === r[(o + 1) % 3]) { e.push(a); break }
            for (a = e.length - 1; 0 <= a; a--)
                for (r = e[a], this.faces.splice(r, 1), i = 0, t = this.faceVertexUvs.length; i < t; i++) this.faceVertexUvs[i].splice(r, 1);
            return a = this.vertices.length - n.length, this.vertices = n, a
        },
        setFromPoints: function(t) {
            this.vertices = [];
            for (var e = 0, n = t.length; e < n; e++) {
                var i = t[e];
                this.vertices.push(new a(i.x, i.y, i.z || 0))
            }
            return this
        },
        sortFacesByMaterialIndex: function() {
            for (var t = this.faces, e = t.length, n = 0; n < e; n++) t[n]._id = n;
            t.sort(function(t, e) { return t.materialIndex - e.materialIndex });
            var i, r, a = this.faceVertexUvs[0],
                o = this.faceVertexUvs[1];
            for (a && a.length === e && (i = []), o && o.length === e && (r = []), n = 0; n < e; n++) {
                var s = t[n]._id;
                i && i.push(a[s]), r && r.push(o[s])
            }
            i && (this.faceVertexUvs[0] = i), r && (this.faceVertexUvs[1] = r)
        },
        toJSON: function() {
            function t(t, e, n) { return n ? t | 1 << e : t & ~(1 << e) }

            function e(t) { var e = t.x.toString() + t.y.toString() + t.z.toString(); return void 0 !== h[e] ? h[e] : (h[e] = c.length / 3, c.push(t.x, t.y, t.z), h[e]) }

            function n(t) { var e = t.r.toString() + t.g.toString() + t.b.toString(); return void 0 !== u[e] ? u[e] : (u[e] = l.length, l.push(t.getHex()), u[e]) }

            function i(t) { var e = t.x.toString() + t.y.toString(); return void 0 !== d[e] ? d[e] : (d[e] = p.length / 2, p.push(t.x, t.y), d[e]) }
            var r = { metadata: { version: 4.5, type: "Geometry", generator: "Geometry.toJSON" } };
            if (r.uuid = this.uuid, r.type = this.type, "" !== this.name && (r.name = this.name), void 0 !== this.parameters) { var a, o = this.parameters; for (a in o) void 0 !== o[a] && (r[a] = o[a]); return r }
            for (o = [], a = 0; a < this.vertices.length; a++) {
                var s = this.vertices[a];
                o.push(s.x, s.y, s.z)
            }
            s = [];
            var c = [],
                h = {},
                l = [],
                u = {},
                p = [],
                d = {};
            for (a = 0; a < this.faces.length; a++) {
                var f = this.faces[a],
                    m = void 0 !== this.faceVertexUvs[0][a],
                    g = 0 < f.normal.length(),
                    v = 0 < f.vertexNormals.length,
                    y = 1 !== f.color.r || 1 !== f.color.g || 1 !== f.color.b,
                    x = 0 < f.vertexColors.length,
                    b = 0;
                b = t(b, 0, 0), b = t(b, 1, !0), b = t(b, 2, !1), b = t(b, 3, m), b = t(b, 4, g), b = t(b, 5, v), b = t(b, 6, y), b = t(b, 7, x), s.push(b), s.push(f.a, f.b, f.c), s.push(f.materialIndex), m && (m = this.faceVertexUvs[0][a], s.push(i(m[0]), i(m[1]), i(m[2]))), g && s.push(e(f.normal)), v && (g = f.vertexNormals, s.push(e(g[0]), e(g[1]), e(g[2]))), y && s.push(n(f.color)), x && (f = f.vertexColors, s.push(n(f[0]), n(f[1]), n(f[2])))
            }
            return r.data = {}, r.data.vertices = o, r.data.normals = c, 0 < l.length && (r.data.colors = l), 0 < p.length && (r.data.uvs = [p]), r.data.faces = s, r
        },
        clone: function() { return (new T).copy(this) },
        copy: function(t) {
            var e, n, i;
            this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [
                []
            ], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingSphere = this.boundingBox = null, this.name = t.name;
            var r = t.vertices,
                a = 0;
            for (e = r.length; a < e; a++) this.vertices.push(r[a].clone());
            for (r = t.colors, a = 0, e = r.length; a < e; a++) this.colors.push(r[a].clone());
            for (r = t.faces, a = 0, e = r.length; a < e; a++) this.faces.push(r[a].clone());
            for (a = 0, e = t.faceVertexUvs.length; a < e; a++) {
                var o = t.faceVertexUvs[a];
                for (void 0 === this.faceVertexUvs[a] && (this.faceVertexUvs[a] = []), r = 0, n = o.length; r < n; r++) {
                    var s = o[r],
                        c = [],
                        h = 0;
                    for (i = s.length; h < i; h++) c.push(s[h].clone());
                    this.faceVertexUvs[a].push(c)
                }
            }
            for (h = t.morphTargets, a = 0, e = h.length; a < e; a++) {
                if (i = {}, i.name = h[a].name, void 0 !== h[a].vertices)
                    for (i.vertices = [], r = 0, n = h[a].vertices.length; r < n; r++) i.vertices.push(h[a].vertices[r].clone());
                if (void 0 !== h[a].normals)
                    for (i.normals = [], r = 0, n = h[a].normals.length; r < n; r++) i.normals.push(h[a].normals[r].clone());
                this.morphTargets.push(i)
            }
            for (h = t.morphNormals, a = 0, e = h.length; a < e; a++) {
                if (i = {}, void 0 !== h[a].vertexNormals)
                    for (i.vertexNormals = [], r = 0, n = h[a].vertexNormals.length; r < n; r++) o = h[a].vertexNormals[r], s = {}, s.a = o.a.clone(), s.b = o.b.clone(), s.c = o.c.clone(), i.vertexNormals.push(s);
                if (void 0 !== h[a].faceNormals)
                    for (i.faceNormals = [], r = 0, n = h[a].faceNormals.length; r < n; r++) i.faceNormals.push(h[a].faceNormals[r].clone());
                this.morphNormals.push(i)
            }
            for (r = t.skinWeights, a = 0, e = r.length; a < e; a++) this.skinWeights.push(r[a].clone());
            for (r = t.skinIndices, a = 0, e = r.length; a < e; a++) this.skinIndices.push(r[a].clone());
            for (r = t.lineDistances, a = 0, e = r.length; a < e; a++) this.lineDistances.push(r[a]);
            return a = t.boundingBox, null !== a && (this.boundingBox = a.clone()), a = t.boundingSphere, null !== a && (this.boundingSphere = a.clone()), this.elementsNeedUpdate = t.elementsNeedUpdate, this.verticesNeedUpdate = t.verticesNeedUpdate, this.uvsNeedUpdate = t.uvsNeedUpdate, this.normalsNeedUpdate = t.normalsNeedUpdate, this.colorsNeedUpdate = t.colorsNeedUpdate, this.lineDistancesNeedUpdate = t.lineDistancesNeedUpdate, this.groupsNeedUpdate = t.groupsNeedUpdate, this
        },
        dispose: function() { this.dispatchEvent({ type: "dispose" }) }
    }), Object.defineProperty(A.prototype, "needsUpdate", { set: function(t) {!0 === t && this.version++ } }), Object.assign(A.prototype, {
        isBufferAttribute: !0,
        onUploadCallback: function() {},
        setArray: function(t) { if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array."); return this.count = void 0 !== t ? t.length / this.itemSize : 0, this.array = t, this },
        setDynamic: function(t) { return this.dynamic = t, this },
        copy: function(t) { return this.name = t.name, this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.count = t.count, this.normalized = t.normalized, this.dynamic = t.dynamic, this },
        copyAt: function(t, e, n) { t *= this.itemSize, n *= e.itemSize; for (var i = 0, r = this.itemSize; i < r; i++) this.array[t + i] = e.array[n + i]; return this },
        copyArray: function(t) { return this.array.set(t), this },
        copyColorsArray: function(t) {
            for (var e = this.array, n = 0, i = 0, r = t.length; i < r; i++) {
                var a = t[i];
                void 0 === a && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", i), a = new x), e[n++] = a.r, e[n++] = a.g, e[n++] = a.b
            }
            return this
        },
        copyVector2sArray: function(t) {
            for (var e = this.array, i = 0, r = 0, a = t.length; r < a; r++) {
                var o = t[r];
                void 0 === o && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", r), o = new n), e[i++] = o.x, e[i++] = o.y
            }
            return this
        },
        copyVector3sArray: function(t) {
            for (var e = this.array, n = 0, i = 0, r = t.length; i < r; i++) {
                var o = t[i];
                void 0 === o && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", i), o = new a), e[n++] = o.x, e[n++] = o.y, e[n++] = o.z
            }
            return this
        },
        copyVector4sArray: function(t) {
            for (var e = this.array, n = 0, i = 0, r = t.length; i < r; i++) {
                var a = t[i];
                void 0 === a && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", i), a = new c), e[n++] = a.x, e[n++] = a.y, e[n++] = a.z, e[n++] = a.w
            }
            return this
        },
        set: function(t, e) { return void 0 === e && (e = 0), this.array.set(t, e), this },
        getX: function(t) { return this.array[t * this.itemSize] },
        setX: function(t, e) { return this.array[t * this.itemSize] = e, this },
        getY: function(t) { return this.array[t * this.itemSize + 1] },
        setY: function(t, e) { return this.array[t * this.itemSize + 1] = e, this },
        getZ: function(t) { return this.array[t * this.itemSize + 2] },
        setZ: function(t, e) { return this.array[t * this.itemSize + 2] = e, this },
        getW: function(t) { return this.array[t * this.itemSize + 3] },
        setW: function(t, e) { return this.array[t * this.itemSize + 3] = e, this },
        setXY: function(t, e, n) { return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = n, this },
        setXYZ: function(t, e, n, i) { return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = i, this },
        setXYZW: function(t, e, n, i, r) { return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = i, this.array[t + 3] = r, this },
        onUpload: function(t) { return this.onUploadCallback = t, this },
        clone: function() { return new this.constructor(this.array, this.itemSize).copy(this) }
    }), L.prototype = Object.create(A.prototype), L.prototype.constructor = L, R.prototype = Object.create(A.prototype), R.prototype.constructor = R, P.prototype = Object.create(A.prototype), P.prototype.constructor = P, C.prototype = Object.create(A.prototype), C.prototype.constructor = C, I.prototype = Object.create(A.prototype), I.prototype.constructor = I, O.prototype = Object.create(A.prototype), O.prototype.constructor = O, D.prototype = Object.create(A.prototype), D.prototype.constructor = D, N.prototype = Object.create(A.prototype), N.prototype.constructor = N, B.prototype = Object.create(A.prototype), B.prototype.constructor = B, Object.assign(z.prototype, {
        computeGroups: function(t) {
            var e = [],
                n = void 0;
            t = t.faces;
            for (var i = 0; i < t.length; i++) { var r = t[i]; if (r.materialIndex !== n) { n = r.materialIndex, void 0 !== a && (a.count = 3 * i - a.start, e.push(a)); var a = { start: 3 * i, materialIndex: n } } }
            void 0 !== a && (a.count = 3 * i - a.start, e.push(a)), this.groups = e
        },
        fromGeometry: function(t) {
            var e = t.faces,
                i = t.vertices,
                r = t.faceVertexUvs,
                a = r[0] && 0 < r[0].length,
                o = r[1] && 0 < r[1].length,
                s = t.morphTargets,
                c = s.length;
            if (0 < c) {
                for (var h = [], l = 0; l < c; l++) h[l] = { name: s[l].name, data: [] };
                this.morphTargets.position = h
            }
            var u = t.morphNormals,
                p = u.length;
            if (0 < p) {
                var d = [];
                for (l = 0; l < p; l++) d[l] = { name: u[l].name, data: [] };
                this.morphTargets.normal = d
            }
            var f = t.skinIndices,
                m = t.skinWeights,
                g = f.length === i.length,
                v = m.length === i.length;
            for (0 < i.length && 0 === e.length && console.error("THREE.DirectGeometry: Faceless geometries are not supported."), l = 0; l < e.length; l++) {
                var y = e[l];
                this.vertices.push(i[y.a], i[y.b], i[y.c]);
                var x = y.vertexNormals;
                for (3 === x.length ? this.normals.push(x[0], x[1], x[2]) : (x = y.normal, this.normals.push(x, x, x)), x = y.vertexColors, 3 === x.length ? this.colors.push(x[0], x[1], x[2]) : (x = y.color, this.colors.push(x, x, x)), !0 === a && (x = r[0][l], void 0 !== x ? this.uvs.push(x[0], x[1], x[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ", l), this.uvs.push(new n, new n, new n))), !0 === o && (x = r[1][l], void 0 !== x ? this.uvs2.push(x[0], x[1], x[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ", l), this.uvs2.push(new n, new n, new n))), x = 0; x < c; x++) {
                    var b = s[x].vertices;
                    h[x].data.push(b[y.a], b[y.b], b[y.c])
                }
                for (x = 0; x < p; x++) b = u[x].vertexNormals[l], d[x].data.push(b.a, b.b, b.c);
                g && this.skinIndices.push(f[y.a], f[y.b], f[y.c]), v && this.skinWeights.push(m[y.a], m[y.b], m[y.c])
            }
            return this.computeGroups(t), this.verticesNeedUpdate = t.verticesNeedUpdate, this.normalsNeedUpdate = t.normalsNeedUpdate, this.colorsNeedUpdate = t.colorsNeedUpdate, this.uvsNeedUpdate = t.uvsNeedUpdate, this.groupsNeedUpdate = t.groupsNeedUpdate, this
        }
    });
    var xa = 1;
    G.prototype = Object.assign(Object.create(e.prototype), {
        constructor: G,
        isBufferGeometry: !0,
        getIndex: function() { return this.index },
        setIndex: function(t) { Array.isArray(t) ? this.index = new(65535 < U(t) ? D : I)(t, 1) : this.index = t },
        addAttribute: function(t, e, n) { return e && e.isBufferAttribute || e && e.isInterleavedBufferAttribute ? "index" === t ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."), this.setIndex(e), this) : (this.attributes[t] = e, this) : (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), this.addAttribute(t, new A(e, n))) },
        getAttribute: function(t) { return this.attributes[t] },
        removeAttribute: function(t) { return delete this.attributes[t], this },
        addGroup: function(t, e, n) { this.groups.push({ start: t, count: e, materialIndex: void 0 !== n ? n : 0 }) },
        clearGroups: function() { this.groups = [] },
        setDrawRange: function(t, e) { this.drawRange.start = t, this.drawRange.count = e },
        applyMatrix: function(t) {
            var e = this.attributes.position;
            void 0 !== e && (t.applyToBufferAttribute(e), e.needsUpdate = !0);
            var n = this.attributes.normal;
            return void 0 !== n && (e = (new o).getNormalMatrix(t), e.applyToBufferAttribute(n), n.needsUpdate = !0), n = this.attributes.tangent, void 0 !== n && (e = (new o).getNormalMatrix(t), e.applyToBufferAttribute(n), n.needsUpdate = !0), null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this
        },
        rotateX: function() { var t = new i; return function(e) { return t.makeRotationX(e), this.applyMatrix(t), this } }(),
        rotateY: function() { var t = new i; return function(e) { return t.makeRotationY(e), this.applyMatrix(t), this } }(),
        rotateZ: function() { var t = new i; return function(e) { return t.makeRotationZ(e), this.applyMatrix(t), this } }(),
        translate: function() { var t = new i; return function(e, n, i) { return t.makeTranslation(e, n, i), this.applyMatrix(t), this } }(),
        scale: function() { var t = new i; return function(e, n, i) { return t.makeScale(e, n, i), this.applyMatrix(t), this } }(),
        lookAt: function() { var t = new S; return function(e) { t.lookAt(e), t.updateMatrix(), this.applyMatrix(t.matrix) } }(),
        center: function() { var t = new a; return function() { return this.computeBoundingBox(), this.boundingBox.getCenter(t).negate(), this.translate(t.x, t.y, t.z), this } }(),
        setFromObject: function(t) {
            var e = t.geometry;
            if (t.isPoints || t.isLine) {
                t = new N(3 * e.vertices.length, 3);
                var n = new N(3 * e.colors.length, 3);
                this.addAttribute("position", t.copyVector3sArray(e.vertices)), this.addAttribute("color", n.copyColorsArray(e.colors)), e.lineDistances && e.lineDistances.length === e.vertices.length && (t = new N(e.lineDistances.length, 1), this.addAttribute("lineDistance", t.copyArray(e.lineDistances))), null !== e.boundingSphere && (this.boundingSphere = e.boundingSphere.clone()), null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone())
            } else t.isMesh && e && e.isGeometry && this.fromGeometry(e);
            return this
        },
        setFromPoints: function(t) {
            for (var e = [], n = 0, i = t.length; n < i; n++) {
                var r = t[n];
                e.push(r.x, r.y, r.z || 0)
            }
            return this.addAttribute("position", new N(e, 3)), this
        },
        updateFromObject: function(t) {
            var e = t.geometry;
            if (t.isMesh) {
                var n = e.__directGeometry;
                if (!0 === e.elementsNeedUpdate && (n = void 0, e.elementsNeedUpdate = !1), void 0 === n) return this.fromGeometry(e);
                n.verticesNeedUpdate = e.verticesNeedUpdate, n.normalsNeedUpdate = e.normalsNeedUpdate, n.colorsNeedUpdate = e.colorsNeedUpdate, n.uvsNeedUpdate = e.uvsNeedUpdate, n.groupsNeedUpdate = e.groupsNeedUpdate, e.verticesNeedUpdate = !1, e.normalsNeedUpdate = !1, e.colorsNeedUpdate = !1, e.uvsNeedUpdate = !1, e.groupsNeedUpdate = !1, e = n
            }
            return !0 === e.verticesNeedUpdate && (n = this.attributes.position, void 0 !== n && (n.copyVector3sArray(e.vertices), n.needsUpdate = !0), e.verticesNeedUpdate = !1), !0 === e.normalsNeedUpdate && (n = this.attributes.normal, void 0 !== n && (n.copyVector3sArray(e.normals), n.needsUpdate = !0), e.normalsNeedUpdate = !1), !0 === e.colorsNeedUpdate && (n = this.attributes.color, void 0 !== n && (n.copyColorsArray(e.colors), n.needsUpdate = !0), e.colorsNeedUpdate = !1), e.uvsNeedUpdate && (n = this.attributes.uv, void 0 !== n && (n.copyVector2sArray(e.uvs), n.needsUpdate = !0), e.uvsNeedUpdate = !1), e.lineDistancesNeedUpdate && (n = this.attributes.lineDistance, void 0 !== n && (n.copyArray(e.lineDistances), n.needsUpdate = !0), e.lineDistancesNeedUpdate = !1), e.groupsNeedUpdate && (e.computeGroups(t.geometry), this.groups = e.groups, e.groupsNeedUpdate = !1), this
        },
        fromGeometry: function(t) { return t.__directGeometry = (new z).fromGeometry(t), this.fromDirectGeometry(t.__directGeometry) },
        fromDirectGeometry: function(t) {
            var e = new Float32Array(3 * t.vertices.length);
            this.addAttribute("position", new A(e, 3).copyVector3sArray(t.vertices)), 0 < t.normals.length && (e = new Float32Array(3 * t.normals.length), this.addAttribute("normal", new A(e, 3).copyVector3sArray(t.normals))), 0 < t.colors.length && (e = new Float32Array(3 * t.colors.length), this.addAttribute("color", new A(e, 3).copyColorsArray(t.colors))), 0 < t.uvs.length && (e = new Float32Array(2 * t.uvs.length), this.addAttribute("uv", new A(e, 2).copyVector2sArray(t.uvs))), 0 < t.uvs2.length && (e = new Float32Array(2 * t.uvs2.length), this.addAttribute("uv2", new A(e, 2).copyVector2sArray(t.uvs2))), this.groups = t.groups;
            for (var n in t.morphTargets) {
                e = [];
                for (var i = t.morphTargets[n], r = 0, a = i.length; r < a; r++) {
                    var o = i[r],
                        s = new N(3 * o.data.length, 3);
                    s.name = o.name, e.push(s.copyVector3sArray(o.data))
                }
                this.morphAttributes[n] = e
            }
            return 0 < t.skinIndices.length && (n = new N(4 * t.skinIndices.length, 4), this.addAttribute("skinIndex", n.copyVector4sArray(t.skinIndices))), 0 < t.skinWeights.length && (n = new N(4 * t.skinWeights.length, 4), this.addAttribute("skinWeight", n.copyVector4sArray(t.skinWeights))), null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()), this
        },
        computeBoundingBox: function() {
            null === this.boundingBox && (this.boundingBox = new d);
            var t = this.attributes.position;
            void 0 !== t ? this.boundingBox.setFromBufferAttribute(t) : this.boundingBox.makeEmpty(), (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
        },
        computeBoundingSphere: function() {
            var t = new d,
                e = new a;
            return function() {
                null === this.boundingSphere && (this.boundingSphere = new f);
                var n = this.attributes.position;
                if (n) {
                    var i = this.boundingSphere.center;
                    t.setFromBufferAttribute(n), t.getCenter(i);
                    for (var r = 0, a = 0, o = n.count; a < o; a++) e.x = n.getX(a), e.y = n.getY(a), e.z = n.getZ(a), r = Math.max(r, i.distanceToSquared(e));
                    this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
                }
            }
        }(),
        computeFaceNormals: function() {},
        computeVertexNormals: function() {
            var t = this.index,
                e = this.attributes;
            if (e.position) {
                var n = e.position.array;
                if (void 0 === e.normal) this.addAttribute("normal", new A(new Float32Array(n.length), 3));
                else
                    for (var i = e.normal.array, r = 0, o = i.length; r < o; r++) i[r] = 0;
                i = e.normal.array;
                var s = new a,
                    c = new a,
                    h = new a,
                    l = new a,
                    u = new a;
                if (t) {
                    var p = t.array;
                    for (r = 0, o = t.count; r < o; r += 3) {
                        t = 3 * p[r + 0];
                        var d = 3 * p[r + 1],
                            f = 3 * p[r + 2];
                        s.fromArray(n, t), c.fromArray(n, d), h.fromArray(n, f), l.subVectors(h, c), u.subVectors(s, c), l.cross(u), i[t] += l.x, i[t + 1] += l.y, i[t + 2] += l.z, i[d] += l.x, i[d + 1] += l.y, i[d + 2] += l.z, i[f] += l.x, i[f + 1] += l.y, i[f + 2] += l.z
                    }
                } else
                    for (r = 0, o = n.length; r < o; r += 9) s.fromArray(n, r), c.fromArray(n, r + 3), h.fromArray(n, r + 6), l.subVectors(h, c), u.subVectors(s, c), l.cross(u), i[r] = l.x, i[r + 1] = l.y, i[r + 2] = l.z, i[r + 3] = l.x, i[r + 4] = l.y, i[r + 5] = l.z, i[r + 6] = l.x, i[r + 7] = l.y, i[r + 8] = l.z;
                this.normalizeNormals(), e.normal.needsUpdate = !0
            }
        },
        merge: function(t, e) {
            if (t && t.isBufferGeometry) {
                void 0 === e && (e = 0, console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));
                var n, i = this.attributes;
                for (n in i)
                    if (void 0 !== t.attributes[n]) {
                        var r = i[n].array,
                            a = t.attributes[n],
                            o = a.array,
                            s = 0;
                        for (a = a.itemSize * e; s < o.length; s++, a++) r[a] = o[s]
                    }
                return this
            }
            console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", t)
        },
        normalizeNormals: function() { var t = new a; return function() { for (var e = this.attributes.normal, n = 0, i = e.count; n < i; n++) t.x = e.getX(n), t.y = e.getY(n), t.z = e.getZ(n), t.normalize(), e.setXYZ(n, t.x, t.y, t.z) } }(),
        toNonIndexed: function() {
            function t(t, e) {
                var n = t.array;
                t = t.itemSize;
                for (var i, r = new n.constructor(e.length * t), a = 0, o = 0, s = e.length; o < s; o++) { i = e[o] * t; for (var c = 0; c < t; c++) r[a++] = n[i++] }
                return new A(r, t)
            }
            if (null === this.index) return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."), this;
            var e, n = new G,
                i = this.index.array,
                r = this.attributes;
            for (e in r) {
                var a = r[e];
                a = t(a, i), n.addAttribute(e, a)
            }
            var o = this.morphAttributes;
            for (e in o) {
                var s = [],
                    c = o[e];
                r = 0;
                for (var h = c.length; r < h; r++) a = c[r], a = t(a, i), s.push(a);
                n.morphAttributes[e] = s
            }
            for (i = this.groups, r = 0, e = i.length; r < e; r++) a = i[r], n.addGroup(a.start, a.count, a.materialIndex);
            return n
        },
        toJSON: function() {
            var t = { metadata: { version: 4.5, type: "BufferGeometry", generator: "BufferGeometry.toJSON" } };
            if (t.uuid = this.uuid, t.type = this.type, "" !== this.name && (t.name = this.name), 0 < Object.keys(this.userData).length && (t.userData = this.userData), void 0 !== this.parameters) { var e = this.parameters; for (h in e) void 0 !== e[h] && (t[h] = e[h]); return t }
            t.data = { attributes: {} }, null !== (e = this.index) && (t.data.index = { type: e.array.constructor.name, array: Array.prototype.slice.call(e.array) });
            var n = this.attributes;
            for (h in n) { e = n[h]; var i = { itemSize: e.itemSize, type: e.array.constructor.name, array: Array.prototype.slice.call(e.array), normalized: e.normalized }; "" !== e.name && (i.name = e.name), t.data.attributes[h] = i }
            n = {};
            var r = !1;
            for (h in this.morphAttributes) {
                for (var a = this.morphAttributes[h], o = [], s = 0, c = a.length; s < c; s++) e = a[s], i = { itemSize: e.itemSize, type: e.array.constructor.name, array: Array.prototype.slice.call(e.array), normalized: e.normalized }, "" !== e.name && (i.name = e.name), o.push(i);
                0 < o.length && (n[h] = o, r = !0)
            }
            r && (t.data.morphAttributes = n);
            var h = this.groups;
            return 0 < h.length && (t.data.groups = JSON.parse(JSON.stringify(h))), h = this.boundingSphere, null !== h && (t.data.boundingSphere = { center: h.center.toArray(), radius: h.radius }), t
        },
        clone: function() { return (new G).copy(this) },
        copy: function(t) {
            var e;
            this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingSphere = this.boundingBox = null, this.name = t.name;
            var n = t.index;
            null !== n && this.setIndex(n.clone()), n = t.attributes;
            for (o in n) this.addAttribute(o, n[o].clone());
            var i = t.morphAttributes;
            for (o in i) {
                var r = [],
                    a = i[o];
                for (n = 0, e = a.length; n < e; n++) r.push(a[n].clone());
                this.morphAttributes[o] = r
            }
            var o = t.groups;
            for (n = 0, e = o.length; n < e; n++) i = o[n], this.addGroup(i.start, i.count, i.materialIndex);
            return o = t.boundingBox, null !== o && (this.boundingBox = o.clone()), o = t.boundingSphere, null !== o && (this.boundingSphere = o.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, this
        },
        dispose: function() { this.dispatchEvent({ type: "dispose" }) }
    }), F.prototype = Object.create(T.prototype), F.prototype.constructor = F, H.prototype = Object.create(G.prototype), H.prototype.constructor = H, V.prototype = Object.create(T.prototype), V.prototype.constructor = V, k.prototype = Object.create(G.prototype), k.prototype.constructor = k;
    var ba = 0;
    j.prototype = Object.assign(Object.create(e.prototype), {
        constructor: j,
        isMaterial: !0,
        onBeforeCompile: function() {},
        setValues: function(t) {
            if (void 0 !== t)
                for (var e in t) {
                    var n = t[e];
                    if (void 0 === n) console.warn("THREE.Material: '" + e + "' parameter is undefined.");
                    else if ("shading" === e) console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = 1 === n;
                    else {
                        var i = this[e];
                        void 0 === i ? console.warn("THREE." + this.type + ": '" + e + "' is not a property of this material.") : i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[e] = n
                    }
                }
        },
        toJSON: function(t) {
            function e(t) {
                var e, n = [];
                for (e in t) {
                    var i = t[e];
                    delete i.metadata, n.push(i)
                }
                return n
            }
            var n = void 0 === t || "string" == typeof t;
            n && (t = { textures: {}, images: {} });
            var i = { metadata: { version: 4.5, type: "Material", generator: "Material.toJSON" } };
            return i.uuid = this.uuid, i.type = this.type, "" !== this.name && (i.name = this.name), this.color && this.color.isColor && (i.color = this.color.getHex()), void 0 !== this.roughness && (i.roughness = this.roughness), void 0 !== this.metalness && (i.metalness = this.metalness), this.emissive && this.emissive.isColor && (i.emissive = this.emissive.getHex()), 1 !== this.emissiveIntensity && (i.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (i.specular = this.specular.getHex()), void 0 !== this.shininess && (i.shininess = this.shininess), void 0 !== this.clearCoat && (i.clearCoat = this.clearCoat), void 0 !== this.clearCoatRoughness && (i.clearCoatRoughness = this.clearCoatRoughness), this.map && this.map.isTexture && (i.map = this.map.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (i.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (i.lightMap = this.lightMap.toJSON(t).uuid), this.aoMap && this.aoMap.isTexture && (i.aoMap = this.aoMap.toJSON(t).uuid, i.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (i.bumpMap = this.bumpMap.toJSON(t).uuid, i.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (i.normalMap = this.normalMap.toJSON(t).uuid, i.normalMapType = this.normalMapType, i.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (i.displacementMap = this.displacementMap.toJSON(t).uuid, i.displacementScale = this.displacementScale, i.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (i.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (i.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (i.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (i.specularMap = this.specularMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (i.envMap = this.envMap.toJSON(t).uuid, i.reflectivity = this.reflectivity, void 0 !== this.combine && (i.combine = this.combine), void 0 !== this.envMapIntensity && (i.envMapIntensity = this.envMapIntensity)), this.gradientMap && this.gradientMap.isTexture && (i.gradientMap = this.gradientMap.toJSON(t).uuid), void 0 !== this.size && (i.size = this.size), void 0 !== this.sizeAttenuation && (i.sizeAttenuation = this.sizeAttenuation), 1 !== this.blending && (i.blending = this.blending), !0 === this.flatShading && (i.flatShading = this.flatShading), 0 !== this.side && (i.side = this.side), 0 !== this.vertexColors && (i.vertexColors = this.vertexColors), 1 > this.opacity && (i.opacity = this.opacity), !0 === this.transparent && (i.transparent = this.transparent), i.depthFunc = this.depthFunc, i.depthTest = this.depthTest, i.depthWrite = this.depthWrite, 0 !== this.rotation && (i.rotation = this.rotation), !0 === this.polygonOffset && (i.polygonOffset = !0), 0 !== this.polygonOffsetFactor && (i.polygonOffsetFactor = this.polygonOffsetFactor), 0 !== this.polygonOffsetUnits && (i.polygonOffsetUnits = this.polygonOffsetUnits), 1 !== this.linewidth && (i.linewidth = this.linewidth), void 0 !== this.dashSize && (i.dashSize = this.dashSize), void 0 !== this.gapSize && (i.gapSize = this.gapSize), void 0 !== this.scale && (i.scale = this.scale), !0 === this.dithering && (i.dithering = !0), 0 < this.alphaTest && (i.alphaTest = this.alphaTest), !0 === this.premultipliedAlpha && (i.premultipliedAlpha = this.premultipliedAlpha), !0 === this.wireframe && (i.wireframe = this.wireframe), 1 < this.wireframeLinewidth && (i.wireframeLinewidth = this.wireframeLinewidth), "round" !== this.wireframeLinecap && (i.wireframeLinecap = this.wireframeLinecap), "round" !== this.wireframeLinejoin && (i.wireframeLinejoin = this.wireframeLinejoin), !0 === this.morphTargets && (i.morphTargets = !0), !0 === this.skinning && (i.skinning = !0), !1 === this.visible && (i.visible = !1), "{}" !== JSON.stringify(this.userData) && (i.userData = this.userData), n && (n = e(t.textures), t = e(t.images), 0 < n.length && (i.textures = n), 0 < t.length && (i.images = t)), i
        },
        clone: function() { return (new this.constructor).copy(this) },
        copy: function(t) {
            this.name = t.name, this.fog = t.fog, this.lights = t.lights, this.blending = t.blending, this.side = t.side, this.flatShading = t.flatShading, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.premultipliedAlpha = t.premultipliedAlpha, this.visible = t.visible, this.userData = JSON.parse(JSON.stringify(t.userData)), this.clipShadows = t.clipShadows, this.clipIntersection = t.clipIntersection;
            var e = t.clippingPlanes,
                n = null;
            if (null !== e) {
                var i = e.length;
                n = Array(i);
                for (var r = 0; r !== i; ++r) n[r] = e[r].clone()
            }
            return this.clippingPlanes = n, this.shadowSide = t.shadowSide, this
        },
        dispose: function() { this.dispatchEvent({ type: "dispose" }) }
    }), W.prototype = Object.create(j.prototype), W.prototype.constructor = W, W.prototype.isShaderMaterial = !0, W.prototype.copy = function(t) { return j.prototype.copy.call(this, t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = v(t.uniforms), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.lights = t.lights, this.clipping = t.clipping, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this.extensions = t.extensions, this }, W.prototype.toJSON = function(t) {
        var e = j.prototype.toJSON.call(this, t);
        e.uniforms = {};
        for (var n in this.uniforms) {
            var i = this.uniforms[n].value;
            e.uniforms[n] = i && i.isTexture ? { type: "t", value: i.toJSON(t).uuid } : i && i.isColor ? { type: "c", value: i.getHex() } : i && i.isVector2 ? { type: "v2", value: i.toArray() } : i && i.isVector3 ? { type: "v3", value: i.toArray() } : i && i.isVector4 ? { type: "v4", value: i.toArray() } : i && i.isMatrix3 ? { type: "m3", value: i.toArray() } : i && i.isMatrix4 ? { type: "m4", value: i.toArray() } : { value: i }
        }
        0 < Object.keys(this.defines).length && (e.defines = this.defines), e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader, t = {};
        for (var r in this.extensions) !0 === this.extensions[r] && (t[r] = !0);
        return 0 < Object.keys(t).length && (e.extensions = t), e
    }, Object.assign(q.prototype, {
        set: function(t, e) { return this.origin.copy(t), this.direction.copy(e), this },
        clone: function() { return (new this.constructor).copy(this) },
        copy: function(t) { return this.origin.copy(t.origin), this.direction.copy(t.direction), this },
        at: function(t, e) { return void 0 === e && (console.warn("THREE.Ray: .at() target is now required"), e = new a), e.copy(this.direction).multiplyScalar(t).add(this.origin) },
        lookAt: function(t) { return this.direction.copy(t).sub(this.origin).normalize(), this },
        recast: function() { var t = new a; return function(e) { return this.origin.copy(this.at(e, t)), this } }(),
        closestPointToPoint: function(t, e) { return void 0 === e && (console.warn("THREE.Ray: .closestPointToPoint() target is now required"), e = new a), e.subVectors(t, this.origin), t = e.dot(this.direction), 0 > t ? e.copy(this.origin) : e.copy(this.direction).multiplyScalar(t).add(this.origin) },
        distanceToPoint: function(t) { return Math.sqrt(this.distanceSqToPoint(t)) },
        distanceSqToPoint: function() { var t = new a; return function(e) { var n = t.subVectors(e, this.origin).dot(this.direction); return 0 > n ? this.origin.distanceToSquared(e) : (t.copy(this.direction).multiplyScalar(n).add(this.origin), t.distanceToSquared(e)) } }(),
        distanceSqToSegment: function() {
            var t = new a,
                e = new a,
                n = new a;
            return function(i, r, a, o) {
                t.copy(i).add(r).multiplyScalar(.5), e.copy(r).sub(i).normalize(), n.copy(this.origin).sub(t);
                var s = .5 * i.distanceTo(r),
                    c = -this.direction.dot(e),
                    h = n.dot(this.direction),
                    l = -n.dot(e),
                    u = n.lengthSq(),
                    p = Math.abs(1 - c * c);
                if (0 < p) {
                    i = c * l - h, r = c * h - l;
                    var d = s * p;
                    0 <= i ? r >= -d ? r <= d ? (s = 1 / p, i *= s, r *= s, c = i * (i + c * r + 2 * h) + r * (c * i + r + 2 * l) + u) : (r = s, i = Math.max(0, -(c * r + h)), c = -i * i + r * (r + 2 * l) + u) : (r = -s, i = Math.max(0, -(c * r + h)), c = -i * i + r * (r + 2 * l) + u) : r <= -d ? (i = Math.max(0, -(-c * s + h)), r = 0 < i ? -s : Math.min(Math.max(-s, -l), s), c = -i * i + r * (r + 2 * l) + u) : r <= d ? (i = 0, r = Math.min(Math.max(-s, -l), s), c = r * (r + 2 * l) + u) : (i = Math.max(0, -(c * s + h)), r = 0 < i ? s : Math.min(Math.max(-s, -l), s), c = -i * i + r * (r + 2 * l) + u)
                } else r = 0 < c ? -s : s, i = Math.max(0, -(c * r + h)), c = -i * i + r * (r + 2 * l) + u;
                return a && a.copy(this.direction).multiplyScalar(i).add(this.origin), o && o.copy(e).multiplyScalar(r).add(t), c
            }
        }(),
        intersectSphere: function() {
            var t = new a;
            return function(e, n) {
                t.subVectors(e.center, this.origin);
                var i = t.dot(this.direction),
                    r = t.dot(t) - i * i;
                return e = e.radius * e.radius, r > e ? null : (e = Math.sqrt(e - r), r = i - e, i += e, 0 > r && 0 > i ? null : 0 > r ? this.at(i, n) : this.at(r, n))
            }
        }(),
        intersectsSphere: function(t) { return this.distanceSqToPoint(t.center) <= t.radius * t.radius },
        distanceToPlane: function(t) { var e = t.normal.dot(this.direction); return 0 === e ? 0 === t.distanceToPoint(this.origin) ? 0 : null : (t = -(this.origin.dot(t.normal) + t.constant) / e, 0 <= t ? t : null) },
        intersectPlane: function(t, e) { return t = this.distanceToPlane(t), null === t ? null : this.at(t, e) },
        intersectsPlane: function(t) { var e = t.distanceToPoint(this.origin); return 0 === e || 0 > t.normal.dot(this.direction) * e },
        intersectBox: function(t, e) {
            var n = 1 / this.direction.x,
                i = 1 / this.direction.y,
                r = 1 / this.direction.z,
                a = this.origin;
            if (0 <= n) {
                var o = (t.min.x - a.x) * n;
                n *= t.max.x - a.x
            } else o = (t.max.x - a.x) * n, n *= t.min.x - a.x;
            if (0 <= i) {
                var s = (t.min.y - a.y) * i;
                i *= t.max.y - a.y
            } else s = (t.max.y - a.y) * i, i *= t.min.y - a.y;
            return o > i || s > n ? null : ((s > o || o !== o) && (o = s), (i < n || n !== n) && (n = i), 0 <= r ? (s = (t.min.z - a.z) * r, t = (t.max.z - a.z) * r) : (s = (t.max.z - a.z) * r, t = (t.min.z - a.z) * r), o > t || s > n ? null : ((s > o || o !== o) && (o = s), (t < n || n !== n) && (n = t), 0 > n ? null : this.at(0 <= o ? o : n, e)))
        },
        intersectsBox: function() { var t = new a; return function(e) { return null !== this.intersectBox(e, t) } }(),
        intersectTriangle: function() {
            var t = new a,
                e = new a,
                n = new a,
                i = new a;
            return function(r, a, o, s, c) {
                if (e.subVectors(a, r), n.subVectors(o, r), i.crossVectors(e, n), 0 < (a = this.direction.dot(i))) {
                    if (s) return null;
                    s = 1
                } else {
                    if (!(0 > a)) return null;
                    s = -1, a = -a
                }
                return t.subVectors(this.origin, r), 0 > (r = s * this.direction.dot(n.crossVectors(t, n))) ? null : 0 > (o = s * this.direction.dot(e.cross(t))) || r + o > a ? null : (r = -s * t.dot(i), 0 > r ? null : this.at(r / a, c))
            }
        }(),
        applyMatrix4: function(t) { return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this },
        equals: function(t) { return t.origin.equals(this.origin) && t.direction.equals(this.direction) }
    }), Object.assign(X, {
        getNormal: function() { var t = new a; return function(e, n, i, r) { return void 0 === r && (console.warn("THREE.Triangle: .getNormal() target is now required"), r = new a), r.subVectors(i, n), t.subVectors(e, n), r.cross(t), e = r.lengthSq(), 0 < e ? r.multiplyScalar(1 / Math.sqrt(e)) : r.set(0, 0, 0) } }(),
        getBarycoord: function() {
            var t = new a,
                e = new a,
                n = new a;
            return function(i, r, o, s, c) {
                t.subVectors(s, r), e.subVectors(o, r), n.subVectors(i, r), i = t.dot(t), r = t.dot(e), o = t.dot(n);
                var h = e.dot(e);
                s = e.dot(n);
                var l = i * h - r * r;
                return void 0 === c && (console.warn("THREE.Triangle: .getBarycoord() target is now required"), c = new a), 0 === l ? c.set(-2, -1, -1) : (l = 1 / l, h = (h * o - r * s) * l, i = (i * s - r * o) * l, c.set(1 - h - i, i, h))
            }
        }(),
        containsPoint: function() { var t = new a; return function(e, n, i, r) { return X.getBarycoord(e, n, i, r, t), 0 <= t.x && 0 <= t.y && 1 >= t.x + t.y } }(),
        getUV: function() { var t = new a; return function(e, n, i, r, a, o, s, c) { return this.getBarycoord(e, n, i, r, t), c.set(0, 0), c.addScaledVector(a, t.x), c.addScaledVector(o, t.y), c.addScaledVector(s, t.z), c } }()
    }), Object.assign(X.prototype, {
        set: function(t, e, n) { return this.a.copy(t), this.b.copy(e), this.c.copy(n), this },
        setFromPointsAndIndices: function(t, e, n, i) { return this.a.copy(t[e]), this.b.copy(t[n]), this.c.copy(t[i]), this },
        clone: function() { return (new this.constructor).copy(this) },
        copy: function(t) { return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this },
        getArea: function() {
            var t = new a,
                e = new a;
            return function() { return t.subVectors(this.c, this.b), e.subVectors(this.a, this.b), .5 * t.cross(e).length() }
        }(),
        getMidpoint: function(t) { return void 0 === t && (console.warn("THREE.Triangle: .getMidpoint() target is now required"), t = new a), t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3) },
        getNormal: function(t) { return X.getNormal(this.a, this.b, this.c, t) },
        getPlane: function(t) { return void 0 === t && (console.warn("THREE.Triangle: .getPlane() target is now required"), t = new a), t.setFromCoplanarPoints(this.a, this.b, this.c) },
        getBarycoord: function(t, e) { return X.getBarycoord(t, this.a, this.b, this.c, e) },
        containsPoint: function(t) { return X.containsPoint(t, this.a, this.b, this.c) },
        getUV: function(t, e, n, i, r) { return X.getUV(t, this.a, this.b, this.c, e, n, i, r) },
        intersectsBox: function(t) { return t.intersectsTriangle(this) },
        closestPointToPoint: function() {
            var t = new a,
                e = new a,
                n = new a,
                i = new a,
                r = new a,
                o = new a;
            return function(s, c) {
                void 0 === c && (console.warn("THREE.Triangle: .closestPointToPoint() target is now required"), c = new a);
                var h = this.a,
                    l = this.b,
                    u = this.c;
                t.subVectors(l, h), e.subVectors(u, h), i.subVectors(s, h);
                var p = t.dot(i),
                    d = e.dot(i);
                if (0 >= p && 0 >= d) return c.copy(h);
                r.subVectors(s, l);
                var f = t.dot(r),
                    m = e.dot(r);
                if (0 <= f && m <= f) return c.copy(l);
                var g = p * m - f * d;
                if (0 >= g && 0 <= p && 0 >= f) return l = p / (p - f), c.copy(h).addScaledVector(t, l);
                o.subVectors(s, u), s = t.dot(o);
                var v = e.dot(o);
                return 0 <= v && s <= v ? c.copy(u) : 0 >= (p = s * d - p * v) && 0 <= d && 0 >= v ? (g = d / (d - v), c.copy(h).addScaledVector(e, g)) : 0 >= (d = f * v - s * m) && 0 <= m - f && 0 <= s - v ? (n.subVectors(u, l), g = (m - f) / (m - f + (s - v)), c.copy(l).addScaledVector(n, g)) : (u = 1 / (d + p + g), l = p * u, g *= u, c.copy(h).addScaledVector(t, l).addScaledVector(e, g))
            }
        }(),
        equals: function(t) { return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c) }
    }), Y.prototype = Object.create(j.prototype), Y.prototype.constructor = Y, Y.prototype.isMeshBasicMaterial = !0, Y.prototype.copy = function(t) { return j.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this }, J.prototype = Object.assign(Object.create(S.prototype), {
        constructor: J,
        isMesh: !0,
        setDrawMode: function(t) { this.drawMode = t },
        copy: function(t) { return S.prototype.copy.call(this, t), this.drawMode = t.drawMode, void 0 !== t.morphTargetInfluences && (this.morphTargetInfluences = t.morphTargetInfluences.slice()), void 0 !== t.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)), this },
        updateMorphTargets: function() {
            var t = this.geometry;
            if (t.isBufferGeometry) {
                t = t.morphAttributes;
                var e = Object.keys(t);
                if (0 < e.length) {
                    var n = t[e[0]];
                    if (void 0 !== n)
                        for (this.morphTargetInfluences = [], this.morphTargetDictionary = {}, t = 0, e = n.length; t < e; t++) {
                            var i = n[t].name || String(t);
                            this.morphTargetInfluences.push(0), this.morphTargetDictionary[i] = t
                        }
                }
            } else void 0 !== (t = t.morphTargets) && 0 < t.length && console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
        },
        raycast: function() {
            function t(t, e, n, i, r, a, o, s) { return null === (1 === e.side ? i.intersectTriangle(o, a, r, !0, s) : i.intersectTriangle(r, a, o, 2 !== e.side, s)) ? null : (x.copy(s), x.applyMatrix4(t.matrixWorld), e = n.ray.origin.distanceTo(x), e < n.near || e > n.far ? null : { distance: e, point: x.clone(), object: t }) }

            function e(e, i, r, a, o, s, u, p, d) { return c.fromBufferAttribute(o, u), h.fromBufferAttribute(o, p), l.fromBufferAttribute(o, d), (e = t(e, i, r, a, c, h, l, y)) && (s && (m.fromBufferAttribute(s, u), g.fromBufferAttribute(s, p), v.fromBufferAttribute(s, d), e.uv = X.getUV(y, c, h, l, m, g, v, new n)), s = new _(u, p, d), X.getNormal(c, h, l, s.normal), e.face = s), e }
            var r = new i,
                o = new q,
                s = new f,
                c = new a,
                h = new a,
                l = new a,
                u = new a,
                p = new a,
                d = new a,
                m = new n,
                g = new n,
                v = new n,
                y = new a,
                x = new a;
            return function(i, a) {
                var f = this.geometry,
                    x = this.material,
                    b = this.matrixWorld;
                if (void 0 !== x && (null === f.boundingSphere && f.computeBoundingSphere(), s.copy(f.boundingSphere), s.applyMatrix4(b), !1 !== i.ray.intersectsSphere(s) && (r.getInverse(b), o.copy(i.ray).applyMatrix4(r), null === f.boundingBox || !1 !== o.intersectsBox(f.boundingBox))))
                    if (f.isBufferGeometry) {
                        var w = f.index,
                            _ = f.attributes.position,
                            M = f.attributes.uv,
                            E = f.groups;
                        f = f.drawRange;
                        var S, T;
                        if (null !== w)
                            if (Array.isArray(x)) {
                                var A = 0;
                                for (S = E.length; A < S; A++) {
                                    var L = E[A],
                                        R = x[L.materialIndex],
                                        P = Math.max(L.start, f.start);
                                    for (T = b = Math.min(L.start + L.count, f.start + f.count); P < T; P += 3) {
                                        b = w.getX(P);
                                        var C = w.getX(P + 1),
                                            I = w.getX(P + 2);
                                        (b = e(this, R, i, o, _, M, b, C, I)) && (b.faceIndex = Math.floor(P / 3), b.face.materialIndex = L.materialIndex, a.push(b))
                                    }
                                }
                            } else
                                for (P = Math.max(0, f.start), b = Math.min(w.count, f.start + f.count), A = P, S = b; A < S; A += 3) b = w.getX(A), C = w.getX(A + 1), I = w.getX(A + 2), (b = e(this, x, i, o, _, M, b, C, I)) && (b.faceIndex = Math.floor(A / 3), a.push(b));
                        else if (void 0 !== _)
                            if (Array.isArray(x))
                                for (A = 0, S = E.length; A < S; A++)
                                    for (L = E[A], R = x[L.materialIndex], P = Math.max(L.start, f.start), T = b = Math.min(L.start + L.count, f.start + f.count); P < T; P += 3) b = P, C = P + 1, I = P + 2, (b = e(this, R, i, o, _, M, b, C, I)) && (b.faceIndex = Math.floor(P / 3), b.face.materialIndex = L.materialIndex, a.push(b));
                            else
                                for (P = Math.max(0, f.start), b = Math.min(_.count, f.start + f.count), A = P, S = b; A < S; A += 3) b = A, C = A + 1, I = A + 2, (b = e(this, x, i, o, _, M, b, C, I)) && (b.faceIndex = Math.floor(A / 3), a.push(b))
                    } else if (f.isGeometry)
                    for (_ = Array.isArray(x), M = f.vertices, E = f.faces, b = f.faceVertexUvs[0], 0 < b.length && (w = b), R = 0, P = E.length; R < P; R++)
                        if (T = E[R], void 0 !== (b = _ ? x[T.materialIndex] : x)) {
                            if (A = M[T.a], S = M[T.b], L = M[T.c], !0 === b.morphTargets) {
                                C = f.morphTargets, I = this.morphTargetInfluences, c.set(0, 0, 0), h.set(0, 0, 0), l.set(0, 0, 0);
                                for (var O = 0, D = C.length; O < D; O++) {
                                    var N = I[O];
                                    if (0 !== N) {
                                        var B = C[O].vertices;
                                        c.addScaledVector(u.subVectors(B[T.a], A), N), h.addScaledVector(p.subVectors(B[T.b], S), N), l.addScaledVector(d.subVectors(B[T.c], L), N)
                                    }
                                }
                                c.add(A), h.add(S), l.add(L), A = c, S = h, L = l
                            }(b = t(this, b, i, o, A, S, L, y)) && (w && w[R] && (C = w[R], m.copy(C[0]), g.copy(C[1]), v.copy(C[2]), b.uv = X.getUV(y, A, S, L, m, g, v, new n)), b.face = T, b.faceIndex = R, a.push(b))
                        }
            }
        }(),
        clone: function() { return new this.constructor(this.geometry, this.material).copy(this) }
    }), st.prototype = Object.create(s.prototype), st.prototype.constructor = st, st.prototype.isCubeTexture = !0, Object.defineProperty(st.prototype, "images", { get: function() { return this.image }, set: function(t) { this.image = t } }), ct.prototype = Object.create(s.prototype), ct.prototype.constructor = ct, ct.prototype.isDataTexture3D = !0;
    var wa = new s,
        _a = new ct,
        Ma = new st,
        Ea = [],
        Sa = [],
        Ta = new Float32Array(16),
        Aa = new Float32Array(9),
        La = new Float32Array(4);
    Ft.prototype.updateCache = function(t) {
        var e = this.cache;
        t instanceof Float32Array && e.length !== t.length && (this.cache = new Float32Array(t.length)), ut(e, t)
    }, Ht.prototype.setValue = function(t, e, n) {
        for (var i = this.seq, r = 0, a = i.length; r !== a; ++r) {
            var o = i[r];
            o.setValue(t, e[o.id], n)
        }
    };
    var Ra = /([\w\d_]+)(\])?(\[|\.)?/g;
    Vt.prototype.setValue = function(t, e, n) { void 0 !== (e = this.map[e]) && e.setValue(t, n, this.renderer) }, Vt.prototype.setOptional = function(t, e, n) { void 0 !== (e = e[n]) && this.setValue(t, n, e) }, Vt.upload = function(t, e, n, i) {
        for (var r = 0, a = e.length; r !== a; ++r) {
            var o = e[r],
                s = n[o.id];
            !1 !== s.needsUpdate && o.setValue(t, s.value, i)
        }
    }, Vt.seqWithValue = function(t, e) {
        for (var n = [], i = 0, r = t.length; i !== r; ++i) {
            var a = t[i];
            a.id in e && n.push(a)
        }
        return n
    };
    var Pa = 0,
        Ca = 0;
    de.prototype = Object.create(j.prototype), de.prototype.constructor = de, de.prototype.isMeshDepthMaterial = !0, de.prototype.copy = function(t) { return j.prototype.copy.call(this, t), this.depthPacking = t.depthPacking, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this }, fe.prototype = Object.create(j.prototype), fe.prototype.constructor = fe, fe.prototype.isMeshDistanceMaterial = !0, fe.prototype.copy = function(t) { return j.prototype.copy.call(this, t), this.referencePosition.copy(t.referencePosition), this.nearDistance = t.nearDistance, this.farDistance = t.farDistance, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this }, xe.prototype = Object.assign(Object.create(S.prototype), { constructor: xe, isGroup: !0 }), be.prototype = Object.assign(Object.create(S.prototype), { constructor: be, isCamera: !0, copy: function(t, e) { return S.prototype.copy.call(this, t, e), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this.projectionMatrixInverse.copy(t.projectionMatrixInverse), this }, getWorldDirection: function(t) { void 0 === t && (console.warn("THREE.Camera: .getWorldDirection() target is now required"), t = new a), this.updateMatrixWorld(!0); var e = this.matrixWorld.elements; return t.set(-e[8], -e[9], -e[10]).normalize() }, updateMatrixWorld: function(t) { S.prototype.updateMatrixWorld.call(this, t), this.matrixWorldInverse.getInverse(this.matrixWorld) }, clone: function() { return (new this.constructor).copy(this) } }), we.prototype = Object.assign(Object.create(be.prototype), {
        constructor: we,
        isPerspectiveCamera: !0,
        copy: function(t, e) { return be.prototype.copy.call(this, t, e), this.fov = t.fov, this.zoom = t.zoom, this.near = t.near, this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view = null === t.view ? null : Object.assign({}, t.view), this.filmGauge = t.filmGauge, this.filmOffset = t.filmOffset, this },
        setFocalLength: function(t) { t = .5 * this.getFilmHeight() / t, this.fov = 2 * ca.RAD2DEG * Math.atan(t), this.updateProjectionMatrix() },
        getFocalLength: function() { var t = Math.tan(.5 * ca.DEG2RAD * this.fov); return .5 * this.getFilmHeight() / t },
        getEffectiveFOV: function() { return 2 * ca.RAD2DEG * Math.atan(Math.tan(.5 * ca.DEG2RAD * this.fov) / this.zoom) },
        getFilmWidth: function() { return this.filmGauge * Math.min(this.aspect, 1) },
        getFilmHeight: function() { return this.filmGauge / Math.max(this.aspect, 1) },
        setViewOffset: function(t, e, n, i, r, a) { this.aspect = t / e, null === this.view && (this.view = { enabled: !0, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = a, this.updateProjectionMatrix() },
        clearViewOffset: function() { null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix() },
        updateProjectionMatrix: function() {
            var t = this.near,
                e = t * Math.tan(.5 * ca.DEG2RAD * this.fov) / this.zoom,
                n = 2 * e,
                i = this.aspect * n,
                r = -.5 * i,
                a = this.view;
            if (null !== this.view && this.view.enabled) {
                var o = a.fullWidth,
                    s = a.fullHeight;
                r += a.offsetX * i / o, e -= a.offsetY * n / s, i *= a.width / o, n *= a.height / s
            }
            a = this.filmOffset, 0 !== a && (r += t * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + i, e, e - n, t, this.far), this.projectionMatrixInverse.getInverse(this.projectionMatrix)
        },
        toJSON: function(t) { return t = S.prototype.toJSON.call(this, t), t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, null !== this.view && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t }
    }), _e.prototype = Object.assign(Object.create(we.prototype), { constructor: _e, isArrayCamera: !0 });
    var Ia = new a,
        Oa = new a;
    Object.assign(Ae.prototype, { isFogExp2: !0, clone: function() { return new Ae(this.color, this.density) }, toJSON: function() { return { type: "FogExp2", color: this.color.getHex(), density: this.density } } }), Object.assign(Le.prototype, { isFog: !0, clone: function() { return new Le(this.color, this.near, this.far) }, toJSON: function() { return { type: "Fog", color: this.color.getHex(), near: this.near, far: this.far } } }), Re.prototype = Object.assign(Object.create(S.prototype), { constructor: Re, isScene: !0, copy: function(t, e) { return S.prototype.copy.call(this, t, e), null !== t.background && (this.background = t.background.clone()), null !== t.fog && (this.fog = t.fog.clone()), null !== t.overrideMaterial && (this.overrideMaterial = t.overrideMaterial.clone()), this.autoUpdate = t.autoUpdate, this.matrixAutoUpdate = t.matrixAutoUpdate, this }, toJSON: function(t) { var e = S.prototype.toJSON.call(this, t); return null !== this.background && (e.object.background = this.background.toJSON(t)), null !== this.fog && (e.object.fog = this.fog.toJSON()), e }, dispose: function() { this.dispatchEvent({ type: "dispose" }) } }), Object.defineProperty(Pe.prototype, "needsUpdate", { set: function(t) {!0 === t && this.version++ } }), Object.assign(Pe.prototype, { isInterleavedBuffer: !0, onUploadCallback: function() {}, setArray: function(t) { if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array."); return this.count = void 0 !== t ? t.length / this.stride : 0, this.array = t, this }, setDynamic: function(t) { return this.dynamic = t, this }, copy: function(t) { return this.array = new t.array.constructor(t.array), this.count = t.count, this.stride = t.stride, this.dynamic = t.dynamic, this }, copyAt: function(t, e, n) { t *= this.stride, n *= e.stride; for (var i = 0, r = this.stride; i < r; i++) this.array[t + i] = e.array[n + i]; return this }, set: function(t, e) { return void 0 === e && (e = 0), this.array.set(t, e), this }, clone: function() { return (new this.constructor).copy(this) }, onUpload: function(t) { return this.onUploadCallback = t, this } }), Object.defineProperties(Ce.prototype, { count: { get: function() { return this.data.count } }, array: { get: function() { return this.data.array } } }), Object.assign(Ce.prototype, { isInterleavedBufferAttribute: !0, setX: function(t, e) { return this.data.array[t * this.data.stride + this.offset] = e, this }, setY: function(t, e) { return this.data.array[t * this.data.stride + this.offset + 1] = e, this }, setZ: function(t, e) { return this.data.array[t * this.data.stride + this.offset + 2] = e, this }, setW: function(t, e) { return this.data.array[t * this.data.stride + this.offset + 3] = e, this }, getX: function(t) { return this.data.array[t * this.data.stride + this.offset] }, getY: function(t) { return this.data.array[t * this.data.stride + this.offset + 1] }, getZ: function(t) { return this.data.array[t * this.data.stride + this.offset + 2] }, getW: function(t) { return this.data.array[t * this.data.stride + this.offset + 3] }, setXY: function(t, e, n) { return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = n, this }, setXYZ: function(t, e, n, i) { return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = n, this.data.array[t + 2] = i, this }, setXYZW: function(t, e, n, i, r) { return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = n, this.data.array[t + 2] = i, this.data.array[t + 3] = r, this } }), Ie.prototype = Object.create(j.prototype), Ie.prototype.constructor = Ie, Ie.prototype.isSpriteMaterial = !0, Ie.prototype.copy = function(t) { return j.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.rotation = t.rotation, this.sizeAttenuation = t.sizeAttenuation, this };
    var Da;
    Oe.prototype = Object.assign(Object.create(S.prototype), {
        constructor: Oe,
        isSprite: !0,
        raycast: function() {
            function t(t, e, n, i, r, a) { s.subVectors(t, n).addScalar(.5).multiply(i), void 0 !== r ? (c.x = a * s.x - r * s.y, c.y = r * s.x + a * s.y) : c.copy(s), t.copy(e), t.x += c.x, t.y += c.y, t.applyMatrix4(h) }
            var e = new a,
                r = new a,
                o = new a,
                s = new n,
                c = new n,
                h = new i,
                l = new a,
                u = new a,
                p = new a,
                d = new n,
                f = new n,
                m = new n;
            return function(i, a) {
                r.setFromMatrixScale(this.matrixWorld), h.getInverse(this.modelViewMatrix).premultiply(this.matrixWorld), o.setFromMatrixPosition(this.modelViewMatrix);
                var s = this.material.rotation;
                if (0 !== s) var c = Math.cos(s),
                    g = Math.sin(s);
                s = this.center, t(l.set(-.5, -.5, 0), o, s, r, g, c), t(u.set(.5, -.5, 0), o, s, r, g, c), t(p.set(.5, .5, 0), o, s, r, g, c), d.set(0, 0), f.set(1, 0), m.set(1, 1);
                var v = i.ray.intersectTriangle(l, u, p, !1, e);
                null === v && (t(u.set(-.5, .5, 0), o, s, r, g, c), f.set(0, 1), null === (v = i.ray.intersectTriangle(l, p, u, !1, e))) || (g = i.ray.origin.distanceTo(e)) < i.near || g > i.far || a.push({ distance: g, point: e.clone(), uv: X.getUV(e, l, u, p, d, f, m, new n), face: null, object: this })
            }
        }(),
        clone: function() { return new this.constructor(this.material).copy(this) },
        copy: function(t) { return S.prototype.copy.call(this, t), void 0 !== t.center && this.center.copy(t.center), this }
    }), De.prototype = Object.assign(Object.create(S.prototype), {
        constructor: De,
        copy: function(t) {
            S.prototype.copy.call(this, t, !1), t = t.levels;
            for (var e = 0, n = t.length; e < n; e++) {
                var i = t[e];
                this.addLevel(i.object.clone(), i.distance)
            }
            return this
        },
        addLevel: function(t, e) {
            void 0 === e && (e = 0), e = Math.abs(e);
            for (var n = this.levels, i = 0; i < n.length && !(e < n[i].distance); i++);
            n.splice(i, 0, { distance: e, object: t }), this.add(t)
        },
        getObjectForDistance: function(t) { for (var e = this.levels, n = 1, i = e.length; n < i && !(t < e[n].distance); n++); return e[n - 1].object },
        raycast: function() {
            var t = new a;
            return function(e, n) {
                t.setFromMatrixPosition(this.matrixWorld);
                var i = e.ray.origin.distanceTo(t);
                this.getObjectForDistance(i).raycast(e, n)
            }
        }(),
        update: function() {
            var t = new a,
                e = new a;
            return function(n) { var i = this.levels; if (1 < i.length) { t.setFromMatrixPosition(n.matrixWorld), e.setFromMatrixPosition(this.matrixWorld), n = t.distanceTo(e), i[0].object.visible = !0; for (var r = 1, a = i.length; r < a && n >= i[r].distance; r++) i[r - 1].object.visible = !1, i[r].object.visible = !0; for (; r < a; r++) i[r].object.visible = !1 } }
        }(),
        toJSON: function(t) {
            t = S.prototype.toJSON.call(this, t), t.object.levels = [];
            for (var e = this.levels, n = 0, i = e.length; n < i; n++) {
                var r = e[n];
                t.object.levels.push({ object: r.object.uuid, distance: r.distance })
            }
            return t
        }
    }), Ne.prototype = Object.assign(Object.create(J.prototype), {
        constructor: Ne,
        isSkinnedMesh: !0,
        bind: function(t, e) { this.skeleton = t, void 0 === e && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), e = this.matrixWorld), this.bindMatrix.copy(e), this.bindMatrixInverse.getInverse(e) },
        pose: function() { this.skeleton.pose() },
        normalizeSkinWeights: function() {
            for (var t = new c, e = this.geometry.attributes.skinWeight, n = 0, i = e.count; n < i; n++) {
                t.x = e.getX(n), t.y = e.getY(n), t.z = e.getZ(n), t.w = e.getW(n);
                var r = 1 / t.manhattanLength();
                Infinity !== r ? t.multiplyScalar(r) : t.set(1, 0, 0, 0), e.setXYZW(n, t.x, t.y, t.z, t.w)
            }
        },
        updateMatrixWorld: function(t) { J.prototype.updateMatrixWorld.call(this, t), "attached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.matrixWorld) : "detached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.bindMatrix) : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode) },
        clone: function() { return new this.constructor(this.geometry, this.material).copy(this) }
    }), Object.assign(Be.prototype, {
        calculateInverses: function() {
            this.boneInverses = [];
            for (var t = 0, e = this.bones.length; t < e; t++) {
                var n = new i;
                this.bones[t] && n.getInverse(this.bones[t].matrixWorld), this.boneInverses.push(n)
            }
        },
        pose: function() { var t, e, n = 0; for (e = this.bones.length; n < e; n++)(t = this.bones[n]) && t.matrixWorld.getInverse(this.boneInverses[n]); for (n = 0, e = this.bones.length; n < e; n++)(t = this.bones[n]) && (t.parent && t.parent.isBone ? (t.matrix.getInverse(t.parent.matrixWorld), t.matrix.multiply(t.matrixWorld)) : t.matrix.copy(t.matrixWorld), t.matrix.decompose(t.position, t.quaternion, t.scale)) },
        update: function() {
            var t = new i,
                e = new i;
            return function() {
                for (var n = this.bones, i = this.boneInverses, r = this.boneMatrices, a = this.boneTexture, o = 0, s = n.length; o < s; o++) t.multiplyMatrices(n[o] ? n[o].matrixWorld : e, i[o]), t.toArray(r, 16 * o);
                void 0 !== a && (a.needsUpdate = !0)
            }
        }(),
        clone: function() { return new Be(this.bones, this.boneInverses) },
        getBoneByName: function(t) { for (var e = 0, n = this.bones.length; e < n; e++) { var i = this.bones[e]; if (i.name === t) return i } }
    }), ze.prototype = Object.assign(Object.create(S.prototype), { constructor: ze, isBone: !0 }), Ue.prototype = Object.create(j.prototype), Ue.prototype.constructor = Ue, Ue.prototype.isLineBasicMaterial = !0, Ue.prototype.copy = function(t) { return j.prototype.copy.call(this, t), this.color.copy(t.color), this.linewidth = t.linewidth, this.linecap = t.linecap, this.linejoin = t.linejoin, this }, Ge.prototype = Object.assign(Object.create(S.prototype), {
        constructor: Ge,
        isLine: !0,
        computeLineDistances: function() {
            var t = new a,
                e = new a;
            return function() {
                var n = this.geometry;
                if (n.isBufferGeometry)
                    if (null === n.index) {
                        for (var i = n.attributes.position, r = [0], a = 1, o = i.count; a < o; a++) t.fromBufferAttribute(i, a - 1), e.fromBufferAttribute(i, a), r[a] = r[a - 1], r[a] += t.distanceTo(e);
                        n.addAttribute("lineDistance", new N(r, 1))
                    } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
                else if (n.isGeometry)
                    for (i = n.vertices, r = n.lineDistances, r[0] = 0, a = 1, o = i.length; a < o; a++) r[a] = r[a - 1], r[a] += i[a - 1].distanceTo(i[a]);
                return this
            }
        }(),
        raycast: function() {
            var t = new i,
                e = new q,
                n = new f;
            return function(i, r) {
                var o = i.linePrecision,
                    s = this.geometry,
                    c = this.matrixWorld;
                if (null === s.boundingSphere && s.computeBoundingSphere(), n.copy(s.boundingSphere), n.applyMatrix4(c), n.radius += o, !1 !== i.ray.intersectsSphere(n)) {
                    t.getInverse(c), e.copy(i.ray).applyMatrix4(t), o /= (this.scale.x + this.scale.y + this.scale.z) / 3, o *= o;
                    var h = new a,
                        l = new a;
                    c = new a;
                    var u = new a,
                        p = this && this.isLineSegments ? 2 : 1;
                    if (s.isBufferGeometry) {
                        var d = s.index,
                            f = s.attributes.position.array;
                        if (null !== d) {
                            d = d.array, s = 0;
                            for (var m = d.length - 1; s < m; s += p) {
                                var g = d[s + 1];
                                h.fromArray(f, 3 * d[s]), l.fromArray(f, 3 * g), g = e.distanceSqToSegment(h, l, u, c), g > o || (u.applyMatrix4(this.matrixWorld), (g = i.ray.origin.distanceTo(u)) < i.near || g > i.far || r.push({ distance: g, point: c.clone().applyMatrix4(this.matrixWorld), index: s, face: null, faceIndex: null, object: this }))
                            }
                        } else
                            for (s = 0, m = f.length / 3 - 1; s < m; s += p) h.fromArray(f, 3 * s), l.fromArray(f, 3 * s + 3), (g = e.distanceSqToSegment(h, l, u, c)) > o || (u.applyMatrix4(this.matrixWorld), (g = i.ray.origin.distanceTo(u)) < i.near || g > i.far || r.push({ distance: g, point: c.clone().applyMatrix4(this.matrixWorld), index: s, face: null, faceIndex: null, object: this }))
                    } else if (s.isGeometry)
                        for (h = s.vertices, l = h.length, s = 0; s < l - 1; s += p)(g = e.distanceSqToSegment(h[s], h[s + 1], u, c)) > o || (u.applyMatrix4(this.matrixWorld), (g = i.ray.origin.distanceTo(u)) < i.near || g > i.far || r.push({ distance: g, point: c.clone().applyMatrix4(this.matrixWorld), index: s, face: null, faceIndex: null, object: this }))
                }
            }
        }(),
        copy: function(t) { return S.prototype.copy.call(this, t), this.geometry.copy(t.geometry), this.material.copy(t.material), this },
        clone: function() { return (new this.constructor).copy(this) }
    }), Fe.prototype = Object.assign(Object.create(Ge.prototype), {
        constructor: Fe,
        isLineSegments: !0,
        computeLineDistances: function() {
            var t = new a,
                e = new a;
            return function() {
                var n = this.geometry;
                if (n.isBufferGeometry)
                    if (null === n.index) {
                        for (var i = n.attributes.position, r = [], a = 0, o = i.count; a < o; a += 2) t.fromBufferAttribute(i, a), e.fromBufferAttribute(i, a + 1), r[a] = 0 === a ? 0 : r[a - 1], r[a + 1] = r[a] + t.distanceTo(e);
                        n.addAttribute("lineDistance", new N(r, 1))
                    } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
                else if (n.isGeometry)
                    for (i = n.vertices, r = n.lineDistances, a = 0, o = i.length; a < o; a += 2) t.copy(i[a]), e.copy(i[a + 1]), r[a] = 0 === a ? 0 : r[a - 1], r[a + 1] = r[a] + t.distanceTo(e);
                return this
            }
        }()
    }), He.prototype = Object.assign(Object.create(Ge.prototype), { constructor: He, isLineLoop: !0 }), Ve.prototype = Object.create(j.prototype), Ve.prototype.constructor = Ve, Ve.prototype.isPointsMaterial = !0, Ve.prototype.copy = function(t) { return j.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.size = t.size, this.sizeAttenuation = t.sizeAttenuation, this.morphTargets = t.morphTargets, this }, ke.prototype = Object.assign(Object.create(S.prototype), {
        constructor: ke,
        isPoints: !0,
        raycast: function() {
            var t = new i,
                e = new q,
                n = new f;
            return function(i, r) {
                function o(t, n) {
                    var a = e.distanceSqToPoint(t);
                    a < u && (e.closestPointToPoint(t, p), p.applyMatrix4(h), (t = i.ray.origin.distanceTo(p)) < i.near || t > i.far || r.push({ distance: t, distanceToRay: Math.sqrt(a), point: p.clone(), index: n, face: null, object: s }))
                }
                var s = this,
                    c = this.geometry,
                    h = this.matrixWorld,
                    l = i.params.Points.threshold;
                if (null === c.boundingSphere && c.computeBoundingSphere(), n.copy(c.boundingSphere), n.applyMatrix4(h), n.radius += l, !1 !== i.ray.intersectsSphere(n)) {
                    t.getInverse(h), e.copy(i.ray).applyMatrix4(t), l /= (this.scale.x + this.scale.y + this.scale.z) / 3;
                    var u = l * l;
                    l = new a;
                    var p = new a;
                    if (c.isBufferGeometry) {
                        var d = c.index;
                        if (c = c.attributes.position.array, null !== d) {
                            var f = d.array;
                            d = 0;
                            for (var m = f.length; d < m; d++) {
                                var g = f[d];
                                l.fromArray(c, 3 * g), o(l, g)
                            }
                        } else
                            for (d = 0, f = c.length / 3; d < f; d++) l.fromArray(c, 3 * d), o(l, d)
                    } else
                        for (l = c.vertices, d = 0, f = l.length; d < f; d++) o(l[d], d)
                }
            }
        }(),
        clone: function() { return new this.constructor(this.geometry, this.material).copy(this) }
    }), je.prototype = Object.assign(Object.create(s.prototype), {
        constructor: je,
        isVideoTexture: !0,
        update: function() {
            var t = this.image;
            t.readyState >= t.HAVE_CURRENT_DATA && (this.needsUpdate = !0)
        }
    }), We.prototype = Object.create(s.prototype), We.prototype.constructor = We, We.prototype.isCompressedTexture = !0, qe.prototype = Object.create(s.prototype), qe.prototype.constructor = qe, qe.prototype.isCanvasTexture = !0, Xe.prototype = Object.create(s.prototype), Xe.prototype.constructor = Xe, Xe.prototype.isDepthTexture = !0, Ye.prototype = Object.create(G.prototype), Ye.prototype.constructor = Ye, Je.prototype = Object.create(T.prototype), Je.prototype.constructor = Je, Ze.prototype = Object.create(G.prototype), Ze.prototype.constructor = Ze, Qe.prototype = Object.create(T.prototype), Qe.prototype.constructor = Qe, Ke.prototype = Object.create(G.prototype), Ke.prototype.constructor = Ke, $e.prototype = Object.create(T.prototype), $e.prototype.constructor = $e, tn.prototype = Object.create(Ke.prototype), tn.prototype.constructor = tn, en.prototype = Object.create(T.prototype), en.prototype.constructor = en, nn.prototype = Object.create(Ke.prototype), nn.prototype.constructor = nn, rn.prototype = Object.create(T.prototype), rn.prototype.constructor = rn, an.prototype = Object.create(Ke.prototype), an.prototype.constructor = an, on.prototype = Object.create(T.prototype), on.prototype.constructor = on, sn.prototype = Object.create(Ke.prototype), sn.prototype.constructor = sn, cn.prototype = Object.create(T.prototype), cn.prototype.constructor = cn, hn.prototype = Object.create(G.prototype), hn.prototype.constructor = hn, hn.prototype.toJSON = function() { var t = G.prototype.toJSON.call(this); return t.path = this.parameters.path.toJSON(), t }, ln.prototype = Object.create(T.prototype), ln.prototype.constructor = ln, un.prototype = Object.create(G.prototype), un.prototype.constructor = un, pn.prototype = Object.create(T.prototype), pn.prototype.constructor = pn, dn.prototype = Object.create(G.prototype), dn.prototype.constructor = dn;
    var Na = {
            triangulate: function(t, e, n) {
                n = n || 2;
                var i = e && e.length,
                    r = i ? e[0] * n : t.length,
                    a = fn(t, 0, r, n, !0),
                    o = [];
                if (!a) return o;
                var s;
                if (i) {
                    var c = n;
                    i = [];
                    var h, l = 0;
                    for (h = e.length; l < h; l++) {
                        var u = e[l] * c;
                        u = fn(t, u, l < h - 1 ? e[l + 1] * c : t.length, c, !1), u === u.next && (u.steiner = !0), i.push(bn(u))
                    }
                    for (i.sort(vn), l = 0; l < i.length; l++) e = i[l], c = a, (c = yn(e, c)) && (e = Tn(c, e), mn(e, e.next)), a = mn(a, a.next)
                }
                if (t.length > 80 * n) {
                    var p = s = t[0],
                        d = i = t[1];
                    for (c = n; c < r; c += n) l = t[c], e = t[c + 1], l < p && (p = l), e < d && (d = e), l > s && (s = l), e > i && (i = e);
                    s = Math.max(s - p, i - d), s = 0 !== s ? 1 / s : 0
                }
                return gn(a, o, n, p, d, s), o
            }
        },
        Ba = {
            area: function(t) { for (var e = t.length, n = 0, i = e - 1, r = 0; r < e; i = r++) n += t[i].x * t[r].y - t[r].x * t[i].y; return .5 * n },
            isClockWise: function(t) { return 0 > Ba.area(t) },
            triangulateShape: function(t, e) {
                var n = [],
                    i = [],
                    r = [];
                Pn(t), Cn(n, t);
                var a = t.length;
                for (e.forEach(Pn), t = 0; t < e.length; t++) i.push(a), a += e[t].length, Cn(n, e[t]);
                for (e = Na.triangulate(n, i), t = 0; t < e.length; t += 3) r.push(e.slice(t, t + 3));
                return r
            }
        };
    In.prototype = Object.create(T.prototype), In.prototype.constructor = In, In.prototype.toJSON = function() { var t = T.prototype.toJSON.call(this); return Dn(this.parameters.shapes, this.parameters.options, t) }, On.prototype = Object.create(G.prototype), On.prototype.constructor = On, On.prototype.toJSON = function() { var t = G.prototype.toJSON.call(this); return Dn(this.parameters.shapes, this.parameters.options, t) };
    var za = {
        generateTopUV: function(t, e, i, r, a) { t = e[3 * r], r = e[3 * r + 1]; var o = e[3 * a]; return a = e[3 * a + 1], [new n(e[3 * i], e[3 * i + 1]), new n(t, r), new n(o, a)] },
        generateSideWallUV: function(t, e, i, r, a, o) {
            t = e[3 * i];
            var s = e[3 * i + 1];
            i = e[3 * i + 2];
            var c = e[3 * r],
                h = e[3 * r + 1];
            r = e[3 * r + 2];
            var l = e[3 * a],
                u = e[3 * a + 1];
            a = e[3 * a + 2];
            var p = e[3 * o],
                d = e[3 * o + 1];
            return e = e[3 * o + 2], .01 > Math.abs(s - h) ? [new n(t, 1 - i), new n(c, 1 - r), new n(l, 1 - a), new n(p, 1 - e)] : [new n(s, 1 - i), new n(h, 1 - r), new n(u, 1 - a), new n(d, 1 - e)]
        }
    };
    Nn.prototype = Object.create(T.prototype), Nn.prototype.constructor = Nn, Bn.prototype = Object.create(On.prototype), Bn.prototype.constructor = Bn, zn.prototype = Object.create(T.prototype), zn.prototype.constructor = zn, Un.prototype = Object.create(G.prototype), Un.prototype.constructor = Un, Gn.prototype = Object.create(T.prototype), Gn.prototype.constructor = Gn, Fn.prototype = Object.create(G.prototype), Fn.prototype.constructor = Fn, Hn.prototype = Object.create(T.prototype), Hn.prototype.constructor = Hn, Vn.prototype = Object.create(G.prototype), Vn.prototype.constructor = Vn, kn.prototype = Object.create(T.prototype), kn.prototype.constructor = kn, kn.prototype.toJSON = function() { var t = T.prototype.toJSON.call(this); return Wn(this.parameters.shapes, t) }, jn.prototype = Object.create(G.prototype), jn.prototype.constructor = jn, jn.prototype.toJSON = function() { var t = G.prototype.toJSON.call(this); return Wn(this.parameters.shapes, t) }, qn.prototype = Object.create(G.prototype), qn.prototype.constructor = qn, Xn.prototype = Object.create(T.prototype), Xn.prototype.constructor = Xn, Yn.prototype = Object.create(G.prototype), Yn.prototype.constructor = Yn, Jn.prototype = Object.create(Xn.prototype), Jn.prototype.constructor = Jn, Zn.prototype = Object.create(Yn.prototype), Zn.prototype.constructor = Zn, Qn.prototype = Object.create(T.prototype), Qn.prototype.constructor = Qn, Kn.prototype = Object.create(G.prototype), Kn.prototype.constructor = Kn;
    var Ua = Object.freeze({ WireframeGeometry: Ye, ParametricGeometry: Je, ParametricBufferGeometry: Ze, TetrahedronGeometry: $e, TetrahedronBufferGeometry: tn, OctahedronGeometry: en, OctahedronBufferGeometry: nn, IcosahedronGeometry: rn, IcosahedronBufferGeometry: an, DodecahedronGeometry: on, DodecahedronBufferGeometry: sn, PolyhedronGeometry: Qe, PolyhedronBufferGeometry: Ke, TubeGeometry: cn, TubeBufferGeometry: hn, TorusKnotGeometry: ln, TorusKnotBufferGeometry: un, TorusGeometry: pn, TorusBufferGeometry: dn, TextGeometry: Nn, TextBufferGeometry: Bn, SphereGeometry: zn, SphereBufferGeometry: Un, RingGeometry: Gn, RingBufferGeometry: Fn, PlaneGeometry: V, PlaneBufferGeometry: k, LatheGeometry: Hn, LatheBufferGeometry: Vn, ShapeGeometry: kn, ShapeBufferGeometry: jn, ExtrudeGeometry: In, ExtrudeBufferGeometry: On, EdgesGeometry: qn, ConeGeometry: Jn, ConeBufferGeometry: Zn, CylinderGeometry: Xn, CylinderBufferGeometry: Yn, CircleGeometry: Qn, CircleBufferGeometry: Kn, BoxGeometry: F, BoxBufferGeometry: H });
    $n.prototype = Object.create(j.prototype), $n.prototype.constructor = $n, $n.prototype.isShadowMaterial = !0, $n.prototype.copy = function(t) { return j.prototype.copy.call(this, t), this.color.copy(t.color), this }, ti.prototype = Object.create(W.prototype), ti.prototype.constructor = ti, ti.prototype.isRawShaderMaterial = !0, ei.prototype = Object.create(j.prototype), ei.prototype.constructor = ei, ei.prototype.isMeshStandardMaterial = !0, ei.prototype.copy = function(t) { return j.prototype.copy.call(this, t), this.defines = { STANDARD: "" }, this.color.copy(t.color), this.roughness = t.roughness, this.metalness = t.metalness, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.roughnessMap = t.roughnessMap, this.metalnessMap = t.metalnessMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapIntensity = t.envMapIntensity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this }, ni.prototype = Object.create(ei.prototype), ni.prototype.constructor = ni, ni.prototype.isMeshPhysicalMaterial = !0, ni.prototype.copy = function(t) { return ei.prototype.copy.call(this, t), this.defines = { PHYSICAL: "" }, this.reflectivity = t.reflectivity, this.clearCoat = t.clearCoat, this.clearCoatRoughness = t.clearCoatRoughness, this }, ii.prototype = Object.create(j.prototype), ii.prototype.constructor = ii, ii.prototype.isMeshPhongMaterial = !0, ii.prototype.copy = function(t) { return j.prototype.copy.call(this, t), this.color.copy(t.color), this.specular.copy(t.specular), this.shininess = t.shininess, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this }, ri.prototype = Object.create(ii.prototype), ri.prototype.constructor = ri, ri.prototype.isMeshToonMaterial = !0, ri.prototype.copy = function(t) { return ii.prototype.copy.call(this, t), this.gradientMap = t.gradientMap, this }, ai.prototype = Object.create(j.prototype), ai.prototype.constructor = ai, ai.prototype.isMeshNormalMaterial = !0, ai.prototype.copy = function(t) { return j.prototype.copy.call(this, t), this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this }, oi.prototype = Object.create(j.prototype), oi.prototype.constructor = oi, oi.prototype.isMeshLambertMaterial = !0, oi.prototype.copy = function(t) { return j.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this }, si.prototype = Object.create(j.prototype), si.prototype.constructor = si, si.prototype.isMeshMatcapMaterial = !0, si.prototype.copy = function(t) { return j.prototype.copy.call(this, t), this.defines = { MATCAP: "" }, this.color.copy(t.color), this.matcap = t.matcap, this.map = t.map, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.alphaMap = t.alphaMap, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this }, ci.prototype = Object.create(Ue.prototype), ci.prototype.constructor = ci, ci.prototype.isLineDashedMaterial = !0, ci.prototype.copy = function(t) { return Ue.prototype.copy.call(this, t), this.scale = t.scale, this.dashSize = t.dashSize, this.gapSize = t.gapSize, this };
    var Ga = Object.freeze({ ShadowMaterial: $n, SpriteMaterial: Ie, RawShaderMaterial: ti, ShaderMaterial: W, PointsMaterial: Ve, MeshPhysicalMaterial: ni, MeshStandardMaterial: ei, MeshPhongMaterial: ii, MeshToonMaterial: ri, MeshNormalMaterial: ai, MeshLambertMaterial: oi, MeshDepthMaterial: de, MeshDistanceMaterial: fe, MeshBasicMaterial: Y, MeshMatcapMaterial: si, LineDashedMaterial: ci, LineBasicMaterial: Ue, Material: j }),
        Fa = {
            arraySlice: function(t, e, n) { return Fa.isTypedArray(t) ? new t.constructor(t.subarray(e, void 0 !== n ? n : t.length)) : t.slice(e, n) },
            convertArray: function(t, e, n) { return !t || !n && t.constructor === e ? t : "number" == typeof e.BYTES_PER_ELEMENT ? new e(t) : Array.prototype.slice.call(t) },
            isTypedArray: function(t) { return ArrayBuffer.isView(t) && !(t instanceof DataView) },
            getKeyframeOrder: function(t) { for (var e = t.length, n = Array(e), i = 0; i !== e; ++i) n[i] = i; return n.sort(function(e, n) { return t[e] - t[n] }), n },
            sortedArray: function(t, e, n) {
                for (var i = t.length, r = new t.constructor(i), a = 0, o = 0; o !== i; ++a)
                    for (var s = n[a] * e, c = 0; c !== e; ++c) r[o++] = t[s + c];
                return r
            },
            flattenJSON: function(t, e, n, i) {
                for (var r = 1, a = t[0]; void 0 !== a && void 0 === a[i];) a = t[r++];
                if (void 0 !== a) {
                    var o = a[i];
                    if (void 0 !== o)
                        if (Array.isArray(o)) { do { o = a[i], void 0 !== o && (e.push(a.time), n.push.apply(n, o)), a = t[r++] } while (void 0 !== a) } else if (void 0 !== o.toArray) { do { o = a[i], void 0 !== o && (e.push(a.time), o.toArray(n, n.length)), a = t[r++] } while (void 0 !== a) } else
                        do { o = a[i], void 0 !== o && (e.push(a.time), n.push(o)), a = t[r++] } while (void 0 !== a)
                }
            }
        };
    Object.assign(hi.prototype, {
        evaluate: function(t) {
            var e = this.parameterPositions,
                n = this._cachedIndex,
                i = e[n],
                r = e[n - 1];
            t: {
                e: {
                    n: {
                        i: if (!(t < i)) {
                            for (var a = n + 2;;) { if (void 0 === i) { if (t < r) break i; return this._cachedIndex = n = e.length, this.afterEnd_(n - 1, t, r) } if (n === a) break; if (r = i, i = e[++n], t < i) break e }
                            i = e.length;
                            break n
                        }if (t >= r) break t;
                        for (a = e[1], t < a && (n = 2, r = a), a = n - 2;;) { if (void 0 === r) return this._cachedIndex = 0, this.beforeStart_(0, t, i); if (n === a) break; if (i = r, r = e[--n - 1], t >= r) break e }
                        i = n,
                        n = 0
                    }
                    for (; n < i;) r = n + i >>> 1,
                    t < e[r] ? i = r : n = r + 1;
                    if (i = e[n], void 0 === (r = e[n - 1])) return this._cachedIndex = 0, this.beforeStart_(0, t, i);
                    if (void 0 === i) return this._cachedIndex = n = e.length, this.afterEnd_(n - 1, r, t)
                }
                this._cachedIndex = n,
                this.intervalChanged_(n, r, i)
            }
            return this.interpolate_(n, r, t, i)
        },
        settings: null,
        DefaultSettings_: {},
        getSettings_: function() { return this.settings || this.DefaultSettings_ },
        copySampleValue_: function(t) {
            var e = this.resultBuffer,
                n = this.sampleValues,
                i = this.valueSize;
            t *= i;
            for (var r = 0; r !== i; ++r) e[r] = n[t + r];
            return e
        },
        interpolate_: function() { throw Error("call to abstract method") },
        intervalChanged_: function() {}
    }), Object.assign(hi.prototype, { beforeStart_: hi.prototype.copySampleValue_, afterEnd_: hi.prototype.copySampleValue_ }), li.prototype = Object.assign(Object.create(hi.prototype), {
        constructor: li,
        DefaultSettings_: { endingStart: 2400, endingEnd: 2400 },
        intervalChanged_: function(t, e, n) {
            var i = this.parameterPositions,
                r = t - 2,
                a = t + 1,
                o = i[r],
                s = i[a];
            if (void 0 === o) switch (this.getSettings_().endingStart) {
                case 2401:
                    r = t, o = 2 * e - n;
                    break;
                case 2402:
                    r = i.length - 2, o = e + i[r] - i[r + 1];
                    break;
                default:
                    r = t, o = n
            }
            if (void 0 === s) switch (this.getSettings_().endingEnd) {
                case 2401:
                    a = t, s = 2 * n - e;
                    break;
                case 2402:
                    a = 1, s = n + i[1] - i[0];
                    break;
                default:
                    a = t - 1, s = e
            }
            t = .5 * (n - e), i = this.valueSize, this._weightPrev = t / (e - o), this._weightNext = t / (s - n), this._offsetPrev = r * i, this._offsetNext = a * i
        },
        interpolate_: function(t, e, n, i) {
            var r = this.resultBuffer,
                a = this.sampleValues,
                o = this.valueSize;
            t *= o;
            var s = t - o,
                c = this._offsetPrev,
                h = this._offsetNext,
                l = this._weightPrev,
                u = this._weightNext,
                p = (n - e) / (i - e);
            for (n = p * p, i = n * p, e = -l * i + 2 * l * n - l * p, l = (1 + l) * i + (-1.5 - 2 * l) * n + (-.5 + l) * p + 1, p = (-1 - u) * i + (1.5 + u) * n + .5 * p, u = u * i - u * n, n = 0; n !== o; ++n) r[n] = e * a[c + n] + l * a[s + n] + p * a[t + n] + u * a[h + n];
            return r
        }
    }), ui.prototype = Object.assign(Object.create(hi.prototype), {
        constructor: ui,
        interpolate_: function(t, e, n, i) {
            var r = this.resultBuffer,
                a = this.sampleValues,
                o = this.valueSize;
            t *= o;
            var s = t - o;
            for (e = (n - e) / (i - e), n = 1 - e, i = 0; i !== o; ++i) r[i] = a[s + i] * n + a[t + i] * e;
            return r
        }
    }), pi.prototype = Object.assign(Object.create(hi.prototype), { constructor: pi, interpolate_: function(t) { return this.copySampleValue_(t - 1) } }), Object.assign(di, {
        toJSON: function(t) {
            var e = t.constructor;
            if (void 0 !== e.toJSON) e = e.toJSON(t);
            else {
                e = { name: t.name, times: Fa.convertArray(t.times, Array), values: Fa.convertArray(t.values, Array) };
                var n = t.getInterpolation();
                n !== t.DefaultInterpolation && (e.interpolation = n)
            }
            return e.type = t.ValueTypeName, e
        }
    }), Object.assign(di.prototype, {
        constructor: di,
        TimeBufferType: Float32Array,
        ValueBufferType: Float32Array,
        DefaultInterpolation: 2301,
        InterpolantFactoryMethodDiscrete: function(t) { return new pi(this.times, this.values, this.getValueSize(), t) },
        InterpolantFactoryMethodLinear: function(t) { return new ui(this.times, this.values, this.getValueSize(), t) },
        InterpolantFactoryMethodSmooth: function(t) { return new li(this.times, this.values, this.getValueSize(), t) },
        setInterpolation: function(t) {
            switch (t) {
                case 2300:
                    var e = this.InterpolantFactoryMethodDiscrete;
                    break;
                case 2301:
                    e = this.InterpolantFactoryMethodLinear;
                    break;
                case 2302:
                    e = this.InterpolantFactoryMethodSmooth
            }
            if (void 0 === e) {
                if (e = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name, void 0 === this.createInterpolant) {
                    if (t === this.DefaultInterpolation) throw Error(e);
                    this.setInterpolation(this.DefaultInterpolation)
                }
                return console.warn("THREE.KeyframeTrack:", e), this
            }
            return this.createInterpolant = e, this
        },
        getInterpolation: function() {
            switch (this.createInterpolant) {
                case this.InterpolantFactoryMethodDiscrete:
                    return 2300;
                case this.InterpolantFactoryMethodLinear:
                    return 2301;
                case this.InterpolantFactoryMethodSmooth:
                    return 2302
            }
        },
        getValueSize: function() { return this.values.length / this.times.length },
        shift: function(t) {
            if (0 !== t)
                for (var e = this.times, n = 0, i = e.length; n !== i; ++n) e[n] += t;
            return this
        },
        scale: function(t) {
            if (1 !== t)
                for (var e = this.times, n = 0, i = e.length; n !== i; ++n) e[n] *= t;
            return this
        },
        trim: function(t, e) { for (var n = this.times, i = n.length, r = 0, a = i - 1; r !== i && n[r] < t;) ++r; for (; - 1 !== a && n[a] > e;) --a; return ++a, 0 === r && a === i || (r >= a && (a = Math.max(a, 1), r = a - 1), t = this.getValueSize(), this.times = Fa.arraySlice(n, r, a), this.values = Fa.arraySlice(this.values, r * t, a * t)), this },
        validate: function() {
            var t = !0,
                e = this.getValueSize();
            0 != e - Math.floor(e) && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), t = !1);
            var n = this.times;
            e = this.values;
            var i = n.length;
            0 === i && (console.error("THREE.KeyframeTrack: Track is empty.", this), t = !1);
            for (var r = null, a = 0; a !== i; a++) {
                var o = n[a];
                if ("number" == typeof o && isNaN(o)) { console.error("THREE.KeyframeTrack: Time is not a valid number.", this, a, o), t = !1; break }
                if (null !== r && r > o) { console.error("THREE.KeyframeTrack: Out of order keys.", this, a, o, r), t = !1; break }
                r = o
            }
            if (void 0 !== e && Fa.isTypedArray(e))
                for (a = 0, n = e.length; a !== n; ++a)
                    if (i = e[a], isNaN(i)) { console.error("THREE.KeyframeTrack: Value is not a valid number.", this, a, i), t = !1; break }
            return t
        },
        optimize: function() {
            for (var t = this.times, e = this.values, n = this.getValueSize(), i = 2302 === this.getInterpolation(), r = 1, a = t.length - 1, o = 1; o < a; ++o) {
                var s = !1,
                    c = t[o];
                if (c !== t[o + 1] && (1 !== o || c !== c[0]))
                    if (i) s = !0;
                    else {
                        var h = o * n,
                            l = h - n,
                            u = h + n;
                        for (c = 0; c !== n; ++c) { var p = e[h + c]; if (p !== e[l + c] || p !== e[u + c]) { s = !0; break } }
                    }
                if (s) {
                    if (o !== r)
                        for (t[r] = t[o], s = o * n, h = r * n, c = 0; c !== n; ++c) e[h + c] = e[s + c];
                    ++r
                }
            }
            if (0 < a) { for (t[r] = t[a], s = a * n, h = r * n, c = 0; c !== n; ++c) e[h + c] = e[s + c];++r }
            return r !== t.length && (this.times = Fa.arraySlice(t, 0, r), this.values = Fa.arraySlice(e, 0, r * n)), this
        },
        clone: function() {
            var t = Fa.arraySlice(this.times, 0),
                e = Fa.arraySlice(this.values, 0);
            return t = new this.constructor(this.name, t, e), t.createInterpolant = this.createInterpolant, t
        }
    }), fi.prototype = Object.assign(Object.create(di.prototype), { constructor: fi, ValueTypeName: "bool", ValueBufferType: Array, DefaultInterpolation: 2300, InterpolantFactoryMethodLinear: void 0, InterpolantFactoryMethodSmooth: void 0 }), mi.prototype = Object.assign(Object.create(di.prototype), { constructor: mi, ValueTypeName: "color" }), gi.prototype = Object.assign(Object.create(di.prototype), { constructor: gi, ValueTypeName: "number" }), vi.prototype = Object.assign(Object.create(hi.prototype), {
        constructor: vi,
        interpolate_: function(t, e, n, i) {
            var a = this.resultBuffer,
                o = this.sampleValues,
                s = this.valueSize;
            for (t *= s, e = (n - e) / (i - e), n = t + s; t !== n; t += 4) r.slerpFlat(a, 0, o, t - s, o, t, e);
            return a
        }
    }), yi.prototype = Object.assign(Object.create(di.prototype), { constructor: yi, ValueTypeName: "quaternion", DefaultInterpolation: 2301, InterpolantFactoryMethodLinear: function(t) { return new vi(this.times, this.values, this.getValueSize(), t) }, InterpolantFactoryMethodSmooth: void 0 }), xi.prototype = Object.assign(Object.create(di.prototype), { constructor: xi, ValueTypeName: "string", ValueBufferType: Array, DefaultInterpolation: 2300, InterpolantFactoryMethodLinear: void 0, InterpolantFactoryMethodSmooth: void 0 }), bi.prototype = Object.assign(Object.create(di.prototype), { constructor: bi, ValueTypeName: "vector" }), Object.assign(wi, {
        parse: function(t) { for (var e = [], n = t.tracks, i = 1 / (t.fps || 1), r = 0, a = n.length; r !== a; ++r) e.push(Mi(n[r]).scale(i)); return new wi(t.name, t.duration, e) },
        toJSON: function(t) {
            var e = [],
                n = t.tracks;
            t = { name: t.name, duration: t.duration, tracks: e, uuid: t.uuid };
            for (var i = 0, r = n.length; i !== r; ++i) e.push(di.toJSON(n[i]));
            return t
        },
        CreateFromMorphTargetSequence: function(t, e, n, i) {
            for (var r = e.length, a = [], o = 0; o < r; o++) {
                var s = [],
                    c = [];
                s.push((o + r - 1) % r, o, (o + 1) % r), c.push(0, 1, 0);
                var h = Fa.getKeyframeOrder(s);
                s = Fa.sortedArray(s, 1, h), c = Fa.sortedArray(c, 1, h), i || 0 !== s[0] || (s.push(r), c.push(c[0])), a.push(new gi(".morphTargetInfluences[" + e[o].name + "]", s, c).scale(1 / n))
            }
            return new wi(t, -1, a)
        },
        findByName: function(t, e) {
            var n = t;
            for (Array.isArray(t) || (n = t.geometry && t.geometry.animations || t.animations), t = 0; t < n.length; t++)
                if (n[t].name === e) return n[t];
            return null
        },
        CreateClipsFromMorphTargetSequences: function(t, e, n) {
            for (var i = {}, r = /^([\w-]*?)([\d]+)$/, a = 0, o = t.length; a < o; a++) {
                var s = t[a],
                    c = s.name.match(r);
                if (c && 1 < c.length) {
                    var h = c[1];
                    (c = i[h]) || (i[h] = c = []), c.push(s)
                }
            }
            t = [];
            for (h in i) t.push(wi.CreateFromMorphTargetSequence(h, i[h], e, n));
            return t
        },
        parseAnimation: function(t, e) {
            if (!t) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
            var n = function(t, e, n, i, r) {
                    if (0 !== n.length) {
                        var a = [],
                            o = [];
                        Fa.flattenJSON(n, a, o, i), 0 !== a.length && r.push(new t(e, a, o))
                    }
                },
                i = [],
                r = t.name || "default",
                a = t.length || -1,
                o = t.fps || 30;
            t = t.hierarchy || [];
            for (var s = 0; s < t.length; s++) {
                var c = t[s].keys;
                if (c && 0 !== c.length)
                    if (c[0].morphTargets) {
                        a = {};
                        for (var h = 0; h < c.length; h++)
                            if (c[h].morphTargets)
                                for (var l = 0; l < c[h].morphTargets.length; l++) a[c[h].morphTargets[l]] = -1;
                        for (var u in a) {
                            var p = [],
                                d = [];
                            for (l = 0; l !== c[h].morphTargets.length; ++l) {
                                var f = c[h];
                                p.push(f.time), d.push(f.morphTarget === u ? 1 : 0)
                            }
                            i.push(new gi(".morphTargetInfluence[" + u + "]", p, d))
                        }
                        a = a.length * (o || 1)
                    } else h = ".bones[" + e[s].name + "]", n(bi, h + ".position", c, "pos", i), n(yi, h + ".quaternion", c, "rot", i), n(bi, h + ".scale", c, "scl", i)
            }
            return 0 === i.length ? null : new wi(r, a, i)
        }
    }), Object.assign(wi.prototype, {
        resetDuration: function() {
            for (var t = 0, e = 0, n = this.tracks.length; e !== n; ++e) {
                var i = this.tracks[e];
                t = Math.max(t, i.times[i.times.length - 1])
            }
            return this.duration = t, this
        },
        trim: function() { for (var t = 0; t < this.tracks.length; t++) this.tracks[t].trim(0, this.duration); return this },
        validate: function() { for (var t = !0, e = 0; e < this.tracks.length; e++) t = t && this.tracks[e].validate(); return t },
        optimize: function() { for (var t = 0; t < this.tracks.length; t++) this.tracks[t].optimize(); return this },
        clone: function() { for (var t = [], e = 0; e < this.tracks.length; e++) t.push(this.tracks[e].clone()); return new wi(this.name, this.duration, t) }
    });
    var Ha = { enabled: !1, files: {}, add: function(t, e) {!1 !== this.enabled && (this.files[t] = e) }, get: function(t) { if (!1 !== this.enabled) return this.files[t] }, remove: function(t) { delete this.files[t] }, clear: function() { this.files = {} } },
        Va = new Ei,
        ka = {};
    Object.assign(Si.prototype, {
        load: function(t, e, n, i) {
            void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
            var r = this,
                a = Ha.get(t);
            if (void 0 !== a) return r.manager.itemStart(t), setTimeout(function() { e && e(a), r.manager.itemEnd(t) }, 0), a;
            if (void 0 === ka[t]) {
                var o = t.match(/^data:(.*?)(;base64)?,(.*)$/);
                if (o) {
                    n = o[1];
                    var s = !!o[2];
                    o = o[3], o = decodeURIComponent(o), s && (o = atob(o));
                    try {
                        var c = (this.responseType || "").toLowerCase();
                        switch (c) {
                            case "arraybuffer":
                            case "blob":
                                var h = new Uint8Array(o.length);
                                for (s = 0; s < o.length; s++) h[s] = o.charCodeAt(s);
                                var l = "blob" === c ? new Blob([h.buffer], { type: n }) : h.buffer;
                                break;
                            case "document":
                                l = (new DOMParser).parseFromString(o, n);
                                break;
                            case "json":
                                l = JSON.parse(o);
                                break;
                            default:
                                l = o
                        }
                        setTimeout(function() { e && e(l), r.manager.itemEnd(t) }, 0)
                    } catch (e) { setTimeout(function() { i && i(e), r.manager.itemError(t), r.manager.itemEnd(t) }, 0) }
                } else {
                    ka[t] = [], ka[t].push({ onLoad: e, onProgress: n, onError: i });
                    var u = new XMLHttpRequest;
                    u.open("GET", t, !0), u.addEventListener("load", function(e) {
                        var n = this.response;
                        Ha.add(t, n);
                        var i = ka[t];
                        if (delete ka[t], 200 === this.status || 0 === this.status) {
                            0 === this.status && console.warn("THREE.FileLoader: HTTP Status 0 received.");
                            for (var a = 0, o = i.length; a < o; a++) {
                                var s = i[a];
                                s.onLoad && s.onLoad(n)
                            }
                        } else {
                            for (a = 0, o = i.length; a < o; a++) s = i[a], s.onError && s.onError(e);
                            r.manager.itemError(t)
                        }
                        r.manager.itemEnd(t)
                    }, !1), u.addEventListener("progress", function(e) {
                        for (var n = ka[t], i = 0, r = n.length; i < r; i++) {
                            var a = n[i];
                            a.onProgress && a.onProgress(e)
                        }
                    }, !1), u.addEventListener("error", function(e) {
                        var n = ka[t];
                        delete ka[t];
                        for (var i = 0, a = n.length; i < a; i++) {
                            var o = n[i];
                            o.onError && o.onError(e)
                        }
                        r.manager.itemError(t), r.manager.itemEnd(t)
                    }, !1), u.addEventListener("abort", function(e) {
                        var n = ka[t];
                        delete ka[t];
                        for (var i = 0, a = n.length; i < a; i++) {
                            var o = n[i];
                            o.onError && o.onError(e)
                        }
                        r.manager.itemError(t), r.manager.itemEnd(t)
                    }, !1), void 0 !== this.responseType && (u.responseType = this.responseType), void 0 !== this.withCredentials && (u.withCredentials = this.withCredentials), u.overrideMimeType && u.overrideMimeType(void 0 !== this.mimeType ? this.mimeType : "text/plain");
                    for (s in this.requestHeader) u.setRequestHeader(s, this.requestHeader[s]);
                    u.send(null)
                }
                return r.manager.itemStart(t), u
            }
            ka[t].push({ onLoad: e, onProgress: n, onError: i })
        },
        setPath: function(t) { return this.path = t, this },
        setResponseType: function(t) { return this.responseType = t, this },
        setWithCredentials: function(t) { return this.withCredentials = t, this },
        setMimeType: function(t) { return this.mimeType = t, this },
        setRequestHeader: function(t) { return this.requestHeader = t, this }
    }), Object.assign(Ti.prototype, {
        load: function(t, e, n, i) {
            var r = this,
                a = new Si(r.manager);
            a.setPath(r.path), a.load(t, function(t) { e(r.parse(JSON.parse(t))) }, n, i)
        },
        parse: function(t, e) {
            for (var n = [], i = 0; i < t.length; i++) {
                var r = wi.parse(t[i]);
                n.push(r)
            }
            e(n)
        },
        setPath: function(t) { return this.path = t, this }
    }), Object.assign(Ai.prototype, {
        load: function(t, e, n, i) {
            function r(r) { c.load(t[r], function(t) { t = a._parser(t, !0), o[r] = { width: t.width, height: t.height, format: t.format, mipmaps: t.mipmaps }, 6 === (h += 1) && (1 === t.mipmapCount && (s.minFilter = 1006), s.format = t.format, s.needsUpdate = !0, e && e(s)) }, n, i) }
            var a = this,
                o = [],
                s = new We;
            s.image = o;
            var c = new Si(this.manager);
            if (c.setPath(this.path), c.setResponseType("arraybuffer"), Array.isArray(t))
                for (var h = 0, l = 0, u = t.length; l < u; ++l) r(l);
            else c.load(t, function(t) {
                if (t = a._parser(t, !0), t.isCubemap)
                    for (var n = t.mipmaps.length / t.mipmapCount, i = 0; i < n; i++) { o[i] = { mipmaps: [] }; for (var r = 0; r < t.mipmapCount; r++) o[i].mipmaps.push(t.mipmaps[i * t.mipmapCount + r]), o[i].format = t.format, o[i].width = t.width, o[i].height = t.height } else s.image.width = t.width, s.image.height = t.height, s.mipmaps = t.mipmaps;
                1 === t.mipmapCount && (s.minFilter = 1006), s.format = t.format, s.needsUpdate = !0, e && e(s)
            }, n, i);
            return s
        },
        setPath: function(t) { return this.path = t, this }
    }), Object.assign(Li.prototype, {
        load: function(t, e, n, i) {
            var r = this,
                a = new p,
                o = new Si(this.manager);
            return o.setResponseType("arraybuffer"), o.setPath(this.path), o.load(t, function(t) {
                (t = r._parser(t)) && (void 0 !== t.image ? a.image = t.image : void 0 !== t.data && (a.image.width = t.width, a.image.height = t.height, a.image.data = t.data), a.wrapS = void 0 !== t.wrapS ? t.wrapS : 1001, a.wrapT = void 0 !== t.wrapT ? t.wrapT : 1001, a.magFilter = void 0 !== t.magFilter ? t.magFilter : 1006, a.minFilter = void 0 !== t.minFilter ? t.minFilter : 1008, a.anisotropy = void 0 !== t.anisotropy ? t.anisotropy : 1, void 0 !== t.format && (a.format = t.format), void 0 !== t.type && (a.type = t.type), void 0 !== t.mipmaps && (a.mipmaps = t.mipmaps), 1 === t.mipmapCount && (a.minFilter = 1006), a.needsUpdate = !0, e && e(a, t))
            }, n, i), a
        },
        setPath: function(t) { return this.path = t, this }
    }), Object.assign(Ri.prototype, {
        crossOrigin: "anonymous",
        load: function(t, e, n, i) {
            function r() { c.removeEventListener("load", r, !1), c.removeEventListener("error", a, !1), Ha.add(t, this), e && e(this), o.manager.itemEnd(t) }

            function a(e) { c.removeEventListener("load", r, !1), c.removeEventListener("error", a, !1), i && i(e), o.manager.itemError(t), o.manager.itemEnd(t) }
            void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
            var o = this,
                s = Ha.get(t);
            if (void 0 !== s) return o.manager.itemStart(t), setTimeout(function() { e && e(s), o.manager.itemEnd(t) }, 0), s;
            var c = document.createElementNS("http://www.w3.org/1999/xhtml", "img");
            return c.addEventListener("load", r, !1), c.addEventListener("error", a, !1), "data:" !== t.substr(0, 5) && void 0 !== this.crossOrigin && (c.crossOrigin = this.crossOrigin), o.manager.itemStart(t), c.src = t, c
        },
        setCrossOrigin: function(t) { return this.crossOrigin = t, this },
        setPath: function(t) { return this.path = t, this }
    }), Object.assign(Pi.prototype, {
        crossOrigin: "anonymous",
        load: function(t, e, n, i) {
            function r(n) { o.load(t[n], function(t) { a.images[n] = t, 6 === ++s && (a.needsUpdate = !0, e && e(a)) }, void 0, i) }
            var a = new st,
                o = new Ri(this.manager);
            o.setCrossOrigin(this.crossOrigin), o.setPath(this.path);
            var s = 0;
            for (n = 0; n < t.length; ++n) r(n);
            return a
        },
        setCrossOrigin: function(t) { return this.crossOrigin = t, this },
        setPath: function(t) { return this.path = t, this }
    }), Object.assign(Ci.prototype, {
        crossOrigin: "anonymous",
        load: function(t, e, n, i) {
            var r = new s,
                a = new Ri(this.manager);
            return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(t, function(n) { r.image = n, n = 0 < t.search(/\.jpe?g($|\?)/i) || 0 === t.search(/^data:image\/jpeg/), r.format = n ? 1022 : 1023, r.needsUpdate = !0, void 0 !== e && e(r) }, n, i), r
        },
        setCrossOrigin: function(t) { return this.crossOrigin = t, this },
        setPath: function(t) { return this.path = t, this }
    }), Object.assign(Ii.prototype, {
        getPoint: function() { return console.warn("THREE.Curve: .getPoint() not implemented."), null },
        getPointAt: function(t, e) { return t = this.getUtoTmapping(t), this.getPoint(t, e) },
        getPoints: function(t) { void 0 === t && (t = 5); for (var e = [], n = 0; n <= t; n++) e.push(this.getPoint(n / t)); return e },
        getSpacedPoints: function(t) { void 0 === t && (t = 5); for (var e = [], n = 0; n <= t; n++) e.push(this.getPointAt(n / t)); return e },
        getLength: function() { var t = this.getLengths(); return t[t.length - 1] },
        getLengths: function(t) {
            if (void 0 === t && (t = this.arcLengthDivisions), this.cacheArcLengths && this.cacheArcLengths.length === t + 1 && !this.needsUpdate) return this.cacheArcLengths;
            this.needsUpdate = !1;
            var e, n = [],
                i = this.getPoint(0),
                r = 0;
            for (n.push(0), e = 1; e <= t; e++) {
                var a = this.getPoint(e / t);
                r += a.distanceTo(i), n.push(r), i = a
            }
            return this.cacheArcLengths = n
        },
        updateArcLengths: function() { this.needsUpdate = !0, this.getLengths() },
        getUtoTmapping: function(t, e) {
            var n = this.getLengths(),
                i = n.length;
            e = e || t * n[i - 1];
            for (var r, a = 0, o = i - 1; a <= o;)
                if (t = Math.floor(a + (o - a) / 2), 0 > (r = n[t] - e)) a = t + 1;
                else {
                    if (!(0 < r)) { o = t; break }
                    o = t - 1
                }
            return t = o, n[t] === e ? t / (i - 1) : (a = n[t], (t + (e - a) / (n[t + 1] - a)) / (i - 1))
        },
        getTangent: function(t) { var e = t - 1e-4; return t += 1e-4, 0 > e && (e = 0), 1 < t && (t = 1), e = this.getPoint(e), this.getPoint(t).clone().sub(e).normalize() },
        getTangentAt: function(t) { return t = this.getUtoTmapping(t), this.getTangent(t) },
        computeFrenetFrames: function(t, e) {
            var n, r = new a,
                o = [],
                s = [],
                c = [],
                h = new a,
                l = new i;
            for (n = 0; n <= t; n++) {
                var u = n / t;
                o[n] = this.getTangentAt(u), o[n].normalize()
            }
            s[0] = new a, c[0] = new a, n = Number.MAX_VALUE, u = Math.abs(o[0].x);
            var p = Math.abs(o[0].y),
                d = Math.abs(o[0].z);
            for (u <= n && (n = u, r.set(1, 0, 0)), p <= n && (n = p, r.set(0, 1, 0)), d <= n && r.set(0, 0, 1), h.crossVectors(o[0], r).normalize(), s[0].crossVectors(o[0], h), c[0].crossVectors(o[0], s[0]), n = 1; n <= t; n++) s[n] = s[n - 1].clone(), c[n] = c[n - 1].clone(), h.crossVectors(o[n - 1], o[n]), h.length() > Number.EPSILON && (h.normalize(), r = Math.acos(ca.clamp(o[n - 1].dot(o[n]), -1, 1)), s[n].applyMatrix4(l.makeRotationAxis(h, r))), c[n].crossVectors(o[n], s[n]);
            if (!0 === e)
                for (r = Math.acos(ca.clamp(s[0].dot(s[t]), -1, 1)), r /= t, 0 < o[0].dot(h.crossVectors(s[0], s[t])) && (r = -r), n = 1; n <= t; n++) s[n].applyMatrix4(l.makeRotationAxis(o[n], r * n)), c[n].crossVectors(o[n], s[n]);
            return { tangents: o, normals: s, binormals: c }
        },
        clone: function() { return (new this.constructor).copy(this) },
        copy: function(t) { return this.arcLengthDivisions = t.arcLengthDivisions, this },
        toJSON: function() { var t = { metadata: { version: 4.5, type: "Curve", generator: "Curve.toJSON" } }; return t.arcLengthDivisions = this.arcLengthDivisions, t.type = this.type, t },
        fromJSON: function(t) { return this.arcLengthDivisions = t.arcLengthDivisions, this }
    }), Oi.prototype = Object.create(Ii.prototype), Oi.prototype.constructor = Oi, Oi.prototype.isEllipseCurve = !0, Oi.prototype.getPoint = function(t, e) {
        e = e || new n;
        for (var i = 2 * Math.PI, r = this.aEndAngle - this.aStartAngle, a = Math.abs(r) < Number.EPSILON; 0 > r;) r += i;
        for (; r > i;) r -= i;
        r < Number.EPSILON && (r = a ? 0 : i), !0 !== this.aClockwise || a || (r = r === i ? -i : r - i), i = this.aStartAngle + t * r, t = this.aX + this.xRadius * Math.cos(i);
        var o = this.aY + this.yRadius * Math.sin(i);
        return 0 !== this.aRotation && (i = Math.cos(this.aRotation), r = Math.sin(this.aRotation), a = t - this.aX, o -= this.aY, t = a * i - o * r + this.aX, o = a * r + o * i + this.aY), e.set(t, o)
    }, Oi.prototype.copy = function(t) { return Ii.prototype.copy.call(this, t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this }, Oi.prototype.toJSON = function() { var t = Ii.prototype.toJSON.call(this); return t.aX = this.aX, t.aY = this.aY, t.xRadius = this.xRadius, t.yRadius = this.yRadius, t.aStartAngle = this.aStartAngle, t.aEndAngle = this.aEndAngle, t.aClockwise = this.aClockwise, t.aRotation = this.aRotation, t }, Oi.prototype.fromJSON = function(t) { return Ii.prototype.fromJSON.call(this, t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this }, Di.prototype = Object.create(Oi.prototype), Di.prototype.constructor = Di, Di.prototype.isArcCurve = !0;
    var ja = new a,
        Wa = new Ni,
        qa = new Ni,
        Xa = new Ni;
    Bi.prototype = Object.create(Ii.prototype), Bi.prototype.constructor = Bi, Bi.prototype.isCatmullRomCurve3 = !0, Bi.prototype.getPoint = function(t, e) {
        e = e || new a;
        var n = this.points,
            i = n.length;
        t *= i - (this.closed ? 0 : 1);
        var r = Math.floor(t);
        if (t -= r, this.closed ? r += 0 < r ? 0 : (Math.floor(Math.abs(r) / i) + 1) * i : 0 === t && r === i - 1 && (r = i - 2, t = 1), this.closed || 0 < r) var o = n[(r - 1) % i];
        else ja.subVectors(n[0], n[1]).add(n[0]), o = ja;
        var s = n[r % i],
            c = n[(r + 1) % i];
        if (this.closed || r + 2 < i ? n = n[(r + 2) % i] : (ja.subVectors(n[i - 1], n[i - 2]).add(n[i - 1]), n = ja), "centripetal" === this.curveType || "chordal" === this.curveType) {
            var h = "chordal" === this.curveType ? .5 : .25;
            i = Math.pow(o.distanceToSquared(s), h), r = Math.pow(s.distanceToSquared(c), h), h = Math.pow(c.distanceToSquared(n), h), 1e-4 > r && (r = 1), 1e-4 > i && (i = r), 1e-4 > h && (h = r), Wa.initNonuniformCatmullRom(o.x, s.x, c.x, n.x, i, r, h), qa.initNonuniformCatmullRom(o.y, s.y, c.y, n.y, i, r, h), Xa.initNonuniformCatmullRom(o.z, s.z, c.z, n.z, i, r, h)
        } else "catmullrom" === this.curveType && (Wa.initCatmullRom(o.x, s.x, c.x, n.x, this.tension), qa.initCatmullRom(o.y, s.y, c.y, n.y, this.tension), Xa.initCatmullRom(o.z, s.z, c.z, n.z, this.tension));
        return e.set(Wa.calc(t), qa.calc(t), Xa.calc(t)), e
    }, Bi.prototype.copy = function(t) { Ii.prototype.copy.call(this, t), this.points = []; for (var e = 0, n = t.points.length; e < n; e++) this.points.push(t.points[e].clone()); return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this }, Bi.prototype.toJSON = function() {
        var t = Ii.prototype.toJSON.call(this);
        t.points = [];
        for (var e = 0, n = this.points.length; e < n; e++) t.points.push(this.points[e].toArray());
        return t.closed = this.closed, t.curveType = this.curveType, t.tension = this.tension, t
    }, Bi.prototype.fromJSON = function(t) {
        Ii.prototype.fromJSON.call(this, t), this.points = [];
        for (var e = 0, n = t.points.length; e < n; e++) {
            var i = t.points[e];
            this.points.push((new a).fromArray(i))
        }
        return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this
    }, Fi.prototype = Object.create(Ii.prototype), Fi.prototype.constructor = Fi, Fi.prototype.isCubicBezierCurve = !0, Fi.prototype.getPoint = function(t, e) {
        e = e || new n;
        var i = this.v0,
            r = this.v1,
            a = this.v2,
            o = this.v3;
        return e.set(Gi(t, i.x, r.x, a.x, o.x), Gi(t, i.y, r.y, a.y, o.y)), e
    }, Fi.prototype.copy = function(t) { return Ii.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this }, Fi.prototype.toJSON = function() { var t = Ii.prototype.toJSON.call(this); return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t }, Fi.prototype.fromJSON = function(t) { return Ii.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this }, Hi.prototype = Object.create(Ii.prototype), Hi.prototype.constructor = Hi, Hi.prototype.isCubicBezierCurve3 = !0, Hi.prototype.getPoint = function(t, e) {
        e = e || new a;
        var n = this.v0,
            i = this.v1,
            r = this.v2,
            o = this.v3;
        return e.set(Gi(t, n.x, i.x, r.x, o.x), Gi(t, n.y, i.y, r.y, o.y), Gi(t, n.z, i.z, r.z, o.z)), e
    }, Hi.prototype.copy = function(t) { return Ii.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this }, Hi.prototype.toJSON = function() { var t = Ii.prototype.toJSON.call(this); return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t }, Hi.prototype.fromJSON = function(t) { return Ii.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this }, Vi.prototype = Object.create(Ii.prototype), Vi.prototype.constructor = Vi, Vi.prototype.isLineCurve = !0, Vi.prototype.getPoint = function(t, e) { return e = e || new n, 1 === t ? e.copy(this.v2) : (e.copy(this.v2).sub(this.v1), e.multiplyScalar(t).add(this.v1)), e }, Vi.prototype.getPointAt = function(t, e) { return this.getPoint(t, e) }, Vi.prototype.getTangent = function() { return this.v2.clone().sub(this.v1).normalize() }, Vi.prototype.copy = function(t) { return Ii.prototype.copy.call(this, t), this.v1.copy(t.v1), this.v2.copy(t.v2), this }, Vi.prototype.toJSON = function() { var t = Ii.prototype.toJSON.call(this); return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t }, Vi.prototype.fromJSON = function(t) { return Ii.prototype.fromJSON.call(this, t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this }, ki.prototype = Object.create(Ii.prototype), ki.prototype.constructor = ki, ki.prototype.isLineCurve3 = !0, ki.prototype.getPoint = function(t, e) { return e = e || new a, 1 === t ? e.copy(this.v2) : (e.copy(this.v2).sub(this.v1), e.multiplyScalar(t).add(this.v1)), e }, ki.prototype.getPointAt = function(t, e) { return this.getPoint(t, e) }, ki.prototype.copy = function(t) { return Ii.prototype.copy.call(this, t), this.v1.copy(t.v1), this.v2.copy(t.v2), this }, ki.prototype.toJSON = function() { var t = Ii.prototype.toJSON.call(this); return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t }, ki.prototype.fromJSON = function(t) { return Ii.prototype.fromJSON.call(this, t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this }, ji.prototype = Object.create(Ii.prototype), ji.prototype.constructor = ji, ji.prototype.isQuadraticBezierCurve = !0, ji.prototype.getPoint = function(t, e) {
        e = e || new n;
        var i = this.v0,
            r = this.v1,
            a = this.v2;
        return e.set(Ui(t, i.x, r.x, a.x), Ui(t, i.y, r.y, a.y)), e
    }, ji.prototype.copy = function(t) { return Ii.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this }, ji.prototype.toJSON = function() { var t = Ii.prototype.toJSON.call(this); return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t }, ji.prototype.fromJSON = function(t) { return Ii.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this }, Wi.prototype = Object.create(Ii.prototype), Wi.prototype.constructor = Wi, Wi.prototype.isQuadraticBezierCurve3 = !0, Wi.prototype.getPoint = function(t, e) {
        e = e || new a;
        var n = this.v0,
            i = this.v1,
            r = this.v2;
        return e.set(Ui(t, n.x, i.x, r.x), Ui(t, n.y, i.y, r.y), Ui(t, n.z, i.z, r.z)), e
    }, Wi.prototype.copy = function(t) { return Ii.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this }, Wi.prototype.toJSON = function() { var t = Ii.prototype.toJSON.call(this); return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t }, Wi.prototype.fromJSON = function(t) { return Ii.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this }, qi.prototype = Object.create(Ii.prototype), qi.prototype.constructor = qi, qi.prototype.isSplineCurve = !0, qi.prototype.getPoint = function(t, e) {
        e = e || new n;
        var i = this.points,
            r = (i.length - 1) * t;
        t = Math.floor(r), r -= t;
        var a = i[0 === t ? t : t - 1],
            o = i[t],
            s = i[t > i.length - 2 ? i.length - 1 : t + 1];
        return i = i[t > i.length - 3 ? i.length - 1 : t + 2], e.set(zi(r, a.x, o.x, s.x, i.x), zi(r, a.y, o.y, s.y, i.y)), e
    }, qi.prototype.copy = function(t) { Ii.prototype.copy.call(this, t), this.points = []; for (var e = 0, n = t.points.length; e < n; e++) this.points.push(t.points[e].clone()); return this }, qi.prototype.toJSON = function() {
        var t = Ii.prototype.toJSON.call(this);
        t.points = [];
        for (var e = 0, n = this.points.length; e < n; e++) t.points.push(this.points[e].toArray());
        return t
    }, qi.prototype.fromJSON = function(t) {
        Ii.prototype.fromJSON.call(this, t), this.points = [];
        for (var e = 0, i = t.points.length; e < i; e++) {
            var r = t.points[e];
            this.points.push((new n).fromArray(r))
        }
        return this
    };
    var Ya = Object.freeze({ ArcCurve: Di, CatmullRomCurve3: Bi, CubicBezierCurve: Fi, CubicBezierCurve3: Hi, EllipseCurve: Oi, LineCurve: Vi, LineCurve3: ki, QuadraticBezierCurve: ji, QuadraticBezierCurve3: Wi, SplineCurve: qi });
    Xi.prototype = Object.assign(Object.create(Ii.prototype), {
        constructor: Xi,
        add: function(t) { this.curves.push(t) },
        closePath: function() {
            var t = this.curves[0].getPoint(0),
                e = this.curves[this.curves.length - 1].getPoint(1);
            t.equals(e) || this.curves.push(new Vi(e, t))
        },
        getPoint: function(t) {
            var e = t * this.getLength(),
                n = this.getCurveLengths();
            for (t = 0; t < n.length;) {
                if (n[t] >= e) return e = n[t] - e, t = this.curves[t], n = t.getLength(), t.getPointAt(0 === n ? 0 : 1 - e / n);
                t++
            }
            return null
        },
        getLength: function() { var t = this.getCurveLengths(); return t[t.length - 1] },
        updateArcLengths: function() { this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths() },
        getCurveLengths: function() { if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths; for (var t = [], e = 0, n = 0, i = this.curves.length; n < i; n++) e += this.curves[n].getLength(), t.push(e); return this.cacheLengths = t },
        getSpacedPoints: function(t) { void 0 === t && (t = 40); for (var e = [], n = 0; n <= t; n++) e.push(this.getPoint(n / t)); return this.autoClose && e.push(e[0]), e },
        getPoints: function(t) {
            t = t || 12;
            for (var e, n = [], i = 0, r = this.curves; i < r.length; i++) {
                var a = r[i];
                a = a.getPoints(a && a.isEllipseCurve ? 2 * t : a && (a.isLineCurve || a.isLineCurve3) ? 1 : a && a.isSplineCurve ? t * a.points.length : t);
                for (var o = 0; o < a.length; o++) {
                    var s = a[o];
                    e && e.equals(s) || (n.push(s), e = s)
                }
            }
            return this.autoClose && 1 < n.length && !n[n.length - 1].equals(n[0]) && n.push(n[0]), n
        },
        copy: function(t) { Ii.prototype.copy.call(this, t), this.curves = []; for (var e = 0, n = t.curves.length; e < n; e++) this.curves.push(t.curves[e].clone()); return this.autoClose = t.autoClose, this },
        toJSON: function() {
            var t = Ii.prototype.toJSON.call(this);
            t.autoClose = this.autoClose, t.curves = [];
            for (var e = 0, n = this.curves.length; e < n; e++) t.curves.push(this.curves[e].toJSON());
            return t
        },
        fromJSON: function(t) {
            Ii.prototype.fromJSON.call(this, t), this.autoClose = t.autoClose, this.curves = [];
            for (var e = 0, n = t.curves.length; e < n; e++) {
                var i = t.curves[e];
                this.curves.push((new Ya[i.type]).fromJSON(i))
            }
            return this
        }
    }), Yi.prototype = Object.assign(Object.create(Xi.prototype), {
        constructor: Yi,
        setFromPoints: function(t) { this.moveTo(t[0].x, t[0].y); for (var e = 1, n = t.length; e < n; e++) this.lineTo(t[e].x, t[e].y) },
        moveTo: function(t, e) { this.currentPoint.set(t, e) },
        lineTo: function(t, e) {
            var i = new Vi(this.currentPoint.clone(), new n(t, e));
            this.curves.push(i), this.currentPoint.set(t, e)
        },
        quadraticCurveTo: function(t, e, i, r) { t = new ji(this.currentPoint.clone(), new n(t, e), new n(i, r)), this.curves.push(t), this.currentPoint.set(i, r) },
        bezierCurveTo: function(t, e, i, r, a, o) { t = new Fi(this.currentPoint.clone(), new n(t, e), new n(i, r), new n(a, o)), this.curves.push(t), this.currentPoint.set(a, o) },
        splineThru: function(t) {
            var e = [this.currentPoint.clone()].concat(t);
            e = new qi(e), this.curves.push(e), this.currentPoint.copy(t[t.length - 1])
        },
        arc: function(t, e, n, i, r, a) { this.absarc(t + this.currentPoint.x, e + this.currentPoint.y, n, i, r, a) },
        absarc: function(t, e, n, i, r, a) { this.absellipse(t, e, n, n, i, r, a) },
        ellipse: function(t, e, n, i, r, a, o, s) { this.absellipse(t + this.currentPoint.x, e + this.currentPoint.y, n, i, r, a, o, s) },
        absellipse: function(t, e, n, i, r, a, o, s) { t = new Oi(t, e, n, i, r, a, o, s), 0 < this.curves.length && (e = t.getPoint(0), e.equals(this.currentPoint) || this.lineTo(e.x, e.y)), this.curves.push(t), t = t.getPoint(1), this.currentPoint.copy(t) },
        copy: function(t) { return Xi.prototype.copy.call(this, t), this.currentPoint.copy(t.currentPoint), this },
        toJSON: function() { var t = Xi.prototype.toJSON.call(this); return t.currentPoint = this.currentPoint.toArray(), t },
        fromJSON: function(t) { return Xi.prototype.fromJSON.call(this, t), this.currentPoint.fromArray(t.currentPoint), this }
    }), Ji.prototype = Object.assign(Object.create(Yi.prototype), {
        constructor: Ji,
        getPointsHoles: function(t) { for (var e = [], n = 0, i = this.holes.length; n < i; n++) e[n] = this.holes[n].getPoints(t); return e },
        extractPoints: function(t) { return { shape: this.getPoints(t), holes: this.getPointsHoles(t) } },
        copy: function(t) { Yi.prototype.copy.call(this, t), this.holes = []; for (var e = 0, n = t.holes.length; e < n; e++) this.holes.push(t.holes[e].clone()); return this },
        toJSON: function() {
            var t = Yi.prototype.toJSON.call(this);
            t.uuid = this.uuid, t.holes = [];
            for (var e = 0, n = this.holes.length; e < n; e++) t.holes.push(this.holes[e].toJSON());
            return t
        },
        fromJSON: function(t) {
            Yi.prototype.fromJSON.call(this, t), this.uuid = t.uuid, this.holes = [];
            for (var e = 0, n = t.holes.length; e < n; e++) {
                var i = t.holes[e];
                this.holes.push((new Yi).fromJSON(i))
            }
            return this
        }
    }), Zi.prototype = Object.assign(Object.create(S.prototype), { constructor: Zi, isLight: !0, copy: function(t) { return S.prototype.copy.call(this, t), this.color.copy(t.color), this.intensity = t.intensity, this }, toJSON: function(t) { return t = S.prototype.toJSON.call(this, t), t.object.color = this.color.getHex(), t.object.intensity = this.intensity, void 0 !== this.groundColor && (t.object.groundColor = this.groundColor.getHex()), void 0 !== this.distance && (t.object.distance = this.distance), void 0 !== this.angle && (t.object.angle = this.angle), void 0 !== this.decay && (t.object.decay = this.decay), void 0 !== this.penumbra && (t.object.penumbra = this.penumbra), void 0 !== this.shadow && (t.object.shadow = this.shadow.toJSON()), t } }), Qi.prototype = Object.assign(Object.create(Zi.prototype), { constructor: Qi, isHemisphereLight: !0, copy: function(t) { return Zi.prototype.copy.call(this, t), this.groundColor.copy(t.groundColor), this } }), Object.assign(Ki.prototype, { copy: function(t) { return this.camera = t.camera.clone(), this.bias = t.bias, this.radius = t.radius, this.mapSize.copy(t.mapSize), this }, clone: function() { return (new this.constructor).copy(this) }, toJSON: function() { var t = {}; return 0 !== this.bias && (t.bias = this.bias), 1 !== this.radius && (t.radius = this.radius), 512 === this.mapSize.x && 512 === this.mapSize.y || (t.mapSize = this.mapSize.toArray()), t.camera = this.camera.toJSON(!1).object, delete t.camera.matrix, t } }), $i.prototype = Object.assign(Object.create(Ki.prototype), {
        constructor: $i,
        isSpotLightShadow: !0,
        update: function(t) {
            var e = this.camera,
                n = 2 * ca.RAD2DEG * t.angle,
                i = this.mapSize.width / this.mapSize.height;
            t = t.distance || e.far, n === e.fov && i === e.aspect && t === e.far || (e.fov = n, e.aspect = i, e.far = t, e.updateProjectionMatrix())
        }
    }), tr.prototype = Object.assign(Object.create(Zi.prototype), { constructor: tr, isSpotLight: !0, copy: function(t) { return Zi.prototype.copy.call(this, t), this.distance = t.distance, this.angle = t.angle, this.penumbra = t.penumbra, this.decay = t.decay, this.target = t.target.clone(), this.shadow = t.shadow.clone(), this } }), er.prototype = Object.assign(Object.create(Zi.prototype), { constructor: er, isPointLight: !0, copy: function(t) { return Zi.prototype.copy.call(this, t), this.distance = t.distance, this.decay = t.decay, this.shadow = t.shadow.clone(), this } }), nr.prototype = Object.assign(Object.create(be.prototype), {
        constructor: nr,
        isOrthographicCamera: !0,
        copy: function(t, e) { return be.prototype.copy.call(this, t, e), this.left = t.left, this.right = t.right, this.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this.view = null === t.view ? null : Object.assign({}, t.view), this },
        setViewOffset: function(t, e, n, i, r, a) { null === this.view && (this.view = { enabled: !0, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = a, this.updateProjectionMatrix() },
        clearViewOffset: function() { null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix() },
        updateProjectionMatrix: function() {
            var t = (this.right - this.left) / (2 * this.zoom),
                e = (this.top - this.bottom) / (2 * this.zoom),
                n = (this.right + this.left) / 2,
                i = (this.top + this.bottom) / 2,
                r = n - t;
            if (n += t, t = i + e, e = i - e, null !== this.view && this.view.enabled) {
                n = this.zoom / (this.view.width / this.view.fullWidth), e = this.zoom / (this.view.height / this.view.fullHeight);
                var a = (this.right - this.left) / this.view.width;
                i = (this.top - this.bottom) / this.view.height, r += this.view.offsetX / n * a, n = r + this.view.width / n * a, t -= this.view.offsetY / e * i, e = t - this.view.height / e * i
            }
            this.projectionMatrix.makeOrthographic(r, n, t, e, this.near, this.far), this.projectionMatrixInverse.getInverse(this.projectionMatrix)
        },
        toJSON: function(t) { return t = S.prototype.toJSON.call(this, t), t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, null !== this.view && (t.object.view = Object.assign({}, this.view)), t }
    }), ir.prototype = Object.assign(Object.create(Ki.prototype), { constructor: ir }), rr.prototype = Object.assign(Object.create(Zi.prototype), { constructor: rr, isDirectionalLight: !0, copy: function(t) { return Zi.prototype.copy.call(this, t), this.target = t.target.clone(), this.shadow = t.shadow.clone(), this } }), ar.prototype = Object.assign(Object.create(Zi.prototype), { constructor: ar, isAmbientLight: !0 }), or.prototype = Object.assign(Object.create(Zi.prototype), { constructor: or, isRectAreaLight: !0, copy: function(t) { return Zi.prototype.copy.call(this, t), this.width = t.width, this.height = t.height, this }, toJSON: function(t) { return t = Zi.prototype.toJSON.call(this, t), t.object.width = this.width, t.object.height = this.height, t } }), Object.assign(sr.prototype, {
        load: function(t, e, n, i) {
            var r = this,
                a = new Si(r.manager);
            a.setPath(r.path), a.load(t, function(t) { e(r.parse(JSON.parse(t))) }, n, i)
        },
        parse: function(t) {
            function e(t) { return void 0 === r[t] && console.warn("THREE.MaterialLoader: Undefined texture", t), r[t] }
            var r = this.textures,
                s = new Ga[t.type];
            if (void 0 !== t.uuid && (s.uuid = t.uuid), void 0 !== t.name && (s.name = t.name), void 0 !== t.color && s.color.setHex(t.color), void 0 !== t.roughness && (s.roughness = t.roughness), void 0 !== t.metalness && (s.metalness = t.metalness), void 0 !== t.emissive && s.emissive.setHex(t.emissive), void 0 !== t.specular && s.specular.setHex(t.specular), void 0 !== t.shininess && (s.shininess = t.shininess), void 0 !== t.clearCoat && (s.clearCoat = t.clearCoat), void 0 !== t.clearCoatRoughness && (s.clearCoatRoughness = t.clearCoatRoughness), void 0 !== t.vertexColors && (s.vertexColors = t.vertexColors), void 0 !== t.fog && (s.fog = t.fog), void 0 !== t.flatShading && (s.flatShading = t.flatShading), void 0 !== t.blending && (s.blending = t.blending), void 0 !== t.combine && (s.combine = t.combine), void 0 !== t.side && (s.side = t.side), void 0 !== t.opacity && (s.opacity = t.opacity), void 0 !== t.transparent && (s.transparent = t.transparent), void 0 !== t.alphaTest && (s.alphaTest = t.alphaTest), void 0 !== t.depthTest && (s.depthTest = t.depthTest), void 0 !== t.depthWrite && (s.depthWrite = t.depthWrite), void 0 !== t.colorWrite && (s.colorWrite = t.colorWrite), void 0 !== t.wireframe && (s.wireframe = t.wireframe), void 0 !== t.wireframeLinewidth && (s.wireframeLinewidth = t.wireframeLinewidth), void 0 !== t.wireframeLinecap && (s.wireframeLinecap = t.wireframeLinecap), void 0 !== t.wireframeLinejoin && (s.wireframeLinejoin = t.wireframeLinejoin), void 0 !== t.rotation && (s.rotation = t.rotation), 1 !== t.linewidth && (s.linewidth = t.linewidth), void 0 !== t.dashSize && (s.dashSize = t.dashSize), void 0 !== t.gapSize && (s.gapSize = t.gapSize), void 0 !== t.scale && (s.scale = t.scale), void 0 !== t.polygonOffset && (s.polygonOffset = t.polygonOffset), void 0 !== t.polygonOffsetFactor && (s.polygonOffsetFactor = t.polygonOffsetFactor), void 0 !== t.polygonOffsetUnits && (s.polygonOffsetUnits = t.polygonOffsetUnits), void 0 !== t.skinning && (s.skinning = t.skinning), void 0 !== t.morphTargets && (s.morphTargets = t.morphTargets), void 0 !== t.dithering && (s.dithering = t.dithering), void 0 !== t.visible && (s.visible = t.visible), void 0 !== t.userData && (s.userData = t.userData), void 0 !== t.uniforms)
                for (var h in t.uniforms) {
                    var l = t.uniforms[h];
                    switch (s.uniforms[h] = {}, l.type) {
                        case "t":
                            s.uniforms[h].value = e(l.value);
                            break;
                        case "c":
                            s.uniforms[h].value = (new x).setHex(l.value);
                            break;
                        case "v2":
                            s.uniforms[h].value = (new n).fromArray(l.value);
                            break;
                        case "v3":
                            s.uniforms[h].value = (new a).fromArray(l.value);
                            break;
                        case "v4":
                            s.uniforms[h].value = (new c).fromArray(l.value);
                            break;
                        case "m3":
                            s.uniforms[h].value = (new o).fromArray(l.value);
                        case "m4":
                            s.uniforms[h].value = (new i).fromArray(l.value);
                            break;
                        default:
                            s.uniforms[h].value = l.value
                    }
                }
            if (void 0 !== t.defines && (s.defines = t.defines), void 0 !== t.vertexShader && (s.vertexShader = t.vertexShader), void 0 !== t.fragmentShader && (s.fragmentShader = t.fragmentShader), void 0 !== t.extensions)
                for (var u in t.extensions) s.extensions[u] = t.extensions[u];
            return void 0 !== t.shading && (s.flatShading = 1 === t.shading), void 0 !== t.size && (s.size = t.size), void 0 !== t.sizeAttenuation && (s.sizeAttenuation = t.sizeAttenuation), void 0 !== t.map && (s.map = e(t.map)), void 0 !== t.alphaMap && (s.alphaMap = e(t.alphaMap), s.transparent = !0), void 0 !== t.bumpMap && (s.bumpMap = e(t.bumpMap)), void 0 !== t.bumpScale && (s.bumpScale = t.bumpScale), void 0 !== t.normalMap && (s.normalMap = e(t.normalMap)), void 0 !== t.normalMapType && (s.normalMapType = t.normalMapType), void 0 !== t.normalScale && (h = t.normalScale, !1 === Array.isArray(h) && (h = [h, h]), s.normalScale = (new n).fromArray(h)), void 0 !== t.displacementMap && (s.displacementMap = e(t.displacementMap)), void 0 !== t.displacementScale && (s.displacementScale = t.displacementScale), void 0 !== t.displacementBias && (s.displacementBias = t.displacementBias), void 0 !== t.roughnessMap && (s.roughnessMap = e(t.roughnessMap)), void 0 !== t.metalnessMap && (s.metalnessMap = e(t.metalnessMap)), void 0 !== t.emissiveMap && (s.emissiveMap = e(t.emissiveMap)), void 0 !== t.emissiveIntensity && (s.emissiveIntensity = t.emissiveIntensity), void 0 !== t.specularMap && (s.specularMap = e(t.specularMap)), void 0 !== t.envMap && (s.envMap = e(t.envMap)), void 0 !== t.envMapIntensity && (s.envMapIntensity = t.envMapIntensity), void 0 !== t.reflectivity && (s.reflectivity = t.reflectivity), void 0 !== t.lightMap && (s.lightMap = e(t.lightMap)), void 0 !== t.lightMapIntensity && (s.lightMapIntensity = t.lightMapIntensity), void 0 !== t.aoMap && (s.aoMap = e(t.aoMap)), void 0 !== t.aoMapIntensity && (s.aoMapIntensity = t.aoMapIntensity), void 0 !== t.gradientMap && (s.gradientMap = e(t.gradientMap)), s
        },
        setPath: function(t) { return this.path = t, this },
        setTextures: function(t) { return this.textures = t, this }
    });
    var Ja = { decodeText: function(t) { if ("undefined" != typeof TextDecoder) return (new TextDecoder).decode(t); for (var e = "", n = 0, i = t.length; n < i; n++) e += String.fromCharCode(t[n]); return decodeURIComponent(escape(e)) }, extractUrlBase: function(t) { var e = t.lastIndexOf("/"); return -1 === e ? "./" : t.substr(0, e + 1) } };
    Object.assign(cr.prototype, {
        load: function(t, e, n, i) {
            var r = this,
                a = new Si(r.manager);
            a.setPath(r.path), a.load(t, function(t) { e(r.parse(JSON.parse(t))) }, n, i)
        },
        parse: function(t) {
            var e = new G,
                n = t.data.index;
            if (void 0 !== n) {
                var i = new Za[n.type](n.array);
                e.setIndex(new A(i, 1))
            }
            n = t.data.attributes;
            for (var r in n) {
                var o = n[r];
                i = new Za[o.type](o.array), i = new A(i, o.itemSize, o.normalized), void 0 !== o.name && (i.name = o.name), e.addAttribute(r, i)
            }
            var s = t.data.morphAttributes;
            if (s)
                for (r in s) {
                    var c = s[r],
                        h = [];
                    n = 0;
                    for (var l = c.length; n < l; n++) o = c[n], i = new Za[o.type](o.array), i = new A(i, o.itemSize, o.normalized), void 0 !== o.name && (i.name = o.name), h.push(i);
                    e.morphAttributes[r] = h
                }
            if (void 0 !== (r = t.data.groups || t.data.drawcalls || t.data.offsets))
                for (n = 0, o = r.length; n !== o; ++n) i = r[n], e.addGroup(i.start, i.count, i.materialIndex);
            return n = t.data.boundingSphere, void 0 !== n && (r = new a, void 0 !== n.center && r.fromArray(n.center), e.boundingSphere = new f(r, n.radius)), t.name && (e.name = t.name), t.userData && (e.userData = t.userData), e
        },
        setPath: function(t) { return this.path = t, this }
    });
    var Za = { Int8Array: Int8Array, Uint8Array: Uint8Array, Uint8ClampedArray: "undefined" != typeof Uint8ClampedArray ? Uint8ClampedArray : Uint8Array, Int16Array: Int16Array, Uint16Array: Uint16Array, Int32Array: Int32Array, Uint32Array: Uint32Array, Float32Array: Float32Array, Float64Array: Float64Array };
    Object.assign(hr.prototype, {
        crossOrigin: "anonymous",
        load: function(t, e, n, i) {
            var r = this,
                a = void 0 === this.path ? Ja.extractUrlBase(t) : this.path;
            this.resourcePath = this.resourcePath || a, a = new Si(r.manager), a.setPath(this.path), a.load(t, function(n) {
                var a = null;
                try { a = JSON.parse(n) } catch (e) { return void 0 !== i && i(e), void console.error("THREE:ObjectLoader: Can't parse " + t + ".", e.message) }
                n = a.metadata, void 0 === n || void 0 === n.type || "geometry" === n.type.toLowerCase() ? console.error("THREE.ObjectLoader: Can't load " + t) : r.parse(a, e)
            }, n, i)
        },
        setPath: function(t) { return this.path = t, this },
        setResourcePath: function(t) { return this.resourcePath = t, this },
        setCrossOrigin: function(t) { return this.crossOrigin = t, this },
        parse: function(t, e) {
            var n = this.parseShape(t.shapes);
            n = this.parseGeometries(t.geometries, n);
            var i = this.parseImages(t.images, function() { void 0 !== e && e(r) });
            i = this.parseTextures(t.textures, i), i = this.parseMaterials(t.materials, i);
            var r = this.parseObject(t.object, n, i);
            return t.animations && (r.animations = this.parseAnimations(t.animations)), void 0 !== t.images && 0 !== t.images.length || void 0 === e || e(r), r
        },
        parseShape: function(t) {
            var e = {};
            if (void 0 !== t)
                for (var n = 0, i = t.length; n < i; n++) {
                    var r = (new Ji).fromJSON(t[n]);
                    e[r.uuid] = r
                }
            return e
        },
        parseGeometries: function(t, e) {
            var n = {};
            if (void 0 !== t)
                for (var i = new cr, r = 0, a = t.length; r < a; r++) {
                    var o = t[r];
                    switch (o.type) {
                        case "PlaneGeometry":
                        case "PlaneBufferGeometry":
                            var s = new Ua[o.type](o.width, o.height, o.widthSegments, o.heightSegments);
                            break;
                        case "BoxGeometry":
                        case "BoxBufferGeometry":
                        case "CubeGeometry":
                            s = new Ua[o.type](o.width, o.height, o.depth, o.widthSegments, o.heightSegments, o.depthSegments);
                            break;
                        case "CircleGeometry":
                        case "CircleBufferGeometry":
                            s = new Ua[o.type](o.radius, o.segments, o.thetaStart, o.thetaLength);
                            break;
                        case "CylinderGeometry":
                        case "CylinderBufferGeometry":
                            s = new Ua[o.type](o.radiusTop, o.radiusBottom, o.height, o.radialSegments, o.heightSegments, o.openEnded, o.thetaStart, o.thetaLength);
                            break;
                        case "ConeGeometry":
                        case "ConeBufferGeometry":
                            s = new Ua[o.type](o.radius, o.height, o.radialSegments, o.heightSegments, o.openEnded, o.thetaStart, o.thetaLength);
                            break;
                        case "SphereGeometry":
                        case "SphereBufferGeometry":
                            s = new Ua[o.type](o.radius, o.widthSegments, o.heightSegments, o.phiStart, o.phiLength, o.thetaStart, o.thetaLength);
                            break;
                        case "DodecahedronGeometry":
                        case "DodecahedronBufferGeometry":
                        case "IcosahedronGeometry":
                        case "IcosahedronBufferGeometry":
                        case "OctahedronGeometry":
                        case "OctahedronBufferGeometry":
                        case "TetrahedronGeometry":
                        case "TetrahedronBufferGeometry":
                            s = new Ua[o.type](o.radius, o.detail);
                            break;
                        case "RingGeometry":
                        case "RingBufferGeometry":
                            s = new Ua[o.type](o.innerRadius, o.outerRadius, o.thetaSegments, o.phiSegments, o.thetaStart, o.thetaLength);
                            break;
                        case "TorusGeometry":
                        case "TorusBufferGeometry":
                            s = new Ua[o.type](o.radius, o.tube, o.radialSegments, o.tubularSegments, o.arc);
                            break;
                        case "TorusKnotGeometry":
                        case "TorusKnotBufferGeometry":
                            s = new Ua[o.type](o.radius, o.tube, o.tubularSegments, o.radialSegments, o.p, o.q);
                            break;
                        case "TubeGeometry":
                        case "TubeBufferGeometry":
                            s = new Ua[o.type]((new Ya[o.path.type]).fromJSON(o.path), o.tubularSegments, o.radius, o.radialSegments, o.closed);
                            break;
                        case "LatheGeometry":
                        case "LatheBufferGeometry":
                            s = new Ua[o.type](o.points, o.segments, o.phiStart, o.phiLength);
                            break;
                        case "PolyhedronGeometry":
                        case "PolyhedronBufferGeometry":
                            s = new Ua[o.type](o.vertices, o.indices, o.radius, o.details);
                            break;
                        case "ShapeGeometry":
                        case "ShapeBufferGeometry":
                            s = [];
                            for (var c = 0, h = o.shapes.length; c < h; c++) {
                                var l = e[o.shapes[c]];
                                s.push(l)
                            }
                            s = new Ua[o.type](s, o.curveSegments);
                            break;
                        case "ExtrudeGeometry":
                        case "ExtrudeBufferGeometry":
                            for (s = [], c = 0, h = o.shapes.length; c < h; c++) l = e[o.shapes[c]], s.push(l);
                            c = o.options.extrudePath, void 0 !== c && (o.options.extrudePath = (new Ya[c.type]).fromJSON(c)), s = new Ua[o.type](s, o.options);
                            break;
                        case "BufferGeometry":
                            s = i.parse(o);
                            break;
                        case "Geometry":
                            "THREE" in window && "LegacyJSONLoader" in THREE ? s = (new THREE.LegacyJSONLoader).parse(o, this.resourcePath).geometry : console.error('THREE.ObjectLoader: You have to import LegacyJSONLoader in order load geometry data of type "Geometry".');
                            break;
                        default:
                            console.warn('THREE.ObjectLoader: Unsupported geometry type "' + o.type + '"');
                            continue
                    }
                    s.uuid = o.uuid, void 0 !== o.name && (s.name = o.name), !0 === s.isBufferGeometry && void 0 !== o.userData && (s.userData = o.userData), n[o.uuid] = s
                }
            return n
        },
        parseMaterials: function(t, e) {
            var n = {},
                i = {};
            if (void 0 !== t) {
                var r = new sr;
                r.setTextures(e), e = 0;
                for (var a = t.length; e < a; e++) {
                    var o = t[e];
                    if ("MultiMaterial" === o.type) {
                        for (var s = [], c = 0; c < o.materials.length; c++) {
                            var h = o.materials[c];
                            void 0 === n[h.uuid] && (n[h.uuid] = r.parse(h)), s.push(n[h.uuid])
                        }
                        i[o.uuid] = s
                    } else void 0 === n[o.uuid] && (n[o.uuid] = r.parse(o)), i[o.uuid] = n[o.uuid]
                }
            }
            return i
        },
        parseAnimations: function(t) {
            for (var e = [], n = 0; n < t.length; n++) {
                var i = t[n],
                    r = wi.parse(i);
                void 0 !== i.uuid && (r.uuid = i.uuid), e.push(r)
            }
            return e
        },
        parseImages: function(t, e) {
            function n(t) { return i.manager.itemStart(t), a.load(t, function() { i.manager.itemEnd(t) }, void 0, function() { i.manager.itemError(t), i.manager.itemEnd(t) }) }
            var i = this,
                r = {};
            if (void 0 !== t && 0 < t.length) {
                e = new Ei(e);
                var a = new Ri(e);
                a.setCrossOrigin(this.crossOrigin), e = 0;
                for (var o = t.length; e < o; e++) {
                    var s = t[e],
                        c = s.url;
                    if (Array.isArray(c)) {
                        r[s.uuid] = [];
                        for (var h = 0, l = c.length; h < l; h++) {
                            var u = c[h];
                            u = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(u) ? u : i.resourcePath + u, r[s.uuid].push(n(u))
                        }
                    } else u = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(s.url) ? s.url : i.resourcePath + s.url, r[s.uuid] = n(u)
                }
            }
            return r
        },
        parseTextures: function(t, e) {
            function n(t, e) { return "number" == typeof t ? t : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", t), e[t]) }
            var i = {};
            if (void 0 !== t)
                for (var r = 0, a = t.length; r < a; r++) {
                    var o = t[r];
                    void 0 === o.image && console.warn('THREE.ObjectLoader: No "image" specified for', o.uuid), void 0 === e[o.image] && console.warn("THREE.ObjectLoader: Undefined image", o.image);
                    var c = Array.isArray(e[o.image]) ? new st(e[o.image]) : new s(e[o.image]);
                    c.needsUpdate = !0, c.uuid = o.uuid, void 0 !== o.name && (c.name = o.name), void 0 !== o.mapping && (c.mapping = n(o.mapping, Qa)), void 0 !== o.offset && c.offset.fromArray(o.offset), void 0 !== o.repeat && c.repeat.fromArray(o.repeat), void 0 !== o.center && c.center.fromArray(o.center), void 0 !== o.rotation && (c.rotation = o.rotation), void 0 !== o.wrap && (c.wrapS = n(o.wrap[0], Ka), c.wrapT = n(o.wrap[1], Ka)), void 0 !== o.format && (c.format = o.format), void 0 !== o.type && (c.type = o.type), void 0 !== o.encoding && (c.encoding = o.encoding), void 0 !== o.minFilter && (c.minFilter = n(o.minFilter, $a)), void 0 !== o.magFilter && (c.magFilter = n(o.magFilter, $a)), void 0 !== o.anisotropy && (c.anisotropy = o.anisotropy), void 0 !== o.flipY && (c.flipY = o.flipY), void 0 !== o.premultiplyAlpha && (c.premultiplyAlpha = o.premultiplyAlpha), void 0 !== o.unpackAlignment && (c.unpackAlignment = o.unpackAlignment), i[o.uuid] = c
                }
            return i
        },
        parseObject: function(t, e, n) {
            function i(t) { return void 0 === e[t] && console.warn("THREE.ObjectLoader: Undefined geometry", t), e[t] }

            function r(t) {
                if (void 0 !== t) {
                    if (Array.isArray(t)) {
                        for (var e = [], i = 0, r = t.length; i < r; i++) {
                            var a = t[i];
                            void 0 === n[a] && console.warn("THREE.ObjectLoader: Undefined material", a), e.push(n[a])
                        }
                        return e
                    }
                    return void 0 === n[t] && console.warn("THREE.ObjectLoader: Undefined material", t), n[t]
                }
            }
            switch (t.type) {
                case "Scene":
                    var a = new Re;
                    void 0 !== t.background && Number.isInteger(t.background) && (a.background = new x(t.background)), void 0 !== t.fog && ("Fog" === t.fog.type ? a.fog = new Le(t.fog.color, t.fog.near, t.fog.far) : "FogExp2" === t.fog.type && (a.fog = new Ae(t.fog.color, t.fog.density)));
                    break;
                case "PerspectiveCamera":
                    a = new we(t.fov, t.aspect, t.near, t.far), void 0 !== t.focus && (a.focus = t.focus), void 0 !== t.zoom && (a.zoom = t.zoom), void 0 !== t.filmGauge && (a.filmGauge = t.filmGauge), void 0 !== t.filmOffset && (a.filmOffset = t.filmOffset), void 0 !== t.view && (a.view = Object.assign({}, t.view));
                    break;
                case "OrthographicCamera":
                    a = new nr(t.left, t.right, t.top, t.bottom, t.near, t.far), void 0 !== t.zoom && (a.zoom = t.zoom), void 0 !== t.view && (a.view = Object.assign({}, t.view));
                    break;
                case "AmbientLight":
                    a = new ar(t.color, t.intensity);
                    break;
                case "DirectionalLight":
                    a = new rr(t.color, t.intensity);
                    break;
                case "PointLight":
                    a = new er(t.color, t.intensity, t.distance, t.decay);
                    break;
                case "RectAreaLight":
                    a = new or(t.color, t.intensity, t.width, t.height);
                    break;
                case "SpotLight":
                    a = new tr(t.color, t.intensity, t.distance, t.angle, t.penumbra, t.decay);
                    break;
                case "HemisphereLight":
                    a = new Qi(t.color, t.groundColor, t.intensity);
                    break;
                case "SkinnedMesh":
                    console.warn("THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet.");
                case "Mesh":
                    a = i(t.geometry);
                    var o = r(t.material);
                    a = a.bones && 0 < a.bones.length ? new Ne(a, o) : new J(a, o), void 0 !== t.drawMode && a.setDrawMode(t.drawMode);
                    break;
                case "LOD":
                    a = new De;
                    break;
                case "Line":
                    a = new Ge(i(t.geometry), r(t.material), t.mode);
                    break;
                case "LineLoop":
                    a = new He(i(t.geometry), r(t.material));
                    break;
                case "LineSegments":
                    a = new Fe(i(t.geometry), r(t.material));
                    break;
                case "PointCloud":
                case "Points":
                    a = new ke(i(t.geometry), r(t.material));
                    break;
                case "Sprite":
                    a = new Oe(r(t.material));
                    break;
                case "Group":
                    a = new xe;
                    break;
                default:
                    a = new S
            }
            if (a.uuid = t.uuid, void 0 !== t.name && (a.name = t.name), void 0 !== t.matrix ? (a.matrix.fromArray(t.matrix), void 0 !== t.matrixAutoUpdate && (a.matrixAutoUpdate = t.matrixAutoUpdate), a.matrixAutoUpdate && a.matrix.decompose(a.position, a.quaternion, a.scale)) : (void 0 !== t.position && a.position.fromArray(t.position), void 0 !== t.rotation && a.rotation.fromArray(t.rotation), void 0 !== t.quaternion && a.quaternion.fromArray(t.quaternion), void 0 !== t.scale && a.scale.fromArray(t.scale)), void 0 !== t.castShadow && (a.castShadow = t.castShadow), void 0 !== t.receiveShadow && (a.receiveShadow = t.receiveShadow), t.shadow && (void 0 !== t.shadow.bias && (a.shadow.bias = t.shadow.bias), void 0 !== t.shadow.radius && (a.shadow.radius = t.shadow.radius), void 0 !== t.shadow.mapSize && a.shadow.mapSize.fromArray(t.shadow.mapSize), void 0 !== t.shadow.camera && (a.shadow.camera = this.parseObject(t.shadow.camera))), void 0 !== t.visible && (a.visible = t.visible), void 0 !== t.frustumCulled && (a.frustumCulled = t.frustumCulled), void 0 !== t.renderOrder && (a.renderOrder = t.renderOrder), void 0 !== t.userData && (a.userData = t.userData), void 0 !== t.layers && (a.layers.mask = t.layers), void 0 !== t.children) { o = t.children; for (var s = 0; s < o.length; s++) a.add(this.parseObject(o[s], e, n)) }
            if ("LOD" === t.type)
                for (t = t.levels, o = 0; o < t.length; o++) {
                    s = t[o];
                    var c = a.getObjectByProperty("uuid", s.object);
                    void 0 !== c && a.addLevel(c, s.distance)
                }
            return a
        }
    });
    var Qa = { UVMapping: 300, CubeReflectionMapping: 301, CubeRefractionMapping: 302, EquirectangularReflectionMapping: 303, EquirectangularRefractionMapping: 304, SphericalReflectionMapping: 305, CubeUVReflectionMapping: 306, CubeUVRefractionMapping: 307 },
        Ka = { RepeatWrapping: 1e3, ClampToEdgeWrapping: 1001, MirroredRepeatWrapping: 1002 },
        $a = { NearestFilter: 1003, NearestMipMapNearestFilter: 1004, NearestMipMapLinearFilter: 1005, LinearFilter: 1006, LinearMipMapNearestFilter: 1007, LinearMipMapLinearFilter: 1008 };
    lr.prototype = {
        constructor: lr,
        setOptions: function(t) { return this.options = t, this },
        load: function(t, e, n, i) {
            void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
            var r = this,
                a = Ha.get(t);
            if (void 0 !== a) return r.manager.itemStart(t), setTimeout(function() { e && e(a), r.manager.itemEnd(t) }, 0), a;
            fetch(t).then(function(t) { return t.blob() }).then(function(t) { return createImageBitmap(t, r.options) }).then(function(n) { Ha.add(t, n), e && e(n), r.manager.itemEnd(t) })["catch"](function(e) { i && i(e), r.manager.itemError(t), r.manager.itemEnd(t) }), r.manager.itemStart(t)
        },
        setCrossOrigin: function() { return this },
        setPath: function(t) { return this.path = t, this }
    }, Object.assign(ur.prototype, {
        moveTo: function(t, e) { this.currentPath = new Yi, this.subPaths.push(this.currentPath), this.currentPath.moveTo(t, e) },
        lineTo: function(t, e) { this.currentPath.lineTo(t, e) },
        quadraticCurveTo: function(t, e, n, i) { this.currentPath.quadraticCurveTo(t, e, n, i) },
        bezierCurveTo: function(t, e, n, i, r, a) { this.currentPath.bezierCurveTo(t, e, n, i, r, a) },
        splineThru: function(t) { this.currentPath.splineThru(t) },
        toShapes: function(t, e) {
            function n(t) {
                for (var e = [], n = 0, i = t.length; n < i; n++) {
                    var r = t[n],
                        a = new Ji;
                    a.curves = r.curves, e.push(a)
                }
                return e
            }

            function i(t, e) {
                for (var n = e.length, i = !1, r = n - 1, a = 0; a < n; r = a++) {
                    var o = e[r],
                        s = e[a],
                        c = s.x - o.x,
                        h = s.y - o.y;
                    if (Math.abs(h) > Number.EPSILON) {
                        if (0 > h && (o = e[a], c = -c, s = e[r], h = -h), !(t.y < o.y || t.y > s.y))
                            if (t.y === o.y) { if (t.x === o.x) return !0 } else {
                                if (0 === (r = h * (t.x - o.x) - c * (t.y - o.y))) return !0;
                                0 > r || (i = !i)
                            }
                    } else if (t.y === o.y && (s.x <= t.x && t.x <= o.x || o.x <= t.x && t.x <= s.x)) return !0
                }
                return i
            }
            var r = Ba.isClockWise,
                a = this.subPaths;
            if (0 === a.length) return [];
            if (!0 === e) return n(a);
            if (e = [], 1 === a.length) {
                var o = a[0],
                    s = new Ji;
                return s.curves = o.curves, e.push(s), e
            }
            var c = !r(a[0].getPoints());
            c = t ? !c : c, s = [];
            var h = [],
                l = [],
                u = 0;
            h[u] = void 0, l[u] = [];
            for (var p = 0, d = a.length; p < d; p++) {
                o = a[p];
                var f = o.getPoints(),
                    m = r(f);
                (m = t ? !m : m) ? (!c && h[u] && u++, h[u] = { s: new Ji, p: f }, h[u].s.curves = o.curves, c && u++, l[u] = []) : l[u].push({ h: o, p: f[0] })
            }
            if (!h[0]) return n(a);
            if (1 < h.length) {
                for (p = !1, t = [], r = 0, a = h.length; r < a; r++) s[r] = [];
                for (r = 0, a = h.length; r < a; r++)
                    for (o = l[r], m = 0; m < o.length; m++) {
                        for (c = o[m], u = !0, f = 0; f < h.length; f++) i(c.p, h[f].p) && (r !== f && t.push({ froms: r, tos: f, hole: m }), u ? (u = !1, s[f].push(c)) : p = !0);
                        u && s[r].push(c)
                    }
                0 < t.length && (p || (l = s))
            }
            for (p = 0, r = h.length; p < r; p++)
                for (s = h[p].s, e.push(s), t = l[p], a = 0, o = t.length; a < o; a++) s.holes.push(t[a].h);
            return e
        }
    }), Object.assign(pr.prototype, {
        isFont: !0,
        generateShapes: function(t, e) {
            void 0 === e && (e = 100);
            var n = [],
                i = e;
            e = this.data;
            var r = Array.from ? Array.from(t) : String(t).split("");
            i /= e.resolution;
            var a = (e.boundingBox.yMax - e.boundingBox.yMin + e.underlineThickness) * i;
            t = [];
            for (var o = 0, s = 0, c = 0; c < r.length; c++) {
                var h = r[c];
                if ("\n" === h) o = 0, s -= a;
                else {
                    var l = i,
                        u = o,
                        p = s;
                    if (h = e.glyphs[h] || e.glyphs["?"]) {
                        var d = new ur;
                        if (h.o)
                            for (var f = h._cachedOutline || (h._cachedOutline = h.o.split(" ")), m = 0, g = f.length; m < g;) switch (f[m++]) {
                                case "m":
                                    var v = f[m++] * l + u,
                                        y = f[m++] * l + p;
                                    d.moveTo(v, y);
                                    break;
                                case "l":
                                    v = f[m++] * l + u, y = f[m++] * l + p, d.lineTo(v, y);
                                    break;
                                case "q":
                                    var x = f[m++] * l + u,
                                        b = f[m++] * l + p,
                                        w = f[m++] * l + u,
                                        _ = f[m++] * l + p;
                                    d.quadraticCurveTo(w, _, x, b);
                                    break;
                                case "b":
                                    x = f[m++] * l + u, b = f[m++] * l + p, w = f[m++] * l + u, _ = f[m++] * l + p, v = f[m++] * l + u, y = f[m++] * l + p, d.bezierCurveTo(w, _, v, y, x, b)
                            }
                        l = { offsetX: h.ha * l, path: d }
                    } else l = void 0;
                    o += l.offsetX, t.push(l.path)
                }
            }
            for (e = 0, r = t.length; e < r; e++) Array.prototype.push.apply(n, t[e].toShapes());
            return n
        }
    }), Object.assign(dr.prototype, {
        load: function(t, e, n, i) {
            var r = this,
                a = new Si(this.manager);
            a.setPath(this.path), a.load(t, function(t) {
                try { var n = JSON.parse(t) } catch (e) { console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."), n = JSON.parse(t.substring(65, t.length - 2)) }
                t = r.parse(n), e && e(t)
            }, n, i)
        },
        parse: function(t) { return new pr(t) },
        setPath: function(t) { return this.path = t, this }
    }), fr.Handlers = { handlers: [], add: function(t, e) { this.handlers.push(t, e) }, get: function(t) { for (var e = this.handlers, n = 0, i = e.length; n < i; n += 2) { var r = e[n + 1]; if (e[n].test(t)) return r } return null } }, Object.assign(fr.prototype, {
        crossOrigin: "anonymous",
        onLoadStart: function() {},
        onLoadProgress: function() {},
        onLoadComplete: function() {},
        initMaterials: function(t, e, n) { for (var i = [], r = 0; r < t.length; ++r) i[r] = this.createMaterial(t[r], e, n); return i },
        createMaterial: function() {
            var t = { NoBlending: 0, NormalBlending: 1, AdditiveBlending: 2, SubtractiveBlending: 3, MultiplyBlending: 4, CustomBlending: 5 },
                e = new x,
                n = new Ci,
                i = new sr;
            return function(r, a, o) {
                function s(t, e, i, r, s) { t = a + t; var c = fr.Handlers.get(t); return null !== c ? t = c.load(t) : (n.setCrossOrigin(o), t = n.load(t)), void 0 !== e && (t.repeat.fromArray(e), 1 !== e[0] && (t.wrapS = 1e3), 1 !== e[1] && (t.wrapT = 1e3)), void 0 !== i && t.offset.fromArray(i), void 0 !== r && ("repeat" === r[0] && (t.wrapS = 1e3), "mirror" === r[0] && (t.wrapS = 1002), "repeat" === r[1] && (t.wrapT = 1e3), "mirror" === r[1] && (t.wrapT = 1002)), void 0 !== s && (t.anisotropy = s), e = ca.generateUUID(), h[e] = t, e }
                var c, h = {},
                    l = { uuid: ca.generateUUID(), type: "MeshLambertMaterial" };
                for (c in r) {
                    var u = r[c];
                    switch (c) {
                        case "DbgColor":
                        case "DbgIndex":
                        case "opticalDensity":
                        case "illumination":
                            break;
                        case "DbgName":
                            l.name = u;
                            break;
                        case "blending":
                            l.blending = t[u];
                            break;
                        case "colorAmbient":
                        case "mapAmbient":
                            console.warn("THREE.Loader.createMaterial:", c, "is no longer supported.");
                            break;
                        case "colorDiffuse":
                            l.color = e.fromArray(u).getHex();
                            break;
                        case "colorSpecular":
                            l.specular = e.fromArray(u).getHex();
                            break;
                        case "colorEmissive":
                            l.emissive = e.fromArray(u).getHex();
                            break;
                        case "specularCoef":
                            l.shininess = u;
                            break;
                        case "shading":
                            "basic" === u.toLowerCase() && (l.type = "MeshBasicMaterial"), "phong" === u.toLowerCase() && (l.type = "MeshPhongMaterial"), "standard" === u.toLowerCase() && (l.type = "MeshStandardMaterial");
                            break;
                        case "mapDiffuse":
                            l.map = s(u, r.mapDiffuseRepeat, r.mapDiffuseOffset, r.mapDiffuseWrap, r.mapDiffuseAnisotropy);
                            break;
                        case "mapDiffuseRepeat":
                        case "mapDiffuseOffset":
                        case "mapDiffuseWrap":
                        case "mapDiffuseAnisotropy":
                            break;
                        case "mapEmissive":
                            l.emissiveMap = s(u, r.mapEmissiveRepeat, r.mapEmissiveOffset, r.mapEmissiveWrap, r.mapEmissiveAnisotropy);
                            break;
                        case "mapEmissiveRepeat":
                        case "mapEmissiveOffset":
                        case "mapEmissiveWrap":
                        case "mapEmissiveAnisotropy":
                            break;
                        case "mapLight":
                            l.lightMap = s(u, r.mapLightRepeat, r.mapLightOffset, r.mapLightWrap, r.mapLightAnisotropy);
                            break;
                        case "mapLightRepeat":
                        case "mapLightOffset":
                        case "mapLightWrap":
                        case "mapLightAnisotropy":
                            break;
                        case "mapAO":
                            l.aoMap = s(u, r.mapAORepeat, r.mapAOOffset, r.mapAOWrap, r.mapAOAnisotropy);
                            break;
                        case "mapAORepeat":
                        case "mapAOOffset":
                        case "mapAOWrap":
                        case "mapAOAnisotropy":
                            break;
                        case "mapBump":
                            l.bumpMap = s(u, r.mapBumpRepeat, r.mapBumpOffset, r.mapBumpWrap, r.mapBumpAnisotropy);
                            break;
                        case "mapBumpScale":
                            l.bumpScale = u;
                            break;
                        case "mapBumpRepeat":
                        case "mapBumpOffset":
                        case "mapBumpWrap":
                        case "mapBumpAnisotropy":
                            break;
                        case "mapNormal":
                            l.normalMap = s(u, r.mapNormalRepeat, r.mapNormalOffset, r.mapNormalWrap, r.mapNormalAnisotropy);
                            break;
                        case "mapNormalFactor":
                            l.normalScale = u;
                            break;
                        case "mapNormalRepeat":
                        case "mapNormalOffset":
                        case "mapNormalWrap":
                        case "mapNormalAnisotropy":
                            break;
                        case "mapSpecular":
                            l.specularMap = s(u, r.mapSpecularRepeat, r.mapSpecularOffset, r.mapSpecularWrap, r.mapSpecularAnisotropy);
                            break;
                        case "mapSpecularRepeat":
                        case "mapSpecularOffset":
                        case "mapSpecularWrap":
                        case "mapSpecularAnisotropy":
                            break;
                        case "mapMetalness":
                            l.metalnessMap = s(u, r.mapMetalnessRepeat, r.mapMetalnessOffset, r.mapMetalnessWrap, r.mapMetalnessAnisotropy);
                            break;
                        case "mapMetalnessRepeat":
                        case "mapMetalnessOffset":
                        case "mapMetalnessWrap":
                        case "mapMetalnessAnisotropy":
                            break;
                        case "mapRoughness":
                            l.roughnessMap = s(u, r.mapRoughnessRepeat, r.mapRoughnessOffset, r.mapRoughnessWrap, r.mapRoughnessAnisotropy);
                            break;
                        case "mapRoughnessRepeat":
                        case "mapRoughnessOffset":
                        case "mapRoughnessWrap":
                        case "mapRoughnessAnisotropy":
                            break;
                        case "mapAlpha":
                            l.alphaMap = s(u, r.mapAlphaRepeat, r.mapAlphaOffset, r.mapAlphaWrap, r.mapAlphaAnisotropy);
                            break;
                        case "mapAlphaRepeat":
                        case "mapAlphaOffset":
                        case "mapAlphaWrap":
                        case "mapAlphaAnisotropy":
                            break;
                        case "flipSided":
                            l.side = 1;
                            break;
                        case "doubleSided":
                            l.side = 2;
                            break;
                        case "transparency":
                            console.warn("THREE.Loader.createMaterial: transparency has been renamed to opacity"), l.opacity = u;
                            break;
                        case "depthTest":
                        case "depthWrite":
                        case "colorWrite":
                        case "opacity":
                        case "reflectivity":
                        case "transparent":
                        case "visible":
                        case "wireframe":
                            l[c] = u;
                            break;
                        case "vertexColors":
                            !0 === u && (l.vertexColors = 2), "face" === u && (l.vertexColors = 1);
                            break;
                        default:
                            console.error("THREE.Loader.createMaterial: Unsupported", c, u)
                    }
                }
                return "MeshBasicMaterial" === l.type && delete l.emissive, "MeshPhongMaterial" !== l.type && delete l.specular, 1 > l.opacity && (l.transparent = !0), i.setTextures(h), i.parse(l)
            }
        }()
    });
    var to, eo = { getContext: function() { return void 0 === to && (to = new(window.AudioContext || window.webkitAudioContext)), to }, setContext: function(t) { to = t } };
    Object.assign(mr.prototype, {
        load: function(t, e, n, i) {
            var r = new Si(this.manager);
            r.setResponseType("arraybuffer"), r.setPath(this.path), r.load(t, function(t) { t = t.slice(0), eo.getContext().decodeAudioData(t, function(t) { e(t) }) }, n, i)
        },
        setPath: function(t) { return this.path = t, this }
    }), Object.assign(gr.prototype, {
        update: function() {
            var t, e, n, r, a, o, s, c, h = new i,
                l = new i;
            return function(i) {
                if (t !== this || e !== i.focus || n !== i.fov || r !== i.aspect * this.aspect || a !== i.near || o !== i.far || s !== i.zoom || c !== this.eyeSep) {
                    t = this, e = i.focus, n = i.fov, r = i.aspect * this.aspect, a = i.near, o = i.far, s = i.zoom;
                    var u = i.projectionMatrix.clone();
                    c = this.eyeSep / 2;
                    var p = c * a / e,
                        d = a * Math.tan(ca.DEG2RAD * n * .5) / s;
                    l.elements[12] = -c, h.elements[12] = c;
                    var f = -d * r + p,
                        m = d * r + p;
                    u.elements[0] = 2 * a / (m - f), u.elements[8] = (m + f) / (m - f), this.cameraL.projectionMatrix.copy(u), f = -d * r - p, m = d * r - p, u.elements[0] = 2 * a / (m - f), u.elements[8] = (m + f) / (m - f), this.cameraR.projectionMatrix.copy(u)
                }
                this.cameraL.matrixWorld.copy(i.matrixWorld).multiply(l), this.cameraR.matrixWorld.copy(i.matrixWorld).multiply(h)
            }
        }()
    }), vr.prototype = Object.create(S.prototype), vr.prototype.constructor = vr, Object.assign(yr.prototype, {
        start: function() { this.oldTime = this.startTime = ("undefined" == typeof performance ? Date : performance).now(), this.elapsedTime = 0, this.running = !0 },
        stop: function() { this.getElapsedTime(), this.autoStart = this.running = !1 },
        getElapsedTime: function() { return this.getDelta(), this.elapsedTime },
        getDelta: function() {
            var t = 0;
            if (this.autoStart && !this.running) return this.start(), 0;
            if (this.running) {
                var e = ("undefined" == typeof performance ? Date : performance).now();
                t = (e - this.oldTime) / 1e3, this.oldTime = e, this.elapsedTime += t
            }
            return t
        }
    }), xr.prototype = Object.assign(Object.create(S.prototype), {
        constructor: xr,
        getInput: function() { return this.gain },
        removeFilter: function() { return null !== this.filter && (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination), this.gain.connect(this.context.destination), this.filter = null), this },
        getFilter: function() { return this.filter },
        setFilter: function(t) { return null !== this.filter ? (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination), this.filter = t, this.gain.connect(this.filter), this.filter.connect(this.context.destination), this },
        getMasterVolume: function() { return this.gain.gain.value },
        setMasterVolume: function(t) { return this.gain.gain.setTargetAtTime(t, this.context.currentTime, .01), this },
        updateMatrixWorld: function() {
            var t = new a,
                e = new r,
                n = new a,
                i = new a,
                o = new yr;
            return function(r) {
                S.prototype.updateMatrixWorld.call(this, r), r = this.context.listener;
                var a = this.up;
                if (this.timeDelta = o.getDelta(), this.matrixWorld.decompose(t, e, n), i.set(0, 0, -1).applyQuaternion(e), r.positionX) {
                    var s = this.context.currentTime + this.timeDelta;
                    r.positionX.linearRampToValueAtTime(t.x, s), r.positionY.linearRampToValueAtTime(t.y, s), r.positionZ.linearRampToValueAtTime(t.z, s), r.forwardX.linearRampToValueAtTime(i.x, s), r.forwardY.linearRampToValueAtTime(i.y, s), r.forwardZ.linearRampToValueAtTime(i.z, s), r.upX.linearRampToValueAtTime(a.x, s), r.upY.linearRampToValueAtTime(a.y, s), r.upZ.linearRampToValueAtTime(a.z, s)
                } else r.setPosition(t.x, t.y, t.z), r.setOrientation(i.x, i.y, i.z, a.x, a.y, a.z)
            }
        }()
    }), br.prototype = Object.assign(Object.create(S.prototype), {
        constructor: br,
        getOutput: function() { return this.gain },
        setNodeSource: function(t) { return this.hasPlaybackControl = !1, this.sourceType = "audioNode", this.source = t, this.connect(), this },
        setMediaElementSource: function(t) { return this.hasPlaybackControl = !1, this.sourceType = "mediaNode", this.source = this.context.createMediaElementSource(t), this.connect(), this },
        setBuffer: function(t) { return this.buffer = t, this.sourceType = "buffer", this.autoplay && this.play(), this },
        play: function() {
            if (!0 === this.isPlaying) console.warn("THREE.Audio: Audio is already playing.");
            else {
                if (!1 !== this.hasPlaybackControl) { var t = this.context.createBufferSource(); return t.buffer = this.buffer, t.loop = this.loop, t.onended = this.onEnded.bind(this), this.startTime = this.context.currentTime, t.start(this.startTime, this.offset), this.isPlaying = !0, this.source = t, this.setDetune(this.detune), this.setPlaybackRate(this.playbackRate), this.connect() }
                console.warn("THREE.Audio: this Audio has no playback control.")
            }
        },
        pause: function() {
            if (!1 !== this.hasPlaybackControl) return !0 === this.isPlaying && (this.source.stop(), this.source.onended = null, this.offset += (this.context.currentTime - this.startTime) * this.playbackRate, this.isPlaying = !1), this;
            console.warn("THREE.Audio: this Audio has no playback control.")
        },
        stop: function() {
            if (!1 !== this.hasPlaybackControl) return this.source.stop(), this.source.onended = null, this.offset = 0, this.isPlaying = !1, this;
            console.warn("THREE.Audio: this Audio has no playback control.")
        },
        connect: function() {
            if (0 < this.filters.length) {
                this.source.connect(this.filters[0]);
                for (var t = 1, e = this.filters.length; t < e; t++) this.filters[t - 1].connect(this.filters[t]);
                this.filters[this.filters.length - 1].connect(this.getOutput())
            } else this.source.connect(this.getOutput());
            return this
        },
        disconnect: function() {
            if (0 < this.filters.length) {
                this.source.disconnect(this.filters[0]);
                for (var t = 1, e = this.filters.length; t < e; t++) this.filters[t - 1].disconnect(this.filters[t]);
                this.filters[this.filters.length - 1].disconnect(this.getOutput())
            } else this.source.disconnect(this.getOutput());
            return this
        },
        getFilters: function() { return this.filters },
        setFilters: function(t) { return t || (t = []), !0 === this.isPlaying ? (this.disconnect(), this.filters = t, this.connect()) : this.filters = t, this },
        setDetune: function(t) { if (this.detune = t, void 0 !== this.source.detune) return !0 === this.isPlaying && this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, .01), this },
        getDetune: function() { return this.detune },
        getFilter: function() { return this.getFilters()[0] },
        setFilter: function(t) { return this.setFilters(t ? [t] : []) },
        setPlaybackRate: function(t) {
            if (!1 !== this.hasPlaybackControl) return this.playbackRate = t, !0 === this.isPlaying && this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, .01), this;
            console.warn("THREE.Audio: this Audio has no playback control.")
        },
        getPlaybackRate: function() { return this.playbackRate },
        onEnded: function() { this.isPlaying = !1 },
        getLoop: function() { return !1 === this.hasPlaybackControl ? (console.warn("THREE.Audio: this Audio has no playback control."), !1) : this.loop },
        setLoop: function(t) {
            if (!1 !== this.hasPlaybackControl) return this.loop = t, !0 === this.isPlaying && (this.source.loop = this.loop), this;
            console.warn("THREE.Audio: this Audio has no playback control.")
        },
        getVolume: function() { return this.gain.gain.value },
        setVolume: function(t) { return this.gain.gain.setTargetAtTime(t, this.context.currentTime, .01), this }
    }), wr.prototype = Object.assign(Object.create(br.prototype), {
        constructor: wr,
        getOutput: function() { return this.panner },
        getRefDistance: function() { return this.panner.refDistance },
        setRefDistance: function(t) { return this.panner.refDistance = t, this },
        getRolloffFactor: function() { return this.panner.rolloffFactor },
        setRolloffFactor: function(t) { return this.panner.rolloffFactor = t, this },
        getDistanceModel: function() { return this.panner.distanceModel },
        setDistanceModel: function(t) { return this.panner.distanceModel = t, this },
        getMaxDistance: function() { return this.panner.maxDistance },
        setMaxDistance: function(t) { return this.panner.maxDistance = t, this },
        setDirectionalCone: function(t, e, n) { return this.panner.coneInnerAngle = t, this.panner.coneOuterAngle = e, this.panner.coneOuterGain = n, this },
        updateMatrixWorld: function() {
            var t = new a,
                e = new r,
                n = new a,
                i = new a;
            return function(r) {
                if (S.prototype.updateMatrixWorld.call(this, r), !0 !== this.hasPlaybackControl || !1 !== this.isPlaying)
                    if (this.matrixWorld.decompose(t, e, n), i.set(0, 0, 1).applyQuaternion(e), r = this.panner, r.positionX) {
                        var a = this.context.currentTime + this.listener.timeDelta;
                        r.positionX.linearRampToValueAtTime(t.x, a), r.positionY.linearRampToValueAtTime(t.y, a), r.positionZ.linearRampToValueAtTime(t.z, a), r.orientationX.linearRampToValueAtTime(i.x, a), r.orientationY.linearRampToValueAtTime(i.y, a), r.orientationZ.linearRampToValueAtTime(i.z, a)
                    } else r.setPosition(t.x, t.y, t.z), r.setOrientation(i.x, i.y, i.z)
            }
        }()
    }), Object.assign(_r.prototype, { getFrequencyData: function() { return this.analyser.getByteFrequencyData(this.data), this.data }, getAverageFrequency: function() { for (var t = 0, e = this.getFrequencyData(), n = 0; n < e.length; n++) t += e[n]; return t / e.length } }), Object.assign(Mr.prototype, {
        accumulate: function(t, e) {
            var n = this.buffer,
                i = this.valueSize;
            t = t * i + i;
            var r = this.cumulativeWeight;
            if (0 === r) {
                for (r = 0; r !== i; ++r) n[t + r] = n[r];
                r = e
            } else r += e, this._mixBufferRegion(n, t, 0, e / r, i);
            this.cumulativeWeight = r
        },
        apply: function(t) {
            var e = this.valueSize,
                n = this.buffer;
            t = t * e + e;
            var i = this.cumulativeWeight,
                r = this.binding;
            this.cumulativeWeight = 0, 1 > i && this._mixBufferRegion(n, t, 3 * e, 1 - i, e), i = e;
            for (var a = e + e; i !== a; ++i)
                if (n[i] !== n[i + e]) { r.setValue(n, t); break }
        },
        saveOriginalState: function() {
            var t = this.buffer,
                e = this.valueSize,
                n = 3 * e;
            this.binding.getValue(t, n);
            for (var i = e; i !== n; ++i) t[i] = t[n + i % e];
            this.cumulativeWeight = 0
        },
        restoreOriginalState: function() { this.binding.setValue(this.buffer, 3 * this.valueSize) },
        _select: function(t, e, n, i, r) {
            if (.5 <= i)
                for (i = 0; i !== r; ++i) t[e + i] = t[n + i]
        },
        _slerp: function(t, e, n, i) { r.slerpFlat(t, e, t, e, t, n, i) },
        _lerp: function(t, e, n, i, r) {
            for (var a = 1 - i, o = 0; o !== r; ++o) {
                var s = e + o;
                t[s] = t[s] * a + t[n + o] * i
            }
        }
    }), Object.assign(Er.prototype, {
        getValue: function(t, e) {
            this.bind();
            var n = this._bindings[this._targetGroup.nCachedObjects_];
            void 0 !== n && n.getValue(t, e)
        },
        setValue: function(t, e) { for (var n = this._bindings, i = this._targetGroup.nCachedObjects_, r = n.length; i !== r; ++i) n[i].setValue(t, e) },
        bind: function() { for (var t = this._bindings, e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e) t[e].bind() },
        unbind: function() { for (var t = this._bindings, e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e) t[e].unbind() }
    }), Object.assign(Sr, {
        Composite: Er,
        create: function(t, e, n) { return t && t.isAnimationObjectGroup ? new Sr.Composite(t, e, n) : new Sr(t, e, n) },
        sanitizeNodeName: function() { var t = /[\[\]\.:\/]/g; return function(e) { return e.replace(/\s/g, "_").replace(t, "") } }(),
        parseTrackName: function() {
            var t = "[^" + "\\[\\]\\.:\\/".replace("\\.", "") + "]",
                e = /((?:WC+[\/:])*)/.source.replace("WC", "[^\\[\\]\\.:\\/]");
            t = /(WCOD+)?/.source.replace("WCOD", t);
            var n = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", "[^\\[\\]\\.:\\/]"),
                i = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", "[^\\[\\]\\.:\\/]"),
                r = new RegExp("^" + e + t + n + i + "$"),
                a = ["material", "materials", "bones"];
            return function(t) {
                var e = r.exec(t);
                if (!e) throw Error("PropertyBinding: Cannot parse trackName: " + t);
                e = { nodeName: e[2], objectName: e[3], objectIndex: e[4], propertyName: e[5], propertyIndex: e[6] };
                var n = e.nodeName && e.nodeName.lastIndexOf(".");
                if (void 0 !== n && -1 !== n) { var i = e.nodeName.substring(n + 1); - 1 !== a.indexOf(i) && (e.nodeName = e.nodeName.substring(0, n), e.objectName = i) }
                if (null === e.propertyName || 0 === e.propertyName.length) throw Error("PropertyBinding: can not parse propertyName from trackName: " + t);
                return e
            }
        }(),
        findNode: function(t, e) { if (!e || "" === e || "root" === e || "." === e || -1 === e || e === t.name || e === t.uuid) return t; if (t.skeleton) { var n = t.skeleton.getBoneByName(e); if (void 0 !== n) return n } if (t.children) { var i = function(t) { for (var n = 0; n < t.length; n++) { var r = t[n]; if (r.name === e || r.uuid === e || (r = i(r.children))) return r } return null }; if (t = i(t.children)) return t } return null }
    }), Object.assign(Sr.prototype, {
        _getValue_unavailable: function() {},
        _setValue_unavailable: function() {},
        BindingType: { Direct: 0, EntireArray: 1, ArrayElement: 2, HasFromToArray: 3 },
        Versioning: { None: 0, NeedsUpdate: 1, MatrixWorldNeedsUpdate: 2 },
        GetterByBindingType: [function(t, e) { t[e] = this.node[this.propertyName] }, function(t, e) { for (var n = this.resolvedProperty, i = 0, r = n.length; i !== r; ++i) t[e++] = n[i] }, function(t, e) { t[e] = this.resolvedProperty[this.propertyIndex] }, function(t, e) { this.resolvedProperty.toArray(t, e) }],
        SetterByBindingTypeAndVersioning: [
            [function(t, e) { this.targetObject[this.propertyName] = t[e] }, function(t, e) { this.targetObject[this.propertyName] = t[e], this.targetObject.needsUpdate = !0 }, function(t, e) { this.targetObject[this.propertyName] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0 }],
            [function(t, e) { for (var n = this.resolvedProperty, i = 0, r = n.length; i !== r; ++i) n[i] = t[e++] }, function(t, e) {
                for (var n = this.resolvedProperty, i = 0, r = n.length; i !== r; ++i) n[i] = t[e++];
                this.targetObject.needsUpdate = !0
            }, function(t, e) {
                for (var n = this.resolvedProperty, i = 0, r = n.length; i !== r; ++i) n[i] = t[e++];
                this.targetObject.matrixWorldNeedsUpdate = !0
            }],
            [function(t, e) { this.resolvedProperty[this.propertyIndex] = t[e] }, function(t, e) { this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.needsUpdate = !0 }, function(t, e) { this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0 }],
            [function(t, e) { this.resolvedProperty.fromArray(t, e) }, function(t, e) { this.resolvedProperty.fromArray(t, e), this.targetObject.needsUpdate = !0 }, function(t, e) { this.resolvedProperty.fromArray(t, e), this.targetObject.matrixWorldNeedsUpdate = !0 }]
        ],
        getValue: function(t, e) { this.bind(), this.getValue(t, e) },
        setValue: function(t, e) { this.bind(), this.setValue(t, e) },
        bind: function() {
            var t = this.node,
                e = this.parsedPath,
                n = e.objectName,
                i = e.propertyName,
                r = e.propertyIndex;
            if (t || (this.node = t = Sr.findNode(this.rootNode, e.nodeName) || this.rootNode), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, t) {
                if (n) {
                    var a = e.objectIndex;
                    switch (n) {
                        case "materials":
                            if (!t.material) return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
                            if (!t.material.materials) return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
                            t = t.material.materials;
                            break;
                        case "bones":
                            if (!t.skeleton) return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
                            for (t = t.skeleton.bones, n = 0; n < t.length; n++)
                                if (t[n].name === a) { a = n; break }
                            break;
                        default:
                            if (void 0 === t[n]) return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
                            t = t[n]
                    }
                    if (void 0 !== a) {
                        if (void 0 === t[a]) return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t);
                        t = t[a]
                    }
                }
                if (void 0 === (a = t[i])) console.error("THREE.PropertyBinding: Trying to update property for track: " + e.nodeName + "." + i + " but it wasn't found.", t);
                else {
                    if (e = this.Versioning.None, this.targetObject = t, void 0 !== t.needsUpdate ? e = this.Versioning.NeedsUpdate : void 0 !== t.matrixWorldNeedsUpdate && (e = this.Versioning.MatrixWorldNeedsUpdate), n = this.BindingType.Direct, void 0 !== r) {
                        if ("morphTargetInfluences" === i) {
                            if (!t.geometry) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
                            if (t.geometry.isBufferGeometry) {
                                if (!t.geometry.morphAttributes) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
                                for (n = 0; n < this.node.geometry.morphAttributes.position.length; n++)
                                    if (t.geometry.morphAttributes.position[n].name === r) { r = n; break }
                            } else {
                                if (!t.geometry.morphTargets) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphTargets.", this);
                                for (n = 0; n < this.node.geometry.morphTargets.length; n++)
                                    if (t.geometry.morphTargets[n].name === r) { r = n; break }
                            }
                        }
                        n = this.BindingType.ArrayElement, this.resolvedProperty = a, this.propertyIndex = r
                    } else void 0 !== a.fromArray && void 0 !== a.toArray ? (n = this.BindingType.HasFromToArray, this.resolvedProperty = a) : Array.isArray(a) ? (n = this.BindingType.EntireArray, this.resolvedProperty = a) : this.propertyName = i;
                    this.getValue = this.GetterByBindingType[n], this.setValue = this.SetterByBindingTypeAndVersioning[n][e]
                }
            } else console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.")
        },
        unbind: function() { this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound }
    }), Object.assign(Sr.prototype, { _getValue_unbound: Sr.prototype.getValue, _setValue_unbound: Sr.prototype.setValue }), Object.assign(Tr.prototype, {
        isAnimationObjectGroup: !0,
        add: function() {
            for (var t = this._objects, e = t.length, n = this.nCachedObjects_, i = this._indicesByUUID, r = this._paths, a = this._parsedPaths, o = this._bindings, s = o.length, c = void 0, h = 0, l = arguments.length; h !== l; ++h) {
                var u = arguments[h],
                    p = u.uuid,
                    d = i[p];
                if (void 0 === d) { d = e++, i[p] = d, t.push(u), p = 0; for (var f = s; p !== f; ++p) o[p].push(new Sr(u, r[p], a[p])) } else if (d < n) {
                    c = t[d];
                    var m = --n;
                    for (f = t[m], i[f.uuid] = d, t[d] = f, i[p] = m, t[m] = u, p = 0, f = s; p !== f; ++p) {
                        var g = o[p],
                            v = g[d];
                        g[d] = g[m], void 0 === v && (v = new Sr(u, r[p], a[p])), g[m] = v
                    }
                } else t[d] !== c && console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")
            }
            this.nCachedObjects_ = n
        },
        remove: function() {
            for (var t = this._objects, e = this.nCachedObjects_, n = this._indicesByUUID, i = this._bindings, r = i.length, a = 0, o = arguments.length; a !== o; ++a) {
                var s = arguments[a],
                    c = s.uuid,
                    h = n[c];
                if (void 0 !== h && h >= e) {
                    var l = e++,
                        u = t[l];
                    for (n[u.uuid] = h, t[h] = u, n[c] = l, t[l] = s, s = 0, c = r; s !== c; ++s) {
                        u = i[s];
                        var p = u[h];
                        u[h] = u[l], u[l] = p
                    }
                }
            }
            this.nCachedObjects_ = e
        },
        uncache: function() {
            for (var t = this._objects, e = t.length, n = this.nCachedObjects_, i = this._indicesByUUID, r = this._bindings, a = r.length, o = 0, s = arguments.length; o !== s; ++o) {
                var c = arguments[o].uuid,
                    h = i[c];
                if (void 0 !== h)
                    if (delete i[c], h < n) {
                        c = --n;
                        var l = t[c],
                            u = --e,
                            p = t[u];
                        for (i[l.uuid] = h, t[h] = l, i[p.uuid] = c, t[c] = p, t.pop(), l = 0, p = a; l !== p; ++l) {
                            var d = r[l],
                                f = d[u];
                            d[h] = d[c], d[c] = f, d.pop()
                        }
                    } else
                        for (u = --e, p = t[u], i[p.uuid] = h, t[h] = p, t.pop(), l = 0, p = a; l !== p; ++l) d = r[l], d[h] = d[u], d.pop()
            }
            this.nCachedObjects_ = n
        },
        subscribe_: function(t, e) {
            var n = this._bindingsIndicesByPath,
                i = n[t],
                r = this._bindings;
            if (void 0 !== i) return r[i];
            var a = this._paths,
                o = this._parsedPaths,
                s = this._objects,
                c = this.nCachedObjects_,
                h = Array(s.length);
            for (i = r.length, n[t] = i, a.push(t), o.push(e), r.push(h), n = c, i = s.length; n !== i; ++n) h[n] = new Sr(s[n], t, e);
            return h
        },
        unsubscribe_: function(t) {
            var e = this._bindingsIndicesByPath,
                n = e[t];
            if (void 0 !== n) {
                var i = this._paths,
                    r = this._parsedPaths,
                    a = this._bindings,
                    o = a.length - 1,
                    s = a[o];
                e[t[o]] = n, a[n] = s, a.pop(), r[n] = r[o], r.pop(), i[n] = i[o], i.pop()
            }
        }
    }), Object.assign(Ar.prototype, {
        play: function() { return this._mixer._activateAction(this), this },
        stop: function() { return this._mixer._deactivateAction(this), this.reset() },
        reset: function() { return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping() },
        isRunning: function() { return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime && this._mixer._isActiveAction(this) },
        isScheduled: function() { return this._mixer._isActiveAction(this) },
        startAt: function(t) { return this._startTime = t, this },
        setLoop: function(t, e) { return this.loop = t, this.repetitions = e, this },
        setEffectiveWeight: function(t) { return this.weight = t, this._effectiveWeight = this.enabled ? t : 0, this.stopFading() },
        getEffectiveWeight: function() { return this._effectiveWeight },
        fadeIn: function(t) { return this._scheduleFading(t, 0, 1) },
        fadeOut: function(t) { return this._scheduleFading(t, 1, 0) },
        crossFadeFrom: function(t, e, n) {
            if (t.fadeOut(e), this.fadeIn(e), n) {
                n = this._clip.duration;
                var i = t._clip.duration,
                    r = n / i;
                t.warp(1, i / n, e), this.warp(r, 1, e)
            }
            return this
        },
        crossFadeTo: function(t, e, n) { return t.crossFadeFrom(this, e, n) },
        stopFading: function() { var t = this._weightInterpolant; return null !== t && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this },
        setEffectiveTimeScale: function(t) { return this.timeScale = t, this._effectiveTimeScale = this.paused ? 0 : t, this.stopWarping() },
        getEffectiveTimeScale: function() { return this._effectiveTimeScale },
        setDuration: function(t) { return this.timeScale = this._clip.duration / t, this.stopWarping() },
        syncWith: function(t) { return this.time = t.time, this.timeScale = t.timeScale, this.stopWarping() },
        halt: function(t) { return this.warp(this._effectiveTimeScale, 0, t) },
        warp: function(t, e, n) {
            var i = this._mixer,
                r = i.time,
                a = this._timeScaleInterpolant,
                o = this.timeScale;
            return null === a && (this._timeScaleInterpolant = a = i._lendControlInterpolant()), i = a.parameterPositions, a = a.sampleValues, i[0] = r, i[1] = r + n, a[0] = t / o, a[1] = e / o, this
        },
        stopWarping: function() { var t = this._timeScaleInterpolant; return null !== t && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this },
        getMixer: function() { return this._mixer },
        getClip: function() { return this._clip },
        getRoot: function() { return this._localRoot || this._mixer._root },
        _update: function(t, e, n, i) {
            if (this.enabled) {
                var r = this._startTime;
                if (null !== r) {
                    if (0 > (e = (t - r) * n) || 0 === n) return;
                    this._startTime = null, e *= n
                }
                if (e *= this._updateTimeScale(t), n = this._updateTime(e), 0 < (t = this._updateWeight(t))) { e = this._interpolants, r = this._propertyBindings; for (var a = 0, o = e.length; a !== o; ++a) e[a].evaluate(n), r[a].accumulate(i, t) }
            } else this._updateWeight(t)
        },
        _updateWeight: function(t) {
            var e = 0;
            if (this.enabled) {
                e = this.weight;
                var n = this._weightInterpolant;
                if (null !== n) {
                    var i = n.evaluate(t)[0];
                    e *= i, t > n.parameterPositions[1] && (this.stopFading(), 0 === i && (this.enabled = !1))
                }
            }
            return this._effectiveWeight = e
        },
        _updateTimeScale: function(t) { var e = 0; if (!this.paused) { e = this.timeScale; var n = this._timeScaleInterpolant; if (null !== n) { e *= n.evaluate(t)[0], t > n.parameterPositions[1] && (this.stopWarping(), 0 === e ? this.paused = !0 : this.timeScale = e) } } return this._effectiveTimeScale = e },
        _updateTime: function(t) {
            var e = this.time + t,
                n = this._clip.duration,
                i = this.loop,
                r = this._loopCount,
                a = 2202 === i;
            if (0 === t) return -1 === r ? e : a && 1 == (1 & r) ? n - e : e;
            if (2200 === i) t: {
                if (-1 === r && (this._loopCount = 0, this._setEndings(!0, !0, !1)), e >= n) e = n;
                else {
                    if (!(0 > e)) break t;
                    e = 0
                }
                this.clampWhenFinished ? this.paused = !0 : this.enabled = !1,
                this._mixer.dispatchEvent({ type: "finished", action: this, direction: 0 > t ? -1 : 1 })
            }
            else {
                if (-1 === r && (0 <= t ? (r = 0, this._setEndings(!0, 0 === this.repetitions, a)) : this._setEndings(0 === this.repetitions, !0, a)), e >= n || 0 > e) {
                    i = Math.floor(e / n), e -= n * i, r += Math.abs(i);
                    var o = this.repetitions - r;
                    0 >= o ? (this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, e = 0 < t ? n : 0, this._mixer.dispatchEvent({ type: "finished", action: this, direction: 0 < t ? 1 : -1 })) : (1 === o ? (t = 0 > t, this._setEndings(t, !t, a)) : this._setEndings(!1, !1, a), this._loopCount = r, this._mixer.dispatchEvent({ type: "loop", action: this, loopDelta: i }))
                }
                if (a && 1 == (1 & r)) return this.time = e, n - e
            }
            return this.time = e
        },
        _setEndings: function(t, e, n) {
            var i = this._interpolantSettings;
            n ? (i.endingStart = 2401, i.endingEnd = 2401) : (i.endingStart = t ? this.zeroSlopeAtStart ? 2401 : 2400 : 2402, i.endingEnd = e ? this.zeroSlopeAtEnd ? 2401 : 2400 : 2402)
        },
        _scheduleFading: function(t, e, n) {
            var i = this._mixer,
                r = i.time,
                a = this._weightInterpolant;
            return null === a && (this._weightInterpolant = a = i._lendControlInterpolant()), i = a.parameterPositions, a = a.sampleValues, i[0] = r, a[0] = e, i[1] = r + t, a[1] = n, this
        }
    }), Lr.prototype = Object.assign(Object.create(e.prototype), {
        constructor: Lr,
        _bindAction: function(t, e) {
            var n = t._localRoot || this._root,
                i = t._clip.tracks,
                r = i.length,
                a = t._propertyBindings;
            t = t._interpolants;
            var o = n.uuid,
                s = this._bindingsByRootAndName,
                c = s[o];
            for (void 0 === c && (c = {}, s[o] = c), s = 0; s !== r; ++s) {
                var h = i[s],
                    l = h.name,
                    u = c[l];
                if (void 0 === u) {
                    if (void 0 !== (u = a[s])) { null === u._cacheIndex && (++u.referenceCount, this._addInactiveBinding(u, o, l)); continue }
                    u = new Mr(Sr.create(n, l, e && e._propertyBindings[s].binding.parsedPath), h.ValueTypeName, h.getValueSize()), ++u.referenceCount, this._addInactiveBinding(u, o, l)
                }
                a[s] = u, t[s].resultBuffer = u.buffer
            }
        },
        _activateAction: function(t) {
            if (!this._isActiveAction(t)) {
                if (null === t._cacheIndex) {
                    var e = (t._localRoot || this._root).uuid,
                        n = t._clip.uuid,
                        i = this._actionsByClip[n];
                    this._bindAction(t, i && i.knownActions[0]), this._addInactiveAction(t, n, e)
                }
                for (e = t._propertyBindings, n = 0, i = e.length; n !== i; ++n) {
                    var r = e[n];
                    0 == r.useCount++ && (this._lendBinding(r), r.saveOriginalState())
                }
                this._lendAction(t)
            }
        },
        _deactivateAction: function(t) {
            if (this._isActiveAction(t)) {
                for (var e = t._propertyBindings, n = 0, i = e.length; n !== i; ++n) {
                    var r = e[n];
                    0 == --r.useCount && (r.restoreOriginalState(), this._takeBackBinding(r))
                }
                this._takeBackAction(t)
            }
        },
        _initMemoryManager: function() {
            this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
            var t = this;
            this.stats = { actions: {get total() { return t._actions.length }, get inUse() { return t._nActiveActions } }, bindings: {get total() { return t._bindings.length }, get inUse() { return t._nActiveBindings } }, controlInterpolants: {get total() { return t._controlInterpolants.length }, get inUse() { return t._nActiveControlInterpolants } } }
        },
        _isActiveAction: function(t) { return null !== (t = t._cacheIndex) && t < this._nActiveActions },
        _addInactiveAction: function(t, e, n) {
            var i = this._actions,
                r = this._actionsByClip,
                a = r[e];
            void 0 === a ? (a = { knownActions: [t], actionByRoot: {} }, t._byClipCacheIndex = 0, r[e] = a) : (e = a.knownActions, t._byClipCacheIndex = e.length, e.push(t)), t._cacheIndex = i.length, i.push(t), a.actionByRoot[n] = t
        },
        _removeInactiveAction: function(t) {
            var e = this._actions,
                n = e[e.length - 1],
                i = t._cacheIndex;
            n._cacheIndex = i, e[i] = n, e.pop(), t._cacheIndex = null, e = t._clip.uuid, n = this._actionsByClip, i = n[e];
            var r = i.knownActions,
                a = r[r.length - 1],
                o = t._byClipCacheIndex;
            a._byClipCacheIndex = o, r[o] = a, r.pop(), t._byClipCacheIndex = null, delete i.actionByRoot[(t._localRoot || this._root).uuid], 0 === r.length && delete n[e], this._removeInactiveBindingsForAction(t)
        },
        _removeInactiveBindingsForAction: function(t) {
            t = t._propertyBindings;
            for (var e = 0, n = t.length; e !== n; ++e) {
                var i = t[e];
                0 == --i.referenceCount && this._removeInactiveBinding(i)
            }
        },
        _lendAction: function(t) {
            var e = this._actions,
                n = t._cacheIndex,
                i = this._nActiveActions++,
                r = e[i];
            t._cacheIndex = i, e[i] = t, r._cacheIndex = n, e[n] = r
        },
        _takeBackAction: function(t) {
            var e = this._actions,
                n = t._cacheIndex,
                i = --this._nActiveActions,
                r = e[i];
            t._cacheIndex = i, e[i] = t, r._cacheIndex = n, e[n] = r
        },
        _addInactiveBinding: function(t, e, n) {
            var i = this._bindingsByRootAndName,
                r = i[e],
                a = this._bindings;
            void 0 === r && (r = {}, i[e] = r), r[n] = t, t._cacheIndex = a.length, a.push(t)
        },
        _removeInactiveBinding: function(t) {
            var e = this._bindings,
                n = t.binding,
                i = n.rootNode.uuid;
            n = n.path;
            var r = this._bindingsByRootAndName,
                a = r[i],
                o = e[e.length - 1];
            t = t._cacheIndex, o._cacheIndex = t, e[t] = o, e.pop(), delete a[n];
            t: { for (var s in a) break t;delete r[i] }
        },
        _lendBinding: function(t) {
            var e = this._bindings,
                n = t._cacheIndex,
                i = this._nActiveBindings++,
                r = e[i];
            t._cacheIndex = i, e[i] = t, r._cacheIndex = n, e[n] = r
        },
        _takeBackBinding: function(t) {
            var e = this._bindings,
                n = t._cacheIndex,
                i = --this._nActiveBindings,
                r = e[i];
            t._cacheIndex = i, e[i] = t, r._cacheIndex = n, e[n] = r
        },
        _lendControlInterpolant: function() {
            var t = this._controlInterpolants,
                e = this._nActiveControlInterpolants++,
                n = t[e];
            return void 0 === n && (n = new ui(new Float32Array(2), new Float32Array(2), 1, this._controlInterpolantsResultBuffer), n.__cacheIndex = e, t[e] = n), n
        },
        _takeBackControlInterpolant: function(t) {
            var e = this._controlInterpolants,
                n = t.__cacheIndex,
                i = --this._nActiveControlInterpolants,
                r = e[i];
            t.__cacheIndex = i, e[i] = t, r.__cacheIndex = n, e[n] = r
        },
        _controlInterpolantsResultBuffer: new Float32Array(1),
        clipAction: function(t, e) {
            var n = e || this._root,
                i = n.uuid;
            n = "string" == typeof t ? wi.findByName(n, t) : t, t = null !== n ? n.uuid : t;
            var r = this._actionsByClip[t],
                a = null;
            if (void 0 !== r) {
                if (void 0 !== (a = r.actionByRoot[i])) return a;
                a = r.knownActions[0], null === n && (n = a._clip)
            }
            return null === n ? null : (e = new Ar(this, n, e), this._bindAction(e, a), this._addInactiveAction(e, t, i), e)
        },
        existingAction: function(t, e) { var n = e || this._root; return e = n.uuid, n = "string" == typeof t ? wi.findByName(n, t) : t, t = this._actionsByClip[n ? n.uuid : t], void 0 !== t ? t.actionByRoot[e] || null : null },
        stopAllAction: function() { for (var t = this._actions, e = this._nActiveActions, n = this._bindings, i = this._nActiveBindings, r = this._nActiveBindings = this._nActiveActions = 0; r !== e; ++r) t[r].reset(); for (r = 0; r !== i; ++r) n[r].useCount = 0; return this },
        update: function(t) { t *= this.timeScale; for (var e = this._actions, n = this._nActiveActions, i = this.time += t, r = Math.sign(t), a = this._accuIndex ^= 1, o = 0; o !== n; ++o) e[o]._update(i, t, r, a); for (t = this._bindings, e = this._nActiveBindings, o = 0; o !== e; ++o) t[o].apply(a); return this },
        getRoot: function() { return this._root },
        uncacheClip: function(t) {
            var e = this._actions;
            t = t.uuid;
            var n = this._actionsByClip,
                i = n[t];
            if (void 0 !== i) {
                i = i.knownActions;
                for (var r = 0, a = i.length; r !== a; ++r) {
                    var o = i[r];
                    this._deactivateAction(o);
                    var s = o._cacheIndex,
                        c = e[e.length - 1];
                    o._cacheIndex = null, o._byClipCacheIndex = null, c._cacheIndex = s, e[s] = c, e.pop(), this._removeInactiveBindingsForAction(o)
                }
                delete n[t]
            }
        },
        uncacheRoot: function(t) {
            t = t.uuid;
            var e = this._actionsByClip;
            for (i in e) {
                var n = e[i].actionByRoot[t];
                void 0 !== n && (this._deactivateAction(n), this._removeInactiveAction(n))
            }
            var i = this._bindingsByRootAndName[t];
            if (void 0 !== i)
                for (var r in i) t = i[r], t.restoreOriginalState(), this._removeInactiveBinding(t)
        },
        uncacheAction: function(t, e) { null !== (t = this.existingAction(t, e)) && (this._deactivateAction(t), this._removeInactiveAction(t)) }
    }), Rr.prototype.clone = function() { return new Rr(void 0 === this.value.clone ? this.value : this.value.clone()) }, Pr.prototype = Object.assign(Object.create(G.prototype), { constructor: Pr, isInstancedBufferGeometry: !0, copy: function(t) { return G.prototype.copy.call(this, t), this.maxInstancedCount = t.maxInstancedCount, this }, clone: function() { return (new this.constructor).copy(this) } }), Cr.prototype = Object.assign(Object.create(Pe.prototype), { constructor: Cr, isInstancedInterleavedBuffer: !0, copy: function(t) { return Pe.prototype.copy.call(this, t), this.meshPerAttribute = t.meshPerAttribute, this } }), Ir.prototype = Object.assign(Object.create(A.prototype), { constructor: Ir, isInstancedBufferAttribute: !0, copy: function(t) { return A.prototype.copy.call(this, t), this.meshPerAttribute = t.meshPerAttribute, this } }), Object.assign(Or.prototype, { linePrecision: 1, set: function(t, e) { this.ray.set(t, e) }, setFromCamera: function(t, e) { e && e.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(t.x, t.y, .5).unproject(e).sub(this.ray.origin).normalize()) : e && e.isOrthographicCamera ? (this.ray.origin.set(t.x, t.y, (e.near + e.far) / (e.near - e.far)).unproject(e), this.ray.direction.set(0, 0, -1).transformDirection(e.matrixWorld)) : console.error("THREE.Raycaster: Unsupported camera type.") }, intersectObject: function(t, e, n) { return n = n || [], Nr(t, this, n, e), n.sort(Dr), n }, intersectObjects: function(t, e, n) { if (n = n || [], !1 === Array.isArray(t)) return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."), n; for (var i = 0, r = t.length; i < r; i++) Nr(t[i], this, n, e); return n.sort(Dr), n } }), Object.assign(Br.prototype, { set: function(t, e, n) { return this.radius = t, this.phi = e, this.theta = n, this }, clone: function() { return (new this.constructor).copy(this) }, copy: function(t) { return this.radius = t.radius, this.phi = t.phi, this.theta = t.theta, this }, makeSafe: function() { return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)), this }, setFromVector3: function(t) { return this.setFromCartesianCoords(t.x, t.y, t.z) }, setFromCartesianCoords: function(t, e, n) { return this.radius = Math.sqrt(t * t + e * e + n * n), 0 === this.radius ? this.phi = this.theta = 0 : (this.theta = Math.atan2(t, n), this.phi = Math.acos(ca.clamp(e / this.radius, -1, 1))), this } }), Object.assign(zr.prototype, { set: function(t, e, n) { return this.radius = t, this.theta = e, this.y = n, this }, clone: function() { return (new this.constructor).copy(this) }, copy: function(t) { return this.radius = t.radius, this.theta = t.theta, this.y = t.y, this }, setFromVector3: function(t) { return this.setFromCartesianCoords(t.x, t.y, t.z) }, setFromCartesianCoords: function(t, e, n) { return this.radius = Math.sqrt(t * t + n * n), this.theta = Math.atan2(t, n), this.y = e, this } }), Object.assign(Ur.prototype, { set: function(t, e) { return this.min.copy(t), this.max.copy(e), this }, setFromPoints: function(t) { this.makeEmpty(); for (var e = 0, n = t.length; e < n; e++) this.expandByPoint(t[e]); return this }, setFromCenterAndSize: function() { var t = new n; return function(e, n) { return n = t.copy(n).multiplyScalar(.5), this.min.copy(e).sub(n), this.max.copy(e).add(n), this } }(), clone: function() { return (new this.constructor).copy(this) }, copy: function(t) { return this.min.copy(t.min), this.max.copy(t.max), this }, makeEmpty: function() { return this.min.x = this.min.y = Infinity, this.max.x = this.max.y = -Infinity, this }, isEmpty: function() { return this.max.x < this.min.x || this.max.y < this.min.y }, getCenter: function(t) { return void 0 === t && (console.warn("THREE.Box2: .getCenter() target is now required"), t = new n), this.isEmpty() ? t.set(0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5) }, getSize: function(t) { return void 0 === t && (console.warn("THREE.Box2: .getSize() target is now required"), t = new n), this.isEmpty() ? t.set(0, 0) : t.subVectors(this.max, this.min) }, expandByPoint: function(t) { return this.min.min(t), this.max.max(t), this }, expandByVector: function(t) { return this.min.sub(t), this.max.add(t), this }, expandByScalar: function(t) { return this.min.addScalar(-t), this.max.addScalar(t), this }, containsPoint: function(t) { return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y) }, containsBox: function(t) { return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y }, getParameter: function(t, e) { return void 0 === e && (console.warn("THREE.Box2: .getParameter() target is now required"), e = new n), e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y)) }, intersectsBox: function(t) { return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y) }, clampPoint: function(t, e) { return void 0 === e && (console.warn("THREE.Box2: .clampPoint() target is now required"), e = new n), e.copy(t).clamp(this.min, this.max) }, distanceToPoint: function() { var t = new n; return function(e) { return t.copy(e).clamp(this.min, this.max).sub(e).length() } }(), intersect: function(t) { return this.min.max(t.min), this.max.min(t.max), this }, union: function(t) { return this.min.min(t.min), this.max.max(t.max), this }, translate: function(t) { return this.min.add(t), this.max.add(t), this }, equals: function(t) { return t.min.equals(this.min) && t.max.equals(this.max) } }), Object.assign(Gr.prototype, {
        set: function(t, e) { return this.start.copy(t), this.end.copy(e), this },
        clone: function() { return (new this.constructor).copy(this) },
        copy: function(t) { return this.start.copy(t.start), this.end.copy(t.end), this },
        getCenter: function(t) { return void 0 === t && (console.warn("THREE.Line3: .getCenter() target is now required"), t = new a), t.addVectors(this.start, this.end).multiplyScalar(.5) },
        delta: function(t) { return void 0 === t && (console.warn("THREE.Line3: .delta() target is now required"), t = new a), t.subVectors(this.end, this.start) },
        distanceSq: function() { return this.start.distanceToSquared(this.end) },
        distance: function() { return this.start.distanceTo(this.end) },
        at: function(t, e) { return void 0 === e && (console.warn("THREE.Line3: .at() target is now required"), e = new a), this.delta(e).multiplyScalar(t).add(this.start) },
        closestPointToPointParameter: function() {
            var t = new a,
                e = new a;
            return function(n, i) { return t.subVectors(n, this.start), e.subVectors(this.end, this.start), n = e.dot(e), n = e.dot(t) / n, i && (n = ca.clamp(n, 0, 1)), n }
        }(),
        closestPointToPoint: function(t, e, n) { return t = this.closestPointToPointParameter(t, e), void 0 === n && (console.warn("THREE.Line3: .closestPointToPoint() target is now required"), n = new a), this.delta(n).multiplyScalar(t).add(this.start) },
        applyMatrix4: function(t) { return this.start.applyMatrix4(t), this.end.applyMatrix4(t), this },
        equals: function(t) { return t.start.equals(this.start) && t.end.equals(this.end) }
    }), Fr.prototype = Object.create(S.prototype), Fr.prototype.constructor = Fr, Fr.prototype.isImmediateRenderObject = !0, Hr.prototype = Object.create(Fe.prototype), Hr.prototype.constructor = Hr, Hr.prototype.update = function() {
        var t = new a,
            e = new a,
            n = new o;
        return function() {
            var i = ["a", "b", "c"];
            this.object.updateMatrixWorld(!0), n.getNormalMatrix(this.object.matrixWorld);
            var r = this.object.matrixWorld,
                a = this.geometry.attributes.position,
                o = this.object.geometry;
            if (o && o.isGeometry)
                for (var s = o.vertices, c = o.faces, h = o = 0, l = c.length; h < l; h++)
                    for (var u = c[h], p = 0, d = u.vertexNormals.length; p < d; p++) {
                        var f = u.vertexNormals[p];
                        t.copy(s[u[i[p]]]).applyMatrix4(r), e.copy(f).applyMatrix3(n).normalize().multiplyScalar(this.size).add(t), a.setXYZ(o, t.x, t.y, t.z), o += 1, a.setXYZ(o, e.x, e.y, e.z), o += 1
                    } else if (o && o.isBufferGeometry)
                        for (i = o.attributes.position, s = o.attributes.normal, p = o = 0, d = i.count; p < d; p++) t.set(i.getX(p), i.getY(p), i.getZ(p)).applyMatrix4(r), e.set(s.getX(p), s.getY(p), s.getZ(p)), e.applyMatrix3(n).normalize().multiplyScalar(this.size).add(t), a.setXYZ(o, t.x, t.y, t.z), o += 1, a.setXYZ(o, e.x, e.y, e.z), o += 1;
            a.needsUpdate = !0
        }
    }(), Vr.prototype = Object.create(S.prototype), Vr.prototype.constructor = Vr, Vr.prototype.dispose = function() { this.cone.geometry.dispose(), this.cone.material.dispose() }, Vr.prototype.update = function() {
        var t = new a;
        return function() {
            this.light.updateMatrixWorld();
            var e = this.light.distance ? this.light.distance : 1e3,
                n = e * Math.tan(this.light.angle);
            this.cone.scale.set(n, n, e), t.setFromMatrixPosition(this.light.target.matrixWorld), this.cone.lookAt(t), void 0 !== this.color ? this.cone.material.color.set(this.color) : this.cone.material.color.copy(this.light.color)
        }
    }(), jr.prototype = Object.create(Fe.prototype), jr.prototype.constructor = jr, jr.prototype.updateMatrixWorld = function() {
        var t = new a,
            e = new i,
            n = new i;
        return function(i) {
            var r = this.bones,
                a = this.geometry,
                o = a.getAttribute("position");
            n.getInverse(this.root.matrixWorld);
            for (var s = 0, c = 0; s < r.length; s++) {
                var h = r[s];
                h.parent && h.parent.isBone && (e.multiplyMatrices(n, h.matrixWorld), t.setFromMatrixPosition(e), o.setXYZ(c, t.x, t.y, t.z), e.multiplyMatrices(n, h.parent.matrixWorld), t.setFromMatrixPosition(e), o.setXYZ(c + 1, t.x, t.y, t.z), c += 2)
            }
            a.getAttribute("position").needsUpdate = !0, S.prototype.updateMatrixWorld.call(this, i)
        }
    }(), Wr.prototype = Object.create(J.prototype), Wr.prototype.constructor = Wr, Wr.prototype.dispose = function() { this.geometry.dispose(), this.material.dispose() }, Wr.prototype.update = function() { void 0 !== this.color ? this.material.color.set(this.color) : this.material.color.copy(this.light.color) }, qr.prototype = Object.create(Ge.prototype), qr.prototype.constructor = qr, qr.prototype.update = function() {
        if (this.scale.set(.5 * this.light.width, .5 * this.light.height, 1), void 0 !== this.color) this.material.color.set(this.color), this.children[0].material.color.set(this.color);
        else {
            this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);
            var t = this.material.color,
                e = Math.max(t.r, t.g, t.b);
            1 < e && t.multiplyScalar(1 / e), this.children[0].material.color.copy(this.material.color)
        }
    }, qr.prototype.dispose = function() { this.geometry.dispose(), this.material.dispose(), this.children[0].geometry.dispose(), this.children[0].material.dispose() }, Xr.prototype = Object.create(S.prototype), Xr.prototype.constructor = Xr, Xr.prototype.dispose = function() { this.children[0].geometry.dispose(), this.children[0].material.dispose() }, Xr.prototype.update = function() {
        var t = new a,
            e = new x,
            n = new x;
        return function() {
            var i = this.children[0];
            if (void 0 !== this.color) this.material.color.set(this.color);
            else {
                var r = i.geometry.getAttribute("color");
                e.copy(this.light.color), n.copy(this.light.groundColor);
                for (var a = 0, o = r.count; a < o; a++) {
                    var s = a < o / 2 ? e : n;
                    r.setXYZ(a, s.r, s.g, s.b)
                }
                r.needsUpdate = !0
            }
            i.lookAt(t.setFromMatrixPosition(this.light.matrixWorld).negate())
        }
    }(), Yr.prototype = Object.create(Fe.prototype), Yr.prototype.constructor = Yr, Jr.prototype = Object.create(Fe.prototype), Jr.prototype.constructor = Jr, Zr.prototype = Object.create(Ge.prototype), Zr.prototype.constructor = Zr, Zr.prototype.update = function() {
        function t(t, e, i, r) {
            for (i = (e - t) / i, d.setXYZ(l, 0, 0, 0), u++, o = t; o < e; o += i) s = l + u, d.setXYZ(s, Math.sin(o) * n, 0, Math.cos(o) * n), d.setXYZ(s + 1, Math.sin(Math.min(o + i, e)) * n, 0, Math.cos(Math.min(o + i, e)) * n), d.setXYZ(s + 2, 0, 0, 0), u += 3;
            p.addGroup(l, u, r), l += u, u = 0
        }
        var e = this.audio,
            n = this.range,
            i = this.divisionsInnerAngle,
            r = this.divisionsOuterAngle,
            a = ca.degToRad(e.panner.coneInnerAngle);
        e = ca.degToRad(e.panner.coneOuterAngle);
        var o, s, c = a / 2,
            h = e / 2,
            l = 0,
            u = 0,
            p = this.geometry,
            d = p.attributes.position;
        p.clearGroups(), t(-h, -c, r, 0), t(-c, c, i, 1), t(c, h, r, 0), d.needsUpdate = !0, a === e && (this.material[0].visible = !1)
    }, Zr.prototype.dispose = function() { this.geometry.dispose(), this.material[0].dispose(), this.material[1].dispose() }, Qr.prototype = Object.create(Fe.prototype), Qr.prototype.constructor = Qr, Qr.prototype.update = function() {
        var t = new a,
            e = new a,
            n = new o;
        return function() {
            this.object.updateMatrixWorld(!0), n.getNormalMatrix(this.object.matrixWorld);
            var i = this.object.matrixWorld,
                r = this.geometry.attributes.position,
                a = this.object.geometry,
                o = a.vertices;
            a = a.faces;
            for (var s = 0, c = 0, h = a.length; c < h; c++) {
                var l = a[c],
                    u = l.normal;
                t.copy(o[l.a]).add(o[l.b]).add(o[l.c]).divideScalar(3).applyMatrix4(i), e.copy(u).applyMatrix3(n).normalize().multiplyScalar(this.size).add(t), r.setXYZ(s, t.x, t.y, t.z), s += 1, r.setXYZ(s, e.x, e.y, e.z), s += 1
            }
            r.needsUpdate = !0
        }
    }(), Kr.prototype = Object.create(S.prototype), Kr.prototype.constructor = Kr, Kr.prototype.dispose = function() { this.lightPlane.geometry.dispose(), this.lightPlane.material.dispose(), this.targetLine.geometry.dispose(), this.targetLine.material.dispose() }, Kr.prototype.update = function() {
        var t = new a,
            e = new a,
            n = new a;
        return function() { t.setFromMatrixPosition(this.light.matrixWorld), e.setFromMatrixPosition(this.light.target.matrixWorld), n.subVectors(e, t), this.lightPlane.lookAt(e), void 0 !== this.color ? (this.lightPlane.material.color.set(this.color), this.targetLine.material.color.set(this.color)) : (this.lightPlane.material.color.copy(this.light.color), this.targetLine.material.color.copy(this.light.color)), this.targetLine.lookAt(e), this.targetLine.scale.z = n.length() }
    }(), $r.prototype = Object.create(Fe.prototype), $r.prototype.constructor = $r, $r.prototype.update = function() {
        function t(t, a, o, s) {
            if (i.set(a, o, s).unproject(r), void 0 !== (t = n[t]))
                for (a = e.getAttribute("position"), o = 0, s = t.length; o < s; o++) a.setXYZ(t[o], i.x, i.y, i.z)
        }
        var e, n, i = new a,
            r = new be;
        return function() { e = this.geometry, n = this.pointMap, r.projectionMatrix.copy(this.camera.projectionMatrix), t("c", 0, 0, -1), t("t", 0, 0, 1), t("n1", -1, -1, -1), t("n2", 1, -1, -1), t("n3", -1, 1, -1), t("n4", 1, 1, -1), t("f1", -1, -1, 1), t("f2", 1, -1, 1), t("f3", -1, 1, 1), t("f4", 1, 1, 1), t("u1", .7, 1.1, -1), t("u2", -.7, 1.1, -1), t("u3", 0, 2, -1), t("cf1", -1, 0, 1), t("cf2", 1, 0, 1), t("cf3", 0, -1, 1), t("cf4", 0, 1, 1), t("cn1", -1, 0, -1), t("cn2", 1, 0, -1), t("cn3", 0, -1, -1), t("cn4", 0, 1, -1), e.getAttribute("position").needsUpdate = !0 }
    }(), ta.prototype = Object.create(Fe.prototype), ta.prototype.constructor = ta, ta.prototype.update = function() {
        var t = new d;
        return function(e) {
            if (void 0 !== e && console.warn("THREE.BoxHelper: .update() has no longer arguments."), void 0 !== this.object && t.setFromObject(this.object), !t.isEmpty()) {
                e = t.min;
                var n = t.max,
                    i = this.geometry.attributes.position,
                    r = i.array;
                r[0] = n.x, r[1] = n.y, r[2] = n.z, r[3] = e.x, r[4] = n.y, r[5] = n.z, r[6] = e.x, r[7] = e.y, r[8] = n.z, r[9] = n.x, r[10] = e.y, r[11] = n.z, r[12] = n.x, r[13] = n.y, r[14] = e.z, r[15] = e.x, r[16] = n.y, r[17] = e.z, r[18] = e.x, r[19] = e.y, r[20] = e.z, r[21] = n.x, r[22] = e.y, r[23] = e.z, i.needsUpdate = !0, this.geometry.computeBoundingSphere()
            }
        }
    }(), ta.prototype.setFromObject = function(t) { return this.object = t, this.update(), this }, ta.prototype.copy = function(t) { return Fe.prototype.copy.call(this, t), this.object = t.object, this }, ta.prototype.clone = function() { return (new this.constructor).copy(this) }, ea.prototype = Object.create(Fe.prototype), ea.prototype.constructor = ea, ea.prototype.updateMatrixWorld = function(t) {
        var e = this.box;
        e.isEmpty() || (e.getCenter(this.position), e.getSize(this.scale), this.scale.multiplyScalar(.5), S.prototype.updateMatrixWorld.call(this, t))
    }, na.prototype = Object.create(Ge.prototype), na.prototype.constructor = na, na.prototype.updateMatrixWorld = function(t) {
        var e = -this.plane.constant;
        1e-8 > Math.abs(e) && (e = 1e-8), this.scale.set(.5 * this.size, .5 * this.size, e), this.children[0].material.side = 0 > e ? 1 : 0, this.lookAt(this.plane.normal), S.prototype.updateMatrixWorld.call(this, t)
    };
    var no, io;
    ia.prototype = Object.create(S.prototype), ia.prototype.constructor = ia, ia.prototype.setDirection = function() { var t, e = new a; return function(n) { .99999 < n.y ? this.quaternion.set(0, 0, 0, 1) : -.99999 > n.y ? this.quaternion.set(1, 0, 0, 0) : (e.set(n.z, 0, -n.x).normalize(), t = Math.acos(n.y), this.quaternion.setFromAxisAngle(e, t)) } }(), ia.prototype.setLength = function(t, e, n) { void 0 === e && (e = .2 * t), void 0 === n && (n = .2 * e), this.line.scale.set(1, Math.max(0, t - e), 1), this.line.updateMatrix(), this.cone.scale.set(n, e, n), this.cone.position.y = t, this.cone.updateMatrix() }, ia.prototype.setColor = function(t) { this.line.material.color.copy(t), this.cone.material.color.copy(t) }, ia.prototype.copy = function(t) { return S.prototype.copy.call(this, t, !1), this.line.copy(t.line), this.cone.copy(t.cone), this }, ia.prototype.clone = function() { return (new this.constructor).copy(this) }, ra.prototype = Object.create(Fe.prototype), ra.prototype.constructor = ra, Ii.create = function(t, e) { return console.log("THREE.Curve.create() has been deprecated"), t.prototype = Object.create(Ii.prototype), t.prototype.constructor = t, t.prototype.getPoint = e, t }, Object.assign(Xi.prototype, {
        createPointsGeometry: function(t) { return console.warn("THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead."), t = this.getPoints(t), this.createGeometry(t) },
        createSpacedPointsGeometry: function(t) { return console.warn("THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead."), t = this.getSpacedPoints(t), this.createGeometry(t) },
        createGeometry: function(t) {
            console.warn("THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
            for (var e = new T, n = 0, i = t.length; n < i; n++) {
                var r = t[n];
                e.vertices.push(new a(r.x, r.y, r.z || 0))
            }
            return e
        }
    }), Object.assign(Yi.prototype, { fromPoints: function(t) { console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."), this.setFromPoints(t) } }), aa.prototype = Object.create(Bi.prototype), oa.prototype = Object.create(Bi.prototype), sa.prototype = Object.create(Bi.prototype), Object.assign(sa.prototype, { initFromArray: function() { console.error("THREE.Spline: .initFromArray() has been removed.") }, getControlPointsArray: function() { console.error("THREE.Spline: .getControlPointsArray() has been removed.") }, reparametrizeByArcLength: function() { console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.") } }), Yr.prototype.setColors = function() { console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.") }, jr.prototype.update = function() { console.error("THREE.SkeletonHelper: update() no longer needs to be called.") }, Object.assign(fr.prototype, { extractUrlBase: function(t) { return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."), Ja.extractUrlBase(t) } }), Object.assign(hr.prototype, { setTexturePath: function(t) { return console.warn("THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath()."), this.setResourcePath(t) } }), Object.assign(Ur.prototype, { center: function(t) { return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."), this.getCenter(t) }, empty: function() { return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."), this.isEmpty() }, isIntersectionBox: function(t) { return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t) }, size: function(t) { return console.warn("THREE.Box2: .size() has been renamed to .getSize()."), this.getSize(t) } }), Object.assign(d.prototype, { center: function(t) { return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."), this.getCenter(t) }, empty: function() { return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."), this.isEmpty() }, isIntersectionBox: function(t) { return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t) }, isIntersectionSphere: function(t) { return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(t) }, size: function(t) { return console.warn("THREE.Box3: .size() has been renamed to .getSize()."), this.getSize(t) } }), Gr.prototype.center = function(t) { return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."), this.getCenter(t) }, Object.assign(ca, { random16: function() { return console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead."), Math.random() }, nearestPowerOfTwo: function(t) { return console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo()."), ca.floorPowerOfTwo(t) }, nextPowerOfTwo: function(t) { return console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo()."), ca.ceilPowerOfTwo(t) } }), Object.assign(o.prototype, { flattenToArrayOffset: function(t, e) { return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(t, e) }, multiplyVector3: function(t) { return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."), t.applyMatrix3(this) }, multiplyVector3Array: function() { console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.") }, applyToBuffer: function(t) { return console.warn("THREE.Matrix3: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead."), this.applyToBufferAttribute(t) }, applyToVector3Array: function() { console.error("THREE.Matrix3: .applyToVector3Array() has been removed.") } }), Object.assign(i.prototype, { extractPosition: function(t) { return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."), this.copyPosition(t) }, flattenToArrayOffset: function(t, e) { return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(t, e) }, getPosition: function() { var t; return function() { return void 0 === t && (t = new a), console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."), t.setFromMatrixColumn(this, 3) } }(), setRotationFromQuaternion: function(t) { return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."), this.makeRotationFromQuaternion(t) }, multiplyToArray: function() { console.warn("THREE.Matrix4: .multiplyToArray() has been removed.") }, multiplyVector3: function(t) { return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this) }, multiplyVector4: function(t) { return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this) }, multiplyVector3Array: function() { console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.") }, rotateAxis: function(t) { console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."), t.transformDirection(this) }, crossVector: function(t) { return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this) }, translate: function() { console.error("THREE.Matrix4: .translate() has been removed.") }, rotateX: function() { console.error("THREE.Matrix4: .rotateX() has been removed.") }, rotateY: function() { console.error("THREE.Matrix4: .rotateY() has been removed.") }, rotateZ: function() { console.error("THREE.Matrix4: .rotateZ() has been removed.") }, rotateByAxis: function() { console.error("THREE.Matrix4: .rotateByAxis() has been removed.") }, applyToBuffer: function(t) { return console.warn("THREE.Matrix4: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead."), this.applyToBufferAttribute(t) }, applyToVector3Array: function() { console.error("THREE.Matrix4: .applyToVector3Array() has been removed.") }, makeFrustum: function(t, e, n, i, r, a) { return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."), this.makePerspective(t, e, i, n, r, a) } }), m.prototype.isIntersectionLine = function(t) { return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."), this.intersectsLine(t) }, r.prototype.multiplyVector3 = function(t) { return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."), t.applyQuaternion(this) }, Object.assign(q.prototype, { isIntersectionBox: function(t) { return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t) }, isIntersectionPlane: function(t) { return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."), this.intersectsPlane(t) }, isIntersectionSphere: function(t) { return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(t) } }), Object.assign(X.prototype, { area: function() { return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."), this.getArea() }, barycoordFromPoint: function(t, e) { return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), this.getBarycoord(t, e) }, midpoint: function(t) { return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."), this.getMidpoint(t) }, normal: function(t) { return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), this.getNormal(t) }, plane: function(t) { return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."), this.getPlane(t) } }), Object.assign(X, { barycoordFromPoint: function(t, e, n, i, r) { return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), X.getBarycoord(t, e, n, i, r) }, normal: function(t, e, n, i) { return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), X.getNormal(t, e, n, i) } }), Object.assign(Ji.prototype, { extractAllPoints: function(t) { return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."), this.extractPoints(t) }, extrude: function(t) { return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."), new In(this, t) }, makeGeometry: function(t) { return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."), new kn(this, t) } }), Object.assign(n.prototype, { fromAttribute: function(t, e, n) { return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t, e, n) }, distanceToManhattan: function(t) { return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(t) }, lengthManhattan: function() { return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength() } }), Object.assign(a.prototype, { setEulerFromRotationMatrix: function() { console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.") }, setEulerFromQuaternion: function() { console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.") }, getPositionFromMatrix: function(t) { return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."), this.setFromMatrixPosition(t) }, getScaleFromMatrix: function(t) { return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."), this.setFromMatrixScale(t) }, getColumnFromMatrix: function(t, e) { return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."), this.setFromMatrixColumn(e, t) }, applyProjection: function(t) { return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."), this.applyMatrix4(t) }, fromAttribute: function(t, e, n) { return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t, e, n) }, distanceToManhattan: function(t) { return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(t) }, lengthManhattan: function() { return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength() } }), Object.assign(c.prototype, { fromAttribute: function(t, e, n) { return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t, e, n) }, lengthManhattan: function() { return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength() } }), Object.assign(T.prototype, { computeTangents: function() { console.error("THREE.Geometry: .computeTangents() has been removed.") }, computeLineDistances: function() { console.error("THREE.Geometry: .computeLineDistances() has been removed. Use THREE.Line.computeLineDistances() instead.") } }), Object.assign(S.prototype, { getChildByName: function(t) { return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."), this.getObjectByName(t) }, renderDepth: function() { console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.") }, translate: function(t, e) { return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."), this.translateOnAxis(e, t) }, getWorldRotation: function() { console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.") } }), Object.defineProperties(S.prototype, { eulerOrder: { get: function() { return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order }, set: function(t) { console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order = t } }, useQuaternion: { get: function() { console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.") }, set: function() { console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.") } } }), Object.defineProperties(De.prototype, { objects: { get: function() { return console.warn("THREE.LOD: .objects has been renamed to .levels."), this.levels } } }), Object.defineProperty(Be.prototype, "useVertexTexture", { get: function() { console.warn("THREE.Skeleton: useVertexTexture has been removed.") }, set: function() { console.warn("THREE.Skeleton: useVertexTexture has been removed.") } }), Ne.prototype.initBones = function() { console.error("THREE.SkinnedMesh: initBones() has been removed.") }, Object.defineProperty(Ii.prototype, "__arcLengthDivisions", { get: function() { return console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."), this.arcLengthDivisions }, set: function(t) { console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."), this.arcLengthDivisions = t } }), we.prototype.setLens = function(t, e) { console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."), void 0 !== e && (this.filmGauge = e), this.setFocalLength(t) }, Object.defineProperties(Zi.prototype, { onlyShadow: { set: function() { console.warn("THREE.Light: .onlyShadow has been removed.") } }, shadowCameraFov: { set: function(t) { console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."), this.shadow.camera.fov = t } }, shadowCameraLeft: { set: function(t) { console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."), this.shadow.camera.left = t } }, shadowCameraRight: { set: function(t) { console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."), this.shadow.camera.right = t } }, shadowCameraTop: { set: function(t) { console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."), this.shadow.camera.top = t } }, shadowCameraBottom: { set: function(t) { console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."), this.shadow.camera.bottom = t } }, shadowCameraNear: { set: function(t) { console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."), this.shadow.camera.near = t } }, shadowCameraFar: { set: function(t) { console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."), this.shadow.camera.far = t } }, shadowCameraVisible: { set: function() { console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.") } }, shadowBias: { set: function(t) { console.warn("THREE.Light: .shadowBias is now .shadow.bias."), this.shadow.bias = t } }, shadowDarkness: { set: function() { console.warn("THREE.Light: .shadowDarkness has been removed.") } }, shadowMapWidth: { set: function(t) { console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."), this.shadow.mapSize.width = t } }, shadowMapHeight: { set: function(t) { console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."), this.shadow.mapSize.height = t } } }), Object.defineProperties(A.prototype, { length: { get: function() { return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."), this.array.length } }, copyIndicesArray: function() { console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.") } }), Object.assign(G.prototype, { addIndex: function(t) { console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."), this.setIndex(t) }, addDrawCall: function(t, e, n) { void 0 !== n && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."), console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."), this.addGroup(t, e) }, clearDrawCalls: function() { console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."), this.clearGroups() }, computeTangents: function() { console.warn("THREE.BufferGeometry: .computeTangents() has been removed.") }, computeOffsets: function() { console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.") } }), Object.defineProperties(G.prototype, { drawcalls: { get: function() { return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."), this.groups } }, offsets: { get: function() { return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."), this.groups } } }), Object.assign(On.prototype, { getArrays: function() { console.error("THREE.ExtrudeBufferGeometry: .getArrays() has been removed.") }, addShapeList: function() { console.error("THREE.ExtrudeBufferGeometry: .addShapeList() has been removed.") }, addShape: function() { console.error("THREE.ExtrudeBufferGeometry: .addShape() has been removed.") } }), Object.defineProperties(Rr.prototype, { dynamic: { set: function() { console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.") } }, onUpdate: { value: function() { return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."), this } } }), Object.defineProperties(j.prototype, { wrapAround: { get: function() { console.warn("THREE.Material: .wrapAround has been removed.") }, set: function() { console.warn("THREE.Material: .wrapAround has been removed.") } }, overdraw: { get: function() { console.warn("THREE.Material: .overdraw has been removed.") }, set: function() { console.warn("THREE.Material: .overdraw has been removed.") } }, wrapRGB: { get: function() { return console.warn("THREE.Material: .wrapRGB has been removed."), new x } }, shading: { get: function() { console.error("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead.") }, set: function(t) { console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = 1 === t } } }), Object.defineProperties(ii.prototype, { metal: { get: function() { return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."), !1 }, set: function() { console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead") } } }), Object.defineProperties(W.prototype, { derivatives: { get: function() { return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives }, set: function(t) { console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives = t } } }), Object.assign(Te.prototype, { clearTarget: function(t, e, n, i) { console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."), this.setRenderTarget(t), this.clear(e, n, i) }, animate: function(t) { console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."), this.setAnimationLoop(t) }, getCurrentRenderTarget: function() { return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."), this.getRenderTarget() }, getMaxAnisotropy: function() { return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."), this.capabilities.getMaxAnisotropy() }, getPrecision: function() { return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."), this.capabilities.precision }, resetGLState: function() { return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."), this.state.reset() }, supportsFloatTextures: function() { return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."), this.extensions.get("OES_texture_float") }, supportsHalfFloatTextures: function() { return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."), this.extensions.get("OES_texture_half_float") }, supportsStandardDerivatives: function() { return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."), this.extensions.get("OES_standard_derivatives") }, supportsCompressedTextureS3TC: function() { return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."), this.extensions.get("WEBGL_compressed_texture_s3tc") }, supportsCompressedTexturePVRTC: function() { return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."), this.extensions.get("WEBGL_compressed_texture_pvrtc") }, supportsBlendMinMax: function() { return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."), this.extensions.get("EXT_blend_minmax") }, supportsVertexTextures: function() { return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."), this.capabilities.vertexTextures }, supportsInstancedArrays: function() { return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."), this.extensions.get("ANGLE_instanced_arrays") }, enableScissorTest: function(t) { console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."), this.setScissorTest(t) }, initMaterial: function() { console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.") }, addPrePlugin: function() { console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.") }, addPostPlugin: function() { console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.") }, updateShadowMap: function() { console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.") }, setFaceCulling: function() { console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.") } }), Object.defineProperties(Te.prototype, { shadowMapEnabled: { get: function() { return this.shadowMap.enabled }, set: function(t) { console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."), this.shadowMap.enabled = t } }, shadowMapType: { get: function() { return this.shadowMap.type }, set: function(t) { console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."), this.shadowMap.type = t } }, shadowMapCullFace: { get: function() { console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.") }, set: function() { console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.") } } }), Object.defineProperties(me.prototype, { cullFace: { get: function() { console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.") }, set: function() { console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.") } }, renderReverseSided: { get: function() { console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.") }, set: function() { console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.") } }, renderSingleSided: { get: function() { console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.") }, set: function() { console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.") } } }), Object.defineProperties(u.prototype, { activeCubeFace: { set: function() { console.warn("THREE.WebGLRenderTargetCube: .activeCubeFace has been removed. It is now the second parameter of WebGLRenderer.setRenderTarget().") } }, activeMipMapLevel: { set: function() { console.warn("THREE.WebGLRenderTargetCube: .activeMipMapLevel has been removed. It is now the third parameter of WebGLRenderer.setRenderTarget().") } } }), Object.defineProperties(h.prototype, { wrapS: { get: function() { return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS }, set: function(t) { console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS = t } }, wrapT: { get: function() { return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT }, set: function(t) { console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT = t } }, magFilter: { get: function() { return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter }, set: function(t) { console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter = t } }, minFilter: { get: function() { return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter }, set: function(t) { console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter = t } }, anisotropy: { get: function() { return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy }, set: function(t) { console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy = t } }, offset: { get: function() { return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset }, set: function(t) { console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset = t } }, repeat: { get: function() { return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat }, set: function(t) { console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat = t } }, format: { get: function() { return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format }, set: function(t) { console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format = t } }, type: { get: function() { return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type }, set: function(t) { console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type = t } }, generateMipmaps: { get: function() { return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps }, set: function(t) { console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps = t } } }), Object.defineProperties(Ee.prototype, { standing: { set: function() { console.warn("THREE.WebVRManager: .standing has been removed.") } }, userHeight: { set: function() { console.warn("THREE.WebVRManager: .userHeight has been removed.") } } }), br.prototype.load = function(t) { console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead."); var e = this; return (new mr).load(t, function(t) { e.setBuffer(t) }), this }, _r.prototype.getData = function() { return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."), this.getFrequencyData() }, vr.prototype.updateCubeMap = function(t, e) { return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."), this.update(t, e) }, la.crossOrigin = void 0, la.loadTexture = function(t, e, n, i) { console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead."); var r = new Ci; return r.setCrossOrigin(this.crossOrigin), t = r.load(t, n, void 0, i), e && (t.mapping = e), t }, la.loadTextureCube = function(t, e, n, i) { console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead."); var r = new Pi; return r.setCrossOrigin(this.crossOrigin), t = r.load(t, n, void 0, i), e && (t.mapping = e), t }, la.loadCompressedTexture = function() { console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.") }, la.loadCompressedTextureCube = function() { console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.") }, t.WebGLMultisampleRenderTarget = l, t.WebGLRenderTargetCube = u, t.WebGLRenderTarget = h, t.WebGLRenderer = Te, t.ShaderLib = ga, t.UniformsLib = ma, t.UniformsUtils = da, t.ShaderChunk = pa, t.FogExp2 = Ae, t.Fog = Le, t.Scene = Re, t.Sprite = Oe, t.LOD = De, t.SkinnedMesh = Ne, t.Skeleton = Be, t.Bone = ze, t.Mesh = J, t.LineSegments = Fe, t.LineLoop = He, t.Line = Ge, t.Points = ke, t.Group = xe, t.VideoTexture = je, t.DataTexture = p, t.DataTexture3D = ct, t.CompressedTexture = We, t.CubeTexture = st, t.CanvasTexture = qe, t.DepthTexture = Xe, t.Texture = s, t.AnimationLoader = Ti, t.CompressedTextureLoader = Ai, t.DataTextureLoader = Li, t.CubeTextureLoader = Pi, t.TextureLoader = Ci, t.ObjectLoader = hr, t.MaterialLoader = sr, t.BufferGeometryLoader = cr, t.DefaultLoadingManager = Va, t.LoadingManager = Ei, t.ImageLoader = Ri, t.ImageBitmapLoader = lr, t.FontLoader = dr, t.FileLoader = Si, t.Loader = fr, t.LoaderUtils = Ja, t.Cache = Ha, t.AudioLoader = mr, t.SpotLightShadow = $i, t.SpotLight = tr, t.PointLight = er, t.RectAreaLight = or, t.HemisphereLight = Qi, t.DirectionalLightShadow = ir, t.DirectionalLight = rr, t.AmbientLight = ar, t.LightShadow = Ki, t.Light = Zi, t.StereoCamera = gr, t.PerspectiveCamera = we, t.OrthographicCamera = nr, t.CubeCamera = vr, t.ArrayCamera = _e, t.Camera = be, t.AudioListener = xr, t.PositionalAudio = wr, t.AudioContext = eo, t.AudioAnalyser = _r, t.Audio = br, t.VectorKeyframeTrack = bi, t.StringKeyframeTrack = xi, t.QuaternionKeyframeTrack = yi, t.NumberKeyframeTrack = gi, t.ColorKeyframeTrack = mi, t.BooleanKeyframeTrack = fi, t.PropertyMixer = Mr, t.PropertyBinding = Sr, t.KeyframeTrack = di, t.AnimationUtils = Fa, t.AnimationObjectGroup = Tr, t.AnimationMixer = Lr, t.AnimationClip = wi, t.Uniform = Rr, t.InstancedBufferGeometry = Pr, t.BufferGeometry = G, t.Geometry = T, t.InterleavedBufferAttribute = Ce, t.InstancedInterleavedBuffer = Cr, t.InterleavedBuffer = Pe, t.InstancedBufferAttribute = Ir, t.Face3 = _, t.Object3D = S, t.Raycaster = Or, t.Layers = E, t.EventDispatcher = e, t.Clock = yr, t.QuaternionLinearInterpolant = vi, t.LinearInterpolant = ui, t.DiscreteInterpolant = pi, t.CubicInterpolant = li, t.Interpolant = hi, t.Triangle = X, t.Math = ca, t.Spherical = Br, t.Cylindrical = zr, t.Plane = m, t.Frustum = g, t.Sphere = f, t.Ray = q, t.Matrix4 = i, t.Matrix3 = o, t.Box3 = d, t.Box2 = Ur, t.Line3 = Gr, t.Euler = M, t.Vector4 = c, t.Vector3 = a, t.Vector2 = n, t.Quaternion = r, t.Color = x, t.ImmediateRenderObject = Fr, t.VertexNormalsHelper = Hr, t.SpotLightHelper = Vr, t.SkeletonHelper = jr, t.PointLightHelper = Wr, t.RectAreaLightHelper = qr, t.HemisphereLightHelper = Xr, t.GridHelper = Yr, t.PolarGridHelper = Jr, t.PositionalAudioHelper = Zr, t.FaceNormalsHelper = Qr, t.DirectionalLightHelper = Kr, t.CameraHelper = $r, t.BoxHelper = ta;
    t.Box3Helper = ea, t.PlaneHelper = na, t.ArrowHelper = ia, t.AxesHelper = ra, t.Shape = Ji, t.Path = Yi, t.ShapePath = ur, t.Font = pr, t.CurvePath = Xi, t.Curve = Ii, t.ImageUtils = la, t.ShapeUtils = Ba, t.WebGLUtils = ye, t.WireframeGeometry = Ye, t.ParametricGeometry = Je, t.ParametricBufferGeometry = Ze, t.TetrahedronGeometry = $e, t.TetrahedronBufferGeometry = tn, t.OctahedronGeometry = en, t.OctahedronBufferGeometry = nn, t.IcosahedronGeometry = rn, t.IcosahedronBufferGeometry = an, t.DodecahedronGeometry = on, t.DodecahedronBufferGeometry = sn, t.PolyhedronGeometry = Qe, t.PolyhedronBufferGeometry = Ke, t.TubeGeometry = cn, t.TubeBufferGeometry = hn, t.TorusKnotGeometry = ln, t.TorusKnotBufferGeometry = un, t.TorusGeometry = pn, t.TorusBufferGeometry = dn, t.TextGeometry = Nn, t.TextBufferGeometry = Bn, t.SphereGeometry = zn, t.SphereBufferGeometry = Un, t.RingGeometry = Gn, t.RingBufferGeometry = Fn, t.PlaneGeometry = V, t.PlaneBufferGeometry = k, t.LatheGeometry = Hn, t.LatheBufferGeometry = Vn, t.ShapeGeometry = kn, t.ShapeBufferGeometry = jn, t.ExtrudeGeometry = In, t.ExtrudeBufferGeometry = On, t.EdgesGeometry = qn, t.ConeGeometry = Jn, t.ConeBufferGeometry = Zn, t.CylinderGeometry = Xn, t.CylinderBufferGeometry = Yn, t.CircleGeometry = Qn, t.CircleBufferGeometry = Kn, t.BoxGeometry = F, t.CubeGeometry = F, t.BoxBufferGeometry = H, t.ShadowMaterial = $n, t.SpriteMaterial = Ie, t.RawShaderMaterial = ti, t.ShaderMaterial = W, t.PointsMaterial = Ve, t.MeshPhysicalMaterial = ni, t.MeshStandardMaterial = ei, t.MeshPhongMaterial = ii, t.MeshToonMaterial = ri, t.MeshNormalMaterial = ai, t.MeshLambertMaterial = oi, t.MeshDepthMaterial = de, t.MeshDistanceMaterial = fe, t.MeshBasicMaterial = Y, t.MeshMatcapMaterial = si, t.LineDashedMaterial = ci, t.LineBasicMaterial = Ue, t.Material = j, t.Float64BufferAttribute = B, t.Float32BufferAttribute = N, t.Uint32BufferAttribute = D, t.Int32BufferAttribute = O, t.Uint16BufferAttribute = I, t.Int16BufferAttribute = C, t.Uint8ClampedBufferAttribute = P, t.Uint8BufferAttribute = R, t.Int8BufferAttribute = L, t.BufferAttribute = A, t.ArcCurve = Di, t.CatmullRomCurve3 = Bi, t.CubicBezierCurve = Fi, t.CubicBezierCurve3 = Hi, t.EllipseCurve = Oi, t.LineCurve = Vi, t.LineCurve3 = ki, t.QuadraticBezierCurve = ji, t.QuadraticBezierCurve3 = Wi, t.SplineCurve = qi, t.REVISION = "102", t.MOUSE = { LEFT: 0, MIDDLE: 1, RIGHT: 2 }, t.CullFaceNone = 0, t.CullFaceBack = 1, t.CullFaceFront = 2, t.CullFaceFrontBack = 3, t.FrontFaceDirectionCW = 0, t.FrontFaceDirectionCCW = 1, t.BasicShadowMap = 0, t.PCFShadowMap = 1, t.PCFSoftShadowMap = 2, t.FrontSide = 0, t.BackSide = 1, t.DoubleSide = 2, t.FlatShading = 1, t.SmoothShading = 2, t.NoColors = 0, t.FaceColors = 1, t.VertexColors = 2, t.NoBlending = 0, t.NormalBlending = 1, t.AdditiveBlending = 2, t.SubtractiveBlending = 3, t.MultiplyBlending = 4, t.CustomBlending = 5, t.AddEquation = 100, t.SubtractEquation = 101, t.ReverseSubtractEquation = 102, t.MinEquation = 103, t.MaxEquation = 104, t.ZeroFactor = 200, t.OneFactor = 201, t.SrcColorFactor = 202, t.OneMinusSrcColorFactor = 203, t.SrcAlphaFactor = 204, t.OneMinusSrcAlphaFactor = 205, t.DstAlphaFactor = 206, t.OneMinusDstAlphaFactor = 207, t.DstColorFactor = 208, t.OneMinusDstColorFactor = 209, t.SrcAlphaSaturateFactor = 210, t.NeverDepth = 0, t.AlwaysDepth = 1, t.LessDepth = 2, t.LessEqualDepth = 3, t.EqualDepth = 4, t.GreaterEqualDepth = 5, t.GreaterDepth = 6, t.NotEqualDepth = 7, t.MultiplyOperation = 0, t.MixOperation = 1, t.AddOperation = 2, t.NoToneMapping = 0, t.LinearToneMapping = 1, t.ReinhardToneMapping = 2, t.Uncharted2ToneMapping = 3, t.CineonToneMapping = 4, t.ACESFilmicToneMapping = 5, t.UVMapping = 300, t.CubeReflectionMapping = 301, t.CubeRefractionMapping = 302, t.EquirectangularReflectionMapping = 303, t.EquirectangularRefractionMapping = 304, t.SphericalReflectionMapping = 305, t.CubeUVReflectionMapping = 306, t.CubeUVRefractionMapping = 307, t.RepeatWrapping = 1e3, t.ClampToEdgeWrapping = 1001, t.MirroredRepeatWrapping = 1002, t.NearestFilter = 1003, t.NearestMipMapNearestFilter = 1004, t.NearestMipMapLinearFilter = 1005, t.LinearFilter = 1006, t.LinearMipMapNearestFilter = 1007, t.LinearMipMapLinearFilter = 1008, t.UnsignedByteType = 1009, t.ByteType = 1010, t.ShortType = 1011, t.UnsignedShortType = 1012, t.IntType = 1013, t.UnsignedIntType = 1014, t.FloatType = 1015, t.HalfFloatType = 1016, t.UnsignedShort4444Type = 1017, t.UnsignedShort5551Type = 1018, t.UnsignedShort565Type = 1019, t.UnsignedInt248Type = 1020, t.AlphaFormat = 1021, t.RGBFormat = 1022, t.RGBAFormat = 1023, t.LuminanceFormat = 1024, t.LuminanceAlphaFormat = 1025, t.RGBEFormat = 1023, t.DepthFormat = 1026, t.DepthStencilFormat = 1027, t.RedFormat = 1028, t.RGB_S3TC_DXT1_Format = 33776, t.RGBA_S3TC_DXT1_Format = 33777, t.RGBA_S3TC_DXT3_Format = 33778, t.RGBA_S3TC_DXT5_Format = 33779, t.RGB_PVRTC_4BPPV1_Format = 35840, t.RGB_PVRTC_2BPPV1_Format = 35841, t.RGBA_PVRTC_4BPPV1_Format = 35842, t.RGBA_PVRTC_2BPPV1_Format = 35843, t.RGB_ETC1_Format = 36196, t.RGBA_ASTC_4x4_Format = 37808;
    t.RGBA_ASTC_5x4_Format = 37809, t.RGBA_ASTC_5x5_Format = 37810, t.RGBA_ASTC_6x5_Format = 37811, t.RGBA_ASTC_6x6_Format = 37812, t.RGBA_ASTC_8x5_Format = 37813, t.RGBA_ASTC_8x6_Format = 37814, t.RGBA_ASTC_8x8_Format = 37815, t.RGBA_ASTC_10x5_Format = 37816, t.RGBA_ASTC_10x6_Format = 37817, t.RGBA_ASTC_10x8_Format = 37818, t.RGBA_ASTC_10x10_Format = 37819, t.RGBA_ASTC_12x10_Format = 37820, t.RGBA_ASTC_12x12_Format = 37821, t.LoopOnce = 2200, t.LoopRepeat = 2201, t.LoopPingPong = 2202, t.InterpolateDiscrete = 2300, t.InterpolateLinear = 2301, t.InterpolateSmooth = 2302, t.ZeroCurvatureEnding = 2400, t.ZeroSlopeEnding = 2401, t.WrapAroundEnding = 2402, t.TrianglesDrawMode = 0, t.TriangleStripDrawMode = 1, t.TriangleFanDrawMode = 2, t.LinearEncoding = 3e3, t.sRGBEncoding = 3001, t.GammaEncoding = 3007, t.RGBEEncoding = 3002, t.LogLuvEncoding = 3003, t.RGBM7Encoding = 3004, t.RGBM16Encoding = 3005, t.RGBDEncoding = 3006, t.BasicDepthPacking = 3200, t.RGBADepthPacking = 3201, t.TangentSpaceNormalMap = 0, t.ObjectSpaceNormalMap = 1, t.Face4 = function(t, e, n, i, r, a, o) { return console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead."), new _(t, e, n, r, a, o) }, t.LineStrip = 0, t.LinePieces = 1, t.MeshFaceMaterial = function(t) { return console.warn("THREE.MeshFaceMaterial has been removed. Use an Array instead."), t }, t.MultiMaterial = function(t) { return void 0 === t && (t = []), console.warn("THREE.MultiMaterial has been removed. Use an Array instead."), t.isMultiMaterial = !0, t.materials = t, t.clone = function() { return t.slice() }, t }, t.PointCloud = function(t, e) { return console.warn("THREE.PointCloud has been renamed to THREE.Points."), new ke(t, e) }, t.Particle = function(t) { return console.warn("THREE.Particle has been renamed to THREE.Sprite."), new Oe(t) }, t.ParticleSystem = function(t, e) { return console.warn("THREE.ParticleSystem has been renamed to THREE.Points."), new ke(t, e) }, t.PointCloudMaterial = function(t) { return console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial."), new Ve(t) }, t.ParticleBasicMaterial = function(t) { return console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial."), new Ve(t) }, t.ParticleSystemMaterial = function(t) { return console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial."), new Ve(t) }, t.Vertex = function(t, e, n) { return console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead."), new a(t, e, n) }, t.DynamicBufferAttribute = function(t, e) { return console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setDynamic( true ) instead."), new A(t, e).setDynamic(!0) }, t.Int8Attribute = function(t, e) { return console.warn("THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead."), new L(t, e) }, t.Uint8Attribute = function(t, e) { return console.warn("THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead."), new R(t, e) }, t.Uint8ClampedAttribute = function(t, e) { return console.warn("THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead."), new P(t, e) }, t.Int16Attribute = function(t, e) { return console.warn("THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead."), new C(t, e) }, t.Uint16Attribute = function(t, e) { return console.warn("THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead."), new I(t, e) }, t.Int32Attribute = function(t, e) { return console.warn("THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead."), new O(t, e) }, t.Uint32Attribute = function(t, e) { return console.warn("THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead."), new D(t, e) }, t.Float32Attribute = function(t, e) { return console.warn("THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead."), new N(t, e) }, t.Float64Attribute = function(t, e) { return console.warn("THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead."), new B(t, e) }, t.ClosedSplineCurve3 = aa, t.SplineCurve3 = oa, t.Spline = sa, t.AxisHelper = function(t) { return console.warn("THREE.AxisHelper has been renamed to THREE.AxesHelper."), new ra(t) }, t.BoundingBoxHelper = function(t, e) { return console.warn("THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead."), new ta(t, e) }, t.EdgesHelper = function(t, e) { return console.warn("THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead."), new Fe(new qn(t.geometry), new Ue({ color: void 0 !== e ? e : 16777215 })) }, t.WireframeHelper = function(t, e) { return console.warn("THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead."), new Fe(new Ye(t.geometry), new Ue({ color: void 0 !== e ? e : 16777215 })) }, t.XHRLoader = function(t) { return console.warn("THREE.XHRLoader has been renamed to THREE.FileLoader."), new Si(t) }, t.BinaryTextureLoader = function(t) { return console.warn("THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader."), new Li(t) }, t.GeometryUtils = {
        merge: function(t, e, n) {
            if (console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead."), e.isMesh) {
                e.matrixAutoUpdate && e.updateMatrix();
                var i = e.matrix;
                e = e.geometry
            }
            t.merge(e, i, n)
        },
        center: function(t) { return console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead."), t.center() }
    }, t.Projector = function() { console.error("THREE.Projector has been moved to /examples/js/renderers/Projector.js."), this.projectVector = function(t, e) { console.warn("THREE.Projector: .projectVector() is now vector.project()."), t.project(e) }, this.unprojectVector = function(t, e) { console.warn("THREE.Projector: .unprojectVector() is now vector.unproject()."), t.unproject(e) }, this.pickingRay = function() { console.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().") } }, t.CanvasRenderer = function() { console.error("THREE.CanvasRenderer has been removed") }, t.JSONLoader = function() { console.error("THREE.JSONLoader has been removed.") }, t.SceneUtils = { createMultiMaterialObject: function() { console.error("THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js") }, detach: function() { console.error("THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js") }, attach: function() { console.error("THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js") } }, t.LensFlare = function() { console.error("THREE.LensFlare has been moved to /examples/js/objects/Lensflare.js") }, Object.defineProperty(t, "__esModule", { value: !0 })
});