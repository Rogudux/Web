const fruits = ["apple","orange","banana" ]
let size = fruits.length;

console.warn(size);

for (let i = 0; i < size; i++) {
    console.log(fruits[i]);
}

let contenido = "";
let parrafo1 = document.getElementById("parrafo1")


for(let i = 0; i < size; i++){ 
    contenido += `<ul> Fruit ${i}: ${fruits[i]} </ul> `
}
parrafo1.innerHTML = contenido

let parrafo2 = document.getElementById('parrafo2');
parrafo2.innerHTML = fruits.join("-");

let parrafo3 = document.getElementById('parrafo3');
fruits.pop();
parrafo3.innerHTML = fruits.join("-")

let parrafo4 = document.getElementById('parrafo4');
fruits.push("kiwi");
fruits.push("strawberry");
parrafo4.innerHTML = fruits

let parrafo5 = document.getElementById('parrafo5');
fruits.unshift("kiwi");
fruits.unshift("strawberry"); //te agrega las cosasa al inicio del array
parrafo5.innerHTML = fruits


let marcos = ["melon", "watermelon"]
let parrafo6 = document.getElementById('parrafo6');

let union = fruits.concat("MAS, " + marcos);
parrafo6.innerHTML = union



