let nombre = document.getElementById('nombre');
let fecha = document.getElementById('fecha');
let descripcion = document.getElementById('descripcion');
let formulario = document.getElementById('formularioAgregar');
let listaTareas = document.getElementById('listaTareas');

let tareas = [{
    nombre:'Subir tarea',
    fecha:'32-43-2021',
    descripcion:'a la bestiaaaaaaaa',
},
{
    nombre:'Subir tarea',
    fecha:'32-43-2021',
    descripcion:'a la bestiaaaaaaaa'
}
];

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    subir();

} );

let subir = () =>{
    console.log("Entro al sismeta la tarea");
    let tarea = {
        nombre: nombre.value,
        fecha: fecha.value,
        descripcion: descripcion.value
    }
    tareas.push(tarea);
    console.log(tareas);
};


let mostrarTareas = () =>{
    tareas.forEach((tarea) =>{

        listaTareas.innerHTML += `
        <div class = "row">
            <div class = "col-3 border p-3">
                <p> ${tarea.nombre}</p> 
            </div>

            <div class = "col-3 border p-3">
                <p> ${tarea.fecha}</p> 
            </div>

            <div class = "col-3 border p-3">
                <p> ${tarea.descripcion}</p> 
            </div>

            <div class = "col-3 border text-center p-3">
                <button>Editar</button>
                <button>Borrar</button>

            </div> 

        </div>

        `
    })
}

mostrarTareas() 




