class Vuelo {
    constructor(codigo, numPlazas, importe) {
        this.codigo = codigo;
        this.numPlazas = parseFloat(numPlazas);
        this.importe = parseFloat(importe);
    }
    modificarVuelo(nuevoPlazas, nuevaImporte) {
        this.numPlazas = nuevoPlazas;
        this.importe = nuevaImporte;
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
        console.log(nuevoVuelo);
        console.log(vuelos);
        actualizarTabla();
        limpiarCampos();
    } else {
        alert('Completa todos los campos.');
    }
    console.log(codigo);
}//terminado
function modificarPersona() {
    const codigo = document.getElementById('codigo').value.trim();
    const numPlazas = document.getElementById('numPlazas').value;
    const importe = document.getElementById('importe').value;
    console.log(codigo);
    
    const vuelo = vuelos.find(v => v.codigo === codigo);
    if (vuelo) {
        vuelo.modificarPersona(numPlazas, importe);
        actualizarTabla();
        limpiarCampos();
    } else {
        alert('El vuelo no esta registrada.');
    }
}//terminado
function actualizarTabla() { //usada en modificar y anadir
    const tabla = document.getElementById('tablaVuelos').querySelector('tbody');
    tabla.innerHTML = '';
    vuelos.forEach(vuelo => {
        const fila = `
            <tr>
                <td>${vuelo.codigo}</td>
                <td>${vuelo.numPlazas}</td>
                <td>${vuelo.importe}</td>
                <td>-</td>
                <td>-</td>
            </tr>
        `;
        tabla.innerHTML += fila;
    });
}//terminado
function limpiarCampos() {
    document.getElementById('codigo').value = '';
    document.getElementById('numPlazas').value = '';
    document.getElementById('importe').value = '';
}//terminado