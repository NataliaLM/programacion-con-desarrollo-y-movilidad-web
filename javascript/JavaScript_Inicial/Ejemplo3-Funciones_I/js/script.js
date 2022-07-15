var n1 = parseInt(window.prompt("Introduce el primer número: "));
var n2 = parseInt(window.prompt("Introduce el segundo número: "));

function sumar(n1, n2){
    var resultado = n1 + n2;
    swal("La suma es: " + resultado);
}
function restar(n1, n2){
    //Accede a las variables globales
    var resultado = n1 - n2;
    swal("La resta es: " + resultado);
}
function multiplicar(n1, n2){
    swal("La multiplicación es: " + (n1 * n2));
}
function dividir(n1, n2){
    var resultado = n1 / n2;
    swal("La división es: " + resultado);
}