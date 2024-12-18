import * as express from 'express'

let app:any = express();

app.get('/sample/:uname/:upwd', (req:any, res:any)=>{
    // res.status(200).json({"message":"Testing get call"})
    let uname = req.params.uname
    let upwd = req.params.upwd  

    if(uname === 'tony' && upwd === 'chopper'){
        res.status(200).json({"login":"Successful"})
    }else{
        res.status(200).json({"login":"Failed"})
    }
    // ( uname === ' tony' && upwd === 'chopper') ? res.status(200).json({"login":"Successful"}) : res.status(200).json({"login":"failed"})
    console.log(uname, upwd)
})

app.listen(8080, ()=>{
    console.log('server is running on port number: 8080')
})


// so if we have the query parameter in the url and we need to read it and check...  
// http://localhost/sample/?uname=tony&upwd=chopper