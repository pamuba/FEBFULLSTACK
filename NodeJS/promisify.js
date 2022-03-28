const fs = require('fs')
const util = require('util')
const read = util.promisify(fs.readFile)

var run = async() => {
    //Promise Way
    read('readMe1.txt', 'utf-8')
        .then(data=>{
            console.log(data)
        })
        .catch(err=>{
            console.log(err.message)
        })

    //async/await way
    // try{
    //     const data = await read('readMe1.txt')
    //     console.log(data.toString())
    // }
    // catch(err){
    //     console.log(err.message)
    // }
   
}

run()