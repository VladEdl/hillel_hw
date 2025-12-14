'use strict';

/**
 * Removes the first element from an array and shifts all other elements to a lower index.
 * This function modifies the original array in place.
 * * If the array is empty, it returns undefined.
 *
 * @param {Array} arr - The array to be shifted.
 * @returns {Array|undefined} The modified array with the first element removed, or undefined if the array was empty.
 * * @example
 * const nums = [1, 2, 3, 4, 5];
 * shift(nums); // returns [2, 3, 4, 5]
 * console.log(nums); // [2, 3, 4, 5] - original array is modified
 * * @example
 * const empty = [];
 * shift(empty); // returns undefined
 */

const num = [1, 2, 3, 4, 5];

const shift = (arr) => {
    if (arr.length === 0) {
        return undefined;
    } else {
        for (let i = 0; i < arr.length - 1; i++) {
            arr[i] = arr[i + 1];

        }
        arr.length = arr.length - 1;
        return arr;
    }



}

console.log(shift(num));

console.log('--------------------------------------------------')
