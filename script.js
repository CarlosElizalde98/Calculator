const currentDisplay = document.querySelector('#display');
const clearBtn = document.querySelector('#clear');
const equalsBtn = document.querySelector('#equals');
const numButtons = document.querySelectorAll('.num-button');
const opButtons = document.querySelectorAll('.operator');

let firstNum = '';
let secondNum = '';
let currentOperator = null;
let shouldResetScreen = false;

equalsBtn.addEventListener('click', evaluate);
clearBtn.addEventListener('click', clear);

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

//Clears screen when clicked
function clear() {
    currentDisplay.textContent = '0';
    firstNum = '';
    secondNum = '';
    currentOperator = null;
}

//Clears screen whenever a number is evaluated.
function resetDisplay() {
    currentDisplay.textContent = '';
    shouldResetScreen = false;
}

//Displays operator alongside first operand.
function displayOperation(operator) {
    if (currentOperator !== null) {
        evaluate();
    }
    firstNum = currentDisplay.textContent;
    currentOperator = operator;
    currentDisplay.textContent = `${firstNum} ${currentOperator}`;
    shouldResetScreen = true;
}

//Evaluates expression entered by user.
function evaluate() {
    if (currentOperator === null || shouldResetScreen) {
        return;
    }

    secondNum = currentDisplay.textContent;
    currentDisplay.textContent = operator(currentOperator, firstNum, secondNum);
    currentOperator = null;

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
    num1 = Number(num1);
    num2 = Number(num2);
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
            return null;
    }
    return sum;
}