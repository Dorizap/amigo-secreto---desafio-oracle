let listaIngreso = [];

function agregarAmigo() {
    let datoUsuario = document.getElementById('amigo').value.trim();

    if (datoUsuario == "") {
        alert("Vuelve a ingresar un nombre:)");
        return; 
    }

    listaIngreso.push(datoUsuario);
    console.log(listaIngreso);
}
