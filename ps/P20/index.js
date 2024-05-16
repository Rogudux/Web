let resultado = document.getElementById('resultado');
let historial= [];


function asignar(valor){
    resultado.value += valor;
}

function raiz(){
    if(resultado.value !='')
        resultado.value = Math.sqrt (resultado.value);
    else
    alert("Ingrese un valor")
}

function cuadrado(){
    if(resultado.value !="")
        resultado.value = Math.pow (resultado.value,2);
}

function resolver() {
    let resultadoValue = resultado.value;
    let lista = document.getElementById("fuck");
    let fuck = ""; 
    if (resultadoValue !== '') {
        resultado.value = eval(resultadoValue);
        historial.push(resultado.value);
        console.log(historial);

        for (let historia of historial) {

            fuck += `<p> ${historia} <button onclick="borrarOpcion()" class="btn btn-dark rounded-pill"><i class="bi bi-trash-fill"></i></button> </p>
            
            `; 

        }

        lista.innerHTML = fuck;    
    } else {
        alert("Ingrese un valor");
    }
}

function borrarOpcion(){
    historia.innerHTML = "";
}


function sen(){
    if(resultado.value !='')
        resultado.value = Math.sin(resultado.value);
    else
    alert("Ingrese un valor")
}

function cos(){
    if(resultado.value !='')
        resultado.value = Math.cos(resultado.value);
    else
    alert("Ingrese un valor")
}

function tan(){
    if(resultado.value !='')
        resultado.value = Math.tan(resultado.value);
    else
    alert("Ingrese un valor")
}

function limpiar(){
    resultado.value = ""
}

function borrar(){
    let valor = resultado.value;
    resultado.value = valor.slice(0, -1);
}

function limpiarHistorial(){
    historial.length = 0;
    document.getElementById("fuck").innerHTML = ""; // Limpiar también el contenido del elemento HTML


}








