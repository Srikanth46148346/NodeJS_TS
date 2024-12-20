"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var body_parser = require("body-parser");
// create a rest object: used to create rest services : GET, PUT POST, DELETE...
var app = express();
//MIME: 
app.use(body_parser.json());
// recieve form data from client and parse it
app.use(body_parser.urlencoded({ extended: false }));
///authorization
var auth = function (req, res, next) {
    var allHeader = req.headers;
    var token = allHeader.token;
    if (token === 'tony') {
        // res.status(200).json({"Message":'Token is good'})
        next();
    }
    else {
        res.status(200).json({ auth: "can't access because token is wrong" });
    }
};
app.post("/login", [auth], function (req, res) {
    if (req.body.uname === 'tony' && req.body.upwd === 'chopper') {
        res.status(200).json({ logIn: 'Login Success' });
    }
    else {
        res.status(401).json({ logIn: "fialed" });
    }
});
app.listen(8080, function () {
    console.log("Log in success");
});
