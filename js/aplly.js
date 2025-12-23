'use strict';

const user = { name: 'John' };

function hi(greeting, punctuation) {
    console.log(`${greeting}, я ${this.name}${punctuation}`);
}

function myApply(fn, context, argsArray) {

    context.temp = fn;

    const result = context.temp(...argsArray);
    delete context.temp;
    return result;
}



myApply(hi, user, ['Привіт', '!']);
console.log('-------------------------------------------------------')
