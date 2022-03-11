"use strict";

// function Student(){
//     this.name = "John"
//     this.gender = "Male"
// }
// Student.prototype.age = 15;
// // Student.prototype.dis = function(){
// //     console.log(name+" "+gender)
// // }
// //1. allocate memory
// //2. return the add of that memory
// var stdObj1 = new Student();
// // stdObj1.age = 15;
// console.log(stdObj1.age)
// var stdObj2 = new Student();
// console.log(stdObj2.age)
var dragon = {
  name: "Tanya",
  fire: true,
  fight: function fight() {
    return 10;
  },
  sing: function sing() {
    if (this.fire) {
      return "I  am ".concat(this.name, ", the breather of fire");
    }
  }
};
var lizard = {
  name: "Kiki",
  fight: function fight() {
    return 1;
  }
};