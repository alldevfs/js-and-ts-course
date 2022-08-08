//IIFE -> Immediatly Invoked Function Expression

(function (sobrenome) {
    const segundoNome = 'Victor';
    function criaNome(nome) {
        return nome + ' ' + segundoNome;
    }

    function falaNome() {
        return criaNome('Allan');
    }

    const nomeCompleto = falaNome() + ' ' + sobrenome;
    console.log(nomeCompleto)

})('Sousa Dos Santos');

// (function (param) {
//     console.log(param)
// })('Valor')