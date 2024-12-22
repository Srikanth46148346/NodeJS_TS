const express = require('express')

//creating the rest object
const app = express()

app.get("/demo",(req, res )=>{
    res.send({"message":"Getting data from the demo get call"})
})

//Assign the port.  here port will be set by the cloud platform
let port = process.env.PORT || 8080;

app.listen(port,() =>{
    console.log("server started ")
})