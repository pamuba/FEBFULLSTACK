"use strict";

//everything is an object
//functions are objects
//functions(objects) can be returned from other funs
//functions(objects) can be passed as arguments
var add = function add(x, y) {
  return x + y;
};

console.log(add(3, 4)); //1.Arrow fns doesnt have the this keyword