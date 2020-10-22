const ProductController = require('./controller/ProductController').ProductController
const ProductQuantityController = require('./controller/ProductQuantityController').ProductQuantityController
const OrderController = require('./controller/OrderController').OrderController

const authRequired = [
    "/product/add",
    "/product/remove",
    "/product/quantity/add",
    "/product/quantity/remove",
    "/orders",
    "/order/remove"
]

const appRoutes = [
    {
        path: "/product/add",
        method: "post",
        action: ProductController.addProduct
    },
    {
        path: "/products",
        method: "get",
        action: ProductController.getProducts
    },
    {
        path: "/product/remove",
        method: "post",
        action: ProductController.removeProduct
    },
    {
        path: "/product/quantity/add",
        method: "post",
        action: ProductQuantityController.addProduct
    },
    {
        path: "/product/quantities",
        method: "get",
        action: ProductQuantityController.getProducts
    },
    {
        path: "/product/quantity/remove",
        method: "post",
        action: ProductQuantityController.removeProduct
    },
    {
        path: "/order/add",
        method: "post",
        action: OrderController.addOrder
    },
    {
        path: "/orders",
        method: "get",
        action: OrderController.getOrders
    },
    {
        path: "/order/remove",
        method: "post",
        action: OrderController.removeOrder
    }
]

module.exports = {appRoutes, authRequired}