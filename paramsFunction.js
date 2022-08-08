// function funcao([valor1, valor2, valor3]){
//     console.log(valor1, valor2, valor3)
// }
// funcao(['Allan', 'Victor', 'Sousa'])

//Rest Operator '...'
const calculador = (operador, acumulador, ...numeros) => {
    for (const numero of numeros) {
        (operador === '+') ? acumulador += numero : '';
        (operador === '-') ? acumulador -= numero : '';
        (operador === '*') ? acumulador *= numero : '';
        (operador === '/') ? acumulador /= numero : '';
    }
    console.log(acumulador)
};

calculador('+', 1, 20, 30, 40, 50)