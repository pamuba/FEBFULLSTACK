var express = require('express')
var mongojs = require('mongojs')
var db = mongojs('contactlist', ['contactlist'])

var app = express();

//ROUTES
// app.get("/", function(req, res){
//     res.send("Hello World from Server.js")
// })



app.use(express.static(__dirname+'/public'))


//routes
app.get('/contactlist', function(req, res){
    console.log("Express Server received the get call from Angular")

    db.contactlist.find(function(err, docs){
        if(docs != null)
            res.json(docs)
        else{
            console.log(err)
        }
    })
})

app.listen(3000, function(err){
    if(!err){
        console.log("Server Running @3000")
    }
    else{
        console.log("ERROR!!!!")
    }
})
