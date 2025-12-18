'use strict';

// task #1

const products = [
    { id: 31, name: "Mouse", price: 25, inStock: true },
    { id: 2, name: "Keyboard", price: 70, inStock: false },
    { id: 3, name: "Monitor", price: 210, inStock: true },
];

const result = products.map(product => {
    let info = `${product.name} - ${product.price}`;

    return product.inStock ? info : info + " (Out of stock)";
});
console.log(result);

console.log('------------------------------------------------------');

// task #2

const users = [
    { id:  1, age: 17, active: true, email: "a@mail.com" },
    { id: 2, age: 22, active: true, email: "b@spam.com" },
    { id: 3, age: 30, active: false, email: "c@mail.com" },
    { id: 4, age: 35, active: true, email: "d@mail.com" },
    { id: 5, age: 40, active: true, email: "e@mail.com" },
];

const filt = users.filter(user => {
    const isActive = user.active === true;
    const isAge = user.age >= 18 && user.age <= 35;
    const isSpam = !user.email.includes('@spam.com');

    return isActive && isAge && isSpam;
})
console.log(filt);

console.log('------------------------------------------------------');

// task #3

const tx = [
    { id: 1, category: "food", amount: 12 },
    { id: 2, category: "food", amount: 8 },
    { id: 3, category: "taxi", amount: 15 },
    { id: 4, category: "books", amount: 20 },
    { id: 5, category: "taxi", amount: 7 },
];

const category = tx.reduce((acc, item) => {
    const cat = item.category;

    if (!acc[cat]) {
        acc[item.category] = 0;
    }
    acc[cat] += item.amount;

    return acc;
}, {});
console.log(category);

console.log('------------------------------------------------------');

//task #4

const orders = [
    { id: 101, items: [{ sku: "A1", qty: 1 }, { sku: "C3", qty: 2 }] },
    { id: 102, items: [{ sku: "B2", qty: 1 }] },
    { id: 103, items: [{ sku: "B2", qty: 3 }, { sku: "A1", qty: 1 }] },
];

const findOrders = orders.find(order =>{
    return order.items.some(item => item.sku === "B2");
})

console.log(findOrders);