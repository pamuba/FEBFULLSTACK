"use strict";

var _console;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

//args  === array
//arguments === array like ds
// function sum(...args){
//    let sum = 0
//    for(let a of args)
//    {
//         sum += a
//    }
//    console.log(args instanceof Array)
//    return sum
// }
// console.log(sum(1,2,3))
// console.log(sum(11,22,33,44))
// function sum(){
//     let sum = 0
//     for(let a of arguments)
//     {
//          sum += a
//     }
//     console.log(arguments instanceof Array)
//     return sum
//  }
//  console.log(sum(1,2,3))
//  console.log(sum(11,22,33,44))
arr = [3, 4, 2, 1, 4, 3, 5];
arr1 = [1, 2, 3, 59];
arr3 = [].concat(_toConsumableArray(arr), _toConsumableArray(arr1), [111, 222]);
console.log(Math.max.apply(Math, _toConsumableArray(arr).concat(_toConsumableArray(arr1))));
var name = "John";

(_console = console).log.apply(_console, _toConsumableArray(name));

a = 45;
b = 99;
var _ref = [b, a];
a = _ref[0];
b = _ref[1];
console.log("a:".concat(a, " b:").concat(b));