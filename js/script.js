'use strict';
const a = prompt('Введіть число:');

//Завдання 1
const checkNum1 = a !== null && a.trim() === '0' ? 'Вірно' : 'Неправильно';
console.log(`task #1: ${checkNum1}`);

//Завдання 2
const checkNum2 = +a > 0 ? 'Вірно' : 'Неправильно';
console.log(`task #2: ${checkNum2}`);

//Завдання 3
const checkNum3 = +a < 0 ? 'Вірно' : 'Неправильно';
console.log(`task #3: ${checkNum3}`);

//Завдання 4
const checkNum4 = a !== null && a.trim() !== "" && +a >= 0 ? 'Вірно' : 'Неправильно';
console.log(`task #4: ${checkNum4}`);

//Завдання 5
const checkNum5 = a !== null && a.trim() !== "" && +a <= 0 ? 'Вірно' : 'Неправильно';
console.log(`task #5: ${checkNum5}`);

//Завдання 6
const checkNum6 = +a !== 0 && a.trim() !== '' && a !== null ? 'Вірно' : 'Неправильно';
console.log(`task #6: ${checkNum6}`);

//Завдання 7
const checkNum7 = a === 'test' ? 'Вірно' : 'Неправильно';
console.log(`task #7: ${checkNum7}`);

//Завдання 8
const checkNum8 = a === '1' ? 'Вірно' : 'Неправильно';
console.log(`task #8: ${checkNum8}`);

//Завдання 9
const checkNum9 = +a > 0 && +a < 5 ? 'Вірно' : 'Неправильно';
console.log(`task #9: ${checkNum9}`);

//Завдання 10
const checkNum10 = +a === 0 || +a === 2 ? +a + 7 : +a / 10;
console.log(`task #10: ${checkNum10}`);

//Завдання 11
const b = +prompt ('Введіть число: ')
const checkNum11 = +a <= 1 && b >=3 ? +a + b : b - +a;
console.log(`task #11: ${checkNum11}`);

//Завдання 12
const checkNum12 = +a > 2 && +a < 11 || b >= 6 && b < 14 ? 'Вірно' : 'Неправильно';
console.log(`task #12: ${checkNum12}`);

//Завдання 13
switch (a.trim()) {
    case '1':
        console.log('Зима')
        break;
    case '2':
        console.log('Весна')
        break;
    case '3':
        console.log('Літо')
        break;
    case '4':
        console.log('Осінь')
        break;
    default:
        console.log('Невірне значення')

}