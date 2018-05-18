"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var pick = exports.pick = function pick(obj, keys) {
  var r = {};
  keys.forEach(function (key) {
    r[key] = obj[key];
  });
  return r;
};

var debounce = exports.debounce = function debounce(fn) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;

  var timer = null;

  return function () {
    var _this = this;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    clearTimeout(timer);

    timer = setTimeout(function () {
      fn.apply(_this, args);
    }, delay);
  };
};