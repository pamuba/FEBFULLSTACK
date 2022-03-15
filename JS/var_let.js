//Scoping rule
// var is scoped to the immediate function body--similar to global
// let is scoped to the immediate context({})--local vars


// function run(){
//     foo = "Foo"
//     let bar = "Bar"
//     console.log(foo+" "+bar)
   
//     {
//         var moo = "Moo"
//         let baz = "Baz"
//         console.log(moo+" "+baz)
//     }
//     // console.log(moo)
//     // console.log(baz)
// }

// run()

// console.log(foo)


// var funcs = []
// //3 elements(functions)
// for (let i = 0; i < 3; i++) {
//     funcs[i] = function(){
//         console.log("VALUE:"+i)
//     }
// }

// for (var j = 0; j < 3; j++) { 
//     funcs[j]();
// }


//HOISTING
// all the variables are moved to the top of the fn and assigned undefined
// function run(){

//     var foo;
//     var id;

//     console.log(foo)
//     console.log(dept)

//     var foo = "FOO"
//     console.log(foo)


//     let dept = "Sales"


//     var id = 8
// }
// run()

//REDECLERATION
var bar = 22
var bar = 99

let foo = 22
let foo = 55

console.log(bar)

