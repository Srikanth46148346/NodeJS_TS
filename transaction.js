"use strict";
// creating the sub madule
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var transaction = express.Router();
transaction.get('/', function (req, res) {
    res.status(200).json({ "message": "Default Data from Transaction file" });
});
transaction.get('/data_TS', function (req, res) {
    res.status(200).json({ "message": "Data from Transaction file" });
});
transaction.get('/data/2', function (req, res) {
    res.status(200).json({ "message": "Data from the second data Transaction call" });
});
exports.default = transaction;
