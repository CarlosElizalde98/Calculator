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