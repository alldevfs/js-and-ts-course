function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        fala(assunto = 'falando nada no momento..') {
            return `${this.nome} está ${assunto}.`;
        },
        //GETTER
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },
        //SETTER
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ')
            // console.log(valor)
        },
        altura: altura,
        peso: peso,

        //GETTER
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

// usando o get na função ele vira um atributo

const p1 = criaPessoa('Allan Victor', 'Sousa dos Santos', 1.90, 87)
// console.log(p1.imc);
p1.nomeCompleto = 'Allan Victor Sousa dos Santos';
// console.log(p1.nome)
// console.log(p1.sobrenome)
// console.log(p1.fala('falando sobre depressão'))
// console.log(p1.fala())

const p2 = criaPessoa('Yudi', 'Nicolas', 1.97, 90);
const p3 = criaPessoa('Lilith', 'Luna', 1.76, 76);
console.log(p2.fala('falando sobre felicidade!'));
console.log(p3.fala('falando sobre Amor!'));

//rodar na web
/*
function createParagraph(text, color, background) {
    function element() {
        const paragraph = document.createElement('p');
        paragraph.innerText = text;
        paragraph.style.color = color;
        paragraph.style.backgroundColor = background;
        return paragraph;
    }

    return {
        element,
        text
    }
}
undefined
var exemplo = createParagraph('Olá mundo! Testando Factory Function', '#FBFBFB', '#CC00CC');
undefined
document.body.innerHTML = exemplo.element().outerHTML;