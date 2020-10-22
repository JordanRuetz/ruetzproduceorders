class Order {
    constructor(firstName, lastName, pickupDate, cost, order) {
        this.firstName = firstName
        this.lastName = lastName
        this.pickupDate = pickupDate
        this.cost = cost
        this.order = order
    }
}

module.exports = {Order}