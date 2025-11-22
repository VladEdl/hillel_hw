'use strict';

const name = prompt('What is your name?');
const age = +prompt('How old are you?');
const live = prompt('Where do you live?');
const likejs = prompt('Do you like JavaScript?(please enter yes or no)').toLowerCase();

if (likejs === 'yes'){
    alert(`Hello, ${name}, you are ${age} years old, you live in ${live}, you like JavaScript!`);
}
else if (likejs === 'так'){
    alert(`Hello, ${name}, you are ${age} years old, you live in ${live}, you like JavaScript!`);
}
else if (likejs === 'no'){
    alert(`Hello, ${name}, you are ${age} years old, you live in ${live}, you don\'t like JavaScript!`);
}
else if (likejs === 'ні'){
    alert(`Hello, ${name}, you are ${age} years old, you live in ${live}, you don\'t like JavaScript!`);
}
else {
    alert('Please enter yes or no');
}