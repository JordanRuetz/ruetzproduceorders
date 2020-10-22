  
const typeorm = require("typeorm");
const Order = require('../model/Order').Order

class OrderController {
    static async addOrder(req, res) {
        const firstName = req.body.firstName
        const lastName = req.body.lastName
        const pickupDate = req.body.pickupDate
        const cost = req.body.cost
        const order = req.body.order
        const newOrder = new Order(firstName, lastName, pickupDate, cost, order)
      
        const connection = typeorm.getConnection()

        const repo = connection.getRepository(Order)
        repo.save(newOrder)
      
        res.status(200).send("Saved successfully!")
    }

    static async getOrders(req, res) {
        const connection = typeorm.getConnection()
        const repo = connection.getRepository("Order")
        const products = await repo.find()
        console.log(products)
      
        res.status(200).send(products)
    }

    static async removeOrder(req, res) {
        const connection = typeorm.getConnection()
        const repo = connection.getRepository("Order")
    
        const productToRemove = req.body.name
    
        await repo.delete(productToRemove)
      
        res.status(200).send("Removed successfully!")
    }
}

module.exports = {OrderController}