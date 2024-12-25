//Importing modules

const express = require('express')
const cookie_parser = require('cookie-parser');

//creating the rest object
let app = express()


// use cookies parser module

app.use(cookie_parser());

// creating the get request
app.get("/setCookie", (req, res)=>{
    res.cookie('tony','node')
    res.cookie('Sniper_King', 'vue.js');
    res.cookie('Backend', 'vue.js' ,{maxAge:60000});
    res.send({"mesg":"Cookies are set successfully"})
})

// to get the cookies
app.get('/getCookies', (req, res) =>{
    res.send(req.cookies)
})

// Clear the cookies

app.get('/clearCookies', (req, res)=>{
    res.clearCookie('tony')
    res.clearCookie("Sniper_king")
    res.send({"Mesg":"Cookies are cleared"})
})

//assigning to the port 

app.listen(8080,()=>{
    console.log("Server is running on port 8080")
})