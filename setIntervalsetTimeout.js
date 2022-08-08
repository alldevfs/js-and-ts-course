function hourReturn() {
    const hour = new Date();
    return hour.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

const timer = setInterval(function () {
    console.log(hourReturn());
}, 1000);

setTimeout(() => {
    clearInterval(timer);
    console.log('Encerrando timer.');
}, 5000);

setTimeout(() => {
    console.log('Olá Mundo!');
}, 6000);