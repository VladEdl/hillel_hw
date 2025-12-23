'use strict';

const user = {
    name: 'John',
}

function hi (argument) {
    console.log(`${argument}, я ${this.name}`);
}

function myBind(fn, context, ...argsAtBind) {
    return function(...argsAtCall) {
        context.temp = fn;

        const result = context.temp(...argsAtBind, ...argsAtCall);

        delete context.temp;
        return result;
    };
}

const a = myBind(hi, user);
a('Привіт');
console.log('-------------------------------------------------------')