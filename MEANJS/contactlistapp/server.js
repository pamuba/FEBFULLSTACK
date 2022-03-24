var express = require('express')
var mongojs = require('mongojs')
// var bodyParser = require('body-parser')
var db = mongojs('contactlist', ['contactlist'])

var app = express();

//ROUTES
// app.get("/", function(req, res){
//     res.send("Hello World from Server.js")
// })

//parser for req.body
app.use(express.json())
// app.use(bodyParser.json())


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

app.post('/contactlist', function(req, res){
    console.log(req.body)
    db.contactlist.insert(req.body, function(err, docs){
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
