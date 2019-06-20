"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fadeIn = exports.SMALL_CALENDAR_WIDTH = exports.COLORS = void 0;

var _styledComponents = require("styled-components");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  from {\n    opacity: 0.2\n  }\n  to {\n    opacity: 1\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var COLORS = {
  verylightgray: '#F8F8F8',
  lightgray: '#F0F0F0',
  gray: '#656565'
};
exports.COLORS = COLORS;
var SMALL_CALENDAR_WIDTH = 500;
exports.SMALL_CALENDAR_WIDTH = SMALL_CALENDAR_WIDTH;
var fadeIn = (0, _styledComponents.keyframes)(_templateObject());
exports.fadeIn = fadeIn;