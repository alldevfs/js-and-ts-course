function maiorQue(value1, value2) {
    // if (value1 > value2) {
    //     console.log(`O primeiro valor ${value1} é maior que o segundo valor ${value2} `)
    // } else if (value2 > value1) {
    //     console.log(`O segundo valor ${value2} é maior que o primeio valor ${value1} `)
    // }
    // pode ser usado operador terciario.
    return (value1 > value2) ? value1 : value2;
}
// console.log(maiorQue(-5, 5));

/* quando é 1 linha não rpecisa de chave, e não precisa do return */
const maior = (value1, value2) => (value1 > value2) ? value1 : value2;

console.log(maior(-3, 2));

