let fs = require('fs')

//async
try{
    let data = fs.readFileSync('readMe.txt', 'utf-8')
    console.log(data)
    fs.writeFileSync('writeMe.txt', data)
}
catch(er){
    console.log(er.message)
}

