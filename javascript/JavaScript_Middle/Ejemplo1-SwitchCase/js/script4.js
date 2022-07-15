function ejecutar() {
    var respuesta = document.getElementById("resultado");
    var option = document.getElementById("option").value;
    switch (option) {
        case "1":
            respuesta.innerText = "Plaza fija adquirida. ";
            break;
        case "2":
            respuesta.innerText = "Iterino ";
            break;
        case "3":
            respuesta.innerText = "Bolsa de trabajo. ";
            break;
        case "4":
            respuesta.innerText = "Apto ";
            break;
        case "5":
            respuesta.innerText = "No apto ";
            break;
        default:
            respuesta.innerText = "Es necesario elegir una de las opciones. ";
            break;
    }
}