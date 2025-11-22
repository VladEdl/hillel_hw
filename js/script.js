'use strict';

const age = +prompt('How old are you?')
console.log(age)

let olderPerson

if (age <= 0) {
    alert('You have not entered your age.')
}

else if (age <= 17) {
    olderPerson = confirm('Is there anyone who older than you?')
    if (olderPerson === true) {
        alert('Enjoy watching')
    }
    else{
        alert('Access is forbidden')
    }
}

else if (isNaN(age)){
    alert('Incorrect value')
}
else {
    alert('Enjoy watching');
}

