var express = require("express");
var app = express();
var path = require("path");

const PORT = process.env.PORT || 3000;

app.get("*", function (req, res) {
  res.send("Does it work?");
  // const fileLocation = path.join(__dirname, "./app/client/index.html");
  // res.sendFile(fileLocation);
});

app.listen(PORT, function () {
  console.log(`listening on port ${PORT}`);
});
