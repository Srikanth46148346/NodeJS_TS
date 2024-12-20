"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
//creatinf the module using the router function
var cards = express.Router();
// creating the rest calls
cards.get('/', function (req, res) {
    res.status(200).json({ "cards": 'to get the data from the card module' });
});
cards.get("/cards", function (req, res) {
    if (req.query.uname === 'tony' && req.query.upwd === 'chopper') {
        res.status(200).json({ cards: 'to get the data from the card module' });
    }
    else {
        res.status(401).json({ cards: 'unauthorized user' });
    }
});
exports.default = cards;
