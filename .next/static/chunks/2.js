(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[2],{

/***/ "./components/Filter/Filters.js":
/*!**************************************!*\
  !*** ./components/Filter/Filters.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Filters_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Filters.scss */ "./components/Filter/Filters.scss");
/* harmony import */ var _Filters_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Filters_scss__WEBPACK_IMPORTED_MODULE_2__);


var _this = undefined,
    _jsxFileName = "F:\\Publicis\\v1\\frontend\\components\\Filter\\Filters.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

 //filters data model

var FILTERS = [{
  id: 'launch_year',
  name: 'Launch Year',
  options: [{
    title: '2006',
    value: '2006'
  }, {
    title: '2007',
    value: '2007'
  }, {
    title: '2008',
    value: '2008'
  }, {
    title: '2009',
    value: '2009'
  }, {
    title: '2010',
    value: '2010'
  }, {
    title: '2011',
    value: '2011'
  }, {
    title: '2012',
    value: '2012'
  }, {
    title: '2013',
    value: '2013'
  }, {
    title: '2014',
    value: '2014'
  }, {
    title: '2015',
    value: '2015'
  }, {
    title: '2016',
    value: '2016'
  }, {
    title: '2017',
    value: '2017'
  }, {
    title: '2018',
    value: '2018'
  }, {
    title: '2019',
    value: '2019'
  }, {
    title: '2020',
    value: '2020'
  }]
}, {
  id: 'launch_success',
  name: 'Successful Launch',
  options: [{
    title: 'True',
    value: 'true'
  }, {
    title: 'False',
    value: 'false'
  }]
}, {
  id: 'land_success',
  name: 'Successful Landing',
  options: [{
    title: 'True',
    value: 'true'
  }, {
    title: 'False',
    value: 'false'
  }]
}]; // no-op  function

var noop = function noop() {}; // view for filters


var Filters = function Filters(props) {
  // use the received filters to show selected filters
  var selectedFilters = props.filters;
  return __jsx("div", {
    className: "filters_container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 9
    }
  }, __jsx("h2", {
    style: {
      textAlign: "center"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }, "Filters"), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }
  }), FILTERS.map(function (filter, index) {
    return __jsx("div", {
      className: "filters_container__filter",
      key: "".concat(filter.name, "__").concat(index),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "filters_container__filter__title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 29
      }
    }, filter.name), __jsx("div", {
      className: "filters_container__filter__list",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 29
      }
    }, filter.options.map(function (option, index) {
      var _selectedValue = selectedFilters[filter.id] ? selectedFilters[filter.id] : null;

      var _className = _selectedValue !== option.value ? 'filters_container__filter__list__item' : 'filters_container__filter__list__item filters_container__filter__list__item--selected';

      return __jsx("button", {
        key: "".concat(filter.name, "__").concat(index),
        className: _className,
        onClick: function onClick() {
          _selectedValue !== option.value ? props.onClick(_objectSpread(_objectSpread({}, props.filters), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, filter.id, option.value))) : noop();
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 45
        }
      }, option.title);
    })));
  }));
};

_c = Filters;
/* harmony default export */ __webpack_exports__["default"] = (Filters);

var _c;

$RefreshReg$(_c, "Filters");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaWx0ZXIvRmlsdGVycy5qcyJdLCJuYW1lcyI6WyJGSUxURVJTIiwiaWQiLCJuYW1lIiwib3B0aW9ucyIsInRpdGxlIiwidmFsdWUiLCJub29wIiwiRmlsdGVycyIsInByb3BzIiwic2VsZWN0ZWRGaWx0ZXJzIiwiZmlsdGVycyIsInRleHRBbGlnbiIsIm1hcCIsImZpbHRlciIsImluZGV4Iiwib3B0aW9uIiwiX3NlbGVjdGVkVmFsdWUiLCJfY2xhc3NOYW1lIiwib25DbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUVBOztBQUNBLElBQU1BLE9BQU8sR0FBRyxDQUNaO0FBQ0lDLElBQUUsRUFBRSxhQURSO0FBRUlDLE1BQUksRUFBRSxhQUZWO0FBR0lDLFNBQU8sRUFBRSxDQUNMO0FBQ0lDLFNBQUssRUFBRSxNQURYO0FBRUlDLFNBQUssRUFBRTtBQUZYLEdBREssRUFLTDtBQUNJRCxTQUFLLEVBQUUsTUFEWDtBQUVJQyxTQUFLLEVBQUU7QUFGWCxHQUxLLEVBU0w7QUFDSUQsU0FBSyxFQUFFLE1BRFg7QUFFSUMsU0FBSyxFQUFFO0FBRlgsR0FUSyxFQWFMO0FBQ0lELFNBQUssRUFBRSxNQURYO0FBRUlDLFNBQUssRUFBRTtBQUZYLEdBYkssRUFpQkw7QUFDSUQsU0FBSyxFQUFFLE1BRFg7QUFFSUMsU0FBSyxFQUFFO0FBRlgsR0FqQkssRUFxQkw7QUFDSUQsU0FBSyxFQUFFLE1BRFg7QUFFSUMsU0FBSyxFQUFFO0FBRlgsR0FyQkssRUF5Qkw7QUFDSUQsU0FBSyxFQUFFLE1BRFg7QUFFSUMsU0FBSyxFQUFFO0FBRlgsR0F6QkssRUE2Qkw7QUFDSUQsU0FBSyxFQUFFLE1BRFg7QUFFSUMsU0FBSyxFQUFFO0FBRlgsR0E3QkssRUFpQ0w7QUFDSUQsU0FBSyxFQUFFLE1BRFg7QUFFSUMsU0FBSyxFQUFFO0FBRlgsR0FqQ0ssRUFxQ0w7QUFDSUQsU0FBSyxFQUFFLE1B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cUNHLE1BQU0sQ0FBQ1osRUFBNUMsRUFBa0RjLE1BQU0sQ0FBQ1YsS0FBekQsR0FESixHQUN3RUMsSUFBSSxFQUQ1RTtBQUVDLFNBUGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQVVLUyxNQUFNLENBQUNYLEtBVlosQ0FESjtBQWNILEtBbEJELENBRlIsQ0FGSixDQURKO0FBNEJILEdBN0JELENBSlIsQ0FESjtBQXNDSCxDQTNDRDs7S0FBTUcsTztBQTZDU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL2NodW5rcy8yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL0ZpbHRlcnMuc2NzcydcclxuXHJcbi8vZmlsdGVycyBkYXRhIG1vZGVsXHJcbmNvbnN0IEZJTFRFUlMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICdsYXVuY2hfeWVhcicsXHJcbiAgICAgICAgbmFtZTogJ0xhdW5jaCBZZWFyJyxcclxuICAgICAgICBvcHRpb25zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnMjAwNicsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogJzIwMDYnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnMjAwNycsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogJzIwMDcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnMjAwOCcsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogJzIwMDgnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnMjAwOScsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogJzIwMDknXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnMjAxMCcsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogJzIwMTAnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnMjAxMScsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogJzIwMTEnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnMjAxMicsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogJzIwMTInXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnMjAxMycsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogJzIwMTMnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnMjAxNCcsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogJzIwMTQnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnMjAxNScsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogJzIwMTUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnMjAxNicsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogJzIwMTYnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnMjAxNycsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogJzIwMTcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnMjAxOCcsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogJzIwMTgnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnMjAxOScsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogJzIwMTknXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnMjAyMCcsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogJzIwMjAnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAnbGF1bmNoX3N1Y2Nlc3MnLFxyXG4gICAgICAgIG5hbWU6ICdTdWNjZXNzZnVsIExhdW5jaCcsXHJcbiAgICAgICAgb3B0aW9uczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1RydWUnLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6ICd0cnVlJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0ZhbHNlJyxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAnZmFsc2UnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAnbGFuZF9zdWNjZXNzJyxcclxuICAgICAgICBuYW1lOiAnU3VjY2Vzc2Z1bCBMYW5kaW5nJyxcclxuICAgICAgICBvcHRpb25zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnVHJ1ZScsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ3RydWUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnRmFsc2UnLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6ICdmYWxzZSdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH1cclxuXTtcclxuXHJcbi8vIG5vLW9wICBmdW5jdGlvblxyXG5jb25zdCBub29wID0gZnVuY3Rpb24oKSB7fTtcclxuXHJcbi8vIHZpZXcgZm9yIGZpbHRlcnNcclxuY29uc3QgRmlsdGVycyA9ICggcHJvcHMgKSA9PiB7XHJcblxyXG4gICAgLy8gdXNlIHRoZSByZWNlaXZlZCBmaWx0ZXJzIHRvIHNob3cgc2VsZWN0ZWQgZmlsdGVyc1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRGaWx0ZXJzID0gcHJvcHMuZmlsdGVycztcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpbHRlcnNfY29udGFpbmVyJz5cclxuICAgICAgICAgICAgPGgyIHN0eWxlPXt7dGV4dEFsaWduOlwiY2VudGVyXCJ9fT5GaWx0ZXJzPC9oMj5cclxuICAgICAgICAgICAgPGhyLz5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgRklMVEVSUy5tYXAoICggZmlsdGVyLCBpbmRleCApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaWx0ZXJzX2NvbnRhaW5lcl9fZmlsdGVyJyBrZXk9eyBgJHtmaWx0ZXIubmFtZX1fXyR7aW5kZXh9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmlsdGVyc19jb250YWluZXJfX2ZpbHRlcl9fdGl0bGUnPntmaWx0ZXIubmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaWx0ZXJzX2NvbnRhaW5lcl9fZmlsdGVyX19saXN0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlci5vcHRpb25zLm1hcCggKCBvcHRpb24sIGluZGV4ICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgX3NlbGVjdGVkVmFsdWUgPSBzZWxlY3RlZEZpbHRlcnNbIGZpbHRlci5pZCBdID8gc2VsZWN0ZWRGaWx0ZXJzWyBmaWx0ZXIuaWQgXTpudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IF9jbGFzc05hbWUgPSBfc2VsZWN0ZWRWYWx1ZSAhPT0gb3B0aW9uLnZhbHVlID8gJ2ZpbHRlcnNfY29udGFpbmVyX19maWx0ZXJfX2xpc3RfX2l0ZW0nOiAnZmlsdGVyc19jb250YWluZXJfX2ZpbHRlcl9fbGlzdF9faXRlbSBmaWx0ZXJzX2NvbnRhaW5lcl9fZmlsdGVyX19saXN0X19pdGVtLS1zZWxlY3RlZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YCR7ZmlsdGVyLm5hbWV9X18ke2luZGV4fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17X2NsYXNzTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3NlbGVjdGVkVmFsdWUgIT09IG9wdGlvbi52YWx1ZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLm9uQ2xpY2soIHsgLi4ucHJvcHMuZmlsdGVycywgWyBmaWx0ZXIuaWQgXTogb3B0aW9uLnZhbHVlIH0gKTogbm9vcCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3B0aW9uLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyczsiXSwic291cmNlUm9vdCI6IiJ9