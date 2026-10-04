import { mostrarDatos } from '../services/servicesEj03.js'; // Importar la función mostrarDatos

// Constantes para los elementos del DOM
const formulario = document.querySelector('#formulario'); // Formulario
const resultado = document.querySelector('#resultado'); // Div para mostrar resultados
const inputProducto = document.querySelector('#idProd'); // Campo de entrada para el nombre del producto

// Función para guardar el resultado y devolver un arreglo
function guardarDatos(producto, precioSinIVA, precioConIVA) {
    return [producto, precioSinIVA, precioConIVA]; // Retorna un arreglo con los datos
}

// Evento para el envío del formulario
formulario.addEventListener('submit', (evento) => {
    evento.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

    const productoIngresado = inputProducto.value.trim(); // Obtener el valor ingresado y eliminar espacios
    const producto = productos.find(p => p.nombre.toLowerCase() === productoIngresado.toLowerCase()); // Buscar el producto

    if (producto) {
        const precioSinIVA = producto.precio;
        const precioConIVA = (precioSinIVA * 1.21).toFixed(2); // Calcular precio con IVA

        // Llamar a la función para guardar los datos y obtener el arreglo
        const arrayDatos = guardarDatos(producto.nombre, precioSinIVA, precioConIVA);
        
        // Llamar a la función para mostrar los resultados
        mostrarDatos(arrayDatos, resultado); // Pasar el arreglo y el contenedor para mostrar
    } else {
        resultado.textContent = 'Producto no encontrado. Por favor, ingrese un producto válido.'; // Mensaje de error
    }
});