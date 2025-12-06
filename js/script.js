'use strict';

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';



function generateKey(length, characters) {
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.random() * characters.length);
    }
    return result;
}



const key = generateKey(16, characters);
console.log(key); // eg599gb60q926j8i