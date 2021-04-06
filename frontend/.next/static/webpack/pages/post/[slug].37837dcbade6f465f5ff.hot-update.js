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
      lineNumber: 58,
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
          lineNumber: 65,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_error__WEBPACK_IMPORTED_MODULE_5___default.a, {
        statusCode: 404
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
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
          lineNumber: 76,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex space-x-5 text-sm text-gray-500",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "text-blue-500 block pb-4",
            children: post.author
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: new Date(post.publishedAt).toDateString()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
          width: 800,
          height: 500,
          src: urlFor(post.mainImage).url()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "prose max-w-2xl",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_7___default.a, {
            blocks: post.body,
            imageOptions: {
              w: 320,
              h: 240,
              fit: 'max'
            },
            projectId: _client__WEBPACK_IMPORTED_MODULE_1__["default"].projectId,
            dataset: _client__WEBPACK_IMPORTED_MODULE_1__["default"].dataset
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 73,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC9bc2x1Z10uanMiXSwibmFtZXMiOlsiYnVpbGRlciIsImltYWdlVXJsQnVpbGRlciIsImNsaWVudCIsInVybEZvciIsInNvdXJjZSIsImltYWdlIiwiU2luZ2xlUG9zdCIsInBvc3QiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpc0ZhbGxiYWNrIiwidW5kZWZpbmVkIiwidGl0bGUiLCJhdXRob3IiLCJEYXRlIiwicHVibGlzaGVkQXQiLCJ0b0RhdGVTdHJpbmciLCJtYWluSW1hZ2UiLCJ1cmwiLCJib2R5IiwidyIsImgiLCJmaXQiLCJwcm9qZWN0SWQiLCJkYXRhc2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxPQUFPLEdBQUdDLHdEQUFlLENBQUNDLCtDQUFELENBQS9COztBQUVBLFNBQVNDLE1BQVQsQ0FBZ0JDLE1BQWhCLEVBQXdCO0FBQ3RCLFNBQU9KLE9BQU8sQ0FBQ0ssS0FBUixDQUFjRCxNQUFkLENBQVA7QUFDRDs7QUFzQ0QsSUFBTUUsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBYztBQUFBOztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUMvQjtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRUEsTUFBSUQsTUFBTSxDQUFDRSxVQUFYLEVBQXVCO0FBQ3JCO0FBQ0Esd0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNEOztBQUVELE1BQUlILElBQUksSUFBSUksU0FBWixFQUF1QjtBQUNyQix3QkFDRTtBQUFBLDhCQUNFLHFFQUFDLGdEQUFEO0FBQUEsK0JBQ0U7QUFBTSxjQUFJLEVBQUMsUUFBWDtBQUFvQixpQkFBTyxFQUFDO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFJRSxxRUFBQyxpREFBRDtBQUFrQixrQkFBVSxFQUFFO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRjtBQUFBLG9CQURGO0FBUUQ7O0FBRUQsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLGdEQUFmO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLHdCQUFmO0FBQUEsZ0NBQ0U7QUFBSSxtQkFBUyxFQUFDLHVDQUFkO0FBQUEsb0JBQ0dKLElBQUksQ0FBQ0s7QUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBSUU7QUFBSyxtQkFBUyxFQUFDLHNDQUFmO0FBQUEsa0NBQ0U7QUFBTSxxQkFBUyxFQUFDLDBCQUFoQjtBQUFBLHNCQUE0Q0wsSUFBSSxDQUFDTTtBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBQSxzQkFBTyxJQUFJQyxJQUFKLENBQVNQLElBQUksQ0FBQ1EsV0FBZCxFQUEyQkMsWUFBM0I7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRixlQVNFLHFFQUFDLGlEQUFEO0FBQU8sZUFBSyxFQUFFLEdBQWQ7QUFBbUIsZ0JBQU0sRUFBRSxHQUEzQjtBQUFnQyxhQUFHLEVBQUViLE1BQU0sQ0FBQ0ksSUFBSSxDQUFDVSxTQUFOLENBQU4sQ0FBdUJDLEdBQXZCO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVEYsZUFXRTtBQUFLLG1CQUFTLEVBQUMsaUJBQWY7QUFBQSxpQ0FDRSxxRUFBQyxxRUFBRDtBQUNFLGtCQUFNLEVBQUVYLElBQUksQ0FBQ1ksSUFEZjtBQUVFLHdCQUFZLEVBQUU7QUFBQ0MsZUFBQyxFQUFFLEdBQUo7QUFBU0MsZUFBQyxFQUFFLEdBQVo7QUFBaUJDLGlCQUFHLEVBQUU7QUFBdEIsYUFGaEI7QUFHRSxxQkFBUyxFQUFFcEIsK0NBQU0sQ0FBQ3FCLFNBSHBCO0FBSUUsbUJBQU8sRUFBRXJCLCtDQUFNLENBQUNzQjtBQUpsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMEJELENBOUNEOztHQUFNbEIsVTtVQUVXRyxxRDs7O0tBRlhILFU7O0FBZ0RTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0L1tzbHVnXS4zNzgzN2RjYmFkZTZmNDY1ZjVmZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdyb3EgZnJvbSBcImdyb3FcIjtcclxuaW1wb3J0IGNsaWVudCBmcm9tIFwiLi4vLi4vY2xpZW50XCI7XHJcbmltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSBcIkBzYW5pdHkvaW1hZ2UtdXJsXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IERlZmF1bHRFcnJvclBhZ2UgZnJvbSBcIm5leHQvZXJyb3JcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgQmxvY2tDb250ZW50IGZyb20gXCJAc2FuaXR5L2Jsb2NrLWNvbnRlbnQtdG8tcmVhY3RcIjtcclxuXHJcbmNvbnN0IGJ1aWxkZXIgPSBpbWFnZVVybEJ1aWxkZXIoY2xpZW50KTtcclxuXHJcbmZ1bmN0aW9uIHVybEZvcihzb3VyY2UpIHtcclxuICByZXR1cm4gYnVpbGRlci5pbWFnZShzb3VyY2UpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzOiBbXSxcclxuICAgIGZhbGxiYWNrOiB0cnVlLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XHJcbiAgLy8gaGFwcGVucyBvbiB0aGUgc2VydmVyIHNpZGVcclxuICBjb25zdCB7IHNsdWcgfSA9IHBhcmFtcztcclxuXHJcbiAgLyogdHJ5IGFuZCBmZXRjaCBkYXRhIGFuZCB0aGVuIHNob3cgZGF0YSwgaWYgd2UgZG9udCBnZXQgZGF0YSAtPiA0MDQgKi9cclxuICBjb25zdCBxdWVyeSA9IGdyb3FgXHJcbiAgICAqW190eXBlID09ICdwb3N0JyAmJiBzbHVnLmN1cnJlbnQgPT0gJyR7c2x1Z30nXVswXXtcclxuICAgICAgLi4uLFxyXG4gICAgICAnYXV0aG9yJzogYXV0aG9yLT5uYW1lXHJcbiAgICB9XHJcbiAgYDtcclxuXHJcbiAgdHJ5e1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGNsaWVudC5mZXRjaChxdWVyeSk7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZXZhbGlkYXRlOiA2MCAqIDYwICogMjQsXHJcbiAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgcG9zdDogZGF0YSxcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfVxyXG4gIGNhdGNoKGVycikge1xyXG4gICAgcmV0dXJuIGVycjtcclxuICB9XHJcbiAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbn1cclxuXHJcbmNvbnN0IFNpbmdsZVBvc3QgPSAoeyBwb3N0IH0pID0+IHtcclxuICAvLyBjb25zb2xlLmxvZyhwb3N0KTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgaWYgKHJvdXRlci5pc0ZhbGxiYWNrKSB7XHJcbiAgICAvLyBzaG93IGxvYWRpbmcgc3Bpbm5lclxyXG4gICAgcmV0dXJuIDxoMT5Mb2FkaW5nLi4uPC9oMT47XHJcbiAgfVxyXG5cclxuICBpZiAocG9zdCA9PSB1bmRlZmluZWQpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICA8bWV0YSBuYW1lPVwicm9ib3RzXCIgY29udGVudD1cIm5vaW5kZXhcIiAvPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8RGVmYXVsdEVycm9yUGFnZSBzdGF0dXNDb2RlPXs0MDR9IC8+O1xyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTMwMFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LXNjcmVlbi0yeGwgbXgtYXV0byBiZy13aGl0ZSBtaW4taC1zY3JlZW5cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTQgbWF4LXctMnhsIG14LWF1dG9cIj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC1ncmF5LTkwMCBweS00XCI+XHJcbiAgICAgICAgICAgIHtwb3N0LnRpdGxlfVxyXG4gICAgICAgICAgPC9oMT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTUgdGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS01MDAgYmxvY2sgcGItNFwiPntwb3N0LmF1dGhvcn08L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPntuZXcgRGF0ZShwb3N0LnB1Ymxpc2hlZEF0KS50b0RhdGVTdHJpbmcoKX08L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8SW1hZ2Ugd2lkdGg9ezgwMH0gaGVpZ2h0PXs1MDB9IHNyYz17dXJsRm9yKHBvc3QubWFpbkltYWdlKS51cmwoKX0gLz5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb3NlIG1heC13LTJ4bFwiPlxyXG4gICAgICAgICAgICA8QmxvY2tDb250ZW50XHJcbiAgICAgICAgICAgICAgYmxvY2tzPXtwb3N0LmJvZHl9XHJcbiAgICAgICAgICAgICAgaW1hZ2VPcHRpb25zPXt7dzogMzIwLCBoOiAyNDAsIGZpdDogJ21heCd9fVxyXG4gICAgICAgICAgICAgIHByb2plY3RJZD17Y2xpZW50LnByb2plY3RJZH1cclxuICAgICAgICAgICAgICBkYXRhc2V0PXtjbGllbnQuZGF0YXNldH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaW5nbGVQb3N0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9