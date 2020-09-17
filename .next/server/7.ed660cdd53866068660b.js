exports.ids = [7];
exports.modules = {

/***/ "imkg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Filters_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("1WNL");
/* harmony import */ var _Filters_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Filters_scss__WEBPACK_IMPORTED_MODULE_1__);

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
    className: "filters_container"
  }, __jsx("h2", null, "Filters"), __jsx("span", {
    className: "filters_container__action",
    style: {
      cursor: "pointer"
    },
    onClick: () => {
      props.onClick({});
    }
  }, "x Clear Filters"), FILTERS.map((filter, index) => {
    return __jsx("div", {
      className: "filters_container__filter",
      key: `${filter.name}__${index}`
    }, __jsx("div", {
      className: "filters_container__filter__title"
    }, filter.name), __jsx("div", {
      className: "filters_container__filter__list"
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
        }
      }, option.title);
    })));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Filters);

/***/ })

};;