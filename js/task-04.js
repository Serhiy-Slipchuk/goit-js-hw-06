const valueEl = document.querySelector('#value');
const decrementButtonEl = document.querySelector('[data-action="decrement"]');
const incrementButtonEl = document.querySelector('[data-action="increment"]');

let counterValue = 0;
valueEl.textContent = counterValue;

decrementButtonEl.addEventListener('click', () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
});

incrementButtonEl.addEventListener('click', () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
});