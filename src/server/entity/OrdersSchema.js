const EntitySchema = require('typeorm').EntitySchema
const Order = require('../model/Order').Order

module.exports = new EntitySchema({ 
   name: "Order",
   target: Order,
   columns: { 
      id: {
         type: "int",
         primary: true,
         generated: true
      },
      firstName: { 
         type: "varchar", 
         length: 255
      }, 
      lastName: { 
         type: "varchar",
         length: 255
      }, 
      pickupDate: { 
         type: "varchar",
         length: 50 
      },
      cost: {
         type: "float"
      },
      order: {
         type: "json"
      }
   } 
})