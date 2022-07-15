function mensaje(){
    var miClave=document.getElementById('clave').value;
    /* var eMail=document.getElementById('email').value; Otra forma*/
    var eMail=email.value;

    var miNombre=nombre.value;
    var miDomicilio=domicilio.value;
    var miComunidad=comunidad.value;
    var miProvincia=provincia.value;
    var miSexo=sexo.value;
    /**
     * Ejercicio:
     * Establecer la validación de clave e email, en el sentido de que si
     * No hay alún campo relleno, nos consteste son necesarios rellenar
     * clave y email, en caso correcto dar la bienvenida al usuario.
     */
    
    if(miClave.length!=0 && eMail.length != 0 && miNombre.length != 0 &&
        miDomicilio.length != 0 && miComunidad.length != 0 && 
        miProvincia.length != 0 && miSexo.length != 0){ /*Si está relleno*/
        document.getElementById('resultado').innerHTML=
        "Clave correcta, bienvenido a: "  + miNombre + " pulse ingresar. ";
    } else {
        swal("Son necesarios rellenar todos los campos. ");
    }
}
function limpiar(){
    document.getElementById('resultado').innerHTML="";
}