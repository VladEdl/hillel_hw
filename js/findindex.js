'use strict'

const num = [10, 2, 30, 42, 5, 6, 7, 8, 9, 10];

/**
 * Returns the index of the first element in the array that satisfies the provided testing function.
 *
 * @param {Array} arr - The array to search in.
 * @param {Function} callback - A function to execute on each value in the array. It should return true to indicate a match.
 * @param {number} [index=0] - The index to start the search from (optional). Defaults to 0.
 * @returns {number} The index of the first element that passes the test, or -1 if no match is found.
 */

const findIndex = (arr, callback, index = 0) => {
    for (let i = index; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return i;
        }
    }
    return -1;
}
console.log(findIndex(num, (item) => item < 5));
console.log('----------')
console.log(findIndex(num, (item) => item > 5));
console.log('----------')
console.log(findIndex(num, (item) => item > 50));
console.log('--------------------------------------------------')
