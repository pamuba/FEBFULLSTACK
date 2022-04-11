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

let refreshTokens = []

app.post('/token', (req, res)=>{
  const refreshToken = req.body.token
  if(refreshToken == null) return res.sendStatus(401)
  if(!refreshTokens.includes(refreshToken)) return res.sendStatus(403)
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user)=>{
    if(err) return res.sendStatus(403)
    const accessToken = generateAccessToken({name:user.name})
    res.json({accessToken:accessToken})
  })
})

app.get("/posts", authenticateToken, (req, res)=>{
    // res.json(req.user.name)
    res.json(posts.filter(post => post.username ===  req.user.name))
})

app.post('/login', (req, res)=>{
    //Authenticate the user(username, password)

    const username = req.body.username
    const user = { name: username }

    //create the jwt by using sign fn
    const accessToken = generateAccessToken(user)
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
    refreshTokens.push(refreshToken)
    res.json({accessToken:accessToken, refreshToken:refreshToken})
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

function generateAccessToken(user){
  return jwt.sign(user, process.env.ACESS_TOKEN_SECRET, {expiresIn:'30s'})
}

app.listen(4000)