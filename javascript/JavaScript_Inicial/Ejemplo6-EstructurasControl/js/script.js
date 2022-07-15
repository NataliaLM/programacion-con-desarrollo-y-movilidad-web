/**
 * Cálculo de crédito, 
 * carrete
 * crt = crédito*rédito*tiempo
 * Cálculo de un crédito, donde cuando el tiempo sea a 24 meses, el tipo
 * de interés será del 5%, a 60 meses un 8% y a partir de 60 meses al
 * 10%.
 */

function Calcular(){
    var capital = parseFloat(window.prompt("Introduce el importe que solicitas. "));
    var tiempo = parseInt(window.prompt("Elige el numero de meses para abonar comodamente tus cuotas. "));
    var redito=0;

    if(tiempo <= 24){
        redito = 0.5
    }else if(tiempo <= 60){
        redito=0.8;
    }else{
        redito=0.10;
    }
    var interes = (capital*redito/tiempo);
    document.getElementById('resultado').innerText=
    "Credito solicitado: " + capital + "€" + "\n" + "Tipo de interes" + redito*10+"%" +
    "\n" + "Tiempo a pagar: " + tiempo/12 + " años. " + "\n" + "intereses a pagar" + interes.toFixed(2) +
    "€";

    var cuota = (interes+capital)/tiempo;
    document.getElementById('resultado1').innerText=
    "El total de su cuota a abonar cada mes será: " + cuota.toFixed(2) + "€";
    /**
     * .toFixed() -> Ajusta los decimales
     */
}
