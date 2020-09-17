exports.ids = [6];
exports.modules = {

/***/ "3G+D":
/***/ (function(module, exports) {



/***/ }),

/***/ "cUxf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Lc87");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Cards_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("3G+D");
/* harmony import */ var _Cards_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Cards_scss__WEBPACK_IMPORTED_MODULE_3__);

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
        className: "cards__container"
      }, response.data && 0 < response.data.length ? response.data.map((item, index) => {
        return __jsx("div", {
          className: "cards__container__card hover",
          key: `${item.mission_name}_${index}`
        }, __jsx("figure", null, __jsx("img", {
          className: "cards__container__card__icon",
          alt: "Mission Logo",
          src: item.links.mission_patch || 'https://via.placeholder.com/150',
          width: "80%",
          height: "60%"
        })), __jsx("div", {
          className: "cards__container__card__info"
        }, __jsx("div", {
          className: "cards__container__card__info__title"
        }, `${item.mission_name} # ${item.flight_number}`), __jsx("div", {
          className: "cards__container__card__info__item"
        }, __jsx("span", {
          className: "cards__container__card__info__item__key"
        }, "Mission Ids :"), __jsx("ul", {
          className: "cards__container__card__info__item__list"
        }, item.mission_id.map(mission => {
          return __jsx("li", {
            className: "cards__container__card__info__item__value",
            key: mission
          }, " ", mission);
        })), __jsx("br", null)), __jsx("div", {
          className: "cards__container__card__info__item"
        }, __jsx("span", {
          className: "cards__container__card__info__item__key"
        }, "Launch Year :"), __jsx("span", {
          className: "cards__container__card__info__item__value"
        }, item.launch_year)), __jsx("div", {
          className: "cards__container__card__info__item"
        }, __jsx("span", {
          className: "cards__container__card__info__item__key"
        }, "Successful Launch :"), __jsx("span", {
          className: "cards__container__card__info__item__value"
        }, null === item.launch_success ? 'null' : item.launch_success.toString())), __jsx("div", {
          className: "cards__container__card__info__item"
        }, __jsx("span", {
          className: "cards__container__card__info__item__key"
        }, "Successful Landing :"), __jsx("span", {
          className: "cards__container__card__info__item__value"
        }, null === item.rocket.first_stage.cores[0].land_success ? 'null' : item.rocket.first_stage.cores[0].land_success.toString()))));
      }) : __jsx("div", {
        className: "no-data"
      }, "No Data Found"));
    } else if (isFetching) {
      // if the component is fetching data show preloaders
      return __jsx("div", {
        className: "cards__container"
      }, [1, 2, 3, 4].map((val, index) => {
        return __jsx("div", {
          className: "cards__container__card__preloader",
          key: index
        }, __jsx("div", {
          className: "cards__container__card__icon__preloader"
        }), __jsx("div", {
          className: "cards__container__card__info__preloader"
        }), __jsx("div", {
          className: "cards__container__card__info__preloader"
        }), __jsx("div", {
          className: "cards__container__card__info__preloader"
        }));
      }));
    } else return null;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Cards);

/***/ })

};;