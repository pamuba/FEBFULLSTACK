var express = require('express')

var app = express();

//ROUTES
// app.get("/", function(req, res){
//     res.send("Hello World from Server.js")
// })



app.use(express.static(__dirname+'/public'))


//routes
app.get('/contactlist', function(req, res){
    console.log("Express Server received the get call from Angular")

    person1 = {
        name : "John",
        email : "john@gmail.com",
        number : "(111) 111-1111"
    }
    person2 = {
        name : "Jill",
        email : "jill@gmail.com",
        number : "(222) 222-2222"
    }
    person3 = {
        name : "Mill",
        email : "mill@gmail.com",
        number : "(333) 333-333"
    }
    var contactlist = [person1, person2, person3]

    res.json(contactlist)
})

app.listen(3000, function(err){
    if(!err){
        console.log("Server Running @3000")
    }
    else{
        console.log("ERROR!!!!")
    }
})
