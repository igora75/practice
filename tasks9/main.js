// // асинхронність на колбеках
// function alarmClock(chanсe, cb) {
//     setTimeout(() => {
//         if (chanсe) {
//             cb(null, 'get out of bed');
//         } else {
//             cb('dont go to work');
//         }
//     }, 5000);
// }

// function drinkCoffee(chanсe, cb) {
//     setTimeout(() => {
//         if (chanсe) {
//             cb(null, 'good coffee');
//         } else {
//             cb('coffee machine is broken');
//         }
//     }, 3000);
// }

// function working(chanсe, cb) {
//     setTimeout(() => {
//         if (chanсe) {
//             cb(null, 'Im working');
//         } else {
//             cb('bad mood. Im not working');
//         }
//     }, 4000);
// }

// function goToBeer(chanсe, cb) {
//     setTimeout(() => {
//         if (chanсe) {
//             cb(null, 'Cool. Drinking');
//         } else {
//             cb('met his wife. No beer');
//         }
//     }, 2000);
// }

// function watchTV(chanсe, cb) {
//     setTimeout(() => {
//         if (chanсe) {
//             cb(null, 'Wonderful day');
//         } else {
//             cb('missed a football match');
//         }
//     }, 1000);
// }

// alarmClock(true, (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//         drinkCoffee(true, (err, data) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log(data);
//                 working(true, (err, data) => {
//                     if (err) {
//                         console.log(err);
//                     } else {
//                         console.log(data);
//                         goToBeer(true, (err, data) => {
//                             if (err) {
//                                 console.log(err);
//                             } else {
//                                 console.log(data);
//                                 watchTV(false, (err, data) => {
//                                     if (err) {
//                                         console.log(err);
//                                     } else {
//                                         console.log(data);
//                                     }
//                                 })
//                             }
//                         })
//                     }
//                 })
//             }
//         })
//     }
// })

// // асинхронність на промісах
// function alarmClock(chance) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (chance) {
//                 resolve('get out of bed');
//             } else {
//                 reject('dont go to work');
//             }
//         }, 5000);
//     })
// }

// function drinkCoffee(chanсe) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (chanсe) {
//                 resolve('good coffee');
//             } else {
//                 reject('coffee machine is broken');
//             }
//         }, 3000);
//     })
// }

// function working(chanсe) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (chanсe) {
//                 resolve('Im working');
//             } else {
//                 reject('bad mood. Im not working');
//             }
//         }, 4000);
//     })
// }

// function goToBeer(chanсe) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (chanсe) {
//                 resolve('Cool. Drinking');
//             } else {
//                 reject('met his wife. No beer');
//             }
//         }, 2000);
//     })
// }

// function watchTV(chanсe) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (chanсe) {
//                 resolve('Wonderful day');
//             } else {
//                 reject('missed a football match');
//             }
//         }, 1000);
//     })
// }

// alarmClock(true)
//     .then(val => {
//         console.log(val);
//         return drinkCoffee(true)
//             .then(val => {
//                 console.log(val);
//                 return working(true)
//                     .then(val => {
//                         console.log(val);
//                         return goToBeer(true)
//                             .then(val => {
//                                 console.log(val);
//                                 return watchTV(false)
//                                     .then(val => {
//                                         console.log(val);
//                                     })
//                             })
//                     })
//             })
//     })
//     .catch(val => {
//         console.log(val);
//     })

//async/await
function alarmClock(chance) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (chance) {
                resolve('get out of bed');
            } else {
                reject('dont go to work');
            }
        }, 5000);
    })
}

function drinkCoffee(chanсe) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (chanсe) {
                resolve('good coffee');
            } else {
                reject('coffee machine is broken');
            }
        }, 3000);
    })
}

function working(chanсe) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (chanсe) {
                resolve('Im working');
            } else {
                reject('bad mood. Im not working');
            }
        }, 4000);
    })
}

function goToBeer(chanсe) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (chanсe) {
                resolve('Cool. Drinking');
            } else {
                reject('met his wife. No beer');
            }
        }, 2000);
    })
}

function watchTV(chanсe) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (chanсe) {
                resolve('Wonderful day');
            } else {
                reject('missed a football match');
            }
        }, 1000);
    })
}

async function myDay() {
    try {
        let alarm = await alarmClock(true);
        console.log(alarm);

        let drink = await drinkCoffee(true);
        console.log(drink);

        let work = await working(true);
        console.log(work);

        let beer = await goToBeer(true);
        console.log(beer);

        let tv = await watchTV(true);
        console.log(tv);

    } catch (err) {
        console.log(err);
    }
}

myDay();