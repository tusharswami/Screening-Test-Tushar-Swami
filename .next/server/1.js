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
    style: {
      textAlign: "center"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }, "Filters"), __jsx("hr", {
    __self: undefined,
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
    onClick: () => {
      props.onClick({});
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }
  }, "Clear Filters"), __jsx("hr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }
  }), FILTERS.map((filter, index) => {
    return __jsx("div", {
      className: "filters_container__filter",
      key: `${filter.name}__${index}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "filters_container__filter__title",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 29
      }
    }, filter.name), __jsx("div", {
      className: "filters_container__filter__list",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
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
          lineNumber: 128,
          columnNumber: 45
        }
      }, option.title);
    })));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Filters);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ZpbHRlci9GaWx0ZXJzLmpzIl0sIm5hbWVzIjpbIkZJTFRFUlMiLCJpZCIsIm5hbWUiLCJvcHRpb25zIiwidGl0bGUiLCJ2YWx1ZSIsIm5vb3AiLCJGaWx0ZXJzIiwicHJvcHMiLCJzZWxlY3RlZEZpbHRlcnMiLCJmaWx0ZXJzIiwidGV4dEFsaWduIiwiY3Vyc29yIiwib25DbGljayIsIm1hcCIsImZpbHRlciIsImluZGV4Iiwib3B0aW9uIiwiX3NlbGVjdGVkVmFsdWUiLCJfY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUVBOztBQUNBLE1BQU1BLE9BQU8sR0FBRyxDQUNaO0FBQ0lDLElBQUUsRUFBRSxhQURSO0FBRUlDLE1BQUksRUFBRSxhQUZWO0FBR0lDLFNBQU8sRUFBRSxDQUNMO0FBQ0lDLFNBQUssRUFBRSxNQURYO0FBRUlDLFNBQUssRUFBRTtBQUZYLEdBREssRUFLTDtBQUNJRCxTQUFLLEVBQUUsTUFEWDtBQUVJQyxTQUFLLEVBQUU7QUFGWCxHQUxLLEVBU0w7QUFDSUQsU0FBSyxFQUFFLE1BRFg7QUFFSUMsU0FBSyxFQUFFO0FBRlgsR0FUSyxFQWFMO0FBQ0lELFNBQUssRUFBRSxNQURYO0FBRUlDLFNBQUssRUFBRTtBQUZYLEdBYkssRUFpQkw7QUFDSUQsU0FBSyxFQUFFLE1BRFg7QUFFSUMsU0FBSyxFQUFFO0FBRlgsR0FqQkssRUFxQkw7QUFDSUQsU0FBSyxFQUFFLE1BRFg7QUFFSUMsU0FBSyxFQUFFO0FBRlgsR0FyQkssRUF5Qkw7QUFDSUQsU0FBSyxFQUFFLE1BRFg7QUFFSUMsU0FBSyxFQUFFO0FBRlgsR0F6QkssRUE2Qkw7QUFDSUQsU0FBSyxFQUFFLE1BRFg7QUFFSUMsU0FBSyxFQUFFO0FBRlgsR0E3QkssRUFpQ0w7QUFDSUQsU0FBSyxFQUFFLE1BRFg7QUFFSUMsU0FBSyxFQUFFO0FBRlgsR0FqQ0ssRUFxQ0w7QUFDSUQsU0FBSyxFQUFF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S0FBMUIsR0FBa0MsdUNBQWxDLEdBQTJFLHVGQUE5Rjs7QUFDQSxhQUNJO0FBQ0ksV0FBRyxFQUFHLEdBQUVVLE1BQU0sQ0FBQ2IsSUFBSyxLQUFJYyxLQUFNLEVBRGxDO0FBRUksaUJBQVMsRUFBRUcsVUFGZjtBQUdJLGVBQU8sRUFDSCxNQUFNO0FBQ0ZELHdCQUFjLEtBQUtELE1BQU0sQ0FBQ1osS0FBMUIsR0FDSUcsS0FBSyxDQUFDSyxPQUFOLGlDQUFvQkwsS0FBSyxDQUFDRSxPQUExQjtBQUFtQyxhQUFFSyxNQUFNLENBQUNkLEVBQVQsR0FBZWdCLE1BQU0sQ0FBQ1o7QUFBekQsYUFESixHQUN3RUMsSUFBSSxFQUQ1RTtBQUVDLFNBUGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQVVLVyxNQUFNLENBQUNiLEtBVlosQ0FESjtBQWNILEtBbEJELENBRlIsQ0FGSixDQURKO0FBNEJILEdBN0JELENBTlIsQ0FESjtBQXdDSCxDQTdDRDs7QUErQ2VHLHNFQUFmLEUiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9GaWx0ZXJzLnNjc3MnXHJcblxyXG4vL2ZpbHRlcnMgZGF0YSBtb2RlbFxyXG5jb25zdCBGSUxURVJTID0gW1xyXG4gICAge1xyXG4gICAgICAgIGlkOiAnbGF1bmNoX3llYXInLFxyXG4gICAgICAgIG5hbWU6ICdMYXVuY2ggWWVhcicsXHJcbiAgICAgICAgb3B0aW9uczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJzIwMDYnLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6ICcyMDA2J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJzIwMDcnLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6ICcyMDA3J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJzIwMDgnLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6ICcyMDA4J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJzIwMDknLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6ICcyMDA5J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJzIwMTAnLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6ICcyMDEwJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJzIwMTEnLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6ICcyMDExJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJzIwMTInLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6ICcyMDEyJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJzIwMTMnLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6ICcyMDEzJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJzIwMTQnLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6ICcyMDE0J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJzIwMTUnLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6ICcyMDE1J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJzIwMTYnLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6ICcyMDE2J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJzIwMTcnLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6ICcyMDE3J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJzIwMTgnLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6ICcyMDE4J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJzIwMTknLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6ICcyMDE5J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJzIwMjAnLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6ICcyMDIwJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogJ2xhdW5jaF9zdWNjZXNzJyxcclxuICAgICAgICBuYW1lOiAnU3VjY2Vzc2Z1bCBMYXVuY2gnLFxyXG4gICAgICAgIG9wdGlvbnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdUcnVlJyxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAndHJ1ZSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdGYWxzZScsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ2ZhbHNlJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogJ2xhbmRfc3VjY2VzcycsXHJcbiAgICAgICAgbmFtZTogJ1N1Y2Nlc3NmdWwgTGFuZGluZycsXHJcbiAgICAgICAgb3B0aW9uczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1RydWUnLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6ICd0cnVlJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0ZhbHNlJyxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAnZmFsc2UnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9XHJcbl07XHJcblxyXG4vLyBuby1vcCAgZnVuY3Rpb25cclxuY29uc3Qgbm9vcCA9IGZ1bmN0aW9uKCkge307XHJcblxyXG4vLyB2aWV3IGZvciBmaWx0ZXJzXHJcbmNvbnN0IEZpbHRlcnMgPSAoIHByb3BzICkgPT4ge1xyXG5cclxuICAgIC8vIHVzZSB0aGUgcmVjZWl2ZWQgZmlsdGVycyB0byBzaG93IHNlbGVjdGVkIGZpbHRlcnNcclxuICAgIGNvbnN0IHNlbGVjdGVkRmlsdGVycyA9IHByb3BzLmZpbHRlcnM7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaWx0ZXJzX2NvbnRhaW5lcic+XHJcbiAgICAgICAgICAgIDxoMiBzdHlsZT17e3RleHRBbGlnbjpcImNlbnRlclwifX0+RmlsdGVyczwvaDI+XHJcbiAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZmlsdGVyc19jb250YWluZXJfX2FjdGlvbicgc3R5bGU9e3tjdXJzb3I6XCJwb2ludGVyXCIsIHRleHRBbGlnbjpcImNlbnRlclwifX0gb25DbGljaz17ICgpID0+IHsgcHJvcHMub25DbGljaygge30gKSB9IH0+Q2xlYXIgRmlsdGVyczwvcD5cclxuICAgICAgICAgICAgPGhyLz5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgRklMVEVSUy5tYXAoICggZmlsdGVyLCBpbmRleCApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaWx0ZXJzX2NvbnRhaW5lcl9fZmlsdGVyJyBrZXk9eyBgJHtmaWx0ZXIubmFtZX1fXyR7aW5kZXh9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmlsdGVyc19jb250YWluZXJfX2ZpbHRlcl9fdGl0bGUnPntmaWx0ZXIubmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaWx0ZXJzX2NvbnRhaW5lcl9fZmlsdGVyX19saXN0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlci5vcHRpb25zLm1hcCggKCBvcHRpb24sIGluZGV4ICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgX3NlbGVjdGVkVmFsdWUgPSBzZWxlY3RlZEZpbHRlcnNbIGZpbHRlci5pZCBdID8gc2VsZWN0ZWRGaWx0ZXJzWyBmaWx0ZXIuaWQgXTpudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IF9jbGFzc05hbWUgPSBfc2VsZWN0ZWRWYWx1ZSAhPT0gb3B0aW9uLnZhbHVlID8gJ2ZpbHRlcnNfY29udGFpbmVyX19maWx0ZXJfX2xpc3RfX2l0ZW0nOiAnZmlsdGVyc19jb250YWluZXJfX2ZpbHRlcl9fbGlzdF9faXRlbSBmaWx0ZXJzX2NvbnRhaW5lcl9fZmlsdGVyX19saXN0X19pdGVtLS1zZWxlY3RlZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YCR7ZmlsdGVyLm5hbWV9X18ke2luZGV4fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17X2NsYXNzTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3NlbGVjdGVkVmFsdWUgIT09IG9wdGlvbi52YWx1ZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLm9uQ2xpY2soIHsgLi4ucHJvcHMuZmlsdGVycywgWyBmaWx0ZXIuaWQgXTogb3B0aW9uLnZhbHVlIH0gKTogbm9vcCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3B0aW9uLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyczsiXSwic291cmNlUm9vdCI6IiJ9