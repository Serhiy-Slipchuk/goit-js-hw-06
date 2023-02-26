const inputEl = document.querySelector('#validation-input');
const inputLength = Number(inputEl.getAttribute('data-length'));

inputEl.addEventListener('blur', (event) => event.currentTarget.value.length === inputLength ?
        inputEl.classList.add('valid') : inputEl.classList.add('invalid'));

inputEl.addEventListener('focus', () => {
    if (inputEl.classList.contains('valid')) {
        inputEl.classList.remove('valid');
    }
    if (inputEl.classList.contains('invalid')) {
        inputEl.classList.remove('invalid');
    }
});