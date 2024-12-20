import * as express from 'express'
import  transaction from './transaction'
import  accounts from "./accounts"
import  cards from "./cards"

// here we are encapsulating the all three modules

let app:any = express();

app.use('/accounts',accounts);
app.use('/transaction',transaction)
app.use('/cards', cards)


app.listen(8080, ()=>{
    console.log('server is running on port number: 8080')
})