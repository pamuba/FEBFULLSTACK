const fs = require('fs')
const util = require('util')
const read = util.promisify(fs.readFile)

// var run = async() => {
//     //Promise Way
//     read('readMe1.txt', 'utf-8')
//         .then(data=>{
//             console.log(data)
//         })
//         .catch(err=>{
//             console.log(err.message)
//         })

    //async/await way
    // try{
    //     const data = await read('readMe1.txt')
    //     console.log(data.toString())
    // }
    // catch(err){
    //     console.log(err.message)
    // }
   
// }

// run()

// Promise.all([
//     read('readMe.txt'),
//     read("data.txt"),
//     read("data1.txt")
// ])
// .then(data => {
//     const [data1, data2, data3] = data
//     console.log(data1.toString())
//     console.log(data2.toString())
//     console.log(data3.toString())
// })

// var run = async () => {
//     const [data1, data2, data3] = await Promise.all([
//         read('readMe.txt'),
//         read("data.txt"),
//         read("data1.txt")
//     ]);
//     console.log(data1.toString())
//     console.log(data2.toString())
//     console.log(data3.toString())
// }

// run()