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
let lbtn1 = document.querySelector('.lbtn');
let rbtn1 = document.querySelector('.rbtn');

let txt1 = document.querySelector('.txt');
let saveBtn1 = document.querySelector('.saveBtn');

saveBtn1.onclick = () => {
  localStorage.setItem(localStorage.length + 1, txt1.value);
}

lbtn1.onclick = () => {
  rbtn1.hidden = false;
  let index;
  for (let key in localStorage) {
    if (localStorage.getItem(key) === txt1.value) {
      index = key;
    }
  }
  if (index === '1') {
    lbtn1.hidden = true;
    return;
  }
  txt1.value = localStorage.getItem(index - 1);
}

rbtn1.onclick = () => {
  lbtn1.hidden = false;
  let index;
  for (let key in localStorage) {
    if (localStorage.getItem(key) === txt1.value) {
      index = key;
    }
  }
  if (index === localStorage.length.toString()) {
    rbtn1.hidden = true;
    return;
  }
  txt1.value = localStorage.getItem(+index + 1);
}

// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня.
// При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования,
// которые уже заполнены данными объекта

