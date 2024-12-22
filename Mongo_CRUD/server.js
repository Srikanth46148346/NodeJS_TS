"use strict";
//server.ts used to collaborate with the custom modules[ @fetch, @delete,@update, @insert]
// server file is the main server and node starts the execution from the server.ts file
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cors = require("cors");
var body_perser = require("body-parser");
var fetch_1 = require("./fetch/fetch");
var insert_1 = require("./post/insert");
var delete_1 = require("./delete/delete");
var update_1 = require("./update/update");
//creating the rest object
var app = express();
app.use(cors());
// set the mime type
app.use(body_perser.json());
app.use(body_perser.urlencoded({ extended: true }));
app.use('/fetch', fetch_1.default);
app.use('/insert', insert_1.default);
app.use('/update', update_1.default);
app.use('/remove', delete_1.default);
//server is listening on port 8080
// Server is listening on a dynamic or default port
var PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
    console.log("Server is running on port ".concat(PORT));
});
