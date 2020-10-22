const EntitySchema = require('typeorm').EntitySchema
const Product = require('../model/Product').Product

module.exports = new EntitySchema({ 
   name: "Product", 
   target: Product,
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
      description: { 
         type: "varchar",
         length: 255
      }, 
      quantityRemaining: { 
         type: "int" 
      },
      quantityUnit: {
         type: "varchar",
         length: 255
      }
   } 
})