// function createPessoa(nome, sobrenome) {
//     return { nome, sobrenome }
// }

// const p1 = createPessoa('Allan', 'Victor')
// const p2 = {
//     nome: 'Yudi',
//     sobrenome: 'Nicolas'
// }
// console.log(p1)
// console.log(p2)

// function falaFrase(comeco) {
//     function falaResto(resto) {
//         return comeco + ' ' + resto;
//     }
//     return falaResto;
// }
// const ola = falaFrase('Olá Mundo')
// const resto = ola('KRAY')
// console.log(resto)

function criaMultiplicador(multi) {
    return function (numero) {
        return numero * multi;
    };
}

const duplica = criaMultiplicador(2)
const triplica = criaMultiplicador(3)
const quadriplica = criaMultiplicador(4)

console.log(duplica(3))
console.log(triplica(2))
console.log(quadriplica(10))