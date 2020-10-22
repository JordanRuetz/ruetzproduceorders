  
const typeorm = require("typeorm");

/**
 * Adds a  product to the database
 */

class ProductController {
    static async addProduct(req, res) {
        const newProduct = {
          name: req.body.name,
          description: req.body.description,
          quantityRemaining: req.body.quantityRemaining,
          quantityUnit: req.body.quantityUnit
        }
      
        const connection = typeorm.getConnection()
        const repo = connection.getRepository("Product")
        repo.save(newProduct)
      
        res.status(200).send("Saved successfully!")
    }

    static async getProducts(req, res) {
        const connection = typeorm.getConnection()
        const repo = connection.getRepository("Product")
        const products = await repo.find()
        console.log(products)
      
        res.status(200).send(products)
    }

    static async removeProduct(req, res) {
        const connection = typeorm.getConnection()
        const repo = connection.getRepository("Product")
    
        const productToRemove = req.body.name
    
        await repo.delete(productToRemove)
      
        res.status(200).send("Removed successfully!")
    }
}

module.exports = {ProductController}