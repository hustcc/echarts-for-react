"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var isEqual = exports.isEqual = function isEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
};

var pick = exports.pick = function pick(obj, keys) {
  var r = {};
  keys.forEach(function (key) {
    r[key] = obj[key];
  });
  return r;
};