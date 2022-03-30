var divideSync = function(x,y){
    if(y===0)
    {
        //"throw the error safely by returning it"
        return new Error("Cant divide by zero")
    }
    else{
        return x/y;
    }
}
// console.log(divideSync(33,11))
// console.log(divideSync(33,0))
try{
    c = divideSync(33,0)
    // console.log(divideSync(33,0))
}
catch(e){
    console.log("Inside Catch")
    console.log(e.message)
}