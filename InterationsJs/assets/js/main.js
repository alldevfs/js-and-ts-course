const lista = document.querySelector('.lista');
const botao = document.querySelector('.adicionar');
const campo = document.querySelector('.input');

botao.addEventListener('click', () => {
    if (!campo.value) return;
    const item = document.createElement('li');
    item.innerHTML = campo.value;
    lista.appendChild(item);
    console.log('Adicionando');
    campo.value = '';
    item.innerText += ' ';
    const btn = document.createElement('button');
    btn.innerText = 'Apagar';
    btn.setAttribute('class', 'apagar');
    btn.setAttribute('title', 'apagar');
    item.appendChild(btn);
    SalvarDadosStorage()
});

document.addEventListener('keypress', (event) => {
    if (event.keyCode === 13) {
        const item = document.createElement('li');
        item.innerHTML = campo.value;
        lista.appendChild(item);
        console.log('Adicionando');
        campo.value = '';
        item.innerText += ' ';
        const btn = document.createElement('button');
        btn.innerText = 'Apagar';
        btn.setAttribute('class', 'apagar');
        btn.setAttribute('title', 'apagar');
        item.appendChild(btn);
        SalvarDadosStorage()
    }
});

document.addEventListener('click', (event) => {
    const element = event.target;
    if (element.classList.contains('apagar')) {
        console.log('Apagar')
        element.parentElement.remove();
        SalvarDadosStorage()
    }

});

function SalvarDadosStorage() {
    const dadosLista = document.querySelectorAll('li');
    const arrayLista = [];
    for (const dados of dadosLista) {
        let textoDados = dados.innerText;
        textoDados = textoDados.replace('Apagar', '').trim();
        arrayLista.push(textoDados)
        console.log(arrayLista);

    }
    const dadosJSON = JSON.stringify(arrayLista);
    localStorage.setItem('dados', dadosJSON)
}