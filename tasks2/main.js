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
// let arr = ['a', 'b', 'c'];

// for (let i of [1, 2, 3]) {
//     arr.push(i);
// }

// console.log(arr);

//38
// let arr = [1, 2, 3];
// let arr2 = [];

// for (let i = arr.length - 1; i >= 0; i--) {
//     arr2.push(arr[i]);
// }

// console.log(arr2);

//39
// let arr = [1, 2, 3];

// arr.push(4, 5, 6)

// console.log(arr);

//40
// let arr = [1, 2, 3];

// arr.unshift(4, 5, 6);

// console.log(arr);

//41
// let arr = ['js', 'css', 'jq'];
// document.write(arr.shift());

//42
// let arr = ['js', 'css', 'jq'];
// document.write(arr.pop());

//43
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.slice(3));

//44
// let arr1 = [1, 2, 3, 4, 5];
// console.log(arr1.slice(0, 2));

//45
// let arr2 = [1, 2, 3, 4, 5];
// arr2.splice(1, 2);
// console.log(arr2);

//46
// let arr3 = [1, 2, 3, 4, 5];
// arr3.splice(3, 0, 'a', 'b', 'c');
// console.log(arr3);

//47
// let arr4 = [1, 2, 3, 4, 5];
// arr4.splice(1, 0, 'a', 'b');
// arr4.splice(6, 0, 'c');
// arr4.splice(8, 0, 'e');
// console.log(arr4);

//48
// let arr = [0, 10, 47, -34, 189, 34, 0.75, 11, 4, 678];
// for (let i of arr) {
//     if (!(i % 2)) {
//         console.log(i);
//     }
// }

//49
// let arr = [0, 10, 47, -34, 189, 34, 0.75, 11, 4, 678];
// let arr1 = [];
// for (let i of arr) {
//     arr1.push(i);
// }
// console.log(arr1);

//50
// let arr = [0, 10, 47, -34, 189, 34, 0.75, 11, 4, 678];
// let arr1 = [];
// for (let i = 0; i < arr.length; i++) {
//     arr1[i] = arr[i];
// }
// console.log(arr1);

//55
let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

let i = 0;
while (i < arr.length) {
    console.log(arr[i]);
    i++;
}

for (let i of arr) {
    console.log(i);
}

i = 0;
while (i < arr.length) {
    if (i % 2) {
        console.log(arr[i]);
    }
    i++;
}

for (let i = 0; i < arr.length; i++) {
    if (i % 2) {
        console.log(arr[i]);
    }
}

i = 0;
while (i < arr.length) {
    if (!(arr[i] % 2)) {
        console.log(arr[i]);
    }
    i++;
}

for (let i of arr) {
    if (!(i % 2)) {
        console.log(i);
    }
}

arr1 = [];
for (let i = 0; i < arr.length; i++) {
    if (!(arr[i] % 3)) {
        arr1[i] = 'okten';
    } else {
        arr1[i] = arr[i];
    }
}
console.log(arr1);

for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}

//64

