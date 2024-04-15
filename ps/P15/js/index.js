let hola="Saludos"
console.log(hola)

let arreglo =[3,6,12,87,2]
//Hay arreglo de cadenas, de caracteres, ints, etc
//Arreglo con datos inciertos se imprimen como "Undefined"
let mixto = [0,0,0,"super", "hola", true, true, false]
mixto[5] = "holappp"
console.log(mixto)

let dicci = { //objetos o lo que en python son diccionarios
    nombre: "Juan",
    edad: 90,
    activo: true,
    materias:["Mate"," Programacion", "Ingles"],
    amigos:[
        {
            nombre: "Pedro",
            edad: 43
        },
        {
            nombre: "Juan",
            edad: 21
        }
    ]
}
console.log('Materia favorita:', dicci.materias[1])
console.log("Estado:" , dicci.activo)
console.log("Amigos del estudiante" , dicci.amigos[1].nombre , "y tiene " , dicci.amigos[1].edad , "anos")

if (typeof dicci.nombre === "string") {
    console.log("Hola");
}

