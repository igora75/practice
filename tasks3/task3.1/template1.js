//48****************************************
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



