// import express module

import * as express from "express"

let app:any = express();
// app object is used to develop the rest services, Ex: GET, POST, PUT, DELETE, TRACE


app.get('/data',(req:any, res:any)=>{
    res.status(200).json({"message":'Welcome to typescript'})
});

app.listen(8080,()=>{
    console.log('server running on 8080')
})