function mensaje(){
    var miClave=document.getElementById('clave').value;
    /* var eMail=document.getElementById('email').value; Otra forma*/
    var eMail=email.value;
    document.getElementById('resultado').innerHTML=
    "Clave correcta: "  + eMail + " pulse ingresar. ";
}
function limpiar(){
    document.getElementById('resultado').innerHTML="";
}