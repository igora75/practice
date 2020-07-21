
//- создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. 
//(Т.е поле name  должно присутствовать только 1 раз в одном объекте )
let car = {
    brand: 'vw',
    model: 'golf',
    year: 2004,
    color: 'gray'
};

//создать 5 объектов с полностью разным набором полей.
// В каждом объекте должен присутсвовать массив и внутренний объект.
// Опишите что угодно, машину, картину, болт...
// Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };

let notebook = {
    color: 'silver',
    user: { name: 'ihor', age: 18 },
    inside: ['cpu', 'battery', 'hdd', 'mother board']
};

//При помощи for in вывести все ключи всех объектов из задания 1 и 2
for (let key in car) {
    console.log(key);
};

for (let key in notebook) {
    console.log(key);
};

//При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2

console.log(Object.keys(car));
console.log(Object.keys(notebook));

//Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет.
// (Значаения полей могу быть выдуманными)

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

//Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион.
// (Значаения полей могу быть выдуманными)
let cities = [{ name: 'lviv', population: 750000, country: 'ukraine', region: 'lvivska' },
{ name: 'kyiv', population: 2500000, country: 'ukraine', region: 'kyivska' }];

//Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель.
// Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
let cars2 = [{ model: 'lanos', year: 2000, power: 101, color: 'white', driver: { name: 'vasia', age: 18, sex: 'male', stag: 2 } },
{ model: 'colt', year: 2017, power: 101, color: 'red', driver: { name: 'vasia', age: 18, sex: 'male', stag: 5 } }];

//проитерировать каждый массив из задания 5,6,7 при помощи while.
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

//проитерировать каждый массив из задания 5,6,7 при помощи for .
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
};
for (let i = 0; i < cities.length; i++) {
    console.log(cities[i]);
};
for (let i = 0; i < cars2.length; i++) {
    console.log(cars2[i]);
};

//проитерировать каждый массив из задания 5,6,7 при помощи  for of.
for (let car of cars) {
    console.log(car);
};
for (let citi of cities) {
    console.log(citi);
};
for (let car2 of cars2) {
    console.log(car2);
};

//взять объекты из задания 1 и превратить каждый в json.
let carJson = JSON.stringify(car);
console.log(carJson);

//взять json из задания 11 и превратить их обратно в объекты.
let parseJson = JSON.parse(carJson);
console.log(parseJson);

//взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
for (let car of cars) {
    console.log(JSON.stringify(car));
};

//взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
for (let citi of cities) {
    console.log(JSON.stringify(citi));
};

//взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
arr = [];
for (let car2 of cars2) {
    let cars2Json = JSON.stringify(car2);
    arr.push(cars2Json);
};

//Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом.
// Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills

let users = [{ name: 'Ihor', skills: ['JS', 'Python', 'C++'], age: 44 },
{ name: 'Oleh', skills: ['C#', 'Python', 'Basic'], age: 18 }];

for (let user of users) {
    for (let skill of user.skills) {
        console.log(skill);
    };
};

//Создать массив пользователей.
// У каждого пользователя обязательно должено быть поле skills которое является массивом.
// Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills.
// Скопировать все skills всех пользователей в отедльный массив
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

//За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
//let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']}, 
//{name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
// {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']},
// {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
// {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];

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

//З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
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

//За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
// Всі данні в одному блоці.
// for (let user10 of users10) {
//     let div = document.createElement('div');
//     div.innerText = `${user10.name}\n${user10.age}\n${user10.status}\n${user10.address}`;
//     document.body.append(div);
// }

//За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам (div>div*4)

// for (let user10 of users10) {
//     let div = document.createElement('div');
//     div.innerHTML = `<div>${user10.name}</div>\n<div>${user10.age}</div>\n
//     <div>${user10.status}</div>\n<div>${user10.address}</div>`;
//     document.body.append(div);
// }

//За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
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

//Дано 2 масиви з рівною кількістю об'єктів.
//Масиви:
//let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
//let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
//З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//Записати цей об'єкт в новий масив
//Частковий приклад реультату:
//let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]

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

//- створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
//- змінити цей текст використовуючи селектори id, class,  tag
//- змінити висоту та ширину блоку використовуючи селектори id, class,  tag

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

//за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
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

//за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
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

//за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
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

//за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені.
// n та m отримати з prompt

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

//Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
//index1.html
// - знайти всі елементі, які мають class

// let classElements = document.getElementsByTagName('*');
// for (let classElem of classElements) {
//     if (classElem.className) {
//         console.log(classElem);
//     }
// }

//знайти всі параграфи ,та змінити текст на hello oktenweb!
// let allPs = document.getElementsByTagName('p');
// for (let allP of allPs) {
//     allP.innerText = 'hello oktenweb!';
// }

//знайти всі div та змінити ім колір на червоний
// let allDivs = document.getElementsByTagName('div');
// for (let allDiv of allDivs) {
//     allDiv.style.color = 'red';
// }

//Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

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
