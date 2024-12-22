import * as express from 'express'
import * as body_parser from 'body-parser'


// create a rest object: used to create rest services : GET, PUT POST, DELETE...
let app:any = express();

//MIME: 

app.use(body_parser.json())


// recieve form data from client and parse it
app.use(body_parser.urlencoded({extended: false}))


///authorization
let auth:any = (req:any,res:any,next:any ):any=>{
        let allHeader:any = req.headers;
        let token:any = allHeader.token
        if(token === 'tony'){
            // res.status(200).json({"Message":'Token is good'})
            next()
        }else{
            res.status(200).json({auth:"can't access because token is wrong"})
        }
}

app.post("/login",[auth],(req:any,res:any):any=>{
    if(req.body.uname === 'tony' && req.body.upwd === 'chopper'){
        res.status(200).json({logIn:'Login Success'})
    } else{
        res.status(401).json({logIn:"fialed"})
    }
})


app.listen(8080,()=>{
    console.log("Log in success")
})