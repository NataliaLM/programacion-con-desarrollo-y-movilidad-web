function autorizacion(){
    var miNombre=document.getElementById('nombre').value;
    var misApellidos=document.getElementById('apellidos').value;
    var eMail;

    document.getElementById('resultado').innerHTML=
    "Acceso autorizado a: " + miNombre + " " + misApellidos;
}