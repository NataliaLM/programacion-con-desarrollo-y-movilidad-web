function ejecutar() {
    var respuesta = document.getElementById("resultado");
    var option = document.getElementById("option").value;
    switch (option) {
        case "1":
            respuesta.innerText = "Formateando el disco, por favor espere. ";
            break;
        case "2":
            respuesta.innerText = "Recopilando datos para su eliminación, por favor espere. ";
            break;
        case "3":
            respuesta.innerText = "Buscando nueva ubicación de elementos de conexión, por favor espere. ";
            break;
        case "4":
            respuesta.innerText = "Su navegador está siendo monotorizado, por favo espere. " + navigator.userAgent;
            break;
        case "5":
            respuesta.innerText = "Formateando el disco, por favor espere. ";
            break;
        default:
            respuesta.innerText = "Es necesario elegir una de las opciones. ";
            break;
    }
}