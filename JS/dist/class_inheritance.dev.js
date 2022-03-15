"use strict";

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// class A{
//     constructor(x){
//         this.a = x
//     }
// }
// class B extends A{
//     constructor(x,y){
//         super(x)
//         this.b = y
//     }
// }
// class C extends B{
//     constructor(x,y,z){
//         super(x,y)
//         this.c = z
//     }
//     dis(){
//         console.log(`A:${this.a} B:${this.b} C:${this.c}`)
//     }
// }
// // a variable can be initialized by its own ctr
// let objC = new C(11, 22,33)
// objC.dis()
var God =
/*#__PURE__*/
function () {
  function God() {
    _classCallCheck(this, God);
  }

  _createClass(God, [{
    key: "hi",
    value: function hi() {
      console.log("Hii From GOD");
    }
  }]);

  return God;
}();

var Human =
/*#__PURE__*/
function (_God) {
  _inherits(Human, _God);

  function Human(name, height) {
    var _this;

    _classCallCheck(this, Human);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Human).call(this));
    _this.name = name;
    _this.height = height;
    return _this;
  }

  _createClass(Human, [{
    key: "hello",
    value: function hello() {
      console.log("Hello I am ".concat(this.name, " from the Human Class"));
    }
  }]);

  return Human;
}(God); // console.log(Human)
// let human = new Human("John", 5.5)
// console.log(human)
// human.hello()
// human.hi()


var John =
/*#__PURE__*/
function (_Human) {
  _inherits(John, _Human);

  function John(name, height, weight) {
    var _this2;

    _classCallCheck(this, John);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(John).call(this, name, height));
    _this2.weight = weight;
    return _this2;
  }

  _createClass(John, [{
    key: "hello",
    value: function hello() {
      // console.log("Hello from John class")
      _get(_getPrototypeOf(John.prototype), "hello", this).call(this);
    }
  }]);

  return John;
}(Human);

var jhn = new John("John Smith", 5, 5, 60);
jhn.hello();