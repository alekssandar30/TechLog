webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Posts.js":
/*!*****************************!*\
  !*** ./components/Posts.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\sale\\Desktop\\\u2800\\Dev\\WEB\\NextJS\\TechLog\\frontend\\components\\Posts.js",
    _this = undefined;



var Posts = function Posts(_ref) {
  var posts = _ref.posts;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "flex flex-col md:pl-14",
    children: posts && posts.map(function (post) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "border-b-2 border-gray-200 pb-6 pt-6",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "text-gray-500 text-sm pb-4 block md:text-2xl",
          children: post === null || post === void 0 ? void 0 : post.categories[0]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
          href: "/post/".concat(post.slug.current),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "text-gray-500 hover:text-gray-900 transition-colors duration-500",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              className: "text-2xl font-bold tracking-tighter pb-4 md:text-4xl",
              children: post.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "text-gray-500 text-sm",
          children: ["By ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "text-blue-500",
            children: post.authorName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 18
          }, _this), " on", " ", new Date(post.publishedAt).toDateString()]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 13
        }, _this)]
      }, post.slug.current, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 11
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, _this);
};

_c = Posts;
/* harmony default export */ __webpack_exports__["default"] = (Posts);

var _c;

$RefreshReg$(_c, "Posts");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0cy5qcyJdLCJuYW1lcyI6WyJQb3N0cyIsInBvc3RzIiwibWFwIiwicG9zdCIsImNhdGVnb3JpZXMiLCJzbHVnIiwiY3VycmVudCIsInRpdGxlIiwiYXV0aG9yTmFtZSIsIkRhdGUiLCJwdWJsaXNoZWRBdCIsInRvRGF0ZVN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUFlO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZO0FBQzNCLHNCQUNFO0FBQUssYUFBUyxFQUFDLHdCQUFmO0FBQUEsY0FDR0EsS0FBSyxJQUNKQSxLQUFLLENBQUNDLEdBQU4sQ0FBVSxVQUFDQyxJQUFEO0FBQUEsMEJBQ1I7QUFFRSxpQkFBUyxFQUFDLHNDQUZaO0FBQUEsZ0NBSUU7QUFBTSxtQkFBUyxFQUFDLDhDQUFoQjtBQUFBLG9CQUNHQSxJQURILGFBQ0dBLElBREgsdUJBQ0dBLElBQUksQ0FBRUMsVUFBTixDQUFpQixDQUFqQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkYsZUFPRSxxRUFBQyxnREFBRDtBQUFNLGNBQUksa0JBQVdELElBQUksQ0FBQ0UsSUFBTCxDQUFVQyxPQUFyQixDQUFWO0FBQUEsaUNBQ0U7QUFBRyxxQkFBUyxFQUFDLGtFQUFiO0FBQUEsbUNBQ0U7QUFBSSx1QkFBUyxFQUFDLHNEQUFkO0FBQUEsd0JBQ0dILElBQUksQ0FBQ0k7QUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEYsZUFjRTtBQUFNLG1CQUFTLEVBQUMsdUJBQWhCO0FBQUEseUNBQ0s7QUFBTSxxQkFBUyxFQUFDLGVBQWhCO0FBQUEsc0JBQWlDSixJQUFJLENBQUNLO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREwsU0FDaUUsR0FEakUsRUFFRyxJQUFJQyxJQUFKLENBQVNOLElBQUksQ0FBQ08sV0FBZCxFQUEyQkMsWUFBM0IsRUFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBZEY7QUFBQSxTQUNPUixJQUFJLENBQUNFLElBQUwsQ0FBVUMsT0FEakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURRO0FBQUEsS0FBVjtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTBCRCxDQTNCRDs7S0FBTU4sSztBQTZCU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDlkYzIwYjZjOWUyZGQ5ZjFjODQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmNvbnN0IFBvc3RzID0gKHsgcG9zdHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6cGwtMTRcIj5cclxuICAgICAge3Bvc3RzICYmXHJcbiAgICAgICAgcG9zdHMubWFwKChwb3N0KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGtleT17cG9zdC5zbHVnLmN1cnJlbnR9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci1iLTIgYm9yZGVyLWdyYXktMjAwIHBiLTYgcHQtNlwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDAgdGV4dC1zbSBwYi00IGJsb2NrIG1kOnRleHQtMnhsXCI+XHJcbiAgICAgICAgICAgICAge3Bvc3Q/LmNhdGVnb3JpZXNbMF19XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wb3N0LyR7cG9zdC5zbHVnLmN1cnJlbnR9YH0+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCBob3Zlcjp0ZXh0LWdyYXktOTAwIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0cmFja2luZy10aWdodGVyIHBiLTQgbWQ6dGV4dC00eGxcIj5cclxuICAgICAgICAgICAgICAgICAge3Bvc3QudGl0bGV9XHJcbiAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIHRleHQtc21cIj5cclxuICAgICAgICAgICAgICBCeSA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNTAwXCI+e3Bvc3QuYXV0aG9yTmFtZX08L3NwYW4+IG9ue1wiIFwifVxyXG4gICAgICAgICAgICAgIHtuZXcgRGF0ZShwb3N0LnB1Ymxpc2hlZEF0KS50b0RhdGVTdHJpbmcoKX1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdHM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=