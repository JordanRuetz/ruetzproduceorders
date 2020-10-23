const typeorm = require('typeorm')
const SecretManager = require('./fetchSecret').SecretManager
const productSchema = require('./entity/ProductSchema')
const productQuantitySchema = require('./entity/ProductQuantitySchema')
const orderSchema = require('./entity/OrdersSchema')

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

module.exports = {createDbConnection}

