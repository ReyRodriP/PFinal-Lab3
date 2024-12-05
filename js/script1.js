function validarCedula(cedula) {
    cedula = cedula.replace(/-/g, '');
    if (cedula.length !== 11) {
        return false;
    }

    let suma = 0;
    let peso = [1, 2];  
    
    for (let i = 0; i < 10; i++) {
        let num = parseInt(cedula[i]);
        let mult = num * peso[i % 2];
        if (mult > 9) {
            mult = Math.floor(mult / 10) + (mult % 10);
        }
        suma += mult;
    }

    let digitoControl = parseInt(cedula[10]);
    return (10 - (suma % 10)) % 10 === digitoControl;
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btnValidar').addEventListener('click', function(event) {
        let cedulaInput = document.forms['formContacto'].elements['nombre'].value;

        if (validarCedula(cedulaInput)) {
            alert('Cédula válida.');
        } else {
            alert('Cédula inválida. Por favor, ingresa una cédula correcta.');
        }
    });
});
