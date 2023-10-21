
let carrito = []

// Función para agregar un producto al carrito
function agregarAlCarrito(producto, cantidad, precio) {
    const item = {
        producto,
        cantidad,
        precio
    };
    carrito.push(item);
}
// Función para calcular el precio total del carrito
function calcularPrecioTotal() {
    let total = 0;
    for (const item of carrito) {
        total += item.cantidad * item.precio;
    }
    return total;
}

const precioTotal = calcularPrecioTotal();

// Función para mostrar el contenido del carrito
function mostrarCarrito() {
    for (const item of carrito) {
        console.log(`Producto: ${item.producto}, Cantidad: ${item.cantidad}, Precio: $${item.precio.toFixed(2)}`);
    }
    console.log(`Precio Total: $${calcularPrecioTotal().toFixed(2)}`);
}

mostrarCarrito();

document.addEventListener("DOMContentLoaded", function () {
    const productos = document.querySelectorAll("#productos li");
    const carrito = document.querySelector("#carrito");
    const total = document.querySelector("#total");

    productos.forEach(function (producto) {
        producto.addEventListener("click", function () {
            const nombre = producto.getAttribute("data-nombre");
            const precio = parseInt(producto.getAttribute("data-precio"));
            const itemCarrito = document.createElement("li");
            itemCarrito.textContent = `${nombre} - $${precio}`;
            carrito.appendChild(itemCarrito);
            const precioTotal = parseInt(total.textContent) + precio;
            total.textContent = precioTotal;
        });
    });
});


renderizarProductos(productos, carrito)

let buscador = document.getElementById("buscador")

let botonBuscar = document.getElementById("buscar")
botonBuscar.addEventListener("click", () => filtrarYRenderizar(productos))

function filtrarYRenderizar(productos) {
    let productosFiltrados = productos.filter(producto => producto.nombre.includes(buscador.value))
    renderizarProductos(productosFiltrados)
}

function renderizarProductos(productos, carrito) {
    let contenedor = document.getElementById("contenedorProductos")
    contenedor.innerHTML = ""

    productos.forEach(producto => {
    let tarjeta = document.createElement("div")
    tarjeta.className = "tarjeta"

    tarjeta.innerHTML = `
    <h3>${producto.nombre}</h3>
    <img class=imagenProducto src=./images/${producto.rutaImagen} />
    <p>$${producto.precio}</p>
    <button id=${producto.id}>Agregar al carrito</button>
    `

    contenedor.appendChild(tarjeta)

    let botonAgregarAlCarrito = document.getElementById(producto.id)
    botonAgregarAlCarrito.addEventListener("click", (e) => agregarProductoAlCarrito(productos, carrito, e))
    })
}

function agregarProductoAlCarrito(productos, carrito, e) {
    let productoBuscado = productos.find(producto => producto.id === Number(e.target.id))
    let productoEnCarrito = carrito.find(producto => producto.id === productoBuscado.id)
    if (productoBuscado.stock > 0) {
    if (productoEnCarrito) {
    productoEnCarrito.unidades++
      productoEnCarrito.subtotal = productoEnCarrito.unidades * productoEnCarrito.precioUnitario
    } else {
    carrito.push({
        id: productoBuscado.id,
        nombre: productoBuscado.nombre,
        precioUnitario: productoBuscado.precio,
        unidades: 1,
        subtotal: productoBuscado.precio
    })
    }
    productoBuscado.stock--
    } else {
    alert("No hay más stock del producto seleccionado")
    }
renderizarCarrito(carrito)
}

function renderizarCarrito(productosEnCarrito) {
    let divCarrito = document.getElementById("carrito")
    divCarrito.innerHTML = ""
    productosEnCarrito.forEach(producto => {
    let tarjProdCarrito = document.createElement("div")
    tarjProdCarrito.innerHTML = `
    <p>${producto.nombre}</p>
    <p>$${producto.precioUnitario}</p>
    <p>${producto.unidades}</p>
    <p>$${producto.subtotal}</p>
    `
    divCarrito.appendChild(tarjProdCarrito)
    })
}

let botonVerOcultar = document.getElementById("verOcultar")
botonVerOcultar.addEventListener("click", verOcultarCarrito)

function verOcultarCarrito() {
    let carrito = document.getElementById("carrito")
    let contenedorProductos = document.getElementById("contenedorProductos")
    carrito.classList.toggle("oculta")
    contenedorProductos.classList.toggle("oculta")
}





buscador.addEventListener("input", buscarValorInput)
buscador.addEventListener("change", () => prueba("change"))

function buscarValorInput() {
    console.log(buscador.value)
}

let cajita = document.getElementById("cajita")
cajita.addEventListener("mousedown", () => prueba("mousedown"))
cajita.addEventListener("mouseover", () => prueba("mouseover"))
cajita.addEventListener("mousemove", () => prueba("mousemove"))
cajita.addEventListener("mouseout", () => prueba("mouseout"))

document.addEventListener("DOMContentLoaded", function() {
    const productos = document.querySelectorAll("#productos li");
    const carrito = document.querySelector("#carrito");
    const total = document.querySelector("#total");

    productos.forEach(function(producto) {
        producto.addEventListener("click", function() {
            const nombre = producto.getAttribute("data-nombre");
            const precio = parseInt(producto.getAttribute("data-precio"));

            // Crea un nuevo elemento para el carrito
            const itemCarrito = document.createElement("li");
            itemCarrito.textContent = `${nombre} - $${precio}`;
            carrito.appendChild(itemCarrito);

            // Actualiza el precio total
            const precioTotal = parseInt(total.textContent) + precio;
            total.textContent = precioTotal;
        });
    });
});
