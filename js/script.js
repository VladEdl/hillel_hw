'use strict';

// Завдання 1

let result= '';

for (let i = 20; i <+ 30; i += 0.5) {
    result = result + i + ' ';
}
console.log(result);

// Завдання 2

let dollars= 27;
let result2= '';

for (let i = 10; i <= 100; i += 10){
    result2 += dollars * i + ' ';
}
console.log(result2);

// Завдання 3

const n = +prompt('Введіть число')

for (let i = 1; i <= 100; i++){
    if (i**2 <= n){
        console.log(i);
    }
    else{
        break;
    }
}

// Завдання 4
// Використав змінну із минулого завдання

let num = 0;

if (n < 2) {
    console.log('Число має бути більше 1')
}
else{
    for (let i = 2; i < n; i++){
        if (n % i === 0){
            num++
        }
    }
}
if (num === 0) {
    console.log(n + " Це просте число")
} else{
    console.log(n + ` Це не просте число. Знайдено ${num} дільників`)
}

// Завдання 5
// Використав змінну з Завдання 3

let num1 = 3;

while (num1 < n){
    num1 = num1 * 3;
}
if (num1 === n) {
    console.log("Так, це число можна отримати шляхом зведення");
} else {
    console.log("Ні, це число не можна отримати");
}