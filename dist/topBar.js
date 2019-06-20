"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _moment = _interopRequireDefault(require("moment"));

var _constants = require("./constants");

var _prev_arrow = _interopRequireDefault(require("./images/prev_arrow.svg"));

var _next_arrow = _interopRequireDefault(require("./images/next_arrow.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n\n  > * {\n    margin-bottom: 5%;\n    margin-top: 3%;\n  }\n\n  > img {\n    user-select: none;\n    cursor: pointer;\n    color: ", ";\n    transition: 0.5s ease all;\n    margin-left: 5px;\n    margin-right: 5px;\n  }\n\n  > img:hover {\n    filter: brightness(0);\n  }\n\n  > span {\n    font-size: 1.35em;\n    color: #424242;\n    animation: ", " 0.5s ease;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents["default"].div(_templateObject(), _constants.COLORS.gray, _constants.fadeIn);

var TopBar =
/*#__PURE__*/
function (_Component) {
  _inherits(TopBar, _Component);

  function TopBar() {
    _classCallCheck(this, TopBar);

    return _possibleConstructorReturn(this, _getPrototypeOf(TopBar).apply(this, arguments));
  }

  _createClass(TopBar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          date = _this$props.date,
          onPrevClick = _this$props.onPrevClick,
          onNextClick = _this$props.onNextClick,
          titleTextStyle = _this$props.titleTextStyle;
      return _react["default"].createElement(Container, null, _react["default"].createElement("img", {
        src: _prev_arrow["default"],
        onClick: onPrevClick,
        alt: "previous month"
      }), _react["default"].createElement("span", {
        key: date.format(),
        style: titleTextStyle
      }, date.format('MMMM YYYY').toUpperCase()), _react["default"].createElement("img", {
        src: _next_arrow["default"],
        onClick: onNextClick,
        alt: "next month"
      }));
    }
  }]);

  return TopBar;
}(_react.Component);

exports["default"] = TopBar;

_defineProperty(TopBar, "propTypes", {
  date: _propTypes["default"].instanceOf(_moment["default"]).isRequired,
  onPrevClick: _propTypes["default"].func,
  onNextClick: _propTypes["default"].func,
  titleTextStyle: _propTypes["default"].object
});

_defineProperty(TopBar, "defaultProps", {
  onPrevClick: function onPrevClick() {},
  onNextClick: function onNextClick() {}
});