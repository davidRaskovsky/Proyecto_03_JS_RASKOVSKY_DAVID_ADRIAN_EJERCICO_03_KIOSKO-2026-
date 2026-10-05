const productos = [
    { nombre: "Coca", precio: 1000 },
    { nombre: "Pan", precio: 500 },
    { nombre: "Leche", precio: 1200 }
];
export const mostrarDatos = (lista, contenedor) => {
    contenedor.innerHTML = lista.map((item, index) => 
        `<li>${index + 1}: <strong>${item}</strong></li>`
    ).join(" ");
};

