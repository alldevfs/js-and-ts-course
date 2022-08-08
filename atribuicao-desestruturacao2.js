const pessoa = {
    nome: 'Allan',
    sobrenome: 'Victor',
    idade: 30,
    endereco: {
        rua: 'Durval Freire',
        numero: 170
    }
}
// Atribuição via desestruturação
// const { nome = '', sobrenome = '', idade = '', orientacao: sexo = 'Não definido' } = pessoa;
// console.log(nome, sobrenome, idade, sexo);

// const { endereco: { rua, numero }, endereco: mail } = pessoa;
// console.log(rua, numero, mail);

const { nome, ...resto } = pessoa;
console.log(nome, resto);