'use strict';

const numbers = [1, 2, 3, 4, 5, 6];

/**
 * Searches for an element in an array starting from a specific index.
 * Returns the index of the first occurrence, or -1 if not found.
 *
 * @param {Array} arr - The array to search in.
 * @param {*} search - The value to search for.
 * @param {number} [index=0] - The index to start the search from. Defaults to 0.
 * @returns {number} The index of the found element, or -1 if the element is not found or the start index is invalid.
 */

function indexOf(arr, search, index = 0){
    if (index < 0 || index >= arr.length) {
        return -1;
    } else {
        for (let i = index; i < arr.length; i++) {
            if (arr[i] === search) {
                return i;

            }

        }
    }
    return -1;

}

console.log(indexOf(numbers, 5));
console.log('----------')
console.log(indexOf(numbers, 9));
console.log('----------')
console.log(indexOf(numbers, 2, 3));
console.log('--------------------------------------------------')