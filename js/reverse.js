'use strict'

/**
 * Reverses the order of elements in an array in place.
 * * This function modifies the original array by swapping elements
 * from the start and end until they meet in the middle.
 *
 * @param {Array} arr - The array to be reversed.
 * @returns {Array} The reversed array (reference to the original array).
 * * @example
 * const nums = [1, 2, 3];
 * reverse(nums); // returns [3, 2, 1]
 * console.log(nums); // [3, 2, 1] - original array is modified
 */

const numbers = [1, 2, 3, 4, 5, 6];
const words = ['cat', 'dog', 'wolf', 'cow'];

const reverse = (arr) => {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let a = arr[left];
        arr[left] = arr[right];
        arr[right] = a;
        left++;
        right--;
    }
    return arr;

}

console.log(reverse(numbers));
console.log(reverse(words));