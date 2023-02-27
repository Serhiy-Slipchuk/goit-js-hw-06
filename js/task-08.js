const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const { elements: { email, password } } = event.currentTarget;
    if (email.value === '' || password.value === '') {
        alert('Всі поля форми повинні бути заповнені!');
    } else {
        const loginFormData = {
            email: email.value,
            password: password.value
        }
        console.log(loginFormData);
        event.currentTarget.reset();
    }
};