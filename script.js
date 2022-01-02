const currentDisplay = document.querySelector('#display');
const clear = document.querySelector('#clear');
const equals = document.querySelector('#equals');
const numButtons = document.querySelectorAll('.num-button');
const opButtons = document.querySelectorAll('.operator');
const operationDisplay = document.getElementById('#lastDisplay');

let firstNum = '';
let secondNum = '';
let shouldResetScreen = false;

//Add button listeners for calculator buttons
numButtons.forEach((button) =>
    button.addEventListener('click', () => displayNumber(button.textContent))
);

opButtons.forEach((button) => 
    button.addEventListener('click', () => displayOperation(button.textContent))
);

//Display number on the Calculator
function displayNumber(number) {
    if (currentDisplay.textContent === '0' || shouldResetScreen) {
        resetDisplay();
    }
    currentDisplay.textContent += number;
}

function resetDisplay() {
    currentDisplay.textContent = '';
    shouldResetScreen = false;
}

//Basic operations for calculator
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

//Determines numbers and operator chosen and performs calculation.
function operator(operand, num1, num2) {
    let sum = 0;
    switch(operand) {
        case 'x':
            sum = multiply(num1, num2);
            break;
        case '/':
            sum = divide(num1, num2);
            break;
        case '+':
            sum = add(num1, num2);
            break;
        case '-':
            sum = subtract(num1, num2);
            break;
        default: 
            return "Please enter a valid value.";
    }
    return sum;
}