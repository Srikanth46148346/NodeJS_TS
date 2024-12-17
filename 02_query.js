
let http = require('http')

let url = require('url')

let server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'}) // Mime
    
    let obj = url.parse(req.url, true).query

    // (obj.uname === 'Tony' && obj.upws === 'Chopper') ? res.write("<h1>Login Success</h1>") : res.write("<h2>Login fail</h2>")
    if(obj.uname === 'tony' && obj.upwd === 'chopper'){
        res.write("<h1>Login Success Enjoy!!!!!!!</h1>")
    }else{
        res.write("<h1>Login fail</h1>")
    }
    res.end();
})

server.listen(8080, ()=>{
    console.log('server running on http://localhost/8080')
})