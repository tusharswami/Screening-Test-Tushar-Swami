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
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! query-string */ "query-string");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Cards_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Cards.scss */ "./components/Card/Cards.scss");
/* harmony import */ var _Cards_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Cards_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "F:\\Publicis\\v1\\frontend\\components\\Card\\Cards.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class Cards extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: props.filters,
      // filters object
      response: {},
      // response for cards data
      isFetching: false // flag for fetching data

    };

    this._bind();
  } // bind the methods to context


  _bind() {
    this.getData = this.getData.bind(this);
  } // fetch data on mount


  componentDidMount() {
    const filters = this.state.filters;

    const _params = 0 !== Object.keys(filters).length ? `?${query_string__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(filters)}` : null;

    this.getData(_params, filters).then(res => {
      this.setState({
        response: res,
        isFetching: false
      });
    }).catch(e => console.error(e));
    ;
  } // check if new filter changed


  static getDerivedStateFromProps(nextProps, prevState) {
    if (JSON.stringify(prevState.filters) !== JSON.stringify(nextProps.filters)) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        filters: nextProps.filters
      });
    } else return null;
  } // check if new data needs to be fetched in case filters have changed


  componentDidUpdate(prevProps, prevState) {
    if (JSON.stringify(this.state.filters) !== JSON.stringify(prevState.filters)) {
      const _params = 0 !== Object.keys(this.state.filters).length ? `?${query_string__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(this.state.filters)}` : null;

      this.getData(_params, this.state.filters).then(res => {
        this.setState({
          response: res,
          isFetching: false
        });
      }).catch(e => console.error(e));
    }
  } // make an API request and set the state with the recieved response


  async getData(_params, filters) {
    this.setState({
      isFetching: true
    });
    let res;

    try {
      res = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`https://api.spacexdata.com/v3/launches?limit=100${_params}`);
    } catch (e) {
      console.error(e);
    } finally {
      if (null !== _params) {
        window.history.replaceState(filters, 'params', `${_params}`);
      }

      ;
    }

    return res;
  }

  render() {
    const {
      isFetching,
      response
    } = this.state; // if response has data then render cards

    if (undefined !== response && 0 !== Object.keys(response).length && !isFetching) {
      return __jsx("div", {
        className: "cards__container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 17
        }
      }, response.data && 0 < response.data.length ? response.data.map((item, index) => {
        return __jsx("div", {
          className: "cards__container__card hover",
          key: `${item.mission_name}_${index}`,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 25
          }
        }, __jsx("figure", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 29
          }
        }, __jsx("img", {
          className: "cards__container__card__icon",
          alt: "Mission Logo",
          src: item.links.mission_patch || 'https://via.placeholder.com/150',
          width: "80%",
          height: "60%",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 37
          }
        })), __jsx("div", {
          className: "cards__container__card__info",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 29
          }
        }, __jsx("div", {
          className: "cards__container__card__info__title",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 29
          }
        }, `${item.mission_name} # ${item.flight_number}`), __jsx("div", {
          className: "cards__container__card__info__item",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 29
          }
        }, __jsx("span", {
          className: "cards__container__card__info__item__key",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 33
          }
        }, "Mission Ids :"), __jsx("ul", {
          className: "cards__container__card__info__item__list",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 33
          }
        }, item.mission_id.map(mission => {
          return __jsx("li", {
            className: "cards__container__card__info__item__value",
            key: mission,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 41
            }
          }, " ", mission);
        })), __jsx("br", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 33
          }
        })), __jsx("div", {
          className: "cards__container__card__info__item",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 29
          }
        }, __jsx("span", {
          className: "cards__container__card__info__item__key",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 33
          }
        }, "Launch Year :"), __jsx("span", {
          className: "cards__container__card__info__item__value",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 33
          }
        }, item.launch_year)), __jsx("div", {
          className: "cards__container__card__info__item",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 29
          }
        }, __jsx("span", {
          className: "cards__container__card__info__item__key",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 33
          }
        }, "Successful Launch :"), __jsx("span", {
          className: "cards__container__card__info__item__value",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 33
          }
        }, null === item.launch_success ? 'null' : item.launch_success.toString())), __jsx("div", {
          className: "cards__container__card__info__item",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 29
          }
        }, __jsx("span", {
          className: "cards__container__card__info__item__key",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 29
          }
        }, "Successful Landing :"), __jsx("span", {
          className: "cards__container__card__info__item__value",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 33
          }
        }, null === item.rocket.first_stage.cores[0].land_success ? 'null' : item.rocket.first_stage.cores[0].land_success.toString()))));
      }) : __jsx("div", {
        className: "no-data",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 26
        }
      }, "No Data Found"));
    } else if (isFetching) {
      // if the component is fetching data show preloaders
      return __jsx("div", {
        className: "cards__container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 17
        }
      }, [1, 2, 3, 4].map((val, index) => {
        return __jsx("div", {
          className: "cards__container__card__preloader",
          key: index,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 29
          }
        }, __jsx("div", {
          className: "cards__container__card__icon__preloader",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 25
          }
        }), __jsx("div", {
          className: "cards__container__card__info__preloader",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 25
          }
        }), __jsx("div", {
          className: "cards__container__card__info__preloader",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 25
          }
        }), __jsx("div", {
          className: "cards__container__card__info__preloader",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 25
          }
        }));
      }));
    } else return null;
  }

}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcmQvQ2FyZHMuanMiXSwibmFtZXMiOlsiQ2FyZHMiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsImZpbHRlcnMiLCJyZXNwb25zZSIsImlzRmV0Y2hpbmciLCJfYmluZCIsImdldERhdGEiLCJiaW5kIiwiY29tcG9uZW50RGlkTW91bnQiLCJfcGFyYW1zIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInF1ZXJ5U3RyaW5nIiwic3RyaW5naWZ5IiwidGhlbiIsInJlcyIsInNldFN0YXRlIiwiY2F0Y2giLCJlIiwiY29uc29sZSIsImVycm9yIiwiZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzIiwibmV4dFByb3BzIiwicHJldlN0YXRlIiwiSlNPTiIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsImF4aW9zIiwiZ2V0Iiwid2luZG93IiwiaGlzdG9yeSIsInJlcGxhY2VTdGF0ZSIsInJlbmRlciIsInVuZGVmaW5lZCIsImRhdGEiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJtaXNzaW9uX25hbWUiLCJsaW5rcyIsIm1pc3Npb25fcGF0Y2giLCJmbGlnaHRfbnVtYmVyIiwibWlzc2lvbl9pZCIsIm1pc3Npb24iLCJsYXVuY2hfeWVhciIsImxhdW5jaF9zdWNjZXNzIiwidG9TdHJpbmciLCJyb2NrZXQiLCJmaXJzdF9zdGFnZSIsImNvcmVzIiwibGFuZF9zdWNjZXNzIiwidmFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsS0FBTixTQUFvQkMsNENBQUssQ0FBQ0MsU0FBMUIsQ0FBbUM7QUFFL0JDLGFBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2pCLFVBQU1BLEtBQU47QUFFQSxTQUFLQyxLQUFMLEdBQWE7QUFDWEMsYUFBTyxFQUFFRixLQUFLLENBQUNFLE9BREo7QUFDYTtBQUN4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bUQsYUFBRyxFQUFFQSxLQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0o7QUFBSyxtQkFBUyxFQUFDLHlDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESSxFQUVKO0FBQUssbUJBQVMsRUFBQyx5Q0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRkksRUFHSjtBQUFLLG1CQUFTLEVBQUMseUNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUhJLEVBSUo7QUFBSyxtQkFBUyxFQUFDLHlDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFKSSxDQUFSO0FBTUMsT0FQRCxDQUZKLENBREo7QUFjSCxLQWZNLE1BZUEsT0FBTyxJQUFQO0FBQ1Y7O0FBaEo4Qjs7QUFtSnBCMUMsb0VBQWYsRSIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBxdWVyeVN0cmluZyBmcm9tICdxdWVyeS1zdHJpbmcnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgJy4vQ2FyZHMuc2Nzcyc7XHJcblxyXG5jbGFzcyBDYXJkcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICBzdXBlcihwcm9wcyk7XHJcbiAgXHJcbiAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgZmlsdGVyczogcHJvcHMuZmlsdGVycywgLy8gZmlsdGVycyBvYmplY3RcclxuICAgICAgICByZXNwb25zZToge30sIC8vIHJlc3BvbnNlIGZvciBjYXJkcyBkYXRhXHJcbiAgICAgICAgaXNGZXRjaGluZzogZmFsc2UgLy8gZmxhZyBmb3IgZmV0Y2hpbmcgZGF0YVxyXG4gICAgICB9O1xyXG4gIFxyXG4gICAgICB0aGlzLl9iaW5kKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYmluZCB0aGUgbWV0aG9kcyB0byBjb250ZXh0XHJcbiAgICBfYmluZCgpIHtcclxuICAgICAgICB0aGlzLmdldERhdGEgPSB0aGlzLmdldERhdGEuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBmZXRjaCBkYXRhIG9uIG1vdW50XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBjb25zdCBmaWx0ZXJzID0gdGhpcy5zdGF0ZS5maWx0ZXJzO1xyXG4gICAgICAgIGNvbnN0IF9wYXJhbXMgPSAwICE9PSBPYmplY3Qua2V5cyggZmlsdGVycyApLmxlbmd0aCA/IGA/JHsgcXVlcnlTdHJpbmcuc3RyaW5naWZ5KGZpbHRlcnMpIH1gOiBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLmdldERhdGEoX3BhcmFtcyxmaWx0ZXJzKS50aGVuKFxyXG4gICAgICAgICAgICAoIHJlcyApID0+IHsgdGhpcy5zZXRTdGF0ZSggeyByZXNwb25zZTogcmVzLCBpc0ZldGNoaW5nOiBmYWxzZSB9ICk7IH1cclxuICAgICAgICApLmNhdGNoKCBlID0+IGNvbnNvbGUuZXJyb3IoZSkgKTs7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY2hlY2sgaWYgbmV3IGZpbHRlciBjaGFuZ2VkXHJcbiAgICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKCBuZXh0UHJvcHMsIHByZXZTdGF0ZSApIHtcclxuICAgICAgICBpZiggSlNPTi5zdHJpbmdpZnkoIHByZXZTdGF0ZS5maWx0ZXJzICkgIT09IEpTT04uc3RyaW5naWZ5KCBuZXh0UHJvcHMuZmlsdGVycyApICl7XHJcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnByZXZTdGF0ZSwgZmlsdGVyczogbmV4dFByb3BzLmZpbHRlcnMgfTtcclxuICAgICAgICB9IGVsc2UgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY2hlY2sgaWYgbmV3IGRhdGEgbmVlZHMgdG8gYmUgZmV0Y2hlZCBpbiBjYXNlIGZpbHRlcnMgaGF2ZSBjaGFuZ2VkXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcclxuICAgICAgICBpZiggSlNPTi5zdHJpbmdpZnkoIHRoaXMuc3RhdGUuZmlsdGVycyApICE9PSBKU09OLnN0cmluZ2lmeSggcHJldlN0YXRlLmZpbHRlcnMgKSApe1xyXG4gICAgICAgICAgICBjb25zdCBfcGFyYW1zID0gMCAhPT0gT2JqZWN0LmtleXMoIHRoaXMuc3RhdGUuZmlsdGVycyApLmxlbmd0aCA/IGA/JHsgcXVlcnlTdHJpbmcuc3RyaW5naWZ5KHRoaXMuc3RhdGUuZmlsdGVycykgfWA6IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0RGF0YShfcGFyYW1zLHRoaXMuc3RhdGUuZmlsdGVycykudGhlbihcclxuICAgICAgICAgICAgICAgICggcmVzICkgPT4geyB0aGlzLnNldFN0YXRlKCB7IHJlc3BvbnNlOiByZXMsIGlzRmV0Y2hpbmc6IGZhbHNlIH0gKTsgfVxyXG4gICAgICAgICAgICApLmNhdGNoKCBlID0+IGNvbnNvbGUuZXJyb3IoZSkgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbWFrZSBhbiBBUEkgcmVxdWVzdCBhbmQgc2V0IHRoZSBzdGF0ZSB3aXRoIHRoZSByZWNpZXZlZCByZXNwb25zZVxyXG4gICAgYXN5bmMgZ2V0RGF0YShfcGFyYW1zLGZpbHRlcnMpIHtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSggeyBpc0ZldGNoaW5nOnRydWUgfSApO1xyXG4gICAgICAgIGxldCByZXM7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJlcyA9IGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9hcGkuc3BhY2V4ZGF0YS5jb20vdjMvbGF1bmNoZXM/bGltaXQ9MTAwJHtfcGFyYW1zfWApO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICBpZiggbnVsbCAhPT0gX3BhcmFtcyApIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSggZmlsdGVycywgJ3BhcmFtcycsIGAke19wYXJhbXN9YCk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgfVxyXG4gIFxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgY29uc3QgeyBpc0ZldGNoaW5nLCByZXNwb25zZSB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgLy8gaWYgcmVzcG9uc2UgaGFzIGRhdGEgdGhlbiByZW5kZXIgY2FyZHNcclxuICAgICAgICBpZiggdW5kZWZpbmVkICE9PSByZXNwb25zZSAmJiAwICE9PSBPYmplY3Qua2V5cyggcmVzcG9uc2UgKS5sZW5ndGggJiYgIWlzRmV0Y2hpbmcgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZHNfX2NvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEgJiYgMCA8IHJlc3BvbnNlLmRhdGEubGVuZ3RoID8gcmVzcG9uc2UuZGF0YS5tYXAoICggaXRlbSwgaW5kZXggKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmRzX19jb250YWluZXJfX2NhcmQgaG92ZXInIGtleT17YCR7aXRlbS5taXNzaW9uX25hbWV9XyR7aW5kZXh9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlPjxpbWcgY2xhc3NOYW1lPSdjYXJkc19fY29udGFpbmVyX19jYXJkX19pY29uJyBhbHQ9J01pc3Npb24gTG9nbycgc3JjPXtpdGVtLmxpbmtzLm1pc3Npb25fcGF0Y2ggfHwgJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xNTAnfSB3aWR0aD0nODAlJyBoZWlnaHQ9JzYwJScvPjwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmRzX19jb250YWluZXJfX2NhcmRfX2luZm8nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmRzX19jb250YWluZXJfX2NhcmRfX2luZm9fX3RpdGxlJz57YCR7aXRlbS5taXNzaW9uX25hbWV9ICMgJHtpdGVtLmZsaWdodF9udW1iZXJ9YH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkc19fY29udGFpbmVyX19jYXJkX19pbmZvX19pdGVtJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2NhcmRzX19jb250YWluZXJfX2NhcmRfX2luZm9fX2l0ZW1fX2tleSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWlzc2lvbiBJZHMgOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nY2FyZHNfX2NvbnRhaW5lcl9fY2FyZF9faW5mb19faXRlbV9fbGlzdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLm1pc3Npb25faWQubWFwKCAoIG1pc3Npb24gKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J2NhcmRzX19jb250YWluZXJfX2NhcmRfX2luZm9fX2l0ZW1fX3ZhbHVlJyBrZXk9e21pc3Npb259PiB7bWlzc2lvbn08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZHNfX2NvbnRhaW5lcl9fY2FyZF9faW5mb19faXRlbSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjYXJkc19fY29udGFpbmVyX19jYXJkX19pbmZvX19pdGVtX19rZXknPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExhdW5jaCBZZWFyIDogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nY2FyZHNfX2NvbnRhaW5lcl9fY2FyZF9faW5mb19faXRlbV9fdmFsdWUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmxhdW5jaF95ZWFyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmRzX19jb250YWluZXJfX2NhcmRfX2luZm9fX2l0ZW0nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nY2FyZHNfX2NvbnRhaW5lcl9fY2FyZF9faW5mb19faXRlbV9fa2V5Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdWNjZXNzZnVsIExhdW5jaCA6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2NhcmRzX19jb250YWluZXJfX2NhcmRfX2luZm9fX2l0ZW1fX3ZhbHVlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IG51bGwgPT09IGl0ZW0ubGF1bmNoX3N1Y2Nlc3MgPyAnbnVsbCc6aXRlbS5sYXVuY2hfc3VjY2Vzcy50b1N0cmluZygpIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkc19fY29udGFpbmVyX19jYXJkX19pbmZvX19pdGVtJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nY2FyZHNfX2NvbnRhaW5lcl9fY2FyZF9faW5mb19faXRlbV9fa2V5Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdWNjZXNzZnVsIExhbmRpbmcgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2NhcmRzX19jb250YWluZXJfX2NhcmRfX2luZm9fX2l0ZW1fX3ZhbHVlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IG51bGwgPT09IGl0ZW0ucm9ja2V0LmZpcnN0X3N0YWdlLmNvcmVzWzBdLmxhbmRfc3VjY2VzcyA/ICdudWxsJzppdGVtLnJvY2tldC5maXJzdF9zdGFnZS5jb3Jlc1swXS5sYW5kX3N1Y2Nlc3MudG9TdHJpbmcoKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSkgOiA8ZGl2IGNsYXNzTmFtZT0nbm8tZGF0YSc+Tm8gRGF0YSBGb3VuZDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSBpZiggaXNGZXRjaGluZyApIHsgLy8gaWYgdGhlIGNvbXBvbmVudCBpcyBmZXRjaGluZyBkYXRhIHNob3cgcHJlbG9hZGVyc1xyXG4gICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZHNfX2NvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgWzEsMiwzLDRdLm1hcCggKHZhbCxpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiggPGRpdiBjbGFzc05hbWU9J2NhcmRzX19jb250YWluZXJfX2NhcmRfX3ByZWxvYWRlcicga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkc19fY29udGFpbmVyX19jYXJkX19pY29uX19wcmVsb2FkZXInPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZHNfX2NvbnRhaW5lcl9fY2FyZF9faW5mb19fcHJlbG9hZGVyJz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmRzX19jb250YWluZXJfX2NhcmRfX2luZm9fX3ByZWxvYWRlcic+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkc19fY29udGFpbmVyX19jYXJkX19pbmZvX19wcmVsb2FkZXInPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkczsiXSwic291cmNlUm9vdCI6IiJ9