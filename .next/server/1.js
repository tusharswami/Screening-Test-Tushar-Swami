exports.ids = [1];
exports.modules = {

/***/ "./components/Filter/Filters.js":
/*!**************************************!*\
  !*** ./components/Filter/Filters.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Filters_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Filters.scss */ "./components/Filter/Filters.scss");
/* harmony import */ var _Filters_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Filters_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "F:\\Publicis\\v1\\frontend\\components\\Filter\\Filters.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 //filters data model

const FILTERS = [{
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

const noop = function () {}; // view for filters


const Filters = props => {
  // use the received filters to show selected filters
  const selectedFilters = props.filters;
  return __jsx("div", {
    className: "filters_container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 9
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }, "Filters"), __jsx("span", {
    className: "filters_container__action",
    style: {
      cursor: "pointer"
    },
    onClick: () => {
      props.onClick({});
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }
  }, "x Clear Filters"), FILTERS.map((filter, index) => {
    return __jsx("div", {
      className: "filters_container__filter",
      key: `${filter.name}__${index}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "filters_container__filter__title",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 29
      }
    }, filter.name), __jsx("div", {
      className: "filters_container__filter__list",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 29
      }
    }, filter.options.map((option, index) => {
      const _selectedValue = selectedFilters[filter.id] ? selectedFilters[filter.id] : null;

      const _className = _selectedValue !== option.value ? 'filters_container__filter__list__item' : 'filters_container__filter__list__item filters_container__filter__list__item--selected';

      return __jsx("button", {
        key: `${filter.name}__${index}`,
        className: _className,
        onClick: () => {
          _selectedValue !== option.value ? props.onClick(_objectSpread(_objectSpread({}, props.filters), {}, {
            [filter.id]: option.value
          })) : noop();
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 45
        }
      }, option.title);
    })));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Filters);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ZpbHRlci9GaWx0ZXJzLmpzIl0sIm5hbWVzIjpbIkZJTFRFUlMiLCJpZCIsIm5hbWUiLCJvcHRpb25zIiwidGl0bGUiLCJ2YWx1ZSIsIm5vb3AiLCJGaWx0ZXJzIiwicHJvcHMiLCJzZWxlY3RlZEZpbHRlcnMiLCJmaWx0ZXJzIiwiY3Vyc29yIiwib25DbGljayIsIm1hcCIsImZpbHRlciIsImluZGV4Iiwib3B0aW9uIiwiX3NlbGVjdGVkVmFsdWUiLCJfY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUVBOztBQUNBLE1BQU1BLE9BQU8sR0FBRyxDQUNaO0FBQ0lDLElBQUUsRUFBRSxhQURSO0FBRUlDLE1BQUksRUFBRSxhQUZWO0FBR0lDLFNBQU8sRUFBRSxDQUNMO0FBQ0lDLFNBQUssRUFBRSxNQURYO0FBRUlDLFNBQUssRUFBRTtBQUZYLEdBREssRUFLTDtBQUNJRCxTQUFLLEVBQUUsTUFEWDtBQUVJQyxTQUFLLEVBQUU7QUFGWCxHQUxLLEVBU0w7QUFDSUQsU0FBSyxFQUFFLE1BRFg7QUFFSUMsU0FBSyxFQUFFO0FBRlgsR0FUSyxFQWFMO0FBQ0lELFNBQUssRUFBRSxNQURYO0FBRUlDLFNBQUssRUFBRTtBQUZYLEdBYkssRUFpQkw7QUFDSUQsU0FBSyxFQUFFLE1BRFg7QUFFSUMsU0FBSyxFQUFFO0FBRlgsR0FqQkssRUFxQkw7QUFDSUQsU0FBSyxFQUFFLE1BRFg7QUFFSUMsU0FBSyxFQUFFO0FBRlgsR0FyQkssRUF5Qkw7QUFDSUQsU0FBSyxFQUFFLE1BRFg7QUFFSUMsU0FBSyxFQUFFO0FBRlgsR0F6QkssRUE2Qkw7QUFDSUQsU0FBSyxFQUFFLE1BRFg7QUFFSUMsU0FBSyxFQUFFO0FBRlgsR0E3QkssRUFpQ0w7QUFDSUQsU0FBSyxFQUFFLE1BRFg7QUFFSUMsU0FBSyxFQUFFO0FBRlgsR0FqQ0ssRUFxQ0w7QUFDSUQsU0FBSyxFQUFFLE1BRFg7QUFFSUMs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Q1gsS0FBMUIsR0FDSUcsS0FBSyxDQUFDSSxPQUFOLGlDQUFvQkosS0FBSyxDQUFDRSxPQUExQjtBQUFtQyxhQUFFSSxNQUFNLENBQUNiLEVBQVQsR0FBZWUsTUFBTSxDQUFDWDtBQUF6RCxhQURKLEdBQ3dFQyxJQUFJLEVBRDVFO0FBRUMsU0FQYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBVUtVLE1BQU0sQ0FBQ1osS0FWWixDQURKO0FBY0gsS0FsQkQsQ0FGUixDQUZKLENBREo7QUE0QkgsR0E3QkQsQ0FKUixDQURKO0FBc0NILENBM0NEOztBQTZDZUcsc0VBQWYsRSIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL0ZpbHRlcnMuc2NzcydcclxuXHJcbi8vZmlsdGVycyBkYXRhIG1vZGVsXHJcbmNvbnN0IEZJTFRFUlMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICdsYXVuY2hfeWVhcicsXHJcbiAgICAgICAgbmFtZTogJ0xhdW5jaCBZZWFyJyxcclxuICAgICAgICBvcHRpb25zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnMjAwNicsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogJzIwMDYnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnMjAwNycsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogJzIwMDcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnMjAwOCcsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogJzIwMDgnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnMjAwOScsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogJzIwMDknXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnMjAxMCcsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogJzIwMTAnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnMjAxMScsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogJzIwMTEnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnMjAxMicsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogJzIwMTInXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnMjAxMycsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogJzIwMTMnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnMjAxNCcsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogJzIwMTQnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnMjAxNScsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogJzIwMTUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnMjAxNicsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogJzIwMTYnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnMjAxNycsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogJzIwMTcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnMjAxOCcsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogJzIwMTgnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnMjAxOScsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogJzIwMTknXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnMjAyMCcsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogJzIwMjAnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAnbGF1bmNoX3N1Y2Nlc3MnLFxyXG4gICAgICAgIG5hbWU6ICdTdWNjZXNzZnVsIExhdW5jaCcsXHJcbiAgICAgICAgb3B0aW9uczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1RydWUnLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6ICd0cnVlJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0ZhbHNlJyxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAnZmFsc2UnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAnbGFuZF9zdWNjZXNzJyxcclxuICAgICAgICBuYW1lOiAnU3VjY2Vzc2Z1bCBMYW5kaW5nJyxcclxuICAgICAgICBvcHRpb25zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnVHJ1ZScsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ3RydWUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnRmFsc2UnLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6ICdmYWxzZSdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH1cclxuXTtcclxuXHJcbi8vIG5vLW9wICBmdW5jdGlvblxyXG5jb25zdCBub29wID0gZnVuY3Rpb24oKSB7fTtcclxuXHJcbi8vIHZpZXcgZm9yIGZpbHRlcnNcclxuY29uc3QgRmlsdGVycyA9ICggcHJvcHMgKSA9PiB7XHJcblxyXG4gICAgLy8gdXNlIHRoZSByZWNlaXZlZCBmaWx0ZXJzIHRvIHNob3cgc2VsZWN0ZWQgZmlsdGVyc1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRGaWx0ZXJzID0gcHJvcHMuZmlsdGVycztcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpbHRlcnNfY29udGFpbmVyJz5cclxuICAgICAgICAgICAgPGgyPkZpbHRlcnM8L2gyPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZpbHRlcnNfY29udGFpbmVyX19hY3Rpb24nIHN0eWxlPXt7Y3Vyc29yOlwicG9pbnRlclwifX0gb25DbGljaz17ICgpID0+IHsgcHJvcHMub25DbGljaygge30gKSB9IH0+eCBDbGVhciBGaWx0ZXJzPC9zcGFuPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBGSUxURVJTLm1hcCggKCBmaWx0ZXIsIGluZGV4ICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpbHRlcnNfY29udGFpbmVyX19maWx0ZXInIGtleT17IGAke2ZpbHRlci5uYW1lfV9fJHtpbmRleH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaWx0ZXJzX2NvbnRhaW5lcl9fZmlsdGVyX190aXRsZSc+e2ZpbHRlci5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpbHRlcnNfY29udGFpbmVyX19maWx0ZXJfX2xpc3QnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyLm9wdGlvbnMubWFwKCAoIG9wdGlvbiwgaW5kZXggKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBfc2VsZWN0ZWRWYWx1ZSA9IHNlbGVjdGVkRmlsdGVyc1sgZmlsdGVyLmlkIF0gPyBzZWxlY3RlZEZpbHRlcnNbIGZpbHRlci5pZCBdOm51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgX2NsYXNzTmFtZSA9IF9zZWxlY3RlZFZhbHVlICE9PSBvcHRpb24udmFsdWUgPyAnZmlsdGVyc19jb250YWluZXJfX2ZpbHRlcl9fbGlzdF9faXRlbSc6ICdmaWx0ZXJzX2NvbnRhaW5lcl9fZmlsdGVyX19saXN0X19pdGVtIGZpbHRlcnNfY29udGFpbmVyX19maWx0ZXJfX2xpc3RfX2l0ZW0tLXNlbGVjdGVkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgJHtmaWx0ZXIubmFtZX1fXyR7aW5kZXh9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtfY2xhc3NOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfc2VsZWN0ZWRWYWx1ZSAhPT0gb3B0aW9uLnZhbHVlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMub25DbGljayggeyAuLi5wcm9wcy5maWx0ZXJzLCBbIGZpbHRlci5pZCBdOiBvcHRpb24udmFsdWUgfSApOiBub29wKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcHRpb24udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJzOyJdLCJzb3VyY2VSb290IjoiIn0=