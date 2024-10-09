const display = document.getElementById('result');
let currentInput = '';

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonValue = button.innerText;

        if (buttonValue === 'AC') {
            currentInput = '';
            display.value = '';
        } else if (buttonValue === 'DEL') {
            currentInput = currentInput.slice(0, -1);
            display.value = currentInput;
        } else if (buttonValue === '%') {
            currentInput = (parseFloat(currentInput) / 100).toString();
            display.value = currentInput;
        } else if (buttonValue === '=') {
            try {
                currentInput = eval(currentInput.replace('×', '*').replace('÷', '/'));
                display.value = currentInput;
            } catch (error) {
                display.value = 'Error';
            }
        } else {
            currentInput += buttonValue;
            display.value = currentInput;
        }
    });
});
