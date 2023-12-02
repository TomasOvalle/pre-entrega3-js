const tableBody = document.querySelector("tbody")

function retornarFilaHTML(producto) {
    return `<tr>
                <td>${producto.imagen}</td>
                <td>${producto.nombre}</td>
                <td>${producto.precio}</td>
                <td id="${producto.id}" class="eliminar-producto">⛔️</td>
            </tr>`
}

function activarBotonesEliminar() {
    const botonesEliminar = document.querySelectorAll("td.eliminar-producto")

    botonesEliminar.forEach((botonEliminar) => {
        botonEliminar.addEventListener("click", () => {
            const idx = carrito.findIndex((producto) => producto.id === parseInt(botonEliminar.id)) 
            carrito.splice(idx, 1)  
            guardarEnLS()
            cargarProductos()       
        })
    })
}

function cargarProductos() {
    if (carrito.length > 0) {
        tableBody.innerHTML = ""

        carrito.forEach((producto) => tableBody.innerHTML += retornarFilaHTML(producto))
        activarBotonesEliminar()
    }
}

cargarProductos()      