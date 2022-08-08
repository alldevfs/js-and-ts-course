let a = "A"; // B
let b = 'B'; // C
let c = 'C'; // A

// Atribuição
// let aux = a;
// a = b;
// b = c;
// c = aux;

// Atribuição por Desestruturação. 
// const letras = [b, c, a];
// [a, b, c] = letras;
// console.log(`A->${a}, B->${b}, C->${c}`);

const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]];
const [,[,,valor]] = numeros;

console.log(valor);