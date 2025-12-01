'use strict'

const userValid = user.age >= 18 && verified === true && (user.isSubscribed === true || balance >= 0);
const orderValid = order.isPaid === true || balance >= order.total;
const systemSettingsValid = font > 12 && (systemSettings.language === 'en' || systemSettings.language === 'uk');

const finalAccess = userValid === true && orderValid === true && systemSettingsValid === true;

if (finalAccess === true) {
    console.log('Full access granted')
}
else {
    console.log('Access denied')

    if (userValid === false) {
        console.log('Blocked by: User settings (Age or Verification)')
    }
    if (orderValid === false) {
        console.log('Blocked by: Order (Payment or Balance)')
    }
    if (systemSettingsValid === false) {
        console.log('Blocked by: System Settings (Font or Language)')
    }
}
