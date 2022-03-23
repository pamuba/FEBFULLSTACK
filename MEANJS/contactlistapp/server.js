var express = require('express')

var app = express();

app.get("/", function(req, res){
    res.send("Hello World from Server.js")
})

app.listen(3000, function(err){
    if(!err){
        console.log("Server Running @3000")
    }
    else{
        console.log("ERROR!!!!")
    }
})
