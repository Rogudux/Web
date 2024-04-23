let hora= 22;

if(hora >= 6 && hora <= 12){
    console.log("Buenos dias");
} else if (hora > 12 && hora <= 20){
    console.log("Buenas tardes");
} else {
    console.log("Duermete");
}


let fecha = new Date().getDay();

console.log(fecha);

switch (fecha) {
    case 0:
        console.log("Domingo");
        break;
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sábado");
        break;
    default:
        console.log("Valor de fecha inválido");
}

