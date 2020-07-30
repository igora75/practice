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

users.sort((a, b) => a.age > b.age ? 1 : -1);
users.sort((a, b) => a.age > b.age ? -1 : 1);

users.sort((a, b) => a.name.length > b.name.length ? 1 : -1);
users.sort((a, b) => a.name.length > b.name.length ? -1 : 1);

let idArr =users.map();


console.log(idArr);