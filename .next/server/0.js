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
    // console.log(filters)
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
    let res; // console.log(_params)

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
        lineNumber: 50,
        columnNumber: 13
      }
    }, response.data && 0 < response.data.length ? response.data.map((item, index) => {
      return __jsx("div", {
        className: "cards__container__card hover",
        key: `${item.mission_name}_${index}`,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 21
        }
      }, __jsx("figure", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
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
          lineNumber: 56,
          columnNumber: 33
        }
      })), __jsx("div", {
        className: "cards__container__card__info",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "cards__container__card__info__title",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 25
        }
      }, `${item.mission_name} # ${item.flight_number}`), __jsx("div", {
        className: "cards__container__card__info__item",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 25
        }
      }, __jsx("span", {
        className: "cards__container__card__info__item__key",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 29
        }
      }, "Mission Ids :"), __jsx("ul", {
        className: "cards__container__card__info__item__list",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 29
        }
      }, item.mission_id.map(mission => {
        return __jsx("li", {
          className: "cards__container__card__info__item__value",
          key: mission,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 37
          }
        }, " ", mission || "Not Available");
      }))), __jsx("div", {
        className: "cards__container__card__info__item",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 25
        }
      }, __jsx("span", {
        className: "cards__container__card__info__item__key",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 29
        }
      }, "Launch Year :"), __jsx("span", {
        className: "cards__container__card__info__item__value",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 29
        }
      }, item.launch_year)), __jsx("div", {
        className: "cards__container__card__info__item",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 25
        }
      }, __jsx("span", {
        className: "cards__container__card__info__item__key",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 29
        }
      }, "Successful Launch :"), __jsx("span", {
        className: "cards__container__card__info__item__value",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 29
        }
      }, null === item.launch_success ? 'null' : item.launch_success.toString())), __jsx("div", {
        className: "cards__container__card__info__item",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 25
        }
      }, __jsx("span", {
        className: "cards__container__card__info__item__key",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 25
        }
      }, "Successful Landing :"), __jsx("span", {
        className: "cards__container__card__info__item__value",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 29
        }
      }, null === item.rocket.first_stage.cores[0].land_success ? 'null' : item.rocket.first_stage.cores[0].land_success.toString()))));
    }) : __jsx("div", {
      className: "no-data",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
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
        lineNumber: 106,
        columnNumber: 13
      }
    }, [1, 2, 3, 4].map((val, index) => {
      return __jsx("div", {
        className: "cards__container__card__preloader",
        key: index,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "cards__container__card__icon__preloader",
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
      }), __jsx("div", {
        className: "cards__container__card__info__preloader",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcmQvQ2FyZHMuanMiXSwibmFtZXMiOlsiQ2FyZHMiLCJmaWx0ZXJzIiwidmFsdWVzIiwic2V0VmFsdWVzIiwidXNlU3RhdGUiLCJyZXNwb25zZSIsImlzRmV0Y2hpbmciLCJ1c2VFZmZlY3QiLCJfcGFyYW1zIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInF1ZXJ5U3RyaW5nIiwic3RyaW5naWZ5IiwiZ2V0RGF0YSIsInRoZW4iLCJyZXMiLCJjYXRjaCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJheGlvcyIsImdldCIsIndpbmRvdyIsImhpc3RvcnkiLCJyZXBsYWNlU3RhdGUiLCJ1bmRlZmluZWQiLCJkYXRhIiwibWFwIiwiaXRlbSIsImluZGV4IiwibWlzc2lvbl9uYW1lIiwibGlua3MiLCJtaXNzaW9uX3BhdGNoIiwiZmxpZ2h0X251bWJlciIsIm1pc3Npb25faWQiLCJtaXNzaW9uIiwibGF1bmNoX3llYXIiLCJsYXVuY2hfc3VjY2VzcyIsInRvU3RyaW5nIiwicm9ja2V0IiwiZmlyc3Rfc3RhZ2UiLCJjb3JlcyIsImxhbmRfc3VjY2VzcyIsInZhbCIsImdldEluaXRpYWxQcm9wcyIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBSUEsTUFBTUEsS0FBSyxHQUFHLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQWU7QUFFekIsUUFBTTtBQUFBLE9BQUNDLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCQyxzREFBUSxDQUFDO0FBQ2pDQyxZQUFRLEVBQUUsRUFEdUI7QUFFakNDLGNBQVUsRUFBRTtBQUZxQixHQUFELENBQXBDO0FBS0EsUUFBTTtBQUFDRCxZQUFEO0FBQVdDO0FBQVgsTUFBeUJKLE1BQS9CLENBUHlCLENBU3pCOztBQUNBSyx5REFBUyxDQUFDLE1BQU07QUFDUjtBQUNBLFVBQU1DLE9BQU8sR0FBRyxNQUFNQyxN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QUFDLHlDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFKSSxDQUFSO0FBTUMsS0FQRCxDQUZKLENBREo7QUFjSCxHQWZNLE1BZUEsT0FBTyxJQUFQO0FBQ1YsQ0FoSEQ7O0FBa0hBOUIsS0FBSyxDQUFDNkMsZUFBTixHQUF3QixNQUFNO0FBQzFCLFNBQU8vQixPQUFPLENBQUUsRUFBRixDQUFQLENBQWVDLElBQWYsQ0FBb0JZLElBQUksSUFBSTtBQUMvQixRQUFJQSxJQUFJLENBQUNQLEtBQVQsRUFBZ0I7QUFDWkQsYUFBTyxDQUFDMkIsR0FBUixDQUFZbkIsSUFBSSxDQUFDUCxLQUFqQjtBQUNILEtBRkQsTUFFTztBQUNILGFBQU87QUFDSGYsZ0JBQVEsRUFBR1c7QUFEUixPQUFQO0FBR0g7QUFDSixHQVJNLENBQVA7QUFTSCxDQVZEOztBQVllaEIsb0VBQWYsRSIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAnLi9DYXJkcy5zY3NzJztcclxuaW1wb3J0IHF1ZXJ5U3RyaW5nIGZyb20gJ3F1ZXJ5LXN0cmluZyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5cclxuXHJcbmNvbnN0IENhcmRzID0gKHtmaWx0ZXJzfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgcmVzcG9uc2U6IHt9LFxyXG4gICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qge3Jlc3BvbnNlLCBpc0ZldGNoaW5nfSA9IHZhbHVlcztcclxuXHJcbiAgICAvLyBPbiBGaWx0ZXIgVXBkYXRlXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhmaWx0ZXJzKVxyXG4gICAgICAgICAgICBjb25zdCBfcGFyYW1zID0gMCAhPT0gT2JqZWN0LmtleXMoIGZpbHRlcnMgKS5sZW5ndGggPyBgPyR7IHF1ZXJ5U3RyaW5nLnN0cmluZ2lmeShmaWx0ZXJzKSB9YDogbnVsbDtcclxuICAgICAgICAgICAgZ2V0RGF0YShfcGFyYW1zLGZpbHRlcnMpLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAoIHJlcyApID0+IHsgc2V0VmFsdWVzKCB7IC4uLnZhbHVlcywgcmVzcG9uc2U6IHJlcywgaXNGZXRjaGluZzogZmFsc2UgfSApOyB9XHJcbiAgICAgICAgICAgICkuY2F0Y2goIGUgPT4gY29uc29sZS5lcnJvcihlKSApO1xyXG4gICAgICAgIFxyXG4gICAgfSwgW2ZpbHRlcnNdKTtcclxuXHJcbiAgICAgLy8gbWFrZSBhbiBBUEkgcmVxdWVzdCBhbmQgc2V0IHRoZSBzdGF0ZSB3aXRoIHRoZSByZWNpZXZlZCByZXNwb25zZVxyXG4gICAgIGNvbnN0IGdldERhdGEgPSBhc3luYyAoX3BhcmFtcyxmaWx0ZXJzKSA9PiB7XHJcblxyXG4gICAgICAgIHNldFZhbHVlcyggeyAuLi52YWx1ZXMsIGlzRmV0Y2hpbmc6dHJ1ZSwgcmVzcG9uc2U6IHt9IH0gKTtcclxuICAgICAgICBsZXQgcmVzO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKF9wYXJhbXMpXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL2FwaS5zcGFjZXhkYXRhLmNvbS92My9sYXVuY2hlcz9saW1pdD0xMDAke19wYXJhbXN9YCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgIGlmKCBudWxsICE9PSBfcGFyYW1zICkge1xyXG4gICAgICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKCBmaWx0ZXJzLCAncGFyYW1zJywgYCR7X3BhcmFtc31gKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaWYgcmVzcG9uc2UgaGFzIGRhdGEgdGhlbiByZW5kZXIgY2FyZHNcclxuICAgIGlmKCB1bmRlZmluZWQgIT09IHJlc3BvbnNlICYmIDAgIT09IE9iamVjdC5rZXlzKCByZXNwb25zZSApLmxlbmd0aCAmJiAhaXNGZXRjaGluZyApIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmRzX19jb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YSAmJiAwIDwgcmVzcG9uc2UuZGF0YS5sZW5ndGggPyByZXNwb25zZS5kYXRhLm1hcCggKCBpdGVtLCBpbmRleCApID0+IHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZHNfX2NvbnRhaW5lcl9fY2FyZCBob3Zlcicga2V5PXtgJHtpdGVtLm1pc3Npb25fbmFtZX1fJHtpbmRleH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZT48aW1nIGNsYXNzTmFtZT0nY2FyZHNfX2NvbnRhaW5lcl9fY2FyZF9faWNvbicgYWx0PSdNaXNzaW9uIEltYWdlJyBzcmM9e2l0ZW0ubGlua3MubWlzc2lvbl9wYXRjaCB8fCAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzE1MCd9IHdpZHRoPSc4MCUnIGhlaWdodD0nNjAlJy8+PC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkc19fY29udGFpbmVyX19jYXJkX19pbmZvJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmRzX19jb250YWluZXJfX2NhcmRfX2luZm9fX3RpdGxlJz57YCR7aXRlbS5taXNzaW9uX25hbWV9ICMgJHtpdGVtLmZsaWdodF9udW1iZXJ9YH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmRzX19jb250YWluZXJfX2NhcmRfX2luZm9fX2l0ZW0nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjYXJkc19fY29udGFpbmVyX19jYXJkX19pbmZvX19pdGVtX19rZXknPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTWlzc2lvbiBJZHMgOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J2NhcmRzX19jb250YWluZXJfX2NhcmRfX2luZm9fX2l0ZW1fX2xpc3QnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ubWlzc2lvbl9pZC5tYXAoICggbWlzc2lvbiApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J2NhcmRzX19jb250YWluZXJfX2NhcmRfX2luZm9fX2l0ZW1fX3ZhbHVlJyBrZXk9e21pc3Npb259PiB7bWlzc2lvbiB8fCBcIk5vdCBBdmFpbGFibGVcIn08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmRzX19jb250YWluZXJfX2NhcmRfX2luZm9fX2l0ZW0nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjYXJkc19fY29udGFpbmVyX19jYXJkX19pbmZvX19pdGVtX19rZXknPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTGF1bmNoIFllYXIgOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nY2FyZHNfX2NvbnRhaW5lcl9fY2FyZF9faW5mb19faXRlbV9fdmFsdWUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubGF1bmNoX3llYXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZHNfX2NvbnRhaW5lcl9fY2FyZF9faW5mb19faXRlbSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2NhcmRzX19jb250YWluZXJfX2NhcmRfX2luZm9fX2l0ZW1fX2tleSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdWNjZXNzZnVsIExhdW5jaCA6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjYXJkc19fY29udGFpbmVyX19jYXJkX19pbmZvX19pdGVtX192YWx1ZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IG51bGwgPT09IGl0ZW0ubGF1bmNoX3N1Y2Nlc3MgPyAnbnVsbCc6aXRlbS5sYXVuY2hfc3VjY2Vzcy50b1N0cmluZygpIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkc19fY29udGFpbmVyX19jYXJkX19pbmZvX19pdGVtJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjYXJkc19fY29udGFpbmVyX19jYXJkX19pbmZvX19pdGVtX19rZXknPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3VjY2Vzc2Z1bCBMYW5kaW5nIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nY2FyZHNfX2NvbnRhaW5lcl9fY2FyZF9faW5mb19faXRlbV9fdmFsdWUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBudWxsID09PSBpdGVtLnJvY2tldC5maXJzdF9zdGFnZS5jb3Jlc1swXS5sYW5kX3N1Y2Nlc3MgPyAnbnVsbCc6aXRlbS5yb2NrZXQuZmlyc3Rfc3RhZ2UuY29yZXNbMF0ubGFuZF9zdWNjZXNzLnRvU3RyaW5nKCkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pIDogPGRpdiBjbGFzc05hbWU9J25vLWRhdGEnPk5vIERhdGEgRm91bmQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH0gZWxzZSBpZiggaXNGZXRjaGluZyApIHsgLy8gaWYgdGhlIGNvbXBvbmVudCBpcyBmZXRjaGluZyBkYXRhIHNob3cgcHJlbG9hZGVyc1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmRzX19jb250YWluZXInPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBbMSwyLDMsNF0ubWFwKCAodmFsLGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oIDxkaXYgY2xhc3NOYW1lPSdjYXJkc19fY29udGFpbmVyX19jYXJkX19wcmVsb2FkZXInIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkc19fY29udGFpbmVyX19jYXJkX19pY29uX19wcmVsb2FkZXInPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkc19fY29udGFpbmVyX19jYXJkX19pbmZvX19wcmVsb2FkZXInPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkc19fY29udGFpbmVyX19jYXJkX19pbmZvX19wcmVsb2FkZXInPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkc19fY29udGFpbmVyX19jYXJkX19pbmZvX19wcmVsb2FkZXInPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICk7XHJcbiAgICAgICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfSBlbHNlIHJldHVybiBudWxsOyBcclxufVxyXG5cclxuQ2FyZHMuZ2V0SW5pdGlhbFByb3BzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGdldERhdGEoICcnLCApLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgaWYgKGRhdGEuZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS5lcnJvcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlIDogcmVzXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRzOyJdLCJzb3VyY2VSb290IjoiIn0=