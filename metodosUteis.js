/**
 * Object.values
 * Object.entries
 * Object.assign(destino, atributos)
 * Object.getOwnPropertyDescriptor(objeto, 'propriedade)
 */

const produto = { nome: 'Blusa', preco: 27.90 };
//metodo Assign
// const coisa = Object.assign({}, produto, { tipo: 'Sei lá'});

//spread operator
// const coisa = { ...produto, estoque: 3, tamanho: 'P' }; 

// manualmente
// const coisa = { nome: produto.nome, preco: produto.preco, estoque: 3 }

// Object.freeze(produto);

produto.nome = 'Camiseta';
// console.log(coisa)
console.log(produto)

Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false
})
//exibe as propriedades de um atributo de um objeto
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
console.log(Object.keys(produto))
// console.log(Object.entries(produto))
for (const [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor);
}
