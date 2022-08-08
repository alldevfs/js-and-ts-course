// const retorno = numeros.filter((valor, indice, array) => {
//     console.log(valor, indice, array)
//     console.log(valor, indice, array);
// });

//Dobrar o valor de cada indice
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
// const dobrados = numeros.map(valor => {
//     return valor * 2;
// });
// console.log(dobrados);

/* para cada elemento retornar apenas a string do nome da pessoa, removendo 
*  removendo apenas a chave nome do objeto e adiciona uma chave id em cada elemento.
*/
const pessoas = [
    { nome: 'Allan', idade: 26 },
    { nome: 'Victor', idade: 21 },
    { nome: 'Yudi', idade: 1 },
    { nome: 'AllVic', idade: 27 },
    { nome: 'Lilith', idade: 22 },
    { nome: 'Lunna', idade: 24 },
];

const nomes = pessoas.map(pessoa => pessoa.nome);
const idades = pessoas.map(pessoa => ({ idade: pessoa.idade }));
const pessoaComID = pessoas.map(function (pessoa, indice) {
const novoObjeto = { ...pessoa };
novoObjeto.id = indice;
return novoObjeto;
})
console.log(pessoas)
console.log(pessoaComID);