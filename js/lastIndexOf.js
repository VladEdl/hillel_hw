'use strict'

const lastIndex = [1, 2, 3, 1, 2, 3];

/**
 * Searches the array for the specified element in reverse order, starting from the given index.
 *
 * @param {Array} arr - The array to search in.
 * @param {*} search - The element to locate in the array.
 * @param {number} [index=arr.length - 1] - The index to start the search from (optional). Defaults to the last element.
 * @returns {number} The index of the first occurrence of the element found backwards, or -1 if not found or if the index is out of bounds.
 */

function lastIndexOf(arr, search, index = arr.length - 1){
    if (index < 0 || index >= arr.length) {
        return -1;
    } else {
        for (let i = index; i >= 0; i--) {
            if (arr[i] === search) {
                return i;

            }

        }
    }
    return -1;

}
console.log(lastIndexOf(lastIndex, 3));
console.log('----------')
console.log(indexOf(lastIndex, 3));
console.log('--------------------------------------------------')