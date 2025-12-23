'use strict';

const user = { name: 'John' };

function hi(argument) {
    console.log(`${argument}, я ${this.name}`);
}

function myCall(fn, context, ...args) {
    context.temp = fn;
    const result = context.temp(...args);
    delete context.temp;
    return result;
}


myCall(hi, user, 'Привіт');
console.log('-------------------------------------------------------')