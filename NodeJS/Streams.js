const fs = require('fs')

// let readStream = fs.createReadStream(__dirname+'/readMe.txt', 'utf-8')
// readStream.on('data', function(chunk){
//     console.log("=================================================")
//     console.log(chunk)
//     console.log("=================================================")
// })

// process.on('exit', function(){
//     console.log("Program Finished")
// })

let readStream = fs.createReadStream(__dirname+'/readMe.txt', 'utf-8')
let writeStream = fs.createWriteStream(__dirname+'/writeMe.txt', 'utf-8')

// readStream.on('data', function(chunk){
//     console.log("Chiunk Received")
//     writeStream.write(chunk)
// })

readStream.pipe(writeStream)
