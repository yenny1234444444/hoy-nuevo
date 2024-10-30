function agregarAlCarrito(nombre, precio) {
    const carrito = document.getElementById('lista-carrito');
    const totalElemento = document.getElementById('total');

    const li = document.createElement('li');
    li.textContent = `${nombre}: $${precio.toFixed(2)}`;
    
    carrito.appendChild(li);

    let total = parseFloat(totalElemento.textContent.replace('Total: $', ''));
    total += precio;
    totalElemento.textContent = `Total: $${total.toFixed(2)}`;
}

function vaciarCarrito() {
    const carrito = document.getElementById('lista-carrito');
    const totalElemento = document.getElementById('total');

    while (carrito.firstChild) {
        carrito.removeChild(carrito.firstChild);
    }

    totalElemento.textContent = 'Total: $0.00';
}

function enviarContacto(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    alert(`Mensaje enviado de ${nombre} (${email}): ${mensaje}`);
    document.getElementById('formContacto').reset();
}
