const mongoose = require('mongoose')

async function connect(){
    try{
        await mongoose.connect('mongodb://localhost:27017/todo-tdd'),
        { useUnifiedTopology: true }, { useNewUrlParser: true }
    }
    catch(err){
        console.log(err)
        console.log('Error Connecting to MongoDB')
    }
}

module.exports = {connect}