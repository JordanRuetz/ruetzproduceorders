var express = require("express");
var http = require("http");
var app = express();
var path = require("path");

const PORT = process.env.PORT || 3000;

app.get("*", function (req, res) {
  res.send("Does it work?");
  // const fileLocation = path.join(__dirname, "./app/client/index.html");
  // res.sendFile(fileLocation);
});

const server = http.createServer(app);
server.listen(PORT);
