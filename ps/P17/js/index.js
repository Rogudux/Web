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

let pelis = [
    {titulo: "Spider-man", imagen: "https://upload.wikimedia.org/wikipedia/commons/5/52/Spider-Man.jpg"},
    {titulo: "Matrix", imagen: "https://es.web.img3.acsta.net/medias/nmedia/18/72/16/76/20065616.jpg"},
    {titulo: "Star wars", imagen: "https://i.blogs.es/1da08b/1366_2000-9-/840_560.jpeg"},
    {titulo: "Sherk", imagen: "https://pics.filmaffinity.com/Shrek-903764423-large.jpg"}
]

let galeria = document.getElementById("galeria");
galeria.innerHTML = "";
for (let peli of pelis){
    console.log(peli);
    galeria.innerHTML += `<div class='col-12 col-md-3 text-center'><p>${peli.titulo}</p><img src='${peli.imagen}' alt='Imagen de ${peli.titulo}' class='img-fluid'></div>`;
}