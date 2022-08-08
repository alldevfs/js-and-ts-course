function rand(min = 1000, max = 3000) {
    const timer = Math.random() * (max - min) + min;
    return Math.floor(timer);
}
console.log(rand())

function f1(callback) {
    setTimeout(function () {
        console.log('F1')
        if (callback) callback();

    }, 500);
}
function f2(callback) {
    setTimeout(function () {
        console.log('F2')
        if (callback) callback();

    }, 1000);
}
function f3(callback) {
    setTimeout(() => {
        console.log('F3')
        if (callback) callback();

    }, 800);
}
// f1(function () {
//     f2(function () {
//         f3(function () {
//             console.log('Fim processo')
//         });
//     });
// });

/**
 * 
 */
f1(f1CallBack);

function f1CallBack() {
    f2(f2CallBack);
}

function f2CallBack() {
    f3(f3CallBack);
}

function f3CallBack() {
    console.log('Fim Processo');
}