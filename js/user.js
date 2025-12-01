'use strict';

const user = {
    name: 'Alex',
    age: 25,
    email: 'qweasd',
    isSubscribed: true,
    balance: '150.25',
    verified: '1'
}

const balance = +user.balance;
const verified = user.verified === '1';

const ageCheck = user.age == '25';
const strictAgeCheck = user.age === '25';

console.log('Нестроге порівняння:' , ageCheck)
console.log('Строге порівняння:' , strictAgeCheck)

if (user.age >= 18 && verified === true && (user.isSubscribed === true || balance >= 0)) {
    alert('Acces is successfully!');
}
else{
    const userMessage = 'Access restricted due to age'
    console.log(userMessage);
}

