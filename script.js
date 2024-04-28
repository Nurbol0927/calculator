let expression = '';

function input(value) {
    const display = document.getElementById('display');
    expression += value;
    display.textContent = expression;
}
function clearDisplay() {
    expression = '';
    document.getElementById('display').textContent = '';
}
function calculate() {
    try {
        const result = eval(expression);
        document.getElementById('display').textContent = result;
        expression = result.toString();
    } catch (e) {
        document.getElementById('display').textContent = 'Ошибка';
    }
}
