//paso 1 de trello: crear variable de lista
let amigos = [];//variable para la lista

//paso 2 de trello: Implementa una función para agregar amigos
function agregarAmigo() {
    let datoUsuario = document.getElementById('amigo').value.trim();//toma el dato ingresado
    if (datoUsuario === '') { //si el dato ingresado es igual a *espacio vacio*
        alert('Por favor inserta un nombre');//se agrega una alerta donde debe agregar el nombre
        return; //lo para si no hay ningun dato ingresado
    } else {
        amigos.push(datoUsuario);//se agrega el dato a la lista 
    }

    console.log(datoUsuario);//esto me sirve para ver todo en la consola
    console.log(amigos);
    vaciarBox();//cuando se cumple la funcion se queda en blanco el cuadro de texto para ingresar otro nombre 
}

function vaciarBox() { //esto es lo mismo de antes, es la funcion entera para que el espacio qede en bkanco
    document.getElementById('amigo').value = ""; // del input con id amigo deja un valor igual a *nada* o *vacio*
}
//paso 3 de trello: Implementa una función para actualizar la lista de amigos
function mostrarLista() {
    let listaHTML = document.getElementById('listaAmigos'); //para traer del html el ul e integrarlo con mi lista
    listaHTML.innerHTML = "";//recorrer el ul, que no se repita nada
    
}
