// const pessoa = {
//     nome: 'Allan',
//     sobrenome: 'Victor'
// };
// const chave = 'sobrenome';
// //Notação de ponto
// // console.log(pessoa.nome);
// //Notação de couchetes
// // console.log(pessoa[chave]);

// const pessoa1 = new Object();
// pessoa1.nome = 'Allan'
// pessoa1.sobrenome = 'Victor';
// pessoa1.idade = 26;
// pessoa1.falarNome = function () {
//     console.log(`Olá, me chamo ${this.nome}.`);
// }
// pessoa1.getDataNasc = function () {
//     const data = new Date();
//     return data.getFullYear() - this.idade;
// }
// console.log(pessoa1.getDataNasc());
//  for (const chave in pessoa1) {
//     // console.log(chave)
//     console.log(pessoa1[chave])
//  }

// Factory Function (Constructor Function & Class)
function criaPessoa(nome, sobrenome, idade, suaFrase) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
        suaFrase: suaFrase,
        get apresentar() {
            return `Olá, me chamo ${this.nome} ${this.sobrenome} e ${this.suaFrase}.`;
        },
    }
}
// const pessoa1 = criaPessoa('Allan', 'Victor', 26, 'sou Depressivo');
// console.log(pessoa1.apresentar);

// Constructor Function (Factory Function & Class)

function Pessoa(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    Object.freeze(this); // travar todos os valores de cada objeto vindo desse construtor.
}

const p1 = new Pessoa('Allan', 'Victor', 26);
//Travando um objeto para impedir alterações.
Object.freeze(p1);
p1.nome = 'Yudi'
console.log(p1)