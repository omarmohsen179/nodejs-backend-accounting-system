
const express = require("express");
const bodyParser = require("body-parser");
const url = require("url");
const http = require("http");
const app = express();
var schedule = require('node-schedule');
const https = require('https');
const fs = require('fs');

app.use(bodyParser.json({ limit: '10000000mb' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.setHeader("Content-type", "application/json")
  ; res.json({ message: "Welcome to bezkoder application." })
});
const options = {
  key: fs.readFileSync('./sec.key'),
  cert: fs.readFileSync('./sec.crt'),
      requestCert: false,
    rejectUnauthorized: false

};
const hostname = "localhost";
const port = 3000;
require("./routes")(app);
http.createServer(options,app).listen(port, hostname)
