let listaProductos = document.querySelector("#listaProductos");
let categories = document.querySelector("#categories");
let carritoCompra = document.querySelector("#carritoCompra");
let carrito = [];

const URLproducts = "https://fakestoreapi.com/products/";

fetch(URLproducts)
    .then(res => res.json())
    .then(productosObtenidos => {
        console.log(productosObtenidos);
        listaProductos.innerHTML = "";
        productosObtenidos.forEach((producto, indice) => {
            let productoHTML = `
            <div class="col-4 py-2 col-md-3 text-center"> 
                <div class="card">
                    <img src="${producto.image}" class="imagenProducto card-img-top p-3"></img> 
                    <div class="card-body">
                        <h4>${producto.title.slice(0, 15)}</h4>
                        <p class="card-text">${producto.description.slice(0, 90)}</p>
                        <p class="card-text text-danger">$${producto.price}</p>
                        <button class="btn btn-success w-100" onclick="agregarAlCarrito(${indice})">Comprar</button>
                    </div> 
                </div>
            </div>`;
            listaProductos.innerHTML += productoHTML;
        });
    });

const URLcategories = "https://fakestoreapi.com/products/categories";

fetch(URLcategories)
    .then(res => res.json())
    .then(productosCategorias => {
        console.log(productosCategorias);
        categories.innerHTML = "";
        productosCategorias.forEach(categoria => {
            categories.innerHTML += `
            <li><a class="dropdown-item" href="#">${categoria.toUpperCase()}</a></li>`;
        });
    });

function agregarAlCarrito(indice) {
    fetch(URLproducts)
        .then(res => res.json())
        .then(productosObtenidos => {
            let producto = productosObtenidos[indice];
            carrito.push(producto);
            actualizarCarrito();
            alert("A product was added to your cart");
        });
}

function actualizarCarrito() {
    carritoCompra.innerHTML = "";
    
        
        if(carrito.length === 0) {
            mensajeCarrito();
        }
        else {
            carrito.forEach((producto, indice) => {
            carritoCompra.innerHTML += `
            <div class="carrito-item">
                <div class="row text-center border">
                    <div class="col-12 pt-3">
                        <h5>${producto.title}</h5>
                    </div>
                    <div class="col-3 py-5 text-danger">
                        <p>$${producto.price}</p>
                    </div>
                    <div class="col-5">
                        <img src="${producto.image}" class="card-img-top p-3"></img> 
                    </div>
                    <div class="col-4 py-5">
                        <button class="btn btn-danger form-control" id="borrarTarea" onClick=borrarTareaa(this,${indice}) > <i class="bi bi-trash3"></i> Delete</button>
                </div>
                
            </div>`;
            }
        )};
}

let borrarTarea = document.querySelector("#borrarTarea");

borrarTareaa = (boton,indice) =>{

    if( confirm("Are you sure of delete this product?")){
            boton.parentElement.parentElement.remove();
            tareas.splice(indice, 1);
            mostrarTareas();
        }   
        else{
            alert("orale va")
        }
}

mensajeCarrito = ()=>{

        carritoCompra.innerHTML += `
            <p> The shopping cart is empty </p>
        `;
    }
document.addEventListener('DOMContentLoaded', mensajeCarrito);




