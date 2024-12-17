// Importing http module, So it returns the object module
let http = require('http');

// Using createServer function will create server to the http module object server...
let server = http.createServer((req, res)=>{

    // Is the Mime:It will tell the formate of the file
    res.writeHead(200, {'Content-type':"text/html"});
    res.write('<h1>Hello, world!!. This nodeJS server</h1>')
    res.end('End of The nodeJS server')
})

// Here we are listening the server to the 8080 port number..
server.listen(8080, ()=>{
    console.log("server is running on http://localhost:8080")
})