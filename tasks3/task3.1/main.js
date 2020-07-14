//2***********************************************
// let dog = {
//     name: 'buffy',
//     age: 2,
//     color: 'black',
//     hight: .5,
//     weight: 10
// }
// let person = {
//     name: 'Ihor',
//     age: 32,
//     sex: 'male',
//     married: true,
//     skill: 'JS'
// }
// let car = {
//     brand: 'toyota',
//     color: 'green',
//     speed: 180,
//     engine: '1.8',
//     mileage: 53225
// }
// let apart = {
//     rooms: 2,
//     size: 54,
//     balcony: true,
//     kitchen: 1,
//     floor: 5
// }
// let book = {
//     name: 'kazka',
//     pages: 128,
//     circ: 20000,
//     genre: 'folklore',
//     year: 2018
// }

//9*******************************************
let dogs = [
    { name: 'dog1', age: .8 },
    { name: 'dog2', age: 1 },
    { name: 'dog3', age: 4 },
    { name: 'dog4', age: 2 },
    { name: 'dog5', age: 10 }
];
let persons = [
    { name: 'person1', age: 23 },
    { name: 'person2', age: 13 },
    { name: 'person3', age: 44 },
    { name: 'person4', age: 25 },
    { name: 'person5', age: 10 }
];
let cars = [
    { brand: 'toyota', maxspeed: 230 },
    { brand: 'seat', maxspeed: 130 },
    { brand: 'zaz', maxspeed: 144 },
    { brand: 'vw', maxspeed: 125 },
    { brand: 'daewoo', maxspeed: 100 }
];
console.log(dogs);
console.log(persons);
console.log(cars);

//14************************************************
let table = {
    legs: 4,
    material: { type: 'tree', color: 'green' },
    type: 'office',
    color: ['brown', 'white', 'black'],
    weight: 13.8
}

//23************************************************
let users = [
    { name: 'vasya', age: 31, status: false },
    { name: 'petya', age: 30, status: true },
    { name: 'kolya', age: 29, status: true },
    { name: 'olya', age: 28, status: false },
    { name: 'max', age: 30, status: true },
    { name: 'anya', age: 31, status: false },
    { name: 'oleg', age: 28, status: false },
    { name: 'andrey', age: 29, status: true },
    { name: 'masha', age: 30, status: true },
    { name: 'olya', age: 31, status: false },
    { name: 'max', age: 31, status: true }
];
console.log(users[7].status);

console.log(users[4].status);
console.log(users[10].status);

console.log(users[users.length - 2].name);

console.log(users[2].name);

console.log(users[6].age);

console.log(users[3].age);
console.log(users[9].age);

console.log(users[4].age + ' ' + users[4].name);

console.log(users[5].age + ' ' + users[5].status);


