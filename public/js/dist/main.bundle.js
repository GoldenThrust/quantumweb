/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./public/js/canvas.js":
/*!*****************************!*\
  !*** ./public/js/canvas.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnimateSlide: () => (/* binding */ AnimateSlide)
/* harmony export */ });
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant.js */ "./public/js/constant.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./public/js/utils.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var toolSlide = document.getElementById("toolslide");
var toolctx = toolSlide.getContext("2d");
var tools = document.querySelector(".tools");
toolctx.imageSmoothingQuality = "high";
toolSlide.width = tools.clientWidth * devicePixelRatio;
toolSlide.height = tools.clientHeight * devicePixelRatio;
var toolW = toolSlide.width;
var toolH = toolSlide.height;
var lastTime = 0;
var fps = 1;
var frameInterval = 1000 / fps;
var imageElem = [];
Object.values(_constant_js__WEBPACK_IMPORTED_MODULE_0__.toolsTechImage).forEach(function (url) {
  var img = new Image();
  img.src = "img/toolsandlanguage/".concat(url);
  imageElem.push(img);
});
var ToolAndTechnologySlide = /*#__PURE__*/function () {
  function ToolAndTechnologySlide(x) {
    _classCallCheck(this, ToolAndTechnologySlide);
    this.image = null;
    this.x = x;
    this.y = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getpercent)(toolH, 25);
    this.imgx = x;
    this.nx = x;
    this.ny = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getpercent)(toolH, 25);
    this.height = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getpercent)(toolH, 50);
    this.imagesize = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getpercent)(toolH, 50);
    this.size = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getpercent)(toolH, 35);
    this.strokeStyle = "#A182AB";
  }
  return _createClass(ToolAndTechnologySlide, [{
    key: "drawImage",
    value: function drawImage(img) {
      var gradient = toolctx.createRadialGradient(this.nx + this.height / 2, this.height, 0, this.nx + this.height / 2, this.height, this.size);
      gradient.addColorStop(0.65, "rgba(254, 207, 255, 0.10)");
      gradient.addColorStop(1, "rgba(246, 78, 250, 0.03)");
      toolctx.fillStyle = gradient;
      toolctx.strokeStyle = "#A182AB";
      toolctx.beginPath();
      toolctx.arc(this.nx + this.height / 2, this.height, this.size, 0, Math.PI * 2);
      toolctx.fill();
      toolctx.stroke();
      toolctx.drawImage(img, this.imgx, this.ny, this.imagesize, this.imagesize);
    }
  }, {
    key: "update",
    value: function update(img) {
      var _this = this;
      imageElem.forEach(function (img, idx) {
        if (idx < 6) {
          _this.nx = idx * (_this.x - (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getpercent)(toolW, 5)) + (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getpercent)(toolW, 5);
          if (idx == 0 || idx == 4) {
            _this.imagesize = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getpercent)(toolH, 25);
            _this.ny = _this.y + _this.imagesize / 2;
            _this.size = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getpercent)(toolH, 25);
            _this.imgx = _this.nx + _this.y / 2;
          } else if (idx % 2 == 1) {
            _this.imagesize = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getpercent)(toolH, 35);
            _this.ny = _this.y + _this.imagesize / 4;
            _this.size = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getpercent)(toolH, 30);
            _this.imgx = _this.nx + _this.y / 4;
          } else {
            _this.imagesize = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getpercent)(toolH, 50);
            _this.ny = _this.y;
            _this.size = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getpercent)(toolH, 35);
            _this.imgx = _this.nx;
          }
          _this.drawImage(img);
        }
      });
    }
  }]);
}();
var toolsandTech = new ToolAndTechnologySlide((0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getpercent)(toolW, 20) + (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getpercent)(toolW, 5));
function AnimateSlide(currentTime) {
  var elapsedTime = currentTime - lastTime;
  toolctx.clearRect(0, 0, toolW, toolH);

  // Check if enough time has passed to render the next frame
  if (elapsedTime >= frameInterval) {
    var img = imageElem.pop();
    imageElem.unshift(img);
    lastTime = currentTime - elapsedTime % frameInterval;
  }
  toolsandTech.update();
  requestAnimationFrame(AnimateSlide);
}

/***/ }),

/***/ "./public/js/constant.js":
/*!*******************************!*\
  !*** ./public/js/constant.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toolsTechImage: () => (/* binding */ toolsTechImage)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var toolsTechImage = _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
  html5: "html.svg",
  css: "css.svg",
  javascript: "javascript.svg",
  php: "php.svg",
  c: "c.svg",
  reactjs: "react.svg",
  vue: "vue.svg",
  python: "python.svg",
  bash: "bash.svg",
  ansible: "ansible.svg",
  css3: "css.svg",
  cpp: "cpp.svg",
  bootstrap: "bootstrap.svg",
  djangorestframework: "djangorest.svg",
  docker: "docker.svg",
  expressjs: "express.svg",
  flask: "flask.svg",
  figma: "figma.svg",
  mongodb: "mongodb.svg",
  mysql: "mysql.svg",
  laravel: "laravel.svg",
  html: "html.svg",
  nginx: "nginx.svg",
  nodejs: "node.svg",
  postgresql: "postgresql.svg"
}, "python", "python.svg"), "redis", "redis.svg"), "typescript", "typescript.svg"), "django", "django.svg"), "webrtc", "webrtc.svg"), "websocket", "websocket.svg"), "ubuntu", "ubuntu.svg"), "ejs", "ejs.svg"), "puppet", "puppet.svg"), "ruby", "ruby.svg");

/***/ }),

/***/ "./public/js/utils.js":
/*!****************************!*\
  !*** ./public/js/utils.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkChildOverflow: () => (/* binding */ checkChildOverflow),
/* harmony export */   "default": () => (/* binding */ createElement),
/* harmony export */   fetchJson: () => (/* binding */ fetchJson),
/* harmony export */   getDragAfterElement: () => (/* binding */ getDragAfterElement),
/* harmony export */   getpercent: () => (/* binding */ getpercent),
/* harmony export */   isFigmaLink: () => (/* binding */ isFigmaLink),
/* harmony export */   isGitHubLink: () => (/* binding */ isGitHubLink),
/* harmony export */   showAlert: () => (/* binding */ showAlert),
/* harmony export */   uploadFile: () => (/* binding */ uploadFile)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var foregroundCanvas = document.getElementById('foreground');
foregroundCanvas.width = window.innerWidth;
foregroundCanvas.height = window.innerHeight;
var foregroundCtx = foregroundCanvas.getContext('2d');
function getpercent(num, percent) {
  return percent / 100 * num;
}
function createElement(parent, elem) {
  var attribute = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var content = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var element = document.createElement(elem);
  if (content) {
    element.innerText = content;
  }
  if (attribute) {
    for (var key in attribute) {
      element.setAttribute(key, attribute[key]);
    }
  }
  parent.appendChild(element);
  return element;
}
function checkChildOverflow(element) {
  var lastChild = element.lastElementChild;
  if (!lastChild) {
    return false;
  }
  var isOverflowing = lastChild.offsetLeft + lastChild.offsetWidth > element.clientWidth + 360;
  return isOverflowing;
}
function getDragAfterElement(container, y) {
  var draggableElements = _toConsumableArray(container.querySelectorAll(".project:not(.dragging)"));
  return draggableElements.reduce(function (closest, child) {
    var box = child.getBoundingClientRect();
    var offset = y - box.top - box.height / 2;
    if (offset < 0 && offset > closest.offset) {
      return {
        offset: offset,
        element: child
      };
    } else {
      return closest;
    }
  }, {
    offset: Number.NEGATIVE_INFINITY
  }).element;
}
function showAlert(text) {
  var error = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var textMetric = foregroundCtx.measureText(text);
  foregroundCtx.textAlign = "center";
  foregroundCtx.fillStyle = 'rgb(0,0,0, 0.8)';
  foregroundCtx.fillRect(innerWidth * 0.05, innerHeight * 0.4, innerWidth * 0.9, innerHeight * 0.2);
  foregroundCtx.fillStyle = error ? 'red' : 'springgreen';
  foregroundCtx.font = "bold 20px Monospace";
  var type = error ? 'error' : 'success';
  foregroundCtx.fillText(type, innerWidth / 2, innerHeight / 2 - 20);
  foregroundCtx.fillStyle = error ? 'brown' : 'white';
  foregroundCtx.font = "bold 2vw serif";
  foregroundCtx.fillText(text, innerWidth / 2, innerHeight / 2 + 20);
  setTimeout(function () {
    foregroundCtx.clearRect(0, 0, innerWidth, innerHeight);
  }, textMetric.width < 100 ? textMetric.width * 20 : textMetric.width * 10);
}

// Function to validate if a link is a Github URL
function isGitHubLink(url) {
  var gitHubRegex = /^(https?:\/\/)?(www\.)?github\.com\/[A-Za-z0-9_-]+\/[A-Za-z0-9_-]+(\/)?$/;
  return gitHubRegex.test(url);
}

// Function to validate if a link is a Figma URL
function isFigmaLink(url) {
  var figmaRegex = /^(https?:\/\/)?(www\.)?figma\.com\/design\/[A-Za-z0-9]+\/[A-Za-z0-9_-]+(\?.*)?$/;
  return figmaRegex.test(url);
}
function fetchJson(_x) {
  return _fetchJson.apply(this, arguments);
}
function _fetchJson() {
  _fetchJson = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(url) {
    var response;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return fetch(url);
        case 2:
          response = _context.sent;
          if (response.ok) {
            _context.next = 5;
            break;
          }
          throw new Error("Network response was not ok");
        case 5:
          return _context.abrupt("return", response.json());
        case 6:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _fetchJson.apply(this, arguments);
}
function uploadFile(_x2) {
  return _uploadFile.apply(this, arguments);
}
function _uploadFile() {
  _uploadFile = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(form) {
    var xhr, formData;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          xhr = new XMLHttpRequest();
          formData = new FormData(form);
          xhr.upload.addEventListener("progress", function (e) {
            if (e.lengthComputable) {
              var radianComplete = e.loaded / e.total * (Math.PI * 2);
              ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
              foregroundCtx.globalCompositeOperation = "destination-over";
              donut(2, "springgreen", radianComplete);
              donut(5, "#ad00ff");
              foregroundCtx.globalCompositeOperation = "source-over";
              if (radianComplete == Math.PI * 2) {
                setTimeout(function () {
                  window.location.replace("/");
                }, 1000);
              }
            }
          });
          xhr.open("POST", "/service/submit_form");
          xhr.send(formData);
        case 5:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _uploadFile.apply(this, arguments);
}
function donut(width, color) {
  var radian = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Math.PI * 2;
  foregroundCtx.save();
  foregroundCtx.fillStyle = color;
  foregroundCtx.beginPath();
  foregroundCtx.arc(window.innerWidth / 2, window.innerHeight / 2, 107 + width, 0, radian);
  foregroundCtx.fill();
  foregroundCtx.globalCompositeOperation = "destination-out";
  foregroundCtx.beginPath();
  foregroundCtx.arc(window.innerWidth / 2, window.innerHeight / 2, 100 - width, 0, Math.PI * 2);
  foregroundCtx.fill();
  foregroundCtx.restore();
}

/***/ }),

/***/ "./public/js/work.js":
/*!***************************!*\
  !*** ./public/js/work.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InitWork),
/* harmony export */   getWork: () => (/* binding */ getWork)
/* harmony export */ });
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant.js */ "./public/js/constant.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./public/js/utils.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


var workShowMore = document.querySelector("#works>.show-more");
var works = document.querySelector("#works>.works");
var worksContainer = document.querySelector("#workpopup");
var bgcover = document.getElementById("bgcover");
var workpopup = document.getElementById("workpopup");
function createProjectElement(container, tag) {
  var attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var textContent = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
  var element = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"])(container, tag, attributes, textContent);
  return element;
}
function createToolsAndTechnologiesSection(container, tools) {
  var workTools = createProjectElement(container, "div", {
    id: "work-tools-and-tech"
  });
  createProjectElement(workTools, "h4", {}, "Tools and Technologies");
  var workSlide = createProjectElement(workTools, "div", {
    id: "work-slide-container"
  });
  var slide = createProjectElement(workSlide, "div", {
    "class": "slide"
  });
  tools.forEach(function (tool) {
    createProjectElement(slide, "img", {
      src: "./img/toolsandlanguage/".concat(_constant_js__WEBPACK_IMPORTED_MODULE_0__.toolsTechImage[tool.toLowerCase().trim()]),
      alt: tool
    });
  });
  var slideClone = slide.cloneNode(true);
  workSlide.appendChild(slideClone);
  if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.checkChildOverflow)(workSlide)) {
    slide.classList.add("animate-slide");
    slideClone.classList.add("animate-slide");
  } else {
    workSlide.removeChild(slideClone);
  }
}
function getWork(_x) {
  return _getWork.apply(this, arguments);
}
function _getWork() {
  _getWork = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(id) {
    var data, video, figmaEmbed, link, homepageUrl, url;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          worksContainer.innerText = "";
          _context2.prev = 1;
          _context2.next = 4;
          return (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.fetchJson)("/project/getproject/".concat(id));
        case 4:
          data = _context2.sent;
          if (data.hasvideo) {
            video = createProjectElement(worksContainer, "video", {
              poster: "portfolioimage/".concat(data.preview, ".jpg"),
              src: "portfoliovideo/".concat(data.preview, ".mp4"),
              loop: true
            });
            video.addEventListener("loadedmetadata", function () {
              video.play();
            });
          } else {
            createProjectElement(worksContainer, "img", {
              src: "portfolioimage/".concat(data.preview, ".jpg"),
              alt: data.name
            });
          }
          createProjectElement(worksContainer, "h3", {}, data.name);
          if (data.stars) {
            createProjectElement(worksContainer, "aside", {}, data.stars);
          }
          createProjectElement(worksContainer, "p", {}, data.description);
          createToolsAndTechnologiesSection(worksContainer, data.tools);
          if (data.figma) {
            figmaEmbed = createProjectElement(worksContainer, "div", {
              "class": "figma-embed"
            });
            createProjectElement(figmaEmbed, "iframe", {
              src: "https://www.figma.com/embed?embed_host=share&url=".concat(data.figma),
              allowfullscreen: true,
              width: "800",
              height: "450"
            });
          }
          if (data.url || data.homepage) {
            link = createProjectElement(worksContainer, "div", {
              "class": "link"
            });
            if (data.homepage) {
              homepageUrl = createProjectElement(link, "a", {
                href: data.homepage,
                target: "_blank"
              });
              createProjectElement(homepageUrl, "img", {
                src: "./img/live.png"
              });
            }
            if (data.url) {
              url = createProjectElement(link, "a", {
                href: data.url,
                target: "_blank",
                rel: "noopener"
              });
              createProjectElement(url, "img", {
                src: "./img/github.png"
              });
            }
          }
          _context2.next = 17;
          break;
        case 14:
          _context2.prev = 14;
          _context2.t0 = _context2["catch"](1);
          console.error("There was a problem with the fetch operation:", _context2.t0);
        case 17:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 14]]);
  }));
  return _getWork.apply(this, arguments);
}
function InitWork() {
  workShowMore.addEventListener("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var data, project;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          workShowMore.dataset.key = Number(workShowMore.dataset.key) + 1;
          _context.next = 3;
          return (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.fetchJson)("/project/getprojects/".concat(workShowMore.dataset.key));
        case 3:
          data = _context.sent;
          project = data.project;
          project.forEach(function (data) {
            var span = createProjectElement(works, "span", {
              "data-key": data.key
            });
            if (data.hasvideo) {
              createProjectElement(span, "video", {
                src: "portfoliovideo/".concat(data.preview, ".mp4"),
                poster: "portfolioimage/".concat(data.preview, ".jpg"),
                muted: "true"
              });
            } else {
              createProjectElement(span, "img", {
                src: "portfolioimage/".concat(data.preview, ".jpg"),
                alt: data.name
              });
            }
            createProjectElement(span, "div", {
              "class": "workname"
            }, data.name);
          });
          if (!data.hasMore) {
            workShowMore.style.display = "none";
          }
        case 7:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })));
  works.addEventListener("click", function (e) {
    if (["VIDEO", "IMG"].includes(e.target.nodeName)) {
      getWork(e.target.closest("span").dataset.key);
      bgcover.style.display = "block";
      workpopup.style.display = "block";
    }
  });
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./public/js/main.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./public/js/utils.js");
/* harmony import */ var _canvas_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./canvas.js */ "./public/js/canvas.js");
/* harmony import */ var _work_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./work.js */ "./public/js/work.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }



var NavBar = document.querySelector(".headerNav");
var alert = document.getElementById("alert");
var menu = document.getElementById("menu");
var bgcover = document.getElementById("bgcover");
var workpopup = document.getElementById("workpopup");
var mailChirp = document.getElementById("mailchirp");
var blogShowMore = document.querySelector("#blog  .show-more");
var blogs = document.querySelector("#blog .blogs");
requestAnimationFrame(_canvas_js__WEBPACK_IMPORTED_MODULE_1__.AnimateSlide);
var specialization = document.querySelector(".specialization");
var professions = ["Software Engineer", "Frontend Developer", "Backend Developer", "Full Stack Developer", "SysAdmin and DevOps Engineer"];
var menuOpen = false;
var currentTextIndex = 0;
var currentText = professions[currentTextIndex];
var isErasing = false;
var typingDelay = 100;
var eraseDelay = 50;
var delay = isErasing ? eraseDelay : typingDelay;
setInterval(function () {
  if (isErasing) {
    currentText = currentText.substring(0, currentText.length - 1);
  } else {
    currentText = professions[currentTextIndex].substring(0, currentText.length + 1);
  }
  specialization.textContent = currentText;
  if (currentText === professions[currentTextIndex] && !isErasing) {
    isErasing = true;
    typingDelay = 1000;
  } else if (currentText === "" && isErasing) {
    isErasing = false;
    typingDelay = 100;
    currentTextIndex = (currentTextIndex + 1) % professions.length;
  }
}, delay);
menu.addEventListener("click", function (e) {
  if (menuOpen) {
    NavBar.attributeStyleMap.set("left", CSS.percent(-100));
    menu.src = "./img/menu.svg";
  } else {
    NavBar.attributeStyleMap.set("left", CSS.percent(0));
    menu.src = "./img/menucnc.svg";
  }
  menuOpen = !menuOpen;
});
mailChirp.addEventListener("submit", /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
    var form, _iterator, _step, child, resp, text;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          e.preventDefault();
          form = new FormData(e.target);
          _iterator = _createForOfIteratorHelper(e.target.children);
          _context.prev = 3;
          _iterator.s();
        case 5:
          if ((_step = _iterator.n()).done) {
            _context.next = 14;
            break;
          }
          child = _step.value;
          if (!(child.value === "" && child.id !== "password" && child.name !== "_csrf")) {
            _context.next = 11;
            break;
          }
          console.log(child);
          (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.showAlert)("All fields must be filled out");
          return _context.abrupt("return");
        case 11:
          if (child.type != "submit" && child.id !== "password" && child.name !== "_csrf") {
            child.value = "";
          }
        case 12:
          _context.next = 5;
          break;
        case 14:
          _context.next = 19;
          break;
        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](3);
          _iterator.e(_context.t0);
        case 19:
          _context.prev = 19;
          _iterator.f();
          return _context.finish(19);
        case 22:
          _context.next = 24;
          return fetch("/chirpmail", {
            method: "POST",
            body: form
          });
        case 24:
          resp = _context.sent;
          _context.next = 27;
          return resp.text();
        case 27:
          text = _context.sent;
        case 28:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[3, 16, 19, 22]]);
  }));
  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());
bgcover.addEventListener("click", function () {
  bgcover.style.display = "none";
  workpopup.style.display = "none";
});
alert.addEventListener("transitionend", function () {
  setTimeout(function () {
    alert.attributeStyleMap.set("right", CSS.percent(-100));
  }, 2000);
});
blogShowMore.addEventListener("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
  var data;
  return _regeneratorRuntime().wrap(function _callee2$(_context2) {
    while (1) switch (_context2.prev = _context2.next) {
      case 0:
        blogShowMore.dataset.key = Number(blogShowMore.dataset.key) + 1;
        console.log(blogShowMore.dataset.key);
        _context2.next = 4;
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.fetchJson)("/getblog/".concat(blogShowMore.dataset.key));
      case 4:
        data = _context2.sent;
        data.posts.forEach(function (post) {
          var blog = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"])(blogs, 'div', {
            "class": 'blog'
          });
          var a = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"])(blog, 'a', {
            href: post.url,
            target: "_blank",
            rel: "noopener"
          });
          var img = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"])(a, 'img', {
            src: post.cover_image,
            alt: post.title
          });
          var title = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"])(blog, 'div', {
            "class": 'title'
          }, post.title);
          var summary = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"])(blog, 'div', {
            "class": 'summary'
          }, post.description);
          var icon = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"])(blog, 'a', {
            href: post.url,
            target: "_blank",
            rel: "noopener",
            "class": 'blogIcon'
          });
          (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"])(icon, 'img', {
            src: "img/blog/devto.svg",
            alt: "Devnode Logo",
            "class": "icon"
          });
        });
        if (!data.hasMore) {
          blogShowMore.style.display = "none";
        }
      case 7:
      case "end":
        return _context2.stop();
    }
  }, _callee2);
})));
(0,_work_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
console.log("            :*#*:                \n           :%@@@@@#.             \n          *@@@@@@@@@*.           \n        *@@@@@@@@@@@@@*          \n      =@@@@@@@=.+@@@@@@@=        \n    =@@@@@@@*.    *@@@@@@@:      \n  :@@@@@@@#.       .#@@@@@@@=    \n  %@@@@@%:           .#@@@@@@    \n :@@@@@@@#.       .#@@@@@@@:    \n    =@@@@@@@*     *@@@@@@@=      \n      +@@@@@@@  +@@@@@@@+        \n        *@@@@:=@@@@@@@*          \n         .#@=@@@@@@@#.           \n           :%@@@@@%:             \n              :*%*:                \n                .-+=:.    \n                   .%#@+.");
/******/ })()
;
//# sourceMappingURL=main.bundle.js.map