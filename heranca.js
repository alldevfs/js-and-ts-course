/**Herança no Js quer dizer delegação, quando características de um objeto
 * são passadas para outro objeto.
 */
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function (quantia) {
    this.preco += quantia;
};
Produto.prototype.desconto = function (quantia) {
    this.preco -= quantia;
}

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

const camiseta = new Camiseta('bleble', 17.2, 'Azul');
console.log(camiseta)
camiseta.desconto(9)
console.log(camiseta)
