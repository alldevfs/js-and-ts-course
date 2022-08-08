// defineProperty / defineProperties

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    // this.estoque = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,   //mostra a a chave
        value: estoque,      //valor
        writable: false,     //pode alterar?
        configurable: true   //pode apagar ou reconfigurar?
    });
    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true
        },
    })
}
const p1 = new Produto('Xilito', 20, 3);
p1.estoque = 3000;
// delete p1.estoque;
console.log(Object.keys(p1));
console.log(p1)
