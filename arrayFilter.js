//filter -> sempre retorna um array com a mesma quantidade de elementos ou menos.

//retorne os numeros maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

// const valoresMaiores = numeros.filter((valor, indice, array) => {
//     console.log(valor, indice, array)
//     return valor > 10;
// });
// const valoresMaiores = numeros.filter(valor => valor > 10)
// console.log(valoresMaiores)

/**
 * Retorn as pessoas que possuem o nome com 5 letras;
 * Retorne as pessoas com mais de 23 anos;
 * Retorne as pessoas que o nome termina com letra a;
 */
const pessoas = [
    { nome: 'Allan', idade: 26 },
    { nome: 'Victor', idade: 21 },
    { nome: 'Yudi', idade: 1 },
    { nome: 'AllVic', idade: 27 },
    { nome: 'Lilith', idade: 22 },
    { nome: 'Lunna', idade: 24 },
];

const maisLetras = pessoas.filter(pessoa => pessoa.nome.length >= 5);
const pessoasVelhas = pessoas.filter(pessoa => pessoa.idade > 23);
const letraAFinal = pessoas.filter(pessoa => pessoa.nome.toLowerCase().endsWith('a'));

console.log(letraAFinal)