
//import the express module
let express = require("express")

// create the rest object

let app = express();
// app object is the rest object..
// so where we use app object develop the rest services..... GET, POST, DELETE, TRACE, OPTION, PUT


app.get("/products", (req,res)=>{
    res.status(200).json({"message":'Product Data from Mongodb....!!'})
})


app.get("/products/list", (req, res)=>{
    // this is the rest service
    res.status(200).json({"message": 'List of products data....!!'})
})


app.post("/products", (req, res)=>{
    res.status(200).json({"message":"Default post request..."})
})

app.post("/products/list",(req,res)=>{
    res.status(200).json({"message":"Data from cassandrea database....!!"})
})


app.listen(8080,()=>{
    console.log('server is running on 8080 port')
});