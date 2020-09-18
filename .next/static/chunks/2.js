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
  }), __jsx("p", {
    className: "filters_container__action",
    style: {
      cursor: "pointer",
      textAlign: "center"
    },
    onClick: function onClick() {
      props.onClick({});
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }
  }, "Clear Filters"), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }
  }), FILTERS.map(function (filter, index) {
    return __jsx("div", {
      className: "filters_container__filter",
      key: "".concat(filter.name, "__").concat(index),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "filters_container__filter__title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 29
      }
    }, filter.name), __jsx("div", {
      className: "filters_container__filter__list",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
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
          lineNumber: 128,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaWx0ZXIvRmlsdGVycy5qcyJdLCJuYW1lcyI6WyJGSUxURVJTIiwiaWQiLCJuYW1lIiwib3B0aW9ucyIsInRpdGxlIiwidmFsdWUiLCJub29wIiwiRmlsdGVycyIsInByb3BzIiwic2VsZWN0ZWRGaWx0ZXJzIiwiZmlsdGVycyIsInRleHRBbGlnbiIsImN1cnNvciIsIm9uQ2xpY2siLCJtYXAiLCJmaWx0ZXIiLCJpbmRleCIsIm9wdGlvbiIsIl9zZWxlY3RlZFZhbHVlIiwiX2NsYXNzTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUVBOztBQUNBLElBQU1BLE9BQU8sR0FBRyxDQUNaO0FBQ0lDLElBQUUsRUFBRSxhQURSO0FBRUlDLE1BQUksRUFBRSxhQUZWO0FBR0lDLFNBQU8sRUFBRSxDQUNMO0FBQ0lDLFNBQUssRUFBRSxNQURYO0FBRUlDLFNBQUssRUFBRTtBQUZYLEdBREssRUFLTDtBQUNJRCxTQUFLLEVBQUUsTUFEWDtBQUVJQyxTQUFLLEVBQUU7QUFGWCxHQUxLLEVBU0w7QUFDSUQsU0FBSyxFQUFFLE1BRFg7QUFFSUMsU0FBSyxFQUFFO0FBRlgsR0FUSyxFQWFMO0FBQ0lELFNBQUssRUFBRSxNQURYO0FBRUlDLFNBQUssRUFBRTtBQUZYLEdBYkssRUFpQkw7QUFDSUQsU0FBSyxFQUFFLE1BRFg7QUFFSUMsU0FBSyxFQUFFO0FBRlgsR0FqQkssRUFxQkw7QUFDSUQsU0FBSyxFQUFFLE1BRFg7QUFFSUMsU0FBSyxFQUFFO0FBRlgsR0FyQkssRUF5Qkw7QUFDSUQsU0FBSyxFQUFFLE1BRFg7QUFFSUMsU0FBSyxFQUFFO0FBRlgsR0F6QkssRUE2Qkw7QUFDSUQsU0FBSyxFQUFFLE1BRFg7QUFFSUMsU0FBSyxFQUFFO0FBRlgsR0E3QkssRUFpQ0w7QUFDSUQsU0FBSyxFQUFFLE1BRFg7QUFFSUMsU0FBSyxFQUFFO0FBRlgsR0FqQ0ssRUFxQ0w7QUFDSUQsU0FB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QVUsR0FBR0QsY0FBYyxLQUFLRCxNQUFNLENBQUNaLEtBQTFCLEdBQWtDLHVDQUFsQyxHQUEyRSx1RkFBOUY7O0FBQ0EsYUFDSTtBQUNJLFdBQUcsWUFBS1UsTUFBTSxDQUFDYixJQUFaLGVBQXFCYyxLQUFyQixDQURQO0FBRUksaUJBQVMsRUFBRUcsVUFGZjtBQUdJLGVBQU8sRUFDSCxtQkFBTTtBQUNGRCx3QkFBYyxLQUFLRCxNQUFNLENBQUNaLEtBQTFCLEdBQ0lHLEtBQUssQ0FBQ0ssT0FBTixpQ0FBb0JMLEtBQUssQ0FBQ0UsT0FBMUIscUdBQXFDSyxNQUFNLENBQUNkLEVBQTVDLEVBQWtEZ0IsTUFBTSxDQUFDWixLQUF6RCxHQURKLEdBQ3dFQyxJQUFJLEVBRDVFO0FBRUMsU0FQYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBVUtXLE1BQU0sQ0FBQ2IsS0FWWixDQURKO0FBY0gsS0FsQkQsQ0FGUixDQUZKLENBREo7QUE0QkgsR0E3QkQsQ0FOUixDQURKO0FBd0NILENBN0NEOztLQUFNRyxPO0FBK0NTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vRmlsdGVycy5zY3NzJ1xyXG5cclxuLy9maWx0ZXJzIGRhdGEgbW9kZWxcclxuY29uc3QgRklMVEVSUyA9IFtcclxuICAgIHtcclxuICAgICAgICBpZDogJ2xhdW5jaF95ZWFyJyxcclxuICAgICAgICBuYW1lOiAnTGF1bmNoIFllYXInLFxyXG4gICAgICAgIG9wdGlvbnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICcyMDA2JyxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAnMjAwNidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICcyMDA3JyxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAnMjAwNydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICcyMDA4JyxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAnMjAwOCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICcyMDA5JyxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAnMjAwOSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICcyMDEwJyxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAnMjAxMCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICcyMDExJyxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAnMjAxMSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICcyMDEyJyxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAnMjAxMidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICcyMDEzJyxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAnMjAxMydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICcyMDE0JyxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAnMjAxNCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICcyMDE1JyxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAnMjAxNSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICcyMDE2JyxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAnMjAxNidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICcyMDE3JyxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAnMjAxNydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICcyMDE4JyxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAnMjAxOCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICcyMDE5JyxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAnMjAxOSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICcyMDIwJyxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAnMjAyMCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICdsYXVuY2hfc3VjY2VzcycsXHJcbiAgICAgICAgbmFtZTogJ1N1Y2Nlc3NmdWwgTGF1bmNoJyxcclxuICAgICAgICBvcHRpb25zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnVHJ1ZScsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ3RydWUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnRmFsc2UnLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6ICdmYWxzZSdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICdsYW5kX3N1Y2Nlc3MnLFxyXG4gICAgICAgIG5hbWU6ICdTdWNjZXNzZnVsIExhbmRpbmcnLFxyXG4gICAgICAgIG9wdGlvbnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdUcnVlJyxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAndHJ1ZSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdGYWxzZScsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ2ZhbHNlJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG5dO1xyXG5cclxuLy8gbm8tb3AgIGZ1bmN0aW9uXHJcbmNvbnN0IG5vb3AgPSBmdW5jdGlvbigpIHt9O1xyXG5cclxuLy8gdmlldyBmb3IgZmlsdGVyc1xyXG5jb25zdCBGaWx0ZXJzID0gKCBwcm9wcyApID0+IHtcclxuXHJcbiAgICAvLyB1c2UgdGhlIHJlY2VpdmVkIGZpbHRlcnMgdG8gc2hvdyBzZWxlY3RlZCBmaWx0ZXJzXHJcbiAgICBjb25zdCBzZWxlY3RlZEZpbHRlcnMgPSBwcm9wcy5maWx0ZXJzO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmlsdGVyc19jb250YWluZXInPlxyXG4gICAgICAgICAgICA8aDIgc3R5bGU9e3t0ZXh0QWxpZ246XCJjZW50ZXJcIn19PkZpbHRlcnM8L2gyPlxyXG4gICAgICAgICAgICA8aHIvPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J2ZpbHRlcnNfY29udGFpbmVyX19hY3Rpb24nIHN0eWxlPXt7Y3Vyc29yOlwicG9pbnRlclwiLCB0ZXh0QWxpZ246XCJjZW50ZXJcIn19IG9uQ2xpY2s9eyAoKSA9PiB7IHByb3BzLm9uQ2xpY2soIHt9ICkgfSB9PkNsZWFyIEZpbHRlcnM8L3A+XHJcbiAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIEZJTFRFUlMubWFwKCAoIGZpbHRlciwgaW5kZXggKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmlsdGVyc19jb250YWluZXJfX2ZpbHRlcicga2V5PXsgYCR7ZmlsdGVyLm5hbWV9X18ke2luZGV4fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpbHRlcnNfY29udGFpbmVyX19maWx0ZXJfX3RpdGxlJz57ZmlsdGVyLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmlsdGVyc19jb250YWluZXJfX2ZpbHRlcl9fbGlzdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXIub3B0aW9ucy5tYXAoICggb3B0aW9uLCBpbmRleCApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IF9zZWxlY3RlZFZhbHVlID0gc2VsZWN0ZWRGaWx0ZXJzWyBmaWx0ZXIuaWQgXSA/IHNlbGVjdGVkRmlsdGVyc1sgZmlsdGVyLmlkIF06bnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBfY2xhc3NOYW1lID0gX3NlbGVjdGVkVmFsdWUgIT09IG9wdGlvbi52YWx1ZSA/ICdmaWx0ZXJzX2NvbnRhaW5lcl9fZmlsdGVyX19saXN0X19pdGVtJzogJ2ZpbHRlcnNfY29udGFpbmVyX19maWx0ZXJfX2xpc3RfX2l0ZW0gZmlsdGVyc19jb250YWluZXJfX2ZpbHRlcl9fbGlzdF9faXRlbS0tc2VsZWN0ZWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Ake2ZpbHRlci5uYW1lfV9fJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e19jbGFzc05hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9zZWxlY3RlZFZhbHVlICE9PSBvcHRpb24udmFsdWUgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5vbkNsaWNrKCB7IC4uLnByb3BzLmZpbHRlcnMsIFsgZmlsdGVyLmlkIF06IG9wdGlvbi52YWx1ZSB9ICk6IG5vb3AoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbi50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbHRlcnM7Il0sInNvdXJjZVJvb3QiOiIifQ==