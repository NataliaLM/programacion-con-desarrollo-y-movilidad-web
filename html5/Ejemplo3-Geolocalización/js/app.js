var mapa;
function mostrarMapa() {
    /**
     * 1. Comprobar si el navegador y el dispositivo soportan la
     * geolocalización. */
    if (navigator.geolocation) {
        /* 2. Obtener la ubicación */
        navigator.geolocation.getCurrentPosition(mostrarLocalizacion, manejarError);
    }
    else {
        alert("Tu dispositivo o navegador No accede a geolocalización. ");
    }
    /*
    3. Generamos la variable de las opciones de nuestro mapa
    */
    var opciones = {
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    mapa = new google.maps.Map(document.getElementById('resultado'), opciones);

}
//La función de localización, su misión principal plasmar las
//coordebas a mostrar
function mostrarLocalizacion(posicion) {
    //Otenemos coordenadas
    var pos = new google.maps.LatLng(40.43505895065709, -3.65192815793529);
    //Mostrar la ubicación con texto
    var info = new google.maps.InfoWindow({
        map: mapa,
        position: pos,
        content: 'Estamos aquí'
    });
    //Mostramos la marca posción
    var marker = new google.maps.Marker({
        position: { lat: 40.43505895065709, lng: -3.65192815793529 },
        map: mapa,
        title: 'Negocio?'
    });
    //5. Posicionar el mapa, llamado del objeto al elemento HTML
    mapa.setCenter(pos);
}
//6. Manejar posibles errores, formalidades necesarias
function manejarError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert('Permiso denegado');
            break;
        case error.TIMEOUT:
            alert('Tiempo de espera agotado. ');
            break;
        case error.POSITION_UNAVAILABLE:
            alert('No se detecta la ubicación. ');
            break;
        case error.UNKNOWN_ERROR:
            alert('Error desconocido #202#');
            break;
    }
}