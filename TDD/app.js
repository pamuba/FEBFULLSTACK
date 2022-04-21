const express = require('express')
const app = express()
const todoRoutes = require('./routes/todo.routes')

app.use(express.json())

//localhost/todos
app.use("/todos", todoRoutes)

app.get("/", (req, res)=>{
    res.json("Hello World")
})

app.listen(3000, ()=>{
    console.log("Server is running")
})

module.exports = app;