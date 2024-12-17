"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var accounts = express.Router();
accounts.get('/', function (req, res) {
    res.status(200).json({ "message": "Welcome to the accounts module default " });
});
accounts.get('/accounts', function (req, res) {
    res.status(200).json({ "message": "Welcome to the accounts module" });
});
accounts.post("/accounts/post", function (req, res) {
    res.status(200).json({ "message": "This is the post call for the account module" });
});
exports.default = accounts;
