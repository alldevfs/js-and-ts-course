function criarCalculadora() {
    return {
        display: document.querySelector('.display'),

        inicia() {
            this.cliqueBotao();
            this.pressionarEnter();
        },

        pressionarEnter() {
            this.display.addEventListener('keypress', (e) => {
                if (e.keyCode === 13) {
                    this.calcular();
                }
            });
        },

        calcular() {
            let conta = this.display.value;
            try {
                conta = eval(conta);
                if (!conta) {
                    alert('Conta inválida');
                    return;
                }
                this.display.value = String(conta);
            } catch (er) {
                alert('Conta inválida');
                return;
            }
        },

        clearDisplay() {
            this.display.value = '';
        },

        deleteUltimo() {
            this.display.value = this.display.value.slice(0, -1);
        },

        cliqueBotao() {
            document.addEventListener('click', (evento) => {
                const elemento = evento.target;

                if (elemento.classList.contains('btn-num')) {
                    this.btnPraDisplay(elemento.innerText)
                }

                if (elemento.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (elemento.classList.contains('btn-del')) {
                    this.deleteUltimo();
                }

                if (elemento.classList.contains('btn-igual')) {
                    this.calcular();
                }

            });
        },

        btnPraDisplay(valor) {
            this.display.value += valor;
            this.display.focus();
        }

    };
}

const calculadora = criarCalculadora();
calculadora.inicia()