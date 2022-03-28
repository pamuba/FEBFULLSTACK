const express = require('express')

//app is the entire express application
let app = express()
const port = 3000

app.set('view engine', 'ejs')

//define the routes
app.use("/assets", express.static(__dirname+"/public"))

app.use(function(req, res, next){
    console.log("Request URL:", req.url)
    next()
})

app.get("/", function(req, res){
    res.render('index')
})

app.get("/person/:id/:name", function(req, res){
    res.render('person', {ID:req.params.id, NAME:req.params.name})
})

app.listen(port, ()=>{
    console.log("Server Started")
})