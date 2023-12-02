const btnCarrito = document.querySelector("img#logo.logo")
const inputBuscar = document.querySelector("input#inputBuscar")
const divContenedor = document.querySelector("div.container#divcontenedor")
const productosEnCarrito = document.querySelector("span#productosEnCarrito")

btnCarrito.addEventListener("click", () => {
    carrito.length > 0 ? location.href = "checkout.html" : alert("⛔️ No hay productos para comprar.")
})

btnCarrito.addEventListener("mousemove", () => {
    btnCarrito.title = carrito.length > 0 ? `${carrito.length} producto(s) en carrito` : "Sin productos en carrito"
})

inputBuscar.addEventListener("search", ()=> {
    let param = inputBuscar.value.trim().toLowerCase()
    let productosResultantes = productos.filter((producto)=> producto.nombre.toLowerCase().includes(param))
    cargarProductos(productosResultantes)
})

function armarCardHTML({imagen, nombre, precio, id}) {
    return `<div class="div-card">
                <div class="imagen">${imagen}</div>
                <div class="producto">${nombre}</div>
                <div class="importe">$ ${precio}</div>
                <button id="${id}" class="add-to-cart">Agregar</button>
            </div>`
}

function armarCardError() {
    return `<div class="div-card-error">
                <div class="imagen-error">🤦🏻‍♂️</div>
                <div class="leyenda-error">No pudimos cargar los productos</div>
                <div class="leyenda-intento">Intenta nuevamente en unos segundos.</div>
            </div>`
}

function agregarClickEnBtnCards() {
    const botonesAgregar = document.querySelectorAll("button.add-to-cart")
    if (botonesAgregar.length > 0) {
        botonesAgregar.forEach((boton)=> {
            boton.addEventListener("click", ()=> {
                let productoSeleccionado = productos.find((producto)=> producto.id === parseInt(boton.id))
                carrito.push(productoSeleccionado)
                guardarEnLS()
            })
        })
    }
    
}

function cargarProductos(array) {
    divContenedor.innerHTML = ""

    if (array.length > 0) {
        array.forEach((producto) => divContenedor.innerHTML += armarCardHTML(producto))
        agregarClickEnBtnCards()
    } else {
        divContenedor.innerHTML = armarCardError()
    }
}

cargarProductos(productos)


