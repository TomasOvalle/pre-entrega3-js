const productos = [
    { id: 1, nombre: 'Bakemonogatari 01', imagen: '📕', precio: 12990, categoria: 'Mangas' },
    { id: 2, nombre: 'Bakemonogatari 03', imagen: '📕', precio: 12990, categoria: 'Mangas' },
    { id: 3, nombre: 'Bakemonogatari 04', imagen: '📕', precio: 12990, categoria: 'Mangas' },
    { id: 4, nombre: 'Bakemonogatari 05', imagen: '📕', precio: 12990, categoria: 'Mangas' },
    { id: 5, nombre: 'Bakemonogatari 06', imagen: '📕', precio: 12990, categoria: 'Mangas' },
    { id: 6, nombre: 'Bakemonogatari 14', imagen: '📕', precio: 12990, categoria: 'Mangas' },
    { id: 7, nombre: 'Slam Dunk 04', imagen: '📕', precio: 13990, categoria: 'Mangas' },  
    { id: 8, nombre: 'Slam Dunk 07', imagen: '📕', precio: 13990, categoria: 'Mangas' },
    { id: 9, nombre: 'Slam Dunk 15', imagen: '📕', precio: 13990, categoria: 'Mangas' },
    { id: 10, nombre: 'Vagabond 01', imagen: '📕', precio: 9490, categoria: 'Mangas' },
]

const otrosProductos = [
    { id: 11, nombre: '5 centímetros por segundo', imagen: '📖', precio: 25490, categoria: 'Novelas' },
    { id: 12, nombre: 'El descontrol de Haruhi Suzumiya', imagen: '📖', precio: 12490, categoria: 'Novelas' },
    { id: 13, nombre: 'El jardín de las palabras', imagen: '📖', precio: 32990, categoria: 'Novelas' },
    { id: 14, nombre: 'El lugar que nos prometimos', imagen: '📖', precio: 32990, categoria: 'Novelas' },
    { id: 15, nombre: 'Fireworks', imagen: '📖', precio: 29990, categoria: 'Novelas' },
    { id: 16, nombre: 'Goblin Slayer 01', imagen: '📖', precio: 17490, categoria: 'Novelas' },
    { id: 17, nombre: 'Goblin Slayer 02', imagen: '📖', precio: 17490, categoria: 'Novelas' },
    { id: 18, nombre: 'Goblin Slayer 03', imagen: '📖', precio: 17490, categoria: 'Novelas' },
    { id: 19, nombre: 'Overlord 01: El Rey no Muerto', imagen: '📖', precio: 23990, categoria: 'Novelas' },
    { id: 20, nombre: 'Overlord 02: El Guerrero Oscuro', imagen: '📖', precio: 23990, categoria: 'Novelas' },
]

productos.push(...otrosProductos)

const carrito = recuperarCarrito()

function recuperarCarrito() {
    return JSON.parse(localStorage.getItem("miCarrito")) || []
}

function guardarEnLS() {
    localStorage.setItem("miCarrito", JSON.stringify(carrito))
}

function recorrerCiclo() {
    for (let i = 0; i < 21; i++) {
        console.log("Iteración nro.", i)
    }
}

function habilitarBoton() {
    const carritoDeCompras = []

    carritoDeCompras.length !== 0 && button.removeAttribute("disabled")
}
