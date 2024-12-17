//We are using server file to encapsulate the transaction and accounts module

import * as express from 'express'

import transaction from './transaction'
import accoutns from './accounts'

// So here we have created both router for transaction module and account module.. Then we are assigning it to the server App along with the module
let app:any = express();

app.use('/module1',transaction);
//http://localhost:8080/module1  [default request]
// http://localhost:8080/module1/data_TS   [it will get the data_TS call from the transaction module]
// so based on the rest call we need to update the file
app.use("/module2", accoutns);
app.listen(8080,()=>{
    console.log('server started on port number 8080')
})

