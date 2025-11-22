'use strict';


const price = +prompt("What is the price this product?");

const discount = +prompt("What is the discount on this product? Enter the value in %");

let result;

if (isNaN(price)) {
    alert('This value is not a number.');
}
else if (price <= 0) {
        alert('Please enter price more than 0');
}
else if (isNaN(discount)) {
    alert('Discount is not a number');
}
 else if (discount <= 0) {
    alert('Please enter discount more than 0');
}
else {
    result = price-(price / 100 * discount);
    alert(`Starting price: ${price} discount amount: ${discount} Price with discount: ${result}`);
}
