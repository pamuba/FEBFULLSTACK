const http = require('http')
const fs = require('fs')

// let server = http.createServer(function(req, res){
//     res.writeHead(200, {'Content-Type':'text/html'})
//     res.end("<h2>Hello World<h2>"+" "+req.url)
// });

// server.listen(3000)

http.
     createServer(function(req, res){
         if(req.url === '/'){
             fs.createReadStream(__dirname+"/index.html")
               .pipe(res)
         }
         else if(req.url === '/flag'){
             fs.readFile(__dirname+'/images/flag.png', function(err, data){
                 if(err)
                 {
                     console.log(err.message)
                 }
                 else{
                     res.writeHead(200, {'Content-Type':'text/html'})
                     res.write('<div>')
                     res.write('<img style="height:200px; width:400px" src="data:image/png;base64,')
                     res.write(Buffer.from(data).toString('base64'))
                     res.write('"/></div>')
                     res.end()
                 }
             })
         }
        else if(req.url === '/api'){
            res.writeHead(200, {'Content-Type':'text/json'})

            let obj = {
                firstName:"John",
                lastname:"Smith"
            }
            res.end(JSON.stringify(obj))
        }
        else{
            res.writeHead(404)
            res.end()
        }
}).listen(3000)