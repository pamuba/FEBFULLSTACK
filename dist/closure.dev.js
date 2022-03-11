"use strict";

function outer(a, b) {
  var outerA = 99;
  return function inner() {
    var c = 99; //captured

    console.log(outerA);
    console.log(a);
    console.log(b);

    function innermost() {
      console.log(outerA);
      console.log(a);
      console.log(b);
      console.log(c);
    }

    innermost();
  }; //inner()
}

var innr = outer(11, 22);
setTimeout(function () {
  innr();
}, 2000);