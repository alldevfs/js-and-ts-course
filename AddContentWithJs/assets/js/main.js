const elementos = [
    { tag: 'p', texto: 'Frase aleatória' },
    { tag: 'div', texto: 'Frase 2' },
    { tag: 'footer', texto: 'Frase 3' },
    { tag: 'section', texto: 'Frase 4' },
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let index = 0; index < elementos.length; index++) {
    let { tag, texto } = elementos[index];
    const elemento = document.createElement(tag);
    const TextElement = document.createTextNode(texto);
    elemento.appendChild(TextElement);
    div.appendChild(elemento);
}
container.appendChild(div);