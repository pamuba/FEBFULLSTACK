//everything is an object
//functions are objects
//functions(objects) can be returned from other funs
//functions(objects) can be passed as arguments
//transpilers babel
//babeljs + canIuse
// let add = () => {
//     let sum = 0
//     for(let a of arguments)
//     {
//          sum += a
//     }
//     return sum
// }
// console.log(add(3,4))
//1.Arrow fns doesnt have the this keyword
//borrows the this from parent scope
// let group = {
//     title:"Our Group",
//     students:["John", "Jill", "Jimmy"],
//     showList(){
//         // console.log(this)
//         this.students.forEach(
//             // function(student){
//             //     console.log(this)
//             //     console.log(this.title+':'+student)
//             // }
//             (student)=>{
//                 console.log(this)
//                 console.log(this.title+':'+student)
//             }
//         )
//     }
// }
// group.showList()
//2. cannot use with new(eg with the ctr)
//3. no arguments object
//4. no super
"use strict";