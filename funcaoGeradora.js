function* geradora1() {
    // code . . .
    yield 'valor 1';
    // code . . .
    yield 'valor 2';
    // code . . .
    yield 'valor 3';
}

const g1 = geradora1();
// console.log(g1.next().value)
// console.log(g1.next().value)
// console.log(g1.next())
// console.log(g1.next())

// for (const valor of g1) {
//     console.log(valor);
// }

function* geradora2() {
    let i = 0;
    while (true) {
        yield i;
        i++;
    }
}
// const g2 = geradora2();
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);

function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4() {
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();

// for (const valor of g4) {
//     console.log(valor)
// }

function* geradora5() {
    yield function () {
        console.log('Yield 1');
    }

    yield function() {
        console.log('Return');
    }

    // . . .
    
    yield function () {
        console.log('Yield 2');
    }
}

const g5 = geradora5();
const fun1 = g5.next().value;
const fun2 = g5.next().value;
const fun3 = g5.next().value;

fun1();
fun2();
fun3();