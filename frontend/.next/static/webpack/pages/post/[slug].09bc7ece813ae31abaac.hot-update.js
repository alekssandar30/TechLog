webpackHotUpdate_N_E("pages/post/[slug]",{

/***/ "./pages/post/[slug].js":
/*!******************************!*\
  !*** ./pages/post/[slug].js ***!
  \******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../client */ "./client.js");
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sanity/image-url */ "./node_modules/@sanity/image-url/lib/browser/image-url.umd.js");
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/error */ "./node_modules/next/error.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sanity/block-content-to-react */ "./node_modules/@sanity/block-content-to-react/lib/BlockContent.js");
/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_7__);



var _jsxFileName = "C:\\Users\\sale\\Desktop\\\u2800\\Dev\\WEB\\NextJS\\TechLog\\frontend\\pages\\post\\[slug].js",
    _this = undefined,
    _s = $RefreshSig$();








var builder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_2___default()(_client__WEBPACK_IMPORTED_MODULE_1__["default"]);

function urlFor(source) {
  return builder.image(source);
}

var SinglePost = function SinglePost(_ref) {
  _s();

  var post = _ref.post;
  // console.log(post);
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  if (router.isFallback) {
    // show loading spinner
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 12
    }, _this);
  }

  if (post == undefined) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
          name: "robots",
          content: "noindex"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_error__WEBPACK_IMPORTED_MODULE_5___default.a, {
        statusCode: 404
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, _this), ";"]
    }, void 0, true);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "bg-gray-300",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "max-w-screen-2xl mx-auto bg-white min-h-screen",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "px-4 max-w-2xl mx-auto",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "text-4xl font-bold text-gray-900 py-4",
          children: post.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex space-x-5 text-sm text-gray-500",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "text-blue-500 block pb-4",
            children: post.author
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: new Date(post.publishedAt).toDateString()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
          width: 800,
          height: 500,
          src: urlFor(post.mainImage).url()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "prose max-w-2xl",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_7___default.a, {
            blocks: post.body,
            projectId: _client__WEBPACK_IMPORTED_MODULE_1__["default"].projectId,
            dataset: _client__WEBPACK_IMPORTED_MODULE_1__["default"].dataset
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 82,
    columnNumber: 5
  }, _this);
};

_s(SinglePost, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

_c = SinglePost;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (SinglePost);

var _c;

$RefreshReg$(_c, "SinglePost");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC9bc2x1Z10uanMiXSwibmFtZXMiOlsiYnVpbGRlciIsImltYWdlVXJsQnVpbGRlciIsImNsaWVudCIsInVybEZvciIsInNvdXJjZSIsImltYWdlIiwiU2luZ2xlUG9zdCIsInBvc3QiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpc0ZhbGxiYWNrIiwidW5kZWZpbmVkIiwidGl0bGUiLCJhdXRob3IiLCJEYXRlIiwicHVibGlzaGVkQXQiLCJ0b0RhdGVTdHJpbmciLCJtYWluSW1hZ2UiLCJ1cmwiLCJib2R5IiwicHJvamVjdElkIiwiZGF0YXNldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHQyx3REFBZSxDQUFDQywrQ0FBRCxDQUEvQjs7QUFFQSxTQUFTQyxNQUFULENBQWdCQyxNQUFoQixFQUF3QjtBQUN0QixTQUFPSixPQUFPLENBQUNLLEtBQVIsQ0FBY0QsTUFBZCxDQUFQO0FBQ0Q7O0FBK0NELElBQU1FLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQWM7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDL0I7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUVBLE1BQUlELE1BQU0sQ0FBQ0UsVUFBWCxFQUF1QjtBQUNyQjtBQUNBLHdCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFDRDs7QUFFRCxNQUFJSCxJQUFJLElBQUlJLFNBQVosRUFBdUI7QUFDckIsd0JBQ0U7QUFBQSw4QkFDRSxxRUFBQyxnREFBRDtBQUFBLCtCQUNFO0FBQU0sY0FBSSxFQUFDLFFBQVg7QUFBb0IsaUJBQU8sRUFBQztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBSUUscUVBQUMsaURBQUQ7QUFBa0Isa0JBQVUsRUFBRTtBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkY7QUFBQSxvQkFERjtBQVFEOztBQUVELHNCQUNFO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyxnREFBZjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyx3QkFBZjtBQUFBLGdDQUNFO0FBQUksbUJBQVMsRUFBQyx1Q0FBZDtBQUFBLG9CQUNHSixJQUFJLENBQUNLO0FBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUlFO0FBQUssbUJBQVMsRUFBQyxzQ0FBZjtBQUFBLGtDQUNFO0FBQU0scUJBQVMsRUFBQywwQkFBaEI7QUFBQSxzQkFBNENMLElBQUksQ0FBQ007QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUEsc0JBQU8sSUFBSUMsSUFBSixDQUFTUCxJQUFJLENBQUNRLFdBQWQsRUFBMkJDLFlBQTNCO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkYsZUFTRSxxRUFBQyxpREFBRDtBQUFPLGVBQUssRUFBRSxHQUFkO0FBQW1CLGdCQUFNLEVBQUUsR0FBM0I7QUFBZ0MsYUFBRyxFQUFFYixNQUFNLENBQUNJLElBQUksQ0FBQ1UsU0FBTixDQUFOLENBQXVCQyxHQUF2QjtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRGLGVBV0U7QUFBSyxtQkFBUyxFQUFDLGlCQUFmO0FBQUEsaUNBQ0UscUVBQUMscUVBQUQ7QUFDRSxrQkFBTSxFQUFFWCxJQUFJLENBQUNZLElBRGY7QUFFRSxxQkFBUyxFQUFFakIsK0NBQU0sQ0FBQ2tCLFNBRnBCO0FBR0UsbUJBQU8sRUFBRWxCLCtDQUFNLENBQUNtQjtBQUhsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBeUJELENBN0NEOztHQUFNZixVO1VBRVdHLHFEOzs7S0FGWEgsVTs7QUErQ1NBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3QvW3NsdWddLjA5YmM3ZWNlODEzYWUzMWFiYWFjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3JvcSBmcm9tIFwiZ3JvcVwiO1xyXG5pbXBvcnQgY2xpZW50IGZyb20gXCIuLi8uLi9jbGllbnRcIjtcclxuaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tIFwiQHNhbml0eS9pbWFnZS11cmxcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgRGVmYXVsdEVycm9yUGFnZSBmcm9tIFwibmV4dC9lcnJvclwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBCbG9ja0NvbnRlbnQgZnJvbSBcIkBzYW5pdHkvYmxvY2stY29udGVudC10by1yZWFjdFwiO1xyXG5cclxuY29uc3QgYnVpbGRlciA9IGltYWdlVXJsQnVpbGRlcihjbGllbnQpO1xyXG5cclxuZnVuY3Rpb24gdXJsRm9yKHNvdXJjZSkge1xyXG4gIHJldHVybiBidWlsZGVyLmltYWdlKHNvdXJjZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHM6IFtdLFxyXG4gICAgZmFsbGJhY2s6IHRydWUsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcclxuICAvLyBoYXBwZW5zIG9uIHRoZSBzZXJ2ZXIgc2lkZVxyXG4gIGNvbnN0IHsgc2x1ZyB9ID0gcGFyYW1zO1xyXG5cclxuICAvKiB0cnkgYW5kIGZldGNoIGRhdGEgYW5kIHRoZW4gc2hvdyBkYXRhLCBpZiB3ZSBkb250IGdldCBkYXRhIC0+IDQwNCAqL1xyXG4gIC8vIGNvbnN0IHF1ZXJ5ID0gZ3JvcWBcclxuICAvLyAgICpbX3R5cGUgPT0gJ3Bvc3QnICYmIHNsdWcuY3VycmVudCA9PSAnJHtzbHVnfSddWzBde1xyXG4gIC8vICAgICAuLi4sXHJcbiAgLy8gICAgIGJvZHlbMF0sXHJcbiAgLy8gICAgIGJvZHlbMV0sXHJcbiAgLy8gICAgIGJvZHlbMl0sXHJcbiAgLy8gICAgIGJvZHlbM10sXHJcbiAgLy8gICAgIGJvZHlbNF0sXHJcbiAgLy8gICAgICdhdXRob3InOiBhdXRob3ItPm5hbWVcclxuICAvLyAgIH1cclxuICAvLyBgO1xyXG5cclxuICBjb25zdCBxdWVyeSA9IGdyb3FgXHJcbiAgICAqW190eXBlID09ICdwb3N0J11cclxuICBgO1xyXG5cclxuICB0cnl7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgY2xpZW50LmZldGNoKHF1ZXJ5KTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJldmFsaWRhdGU6IDYwICogNjAgKiAyNCxcclxuICAgICAgcHJvcHM6IHtcclxuICAgICAgICBwb3N0OiBkYXRhLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9XHJcbiAgY2F0Y2goZXJyKSB7XHJcbiAgICByZXR1cm4gZXJyO1xyXG4gIH1cclxuICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxufVxyXG5cclxuY29uc3QgU2luZ2xlUG9zdCA9ICh7IHBvc3QgfSkgPT4ge1xyXG4gIC8vIGNvbnNvbGUubG9nKHBvc3QpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBpZiAocm91dGVyLmlzRmFsbGJhY2spIHtcclxuICAgIC8vIHNob3cgbG9hZGluZyBzcGlubmVyXHJcbiAgICByZXR1cm4gPGgxPkxvYWRpbmcuLi48L2gxPjtcclxuICB9XHJcblxyXG4gIGlmIChwb3N0ID09IHVuZGVmaW5lZCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJyb2JvdHNcIiBjb250ZW50PVwibm9pbmRleFwiIC8+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxEZWZhdWx0RXJyb3JQYWdlIHN0YXR1c0NvZGU9ezQwNH0gLz47XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktMzAwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctc2NyZWVuLTJ4bCBteC1hdXRvIGJnLXdoaXRlIG1pbi1oLXNjcmVlblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNCBtYXgtdy0yeGwgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCB0ZXh0LWdyYXktOTAwIHB5LTRcIj5cclxuICAgICAgICAgICAge3Bvc3QudGl0bGV9XHJcbiAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtNSB0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTUwMCBibG9jayBwYi00XCI+e3Bvc3QuYXV0aG9yfTwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4+e25ldyBEYXRlKHBvc3QucHVibGlzaGVkQXQpLnRvRGF0ZVN0cmluZygpfTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxJbWFnZSB3aWR0aD17ODAwfSBoZWlnaHQ9ezUwMH0gc3JjPXt1cmxGb3IocG9zdC5tYWluSW1hZ2UpLnVybCgpfSAvPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvc2UgbWF4LXctMnhsXCI+XHJcbiAgICAgICAgICAgIDxCbG9ja0NvbnRlbnRcclxuICAgICAgICAgICAgICBibG9ja3M9e3Bvc3QuYm9keX1cclxuICAgICAgICAgICAgICBwcm9qZWN0SWQ9e2NsaWVudC5wcm9qZWN0SWR9XHJcbiAgICAgICAgICAgICAgZGF0YXNldD17Y2xpZW50LmRhdGFzZXR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlUG9zdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==