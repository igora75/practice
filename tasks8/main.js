// - Дана textarea.
// В неё вводится текст.
// Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
// let textarea = document.createElement('textarea');

// textarea.value = localStorage.getItem('text');

// textarea.oninput = () => {
//   localStorage.setItem('text', textarea.value);
// }

// document.body.append(textarea);

// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// Сделайте ваш скрипт как можно более универсальным.
// let form1 = document.querySelector('.form1');

// getForm(form1);

// form1.oninput = function () {
//   saveForm(this);
// }

// function saveForm(tag) {
//   for (let i = 0; i < tag.length; i++) {
//     let elem = tag[i];

//     if (elem.type === 'checkbox' || elem.type === 'radio') {
//       elem.checked ? elem.value = 'true' : elem.value = 'false';
//     }

//     localStorage.setItem(elem.id, elem.value);
//   }
// }

// function getForm(tag) {
//   for (let i = 0; i < tag.length; i++) {
//     if (localStorage.hasOwnProperty(tag.children[i].id)) {
//       tag.children[i].value = localStorage.getItem(tag.children[i].id);
//       if (tag.children[i].value === 'true') {
//         tag.children[i].setAttribute('checked', 'checked');
//       }
//     }
//   }
// }

// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище),
// затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, 
//с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).
// let lbtn1 = document.querySelector('.lbtn');
// let rbtn1 = document.querySelector('.rbtn');

// let txt1 = document.querySelector('.txt');
// let saveBtn1 = document.querySelector('.saveBtn');

// saveBtn1.onclick = () => {
//   localStorage.setItem(localStorage.length + 1, txt1.value);
// }

// lbtn1.onclick = () => {
//   rbtn1.hidden = false;
//   let index;
//   for (let key in localStorage) {
//     if (localStorage.getItem(key) === txt1.value) {
//       index = key;
//     }
//   }
//   if (index === '1') {
//     lbtn1.hidden = true;
//     return;
//   }
//   txt1.value = localStorage.getItem(index - 1);
// }

// rbtn1.onclick = () => {
//   lbtn1.hidden = false;
//   let index;
//   for (let key in localStorage) {
//     if (localStorage.getItem(key) === txt1.value) {
//       index = key;
//     }
//   }
//   if (index === localStorage.length.toString()) {
//     rbtn1.hidden = true;
//     return;
//   }
//   txt1.value = localStorage.getItem(+index + 1);
// }

// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня.
// При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования,
// которые уже заполнены данными объекта
const ARRAY_USERS = 'ARRAY_USERS';
const content = document.querySelector('.content');
let form2 = document.querySelector('.form2');

form2.submit1.onclick = () => {
    let person = {};
    for (let i = 0; i < form2.children.length; i++) {
        const formEl = form2.children[i];
        if (formEl.name && formEl.tipe !== 'submit') {
            person[formEl.name] = formEl.value;
        }
    }

    person.id = new Date().getTime();
    saveUser(person);
}

getDataFromLS();

function saveUser(user) {
    if (localStorage.hasOwnProperty(ARRAY_USERS)) {
        const arrayUsers = JSON.parse(localStorage.getItem(ARRAY_USERS));
        const find = arrayUsers.find(val => val.id === user.id);
        if (find) {
            const filter = arrayUsers.filter(val => val.id !== user.id);
            filter.push(user);

            localStorage.setItem(ARRAY_USERS, JSON.stringify(filter));
        } else {
            arrayUsers.push(user);

            localStorage.setItem(ARRAY_USERS, JSON.stringify(arrayUsers));
        }
    } else {
        localStorage.setItem(ARRAY_USERS, JSON.stringify([user]));
    }
}

function getDataFromLS() {
    if (localStorage.hasOwnProperty(ARRAY_USERS)) {
        const arrUser = JSON.parse(localStorage.getItem(ARRAY_USERS));
        for (const user of arrUser) {
            content.append(createDivPerson(user));
        }
    }
}

function createDivPerson(user) {
    const main = document.createElement('div');
    let flag = true;
    for (const key in user) {
        if (flag) {
            const h3 = document.createElement('h3');
            h3.innerText = key + ' : ' + user[key];
            main.append(h3);
            flag = false;
        } else {
            const p = document.createElement('p');
            p.innerText = key + ' : ' + user[key];
            main.append(p);
        }
    }
    main.style = 'width: 300px; border: 1px solid red; float: left';

    const b1 = document.createElement('button');
    const b2 = document.createElement('button');

    b1.innerText = 'Edit';
    b2.innerText = 'Delete';

    b1.onclick = function () {
        editUser(user.id);
    }
    b2.onclick = function () {
        delUser(user.id);
    }

    main.append(b1);
    main.append(b2);

    return main;
}

function delUser(id) {
    const parse = JSON.parse(localStorage.getItem(ARRAY_USERS));
    const filter = parse.filter(user => user.id !== id);

    localStorage.setItem(ARRAY_USERS, JSON.stringify(filter));
    location.reload();
}

function editUser(id) {
    const parse = JSON.parse(localStorage.getItem(ARRAY_USERS));
    const user = parse.find(user => user.id === id);


    for (let i = 0; i < form2.children.length; i++) {
        const formEl = form2.children[i];
        if (formEl.name && formEl.tipe !== 'submit') {
            for (const key in user) {
                if (formEl.name === key) {
                    formEl.value = user[key];
                }
            }
        }
    }


}