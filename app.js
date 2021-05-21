const http = require('http');

const server = http.createServer((req,res)=> {
    if(req.url ==='/'){
        console.log(req)
        res.end('Welcome to our home page');
    }
    if(req.url ==='/about') {
        res.end('Welcome');
    }
    
})

server.listen(5000)