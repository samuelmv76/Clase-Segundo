// Cambiar el color de fondo del primer botón cuando se haga clic
document.getElementById('btn1').addEventListener('click', function() {
    this.style.backgroundColor = this.style.backgroundColor === 'green' ? 'gray' : 'green';
});

// Habilitar o deshabilitar el primer botón cuando se haga clic en el segundo botón
document.getElementById('btn2').addEventListener('click', function() {
    const button1 = document.getElementById('btn1');
    button1.disabled = !button1.disabled;  // Alterna el estado de deshabilitado
    this.textContent = button1.disabled ? 'Enable Button 1' : 'Disable Button 1';  // Cambia el texto del botón 2
});

// Mostrar un mensaje cuando se haga clic en el tercer botón
document.getElementById('btn3').addEventListener('click', function() {
    alert('You clicked the selected button!');
});
