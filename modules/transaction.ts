import * as express from 'express'


//importing the modules
let transaction: any = express.Router();


//creating the rest calll
transaction.get('/', (req:any,res:any) =>{
    res.status(200).json({"message":"To get the data for the transaction module"})
})



// creating authorization

let auth1 : any = (req:any, res:any, next:any) : any =>{
    let allHeaders:any = req.Headers
    let token = allHeaders.token
    if(token === 'tony'){
        next(); // next function is used to give the judgement
    }else{
        res.status(401).json({auth:"token is wrong"})
    }
}


let auth2 : any = (req:any, res:any, next:any):any=>{
    let allHeaders = req.Headers;
    let wish = allHeaders.wish;
    if(wish === 'Hello'){
        next();
    }else{
        res.status(200).json({wish:"wishing you from the transaction module"})
    }
}

// to get the data from client

transaction.get('/transaction',[auth1,auth2], (req:any,res:any):any =>{
    if( req.query.unmae === 'tony' && req.query.upwd === 'chppper'){
        res.status(200).json({"message":"transaction success"})
    } else{
        res.status(200).json({"message":"transaction failed"})
    }
})


export default transaction