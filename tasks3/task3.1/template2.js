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

