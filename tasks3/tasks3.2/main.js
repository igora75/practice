//1*********************************************
let car = {
    brand: 'vw',
    model: 'golf',
    year: 2004,
    color: 'gray'
};

//2**********************************************
let notebook = {
    color: 'silver',
    user: { name: 'ihor', age: 18 },
    inside: ['cpu', 'battery', 'hdd', 'mother board']
};

//3**********************************************
for (let key in car) {
    console.log(key);
};

for (let key in notebook) {
    console.log(key);
};

//4**********************************************
console.log(Object.keys(car));
console.log(Object.keys(notebook));

//5********************************************
let cars = [{ model: 'lanos', year: 2000, power: 101, color: 'white' },
{ model: 'colt', year: 2017, power: 101, color: 'red' },
{ model: 'model s', year: 2003, power: 101, color: 'black' },
{ model: 'camry', year: 2008, power: 101, color: 'cyan' },
{ model: 'berlingo', year: 2009, power: 101, color: 'green' },
{ model: 'c4', year: 2015, power: 101, color: 'blue' },
{ model: 'passat', year: 2014, power: 101, color: 'gold' },
{ model: 'golf', year: 2013, power: 101, color: 'orange' },
{ model: '2109', year: 2001, power: 101, color: 'gray' },
{ model: 'logan', year: 2005, power: 101, color: 'white' },];

//6***************************************************
let cities = [{ name: 'lviv', population: 750000, country: 'ukraine', region: 'lvivska' },
{ name: 'kyiv', population: 2500000, country: 'ukraine', region: 'kyivska' }];

//7**************************************************
let cars2 = [{ model: 'lanos', year: 2000, power: 101, color: 'white', driver: { name: 'vasia', age: 18, sex: 'male', stag: 2 } },
{ model: 'colt', year: 2017, power: 101, color: 'red', driver: { name: 'vasia', age: 18, sex: 'male', stag: 5 } }];

//8************************************************
let i = 0;
while (i < cars.length) {
    console.log(cars[i]);
    i++;
};
let j = 0;
while (j < cities.length) {
    console.log(cities[j]);
    j++;
};
let k = 0;
while (k < cars2.length) {
    console.log(cars2[k]);
    k++;
};

//9**************************************************
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
};
for (let i = 0; i < cities.length; i++) {
    console.log(cities[i]);
};
for (let i = 0; i < cars2.length; i++) {
    console.log(cars2[i]);
};

//10**************************************************
for (let car of cars) {
    console.log(car);
};
for (let citi of cities) {
    console.log(citi);
};
for (let car2 of cars2) {
    console.log(car2);
};

//11***************************************************
let carJson = JSON.stringify(car);
console.log(carJson);

//12*********************************************
let parseJson = JSON.parse(carJson);
console.log(parseJson);

//13***********************************************
for (let car of cars) {
    console.log(JSON.stringify(car));
};

//14*************************************************
for (let citi of cities) {
    console.log(JSON.stringify(citi));
};

//15***************************************************
arr = [];
for (let car2 of cars2) {
    let cars2Json = JSON.stringify(car2);
    arr.push(cars2Json);
};

//16****************************************************
let users = [{ name: 'Ihor', skills: ['JS', 'Python', 'C++'], age: 44 },
{ name: 'Oleh', skills: ['C#', 'Python', 'Basic'], age: 18 }];

for (let user of users) {
    for (let skill of user.skills) {
        console.log(skill);
    };
};

//17*********************************************************
let arrUser = [];
let users1 = [{ name: 'Ihor', skills: ['JS', 'Python', 'C++'], age: 44 },
{ name: 'Oleh', skills: ['C#', 'Python', 'Basic'], age: 18 }];

for (let user of users1) {
    for (let skill of user.skills) {
        arrUser.push(skill);
        console.log(skill);
    };
};
console.log(arrUser);

//19*************************************************************
let users5 = [{ name: 'vasya', age: 31, status: false, skills: ['java', 'js'] },
{ name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html'] },
{ name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo'] },
{ name: 'olya', age: 28, status: false, skills: ['java', 'js'] },
{ name: 'max', age: 30, status: true, skills: ['mysql', ',mongo'] }];

for (let user5 of users5) {
    console.log(user5);
    for (let skill of user5.skills) {
        console.log(skill);
    };
};

//24*****************************************************************
let arrUsers10 = [];
let users10 = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: { city: 'New York', country: 'USA', street: 'East str', houseNumber: 21 }
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: { city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78 }
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: { city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56 }
}, {
    name: 'max',
    age: 30,
    status: true,
    address: { city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39 }
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: { city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5 }
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: { city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90 }
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: { city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33 }
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: { city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1 }
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: { city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4 }
}, {
    name: 'max',
    age: 31,
    status: true,
    address: { city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45 }
}];

for (let user10 of users10) {
    arrUsers10.push(user10.address);
    console.log(user10.address);
};
console.log(arrUsers10);

//25**************************************************
// for (let user10 of users10) {
//     let div = document.createElement('div');
//     div.innerText = `${user10.name}\n${user10.age}\n${user10.status}\n${user10.address}`;
//     document.body.append(div);
// }

//26******************************************************
// for (let user10 of users10) {
//     let div = document.createElement('div');
//     div.innerHTML = `<div>${user10.name}</div>\n<div>${user10.age}</div>\n
//     <div>${user10.status}</div>\n<div>${user10.address}</div>`;
//     document.body.append(div);
// }

for (let user10 of users10) {
    let div = document.createElement('div');
    let div2 = document.createElement('div');
    div.append(div2);
    document.body.append(div);
}