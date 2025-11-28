'use strict'

const people = [
    { name: "Anna", age: 22 },
    { name: "Oleg", age: 31 },
    { name: "Maria", age: 27 }
];

const firstPersonName = people[0].name;
console.log(firstPersonName);

let oldest;
if (people[0].age > people[1].age && people[0].age > people[2].age) {
        oldest = people[0];
}
else if (people[1].age > people[2].age) {
        oldest = people[1];
}
else {
    oldest = people[2];
}
console.log(oldest);

const sum = people[0].age + people[1].age + people[2].age;

let ageSummary = {
    total: sum,
    average: sum / 3
}
console.log(ageSummary);