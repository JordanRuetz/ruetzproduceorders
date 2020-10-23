const express = require('express')
const http = require('http')
const path = require('path')
const bodyParser = require('body-parser');
const { dbAppRoutes } = require('./routes')
const {createDbConnection} = require('./utils')
const SecretManager = require('./fetchSecret').SecretManager

const PORT = process.env.PORT || 3000;

createDbConnection().then(async connection => {
  var app = express();
  app.use(bodyParser.urlencoded());
  app.use(bodyParser.json());
  app.use(async (req, res, next) => {
    // check if request is for a method that needs authorization
    if (!dbAppRoutes[req.url] || !dbAppRoutes[req.url].authRequired) {
      return next()
    }

    const secretManager = new SecretManager()
    const authSecret = JSON.parse(await secretManager.getSecret("api-auth"))

    // parse login and password from headers
    const b64auth = (req.headers.authorization || '').split(' ')[1] || ''
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':')

    if (login && password && login === authSecret.user && password === authSecret.password) {
      return next()
    }
  
    res.status(401).send('Authentication required to perform this action!')
  });

  app.use((req, res, next) => {
    if (!dbAppRoutes[req.url] || !dbAppRoutes[req.url].requiredParams) {
      return next()
    }

    missingParams = []
    dbAppRoutes[req.url].requiredParams.forEach((param) => {
        if (!req.body[param]) {
            missingParams.push(param)
        }
    })

    if (missingParams.length == 0) {
      return next()
    }

    res.status(400).send(`Missing parameters: ${missingParams}`)
  })
  
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



