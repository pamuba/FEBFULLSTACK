var express = require('express')

var app = express();

//ROUTES
// app.get("/", function(req, res){
//     res.send("Hello World from Server.js")
// })


app.use(express.static(__dirname+'/public'))

app.listen(3000, function(err){
    if(!err){
        console.log("Server Running @3000")
    }
    else{
        console.log("ERROR!!!!")
    }
})
