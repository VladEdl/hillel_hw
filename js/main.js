'use strict';

let user = prompt('What is your name?');
const ask = confirm('Do you want to see greeting?');
console.log(ask);
if (ask)
{
    alert('Hi, ' + user + ', how are you?');
}

