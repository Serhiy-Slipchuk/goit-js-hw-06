const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

outputEl.textContent = 'Anonymous';

inputEl.addEventListener('input', (event) => {
    event.currentTarget.value.length === 0 ?
    outputEl.textContent = 'Anonymous' : outputEl.textContent = event.currentTarget.value;
});