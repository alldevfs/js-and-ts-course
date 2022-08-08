//Construtura --> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}
//pessoa1 --> Pessoa.prototype --> Object.prototype
//Pessoa.prototype === pessoa1.__proto__
Pessoa.prototype.nomeCompleto = function () {
    return this.nome + ' ' + this.sobrenome;
}

//Instância
const pessoa1 = new Pessoa('Allan', 'Victor');
const pessoa2 = new Pessoa('Victor', 'dos Santos');

const pessoa3 = Object.create(Pessoa.prototype, {
    sexo: {
        writable: true,
        enumerable: true,
        configurable: true,
        value: 'M'
    },
    ocupacao: {
        writable: true,
        enumerable: true,
        configurable: true,
        value: 'Neném'
    }
});
pessoa3.nome = 'Yudi';
pessoa3.sobrenome = 'Nicolas';
console.log(pessoa3.nomeCompleto())
console.log(pessoa3)
