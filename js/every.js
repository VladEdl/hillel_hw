'use strict'

const badNums = [-1, 2, -3, 4];
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Tests whether all elements in the array pass the test implemented by the provided function.
 *
 * @param {Array} arr - The array to iterate over.
 * @param {Function} callback - A function to execute for each element. It should return true to pass, or false to fail.
 * Receives three arguments: (item, index, array).
 * @returns {boolean} Returns `true` if the callback returns a truthy value for every array element. Otherwise, returns `false`.
 */

const every = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        if (!callback(arr[i], i, arr)) {
            return false;
        }

    }
    return true;
}

console.log(every(nums, (item) => item > 0));
console.log(every(badNums, (item) => item > 0));
console.log('--------------------------------------------------')