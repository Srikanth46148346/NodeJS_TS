"use strict";
// import express module
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
// app object is used to develop the rest services, Ex: GET, POST, PUT, DELETE, TRACE
app.get('/data', function (req, res) {
    res.status(200).json({ "message": 'Welcome to typescript' });
});
app.listen(8080, function () {
    console.log('server running on 8080');
});
