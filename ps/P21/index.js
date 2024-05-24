let nombre = document.getElementById('nombre');
let fecha = document.getElementById('fecha');
let descripcion = document.getElementById('descripcion');
let imagen = document.getElementById('imagen');
let video = document.getElementById('video');


let formulario = document.getElementById('formularioAgregar');
let listaTareas = document.getElementById('listaTareas');
let guardar = document.getElementById('guardar');
let cancelar = document.getElementById('cancelar');


let tareas = [
    {
        "nombre": "Escuchar musica",
        "fecha":"23-05-2024",
        "descripcion":"Escuchar musica trnaquilo en mi casa en particular la cancion de 'Drogada en brasil'",
        "imagen": "https://plus.unsplash.com/premium_photo-1693169973609-342539dea9dc?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "video": "https://www.youtube.com/embed/5kV5cdaQh1M?si=4S-XTErCj8j6kAdB&amp;start=4"
    }
];

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    subir();
    mostrarTareas();
    guardarModal();
    formulario.reset();

} );

let cerrarModal = () => {
    cancelar.setAttribute("data-bs-dismiss","modal");
    cancelar.click();
}

let guardarModal = () => {
    guardar.setAttribute("data-bs-dismiss","modal");
    guardar.click();
}


let subir = () =>{
    console.log("Entro al sismeta la tarea");
    let tarea = {
        nombre: nombre.value,
        fecha: fecha.value,
        descripcion: descripcion.value,
        imagen: imagen.value,
        video : video.value
    }
    tareas.push(tarea);
    console.log(tareas);
};


let mostrarTareas = () => {
    listaTareas.innerHTML = "";
    tareas.forEach((tarea, indice) => {
        listaTareas.innerHTML += `
        <div class="row">
            <div class="col-12 col-md-2 col-sm-3 border p-3">
                <p>${tarea.nombre}</p>
            </div>
            <div class="col-12 col-md-1 col-sm-2 border p-3">
                <p>${tarea.fecha}</p>
            </div>
            <div class="col-12 col-md-2 col-sm-3 border p-3">
                <p>${tarea.descripcion}</p>
            </div>
            <div class="col-12 col-md-2 col-sm-4 border p-3">
                <img src="${tarea.imagen}" class="img-fluid border rounded" alt="...">
            </div>
            <div class="col-12 col-md-3 col-sm-8 border p-3">
                <iframe src="${tarea.video}" class="w-100" height="200" allow="allowfullscreen"></iframe>
            </div>
            <div class="col-12 col-md-2 col-sm-4 border text-center p-3">
                <div class="row py-1">
                    <div class="col-12 text-center p-3">
                        <button data-bs-toggle="modal" onClick=cargarEdicion(${indice}) data-bs-target="#exampleModalEditar" id="editarTarea" class="btn btn-primary form-control rounded-pill">Editar <i class="bi bi-pencil-fill"></i></button>
                    </div>
                </div>
                <div class="row py-1">
                    <div class="col-12 text-center p-3">
                        <button id="borrarTarea" onClick=borrarTareaa(this,${indice}) class="btn btn-danger form-control rounded-pill">Borrar <i class="bi bi-trash3-fill"></i></button>
                    </div>
                </div>
            </div>
        </div>`;
    });
};


let borrarTarea = document.getElementById('borrarTarea');

borrarTareaa = (boton,indice) =>{

    if( confirm("Ya completaste tu tarea?")){
        if(confirm("Seguro?")){
            boton.parentElement.parentElement.remove();
            tareas.splice(indice, 1);
            mostrarTareas();

        }
        else{
            alert("orale va")
        }
    }
    else{
        alert("orale va")
    }
    console.log(`Se borro la tarea numero ${indice}`);

}

let nombreEditada = document.getElementById('nombreEditada');
let fechaEditada = document.getElementById('fechaEditada');
let descripcionEditada = document.getElementById('descripcionEditada');
let imagenEditada = document.getElementById('imagenEditada');
let videoEditada = document.getElementById('videoEditada');

let formularioEditar = document.getElementById('formularioEditar');


let cargarEdicion = (indice) => {
    nombreEditada.value = tareas[indice].nombre;
    fechaEditada.value = tareas[indice].fecha;
    descripcionEditada.value = tareas[indice].descripcion;
    imagenEditada.value = tareas[indice].imagen;
    videoEditada.value = tareas[indice].video;


    nombreEditada.setAttribute('data-indice', indice);
}

let edicion = (indice) => {
    tareas[indice]["nombre"] = nombreEditada.value;
    tareas[indice]["fecha"] = fechaEditada.value;
    tareas[indice]["descripcion"] = descripcionEditada.value;
    tareas[indice]["imagen"] = imagenEditada.value;
    tareas[indice]["video"] = videoEditada.value;

};


let guardarEdicion = () => {
    guardarEditada.setAttribute("data-bs-dismiss","modal");
    guardarEditada.click();
}

formularioEditar.addEventListener('submit', (e) => {
    e.preventDefault();
    let indice = nombreEditada.getAttribute('data-indice');
    edicion(indice);
    mostrarTareas();
    guardarEdicion();
    formularioEditar.reset();

} );

document.addEventListener('DOMContentLoaded', (event) => {
    const darkModeToggle = document.getElementById('darkModeToggle');

    darkModeToggle.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    });
});


mostrarTareas();













