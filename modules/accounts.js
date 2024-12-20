"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
//created a module
var accounts = express.Router();
//creating the get request
accounts.get('/', function (req, res) {
    res.status(200).json({ "message": "Data from the account module" });
});
accounts.get("/login", function (req, res) {
    if (req.query.uname === 'tony' && req.query.upwd === 'chopper') {
        res.status(200).json({ message: 'login success' });
    }
    else {
        res.status(401).json({ message: 'login fail....' });
    }
});
//exporting the module
exports.default = accounts;
