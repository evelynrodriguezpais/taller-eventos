document.querySelector('div').addEventListener('click', function() {
    alert('Hola! Soy el div');
});


// Función para el botón, detiene la propagación del evento click
function saludar(event) {
    event.stopPropagation(); // Detiene la propagación del evento
    alert("Hola!");
  }
