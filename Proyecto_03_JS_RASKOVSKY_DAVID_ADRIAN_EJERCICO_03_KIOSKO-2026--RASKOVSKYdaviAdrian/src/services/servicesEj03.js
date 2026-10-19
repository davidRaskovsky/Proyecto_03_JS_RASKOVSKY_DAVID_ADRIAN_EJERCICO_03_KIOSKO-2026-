
export const mostrarDatos = (lista, contenedor) => {
    contenedor.innerHTML = lista.map((item, index) => 
        `<li>${index + 1}: <strong>${item}</strong></li>`
    ).join(" ");
};

