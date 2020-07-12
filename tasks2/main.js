//2
// let arr = [4, 5, 3.14, 67, -8];
// console.log(arr);

//3
// let arr = ['fsf', '45', '', '2.3', 'yiu'];
// console.log(arr);

//4
// let arr = ['fsf', 45, false, '2.3', -65];
// console.log(arr);

//5
// let arr = [];
// arr[0] = true;
// arr[1] = 'fhg';
// arr[2] = 3.14;
// arr[3] = -45;
// arr[4] = '0.123';

// console.log(arr);

//7
// for (let i = 0; i < 10; i++) {
//     document.write('<div>lorem</div>');
// }

//8
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>lorem${i + 1}</div>`);
// }

//9
// let i = 0;
// while (i < 20) {
//     document.write('<h1>lorem</h1>');
//     i++;
// }

//10
// let i = 0;
// while (i < 20) {
//     document.write(`<h1>lorem${i + 1}</h1>`);
//     i++;
// }

//11
// let arr = [10, 23, 4.5, -17, 0, 345, -9, 11, 13.1, 0.5];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

//12
// let arr = ['abc', '234', 'true', '', '3.14', ' ', '0', '12', '-8', 'null'];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

//13
// let arr = [10, true, '4.5', -17, 0, undefined, '-9', 'dfg', -13.1, '+5grad'];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

//14
// let arr = [10, true, '4.5', -17, 0, undefined, '-9', 'dfg', -13.1, '+5grad'];

// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "boolean") {
//         console.log(arr[i]);
//     }
// }

//15
// let arr = [10, true, '4.5', -17, 0, undefined, '-9', 'dfg', -13.1, '+5grad'];

// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "number") {
//         console.log(arr[i]);
//     }
// }

//16
// let arr = [10, true, '4.5', -17, 0, undefined, '-9', 'dfg', -13.1, '+5grad'];

// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "string") {
//         console.log(arr[i]);
//     }
// }

//17
// let arr = [];
// arr[0] = true;
// arr[1] = 'fhg';
// arr[2] = 3.14;
// arr[3] = -45;
// arr[4] = '0.123';
// arr[5] = false;
// arr[6] = '-1';
// arr[7] = 123;
// arr[8] = undefined;
// arr[9] = 0;

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

//18
// for (let i = 0; i < 10; i++) {
//     console.log(i + 1);
//     document.write(i + 1 + '<br>');
// }

//19
// for (let i = 0; i < 100; i++) {
//     console.log(i + 1);
//     document.write(i + 1 + '<br>');
// }

//20
// for (let i = 0; i < 100; i += 2) {
//     console.log(i + 1);
//     document.write(i + 1 + '<br>');
// }

//21, 22
// for (let i = 0; i < 100; i++) {
//     if (!((i + 1) % 2)) {
//         console.log(i);
//         document.write(i + '<br>');
//     }
// }

//23
// for (let i = 0; i < 100; i++) {
//     if ((i + 1) % 2) {
//         console.log(i);
//         document.write(i + '<br>');
//     }
// }

//24
// for (let hv = 0; hv <= 2; hv++) {
//     for (let sec = 0; sec < 60; sec++) {
//         console.log(`${hv}:${sec}`);
//         if (hv === 2) break;
//     }
// }

//25
// for (let god = 0; god <= 2; god++) {

//     for (let hv = 0; hv < 60; hv++) {
//         if (god === 2 && hv === 21) break;

//         for (let sec = 0; sec < 60; sec++) {
//             console.log(`${god}:${hv}:${sec}`);
//             if (god === 2 && hv === 20 && sec === 0) break;
//         }
//     }
// }

//27
// let str = '';
// let arr = ['a', 'b', 'c'];

// for (let i = 0; i < arr.length; i++) {
//     str += arr[i];
// }
// console.log(str);

//28
// let str = '';
// let arr = ['a', 'b', 'c'];
// let i = 0;

// while (i < arr.length) {
//     str += arr[i];
//     i++;
// }
// console.log(str);

//29, 30
// let str = '';
// let arr = ['a', 'b', 'c'];

// for (let i of arr) {
//     str += i;
// }
// console.log(str);

//37
