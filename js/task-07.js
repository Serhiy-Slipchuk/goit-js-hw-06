const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

let textSize = inputEl.value;
textEl.style.fontSize = `${textSize}px`;

inputEl.addEventListener('input', event => {
    textSize = event.currentTarget.value;
    textEl.style.fontSize = `${textSize}px`
    console.log(textEl.style.fontSize);
});