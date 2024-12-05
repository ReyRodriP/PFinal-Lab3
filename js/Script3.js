let currentPage = 1;
const formData = {
    personales: {},
    familiares: [],
    condiciones: {},
    internamientos: []
};

function nextPage(page) {
    document.getElementById(`page-${currentPage}`).classList.remove('active');
    document.getElementById(`page-${page}`).classList.add('active');
    currentPage = page;

    if (page === 5) {
        mostrarResumen();
    }
}

function prevPage(page) {
    document.getElementById(`page-${currentPage}`).classList.remove('active');
    document.getElementById(`page-${page}`).classList.add('active');
    currentPage = page;
}

function editarFormulario() {
    prevPage(1); 
}

function grabarFormulario() {
    alert('Los datos han sido grabados correctamente.');

    reiniciarFormulario();
}

function reiniciarFormulario() {
    formData.personales = {};
    formData.familiares = [];
    formData.condiciones = {};
    formData.internamientos = [];

    document.querySelectorAll('input').forEach(input => input.value = '');
    document.getElementById('familiares-list').innerHTML = '';
    document.getElementById('internamientos-list').innerHTML = '';

    nextPage(1);
}

function addFamiliar() {
    const familiaresList = document.getElementById('familiares-list');
    const familiarHTML = `
        <div class="familiar-item">
            <label>Nombre:</label><input type="text" class="familiar-nombre">
            <label>Parentesco:</label><input type="text" class="familiar-parentesco">
            <label>Edad:</label><input type="number" class="familiar-edad">
        </div>`;
    familiaresList.insertAdjacentHTML('beforeend', familiarHTML);
}

function addInternamiento() {
    const internamientosList = document.getElementById('internamientos-list');
    const internamientoHTML = `
        <div class="internamiento-item">
            <label>Fecha:</label><input type="date" class="internamiento-fecha">
            <label>Centro Médico:</label><input type="text" class="internamiento-centro">
            <label>Diagnóstico:</label><input type="text" class="internamiento-diagnostico">
        </div>`;
    internamientosList.insertAdjacentHTML('beforeend', internamientoHTML);
}

function mostrarResumen() {
    formData.personales.nombre = document.getElementById('nombre').value;
    formData.personales.apellido = document.getElementById('apellido').value;

    const familiares = document.querySelectorAll('.familiar-item');
    formData.familiares = Array.from(familiares).map(f => ({
        nombre: f.querySelector('.familiar-nombre').value,
        parentesco: f.querySelector('.familiar-parentesco').value,
        edad: f.querySelector('.familiar-edad').value
    }));

    formData.condiciones.enfermedad = document.getElementById('enfermedad').value;
    formData.condiciones.tiempo = document.getElementById('tiempoEnfermedad').value;

    const internamientos = document.querySelectorAll('.internamiento-item');
    formData.internamientos = Array.from(internamientos).map(i => ({
        fecha: i.querySelector('.internamiento-fecha').value,
        centro: i.querySelector('.internamiento-centro').value,
        diagnostico: i.querySelector('.internamiento-diagnostico').value
    }));

    document.getElementById('resultado').textContent = JSON.stringify(formData, null, 2);
}
