let display = document.querySelector('.display');
let currentNumber = '';
let previousNumber = '';
let operation = null;
let shouldResetDisplay = false;

function appendNumber(number) {
    if (shouldResetDisplay) {
        currentNumber = '';
        shouldResetDisplay = false;
    }
    if (number === '.' && currentNumber.includes('.')) return;
    currentNumber += number;
    updateDisplay();
}

function updateDisplay() {
    display.textContent = currentNumber || '0';
}

function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    operation = null;
    shouldResetDisplay = false;
    updateDisplay();
}

function setOperation(op) {
    if (currentNumber === '') return;
    if (previousNumber !== '') {
        calculate();
    }
    operation = op;
    previousNumber = currentNumber;
    currentNumber = '';
    shouldResetDisplay = true;
}

function calculate() {
    if (previousNumber === '' || currentNumber === '' || operation === null) return;
    let result;
    const prev = parseFloat(previousNumber);
    const curr = parseFloat(currentNumber);

    switch (operation) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '×':
            result = prev * curr;
            break;
        case '÷':
            if (curr === 0) {
                alert("Cannot divide by zero!");
                clearDisplay();
                return;
            }
            result = prev / curr;
            break;
        default:
            return;
    }

    currentNumber = result.toString();
    operation = null;
    previousNumber = '';
    shouldResetDisplay = true;
    updateDisplay();
}

function toggleSign() {
    if (currentNumber === '') return;
    currentNumber = (parseFloat(currentNumber) * -1).toString();
    updateDisplay();
}

function calculatePercentage() {
    if (currentNumber === '') return;
    currentNumber = (parseFloat(currentNumber) / 100).toString();
    updateDisplay();
}