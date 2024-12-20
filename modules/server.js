"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var transaction_1 = require("./transaction");
var accounts_1 = require("./accounts");
var cards_1 = require("./cards");
// here we are encapsulating the all three modules
var app = express();
app.use('/accounts', accounts_1.default);
app.use('/transaction', transaction_1.default);
app.use('/cards', cards_1.default);
app.listen(8080, function () {
    console.log('server is running on port number: 8080');
});
