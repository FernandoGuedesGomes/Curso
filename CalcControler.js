class CalcControler {

    constructor() {
        this._operation = [];
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this.locale = "pt-BR";
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();

    }

    initialize() {

        this.setDisplayDateTime();






        setInterval(() => {

            this.setDisplayDateTime();


        }, 1000)
    }

    // define data e hora.
    setDisplayDateTime() {
        this.displayDate = this.currentDate.toLocaleDateString(this.locale);
        this.displayTime = this.currentDate.toLocaleTimeString(this.locale);
    }

    // define varios eventos nos botoes.
    addEventListenerAll(element, events, fn) {

        events.split(' ').forEach(event => {
            element.addEventListener(event, fn, false);
        });
    }
    // add ao Array Metodo Push
    addOperation(value) {
        this._operation.push(value);
        console.log(this._operation);
    }

    // ação do botão de limpar tudo
    clearAll() {
        this._operation = [];

    }

    // ação do botão de limpar a ultima entrada
    clearEntry() {
        this._operation.pop();

    }
    // caso erro
    setError() {
        this.displayCalc = "Error";
    }

    // switch para cada botão
    execBtn(value) {
        switch (value) {
            case 'ac':
                this.clearAll();
                break;

            case 'ce':
                this.clearEntry();
                break;
            case 'soma':

                break;

            case 'subtracao':
                break;

            case 'divisão':
                break;

            case 'multiplicacao':
                break;

            case 'porcento':
                break;

            case 'igual':
                break;

            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation(parseInt(value));
            break;

            default:
                this.setError;
                break;
        }
    }
// define evento nos botoes.
    initButtonsEvents() {

        let buttons = document.querySelectorAll("#buttons > g, #parts >g");

        buttons.forEach((btn, index) => {

            this.addEventListenerAll(btn, "click drag", e => {

                let textBtn = btn.className.baseVal.replace("btn-", "");

                this.execBtn(textBtn);
            });

            this.addEventListenerAll(btn, "mouseover mouseup mousedown", e => {
                btn.style.cursor = "pointer";
            })

        });
    }





    get displayCalc() {
        return this._displayCalcEl.innerHTML;
    }
    set displayCalc(value) {
        this._displayCalcEl.innerHTML = value;
    }

    get displayDate() {
        return this._dateEl.innerHTML;
    }
    set displayDate(value) {
        return this._dateEl.innerHTML = value;
    }

    get displayTime() {
        return this._timeEl.innerHTML;
    }
    set displayTime(value) {
        return this._timeEl.innerHTML = value;
    }

    get currentDate() {
        return new Date();
    }
    set currentDate(value) {
        this._currentDate = value;
    }

}