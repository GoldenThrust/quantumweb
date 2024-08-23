/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./public/admin/js/project.js":
/*!************************************!*\
  !*** ./public/admin/js/project.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initProject)
/* harmony export */ });
/* harmony import */ var _js_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../js/utils.js */ "./public/js/utils.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
// Import utility functions


// DOM element selectors
var projectsContainer = document.getElementById("projects");
var editProject = document.querySelectorAll(".edit-project");
var deleteProject = document.querySelectorAll(".delete-project");
var refreshProject = document.querySelectorAll(".refresh-project");
var projectToolsInput = document.querySelectorAll("form input[list=tools]");
var forms = document.querySelectorAll(".project-edit");
var projectCreateBG = document.getElementById("project-create-bg");
var footer = document.querySelector("footer");
var projectCreate = document.querySelector(".project-create");
var alert = document.getElementById("alert");
var dialog = document.querySelector("dialog");
var deleteProjectButton = document.getElementById("delete-project");

// Function to remove tools
function removeTools(e, elem) {
  if (e.target.nodeName == "SPAN") {
    var key = elem.dataset.key;
    e.target.remove();
  }
}

// Function to add tools
function addTools(e) {
  if (e.key === " " || e.key === "Shift") {
    var value = e.target.value;
    if (value && value !== " ") {
      var project = e.target.closest(".project-edit") ? e.target.closest(".project-edit") : e.target.closest(".project-create");
      var projectLists = project.querySelector("div>div");
      var projectListsLen = projectLists.querySelectorAll("span").length;
      var span = (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"])(projectLists, "span", {
        "data-key": projectListsLen
      }, value);
      span.addEventListener("click", function (e) {
        return removeTools(e, e.target);
      });
      e.target.value = "";
    } else {
      e.target.value = "";
    }
  }
}

// Function to update the keys of projects after rearranging
function updateKeys() {
  return _updateKeys.apply(this, arguments);
}
function _updateKeys() {
  _updateKeys = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
    var projectIDKey, projects, resp, err;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          projectIDKey = {};
          projects = projectsContainer.querySelectorAll(".project");
          projects.forEach(function (project, index) {
            if (Number(project.dataset.key) !== index) {
              project.dataset.key = index;
              projectIDKey[project.id] = index;
            }
          });
          _context5.next = 5;
          return fetch("/project/changekey", {
            method: "PUT",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              id: projectIDKey
            })
          });
        case 5:
          resp = _context5.sent;
          if (resp.ok) {
            _context5.next = 12;
            break;
          }
          _context5.next = 9;
          return resp.json();
        case 9:
          err = _context5.sent;
          (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_0__.showAlert)(err.error);
          return _context5.abrupt("return");
        case 12:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return _updateKeys.apply(this, arguments);
}
function initProject() {
  // Show project creation background on footer click
  footer.addEventListener("click", function () {
    projectCreateBG.style.display = "flex";
  });

  // Hide project creation background on click outside the creation form
  projectCreateBG.addEventListener("click", function (e) {
    if (e.target == projectCreateBG) {
      e.target.style.display = "none";
    }
  });
  refreshProject.forEach(function (elem) {
    elem.addEventListener("click", /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
        var projectKey, id, response, err;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              projectKey = e.target.closest(".project").dataset.key;
              id = e.target.closest(".project").id;
              _context.next = 4;
              return fetch("/project/refresh/".concat(id));
            case 4:
              response = _context.sent;
              if (response.ok) {
                _context.next = 11;
                break;
              }
              _context.next = 8;
              return response.json();
            case 8:
              err = _context.sent;
              (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_0__.showAlert)(err.error);
              return _context.abrupt("return");
            case 11:
              (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_0__.showAlert)("Project ".concat(projectKey, " refreshed"), false);
            case 12:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  });

  // Form submission handling
  forms.forEach(function (elem) {
    var div = elem.querySelector("div div");
    elem.addEventListener("submit", /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(e) {
        var id, span, project, formData, _iterator, _step, _step$value, key, value, _err, response, err;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              id = elem.closest(".project").id;
              span = div.querySelectorAll("span");
              project = {};
              e.preventDefault();
              formData = new FormData(elem);
              _iterator = _createForOfIteratorHelper(formData);
              _context2.prev = 6;
              _iterator.s();
            case 8:
              if ((_step = _iterator.n()).done) {
                _context2.next = 25;
                break;
              }
              _step$value = _slicedToArray(_step.value, 2), key = _step$value[0], value = _step$value[1];
              if (!(!value && key !== "figma-link")) {
                _context2.next = 16;
                break;
              }
              _context2.next = 13;
              return response.json();
            case 13:
              _err = _context2.sent;
              (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_0__.showAlert)(_err.error);
              return _context2.abrupt("return");
            case 16:
              if (!(key === "git-link" && !(0,_js_utils_js__WEBPACK_IMPORTED_MODULE_0__.isGitHubLink)(value))) {
                _context2.next = 19;
                break;
              }
              (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_0__.showAlert)("Please enter a valid GitHub link.");
              return _context2.abrupt("return");
            case 19:
              if (!(value && key === "figma-link" && !(0,_js_utils_js__WEBPACK_IMPORTED_MODULE_0__.isFigmaLink)(value))) {
                _context2.next = 22;
                break;
              }
              (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_0__.showAlert)("Please enter a valid Figma link.");
              return _context2.abrupt("return");
            case 22:
              project[key] = value;
            case 23:
              _context2.next = 8;
              break;
            case 25:
              _context2.next = 30;
              break;
            case 27:
              _context2.prev = 27;
              _context2.t0 = _context2["catch"](6);
              _iterator.e(_context2.t0);
            case 30:
              _context2.prev = 30;
              _iterator.f();
              return _context2.finish(30);
            case 33:
              span.forEach(function (el) {
                if (project["tools"]) project["tools"].push(el.textContent);else project["tools"] = [el.textContent];
              });
              _context2.next = 36;
              return fetch("/project/update", {
                method: "PUT",
                body: JSON.stringify({
                  id: id,
                  project: project
                }),
                headers: {
                  "Content-Type": "application/json"
                }
              });
            case 36:
              response = _context2.sent;
              if (response.ok) {
                _context2.next = 43;
                break;
              }
              _context2.next = 40;
              return response.json();
            case 40:
              err = _context2.sent;
              (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_0__.showAlert)(err.error);
              return _context2.abrupt("return");
            case 43:
              window.location.reload();
            case 44:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[6, 27, 30, 33]]);
      }));
      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());
    div.addEventListener("click", function (e) {
      return removeTools(e, div);
    }, true);
  });

  // Add tools on keydown event
  projectToolsInput.forEach(function (elem) {
    elem.addEventListener("keydown", addTools);
  });

  // Delete project on delete button click
  deleteProject.forEach(function (elem) {
    elem.addEventListener("click", function (e) {
      var project = e.target.closest(".project");
      var id = project.id;
      dialog.id = id;
      dialog.showModal();
    });
  });
  deleteProjectButton.addEventListener("click", /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(e) {
      var id, project, response, err;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            id = dialog.id;
            project = document.getElementById(id);
            _context3.next = 4;
            return fetch('/project/delete', {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                id: id
              })
            });
          case 4:
            response = _context3.sent;
            if (response.ok) {
              _context3.next = 13;
              break;
            }
            _context3.next = 8;
            return response.json();
          case 8:
            err = _context3.sent;
            (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_0__.showAlert)(err.error);
            return _context3.abrupt("return");
          case 13:
            project.remove();
            (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_0__.showAlert)("Project ".concat(id, " deleted"), false);
            dialog.id = "";
          case 16:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }());

  // Edit project on edit button click
  editProject.forEach(function (elem) {
    elem.addEventListener("click", function (e) {
      var AllCreate = document.querySelectorAll("#projects .project");
      AllCreate.forEach(function (elem) {
        var view = elem.querySelector(".project-view");
        if (view.style.display === "none") {
          var _create = elem.querySelector(".project-edit");
          view.style.display = "flex";
          _create.style.display = "none";
        }
      });
      var project = e.target.closest(".project");
      var view = project.querySelector(".project-view");
      var create = project.querySelector(".project-edit");
      view.style.display = "none";
      create.style.display = "flex";
    });
  });

  // Drag and drop handling
  projectsContainer.addEventListener("dragstart", function (e) {
    if (e.target.classList.contains("project")) {
      e.target.classList.add("dragging");
    }
  });
  projectsContainer.addEventListener("dragend", function (e) {
    if (e.target.classList.contains("project")) {
      e.target.classList.remove("dragging");
      updateKeys();
      (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_0__.showAlert)("Project key updated successfully", false);
    }
  });
  projectsContainer.addEventListener("dragover", function (e) {
    e.preventDefault();
    var afterElement = (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_0__.getDragAfterElement)(projectsContainer, e.clientY);
    var draggable = document.querySelector(".dragging");
    if (afterElement == null) {
      projectsContainer.appendChild(draggable);
    } else {
      projectsContainer.insertBefore(draggable, afterElement);
    }
  });
  projectCreate.addEventListener("submit", /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(e) {
      var projectsLen, project, formData, _iterator2, _step2, _step2$value, key, value, span, response;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            projectsLen = projectsContainer.querySelectorAll(".project").length;
            project = {
              key: projectsLen
            };
            e.preventDefault();
            formData = new FormData(e.target);
            _iterator2 = _createForOfIteratorHelper(formData);
            _context4.prev = 5;
            _iterator2.s();
          case 7:
            if ((_step2 = _iterator2.n()).done) {
              _context4.next = 18;
              break;
            }
            _step2$value = _slicedToArray(_step2.value, 2), key = _step2$value[0], value = _step2$value[1];
            project[key] = value;
            if (!(key == "git-link" && !(0,_js_utils_js__WEBPACK_IMPORTED_MODULE_0__.isGitHubLink)(value))) {
              _context4.next = 13;
              break;
            }
            (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_0__.showAlert)("Please enter a valid GitHub link.");
            return _context4.abrupt("return");
          case 13:
            if (!(value && key === "figma-link" && !(0,_js_utils_js__WEBPACK_IMPORTED_MODULE_0__.isFigmaLink)(value))) {
              _context4.next = 16;
              break;
            }
            (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_0__.showAlert)("Please enter a valid Figma link.");
            return _context4.abrupt("return");
          case 16:
            _context4.next = 7;
            break;
          case 18:
            _context4.next = 23;
            break;
          case 20:
            _context4.prev = 20;
            _context4.t0 = _context4["catch"](5);
            _iterator2.e(_context4.t0);
          case 23:
            _context4.prev = 23;
            _iterator2.f();
            return _context4.finish(23);
          case 26:
            span = e.target.querySelectorAll("div div span");
            span.forEach(function (el) {
              if (project["tools"]) project["tools"].push(el.textContent);else project["tools"] = [el.textContent];
            });
            if (project["tools"]) {
              _context4.next = 31;
              break;
            }
            (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_0__.showAlert)("Please add at least one tool.");
            return _context4.abrupt("return");
          case 31:
            _context4.next = 33;
            return fetch("/project/create", {
              method: "POST",
              body: JSON.stringify(project),
              headers: {
                "Content-Type": "application/json"
              }
            });
          case 33:
            response = _context4.sent;
            if (response.ok) {
              _context4.next = 37;
              break;
            }
            throw new Error();
          case 37:
            window.location.reload();
          case 38:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[5, 20, 23, 26]]);
    }));
    return function (_x4) {
      return _ref4.apply(this, arguments);
    };
  }());
}

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
  foregroundCtx.arc(window.innerWidth / 2, window.innerHeight / 2, 107 + width, 0, Math.PI * 2);
  foregroundCtx.fill();
  foregroundCtx.globalCompositeOperation = "destination-out";
  foregroundCtx.beginPath();
  foregroundCtx.arc(window.innerWidth / 2, window.innerHeight / 2, 100 - width, 0, Math.PI * 2);
  foregroundCtx.fill();
  foregroundCtx.restore();
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
/*!*********************************!*\
  !*** ./public/admin/js/main.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./public/admin/js/project.js");

var alert = document.getElementById("alert");
var aside = document.querySelector("aside");
var windowWidth = window.innerWidth;
var pathname = window.location.pathname.split("/").pop();
if (windowWidth < 768) aside.attributeStyleMap.set("left", CSS.px(-30));
aside.addEventListener("click", function () {
  if (aside.computedStyleMap().get("left").value < 30) {
    aside.attributeStyleMap.set("left", CSS.px(30));
  }
});
document.body.addEventListener("click", function () {
  if (windowWidth < 768) aside.attributeStyleMap.set("left", CSS.px(-30));
}, true);
window.onresize = function () {
  windowWidth = window.innerWidth;
};
if (pathname === "projects") {
  (0,_project_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
}
alert.addEventListener("transitionend", function () {
  setTimeout(function () {
    alert.attributeStyleMap.set("right", CSS.percent(-100));
  }, 2000);
});
/******/ })()
;
//# sourceMappingURL=admin.bundle.js.map