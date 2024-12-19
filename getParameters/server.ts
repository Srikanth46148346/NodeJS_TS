import * as express from 'express'

let app:any = express()


//authorization
let auth = (req:any, res:any, next:any)=>{
    let allHeader = req.headers;
    if(allHeader.token === 'tony'){
        next()
    }else{
        res.status(500).json({auth:"authorization failed"})
    }
}

//get request
app.get('/login', (req:any, res:any):any =>{
    if(req.query.uname === 'tony' && req.query.upwd === 'chopper'){
        res.status(200).json({"login":"Success"})
    } else{
        res.status(200).json({"login":"Log in failed"})
    }
})

app.get('/', (req:any, res:any):any=>{
    res.sendFile('C:/Users/LDOKKU/OneDrive - Capgemini/New Docs/OneDrive - Capgemini/Desktop/FS/FE/NodeJS/Apps/getParameters/index.html')
})

app.listen(8080, ()=>{
    console.log("server is running on 8080")
})