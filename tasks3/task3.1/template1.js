//-Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.

// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"
// - отримує текст з блоку з id "rules"
// - замініть текст параграфа з id 'content' на будь-який інший
// - замініть текст параграфа з id 'rules' на будь-який інший
// - змініть кожному елементу колір фону на червоний
// - змініть кожному елементу колір тексту на синій
// - отримати весь список класів елемента з id=rules і вивести їх в console.log
// - отримати всі елементи з класом fc_rules
// - поміняти колір тексту у всіх елементів fc_rules на червоний

let idElemContent = document.getElementById('content');
let idElemRules = document.getElementById('rules');

console.log(idElemContent.innerText);
console.log(idElemRules.innerText);

idElemContent.innerText = 'ggfhfhfhfhffhfh';
idElemRules.innerText = 'aaaaaaaaaaaaaaaaaaaa';

let tagP = document.getElementsByTagName('p');
tagP[0].style.backgroundColor = 'red';
tagP[0].style.color = 'blue';

let tagDiv = document.getElementsByTagName('div');
tagDiv[0].style.backgroundColor = 'red';
tagDiv[0].style.color = 'blue';

let tagUl = document.getElementsByTagName('ul');
tagUl[0].style.backgroundColor = 'red';
tagUl[0].style.color = 'blue';


console.log(idElemRules.classList);

let rules = document.getElementsByClassName('fc_rules');
console.log(rules);

rules[0].style.color = 'red';
rules[1].style.color = 'red';
rules[2].style.color = 'red';
rules[3].style.color = 'red';



