/**
 * 1º Creación de variables
 * Sintaxis:
 * var minusculaName = "";
 * var minusculaName = 0;
 * De manera automática nombre (definido) y valor
 * 2º Maneras de declararla
 * a) explícita
 * var nombre = "";
 * b) implícita
 * Escribimos únicamente el nombre y le asignamos el valor
 * var nombre;
 * nombre = "";
 */
/**
 * + es concatenación
 */
var nombre = "Toño";
swal({
    title : "Me llamo" + nombre,
    text: "nombre de pila",
    icon: "info",
    button: "Un placer teneros aquí!",
});