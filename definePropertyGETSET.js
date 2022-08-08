// defineProperty /=> Getters and Setters
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    let estoquePrivate = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,   //mostra a a chave
        configurable: true,   //pode apagar ou reconfigurar?
        get: function () {
            return estoquePrivate;
        },
        set: function (valor) {
            if (typeof valor !== 'number') {
                throw new TypeError('Valor de estoque não é tipo number!');
            }
            estoquePrivate = valor;
        }
    });
}
// const p1 = new Produto('Xilito', 20, 3);
// p1.estoque = '3000aaa';
// console.log(p1)
// console.log(p1.estoque)

function criarProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            valor = valor.replace('qualquer', 'alguma');
            nome = valor;
        }
    }
}
const p2 = criarProduto('Chocolate');
p2.nome = 'qualquer coisa.';
console.log(p2.nome)