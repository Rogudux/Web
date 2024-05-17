let nombre = document.getElementById('nombre');
let fecha = document.getElementById('fecha');
let descripcion = document.getElementById('descripcion');
let formulario = document.getElementById('formularioAgregar');
let listaTareas = document.getElementById('listaTareas');
let guardar = document.getElementById('guardar');
let cancelar = document.getElementById('cancelar');

let nombreEditada = document.getElementById('nombreEditada');
let fechaEditada = document.getElementById('fechaEditada');
let descripcionEditada = document.getElementById('descripcionEditada');
let formularioEditar = document.getElementById('formularioEditar');
let guardarEditada = document.getElementById('guardarEditada'); // Asegúrate de tener este elemento en tu HTML

let tareas = [
    {
        "nombre": "Hacer del baño",
        "fecha": "23-01-2024",
        "descripcion": "Hacer del baño en la salle"
    }
];

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    subir();
    mostrarTareas();
    guardarModal();
    formulario.reset();
});

let cerrarModal = () => {
    cancelar.setAttribute("data-bs-dismiss", "modal");
    cancelar.click();
}

let guardarModal = () => {
    guardar.setAttribute("data-bs-dismiss", "modal");
    guardar.click();
}

let subir = () => {
    console.log("Entro al sistema la tarea");
    let tarea = {
        nombre: nombre.value,
        fecha: fecha.value,
        descripcion: descripcion.value
    }
    tareas.push(tarea);
    console.log(tareas);
};

let mostrarTareas = () => {
    listaTareas.innerHTML = "";
    tareas.forEach((tarea, indice) => {
        listaTareas.innerHTML += `
        <div class="row">
            <div class="col-3 border p-3">
                <p>${tarea.nombre}</p> 
            </div>
            <div class="col-3 border p-3">
                <p>${tarea.fecha}</p> 
            </div>
            <div class="col-3 border p-3">
                <p>${tarea.descripcion}</p> 
            </div>
            <div class="col-3 border text-center p-3">
                <button onClick="cargarEdicion(${indice})" data-bs-toggle="modal" data-bs-target="#exampleModalEditar" class="btn btn-primary">Editar <i class="bi bi-pencil-fill"></i></button>
                <button onClick="borrarTarea(${indice})" class="btn btn-danger">Borrar <i class="bi bi-trash3-fill"></i></button>
            </div> 
        </div>
        `;
    });
}

let borrarTarea = (indice) => {
    if (confirm("¿Ya completaste tu tarea?")) {
        if (confirm("¿Seguro?")) {
            tareas.splice(indice, 1);
            mostrarTareas();
        } else {
            alert("No se borró la tarea");
        }
    } else {
        alert("No se borró la tarea");
    }
    console.log(`Se borró la tarea número ${indice}`);
}

let cargarEdicion = (indice) => {
    nombreEditada.value = tareas[indice].nombre;
    fechaEditada.value = tareas[indice].fecha;
    descripcionEditada.value = tareas[indice].descripcion;
    nombreEditada.setAttribute('data-indice', indice);
}

let edicion = (indice) => {
    tareas[indice].nombre = nombreEditada.value;
    tareas[indice].fecha = fechaEditada.value;
    tareas[indice].descripcion = descripcionEditada.value;
}

let guardarEdicion = () => {
    guardarEditada.setAttribute("data-bs-dismiss", "modal");
    guardarEditada.click();
}

formularioEditar.addEventListener('submit', (e) => {
    e.preventDefault();
    let indice = nombreEditada.getAttribute('data-indice');
    edicion(indice);
    mostrarTareas();
    guardarEdicion();
    formularioEditar.reset();
});

// Inicializar la lista de tareas
mostrarTareas();
