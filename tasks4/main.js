//створити функцію яка виводить масив
function showArr(arr) {
    console.log(arr);
};

//створити функцію яка заповнює масив рандомними числами та виводить його. 
//Для виведення використати попвередню функцію.
function randArr() {
    arrResult = [];
    for (let i = 0; i < 10; i++) {
        arrResult.push(Math.round(Math.random() * 100));
    };
    showArr(arrResult);
};

//створити функцію яка приймає три числа та виводить та повертає найменьше.
function minNum(num1, num2, num3) {
    let min = num1;
    if (num2 < min) {
        min = num2;
    };
    if (num3 < min) {
        min = num3;
    };
    console.log(min);
    return min;
};

//створити функцію яка приймає три числа та виводить та повертає найбільше.
function maxNum(num1, num2, num3) {
    let max = num1;
    if (num2 > max) {
        max = num2;
    };
    if (num3 > max) {
        max = num3;
    };
    console.log(max);
    return max;
};

//створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
function minMax() {
    let min = arguments[0];
    let max = arguments[0];

    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        };
        if (arguments[i] < min) {
            min = arguments[i];
        };
    };

    console.log(`max=${max}`);
    return min;
};

//створити функцію яка виводить масив
// function showArr(arr) {
//     console.log(arr);
// };
//створена в п.1

//створити функцію яка повертає найбільше число з масиву
function maxNumArr() {
    let max = arguments[0][0];

    for (let i = 0; i < arguments[0].length; i++) {
        if (arguments[0][i] > max) {
            max = arguments[0][i];
        }
    }

    return max;
};

//створити функцію яка повертає найменьше число з масиву
function minNumArr() {
    let min = arguments[0][0];

    for (let i = 0; i < arguments[0].length; i++) {
        if (arguments[0][i] < min) {
            min = arguments[0][i];
        }
    }

    return min;
};

//створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
function sumArr(arr) {
    let n = 0;
    for (let i = 0; i < arr.length; i++) {
        n += arr[i];
    }
    return n;
}

//створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function aryfmArr(arr) {
    let n = 0;
    for (let i = 0; i < arr.length; i++) {
        n += arr[i];
    }
    return n / arr.length;
}

//Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
function countObj(arr) {
    let count = 0;
    for (let elem of arr) {
        if (typeof elem === 'object') {
            count++;
        }
    }
    console.log(count);
}

//Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
function countFilds(arr) {
    let count = 0;
    for (let obj of arr) {
        for (let key in obj) {
            count++;
        }
    }
    return count;
};

//створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
function sumElemArr(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        result.push(arr1[i] + arr2[i])
    }
    return result;
}

//приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
function changeElem(arr, i) {
    let temp = arr[i + 1];
    arr[i + 1] = arr[i];
    arr[i] = temp;
}

// створити функцію яка буде переносити елементи з значенням 0 у кінець маисву.
// Зберігаючи при цьому порядок не нульових значень.
//Двожина масиву від 2 до 100
function replaceZero(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (!arr[i]) {
            while (arr[i + 1] && i !== arr.length - 1) {
                let temp = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = temp;
                i++;
            }
        }
    }
}

//Створити функцію яка :
//- Додає в боді блок з текстом "Hello owu"
function addDiv() {
    let mydiv = document.createElement('div');
    mydiv.innerText = "Hello owu";
    document.body.append(mydiv);
}

//- Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
function addTextElem(type, text) {
    let myElem = document.createElement(type);
    myElem.innerText = text;
    document.body.append(myElem);
}

//приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати 
//список цих автомобілів.
//Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Всі властивості авто в обному блоці
let cars = [{ model: 'lanos', year: 2000, power: 101, color: 'white' },
{ model: 'colt', year: 2017, power: 98, color: 'red' },
{ model: 'model s', year: 2003, power: 201, color: 'black' },
{ model: 'camry', year: 2008, power: 180, color: 'cyan' },
{ model: 'berlingo', year: 2009, power: 75, color: 'green' },
{ model: 'c4', year: 2015, power: 120, color: 'blue' },
{ model: 'passat', year: 2014, power: 150, color: 'gold' },
{ model: 'golf', year: 2013, power: 102, color: 'orange' },
{ model: '2109', year: 2001, power: 65, color: 'gray' },
{ model: 'logan', year: 2005, power: 78, color: 'white' },];

function setinBlock(arr, idcars) {
    let wrap = document.createElement('div');
    wrap.id = idcars;

    for (let obj of arr) {
        let div = document.createElement('div');
        div.innerText = `${obj.model}\n${obj.year}\n${obj.power}\n${obj.color}`;

        wrap.append(div);
        document.body.append(wrap);
    }
}
//приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати 
//список цих автомобілів.
//Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
//Для кожної властивості створити всередені блока автомоблія свій блок
let cars1 = [{ model: 'lanos', year: 2000, power: 101, color: 'white' },
{ model: 'colt', year: 2017, power: 98, color: 'red' },
{ model: 'model s', year: 2003, power: 201, color: 'black' },
{ model: 'camry', year: 2008, power: 180, color: 'cyan' },
{ model: 'berlingo', year: 2009, power: 75, color: 'green' },
{ model: 'c4', year: 2015, power: 120, color: 'blue' },
{ model: 'passat', year: 2014, power: 150, color: 'gold' },
{ model: 'golf', year: 2013, power: 102, color: 'orange' },
{ model: '2109', year: 2001, power: 65, color: 'gray' },
{ model: 'logan', year: 2005, power: 78, color: 'white' },];

function setinBlock2(arr, idcars) {
    let wrap = document.createElement('div');
    wrap.id = idcars;

    for (let obj of arr) {
        let div = document.createElement('div');
        div.innerHTML = `<div>${obj.model}</div>
        <div>${obj.year}</div>
        <div>${obj.power}</div>
        <div>${obj.color}</div>`;

        wrap.append(div);
        document.body.append(wrap);
    }
}

//функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача 
//та місто з відповідними "id" та "user_id",
//та повертає масив цих з'єднаних об'єктів.
//Приклад масивів:
//            let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false},
// {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true},
// {id: 4, name: 'olya', age: 28, status: false},];
//            let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'},
//{user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'},
// {user_id: 4, country: 'USA', city: 'Miami'},];
let usersWithId = [{ id: 1, name: 'vasya', age: 31, status: false },
{ id: 2, name: 'petya', age: 30, status: true },
{ id: 3, name: 'kolya', age: 29, status: true },
{ id: 4, name: 'olya', age: 28, status: false },];

let citiesWithId = [{ user_id: 3, country: 'USA', city: 'Portland' },
{ user_id: 1, country: 'Ukraine', city: 'Ternopil' },
{ user_id: 2, country: 'Poland', city: 'Krakow' },
{ user_id: 4, country: 'USA', city: 'Miami' },];

function concatObj(arr1, arr2) {
    for (let obj1 of arr1) {
        for (let obj2 of arr2) {
            if (obj1.id === obj2.user_id) {
                obj1.country = obj2.country;
                obj1.city = obj2.city;
            }
        }
    }
    return arr1;
}

//беремо завдання з правилами з укроку №3 :
//Та робимо це функцією.При цьому правила отримувати через аргумент.
//"Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, 
//та робить з кожне правило в окремому блоці.
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

function inBlock(arr) {

    for (let obj of arr) {
        let wrap = document.createElement('div');

        let titleDiv = document.createElement('div');
        titleDiv.innerText = obj.title;
        let bodyDiv = document.createElement('div');
        bodyDiv.innerText = obj.body;

        wrap.append(titleDiv, bodyDiv);
        document.body.append(wrap);
    }
}

//Точная степень двойки.
//Дано натуральное число N.
//Выведите слово YES, если число N является точной степенью двойки,
//или слово NO в противном случае.
//Операцией возведения в степень пользоваться нельзя!
function num(akk = 1, n) {
    if (akk <= n) {
        if (akk === n) {
            console.log('YES');
            return;
        } else {
            num(akk *= 2, n);
        }
    } else console.log('NO');
}

//Deep Copy
//реалізувати глибоке копіювання обєкту за допомогою рекурсій
function copyObj(obj) {
    let result = {}

    for (let prop in obj) {
        if (typeof obj[prop] === 'object') {
            result[prop] = copyObj(obj[prop]);
        } else {
            result[prop] = obj[prop];
        }
    }
    return result;
}

//Вирівняти багаторівневий масив в однорівневий
let arr = [1, 3, ['Hello', 'Wordd', [9, 6, 1]], ['oops'], 9];

function flatten(arr, result = []) {

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flatten(arr[i], result);
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}