// creating server

let http = require('http');

let server = http.createServer((req, res)=>{

    res.writeHead(200, {'Content-type':"text/html"});
    res.write('<h1>Hello, world!!. This nodeJS server</h1>')
    
    res.end('End of The nodeJS server')
})

server.listen(8080, ()=>{
    console.log("server is running on http://localhost:8080")
})