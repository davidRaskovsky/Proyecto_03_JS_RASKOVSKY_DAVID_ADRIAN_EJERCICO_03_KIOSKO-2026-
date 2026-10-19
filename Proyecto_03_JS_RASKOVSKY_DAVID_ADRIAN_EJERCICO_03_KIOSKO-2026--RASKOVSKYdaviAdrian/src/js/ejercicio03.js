
import { mostrarDatos } from "../services/servicesEj03.js";

// constantes para los elementos del DOM
const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado'); 
const inputProducto = document.querySelector('#idProd');

const listaProductos = document.querySelector('#listaProductos');
// ARREGLO DE PRODUCOTOS 
const productos = [
    { nombre: "Coca", precio: 1000 },
    { nombre: "Pan", precio: 500 },
    { nombre: "Leche", precio: 1200 }
];
mostrarListaProductos(); //llama la lista de productos disponibles y vuelve 
function guardarDatos(producto, precioSinIVA, precioConIVA) {
    return [producto, `$${precioSinIVA} (PRECIO BRUTO)`, `$${precioConIVA} (PRECIO CON IVA)`]; 
}
function mostrarListaProductos(){
         const nombresProductos = productos.map(p => p.nombre); 
         mostrarDatos(nombresProductos, listaProductos);//muestra los nombres delos productos disp 
} 

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault(); 
   
    const productoIngresado = inputProducto.value.trim(); 
    const producto = productos.find(p => p.nombre.toLowerCase() === productoIngresado.toLowerCase()); 
    if (producto) {
        const precioSinIVA = producto.precio;
        const precioConIVA = (precioSinIVA * 1.21).toFixed(2); 

        
        const arrayDatos = guardarDatos(producto.nombre, precioSinIVA, precioConIVA);
        
        mostrarDatos(arrayDatos, resultado); 
    } else {
        resultado.innerHTML = "'Producto no encontrado', 'INGRESE UN PRODUCTO DISPONIBLE...'"; 
    }

});
