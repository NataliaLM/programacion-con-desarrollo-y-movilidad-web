function mensaje(){
    var miClave=document.getElementById('clave').value;
    /* var eMail=document.getElementById('email').value; Otra forma*/
    var eMail=email.value;
    /**
     * Ejercicio:
     * Establecer la validación de clave e email, en el sentido de que si
     * No hay alún campo relleno, nos consteste son necesarios rellenar
     * clave y email, en caso correcto dar la bienvenida al usuario.
     */
    
    if(miClave.length!=0 && eMail.length != 0){ /*Si está relleno*/
        document.getElementById('resultado').innerHTML=
        "Clave correcta, bienvenido a: "  + eMail + " pulse ingresar. ";
    } else {
        swal("Son necesarios clave e email. ");
    }
}
function limpiar(){
    document.getElementById('resultado').innerHTML="";
}