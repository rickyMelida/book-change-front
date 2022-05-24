const data = {
    password: '12345',
    email : 'admin@gmail.com',
    name: 'Ricardo Melida',
    username: 'ricky'

}

const emailForm = document.querySelector('#email');
const passwordForm = document.querySelector('#password');

const btnSubmit = document.querySelector('#btn-submit');
const messageError = document.querySelector('#error');

btnSubmit.addEventListener('click', login);

function login(e) {
    e.preventDefault();

    
    if(emailForm.value == data.email && passwordForm.value == data.password) {
        localStorage.setItem('username', data.username);
        localStorage.setItem('name', data.name);
        window.location.href = './index.html'
    }else {
        messageError.innerHTML = 'Correo o contraseña incorrecta.';        
        messageError.classList.remove('d-none');
    }
}