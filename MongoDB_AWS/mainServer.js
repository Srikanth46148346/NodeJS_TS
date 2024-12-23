"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cors = require("cors");
var body_perser = require("body-parser");
var server_1 = require("./server");
//creating the rest object
var app = express();
app.use(cors());
// set the mime type
app.use(body_perser.json());
app.use(body_perser.urlencoded({ extended: true }));
app.use('/products', server_1.default);
app.listen(8080, function () {
    console.log('server is running on port number 8080');
});
