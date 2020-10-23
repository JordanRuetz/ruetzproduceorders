const ProductController = require('./controller/ProductController').ProductController
const ProductQuantityController = require('./controller/ProductQuantityController').ProductQuantityController
const OrderController = require('./controller/OrderController').OrderController

const dbAppRoutes = {
    "/product/add": {
        path: "/product/add",
        method: "post",
        action: ProductController.addProduct,
        requiredParams: ["name", "description", "quantityRemaining", "quantityUnit"],
        authRequired: true
    },
    "/products": {
        path: "/products",
        method: "get",
        action: ProductController.getProducts
    },
    "/product/remove": {
        path: "/product/remove",
        method: "post",
        action: ProductController.removeProduct,
        requiredParams: ["name"],
        authRequired: true
    },
    "/product/quantity/add": {
        path: "/product/quantity/add",
        method: "post",
        action: ProductQuantityController.addProduct,
        requiredParams: ["name", "quantity", "quantityName", "quantityUnit"],
        authRequired: true
    },
    "/product/quantities": {
        path: "/product/quantities",
        method: "get",
        action: ProductQuantityController.getProducts
    },
    "/product/quantity/remove": {
        path: "/product/quantity/remove",
        method: "post",
        action: ProductQuantityController.removeProduct,
        requiredParams: ["name"],
        authRequired: true
    },
    "/order/add": {
        path: "/order/add",
        method: "post",
        action: OrderController.addOrder,
        requiredParams: ["firstName", "lastName", "pickupDate", "cost", "order"]
    },
    "/orders": {
        path: "/orders",
        method: "get",
        action: OrderController.getOrders
    },
    "/order/remove": {
        path: "/order/remove",
        method: "post",
        action: OrderController.removeOrder,
        requiredParams: ["name"],
        authRequired: true
    }
}

module.exports = {dbAppRoutes}