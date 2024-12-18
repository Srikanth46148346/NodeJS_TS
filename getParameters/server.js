"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
//authorization
var auth = function (req, res, next) {
    var allHeader = req.headers;
    if (allHeader.token === 'tony') {
        next();
    }
    else {
        res.status(500).json({ auth: "authorization failed" });
    }
};
//get request
app.get('/login', function (req, res) {
    if (req.query.uname === 'tony' && req.query.upwd === 'chopper') {
        res.status(200).json({ "login": "Success" });
    }
    else {
        res.status(200).json({ "login": "Log in failed" });
    }
});
app.get('/', function (req, res) {
    res.sendFile('C:/Users/LDOKKU/OneDrive - Capgemini/New Docs/OneDrive - Capgemini/Desktop/FS/FE/NodeJS/Apps/getParameters/index.html');
});
app.listen(8080, function () {
    console.log("server is running on 8080");
});
