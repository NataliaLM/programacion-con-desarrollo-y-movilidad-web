function funcionMinutoSegundo() {
    var fecha = new Date();
    //Orientado a Objetos
    document.getElementById('resultado').innerHTML =

        "Hora: " + fecha.toLocaleTimeString() + "<br>" +
        "Minutos: " + fecha.getMinutes() + "<br>";
}
function cierre() {
    document.getElementById('resultado').innerHTML = "Mira la hora y los minutos.";
}