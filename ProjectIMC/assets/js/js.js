const form = document.querySelector('#form');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // previne o envio de formulários.
    const inputPeso = event.target.querySelector('#peso');
    const inputAltura = event.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    // verificar se retorna um NaN.
    if (!peso) {
        setResult('Peso não informado corretamente.', false);
        return;
    }
    if (!altura) {
        setResult('Altura não informada corretamente.', false);
        return;
    }
    const imc = getImc(peso, altura);
    const nivelImc = getInterpretator(imc);
    // console.log(imc, nivelImc);

    const msg = `Seu IMC é ${imc} (${nivelImc}).`;

    /* 
    é possível inserir um novo parâpetro na função setResult para mduar a cor da mensagem de vermelho
    para nivelImc -> Normal, Sobrepeso, Obesidade grau I II III.
    */
    setResult(msg, true);
});

function setResult(msg, ifValid) {
    const result = document.querySelector('#result');
    result.innerHTML = '';
    const p = createParagraph();

    if (ifValid) {
        p.classList.add('valid-paragraph');
    } else {
        p.classList.add('invalid-paragraph');
    }

    p.innerHTML = msg;
    result.appendChild(p);
}

function createParagraph() {
    const p = document.createElement('p');
    return p;
}

function getImc(peso, altura) {
    const imc = peso / (altura * altura);
    return imc.toFixed(2);
}
/*
Menor que 18,5 	Magreza
          18,5 a 24,9 Normal
          25 a 29,9 	Sobrepeso
          30 a 34,9 	Obesidade grau I
          35 a 39,9	Obesidade grau II
Maior que 40	Obesidade grau III
*/
function getInterpretator(imc) {
    const nivel = [
        'Magreza',
        'Normal',
        'Sobrepeso',
        'Obesidade grau I',
        'Obesidade grau II',
        'Obesidade grau III'
    ];

    if (imc < 18.5) return nivel[0];

    if (imc >= 18.5 || imc <= 24.9) return nivel[1];

    if (imc >= 25 || imc <= 29.9) return nivel[2];

    if (imc >= 30 || imc <= 34.9) return nivel[3];

    if (imc >= 35 || imc <= 39.9) return nivel[4];

    if (imc >= 40) return nivel[5];

}