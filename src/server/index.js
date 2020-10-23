const express = require('express')
const http = require('http')
const path = require('path')
const bodyParser = require('body-parser');
const { dbAppRoutes } = require('./routes')
const {createDbConnection, authenticate, validateParams} = require('./utils')

const PORT = process.env.PORT || 3000;

createDbConnection().then(async connection => {
  var app = express();
  app.use(bodyParser.urlencoded());
  app.use(bodyParser.json());
  app.use(authenticate);
  app.use(validateParams)
  
  app.use(
    "/public/icons",
    express.static(path.join(__dirname, "../../public/icons"))
  );
  
  app.use("/", express.static(path.join(__dirname, "../../dist")));
  
  // register all application routes
  Object.values(dbAppRoutes).forEach(route => {
    app[route.method](route.path, (req, res, next) => {
        route.action(req, res)
            .then(() => next)
            .catch(err => next(err));
    });
  });
  
  app.get("/getPhoto", function (req, res) {
    const fileLocation = path.join(
      __dirname,
      "../../src/client/resources/farmPics/beans.jpg"
    );
    res.sendFile(fileLocation);
  });
  
  app.get("*", function (req, res) {
    const fileLocation = path.join(__dirname, "../../dist/index.html");
    res.sendFile(fileLocation);
  });
  
  const server = http.createServer(app);
  server.listen(PORT);
})



