
import * as express from 'express'

//created a module
let accounts: any = express.Router();

//creating the get request
accounts.get('/', (req:any,res:any):any=>{
    res.status(200).json({"message":"Data from the account module"})
})

accounts.get("/login", (req:any, res:any) =>{
    if(req.query.uname === 'tony' && req.query.upwd === 'chopper'){
        res.status(200).json({message:'login success'})
    }else{
        res.status(401).json({message:'login fail....'})
    }
    
})
//exporting the module
export default accounts