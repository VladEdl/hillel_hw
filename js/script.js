'use strict';

const user = {
        name: "Alex",
        age: "25",
        city: "Kyiv",
        job: "Frontend"
};
const { name, age, city, job } = user;
console.log(name, age, city, job);

const shortInfo = {name, city};
console.log(shortInfo);

const renamed = {
    fullName: name,
    location: city
}
console.log(renamed);