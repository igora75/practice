//создать массив с 20 числами.
//при помощи метода sort и колбека  отсортировать массив.
//при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
//при помощи filter получить числа кратные 3
//при помощи filter получить числа кратные 10
//перебрать (проитерировать) массив при помощи foreach()
//перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
let arr = [23, 45, 76, 0, 20, 76, 22, 98, 65, 11, 34, 44, 63, 120, 3, 16, 49, 12, 6, 7];

arr.sort((a, b) => a - b);

arr.sort((a, b) => b - a);

const result = arr.filter(value => value % 3 === 0);

const result1 = arr.filter(value => value % 10 === 0);

arr.forEach(item => console.log(item));

const result3 = arr.map(item => console.log(item * 3));

//создать массив со словами на 15-20 элементов.
//-- отсортировать его по алфавиту в восходящем порядке.
//-- отсортировать его по алфавиту  в нисходящем порядке.
//-- отфильтровать слова длиной менее 4х символов
//-- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце   
let wordArr = ['adfgfhgj', 'ytyuy', 'ytupop', 'xbnuity', 'vhgkjl',
  'phghv', 'nkhgfh', 'qjhk', 'ag', 'brytiuu',
  'iopofyjh', 'ehgjhh', 'fghjkl', 'zgbvbn', 'sghjk',
  'tkooh', 'chjhkj', 'dyiuioii', 'ufdhg', 'hui'];

//wordArr.sort();

wordArr.sort();
wordArr.reverse();

const less4 = wordArr.filter(val => val.length < 4);

const resultA = wordArr.map(elem => elem + '!');

//Все робити через функції масивів (foreach, map ...тд)
//Дан масив :
//let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];
//- відсортувати його за  віком (зростання , а потім окремо спадання)
//- відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
//- пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор 
//(По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
//- відсортувати його за індентифікатором
let users = [{ name: 'vasya', age: 31, status: false }, { name: 'petya', age: 30, status: true },
{ name: 'kolya', age: 29, status: true }, { name: 'olya', age: 28, status: false },
{ name: 'max', age: 30, status: true }, { name: 'anya', age: 31, status: false },
{ name: 'oleg', age: 28, status: false }, { name: 'andrey', age: 29, status: true },
{ name: 'masha', age: 30, status: true }, { name: 'olya', age: 31, status: false },
{ name: 'max', age: 31, status: true }];

users.sort((a, b) => a.age - b.age);
users.sort((a, b) => b.age - a.age);

users.sort((a, b) => a.name.length - b.name.length);
users.sort((a, b) => b.name.length - a.name.length);

let res = users.map((current, index) => {
  let movie = Object.assign({}, current);
  movie.id = `user${index + 1}`;
  return movie;
});

res.sort((a, b) => a.id.slice(4) - b.id.slice(4));

//наисать функцию калькулятора с 2мя числами и колбеком
function Calc2(a, b, act) {
  return act(a, b)
}
console.log(Calc2(23, 11, (a, b) => a * b));

//наисать функцию калькулятора с 3мя числами и колбеком
function Calc3(a, b, c, cal) {
  return cal(a, b, c)
};
console.log(Calc3(23, 58, 1, (a, b, c) => a + b - c));

//Відфільтрувати масив за наступними крітеріями :
let cars = [{
  producer: "subaru", model: "wrx", year: 2010, color: "blue", type: "sedan",
  engine: "ej204x", volume: 2, power: 400
}, {
  producer: "subaru", model: "legacy",
  year: 2007, color: "silver", type: "sedan", engine: "ez30", volume: 3, power: 250
},
{
  producer: "subaru", model: "tribeca", year: 2011, color: "white", type: "jeep",
  engine: "ej20", volume: 2, power: 300
}, {
  producer: "subaru", model: "leone", year: 1998,
  color: "yellow", type: "sedan", engine: "ez20x", volume: 2, power: 140
},
{
  producer: "subaru", model: "impreza", year: 2014, color: "red", type: "sedan",
  engine: "ej204x", volume: 2, power: 200
}, {
  producer: "subaru", model: "outback", year: 2014,
  color: "red", type: "hachback", engine: "ej204", volume: 2, power: 165
},
{
  producer: "bmw", model: "115", year: 2013, color: "red", type: "hachback",
  engine: "f15", volume: 1.5, power: 120
}, {
  producer: "bmw", model: "315", year: 2010,
  color: "white", type: "sedan", engine: "f15", volume: 1.5, power: 120
},
{
  producer: "bmw", model: "650", year: 2009, color: "black", type: "coupe",
  engine: "f60", volume: 6, power: 350
}, {
  producer: "bmw", model: "320", year: 2012,
  color: "red", type: "sedan", engine: "f20", volume: 2, power: 180
},
{
  producer: "mercedes", model: "e200", year: 1990, color: "silver", type: "sedan",
  engine: "eng200", volume: 2, power: 180
}, {
  producer: "mercedes", model: "e63",
  year: 2017, color: "yellow", type: "sedan", engine: "amg63", volume: 3, power: 400
},
{
  producer: "mercedes", model: "c250", year: 2017, color: "red", type: "sedan",
  engine: "eng25", volume: 2.5, power: 230
}];

//двигун більше 3х літрів
const res1 = cars.filter(vol => vol.volume > 3);

//двигун = 2л
const res2 = cars.filter(vol => vol.volume === 2);

//виробник мерс
const res3 = cars.filter(prod => prod.producer === 'mercedes');

//двигун більше 3х літрів + виробник мерседес
const res4 = cars.filter(val => val.volume > 3 && val.producer === 'mercedes');

//двигун більше 3х літрів + виробник субару
const res5 = cars.filter(val => val.volume > 3 && val.producer === 'subaru');

//сили більше ніж 300
const res6 = cars.filter(pow => pow.power > 300);

//сили більше ніж 300 + виробник субару
const res7 = cars.filter(val => val.power > 300 && val.producer === 'subaru');

//мотор серіі ej
const res8 = cars.filter(eng => eng.engine.indexOf('ej') === 0);

//сили більше ніж 300 + виробник субару + мотор серіі ej
const res9 = cars.filter(val => val.engine.indexOf('ej') === 0 &&
  val.power > 300 && val.producer === 'subaru');

//двигун меньше 3х літрів + виробник мерседес
const res10 = cars.filter(val => val.volume < 3 && val.producer === 'mercedes');

//двигун більше 2л + сили більше 250
const res11 = cars.filter(val => val.volume > 2 && val.power > 250);

//сили більше 250  + виробник бмв
const res12 = cars.filter(val => val.power > 250 && val.producer === 'bmw');

//взять слдующий массив
let usersWithAddress = [{
  id: 1, name: 'vasya', age: 31, status: false,
  address: { city: 'Lviv', street: 'Shevchenko', number: 16 }
},
{ id: 2, name: 'petya', age: 30, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 1 } },
{ id: 3, name: 'kolya', age: 29, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 121 } },
{ id: 4, name: 'olya', age: 28, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 90 } },
{ id: 5, name: 'max', age: 30, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 115 } },
{ id: 6, name: 'anya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 2 } },
{ id: 7, name: 'oleg', age: 28, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 22 } },
{ id: 8, name: 'andrey', age: 29, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 43 } },
{ id: 9, name: 'masha', age: 30, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 12 } },
{ id: 10, name: 'olya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 16 } },
{ id: 11, name: 'max', age: 31, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 121 } }];

//отсортировать его по id пользователей
usersWithAddress.sort((a, b) => a.id - b.id);

//отсортировать его по id пользователей в обратном опрядке
usersWithAddress.sort((a, b) => b.id - a.id);

//отсортировать его по возрасту пользователей
usersWithAddress.sort((a, b) => a.age - b.age);

//отсортировать его по возрасту пользователей в обратном порядке
usersWithAddress.sort((a, b) => b.age - a.age);

//отсортировать его по имени пользователей
usersWithAddress.sort((a, b) => a.name > b.name ? 1 : -1);

//отсортировать его по имени пользователей в обратном порядке
usersWithAddress.sort((a, b) => a.name < b.name ? 1 : -1);

//отсортировать его по названию улицы  в алфавитном порядке
usersWithAddress.sort((a, b) => a.address.street.toLowerCase() > b.address.street.toLowerCase() ? 1 : -1);

//отсортировать его по номеру дома по возрастанию
usersWithAddress.sort((a, b) => a.address.number - b.address.number);

//отфильтровать (оставить) тех кто младше 30
let res100 = usersWithAddress.filter(val => val.age < 30);

//отфильтровать (оставить) тех у кого отрицательный статус
let res101 = usersWithAddress.filter(val => !val.status);

//отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
let res102 = usersWithAddress.filter(val => !val.status && val.age < 30);

//отфильтровать (оставить) тех у кого номер дома четный
let res103 = usersWithAddress.filter(val => !(val.address.number % 2));

//Створити обєкт автомобіля з полями:
//Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
//Власник автомобіля теж має бути обєкт, у якого є поля
//Імя, вік, стаж водіння.
//Створити не менше 7 та не більше 20 машинок.
//Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% 
//(переприсвоєння змінної потужності).
//На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
//Для початку вкладіть всі наші створені автомобілі в масив cars.
//Далі необхідно рати кожну другу машинку (цикл з кроком в 2),
// та робити їй підвищення потужності двигуна на 10% та ціну на 5%
//Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, 
//але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації,
// що збільшить йому досвід на 1 рік.
//Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
let usersWithCars = [{ marka: 'toyota', power: 250, owner: { name: 'ivan', age: 28, period: 10 }, price: 10000, year: 2000 },
{ marka: 'nissan', power: 150, owner: { name: 'vova', age: 32, period: 14 }, price: 8000, year: 1998 },
{ marka: 'bmw', power: 220, owner: { name: 'ihor', age: 23, period: 4 }, price: 12000, year: 2004 },
{ marka: 'audi', power: 340, owner: { name: 'oleh', age: 43, period: 15 }, price: 24000, year: 2013 },
{ marka: 'mercedes', power: 180, owner: { name: 'petro', age: 19, period: 1 }, price: 28000, year: 2005 },
{ marka: 'lexus', power: 280, owner: { name: 'viktor', age: 24, period: 3 }, price: 14000, year: 2002 },
{ marka: 'acura', power: 275, owner: { name: 'nazar', age: 34, period: 4 }, price: 19000, year: 2008 }];

for (let i = 0; i < usersWithCars.length; i += 2) {
  usersWithCars[i].power += usersWithCars[i].power / 10;
  usersWithCars[i].price += usersWithCars[i].price / 20;
}

let sumPrice = 0;
for (let i of usersWithCars) {
  if (i.owner.period < 5 && i.owner.age > 25) i.owner.period++;
  sumPrice += i.price;
}

console.log(sumPrice);
//Задача: дан отсортированный по возрастанию массив целых чисел.
// Необходимо вернуть наименьший и наибольший индекс заданного элемента.
//Входные данные: arr — массив целых чисел значения которых по модулю не больше 10.
// Размер массива не более 10 элементов.
//Вывод: наибольший и наименьший индекс в массиве заданного элемента.
// Если такого элемента нет в массиве, выведите -1.

//Пример:
//Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
//1. Key = 1
//Answer: MinIndex = 0, MaxIndex = 0.
//2. Key = 4
//Answer: MinIndex = 3, MaxIndex = 6.
let Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];

function minMax(arr, key) {
  let min = 0;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      if (!min) min = i;
      max = i;
    }
  }
  min ? console.log(`MinIndex = ${min}, MaxIndex = ${max}`) : console.log(-1);
}
