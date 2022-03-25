let fs = require('fs')

//sync
// try{
//     let data = fs.readFileSync('readMe.txt', 'utf-8')
//     console.log(data)
//     fs.writeFileSync('writeMe.txt', data)
// }
// catch(er){
//     console.log(er.message)
// }


//async
//try catch === callbacks
// fs.readFile('readMe.txt', 'utf-8', function(err, data){
//     if(err === null){
//         console.log(data)
//         fs.writeFile('writeMe.txt', data, function(err){
//             if(err != null)
//             {
//                 console.log(err.message)
//             }
//             else{
//                 console.log("The File Written Successfully")
//             }
//         })
//     }
//     else{
//         console.log(err.message)
//     }
// })

//deleting a file
// fs.unlink('writeMe.txt', (err)=>{
//     if(err != null){
//         console.log(err.message)
//     }
//     else{
//         console.log("File Deleted Successfully")
//     }
// })


//creating a folder
// fs.mkdir('folder', (err)=>{
//     if(err != null){
//         console.log(err.message)
//     }
//     else{
//         console.log("Folder Created Successfully")
//     }
// })

//deleting a folder
// fs.rmdir('folder', (err)=>{
//     if(err != null){
//         console.log(err.message)
//     }
//     else{
//         console.log("Folder Deleted Successfully")
//     }
// })


//WAP to delete a non empty folder

