"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _topBar = _interopRequireDefault(require("./topBar"));

var _tableHeaders = _interopRequireDefault(require("./tableHeaders"));

var _tableContent = _interopRequireDefault(require("./tableContent"));

var _constants = require("./constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  border-spacing: 4px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 90%;\n  max-width: 1000px;\n  min-width: 300px;\n  padding: 1%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents["default"].div(_templateObject());

var Table = _styledComponents["default"].table(_templateObject2(), _constants.COLORS.gray);

var CalendarMonthView =
/*#__PURE__*/
function (_Component) {
  _inherits(CalendarMonthView, _Component);

  function CalendarMonthView() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CalendarMonthView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CalendarMonthView)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      date: (0, _moment["default"])().startOf('month'),
      // always set moment to the start of the month (days don't matter)
      smallCalendar: false // detects if the calendar should be rendered with the small calendar style

    });

    _defineProperty(_assertThisInitialized(_this), "_handleWindowResize", function () {
      var smallCalendar = _this.state.smallCalendar;

      if (_this.calendar.clientWidth <= _constants.SMALL_CALENDAR_WIDTH && !smallCalendar) {
        _this.setState({
          smallCalendar: true
        });
      } else if (_this.calendar.clientWidth > _constants.SMALL_CALENDAR_WIDTH && smallCalendar) {
        _this.setState({
          smallCalendar: false
        });
      }
    });

    return _this;
  }

  _createClass(CalendarMonthView, [{
    key: "componentDidMount",
    // tracks the size of the component through window resize events
    value: function componentDidMount() {
      this._handleWindowResize();

      window.addEventListener('resize', this._handleWindowResize);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this._handleWindowResize);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          date = _this$state.date,
          smallCalendar = _this$state.smallCalendar;
      var _this$props = this.props,
          renderDay = _this$props.renderDay,
          style = _this$props.style,
          titleTextStyle = _this$props.titleTextStyle,
          dayNameTextStyle = _this$props.dayNameTextStyle,
          dayTextStyle = _this$props.dayTextStyle,
          activeDayStyle = _this$props.activeDayStyle,
          inactiveDayStyle = _this$props.inactiveDayStyle;
      return _react["default"].createElement(Container, {
        ref: function ref(_ref) {
          return _this2.calendar = _ref;
        },
        style: style
      }, _react["default"].createElement(_topBar["default"], {
        date: date,
        onPrevClick: function onPrevClick() {
          return _this2.setState({
            date: date.subtract(1, 'month')
          });
        },
        onNextClick: function onNextClick() {
          return _this2.setState({
            date: date.add(1, 'month')
          });
        },
        titleTextStyle: titleTextStyle
      }), _react["default"].createElement(Table, null, _react["default"].createElement("tbody", null, _react["default"].createElement(_tableHeaders["default"], {
        dayNameTextStyle: dayNameTextStyle
      }), _react["default"].createElement(_tableContent["default"], {
        date: date,
        smallCalendar: smallCalendar,
        renderDay: renderDay,
        dayTextStyle: dayTextStyle,
        activeDayStyle: activeDayStyle,
        inactiveDayStyle: inactiveDayStyle
      }))));
    }
  }]);

  return CalendarMonthView;
}(_react.Component);

exports["default"] = CalendarMonthView;

_defineProperty(CalendarMonthView, "propTypes", {
  // renderDay is a callback, which allows custom rendering of the given date onto the div
  // render day is called with a parameter for ISO-8601 string of the current day
  renderDay: _propTypes["default"].func,
  style: _propTypes["default"].object,
  titleTextStyle: _propTypes["default"].object,
  dayNameTextStyle: _propTypes["default"].object,
  dayTextStyle: _propTypes["default"].object,
  activeDayStyle: _propTypes["default"].object,
  inactiveDayStyle: _propTypes["default"].object
});

_defineProperty(CalendarMonthView, "defaultProps", {
  renderDay: function renderDay() {}
});