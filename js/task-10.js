const boxesEl = document.querySelector('#boxes');
const createButtonEl = document.querySelector('[data-create]');
const destroyButtonEl = document.querySelector('[data-destroy]');
const inputEl = document.querySelector('input[type="number"]');

let amount = 0;
inputEl.addEventListener('input', event => amount = Number(event.currentTarget.value));

createButtonEl.addEventListener('click', () => { createBoxes(amount) });
destroyButtonEl.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const boxes = [];
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    boxes.push(box);
  }
  boxesEl.append(...boxes);
}

function destroyBoxes() {
  [...boxesEl.children].forEach( child => child.remove());
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}