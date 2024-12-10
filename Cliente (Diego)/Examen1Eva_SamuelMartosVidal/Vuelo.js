class Vuelo {
    constructor(codigo, numPlazas, importe) {
        this.codigo = codigo;
        this.numPlazas = parseFloat(numPlazas);
        this.importe = parseFloat(importe);
    }
    modificarVuelo(nuevoPlazas, nuevaImporte) {
        this.numPlazas = parseFloat(nuevoPlazas);
        this.importe = parseFloat(nuevaImporte);
    }
}
// Variables globales
const vuelos = [];
// Funciones
function anadirPersona() {
    const codigo = document.getElementById('codigo').value.trim();
    const numPlazas = document.getElementById('numPlazas').value;
    const importe = document.getElementById('importe').value;
    if (codigo && numPlazas && importe) {
        const nuevoVuelo = new Vuelo(codigo, numPlazas, importe);
        vuelos.push(nuevoVuelo);
        actualizarTabla();
        limpiarCampos();
    } else {
        alert('Completa todos los campos.');
    }
}
function modificarPersona() {
    const codigo = document.getElementById('codigo').value.trim();
    const numPlazas = parseFloat(document.getElementById('numPlazas').value);
    const importe = parseFloat(document.getElementById('importe').value);
    const vuelo = vuelos.find(v => v.codigo === codigo);
    if (vuelo) {
        vuelo.modificarVuelo(numPlazas, importe);
        actualizarTabla();
        limpiarCampos();
    } else {
        alert('El vuelo no está registrado.');
    }
}
function actualizarTabla() {
    const tabla = document.getElementById('tablaVuelos').querySelector('tbody');
    tabla.innerHTML = '';
    vuelos.forEach(vuelo => {
        const fila = `
            <tr>
                <td>${vuelo.codigo}</td>
                <td>${vuelo.numPlazas}</td>
                <td>${vuelo.importe}</td>
            </tr>
        `;
        tabla.innerHTML += fila;
    });
}
function limpiarCampos() {
    document.getElementById('codigo').value = '';
    document.getElementById('numPlazas').value = '';
    document.getElementById('importe').value = '';
}