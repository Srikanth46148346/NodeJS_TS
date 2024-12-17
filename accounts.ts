import * as express from 'express'

let accounts:any = express.Router()

accounts.get('/',(req:any,res:any)=>{
    res.status(200).json({"message":"Welcome to the accounts module default "})
})

accounts.get('/accounts',(req:any,res:any)=>{
    res.status(200).json({"message":"Welcome to the accounts module"})
})

accounts.post("/accounts/post",(req:any,res:any)=>{
    res.status(200).json({"message":"This is the post call for the account module"})
})

export default accounts