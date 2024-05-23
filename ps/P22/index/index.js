let listaProductos = document.querySelector("#listaProductos");
let categories = document.querySelector("#categories");



const URLproducts = "https://fakestoreapi.com/products/"

fetch(URLproducts)
    .then(res=>res.json())
    .then(productosObtenidos=>{
        console.log(productosObtenidos);
        listaProductos.innerHTML = "";
        productosObtenidos.forEach((producto,indice) =>{
            listaProductos.innerHTML += `
            <div class="col-12 py-2 col-md-4 text-center"> 
                <div class="card">
                <img src="${producto.image}" class="imagenProducto card-img-top p-3"></img> 

                    <div class="card-body">
                        <h4>${producto.title.slice(0,20)}</h4>
                        <p class="card-text"> ${producto.description.slice(0,100)}"</p>
                        <p class="card-text text-danger"> $${producto.price}</p>
                        <a href="#" class= "btn btn-success w-100"> Comprar </a>
                    </div> 
                </div>
            </div>  
            `;

        });

    });

const URLcategories = "https://fakestoreapi.com/products/categories/"

fetch(URLcategories)
.then(res=>res.json())
.then(productosCategorias=>{
    console.log(productosCategorias);
    categories.innerHTML = "";
    productosCategorias.forEach((producto,indice) =>{
        categories.innerHTML += `
        <li> <a class="dropdown-item" href="#">${producto}</a> </li>
        `;

    });

});


