import * as express from 'express'

//creatinf the module using the router function
let cards: any = express.Router();

// creating the rest calls

cards.get('/',(req:any,res:any):any=>{
    res.status(200).json({"cards":'to get the data from the card module'})
})


cards.get("/cards", (req:any,res:any):any=>{
    if(req.query.uname === 'tony' && req.query.upwd === 'chopper'){
        res.status(200).json({cards:'to get the data from the card module'})
    }else{
        res.status(401).json({cards:'unauthorized user'})
    }
    
})

export default cards