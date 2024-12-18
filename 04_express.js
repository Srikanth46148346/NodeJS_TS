"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.get('/sample/:uname/:upwd', function (req, res) {
    // res.status(200).json({"message":"Testing get call"})
    var uname = req.params.uname;
    var upwd = req.params.upwd;
    if (uname === 'tony' && upwd === 'chopper') {
        res.status(200).json({ "login": "Successful" });
    }
    else {
        res.status(200).json({ "login": "Failed" });
    }
    // ( uname === ' tony' && upwd === 'chopper') ? res.status(200).json({"login":"Successful"}) : res.status(200).json({"login":"failed"})
    console.log(uname, upwd);
});
app.listen(8080, function () {
    console.log('server is running on port number: 8080');
});
// so if we have the query parameter in the url and we need to read it and check...  
// http://localhost/sample/?uname=tony&upwd=chopper
