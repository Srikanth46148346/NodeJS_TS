"use strict";
//We are using server file to encapsulate the transaction and accounts module
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var transaction_1 = require("./transaction");
var accounts_1 = require("./accounts");
// So here we have created both router for transaction module and account module.. Then we are assigning it to the server App along with the module
var app = express();
app.use('/module1', transaction_1.default);
//http://localhost:8080/module1  [default request]
// http://localhost:8080/module1/data_TS   [it will get the data_TS call from the transaction module]
// so based on the rest call we need to update the file
app.use("/module2", accounts_1.default);
app.listen(8080, function () {
    console.log('server started on port number 8080');
});
