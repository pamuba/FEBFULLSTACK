"use strict";

function doubleAfter2Seconds(x) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(x * 2);
    }, 2000);
  });
} // let v1, v2,v3
// doubleAfter2Seconds(10).then(
//     v1 => console.log(v1)
// )
// doubleAfter2Seconds(20).then(
//     v2 => console.log(v2)
// )
// doubleAfter2Seconds(30).then(
//     v3 => {console.log(v3)
//     console.log(v1+v2+v3)}
// )
// let sum = doubleAfter2Seconds(10) + doubleAfter2Seconds(20) + doubleAfter2Seconds(30)
//promises can be difficult
// function addPromise(){
//     return new Promise(resolve => {
//         doubleAfter2Seconds(10).then(a=>{
//             doubleAfter2Seconds(20).then(b=>{
//                 doubleAfter2Seconds(30).then(c=>{
//                     resolve(a+b+c)
//                 })
//             })
//         })
//     })
// }
// addPromise().then(r=>{
//     console.log(r)
// })
//async always returns a promise
//await can be used only inside async fn
//exec async sync


function addAsync() {
  var a, b, c;
  return regeneratorRuntime.async(function addAsync$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(doubleAfter2Seconds(10));

        case 2:
          a = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(doubleAfter2Seconds(20));

        case 5:
          b = _context.sent;
          _context.next = 8;
          return regeneratorRuntime.awrap(doubleAfter2Seconds(30));

        case 8:
          c = _context.sent;
          return _context.abrupt("return", a + b + c);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  });
}

addAsync().then(function (r) {
  console.log(r);
});