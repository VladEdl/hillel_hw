'use strict'

const numbers = [1, 2, 3, 4, 5];
const badNumbers = [1, -2, 3, 4, 5];

/**
 * Checks if at least one element in the array satisfies the provided testing function.
 *
 * @param {Array} arr - The array to iterate over.
 * @param {Function} callback - The function to execute for each element.
 * It should return a truthy value to indicate a match.
 * Receives three arguments: (item, index, array).
 * @returns {boolean} Returns true if the callback returns a truthy value for any element, otherwise false.
 */

const some = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return true;
        }

    }
    return false;
}

console.log(some(numbers, (item) => item < 0));
console.log(some(badNumbers, (item) => item < 0));
console.log('--------------------------------------------------')