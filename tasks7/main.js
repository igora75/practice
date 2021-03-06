// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
let div = document.createElement('div');
div.id = 'text';
div.innerText = 'Hi';

let button = document.createElement('button');
button.innerText = 'Hide';

document.body.append(div, button);

button.onclick = () => document.getElementById('text').hidden = true;

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
let button2 = document.createElement('button');
button2.innerText = 'Hide2';

document.body.append(button2);

button2.onclick = () => button2.hidden = true;

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача
let input3 = document.createElement('input');
let button3 = document.createElement('button');
button3.innerText = 'Btn';

document.body.append(input3, button3);

button3.onclick = () => {
  if (input3.value < 18) {
    alert('Увага, Вам немає 18 років');
  }
}

// - Создайте меню, которое раскрывается/сворачивается при клике
let a = document.querySelector('.list');
let subMenu = document.querySelector('.subMenu');

let flag = false;

a.onclick = () => {
  if (flag) {
    subMenu.hidden = false;
    flag = false;
  } else {
    subMenu.hidden = true;
    flag = true;
  }
}

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.
let commentArr = [{ title: 'lorem', body: 'lorem ipsum dolo sit ameti' },
{ title: 'lorem', body: 'lorem ipsum dolo sit ameti' },
{ title: 'lorem', body: 'lorem ipsum dolo sit ameti' },
{ title: 'lorem', body: 'lorem ipsum dolo sit ameti' },
{ title: 'lorem', body: 'lorem ipsum dolo sit ameti' }];

for (let obj of commentArr) {
  let div = document.createElement('div');

  let h2 = document.createElement('h2');
  h2.innerText = obj.title;

  let p = document.createElement('p');
  p.innerText = obj.body;

  let btn = document.createElement('button');
  btn.innerText = 'hide';

  btn.onclick = () => {
    if (p.hidden) {
      p.hidden = false;
    } else {
      p.hidden = true;
    }
  }

  div.append(h2, p, btn);
  document.body.append(div);
};

// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та
// виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
let btn = document.querySelector('.btnForm');

let in1 = document.querySelector('.inp11');
let in2 = document.querySelector('.inp12');
let in3 = document.querySelector('.inp21');
let in4 = document.querySelector('.inp22');

btn.onclick = () => {
  console.log(in1.value);
  console.log(in2.value);
  console.log(in3.value);
  console.log(in4.value);
}

// - Створити функцію, яка генерує таблицю.
// Перший аргумент визначає кількість строк.
// Другий параметр визначає кліькіть ячеєк в кожній строці.
// Третій параметр визначає елемент в який потрібно таблицю додати.
function tableGen(rows, columns, elem) {
  let el = document.createElement(elem);
  let tab = document.createElement('table');

  for (let i = 0; i < rows; i++) {
    let row = document.createElement('tr');
    tab.append(row);
    for (let j = 0; j < columns; j++) {
      let column = document.createElement('td');
      column.innerText = 'aaaaaa';
      row.append(column);
    }
  }

  el.append(tab);
  document.body.append(el);
}

// tableGen(4, 5, 'div')
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
function tableGen1(rows, columns, text) {
  let el = document.createElement('div');
  let tab = document.createElement('table');

  for (let i = 0; i < rows; i++) {
    let row = document.createElement('tr');
    tab.append(row);
    for (let j = 0; j < columns; j++) {
      let column = document.createElement('td');
      column.innerText = text;
      row.append(column);
    }
  }

  el.append(tab);
  document.body.append(el);
}

let input111 = document.querySelector('.input1');
let input222 = document.querySelector('.input2');
let input333 = document.querySelector('.input3');
let knopka = document.querySelector('.formBtn');

knopka.onclick = () => {
  tableGen1(input111.value, input222.value, input333.value);
}

// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
let imgArr = ['8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg'];

let img = document.createElement('img');

let leftBtn = document.createElement('button');
let rightBtn = document.createElement('button');

leftBtn.innerText = 'Left';
rightBtn.innerText = 'Right';

let index = 0;
img.src = imgArr[index];

leftBtn.onclick = () => {
  index--;
  if (index < 0) index = imgArr.length - 1;
  img.src = imgArr[index];
}

rightBtn.onclick = () => {
  index++;
  if (index > imgArr.length - 1) index = 0;
  img.src = imgArr[index];
}

document.body.append(img, leftBtn, rightBtn);
// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку
let arrMat = ['fffg', 'dsr', 'ahhg', 'xrh', 'pdsfv'];

let input7 = document.createElement('input');

let button7 = document.createElement('button');
button7.innerText = 'Revise';

button7.onclick = () => {
  for (let word of arrMat) {
    if (input7.value === word) alert('no-no-no');
  }
}

document.body.append(input7, button7);

// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку
let arrMat1 = ['fffg', 'dsr', 'ahhg', 'xrh', 'pdsfv'];

let input8 = document.createElement('input');

let button8 = document.createElement('button');
button8.innerText = 'Revise';

button8.onclick = () => {
  for (let word of arrMat1) {
    for (let inpVal of input8.value.split(' ')) {
      if (inpVal === word) alert('no-no-no');
    }
  }
}

document.body.append(input8, button8);

//создать скрипт, который берет считывает на странице (rules.html) текст и 
//делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
//При клике на пункт оглавления вы должны отправляться к этому пункту в тексте
//***** Скрипт в самому файлі rules.html******************//

// -- взять массив пользователей
// let usersWithAddress = [
//                 {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//                 {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//                 {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//                 {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//                 {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//                 {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//                 {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//                 {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//                 {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//                 {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//                 {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
//             ];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
let usersWithAddress = [
  { id: 1, name: 'vasya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 16 } },
  { id: 2, name: 'petya', age: 30, status: true, address: { city: 'Kyiv', street: 'Shevchenko', number: 1 } },
  { id: 3, name: 'kolya', age: 29, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 121 } },
  { id: 4, name: 'olya', age: 28, status: false, address: { city: 'Ternopil', street: 'Shevchenko', number: 90 } },
  { id: 5, name: 'max', age: 30, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 115 } },
  { id: 6, name: 'anya', age: 31, status: false, address: { city: 'Kyiv', street: 'Shevchenko', number: 2 } },
  { id: 7, name: 'oleg', age: 28, status: false, address: { city: 'Ternopil', street: 'Shevchenko', number: 22 } },
  { id: 8, name: 'andrey', age: 29, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 43 } },
  { id: 9, name: 'masha', age: 30, status: true, address: { city: 'Kyiv', street: 'Shevchenko', number: 12 } },
  { id: 10, name: 'olya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 16 } },
  { id: 11, name: 'max', age: 31, status: true, address: { city: 'Ternopil', street: 'Shevchenko', number: 121 } }
];

let div100 = document.createElement('div');
div100.innerText = toString(usersWithAddress);

let check1 = document.createElement('input');
let check2 = document.createElement('input');
let check3 = document.createElement('input');

let lab1 = document.createElement('label');
let lab2 = document.createElement('label');
let lab3 = document.createElement('label');

lab1.innerText = 'со статусом false';
lab2.innerText = 'старше 29 лет';
lab3.innerText = 'город киев';

let butt = document.createElement('button');
butt.innerText = 'check';

check1.type = 'checkbox';
check2.type = 'checkbox';
check3.type = 'checkbox';

butt.onclick = () => {
  let myArr = JSON.parse(toString(usersWithAddress));

  if (check1.checked) {
    myArr = myArr.filter(elem => !elem.status);
  };
  if (check2.checked) {
    myArr = myArr.filter(elem => elem.age >= 29);
  };
  if (check3.checked) {
    myArr = myArr.filter(elem => elem.address.city === 'Kyiv');
  };
  div100.innerText = '';
  div100.innerText = toString(myArr);
}

document.body.append(div100, lab1, check1, lab2, check2, lab3, check3, butt);

function toString(arr) {
  return JSON.stringify(arr);
}
// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
// Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне


// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан
