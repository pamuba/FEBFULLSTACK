"use strict";

//promise(resolve(result), reject(error))
var promise = new Promise(function (resolve, reject) {
  //code the promise should execute
  setTimeout( // ()=>resolve("Data fetched successfully"), 2000
  function () {
    return reject("Not Done");
  }, 2000);
}); //.then .catch .finally

promise.then(function (result) {
  return console.log(result);
} // (err) => console.log(err)
)["catch"](function (err) {
  return console.log(err);
})["finally"](function () {
  return console.log("Always Runs");
});