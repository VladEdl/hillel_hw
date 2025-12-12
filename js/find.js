'use strict'

const num = [5, 10, 13, 20, 25];

/**
 * Returns the value of the first element in the array that satisfies the provided testing function.
 *
 * @param {Array} arr - The array to search in.
 * @param {Function} callback - A function to execute on each value in the array. It should return true to indicate a match.
 * @param {number} [index=0] - The index to start the search from (optional). Defaults to 0.
 * @returns {*} The first element in the array that passes the test, or undefined if no such element is found.
 */

const find = (arr, callback, index = 0) => {
    for (let i = index; i < arr.length; i++) {
        if (callback(arr[i])) {
            return arr[i];
        }
    }
    return undefined;
}

console.log(find(num, (item) => item > 5));
console.log('----------')
console.log(find(num, (item) => item < 15));
console.log('----------')
console.log(find(num, (item) => item > 30));
console.log('--------------------------------------------------')
