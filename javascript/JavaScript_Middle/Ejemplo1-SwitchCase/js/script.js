function presiona(){
    var fecha = new Date();
    var dia = fecha.getDay();
    var menu = "";
}
switch(dia){
    case 0:
        menu = "Cocido madrileño ";
        break;
    case 1:
        menu = "Cerrado, Descanso del personal";
        break;
    case 2:
        menu = "Penne a la siciliana";
        break;
    case 3:
        menu = "Calamares del Cantabrico";
        break;
    case 4:
        menu="Merlusza al Canto";
        break;
    case 5:
        menu="Judiones al vapor";
        break;
    case 6:
        menu="Esparragos con Mahonesa";
        break;
    default:
        menu="Error de conexión";
        break;
}
document.getElementById('resultado').innerText=("El menú del día es: "+menu);