//promise(resolve(result), reject(error))

let promise = new Promise(function(resolve, reject){
   //code the promise should execute
   setTimeout(
    // ()=>resolve("Data fetched successfully"), 2000
    ()=>reject("Not Done"), 2000
   )
});

//.then .catch .finally

promise.then(
    result => console.log(result),
    // (err) => console.log(err)
).catch(
    err => console.log(err)
).finally(
    () => console.log("Always Runs")
)