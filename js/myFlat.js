'use strict';

const num = [1, 2, 3, [4, [5, 6]]];

function myFlat(arr) {
    if (arguments.length > 1) {
        throw new Error('Function accepts only 1 argument, too much arguments provided');
    }
    let result = [];

    for (const item of arr) {
        if (Array.isArray(item)) {
            result.push(...myFlat(item));
        } else {
            result.push(item);
        }

    }
    return result;

}

console.log(myFlat(num));
