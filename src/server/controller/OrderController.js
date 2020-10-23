  
const typeorm = require("typeorm");
const Order = require('../model/Order').Order

/**
 * Manages interaction of an API request with order table
 */
class OrderController {
    static getRepo() {
        return typeorm.getConnection().getRepository(Order)
    }

    static async addOrder(req, res) {
        const firstName = req.body.firstName
        const lastName = req.body.lastName
        const pickupDate = req.body.pickupDate
        const cost = req.body.cost
        const order = req.body.order
        const newOrder = new Order(firstName, lastName, pickupDate, cost, order)
      
        this.getRepo().save(newOrder)
        res.status(200).send("Saved successfully!")
    }

    static async getOrders(req, res) {
        const products = await this.getRepo().find()
        res.status(200).send(products)
    }

    static async removeOrder(req, res) {
        const productToRemove = req.body.name
        this.getRepo().delete(productToRemove)
        res.status(200).send("Removed successfully!")
    }
}

module.exports = {OrderController}