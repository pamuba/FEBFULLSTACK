"use strict";

//everything is an object
//functions are objects
//functions(objects) can be returned from other funs
//functions(objects) can be passed as arguments
//transpilers babel
//babeljs + canIuse
var add = function add(x, y) {
  return x + y;
};

console.log(add(3, 4)); //1.Arrow fns doesnt have the this keyword

var group = {
  title: "Our Group",
  students: ["John", "Jill", "Jimmy"],
  showList: function showList() {
    var _this = this;

    this.students.forEach(function (student) {
      console.log(_this.title + ':' + student);
    });
  }
};
group.showList();