//4- Crear una web con un reloj que muestre la siguiente información:

   function actualizarReloj() {
    const dias = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
    const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

    const fecha = new Date();
    const dia = dias[fecha.getDay()];
    const fechaDelMes = fecha.getDate();
    const mes = meses[fecha.getMonth()];
    const año = fecha.getFullYear();

    let horas = fecha.getHours();
    const minutos = fecha.getMinutes();
    const segundos = fecha.getSeconds();
    const esPM = horas >= 12;

    if (horas > 12) {
        horas -= 12;
    } else if (horas === 0) {
        horas = 12;
    }

    const elementoFecha = document.getElementById('fecha');
        const elementoHora = document.getElementById('hora');
        elementoFecha.textContent = `${dia} ${fechaDelMes} de ${mes} del ${año}`;
        elementoHora.textContent = `${horas}:${minutos}:${segundos} ${esPM ? 'pm' : 'am'}`;
        }

  setInterval(actualizarReloj, 1000);