  
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
        const price = req.body.price
        const productQuantity = new ProductQuantity(name, quantity, quantityName, price)
      
        ProductQuantityController.getRepo().save(productQuantity)
        res.status(200).send("Saved successfully!")
    }

    static async getProducts(req, res) {
        const products = await ProductQuantityController.getRepo().find()
        res.status(200).send(products)
    }

    static async removeProduct(req, res) {
        const productToRemove = req.body.name
        await ProductQuantityController.getRepo().delete({name: productToRemove})
        res.status(200).send("Removed successfully!")
    }
}

module.exports = {ProductQuantityController}