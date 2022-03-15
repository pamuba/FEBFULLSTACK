"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getPower;
exports.capitalize = capitalize;
exports.roundToDecimalPlace = roundToDecimalPlace;

function getPower(decimalPlaces) {
  return Math.pow(10, decimalPlaces);
}

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function roundToDecimalPlace(number) {
  var decimalPlaces = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var round = getPower(decimalPlaces);
  return Math.round(number * round) / round;
}