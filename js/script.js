'use strict';

const array = [1, 2, 3, 4, 5, 6, 7];


function removeElement(array, item) {
    const index = array.indexOf(item);
    if (index !== -1) {
        array.splice(index, 1);
    }
}


removeElement(array, 5 );
console.log(array);
// Результат: [1, 2, 3, 4, 6, 7]


const array1 = [1, 2, 3, 4, 5, 6, 7];
function removeElement1(array1, item) {
    let result = [];
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== item) {
            result.push(array1[i]);
        }

    }
    return result;

}

removeElement1(array1, 5 );
console.log(removeElement1(array1, 4));