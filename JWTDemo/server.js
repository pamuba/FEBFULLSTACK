require('dotenv').config()
const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')

//body parser
app.use(express.json())

const posts = [
   {
     username:"John",
     title:"Post1"
   },
   {
     username:"Jill",
     title:"Post2"
   },
]

app.get("/posts", authenticateToken, (req, res)=>{
    // res.json(req.user.name)
    res.json(posts.filter(post => post.username ===  req.user.name))
})

function authenticateToken(req, res, next){
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  //Bearer TOKEN
  if(token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.ACESS_TOKEN_SECRET, (err, user)=>{
      if(err) return res.sendStatus(403)
      req.user = user
      next()
  })

}

app.listen(3000)