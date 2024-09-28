// Seleccionamos el formulario de la agenda por su ID 'agendaForm' y le agregamos un evento 'submit'.
// Esto se ejecuta cuando el formulario es enviado (al hacer clic en el botón de "Agregar Evento").
document.getElementById('agendaForm').addEventListener('submit', function(event) {

    // La función `event.preventDefault()` evita que el formulario se envíe de la forma tradicional,
    // lo que significa que no recarga la página. Queremos manejar todo con JavaScript.
    event.preventDefault();

    // Obtenemos el valor del campo de texto (nombre del evento) usando su ID de html 'eventInput'.
    const eventInput = document.getElementById('eventInput').value;

    // Obtenemos el valor del campo de fecha usando su ID de html 'dateInput'.
    const dateInput = document.getElementById('dateInput').value;

    // Verificamos si ambos campos (nombre del evento y fecha) tienen algún valor.
    // Si ambos tienen datos, entonces llamamos a la función 'addEvent' para agregar el evento a la lista.
    if (eventInput && dateInput) {
        addEvent(eventInput, dateInput);  // Llamamos a la función `addEvent` pasando el nombre y la fecha del evento.
        // Una vez que el evento ha sido agregado a la lista, limpiamos el formulario usando `.reset()`,
        // para que los campos queden vacíos y el usuario pueda agregar un nuevo evento.
        document.getElementById('agendaForm').reset();
    }
});

// Esta función se encarga de agregar un nuevo evento a la lista de eventos.
function addEvent(eventName, eventDate) {
    // Seleccionamos el elemento de lista (ul) donde se mostrarán los eventos.
    const eventList = document.getElementById('eventList');
    
    // Creamos un nuevo elemento de lista (li) para representar el evento.
    const li = document.createElement('li');

    // Establecemos el contenido de este elemento 'li'. 
    // Mostramos el nombre del evento, la fecha y un botón para eliminar el evento.
    // El botón tiene un evento 'onclick' que ejecutará la función `removeEvent` cuando se haga clic.
    li.innerHTML = `${eventName} - ${eventDate} <button onclick="removeEvent(this)">Eliminar</button>`;
    
    // Agregamos este nuevo elemento 'li' al final de la lista de eventos (ul).
    eventList.appendChild(li);
}

// Esta función se encarga de eliminar un evento (li) de la lista cuando el botón "Eliminar" es clicado.
function removeEvent(button) {
    // 'button' es el botón que fue clicado.
    // Usamos 'button.parentNode' para seleccionar el elemento padre del botón, que es el 'li'.
    const li = button.parentNode;
    // Eliminamos este 'li' de la lista, quitando así el evento de la agenda.
    li.remove();
}

