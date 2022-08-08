function Calculadora() {
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.cliqueBotao();
        this.enter();
    }

    this.cliqueBotao = () => {
        document.addEventListener('click', evento => {
            const elemento = evento.target;
            if (elemento.classList.contains('btn-num')) this.addNumDisplay(elemento);
            if (elemento.classList.contains('btn-clear')) this.clearDisplay();
            if (elemento.classList.contains('btn-del')) this.delNum();
            if (elemento.classList.contains('btn-igual')) this.calcular();
        });
    }
    this.enter = () => {
        document.addEventListener('keypress', event => {
            if (event.keyCode !== 13) return;
            this.calcular();
        });
    }
    this.calcular = () => {

        try {
            conta = eval(this.display.value);
            if (!conta) {
                alert('Conta inválida');
                return;
            }
            this.display.value = String(conta);
        } catch (er) {
            alert('Conta inválida');
            return;
        }
    }
    this.delNum = () => this.display.value = this.display.value.slice(0, -1);
    this.clearDisplay = () => this.display.value = ' ';
    this.addNumDisplay = elemento => {
        this.display.value += elemento.innerText;
        this.display.focus();
    }
}
const calculadora = new Calculadora();
calculadora.inicia();