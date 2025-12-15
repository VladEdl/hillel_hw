'use strict';

const numbers = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];


// task #1
let positiveSum = 0;
let positiveCount = 0;
numbers.forEach(num => {
    if (num > 0) {
        positiveSum += num;
        positiveCount++;
    }
});
console.log(`1. Позитивна кількість = ${positiveCount}, сума = ${positiveSum}`);


// task #2
let minEl = numbers[0];
let minIndex = 0;

numbers.forEach((num, i) => {
    if (num < minEl) {
        minEl = num;
        minIndex = i;
    }
});
console.log(`2. Мінімум: ${minEl} (індекс ${minIndex})`);


// task #3
let maxEl = numbers[0];
let maxIndex = 0;

numbers.forEach((num, i) => {
    if (num > maxEl) {
        maxEl = num;
        maxIndex = i;
    }
});
console.log(`3. Максимум: ${maxEl} (індекс ${maxIndex})`);


// task #4
const negativeCount = numbers.filter(num => num < 0).length;
console.log(`4. Кількість негативних: ${negativeCount}`);


// task #5
const oddPositiveCount = numbers.filter(num => num > 0 && num % 2 !== 0).length;
console.log(`5. Кількість непарних позитивних: ${oddPositiveCount}`);

// task #6

const oddNegativeCount = numbers.filter(num => num < 0 && num % 2 === 0).length;
console.log(`6. Кількість парних негативних: ${oddNegativeCount}`);

// task #7

let sumPositive = 0;
numbers.forEach(num => {
    if (num > 0 && num % 2 === 0) {
        sumPositive += num;
    }
});
console.log(`7. Сума парних позитивних: ${sumPositive}`);

// task #8

let oddSumPositive = 0;
numbers.forEach(num => {
    if (num > 0 && num % 2 !== 0) {
        oddSumPositive += num;
    }
});
console.log(`8. Сума непарних позитивних: ${oddSumPositive}`);

// task #9

let positiveProd = 1;
numbers.forEach(num => {
    if (num > 0) {
        positiveProd = positiveProd * num;
    }
});
console.log(`9. Добуток позитивних: ${positiveProd}`);

// task #10

const resultArr = numbers.map(num => {
    if (num === maxEl) {
        return num;
    } else {
        return 0;
    }
});
console.log(`10. Оброблений масив:`, resultArr);