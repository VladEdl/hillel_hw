'use strict';

const age = +prompt('Скільки вам років?');
if (isNaN(age) || age <= 0) {
    alert('Некоректний вік')
}
else {
    alert(`Через 5 років вам буде ${age + 5}`)
}

const price1 = "120.50$";
const price2 = "UAH 999";
const height = "180cm";
const broken = "abc123";
console.log(`"${price1}" -> parseInt: ${parseInt(price1)}, parseFloat: ${parseFloat(price1)}`);
console.log(`"${price2}" -> parseInt: ${parseInt(price2)}, parseFloat: ${parseFloat(price2)}`); // Першими стоять букви, а функція читає код до перших символів і потім зупиняється
console.log(`"${height}" -> parseInt: ${parseInt(height)}, parseFloat: ${parseFloat(height)}`);
console.log(`"${broken}" -> parseInt: ${parseInt(broken)}, parseFloat: ${parseFloat(broken)}`);
