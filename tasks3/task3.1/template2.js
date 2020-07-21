// Взяти файл template_2.html та працювати в ньому
// - Напишіть код, який :
// -- змінює колір тексту елемнту з ід main_header на будь-який інший
// -- робить шириниу елементу ul 400 пікселів
// -- робить шириниу всіх елементів з класом linkList шириною 50%
// -- отримує текст який зберігається в елементі з класом listElement2
// -- отримує всі елементи li та змінює ім колір фону на сірий
// -- отримує всі елементи 'a' та додає їм клас anchor
// -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// -- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// -- отримати елементи p та змінити їм paddin на довільне значення
// -- отримати елементи з класом text2 та змінити їм текст на довільне значення

let colorMain = document.getElementById('main_header');
colorMain.style.color = 'gold';

let ulWidth = document.getElementsByTagName('ul');
ulWidth[0].style.width = '400px';

let allWidth = document.getElementsByClassName('linkList');
allWidth[0].style.width = '50%';
allWidth[1].style.width = '50%';
allWidth[2].style.width = '50%';

let txtList2 = document.getElementsByClassName('listElement2');
console.log(txtList2[0].innerText);

let allLi = document.getElementsByTagName('li');
allLi[0].style.backgroundColor = 'gray';
allLi[1].style.backgroundColor = 'gray';
allLi[2].style.backgroundColor = 'gray';

let addAnchor = document.getElementsByTagName('a');
addAnchor[0].classList.add('anchor');
addAnchor[1].classList.add('anchor');
addAnchor[2].classList.add('anchor');

let bigText = document.getElementsByTagName('a');
for (let i = 0; i < bigText.length; i++) {
    if (bigText[i].innerText === 'link3') {
        bigText[i].style.fontSize = '40px';
    }
}

let addClass = document.getElementsByTagName('a');
for (let i = 0; i < bigText.length; i++) {
    addClass[i].classList.add('element_' + addClass[i].innerText);
}

// let subHeader = document.getElementsByClassName('sub-header');
// setCol = prompt();
// for (let i = 0; i < subHeader.length; i++) {
//     subHeader[i].style.backgroundColor = setCol;
// }

// let subHeader = document.getElementsByClassName('sub-header');
// setCol = prompt();
// for (let i = 0; i < subHeader.length; i++) {
//     if (subHeader[i].innerText === 'content 2 segment') {
//         subHeader[i].style.color = setCol;
//     }
// }

// let elemContent=document.getElementsByClassName('content_1');
// elemContent[0].innerText=prompt();

let pElem=document.getElementsByTagName('p');
pElem[0].style.paddingLeft='100px';
pElem[1].style.paddingTop='50px';

let text2=document.getElementsByClassName('text2');
text2[0].innerText='rrrrrrrrrrrrrrrrrrr';

