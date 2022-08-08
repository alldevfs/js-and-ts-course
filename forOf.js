const nomes = ['Allan', 'Victor', 'Sousa', 'dos', 'Santos'];

/* For loop classico.
    - arrays ou strings
*/
for (let index = 0; index < nomes.length; index++) {
    console.log(nomes[index]);
}

/* For In onde retorna os indices e os valores de um elemento.
    - strings, arraus ou objetos
*/
for (let index in nomes) {
    console.log(`Indice ${index}, valor ${nomes[index]}`);
}

/* For Of onde retorna soemnte os valores de arrays. Não funciona para objetos.
    - iteráveis, arraysou strings
*/
for (let value of nomes) {
    console.log(value);
}

//ForEach no elemento.
nomes.forEach(function (value, index, array) {
    console.log(value, index)
})
