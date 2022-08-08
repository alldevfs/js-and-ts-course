const a1 = [5, 10, 15, 20, 25, 30];

// for (const valor of a1) {
//     console.log(valor)
// }
let total = 0;
a1.forEach(valor => total += valor)
console.log(total)
//Reduce
a1.forEach(valor => console.log(valor))
//Map
a1.forEach(valor => {
    if (valor % 2 !== 0) {
        console.log(`Valor ímpar: ${valor}`);
    }
})
//Filter