'use strict'

const email = prompt ('Enter your email')
const password = prompt ('Enter your password')
const isEmailVerified = confirm ('Your email is verified?')
const canLogin = isEmailVerified === true && email !== null && email !== "" && password != null && password !== "";
if (canLogin === true) {
    alert('Login is successfully')
}
else {
    alert('Login failed.')
}
console.log(canLogin)