function calculator(operation) {
    const inputA = parseFloat(document.getElementById('inputA').value);
    const inputB = parseFloat(document.getElementById('inputB').value);
    const resultElement = document.getElementById('result');

    if (isNaN(inputA) || isNaN(inputB)) {
        alert('Vui lòng nhập lại')
        return;
    }

    let result;
    switch (operation) {
        case 'sum':
            result = inputA + inputB;
            break;
        case 'subtract':
            result = inputA - inputB;
            break;
        case 'multiply':
            result = inputA * inputB;
            break;
        case 'divide':
            if (inputB === 0) {
                resultElement.textContent = "Cannot divide by zero.";
                return;
            }
            result = inputA / inputB;
            break;
        default:
            resultElement.textContent = "Invalid operation.";
            return;
        }
        resultElement.textContent = `Result: ${result}`;
}

function resetInputs() {
    document.getElementById('inputA').value = '';
    document.getElementById('inputB').value = '';
    document.getElementById('result').textContent = '';
}