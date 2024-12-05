const username = document.getElementById('username');
const password = document.getElementById('password');
const button = document.getElementById('button');
const link = document.querySelector('.link');

const validUsername = 'Radhames';
const validPassword = '12345';

button.addEventListener('click', (e) => {
    e.preventDefault(); // Prevenir el envío del formulario

    const enteredUsername = username.value;
    const enteredPassword = password.value;

    // Verificar las credenciales
    if (enteredUsername === validUsername && enteredPassword === validPassword) {

        window.location.href = 'Index.html';
    } else {
        alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
    }
});

// Evento para mostrar las credenciales al hacer clic en el enlace
link.addEventListener('click', (e) => {
    e.preventDefault(); // Prevenir la acción predeterminada del enlace
    alert(`Usuario: ${validUsername}\nContraseña: ${validPassword}`);
});
