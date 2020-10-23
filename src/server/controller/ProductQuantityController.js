  
const typeorm = require("typeorm");
const ProductQuantity = require('../model/ProductQuantity').ProductQuantity

/**
 * Manages interaction of an API request with productQuantity table
 */
class ProductQuantityController {
    static getRepo() {
        return typeorm.getConnection().getRepository(ProductQuantity)
    }

    static async addProduct(req, res) {
        const name = req.body.name
        const quantity = req.body.quantity
        const quantityName = req.body.quantityName
        const quantityUnit = req.body.quantityUnit
        const productQuantity = new ProductQuantity(name, quantity, quantityName, quantityUnit)
      
        this.getRepo().save(productQuantity)
        res.status(200).send("Saved successfully!")
    }

    static async getProducts(req, res) {
        const products = await this.getRepo().find()
        res.status(200).send(products)
    }

    static async removeProduct(req, res) {
        const productToRemove = req.body.name
        await this.getRepo().delete(productToRemove)
        res.status(200).send("Removed successfully!")
    }
}

module.exports = {ProductQuantityController}