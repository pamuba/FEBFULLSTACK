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
}).listen(3000)