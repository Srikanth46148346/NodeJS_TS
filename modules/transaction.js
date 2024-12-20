"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
//importing the modules
var transaction = express.Router();
//creating the rest calll
transaction.get('/', function (req, res) {
    res.status(200).json({ "message": "To get the data for the transaction module" });
});
// creating authorization
var auth1 = function (req, res, next) {
    var allHeaders = req.Headers;
    var token = allHeaders.token;
    if (token === 'tony') {
        next(); // next function is used to give the judgement
    }
    else {
        res.status(401).json({ auth: "token is wrong" });
    }
};
var auth2 = function (req, res, next) {
    var allHeaders = req.Headers;
    var wish = allHeaders.wish;
    if (wish === 'Hello') {
        next();
    }
    else {
        res.status(200).json({ wish: "wishing you from the transaction module" });
    }
};
// to get the data from client
transaction.get('/transaction', [auth1, auth2], function (req, res) {
    if (req.query.unmae === 'tony' && req.query.upwd === 'chppper') {
        res.status(200).json({ "message": "transaction success" });
    }
    else {
        res.status(200).json({ "message": "transaction failed" });
    }
});
exports.default = transaction;
