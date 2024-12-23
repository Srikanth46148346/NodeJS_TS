import * as express from 'express'
import * as mongoDB from 'mongodb'
import * as cors from 'cors'
import * as body_perser from 'body-parser'
import fetch from './server'

//creating the rest object
let app:any = express();

app.use(cors());

// set the mime type
app.use(body_perser.json());
app.use(body_perser.urlencoded({extended:true}));

app.use('/products',fetch)


app.listen(8080,()=>{
    console.log('server is running on port number 8080')
})
