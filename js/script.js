'use strict';

// Завдання 1

const arr = [1, 2, 3, 4, 5];
let a = 0;
for (let i = 0; i < arr.length; i++) {
    a += arr[i];
}
console.log(a);

a = 0;

// Завдання 2

for (let i = 0; i < arr.length; i++) {
    a += arr[i]**2;
}
console.log(a);