const nomes = ['Allan', 'Victor', 'Yudi', 'Nick', 'Porronco'];
//nomes.splice(INDICE, QTD_DEL, ELEMENTO1, ELEMENTO2, ELEMENTO3)

// const removidos = nomes.splice(0, 2)
// inicia na posição 0 e remove duas casas voltando

nomes.splice(2, 0, 'Sousa')
//inicia no indice 2, não remove nada e adiciona o valor
nomes.splice(3, 0, 'dos Santos')
//inicia no indice 3, não remove nada e adiciona o valor
console.log(nomes)