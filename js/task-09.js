const textEl = document.querySelector('.color');
const buttonEl = document.querySelector('.change-color');

buttonEl.addEventListener('click', onClickChangeBodyBgColor);

function onClickChangeBodyBgColor() {
  let colorHex = getRandomHexColor();
  textEl.textContent = colorHex;
  document.body.style.backgroundColor = colorHex;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
