const formulario = document.querySelector('#formulario'); 
const resultado = document.querySelector('#resultado'); // muestra los resultados en el div del html
const inputProducto = document.querySelector('#idProd'); // variable para el id  del producto

// Función para guardar el resultado y devolver un arreglo
function guardarDatos(producto, precioSinIVA, precioConIVA) {
    return [producto, precioSinIVA, precioConIVA]; // Retorna un arreglo con los datos
}