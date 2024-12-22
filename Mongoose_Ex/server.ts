import * as express from 'express'
import * as body_parser from 'body-parser'
import * as cors from 'cors'
import * as mongoose from 'mongoose'

const mongoURL = 'mongodb://localhost:27017/';

// create the rest object
let app = express()

// enable the cors policy
app.use(cors())

//set json as a mime type
app.use(body_parser.json())

// parse the client data
app.use(body_parser.urlencoded({extended:false}))

// connect to the mongodb client

 const Schema:any = mongoose.connect(mongoURL);

 // define and intialise schema
 const schema = mongoose.Schema;

 const empoyeeSchema = new Schema({
    name: String,
    email: String,
    password: String

 });



// apply above schema to database by using mongoose
const Model:any = mongoose.Model;
const Employee = Model('Employee',empoyeeSchema)

// create rest api

app.post("/employee", (req:any, res:any):any =>{
    new Employee({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    // newRecord.save(err:any, result:any)=>{}
})