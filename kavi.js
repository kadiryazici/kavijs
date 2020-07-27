"use strict";

function _inherits(a, b) { if (typeof b !== "function" && b !== null) { throw new TypeError("Super expression must either be null or a function"); } a.prototype = Object.create(b && b.prototype, { constructor: { value: a, writable: true, configurable: true } }); if (b) _setPrototypeOf(a, b); }

function _setPrototypeOf(a, b) { _setPrototypeOf = Object.setPrototypeOf || function a(b, c) { b.__proto__ = c; return b; }; return _setPrototypeOf(a, b); }

function _createSuper(a) { var b = _isNativeReflectConstruct(); return function c() { var d = _getPrototypeOf(a), e; if (b) { var f = _getPrototypeOf(this).constructor; e = Reflect.construct(d, arguments, f); } else { e = d.apply(this, arguments); } return _possibleConstructorReturn(this, e); }; }

function _possibleConstructorReturn(a, b) { if (b && (_typeof(b) === "object" || typeof b === "function")) { return b; } return _assertThisInitialized(a); }

function _assertThisInitialized(a) { if (a === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return a; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () { })); return true; } catch (a) { return false; } }

function _getPrototypeOf(a) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function a(b) { return b.__proto__ || Object.getPrototypeOf(b); }; return _getPrototypeOf(a); }

function _instanceof(a, b) { if (b != null && typeof Symbol !== "undefined" && b[Symbol.hasInstance]) { return !!b[Symbol.hasInstance](a); } else { return a instanceof b; } }

function _typeof(a) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(a) { return typeof a; }; } else { _typeof = function _typeof(a) { return a && typeof Symbol === "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a; }; } return _typeof(a); }

function _classCallCheck(a, b) { if (!_instanceof(a, b)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(a, b) { for (var c = 0; c < b.length; c++) { var d = b[c]; d.enumerable = d.enumerable || false; d.configurable = true; if ("value" in d) d.writable = true; Object.defineProperty(a, d.key, d); } }

function _createClass(a, b, c) { if (b) _defineProperties(a.prototype, b); if (c) _defineProperties(a, c); return a; }

var Kavi = /*#__PURE__*/function () {
    function a(b, c) {
        _classCallCheck(this, a);

        this.element = false;

        if (typeof b === "string") {
            this.element = document.createElement(b);
        }

        if (!b) {
            throw new Error("Expected string but got " + _typeof(b));
        }

        var d = (c === null || c === void 0 ? void 0 : c.attributes) || null;
        var e = (c === null || c === void 0 ? void 0 : c.style) || null;
        var f = (c === null || c === void 0 ? void 0 : c.text) || null;
        var g = (c === null || c === void 0 ? void 0 : c.html) || null;
        var h = (c === null || c === void 0 ? void 0 : c.on) || null;
        var i = (c === null || c === void 0 ? void 0 : c.children) || null;
        this.random = Math.random().toString();
        this.random = this.random.slice(this.random.length - 7, this.random.length);
        this.element.setAttribute('data-Kavi-' + this.random, '');

        if (d && _typeof(d) === "object") {
            if (Array.isArray(d)) throw this.Error('Attributes', 'Object'); else this.setAttributes(d);
        } else if (d && _typeof(d) !== "object") throw this.Error('Attributes', 'be a Object');

        if (f && typeof f === "string") this.setText(f); else if (f && typeof f !== "string") throw this.Error('Text', 'be a String');
        if (g && typeof g === "string") this.setHtml(g); else if (g && typeof g !== "string") throw this.Error('HTML', 'be a String');

        if (h && _typeof(h) === "object") {
            if (Array.isArray(h)) throw this.Error('On', 'be a Object'); else this.setOn(h);
        } else if (h && _typeof(h) !== "object") throw this.Error('On', 'be a Object');

        if (i && _typeof(i) === "object") {
            if (Array.isArray(i)) {
                if (i.length > 0) {
                    this.setChildren(i);
                } else {
                    throw this.Error('Attributes', 'have at least one element');
                }
            } else throw this.Error('Attributes', 'be an Array');
        } else if (i && _typeof(i) !== "object") throw this.Error('Children', 'be an Array');

        if (e && _typeof(e) === "object") this.setStyle(e); else if (_typeof(e) !== "object") throw this.Error('Style', 'be a Object');
        return this.element;
    }

    _createClass(a, [{
        key: "Error",
        value: function (a) {
            function b(b, c) {
                return a.apply(this, arguments);
            }

            b.toString = function () {
                return a.toString();
            };

            return b;
        }(function (a, b) {
            return new Error("".concat(a, " must ").concat(b, "."));
        })
    }, {
        key: "setChildren",
        value: function setChildren(a) {
            var b = this;
            a.forEach(function (a) {
                b.element.appendChild(a);
            });
        }
    }, {
        key: "setAttributes",
        value: function setAttributes(a) {
            for (var b in a) {
                if (a.hasOwnProperty(b)) {
                    var c = a[b];
                    this.element.setAttribute(b, c);
                }
            }
        }
    }, {
        key: "setStyle",
        value: function setStyle(a) {
            var b = '';

            for (var d in a) {
                if (a.hasOwnProperty(d)) {
                    var e = a[d];
                    b += "".concat(this.toKebabCase(d), ": ").concat(e, "; ");
                }
            }

            var c = new KaviStyle({
                html: "[data-Kavi-".concat(this.random, "] {").concat(b, "}")
            });
            document.head.appendChild(c);
        }
    }, {
        key: "setText",
        value: function setText(a) {
            this.element.insertAdjacentHTML('beforeend', a);
        }
    }, {
        key: "setHtml",
        value: function setHtml(a) {
            this.element.insertAdjacentText('beforeend', a);
        }
    }, {
        key: "setOn",
        value: function setOn(a) {
            var b = this;

            for (var c in a) {
                if (a.hasOwnProperty(c)) {
                    (function () {
                        var d = a[c];
                        b.element.addEventListener(c, function (a) {
                            d(a, b.element);
                        });
                    })();
                }
            }
        }
    }, {
        key: "toKebabCase",
        value: function toKebabCase(a) {
            return a.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
        }
    }]);

    return a;
}();

["A", "Article", "Div", "H1", "H2", "H3", "H4", "H5", "H6", "Header", "Footer", "P", "Section", "Span", "Button", "Form", "Input", "Select", "Option", "Textarea", "Style", "Address", "B", "Code", "I", "Pre", "Small", "Strong", "Ol", "Li", "Ul", "Caption", "Col", "Colgroup", "Table", "Tbody", "Td", "Tfoot", "Thead", "Th", "Tr", "Audio", "Canvas", "Embed", "Figcaption", "Figure", "Iframe", "Img", "Object", "Param", "Source", "Time", "Video", "Label"].forEach(function (a) {
    window['Kavi' + a] = /*#__PURE__*/function (b) {
        _inherits(c, b);

        var d = _createSuper(c);

        function c(b) {
            var e;

            _classCallCheck(this, c);

            e = d.call(this, a.toLowerCase(), b);
            return _possibleConstructorReturn(e, e.element);
        }

        return c;
    }(Kavi);
});