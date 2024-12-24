import * as express from 'express'

// creating the rest object

let app:any = express();

// creating the rest calls

app.get('/products', (req:any, res: any):any=>{
    res.status(200).json({"Message":"Data from the get call"})
})

let port:any = process.env.PORT || 8080

app.listen(port,()=>{
    console.log("server is running on the port number 8080")
})