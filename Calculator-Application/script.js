const screen = document.getElementById('screen');
const keys = document.querySelectorAll('.keys li');
const clear = document.getElementById('clear');
const equal = document.getElementById('equal');

keys.forEach(key => {
    key.addEventListener('click', () => {
        if (key.id === 'equal') {
            calculate();
        } else {
            let value = key.innerText;
            // Replace × and ÷ with JS friendly operators
            if (value === '×') value = '*';
            if (value === '÷') value = '/';
            screen.innerText += value;
        }
    });
});

clear.addEventListener('click', () => screen.innerText = '');

function calculate() {
    try {
        // Use Function constructor instead of eval for safety
        screen.innerText = Function('"use strict";return (' + screen.innerText + ')')();
    } catch {
        screen.innerText = 'Error';
    }
}
