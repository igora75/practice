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

//27*******************************************************
for (let user10 of users10) {
    let div = document.createElement('div');

    let divName = document.createElement('div');
    divName.innerText = user10.name;

    let divAge = document.createElement('div');
    divAge.innerText = user10.age;

    let divStatus = document.createElement('div');
    divStatus.innerText = user10.status;

    let divAddress = document.createElement('div');

    let divCity = document.createElement('div');
    divCity.innerText = user10.address.city;

    let divCountry = document.createElement('div');
    divCountry.innerText = user10.address.country;

    let divStreet = document.createElement('div');
    divStreet.innerText = user10.address.street;

    let divNumber = document.createElement('div');
    divNumber.innerText = user10.address.houseNumber;

    divAddress.append(divCity, divCountry, divStreet, divNumber);
    div.append(divName, divAge, divStatus, divAddress);
    document.body.append(div);
}

//87*******************************************************
let usersWithId = [{ id: 1, name: 'vasya', age: 31, status: false }, { id: 2, name: 'petya', age: 30, status: true }, { id: 3, name: 'kolya', age: 29, status: true }, { id: 4, name: 'olya', age: 28, status: false },];
let citiesWithId = [{ user_id: 3, country: 'USA', city: 'Portland' }, { user_id: 1, country: 'Ukraine', city: 'Ternopil' }, { user_id: 2, country: 'Poland', city: 'Krakow' }, { user_id: 4, country: 'USA', city: 'Miami' },];
let arr1 = [];

for (let userId of usersWithId) {
    for (let citiesId of citiesWithId) {
        if (userId.id === citiesId.user_id) {
            userId.address = citiesId;
            arr1.push(userId);
        }
    }
}
console.log(arr1);

//100*****************************************************
let div = document.createElement('div');
div.id = '#1';
div.className = 'block';
div.innerText = 'My block';

document.body.append(div);

let a = document.getElementById('#1');
a.innerText = 'Modify block';
a.style.height = '50px';
a.style.width = '50px';
console.log(a.innerText);

let b = document.getElementsByClassName('block');
b[0].innerText = 'Modify block2';
a.style.height = '50px';
a.style.width = '50px';
console.log(b[0].innerText);

// let c = document.getElementsByTagName('div');
// c[0].innerText = 'Modify block3';
// a.style.height = '50px';
// a.style.width = '50px';
// console.log(c[0].innerText);

//103***********************************************
let table1 = document.createElement('table');

let tr1 = document.createElement('tr');

let td1 = document.createElement('td');
td1.innerText = '11111';
let td2 = document.createElement('td');
td2.innerText = '22222';
let td3 = document.createElement('td');
td3.innerText = '33333';

table1.append(tr1);
tr1.append(td1, td2, td3);

document.body.append(table1);

//104*************************************************
let table2 = document.createElement('table');
for (let i = 0; i < 10; i++) {
    let tr2 = document.createElement('tr');
    table2.append(tr2);

    let td1 = document.createElement('td');
    td1.innerText = 'aaaaa';
    let td2 = document.createElement('td');
    td2.innerText = 'bbbbb';
    let td3 = document.createElement('td');
    td3.innerText = 'ccccc';

    tr2.append(td1, td2, td3);
}
document.body.append(table2);

//105***********************************************
let table3 = document.createElement('table');

for (let i = 0; i < 10; i++) {
    let tr3 = document.createElement('tr');
    table3.append(tr3);
    for (let j = 0; j < 5; j++) {
        let tdN = document.createElement('td');
        tdN.innerText = '33333';
        tr3.append(tdN);
    }
}
document.body.append(table3);

//106****************************************************
// let N = +prompt('N=');
// let M = +prompt('M=');
// let table4 = document.createElement('table');

// for (let i = 0; i < N; i++) {
//     let tr4 = document.createElement('tr');
//     table4.append(tr4);
//     for (let j = 0; j < M; j++) {
//         let tdN = document.createElement('td');
//         tdN.innerText = '33333';
//         tr4.append(tdN);
//     }
// }
// document.body.append(table4);

//109****************************************************
// let classElements = document.getElementsByTagName('*');
// for (let classElem of classElements) {
//     if (classElem.className) {
//         console.log(classElem);
//     }
// }

//110*****************************************************
// let allPs = document.getElementsByTagName('p');
// for (let allP of allPs) {
//     allP.innerText = 'hello oktenweb!';
// }

//111*****************************************************
// let allDivs = document.getElementsByTagName('div');
// for (let allDiv of allDivs) {
//     allDiv.style.color = 'red';
// }

//121*******************************************************
let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];

for (let rule of rules) {
    let wrap = document.createElement('div');

    let innerDiv = document.createElement('div');
    innerDiv.innerText = rule.title;
    let innerBody = document.createElement('div');
    innerBody.innerText = rule.body;

    wrap.append(innerDiv, innerBody);

    document.body.append(wrap);
}
