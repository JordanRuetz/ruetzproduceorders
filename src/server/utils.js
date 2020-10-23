const typeorm = require('typeorm')
const SecretManager = require('./fetchSecret').SecretManager
const productSchema = require('./entity/ProductSchema')
const productQuantitySchema = require('./entity/ProductQuantitySchema')
const orderSchema = require('./entity/OrdersSchema')
const { dbAppRoutes } = require('./routes');

const createDbConnection = async () => {
    const secretManager = new SecretManager()
    const dbParmsSecret = JSON.parse(await secretManager.getSecret("db-master-user"))

    return await typeorm.createConnection({ 
        "type": dbParmsSecret.engine, 
        "host": dbParmsSecret.host, 
        "port": dbParmsSecret.port, 
        "username": dbParmsSecret.username, 
        "password": dbParmsSecret.password, 
        "database": "dbmaster",
        "synchronize": true, 
        "logging": false,
        entities: [ orderSchema, productSchema, productQuantitySchema ] 
    })
}

const authenticate = async (req, res, next) => {
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
}

const validateParams = (req, res, next) => {
    if (!dbAppRoutes[req.url] || !dbAppRoutes[req.url].requiredParams) {
      return next()
    }

    missingParams = []
    dbAppRoutes[req.url].requiredParams.forEach((param) => {
        if (!req.body[param]) {
            missingParams.push(param)
        }
    })

    if (!missingParams) {
      return next()
    }

    res.status(400).send(`Missing parameters: ${missingParams}`)
  }

module.exports = {createDbConnection, authenticate, validateParams}

