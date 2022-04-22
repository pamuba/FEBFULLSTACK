const express = require('express')
const app = express()
const todoRoutes = require('./routes/todo.routes')
const mongodb = require('./mongodb/mongodb.connect')

mongodb.connect();

app.use(express.json())

//localhost/todos
app.use("/todos", todoRoutes)

app.use((error, req, res, next)=>{
    res.status(500).json({message:error.message})
})

app.get("/", (req, res)=>{
    res.json("Hello World")
})

// app.listen(3000, ()=>{
//     console.log("Server is running")
// })

module.exports = app;