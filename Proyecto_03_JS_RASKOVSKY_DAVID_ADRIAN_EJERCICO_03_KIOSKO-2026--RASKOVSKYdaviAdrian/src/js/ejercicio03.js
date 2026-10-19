
import { mostrarDatos } from '../services/servicesEj03.js';

// Constantes para los elementos del DOM
const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado'); // Div para mostrar resultados
const inputProducto = document.querySelector('#idProd'); // Campo para ingresar el producto

const listaProductos = document.querySelector('#listaProductos');
// ARREGLO PARA MOSTRAR LOS PRODUCOTOS 
const productos = [
    { nombre: "Coca", precio: 1000 },
    { nombre: "Pan", precio: 500 },
    { nombre: "Leche", precio: 1200 }
];
mostrarListaProductos(); // mostrar la lista
function guardarDatos(producto, precioSinIVA, precioConIVA) {
    return [producto, precioSinIVA, precioConIVA]; // Retorna un arreglo con los datos
}
function mostrarListaProductos(){
         const nombresProductos = productos.map(p => p.nombre); 
         mostrarDatos(nombresProductos, listaProductos); 
} // disponibles 

//****************hasta  aqui muestr la lista de disponibles *************** */
formulario.addEventListener('submit', (evento) => {
    evento.preventDefault(); 

    const productoIngresado = inputProducto.value.trim(); // Obtener el valor ingresado y eliminar espacios
    const producto = productos.find(p => p.nombre.toLowerCase() === productoIngresado.toLowerCase()); // Buscar el producto

    if (producto) {
        const precioSinIVA = producto.precio;
        const precioConIVA = (precioSinIVA * 1.21).toFixed(2); // Calcular precio con IVA

        // Llamar a la función para guardar los datos y obtener el arreglo
        const arrayDatos = guardarDatos(producto.nombre, precioSinIVA, precioConIVA);
        
        // Llama a la función para mostrar los resultados
        mostrarDatos(arrayDatos, resultado); // Pasar el arreglo y el contenedor para mostrar
    } else {
        resultado.innerHTML = 'Producto no encontrado. Por favor, ingrese un producto válido.'; // mensaje si no lo
    }

});
