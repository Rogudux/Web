let lista = document.getElementById("lista");

let texto = "Hola mi nombre Diego y voy a cumplir 18";
console.log(texto);
lista.innerHTML = texto;

let a = 10;
let b = 400;

let papi = document.getElementById("papi");
let text = `La suma de ${a} mas ${b}
el resultado es ${a+b}
`
papi.innerHTML = text;
console.log(text)

let dinero = 90000
let salario = `Tu salario mensual sera de ${dinero} y asi`;
console.log(salario)
lista.innerHTML = salario;

let nombre = "Mario";
let jaja = 43;

function funcion1(cadena, personaX, edadExp) {
    let resultado = ``;

    resultado += `${cadena} ${personaX} tienes una experiencia laboral de ${edadExp} años`;
    console.log(resultado);
    return resultado;
}

funcion1("Hola", "Marioooooooo", 987);

let titulo = "Impresion en cadena con template strings";
let cantantes = ["Milo", "Zoe", "Depresion sonora"];
let cadenaHTML = `<div> ${titulo}</div>`

cadenaHTML += "<ul>"

for (let cantante of cantantes) {
    cadenaHTML += `<li> ${cantante}</li>`
}

cadenaHTML += "</ul>";

let pelis = document.getElementById("pelis");
pelis.innerHTML = cadenaHTML;
