  
const typeorm = require("typeorm");
const Product = require('../model/Product').Product

/**
 * Manages interaction of an API request with product table
 */
class ProductController {
    static getRepo() {
        return typeorm.getConnection().getRepository(Product)
    }

    static async addProduct(req, res) {
        const name = req.body.name
        const description = req.body.description
        const quantityRemaining = req.body.quantityRemaining
        const quantityUnit = req.body.quantityUnit
        const product = new Product(name, description, quantityRemaining, quantityUnit)
      
        this.getRepo().save(product)
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

module.exports = {ProductController}