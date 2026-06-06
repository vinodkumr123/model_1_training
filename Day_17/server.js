var http = require('http');
http.createServer((req,res)=>{
    res.end("Welcome in socet");
}).listen(3001);