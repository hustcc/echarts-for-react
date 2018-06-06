"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable import/prefer-default-export */

var pick = exports.pick = function pick(obj, keys) {
  var r = {};
  keys.forEach(function (key) {
    r[key] = obj[key];
  });
  return r;
};