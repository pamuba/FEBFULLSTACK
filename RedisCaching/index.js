const express = require('express')
const fetch = require('node-fetch')
//AMD CommonJS
// import fetch from 'node-fetch'
const redis = require('redis')

const PORT = process.env.PORT || 5000
const REDIS_PORT = process.env.PORT || 6379

//create the redis client
const client = redis.createClient(REDIS_PORT)

//create the express app
const app = express()

//Set response for display
function setResponse(username, repos){
    return `<h2>${username} has ${repos} Github repos</h2>`
}



//redis implementation
async function getRepos(req, res, next){
    try{
        console.log("Fetching Data....")
        const { username } = req.params;
        const response = await fetch(`https://api.github.com/users/${username}`)
        const data = await response.json()
        const repos = data.public_repos

        //set data to redis
        client.setex(username, 30, repos)

        res.send(setResponse(username, repos))
    }
    catch(err){
        console.log(err.message)
        res.status(500)
    }
}
//http://localhost:5000/repos/pamuba
app.get('/repos/:username', cache, getRepos);

//Cache middleware function
function cache(req, res, next){
    const { username } = req.params
    client.get(username, (err, data) => {
        if(err){}
        if(data !== null){
            res.send(setResponse(username, data))
        }
        else{
            next()
        }
    })
}

//start the express server
app.listen(PORT, (err)=> {
    if(err){}
    else{
        console.log(`App listening on PORT ${PORT}`)
    }
})

//1. Strings
//2. Lists
//3. Hashes
//4. Sets
//5. Sorted Sets
//6. Geospatial
//7. Bitmaps
//8. Streams