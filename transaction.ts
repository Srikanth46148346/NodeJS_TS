// creating the sub module

import * as express from 'express'

// created a router as sub module for the express..
let transaction:any = express.Router();


transaction.get('/',(req:any, res:any)=>{
    res.status(200).json({"message":"Default Data from Transaction file"})
})


transaction.get('/data_TS',(req:any, res:any)=>{
    res.status(200).json({"message":"Data from Transaction file"})
})

transaction.get('/data/2', (req:any,res:any)=>{
    res.status(200).json({"message":"Data from the second data Transaction call"})
})

export default transaction