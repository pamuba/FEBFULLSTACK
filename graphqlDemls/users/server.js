const express = require('express')
const expressGraphQL = require('express-graphql').graphqlHTTP
const schema = require('./schema/schema')

const app = express()

app.use('/graphql',expressGraphQL({
    schema,
    graphiql: true
}))

app.listen(4000, ()=>{
    console.log("Server Listening @4000")
})