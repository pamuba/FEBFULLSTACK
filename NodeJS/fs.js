let fs = require('fs')

try{
    let data = fs.readFileSync('readMe1.txt', 'utf-8')
    console.log(data)
}
catch(er){
    console.log(er.message)
}

