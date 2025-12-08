'use strict';

function padString(string, number, symbol, rightOrLeft = true) {
    if (typeof string !== 'string') {
        return 'some error: Expected a string.';
    }
    if (typeof number !== 'number') {
        return 'some error: Expected a number.';
    }
    if (typeof symbol !== 'string' || symbol.length !== 1) {
        return 'some error: Expected a symbol.';
    }
    if (typeof rightOrLeft !== 'boolean') {
        return 'some error: 4th element should be a boolean.';
    }
    if (string.length > number) {
        return string.substring(0, number);
    }

    const symbolToAdd = number - string.length;

    let padding = '';

    for (let i = 0; i < symbolToAdd; i++) {
        padding += symbol;
    }

    if (rightOrLeft === true) {
        return string + padding;
    }
    else{
        return padding + string;
    }
}

console.log(padString('Hello', 10, '*', true))