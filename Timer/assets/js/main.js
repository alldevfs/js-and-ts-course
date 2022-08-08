
// rgb(107, 27, 161)

const relogio = document.querySelector('.relogio');

const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const encerrar = document.querySelector('.encerrar');
let segundos = 0; // variavel gloval que guarda o tempo em segundos.
let timer;
function iniciarRelogio() {
    timer = setInterval(() => {
        segundos++
        relogio.innerHTML = criarTemporizador(segundos);
    }, 1000);
}

function criarTemporizador(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}
/*
iniciar.addEventListener('click', function () {
    console.log('Iniciando temporizador.');
    clearInterval(timer);
    iniciarRelogio();
    relogio.style.color = 'green';
});
*/
/*
pausar.addEventListener('click', function (event) {
    console.log('Pausando temporizador.');
    clearInterval(timer);
    relogio.style.color = 'red';
});
*/
/*
encerrar.addEventListener('click', function () {
    console.log('Encerrando temporizador.');
    clearInterval(timer);
    segundos = 0;
    relogio.innerHTML = '00:00:00';
    relogio.style.color = 'rgb(107, 27, 161)';
})
*/

document.addEventListener('click', (event) => {
    const elemento = event.target;
    if (elemento.classList.contains('encerrar')) {
        console.log('Encerrando temporizador.');
        clearInterval(timer);
        segundos = 0;
        relogio.innerHTML = '00:00:00';
        relogio.style.color = 'rgb(107, 27, 161)';
    }
    if (elemento.classList.contains('pausar')) {
        console.log('Pausando temporizador.');
        clearInterval(timer);
        relogio.style.color = 'red';
    }
    if (elemento.classList.contains('iniciar')) {
        console.log('Iniciando temporizador.');
        clearInterval(timer);
        iniciarRelogio();
        relogio.style.color = 'green';
    }
})