/**
 * El método getElementById() -> Nos devuelve el elemento que contiene aquel
 * atributo Id, con el valor especificado. Siendo su uso muy extendido cuando
 * queremos manipular u obtener información de un elemento de su documento.
 */

function funcionesMath() {
    document.getElementById('resultado').innerHTML =
        "<label style='color:red; font-weight:bold ;'> Logaritmo: " + Math.log(1000) + "<br>" +
        "Exponencial: " + Math.exp(8) + "<br>" +
        "Raíz cuadrado: " + Math.sqrt(9) + "<br>" +
        "Potencia de 2^(Elevado a) 8: " + Math.pow(2, 8) + "<br>" +
        "Valor absoluto: " + Math.abs(-6678 + 2) + "<br>" +
        "Redondeo a la Baja: " + Math.floor(6.3458) + "<br>" +
        "Redondeo al alza: " + Math.ceil(6.3458) + "<br>" +
        "Redondeo medio: " + Math.round(6.3458) + "<br>" +
        "Random o semilla: " + Math.random() + "<br>" +
        "Random del 1 al 10: " + Math.random() * 10 + "<br>" +
        "Valor máximo: " + Math.max(1, 4, 6, 9) + "<br>" +
        "Valor mínimo: " + Math.min(1, 4, 6, 9) + "<br>" +
        "Coseno Pi: " + Math.cos(Math.PI) + "<br>";
}
function funcionesString() {
    var texto = "JavaScript estructuras de Cadena de Texto";
    document.getElementById('resultado').innerHTML =
        "Minúscula: " + texto.toLowerCase() + "<br>" +
        "Mayúscula " + texto.toUpperCase() + "<br>" +
        "Localizacion de caracteres @: " + texto.indexOf('@') + "<br>" +
        "Longitud de una cadena de texto: " + texto.length + "<br>" +
        "Unicode: " + String.fromCharCode(960) + "<br>" +
        /* ASCII */
        "Valor de Unicode: " + texto.charCodeAt(texto.indexOf('J')) + "<br>";
}
/* function funcionesDate(){
    var fecha = new Date()//Orientado a Objetos
    document.getElementById('resultado').innerHTML="Fecha: " + 
    fecha.toLocaleDateString+"<br>"+
    "Hora: "+fecha.toLocaleTimeString+"<br>"+
    "Minutos: "+fecha.getMinutes+"<br>"+
    "Segundos: "+reserva.getSeconds+"<br>"+
    "Milisegundos: "+reserva.getMilliseconds+"<br>"+
    "Mes: "+reserva.getMonth+"<br>"+
    "Día"+reserva.getDate;
} */
function funcionesDate() {
    var fecha = new Date();
    //Orientado a Objetos
    document.getElementById('resultado').innerHTML =
        "Fecha: " + fecha.toLocaleDateString() + "<br>" +
        "Hora: " + fecha.toLocaleTimeString() + "<br>" +
        "Minutos: " + fecha.getMinutes() + "<br>" +
        "Segundos: " + fecha.getSeconds() + "<br>" +
        "Milisegundos: " + fecha.getMilliseconds() + "<br>" +
        "Mes: " + parseInt(fecha.getMonth()+1) + "<br>" + //Empieza a contar en cero
                                                //No sumar 1 porque es string
        "Día: " + fecha.getDate();//martes
}