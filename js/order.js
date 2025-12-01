'use strict'

const order = {
    total: '950',
    currency: 'USD',
    isPaid: true,
    delivery: 'yes',
    priority: '1'
}

const price = +order.total
const delivery = order.delivery === 'yes'
const priority = order.priority === '1'
const highPrice = price >= 1000
let orderMessage;

if (order.isPaid === true) {
    if (delivery === true) {
        orderMessage = "Paid order with delivery"
    }
}
else {
    orderMessage = 'Order is not paid'
}
if (highPrice === true && order.isPaid === true) {
    orderMessage = 'High-value paid order'
}
if (order.isPaid === true && delivery === false) {
    orderMessage = 'Paid order without delivery'
}

if (priority === true) {
    orderMessage += '[PRIORITY]'
}
alert(orderMessage)

const check = order.total == price;
const strictCheck = order.total === price;
console.log(check)
console.log(strictCheck)
