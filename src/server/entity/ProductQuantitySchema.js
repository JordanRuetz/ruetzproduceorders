const EntitySchema = require('typeorm').EntitySchema
const ProductQuantity = require('../model/ProductQuantity').ProductQuantity

module.exports = new EntitySchema({ 
   name: "ProductQuantity",
   target: ProductQuantity,
   columns: { 
      id: {
         type: "int",
         primary: true,
         generated: true
      },
      name: {
         type: "varchar", 
         length: 255
      }, 
      quantity: { 
         type: "int"
      }, 
      quantityName: { 
         type: "int" 
      },
      price: {
         type: "float"
      }
   } 
})