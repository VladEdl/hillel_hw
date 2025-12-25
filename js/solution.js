'use strict';

document.body.style.backgroundColor = 'darkblue';

let bodyEl = document.body.querySelectorAll('li');
// console.log(bodyEl, ulId);
let ulEl = [];

for(const item of bodyEl) {
    const text = item.textContent;
    console.log(text)
    ulEl.push(text)
}
console.log('Довжина: ',bodyEl.length)
console.log(ulEl)
