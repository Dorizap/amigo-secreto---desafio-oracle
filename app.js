let amigos = [];

function agregarAmigo() {
    let datoUsuario = document.getElementById('amigo').value.trim();
    if (datoUsuario === '') {
        alert('Por favor inserta un nombre');
        return; 
    } else {
        amigos.push(datoUsuario);
    }

    console.log(datoUsuario);
    console.log(amigos);
    vaciarBox();
}

function vaciarBox() {
    document.getElementById('amigo').value = "";
}
