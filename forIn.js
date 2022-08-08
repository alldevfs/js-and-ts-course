const frutas = ['banana', 'maça', 'uva', 'pêra', 'salada-mista'];

const pessoa = {
    nome: 'Allan',
    sexo: 'Masculuno',
    idade: 26,
    endereco: {
        rua: 'Durval Freire',
        numero: 17,
        bairro: 'José',
    }
};

for (let index in pessoa) {
    console.log(index, pessoa[index]);
}