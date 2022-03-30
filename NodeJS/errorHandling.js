// var divideSync = function(x,y){
//     if(y===0)
//     {
//         //"throw the error safely by returning it"
//         return new Error("Cant divide by zero")
//         //throw new Error("Cant divide by zero")
//     }
//     else{
//         return x/y;
//     }
// }
// // console.log(divideSync(33,11))
// // console.log(divideSync(33,0))
// // try{
// //     c = divideSync(33,11)
// //     throw c
// //     // console.log(divideSync(33,0))
// // }
// // catch(e){
// //     console.log("Inside Catch")
// //     console.log(e.message)
// // }

// var result = divideSync(9,3)
// //did an error occour
// if(result instanceof Error)
// {
//     console.log("Err=", result)
// }
// else{
//     console.log("Result=", result)
// }

/////////////////////////////////////////////////////////////

// var divide = function(x,y, next){
//     if(y===0)
//     {
//         //"throw the error safely by returning it"
//         next(new Error("Cant divide by zero"))
//         //throw new Error("Cant divide by zero")
//     }
//     else{
//         next(null,x/y);
//     }
// }

// // divide(9,3, function(err, result){
// //     //did we have an error
// //     if(err)
// //     {
// //         //handle error
// //         console.log("Error=",err)
// //     }
// //     else{
// //         console.log("Result=", result)
// //     }
// // })

// divide(9,0, function(err, result){
//     //did we have an error
//     if(err)
//     {
//         //handle error
//         console.log("Error=",err.message)
//     }
//     else{
//         console.log("Result=", result)
//     }
// })

//////////////////////////////////////////////////////////////
// var events = require('events')
// var util = require('util')

// var Divider = function(){
//     events.EventEmitter.call(this)
// }

// util.inherits(Divider, events.EventEmitter)

// //add the divide fn to the prototype
// Divider.prototype.divide = function(x,y){
//     if(y===0)
//     {
//         let err = new Error("Cant divide by zero")
//         this.emit("error", err)
//     }
//     else{
//         this.emit("divided",x,y,x/y)
//     }
//     return this;
// }

// //create our divider and listen for errors
// var divider = new Divider()
// divider.on('error', function(err){
//     console.log(err.message)
// })
// divider.on('divided', function(x,y,result){
//     console.log(x+"/"+y+"="+result)
// })


// divider.divide(9,0)

//try catch(sync)
//callbacks
//events
