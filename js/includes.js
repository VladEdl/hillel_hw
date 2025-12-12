'use strict'

const words = ['cat', 'dog', 'wolf'];

/**
 * Checks if a specific element exists in an array.
 *
 * @param {Array} arr - The array to search through.
 * @param {*} search - The element to look for.
 * @returns {boolean} Returns true if the element is found, otherwise false.
 */

const includes = (arr, search) => {
    for (const item of arr) {
        if (search === item) {
            return true;
        }
    }
    return false;
}

console.log(includes(words, 'cat'));
console.log('----------')
console.log(includes(words, 'abc'));
console.log('--------------------------------------------------')