function Calcular() {
  var arrayNotas = document.getElementById("notas").value;
  var suma = 0;
  var mayor = 0;
  var media = 0;
  //Suma
  for (var i = 0; i < arrayNotas.length; i++) {
    suma += parseFloat(notas[i]);
  }
  //Media
  media = suma / arrayNotas.length;
  //Nota más alta
  for (var i = 0; i < arrayNotas.length; i++) {
    if (mayor < parseFloat(arrayNotas[i])) {
      mayor = arrayNotas[i];
    }
  }
}
function Reiniciar() {}
