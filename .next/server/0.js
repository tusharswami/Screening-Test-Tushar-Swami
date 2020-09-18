exports.ids = [0];
exports.modules = {

/***/ "./components/Card/Cards.js":
/*!**********************************!*\
  !*** ./components/Card/Cards.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Cards_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cards.scss */ "./components/Card/Cards.scss");
/* harmony import */ var _Cards_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Cards_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! query-string */ "query-string");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "F:\\Publicis\\v1\\frontend\\components\\Card\\Cards.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const Cards = ({
  filters
}) => {
  const {
    0: values,
    1: setValues
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    response: {},
    isFetching: false
  });
  const {
    response,
    isFetching
  } = values; // On Filter Update

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    console.log(filters);

    const _params = 0 !== Object.keys(filters).length ? `?${query_string__WEBPACK_IMPORTED_MODULE_2___default.a.stringify(filters)}` : null;

    getData(_params, filters).then(res => {
      setValues(_objectSpread(_objectSpread({}, values), {}, {
        response: res,
        isFetching: false
      }));
    }).catch(e => console.error(e));
  }, [filters]); // make an API request and set the state with the recieved response

  const getData = async (_params, filters) => {
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      isFetching: true,
      response: {}
    }));
    let res;
    console.log(_params);

    try {
      res = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`https://api.spacexdata.com/v3/launches?limit=100${_params}`);
    } catch (e) {
      console.error(e);
    } finally {
      if (null !== _params) {
        window.history.replaceState(filters, 'params', `${_params}`);
      }

      ;
    }

    return res;
  }; // if response has data then render cards


  if (undefined !== response && 0 !== Object.keys(response).length && !isFetching) {
    return __jsx("div", {
      className: "cards__container",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 13
      }
    }, response.data && 0 < response.data.length ? response.data.map((item, index) => {
      return __jsx("div", {
        className: "cards__container__card hover",
        key: `${item.mission_name}_${index}`,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }
      }, __jsx("figure", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 25
        }
      }, __jsx("img", {
        className: "cards__container__card__icon",
        alt: "Mission Image",
        src: item.links.mission_patch || 'https://via.placeholder.com/150',
        width: "80%",
        height: "60%",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 33
        }
      })), __jsx("div", {
        className: "cards__container__card__info",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "cards__container__card__info__title",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 25
        }
      }, `${item.mission_name} # ${item.flight_number}`), __jsx("div", {
        className: "cards__container__card__info__item",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 25
        }
      }, __jsx("span", {
        className: "cards__container__card__info__item__key",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 29
        }
      }, "Mission Ids :"), __jsx("ul", {
        className: "cards__container__card__info__item__list",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 29
        }
      }, item.mission_id.map(mission => {
        return __jsx("li", {
          className: "cards__container__card__info__item__value",
          key: mission,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 37
          }
        }, " ", mission || "Not Available");
      }))), __jsx("div", {
        className: "cards__container__card__info__item",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 25
        }
      }, __jsx("span", {
        className: "cards__container__card__info__item__key",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 29
        }
      }, "Launch Year :"), __jsx("span", {
        className: "cards__container__card__info__item__value",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 29
        }
      }, item.launch_year)), __jsx("div", {
        className: "cards__container__card__info__item",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 25
        }
      }, __jsx("span", {
        className: "cards__container__card__info__item__key",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 29
        }
      }, "Successful Launch :"), __jsx("span", {
        className: "cards__container__card__info__item__value",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 29
        }
      }, null === item.launch_success ? 'null' : item.launch_success.toString())), __jsx("div", {
        className: "cards__container__card__info__item",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 25
        }
      }, __jsx("span", {
        className: "cards__container__card__info__item__key",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 25
        }
      }, "Successful Landing :"), __jsx("span", {
        className: "cards__container__card__info__item__value",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 29
        }
      }, null === item.rocket.first_stage.cores[0].land_success ? 'null' : item.rocket.first_stage.cores[0].land_success.toString()))));
    }) : __jsx("div", {
      className: "no-data",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 22
      }
    }, "No Data Found"));
  } else if (isFetching) {
    // if the component is fetching data show preloaders
    return __jsx("div", {
      className: "cards__container",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 13
      }
    }, [1, 2, 3, 4].map((val, index) => {
      return __jsx("div", {
        className: "cards__container__card__preloader",
        key: index,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "cards__container__card__icon__preloader",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 21
        }
      }), __jsx("div", {
        className: "cards__container__card__info__preloader",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 21
        }
      }), __jsx("div", {
        className: "cards__container__card__info__preloader",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 21
        }
      }), __jsx("div", {
        className: "cards__container__card__info__preloader",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 21
        }
      }));
    }));
  } else return null;
};

Cards.getInitialProps = () => {
  return getData('').then(data => {
    if (data.error) {
      console.log(data.error);
    } else {
      return {
        response: res
      };
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Cards);

/***/ }),

/***/ "./components/Card/Cards.scss":
/*!************************************!*\
  !*** ./components/Card/Cards.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcmQvQ2FyZHMuanMiXSwibmFtZXMiOlsiQ2FyZHMiLCJmaWx0ZXJzIiwidmFsdWVzIiwic2V0VmFsdWVzIiwidXNlU3RhdGUiLCJyZXNwb25zZSIsImlzRmV0Y2hpbmciLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwiX3BhcmFtcyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJxdWVyeVN0cmluZyIsInN0cmluZ2lmeSIsImdldERhdGEiLCJ0aGVuIiwicmVzIiwiY2F0Y2giLCJlIiwiZXJyb3IiLCJheGlvcyIsImdldCIsIndpbmRvdyIsImhpc3RvcnkiLCJyZXBsYWNlU3RhdGUiLCJ1bmRlZmluZWQiLCJkYXRhIiwibWFwIiwiaXRlbSIsImluZGV4IiwibWlzc2lvbl9uYW1lIiwibGlua3MiLCJtaXNzaW9uX3BhdGNoIiwiZmxpZ2h0X251bWJlciIsIm1pc3Npb25faWQiLCJtaXNzaW9uIiwibGF1bmNoX3llYXIiLCJsYXVuY2hfc3VjY2VzcyIsInRvU3RyaW5nIiwicm9ja2V0IiwiZmlyc3Rfc3RhZ2UiLCJjb3JlcyIsImxhbmRfc3VjY2VzcyIsInZhbCIsImdldEluaXRpYWxQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBSUEsTUFBTUEsS0FBSyxHQUFHLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQWU7QUFFekIsUUFBTTtBQUFBLE9BQUNDLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCQyxzREFBUSxDQUFDO0FBQ2pDQyxZQUFRLEVBQUUsRUFEdUI7QUFFakNDLGNBQVUsRUFBRTtBQUZxQixHQUFELENBQXBDO0FBS0EsUUFBTTtBQUFDRCxZQUFEO0FBQVdDO0FBQVgsTUFBeUJKLE1BQS9CLENBUHlCLENBU3pCOztBQUNBSyx5REFBUyxDQUFDLE1BQU07QUFDUkMsV0FBTyxDQUFDQyxHQUFSLENBQVlSLE9BQVo7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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBSEksRUFJSjtBQUFLLGlCQUFTLEVBQUMseUNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUpJLENBQVI7QUFNQyxLQVBELENBRkosQ0FESjtBQWNILEdBZk0sTUFlQSxPQUFPLElBQVA7QUFDVixDQS9HRDs7QUFpSEEvQixLQUFLLENBQUM4QyxlQUFOLEdBQXdCLE1BQU07QUFDMUIsU0FBTzlCLE9BQU8sQ0FBRSxFQUFGLENBQVAsQ0FBZUMsSUFBZixDQUFvQlcsSUFBSSxJQUFJO0FBQy9CLFFBQUlBLElBQUksQ0FBQ1AsS0FBVCxFQUFnQjtBQUNaYixhQUFPLENBQUNDLEdBQVIsQ0FBWW1CLElBQUksQ0FBQ1AsS0FBakI7QUFDSCxLQUZELE1BRU87QUFDSCxhQUFPO0FBQ0hoQixnQkFBUSxFQUFHYTtBQURSLE9BQVA7QUFHSDtBQUNKLEdBUk0sQ0FBUDtBQVNILENBVkQ7O0FBWWVsQixvRUFBZixFIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICcuL0NhcmRzLnNjc3MnO1xyXG5pbXBvcnQgcXVlcnlTdHJpbmcgZnJvbSAncXVlcnktc3RyaW5nJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcblxyXG5cclxuY29uc3QgQ2FyZHMgPSAoe2ZpbHRlcnN9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICByZXNwb25zZToge30sXHJcbiAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB7cmVzcG9uc2UsIGlzRmV0Y2hpbmd9ID0gdmFsdWVzO1xyXG5cclxuICAgIC8vIE9uIEZpbHRlciBVcGRhdGVcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGZpbHRlcnMpXHJcbiAgICAgICAgICAgIGNvbnN0IF9wYXJhbXMgPSAwICE9PSBPYmplY3Qua2V5cyggZmlsdGVycyApLmxlbmd0aCA/IGA/JHsgcXVlcnlTdHJpbmcuc3RyaW5naWZ5KGZpbHRlcnMpIH1gOiBudWxsO1xyXG4gICAgICAgICAgICBnZXREYXRhKF9wYXJhbXMsZmlsdGVycykudGhlbihcclxuICAgICAgICAgICAgICAgICggcmVzICkgPT4geyBzZXRWYWx1ZXMoIHsgLi4udmFsdWVzLCByZXNwb25zZTogcmVzLCBpc0ZldGNoaW5nOiBmYWxzZSB9ICk7IH1cclxuICAgICAgICAgICAgKS5jYXRjaCggZSA9PiBjb25zb2xlLmVycm9yKGUpICk7XHJcbiAgICAgICAgXHJcbiAgICB9LCBbZmlsdGVyc10pO1xyXG5cclxuICAgICAvLyBtYWtlIGFuIEFQSSByZXF1ZXN0IGFuZCBzZXQgdGhlIHN0YXRlIHdpdGggdGhlIHJlY2lldmVkIHJlc3BvbnNlXHJcbiAgICAgY29uc3QgZ2V0RGF0YSA9IGFzeW5jIChfcGFyYW1zLGZpbHRlcnMpID0+IHtcclxuXHJcbiAgICAgICAgc2V0VmFsdWVzKCB7IC4uLnZhbHVlcywgaXNGZXRjaGluZzp0cnVlLCByZXNwb25zZToge30gfSApO1xyXG4gICAgICAgIGxldCByZXM7XHJcbiAgICAgICAgY29uc29sZS5sb2coX3BhcmFtcylcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXMgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vYXBpLnNwYWNleGRhdGEuY29tL3YzL2xhdW5jaGVzP2xpbWl0PTEwMCR7X3BhcmFtc31gKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgaWYoIG51bGwgIT09IF9wYXJhbXMgKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoIGZpbHRlcnMsICdwYXJhbXMnLCBgJHtfcGFyYW1zfWApO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlcztcclxuICAgIH1cclxuXHJcbiAgICAvLyBpZiByZXNwb25zZSBoYXMgZGF0YSB0aGVuIHJlbmRlciBjYXJkc1xyXG4gICAgaWYoIHVuZGVmaW5lZCAhPT0gcmVzcG9uc2UgJiYgMCAhPT0gT2JqZWN0LmtleXMoIHJlc3BvbnNlICkubGVuZ3RoICYmICFpc0ZldGNoaW5nICkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkc19fY29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEgJiYgMCA8IHJlc3BvbnNlLmRhdGEubGVuZ3RoID8gcmVzcG9uc2UuZGF0YS5tYXAoICggaXRlbSwgaW5kZXggKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmRzX19jb250YWluZXJfX2NhcmQgaG92ZXInIGtleT17YCR7aXRlbS5taXNzaW9uX25hbWV9XyR7aW5kZXh9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmU+PGltZyBjbGFzc05hbWU9J2NhcmRzX19jb250YWluZXJfX2NhcmRfX2ljb24nIGFsdD0nTWlzc2lvbiBJbWFnZScgc3JjPXtpdGVtLmxpbmtzLm1pc3Npb25fcGF0Y2ggfHwgJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xNTAnfSB3aWR0aD0nODAlJyBoZWlnaHQ9JzYwJScvPjwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZHNfX2NvbnRhaW5lcl9fY2FyZF9faW5mbyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkc19fY29udGFpbmVyX19jYXJkX19pbmZvX190aXRsZSc+e2Ake2l0ZW0ubWlzc2lvbl9uYW1lfSAjICR7aXRlbS5mbGlnaHRfbnVtYmVyfWB9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkc19fY29udGFpbmVyX19jYXJkX19pbmZvX19pdGVtJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nY2FyZHNfX2NvbnRhaW5lcl9fY2FyZF9faW5mb19faXRlbV9fa2V5Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1pc3Npb24gSWRzIDogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdjYXJkc19fY29udGFpbmVyX19jYXJkX19pbmZvX19pdGVtX19saXN0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLm1pc3Npb25faWQubWFwKCAoIG1pc3Npb24gKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdjYXJkc19fY29udGFpbmVyX19jYXJkX19pbmZvX19pdGVtX192YWx1ZScga2V5PXttaXNzaW9ufT4ge21pc3Npb24gfHwgXCJOb3QgQXZhaWxhYmxlXCJ9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkc19fY29udGFpbmVyX19jYXJkX19pbmZvX19pdGVtJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nY2FyZHNfX2NvbnRhaW5lcl9fY2FyZF9faW5mb19faXRlbV9fa2V5Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExhdW5jaCBZZWFyIDogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2NhcmRzX19jb250YWluZXJfX2NhcmRfX2luZm9fX2l0ZW1fX3ZhbHVlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmxhdW5jaF95ZWFyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmRzX19jb250YWluZXJfX2NhcmRfX2luZm9fX2l0ZW0nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjYXJkc19fY29udGFpbmVyX19jYXJkX19pbmZvX19pdGVtX19rZXknPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3VjY2Vzc2Z1bCBMYXVuY2ggOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nY2FyZHNfX2NvbnRhaW5lcl9fY2FyZF9faW5mb19faXRlbV9fdmFsdWUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBudWxsID09PSBpdGVtLmxhdW5jaF9zdWNjZXNzID8gJ251bGwnOml0ZW0ubGF1bmNoX3N1Y2Nlc3MudG9TdHJpbmcoKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZHNfX2NvbnRhaW5lcl9fY2FyZF9faW5mb19faXRlbSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nY2FyZHNfX2NvbnRhaW5lcl9fY2FyZF9faW5mb19faXRlbV9fa2V5Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN1Y2Nlc3NmdWwgTGFuZGluZyA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2NhcmRzX19jb250YWluZXJfX2NhcmRfX2luZm9fX2l0ZW1fX3ZhbHVlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgbnVsbCA9PT0gaXRlbS5yb2NrZXQuZmlyc3Rfc3RhZ2UuY29yZXNbMF0ubGFuZF9zdWNjZXNzID8gJ251bGwnOml0ZW0ucm9ja2V0LmZpcnN0X3N0YWdlLmNvcmVzWzBdLmxhbmRfc3VjY2Vzcy50b1N0cmluZygpIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KSA6IDxkaXYgY2xhc3NOYW1lPSduby1kYXRhJz5ObyBEYXRhIEZvdW5kPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9IGVsc2UgaWYoIGlzRmV0Y2hpbmcgKSB7IC8vIGlmIHRoZSBjb21wb25lbnQgaXMgZmV0Y2hpbmcgZGF0YSBzaG93IHByZWxvYWRlcnNcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkc19fY29udGFpbmVyJz5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgWzEsMiwzLDRdLm1hcCggKHZhbCxpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuKCA8ZGl2IGNsYXNzTmFtZT0nY2FyZHNfX2NvbnRhaW5lcl9fY2FyZF9fcHJlbG9hZGVyJyBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZHNfX2NvbnRhaW5lcl9fY2FyZF9faWNvbl9fcHJlbG9hZGVyJz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZHNfX2NvbnRhaW5lcl9fY2FyZF9faW5mb19fcHJlbG9hZGVyJz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZHNfX2NvbnRhaW5lcl9fY2FyZF9faW5mb19fcHJlbG9hZGVyJz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZHNfX2NvbnRhaW5lcl9fY2FyZF9faW5mb19fcHJlbG9hZGVyJz48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiApO1xyXG4gICAgICAgICAgICAgICAgfSApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH0gZWxzZSByZXR1cm4gbnVsbDsgXHJcbn1cclxuXHJcbkNhcmRzLmdldEluaXRpYWxQcm9wcyA9ICgpID0+IHtcclxuICAgIHJldHVybiBnZXREYXRhKCAnJywgKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgIGlmIChkYXRhLmVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEuZXJyb3IpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZSA6IHJlc1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkczsiXSwic291cmNlUm9vdCI6IiJ9