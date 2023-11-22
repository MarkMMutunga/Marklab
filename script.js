let display = document.querySelector('.display');
let previousOperator = null;
let currentNumber = '';

function appendNumber(number) {
    currentNumber += number;
    updateDisplay();
}

function appendOperator(operator) {
    if (currentNumber !== '') {
        performOperation();
    }

    previousOperator = operator;
    currentNumber = '';
}

function performOperation() {
    let result = eval(display.textContent + previousOperator + currentNumber);
    display.textContent = result;
    previousOperator = null;
    currentNumber = '';
}

function clearDisplay() {
    display.textContent = '0';
    previousOperator = null;
    current
