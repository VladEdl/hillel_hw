'use strict';

const hasPromoCode = confirm('Ви маєте промокод?')
const cartTotal = +prompt('Введіть суму кошику')
const isBlackFriday = confirm("Сьогодні чорна п'ятниця?")
const isDiscountApplied = cartTotal >= 100 && (isBlackFriday || hasPromoCode)
const noDiscount = !isDiscountApplied;

console.log(isBlackFriday)
console.log(cartTotal)
console.log(hasPromoCode)

if (isDiscountApplied) {
    alert('Знижка застосована')
}

else{
    alert('Знижка не застосована')
}
console.log(isDiscountApplied);
console.log(noDiscount)
