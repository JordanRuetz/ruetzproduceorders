const express = require('express')
const http = require('http')
const path = require('path')
const typeorm = require('typeorm')
const bodyParser = require('body-parser');
const secretManager = require('./fetchSecret')

const productSchema = require('./entity/ProductSchema')
const productQuantitySchema = require('./entity/ProductQuantitySchema')
const orderSchema = require('./entity/OrdersSchema')

const routes = require("./routes")

const getConnection = async () => {
  const secret = await secretManager.getSecret();
  const jsonSecret = JSON.parse(secret)

  return await typeorm.createConnection({ 
     "type": jsonSecret.engine, 
     "host": jsonSecret.host, 
     "port": jsonSecret.port, 
     "username": jsonSecret.username, 
     "password": jsonSecret.password, 
     "database": "dbmaster",
     "synchronize": true, 
     "logging": false,
     entities: [ orderSchema, productSchema, productQuantitySchema ] 
  })
}

getConnection().then(async connection => {
  var app = express();
  app.use(bodyParser.urlencoded());
  app.use(bodyParser.json());

  app.use((req, res, next) => {
    // check if request if for a method that needs authorization
    if (!routes.authRequired.includes(req.url)) {
      return next()
    }

    // authentication middleware  
    const auth = {login: 'yourlogin', password: 'yourpassword'} // change this
  
    // parse login and password from headers
    const b64auth = (req.headers.authorization || '').split(' ')[1] || ''
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':')

    if (login && password && login === auth.login && password === auth.password) {
      return next()
    }
  
    res.status(401).send('Authentication required to perform this action!')
  })
  
  const PORT = process.env.PORT || 3000;
  
  app.use(
    "/public/icons",
    express.static(path.join(__dirname, "../../public/icons"))
  );
  
  app.use("/", express.static(path.join(__dirname, "../../dist")));
  
  // register all application routes
  routes.appRoutes.forEach(route => {
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



