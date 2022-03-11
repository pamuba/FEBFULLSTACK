"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var A = function A(x) {
  _classCallCheck(this, A);

  this.a = x;
};

var B =
/*#__PURE__*/
function (_A) {
  _inherits(B, _A);

  function B(y) {
    var _this;

    _classCallCheck(this, B);

    _this.b = y;
    return _possibleConstructorReturn(_this);
  }

  return B;
}(A);

var C =
/*#__PURE__*/
function (_B) {
  _inherits(C, _B);

  function C(z) {
    var _this2;

    _classCallCheck(this, C);

    _this2.c = z;
    return _possibleConstructorReturn(_this2);
  }

  return C;
}(B);

var objC = new C(11);